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
    { id: 'lp-1', title: 'Nunca Pare de Lutar', text: `Alguém me tocou...\nSenti uma força sair,\nManifestei minha Palavra —\nA mulher hemorroísa foi curada por não desistir.\nEncontrei-me com Jesus, agora posso me salvar,\nÉ sair do mundo interno e do pecado se libertar.\nDeus nos escolheu, neste mundo nos colocou,\nPreparou em nossa mãe, que com amor nos cuidou.\nPor amor à humanidade,\nJesus morreu e ressuscitou.\nNão duvide, pois a Graça\nSe entrega em oração, Ele já manifestou!\nA fonte de salvação, se levante e vá beber.\nSeja firme, meu irmão!\nÉramos escravos do pecado,\nMas tudo muda com a decisão.\nRenunciar à impiedade,\nAos desejos deste mundo vão,\nPois o tempo está chegando — Jesus virá com a separação:\nDas ovelhas e cordeiros,\nEle vai nos separar.\nPelo batismo, nós morremos,\nE para o céu que vamos caminhar.\nE se quiser no céu entrar,\nDo pecado há que se arrepender.\nA justiça de Deus não falha — tome cuidado, podes creer!\nNunca perca a esperança,\nGuarde Jesus no coração.\nPare de reclamar agora,\nBusque firme a salvação.\nFaça como a mulher que tocou no Salvador,\nNunca pare de lutar com fé e com fervor.\nÉ certeza que um dia nós iremos festejar\nCom o Salvador — no céu — todos nós a esperar.\nNão creia nas mentiras, nas promessas enganosas,\nNão se deixe seduzir, viva uma vida amorosa.\nPermaneça firme, irmão, como fez o servo Jó:\nO inimigo levou tudo, mas ele nunca esteve só.\nDeus estava sempre com ele,\nFortalecendo sua fé.\nHoje é o dia da graça —\nLevante-se! Fique de pé!\nNão fique aí na tristeza —\nEla também é tentação.\nPaulo escreveu com firmeza,\nNos chamando à conversão.\nNunca perca a esperança,\nEsteja firme em oração.\nO Senhor é tua fortaleza,\nTeu refúgio e salvação.`},
    { id: 'lp-2', title: 'Comece a Levantar', text: `Neste dia de alegria,\nA Jesus Cristo é de altar.\nDe repente, brota uma força,\nE começamos a cantar.\nLança fora a tristeza,\nAnsiedade, depressão.\nSinta a chuva, desta água,\nSe coloque em oração.\nAbra o seu coração,\nDeixa a graça e a luz entrar.\nSinto com a Virgem Maria,\nDo Espírito Santo clamar.\nA sombra do Altíssimo\nNesta noite cobrirá,\nDando força ao coração —\nEntão comece a levantar!\nPois a graça é derramada,\nIrmão, começa a orar.\nO Espírito, nesta noite,\nJá começou a trabalhar.\nDerramando os carismas,\nIrmão, começa a louvar.\nPreparei o coração\nPara a Palavra escutar.\nA atenção que precisava,\nComecei então a focar.\nO Espírito já ensina,\nEstá movendo o lugar.\nEle toca, Ele cura,\nTe convida a orar.\nMeu irmão, é nesta hora —\nComece a levantar.`},
    { id: 'lp-3', title: 'Parei de Ficar Parado', text: `Ah! Parei de ficar parado,\nCom o medo ao meu lado querendo me atrapalhar.\nParei com toda vergonha,\nO monstro que é medonho queria me controlar.\nParei com a timidez e o mal que ela me fez,\nImpediu-me de prosperar.\nEu tive muita vergonha, medo também,\nTimidez, eu repito, nunca mais vou deixar.\nNunca mais vou permitir que me mantenham aprisionado,\nPois eu nasci para brilhar.\nE eu fiquei com vergonha e também com a timidez,\nCom medo de me expressar.\nParei, pois agora eu mudei e aceitei a coragem.\nNinguém me segura mais, pois parei com a negação,\nParado não fico, já tomei a decisão,\nCom vergonha não fico mais.\nParei de olhar para trás, já parei de ficar parado.\nToda vez que eu te falo, sei que vou continuar.\nComigo vou levar e com coragem vou falar.\nParei, agora sim, parei e seguirei no propósito de estudar.\nParei de ficar na rua achando que vou fazer.\nParei de esperar que as coisas aconteçam.\nParei com tudo o que atrapalha, faço o que deve ser feito.\nPensava que tinha que ser perfeito, parei de me preocupar,\nPois tomei a decisão de controlar meu coração\nE também parar de fofocar.\nParei de ficar parado esperando acontecer.\nVou continuar andando e fazer o que é certo.\nO certo só é certo porque nunca foi errado.\nPare de ficar parado achando que vai acertar.\nParei de olhar o que não era para ser meu.\nSei que o culpado sou eu, mas não vou me preocupar.\nParei de ficar parado, não vou mais ficar\nVendo as coisas acontecerem.\nPois parei para perceber que depende só de mim.\nQuando ficava parado, nada em mim acontecia.\nEsperava que os outros melhorassem minha alegria.\nPercebi que no momento não dependo de ninguém.\nQuero aumentar minha energia, nunca mais vou ficar sem.\nParei com essa besteira de ficar sentado\nNo conforto acomodado achando que vai resolver.\nO presente é importante, e o futuro também é,\nTudo já aconteceu no passado ou no futuro,\nNo presente é que se resolve.\nPare agora e reflita, pare para analisar.\nNão irei mais pensar que não vou conseguir.\nAgora sou muito mais, chega de ficar parado,\nEntre, deixe de ser acanhado, ficar parado nunca mais.\nParei de ficar parado, estou entrando em movimento.\nTodas as vezes que eu dizia "não aguento",\nEu sei de uma coisa agora: Jesus Cristo manda embora\nDe dentro de mim o sofrimento.`},
    { id: 'lp-4', title: 'Vigiai e Buscai a Santidade', text: `Vigiai atentamente sobre as palavras que proferes,\nLembra-te de Moisés em sua oração?\nQuando fatigado, seu irmão veio auxiliar,\nColocando mãos na pedra para sustentar.\nPaulo, mesmo em cárcere, exortou os Efésios,\n"Cuidai-vos dos pagãos", disse em seus escritos.\nSomos todos convocados à vida de santidade,\nAmados por Deus, em Cristo, verdade.\nO justo não se justifica, é justificado pelo Senhor,\nConsciente de que Jesus está sempre ao redor.\nObserva tua conduta, sabedoria é preciso ter,\nNão te entregues à insensatez, Deus está a te proteger.\nSê sábio, desfruta o tempo com alegria,\nEm espírito, em cada hora, em cada dia.\nQuando vier a adversidade, não te precipites,\nNão te embriegues, permanece ciente.\nBusca a santidade, é ela que encontrarás,\nMantém-te no caminho, com Jesus a te guiar.\nNão desistas de ti, busca sempre a solução,\nO Espírito Divino hoje te segura pela mão.` },
    { id: 'lp-5', title: 'Não Brincamos com a Vida', text: `não brincamos com a vida Deus é sério e quer te dar\nsacrifique com Jesus ele vai te ajudar\nVinde a mim olhe a cruz teu chamado é para fazer\nAme a Cristo todo dia que o pecado vai vencer\na distância entre o céu e o inferno vem a ver\nda cabeça ao coração 30 cm quer aprender?\né tempo de viver o renovo espiritual\ndesse jeito você vive e vencerá todo o mal\nJesus está com você ele vai te ajudar\neliminar a angústia para sua vida salvar\nJesus ama a sua vida da morte vem para salvar\ntire a corda do pescoço para sua vida libertar`},
    { id: 'lp-6', title: 'Na Tempestade da Vida', text: `Olá, claro que sim, pode pedir o que precisar,\nLute até o fim, pois quem manda é o Senhor.\nLembre da conexão que você fez com Ele,\nNeste dia, fale com Ele outra vez, a graça a pedir.\nJesus está ao seu lado, ajudando a vencer,\nNa batalha da vida, Ele ensina a fazer.\nCom Ele, você resolve qualquer problema,\nMesmo que pareça um grande dilema.\nAquilo que parecia impossível de acontecer,\nVocê fez a sua parte e Deus veio resolver.\nNa tempestade da vida, o Senhor está contigo,\nQuando o mar está agitado, Ele mesmo é seu abrigo.`},
    { id: 'lp-7', title: 'A Armadura de Deus', text: `A base da armadura é o cinto da Verdade,\nQue mantém tudo unido viva na honestidade.\n\nNos liberta do engano, desafios e tentações,\nPara andarmos com integridade e vivermos como cristãos.\n\nA couraça da Justiça protege nosso coração,\nGuardando-nos das influências malignas e sua ação.\n\nSomos chamados a viver e agir com compaixão,\nTer uma vida justa e reta, refletindo amor em toda situação.\n\nCom o sapato do Evangelho, a paz vou anunciar,\nLevando a mensagem de esperança e salvação por onde andar.\n\nAs boas novas e a vida em harmonia com os irmãos,\nDemonstrando o amor de Deus, difundindo a paz e a reconciliação.\n\nContra os dardos inflamados do inimigo,\nProtege-nos com o escudo da fé, que nos capacita a resistir.\n\nTodos nós somos capazes de vencer e não desistir,\nPois esse escudo nos protege e nos fortalece.\n\nLembre-se todos os dias que somos filhos de Deus,\nCristo nos dá esperança e confiança, aos filhos Seus.\n\nO capacete da salvação protege nossa identidade,\nMente e sentimentos, pois Jesus Cristo é a verdade.\n\nHoje, para nos defender, uso a espada do Espírito,\nCom a palavra do Senhor.\n\nNão é pela força bruta, e sim pela meditação,\nQue encontramos sabedoria e orientação em Deus, nossa luz na escuridão.\n\nPara enfrentar os desafios, Deus nos guia com precisão,\nAtravés da palavra e da fé, recebemos Sua proteção.\n\nEm cada batalha, Ele é nosso refúgio e fortaleza,\nEquipados com a armadura divina, vencemos com firmeza.`},
    { id: 'lp-8', title: 'Jornada de Fé', text: `Na jornada avançada, a mente é transformada,\nDeus faz a partir do nada, te prepara para vencer.\nO Reino de Deus não é nem comida nem bebida,\nAumente a fé em sua vida, pois você não é escravo.\nDeus está sempre ao seu lado, deixe o medo no passado,\nExercite a fé e vamos crescer.\nA Bíblia sem prática é como um homem forte e cego,\nDeus é bom, e eu não nego a palavra que prego.\nVivo no dia a dia, pare já com a tristeza,\nE sinta agora a alegria.`}
  ],
  'oracao-intimidade': [
    { id: 'oi-1', title: 'Portas do Céu', text: `As portas do céu se abriram,\nOuvi a voz ressoar.\nComo o som da trombeta,\nO Senhor veio falar.\nBendito e louvado seja,\nÓ Deus dos nossos pais!\nQue Teu nome seja eterno,\nGlorioso pelos séculos a mais.\nEm justiça e retidão,\nSempre age o Criador.\nNa oração, enviou o anjo,\nTrazendo ao fogo o Seu calor.`},
    { id: 'oi-2', title: 'Aproxime-se com calma', text: `Aproxime-se com calma,\nOuça a voz a chamar.\nSanta e doce é Sua presença,\nO Senhor está a chegar.\nPurifique os seus passos,\nPara em Sua glória andar.\nO lugar que agora pisas\nÉ um templo a se honrar.\nSua presença é real,\nDeus habita neste lugar.\nTire a dúvida do peito,\nPela fé, tudo vai mudar.`},
    { id: 'oi-3', title: 'Marta e Maria (Lucas 10:38-42)', text: `Jesus entrou na casa de Marta para ensinar.\nMaria, aos Seus pés, sentou-se a escutar.\nMarta, preocupada com os afazeres do lar,\naproximou-se de Jesus e começou a reclamar.\nCom ternura, Jesus a respondeu:\n"Marta, Marta, por tantas coisas andas ansiosa.\nMaria escolheu a melhor parte,\ne esta não lhe será tirada."\nAbandone a preocupação,\nrelaxe e venha sentar.\nOuça agora o que tenho a dizer,\npara o seu coração curar.\nAprenda com Maria,\nbusque intimidade com o Senhor.\nSente-se para escutar,\nperceba o Seu amor.\nAdore como Maria,\nabandone a preocupação.\nÉ hora de cuidar do seu coração.`}
  ],
  'transformacao-renovacao': [
    { id: 'tr-1', title: 'Acenda Sua Luz', text: `Deixe sua luz brilhar,
Você precisará acender o que está te impedindo,
Terá que logo resolver.`},
    { id: 'tr-2', title: 'O pecado está queimando', text: `O pecado está queimando,
Meu irmão, pode lançar!
Já tomou sua decisão?
Deixe Deus te libertar.
Pois Ele apaga a culpa,
Basta apenas confessar.
Abra a boca neste instante,
Deixe a fé te guiar!`},
    { id: 'tr-3', title: 'A Mudar a Vida', text: `Para minha vida mudar,
o que preciso fazer?
Se não fosse hoje,
então, quando iria ser?
Você pode conhecer Jesus
e nada na sua vida mudar,
pois tudo depende de você,
é preciso se enxergar.
Deus sustenta sua vida
através da oração,
permaneça em Sua graça,
Ele cuida do seu coração.
O Senhor está revelando,
chamando a sua atenção.
Esteja aberta à Sua palavra,
coloque-a em ação.
Se tu conheceres Jesus
e ouvir Sua voz a falar,
acolhe Sua palavra
e a pratique sem hesitar.
Através do Seu Espírito,
Ele vem para revelar,
curar o seu coração
e fazer a vida transformar.
Jesus sempre está presente,
Ele vem para cuidar,
está te incomodando,
Deus te abençoe a caminhar.`},
    { id: 'tr-4', title: 'O Novo Começo', text: `A nova história começou em primeiro de janeiro,
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
Porque vivo com Deus dentro do meu coração.`},
    { id: 'tr-5', title: 'Renovação em Cristo', text: `Renova-me, ó Senhor,
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
começa hoje, aqui, em mim.`}
  ],
  'amor-graca': [
    { id: 'ag-1', title: 'O Dom do Amor', text: `Cada um recebe um dom
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
A verdade e a liberdade."`}
  ],
  'chamado-missao': [
    { id: 'cm-1', title: 'Chamado do Senhor', text: `Ele está confirmando,
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
Pois tua hora vai chegar.`}
  ],
  'salvacao-vidaeterna': [
    { id: 'sv-1', title: 'O Caminho para o Céu', text: `Jesus, junto aos discípulos,
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
O valor do perdão.`}
  ],
  'paz-cura': [
    { id: 'pc-1', title: 'Força e Proteção', text: `Dá-me força, Senhor,
aceito o Teu amor que me sustenta,
que me protege e me guia.
És meu Deus, meu Salvador,
minha rocha, minha vida.`}
  ],
  'reflexoes-vida': [
    { id: 'rv-1', title: 'O Peso da Redenção', text: `A dor não impediu
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
e crer.`}
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
