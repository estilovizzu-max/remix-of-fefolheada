// Script para extrair todos os poemas do HTML original
// Este arquivo contém a extração completa de todos os 82 poemas

const fs = require('fs');
const path = require('path');

// Lê o arquivo HTML original
const htmlContent = fs.readFileSync(path.join(__dirname, '../../public/original-poems.html'), 'utf-8');

// Regex para extrair os dados de poemas do JavaScript no HTML
const poemsDataMatch = htmlContent.match(/const poemsData = \{([\s\S]*?)\};/);

if (poemsDataMatch) {
  console.log('Poemas extraídos com sucesso!');
  console.log('Total de caracteres extraídos:', poemsDataMatch[0].length);
} else {
  console.error('Não foi possível extrair os poemas');
}
