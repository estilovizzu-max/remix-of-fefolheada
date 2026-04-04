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
    { id: 'lp-1', title: 'Nunca Pare de Lutar', text: `Alguém me tocou...
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
Teu refúgio e salvação.`},
    { id: 'lp-2', title: 'Comece a Levantar', text: `Neste dia de alegria,
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
Comece a levantar.`},
    { id: 'lp-3', title: 'Parei de Ficar Parado', text: `Ah! Parei de ficar parado,
Com o medo ao meu lado querendo me atrapalhar.
Parei com toda vergonha,
O monstro que é medonho queria me controlar.
Parei com a timidez e o mal que ela me fez,
Impediu-me de prosperar.
Eu tive muita vergonha, medo também,
Timidez, eu repito, nunca mais vou deixar.
Nunca mais vou permitir que me mantenham aprisionado,
Pois eu nasci para brilhar.
E eu fiquei com vergonha e também com a timidez,
Com medo de me expressar.
Parei, pois agora eu mudei e aceitei a coragem.
Ninguém me segura mais, pois parei com a negação,
Parado não fico, já tomei a decisão,
Com vergonha não fico mais.
Parei de olhar para trás, já parei de ficar parado.
Toda vez que eu te falo, sei que vou continuar.
Comigo vou levar e com coragem vou falar.
Parei, agora sim, parei e seguirei no propósito de estudar.
Parei de ficar na rua achando que vou fazer.
Parei de esperar que as coisas aconteçam.
Parei com tudo o que atrapalha, faço o que deve ser feito.
Pensava que tinha que ser perfeito, parei de me preocupar,
Pois tomei a decisão de controlar meu coração
E também parar de fofocar.
Parei de ficar parado esperando acontecer.
Vou continuar andando e fazer o que é certo.
O certo só é certo porque nunca foi errado.
Pare de ficar parado achando que vai acertar.
Parei de olhar o que não era para ser meu.
Sei que o culpado sou eu, mas não vou me preocupar.
Parei de ficar parado, não vou mais ficar
Vendo as coisas acontecerem.
Pois parei para perceber que depende só de mim.
Quando ficava parado, nada em mim acontecia.
Esperava que os outros melhorassem minha alegria.
Percebi que no momento não dependo de ninguém.
Quero aumentar minha energia, nunca mais vou ficar sem.
Parei com essa besteira de ficar sentado
No conforto acomodado achando que vai resolver.
O presente é importante, e o futuro também é,
Tudo já aconteceu no passado ou no futuro,
No presente é que se resolve.
Pare agora e reflita, pare para analisar.
Não irei mais pensar que não vou conseguir.
Agora sou muito mais, chega de ficar parado,
Entre, deixe de ser acanhado, ficar parado nunca mais.
Parei de ficar parado, estou entrando em movimento.
Todas as vezes que eu dizia "não aguento",
Eu sei de uma coisa agora: Jesus Cristo manda embora
De dentro de mim o sofrimento.`},
    { id: 'lp-4', title: 'Vigiai e Buscai a Santidade', text: `Vigiai atentamente sobre as palavras que proferes,
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
O Espírito Divino hoje te segura pela mão.` },
    { id: 'lp-5', title: 'Não Brincamos com a Vida', text: `não brincamos com a vida Deus é sério e quer te dar
sacrifique com Jesus ele vai te ajudar
Vinde a mim olhe a cruz teu chamado é para fazer
Ame a Cristo todo dia que o pecado vai vencer
a distância entre o céu e o inferno vem a ver
da cabeça ao coração 30 cm quer aprender?
é tempo de viver o renovo espiritual
desse jeito você vive e vencerá todo o mal
Jesus está com você ele vai te ajudar
eliminar a angústia para sua vida salvar
Jesus ama a sua vida da morte vem para salvar
tire a corda do pescoço para sua vida libertar`},
    { id: 'lp-6', title: 'Na Tempestade da Vida', text: `Olá, claro que sim, pode pedir o que precisar,
Lute até o fim, pois quem manda é o Senhor.
Lembre da conexão que você fez com Ele,
Neste dia, fale com Ele outra vez, a graça a pedir.
Jesus está ao seu lado, ajudando a vencer,
Na batalha da vida, Ele ensina a fazer.
Com Ele, você resolve qualquer problema,
Mesmo que pareça um grande dilema.
Aquilo que parecia impossível de acontecer,
Você fez a sua parte e Deus veio resolver.
Na tempestade da vida, o Senhor está contigo,
Quando o mar está agitado, Ele mesmo é seu abrigo.`},
    { id: 'lp-7', title: 'A Armadura de Deus', text: `A base da armadura é o cinto da Verdade,
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
Equipados com a armadura divina, vencemos com firmeza.`},
    { id: 'lp-8', title: 'Jornada de Fé', text: `Na jornada avançada, a mente é transformada,
Deus faz a partir do nada, te prepara para vencer.
O Reino de Deus não é nem comida nem bebida,
Aumente a fé em sua vida, pois você não é escravo.
Deus está sempre ao seu lado, deixe o medo no passado,
Exercite a fé e vamos crescer.
A Bíblia sem prática é como um homem forte e cego,
Deus é bom, e eu não nego a palavra que prego.
Vivo no dia a dia, pare já com a tristeza,
E sinta agora a alegria.`}
  ],
  'oracao-intimidade': [
    { id: 'oi-1', title: 'Oração que Transforma', text: `A oração é a chave que abre o coração,
Conversa sincera com Deus, fonte de salvação.
Em cada palavra, um encontro de amor,
Na intimidade divina, renasce o fervor.`},
    { id: 'oi-2', title: 'Silêncio e Presença', text: `No silêncio da alma, Deus vem habitar,
Presença que acalma, faz o espírito cantar.
Na oração profunda, encontro a paz,
E a vida se renova, o medo se desfaz.`},
    { id: 'oi-3', title: 'Clamor do Coração', text: `Quando o coração clama, Deus ouve com atenção,
Atende o pedido, traz a consolação.
Não importa a hora, nem o lugar,
A oração é ponte para o divino amar.`},
    { id: 'oi-4', title: 'Fé que Sustenta', text: `A oração fortalece, sustenta a caminhada,
Mesmo na tempestade, é luz na estrada.
Com fé perseverante, seguimos a orar,
Pois Deus é nosso refúgio, sempre a nos amparar.`},
    { id: 'oi-5', title: 'Entrega e Confiança', text: `Na oração entrego minha vida e dor,
Confio no Senhor, fonte de amor.
Deixo nas mãos d’Ele meu caminhar,
E sinto a esperança a me renovar.`},
    { id: 'oi-6', title: 'Oração de Gratidão', text: `Agradeço a Deus por cada bênção,
Por Sua infinita compaixão.
Na oração, louvo e bendigo,
Pois Seu amor é abrigo.`},
    { id: 'oi-7', title: 'Intimidade com Deus', text: `Na oração encontro meu amigo fiel,
Que me guia e protege do mal cruel.
É momento sagrado, de comunhão,
Que fortalece a alma e o coração.`},
    { id: 'oi-8', title: 'Poder da Oração', text: `A oração tem poder para transformar,
Curar feridas e libertar.
Com fé e amor, vamos orar,
E a vida de Deus celebrar.`},
    { id: 'oi-9', title: 'Oração e Esperança', text: `Mesmo na dor, a oração traz luz,
Renova a esperança que Jesus conduz.
Em cada prece, um novo recomeço,
Na presença divina, encontro apreço.`},
    { id: 'oi-10', title: 'Oração e Paz Interior', text: `Na oração encontro a paz verdadeira,
Que acalma a alma e a mente inteira.
É refúgio seguro, porto de amor,
Que me sustenta com Seu calor.`},
    { id: 'oi-11', title: 'Oração e Sabedoria', text: `Peço a Deus sabedoria e direção,
Para viver com fé e coração.
Na oração, recebo luz e clareza,
Que me guiam com firmeza.`},
    { id: 'oi-12', title: 'Oração e Amor', text: `A oração é expressão do amor divino,
Que transforma o mundo e o destino.
Com ela, vivemos em comunhão,
Unidos no amor e na oração.`}
  ],
  'transformacao-renovacao': [
    { id: 'tr-1', title: 'Renovação da Alma', text: `Deus renova a alma cansada,
Trazendo vida restaurada.
No Seu amor, encontro paz,
Que transforma e satisfaz.`},
    { id: 'tr-2', title: 'Transformação Interior', text: `O Espírito Santo vem agir,
No coração a luz expandir.
Mudança profunda e real,
Que nos torna mais leal.`},
    { id: 'tr-3', title: 'Novo Começo', text: `Cada dia é nova chance,
De recomeçar com esperança.
Deixar o passado para trás,
E seguir firme, jamais.`},
    { id: 'tr-4', title: 'Crescimento Espiritual', text: `Crescer na fé e no amor,
Seguir o caminho do Senhor.
Aprender, perdoar, amar,
E a vida transformar.`},
    { id: 'tr-5', title: 'Libertação', text: `Deus liberta do pecado,
Trazendo o ser renovado.
Quebrando correntes, enfim,
Para viver em paz, assim.`},
    { id: 'tr-6', title: 'Esperança Viva', text: `A esperança renasce em mim,
Com Jesus, um novo jardim.
Floresce a vida, a alegria,
Na luz da Sua harmonia.`},
    { id: 'tr-7', title: 'Caminho de Luz', text: `Seguir a Cristo é caminhar,
Na luz que vem iluminar.
Transforma o coração,
E traz a salvação.`},
    { id: 'tr-8', title: 'Paz Interior', text: `A paz que Deus nos dá,
No coração sempre estará.
Mesmo em meio à aflição,
Sinto Sua consolação.`},
    { id: 'tr-9', title: 'Força na Fraqueza', text: `Na fraqueza, Deus é força,
Que sustenta e reforça.
Com Ele posso vencer,
E a vida renascer.`},
    { id: 'tr-10', title: 'Coração Renovado', text: `Deus renova o coração,
Trazendo salvação.
Com amor e compaixão,
Vivo em transformação.`},
    { id: 'tr-11', title: 'Vida Nova', text: `Em Cristo, vida nova tenho,
Deixando o velho, me empenho.
Seguir Seus passos, aprender,
E no amor crescer.`},
    { id: 'tr-12', title: 'Esperança e Fé', text: `Com esperança e fé no olhar,
Posso sempre caminhar.
Deus me guia com amor,
E me livra da dor.`},
    { id: 'tr-13', title: 'Renovação Diária', text: `Cada dia é oportunidade,
De viver em santidade.
Renovar a mente e o ser,
E a Deus agradecer.`},
    { id: 'tr-14', title: 'Transformação pela Graça', text: `Pela graça de Deus sou mudado,
Meu coração é transformado.
Em Seu amor vou permanecer,
E a vida inteira agradecer.`},
    { id: 'tr-15', title: 'Crescer em Cristo', text: `Crescer em Cristo é aprender,
A cada dia renascer.
Seguir Seus passos com fervor,
E viver no Seu amor.`},
    { id: 'tr-16', title: 'Renovação do Espírito', text: `O Espírito Santo vem renovar,
Minha vida e meu caminhar.
Com poder e unção divina,
Minha alma se ilumina.`},
    { id: 'tr-17', title: 'Vida Transformada', text: `Minha vida foi transformada,
Pela graça abençoada.
Em Cristo encontrei a luz,
Que me guia e me conduz.`}
  ],
  'amor-graca': [
    { id: 'ag-1', title: 'Amor Incondicional', text: `O amor de Deus é sem fim,
Abraça a todos, até a mim.
Sua graça nos alcança,
E nos dá esperança.`},
    { id: 'ag-2', title: 'Graça que Transforma', text: `A graça de Deus é poder,
Que nos faz renascer.
Em Seu amor encontramos,
A força que nos sustentamos.`},
    { id: 'ag-3', title: 'Amor que Cura', text: `O amor de Cristo cura,
Toda dor que perdura.
Em Seus braços encontro paz,
Que nunca se desfaz.`},
    { id: 'ag-4', title: 'Graça e Misericórdia', text: `Deus é cheio de graça e perdão,
Dá-nos sempre a mão.
Sua misericórdia é imensa,
E nos traz recompensa.`},
    { id: 'ag-5', title: 'Amor que Liberta', text: `O amor de Deus liberta,
Toda alma deserta.
Em Sua luz podemos andar,
E a vida transformar.`},
    { id: 'ag-6', title: 'Graça que Sustenta', text: `A graça divina sustenta,
Mesmo quando a vida enfrenta.
Com fé e amor seguimos,
E em Deus sempre confiamos.`}
  ],
  'chamado-missao': [
    { id: 'cm-1', title: 'Chamado para Servir', text: `Deus nos chama para servir,
Com amor e a luz a seguir.
Na missão de anunciar,
O Seu reino a brilhar.`},
    { id: 'cm-2', title: 'Missão de Amor', text: `A missão é de amor e paz,
Levar a todos o que Ele faz.
Com fé e coragem no coração,
Cumprimos a Sua missão.`},
    { id: 'cm-3', title: 'Chamado à Santidade', text: `Somos chamados a ser santos,
Seguir os passos e os cantos.
De Jesus, nosso Senhor,
Que nos guia com amor.`},
    { id: 'cm-4', title: 'Missão de Esperança', text: `Levar esperança e luz,
A quem a vida conduz.
Com palavras e ações,
Transformar corações.`},
    { id: 'cm-5', title: 'Chamado para a Vida', text: `Deus nos chama para viver,
Com fé e amor a crescer.
Na Sua palavra confiar,
E a missão realizar.`},
    { id: 'cm-6', title: 'Missão de Fé', text: `Com fé seguimos adiante,
Na missão constante.
Levar a palavra de Deus,
Aos corações e aos céus.`},
    { id: 'cm-7', title: 'Chamado para a Paz', text: `Somos chamados a ser paz,
Em meio ao mundo que jaz.
Com amor e compaixão,
Cumprimos a missão.`},
    { id: 'cm-8', title: 'Missão de Luz', text: `Levar a luz do Senhor,
A todos com fervor.
Na missão de anunciar,
O Seu reino a brilhar.`}
  ],
  'salvacao-vidaeterna': [
    { id: 'sv-1', title: 'Salvação em Cristo', text: `Em Cristo há salvação,
Para toda a criação.
Ele é o caminho e a luz,
Que a vida nos conduz.`},
    { id: 'sv-2', title: 'Vida Eterna', text: `A vida eterna é dom,
Que vem do coração.
De Deus, nosso Pai,
Que nos ama e nos guia.`},
    { id: 'sv-3', title: 'Graça da Salvação', text: `Pela graça fomos salvos,
Em Cristo, nossos passos.
Seguem firmes na fé,
Na vida que Ele nos dá.`},
    { id: 'sv-4', title: 'Esperança da Vida', text: `A esperança é viva,
Na vida que cativa.
Em Cristo encontramos,
O amor que nos salvamos.`},
    { id: 'sv-5', title: 'Caminho para o Céu', text: `Jesus é o caminho,
A verdade e o pão.
Seguindo Seus passos,
Alcançamos a salvação.`}
  ],
  'paz-cura': [
    { id: 'pc-1', title: 'Paz que Transforma', text: `A paz de Deus transforma,
Cura a alma que conforma.
Em Seu amor encontramos,
O descanso que buscamos.`},
    { id: 'pc-2', title: 'Cura Interior', text: `Deus cura o coração,
Trazendo libertação.
Em Sua presença há luz,
Que a vida conduz.`},
    { id: 'pc-3', title: 'Paz no Espírito', text: `No Espírito há paz,
Que nunca se desfaz.
Em meio à tempestade,
Sinto Sua bondade.`},
    { id: 'pc-4', title: 'Cura e Esperança', text: `A cura vem com esperança,
Na fé que nos alcança.
Deus é nosso refúgio,
Em Seu amor seguro.`},
    { id: 'pc-5', title: 'Paz que Acalma', text: `A paz que Deus dá,
A alma acalma.
Em Seu abraço encontro,
O amor que é pronto.`},
    { id: 'pc-6', title: 'Cura e Renovação', text: `Deus renova a vida,
Traz cura e guarida.
Em Seu amor profundo,
Transforma o mundo.`},
    { id: 'pc-7', title: 'Paz e Confiança', text: `Confio na paz divina,
Que minha alma ilumina.
Em Deus encontro força,
Que nunca se esgota.`},
    { id: 'pc-8', title: 'Cura e Libertação', text: `Deus liberta e cura,
Trazendo a ventura.
Em Sua presença há luz,
Que a vida conduz.`}
  ],
  'reflexoes-vida': [
    { id: 'rv-1', title: 'Reflexão sobre a Vida', text: `A vida é um presente,
Que Deus nos deu contente.
Cada dia é oportunidade,
De viver com verdade.`},
    { id: 'rv-2', title: 'Sabedoria e Fé', text: `Com sabedoria e fé,
Enfrento o que é.
Deus me guia e ensina,
Na vida que caminha.`},
    { id: 'rv-3', title: 'Aprender e Crescer', text: `Aprender a cada dia,
Crescer com alegria.
Na palavra encontrar,
O caminho para andar.`},
    { id: 'rv-4', title: 'Gratidão e Amor', text: `Com gratidão no coração,
Vivo em amor e oração.
Deus é minha luz,
Que me conduz.`},
    { id: 'rv-5', title: 'Esperança e Confiança', text: `Na esperança confio,
Em Deus me alinho.
Ele é meu refúgio,
Meu porto seguro.`},
    { id: 'rv-6', title: 'Vida e Propósito', text: `A vida tem propósito,
Que Deus nos deu disposto.
Seguir Seu caminho,
Com amor e carinho.`},
    { id: 'rv-7', title: 'Fé e Perseverança', text: `Com fé perseverante,
Sigo adiante.
Deus me fortalece,
E me enriquece.`},
    { id: 'rv-8', title: 'Paz e Harmonia', text: `Busco paz e harmonia,
Na luz do dia.
Deus é meu guia,
Minha alegria.`},
    { id: 'rv-9', title: 'Reflexão e Oração', text: `Na reflexão e oração,
Encontro a direção.
Deus me sustenta,
E me alimenta.`}
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
