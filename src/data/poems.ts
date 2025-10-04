export interface Poem {
  id: string;
  title: string;
  text: string;
}

export interface PoemsData {
  [key: string]: Poem[];
}

export const themeTitles: { [key: string]: string } = {
  'fe-esperanca': 'Fé e Esperança',
  'gratidao-louvor': 'Gratidão e Louvor',
  'perdao-reconciliacao': 'Perdão e Reconciliação',
  'amor-divino': 'Amor Divino',
  'reflexoes-vida': 'Reflexões sobre a Vida',
  'oracao-intercessao': 'Oração e Intercessão',
  'perseveranca-coragem': 'Perseverança e Coragem',
  'paz-serenidade': 'Paz e Serenidade'
};

export const poemsData: PoemsData = {
  'fe-esperanca': [
    { id: 'fe-1', title: 'Nunca perca a esperança', text: `Nunca perca a esperança,
Guarde Jesus no coração.
Pare de reclamar agora,
Busque firme a salvação.`},
    { id: 'fe-2', title: 'Acredite e Confie', text: `Acredite em você, mas primeiro creia no Senhor,
Entregue sua vida a Ele, se sentir alguma dor.
Desperta! A esperança em Cristo já vive em você,
A criação aguarda o dia em que irá renascer.
Cristo ressuscitou, a graça já foi derramada,
Sinta agora Seu amor, Sua presença revelada.
Veja a glória se manifestando, a dor se dissipando,
Nos braços do Pai, tudo está se transformando.
Os filhos de Deus aguardam Seu grande esplendor,
Nunca perca a esperança em Jesus, nosso Salvador.` },
    { id: 'fe-3', title: 'A Fé que Cura', text: `Orai sem cessar, não deixes de clamar,
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
Jesus está tocando, basta n'Ele confiar,
Pois Seu poder divino veio hoje pra te curar.` },
    { id: 'fe-4', title: 'Chama que Não Se Apaga', text: `Há uma chama que arde,
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
da nossa fé com o coração`}
  ],
  'gratidao-louvor': [
    { id: 'grat-1', title: 'Gratidão Eterna', text: `Agradeço todos os dias,
Por Tuas bençãos sem fim.
Em cada amanhecer,
Vejo Tua glória em mim.

Senhor, és meu refúgio,
Minha fortaleza e luz.
Em Tua presença,
Encontro paz na cruz.` }
  ],
  'perdao-reconciliacao': [
    { id: 'perd-1', title: 'Perdão Libertador', text: `O perdão é a ponte
Que nos leva à redenção.
Liberta a alma,
Restaura o coração.

Cristo nos ensinou
A perdoar de coração.
Assim encontramos
A verdadeira salvação.` }
  ],
  'amor-divino': [
    { id: 'amor-1', title: 'Amor Infinito', text: `O amor de Deus
É vasto como o mar.
Profundo e infinito,
Impossível de medir.

Ele nos ama
Com amor incondicional.
Em cada momento,
Seu amor é eternal.` }
  ],
  'reflexoes-vida': [
    { id: 'ref-1', title: 'Caminhada da Vida', text: `A vida é uma jornada,
Cheia de altos e baixos.
Mas com Deus ao lado,
Superamos os obstáculos.

Cada dia é um presente,
Uma chance de recomeçar.
Com fé e esperança,
Podemos conquistar.` }
  ],
  'oracao-intercessao': [
    { id: 'or-1', title: 'Poder da Oração', text: `A oração é a chave
Que abre as portas do céu.
É o elo sagrado
Entre o homem e Deus.

Quando oramos,
Ele nos ouve.
Responde no tempo certo,
Sua graça nos move.` }
  ],
  'perseveranca-coragem': [
    { id: 'pers-1', title: 'Força para Vencer', text: `Não desista jamais,
Por mais difícil que seja.
Deus te dá forças,
Para que você veja.

Que em Sua presença,
Tudo é possível.
Com fé e coragem,
O impossível é visível.` }
  ],
  'paz-serenidade': [
    { id: 'paz-1', title: 'Paz Interior', text: `A paz que vem de Deus
Excede todo entendimento.
É um presente divino,
Um doce sentimento.

Em meio ao caos,
Ela nos acalma.
Traz serenidade
Para nossa alma.` }
  ]
};

export const readingAchievementsList = [
  { name: 'Primeiro Passo', desc: 'Leu 1 poema', icon: '📖', goal: 1 },
  { name: 'Aprendiz', desc: 'Leu 5 poemas', icon: '📚', goal: 5 },
  { name: 'Estudioso', desc: 'Leu 10 poemas', icon: '🎓', goal: 10 },
  { name: 'Devoto', desc: 'Leu 20 poemas', icon: '🙏', goal: 20 },
  { name: 'Sábio', desc: 'Leu 30 poemas', icon: '✨', goal: 30 },
  { name: 'Mestre', desc: 'Leu todos os poemas', icon: '👑', goal: 'all' as const }
];

export const diaryAchievementsList = [
  { name: 'Primeira Reflexão', desc: '1 anotação', icon: '✍️', goal: 1 },
  { name: 'Reflexivo', desc: '5 anotações', icon: '📝', goal: 5 },
  { name: 'Contemplativo', desc: '10 anotações', icon: '🌟', goal: 10 },
  { name: 'Espiritual', desc: '20 anotações', icon: '💫', goal: 20 },
  { name: 'Iluminado', desc: '30 anotações', icon: '🕊️', goal: 30 },
  { name: 'Místico', desc: '50 anotações', icon: '👼', goal: 50 }
];
