export interface ChapterVersion {
  id: string;
  version: number;
  content: string;
  timestamp: string;
  author: string;
  changeSummary?: string;
}

export interface AuditEntry {
  id: string;
  skillId: string;
  action: string;
  evidence: string;
  timestamp: string;
  contextUsed?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  status: 'rascunho' | 'revisao' | 'finalizado';
  versions: ChapterVersion[];
  auditLog: AuditEntry[];
  approvals: {
    skillId: string;
    approved: boolean;
    authorNote?: string;
  }[];
}

export interface BookProject {
  id: string;
  title: string;
  subtitle: string;
  synopsis?: string;
  authorBio?: string;
  coverPrompt?: string;
  author: string;
  version: string;
  status: 'ideia' | 'escrita' | 'producao' | 'finalizing';
  lastUpdated: string;
  chapters: Chapter[];
  readinessScore: number;
  scores: {
    [key: string]: number;
  };
  productionProgress: {
    [key: string]: number;
  };
  editorialMemory: {
    tom: string;
    voz: string;
    regrasAutor: string[];
    personagens: string[];
    promessas: string[];
    conceitos: { tag: string; descricao: string }[];
  };
  printSettings: {
    format: string;
    margins: { top: number; bottom: number; inner: number; outer: number };
    bleed: number;
    dpi: number;
    colorProfile: string;
  };
}

export const initialBookData: BookProject = {
  id: 'folheando-fe-v1',
  title: 'Folheando Fé',
  subtitle: 'Método PCH — Poesia que Cura o Homem',
  synopsis: 'Uma jornada poética de cura e restauração espiritual.',
  authorBio: 'Evaldo Poeta é um missionário da RCC apaixonado por transformar pregação em poesia.',
  coverPrompt: 'Uma capa sóbria com tons de roxo e dourado, elementos de luz e um barco navegando.',
  author: 'Evaldo Poeta',
  version: '2.0.0',
  status: 'finalizing',
  lastUpdated: new Date().toISOString(),
  readinessScore: 85,
  scores: {
    'Arquitetura': 95,
    'PCH': 92,
    'Revisão': 78,
    'Consistência': 85,
    'Comercial': 80,
    'Design': 75
  },
  productionProgress: {
    'Arquitetura': 100,
    'Escrita': 90,
    'Revisão': 70,
    'Diagramação': 80,
    'Pré-Impressão': 40
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
    personagens: ['Filho da Luz', 'Jesus Cristo', 'Virgem Maria', 'Jó'],
    promessas: ['Cura interior', 'Restauração familiar', 'Encontro com o Espírito'],
    conceitos: [
      { tag: 'PCH', descricao: 'Poesia que Cura o Homem (Metodologia de escrita sob unção).' },
      { tag: 'BARCO', descricao: 'Metáfora para a vida e restauração (leme, âncora, mar).' },
      { tag: 'LUZ', descricao: 'Identidade do cristão (Filho da Luz).' }
    ]
  },
  printSettings: {
    format: '14x21',
    margins: { top: 20, bottom: 20, inner: 25, outer: 20 },
    bleed: 3,
    dpi: 300,
    colorProfile: 'CMYK'
  },
  chapters: [
    {
      id: 'cap-1',
      title: 'Bloco 1: O Despertar',
      content: 'Conteúdo do Bloco 1 sendo processado pelas Skills...',
      status: 'revisao',
      versions: [
        { id: 'v1', version: 1, content: 'Versão original...', timestamp: new Date().toISOString(), author: 'Evaldo', changeSummary: 'Criação inicial' }
      ],
      auditLog: [],
      approvals: []
    },
    {
      id: 'cap-2',
      title: 'Bloco 2: A Decisão',
      content: 'Conteúdo do Bloco 2 em fase de lapidação...',
      status: 'rascunho',
      versions: [],
      auditLog: [],
      approvals: []
    }
  ]
};
