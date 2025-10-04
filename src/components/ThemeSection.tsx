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
    <div className="theme-section mb-8">
      <h2 
        id={themeId}
        className="theme-header cursor-pointer flex justify-between items-center rounded-t-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex items-baseline">
          {title} 
          <span className="text-sm font-normal text-muted-foreground ml-2">
            ({poems.length} {poems.length > 1 ? 'poemas' : 'poema'})
          </span>
        </span>
        <ChevronDown 
          className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </h2>
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
