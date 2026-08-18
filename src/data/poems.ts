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
  'bloco-6': 'Epílogo: A Oficina do Poeta'
};


export const readingAchievementsList: { name: string; desc: string; icon: string; goal: number | 'all' }[] = [
  { name: 'Iniciante', desc: 'Leia 5 poemas', icon: '🌱', goal: 5 },
  { name: 'Caminhante', desc: 'Leia 15 poemas', icon: '🚶', goal: 15 },
  { name: 'Persistente', desc: 'Leia 30 poemas', icon: '⚡', goal: 30 },
  { name: 'Iluminado', desc: 'Leia 50 poemas', icon: '✨', goal: 50 },
  { name: 'Mestre da Luz', desc: 'Leia todos os poemas', icon: '👑', goal: 'all' }
];

export const diaryAchievementsList: { name: string; desc: string; icon: string; goal: number }[] = [
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
O que te impede, terá que logo resolver.
Eu sou luz. Nasci para o mundo iluminar.
Filho amado, pare um pouco para Me escutar.

Eu vim ao mundo em amor, para a liberdade entregar.
Deixe as prisões para trás, venha agora Me encontrar.
Sou teu Deus, estou contigo, sempre pronto a te guiar,
Derramando a Minha graça sobre quem soube confiar.`,
      reflection: 'Muitas vezes, sabemos que temos uma luz, mas algo a impede de brilhar: medo, vergonha ou feridas do passado. Deus hoje te convida a resolver o que te impede. O que está cobrindo a minha luz hoje? Estou disposto a parar tudo agora apenas para escutar o amor de Deus?',
      inspiration: 'Senhor, eu retiro a barreira do...'
    },
    {
      id: 'p1-2',
      title: 'Filho da Luz (O Discípulo)',
      text: `Quando cheguei em Tua casa, os meus pés não Me lavou;
Mas esta mulher com lágrimas, com seus cabelos enxugou.
Para ser o Meu discípulo, Minha voz deves escutar,
E colocar em prática tudo o que Eu vim te ensinar.

Para o teu crescimento, ouça o que acabo de dizer:
Concentra-te em Minha voz, se queres realmente aprender.
A luz do Meu Espírito acendeu para te guiar,
Um cego não guia outro — está na hora de brilhar.

Veja agora com clareza o que mostro para você,
Para ser um verdadeiro discípulo, escute o que vou dizer:
O Espírito te conduz para onde deves ir,
Entregue-se ao caminho, levante-se para seguir.

Reconheça o teu pecado, o Senhor quer perdoar;
Faça como aquela mulher, coloque-se a adorar.
Aceite o Senhor Jesus, Ele veio te salvar,
Sua misericórdia é graça pura para te dar.

Receba a bênção nesta noite, converta-se a Jesus;
O nosso grupo de oração chama-se "Filho da Luz".
Sua luz resplandeceu, Cristo veio te acender,
Sua luz está brilhando, já parou para perceber?

"O que queres que Eu te faça?", o Senhor está perguntando...
— "Que eu veja, meu Senhor!"
Sinta: Ele está te curando.
Sua misericórdia reacende a tua luz,
O Senhor cura a cegueira — olhe agora para a Cruz.`,
      reflection: 'A mulher pecadora lavou os pés de Jesus com lágrimas porque reconheceu quem Ele era. O discipulado começa na humildade e na escuta. Tenho sido um discípulo que escuta ou apenas um ouvinte distraído? Se Jesus me perguntasse agora "O que queres que eu te faça?", qual seria minha resposta sincera?',
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
      reflection: 'Existe um "trono iluminado" dentro de você, onde Deus habita. Às vezes, a dor do mundo coloca um véu sobre esse brilho. Qual é o "tesouro" interno que eu tenho esquecido que possuo? Como posso tornar essa sensação de paz mais "permanente" no meu dia a dia?',
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
      reflection: '"Ninguém apaga a luz interior se você não entrega o interruptor". Esta é uma verdade poderosa sobre autorresponsabilidade. Para quem eu entreguei o interruptor da minha vida? (Para a opinião dos outros? Para o medo?) Estou pronto para subir no "palco da vida" e assumir meu lugar?',
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
      reflection: 'Bartimeu não ficou calado quando ouviu que Jesus passava. Ele gritou acima da multidão. A prostração nos deixa mudos, mas a fé nos devolve a voz. Qual área da minha vida está "morta" ou "prostrada" e precisa despertar? Tenho coragem de gritar por socorro espiritual hoje?',
      inspiration: 'Eu me levanto do chão e grito...'
    },
    {
      id: 'p1-6',
      title: 'Seu Talento',
      text: `Cada um recebe um dom Para a Igreja edificar.
Vou mostrar-te o caminho, Para que possas caminhar.
Quanto tempo ainda tens? O Senhor quer te ensinar.
O amor é paciente, Para e vem analisar.
Como o bronze que ressoa, Ou o címbalo a tocar,
Sem amor, dons são vazios, Nada podem transformar.
Ainda que fales línguas, Ou profetizes sem cessar,
Se não houver caridade, Nada disso há de contar.
Espera no Senhor, Ele tudo vai te dar.
Com fé amadurecida, Segue firme a caminhar.
Acolhe os teus irmãos, A quem tanto precisar.
Persevera todo dia, Na promessa a se firmar.`,
      reflection: 'Talento sem amor é barulho ("bronze que ressoa"). O dom não é para minha vaidade, é para edificar o outro. Qual talento Deus me deu que eu tenho guardado? Faço as coisas com amor ou apenas por obrigação?',
      inspiration: 'Meu talento é um presente para...'
    },
    {
      id: 'p1-7',
      title: 'O Milagre da Escrita',
      text: `Tantos passam sem perceber, mas ao escrever, o milagre começa a florescer.
No silêncio da mente, um pensamento se eleva, e no ato de escrever, algo novo se revela.
O presente se torna eternidade, e as palavras, ao nascer, ganham liberdade.
Sinta, cada frase que brota do coração, é a criação de um novo caminho, uma nova canção.
Do pensamento ao sentimento, surge a emoção que transforma o momento.
Ao escrever, você vê mais claro, o milagre da escrita, tão simples e tão raro.`,
      reflection: 'A escrita é uma forma de materializar a alma. Quando escrevemos, tiramos o caos da mente e damos forma ao que Deus está falando.',
      inspiration: 'Hoje minhas palavras ganham asas e...'
    },
    {
      id: 'p1-8',
      title: 'Chamado à Santificação',
      text: `Hoje é o dia da graça se revelar, meu Senhor me chama para me santificar.
Sou escolhido para falar, anunciar o evangelho, e em Cristo, adorar.
Teu nome exalto com devoção, glorifico Teu Reino, e com fé, sigo a Tua direção.
O Cordeiro está no trono, em Seu brilho divino, e eu sou chamado para seguir Seu caminho.
Sou separado para adorar, para morar junto de Cristo, e Sua luz irradiar.
O pecado não tem mais domínio sobre mim, pois em Jesus, encontrei meu verdadeiro fim.`,
      reflection: 'Santificar-se significa "separar-se". Não é ser perfeito, é ser reservado para Deus. O pecado perde o domínio quando entendemos nosso propósito.',
      inspiration: 'Eu me separo do mundo para...'
    },
    {
      id: 'p1-9',
      title: 'As Vozes que Ouvimos',
      text: `Quais são as vozes que falam em tua mente? Qual delas te chama e qual te faz desistir?
São muitas, mas há uma que se destaca, uma voz suave, que traz paz e esperança.
Ela te envolve com suavidade, fazendo com que te sintas em serenidade.
O medo vai embora, e com ele a timidez, pois essa voz traz calma, e alivia a sua rigidez.
Sinta o vento leve e a respiração tranquila, deixe a voz que te chama acalmar tua agitação.`,
      reflection: 'O inimigo grita, acusa e agita. O Espírito Santo sussurra, acalma e encoraja. Qual voz você tem alimentado?',
      inspiration: 'Eu calo o barulho para ouvir...'
    },
    {
      id: 'p1-10',
      title: 'Chamado e Luz',
      text: `Tens um chamado, um caminho a seguir. Perdoa nesta jornada, o Espírito está aqui.
Faz de ti um modelo vivo, a paz que vem do amor, em resposta à oração, dons Deus derramou.
Eu consolo tua vida, sê luz em meio à dor. Teu nome tem história, consagra o teu amor.
Abre agora teus ouvidos, tua boca para falar. O Espírito Divino está aqui para te escutar.`,
      reflection: '"Teu nome tem história". Deus não te chamou por acaso, Ele conhece cada capítulo da sua vida e quer usar sua história como luz.',
      inspiration: 'Minha história é um testemunho de...'
    },
    {
      id: 'p1-11',
      title: 'Deixe Marcas de Santidade',
      text: `Deixe marcas de santidade, o céu é seu lugar. O relógio não para, pare para observar.
Qual é o seu legado? O que irá deixar? Faça como Maria, pare para escutar.
O Senhor está chamando, não há por que temer. Ansiedade e tristeza, Ele pode dissolver.
Qual tem sido a escolha? Onde você está? Ouvindo a voz de Cristo, sua casa irá mudar.`,
      reflection: 'Não levaremos bens materiais, mas levaremos o amor que demos. Nossa casa muda quando nossa audição espiritual muda.',
      inspiration: 'Eu escolho deixar marcas de...'
    },
    {
      id: 'p1-12',
      title: 'Fluindo com Fé: Identidade',
      text: `Resgate sua identidade, deixe fluir no interior. Não desista de si mesmo; continue e faça com amor.
Descanse bem e depois prossiga; a vida é como uma semente que você terá que plantar.
Acredite que irá colher o fruto; esforce-se para se alimentar do fruto que terá que colher.
Existe o tempo certo para a semente germinar; Deus lhe deu a vida para cuidar.
Sua palavra poderosa completará em você; Deus não faz nada pela metade, Ele te ajudará.
Aquilo que veio para destruir é uma ponte para te conectar. Não o rejeite, pois o Senhor veio para te curar.`,
      reflection: '"Aquilo que veio para destruir é uma ponte para te conectar". Deus tem o poder de transformar a maior crise em um altar de adoração.',
      inspiration: 'Minha dor se torna ponte quando...'
    },
    {
      id: 'p1-13',
      title: 'O Poder da Mente e do Amor Próprio',
      text: `Quem crê, se fortalece, Pois o Senhor não esquece Daquele a quem prometeu: "Se creres, farás obras maiores do que Eu."
Não saia da Sua presença, Aumente sua fé, sua crença Naquele que criou e te formou — Teu Senhor, teu Deus, teu Salvador.
Tua mente é poderosa, Mas se mal direcionar, Pensarás que não consegue, E hoje não irá triunfar.
Viva agora, no presente, Sinta o sopro do ar, Esse sopro é divino, é o Senhor A te ensinar a despertar.
O ser que habita em ti, Só floresce com amor. Depende do teu cuidado, Do reconhecimento do teu valor.
Deus é contigo, sempre será, Essa verdade não se apagará. Mas para viver em paz, com sucesso, Uma coisa só te peço:
Nunca se esqueça de você, Pois é o amor próprio que te faz florescer.`,
      reflection: 'Amar ao próximo como a si mesmo. Se você não se ama, não reconhece o valor da obra que Deus criou: você. O cuidado com a mente é uma forma de honrar ao Criador.',
      inspiration: 'Eu me amo porque Deus...'
    },
    {
      id: 'p1-14',
      title: 'Volte Para Minha Presença',
      text: `Antes que fosse gerado, já era amado. Eu te conhecia, e te consagrei.
Volte para a Minha presença, te espero com ardor. Volte o teu coração — Sou teu Deus e Salvador.
Não se prenda mais ao erro, tira a dúvida do coração. Se volte para Mim, na presença, tome agora a decisão.
Eu sei das tuas fraquezas, também das limitações. Estou sempre preparado para te libertar das prisões.
O centro da tua vida, o sentido e a razão, não se perca com pessoas que te levam à depressão.
Sou o Deus da misericórdia, e também da compaixão. Mais uma vez Eu te falo: Saia já desta prisão!`,
      reflection: 'Deus não olha para o seu erro, Ele olha para a sua volta. Ele te amou antes mesmo de você existir. Saia da prisão do passado.',
      inspiration: 'Eu volto para casa e deixo para trás...'
    },
    {
      id: 'p1-15',
      title: 'Pura Graça',
      text: `Jesus, fonte de toda graça, Vivo Sua paz que me abraça, Que se derrama sobre mim.
Sua misericórdia sem fim, Todos os dias me alcança, Trazendo luz e esperança.
Recarregando minha energia Com o Teu Espírito, dia após dia.
Na minha alma, ouço o Teu chamado, Que vem suave, ao meu lado,
Ajudando-me a me entender, E meu coração, a aquecer.
Após essa expressão, Eu abro meu coração, E o Senhor vem transformar,
Minhas emoções equilibrar, Minha visão aprimorar,
Para que eu possa enxergar Tudo o que preciso mudar.`,
      reflection: 'Este poema reflete a profunda conexão entre o eu lírico e Jesus, destacando a misericórdia e a paz que Ele traz diariamente. A transformação interna, guiada pela graça divina, é o tema central, onde a entrega a Jesus leva ao equilíbrio emocional e à clareza de visão para mudanças necessárias na vida.',
      inspiration: 'Como você percebe a presença da misericórdia divina em sua vida? Em quais áreas você sente necessidade de transformação e equilíbrio?'
    },
    {
      id: 'p1-16',
      title: 'Pensamento Libertador',
      text: `Acredite ou não, saiba que você não é obrigado a nada.
Não é porque as pessoas te pedem algo Que você deve atender sem questionar.
É necessário aprender a indagar, fazer as perguntas certas.
Reflexione comigo: Por que devo fazer isso? O pensamento liberta.
Até quando vai permanecer preso sem pensar? Se alguém é aprisionado, é porque não refletiu.
O pensamento que faz refletir te leva a relaxar E a resolver o que antes parecia impossível,
Mantendo seus pensamentos alinhados E intensificando sua alegria.`,
      reflection: 'Este poema explora a importância do pensamento consciente e crítico, incentivando o leitor a questionar e refletir antes de tomar decisões. Ele aborda como a falta de reflexão pode levar a decisões erradas e como alinhar o pensamento com valores espirituais, como os que vêm de Deus, pode levar à verdadeira liberdade e alegria.',
      inspiration: 'Como você pode aplicar a prática da reflexão crítica em suas decisões diárias? De que maneiras seus pensamentos podem estar te influenciando a agir contra seus verdadeiros desejos?'
    },
    {
      id: 'p1-17',
      title: 'Parei de Ficar Parado',
      text: `Ah! Parei de ficar parado, Com o medo ao meu lado querendo me atrapalhar.
Parei com toda vergonha, O monstro que é medonho queria me controlar.
Parei de ficar na rua achando que vou fazer. Parei de esperar que as coisas aconteçam.
Parei com tudo o que atrapalha, faço o que deve ser feito.
Pensava que tinha que ser perfeito, parei de me preocupar.
O certo só é certo porque nunca foi errado. Pare de ficar parado achando que vai acertar.
Parei de olhar o que não era para ser meu. Sei que o culpado sou eu, mas não vou me preocupar.`,
      reflection: 'O perfeccionismo é o freio da alma. Esperar o momento perfeito é a forma mais sutil de nunca começar. A cura acontece no movimento, não na espera estática. A perfeição é inimiga da ação. "Parei de achar que tinha que ser perfeito". O medo se alimenta da nossa inércia.',
      inspiration: 'O que eu diria a Deus sobre os "medos medonhos" que me fizeram parar no passado?'
    },

    {
      id: 'p1-18',
      title: 'O Tempo e a Transformação',
      text: `O tempo passa como o vento a soprar,
Ele não espera, não pare de avançar.
Toda noite, o Senhor te entrega um novo amanhecer,
Vinte e quatro horas para você renascer.

O tempo de Deus é perfeito, podes acreditar,
Ele te chama agora: "Vem, vamos juntos caminhar!"
O tempo é o mensageiro que traz a você
Alegria e clareza para o mundo perceber.

São apenas horas que o Pai te concede,
Para que a mudança em ti se apresse.
Não fique parado, pois a hora vai chegar —
O que restará quando o tempo se findar?`,
      reflection: 'O tempo é um recurso não renovável que Deus nos dá diariamente. Como gastei minhas últimas 24 horas? Construindo ou destruindo? Se o tempo "chegasse" hoje, o que eu apresentaria a Deus?',
      inspiration: 'Meu tempo é agora e eu o dedico a...'
    },
    {
      id: 'p1-19',
      title: 'Imagem Espelhada',
      text: `Quando se olha no espelho, o que é que você vê? Como se enxerga agora e o que você vai fazer?
Certamente já parou tantas vezes, pra pensar, Pra resolver o seu problema e disse que não dá.
Vamos fechar as portas daquela sua prisão, Que estava suja e imunda dentro do seu coração.
Rancor, ódio e medo, tudo isso vai mudar, Se teu coração se abrir e a prática colocar.
Lembre daquele espelho que você tanto olhou, Enxergando sua imagem e muito se recordou.
Como é bom perceber que não é outra pessoa, Não se entrega facilmente, luta com unhas e dentes.`,
      reflection: 'O espelho reflete o corpo, mas Deus vê o coração. A "prisão" interna (rancor, ódio) distorce nossa imagem. Eu gosto de quem eu vejo no espelho ou vejo apenas meus erros? Qual porta da "prisão interna" eu fecho hoje?',
      inspiration: 'No espelho da graça, eu vejo um filho que...'
    },
    {
      id: 'p1-20',
      title: 'O Chamado de Mateus',
      text: `Depois que Jesus saiu e viu alguém no balcão, O nome dele era Mateus, também chamado de ladrão.
Ele estava no posto de arrecadação, Jesus parou, fitou os olhos e chamou sua atenção.
"Segue-me agora", e Levi se levantou, Ele não pediu tempo, logo o acompanhou.
"Não os que têm saúde precisam de doutor, Mas sim os pecadores", respondeu o meu Senhor.`,
      reflection: 'Jesus chamou Mateus no seu local de trabalho, no meio de sua rotina e de seus erros. Sinto que preciso estar "pronto" para ser chamado, ou aceito que Jesus me chama como estou? Qual é o meu "balcão" que preciso deixar para seguir a Jesus?',
      inspiration: 'Eu me levanto do meu balcão e...'
    },
    {
      id: 'p1-21',
      title: 'Transformação e Chamado',
      text: `Eis que faço novas todas as coisas, nosso canto, nossa vida precisa se transformar em canção.
Deus transforma em meu coração, temos um deserto a atravessar.
Jesus está vivo em Sua plena glória, com o canto da vitória, Sua graça neste dia ecoa, nos tirando desta vida velha, uma vida extraordinária Ele nos dá.
Retoma teu caminho, faz melhor do que já fizeste, volta para teu Senhor, faz novo outra vez.
Deus está chamando agora, é hora de aceitar, hoje é um novo dia, minha história vai mudar.`,
      reflection: '"Faz melhor do que já fizeste". O chamado de Deus é sempre para a excelência e para o novo. Estou vivendo a vida extraordinária que Ele preparou ou a vida velha? O que eu posso fazer "melhor do que já fiz" para Deus hoje?',
      inspiration: 'Hoje é um novo dia e eu decido...'
    },
    {
      id: 'cm-1',
      title: 'Chamado do Senhor',
      text: `Ele está confirmando,
Derramando o Seu amor.
Escute bem esta voz,
Pois quem fala é o Senhor.
Entregue-se a Ele,
Todo dia, sem temer.
Ouça a voz que te chama,
Sinta Deus em teu viver.
O medo tenta impedir,
Mas não pode te parar.
O fogo segue ardendo,
E jamais deixará de queimar.
A presença do Senhor
Faz renascer, faz transformar.
Sua graça é derramada,
Basta apenas acreditar.
Deus te chama a conduzir
O rebanho com fervor.
Permaneça em Sua presença,
Mesmo em tempos de dor.
Se estiver no deserto,
Ele vem te confortar.
Aguenta firme, meu irmão,
Logo tudo vai mudar.
Peça com fé, não desista,
Esse tempo vai passar.
A promessa está chegando,
Se prepare para pegar.
Permaneça no Espírito,
Para o propósito alcançar.
Cuide bem do Seu rebanho,
Pois tua hora vai chegar.`,
      reflection: 'O poema fala de fogo que "segue ardendo" mesmo quando o medo tenta impedir o chamado. Você reconhece esse fogo em algum ministério que abandonou por acomodação ou receio de errar? Cuidar do rebanho com fervor começa nas pequenas responsabilidades de hoje: a célula, a visita, a palavra dita a tempo. Onde você está adiando o propósito que já foi confirmado no seu coração?',
    },
    {
      id: 'cm-2',
      title: 'Homilia da Missa de Sábado',
      text: `Eu sou cristão, meu sobrenome é católico,
meu coração é de Cristo, nele vou expressar.
Pedro queria ir embora e o Senhor veio falar,
ao perceber que era Jesus, voltou para anunciar.
Entregou a sua vida para se crucificar,
quando é que você a decisão irá tomar?
Não desista do Senhor, ele vai te ajudar,
você e eu fomos chamados
para o evangelho anunciar.
É preciso renascer da água e do espírito,
A Mulher Samaritana foi chamar com o seu grito.
O povo da sua cidade encontrou o meu Senhor,
ao chegar perto, disseram: acreditamos no seu amor.
O Novo Nascimento, Jesus Cristo veio trazer,
o fruto do ministério, quando você vai colher?
Através do meu espírito, se você realizar
o desejo de Jesus, é ver você se libertar.
Satanás está à espreita para derrubar você,
cuidado com o seu veneno para você não beber.
Olhe para Jesus Cristo, é o antídoto para a morte,
se aproxime e busque Ele, pois mudou a sua sorte.`,
      reflection: 'A imagem do sobrenome católico e do coração de Cristo cobra coerência entre identidade e vida prática. Pedro voltou quando reconheceu Jesus, e a Samaritana correu para anunciar antes mesmo de entender tudo — o testemunho não espera perfeição. Quando foi a última vez que você falou de Cristo a alguém sem primeiro calcular o risco? O antídoto contra o veneno do inimigo está diante de você: qual atitude concreta muda hoje?',
    },
    {
      id: 'cm-5',
      title: 'O Chamado do Oleiro',
      text: `Não resista mais, é hora de seguir,
Minha voz te chama, vem, deixa-me te conduzir.
Nada pode impedir, nem angústia, nem dor,
Por amor aos seus eleitos, Deus te chama—eu estou aqui, Senhor.
Escute a voz que clama e reconheça o Criador,
Ele é justo, Ele é santo, inquestionável é Seu amor.
O oleiro molda o barro, com poder para transformar,
Faz um vaso para a honra, faz outro para ensinar.
Escolhidos e eleitos, separados pelo amor,
Cada vaso que Ele forma reflete o seu Senhor.
Tua alma está sedenta, quer a fonte a transbordar,
E a água que sacia já foi dada, vem provar.`,
      reflection: 'O oleiro que "faz um vaso para a honra, faz outro para ensinar" lembra que nem toda formação parece nobre enquanto está sendo moldada. Talvez você esteja sentindo a pressão das mãos do Oleiro numa fase difícil do trabalho, da família ou da vocação, sem entender ainda o desenho final. Você tem resistido ao barro sendo trabalhado ou tem deixado que o processo continue mesmo sem controle? A água que sacia já foi oferecida — falta você provar.',
    },
    {
      id: 'cm-8',
      title: 'Resposta ao Chamado',
      text: `Responde ao chamado do Senhor,
busca Seu Reino, onde há justiça e amor.
O Espírito revelou ao justo Simeão,
que Cristo viria, para nossa salvação.
Alimente a esperança, como fez Simeão,
aguarde com fé a consumação da redenção.
Sinta a alegria da ressurreição,
e semeie Cristo, para colher a salvação.
Acredite na promessa, abra teu coração,
alimente a fé, e busque a Ele na oração.
A graça de Cristo te envolve, te fortalece,
e a cada dia, mais Sua luz te esclarece.`,
      reflection: 'Simeão esperou com fé antes de ver a promessa cumprida, e o poema convida à mesma paciência ativa: alimentar a esperança enquanto se busca o Reino. Você tem semeado com a expectativa de colher, ou tem desistido antes do tempo de Deus se cumprir? A alegria da ressurreição não é sentimento passageiro, é decisão diária de confiar. O que você semeou esta semana esperando a salvação de alguém, inclusive a sua?',
    },
    {
      id: 'sv-1',
      title: 'O Caminho para o Céu',
      text: `Jesus, junto aos discípulos,
Anuncia sua paixão,
O sofrimento que viria,
Para nossa redenção.
Os discípulos, acostumados,
Sempre ao lado do Senhor,
Não compreendem que o Mestre
Padecerá por amor.
Se quiser ser o primeiro,
Sirva a todos sem temor.
Para entrar no Reino eterno,
Aprenda com o Senhor.
Mantenha acesa a chama,
O desejo de crescer.
Não desvie o seu olhar,
Ouça o que Ele veio dizer.
Servir é o caminho certo,
Para o céu poder entrar.
Amar e se entregar,
Sem nada em troca esperar.
"Está tudo consumado",
Jesus disse em sua dor.
Na cruz, Ele derramou
Seu sangue puro de amor.
O modelo da criança
Nos convida a enxergar
Que sem a graça de Deus
Não podemos nos santificar.
A técnica sem o Espírito
Não nos traz conversão.
A criança sempre ensina
O valor do perdão.`,
      reflection: 'O poema mostra os discípulos surdos ao anúncio da paixão porque ainda mediam grandeza pelos critérios do mundo. "Se quiser ser o primeiro, sirva a todos sem temor" desmonta qualquer projeto de destaque que não passe pelo serviço concreto. Onde você tem buscado ser o primeiro em vez de servir sem cobrar retorno? A criança que Jesus coloca no meio ensina que sem a graça não há santificação — técnica e esforço próprio não bastam.',
    },
    {
      id: 'sv-3',
      title: 'O Senhor te prepara para a missão',
      text: `O Senhor te prepara para a missão,
Te protege e ampara, cuida do teu coração.
Ele quer te levar ao santuário celestial,
Abandona o pecado e alcança a salvação real.
Precisa se colocar em espírito de oração,
Se quiser no Céu entrar, se prepare, meu irmão.
Para não perder a salvação, abandona o pecado,
Pois o inimigo deseja ver-nos derrotados.
Cristo veio, o Sumo Sacerdote dos bens,
Pelo Seu sangue, salvou a todos que querem ir além.
Não duvide, tenha fé: a graça do Senhor
É alimento pela Palavra e pela Eucaristia de amor.
Comungue todo dia, Jesus é teu Salvador,
Veja o que aconteceu com o rico e o pobre Lázaro:
O rico ao inferno foi, enquanto Lázaro ao Céu chegou,
Abraçado por Abraão, o pobre enfim descansou.
O rico implorou, mas já era tarde demais,
As migalhas que desprezou, agora não pôde mais alcançar.
Lázaro firme se manteve, na esperança se alimentou,
E assim, pela Palavra, o Céu enfim encontrou.
Meu irmão, você é chamado, ouça essa lição:
Deus te fala em Sua Palavra, não endureça teu coração.
Ele te prepara com amor para cumprir tua missão,
Pelo Espírito Santo, alcançarás a salvação.
Beba da água viva todo dia,
Se quiser no Céu entrar, nunca mais terás sede, confia!
A vida do cristão é batalha sem cessar,
Todos os dias, é preciso se preparar.
Se entregue ao Senhor, se prepare para rezar,
O Céu está aberto — basta acreditar.
Abandona o pecado, se quiser no Céu morar.
Meu irmão, atenção ao que agora vou contar:
Quando a morte chegar, dois juízos virão te encontrar:
Primeiro, o juízo particular, ao Senhor irás se apresentar;
Depois, no final dos tempos, o juízo final irá te julgar.
Seja fiel à graça, lute até o fim, meu irmão,
E terás no Céu teu eterno galardão!`,
      reflection: 'A parábola do rico e Lázaro, citada no poema, é um espelho duro: migalhas desprezadas em vida se tornam distância irreparável na eternidade. "Comungue todo dia" não é apenas devoção, é reconhecer que a alma se nutre da Eucaristia e da Palavra como quem tem sede real. Você tem tratado o pecado com a urgência de quem sabe que o juízo particular está próximo? O que você tem feito hoje que só fará sentido se olhado à luz do Céu?',
    },
    {
      id: 'sv-4',
      title: 'O Reino de Deus',
      text: `Senhor, eu confio em tua graça,
Teu amor é vasto e verdadeiro,
nós caminhamos na direção do Teu reino,
onde o céu se faz mais perto, e o amor é o primeiro.
O caminho é estreito,
mas a fé te guia com precisão,
como a estrela que brilha na noite,
te conduz ao Teu coração.
O Espírito, com sua luz radiante,
acende a chama da esperança em ti,
para que, mesmo nos tempos difíceis,
tu possas continuar a sorrir.
O reino está à porta,
não deixe passar sem perceber,
pois quem crer será acolhido,
e com Ele, vai renascer.`,
      reflection: 'O caminho estreito guiado pela estrela pede mais confiança do que clareza total sobre o destino. O Reino está à porta, diz o poema, mas exige que se perceba o momento em vez de deixá-lo passar distraído. Em que área da sua vida você tem caminhado no escuro sem procurar a luz do Espírito que acende a esperança? Você reconheceria o Reino se ele batesse à sua porta hoje?',
    },
    {
      id: 'sv-5',
      title: 'O Reino e a Verdade',
      text: `O Reino está próximo,
a verdade é a luz.
Caminha quem confia
no amor de Jesus.
Ele é a porta aberta,
é o pão que nos sustém.
Em Suas mãos está a vida,
a promessa do bem.
Quem busca Sua palavra
em amor há de crescer.
No silêncio da oração,
encontra força pra viver.
Não temas a jornada,
nem a cruz que vai pesar.
Jesus é o companheiro,
que nunca vai te abandonar.
Confie no Salvador,
na verdade que Ele traz.
Sua graça nos renova,
e a vida se refaz.`,
      reflection: '"Ele é a porta aberta, é o pão que nos sustém" — a imagem recusa qualquer ideia de um Deus distante e aponta para alimento concreto, diário. Buscar a Palavra em silêncio, como sugere o poema, é o oposto de viver ocupado demais para orar. Você tem deixado o barulho do dia calar a voz que sustenta? Onde você precisa confiar que Jesus não vai abandonar, mesmo com a cruz pesando?',
    },
    {
      id: 'rv-1',
      title: 'O Peso da Redenção',
      text: `A dor não impediu
que o Senhor cumprisse sua missão.
Ela só te mantém preso
se não tratar teu coração.
Imagine o peso nos ombros
que Ele carregou pra vencer,
pra salvar.
Esmagou o ódio,
a falta de perdão…
Já pensou?
Está na hora de pensar.
Ofereceu amor a todos,
mas nem todos quiseram entender.
Resgatou o pecado do mundo
pra que todos pudessem
ver…
e crer.`,
      reflection: 'O poema pergunta diretamente: "Já pensou? Está na hora de pensar." sobre o peso que Cristo carregou para esmagar o ódio e a falta de perdão que ainda moram em você. Não é sentimentalismo sobre a cruz, é confronto: alguém foi perdoado por você e ainda carrega essa dívida como se fosse útil. Que mágoa você continua guardando como se isso não custasse nada a ninguém? O resgate já foi feito — falta você deixar de segurar o que já foi pago.',
    },
    {
      id: 'rv-3',
      title: 'Reflexões Sobre o Passado e o Futuro',
      text: `Para construir um futuro,
É preciso olhar o passado,
Analisar o que foi bom e ruim,
E deixar o que não presta de lado.
Use o passado como novo começo,
Para criar a vida, o amor é o alicerce.
Numa casa, é preciso ter materiais;
Para um sonho, fé e esperança são vitais.
Se eu comprar sua casa e você for pra rua,
Não me culpe por tê-la adquirida à sua.
Culpe-se por tê-la vendido tão fácil assim —
Desistir nunca foi um bom fim.
Sabia que a lua se afasta da Terra a cada ano?
Quatro centímetros, no tempo, é um engano.
Mas nós, seres humanos, levamos segundos
Para nos afastar de Deus e dos assuntos profundos.
A aparência esconde o que dentro há,
E nem toda beleza revela quem será.
Algumas personalidades nos trazem alegria,
Enquanto o invejoso duvida da tua valentia.
Quando você conquista o impossível,
Ele corre e pergunta, todo acessível:
— Como conseguiu? Me ensina, por favor?
E você responde com fé e amor:
“Ainda dá tempo pra perdoar e amar,
Ser amado, buscar, lutar, conquistar.
Tudo é um caminho que precisa ser trilhado,
Mesmo quando o passado foi amargurado.”
Não diga mentiras, pois quando se mente,
Toda verdade se torna perda de tempo, e ninguém sente.
Passando pelas pessoas, cego é quem não vê —
Que teu brilho incomoda e só te faz crescer.
Dizem que a guerra destrói tudo por inteiro,
Mas ignoram o fim da Terra, lento e verdadeiro.
Já ouviu que "os humilhados serão exaltados"?
Ou que "o mundo dá voltas", em ciclos rodados?
E se eu te disser que o mundo gira em torno de uma estrela,
Você acreditaria, ou pensaria que é uma novela?
Mas um soldado de verdade, sem armadura nem espada,
É aquele que enfrenta a mente e sua cilada.`,
      reflection: '"Culpe-se por tê-la vendido tão fácil assim" atinge quem troca conquistas duradouras por alívios imediatos e depois reclama do resultado. O poema mistura ironia e sabedoria bíblica para lembrar que humilhação e exaltação seguem uma lógica que não é a do mundo. Você tem vendido barato aquilo que Deus construiu com paciência em você — relação, vocação, integridade? Que mentira você repete a si mesmo para justificar a desistência de hoje?',
    },
    {
      id: 'rv-7',
      title: 'A Passagem',
      text: `Toc, toc, uma batida suave,
é o tempo que chega, mas não se atrasa.
Não hesite, abra a porta agora,
pois ele traz algo que não pode esperar.
Não só traz, mas leva com ele,
as horas que se desvanecem, e o medo que acende.
O tempo, apressado, não faz pausa para ouvir,
ele segue, te guia, até onde é preciso ir.
Cada segundo é um convite,
para agir, para mudar,
pois o tempo é a passagem,
onde a vida se refaz, para continuar.
Siga o ritmo do que vem,
não deixe o momento escapar,
faça de cada ação a chave
que te levará ao teu lugar.`,
      reflection: '"Toc, toc, uma batida suave" descreve o tempo como visitante que não espera resposta atrasada. Cada segundo vira convite para agir, e o poema recusa a passividade de quem acha que sempre haverá amanhã. Que porta você tem deixado o tempo bater sem abrir, por medo ou acomodação? O que você faria hoje diferente se soubesse que esse instante não volta?',
    },
    {
      id: 'rv-8',
      title: 'O Tempo',
      text: `Hoje um novo tempo começa,
e o Dono de todos os momentos,
na quietude do seu silêncio,
te entrega o que tu precisas para avançar.
Ele nunca para, mas te oferece,
todo dia, 24 horas para recomeçar.
Com cada amanhecer, Ele renova
a força de sua graça, a força do seu amar.
Sinta agora o toque da paz,
que vem direto do céu,
na serenidade de um instante,
encontre o alívio e o seu papel.
O tempo passa, mas nunca retorna,
seu curso é irremediável,
mas cada momento que viveres
pode ser um milagre possível.`,
      reflection: '"Ele nunca para, mas te oferece todo dia 24 horas para recomeçar" desfaz a desculpa de que já é tarde demais para mudar de vida. O tempo é irremediável em seu curso, mas cada manhã chega como graça renovada, não como cobrança. Você tem usado o recomeço diário para orar, perdoar, servir — ou apenas para repetir o cansaço de ontem? Que milagre possível você está deixando de viver hoje por hábito?',
    },
    {
      id: 'p1-39-new',
      title: 'Escolhidos para Anunciar',
      text: `Nós fomos escolhidos para orar e anunciar,
O Espírito Divino veio para nos guiar.
Abra o coração, deixe Deus nele morar,
No livro de Hebreus, o Senhor veio ensinar.
Lembre-se daquele dia em que foste iluminado,
A glória do Senhor está sempre ao teu lado.
A luz de Deus entrou, dissipou a escuridão,
Não viva como escravo — o Senhor te dá a mão.
Nos momentos mais difíceis, a graça te sustenta,
O filho que é amado, todo dia se contenta.
Perceba no caminho: não desista do Senhor,
Pois o Pai te ama tanto — sinta agora o Seu amor.
O justo não se justifica, pois já foi justificado,
Tem plena convicção: Deus está ao seu lado.
Deus é bom todos os dias — persista em viver,
O Senhor sofreu por nós, para nos fazer renascer.
Jesus é a ponte entre o homem e o Pai,
É o amor que nos resgata, nos levanta e nunca cai.
Não somos dos que recuam ou vivem a se arruinar,
Somos os que creem com fé: Deus vai nos salvar.`,
      reflection: '"O justo não se justifica, pois já foi justificado" resume uma libertação que muitos cristãos ainda não aceitaram: viver como escravo depois de ter sido feito filho. O poema lembra o dia em que você foi iluminado — você ainda vive a partir dessa memória ou já a esqueceu no cansaço da rotina? Jesus é ponte, não obstáculo, entre você e o Pai. Em que decisão desta semana você vai agir como filho amado, e não como servo com medo de errar?',
    },
    {
      id: 'p1-43-new',
      title: 'Juízo Final',
      text: `Quando Ele voltar, em glória se assentará,
No trono majestoso, o novo se revelará.
As nações diante d’Ele, em temor se prostrarão,
Ouça agora a voz do Pastor, sinta sua direção.
Ele cuida das ovelhas, está aqui pra te ajudar,
Esteja pronto em oração, é tempo de despertar.
O Senhor já proclamou no momento de oração:
"O novo estou fazendo, entre agora em ação."
Até quando ficará sem tomar a decisão?
Lembra-se da palavra dita na pregação?
Persevere, meu irmão, fique firme no Senhor,
Não desista nem desanime, Deus te cerca de amor.
Hoje ressoa a verdade, a palavra do Senhor,
Cristo é a vida eterna, teu único Salvador.
Acredite, tenha fé, o fogo já abrazou,
É a graça de Deus Pai, que aqui se derramou.
Desapegue deste mundo, ouça a voz do Pastor,
Alimente-se da Palavra, viva forte esse amor.
O Senhor está chamando, inflamando o coração,
Nesta noite, Ele espera por ti na oração.`,
      reflection: '"Até quando ficará sem tomar a decisão?" é a pergunta que atravessa este poema sobre o juízo e o novo que Deus está fazendo. Não se trata de temor paralisante, mas de urgência: o fogo já abrasou, a graça já foi derramada, falta resposta. Que decisão você tem adiado esperando um momento mais confortável que talvez nunca chegue? Hoje, nesta noite, o que significa desapegar do mundo para alimentar-se da Palavra?',
    },
    {
      id: 'p1-50-new',
      title: 'A Semeadura da Vida',
      text: `O sentido da vida você precisa encontrar,
Sirva com alegria — isso é o verdadeiro amar.
É mais fácil amar quem está longe de você,
Pois quem está perto faz você se conhecer.
A vida não é fácil, é preciso aprender,
Depois vem a caridade, e com ela, o florescer.
Seja forte e corajoso, o Senhor já te salvou,
Um semeia, outro rega — e no tempo certo, colheu.
A lei da semeadura você deve entender,
Saia do imediatismo — com paciência, vai crescer.
Na prateleira da vida, escolhas vão aparecer,
Arregace a mente e o coração, para um dia florescer.
Seja assertivo na semente que você lançou,
Pois o que sai da boca molda quem você se tornou.
Reveja a semente que lança ao chão,
E escolha, com sabedoria, a direção do seu coração.`,
      reflection: '"É mais fácil amar quem está longe de você" desmascara uma caridade de fachada, que se sente generosa à distância mas se irrita com quem divide a mesma casa. A lei da semeadura pede paciência: um semeia, outro rega, e a colheita tem hora certa demais para o imediatismo de hoje. Que palavra você tem lançado sem cuidado, esquecendo que ela molda quem você se torna? Quem, perto de você, está esperando ser amado de verdade, não à distância?',
    },
    {
      id: 'p1-55-new',
      title: 'A Lei da Semeadura',
      text: `O sentido da vida é servir com alegria,
Semeando o amor em cada novo dia.
É mais fácil amar quem está longe de você,
Mas é o irmão de perto que te ajuda a crescer.

Saia do imediatismo, a semente tem seu tempo,
Não lance palavras vãs ao sabor do vento.
O que sai da sua boca molda a sua motivação,
Escolha com sabedoria a semente do coração.

Um semeia, outro rega, mas é Deus quem faz brotar,
Arregace a mente e prepare-se para colher e amar.`,
      reflection: 'A lei da semeadura pede paciência: um semeia, outro rega, e a colheita tem hora certa demais para o imediatismo de hoje. Que palavra você tem lançado sem cuidado, esquecendo que ela molda quem você se torna? Quem, perto de você, está esperando ser amado de verdade, não à distância?',
    }
  ],
  'bloco-2': [

    {
      id: 'p2-1',
      title: 'Nunca Pare de Lutar',
      text: `Alguém Me tocou... senti uma força sair,
Minha Palavra se manifestou — a cura veio enfim.
A mulher de fé não desistiu, quis Me encontrar,
Pois quem sai do mundo interno, do pecado vem se libertar.

Deus nos escolheu, neste mundo nos colocou,
Preparou-nos no ventre materno, onde com amor nos guardou.
Por amor à humanidade, Jesus morreu e ressuscitou,
Não duvide da Sua graça, ela já se manifestou.

A fonte da salvação está aberta, levante-se e vá beber,
Seja firme, meu irmão, o pecado você pode vencer.
A decisão muda tudo, renuncie ao que for vão,
Pois o tempo está chegando para a grande separação.

Pelo batismo morremos para o mundo, para o Céu caminhar,
Se queres a Glória eterna, do pecado há que se arrepender.
A justiça de Deus não falha, vigie o seu proceder,
Nunca perca a esperança, deixe Jesus em você viver.

Busque firme a salvação, sinta a força do Redentor,
Faça como aquela mulher, toque com fé e com fervor!`,
      reflection: 'A mulher hemorroísa teve que romper uma multidão para tocar em Jesus. Às vezes, a "multidão" são nossos próprios pensamentos de desânimo ou a opinião alheia. Qual é a "multidão" que está me impedindo de tocar em Jesus hoje? Em qual área da minha vida eu parei de lutar e me acomodei com a "doença"?',
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
      reflection: 'Deus já abriu a porta, mas a decisão de entrar é nossa. O "fogo" do Espírito queima o pecado, mas precisamos lançá-lo no fogo através da confissão. O que eu preciso "lançar no fogo" hoje para me sentir livre? Tenho mantido a porta do meu coração aberta ou trancada por mágoas?',
      inspiration: 'Diante da porta aberta, eu deixo para trás...'
    },
    {
      id: 'p2-3',
      title: 'Mensagem do Senhor (Veste Nova)',
      text: `Eis que estou na porta e bato, já falei para você: revestir da armadura, lute para receber.
Troque a veste e coloque a nova que preparei; no poder da minha Palavra, esta noite eu te falei.
Persevera, e todo dia, pra não se contaminar; eu conheço as suas obras, sem mim vai desmoronar.
Saia dessa timidez, se fortaleça no Senhor; a Palavra foi pregada, ouça a voz do Senhor.
A Palavra te confronta, o Senhor quer encontrar; Ele busca em você algo para te ajudar.
Você viu que em Laodicéia o Senhor não encontrou; Ele deu pra a graça, por isso já derramou.
Meu irmão, tu foste ungido, ser da terra o sabor; volta a rezar agora, para os braços do Senhor.
Cuidado com esse caminho, volta pro primeiro amor; o Senhor está ensinando, sinta o fogo abrasador.
Desça desse orgulho, eu espero por você; o Senhor está falando, pare para perceber.
A sujeira na sua mente você terá que limpar; arrependa-se do pecado se quiser no céu entrar.
O perdão é exercício, essa faxina é pra deixar o cômodo da sua casa para o Senhor habitar.
Ele está na porta batendo, filho, eu vim conversar; já tomou o seu remédio? Eu trouxe pra te curar.
A sujeira dos seus olhos você vai ter que tirar; para enxergar o céu, o perdão terá que liberar.
Com a veste nupcial, com a santidade vai lavar a sujeira da sua vida, pra no Céu poder entrar.
Gratidão ao meu Senhor por você estar aqui; irmão, ouça a Palavra — Jesus virá em glória, te convida pra servir.
Finalizo esta poesia: é mensagem do Senhor. Jesus Cristo é o remédio, Ele é teu Salvador.`,
      reflection: 'Esta poesia fala de uma "faxina" na alma. Não adianta convidar o Rei para entrar se a casa (mente) está suja com mágoas e orgulho. Que "veste velha" (hábito ou vício) eu ainda insisto em usar? Qual cômodo da minha alma precisa de uma faxina urgente hoje?',
      inspiration: 'Senhor, eu troco a veste de tristeza por...'
    },
    {
      id: 'p2-4',
      title: 'A Mudar a Vida',
      text: `Para minha vida mudar, o que preciso fazer? Se não fosse hoje, então, quando iria ser?
Você pode conhecer Jesus e nada na sua vida mudar, pois tudo depende de você, é preciso se enxergar.
Deus sustenta sua vida através da oração, permaneça em Sua graça, Ele cuida do seu coração.
O Senhor está revelando, chamando a sua atenção. Esteja aberta à Sua palavra, coloque-a em ação.
Se tu conheceres Jesus e ouvir Sua voz a falar, acolhe Sua palavra e a pratique sem hesitar.
Através do Seu Espírito, Ele vem para revelar, curar o seu coração e fazer a vida transformar.
Jesus sempre está presente, Ele vem para cuidar, está te incomodando, Deus te abençoe a caminhar.`,
      reflection: '"Tudo depende de você". Deus já deu a graça, agora Ele espera a nossa ação. Conhecer a Bíblia não muda a vida; o que muda é praticar o que se conhece. Tenho esperado Deus fazer a minha parte? Qual pequena atitude prática eu posso tomar hoje para mudar minha vida?',
      inspiration: 'Não espero mais pelo amanhã, hoje eu decido...'
    },
    {
      id: 'p2-5',
      title: 'Não Fique Aí na Tristeza',
      text: `Permaneça firme, irmão, como fez o servo Jó: O inimigo levou tudo, mas ele nunca esteve só.
Deus estava sempre com ele, Fortalecendo sua fé. Hoje é o dia da graça — Levante-se! Fique de pé!
Não fique aí na tristeza — Ela também é tentação. Paulo escreveu com firmeza, nos Chamando à conversão.
Nunca perca a esperança, Esteja firme em oração. O Senhor é tua fortaleza, Teu refúgio e salvação.`,
      reflection: 'A tristeza excessiva pode ser uma tentação para nos paralisar. Jó perdeu tudo, mas não perdeu a Deus, e isso foi o suficiente para ele se reerguer. A tristeza tem sido um lugar de morada ou apenas de passagem na minha vida? Como posso louvar a Deus mesmo em meio às minhas perdas atuais?',
      inspiration: 'Mesmo que tudo pareça difícil, eu me levanto e...'
    },
    {
      id: 'lp-2',
      title: 'Comece a Levantar',
      text: `Neste dia de alegria,
A Jesus Cristo é de altar.
De repente, brota uma força,
E começamos a cantar.
Lança fora a tristeza,
Ansiedade, depressão.
Sinta a chuva, desta água,
Se coloque em oração.
Abra o seu coração,
Deixa a graça e a luz entrar.
Sinto com a Virgem Maria,
Do Espírito Santo clamar.
A sombra do Altíssimo
Nesta noite cobrirá,
Dando força ao coração —
Então comece a levantar!
Pois a graça é derramada,
Irmão, começa a orar.
O Espírito, nesta noite,
Já começou a trabalhar.
Derramando os carismas,
Irmão, começa a louvar.
Preparei o coração
Para a Palavra escutar.
A atenção que precisava,
Comecei então a focar.
O Espírito já ensina,
Está movendo o lugar.
Ele toca, Ele cura,
Te convida a orar.
Meu irmão, é nesta hora —
Comece a levantar.`,
      reflection: '"Lança fora a tristeza, ansiedade, depressão" não é slogan vazio no poema, é convite concreto a deixar a graça e a luz entrarem onde antes só havia peso. A sombra do Altíssimo cobre justamente a noite mais escura, não apenas os dias fáceis. Você tem se recusado a levantar porque a dor parece maior que a promessa? O Espírito já começou a trabalhar no lugar onde você está — falta você começar também.',
    },
    {
      id: 'lp-4',
      title: 'Vigiai e Buscai a Santidade',
      text: `Vigiai atentamente sobre as palavras que proferes,
Lembra-te de Moisés em sua oração?
Quando fatigado, seu irmão veio auxiliar,
Colocando mãos na pedra para sustentar.
Paulo, mesmo em cárcere, exortou os Efésios,
"Cuidai-vos dos pagãos", disse em seus escritos.
Somos todos convocados à vida de santidade,
Amados por Deus, em Cristo, verdade.
O justo não se justifica, é justificado pelo Senhor,
Consciente de que Jesus está sempre ao redor.
Observa tua conduta, sabedoria é preciso ter,
Não te entregues à insensatez, Deus está a te proteger.
Sê sábio, desfruta o tempo com alegria,
Em espírito, em cada hora, em cada dia.
Quando vier a adversidade, não te precipites,
Não te embriegues, permanece ciente.
Busca a santidade, é ela que encontrarás,
Mantém-te no caminho, com Jesus a te guiar.
Não desistas de ti, busca sempre a solução,
O Espírito Divino hoje te segura pela mão.`,
      reflection: 'Moisés cansado precisou de mãos que sustentassem as suas — o poema lembra que santidade não é proeza solitária, é comunidade sustentando comunidade. "O justo não se justifica, é justificado pelo Senhor" tira o peso de provar mérito próprio a cada instante. Quem tem segurado suas mãos quando a oração cansa, e a quem você tem recusado ajudar do mesmo jeito? Você vigia suas palavras ou fala primeiro e se arrepende depois?',
    },
    {
      id: 'lp-5',
      title: 'A Distância da Graça',
      text: `Não brincamos com a vida, Deus é sério ao chamar,
Sacrifique com Jesus, Ele vem te auxiliar.
Vinde a Mim, olhe a Cruz, há um mundo a fazer,
Ame a Cristo todo dia, e o pecado irá vencer.

A distância entre o Céu e o abismo, vem saber:
Da cabeça ao coração, trinta centímetros a percorrer.
É tempo de viver o renovo espiritual,
Pois com Cristo em você, vencerá todo o mal.

Tire o peso do pescoço, deixe a vida florescer,
Jesus ama a sua história e te faz prevalecer.`,
      reflection: '"Da cabeça ao coração, 30 cm" é a distância entre saber da fé e vivê-la. O poema foi lapidado para remover a linguagem de rascunho e focar na urgência da conversão. Você conhece a doutrina, mas ela já desceu para o seu coração?',
      inspiration: 'Senhor, percorre em mim esses 30 centímetros hoje...'
    },
    {
      id: 'lp-6',
      title: 'Abrigo na Tempestade',
      text: `Lute até o fim, pois quem manda é o Senhor,
Lembre da conexão, sinta o Seu imenso amor.
Neste dia, fale com Ele, peça a graça outra vez,
Pois na batalha da vida, Ele vence o que você fez.

Com Ele, você resolve qualquer grande dilema,
O impossível se curva diante do Teu teorema.
Faça a sua parte e deixe Deus agir,
Pois na tempestade da vida, Ele te faz prosseguir.

Quando o mar está agitado e o vento é perigo,
O Senhor está contigo, Ele mesmo é o teu abrigo.`,
      reflection: 'O poema foi revisado para manter o tom poético desde o primeiro verso, removendo saudações informais. Foca na soberania de Deus sobre as tormentas da vida. O que parecia impossível e você entregou nas mãos dEle hoje?',
      inspiration: 'No meio do vento forte, eu ouço o silêncio de Deus dizendo...'
    },
    {
      id: 'lp-7',
      title: 'A Armadura de Deus',
      text: `A base da armadura é o cinto da Verdade,
Que mantém tudo unido viva na honestidade.

Nos liberta do engano, desafios e tentações,
Para andarmos com integridade e vivermos como cristãos.

A couraça da Justiça protege nosso coração,
Guardando-nos das influências malignas e sua ação.

Somos chamados a viver e agir com compaixão,
Ter uma vida justa e reta, refletindo amor em toda situação.

Com o sapato do Evangelho, a paz vou anunciar,
Levando a mensagem de esperança e salvação por onde andar.

As boas novas e a vida em harmonia com os irmãos,
Demonstrando o amor de Deus, difundindo a paz e a reconciliação.

Contra os dardos inflamados do inimigo,
Protege-nos com o escudo da fé, que nos capacita a resistir.

Todos nós somos capazes de vencer e não desistir,
Pois esse escudo nos protege e nos fortalece.

Lembre-se todos os dias que somos filhos de Deus,
Cristo nos dá esperança e confiança, aos filhos Seus.

O capacete da salvação protege nossa identidade,
Mente e sentimentos, pois Jesus Cristo é a verdade.

Hoje, para nos defender, uso a espada do Espírito,
Com a palavra do Senhor.

Não é pela força bruta, e sim pela meditação,
Que encontramos sabedoria e orientação em Deus, nossa luz na escuridão.

Para enfrentar os desafios, Deus nos guia com precisão,
Através da palavra e da fé, recebemos Sua proteção.

Em cada batalha, Ele é nosso refúgio e fortaleza,
Equipados com a armadura divina, vencemos com firmeza.`,
      reflection: 'Cada peça da armadura no poema tem função precisa: o cinto da verdade evita o engano, o escudo da fé resiste aos dardos inflamados. Você tem saído de casa desarmado, tentando enfrentar tentação e desânimo só com boa vontade? A couraça da justiça protege o coração de influências que corroem por dentro sem alarde. Qual peça dessa armadura você tem deixado no armário achando que hoje não precisaria dela?',
    },
    {
      id: 'lp-8',
      title: 'Jornada de Fé',
      text: `Na jornada avançada, a mente é transformada,
Deus faz a partir do nada, te prepara para vencer.
O Reino de Deus não é nem comida nem bebida,
Aumente a fé em sua vida, pois você não é escravo.
Deus está sempre ao seu lado, deixe o medo no passado,
Exercite a fé e vamos crescer.
A Bíblia sem prática é como um homem forte e cego,
Deus é bom, e eu não nego a palavra que prego.
Vivo no dia a dia, pare já com a tristeza,
E sinta agora a alegria.`,
      reflection: '"A Bíblia sem prática é como um homem forte e cego" resume o risco de acumular conhecimento espiritual sem deixá-lo transformar um único dia real. O Reino de Deus, lembra o poema, não é ritual vazio — é justiça, paz e alegria vividas concretamente. Você tem lido, ouvido pregações, mas ainda vive como se o medo do passado ditasse o presente? Que exercício de fé você pode fazer hoje que exija mais do que ficar sentado ouvindo?',
    },
    {
      id: 'p2-12',
      title: 'Nunca Pare de Lutar',
      text: `Alguém Me tocou... senti a força sair,
A mulher hemorroísa foi curada por não desistir.
Sair do mundo interno e do pecado se libertar,
Pois o tempo está chegando e Jesus virá nos buscar.

Renunciar à impiedade, aos desejos deste mundo vão,
Tudo muda na vida quando se toma uma decisão.
Lembra de Jó? A tristeza também é tentação,
Mas o Senhor é tua fortaleza, refúgio e salvação.

Pelo batismo morremos, para o Céu ressurgir,
Seja firme, meu irmão, levante-se para seguir!
Guarde Jesus no peito, pare de reclamar,
Pois quem persevera com fé, a vitória irá alcançar.`,
      reflection: 'Fundimos as narrativas de fé perseverante: da mulher que toca a orla do manto à paciência de Jó. O poema se tornou um chamado à ação e à renúncia dos desejos vãos. Qual "multidão" está te impedindo de tocar em Jesus hoje?',
      inspiration: 'Eu não desisto da minha cura porque Aquele que me prometeu é fiel...'
    },
    {
      id: 'p2-14-new',
      title: 'Parei de Ficar Parado',
      text: `Ah! Parei de ficar parado,
Com o medo ao meu lado querendo me atrapalhar.
Parei com toda vergonha, a timidez e o mal que ela me fez,
Impediu-me de prosperar, mas agora aceitei a coragem.

Parei de esperar que as coisas aconteçam lá fora,
Faço o que deve ser feito, aqui e agora.
Pensava que tinha que ser perfeito, parei de me preocupar,
O certo só é certo porque nunca foi errado, e o erro é degrau para acertar.

Não fico mais vendo a vida passar da janela,
Tomei a decisão de controlar meu coração.
Parado não fico, pois nasci para brilhar,
E o culpado pelo meu progresso sou eu, em comunhão com o Altar.

Toda vez que eu te falo, sei que vou continuar,
Com coragem no peito, seguirei a estudar.
Parei de olhar o que não era para ser meu,
Jesus manda embora o sofrimento, e o futuro é Seu.`,
      reflection: '"Parei de ficar parado esperando acontecer" é confissão de alguém que descobriu, tarde, que vergonha e medo eram prisões consentidas. O poema não promete facilidade, promete decisão: sair do conforto acomodado que só finge ser paz. O que você continua esperando que aconteça sozinho, sem sua ação, sua oração, seu primeiro passo? Jesus manda embora o sofrimento de dentro — mas você já abriu a porta para Ele agir?',
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
      reflection: 'Muitas vezes queremos uma cura imediata, mas o texto diz: "no Seu tempo vai curar". O processo de cicatrização exige que deixemos o "óleo" (o Espírito Santo) agir sem ficarmos tocando na ferida com incredulidade. Qual ferida emocional eu tenho impedido de cicatrizar por ficar remoendo o passado? Estou disposto a esperar o tempo de Deus para a minha restauração completa?',
      inspiration: 'Senhor, onde dói em mim, eu peço que Teu óleo...'
    },
    {
      id: 'p3-2',
      title: 'A Fé que Cura (Bartimeu e a Hemorroísa)',
      text: `Orai sem cessar, não deixes de clamar, como fez Bartimeu, deixa a capa e vem gritar:
"Jesus, Filho de Davi, tem piedade de mim, Toca minha vida agora, faz minha visão se abrir!"
Tenha fé, não desista, confia no Senhor, Como em Betânia, onde Ele derramou Seu amor.
Quatro dias se passaram, mas Lázaro ressurgiu, E a glória de Deus Pai naquele dia se viu.
A mulher já padecia, doze anos a sofrer, Buscou ajuda dos homens, mas não pôde se erguer.
Aproximou-se de Cristo, cheia de esperança, Tocou a orla do manto e recebeu a mudança.
A fé é fundamento, é a base do cristão, Então creia, meu irmão, com todo o coração.
Jesus está tocando, basta n’Ele confiar, Pois Seu poder divino veio hoje pra te curar.`,
      reflection: 'Bartimeu precisou jogar fora sua capa (sua velha identidade de mendigo) para ir até Jesus. A mulher hemorroísa precisou vencer a vergonha para tocar no manto. A fé exige movimento. Qual "capa" velha eu preciso jogar fora hoje para correr até Jesus? Tenho buscado ajuda apenas "nos homens" ou já toquei na orla de Jesus com fé?',
      inspiration: 'Jesus, Filho de Davi, olha para a minha...'
    },
    {
      id: 'p3-3',
      title: 'O Mergulho da Humildade',
      text: `É certeza no meu coração: O Senhor realiza milagres e prodígios, Peça a Ele em oração.
Deus curou Naamã Pra mostrar para o seu povo, Realizou o milagre E restaurou tudo de novo.
Ele era leproso, Tinha prestígio diante do rei. Com as minhas qualidades, Ao Senhor adorarei.
A escrava então disse À mulher de Naamã: “Se ele fosse ver o profeta, A lepra curaria.”
Ao chegar em Samaria, Ele foi ver Eliseu, Que mandou ir se lavar — Naamã se infureceu.
Ao ouvir a voz do servo, Naamã obedeceu, Desceu na água sete vezes — A lepra desapareceu.
A Palavra do Senhor Sua vida quer transformar, Ele age nesta vida E te chama a caminhar.
Obedeça à voz de Deus, Se aproxime pra ouvir, Ele cura e restaura, Te chama para servir.`,
      reflection: 'Naamã quase perdeu a cura por orgulho, pois achou o pedido de Eliseu (lavar-se no rio Jordão) muito simples e humilhante para um general. Às vezes, a cura está na obediência às coisas simples. O que Deus está me pedindo hoje que parece "simples demais", mas exige minha humildade? O meu orgulho ou status tem me impedido de "descer às águas" da cura?',
      inspiration: 'Mergulho minhas dúvidas nas águas da obediência e...'
    },
    {
      id: 'p3-4',
      title: 'Transformação — Um Processo Necessário',
      text: `Para que haja transformação, o ser precisa passar por moldação.
Lembra da borboleta no casulo apertado? Ali, em silêncio, está sendo transformado.
Sofre dores que precisa enfrentar, mas logo, em asas, poderá voar.
Assim também é o ouro, em sua essência, pedra bruta que exige paciência.
Do sólido ao líquido, o fogo faz derreter — não pode voltar atrás, precisa crescer.
É um processo árduo, doloroso, essencial, para que o ouro alcance seu valor final.
Como a argila nas mãos do oleiro, que, antes de vaso, é amassada primeiro.
Moléculas se unem no sofrimento, um processo doloroso, mas com fundamento.
A chave está na prontidão do coração, no desejo sincero por transformação.
Como Jesus, que se entregou sem reclamar, aceitou a dor e escolheu continuar.
Cada transformação exige aceitação, abrir mão do ego, da própria razão.
Se queremos ser moldados, renovados, devemos aceitar ser quebrados.
Seremos amassados, queimados, purificados, até que sejamos transformados.
O artista é Deus, com mãos de criação, visualiza em nós Sua inspiração.`,
      reflection: '"Se queremos ser moldados... devemos aceitar ser quebrados". Não existe transformação sem o "fogo" ou sem o "amassar" do barro. A dor não é punição, é preparação. Estou fugindo do processo de Deus ou aceito ser moldado pelo Oleiro? Qual parte do meu ego precisa ser quebrada para que o "vaso novo" apareça?',
      inspiration: 'Aceito o fogo, aceito o processo, pois quero ser...'
    },
    {
      id: 'p3-5',
      title: 'O Caminho da Restauração',
      text: `O Senhor está esperando você se levantar, Com fé no coração, suas feridas vai curar.
Você se lembra daquele dia que encheu o teu coração, Quando estava perdido, buscando luz na escuridão?
Ele estava contigo, te mostrando a direção.
Hoje, estou trabalhando, restaurando tua memória, Colorindo tua vida, reescrevendo tua história.
Estou cuidando de você... puxe a âncora, vá em frente! Tua barca vai levar minha mensagem e curar muita gente.
O Senhor está restaurando o leme do teu barco, No mar da tua vida, Eu te pego no teu abraço.
Agradeço ao Senhor por tudo que Ele já fez, O Espírito renova tua vida mais uma vez.`,
      reflection: '"O Senhor está restaurando o leme do teu barco". Deus não quer apenas curar sua dor, Ele quer devolver a direção da sua vida para que você navegue com propósito. Para onde minha vida estava indo sem o leme? E para onde Deus quer me levar agora? Deus quer restaurar as boas memórias. O que preciso relembrar hoje para ter esperança?',
      inspiration: 'Puxo a âncora do medo e navego para...'
    },
    {
      id: 'p3-6',
      title: 'O Grito de Aflição',
      text: `Eu ouvi o grito de aflição do meu povo, Senti a ferida em seus corações. Hoje, venho para curar e salvar.
Assim diz o Senhor, que vem sarar todas as feridas, Pois em Deus reside o amor, Que é puro e o princípio da vida.
Não busque apenas a cura física, Mas procure Aquele que é a fonte da vida.
O Senhor te oferece a verdadeira felicidade Para que possas ser salvo e viver plenamente.
Ele ouve mesmo quando não consegues expressar em palavras, Ele guia teu coração para que não tropeces em Sua presença.
Pergunte ao Senhor celestial qual é o sinal do coração. Pois Deus te fez à Sua imagem e semelhança.`,
      reflection: '"Ele ouve mesmo quando não consegues expressar em palavras". Às vezes, nossa oração é apenas um gemido ou uma lágrima, e Deus entende perfeitamente essa linguagem. Qual dor eu não consigo colocar em palavras hoje, mas preciso que Deus ouça? Estou buscando apenas o alívio físico ou a "Fonte da Vida"?',
      inspiration: 'Meu grito silencioso pede...'
    },
    {
      id: 'p3-7',
      title: 'O Espírito da Vida',
      text: `O Espírito da vida está aqui para te ajudar, Fica aqui na minha casa, para as feridas limpar.
O Senhor procura o coração verdadeiro, Viva em Cristo todo dia, seja o primeiro.
Arrependei-vos das mentiras do passado, O Senhor perdoa e está sempre ao seu lado.
Ele me envia para anunciar Sua palavra, Para restaurar o coração, a nossa vida lavar.
Deus conhece a sua vida, está sempre ao seu lado, Envia Seu Espírito para te manter ao lado.
Você nunca está sozinho, o anjo te acordará, Para os caminhos do Senhor, Ele te iluminará.
O Espírito Divino desceu e aqui agiu, Com línguas de fogo, em nós repousou e sorriu.
Beba água da vida que o Senhor te dá, Toda árvore precisa plantar para frutificar.`,
      reflection: 'O convite é íntimo: "Fica aqui na minha casa". A cura acontece quando convidamos o Espírito não para uma visita, mas para morar e limpar as feridas diariamente. Minha casa interior está limpa para receber o Espírito ou há "mentiras do passado" ocupando espaço? Tenho bebido da Água da Vida ou de cisternas vazias?',
      inspiration: 'Espírito da Vida, entra na minha casa e...'
    },
    {
      id: 'p3-8',
      title: 'Gratidão e Renovação',
      text: `Louve a Deus todos os dias com gratidão, Sua água viva cura nossas feridas, traz consolação.
Não espere por ninguém, o Espírito está a soprar, Ele traz água viva para te transformar.
Não deixe o medo te paralisar, Abra teu coração, deixe o amor te alcançar.
O Espírito do Senhor geme em teu interior, Recebe o fogo abrasador, divino e restaurador.
Quando parecer que não podes prosseguir, Lembre-se que o Senhor está a te acolher.
Ele deseja encher-te de alegria e amor, E te oferece descanso em Seu Salvador.
Tua casa e tua família Ele deseja restaurar, Pelo poder do Seu amor que não cessará.
Aceite Seu jugo, suave e leve ao coração, Nele encontramos alívio, descanso e direção.`,
      reflection: 'Muitas vezes, a cura da família começa na nossa própria cura interior. "Tua casa e tua família Ele deseja restaurar". Qual área da minha família precisa de restauração hoje? O medo tem me paralisado ou a gratidão tem me movido?',
      inspiration: 'Eu louvo pela minha família e peço...'
    },
    {
      id: 'tr-1',
      title: 'Acenda Sua Luz',
      text: `Deixe sua luz brilhar,
Você precisará acender o que está te impedindo,
Terá que logo resolver.`,
      reflection: '"Você precisará acender o que está te impedindo" é uma frase curta que não deixa espaço para procrastinação espiritual. A luz não acende sozinha; exige reconhecer o que apaga o brilho — orgulho, ressentimento, comodismo. O que você sabe que precisa resolver e vem adiando há tempo demais? Que decisão pequena, tomada hoje, começaria a acender essa luz outra vez?',
    },
    {
      id: 'tr-2',
      title: 'O pecado está queimando',
      text: `O pecado está queimando,
Meu irmão, pode lançar!
Já tomou sua decisão?
Deixe Deus te libertar.
Pois Ele apaga a culpa,
Basta apenas confessar.
Abra a boca neste instante,
Deixe a fé te guiar!`,
      reflection: '"O pecado está queimando, meu irmão, pode lançar!" é convite direto ao ato concreto da confissão, não a um sentimento vago de arrependimento. Deus apaga a culpa, mas pede que a boca se abra e nomeie o que pesa. O que você tem carregado em silêncio, achando que confessar seria fraqueza? Quando foi a última vez que você se confessou de verdade, sem guardar nada por trás?',
    },
    {
      id: 'tr-5',
      title: 'Renovação em Cristo',
      text: `Renova-me, ó Senhor,
no Teu amor quero habitar.
Faz do meu coração Templo,
onde a paz venha morar.
Remove minhas angústias,
minhas culpas, meu pesar.
Ensina-me a ser luz,
a verdade proclamar.
No Teu Espírito encontro
a força que me conduz.
Nas trevas, Tu és caminho,
és minha eterna luz.
Renova minha esperança,
que o cansaço quer roubar.
Faz de mim testemunho,
do Teu amor a brilhar.
No Teu tempo, sei que tudo
encontrará razão e fim.
Renova-me, ó Senhor,
começa hoje, aqui, em mim.`,
      reflection: '"Faz do meu coração Templo, onde a paz venha morar" pede uma reforma interior que começa pela honestidade sobre culpas e angústias ainda não entregues. O poema não pede perfeição, pede início: "começa hoje, aqui, em mim". Que parte da sua vida ainda funciona como depósito de mágoas em vez de templo de paz? Você tem deixado o cansaço roubar a esperança que só o Espírito pode renovar?',
    },
    {
      id: 'tr-7',
      title: 'O Casulo da Alma',

      text: `Afinal, por que tantos vão à igreja e não mudam,
Mesmo depois de orações que afundam?
Por que clamam tanto a Deus, mas duvidam?
O que acontece no fundo da alma que ainda hesita?
Também me pergunto: por que não mudei?
Por que a transformação, em mim, ainda não veio?
O que me impede? O que me trava, o que receio?
Será que é o medo de deixar de ser quem sempre achei?
Talvez eu não queira ser algo diferente,
Por não saber no que me tornarei, de repente.
Talvez a falta de visão me faça recuar,
Pois não compreendo o processo que está a formar.
A dor, a entrega, a total rendição —
Tudo isso confunde o meu coração.
Mas já parou pra pensar:
Você pode evitar mudar…
Mas uma verdadeira transformação não dá pra voltar.
Mudança é momentânea,
Transformação é essência que se entranha.
Talvez eu esteja pedindo por mudança sutil,
Enquanto Deus deseja algo mais sutil e febril:
Uma transformação profunda, real,
Que me leve ao propósito original.
Mas transformação em quê? Em quem?
Qual missão me espera além do amém?
Será por não saber, que hesito e recuo?
Porque o plano divino ainda me soa estranho e cru?
Já pensou no que faria se Deus de fato transformasse sua vida?
Será que estamos prontos pra largar a antiga ferida?
Talvez o que falta é clareza na visão,
Pois ouvimos palavras, louvores, pregações,
Mas seguimos sem direção.
No fim, quem sou eu nesse plano maior?
Diamante bruto? Vaso em construção?
Será que só aceito o processo
Se souber antes cada lição?
Talvez, no fundo, só queremos entender,
Para então, enfim, obedecer.
Mas transformação não exige explicação,
Exige entrega…
E fé em meio à escuridão.`,
      reflection: '"Mudança é momentânea, transformação é essência que se entranha" separa o entusiasmo passageiro da conversão que realmente muda direção de vida. O poema confessa a dificuldade comum de pedir mudança sutil enquanto Deus propõe algo mais radical e assustador. Você tem pedido transformação de boca, mas resistido a largar a ferida antiga que já virou identidade? O que te falta hoje: clareza sobre o plano de Deus, ou coragem de obedecer mesmo sem entender tudo?',
    },
    {
      id: 'tr-10',
      title: 'Gratidão e Renovação em Deus',
      text: `Louve a Deus todos os dias com gratidão,
Sua água viva cura nossas feridas, traz consolação.
Não espere por ninguém, o Espírito está a soprar,
Ele traz água viva para te transformar.
Não deixe o medo te paralisar,
Abra teu coração, deixe o amor te alcançar.
O Espírito do Senhor geme em teu interior,
Recebe o fogo abrasador, divino e restaurador.
Quando parecer que não podes prosseguir,
Lembre-se que o Senhor está a te acolher.
Ele deseja encher-te de alegria e amor,
E te oferece descanso em Seu Salvador.
Tua casa e tua família Ele deseja restaurar,
Pelo poder do Seu amor que não cessará.
Aceite Seu jugo, suave e leve ao coração,
Nele encontramos alívio, descanso e direção.
No espelho, olhe a imagem do Senhor,
Refletindo o verdadeiro amor.
Ele é a luz que brilha em tua morada,
Querendo-te verdadeiro em toda jornada.
O homem prudente ouve a Palavra com atenção,
E na rocha firme constrói sua edificação.
Os ventos podem soprar, tentando abalar,
Mas alicerçados na rocha, não deixamos desanimar.
Seja um missionário, ouça a voz do Senhor,
Sua promessa cumprirá, confia em Seu favor.
Somos de Deus Salvador, Seu amor nos guiará,
E com alegria no coração, a Sua graça celebrar.`,
      reflection: '"Aceite Seu jugo, suave e leve ao coração" contrasta com a imagem comum de que seguir a Deus é peso extra numa vida já cansada. A casa construída na rocha resiste ao vento não porque nunca é sacudida, mas porque tem fundamento firme na Palavra ouvida com atenção. Sua vida está alicerçada em algo que resiste à tempestade, ou apenas parece firme em dias tranquilos? O que Deus quer restaurar hoje em sua casa e em sua família, se você deixar?',
    },
    {
      id: 'tr-11',
      title: 'Semente de Transformação',
      text: `Se liberte, meu amigo, da prisão na sua mente,
No espírito a gente sente, agindo de forma presente.
O coração vai se abrindo e Jesus vai transmitindo,
E nossa alma vem limpando as imperfeições,
Como o oleiro salvando a peça quebrada,
Nesta hora está restaurada.
Lembre que não está só, Ele está te conduzindo,
O seu coração abrindo para o perdão estar emitindo.
Todo dia com louvor e também adoração,
Agradeça a Deus com o coração.
"A semente não mente, pois somente em sua mente,
O pensamento acontece, quem controla os sentimentos,
Sua emoção permanece, pois assim a gente sente,
E o medo se desfaz, não fica mais latente.
A semente é plantada na terra do coração,
Quem controla sua vida, mente e emoção,
Terão a paz que vem do alto, gerando conexão.
A semente germinou na terra boa que plantou,
Com o tempo vai colher, é preciso cultivar,
O mato que mata arrancar, para a semente crescer,
Esperar o tempo certo, para ela não morrer.
Os frutos estão crescendo, já estão amadurecendo,
Em breve, estarão prontos, já estão se formando.
Não esqueça que a semente novamente
Terá que ser plantada para novo crescimento."`,
      reflection: '"A semente não mente" — o pensamento que você cultiva hoje é a colheita de amanhã, seja paz, seja medo. O poema compara o coração a terra onde o mato precisa ser arrancado para que algo bom cresça sem ser sufocado. Que "mato" — ressentimento, comparação, negatividade — você tem deixado crescer junto com a semente boa? Você tem cuidado da sua vida interior com a paciência de quem sabe que colheita tem tempo certo?',
    },
    {
      id: 'tr-12',
      title: 'O Despertar e a Libertação',
      text: `Se liberte, meu amigo, da prisão na sua mente,
No espírito, a gente sente Deus agindo de repente.
O coração vai se abrindo e Jesus vai transmitindo,
E nossa alma vem lavar, limpando as imperfeições e nossa vida vem salvar.
Desperta, olha ao seu redor, você não está mais só,
Ele está te conduzindo, o seu coração vai se abrindo para Ele te libertar.
Deixa Deus hoje falar, abra o seu coração na simplicidade dele,
E o Senhor cura a emoção.
Que alegria, meus irmãos, em estar neste lugar,
No tempo do kairós, o Espírito vem te salvar.
Diante da Tua presença, oh Senhor, vou derramar minhas mãos,
Levanto somente para te adorar.
Para sentir o amor de Deus, meu irmão, vou te falar,
Abra o seu coração e comece a expressar. Hoje é aquele dia que tanto tu esperaste,
Tire a sua maquagem, o Senhor foi quem mandou.
O Senhor vem neste dia reunir todo o seu povo,
Para retirar suas máscaras e restaurá-los de novo. Lembra-te de Bartimeu,
Ele se posicionou, gritou pedindo a Cristo, e sua visão se restaurou.
Enfrentou uma multidão pedindo pra ele parar. Se levante, meu irmão, até quando vai ficar?
Tome agora a decisão de enfrentar a multidão,
Até quando vai ficar aí prostrado, meu irmão? O Senhor está esperando você se posicionar,
Se levantar com fé para suas feridas curar. Lembra daquele dia que encheu teu coração,
Quando estava pedindo, buscando luz da escuridão? Ele estava contigo agora, mostrando a direção.
Hoje estou trabalhando, curando seu coração,
Restaurando sua memória, mudando sua história, colorindo sua vida.
Estou cuidando de você, limpando sua ferida.`,
      reflection: 'Bartimeu gritou apesar da multidão mandando calar — o poema pede que você também se posicione em vez de ficar prostrado esperando que a situação melhore sozinha. "Tire a sua maquagem" é convite duro a parar de fingir bem-estar diante de Deus que já vê tudo. Até quando você vai adiar o grito que poderia mudar sua história? Que máscara você usa até na oração, quando poderia simplesmente se entregar?',
    },
    {
      id: 'tr-13',
      title: 'A Semente e a Transformação',
      text: `A semente foi plantada no solo do coração,
Permita que ela germine e cuide de suas emoções.
Se não sabe como fazer, é hora de aprender,
Regue a terra com Jesus para que ela não pereça.
Aguarde pacientemente o momento de colher,
Pois a semente em sua vida não deve ser deixada para morrer.
A semente não mente, pois é no pensamento que ela se forma.
Quem controla os sentimentos mantém a emoção estável, dissipando o medo.
A semente brotou na terra fértil que você plantou, e com o tempo você colherá,
Pois a cuidou diligentemente. É necessário arrancar as ervas daninhas que sufocam,
Para que ela possa crescer, esperando o momento certo para não morrer.
Os frutos estão crescendo, estão amadurecendo, estão prontos para serem colhidos,
Mas lembre-se de que a semente, novamente, precisará ser plantada para colher no futuro.
Lembre-se todos os dias que somos filhos de Deus,
Cristo nos dá esperança e confiança, aos filhos Seus.
O capacete da salvação protege nossa identidade, mente e sentimentos,
Pois Jesus Cristo é a verdade. Hoje, para nos defender, uso a espada do Espírito,
Com a palavra do Senhor. Não é pela força bruta, e sim pela meditação,
Que encontramos sabedoria e orientação em Deus, nossa luz na escuridão, para enfrentar os desafios.`,
      reflection: 'A semente plantada precisa de água, tempo e as ervas daninhas arrancadas — nenhuma dessas etapas é opcional, lembra o poema. Controlar os próprios sentimentos, mais do que reprimi-los, é permitir que a emoção se estabilize sem alimentar o medo. Você tem cuidado da sua vida interior com a mesma diligência que dedica a outras áreas da vida? Que fruto amadurecido em você ainda não foi colhido por falta de atenção?',
    },
    {
      id: 'tr-14',
      title: 'O Despertar da Graça',
      text: `Não faço o bem que quero, embora saiba ser capaz,
Com a graça do Espírito, o pecado já não faz paz.
O Senhor é meu amparo, sustenta meu caminhar,
Somente com Sua graça, o pecado vou aniquilar.
Se estás paralisado, não precisas hesitar,
Jesus Cristo ordena, levanta-te e começa a andar.
Teu ministério parado, está a esperar por ação,
Tome a decisão agora, levanta-te com o coração.
Jesus caminha contigo, não esperes mais um dia,
Levanta-te com alegria, o Espírito traz a energia.
Abre teu coração, age com a fé em mão,
E o poder se manifestará, com grande transformação.
Lá nas Bodas de Caná, o vinho tinha acabado,
Maria atentou-se e ao filho foi falar, decidido.
"O vinho e a alegria, podes tu ajudar?"
Foi a pergunta feita, com esperança a brilhar.
O paralítico há muito tempo esperava sem cessar,
Alguém para jogá-lo na piscina, um desejo a implorar.
Jesus se aproximou e indagou com sabedoria,
"O que fazes aqui, não tens outra saída?"
O homem respondeu, "Sempre que o anjo vem,
Não consigo pular, é um sonho que se desdém."
Muitos ministérios paralisados, como este, estão,
Sabem que o Senhor está, sempre à mão.
Até quando ficarás prostrado, irmão?
És um missionário, abre agora teu coração.
É preciso fazer a tua parte, perceber e agir,
Põe em ação a fé, sem nunca desistir.
Jesus Cristo é quem te ajuda, com força e missão,
Levanta-te e age, cumpre com devoção.`,
      reflection: 'Nas Bodas de Caná, Maria agiu diante de um problema concreto — vinho acabando — em vez de apenas lamentar; o paralítico, por outro lado, ficou trinta e oito anos esperando alguém que nunca vinha. O poema pergunta até quando você ficará prostrado esperando condições ideais para agir. Seu ministério, sua vocação, seu dom estão parados esperando uma ajuda que talvez já esteja ao seu lado, sem você perceber. O que você faria hoje se ouvisse Jesus perguntando: "não tens outra saída?"',
    },
    {
      id: 'tr-16',
      title: 'Renovação Espiritual e Proteção',
      text: `Seja um homem novo, é hora de nascer,
da água e do Espírito, Jesus trouxe, vem beber.
Nicodemos foi falar: com Jesus conversar,
o mestre o ensinou a verdade e eu vos digo,
Jesus Cristo replicou: quem não nascer do Espírito
o Reino de Deus não verá, terá que nascer de novo
se quiser no céu entrar.
Como pode um homem velho no ventre materno voltar?
Não dá para nascer outra vez, o Senhor pode explicar?
Eu te digo em verdade, é preciso renascer da água e do Espírito
se quiser viver no céu.
Quem nascer da carne é carne, sempre será um canal,
mas quem nascer do Espírito, esse é espiritual.
Não te maravilhes com o que vou te dizer,
mas, porém, é necessário um homem novo nascer.
De repente o céu abriu, o Espírito desceu,
estava no quarto de cima, a língua de fogo apareceu.
Muita alegria, eu te peço, desce divina luz.
Teu nome é lindo, vou seguir a Ti, Jesus.
Estou no santo lugar, na presença de Jesus.
Eu sou Jerusalém, um Deus apaixonado na cruz,
Tu és o sol. Amém, louvemos a Deus,
que está ao nosso lado, Ele acende Sua luz.
Jesus é o amor, que ama a Deus e ao irmão,
tem a mesma face Santa que ajuda na missão.
A arte é expressão de nossa fé,
a palavra é a luz que distingue as pessoas,
que nos leva até a cruz.
O Senhor disse assim: não oprimais o estrangeiro,
se o fizerdes, o mal a eles, ficareis por derradeiro.
Quem chamar por mim agora, a todos ouvirei,
pois sou misericordioso, diz o Senhor outra vez.
Eu vos amo, oh Senhor, sois minha força e salvação,
sois meu Rochedo, onde busco a proteção.
Sois meu abrigo que protege minha vida,
meu escudo, Rochedo, Fortaleza, minha lida.
Mostra esta misericórdia e salvação,
sou ungido todo dia, buscando a proteção.
Nós nos tornamos imitadores de Paulo e do Senhor,
só não fiques preso sem viver o grande amor.`,
      reflection: 'Nicodemos veio de noite, com dúvidas honestas, e mesmo assim ouviu que era preciso nascer de novo — o poema recusa a ideia de que fé madura significa nunca questionar. "Quem nascer da carne é carne" adverte contra viver só de aparência religiosa sem transformação real pelo Espírito. Você já nasceu de novo de fato, ou apenas repete gestos religiosos aprendidos? O que em você ainda precisa morrer para que o homem novo, do Espírito, possa nascer?',
    },
    {
      id: 'tr-17',
      title: 'O Espírito que Guia',
      text: `O Espírito Divino é nossa força e animação,
A certeza e clareza da eterna salvação.
Os que nunca provaram do amor do Senhor
Não compreendem Sua palavra, nem Seu esplendor.
"Deixe os mortos enterrar", Jesus veio ensinar,
Pois há um caminho certo que devemos buscar.
Viva como filho amado, confie no Criador,
Creia neste momento, Sua palavra libertou.
Tenha fé e esperança, alegre-se no Senhor,
Pois o brilho de Sua glória sobre nós Ele lançou.
Cristo é o exemplo para quem deseja viver,
Seja livre e experimente, abra os olhos para ver.
Persevere e confie na palavra do Senhor,
Ele está aqui presente, derramando Seu amor.
Volte-se à Sua presença, firme-se no Salvador,
Ele é Deus soberano, nosso guia e protetor.
Não há mais como voltar, prepare-se para lutar,
Se deseja a vitória, aprenda a confiar.
O Senhor está contigo, basta apenas perceber,
Ouça a voz que te chama: Ele é Deus e te ama.`,
      reflection: '"Deixe os mortos enterrar os seus mortos" é frase dura que o poema usa para cobrar decisão: há um caminho certo que exige deixar para trás o que já não tem vida. Viver como filho amado, e não como órfão inseguro, muda a forma de enfrentar cada dificuldade do dia. O que você ainda carrega do passado que já deveria estar enterrado? Você tem ouvido a voz que te chama, ou está distraído demais para perceber Sua presença?',
    },
    {
      id: 'pc-1',
      title: 'Força e Proteção',
      text: `Dá-me força, Senhor,
aceito o Teu amor que me sustenta,
que me protege e me guia.
És meu Deus, meu Salvador,
minha rocha, minha vida.`,
      reflection: 'A oração curta "Dá-me força, Senhor" é honesta o suficiente para reconhecer que sozinho não se sustenta. Chamar Deus de rocha e vida, e não apenas de ajuda ocasional, muda a relação de emergência para dependência constante. Em que situação desta semana você tentou se sustentar sozinho antes de pedir essa força? Você trata a oração como último recurso ou como fundamento diário?',
    },
    {
      id: 'pc-2',
      title: 'O Controle da Alma',
      text: `Este é o controle da alma, no profundo do teu ser,
O bálsamo que acalma, já parou pra perceber?
Vim curar suas feridas, pois filho amado és,
Entreguei por ti minha vida, sempre estou de pé.
Recebe agora a cura, que Eu trouxe pra você,
Abre o coração em graça, está na hora de crer.
Faça agora a sua parte, confie e vá além,
Pois o milagre acontece, quando a fé diz: Amém!`,
      reflection: '"Já parou pra perceber?" pergunta o poema sobre um bálsamo que acalma justamente porque alguém entregou a vida por você primeiro. A cura oferecida exige que você abra o coração em vez de continuar administrando a ferida sozinho. Você tem feito "a sua parte" ou tem esperado o milagre acontecer sem nenhum movimento seu? O que significaria, hoje, dizer amém de verdade e não por hábito?',
    },
    {
      id: 'pc-4',
      title: 'Misericórdia, Senhor',
      text: `Misericórdia, Senhor, neste dia de aflição,
Salvai minha vida, curai meu coração.
Não espere mais o tempo passar,
Faça a sua parte, Jesus vem te ajudar.
Por que estás parado? Erga-se, então,
Olhe para Cristo, clame em oração.
Até quando ficarás sem se mover?
Tua alma está sedenta, a água viva quer beber.
Acredite, tenha fé, persevere no Senhor,
Peça a Deus todos os dias o Espírito Salvador.
Deixe as queixas, erga a voz, tua hora já chegou,
Cristo vive e reina, Ele já te libertou.
Não se entregue à inércia, ouça a voz que te chamou,
Se deseja ser curado, Deus já te restaurou.`,
      reflection: '"Por que estás parado? Erga-se, então" tira qualquer chance de vitimismo confortável diante da própria dor. A alma sedenta que quer beber água viva precisa, primeiro, parar de reclamar e clamar de fato. Você tem tratado sua aflição como desculpa para inércia ou como motivo para buscar o Espírito com mais insistência? Que passo concreto você pode dar hoje em vez de continuar esperando que a hora chegue sozinha?',
    },
    {
      id: 'pc-5',
      title: 'A Paz que Chegou',
      text: `Sinta a paz que acabou de chegar,
Perceba que veio para ficar.
Agora é o momento perfeito
Para apenas contemplar.
Sempre que pensar e respirar,
Permita-se, por um instante, relaxar.
Olhe para dentro e então verá:
A conquista já é sua, celebre sem hesitar.
Sou capaz, posso dominar,
Basta agir e acreditar.
Comece agora, não há por que temer,
O incrível acontece quando você crê.`,
      reflection: '"Sou capaz, posso dominar, basta agir e acreditar" pede que a paz sentida na oração vire ação prática, não apenas sensação passageira de bem-estar. O convite a "apenas contemplar" antecede o agir — sem esse silêncio, a agitação volta rápido. Você tem tido momentos de paz que evaporam assim que a rotina retorna? O que muda em você quando decide, de fato, acreditar em vez de só desejar?',
    },
    {
      id: 'pc-6',
      title: 'A Paz Que Você Procura',
      text: `A paz que você procura
está no silêncio que você não faz.
Na esperança do perdão,
gloriamos na presença do Senhor.
Ao ouvir a voz,
sinto a paz brotar no interior.
A palavra ressoa suave,
quase que não percebo o amor.
Mas sinto…
Vejo uma luz brilhando,
me mostrando o que não via
dentro de mim.
Ah, será assim que eu vou viver
a partir dessa experiência interior?
Amando…
Enxergando o seu verdadeiro amor.
A luz iluminando
o caminho a seguir,
mostrando onde devo andar,
passar e não desistir.
Um banquete preparado...
Somente o escolhido pode entrar.
Abençoo sua vida,
meu filho pode acertar, assentar.
Os anjos preparou,
pode se alimentar
da palavra e da vida
que foi dada pra você.
Ao sentar à minha mesa,
para perceber:
ouça a voz interior,
está sempre falando com você.`,
      reflection: '"A paz que você procura está no silêncio que você não faz" acusa diretamente o barulho constante que evita o encontro real com Deus. O banquete preparado, no poema, só recebe quem aceita o convite ao silêncio interior, não a quem só passa por perto. Você tem preenchido cada momento vazio com ruído para não precisar escutar o que Deus quer dizer? Que silêncio você evita hoje por medo do que possa ouvir nele?',
    },
    {
      id: 'pc-7',
      title: 'Banho de Paz',
      text: `Senhor,
lava todo medo,
limpa como a sujeira que agora escorre.
Ao tomar banho,
a ansiedade se vai —
como o vento,
se afasta da minha presença,
deixando apenas a calma sorrir.
A vergonha se dissipa,
como o cheiro de um perfume falso.
A raiva voa,
como uma borboleta incerta,
sem saber quando vai voltar.
O que fica
é a certeza:
Teu amor me banha,
e eu permaneço em paz.`,
      reflection: 'O banho descrito no poema não lava só o corpo, lava medo, vergonha e raiva como quem deixa a sujeira escorrer de propósito. "A vergonha se dissipa como o cheiro de um perfume falso" reconhece que muita culpa carregada não tem fundamento real, só hábito de se condenar. O que você precisa deixar escorrer hoje em vez de guardar mais um dia? Você permite que o amor de Deus banhe também aquilo que você não conta a ninguém?',
    },
    {
      id: 'p3-29-new',
      title: 'O Novo Começo',
      text: `A nova história começou em primeiro de janeiro,
Pois no dia derradeiro, o passado foi inteiro.
Tudo aquilo que antes me fez desabar,
Ficou para trás — já não pode mais me parar.
Que Deus fale bem de você — é o que desejo,
Que esteja ao seu lado com graça e com beijo.
Hoje, recebi um livro em branco para escrever:
A história da minha vida, que um dia você vai ler.
Como é bom perceber que a alegria não se apaga,
Pois, em Deus, nada se perde — tudo se embala e se embasa.
Ele quer nos ensinar, com carinho e com saber,
Que depende de você, a cada dia, renascer.
Resolvi deixar no passado minhas antigas prisões,
Enterrei as culpas e confusas convicções.
Hoje, na mente, trago paz e emoção,
Porque vivo com Deus dentro do meu coração.`,
      reflection: '"Recebi um livro em branco para escrever" é imagem forte para quem acredita que o passado condena o futuro. Enterrar culpas e convicções confusas não é esquecer, é decidir que elas não escrevem mais nenhuma página. Que capítulo antigo você continua relendo em vez de virar a página que Deus já ofereceu? O que você escreveria hoje se realmente acreditasse que o passado não te define mais?',
    },
    {
      id: 'p3-33-new',
      title: 'O Tempo e a Transformação (II)',
      text: `O tempo passa como o vento a soprar,
Não espera ninguém, só sabe caminhar.
Muitos acham que ele os levará além,
Mas todo dia ele volta com 24 horas, um novo bem.
É preciso entender: o tempo não espera,
Pra que algo mude, é preciso ação verdadeira.
Alguns reclamam, dizem: “não tenho tempo”,
Mas gastam em lamentos, sem real movimento.
Querem saúde, pedem paz na oração,
Mas negligenciam corpo, alma e alimentação.
Dizem que são felizes no que não deveriam,
Enquanto o tempo entrega o tanto que pediam.
Te peço agora: deixa o Senhor te tocar,
De um jeito novo, profundo, sem hesitar.
O passado já foi, o futuro ainda virá,
É no presente que a vida se manifesta, está.
Escuta! O tempo está correndo,
E quem só sonha, vive se perdendo.
É hora de fazer o que antes não fazia,
Pois a vida se revela em cada novo dia.
O tempo traz bênçãos e também provações,
Mas é no tempo de Deus que nascem transformações.
Não é como o tempo humano, ansioso e voraz —
O tempo divino é perfeito, e sempre traz paz.
O tempo é como um anjo que vem te ofertar,
Sabedoria, emoções e olhos pra enxergar.
Ele nunca para, nem volta atrás,
Por isso, valoriza enquanto ele te traz.
São só 24 horas que Deus te entrega,
Para mudar, refletir, viver sem entrega cega.
E depois mais 24 para recomeçar,
Para crescer, aprender e reavaliar.
O Espírito Santo age no tempo certo,
Mesmo que tua mente ainda esteja em deserto.
Ele fala, mesmo quando você não quer ouvir,
Mas espera com amor, até você decidir.
O tempo não vai parar pra você entender,
É preciso coragem para finalmente viver.
Não dá pra ficar parado, uma hora ele vai,
E com ele, a chance que hoje ainda te atrai.
Quando tudo se encerrar, o tempo findar,
A morte chegará, e nada poderá evitar.
E então, diante de Cristo, a pergunta virá:
“O que fizeste com o tempo que te dei pra transformar?”`,
      reflection: '"O que fizeste com o tempo que te dei pra transformar?" é a pergunta final do poema, e ela deveria incomodar mais do que incomoda. Reclamar de falta de tempo enquanto se nega ação concreta é contradição que o texto expõe sem rodeios. Você tem pedido paz na oração enquanto negligencia o corpo, a alma e as relações que dependem de você? Quantas das suas próximas 24 horas serão realmente diferentes de ontem?',
    },
    {
      id: 'p3-40-new',
      title: 'Transformação e Chamado (II)',
      text: `Eis que faço novas todas as coisas,
nosso canto, nossa vida precisa se transformar em canção.
Deus transforma em meu coração,
temos um deserto a atravessar,
com passos curtos, sem desistir, sempre avançar,
colocando em ação, mudando o rumo da história.
Jesus está vivo em Sua plena glória,
com o canto da vitória, Sua graça neste dia ecoa,
nos tirando desta vida velha,
uma vida extraordinária Ele nos dá.
Jesus, o fundamento, a base para sustentar,
uma vida extraordinária, Ele preparou para dar.
Quando Deus vier te falar, não desistas, vai dizer,
para tua vida transformar Ele vai te ajudar, mas faz o que tiver que fazer.
Nosso canto, nossa vida, enfim precisa gerar transformação,
nossa vida bem vivida se transforma em canção.
Retoma teu caminho, faz melhor do que já fizeste,
volta para teu Senhor, faz novo outra vez,
para cima e para frente, esta é nossa missão,
este é nosso ministério, faz com teu coração.
Deus está chamando agora, é hora de aceitar,
hoje é um novo dia, minha história vai mudar.
Tome vergonha na cara, o Senhor vem te chamar,
exerça teu ministério, o Espírito vem te falar.`,
      reflection: '"Nossa vida bem vivida se transforma em canção" propõe que a transformação espiritual não fica só no sentimento, ela reorganiza rotina, ministério, relações. O deserto a atravessar exige passos curtos, não saltos heroicos únicos. Que ministério ou responsabilidade você abandonou por vergonha ou cansaço e precisa retomar hoje? Deus está chamando agora — o que te impede de aceitar?',
    },
    {
      id: 'p3-50-new',
      title: 'Sopro de paz',
      text: `soprou sobre nós teu Espírito,
a paz com ele chegou.
todo medo se desfez,
a dúvida se dissipou.
o Espírito desceu,
trouxe paz neste lugar.
como o Pai me enviou,
eu vos envio a anunciar.
acalme seu coração,
toda manhã, por favor,
pare agora, sinta o ar,
comece a orar com o Senhor.
pois renovo em você,
sua paz e alegria,
então, só assim vai perceber,
a paz em expansão.`,
      reflection: 'O sopro do Espírito que dissolve o medo e a dúvida no poema não é evento único, é convite diário: "toda manhã, por favor, pare agora, sinta o ar". A missão de anunciar nasce dessa paz recebida antes, não do esforço de convencer alguém sem paz própria. Você tem começado o dia parando o suficiente para sentir esse sopro, ou já sai correndo com a ansiedade de ontem? Que medo específico ainda não se desfez em você apesar de tantas orações?',
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
      reflection: '"Sem a graça não és nada". Muitas vezes tentamos fazer a obra de Deus apenas com nossas forças humanas e nos cansamos. O Espírito Santo é o combustível para a missão e o remédio para o desânimo.',
      inspiration: 'Espírito Santo, sopra sobre o meu medo e...'
    },
    {
      id: 'p4-2',
      title: 'Sopro de Paz',
      text: `Soprou sobre nós teu Espírito, a paz com ele chegou.
Todo medo se desfez, a dúvida se dissipou.
O Espírito desceu, trouxe paz neste lugar.
Como o Pai me enviou, eu vos envio a anunciar.
Acalme seu coração, toda manhã, por favor,
pare agora, sinta o ar, comece a orar com o Senhor.
Pois renovo em você, sua paz e alegria,
então, só assim vai perceber, a paz em expansão.`,
      reflection: 'Este poema evoca a presença do Espírito Santo como fonte de paz e renovação. A transformação que ocorre com a chegada do Espírito é sentida no coração, dissipando medos e dúvidas. A mensagem central convida o leitor a acalmar o coração, buscar a paz através da oração e sentir a presença renovadora do Espírito em sua vida.',
      inspiration: 'Como você sente a presença do Espírito Santo em sua vida diária? De que forma a oração ajuda a acalmar seu coração e renovar sua paz interior?'
    },
    {
      id: 'p4-3',
      title: 'Com o Óleo da Fé',
      text: `O Senhor está libertando dessa tristeza, meu irmão, Permaneça no caminho, sinta a paz no coração.
Preencha esse vazio, acenda no seu interior, Pois o poder de Deus agora reacende com amor.
O fogo do Espírito te tira da escuridão, Com a lâmpada acesa, saia já dessa prisão.
Procure no coração teu guarda e teu farol, Ele é tua proteção, teu escudo, teu sol.
Abre-te ao que te sustenta, tira essa preocupação, Se encha do óleo santo, mantenha viva a paixão.
Com o fogo do Espírito, não se deixe apagar, Pois é com poder e serviço que Ele vem te ungir e enviar.
Não seja imprudente, leve o óleo da compaixão, O óleo do amor, da fé e também o do perdão.
Acredite no Senhor, o Noivo está a chegar, A festa se aproxima — só os prontos vão entrar.
Nesta noite santa, você pode escutar, Conhecer melhor o Senhor, se preparar para entrar.
O banquete está posto, Ele é teu Salvador, Se quiser sair da escuridão, leve o óleo do amor.
Tenha sempre consciência: o Céu foi feito pra você.`,
      reflection: 'A parábola das virgens prudentes nos lembra que o óleo não pode ser emprestado. A intimidade com Deus é intransferível. Minha lâmpada está acesa ou apenas fumegando? O que é o "óleo" que preciso repor urgentemente hoje? (Paciência, perdão, oração?)',
      inspiration: 'Senhor, enche minha cumbuca vazia com...'
    },
    {
      id: 'p4-4',
      title: 'O Espírito Está Aqui',
      text: `Você não está sozinho, o Espírito com você está.
A graça está sendo derramada, és chamado a experimentar.
O Deus poderoso vem em ti habitar, com a força do Espírito para libertar.
Usou com justiça o homem em missão, pra libertar o Seu povo e curar o coração.
É o Senhor sem rival, ninguém igual a Ti. À frente do homem, quem irá resistir?
Acima de todos, a tudo formou — És o Soberano, o Deus Salvador.
Usou o instrumento: a mim e a você. Confia n’Ele hoje, Ele é o teu Senhor.
Voltai ao caminho, Ele vem te buscar. Com a graça do Espírito, Ela vai te salvar.
Faça a vontade, confie no Senhor, ouça a voz que fala: É Ele, o Redentor.
Confie, irmãos, o Espírito está aqui, derramando Sua graça, te chamando a seguir.
Espere o tempo, escute o Senhor. Tenha esperança, Ele age com amor.
Persevere, obedeça, acolha com fé — É Ele quem restaura, te coloca em pé.
Ele está disponível: o Espírito de Deus. Coloque o coração, Ele é santo, é teu Deus.
Amigo e companheiro, se entregue em oração, te ajuda e liberta de toda escravidão.
Adore o Senhor, teu Deus, saia já da servidão. Se coloque em vigilância, se coloque em oração.
Alegrai o coração, deixe a idolatria! O Senhor é teu Deus, adore-O neste dia.
Não vacile em sua fé, tenha força, venha ver. Não esqueça do Senhor, pra confiança permanecer.
O nosso Deus é amor e também salvação. Todo tempo Ele age, nos livrando da prisão.
A graça foi derramada, tome posse com a fé. No propósito de Deus, Ele coloca você de pé.
A Palavra te sustenta, é viva e eficaz. Transforma tua vida, restaura tua paz.
Ele é teu Salvador, tome posse do Senhor. Pra viver a liberdade, seja inteiro no amor.
Agora que estás ouvindo, pare para escutar. O Senhor está falando, pronto pra te libertar.
A poesia não acaba, começa a se manifestar: quando você confia, o Senhor vem todo dia Sua graça derramar.`,
      reflection: '"A poesia não acaba, começa a se manifestar". A verdadeira adoração não acontece apenas na igreja, mas na vida diária. Quando você sai da oração, a poesia continua nas suas atitudes. Como posso transformar minha vida em uma poesia viva do Espírito Santo? Qual "idolatria" (apego excessivo a algo ou alguém) preciso deixar para adorar somente a Deus?',
      inspiration: 'Não sou mais escravo, sou amigo do Espírito e...'
    },
    {
      id: 'p4-5',
      title: 'Vivendo o Mesmo Carisma',
      text: `Vivendo o mesmo carisma, Além de se reunir, Dinâmico com o movimento, Com o Espírito Santo servir.
Sou profeta, corrente de graça, A moção do carisma anunciar.
O grupo de oração é momento De celebrar, com o Espírito Santo celebrar.
O rei Davi separou os levitas, Quatro mil, para o Senhor louvar.
Foram duzentos e oitenta e oito escolhidos Também para tocar e cantar.
Meus irmãos, na manhã deste dia, Ao Senhor quero agradecer, Pela graça que foi derramada, Nunca mais irei esquecer.`,
      reflection: 'O carisma não é para ficar guardado, é para servir. Davi separou milhares apenas para o louvor, mostrando a importância de se dedicar a Deus com excelência. Eu vivo o carisma apenas "reunido" (na igreja) ou sou "dinâmico" no movimento (na vida)? Tenho usado meus dons para servir, como os levitas de Davi, ou estou escondendo o talento?',
      inspiration: 'Eu renovo meu carisma e me ofereço para…'
    },
    {
      id: 'p4-6',
      title: 'Renovação Espiritual (Nicodemos)',
      text: `Seja um homem novo, é hora de nascer, da água e do Espírito, Jesus trouxe, vem beber.
Nicodemos foi falar: com Jesus conversar, o mestre o ensinou a verdade e eu vos digo: "Quem não nascer do Espírito, o Reino de Deus não verá".
Como pode um homem velho no ventre materno voltar? Não dá para nascer outra vez, o Senhor pode explicar?
Eu te digo em verdade, é preciso renascer da água e do Espírito.
Quem nascer da carne é carne, sempre será um canal, mas quem nascer do Espírito, esse é espiritual.
De repente o céu abriu, o Espírito desceu, estava no quarto de cima, a língua de fogo apareceu.
Muita alegria, eu te peço, desce divina luz. Teu nome é lindo, vou seguir a Ti, Jesus.`,
      reflection: 'Nicodemos tinha conhecimento, mas não tinha vida nova. O batismo no Espírito não é uma teoria, é um "nascer de novo". Eu nasci apenas da carne ou já experimentei o nascimento no Espírito? O que precisa "nascer de novo" em mim? (Minha esperança? Minha alegria?)',
      inspiration: 'Eu quero nascer de novo para...'
    },
    {
      id: 'p4-7',
      title: 'Luz e Graça Divina',
      text: `Jesus Cristo, Tua luz ilumina meu caminho, Confio nas promessas que se cumprirão no tempo divino.
Com Jesus ao meu lado, alinhado com Sua vontade, Nada me angustia, estou em Sua fidelidade.
O Espírito Divino me batiza e guia, Conduzindo-me com sabedoria, dia após dia.
Vinde, Espírito Santo, ajuda-me a louvar, Entregando minha vida a Jesus, meu Salvador.
Agradeço por transformar minha vida, A luz do Espírito abre portas com força viva.
Tu és o centro que alinha minha vida, Caminho ao Teu lado, buscando cura e saída.
O sopro do Espírito preenche este lugar, Guiando tua vida para a cura alcançar.
Renovando tua confiança para a libertação, Ele te resgata com graça e salvação.`,
      reflection: '"O Espírito Divino me batiza e guia". O batismo não é algo que aconteceu apenas no passado; é uma experiência de guia diária. Tenho permitido que o Espírito me guie nas pequenas decisões do dia a dia? Minha vida está "alinhada" com a vontade Dele?',
      inspiration: 'Espírito Santo, alinha meus passos com...'
    },
    {
      id: 'p4-8',
      title: 'Clamor e Louvor',
      text: `Peço esclarecimento, Senhor, em meu coração, Recebo com louvor e adoração a Sua graça e paixão.
Tu és soberano, nosso Deus e Salvador, Por meio do Seu Espírito, sinto agora Teu amor.
Não desperdice teu tempo com o que não traz luz, Busca compreender ouvindo a voz de Jesus.
Recita diariamente, salmodia para Deus, Nos cantos de louvor, oferece graças espirituais.
A palavra do Senhor restaura tua família e tua casa, Reconstruindo tua morada, e tudo se refaz.
Aquele que é sábio ouve a palavra anunciada, E constrói sua vida sobre a rocha firme, a fé é sua estrada.
Seja um missionário em teu próprio lar, Atento à voz do Senhor, deixa o coração se aquecer, Pelo fogo do Espírito Santo, o verdadeiro libertador.`,
      reflection: '"Seja um missionário em teu próprio lar". A primeira missão do cheio do Espírito é dentro de casa. Meu lar tem sido um lugar de louvor ou de reclamação? Estou desperdiçando tempo com o que "não traz luz"?',
      inspiration: 'Minha casa servirá ao Senhor e eu...'
    },
    {
      id: 'oi-1',
      title: 'Portas do Céu',
      text: `As portas do céu se abriram,
Ouvi a voz ressoar.
Como o som da trombeta,
O Senhor veio falar.
Bendito e louvado seja,
Ó Deus dos nossos pais!
Que Teu nome seja eterno,
Glorioso pelos séculos a mais.
Em justiça e retidão,
Sempre age o Criador.
Na oração, enviou o anjo,
Trazendo ao fogo o Seu calor.`,
      reflection: 'As portas do céu abertas e a voz como trombeta descrevem um Deus que se aproxima em vez de esperar passivamente que você o busque. "Bendito e louvado seja" nasce de reconhecer que a justiça e a retidão de Deus agem mesmo quando você não percebe. Você tem reservado algum tempo real de louvor, ou a oração virou só pedido de socorro? Que fogo do altar você precisa deixar acender de novo em sua vida de oração?',
    },
    {
      id: 'oi-2',
      title: 'Aproxime-se com calma',
      text: `Aproxime-se com calma,
Ouça a voz a chamar.
Santa e doce é Sua presença,
O Senhor está a chegar.
Purifique os seus passos,
Para em Sua glória andar.
O lugar que agora pisas
É um templo a se honrar.
Sua presença é real,
Deus habita neste lugar.
Tire a dúvida do peito,
Pela fé, tudo vai mudar.`,
      reflection: '"Tire a dúvida do peito, pela fé, tudo vai mudar" pede que a preparação para encontrar Deus comece antes, pela purificação dos próprios passos, não apenas no momento do culto. O lugar onde você está agora, diz o poema, é templo a se honrar — mesmo fora da igreja. Você trata sua rotina como espaço sagrado ou reserva reverência só para domingo? Que dúvida você carrega no peito que impede a fé de agir com liberdade?',
    },
    {
      id: 'oi-3',
      title: 'Marta e Maria (Lucas 10:38-42)',
      text: `Jesus entrou na casa de Marta para ensinar.
Maria, aos Seus pés, sentou-se a escutar.
Marta, preocupada com os afazeres do lar,
aproximou-se de Jesus e começou a reclamar.
Com ternura, Jesus a respondeu:
"Marta, Marta, por tantas coisas andas ansiosa.
Maria escolheu a melhor parte,
e esta não lhe será tirada."
Abandone a preocupação,
relaxe e venha sentar.
Ouça agora o que tenho a dizer,
para o seu coração curar.
Aprenda com Maria,
busque intimidade com o Senhor.
Sente-se para escutar,
perceba o Seu amor.
Adore como Maria,
abandone a preocupação.
É hora de cuidar do seu coração.`,
      reflection: 'Marta se ocupava com tudo que era urgente e perdia o que era essencial; Maria escolheu simplesmente sentar e ouvir. O poema não desqualifica o trabalho, mas confronta a ansiedade de quem nunca para para escutar. Você tem sido mais Marta do que Maria nesta fase da vida, ocupado demais para se sentar aos pés de Jesus? O que muda hoje se você escolher, ainda que por dez minutos, a melhor parte?',
    },
    {
      id: 'oi-4',
      title: 'Aproximar-se do Senhor',
      text: `Como tens buscado a presença do Senhor?
Somente assim serás curado,
Sinta agora o Seu amor,
Aproxime-se também, deixe-O se achegar,
Pois curar teu coração é também aprender a amar.
Jesus Cristo está curando, Sua palavra tem poder,
Mas é preciso acreditar para em ti acontecer.
No silêncio, observa o que Ele veio fazer,
Nunca percas tua fé, Jesus veio te dizer.
Não te escondas, o Senhor está a procurar
O servo que serve, que ama, que vive para adorar.
Aproxime-se d’Ele, permita-se amar,
Para curar teu coração, basta apenas se achegar.`,
      reflection: '"Curar teu coração é também aprender a amar" liga intimidade com Deus e capacidade de amar de verdade — uma alimenta a outra. O poema pede que você deixe de se esconder, como Adão no jardim, quando na verdade é Deus quem está procurando por você. Que ferida você continua escondendo em vez de trazer à luz da presença Dele? Você tem se aproximado o suficiente para deixar Ele te achegar de volta?',
    },
    {
      id: 'oi-5',
      title: 'Tenho Sede',
      text: `Com Cristo, fomos crucificados,
Maria ao lado, em amor consagrado.
Tenho sede, anseio ser amado.
Eis o grito:
Tenho sede, é meu chamado.
Deus tem sede e busca por você,
Sedento e ansioso para dizer:
"Onde estás? Estou te procurando,
Meu amor estou derramando."
Não se esconda mais de mim,
Eu te busco sem fim.
"Tenho sede, onde estás?"
Venha logo se apresentar.
Estavas com medo, mas agora estou aqui.
Perdoe-me, Senhor,
Nunca mais vou desistir.`,
      reflection: '"Tenho sede" é o grito da cruz e também, no poema, o grito de Deus buscando você antes de você buscá-Lo. Inverter essa lógica muda tudo: você não está correndo atrás de um Deus distante, é Ele quem pergunta "onde estás?". Você tem se escondido de Deus por vergonha de algo que acha imperdoável? O que significaria hoje responder "estou aqui" sem mais desculpas?',
    },
    {
      id: 'oi-6',
      title: 'Exulto no Senhor',
      text: `Meu espírito exulta em Deus, meu Salvador,
Minha alma glorifica Seu infinito amor.
Por isso, desde agora, em todas gerações,
Louvores ecoarão em minhas orações.
Sou serva promissora, a serviço do Senhor,
Sua misericórdia derrama-se em minha dor.
Realizou maravilhas com Seu imenso poder,
Seu braço forte ergue os que querem crer.
Levante-se, meu irmão, confie na oração,
O Senhor transforma e cura o coração.
Com a força do Seu braço, fez justiça e amor,
Derrubou os soberbos, exaltou o pecador.`,
      reflection: 'O Magnificat citado no poema é canto de quem reconhece grandeza recebida sem mérito próprio, não conquista pessoal. "Derrubou os soberbos, exaltou o pecador" inverte a lógica de status que ainda rege boa parte da vida cristã comum. Você tem cantado suas próprias conquistas ou reconhecido o que Deus fez apesar de você? Em que área da vida você precisa se humilhar para que a justiça de Deus possa agir?',
    },
    {
      id: 'oi-8',
      title: 'Pedido de Intimidade',
      text: `Senhor, eu te peço neste instante,
Ajuda para entender a diferença,
Entre intimidade e relacionamento,
Já tenho experiência, mas algo falta, com lamento.
Não consigo me relacionar com paciência,
Senhor, me ajude a entender o que me prende,
O que me faz ser o que sou, o que me abala e confunde.
Eu quero me relacionar contigo, entende?
Quero aprender, falar e ouvir todos os dias,
E nesse processo, alcançar uma intimidade que nos guia.
Quanto mais te conhecer, Senhor,
Mais intimidade contigo vou alcançar, com fervor.
Peço-te agora, por favor,
Que entre tantas perguntas eu possa encontrar
O caminho para vivermos com ardor,
Essa intimidade que nos faz vibrar.
Muitos perguntam como ter intimidade com Deus,
Mas esquecem o processo real, o que é para os fiéis.
É preciso viver com fidelidade,
Conviver e relacionar-se com verdade.
Não adianta só de vez em quando te buscar,
Na cidade, te encontrar,
É preciso um viver integral,
Não apenas no domingo, mas um amor universal.
Não adianta apenas te buscar na semana,
E esquecer o contato ao longo da jornada.
Para ter intimidade, o caminho é profundo,
Mas requer convivência, é preciso ser fecundo.
Senhor, me ajude a viver esta verdade,
A conviver e te buscar com sinceridade.
Quero ter intimidade, em toda idade,
E construir contigo uma forte amizade.
Ajude-me a viver com verdade e devoção,
A verdadeira comunhão, com total entrega do coração.
Eu falava com um irmão sobre intimidade,
Ele me fez pensar e analisar a realidade.
Percebi que para ter intimidade com Deus não basta ser filho,
Mudou meu pensamento, comecei a ver o brilho.
Relacionar-me com Ele não significa intimidade,
Não é fácil, mas vou compartilhar a verdade.
Para se conhecer, é preciso descansar,
Aprender algo novo todos os dias, sem cessar.
Intimidade com Deus requer olhar para dentro,
Retirar amarguras, cultivar amor, afastar angústia e tormento.
A solução é viver em paz com o Senhor,
É necessário começar, ter consigo mesmo, amor.
Amar a si mesmo é fundamental,
Aprender a ter intimidade é um processo diário e real.
Preciso olhar para dentro e compreender,
Que as coisas não acontecem por si, é preciso fazer.
É importante me expressar e me conhecer,
Decidi fazer uma experiência para mudar e crescer.
Enquanto orava, percebi que Deus me dizia,
Para acalmar meu coração e viver a vida com alegria.`,
      reflection: '"Não adianta só de vez em quando te buscar" desmonta a ideia de intimidade com Deus como visita ocasional em vez de convivência diária. O poema é honesto ao admitir que ser filho não garante automaticamente proximidade real — é preciso construir, como qualquer relação verdadeira. Você tem confundido frequentar a igreja com conhecer intimamente a Deus? Que hábito diário, pequeno, poderia transformar sua relação de visita em convivência?',
    },
    {
      id: 'oi-9',
      title: 'Oração do Espírito',
      text: `O Espírito só para para onde ele quer, ele Sopra o pecado assim como
na maré, coloca o medo de lado para te santificar ,ele vem te ajudar, curar
o teu coração, ele pega em tua mão para conduzir irmão ao teu colo
acolhedor, hoje cura a sua dor, libere enfim o perdão coloca em sua mão
para te santificar mas não deixe teu inimigo dominar sua emoção.
Nada pode amedrontar, nosso coração
está em Deus, tenha fé e coloque em ação.`,
      reflection: 'O Espírito que "sopra onde quer" não segue seu cronograma, mas o poema garante que Ele vem para curar exatamente onde você não quer que ninguém veja. Liberar o perdão, e não só recebê-lo, é parte do processo de não deixar o inimigo dominar a emoção. Que perdão você ainda não concedeu, guardando-o como se isso te protegesse? O que muda em você hoje se colocar essa fé em ação, e não só em sentimento?',
    },
    {
      id: 'oi-10',
      title: 'O Tempo de Adorar',
      text: `Chegou agora o tempo
de adorar o meu Senhor.
No momento presente,
o Pai procura na dor.
Sua glória está neste lugar,
uma luz está acesa para em nós brilhar.
O Pai está olhando para nós, então,
deixa a glória entrar no coração.
Deus está levantando muitos pelo louvor,
Deus procura seus filhos adoradores
que adorem em espírito e em verdade,
que todos vivam em plena unidade.
Aquele que estava te prendendo, o Senhor ordena,
abre teus lábios nesta manhã, vem adorar,
aquele que estava aprendendo,
Deus venha ordenar os teus lábios, filho, vem me adorar.`,
      reflection: '"Aquele que estava te prendendo, o Senhor ordena" liga adoração à libertação — abrir os lábios para louvar é também abrir mão do que amarra. O poema busca adoradores em espírito e verdade, não apenas presentes fisicamente num culto. Sua adoração tem sido rotina automática ou encontro real que muda algo em você? O que te impede de abrir a boca e adorar hoje, mesmo sem sentir vontade?',
    },
    {
      id: 'oi-12',
      title: 'Entrega e Louvor',
      text: `Tenha piedade, Senhor,
Abro a Ti meu coração.
Com Tua brasa sagrada,
Me entrego em adoração.
Com meus lábios proclamarei,
Tua Palavra anunciarei,
Para toda criatura
Que parar para escutar.
Abro a boca e falo agora,
O Senhor está chamando.
Não duvide, tenha fé,
O que você está esperando?
Se teu coração vagou,
Se afastou do Seu amor,
Volte agora para Cristo,
Sinta a graça do Senhor.
Exalte a Deus com alegria,
Glorifique o Seu nome.
Não se cale neste dia,
Pois Ele te escuta e te acolhe.
Ele ama os Seus filhos,
E Sua graça vem doar.
Tome posse, meus irmãos,
É hora de se levantar.
O poder já foi dado,
Você tem que proclamar.
O Senhor é onipotente,
E hoje veio te tocar.`,
      reflection: '"O poder já foi dado, você tem que proclamar" retira a desculpa de estar esperando permissão ou capacitação extra para agir. Coração que vagou pode voltar — o poema não trata afastamento como sentença definitiva, mas como convite ao retorno. Que verdade sobre Deus você conhece, mas nunca proclamou por medo do que os outros pensariam? Você tem se calado quando deveria se levantar?',
    },
    {
      id: 'p4-25-new',
      title: 'Caminho de Adoração',
      text: `Na missão de desvendar os mistérios da tua vida,
Agora vou contemplar, junto com a Virgem Maria.
Ao Senhor vou entregar minha vida, sem hesitar,
No início da oração, através do Santo Terço,
Ó Senhor, eu não mereço.
E todo dia, vem me amar,
Minha vida em tua vida, hoje eu vou colocar.
Santa Mãe de Deus, Maria,
Nesta hora, neste dia, vou contemplar com alegria
A vida do meu Senhor, o seu filho Jesus Cristo,
Que derrama em nós o amor.
Ao nome soberano que está acima de todos,
Jesus Cristo amoroso, adoremos nesse altar.
Não há nome como este, no qual podemos louvar,
Entregue-se ao Senhor e venha adorar.
Aquele que está no trono, sentado,
Seja exaltado, Jesus Cristo adorado,
Que sempre está ao teu lado com o Espírito Amado.
Neste dia, vem falar, é preciso decidir,
O Senhor venha seguir, Ele vai te ajudar
A superar a dificuldade, para no céu você entrar.
Mais do que a vida, eu preciso de ti,
Que gera a vida eterna, ao Senhor, venha sentir.
Jesus é o Senhor, reconheço e entrego minha vida em tuas mãos, sem resistir.
Se você veio aqui, entregue a vida ao Senhor,
É Deus que está falando, sinta agora o seu amor.
Eu levanto as minhas mãos, em sinal de adoração,
Através do teu Espírito, restaura meu coração.
Ao levantar as minhas mãos, rendo a ti meu coração,
Nele quero habitar, pois eu sou o teu Senhor.
Ouça a voz que te fala, que te pede, não se cala,
O Senhor venha, vem te ajudar, em verdade eu te digo,
O Espírito vem derramar, se teu coração se abrir, tua vida vai mudar.
Jó caiu por terra, agora em ti toda depressão,
A unção que aqui está cura o teu coração.
Todo vício te liberta, acredite no Senhor, isso põe em oração.
O amor de Deus está aqui, neste lugar, ele vai salvar,
Ele vai te libertar, entregue a tua vida, e teu cansaço vai passar.
Liberte a alma presa, que não sabe como fazer,
Quer ver todas as correntes, que ela vai perceber.
Louvo a Deus, filho amado, abre o teu coração.
Deixa a água te lavar e curar tua emoção,
Se entregue nesta noite ao Senhor e adoração.
Sinto a tua presença, pois sou livre para te adorar,
Eu te adoro, ó Senhor, contigo eu quero estar.
Vem molhar a terra seca e do meu coração cuidar,
A semente para nascer, você terá que plantar.
Entregue ao Senhor agora as misérias do teu coração.
Deus transforma a tua história no momento de adoração,
Deus não reúne um povo à toa, vigia sua conduta.
O diabo quer te devorar, mas com Jesus, tu vences a luta.
Vigiai e orai, o diabo quer devorar,
Deus não reúne um povo à toa, Ele quer te ensinar.
O mundo já é do maligno, vigiai a conduta.
Busque o filho de Deus para vencer essa luta.
Matam, tutelar e contaminar, o diabo tenta fazer
Na sua forma de pensar.
Para agora perceber,
Deixe o Espírito agir,
Entre no confronto, a Jesus Cristo a seguir.
Tudo que perdi, com fé na oração, alcançarei.
Seja o meu guia, acredite no Senhor, falarei.
Bento do Senhor é cumprir a promessa do pai,
Que não entrega tudo, nem entrega a mais.
Jesus estava com fome, na figueira não tinha nada.
Jesus procura o fruto, mas se ele não achar,
Qual é a tua excelência, teu filho de Deus, para amar?
Jesus Cristo se aproxima para ter o fruto do céu,
O teu fruto está maduro, qual a excelência Deus lhe deu.`,
      reflection: '"Ó Senhor, eu não mereço" reconhece a desproporção entre a entrega pedida e a graça recebida — e mesmo assim o poema convida à entrega total, sem resistir. A imagem de Jó caído por terra e depois erguido pela unção mostra que ruína não é palavra final. Você tem entregado a Deus só o que sobra do dia, ou toda a sua vida sem resistir? Que vício ou cansaço você ainda segura, achando que precisa resolver sozinho antes de entregar?',
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
      reflection: '"O tempo ainda não acabou". O que eu preciso consertar na minha "lâmpada" antes que o Senhor venha? Estou vivendo como quem espera alguém importante chegar? O que preciso consertar hoje para minha luz brilhar mais forte?',
      inspiration: 'Enquanto espero a Tua volta, eu mantenho minha chama...'
    },
    {
      id: 'p5-3',
      title: 'Oração de Entrega e Adoração (II)',
      text: `Na missão de desvendar os mistérios da tua vida, Agora vou contemplar, junto com a Virgem Maria.
Ao Senhor, vou entregar minha vida, sem hesitar, No início da oração, pelo Santo Terço, vou clamar.
Ó Senhor, eu não mereço, Mas todo dia, venho e peço: vem me amar.
Minha vida em tua vida hoje quero depositar. Santa Mãe de Deus, Maria, Neste dia, nesta hora, contemplarei com alegria
A vida do meu Senhor, teu Filho Jesus Cristo, Que por nós se entregou — puro e infinito amor.
Ao nome soberano, que está acima de todos, Jesus Cristo, amoroso, adoremos com corações abertos.
Não há nome como este para se exaltar, Entregue-se ao Senhor, venha com fé adorar.
Aquele que está no trono, glorioso e exaltado, Jesus Cristo, Rei amado, Está ao teu lado com o Espírito Consolador,
Chamando-te com ternura, com poder e amor.
Neste dia Ele te fala: "É tempo de decidir." Se deseja segui-Lo, Ele vai te conduzir, A superar as dores e, um dia, no céu, ressurgir.
Mais do que a vida, eu preciso de ti, Senhor, Que geras vida eterna e derramas amor.
Reconheço: Tu és meu Salvador, Entrego minha vida sem resistência ou temor.
Se você aqui chegou, escute com atenção: É Deus que está falando, sinta agora essa unção.
Levanto minhas mãos em sincera adoração, E clamo: restaura, Senhor, o meu coração.
Ao erguer minhas mãos, rendo-me em devoção. Quero habitar em ti — és minha direção.
Ouça a voz que te chama, que insiste em falar: “Abre teu coração, deixa o Espírito te tocar.”
Como Jó, que caiu, mas foi levantado, Toda depressão se dissolva, todo vício seja quebrado.
O amor de Deus cura, transforma e vai libertar, A tua alma o Senhor hoje vem resgatar.
Louvo a ti, ó Deus, abre-me a visão. Deixa tua água lavar minha emoção.
Entrego-me agora, de corpo e alma, Tua presença é vida, é consolo, é calma.`,
      reflection: '"Mais do que a vida, eu preciso de ti". Essa frase é forte. Eu realmente sinto que preciso de Deus mais do que do ar que respiro? Ao lado de Maria, contemplo a vida de Jesus. Como posso ser mais "mariano" na minha entrega?',
      inspiration: 'Com Maria, eu digo Sim.'
    },
    {
      id: 'p5-4',
      title: 'Eis que Estou à Porta',
      text: `Esteja com o coração aberto Para receber Jesus Cristo — É o Salvador, Que em breve vai nascer.
Depois que Ele nascer, Morada irá fazer. Como disse na Palavra, Contigo irá viver.
Eis que estou à porta e bato, O banquete preparei. Deixa Eu entrar em tua casa, E contigo cearei.
Entre agora, meu Senhor, Eu preciso conversar. Sei que pode, nesta hora, Minha ferida curar.`,
      reflection: 'O banquete já está pronto. Jesus está batendo. A única coisa que falta é eu girar a maçaneta. Vou deixá-Lo na sala de visitas ou vou convidá-Lo para a mesa da minha vida?',
      inspiration: 'A porta está destrancada, Senhor. Entra e ceia com...'
    },
    {
      id: 'p5-5',
      title: 'Obra Divina (O Grande Final)',
      text: `Deus fez uma obra na sua vida, ah! Já está concluída, viu? Se alegre no Senhor, a porta do céu abriu.
A boa notícia é que Ele é a melhor notícia pra você.
O mundo apresenta dificuldade e problemas para se perder.
A solução é Jesus Cristo, Ele veio te dizer.
O mundo quer te oprimir, mas Deus traz para você:
Tenha ânimo e esperança, a palavra que foi pregada é para você viver.
Sua história, sua vida, Deus não esquece de você.
Teu clamor subiu ao céu, alegre venha viver; essa causa não tá perdida, acredite no poder.
Deus é Deus e te abençoa, não tenha medo, apenas crê.
Tire a angústia e esse medo, a ansiedade controlar; irmão, tenha coragem, o Senhor veio te dar.
Nesta noite, a esperança não vá embora sem pegar.
Na escuridão a alma fica presa sem saber onde está o candeeiro para sua luz acender.
Vá com medo mesmo, não se entregue, meu irmão; Jesus é a notícia que nasce no coração.
A porta foi aberta, se prepare pra sair deste mundo tenebroso e o Pastor Jesus seguir.
Ele mostra a direção por onde tem que passar; mesmo se tiver doente, Ele vai te ajudar.
Ele cura a ferida e é pro redil Ele trará.
Acalma sua vida, não tem que se preocupar; a palavra de agora foi lavrada pra te guiar.
Termino essa mensagem com o propósito de te lembrar: a porta já está aberta, se levante para entrar.`,
      reflection: '"Já está concluída". A obra de Deus em mim não é um "talvez", é um fato consumado na Cruz. Eu termino este livro saindo pela porta aberta?',
      inspiration: 'A obra está feita. Eu me levanto e entro...'
    },
    {
      id: 'p5-6',
      title: 'O Novo Começo (II)',
      text: `A nova história começou em primeiro de janeiro, Pois no dia derradeiro, o passado aniquilou,
Acabando com aquilo que antes me derrotou.
Que Deus fale bem de você é o que desejo este ano, Esteja sempre ao seu lado, todo dia abençoando.
Hoje recebi um livro em branco para escrever, A história da minha vida para um dia você ler.
Como é bom perceber que a alegria não se apaga, Pois em Deus nada se acaba e Ele quer nos ensinar
Que depende de você, todo dia, algo fazer Para sua história mudar e o futuro florescer.
Eu deixei lá no passado, resolvi as convicções Que me prenderam antigamente, pois agora,
Na minha mente, vivo em paz com as emoções.`,
      reflection: 'Todo dia é um "primeiro de janeiro" em Deus. Recebemos um livro em branco a cada manhã. O que eu vou escrever na página em branco de hoje? Quais "convicções antigas" eu preciso deixar no ano que passou?',
      inspiration: 'Neste livro em branco, eu escrevo...'
    },
    {
      id: 'p5-7',
      title: 'A Lei da Semeadura',
      text: `O sentido da vida é servir com alegria,
Semeando o amor em cada novo dia.
É mais fácil amar quem está longe de você,
Mas é o irmão de perto que te ajuda a crescer.

Saia do imediatismo, a semente tem seu tempo,
Não lance palavras vãs ao sabor do vento.
O que sai da sua boca molda a sua motivação,
Escolha com sabedoria a semente do coração.

Um semeia, outro rega, mas é Deus quem faz brotar,
Arregace a mente e prepare-se para colher e amar.`,
      reflection: 'Unificamos as lições sobre a semeadura espiritual. A colheita não é imediata, mas é certa. O poema nos lembra que nossas palavras são sementes: o que você tem plantado na vida de quem convive com você diariamente?',
      inspiration: 'Hoje eu planto paciência para colher...'
    },
    {
      id: 'p5-8',
      title: 'Caminhando na Fé',
      text: `Olá, com certeza posso te ajudar, Nesta hora, vamos juntos buscar?
Lutarei até o fim, pois Deus é quem manda, Em conexão com Ele, nossa fé se expanda.
Lembro-me da conexão que fiz com o Senhor, E hoje novamente, buscarei Sua direção e amor.
Ele está sempre ao meu lado, pronto a me socorrer, Ensinando-me a perseverar e vencer.
Na tempestade da vida, Ele é meu refúgio seguro, Confiando em Sua graça, não me sinto inseguro.
Homem de pouca fé, Deus cuida de você, Sua recompensa está chegando, creia e espere.
Deus sonhou com minha família, Ele tem um propósito, A prova é um caminho, uma oportunidade de crescimento.
Plantando com fé, colherei os frutos no futuro, A caridade, o amor, são princípios puros.`,
      reflection: '"Sua recompensa está chegando, creia e espere". A caminhada de fé não é em vão. Deus tem um sonho para sua família. Eu acredito que Deus tem um propósito para minha família, mesmo nas dificuldades? Como posso "lutar até o fim" sem perder a ternura?',
      inspiration: 'Eu caminho com fé em direção a...'
    },
    {
      id: 'p5-9',
      title: 'Semeie a Fé e Colherá Milagres',
      text: `Se você plantar a fé, também colherá milagres, Jesus Cristo é o Senhor, e essa é a verdade.
"Frater" significa irmão, cuidar um do outro, Assim como o Pai Nosso nos ensina a perdoar de coração.
Mas o que é a caridade? É falar de amor, paciência e bondade,
Devemos praticar essas virtudes com sinceridade, E finalizar com a ajuda de quem traz saudade.
Quando o perfeito vier, o imperfeito sumirá, Deus espera que você Nele venha acreditar.
Ame primeiro a Deus, depois a mim, a você, e então, ame o irmão.
Conquiste a salvação, pois é assim que deve ser, Abraão é o pai da fé, pois ele se desapegou e sacrificou Isaque.
Assim, Deus o provou e seu exemplo devemos reconhecer.`,
      reflection: 'A verdadeira fé leva ao desapego, como Abraão com Isaque. E a verdadeira caridade leva ao cuidado com o irmão ("Frater"). O que é o "Isaque" (algo muito precioso) que Deus pode estar me pedindo para entregar? Tenho cuidado dos meus irmãos ou apenas de mim mesmo?',
      inspiration: 'Eu semeio fé para colher...'
    },
    {
      id: 'p5-10',
      title: 'Escolhidos para Anunciar (II)',
      text: `Nós fomos escolhidos para orar e anunciar, O Espírito Divino veio nos acompanhar.
Abra o seu coração, deixe Deus nele entrar, No livro de Hebreus, o Senhor veio falar.
Lembre-se daquele dia em que foste iluminado, A glória do Senhor está sempre ao seu lado.
A luz de Deus entrou, acabou a escuridão, Não viva como escravo, o Senhor te dá a mão.
Nos momentos mais difíceis, a graça te fortalece, O Filho se sente amado, todo dia agradece.
Perceba no caminho, não desista do Senhor, Pois o Pai te ama tanto, sente agora o Seu amor.
O justo não justifica, ele é justificado, Ele tem convicção, o Senhor está ao seu lado.
Jesus é a ponte para unir o homem a Deus, É a manifestação salvadora do Filho de Deus.
Não somos de perder o ânimo para não nos arruinar, Mas mantemos a fé, pois o Senhor vem nos salvar.`,
      reflection: '"Não somos de perder o ânimo". O cristão é, por definição, um ser de esperança. Fomos escolhidos não para o fracasso, mas para anunciar a Luz. Eu tenho vivido como um escolhido ou como um esquecido? Que anúncio minha vida está fazendo para o mundo hoje?',
      inspiration: 'Eu fui escolhido e anuncio que...'
    },
    {
      id: 'fe-2',

      title: 'Acredite e Confie',
      text: `Acredite em você, mas primeiro creia no Senhor,
Entregue sua vida a Ele, se sentir alguma dor.
Desperta! A esperança em Cristo já vive em você,
A criação aguarda o dia em que irá renascer.
Cristo ressuscitou, a graça já foi derramada,
Sinta agora Seu amor, Sua presença revelada.
Veja a glória se manifestando, a dor se dissipando,
Nos braços do Pai, tudo está se transformando.
Os filhos de Deus aguardam Seu grande esplendor,
Nunca perca a esperança em Jesus, nosso Salvador.`,
      reflection: '"A criação aguarda o dia em que irá renascer" amplia a esperança pessoal para uma espera cósmica, lembrando que sua fé participa de algo maior que sua própria dor. Acreditar em si mesmo, diz o poema, só faz sentido depois de crer primeiro no Senhor. Você tem tentado se reerguer sozinho, confiando na própria força antes de entregar a dor a Deus? O que mudaria se você aceitasse, hoje, que a graça já foi derramada sobre exatamente essa situação?',
    },
    {
      id: 'fe-3',
      title: 'A Fé que Cura',
      text: `Orai sem cessar, não deixes de clamar,
Como fez Bartimeu, deixa a capa e vem gritar:
"Jesus, Filho de Davi, tem piedade de mim,
Toca minha vida agora, faz minha visão se abrir!"
Tenha fé, não desista, confia no Senhor,
Como em Betânia, onde Ele derramou Seu amor.
Quatro dias se passaram, mas Lázaro ressurgiu,
E a glória de Deus Pai naquele dia se viu.
A mulher já padecia, doze anos a sofrer,
Buscou ajuda dos homens, mas não pôde se erguer.
Aproximou-se de Cristo, cheia de esperança,
Tocou a orla do manto e recebeu a mudança.
A fé é fundamento, é a base do cristão,
Então creia, meu irmão, com todo o coração.
Jesus está tocando, basta n’Ele confiar,
Pois Seu poder divino veio hoje pra te curar.`,
      reflection: 'Bartimeu deixou a capa — único bem de um mendigo — para correr sem nada que o atrasasse até Jesus. A mulher com hemorragia gastou tudo com médicos antes de tocar a orla do manto e ser curada pela fé, não pelo esforço. O que você ainda segura como a capa de Bartimeu, achando que precisa dela para chegar a Jesus? Que situação parece tão morta quanto Lázaro em que você ainda não ousou clamar por ressurreição?',
    },
    {
      id: 'fe-4',
      title: 'Chama que Não Se Apaga',
      text: `Há uma chama que arde,
em cada coração que crê.
É a fé que ilumina a vida,
e nos ensina a viver.
Mesmo em meio à tempestade,
essa chama não se apaga.
É o fogo do Espírito,
que nossas almas embala.
Quando a dúvida sussurra,
e o medo quer tomar o lugar,
é essa chama que nos lembra:
Deus jamais vai nos abandonar.
Proteja essa chama sagrada,
com oração e devoção.
Ela é o vínculo eterno
da nossa fé com o coração`,
      reflection: '"Mesmo em meio à tempestade, essa chama não se apaga" não promete ausência de tempestade, promete permanência da fé dentro dela. O poema pede proteção ativa dessa chama — oração e devoção, não apenas esperança de que ela resista sozinha. Que ventania recente quase apagou sua fé, e o que você fez para protegê-la? Você tem alimentado essa chama diariamente ou só espera que ela continue acesa por conta própria?',
    },
    {
      id: 'fe-5',
      title: 'Nosso Coração em Deus',
      text: `nosso coração está em Deus
nada pode amedronta aquele que é seu
Tenha fé e coloque em Ação
minha esperança é Jesus
que cura meu coração
o medo te afasta do coração de Deus
tenha fé tenha coragem Pois é filho seu
está em Deus no meu coração
pois tenho fé e esperança e amo o meu irmão
nosso coração está em Deus Pai do céu
Jesus quando morreu rasgou de cima ao véu
ressuscitou no terceiro dia o espírito soprou
a partir daquele dia ele nos acompanhou
dei a vida por Jesus nunca nega a sua fé
me levanta do pecado ele me coloca em pé
nosso coração está com fé no meu senhor
Não desista Fique firme e ele é teu Salvador`,
      reflection: '"Nada pode amedrontar aquele que é seu" é afirmação que precisa ser repetida justamente porque o medo insiste em voltar. O poema lembra o véu rasgado, símbolo de acesso direto a Deus sem intermediários nem distância. Você vive como quem tem acesso livre a Deus, ou ainda se sente longe demais para se aproximar sem medo? O que te levanta hoje quando o pecado ou o cansaço tentam te derrubar de novo?',
    },
    {
      id: 'fe-6',
      title: 'Firme na Rocha',
      text: `Nada pode amedrontar meu coração,
Pois ele está em Deus, minha salvação.
Tenha fé agora e coloque em ação,
O Espírito vem dissipar a escuridão.

Luz no interior para o caminho enxergar,
Cruz como guia para não se desviar.
Transforma meu ser, renova o meu viver,
Nos braços do Pai nada tenho a temer.`,

      reflection: '"O Espírito hoje vem para me iluminar a escuridão interior" é confissão corajosa de quem reconhece zonas escuras que precisam de luz, não apenas aparência de vitória. A cruz como guia, e não como peso decorativo, muda a forma de enfrentar o dia. Que parte escura de você ainda não foi apresentada abertamente ao Espírito? Você tem coragem de nomear, como no poema, quem você é diante Dele sem máscara?',
    },
    {
      id: 'fe-7',
      title: 'A Esperança e a Libertação em Cristo',
      text: `Pela paixão, ó Senhor, posso viver,
Jesus Cristo Salvador veio para te dizer:
"Eu vim à terra para salvar e conduzir você."
É bom estar aqui, reunidos como irmãos,
A Mãe de Deus ouve minha oração.
Fica firme, meu irmão, o Senhor está contigo,
Não desista, tenha fé, Jesus Cristo é teu amigo.
Eu não estou só, ó, meu Deus está aqui,
Os irmãos me ajudam, nesta hora, posso sentir.
Querido, nesta terra não é fácil para ninguém,
Para chegar no céu, fique firme, com o Senhor você vai além.
Ele nos conduz à esperança, a quebrantar teu coração,
Restaurando a aliança e equilibrando a emoção.
O tempo é do Senhor, acredite em Seu amor,
No Seu Filho, sinta a graça e o fervor.
Comece a louvar, e no meio do louvor,
O Espírito se manifestará.
Jesus Cristo é o Senhor, Ele veio libertar,
Renuncie ao pecado, sua alma limpará.
Só depende de você para hoje se salvar,
O Senhor espera que você abra o coração,
Ele é a verdade, reconheça a salvação.`,
      reflection: '"Não estou só" é declaração que o poema faz em comunidade — os irmãos ajudam a sustentar a fé quando ela vacila sozinha. Restaurar a aliança e equilibrar a emoção, diz o texto, não são processos automáticos, exigem tempo do Senhor, não pressa humana. Você tem enfrentado dificuldades isolado, achando que pedir ajuda aos irmãos seria fraqueza? O que significa, hoje, renunciar ao pecado que você sabe que te afasta dessa aliança?',
    },
    {
      id: 'fe-9',
      title: 'A Fé de Bartimeu',
      text: `Bartimeu estava sentado na estrada a pedir esmola,
Todo dia a quem passava por ali.
O dia chegou para a cura acontecer,
Saiu com sua capa para a proteger.
O cego sabia qual era sua missão,
Começou a gritar alto para chamar a atenção.
Ele, que já sabia que Jesus passava lá,
Tinha planejado seu dia para Cristo encontrar.
Quando Cristo ia passando, ele começou a gritar,
O povo tentou Bartimeu intimidar.
Mandaram calar a boca para o mestre não incomodar,
Bartimeu gritou mais alto: "Jesus, filho de Davi, tem piedade de mim, minha visão vem restaurar."
O povo estava tentando sua boca calar,
O Senhor ouviu sua voz e mandou chamar.
Os mesmos que tentaram em vão foram logo pegar,
"Levanta e deixa sua capa, agora vou te ajudar."
Ao chegar perto do mestre, ele logo perguntou:
"O que queres que eu te faça?"
"Que eu veja, meu Senhor."
Quer mudar sua vida, preste muita atenção,
E faça como Bartimeu, ouça com o coração.`,
      reflection: 'Bartimeu planejou seu dia sabendo que Jesus passaria ali — a fé dele não era espontânea, era preparada com antecedência e coragem para gritar apesar da multidão que mandava calar. "O que queres que eu te faça?" é pergunta que Jesus ainda faz, mas exige resposta clara, não vaga. Você tem gritado por sua cura ou tem se calado porque as pessoas ao redor acham inconveniente sua fé? O que você responderia, hoje, se Jesus fizesse essa pergunta direto a você?',
    },
    {
      id: 'ag-1',
      title: 'O Dom do Amor',
      text: `Cada um recebe um dom
Para a Igreja edificar.
Vou mostrar-te o caminho,
Para que possas caminhar.
Quanto tempo ainda tens?
O Senhor quer te ensinar.
O amor é paciente,
Para e vem analisar.
Como o bronze que ressoa,
Ou o címbalo a tocar,
Sem amor, dons são vazios,
Nada podem transformar.
Ainda que fales línguas,
Ou profetizes sem cessar,
Se não houver caridade,
Nada disso há de contar.
Espera no Senhor,
Ele tudo vai te dar.
Com fé amadurecida,
Segue firme a caminhar.
Acolhe os teus irmãos,
A quem tanto precisar.
Persevera todo dia,
Na promessa a se firmar.
Ele deu de Sua graça,
Como oferta e puro amor.
Tudo vale quando a alma
Segue livre em Seu louvor.
Ela cresce na verdade,
Leve e pura como a pena.
Recomeça na bondade,
Pois no bem não há algema.
Avança a cada dia,
Na fé e na caridade.
Jesus disse: "Este é o caminho,
A verdade e a liberdade."`,
      reflection: '"Sem amor, dons são vazios, nada podem transformar" é a advertência de Paulo que o poema retoma sem suavizar: falar línguas, profetizar, servir — nada substitui a caridade. O amor descrito é paciente e sem álgema, ou seja, livre de cobrança e controle. Você tem exercido dons ou funções na igreja sem o amor que deveria sustentá-los, só por obrigação ou vaidade? Onde sua fé ainda precisa amadurecer para se tornar caridade de fato, não apenas atividade religiosa?',
    },
    {
      id: 'ag-2',
      title: 'Mensagem de Amor Divino',
      text: `Deus nos reuniu hoje
Para algo te falar.
Filho, eu te amo,
Pare um pouco para escutar.
Eu vim ao mundo em amor,
Para a liberdade dar.
Deixa as prisões para trás,
Venha agora me encontrar.
Sou teu Deus, estou contigo,
Sempre perto a te guiar.
Derramando a minha graça
Sobre quem soube confiar.
Lembra de Herodes, filho,
E da mentira que contou?
Disse aos magos para irem,
Mas o engano preparou.
Foram sábios, obedientes,
E no sonho Deus falou.
Ofertaram ao Menino
Ouro e incenso em Seu louvor.
Na manjedoura sagrada,
O Salvador repousou.
Anjos cantavam em glória,
E os pastores O adoraram.`,
      reflection: 'A cena de Herodes mentindo aos magos, no meio de uma mensagem de amor, lembra que o engano ronda até os planos mais sagrados. "Filho, eu te amo, pare um pouco para escutar" pede exatamente o que Herodes nunca fez: parar e discernir antes de agir por medo ou ambição. Você tem discernido as vozes que ouve, ou seguido conselhos convenientes sem consultar Deus primeiro? Que prisão você ainda carrega que Deus já ofereceu libertar?',
    },
    {
      id: 'ag-3',
      title: 'Fruto da Nova Justiça',
      text: `Pela fé, temos paz com Deus,
Justificados por meio de Jesus.
Por Ele, acessamos a salvação,
Após Seu sacrifício na cruz.
Por Jesus, Deus nos oferece a paz,
Amadurecendo nossa fé, o fruto se faz.
Ele nos deu acesso para firmar nossa posição,
Percebendo Sua graça, somos justificados na missão.
Um dia, na glória de Deus estaremos,
Na plenitude do amor, a Ele adoraremos.
A presença divina é verdadeira,
A esperança não nos deixa na espera.
Permaneça firme, mesmo na tribulação,
Deus auxiliará em cada situação.
Gloriamos na esperança que nos é dada,
Pois a tribulação gera paciência cultivada.
Acredite, irmão, nesta esperança fiel,
Que prova nossa fidelidade ao céu.
A esperança não decepciona,
Pois Jesus Cristo é a verdade que nos emociona.
O amor de Deus foi derramado em nossos corações,
Pelo Espírito Santo, em diversas gerações.
Espere com vigilância, atento ao devorador,
Lembre-se diariamente de Jesus, nosso Salvador.
Pois a morte foi vencida,
Jesus curou nossa ferida.
Que Deus nos conceda Seu amor,
Fortalecendo-nos com Seu fervor.`,
      reflection: '"A tribulação gera paciência cultivada" reformula o sofrimento não como punição, mas como processo que amadurece o fruto da fé. O poema recusa a esperança como ilusão passageira: ela não decepciona porque se apoia num amor já derramado, não numa expectativa vaga. Você tem enfrentado dificuldades como quem espera apenas que passem, ou como quem espera que produzam algo em você? O que a tribulação atual pode estar cultivando em você que o conforto nunca cultivaria?',
    },
    {
      id: 'ag-4',
      title: 'O Caminho Excelente',
      text: `Agora vou indicar
O caminho excelente para caminhar.
Ainda que não sintas o amor,
Espera, confia, pois há um dom superior.
O Senhor virá te ajudar,
Dos dons superiores, vou te falar.
Receba de Deus o amor,
Pois Ele veio para te dar.
Seja caridoso, é hora de se entregar.
Permaneça firme, o Senhor vai te guiar.
Sirva com alegria, se um irmão precisar,
Faça como para Deus, se no céu quiser entrar.
Seja paciente, Ele irá te ajudar.
Permaneça no caminho e lá você vai chegar.
As portas do céu se abrem, corre logo, vem passar,
Deus está sempre pronto, vem comigo para entrar.
Nunca abandone sua cruz,
Se deseja a vitória alcançar.
Toda hora é hora,
A decisão precisa tomar.`,
      reflection: '"Ainda que não sintas o amor, espera, confia" reconhece que a fé às vezes precisa avançar sem o apoio do sentimento imediato. O caminho excelente de Paulo é citado no poema como superior a qualquer dom espetacular, porque se sustenta na entrega simples e constante. Você tem esperado sentir para agir, ou tem agido mesmo sem sentir, confiando que a graça sustenta? Que cruz você está tentado a abandonar justamente quando a vitória está mais perto?',
    },
    {
      id: 'ag-5',
      title: 'Deus Restaura Sua Aliança',
      text: `Deus restaura a aliança com Seu povo tão amado,
Em Noé, em Abraão, em Moisés, sempre ao lado.
Ele é o ar que respiramos, o sopro que nos deu vida,
Acende a luz apagada, em Seu Filho tem guarida.
Sobre tua prosperidade, contigo sempre estarei,
Mesmo que a mãe te esqueça, jamais te abandonarei.
Quem ama a Cristo de todo o coração
Tem diante dos olhos a força da salvação.
A palavra semeada tem poder de alimentar,
Fortalece tua fé, o Senhor sempre estará.`,
      reflection: '"Mesmo que a mãe te esqueça, jamais te abandonarei" retoma promessa profética que o poema aplica a quem se sente esquecido até pelos mais próximos. A aliança com Noé, Abraão e Moisés mostra um Deus que renova compromisso apesar da infidelidade humana repetida. Você tem duvidado da fidelidade de Deus por causa de abandono ou decepção de pessoas que deveriam ter ficado? Que palavra semeada em você precisa ser relembrada agora para fortalecer sua fé?',
    },
    {
      id: 'ag-6',
      title: 'Só a Graça do Senhor me Basta',
      text: `Só a graça do Senhor me basta,
Sem ela, nada sou.
Com o Espírito sou forte,
Pois em mim Deus derramou.
A seiva da videira
É a graça do Senhor.
Faço o bem todos os dias,
É o fruto do amor.
Cuidado, irmão, cuidado,
Para não ser arrancado.
Se cortado e lançado fora,
Certamente será o fim.
A desgraça é fruto podre,
Que ninguém pode colher.
Obedeça e procure,
Com humildade irá ver.
Há um segredo escondido,
Que você pode alcançar.
Jesus Cristo está contigo,
Ele veio te ajudar.
Seja íntimo de Cristo,
Pare e comece a escutar.
Vou falar sobre as moradas,
Para você se orientar.
No estado de graça,
Todos os dias vou estar.
Numa vida de oração,
As virtudes praticar.
Com Jesus em cada passo,
Meus irmãos irei amar.`,
      reflection: '"Sem ela, nada sou" é confissão radical de dependência que contraria o instinto humano de contar méritos próprios. A imagem da videira e dos ramos, no poema, avisa que fruto podre e desgraça vêm de quem se separa da fonte, não de azar. Você tem cultivado intimidade diária com Cristo ou vivido de reservas espirituais antigas, sem seiva nova? O que significaria hoje ser realmente íntimo de Cristo, e não apenas conhecido por Ele de longe?',
    },
    {
      id: 'p5-34-new',
      title: 'Semeie a Fé e Colherá Milagres (II)',
      text: `Se você plantar a fé, colherá milagres de verdade.
Jesus Cristo é o Senhor — essa é a eternidade.
“Frater” quer dizer irmão, cuidar uns dos outros,
Como o Pai Nosso ensina: perdoar com o coração pronto.
Mas afinal, o que é a caridade?
É amor em ação, paciência e bondade.
Devemos viver essas virtudes com sinceridade,
E contar com a ajuda de quem nos traz saudade.
Quando o perfeito vier, o imperfeito cessará,
E Deus espera que em Sua palavra você confiará.
Seja justo e cultive as virtudes teologais,
Agora aprenda: Fé, Esperança e Caridade são sinais.
Acredite no Senhor, não perca a esperança,
Pois o Salvador te guarda e nunca se cansa.
No céu, face a face, você verá o Criador,
Então viva a caridade, com entrega e com amor.
Ame primeiro a Deus, depois ao próximo e a si,
É assim que a salvação começa a fluir daqui.
Lembre-se de Abraão, pai da fé verdadeira,
Que entregou Isaque, com confiança inteira.
Deus o provou e nele confiou,
E o exemplo de fé permanece e nos guiou.
Plante fé com o coração, mesmo sem ver,
E milagres do céu você vai colher.`,
      reflection: '"Se você plantar a fé, colherá milagres de verdade" conecta diretamente ação de hoje com resultado espiritual, sem atalhos. Abraão entregou Isaque com confiança inteira antes de ver qualquer solução — a fé precedeu a prova, não o contrário. Você tem esperado ver para crer, invertendo a ordem que fez Abraão pai da fé verdadeira? Que semente de fé você pode plantar hoje, mesmo sem enxergar ainda o milagre que ela vai gerar?',
    }
  ],
  'bloco-6': [
    {
      id: 'p6-1',
      title: 'Oficina do Poeta: A Antena Ligada',
      text: `O maior inimigo do poeta no Grupo de Oração é a procrastinação disfarçada de "esperar para entender".
A poesia, no Método PCH (Poesia que Cura o Homem), é um registro da temperatura espiritual do momento.
Ela precisa ser escrita "a quente".
Não tente anotar tudo o que ele diz. Busque a "Espinha Dorsal" da mensagem.
Identifique as "Palavras de Fogo" (Rhema).
Geralmente aparecem quando o pregador altera o tom de voz ou repete a mesma ideia.
Vença o medo da página em branco nos primeiros 5 minutos.
Escreva dois versos simples. Não apague. Não risque. Deixe nascer.`,
      reflection: 'A técnica é apenas o vaso; o Espírito Santo é a água. Use esse conhecimento não para se exaltar, mas para servir. Não espere entender o tema completo para começar.',
      inspiration: 'No próximo encontro, anote 3 Palavras de Fogo e escreva seus primeiros 2 versos.'
    },
    {
      id: 'p6-2',
      title: 'Oficina do Poeta: Tradução Simultânea',
      text: `A pregação fala à razão (teologia). A poesia fala à emoção (imagem). O seu trabalho é ser o tradutor.
Enquanto o pregador explica, você traduz para imagens na mesma hora.
Se ele diz: "Vocês precisam ter fé nas dificuldades", eu escrevo: "No deserto da alma, o Senhor é manancial".

Não explique, mostre! Existe uma regra que diz: "Show, don't tell".
Dificuldade = Tempestade, Deserto. Proteção = Abrigo, Escudo.
Pecado = Sujeira, Lama. Graça = Chuva, Fogo, Óleo.
Se isso fosse um filme, o que eu estaria vendo?`,
      reflection: 'A poesia não fala a língua da explicação; ela fala a língua da imaginação. O Espírito Santo não apenas "explica"; Ele mostra.',
      inspiration: 'Treine ouvir uma frase longa e transformá-la em um verso curto e rimado instantaneamente.'
    },
    {
      id: 'p6-3',
      title: 'Oficina do Poeta: Escrevendo Sem Borracha',
      text: `Para entregar a poesia no final do grupo, não dá tempo de apagar ou duvidar.
Você tem que confiar que o Espírito Santo está guiando a caneta.
Entre em "Fluxo". Se uma rima não saiu perfeita, continue.
Se travou numa linha, pule para a próxima. O importante é não parar a caneta.
A perfeição vem da unção, não da correção.
Muitas vezes, a frase que você achou "estranha" é a que mais toca alguém no final.`,
      reflection: 'Muitas vezes a frase que achamos estranha é a que mais toca, porque veio de Deus. A perfeição vem da unção, não da correção humana.',
      inspiration: 'Tente escrever uma poesia inteira sem tirar a caneta do papel e sem riscar nada.'
    },
    {
      id: 'p6-4',
      title: 'Oficina do Poeta: O Ponto de Virada',
      text: `Toda pregação tem um momento de "pico", onde a unção fica mais forte.
Geralmente no meio para o final, quando o povo começa a orar ou louvar.
É aí que sua poesia precisa ganhar força.
Use palavras de poder: Fogo, Glória, Poder, Agora, Milagre.
Aproveite a energia do ambiente para dar energia às palavras.
Sua mão escreve no ritmo da música ou da oração.
A poesia vira uma oração escrita.`,
      reflection: 'Aproveite a energia do ambiente para dar energia às palavras. No pico da oração, a mente está aberta e receptiva.',
      inspiration: 'Observe o momento em que o ambiente "esquenta" na oração. Escreva seus versos mais ousados.'
    },
    {
      id: 'p6-5',
      title: 'Oficina do Poeta: O Amém Poético',
      text: `O pregador está caminhando para o fim. Faltam 2 minutos.
É hora de fechar a poesia para correr e ler.
Deixe as últimas 2 linhas para uma "conclusão profética".
As poesias PCH devem sempre terminar na Esperança e na Vitória.
Enquanto ele faz a oração final, escreva o desfecho, resumindo tudo em uma promessa de esperança.
Assim que ele diz "Amém", você coloca o ponto final.
A tinta ainda está fresca. É pão quentinho, saído do forno.`,
      reflection: 'A tinta ainda fresca torna a leitura poderosa. A poesia nunca deve terminar na dor, mas sempre na esperança profética.',
      inspiration: 'Quando o pregador disser "para terminar...", já esteja escrevendo sua última estrofe.'
    },
    {
      id: 'p6-6',
      title: 'Encerramento: A Missão Continua',
      text: `Meus irmãos, chegamos ao fim da nossa Oficina.
Você aprendeu a: Ligar a Antena, Fazer a Tradução Simultânea, Escrever no Fluxo, Capturar o Fogo e Fazer o Fechamento de Ouro.
Agora, a caneta está na sua mão. O Espírito Santo é a tinta. O coração do seu irmão é o papel.
Não tenha medo. Não enterre seu talento. O mundo precisa de poetas que profetizam, e a Igreja precisa da sua voz.
Vá e escreva a história de Deus na vida das pessoas.
Você nasceu para brilhar.`,
      reflection: 'A técnica é apenas o vaso; o Espírito Santo é a água. Use esse conhecimento para servir e curar feridas na alma alheia.',
      inspiration: 'Vá e brilhe. Sua voz é necessária para a Igreja e para o mundo.'
    }
  ]
};
