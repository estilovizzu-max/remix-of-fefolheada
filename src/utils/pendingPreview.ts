// Gera prévia curta determinística para poemas sem reflexão.
// Espelha /tmp/previews.py usado na geração do PDF e do EPUB.

type BlockKey =
  | 'bloco-1' | 'bloco-2' | 'bloco-3'
  | 'bloco-4' | 'bloco-5' | 'bloco-6';

const BLOCK_HINTS: Record<BlockKey, string[]> = {
  'bloco-1': [
    'Reconheça em {kw} o rosto que o Pai já vê em você.',
    'Deixe {kw} despertar a memória de quem você é aos olhos do Céu.',
    'Uma meditação sobre identidade: leia {kw} como quem se recorda do próprio nome batismal.',
  ],
  'bloco-2': [
    'Traga {kw} à oração como escudo diante das batalhas silenciosas.',
    'Que {kw} seja a decisão que hoje você renova diante do Senhor.',
    'Uma meditação sobre coragem: use {kw} para nomear o combate que precisa vencer.',
  ],
  'bloco-3': [
    'Permita que {kw} toque a ferida que ainda não teve nome.',
    'Uma prece por cura: deixe {kw} descer até onde a dor ainda mora.',
    'Reze {kw} como bálsamo sobre o que precisa ser restaurado em você.',
  ],
  'bloco-4': [
    'Peça ao Espírito que faça de {kw} sopro novo em sua semana.',
    'Uma meditação de comunhão: partilhe {kw} com quem caminha ao seu lado.',
    'Que {kw} seja fogo manso a acender de novo a sua fé.',
  ],
  'bloco-5': [
    'Escute em {kw} o chamado a servir onde hoje ninguém quer ir.',
    'Uma meditação sobre missão: deixe {kw} desenhar o próximo passo do seu sim.',
    'Que {kw} lembre você de que a colheita continua pedindo mãos.',
  ],
  'bloco-6': [
    'Levante {kw} como âncora de esperança para o que ainda está por vir.',
    'Uma meditação sobre eternidade: leia {kw} como quem já vê a manhã depois da noite.',
    'Que {kw} sustente sua fé até a promessa se cumprir.',
  ],
};

const STOP = new Set([
  'de','da','do','dos','das','a','o','e','em','um','uma','no','na','nos','nas',
  'para','por','com','sem','ao','à','às','aos','que','meu','minha','seu','sua',
  'os','as','é','se','ou','mas','como','ser','ter','the','of','and',
]);

function keyword(title: string): string {
  const words = title.match(/[A-Za-zÀ-ÿ]{4,}/g) || [];
  for (const w of words) {
    if (!STOP.has(w.toLowerCase())) return `“${w}”`;
  }
  return 'estes versos';
}

export function pendingPreview(title: string, block: string, index: number): string {
  const templates = BLOCK_HINTS[block as BlockKey] ?? BLOCK_HINTS['bloco-1'];
  const tpl = templates[index % templates.length];
  return tpl.replace('{kw}', keyword(title));
}
