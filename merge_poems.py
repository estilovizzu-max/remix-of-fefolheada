
import re
import os

def parse_html_poems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Get all poemsData script blocks
    # Looking for 'fe-esperanca': [ ... ]
    # We match 'key': [ (everything inside until a comma-followed-by-newline or just newline) ]
    blocks_raw = re.findall(r"'([^']+)':\s*\[(.*?)\n\s*\]", content, re.DOTALL)
    
    parsed_data = {}
    for block_name, block_content in blocks_raw:
        # Match poems { id: '...', title: '...', text: `...` }
        # Note the backtick for multi-line text.
        # This regex is more permissive to handle optional commas and fields.
        poems = re.findall(r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*text:\s*`(.*?)`.*?\s*\}", block_content, re.DOTALL)
        parsed_data[block_name] = []
        for pid, title, text in poems:
            parsed_data[block_name].append({
                'id': pid,
                'title': title,
                'text': text.strip()
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
    
    # Use a more robust way to parse the TS object
    block_pattern = r"'bloco-\d+': \["
    block_keys = re.findall(r"'bloco-\d+'", data_str)
    block_contents = re.split(block_pattern, data_str)[1:] # Skip the first empty part
    
    parsed_data = {}
    for i, block_key in enumerate(block_keys):
        key = block_key.strip("'")
        content_part = block_contents[i]
        
        # Find poems within this block
        # A poem starts with { and ends with } followed by , or ]
        # Updated regex to handle multi-line text and fields properly
        poem_matches = re.findall(r"\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*text:\s*`(.*?)`(.*?)\n\s*\}", content_part, re.DOTALL)
        
        parsed_data[key] = []
        for pid, title, text, extra in poem_matches:
            poem = {
                'id': pid,
                'title': title,
                'text': text.strip()
            }
            # Reflection (handles both single and double quotes)
            ref_match = re.search(r"reflection:\s*'((?:\\'|[^'])+)'", extra, re.DOTALL)
            if ref_match: poem['reflection'] = ref_match.group(1).replace("\\'", "'").strip()
            
            # Inspiration
            ins_match = re.search(r"inspiration:\s*'((?:\\'|[^'])+)'", extra, re.DOTALL)
            if ins_match: poem['inspiration'] = ins_match.group(1).replace("\\'", "'").strip()
            
            parsed_data[key].append(poem)
            
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

    # Use TEXT as the uniqueness key to find real new poems
    current_texts = set()
    for block in current_ts_poems.values():
        for poem in block:
            # Clean text for comparison (remove whitespace, common separators)
            clean_text = re.sub(r'\s+', ' ', poem['text']).strip().lower()
            current_texts.add(clean_text)

    merged_count = 0
    for orig_cat, poems in original_html_poems.items():
        target_block = mapping.get(orig_cat, 'bloco-1')
        if target_block not in current_ts_poems:
            current_ts_poems[target_block] = []
        
        for poem in poems:
            clean_text = re.sub(r'\s+', ' ', poem['text']).strip().lower()
            if clean_text not in current_texts:
                # Add to TS poems. Ensure ID is unique in TS.
                new_id = f"p{target_block[-1]}-{len(current_ts_poems[target_block]) + 1}-new"
                poem['id'] = new_id
                current_ts_poems[target_block].append(poem)
                current_texts.add(clean_text)
                merged_count += 1
                
    print(f"Merged {merged_count} new poems.")

    # Re-generate the poemsData object string
    new_poems_data_str = "export const poemsData: PoemsData = {\n"
    for block_id in ['bloco-1', 'bloco-2', 'bloco-3', 'bloco-4', 'bloco-5', 'bloco-6']:
        poems = current_ts_poems.get(block_id, [])
        new_poems_data_str += f"  '{block_id}': [\n"
        for i, p in enumerate(poems):
            new_poems_data_str += "    {\n"
            new_poems_data_str += f"      id: '{p['id']}',\n"
            # Title might contain single quotes
            safe_title = p['title'].replace("'", "\\'")
            new_poems_data_str += f"      title: '{safe_title}',\n"
            safe_text = p['text'].replace('`', '\\`')
            new_poems_data_str += f"      text: `{safe_text}`"
            
            if 'reflection' in p:
                safe_ref = p['reflection'].replace("'", "\\'")
                new_poems_data_str += f",\n      reflection: '{safe_ref}'"
            if 'inspiration' in p:
                safe_ins = p['inspiration'].replace("'", "\\'")
                new_poems_data_str += f",\n      inspiration: '{safe_ins}'"
            
            new_poems_data_str += "\n    }"
            if i < len(poems) - 1:
                new_poems_data_str += ","
            new_poems_data_str += "\n"
        new_poems_data_str += "  ]"
        if block_id != 'bloco-6':
            new_poems_data_str += ","
        new_poems_data_str += "\n"
    new_poems_data_str += "};"

    pattern = r'export const poemsData: PoemsData = \{.*?\n\};'
    final_content = re.sub(pattern, new_poems_data_str, original_full_ts, flags=re.DOTALL)
    
    with open('src/data/poems.ts', 'w', encoding='utf-8') as f:
        f.write(final_content)

if __name__ == "__main__":
    merge()
