import { forwardRef, useMemo, useRef, useState, useEffect } from 'react';
// @ts-ignore -- react-pageflip has no types
import HTMLFlipBook from 'react-pageflip';
import { BookPage } from './book/BookPage';
import { poemsData, themeTitles, Poem } from '@/data/poems';
import { loadCustomPoems, mergePoems } from '@/utils/poemLoader';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import {
  ChevronLeft, ChevronRight, Volume2, Square, Share2, BookMarked,
  List, Feather, Users2,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { GroupSelector } from '@/components/GroupSelector';
import { DiarySection } from '@/components/DiarySection';
import { ProgressSection } from '@/components/ProgressSection';
import { AdminPanel } from '@/components/AdminPanel';
import { saveCustomPoem, generatePoemId } from '@/utils/poemLoader';

const ROMAN = ['I','II','III','IV','V','VI'];
const BLOCKS = ['bloco-1','bloco-2','bloco-3','bloco-4','bloco-5','bloco-6'];

interface DiaryEntry { text: string; date: string; }

/* ---------- Individual page components (forwardRef required by react-pageflip) ---------- */

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
        <p className="text-[10px] tracking-[0.5em] text-[hsl(var(--book-gold-soft))] mb-4">
          E V A L D O   P O E T A
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
          200  POEMAS  ·  6  BLOCOS
        </p>
        <p className="text-[8px] tracking-[0.3em] text-[hsl(var(--paper))]/60">
          MÉTODO PCH · POESIA QUE CURA O HOMEM
        </p>
      </div>
    </div>
  </BookPage>
));
CoverPage.displayName = 'CoverPage';

const CopyrightPage = forwardRef<HTMLDivElement>((_, ref) => (
  <BookPage ref={ref}>
    <div className="h-full flex flex-col justify-center px-10 py-12">
      <h2 className="text-2xl font-serif text-[hsl(var(--book-purple))] mb-1" style={{ fontFamily: 'Lora, serif' }}>
        Folheando Fé
      </h2>
      <p className="italic text-sm text-[hsl(var(--paper-muted))] mb-4">
        poesia do meu grupo de oração
      </p>
      <div className="h-px w-16 bg-[hsl(var(--paper-rule))] mb-8" />
      <div className="space-y-3 text-xs leading-relaxed font-serif text-[hsl(var(--paper-ink))]/85">
        <p>Primeira edição — 2026</p>
        <p>© Evaldo Poeta. Todos os direitos reservados.</p>
        <p className="text-[hsl(var(--paper-muted))]">
          Nenhuma parte desta obra pode ser reproduzida sem a devida autorização do autor.
        </p>
        <div className="h-px w-8 bg-[hsl(var(--paper-rule))] my-4" />
        <p>Composição e diagramação: <span className="italic">Evaldo.OS</span></p>
        <p>Tipografia: Lora, Montserrat e Dancing Script</p>
        <div className="h-px w-8 bg-[hsl(var(--paper-rule))] my-4" />
        <p className="italic">
          Dedicado ao Grupo de Oração Filhos da Luz,
          <br />
          Paróquia Nossa Senhora dos Prazeres — Rochdale,
          <br />
          Diocese de Osasco.
        </p>
      </div>
    </div>
  </BookPage>
));
CopyrightPage.displayName = 'CopyrightPage';

const EpigraphPage = forwardRef<HTMLDivElement>((_, ref) => (
  <BookPage ref={ref} folio="iii">
    <div className="h-full flex flex-col items-center justify-center px-10 text-center">
      <p className="italic text-lg md:text-xl font-serif text-[hsl(var(--paper-ink))] leading-relaxed max-w-xs">
        “A tua palavra é lâmpada
        <br />
        para os meus pés
        <br />
        e luz para o meu caminho.”
      </p>
      <div className="h-px w-16 bg-[hsl(var(--paper-rule))] my-6" />
      <p className="text-[10px] tracking-[0.35em] text-[hsl(var(--paper-muted))]">
        SALMO 119, 105
      </p>
    </div>
  </BookPage>
));
EpigraphPage.displayName = 'EpigraphPage';

interface TocPageProps { onJump: (page: number) => void; blockStarts: number[]; extras: { label: string; page: number }[]; }
const TocPage = forwardRef<HTMLDivElement, TocPageProps>(({ onJump, blockStarts, extras }, ref) => (
  <BookPage ref={ref} folio="iv">
    <div className="h-full flex flex-col px-8 pt-16 pb-10">
      <h2 className="text-3xl font-serif text-[hsl(var(--book-purple))] mb-2" style={{ fontFamily: 'Lora, serif' }}>
        Sumário
      </h2>
      <div className="h-px w-full bg-[hsl(var(--paper-rule))] mb-5" />
      <div className="flex-1 overflow-hidden">
        <ul className="space-y-3.5">
          {BLOCKS.map((bk, i) => {
            const count = poemsData[bk]?.length ?? 0;
            return (
              <li key={bk}>
                <button
                  onClick={() => onJump(blockStarts[i])}
                  className="group w-full flex items-baseline gap-3 text-left hover:text-[hsl(var(--book-purple))] transition-colors"
                >
                  <span className="text-[hsl(var(--book-gold))] font-serif text-sm w-8 shrink-0">
                    {ROMAN[i]}
                  </span>
                  <span className="flex-1 font-serif text-sm text-[hsl(var(--paper-ink))] group-hover:underline">
                    {themeTitles[bk]}
                    <span className="block text-[10px] italic text-[hsl(var(--paper-muted))] mt-0.5">
                      {count} poemas
                    </span>
                  </span>
                  <span className="text-xs text-[hsl(var(--paper-muted))] font-serif">
                    {blockStarts[i] + 1}
                  </span>
                </button>
              </li>
            );
          })}
          <li className="pt-2">
            <div className="h-px w-full bg-[hsl(var(--paper-rule))]/60 my-3" />
          </li>
          {extras.map((ex) => (
            <li key={ex.label}>
              <button
                onClick={() => onJump(ex.page)}
                className="group w-full flex items-baseline gap-3 text-left hover:text-[hsl(var(--book-purple))] transition-colors"
              >
                <span className="text-[hsl(var(--book-gold))] font-serif text-sm w-8 shrink-0">✦</span>
                <span className="flex-1 font-serif text-sm italic text-[hsl(var(--paper-ink))] group-hover:underline">
                  {ex.label}
                </span>
                <span className="text-xs text-[hsl(var(--paper-muted))] font-serif">
                  {ex.page + 1}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </BookPage>
));
TocPage.displayName = 'TocPage';

interface BlockCoverProps { index: number; title: string; count: number; }
const BlockCoverPage = forwardRef<HTMLDivElement, BlockCoverProps>(({ index, title, count }, ref) => (
  <BookPage ref={ref} variant="cover">
    <div
      className="relative h-full w-full flex flex-col items-center justify-center p-10 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at center, hsl(var(--book-purple)) 0%, hsl(var(--book-purple-deep)) 100%)',
      }}
    >
      <div className="absolute inset-4 border border-[hsl(var(--book-gold-soft))]/40 pointer-events-none" />
      <p className="text-xs tracking-[0.5em] text-[hsl(var(--book-gold-soft))] mb-2">BLOCO</p>
      <p
        className="text-4xl font-serif text-[hsl(var(--book-gold-soft))] mb-6"
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
  onToggleRead: (id: string, v: boolean) => void;
}

const PoemPage = forwardRef<HTMLDivElement, PoemPageProps>(
  ({ poem, runningHead, marker, folio, isRead, onToggleRead }, ref) => {
    const [speaking, setSpeaking] = useState(false);
    const [showReflection, setShowReflection] = useState(false);

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
      } catch {}
    };

    const hasExtra = poem.reflection || poem.inspiration;

    return (
      <BookPage ref={ref} runningHead={runningHead + ` · ${marker}`} folio={folio}>
        <div className="h-full flex flex-col px-8 pt-14 pb-10">
          {/* Title */}
          <div className="text-center mb-3 shrink-0">
            <h3
              className="text-xl md:text-2xl font-serif text-[hsl(var(--book-purple))] leading-tight"
              style={{ fontFamily: 'Lora, serif' }}
            >
              {poem.title}
            </h3>
            <div className="h-px w-10 bg-[hsl(var(--book-gold))] mx-auto mt-3" />
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto min-h-0 poem-scroll">
            <p
              className="whitespace-pre-line italic font-serif text-[hsl(var(--paper-ink))] text-center leading-[1.85] text-[0.92rem] md:text-[0.98rem] py-4"
              style={{ fontFamily: 'Lora, serif' }}
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
          </div>

          {/* Signature + controls */}
          <div className="shrink-0 mt-3 space-y-2">
            <p className="text-center italic text-xs text-[hsl(var(--paper-muted))] font-serif">
              Evaldo Poeta
            </p>
            <div className="flex items-center justify-center gap-1.5 pt-1">
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
  }
);
PoemPage.displayName = 'PoemPage';

interface SectionPageProps { title: string; runningHead: string; folio: number; children: React.ReactNode; }
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
  )
);
SectionPage.displayName = 'SectionPage';

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
  )
);
ColophonPage.displayName = 'ColophonPage';

/* ---------- Main Book Reader ---------- */

export const BookReader = () => {
  const bookRef = useRef<any>(null);
  const [readPoems, setReadPoems] = useLocalStorage<string[]>('readPoems', []);
  const [diaryEntries, setDiaryEntries] = useLocalStorage<DiaryEntry[]>('spiritualDiaryEntries', []);
  const [customPoems, setCustomPoems] = useState(loadCustomPoems());
  const [current, setCurrent] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [adminHiddenTrigger, setAdminHiddenTrigger] = useState(0);

  const allPoems = useMemo(() => mergePoems(poemsData, customPoems), [customPoems]);
  const totalPoems = useMemo(
    () => Object.values(allPoems).reduce((s, ps) => s + ps.length, 0),
    [allPoems]
  );

  const handleToggleRead = (id: string, v: boolean) => {
    setReadPoems((prev) => (v ? [...new Set([...prev, id])] : prev.filter((x) => x !== id)));
  };

  const handleAddPoem = (p: { theme: string; title: string; text: string; reflection: string }) => {
    saveCustomPoem(p.theme, { id: generatePoemId(p.theme), title: p.title, text: p.text, reflection: p.reflection });
    setCustomPoems(loadCustomPoems());
    toast({ title: 'Poema adicionado ao livro 🌟' });
  };

  const handleSaveDiary = (t: string) => setDiaryEntries((p) => [...p, { text: t, date: new Date().toISOString() }]);
  const handleDeleteDiary = (i: number) => setDiaryEntries((p) => p.filter((_, x) => x !== i));

  // Build page sequence & compute jump indices
  const { pages, blockStarts, groupsPage, diaryPage, progressPage } = useMemo(() => {
    const seq: React.ReactNode[] = [];
    seq.push(<CoverPage key="cover" />);          // 0
    seq.push(<CopyrightPage key="copy" />);       // 1
    seq.push(<EpigraphPage key="epi" />);         // 2
    const tocIndex = seq.length;
    // placeholder — will replace after we know indices
    seq.push(<div key="toc-placeholder" />);
    const bStarts: number[] = [];
    BLOCKS.forEach((bk, i) => {
      bStarts.push(seq.length);
      const list = allPoems[bk] ?? [];
      seq.push(
        <BlockCoverPage
          key={`bc-${bk}`}
          index={i}
          title={themeTitles[bk]}
          count={list.length}
        />
      );
      list.forEach((poem, pi) => {
        seq.push(
          <PoemPage
            key={poem.id}
            poem={poem}
            runningHead={themeTitles[bk]}
            marker={`${ROMAN[i]} · ${String(pi + 1).padStart(2, '0')}`}
            folio={seq.length + 1}
            isRead={readPoems.includes(poem.id)}
            onToggleRead={handleToggleRead}
          />
        );
      });
    });
    const gPage = seq.length;
    seq.push(
      <SectionPage key="groups" title="Grupos de Oração" runningHead="COMUNIDADE" folio={seq.length + 1}>
        <GroupSelector />
      </SectionPage>
    );
    const dPage = seq.length;
    seq.push(
      <SectionPage key="diary" title="Diário Espiritual" runningHead="DIÁRIO" folio={seq.length + 1}>
        <DiarySection
          entries={diaryEntries}
          onSaveEntry={handleSaveDiary}
          onDeleteEntry={handleDeleteDiary}
        />
      </SectionPage>
    );
    const pPage = seq.length;
    seq.push(
      <SectionPage key="prog" title="Sua Jornada" runningHead="PROGRESSO" folio={seq.length + 1}>
        <ProgressSection
          readCount={readPoems.length}
          totalPoems={totalPoems}
          onOpenModal={() => {}}
        />
      </SectionPage>
    );
    seq.push(<ColophonPage key="colo" onOpenAdmin={() => setAdminHiddenTrigger((v) => v + 1)} />);

    // Replace TOC placeholder now that indices are known
    seq[tocIndex] = (
      <TocPage
        key="toc"
        onJump={(p) => { bookRef.current?.pageFlip()?.flip(p); setTocOpen(false); }}
        blockStarts={bStarts}
        extras={[
          { label: 'Grupos de Oração', page: gPage },
          { label: 'Diário Espiritual', page: dPage },
          { label: 'Sua Jornada', page: pPage },
        ]}
      />
    );

    return { pages: seq, blockStarts: bStarts, groupsPage: gPage, diaryPage: dPage, progressPage: pPage };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPoems, readPoems, diaryEntries, totalPoems]);

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext();
  const jumpTo = (p: number) => { bookRef.current?.pageFlip()?.flip(p); setTocOpen(false); };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') flipNext();
      if (e.key === 'ArrowLeft') flipPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center py-6 px-2 md:py-10"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at top, hsl(var(--book-purple-deep) / 0.95) 0%, hsl(265 70% 5%) 100%)',
      }}
    >
      {/* Top toolbar */}
      <header className="w-full max-w-5xl flex items-center justify-between px-4 md:px-8 mb-4 text-[hsl(var(--paper))]/80">
        <div className="flex items-center gap-2">
          <BookMarked className="h-4 w-4 text-[hsl(var(--book-gold-soft))]" />
          <span className="text-xs tracking-[0.3em] font-serif italic hidden sm:inline">
            Folheando Fé
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sheet open={tocOpen} onOpenChange={setTocOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-[hsl(var(--paper))]/80 hover:text-[hsl(var(--book-gold-soft))] hover:bg-white/5 text-xs">
                <List className="h-4 w-4 mr-1.5" /> Sumário
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[hsl(var(--paper))] border-r-[hsl(var(--book-gold))]/30">
              <SheetHeader>
                <SheetTitle className="font-serif text-[hsl(var(--book-purple))]" style={{ fontFamily: 'Lora, serif' }}>
                  Sumário
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-1">
                <button onClick={() => jumpTo(0)} className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif text-[hsl(var(--paper-ink))]">
                  Capa
                </button>
                {BLOCKS.map((bk, i) => (
                  <button
                    key={bk}
                    onClick={() => jumpTo(blockStarts[i])}
                    className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 flex items-baseline gap-3"
                  >
                    <span className="text-[hsl(var(--book-gold))] font-serif text-xs w-6">{ROMAN[i]}</span>
                    <span className="flex-1 text-sm font-serif text-[hsl(var(--paper-ink))]">
                      {themeTitles[bk]}
                      <span className="block text-[10px] italic text-[hsl(var(--paper-muted))]">
                        {allPoems[bk]?.length ?? 0} poemas · pg. {blockStarts[i] + 1}
                      </span>
                    </span>
                  </button>
                ))}
                <div className="h-px bg-[hsl(var(--paper-rule))]/60 my-3" />
                <button onClick={() => jumpTo(groupsPage)} className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2">
                  <Users2 className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Grupos de Oração
                </button>
                <button onClick={() => jumpTo(diaryPage)} className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2">
                  <Feather className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Diário Espiritual
                </button>
                <button onClick={() => jumpTo(progressPage)} className="w-full text-left py-2 px-3 rounded hover:bg-[hsl(var(--book-purple))]/10 text-sm font-serif italic text-[hsl(var(--paper-ink))] flex items-center gap-2">
                  <BookMarked className="h-3.5 w-3.5 text-[hsl(var(--book-gold))]" /> Sua Jornada
                </button>
              </div>
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

        <div className="shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6)]">
          <HTMLFlipBook
            ref={bookRef}
            width={420}
            height={620}
            minWidth={280}
            maxWidth={520}
            minHeight={420}
            maxHeight={780}
            size="stretch"
            drawShadow
            flippingTime={700}
            showCover
            mobileScrollSupport
            usePortrait
            maxShadowOpacity={0.5}
            onFlip={(e: any) => setCurrent(e.data)}
            onInit={(e: any) => setTotalPages(e.data.pages ?? pages.length)}
            className="book-shadow"
            style={{}}
            startPage={0}
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

      {/* Footer bar */}
      <footer className="w-full max-w-5xl mt-4 px-4 md:px-8 flex items-center justify-between text-[hsl(var(--paper))]/60">
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={flipPrev} className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={flipNext} className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
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

      {/* Hidden admin (mounted so hidden trigger can open its dialog) */}
      <div className="sr-only" aria-hidden={adminHiddenTrigger === 0}>
        <AdminPanel onAddPoem={handleAddPoem} />
      </div>
    </div>
  );
};
