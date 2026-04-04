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
Se não houver caridade, Nada disso há de contar.`,
      reflection: 'Talento sem amor é barulho ("bronze que ressoa"). O dom não é para minha vaidade, é para edificar o outro.',
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
      reflection: 'A escrita é uma forma de materializar a alma. Quando escrevemos, tiramos o caos da mente.',
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
      reflection: 'Santificar-se significa "separar-se". Não é ser perfeito, é ser reservado para Deus.',
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
      reflection: 'O inimigo grita, acusa e agita. O Espírito Santo sussurra, acalma e encoraja.',
      inspiration: 'Eu calo o barulho para ouvir...'
    },
    {
      id: 'p1-10',
      title: 'Chamado e Luz',
      text: `Tens um chamado, um caminho a seguir. Perdoa nesta jornada, o Espírito está aqui.
Faz de ti um modelo vivo, a paz que vem do amor, em resposta à oração, dons Deus derramou.
Eu consolo tua vida, sê luz em meio à dor. Teu nome tem história, consagra o teu amor.
Abre agora teus ouvidos, tua boca para falar. O Espírito Divino está aqui para te escutar.`,
      reflection: '"Teu nome tem história". Deus não te chamou por acaso.',
      inspiration: 'Minha história é um testemunho de...'
    },
    {
      id: 'p1-11',
      title: 'Deixe Marcas de Santidade',
      text: `Deixe marcas de santidade, o céu é seu lugar. O relógio não para, pare para observar.
Qual é o seu legado? O que irá deixar? Faça como Maria, pare para escutar.
O Senhor está chamando, não há por que temer. Ansiedade e tristeza, Ele pode dissolver.
Qual tem sido a escolha? Onde você está? Ouvindo a voz de Cristo, sua casa irá mudar.`,
      reflection: 'Não levaremos bens materiais, mas levaremos o amor que demos.',
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
      reflection: '"Aquilo que veio para destruir é uma ponte para te conectar". Transformar a crise em altar.',
      inspiration: 'Minha dor se torna ponte quando...'
    },
    {
      id: 'p1-13',
      title: 'O Poder da Mente e do Amor Próprio',
      text: `Quem pensa, enriquece, Pois o Senhor não esquece Daquele a quem prometeu: "Se creres, farás obras maiores do que Eu."
Não saia da Sua presença, Aumente sua fé, sua crença Naquele que criou e te formou — Teu Senhor, teu Deus, teu Salvador.
Tua mente é poderosa, Mas se mal direcionar, Pensarás que não consegue, E hoje não irá triunfar.
Viva agora, no presente, Sinta o sopro do ar, Esse sopro é divino, é o Senhor A te ensinar a despertar.
O ser que habita em ti, Só floresce com amor. Depende do teu cuidado, Do reconhecimento do teu valor.
Deus é contigo, sempre será, Essa verdade não se apagará. Mas para viver em paz, com sucesso, Uma coisa só te peço:
Nunca se esqueça de você, Pois é o amor próprio que te faz florescer.`,
      reflection: 'Amar ao próximo como a si mesmo. Se você não se ama, não reconhece o valor da obra que Deus criou: você.',
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
      reflection: 'Deus não olha para o seu erro, Ele olha para a sua volta.',
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
      reflection: 'A graça de Deus não é um evento único, é um "recarregar" diário. Ela equilibra as emoções e aprimora a visão.',
      inspiration: 'Tua graça me alcança e equilibra meu...'
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
      reflection: 'A liberdade começa no pensamento. Dizer "no" aos outros pode ser dizer "sim" para a sua paz.',
      inspiration: 'Eu liberto minha mente e escolho...'
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
      reflection: 'A perfeição é inimiga da ação. "Parei de achar que tinha que ser perfeito".',
      inspiration: 'O medo não me para mais, eu avanço para...'
    },
    {
      id: 'p1-18',
      title: 'O Tempo e a Transformação',
      text: `O tempo está passando como o vento a soprar, Não espera por ninguém, não pare de avançar.
Toda noite, o tempo te dá 24 horas, um novo amanhecer.
O tempo de Deus é perfeito, você tem que acreditar, Ele está te chamando, vem cá, vamos juntos caminhar.
O tempo é como um anjo que traz a você, Alegria, emoções, e inteligência para perceber.
São apenas 24 horas que Deus te dá, Para refletir, mudar e se transformar.
Parado não dá pra ficar, uma hora o tempo chega, E o que ficará depois que ele for?`,
      reflection: 'O tempo é um recurso não renovável que Deus nos dá diariamente.',
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
      reflection: 'O espelho reflete o corpo, mas Deus vê o coração. A "prisão" interna (rancor, ódio) distorce nossa imagem.',
      inspiration: 'No espelho da graça, eu vejo um filho que...'
    },
    {
      id: 'p1-20',
      title: 'O Chamado de Mateus',
      text: `Depois que Jesus saiu e viu alguém no balcão,
O nome dele era Mateus, também chamado de ladrão.
Ele estava no posto de arrecadação, Jesus parou, fitou os olhos e chamou sua atenção.
"Segue-me agora", e Levi se levantou, Ele não pediu tempo, logo o acompanhou.
"Não os que têm saúde precisam de doutor, Mas sim os pecadores", respondeu o meu Senhor.`,
      reflection: 'Jesus chamou Mateus no seu local de trabalho, no meio de sua rotina e de seus erros.',
      inspiration: 'Eu me levanto do meu balcão e...'
    },
    {
      id: 'p1-21',
      title: 'Transformação e Chamado',
      text: `Eis que faço novas todas as coisas, nosso canto, nossa vida precisa se transformar em canção.
Deus transforma em meu coração, temos um deserto a atravessar.
Jesus está vivo em Sua plena glória, com o canto da vitória, Sua graça neste dia ecoa,
nos tirando desta vida velha, uma vida extraordinária Ele nos dá.
Retoma teu caminho, faz melhor do que já fizeste, volta para teu Senhor, faz novo outra vez.
Deus está chamando agora, é hora de aceitar, hoje é um novo dia, minha história vai mudar.`,
      reflection: '"Faz melhor do que já fizeste". O chamado de Deus é sempre para a excelência e para o novo.',
      inspiration: 'Hoje é um novo dia e eu decido...'
    },
    {
      id: 'p3-6',
      title: 'O Grito de Aflição',
      text: `Eu ouvi o grito de aflição do meu povo, Senti a ferida em seus corações. Hoje, venho para curar e salvar.
Assim diz o Senhor, que vem sarar todas as feridas, Pois em Deus reside o amor, Que é puro e o princípio da vida.
Não busque apenas a cura física, Mas procure Aquele que é a fonte da vida.
O Senhor te oferece a verdadeira felicidade Para que possas ser salvo e viver plenamente.
Ele ouve mesmo quando não consegues expressar em palavras, Ele guia teu coração para que não tropeces em Sua presença.`,
      reflection: '"Ele ouve mesmo quando não consegues expressar em palavras". Às vezes, nossa oração é apenas um gemido.',
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
Você nunca está sozinho, o anjo te acordará, Para os caminhos do Senhor, Ele te iluminará.`,
      reflection: 'O convite é íntimo: "Fica aqui na minha casa". A cura acontece quando convidamos o Espírito para morar.',
      inspiration: 'Espírito da Vida, entra na minha casa e...'
    },
    {
      id: 'p3-8',
      title: 'Gratidão e Renovação',
      text: `Louve a Deus todos os dias com gratidão, Sua água viva cura nossas feridas, traz consolação.
Não espere por ninguém, o Espírito está a soprar, Ele traz água viva para te transformar.
Não deixe o medo te paralisar, Abra teu coração, deixe o amor te alcançar.
O Espírito do Senhor geme em teu interior, Recebe o fogo abrasador, divino e restaurador.
Quando parecer que não podes prosseguir, Lembre-se que o Senhor está a te acolher.`,
      reflection: 'Muitas vezes, a cura da família começa na nossa própria cura interior.',
      inspiration: 'Eu louvo pela minha família e peço...'
    },
    {
      id: 'p4-5',
      title: 'Vivendo o Mesmo Carisma',
      text: `Vivendo o mesmo carisma, Além de se reunir, Dinâmico com o movimento, Com o Espírito Santo servir.
Sou profeta, corrente de graça, A moção do carisma anunciar. O grupo de oração é momento de celebrar.
O rei Davi separou os levitas, Quatro mil, para o Senhor louvar.
Foram duzentos e oitenta e oito escolhidos Também para tocar e cantar.
Meus irmãos, na manhã deste dia, Ao Senhor quero agradecer, Pela graça que foi derramada.`,
      reflection: 'O carisma não é para ficar guardado, é para servir.',
      inspiration: 'Eu renovo meu carisma e me ofereço para…'
    },
    {
      id: 'p4-6',
      title: 'Renovação Espiritual (Nicodemos)',
      text: `Seja um homem novo, é hora de nascer, da água e do Espírito, Jesus trouxe, vem beber.
Nicodemos foi falar: com Jesus conversar, o mestre o ensinou a verdade:
"Quem não nascer do Espírito, o Reino de Deus não verá".
Eu te digo em verdade, é preciso renascer da água e do Espírito.
Quem nascer da carne é carne, sempre será um canal, mas quem nascer do Espírito, esse é espiritual.
De repente o céu abriu, o Espírito desceu, estava no quarto de cima, a língua de fogo apareceu.`,
      reflection: 'Nicodemos tinha conhecimento, mas não tinha vida nova. O batismo no Espírito é um "nascer de novo".',
      inspiration: 'Eu quero nascer de novo para...'
    },
    {
      id: 'p4-7',
      title: 'Luz e Graça Divina',
      text: `Jesus Cristo, Tua luz ilumina meu caminho, Confio nas promessas que se cumprirão no tempo divino.
Com Jesus ao meu lado, alinhado com Sua vontade, Nada me angustia, estou em Sua fidelidade.
O Espírito Divino me batiza e guia, Conduzindo-me com sabedoria, dia após dia.
Vinde, Espírito Santo, ajuda-me a louvar, Entregando minha vida a Jesus, meu Salvador.
Agradeço por transformar minha vida, A luz do Espírito abre portas com força viva.`,
      reflection: '"O Espírito Divino me batiza e guia". O batismo é uma experiência de guia diária.',
      inspiration: 'Espírito Santo, alinha meus passos com...'
    },
    {
      id: 'p4-8',
      title: 'Clamor e Louvor',
      text: `Peço esclarecimento, Senhor, em meu coração, Recebo com louvor e adoração a Sua graça e paixão.
Tu és soberano, nosso Deus e Salvador, Por meio do Seu Espírito, sinto agora Teu amor.
Não desperdice teu tempo com o que não traz luz, Busca compreender ouvindo a voz de Jesus.
Recita diariamente, salmodia para Deus, Nos cantos de louvor, oferece graças espirituais.
A palavra do Senhor restaura tua família e tua casa, Reconstruindo tua morada, e tudo se refaz.`,
      reflection: '"Seja um missionário em teu próprio lar". A primeira missão é dentro de casa.',
      inspiration: 'Minha casa servirá ao Senhor e eu...'
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
Com a veste nupcial, com a santidade vai lavar a sujeira da sua vida, pra no Céu poder entrar.`,
      reflection: 'Esta poesia fala de uma "faxina" na alma. Não adianta convidar o Rei para entrar se a casa está suja.',
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
Através do Seu Espírito, Ele vem para revelar, curar o seu coração e fazer a vida transformar.`,
      reflection: '"Tudo depende de você". Deus já deu a graça, agora Ele espera a nossa ação.',
      inspiration: 'Não espero mais pelo amanhã, hoje eu decido...'
    },
    {
      id: 'p2-5',
      title: 'Não Fique Aí na Tristeza',
      text: `Permaneça firme, irmão, como fez o servo Jó: O inimigo levou tudo, mas ele nunca esteve só.
Deus estava sempre com ele, Fortalecendo sua fé. Hoje é o dia da graça — Levante-se! Fique de pé!
Não fique aí na tristeza — Ela também é tentação. Paulo escreveu com firmeza, nos Chamando à conversão.
Nunca perca a esperança, Esteja firme em oração. O Senhor é tua fortaleza, Teu refúgio e salvação.`,
      reflection: 'A tristeza excessiva pode ser uma tentação para nos paralisar. Jó perdeu tudo, mas não perdeu a Deus.',
      inspiration: 'Mesmo que tudo pareça difícil, eu me levanto e...'
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
      reflection: 'Bartimeu precisou jogar fora sua capa (sua velha identidade de mendigo) para ir até Jesus.',
      inspiration: 'Jesus, Filho de Davi, olha para a minha...'
    },
    {
      id: 'p3-3',
      title: 'O Senhor Realiza Milagres (Naamã)',
      text: `É certeza no meu coração: O Senhor realiza milagres e prodígios, Peça a Ele em oração.
Deus curou Naamã Pra mostrar para o seu povo, Realizou o milagre E restaurou tudo de novo.
Ele era leproso, Tinha prestígio diante do rei. Com as minhas qualidades, Ao Senhor adorarei.
A escrava então disse À mulher de Naamã: “Se ele fosse ver o profeta, A lepra curaria.”
Ao chegar em Samaria, Ele foi ver Eliseu, Que mandou ir se lavar — Naamã se infureceu.
Ao ouvir a voz do servo, Naamã obedeceu, Desceu na água sete vezes — A lepra desapareceu.
A Palavra do Senhor Sua vida quer transformar, Ele age nesta vida E te chama a caminhar.
Obedeça à voz de Deus, Se aproxime pra ouvir, Ele cura e restaura, Te chama para servir.`,
      reflection: 'Naamã quase perdeu a cura por orgulho, pois achou o pedido de Eliseu muito simples.',
      inspiration: 'Mergulho minhas dúvidas nas águas da obediência e...'
    },
    {
      id: 'p3-4',
      title: 'Transformação - Um Processo Necessário',
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
      reflection: '"Se queremos ser moldados... devemos aceitar ser quebrados". Não existe transformação sem o "fogo".',
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
      reflection: '"O Senhor está restaurando o leme do teu barco". Deus quer devolver a direção da sua vida.',
      inspiration: 'Puxo a âncora do medo e navego para...'
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
      reflection: 'A ansiedade tem roubado nosso fôlego. O exercício proposto é fisiológico e espiritual: sentir o ar.',
      inspiration: 'Eu inspiro a Tua paz e expiro a minha...'
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
O banquete está posto, Ele é teu Salvador, Se quiser sair da escuridão, leve o óleo do amor.`,
      reflection: 'A parábola das virgens prudentes nos lembra que o óleo não pode ser emprestado. A intimidade é intransferível.',
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
Voltai ao caminho, Ele vem te buscar. Com a graça do Espírito, Ela vai te salvar.`,
      reflection: 'Deus está disponível: o Espírito de Deus. Amigo e companheiro, se entregue em oração.',
      inspiration: 'Não sou mais escravo, sou amigo do Espírito e...'
    },
    {
      id: 'p5-2',
      title: 'Juízo Final',
      text: `Quando Ele voltar, em glória se assentará, No trono majestoso, o novo se revelará.
As nações diante d’Ele, em temor se prostrarão, Ouça agora a voz do Pastor, sinta sua direção.
Ele cuida das ovelhas, está aqui pra te ajudar, Esteja pronto em oração, é tempo de despertar.
O Senhor já proclamou no momento de oração: "O novo estou fazendo, entre agora em ação."
Até quando ficará sem tomar a decisão? Lembra-se da palavra dita na pregação?
Persevere, meu irmão, fique firme no Senhor, Não desista nem desanime, Deus te cerca de amor.
Hoje ressoa a verdade, a palavra do Senhor, Cristo é a vida eterna, teu único Salvador.`,
      reflection: '"O novo estou fazendo, entre agora em ação". Deus não quer apenas que eu espere sentado.',
      inspiration: 'Não temo o trono, pois conheço o Pastor. Hoje eu decido...'
    },
    {
      id: 'p5-3',
      title: 'Oração de Entrega e Adoração',
      text: `Na missão de desvendar os mistérios da tua vida, Agora vou contemplar, junto com a Virgem Maria.
Ao Senhor, vou entregar minha vida, sem hesitar, No início da oração, pelo Santo Terço, vou clamar.
Ó Senhor, eu não mereço, Mas todo dia, venho e peço: vem me amar.
Minha vida em tua vida hoje quero depositar. Santa Mãe de Deus, Maria, Neste dia, nesta hora, contemplarei com alegria
A vida do meu Senhor, teu Filho Jesus Cristo, Que por nós se entregou — puro e infinito amor.
Ao nome soberano, que está acima de todos, Jesus Cristo, amoroso, adoremos com corações abertos.
Não há nome como este para se exaltar, Entregue-se ao Senhor, venha com fé adorar.
Aquele que está no trono, glorioso e exaltado, Jesus Cristo, Rei amado, Está ao teu lado com o Espírito Consolador,
Chamando-te com ternura, com poder e amor.`,
      reflection: '"Mais do que a vida, eu preciso de ti". Ao lado de Maria, contemplo a vida de Jesus.',
      inspiration: 'Com Maria, eu digo \'sim\' e me entrego...'
    },
    {
      id: 'p5-4',
      title: 'Eis que Estou à Porta',
      text: `Esteja com o coração aberto Para receber Jesus Cristo — É o Salvador, Que em breve vai nascer.
Depois que Ele nascer, Morada irá fazer. Como disse na Palavra, Contigo irá viver.
Eis que estou à porta e bato, O banquete preparei. Deixa Eu entrar em tua casa, E contigo cearei.
Entre agora, meu Senhor, Eu preciso conversar. Sei que pode, nesta hora, Minha ferida curar.`,
      reflection: 'O banquete já está pronto. Jesus está batendo. A única coisa que falta é eu girar a maçaneta.',
      inspiration: 'A porta está destrancada, Senhor. Entra e ceia com...'
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
