import { Poem, PoemsData } from './poems';

export const bookProject = {
  id: 'folheando-fe-v1',
  title: 'Folheando Fé',
  subtitle: 'Método PCH — Poesia que Cura o Homem',
  author: 'Evaldo Poeta',
  version: '2.0.0',
  status: 'finalizing' as const,
  lastUpdated: new Date().toISOString(),
  
  printSettings: {
    format: '14x21',
    margins: { top: 20, bottom: 20, inner: 25, outer: 20 },
    bleed: 3,
    dpi: 300,
    colorProfile: 'CMYK'
  },

  editorialMemory: {
    tom: 'Espiritual, encorajador, sensorial e profundo.',
    voz: 'Testemunhal e profética.',
    regrasAutor: [
      'Priorizar imagens (metáforas) sobre explicações diretas.',
      'Manter a rima orgânica, nunca forçada.',
      'Terminar sempre em esperança e vitória (Selo PCH).',
      'Integrar a espiritualidade católica (Maria, Terço, Eucaristia) de forma profunda.'
    ],
    conceitos: [
      { tag: 'PCH', descricao: 'Poesia que Cura o Homem (Metodologia de escrita sob unção).' },
      { tag: 'BARCO', descricao: 'Metáfora para a vida e restauração (leme, âncora, mar).' },
      { tag: 'LUZ', descricao: 'Identidade do cristão (Filho da Luz).' }
    ]
  },

  readinessScore: 85,
  productionProgress: {
    arquitetura: 100,
    escrita: 90,
    revisao: 70,
    diagramacao: 80,
    preImpressao: 40
  }
};
