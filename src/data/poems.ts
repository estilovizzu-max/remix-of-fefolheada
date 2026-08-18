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
      inspiration: 'O que eu digo a Deus depois de ler sobre a minha luz?'
    },
    {
      id: 'p1-16',
      title: 'Pensamento Libertador',
      text: `Acredite ou não,
saiba que você não é obrigado a nada.

Não é porque as pessoas te pedem algo
que você deve atender sem questionar.

É necessário aprender a indagar,
fazer as perguntas certas.

Por que devo fazer isso?
O que ganho ao fazê-lo?
O que perco se não fizer?
Quem se beneficia
ou quem é prejudicado?

Sempre reflita
e não tome nenhuma decisão sem ponderar.

O pensamento liberta.

Até quando vai permanecer preso sem pensar,
ou acorrentado ao pensamento
sem buscar a liberdade?

Se alguém é aprisionado,
é porque não refletiu
sobre a decisão que ia tomar.

Se tivesse ponderado antes,
talvez não estivesse encarcerado.

Até quando o pensamento
te manterá aprisionado?

Você se prende ao pensamento de outra pessoa,
a algo que alguém disse,
ou vive na liberdade do pensamento próprio?

Mas tome cuidado:
o pensamento também pode te enganar,
te levar a agir de uma forma
que você jamais gostaria.

No final das contas,
você pode agir sem pensar
nas consequências
que um pensamento errado poderia causar.

Devemos pensar com o pensamento
Daquele que nos deu a capacidade de pensar:
Deus.

Sem o pensamento d'Ele,
podemos pensar de forma distorcida
e caminhar por pensamentos sombrios.

Quantas pessoas continuam errando
porque acreditaram que estavam certas,
mas estavam equivocadas?

Cada vez que você pensa,
milhares de neurônios são ativados.

E onde está o seu pensamento agora,
enquanto lê ou ouve este poema?

Deixe-o ir neste momento,
quando parece que seu pensamento não para.

A borboleta sempre voa,
assim como seu pensamento
que vai e vem.

No final, uma hora ela pousa.

E quando pousa,
ela relaxa.

Agora, concentre-se nesse pensamento.

O pensamento que faz refletir
te leva a relaxar
e a resolver o que antes parecia impossível,

mantendo seus pensamentos alinhados
com aquilo que desejamos ou pretendemos realizar
e intensificando sua alegria.`,
      reflection: 'Fundimos as duas versões para criar um caminho lógico: da dúvida inicial e questionamento social, passando pela responsabilidade individual, até o alinhamento com o pensamento de Deus e o relaxamento final. O pensamento liberta quando para de ser reativo e passa a ser contemplativo.',
      inspiration: 'O que eu digo a Deus depois de ler sobre a liberdade do meu pensamento?'
    },
    {
      id: '615',
      title: 'Reflexões Sobre o Passado e o Futuro',
      text: `O que você está construindo hoje?
A base é sólida ou está no ar?
Não adianta apenas querer o novo,
se os alicerces você não preparar.

A Lua parece distante da Terra,
mas o brilho dela reflete aqui.
Assim é o futuro que você espera:
ele começa no sim que você deu ali.

Não olhe para o lado com inveja,
cada um tem seu tempo de florescer.
A conquista que o outro deseja,
pode não ser a que vai te fazer crescer.

O mundo apresenta mil fachadas,
mas a verdade habita no interior.
São muitas as vozes e as estradas,
mas só uma conduz ao Senhor.

A maior batalha não é lá fora,
contra o inimigo que você pode ver.
A luta real acontece agora,
dentro da mente que tenta te vencer.

Seja o soldado da própria consciência,
não caia em ciladas de medo ou dor.
O despertar exige persistência,
no combate da mente, seja o vencedor.

É livre aquele que encontra a saída,
deixando o passado em sua morada.
O verdadeiro guerreiro da vida,
enfrenta a própria mente e sua cilada.`,
      reflection: 'Reestruturamos as imagens do poema para criar uma linha de leitura clara: do alicerce da casa até a batalha final na mente. O despertar da identidade acontece quando deixamos de ser reféns das circunstâncias externas e assumimos o comando do nosso território interior.',
      inspiration: 'O que eu digo a Deus depois de ler sobre as batalhas da minha mente?'
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
      inspiration: 'O que eu digo a Deus depois de ler sobre a urgência do meu tempo?'
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
      inspiration: 'O que eu digo a Deus depois de ler sobre o recomeço diário?'
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
      inspiration: 'O que eu digo a Deus depois de ler sobre o meu chamado como filho?'
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
      inspiration: 'O que eu digo a Deus depois de ler sobre o meu despertar final?'
    },
    {
      id: 'p1-50-new',
      title: 'A Semeadura da Vida',
      text: `O sentido da vida
você precisa encontrar.

Sirva com alegria —
isso é o verdadeiro amar.

É mais fácil amar
quem está longe de você,

pois quem está perto
faz você se conhecer.

A vida não é fácil,
é preciso aprender.

Depois vem a caridade
e, com ela, o florescer.

Seja forte e corajoso,
o Senhor já te salvou.

Um semeia,
outro rega,

e no tempo certo,
a semente brotou.

A lei da semeadura
você deve entender:

saia do imediatismo,
com paciência vai crescer.

Na prateleira da vida,
escolhas vão aparecer.

Arregace a mente
e o coração
para um dia florescer.

Seja assertivo
na semente que você lançou,

pois o que sai da boca
molda quem você se tornou.

Reveja a semente
que lança ao chão

e escolha, com sabedoria,
a direção do seu coração.

Lembre-se de Abraão,
pai da fé verdadeira,

que entregou Isaque
com confiança inteira.

Deus o provou
e nele confiou,

e o exemplo de fé
permanece
e nos guiou.

Plante fé com o coração,
mesmo sem ver.

E, no tempo de Deus,
você verá nascer.`,
      reflection: 'Fundimos as duas versões para criar o fechamento ideal do Bloco 1. O poema agora conecta a semeadura prática (serviço e convivência) com a semeadura espiritual (a fé de Abraão). A paciência é a chave para o despertar da identidade.',
      inspiration: 'O que eu digo a Deus depois de ler sobre as sementes que estou plantando?'
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
      text: `Alguém Me tocou...
senti uma força sair.

Minha Palavra se manifestou —
a mulher de fé não desistiu.

Quis Me encontrar,
rompeu a multidão,
pois quem sai do mundo interno
começa a se libertar.

Deus nos escolheu,
neste mundo nos colocou,
preparou-nos no ventre materno,
onde com amor nos guardou.

Por amor à humanidade,
Jesus morreu e ressuscitou.
Não duvide da Sua graça,
ela já se manifestou.

A fonte da salvação está aberta,
levante-se e vá beber.

Seja firme, meu irmão,
o pecado você pode vencer.

A decisão muda tudo.
Renuncie ao que for vão.

Pelo batismo morremos para o mundo,
para o Céu caminhar.

Se queres a glória eterna,
do pecado há que se arrepender.

A justiça de Deus não falha.
Vigie o seu proceder.

Nunca perca a esperança.
Deixe Jesus em você viver.

Busque firme a salvação,
sinta a força do Redentor.

Faça como aquela mulher:
toque com fé e com fervor.

Permaneça firme, irmão,
como fez o servo Jó.

O inimigo levou tudo,
mas ele nunca esteve só.

Deus estava sempre com ele,
fortalecendo sua fé.

Hoje é o dia da graça:

**Levante-se!
Fique de pé!**

Não fique aí na tristeza.
Ela também pode te paralisar.

Paulo escreveu com firmeza,
chamando-nos à conversão.

Nunca perca a esperança.
Esteja firme em oração.

O Senhor é tua fortaleza,
teu refúgio e salvação.`,
      reflection: 'Fundimos as narrativas da mulher hemorroísa e de Jó para criar uma progressão poderosa sobre a perseverança. O poema agora conecta a decisão de tocar a orla de Jesus com a resistência espiritual diante das perdas, culminando em um comando de despertar: "Levante-se! Fique de pé!".',
      inspiration: 'O que eu digo a Deus depois de ler sobre a força da minha perseverança?'
    },
    {
      id: 'p2-14-new',
      title: 'Parei de Ficar Parado',
      text: `Ah!
Parei de ficar parado.

Com o medo ao meu lado,
querendo me atrapalhar.

Parei com toda vergonha,
o monstro medonho
que queria me controlar.

Parei com a timidez
e com o mal que ela me fez.

Impediu-me de prosperar.
Eu tive muita vergonha,
medo também.

Mas timidez,
eu repito:

**nunca mais vou deixar.**

Nunca mais vou permitir
que me mantenham aprisionado,
pois eu nasci para brilhar.

Parei de olhar para trás.
Agora eu mudei.

Aceitei a coragem.

Ninguém me segura mais.

Parei com a negação.
Parei de ficar parado.

Já tomei a decisão.

Parei de esperar
que as coisas aconteçam.

Parei de achar
que precisava ser perfeito.

Parei de me preocupar
com aquilo que não posso controlar.

Parei de esperar o amanhã.

Agora faço
o que precisa ser feito.

Parei de olhar
o que não era para ser meu.

Parei de ficar sentado
no conforto acomodado,
achando que tudo iria se resolver.

O presente é importante.

O futuro também.

Mas é no presente
que a decisão acontece.

Pare agora.

Reflita.

Analise.

Não vou mais pensar
que não vou conseguir.

Agora sou muito mais.

Chega de ficar parado.

Entre.

Deixe de ser acanhado.

**Ficar parado, nunca mais.**

Parei de ficar parado.

Estou entrando em movimento.

E todas as vezes
que eu dizia:

“Eu não aguento...”

agora eu sei:

**Jesus Cristo manda embora
de dentro de mim
o sofrimento.**`,
      reflection: 'O termo "Parei" foi elevado a martelo poético, enfatizando a ruptura consciente com a inércia, o perfeccionismo e a timidez. É um testemunho de movimento: a decisão acontece no presente, e a força para prosseguir vem da expulsão do sofrimento por Cristo.',
      inspiration: 'O que eu digo a Deus depois de ler sobre a decisão de sair da inércia?'
    },
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
