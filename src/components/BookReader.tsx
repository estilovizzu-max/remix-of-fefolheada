import { forwardRef, useMemo, useRef, useState, useEffect } from 'react';
// @ts-ignore -- react-pageflip has no types
import HTMLFlipBook from 'react-pageflip';
import { BookPage } from './book/BookPage';
import { poemsData, themeTitles, Poem } from '@/data/poems';
import { Link } from 'react-router-dom';
import { loadCustomPoems, mergePoems } from '@/utils/poemLoader';
import { Button } from '@/components/ui/button';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ChevronLeft, ChevronRight, Volume2, Square, Share2, BookMarked,
  List, Feather, Users2, Bookmark, BookmarkCheck, StickyNote,
  Settings2, Search, Download, Sun, Moon, Palette, Type, AlignJustify,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { GroupSelector } from '@/components/GroupSelector';
import { DiarySection } from '@/components/DiarySection';
import { ProgressSection } from '@/components/ProgressSection';
import { AdminPanel } from '@/components/AdminPanel';
import { saveCustomPoem, generatePoemId } from '@/utils/poemLoader';
import { pendingPreview } from '@/utils/pendingPreview';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const BLOCKS = ['bloco-1', 'bloco-2', 'bloco-3', 'bloco-4', 'bloco-5', 'bloco-6'];

interface DiaryEntry { text: string; date: string; }
type ReaderTheme = 'sepia' | 'light' | 'dark';

/* ---------- Static pages (unchanged) ---------- */

const CoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <BookPage ref={ref} variant="cover">
    <div
      className="relative h-full w-full flex flex-col items-center justify-between p-10 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at center, hsl(var(--book-purple)) 0%, hsl(var(--book-purple-deep)) 90%)',
      }}
    >
      <div className="absolute inset-4 border border-[hsl(var(--book-gold-soft))]/40 pointer-events-none" />
      <div className="mt-16">
        <p className="text-[10px] tracking-[0.4em] text-[hsl(var(--book-gold-soft))] mb-4 whitespace-nowrap">
          EVALDO&nbsp;POETA
        </p>
        <div className="h-px w-16 bg-[hsl(var(--book-gold-soft))]/60 mx-auto" />
      </div>
      <div className="space-y-6">
        <h1
          className="text-5xl md:text-6xl font-serif text-[hsl(var(--paper))] leading-[0.95]"
          style={{ fontFamily: 'Lora, serif' }}
        >
          Folheando
          <br />
          <span className="italic text-[hsl(var(--book-gold-soft))]">Fé</span>
        </h1>
        <div className="h-px w-24 bg-[hsl(var(--book-gold-soft))]/60 mx-auto" />
        <p className="text-sm italic text-[hsl(var(--book-gold-soft))] tracking-wide font-serif">
          poesia do meu grupo de oração
        </p>
      </div>
      <div className="mb-8 space-y-2">
        <p className="text-[9px] tracking-[0.35em] text-[hsl(var(--book-gold-soft))]/80">
          128 POEMAS · 6 CAPÍTULOS
        </p>
        <p className="text-[9px] tracking-[0.35em] text-[hsl(var(--book-gold-soft))]/60">
          MÉTODO PCH · POESIA QUE CURA O HOMEM
        </p>
      </div>
    </div>
  </BookPage>
));
CoverPage.displayName = 'CoverPage';

const BackCoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <BookPage ref={ref} variant="cover">
    <div
      className="relative h-full w-full flex flex-col items-center justify-center p-12 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at center, hsl(var(--book-purple)) 0%, hsl(var(--book-purple-deep)) 90%)',
      }}
    >
      <div className="absolute inset-4 border border-[hsl(var(--book-gold-soft))]/40 pointer-events-none" />
      
      <div className="space-y-8 max-w-xs">
        <div className="space-y-2">
          <div className="h-px w-8 bg-[hsl(var(--book-gold-soft))]/40 mx-auto" />
          <p className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold-soft))] uppercase">
            A Obra
          </p>
        </div>
        
        <p className="text-sm font-serif italic leading-relaxed text-[hsl(var(--paper))]/90">
          "A poesia é o eco da oração que transborda do coração para o papel. 
          Neste livro, cada verso é um convite para mergulhar no mistério 
          do amor de Deus e redescobrir sua identidade de luz."
        </p>
        
        <div className="pt-4 space-y-4">
          <p className="text-[11px] tracking-[0.2em] text-[hsl(var(--book-gold-soft))]/70 font-serif">
            MÉTODO FILHO DA LUZ
          </p>
          <div className="h-px w-12 bg-[hsl(var(--book-gold-soft))]/40 mx-auto" />
          <p className="text-xs italic text-[hsl(var(--paper-muted))]">
            Criado por Evaldo.os
          </p>
        </div>
      </div>
    </div>
  </BookPage>
));
BackCoverPage.displayName = 'BackCoverPage';

const CopyrightPage = forwardRef<HTMLDivElement>((_, ref) => (
  <BookPage ref={ref} folio="ii">
    <div className="h-full flex flex-col items-center justify-center px-10 text-center space-y-4">
      <p className="text-xs font-serif italic text-[hsl(var(--paper-muted))]">© Evaldo Poeta</p>
      <p className="text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--paper-muted))]">
        Todos os direitos reservados
      </p>
      <div className="h-px w-10 bg-[hsl(var(--book-gold))]/50" />
      <p className="text-xs font-serif italic text-[hsl(var(--paper-muted))] max-w-xs leading-relaxed">
        Este livro reúne mais de duzentos poemas nascidos do silêncio da oração,
        da escuta ao Espírito Santo e da comunhão vivida no grupo Filhos da Luz.
      </p>
    </div>
  </BookPage>
));
CopyrightPage.displayName = 'CopyrightPage';

const EpigraphPage = forwardRef<HTMLDivElement>((_, ref) => (
  <BookPage ref={ref} folio="iii">
    <div className="h-full flex flex-col items-center justify-center px-10 text-center space-y-6">
      <div className="h-px w-10 bg-[hsl(var(--book-gold))]/60" />
      <p
        className="font-serif italic text-lg leading-relaxed text-[hsl(var(--paper-ink))] max-w-sm"
        style={{ fontFamily: 'Lora, serif' }}
      >
        "Vós sois a luz do mundo…
        <br />
        assim brilhe a vossa luz diante dos homens."
      </p>
      <p className="text-xs italic text-[hsl(var(--paper-muted))] font-serif">— Mateus 5, 14–16</p>
      <div className="h-px w-10 bg-[hsl(var(--book-gold))]/60" />
    </div>
  </BookPage>
));
EpigraphPage.displayName = 'EpigraphPage';

interface TocEntry { label: string; page: number; }
const TocPage = forwardRef<
  HTMLDivElement,
  { blockStarts: number[]; extras: TocEntry[]; onJump: (p: number) => void }
>(({ blockStarts, extras, onJump }, ref) => (
  <BookPage ref={ref} folio="iv">
    <div className="h-full flex flex-col px-10 pt-14 pb-10">
      <h2
        className="text-3xl font-serif text-[hsl(var(--book-purple))] mb-2"
        style={{ fontFamily: 'Lora, serif' }}
      >
        Sumário
      </h2>
      <div className="h-px w-16 bg-[hsl(var(--book-gold))]/60 mb-6" />
      <div className="flex-1 overflow-y-auto min-h-0 poem-scroll space-y-3">
        {BLOCKS.map((bk, i) => (
          <button
            key={bk}
            onClick={() => onJump(blockStarts[i])}
            className="w-full text-left flex items-baseline gap-4 group"
          >
            <span className="text-[hsl(var(--book-gold))] font-serif italic w-6 text-sm">
              {ROMAN[i]}
            </span>
            <span className="flex-1 font-serif text-sm text-[hsl(var(--paper-ink))] group-hover:underline">
              {themeTitles[bk]}
              <span className="block text-[10px] italic text-[hsl(var(--paper-muted))]">
                {poemsData[bk]?.length ?? 0} poemas
              </span>
            </span>
            <span className="text-[hsl(var(--book-gold))] font-serif text-xs">
              {blockStarts[i] + 1}
            </span>
          </button>
        ))}
        <div className="h-px bg-[hsl(var(--paper-rule))]/40 my-4" />
        {extras.map((e) => (
          <button
            key={e.label}
            onClick={() => onJump(e.page)}
            className="w-full text-left flex items-baseline gap-4 group"
          >
            <span className="w-6" />
            <span className="flex-1 font-serif italic text-sm text-[hsl(var(--paper-ink))] group-hover:underline">
              {e.label}
            </span>
            <span className="text-[hsl(var(--book-gold))] font-serif text-xs">{e.page + 1}</span>
          </button>
        ))}
      </div>
    </div>
  </BookPage>
));
TocPage.displayName = 'TocPage';

const BlockCoverPage = forwardRef<
  HTMLDivElement,
  { index: number; title: string; count: number }
>(({ index, title, count }, ref) => (
  <BookPage ref={ref} variant="cover">
    <div
      className="relative h-full w-full flex flex-col items-center justify-center p-10 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at center, hsl(var(--book-purple)) 0%, hsl(var(--book-purple-deep)) 100%)',
      }}
    >
      <div className="absolute inset-4 border border-[hsl(var(--book-gold-soft))]/40 pointer-events-none" />
      <p className="text-[10px] tracking-[0.4em] text-[hsl(var(--book-gold-soft))] mb-4">
        PARTE
      </p>
      <p
        className="text-6xl font-serif italic text-[hsl(var(--book-gold-soft))] mb-6"
        style={{ fontFamily: 'Lora, serif' }}
      >
        {ROMAN[index]}
      </p>
      <div className="h-px w-16 bg-[hsl(var(--book-gold-soft))]/60 mb-8" />
      <h2
        className="text-2xl md:text-3xl font-serif text-[hsl(var(--paper))] leading-tight max-w-[80%]"
        style={{ fontFamily: 'Lora, serif' }}
      >
        {title}
      </h2>
      <div className="h-px w-16 bg-[hsl(var(--book-gold-soft))]/60 mt-8 mb-4" />
      <p className="italic text-sm text-[hsl(var(--book-gold-soft))] font-serif">
        {count} poemas
      </p>
    </div>
  </BookPage>
));
BlockCoverPage.displayName = 'BlockCoverPage';

interface PoemPageProps {
  poem: Poem;
  runningHead: string;
  marker: string;
  folio: number;
  isRead: boolean;
  isBookmarked: boolean;
  note: string;
  pendingText?: string;
  onJumpToPending?: () => void;
  onToggleRead: (id: string, v: boolean) => void;
  onToggleBookmark: (id: string) => void;
  onSaveNote: (id: string, note: string) => void;
}

const PoemPage = forwardRef<HTMLDivElement, PoemPageProps>(
  (
    {
      poem, runningHead, marker, folio,
      isRead, isBookmarked, note,
      pendingText, onJumpToPending,
      onToggleRead, onToggleBookmark, onSaveNote,
    },
    ref,
  ) => {
    const [speaking, setSpeaking] = useState(false);
    const [showReflection, setShowReflection] = useState(false);
    const [draftNote, setDraftNote] = useState(note);

    useEffect(() => setDraftNote(note), [note]);
    useEffect(() => () => window.speechSynthesis.cancel(), []);

    const handleSpeak = () => {
      if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
      const u = new SpeechSynthesisUtterance(poem.text);
      const voices = window.speechSynthesis.getVoices();
      const v =
        voices.find(v => v.lang.includes('pt-BR') && v.name.includes('Google')) ||
        voices.find(v => v.lang.includes('pt-BR')) ||
        voices.find(v => v.lang.includes('pt'));
      if (v) u.voice = v;
      u.lang = 'pt-BR'; u.rate = 0.95; u.pitch = 1.05;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    };

    const handleShare = async () => {
      const data = {
        title: `${poem.title} — Evaldo Poeta`,
        text: `${poem.title}\n\n${poem.text}\n\n— Evaldo Poeta`,
        url: window.location.href,
      };
      try {
        if (navigator.share) { await navigator.share(data); toast({ title: 'Compartilhado 🙏' }); }
        else { await navigator.clipboard.writeText(`${data.title}\n\n${data.text}`); toast({ title: 'Copiado!' }); }
      } catch { /* dismissed */ }
    };

    const hasExtra = poem.reflection || poem.inspiration;
    const isPending = !hasExtra && !!pendingText;

    return (
      <BookPage ref={ref} runningHead={runningHead + ` · ${marker}`} folio={folio}>
        <div className="h-full flex flex-col px-8 pt-14 pb-10">
          <div className="text-center mb-3 shrink-0">
            <h3
              className="text-xl md:text-2xl font-serif text-[hsl(var(--book-purple))] leading-tight"
              style={{ fontFamily: 'Lora, serif' }}
            >
              {poem.title}
            </h3>
            <div className="h-px w-10 bg-[hsl(var(--book-gold))] mx-auto mt-3" />
          </div>

          <div className="flex-1 overflow-y-auto min-h-0 poem-scroll flex flex-col">
            <p
              className="poem-verse whitespace-pre-line italic font-serif text-[hsl(var(--paper-ink))] text-center py-8 px-4"
              style={{ 
                fontFamily: 'Lora, serif',
                lineHeight: '2.2',
                fontSize: '1.1rem'
              }}
            >
              {poem.text}
            </p>

            {hasExtra && (
              <div className="mt-4 pt-4 border-t border-[hsl(var(--paper-rule))]/50 space-y-3">
                {!showReflection ? (
                  <button
                    onClick={() => setShowReflection(true)}
                    className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold))] hover:text-[hsl(var(--book-purple))] transition-colors uppercase"
                  >
                    ✦ Ler Reflexão
                  </button>
                ) : (
                  <>
                    {poem.reflection && (
                      <div>
                        <p className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold))] uppercase mb-1.5">
                          Reflexão
                        </p>
                        <p className="text-xs font-serif leading-relaxed text-[hsl(var(--paper-ink))]/85">
                          {poem.reflection}
                        </p>
                      </div>
                    )}
                    {poem.inspiration && (
                      <div>
                        <p className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold))] uppercase mb-1.5">
                          Convite ao poeta
                        </p>
                        <p className="text-xs italic font-serif leading-relaxed text-[hsl(var(--paper-muted))]">
                          {poem.inspiration}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {isPending && (
              <aside
                className="mt-4 rounded-sm border-l-4 border-[hsl(var(--book-gold))] bg-[hsl(var(--book-gold))]/5 pl-4 pr-3 py-3"
                role="note"
                aria-labelledby={`pending-tag-${poem.id}`}
              >
                <h4
                  id={`pending-tag-${poem.id}`}
                  className="text-[10px] tracking-[0.28em] font-semibold uppercase text-[hsl(var(--book-purple))] mb-2"
                >
                  Reflexão em preparação
                </h4>
                <p className="text-xs font-serif leading-relaxed text-[hsl(var(--paper-ink))]">
                  <span
                    className="not-italic font-sans font-semibold uppercase tracking-[0.15em] text-[hsl(var(--book-purple))] text-[9px] mr-1.5"
                    aria-hidden="true"
                  >
                    Prévia
                  </span>
                  <span className="italic">
                    <span className="sr-only">Prévia: </span>{pendingText}
                  </span>
                </p>
                <p className="mt-2 text-[11px] font-serif leading-relaxed text-[hsl(var(--paper-muted))]">
                  A meditação pastoral e o convite ao poeta estão sendo
                  escritos. Enquanto isso, ore com o poema e anote o verso que
                  mais tocar você.
                </p>
                {onJumpToPending && (
                  <button
                    onClick={onJumpToPending}
                    className="mt-2 text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--book-purple))] hover:text-[hsl(var(--book-gold))] transition-colors underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--book-purple))] rounded-sm"
                    aria-label={`Ver a lista completa de reflexões pendentes (a partir de ${poem.title})`}
                  >
                    Ver todas as reflexões pendentes →
                  </button>
                )}
              </aside>
            )}

            {note && (
              <div className="mt-4 pt-3 border-t border-dashed border-[hsl(var(--book-gold))]/40">
                <p className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold))] uppercase mb-1.5">
                  Minha anotação
                </p>
                <p className="text-xs font-serif italic text-[hsl(var(--paper-ink))]/80 whitespace-pre-line">
                  {note}
                </p>
              </div>
            )}
          </div>

          <div className="shrink-0 mt-3 space-y-2">
            <p className="text-center italic text-xs text-[hsl(var(--paper-muted))] font-serif">
              Evaldo Poeta
            </p>
            <div className="flex items-center justify-center gap-1.5 pt-1 flex-wrap">
              <button
                onClick={handleSpeak}
                className="h-8 w-8 rounded-full border border-[hsl(var(--paper-rule))] flex items-center justify-center hover:bg-[hsl(var(--book-purple))] hover:text-[hsl(var(--paper))] hover:border-transparent transition-colors"
                title={speaking ? 'Parar' : 'Ouvir'}
              >
                {speaking ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
              <button
                onClick={handleShare}
                className="h-8 w-8 rounded-full border border-[hsl(var(--paper-rule))] flex items-center justify-center hover:bg-[hsl(var(--book-purple))] hover:text-[hsl(var(--paper))] hover:border-transparent transition-colors"
                title="Partilhar"
              >
                <Share2 className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => onToggleBookmark(poem.id)}
                className={`h-8 w-8 rounded-full border flex items-center justify-center transition-colors ${
                  isBookmarked
                    ? 'bg-[hsl(var(--book-gold))] text-[hsl(var(--paper))] border-transparent'
                    : 'border-[hsl(var(--paper-rule))] hover:bg-[hsl(var(--book-gold))]/20'
                }`}
                title={isBookmarked ? 'Remover marcação' : 'Marcar página'}
              >
                {isBookmarked
                  ? <BookmarkCheck className="h-3.5 w-3.5" />
                  : <Bookmark className="h-3.5 w-3.5" />}
              </button>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={`h-8 w-8 rounded-full border flex items-center justify-center transition-colors ${
                      note
                        ? 'bg-[hsl(var(--book-purple))]/15 border-[hsl(var(--book-purple))]/40'
                        : 'border-[hsl(var(--paper-rule))] hover:bg-[hsl(var(--book-purple))]/10'
                    }`}
                    title="Minha anotação"
                  >
                    <StickyNote className="h-3.5 w-3.5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  className="w-72 bg-[hsl(var(--paper))] border-[hsl(var(--paper-rule))]/60"
                >
                  <p className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold))] uppercase mb-2">
                    Anotação sobre este poema
                  </p>
                  <Textarea
                    value={draftNote}
                    onChange={(e) => setDraftNote(e.target.value)}
                    placeholder="O que este poema despertou em você?"
                    rows={5}
                    className="text-sm font-serif bg-[hsl(var(--paper))]"
                  />
                  <div className="flex justify-between items-center mt-2 gap-2">
                    <button
                      onClick={() => { setDraftNote(''); onSaveNote(poem.id, ''); }}
                      className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--paper-muted))] hover:text-[hsl(var(--book-purple))]"
                    >
                      Limpar
                    </button>
                    <Button
                      size="sm"
                      onClick={() => {
                        onSaveNote(poem.id, draftNote.trim());
                        toast({ title: draftNote.trim() ? 'Anotação salva' : 'Anotação removida' });
                      }}
                      className="bg-[hsl(var(--book-purple))] text-[hsl(var(--paper))] hover:bg-[hsl(var(--book-purple-deep))]"
                    >
                      Salvar
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <label className="ml-2 flex items-center gap-1.5 cursor-pointer">
                <Switch
                  checked={isRead}
                  onCheckedChange={(v) => onToggleRead(poem.id, v)}
                  className="scale-75"
                />
                <span className="text-[9px] tracking-[0.25em] uppercase text-[hsl(var(--paper-muted))]">
                  {isRead ? 'Lido' : 'Marcar'}
                </span>
              </label>
            </div>
          </div>
        </div>
      </BookPage>
    );
  },
);
PoemPage.displayName = 'PoemPage';

interface SectionPageProps {
  title: string; runningHead: string; folio: number; children: React.ReactNode;
}
const SectionPage = forwardRef<HTMLDivElement, SectionPageProps>(
  ({ title, runningHead, folio, children }, ref) => (
    <BookPage ref={ref} runningHead={runningHead} folio={folio}>
      <div className="h-full flex flex-col px-6 pt-14 pb-10">
        <h2
          className="text-2xl font-serif text-[hsl(var(--book-purple))] mb-2 text-center"
          style={{ fontFamily: 'Lora, serif' }}
        >
          {title}
        </h2>
        <div className="h-px w-12 bg-[hsl(var(--book-gold))] mx-auto mb-4" />
        <div className="flex-1 overflow-y-auto min-h-0 poem-scroll pr-1">{children}</div>
      </div>
    </BookPage>
  ),
);
SectionPage.displayName = 'SectionPage';

/* ---------- Nota ao leitor (folio v) ---------- */

const NoteToReaderPage = forwardRef<HTMLDivElement, { onJumpToPending: () => void }>(
  ({ onJumpToPending }, ref) => (
    <BookPage ref={ref} folio="v">
      <div className="h-full flex flex-col px-8 pt-14 pb-10">
        <h2
          className="text-2xl font-serif text-[hsl(var(--book-purple))] text-center"
          style={{ fontFamily: 'Lora, serif' }}
        >
          Nota ao leitor
        </h2>
        <div className="h-px w-12 bg-[hsl(var(--book-gold))] mx-auto mt-3 mb-5" />

        <div className="flex-1 overflow-y-auto min-h-0 poem-scroll space-y-4 text-[13px] font-serif leading-relaxed text-[hsl(var(--paper-ink))]/90">
          <p>
            Cada poema deste livro é acompanhado, sempre que possível, por uma
            breve <em>Reflexão</em> ou <em>Convite ao poeta</em> — palavras que
            propõem uma respiração meditativa após a leitura.
          </p>
          <p>
            Alguns poemas ainda estão em processo de meditação e trazem, no
            lugar da reflexão, um cartão discreto:
          </p>

          <aside
            className="rounded-sm border-l-4 border-[hsl(var(--book-gold))] bg-[hsl(var(--book-gold))]/5 pl-4 pr-3 py-3"
            role="note"
            aria-labelledby="pending-example-tag"
          >
            <h3
              id="pending-example-tag"
              className="text-[10px] tracking-[0.28em] font-semibold uppercase text-[hsl(var(--book-purple))] mb-2"
            >
              Reflexão em preparação
            </h3>
            <p className="text-xs font-serif leading-relaxed text-[hsl(var(--paper-ink))]">
              <span
                className="not-italic font-sans font-semibold uppercase tracking-[0.15em] text-[hsl(var(--book-purple))] text-[9px] mr-1.5"
                aria-hidden="true"
              >
                Prévia
              </span>
              <span className="italic">
                <span className="sr-only">Prévia: </span>
                Uma frase-chave que orienta a leitura.
              </span>
            </p>
            <p className="mt-2 text-[11px] font-serif leading-relaxed text-[hsl(var(--paper-muted))]">
              Reflexão pastoral completa em breve.
            </p>
          </aside>

          <p>
            Ao final do livro, a seção{' '}
            <button
              onClick={onJumpToPending}
              className="italic underline underline-offset-4 text-[hsl(var(--book-purple))] hover:text-[hsl(var(--book-gold))]"
            >
              Reflexões pendentes
            </button>{' '}
            reúne todos esses poemas em um único índice, para que você possa
            acompanhar o que ainda está por florescer.
          </p>
        </div>
      </div>
    </BookPage>
  ),
);
NoteToReaderPage.displayName = 'NoteToReaderPage';

/* ---------- Índice: Reflexões pendentes ---------- */

interface PendingEntry {
  id: string; title: string; blockLabel: string; page: number;
}
const PendingIndexPage = forwardRef<
  HTMLDivElement,
  { entries: PendingEntry[]; folio: number; onJump: (p: number) => void }
>(({ entries, folio, onJump }, ref) => (
  <BookPage ref={ref} runningHead="REFLEXÕES PENDENTES" folio={folio}>
    <div className="h-full flex flex-col px-8 pt-14 pb-10">
      <h2
        className="text-2xl font-serif text-[hsl(var(--book-purple))] text-center"
        style={{ fontFamily: 'Lora, serif' }}
      >
        Reflexões pendentes
      </h2>
      <div className="h-px w-12 bg-[hsl(var(--book-gold))] mx-auto mt-3 mb-4" />
      <p className="text-center text-[11px] italic font-serif text-[hsl(var(--paper-muted))] mb-4">
        {entries.length} poemas aguardam meditação escrita.
      </p>
      <div className="flex-1 overflow-y-auto min-h-0 poem-scroll pr-1 space-y-1">
        {entries.map((e) => (
          <button
            key={e.id}
            onClick={() => onJump(e.page)}
            className="w-full text-left flex items-baseline gap-3 py-1.5 group border-b border-dotted border-[hsl(var(--paper-rule))]/40"
          >
            <span className="flex-1 font-serif text-sm text-[hsl(var(--paper-ink))] group-hover:underline">
              {e.title}
              <span className="block text-[10px] italic text-[hsl(var(--paper-muted))]">
                {e.blockLabel}
              </span>
            </span>
            <span className="text-[hsl(var(--book-gold))] font-serif text-xs">
              {e.page + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  </BookPage>
));
PendingIndexPage.displayName = 'PendingIndexPage';

const ColophonPage = forwardRef<HTMLDivElement, { onOpenAdmin: () => void }>(
  ({ onOpenAdmin }, ref) => (
    <BookPage ref={ref} variant="cover">
      <div
        className="relative h-full w-full flex flex-col items-center justify-center p-10 text-center"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, hsl(var(--book-purple)) 0%, hsl(var(--book-purple-deep)) 100%)',
        }}
      >
        <div className="absolute inset-4 border border-[hsl(var(--book-gold-soft))]/40 pointer-events-none" />
        <h3
          className="text-3xl font-serif italic text-[hsl(var(--book-gold-soft))] mb-4"
          style={{ fontFamily: 'Lora, serif' }}
        >
          colofão
        </h3>
        <div className="h-px w-16 bg-[hsl(var(--book-gold-soft))]/60 mb-8" />
        <div className="max-w-xs space-y-4 text-sm font-serif italic text-[hsl(var(--paper))]/90 leading-relaxed">
          <p>Este livro reúne duzentos poemas nascidos do silêncio da oração e da escuta ao Espírito.</p>
          <p>Que cada verso seja lâmpada para os pés de quem o ler.</p>
        </div>
        <div className="mt-10 space-y-1">
          <p className="text-[10px] tracking-[0.5em] text-[hsl(var(--book-gold-soft))]">
            E V A L D O   P O E T A
          </p>
          <button
            onClick={onOpenAdmin}
            className="text-[9px] tracking-[0.35em] text-[hsl(var(--paper))]/40 hover:text-[hsl(var(--book-gold-soft))] transition-colors"
            title="."
          >
            CRIADO POR EVALDO.OS
          </button>
        </div>
      </div>
    </BookPage>
  ),
);
ColophonPage.displayName = 'ColophonPage';

/* ---------- Main Book Reader ---------- */

export const BookReader = () => {
  const bookRef = useRef<any>(null);
  const initialLoadRef = useRef(false);

  // Persistent state
  const [readPoems, setReadPoems] = useLocalStorage<string[]>('readPoems', []);
  const [diaryEntries, setDiaryEntries] = useLocalStorage<DiaryEntry[]>('spiritualDiaryEntries', []);
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('poemBookmarks', []);
  const [notes, setNotes] = useLocalStorage<Record<string, string>>('poemNotes', {});
  const [savedPage, setSavedPage] = useLocalStorage<number>('bookCurrentPage', 0);
  const [fontScale, setFontScale] = useLocalStorage<number>('readerFontScale', 1);
  const [lineHeight, setLineHeight] = useLocalStorage<number>('readerLineHeight', 2.2);
  const [readerMargin, setReaderMargin] = useLocalStorage<number>('readerMargin', 2);
  const [readerAlign, setReaderAlign] = useLocalStorage<string>('readerAlign', 'center');
  const [readerTheme, setReaderTheme] = useLocalStorage<ReaderTheme>('readerTheme', 'sepia');

  const [customPoems, setCustomPoems] = useState(loadCustomPoems());
  const [current, setCurrent] = useState(savedPage);
  const [tocOpen, setTocOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [adminHiddenTrigger, setAdminHiddenTrigger] = useState(0);

  const allPoems = useMemo(() => mergePoems(poemsData, customPoems), [customPoems]);
  const totalPoems = useMemo(
    () => Object.values(allPoems).reduce((s, ps) => s + ps.length, 0),
    [allPoems],
  );

  const handleToggleRead = (id: string, v: boolean) => {
    setReadPoems((prev) => (v ? [...new Set([...prev, id])] : prev.filter((x) => x !== id)));
  };
  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
    toast({ title: bookmarks.includes(id) ? 'Marcação removida' : 'Poema marcado 🔖' });
  };
  const handleSaveNote = (id: string, text: string) => {
    setNotes((prev) => {
      const next = { ...prev };
      if (text) next[id] = text; else delete next[id];
      return next;
    });
  };

  const handleAddPoem = (p: { theme: string; title: string; text: string; reflection: string }) => {
    saveCustomPoem(
      p.theme,
      { id: generatePoemId(p.theme), title: p.title, text: p.text, reflection: p.reflection },
    );
    setCustomPoems(loadCustomPoems());
    toast({ title: 'Poema adicionado ao livro 🌟' });
  };

  const handleSaveDiary = (t: string) =>
    setDiaryEntries((p) => [...p, { text: t, date: new Date().toISOString() }]);
  const handleDeleteDiary = (i: number) =>
    setDiaryEntries((p) => p.filter((_, x) => x !== i));

  // Build page sequence + search index
  const {
    pages, blockStarts, groupsPage, diaryPage, progressPage,
    notePage, pendingPage, searchIndex,
  } = useMemo(() => {
    const seq: React.ReactNode[] = [];
    const idx: { title: string; block: string; blockLabel: string; page: number; id: string }[] = [];
    const pending: PendingEntry[] = [];

    seq.push(<CoverPage key="cover" />);
    seq.push(<CopyrightPage key="copy" />);
    seq.push(<EpigraphPage key="epi" />);
    const tocIndex = seq.length;
    seq.push(<div key="toc-placeholder" />);
    const noteIndex = seq.length;
    seq.push(<div key="note-placeholder" />);

    const bStarts: number[] = [];
    // Placeholder for pendingPage number — patched below after we know it.
    const jumpPendingRef = { current: 0 };
    const jumpToPending = () => bookRef.current?.pageFlip()?.flip(jumpPendingRef.current);

    BLOCKS.forEach((bk, i) => {
      bStarts.push(seq.length);
      const list = allPoems[bk] ?? [];
      seq.push(
        <BlockCoverPage
          key={`bc-${bk}`}
          index={i}
          title={themeTitles[bk]}
          count={list.length}
        />,
      );
      list.forEach((poem, pi) => {
        const pageNum = seq.length;
        idx.push({
          title: poem.title,
          block: bk,
          blockLabel: themeTitles[bk],
          page: pageNum,
          id: poem.id,
        });
        const hasExtra = poem.reflection || poem.inspiration;
        const preview = hasExtra ? undefined : pendingPreview(poem.title, bk, pi);
        if (!hasExtra) {
          pending.push({
            id: poem.id, title: poem.title,
            blockLabel: themeTitles[bk], page: pageNum,
          });
        }
        seq.push(
          <PoemPage
            key={poem.id}
            poem={poem}
            runningHead={themeTitles[bk]}
            marker={`${ROMAN[i]} · ${String(pi + 1).padStart(2, '0')}`}
            folio={pageNum + 1}
            isRead={readPoems.includes(poem.id)}
            isBookmarked={bookmarks.includes(poem.id)}
            note={notes[poem.id] ?? ''}
            pendingText={preview}
            onJumpToPending={preview ? jumpToPending : undefined}
            onToggleRead={handleToggleRead}
            onToggleBookmark={handleToggleBookmark}
            onSaveNote={handleSaveNote}
          />,
        );
      });
    });

    const gPage = seq.length;
    seq.push(
      <SectionPage
        key="groups" title="Grupos de Oração" runningHead="COMUNIDADE" folio={seq.length + 1}
      >
        <GroupSelector />
      </SectionPage>,
    );
    const dPage = seq.length;
    seq.push(
      <SectionPage
        key="diary" title="Diário Espiritual" runningHead="DIÁRIO" folio={seq.length + 1}
      >
        <DiarySection
          entries={diaryEntries}
          onSaveEntry={handleSaveDiary}
          onDeleteEntry={handleDeleteDiary}
        />
      </SectionPage>,
    );
    const pPage = seq.length;
    seq.push(
      <SectionPage
        key="prog" title="Sua Jornada" runningHead="PROGRESSO" folio={seq.length + 1}
      >
        <ProgressSection
          readCount={readPoems.length}
          totalPoems={totalPoems}
          onOpenModal={() => {}}
        />
      </SectionPage>,
    );

    const pendingPageIdx = seq.length;
    jumpPendingRef.current = pendingPageIdx;
    seq.push(
      <PendingIndexPage
        key="pending"
        entries={pending}
        folio={pendingPageIdx + 1}
        onJump={(p) => bookRef.current?.pageFlip()?.flip(p)}
      />,
    );

    seq.push(<BackCoverPage key="back" />);
    seq.push(
      <ColophonPage key="colo" onOpenAdmin={() => setAdminHiddenTrigger((v) => v + 1)} />,
    );

    seq[noteIndex] = (
      <NoteToReaderPage
        key="note"
        onJumpToPending={() => bookRef.current?.pageFlip()?.flip(pendingPageIdx)}
      />
    );

    seq[tocIndex] = (
      <TocPage
        key="toc"
        onJump={(p) => { bookRef.current?.pageFlip()?.flip(p); setTocOpen(false); }}
        blockStarts={bStarts}
        extras={[
          { label: 'Nota ao leitor', page: noteIndex },
          { label: 'Grupos de Oração', page: gPage },
          { label: 'Diário Espiritual', page: dPage },
          { label: 'Sua Jornada', page: pPage },
          { label: `Reflexões pendentes (${pending.length})`, page: pendingPageIdx },
        ]}
      />
    );

    return {
      pages: seq,
      blockStarts: bStarts,
      groupsPage: gPage,
      diaryPage: dPage,
      progressPage: pPage,
      notePage: noteIndex,
      pendingPage: pendingPageIdx,
      searchIndex: idx,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPoems, readPoems, diaryEntries, totalPoems, bookmarks, notes]);

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext();
  const jumpTo = (p: number) => {
    bookRef.current?.pageFlip()?.flip(p);
    setTocOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest('input, textarea')) return;
      if (e.key === 'ArrowRight') flipNext();
      if (e.key === 'ArrowLeft') flipPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Persist current page (debounced-ish via effect)
  useEffect(() => { setSavedPage(current); }, [current, setSavedPage]);

  // Restore saved page once after book init
  const handleInit = () => {
    if (initialLoadRef.current) return;
    initialLoadRef.current = true;
    if (savedPage > 0 && savedPage < pages.length) {
      setTimeout(() => bookRef.current?.pageFlip()?.turnToPage(savedPage), 300);
    }
  };

  // Search results
  const filteredResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    return searchIndex
      .filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.blockLabel.toLowerCase().includes(q),
      )
      .slice(0, 40);
  }, [searchQuery, searchIndex]);

  // Bookmarked entries (from index)
  const bookmarkedEntries = useMemo(
    () => searchIndex.filter((e) => bookmarks.includes(e.id)),
    [bookmarks, searchIndex],
  );
  const notedEntries = useMemo(
    () => searchIndex.filter((e) => notes[e.id]),
    [notes, searchIndex],
  );

  return (
    <div
      className="book-reader-root min-h-screen w-full flex flex-col items-center justify-center py-6 px-2 md:py-10"
      data-theme={readerTheme}
      style={{
        backgroundImage:
          readerTheme === 'dark'
            ? 'radial-gradient(ellipse at top, hsl(260 30% 8%) 0%, hsl(260 40% 3%) 100%)'
            : 'radial-gradient(ellipse at top, hsl(var(--book-purple-deep) / 0.95) 0%, hsl(265 70% 5%) 100%)',
        // @ts-ignore CSS custom properties
        '--reader-font-scale': fontScale,
        '--reader-line': lineHeight,
        '--reader-margin': `${readerMargin}rem`,
        '--reader-align': readerAlign,
      } as React.CSSProperties}
    >
      {/* Toolbar */}
      <header className="w-full max-w-5xl flex items-center justify-between px-4 md:px-8 mb-4 text-[hsl(var(--paper))]/80">
        <div className="flex items-center gap-2">
          <BookMarked className="h-4 w-4 text-[hsl(var(--book-gold-soft))]" />
          <span className="text-xs tracking-[0.3em] font-serif italic hidden sm:inline">
            Folheando Fé
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {/* Reader settings */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost" size="sm"
                className="text-[hsl(var(--paper))]/80 hover:text-[hsl(var(--book-gold-soft))] hover:bg-white/5 text-xs"
                title="Ajustes de leitura"
              >
                <Settings2 className="h-4 w-4 md:mr-1.5" />
                <span className="hidden md:inline">Leitura</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="bottom" align="end"
              className="w-72 bg-[hsl(var(--paper))] border-[hsl(var(--paper-rule))]/60 text-[hsl(var(--paper-ink))]"
            >
              <p className="text-[10px] tracking-[0.3em] text-[hsl(var(--book-gold))] uppercase mb-3">
                Ajustes do leitor
              </p>

              {/* Font size */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-serif flex items-center gap-1.5">
                    <Type className="h-3.5 w-3.5" /> Tamanho da fonte
                  </span>
                  <span className="text-[10px] text-[hsl(var(--paper-muted))]">
                    {Math.round(fontScale * 100)}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontScale(Math.max(0.75, +(fontScale - 0.1).toFixed(2)))}
                    className="h-7 w-7 rounded border border-[hsl(var(--paper-rule))] font-serif"
                  >A-</button>
                  <input
                    type="range" min={0.75} max={1.6} step={0.05}
                    value={fontScale}
                    onChange={(e) => setFontScale(parseFloat(e.target.value))}
                    className="flex-1 accent-[hsl(var(--book-purple))]"
                  />
                  <button
                    onClick={() => setFontScale(Math.min(1.6, +(fontScale + 0.1).toFixed(2)))}
                    className="h-7 w-7 rounded border border-[hsl(var(--paper-rule))] font-serif"
                  >A+</button>
                </div>
              </div>

              {/* Line spacing */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-serif flex items-center gap-1.5">
                    <AlignJustify className="h-3.5 w-3.5" /> Espaçamento
                  </span>
                  <span className="text-[10px] text-[hsl(var(--paper-muted))]">
                    {lineHeight.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range" min={1.4} max={3.0} step={0.05}
                  value={lineHeight}
                  onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                  className="w-full accent-[hsl(var(--book-purple))]"
                />
              </div>

              {/* Margin adjustment */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-serif flex items-center gap-1.5">
                    <BookMarked className="h-3.5 w-3.5" /> Margens
                  </span>
                  <span className="text-[10px] text-[hsl(var(--paper-muted))]">
                    {readerMargin}rem
                  </span>
                </div>
                <input
                  type="range" min={0} max={5} step={0.5}
                  value={readerMargin}
                  onChange={(e) => setReaderMargin(parseFloat(e.target.value))}
                  className="w-full accent-[hsl(var(--book-purple))]"
                />
              </div>

              {/* Alignment */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-serif flex items-center gap-1.5">
                    <AlignJustify className="h-3.5 w-3.5" /> Alinhamento
                  </span>
                </div>
                <div className="flex bg-[hsl(var(--paper-rule))]/20 p-1 rounded-md">
                  {(['left', 'center', 'right', 'justify'] as const).map((a) => (
                    <button
                      key={a}
                      onClick={() => setReaderAlign(a)}
                      className={`flex-1 py-1 rounded text-[10px] uppercase font-serif transition-colors ${
                        readerAlign === a
                          ? 'bg-[hsl(var(--book-purple))] text-[hsl(var(--paper))]'
                          : 'hover:bg-[hsl(var(--paper-rule))]/30'
                      }`}
                    >
                      {a === 'left' && 'Esq'}
                      {a === 'center' && 'Cent'}
                      {a === 'right' && 'Dir'}
                      {a === 'justify' && 'Just'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-serif flex items-center gap-1.5">
                    <Palette className="h-3.5 w-3.5" /> Tema
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {([
                    { k: 'light', label: 'Claro', icon: <Sun className="h-3.5 w-3.5" /> },
                    { k: 'sepia', label: 'Sépia', icon: <Palette className="h-3.5 w-3.5" /> },
                    { k: 'dark', label: 'Escuro', icon: <Moon className="h-3.5 w-3.5" /> },
                  ] as const).map((t) => (
                    <button
                      key={t.k}
                      onClick={() => setReaderTheme(t.k as ReaderTheme)}
                      className={`flex flex-col items-center gap-1 py-2 rounded border text-[10px] tracking-widest uppercase font-serif transition-colors ${
                        readerTheme === t.k
                          ? 'border-[hsl(var(--book-purple))] bg-[hsl(var(--book-purple))]/10'
                          : 'border-[hsl(var(--paper-rule))] hover:bg-[hsl(var(--paper-rule))]/20'
                      }`}
                    >
                      {t.icon}
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Download EPUB */}
          <a
            href="/downloads/folheando-fe.epub"
            download
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-xs text-[hsl(var(--paper))]/80 hover:text-[hsl(var(--book-gold-soft))] hover:bg-white/5 transition-colors"
            title="Baixar livro em EPUB"
          >
            <Download className="h-4 w-4" />
            <span className="hidden md:inline">EPUB</span>
          </a>

          {/* Sumário / Busca / Marcações */}
          <Sheet open={tocOpen} onOpenChange={setTocOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost" size="sm"
                className="text-[hsl(var(--paper))]/80 hover:text-[hsl(var(--book-gold-soft))] hover:bg-white/5 text-xs"
              >
                <List className="h-4 w-4 md:mr-1.5" />
                <span className="hidden md:inline">Sumário</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[340px] bg-[hsl(var(--paper))] border-r-[hsl(var(--book-gold))]/30 overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle
                  className="font-serif text-[hsl(var(--book-purple))]"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  Sumário
                </SheetTitle>
              </SheetHeader>

              {/* Search */}
              <div className="mt-4 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[hsl(var(--paper-muted))]" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar título ou bloco…"
                  className="pl-9 h-9 text-sm bg-[hsl(var(--paper))] border-[hsl(var(--paper-rule))]/60 font-serif"
                />
              </div>

              {filteredResults ? (
                <div className="mt-4 space-y-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--book-gold))] mb-2">
                    {filteredResults.length} resultado{filteredResults.length !== 1 && 's'}
                  </p>
                  {filteredResults.length === 0 && (
                    <p className="text-xs italic text-[hsl(var(--paper-muted))] font-serif">
                      Nenhum poema encontrado.
                    </p>
                  )}
                  {filteredResults.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => { jumpTo(r.page); setSearchQuery(''); }}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10"
                    >
                      <p className="text-sm font-serif text-[hsl(var(--paper-ink))]">
                        {r.title}
                      </p>
                      <p className="text-[10px] italic text-[hsl(var(--paper-muted))]">
                        {r.blockLabel} · pg. {r.page + 1}
                      </p>
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mt-4 space-y-1">
                    <button
                      onClick={() => jumpTo(0)}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif text-[hsl(var(--paper-ink))]"
                    >
                      Capa
                    </button>
                    {BLOCKS.map((bk, i) => (
                      <button
                        key={bk}
                        onClick={() => jumpTo(blockStarts[i])}
                        className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 flex items-baseline gap-3"
                      >
                        <span className="text-[hsl(var(--book-gold))] font-serif text-xs w-6">
                          {ROMAN[i]}
                        </span>
                        <span className="flex-1 text-sm font-serif text-[hsl(var(--paper-ink))]">
                          {themeTitles[bk]}
                          <span className="block text-[10px] italic text-[hsl(var(--paper-muted))]">
                            {allPoems[bk]?.length ?? 0} poemas · pg. {blockStarts[i] + 1}
                          </span>
                        </span>
                      </button>
                    ))}
                    <div className="h-px bg-[hsl(var(--paper-rule))]/60 my-3" />
                    <button
                      onClick={() => jumpTo(notePage)}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2"
                    >
                      <StickyNote className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Nota ao leitor
                    </button>
                    <button
                      onClick={() => jumpTo(groupsPage)}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2"
                    >
                      <Users2 className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Grupos de Oração
                    </button>
                    <button
                      onClick={() => jumpTo(diaryPage)}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2"
                    >
                      <Feather className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Diário Espiritual
                    </button>
                    <button
                      onClick={() => jumpTo(progressPage)}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2"
                    >
                      <BookMarked className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Sua Jornada
                    </button>
                    <button
                      onClick={() => jumpTo(pendingPage)}
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2"
                    >
                      <Bookmark className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Reflexões pendentes
                    </button>
                    <Link
                      to="/validacao"
                      className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-[10px] tracking-[0.2em] uppercase text-[hsl(var(--book-gold))]/40 flex items-center gap-2 mt-4"
                    >
                      Acesso Técnico
                    </Link>
                  </div>

                  {/* Marcações */}
                  {bookmarkedEntries.length > 0 && (
                    <div className="mt-6">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--book-gold))] flex items-center gap-1.5 mb-2 px-3">
                        <BookmarkCheck className="h-3 w-3" /> Marcações ({bookmarkedEntries.length})
                      </p>
                      <div className="space-y-1">
                        {bookmarkedEntries.map((e) => (
                          <button
                            key={e.id}
                            onClick={() => jumpTo(e.page)}
                            className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10"
                          >
                            <p className="text-sm font-serif text-[hsl(var(--paper-ink))]">{e.title}</p>
                            <p className="text-[10px] italic text-[hsl(var(--paper-muted))]">
                              {e.blockLabel} · pg. {e.page + 1}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Anotações */}
                  {notedEntries.length > 0 && (
                    <div className="mt-6 pb-6">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--book-gold))] flex items-center gap-1.5 mb-2 px-3">
                        <StickyNote className="h-3 w-3" /> Anotações ({notedEntries.length})
                      </p>
                      <div className="space-y-1">
                        {notedEntries.map((e) => (
                          <button
                            key={e.id}
                            onClick={() => jumpTo(e.page)}
                            className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10"
                          >
                            <p className="text-sm font-serif text-[hsl(var(--paper-ink))]">{e.title}</p>
                            <p className="text-[10px] italic text-[hsl(var(--paper-muted))] line-clamp-2">
                              {notes[e.id]}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Book */}
      <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center">
        <button
          onClick={flipPrev}
          aria-label="Página anterior"
          className="hidden md:flex absolute left-0 z-10 h-14 w-14 rounded-full items-center justify-center text-[hsl(var(--paper))]/70 hover:text-[hsl(var(--book-gold-soft))] hover:bg-white/5 transition-all"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div
          className="shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6)]"
          style={{ width: 'min(92vw, 900px)', height: 'min(78vh, 640px)' }}
        >
          <HTMLFlipBook
            ref={bookRef}
            width={420}
            height={620}
            minWidth={315}
            maxWidth={480}
            minHeight={460}
            maxHeight={720}
            size="stretch"
            drawShadow
            flippingTime={700}
            showCover
            mobileScrollSupport
            usePortrait
            maxShadowOpacity={0.5}
            onFlip={(e: any) => setCurrent(e.data)}
            onInit={handleInit}
            className="book-shadow"
            style={{}}
            startPage={savedPage < pages.length ? savedPage : 0}
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick={false}
            clickEventForward
            autoSize
            startZIndex={0}
          >
            {pages}
          </HTMLFlipBook>
        </div>

        <button
          onClick={flipNext}
          aria-label="Próxima página"
          className="hidden md:flex absolute right-0 z-10 h-14 w-14 rounded-full items-center justify-center text-[hsl(var(--paper))]/70 hover:text-[hsl(var(--book-gold-soft))] hover:bg-white/5 transition-all"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl mt-4 px-4 md:px-8 flex items-center justify-between text-[hsl(var(--paper))]/60">
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={flipPrev} aria-label="Página anterior" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={flipNext} aria-label="Próxima página" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 flex items-center gap-3 mx-4">
          <span className="text-[10px] tracking-[0.25em] font-serif italic min-w-[3rem]">
            {current + 1} / {pages.length}
          </span>
          <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[hsl(var(--book-gold))] transition-all"
              style={{ width: `${((current + 1) / pages.length) * 100}%` }}
            />
          </div>
          <span className="text-[10px] tracking-[0.25em] font-serif italic hidden sm:inline">
            {readPoems.length}/{totalPoems} lidos
          </span>
        </div>
      </footer>

      <div className="sr-only" aria-hidden={adminHiddenTrigger === 0}>
        <AdminPanel onAddPoem={handleAddPoem} />
      </div>
    </div>
  );
};
