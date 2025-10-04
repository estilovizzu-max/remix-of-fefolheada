// Utilitário para carregar e gerenciar poemas
import { Poem, PoemsData } from '@/data/poems';

const CUSTOM_POEMS_KEY = 'customPoems';

export function loadCustomPoems(): PoemsData {
  try {
    const stored = localStorage.getItem(CUSTOM_POEMS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Erro ao carregar poemas customizados:', error);
    return {};
  }
}

export function saveCustomPoem(theme: string, poem: Poem): void {
  try {
    const customPoems = loadCustomPoems();
    
    if (!customPoems[theme]) {
      customPoems[theme] = [];
    }
    
    customPoems[theme].push(poem);
    localStorage.setItem(CUSTOM_POEMS_KEY, JSON.stringify(customPoems));
  } catch (error) {
    console.error('Erro ao salvar poema customizado:', error);
    throw error;
  }
}

export function mergePoems(basePoems: PoemsData, customPoems: PoemsData): PoemsData {
  const merged: PoemsData = { ...basePoems };
  
  Object.entries(customPoems).forEach(([theme, poems]) => {
    if (merged[theme]) {
      merged[theme] = [...merged[theme], ...poems];
    } else {
      merged[theme] = poems;
    }
  });
  
  return merged;
}

export function generatePoemId(theme: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${theme}-custom-${timestamp}-${random}`;
}
