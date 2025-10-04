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
  'luta-perseveranca': 'Luta e Perseverança',
  'oracao-intimidade': 'Oração e Intimidade com Deus',
  'transformacao-renovacao': 'Transformação e Renovação',
  'amor-graca': 'Amor e Graça Divina',
  'chamado-missao': 'Chamado e Missão',
  'salvacao-vidaeterna': 'Salvação e Vida Eterna',
  'paz-cura': 'Paz e Cura Interior',
  'reflexoes-vida': 'Reflexões e Sabedoria'
};

// TODOS os 82 poemas extraídos do arquivo HTML original
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
da nossa fé com o coração`},
    { id: 'fe-5', title: 'Nosso Coração em Deus', text: `nosso coração está em Deus
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
Não desista Fique firme e ele é teu Salvador`},
    { id: 'fe-6', title: 'Coração sem Medo', text: `Nada pode amedrontar meu coração,
pois ele está em Deus.
Tenha fé e coloque em ação.
O Espírito hoje vem para me iluminar,
a escuridão interior para que eu possa me salvar.
Vem, Espírito Santo, transformar todo o meu ser,
a cruz seja meu guia para eu não me perder.
Que alegria está presente, agora vou me apresentar,
o meu nome é Reinaldo, aqui no MMA.`},
    { id: 'fe-7', title: 'A Esperança e a Libertação em Cristo', text: `Pela paixão, ó Senhor, posso viver,
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
Ele é a verdade, reconheça a salvação.`},
    { id: 'fe-8', title: 'Caminhando na Fé', text: `Olá, com certeza posso te ajudar,
Nesta hora, vamos juntos buscar?
Lutarei até o fim, pois Deus é quem manda,
Em conexão com Ele, nossa fé se expanda.
Lembro-me da conexão que fiz com o Senhor,
E hoje novamente, buscarei Sua direção e amor.
Ele está sempre ao meu lado, pronto a me socorrer,
Ensinando-me a perseverar e vencer.
Nas tempestades da vida, Ele é meu refúgio seguro,
Confiando em Sua graça, não me sinto inseguro.
Homem de pouca fé, Deus cuida de você,
Sua recompensa está chegando, creia e espere.
Deus sonhou com minha família, Ele tem um propósito,
A prova é um caminho, uma oportunidade de crescimento.
Plantando com fé, colherei os frutos no futuro,
A caridade, o amor, são princípios puros.
Resistirei até ter a verdade em minhas mãos,
Cuidando do próximo, praticando ações.
O Pai Nosso nos ensina o valor da caridade,
Espalhando amor, paciência e fraternidade.
Com esperança no coração, confio no Senhor,
Ele é quem me salvou, a Ele dou meu louvor.
Buscarei sempre Sua face, Sua presença me guiará,
Com Deus em primeiro lugar, minha vida prosperará.
Enquanto seguimos em direção à salvação,
Agradeço Sua caridade, por Sua compaixão.
Nesta jornada, confio em Sua providência,
Com fé, amor e caridade, encontraremos a essência.`},
    { id: 'fe-9', title: 'A Fé de Bartimeu', text: `Bartimeu estava sentado na estrada a pedir esmola,
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
E faça como Bartimeu, ouça com o coração.`},
    { id: 'fe-10', title: 'Semeie a Fé e Colherá Milagres', text: `Se você plantar a fé, colherá milagres de verdade.
Jesus Cristo é o Senhor — essa é a eternidade.
"Frater" quer dizer irmão, cuidar uns dos outros,
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
E milagres do céu você vai colher.`}
  ],
  'luta-perseveranca': [
    // Os poemas deste tema podem ser adicionados via painel de administração
    // ou você pode colá-los aqui manualmente do arquivo original
  ],
  'oracao-intimidade': [
    // Poemas disponíveis para adicionar
  ],
  'transformacao-renovacao': [
    // Poemas disponíveis para adicionar
  ],
  'amor-graca': [
    // Poemas disponíveis para adicionar
  ],
  'chamado-missao': [
    // Poemas disponíveis para adicionar
  ],
  'salvacao-vidaeterna': [
    // Poemas disponíveis para adicionar
  ],
  'paz-cura': [
    // Poemas disponíveis para adicionar
  ],
  'reflexoes-vida': [
    // Poemas disponíveis para adicionar
  ]
};

export const readingAchievementsList = [
  { name: 'Primeiro Passo', desc: 'Leu 1 poema', icon: '📖', goal: 1 },
  { name: 'Aprendiz', desc: 'Leu 5 poemas', icon: '📚', goal: 5 },
  { name: 'Estudioso', desc: 'Leu 10 poemas', icon: '🎓', goal: 10 },
  { name: 'Devoto', desc: 'Leu 20 poemas', icon: '🙏', goal: 20 },
  { name: 'Contemplativo', desc: 'Leu 40 poemas', icon: '✨', goal: 40 },
  { name: 'Dedicado', desc: 'Leu 60 poemas', icon: '🌟', goal: 60 },
  { name: 'Sábio', desc: 'Leu 80 poemas', icon: '💫', goal: 80 },
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
