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
