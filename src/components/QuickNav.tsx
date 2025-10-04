import { useEffect, useState } from 'react';
import { themeTitles } from '@/data/poems';

export const QuickNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.theme-header');
      let currentSectionId = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 60) {
          currentSectionId = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetHeader = document.getElementById(targetId);
    if (targetHeader) {
      targetHeader.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden xl:block fixed top-1/2 -translate-y-1/2 left-4 z-20">
      <ul className="flex flex-col space-y-1 bg-card/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-border">
        <li>
          <a 
            href="#theme-diario" 
            onClick={(e) => handleNavClick(e, 'theme-diario')}
            className={`text-sm font-semibold transition-all duration-200 p-2 block rounded ${
              activeSection === 'theme-diario'
                ? 'text-primary font-bold translate-x-1'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Diário
          </a>
        </li>
        {Object.keys(themeTitles).map((themeKey) => {
          const themeId = `theme-${themeKey}`;
          return (
            <li key={themeKey}>
              <a 
                href={`#${themeId}`}
                onClick={(e) => handleNavClick(e, themeId)}
                className={`text-sm font-semibold transition-all duration-200 p-2 block rounded ${
                  activeSection === themeId
                    ? 'text-primary font-bold translate-x-1'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {themeTitles[themeKey]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
