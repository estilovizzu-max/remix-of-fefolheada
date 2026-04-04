export interface Poem {
  id: string;
  title: string;
  text: string;
  reflection?: string;
  inspiration?: string;
}

export interface PoemsData {
  [key: string]: Poem[];
}

export const themeTitles: { [key: string]: string } = {
  'bloco-1': 'O Despertar da Identidade',
  'bloco-2': 'A Decisão e o Combate Espiritual',
  'bloco-3': 'Cura e Restauração',
  'bloco-4': 'O Poder do Espírito Santo',
  'bloco-5': 'Esperança, Adoração e Eternidade',
  'bloco-6': 'Oficina do Poeta (Curso Prático)'
};

export const readingAchievementsList: { name: string; desc: string; icon: string; goal: number | 'all' }[] = [
  { name: 'Iniciante', desc: 'Leia 5 poemas', icon: '🌱', goal: 5 },
  { name: 'Caminhante', desc: 'Leia 15 poemas', icon: '🚶', goal: 15 },
  { name: 'Persistente', desc: 'Leia 30 poemas', icon: '⚡', goal: 30 },
  { name: 'Iluminado', desc: 'Leia 50 poemas', icon: '✨', goal: 50 },
  { name: 'Mestre da Luz', desc: 'Leia todos os poemas', icon: '👑', goal: 'all' }
];

export const diaryAchievementsList = [
  { name: 'Primeiro Passo', desc: 'Primeira anotação', icon: '📝', goal: 1 },
  { name: 'Reflexivo', desc: '5 anotações', icon: '💭', goal: 5 },
  { name: 'Espiritual', desc: '10 anotações', icon: '🙏', goal: 10 }
];

export const poemsData: PoemsData = {
  'bloco-1': [
    {
      id: 'p1-1',
      title: 'Sou Filho da Luz',
      text: `Deixe sua luz brilhar, você precisará acender
o que está te impedindo terá que logo resolver.
Eu sou luz. Nasci para brilhar.
Filho, eu te amo, Pare um pouco para escutar.
Eu vim ao mundo em amor, Para a liberdade dar.
Deixa as prisões para trás, Venha agora me encontrar.
Sou teu Deus, estou contigo, Sempre perto a te guiar.
Derramando a minha graça Sobre quem soube confiar.`,
      reflection: 'Muitas vezes, sabemos que temos uma luz, mas algo a impede de brilhar: medo, vergonha ou feridas do passado. Deus hoje te convida a resolver o que te impede.',
      inspiration: 'Senhor, eu retiro a barreira do...'
    },
    {
      id: 'p1-2',
      title: 'Filho da Luz (O Discípulo)',
      text: `Quando eu cheguei na tua casa, os meus pés não me lavou;
esta mulher lavou com lágrimas, e com os cabelos enxugou.
Para ser o meu discípulo, minha voz deve escutar;
tem que colocar em prática tudo o que eu vim te ensinar.
E para o teu crescimento, o que acabo de dizer:
se concentre em minha voz, se você quer aprender.
Pois a luz do meu Espírito acendeu pra te guiar;
o cego não guia outro — tá na hora de brilhar.
Veja agora com clareza o que mostro pra você;
irmãos, pra ser discípulo, escute o que vou dizer:
O Espírito te guia onde você deve ir;
se entregue no caminho, se levante pra seguir.
Reconheça seu pecado, o Senhor quer perdoar;
faça como a mulher, se coloque pra adorar.
Aceite o Senhor Jesus, Ele veio te salvar;
pois a Sua misericórdia é graça pra te dar.
Pegue a bênção nesta noite, se converta pra Jesus;
nosso grupo de oração se chama Filho da Luz.
Sua luz resplandeceu, Cristo veio acender;
Sua luz está brilhando, já parou pra perceber?
O que queres que te faça, o Senhor tá perguntando —
“Que eu veja, meu Senhor!”
Sinta: Ele está te curando.
A Sua misericórdia reacende Sua luz;
o Senhor cura a cegueira — olhe agora para a Cruz.
Enxergue o que precisa, saia dessa escuridão;
o Senhor está tocando, curando sua visão.`,
      reflection: 'A mulher pecadora lavou os pés de Jesus com lágrimas porque reconheceu quem Ele era. O discipulado começa na humildade e na escuta.',
      inspiration: 'Mestre, lava meus olhos para que eu veja...'
    },
    {
      id: 'p1-3',
      title: 'Há um Brilho Escondido',
      text: `Há um brilho escondido,
Eu te digo: retiro o véu, meu amigo,
Abro o céu de luz interior.
Há um trono iluminado,
Banhado de ouro, de amor.
Um tesouro na mente,
No coração a gente sente —
Mas não fica permanente...
Encontra o remédio da dor.
Através desta poesia,
Sinta a paz e a alegria
Que vêm de Jesus, Salvador.`,
      reflection: 'Existe um "trono iluminado" dentro de você, onde Deus habita. Às vezes, a dor do mundo coloca um véu sobre esse brilho.',
      inspiration: 'Dentro de mim habita um tesouro que...'
    },
    {
      id: 'p1-4',
      title: 'Do Escondido ao Palco',
      text: `Eu sou luz. Nasci para brilhar.
Mesmo quando a vida tenta me apagar,
Quando as dores querem me esconder,
Sei que meu destino é resplandecer.
Muitos desistem sem saber, que nasceram também para acender — para ser farol, estrela, chama, mesmo quando a escuridão reclama.
Ninguém apaga a luz interior, se você não entrega o interruptor.
Diga comigo com convicção: “Eu sou luz, sou direção.”
Fui chamado a brilhar nas trevas, Jesus me tirou das amarras e regras.
Aceitei viver com decisão, e nada abaixo disso é minha missão.
Neste dia, Deus aumenta minha energia, para que minha luz não se apague na correria.
Existe um meio entre você e Deus, um processo que firma os passos teus.
A luz é Cristo, e vive em mim, desde o ventre, desde o princípio, sim!
Ninguém pode apagar essa centelha sagrada, que em meu interior foi despertada.
Na fecundação, brilhei pela primeira vez, no ventre da minha mãe, como quem renasce outra vez.
Ela deixou de ser apenas mulher, e se tornou luz também, por minha fé.
Com minha chegada, tudo mudou, no lar, minha luz tudo tocou.
Fiquei escondido na vergonha e solidão, mas a luz nunca se foi do meu coração.
Até que um dia, alguém mostrou o processo, eu abracei a coragem, superei o regresso.
E aqui estou, aceso, no palco da vida, com a luz de Cristo, alma renascida.
Nada nem ninguém pode me apagar, porque foi Deus quem veio me acender.
Minha missão é brilhar e iluminar, e assim, com fé, eu vou viver.`,
      reflection: '"Ninguém apaga a luz interior se você não entrega o interruptor". Esta é uma verdade poderosa sobre autorresponsabilidade.',
      inspiration: 'Eu pego de volta o interruptor e decido...'
    },
    {
      id: 'p1-5',
      title: 'Despertar para a Luz',
      text: `Desperta agora, meu amigo, ouve a voz do Senhor.
Levanta-te dentre os mortos, que Cristo já te iluminou.
Ele te chama para a luz, para a ação e o amor,
Pois a vontade d'Ele é que conheças o Senhor.
Você é filho da luz, das trevas pode sair;
Aceite a graça divina, deixe-se conduzir.
O Espírito te guia, mostrando o caminho a trilhar;
Siga suas orientações, não deixe de escutar.
Seja esperto e fique perto do Senhor,
Faça como Bartimeu, grite com fé e fervor:
"Jesus, tem piedade, transforma meu coração!"
Então tua vida, certamente, será cheia de alegria,
Se de noite ou de dia vigiar tua conduta com sabedoria.
Aceite a mudança, ouça o chamado do Senhor;
Ele está sempre ao teu lado, curando toda dor.
Levanta agora, meu amigo, sai dessa prostração,
Anime-se, e alegre o coração!
Abandone a vida antiga, receba a vida nova que chegou,
Deixe a escuridão pra trás — viva o brilho que o Senhor revelou.
Toma da água viva, com alegria de viver,
Meditando na Palavra, que é luz para o teu ser.
No passado, éramos trevas, mas agora somos luz;
O fruto dessa luz é bondade, justiça e verdade,
Pois Cristo é a Verdade, que nos liberta e conduz.`,
      reflection: 'Bartimeu não ficou calado quando ouviu que Jesus passava. Ele gritou acima da multidão. A prostração nos deixa mudos, mas a fé nos devolve a voz.',
      inspiration: 'Eu me levanto do chão e grito...'
    }
  ],
  'bloco-2': [
    {
      id: 'p2-1',
      title: 'Nunca Pare de Lutar',
      text: `Alguém me tocou... Senti uma força sair,
Manifestei minha Palavra — a mulher hemorroísa foi curada por não desistir.
Encontrei-me com Jesus agora posso me salvar, é sair do mundo interno e do pecado se libertar.
Deus nos escolheu, neste mundo nos colocou, preparou em nossa mãe, que com amor nos cuidou.
Por amor à humanidade, Jesus morreu e ressuscitou.
Não duvide pois a Graça se entregue em oração, Ele já manifestou!
A fonte de salvação, se levante e vá beber. Seja firme, meu irmão!
Éramos escravos do pecado, mas tudo muda com a decisão.
Renunciar à impiedade, aos desejos deste mundo vão,
Pois o tempo está chegando — Jesus virá com a separação: das ovelhas e cordeiros, Ele vai nos separar.
Pelo batismo, nós morremos, e para o céu que vamos caminhar.
E se quiser no céu entrar, do pecado há que se arrepender.
A justiça de Deus não falha — tome cuidado, podes crer!
Nunca perca a esperança, guarde Jesus no coração.
Pare de reclamar agora, busque firme a salvação.
Faça como a mulher que tocou no Salvador, nunca pare de lutar com fé e com fervor.`,
      reflection: 'A mulher hemorroísa teve que romper uma multidão para tocar em Jesus. Às vezes, a "multidão" são nossos próprios pensamentos de desânimo ou a opinião alheia.',
      inspiration: 'Eu rompo a multidão do medo e toco em...'
    },
    {
      id: 'p2-2',
      title: 'A Porta Aberta',
      text: `As portas do céu se abriram, ouvi a voz ressoar.
Como o som da trombeta, o Senhor veio falar.
Bendito e louvado seja, ó Deus dos nossos pais!
Que Teu nome seja eterno, glorioso pelos séculos a mais.
Em justiça e retidão, sempre age o Criador.
Na oração, enviou o anjo, trazendo ao fogo o Seu calor.
O pecado está queimando, meu irmão, pode lançar!
Já tomou sua decisão? Deixe Deus te libertar.
Pois Ele apaga a culpa, basta apenas confessar.
Abra a boca neste instante, deixe a fé te guiar!
A coragem vem do alto, pede agora, Ele te dá.
Mesmo em meio às provações, nunca deixe de adorar.
Cristo é a verdade viva, veio ao mundo pra salvar.
Quem Nele crê e O segue, nunca mais irá tombar.`,
      reflection: 'Deus já abriu a porta, mas a decisão de entrar é nossa. O "fogo" do Espírito queima o pecado, mas precisamos lançá-lo no fogo através da confissão.',
      inspiration: 'Diante da porta aberta, eu deixo para trás...'
    }
  ],
  'bloco-3': [
    {
      id: 'p3-1',
      title: 'Deus Cura as Feridas',
      text: `Deus cura as feridas, derrama o óleo pra limpar,
Cuida com carinho, no Seu tempo vai curar.
Persevere, não desista, siga firme em oração,
Viva em Deus todos os dias, sinta a paz no coração.
O Espírito de Deus agora vem te revestir,
Viva n’Ele como Maria, Jesus Cristo está aqui.
O eterno se fez homem, por amor e compaixão,
Ele é o Salvador, a Verdade e a Salvação.
O Pai envia o Espírito, vem te encher de amor,
Cobre-te com Seu manto, poder restaurador.
Quem conhece essa graça deseja compartilhar,
O Espírito que desce vem pra te transformar.
Deixe o óleo descer, deixe a cura acontecer,
Pois o toque do Senhor faz a alma renascer.`,
      reflection: 'Muitas vezes queremos uma cura imediata, mas o texto diz: "no Seu tempo vai curar". O processo de cicatrização exige que deixemos o "óleo" agir.',
      inspiration: 'Senhor, onde dói em mim, eu peço que Teu óleo...'
    }
  ],
  'bloco-4': [
    {
      id: 'p4-1',
      title: 'O Espírito Soprou',
      text: `O Espírito soprou, Como vento aqui chegou.
Com a força da Palavra, O medo se afastou.
O Espírito desceu, Encheu este lugar,
Veio como fogo, Um vento a soprar.
Sinta como brisa, Suave a tocar,
Aquecendo a sua alma E seu coração a abrasar.
Experimentamos hoje Sua graça e poder —
Louvado seja Deus, De joelhos a dizer:
Bendito seja Deus Pelo poder renovador.
Com Sua misericórdia, O Espírito do Senhor
Derrama sobre nós Sua força e Seu amor.
O Espírito é, pra mim, Um chamado a anunciar.
Ele exorta os seus filhos: Comece logo a proclamar.
Sem a graça não és nada, Ele quer te encorajar,
Te dá força e coragem Para não desanimar.
Deixe o Espírito adentrar Aí no seu coração.
Receba os dons nesta hora E coloque em ação.`,
      reflection: '"Sem a graça não és nada". Muitas vezes tentamos fazer a obra de Deus apenas com nossas forças humanas e nos cansamos. O Espírito Santo é o combustível.',
      inspiration: 'Espírito Santo, sopra sobre o meu medo e...'
    }
  ],
  'bloco-5': [
    {
      id: 'p5-1',
      title: 'Brilhe a Luz do Senhor',
      text: `Mais um ano já passou, o Senhor te sustentou.
Acredite no Seu amor, o tempo ainda não acabou.
O Dono da vida te ajuda, Ele vai te levantar.
Como está seu coração? Segue firme a esperar?
Jesus trouxe a luz, Sua verdade conduz.
Ele é teu Salvador, tu és filho da luz.
Levante-se para brilhar, não deixe a chama apagar.
Se a lâmpada estiver quebrada, é hora de consertar.
Não espere mais um dia, na escuridão, faça brilhar.
Uma luz rompeu as trevas, Cristo veio pra salvar.
Vigia tua conduta, o Senhor logo virá.
Sua vinda é gloriosa, Ele vem para separar.`,
      reflection: '"O tempo ainda não acabou". O que eu preciso consertar na minha "lâmpada" antes que o Senhor venha?',
      inspiration: 'Enquanto espero a Tua volta, eu mantenho minha chama...'
    }
  ],
  'bloco-6': [
    {
      id: 'p6-1',
      title: 'Oficina do Poeta: A Antena Ligada',
      text: `O maior inimigo do poeta no Grupo de Oração é a procrastinação disfarçada de "esperar para entender".
A poesia, no Método PCH (Poesia Cognitiva Hipnótica), é um registro da temperatura espiritual do momento.
Ela precisa ser escrita "a quente".
Não tente anotar tudo o que ele diz. Busque a "Espinha Dorsal" da mensagem.
Identifique as "Palavras de Fogo" (Rhema).
Geralmente aparecem quando o pregador altera o tom de voz ou repete a mesma ideia.
Vença o medo da página em branco nos primeiros 5 minutos.
Escreva dois versos simples. Não apague. Não risque. Deixe nascer.`,
      reflection: 'A técnica é apenas o vaso; o Espírito Santo é a água. Use esse conhecimento não para se exaltar, mas para servir.',
      inspiration: 'No próximo encontro, anote 3 Palavras de Fogo e escreva seus primeiros 2 versos.'
    }
  ]
};
