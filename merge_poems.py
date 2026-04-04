
import re
import os

def parse_html_poems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to get block contents
    # Use a more flexible regex for JavaScript-style objects
    # It finds 'fe-esperanca': [ { id: 'fe-1', ... } ]
    blocks_raw = re.findall(r"'([^']+)':\s*\[(.*?)\n\s*\]", content, re.DOTALL)
    
    parsed_data = {}
    for block_name, block_content in blocks_raw:
        # Match poems { id: '...', title: '...', text: `...` }
        # Note the backtick for multi-line text
        poems = re.findall(r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*text:\s*`(.*?)`\s*\}", block_content, re.DOTALL)
        parsed_data[block_name] = []
        for pid, title, text in poems:
            parsed_data[block_name].append({
                'id': pid,
                'title': title,
                'text': text.strip().replace('\\n', '\n')
            })
    return parsed_data

def parse_ts_poems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the poemsData object
    match = re.search(r'export const poemsData: PoemsData = (\{.*?\n\});', content, re.DOTALL)
    if not match:
        return None, None
    
    data_str = match.group(1)
    
    # Each block is like 'bloco-1': [ ... ]
    blocks_raw = re.findall(r"'([^']+)':\s*\[(.*?)\n\s*\]", data_str, re.DOTALL)
    
    parsed_data = {}
    for block_name, block_content in blocks_raw:
        # Use a simpler match for poems and manually split them if needed
        # Poems start with { and end with },
        poem_matches = re.findall(r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*text:\s*`(.*?)`(.*?)\s*\}", block_content, re.DOTALL)
        parsed_data[block_name] = []
        for pid, title, text, rest in poem_matches:
            poem = {
                'id': pid,
                'title': title,
                'text': text.strip()
            }
            # Reflection
            ref_match = re.search(r"reflection:\s*'([^']+)'", rest)
            if ref_match: poem['reflection'] = ref_match.group(1).strip()
            
            # Inspiration
            ins_match = re.search(r"inspiration:\s*'([^']+)'", rest)
            if ins_match: poem['inspiration'] = ins_match.group(1).strip()
            
            parsed_data[block_name].append(poem)
            
    return parsed_data, content

def merge():
    original_html_poems = parse_html_poems('public/original-poems.html')
    current_ts_poems, original_full_ts = parse_ts_poems('src/data/poems.ts')
    
    if not current_ts_poems:
        print("Could not parse TS poems")
        return

    mapping = {
        'fe-esperanca': 'bloco-5',
        'luta-perseveranca': 'bloco-2',
        'oracao-intimidade': 'bloco-4',
        'transformacao-renovacao': 'bloco-3',
        'amor-graca': 'bloco-5',
        'chamado-missao': 'bloco-1',
        'salvacao-vida-eterna': 'bloco-5',
        'paz-cura': 'bloco-3',
        'reflexoes-sabedoria': 'bloco-6'
    }

    current_titles = set()
    for block in current_ts_poems.values():
        for poem in block:
            current_titles.add(poem['title'].strip().lower())

    merged_count = 0
    for orig_cat, poems in original_html_poems.items():
        target_block = mapping.get(orig_cat, 'bloco-1')
        if target_block not in current_ts_poems:
            current_ts_poems[target_block] = []
        
        for poem in poems:
            if poem['title'].strip().lower() not in current_titles:
                # Add default reflection if missing, just for consistency
                # Actually, original poems don't have reflection, let's keep them as is
                current_ts_poems[target_block].append(poem)
                current_titles.add(poem['title'].strip().lower())
                merged_count += 1
                
    print(f"Merged {merged_count} new poems.")

    # Sort each block to maintain some order (optional, but let's keep it tidy)
    # Actually, order might matter, so let's keep them as added.

    # Re-generate the poemsData object string
    new_poems_data_str = "export const poemsData: PoemsData = {\n"
    for block_id in ['bloco-1', 'bloco-2', 'bloco-3', 'bloco-4', 'bloco-5', 'bloco-6']:
        poems = current_ts_poems.get(block_id, [])
        new_poems_data_str += f"  '{block_id}': [\n"
        for i, p in enumerate(poems):
            new_poems_data_str += "    {\n"
            new_poems_data_str += f"      id: '{p['id']}',\n"
            new_poems_data_str += f"      title: '{p['title']}',\n"
            new_poems_data_str += f"      text: `{p['text']}`"
            
            if 'reflection' in p:
                new_poems_data_str += f",\n      reflection: '{p['reflection']}'"
            if 'inspiration' in p:
                new_poems_data_str += f",\n      inspiration: '{p['inspiration']}'"
            
            new_poems_data_str += "\n    }"
            if i < len(poems) - 1:
                new_poems_data_str += ","
            new_poems_data_str += "\n"
        new_poems_data_str += "  ]"
        if block_id != 'bloco-6':
            new_poems_data_str += ","
        new_poems_data_str += "\n"
    new_poems_data_str += "};"

    # Replace in full file content
    pattern = r'export const poemsData: PoemsData = \{.*?\n\};'
    final_content = re.sub(pattern, new_poems_data_str, original_full_ts, flags=re.DOTALL)
    
    with open('src/data/poems.ts', 'w', encoding='utf-8') as f:
        f.write(final_content)

if __name__ == "__main__":
    merge()
