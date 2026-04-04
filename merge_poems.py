
import re
import json

def parse_html_poems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the poemsData object from the script tag
    match = re.search(r'const poemsData = ({.*?});', content, re.DOTALL)
    if not match:
        return {}
    
    data_str = match.group(1)
    # Fix the JS object string to be valid JSON (mostly adding quotes to keys)
    # This is a bit hacky but might work for simple structures
    # Better: use a regex to extract individual poems
    
    blocks = re.findall(r"'([^']+)': \[(.*?)\]", data_str, re.DOTALL)
    parsed_data = {}
    for block_name, block_content in blocks:
        poems = re.findall(r"\{ id: '([^']+)', title: '([^']+)', text: `(.*?)`\}", block_content, re.DOTALL)
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
    match = re.search(r'export const poemsData: PoemsData = ({.*?});', content, re.DOTALL)
    if not match:
        return {}
    
    data_str = match.group(1)
    
    blocks = re.findall(r"'([^']+)': \[(.*?)\]", data_str, re.DOTALL)
    parsed_data = {}
    for block_name, block_content in blocks:
        # Match poems with optional reflection and inspiration
        poems = re.findall(r"\{.*?id: '([^']+)'.*?title: '([^']+)'.*?text: `(.*?)`(?:,.*?reflection: '(.*?)')?(?:,.*?inspiration: '(.*?)')?.*?\}", block_content, re.DOTALL)
        parsed_data[block_name] = []
        for pid, title, text, reflection, inspiration in poems:
            poem = {
                'id': pid,
                'title': title,
                'text': text.strip()
            }
            if reflection: poem['reflection'] = reflection.strip()
            if inspiration: poem['inspiration'] = inspiration.strip()
            parsed_data[block_name].append(poem)
    return parsed_data

original_html_poems = parse_html_poems('public/original-poems.html')
current_ts_poems = parse_ts_poems('src/data/poems.ts')

# Mapping of original categories to new blocks
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

# Collect all current titles to avoid duplicates
current_titles = set()
for block in current_ts_poems.values():
    for poem in block:
        current_titles.add(poem['title'].lower())

# Merge
new_poems_count = 0
for orig_cat, poems in original_html_poems.items():
    target_block = mapping.get(orig_cat, 'bloco-1')
    if target_block not in current_ts_poems:
        current_ts_poems[target_block] = []
    
    for poem in poems:
        if poem['title'].lower() not in current_titles:
            # Create a new unique ID
            new_id = f"{target_block.replace('bloco-', 'p')}-orig-{len(current_ts_poems[target_block]) + 1}"
            poem['id'] = new_id
            current_ts_poems[target_block].append(poem)
            current_titles.add(poem['title'].lower())
            new_poems_count += 1

print(f"Merged {new_poems_count} new poems.")

# Generate the new TS content
# (I'll do this carefully to preserve the structure)
# For now, I'll just print the counts to verify
for block, poems in current_ts_poems.items():
    print(f"{block}: {len(poems)} poems")

# I'll need to rewrite the file. Since it's large, I'll use a template approach.
