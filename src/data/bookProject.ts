export interface Chapter {
  id: string;
  title: string;
  draft: string;
  revision: string;
  final: string;
  status: 'rascunho' | 'revisao' | 'finalizado';
}

export interface BookProject {
  id: string;
  title: string;
  subtitle: string;
  authorBio: string;
  synopsis: string;
  coverPrompt: string;
  backCoverText: string;
  status: 'ideia' | 'projeto' | 'estrutura' | 'escrita' | 'edicao' | 'revisao' | 'design' | 'publicacao';
  readinessScore: number;
  scores: {
    conteudo: number;
    estrutura: number;
    escrita: number;
    originalidade: number;
    pch: number;
    consistencia: number;
    revisao: number;
    design: number;
    comercial: number;
  };
  editorialMemory: {
    personagens: string[];
    conceitos: string[];
    termos: string[];
    promessas: string[];
    metaforas: string[];
  };
  chapters: Chapter[];
  createdAt: string;
  updatedAt: string;
}

export const initialBookData: BookProject = {
  id: 'current-book',
  title: 'Folheando Fé',
  subtitle: 'Poesia do meu grupo de oração',
  authorBio: 'Evaldo Poeta, um apaixonado pela palavra que cura e transforma...',
  synopsis: 'Uma jornada espiritual através de poemas divididos em 6 blocos do Método PCH.',
  coverPrompt: 'Uma capa elegante em azul marinho e dourado com elementos de luz e folhas.',
  backCoverText: 'A poesia é o eco da oração que transborda do coração para o papel...',
  status: 'escrita',
  readinessScore: 87,
  scores: {
    conteudo: 92,
    estrutura: 89,
    escrita: 91,
    originalidade: 84,
    pch: 95,
    consistencia: 88,
    revisao: 82,
    design: 76,
    comercial: 90
  },
  editorialMemory: {
    personagens: [],
    conceitos: ['Método PCH', 'VerboLuz'],
    termos: ['Filho da Luz', 'Sopro Sagrado'],
    promessas: ['Transformação espiritual através da poesia'],
    metaforas: ['O hábito silencioso como destino']
  },

  chapters: [
    { 
      id: '1', 
      title: 'Capítulo 1: O Despertar', 
      draft: 'Texto inicial do rascunho...', 
      revision: '', 
      final: '', 
      status: 'rascunho' 
    }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
