import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PoemCard } from './PoemCard';
import { Poem } from '@/data/poems';

interface ThemeSectionProps {
  themeId: string;
  title: string;
  poems: Poem[];
  readPoems: string[];
  onToggleRead: (poemId: string, isRead: boolean) => void;
}

export const ThemeSection = ({ themeId, title, poems, readPoems, onToggleRead }: ThemeSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="theme-section mb-20 bg-card/40 backdrop-blur-md rounded-[3rem] p-4 border border-border/40 shadow-sm">
      <div 
        id={themeId}
        className="cursor-pointer group flex justify-between items-center p-8 transition-colors hover:bg-secondary/5 rounded-[2.5rem]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-primary mb-1 tracking-tight">
            {title}
          </h2>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {poems.length} {poems.length > 1 ? 'Capítulos de Fé' : 'Capítulo de Fé'}
          </span>
        </div>
        <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center transition-transform group-hover:bg-secondary/20">
          <ChevronDown 
            className={`w-6 h-6 text-secondary transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[50000px] py-6' : 'max-h-0'
        }`}
      >
        <div className="space-y-8 px-4">
          {poems.map((poem) => (
            <PoemCard
              key={poem.id}
              poem={poem}
              isRead={readPoems.includes(poem.id)}
              onToggleRead={onToggleRead}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
