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
    }
  ],
  'bloco-2': [
    {
      id: 'p2-1',
      title: 'Nunca Pare de Lutar',
      text: `Alguém me tocou...
Senti uma força sair,
Manifestei minha Palavra —
A mulher hemorroísa foi curada por não desistir.
Encontrei-me com Jesus, agora posso me salvar,
É sair do mundo interno e do pecado se libertar.
Deus nos escolheu, neste mundo nos colocou,
Preparou em nossa mãe, que com amor nos cuidou.
Por amor à humanidade,
Jesus morreu e ressuscitou.
Não duvide, pois a Graça
Se entrega em oração, Ele já manifestou!
A fonte de salvação, se levante e vá beber.
Seja firme, meu irmão!
Éramos escravos do pecado,
Mas tudo muda com a decisão.
Renunciar à impiedade,
Aos desejos deste mundo vão,
Pois o tempo está chegando — Jesus virá com a separação:
Das ovelhas e cordeiros,
Ele vai nos separar.
Pelo batismo, nós morremos,
E para o céu que vamos caminhar.
E se quiser no céu entrar,
Do pecado há que se arrepender.
A justiça de Deus não falha — tome cuidado, podes creer!
Nunca perca a esperança,
Guarde Jesus no coração.
Pare de reclamar agora,
Busque firme a salvação.
Faça como a mulher que tocou no Salvador,
Nunca pare de lutar com fé e com fervor.
É certeza que um dia nós iremos festejar
Com o Salvador — no céu — todos nós a esperar.
Não creia nas mentiras, nas promessas enganosas,
Não se deixe seduzir, viva uma vida amorosa.
Permaneça firme, irmão, como fez o servo Jó:
O inimigo levou tudo, mas ele nunca esteve só.
Deus estava sempre com ele,
Fortalecendo sua fé.
Hoje é o dia da graça —
Levante-se! Fique de pé!
Não fique aí na tristeza —
Ela também é tentação.
Paulo escreveu com firmeza,
Nos chamando à conversão.
Nunca perca a esperança,
Esteja firme em oração.
O Senhor é tua fortaleza,
Teu refúgio e salvação.`,
      reflection: 'A mulher hemorroísa teve que romper uma multidão para tocar em Jesus. Às vezes, a "multidão" são nossos próprios pensamentos de desânimo ou a opinião alheia.',
      inspiration: 'Eu rompo a multidão do medo e toco em...'
    }
  ]
};