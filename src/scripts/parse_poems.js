const fs = require('fs');

const content = fs.readFileSync('tool-results://fetched-websites/docs.google.com_document_d_1tmOrX0EBuQPrYYX3n-SM38.md', 'utf8');

const blocks = {};
const blockTitles = {
  'bloco-1': 'O Despertar da Identidade',
  'bloco-2': 'A Decisão e o Combate Espiritual',
  'bloco-3': 'Cura e Restauração',
  'bloco-4': 'O Poder do Espírito Santo',
  'bloco-5': 'Esperança, Adoração e Eternidade',
  'bloco-6': 'Oficina do Poeta (Curso Prático)'
};

let currentBlock = null;
let currentPoem = null;
let state = 'TEXT'; // TEXT, REFLECTION, INSPIRATION

const lines = content.split('\n');

lines.forEach(line => {
  const trimmed = line.trim();
  
  // Detect Block
  const blockMatch = trimmed.match(/BLOCO\s+(\d+)/i);
  if (blockMatch) {
    const blockNum = blockMatch[1];
    currentBlock = `bloco-${blockNum}`;
    blocks[currentBlock] = [];
    return;
  }

  if (!currentBlock) return;

  // Detect Poem Title
  const poemMatch = trimmed.match(/🔹\s+\d+\.\s+(.+)/);
  if (poemMatch) {
    if (currentPoem) {
      blocks[currentBlock].push(currentPoem);
    }
    currentPoem = {
      id: `${currentBlock}-p${blocks[currentBlock].length + 1}`,
      title: poemMatch[1].replace(/\(NOVA\)/g, '').trim(),
      text: '',
      reflection: '',
      inspiration: ''
    };
    state = 'TEXT';
    return;
  }

  // Detect Reflection
  if (trimmed.includes('🔑 REFLEXÃO')) {
    state = 'REFLECTION';
    return;
  }

  // Detect Inspiration
  if (trimmed.includes('✍️ ESCREVA SUA POESIA')) {
    state = 'INSPIRATION';
    return;
  }

  if (currentPoem) {
    if (state === 'TEXT') {
      if (trimmed.startsWith('###')) {
        currentPoem.text += trimmed.replace(/^###\s*/, '') + '\n';
      } else if (trimmed && !trimmed.startsWith('![')) {
        currentPoem.text += trimmed + '\n';
      }
    } else if (state === 'REFLECTION') {
      if (trimmed.startsWith('###')) {
        currentPoem.reflection += trimmed.replace(/^###\s*/, '') + '\n';
      } else if (trimmed) {
        currentPoem.reflection += trimmed + '\n';
      }
    } else if (state === 'INSPIRATION') {
      if (trimmed.startsWith('###')) {
        currentPoem.inspiration += trimmed.replace(/^###\s*/, '') + '\n';
      } else if (trimmed) {
        currentPoem.inspiration += trimmed + '\n';
      }
    }
  }
});

if (currentPoem) {
  blocks[currentBlock].push(currentPoem);
}

// Post-process to clean up
Object.keys(blocks).forEach(key => {
  blocks[key] = blocks[key].map(p => ({
    ...p,
    text: p.text.trim(),
    reflection: p.reflection.trim(),
    inspiration: p.inspiration.trim()
  }));
});

console.log(JSON.stringify({ blockTitles, poemsData: blocks }, null, 2));
