'use strict';

const PROVES=[
  {id:1,nom:"Nom del carrer, Pujada del Cinto",coordenades:{latitude:41.225672,longitude:1.728086},photoHelp:"Busqueu el cartell amb el nom de la Pujada del Cinto.",referenceImage:"assets/images/1 - Cartell pujada del cinto.jpg"},
  {id:2,nom:"Sagrat Cor, Plaça del Sagrat Cor",coordenades:{latitude:41.226340,longitude:1.727569},qrCoordinates:{latitude:41.226219,longitude:1.727570},photoHelp:"Busqueu la imatge del Sagrat Cor a la plaça.",referenceImage:"assets/images/2 - Sagrat cor.jpg"},
  {id:3,nom:"C. E. La Quitxalla, carrer dels Terrissaires",coordenades:{latitude:41.226410,longitude:1.727944},photoHelp:"Busqueu la façana del C. E. La Quitxalla.",referenceImage:"assets/images/3 - CE La Quitxalla.jpg"},
  {id:4,nom:"Façana de l'església de Santa Gertrudis",coordenades:{latitude:41.226607,longitude:1.728095},photoHelp:"Busqueu la façana de l'església de Santa Gertrudis.",referenceImage:"assets/images/4 - Façana Esglèsia Santa Gertrudis.jpg"},
  {id:5,nom:"Estàtua d'Eduard Toldrà, carrer de Mossèn Narcís Font",coordenades:{latitude:41.226884,longitude:1.728118},photoHelp:"Busqueu l'estàtua d'Eduard Toldrà.",referenceImage:"assets/images/5 - Estàtua Eduard Toldrà.jpg"},
  {id:6,nom:"Arxiu Històric Comarcal, plaça de Font i Gumà",coordenades:{latitude:41.226840,longitude:1.727556},qrCoordinates:{latitude:41.226931,longitude:1.727572},photoHelp:"Busqueu la façana de l'Arxiu Històric Comarcal.",referenceImage:"assets/images/6 - Arxiu Històric Comarcal de Vilanova i la Geltrú.png"},
  {id:7,nom:"Façana amb arcada, carrer dels Arengaders",coordenades:{latitude:41.227168,longitude:1.727561},qrCoordinates:{latitude:41.227216,longitude:1.727625},photoHelp:"Busqueu la façana amb arcada del carrer dels Arengaders.",referenceImage:"assets/images/7 - Façana arcada Carrer Arengaders.jpg"},
  {id:8,nom:"Residència d'Avis Santa Teresa, carrer dels Terrissaires",coordenades:{latitude:41.226710,longitude:1.728421},photoHelp:"Busqueu la façana de la Residència d'Avis Santa Teresa.",referenceImage:"assets/images/8 - Residència d'Avis Sta Teresa Carrer dels Terrissaires.jpg"},
  {id:9,nom:"Inici del carrer del Ravaler",coordenades:{latitude:41.226339,longitude:1.729141},photoHelp:"Busqueu l'inici del carrer del Ravaler.",referenceImage:"assets/images/9 - Inici  carrer Carrer del Ravaler.jpg"},
  {id:10,nom:"Nom del carrer del Castell",coordenades:{latitude:41.225970,longitude:1.728777},qrCoordinates:{latitude:41.226074,longitude:1.728675},photoHelp:"Busqueu el cartell amb el nom del carrer del Castell.",referenceImage:"assets/images/10 - Nom del carrer Carrer del Castell.jpg"},
  {id:11,nom:"Confiteria-Panaderia Llorens, plaça dels Lledoners",coordenades:{latitude:41.225698,longitude:1.728105},photoHelp:"Busqueu la façana de la Confiteria-Panaderia Llorens.",referenceImage:"assets/images/11 - Confiteria - Panaderia Llorens Plaça dels Lladoners.jpg"},
  {id:12,nom:"The Shamrock, plaça dels Lledoners",coordenades:{latitude:41.225647,longitude:1.728307},photoHelp:"Busqueu la façana de The Shamrock.",referenceImage:"assets/images/12 - The Shamrock Plaça Lladoners.jpg"},
  {id:13,nom:"Fonda del Cinto, carrer de l'Argenteria número 10",coordenades:{latitude:41.225822,longitude:1.727668},qrCoordinates:{latitude:41.225868,longitude:1.727627},photoHelp:"Busqueu la Fonda del Cinto al número 10.",referenceImage:"assets/images/13 - Fonda del Cinto Carrer Argenteria 10.png"},
  {id:14,nom:"Peixateria Vella, carrer de l'Arquebisbe Armanyà",coordenades:{latitude:41.226599,longitude:1.727465},photoHelp:"Busqueu la part posterior de la Peixateria Vella.",referenceImage:"assets/images/14 - Peixateria vella Carrer de l'Arquebisbe Armanyà.jpg"},
  {id:15,nom:"Rectoria de la Geltrú, carrer de la Rectoria",coordenades:{latitude:41.226537,longitude:1.727664},qrCoordinates:{latitude:41.226532,longitude:1.727687},photoHelp:"Busqueu la façana de la Rectoria de la Geltrú.",referenceImage:"assets/images/15 - Rectoria de la Geltrú Carrer de la Rectoria 1.jpg"},
  {id:16,nom:"Plaça Miró de Montgrós",coordenades:{latitude:41.225048,longitude:1.727023},photoHelp:"Busqueu l'element de la plaça Miró de Montgrós que apareix a la fotografia.",referenceImage:"assets/images/16 - Plaça Miró de Montgrós.jpg"},
  {id:17,nom:"Mercat Públic",coordenades:{latitude:41.222747,longitude:1.724178},photoHelp:"Busqueu la façana on es pot llegir «MERCAT PÚBLIC».",referenceImage:"assets/images/17 - Mercat Públic.jpg"},
  {id:18,nom:"Cuina",coordenades:{latitude:41.220332,longitude:1.717981},photoHelp:"Busqueu el rellotge rodó amb marc de fusta.",referenceImage:"assets/images/18 - cocina.jpg"},
  {id:19,nom:"Habitació d'en Jaume",coordenades:{latitude:41.220322,longitude:1.717948},photoHelp:"Busqueu la maqueta del vaixell pirata.",referenceImage:"assets/images/19 - Cuarto Jaume.jpg"},
  {id:20,nom:"Habitació de la Maria",coordenades:{latitude:41.220352,longitude:1.718071},photoHelp:"Busqueu els peluixos situats damunt del moble.",referenceImage:"assets/images/20 - Cuarto Maria.jpg"},
  {id:21,nom:"Bar Lo Gusto, carrer de Canyelles",coordenades:{latitude:41.220460,longitude:1.717751},photoHelp:"Busqueu la façana del Bar Lo Gusto.",referenceImage:"assets/images/21 - Bar Lo Gusto Carrer Canyelles 4.jpg"},
  {id:22,nom:"Nom del carrer de Canyelles",coordenades:{latitude:41.220020,longitude:1.717949},photoHelp:"Busqueu el cartell amb el nom del carrer de Canyelles.",referenceImage:"assets/images/22 - Nom del carrer Carrer Canyelles.jpg"}
];

const ENIGMES_BASE=[
  {id:1,enunciat:"Tinc agulles però no coso, i números però no compto. Què soc?",ajuda1:"Em consultes quan tens pressa.",ajuda2:"Una part meva gira sense caminar.",solucio:"Un rellotge"},
  {id:2,enunciat:"Com més coses eixugo, més mullada em quedo. Què soc?",ajuda1:"Em trobes prop de la dutxa.",ajuda2:"La meva feina és absorbir aigua.",solucio:"Una tovallola"},
  {id:3,enunciat:"Tinc dents però no mossego. Què soc?",ajuda1:"Sovint soc al bany o a l'habitació.",ajuda2:"Ordeno una cosa que creix al cap.",solucio:"Una pinta"},
  {id:4,enunciat:"Tinc coll però no cap, i normalment porto tap. Què soc?",ajuda1:"Puc ser de vidre o de plàstic.",ajuda2:"Guardo líquids.",solucio:"Una ampolla"},
  {id:5,enunciat:"Tinc quatre potes però no camino; hi menges o estudies. Què soc?",ajuda1:"Soc un moble molt habitual.",ajuda2:"Els plats o quaderns reposen damunt meu.",solucio:"Una taula"},
  {id:6,enunciat:"Serveixo per pujar i baixar, però sempre soc al mateix lloc. Què soc?",ajuda1:"Uneixo dues altures.",ajuda2:"Estic formada per esglaons.",solucio:"Una escala"},
  {id:7,enunciat:"Tinc fulles però no soc un arbre, i explico històries. Què soc?",ajuda1:"Em pots obrir i tancar.",ajuda2:"Les meves fulles tenen paraules.",solucio:"Un llibre"},
  {id:8,enunciat:"Tinc tecles però no obro portes; quan em toquen, faig música. Què soc?",ajuda1:"Cal prémer per fer-me parlar.",ajuda2:"Les meves tecles produeixen notes.",solucio:"Un piano"},
  {id:9,enunciat:"Tinc un ull però no hi veig, i m'acompanya un fil. Què soc?",ajuda1:"Soc petita i metàl·lica.",ajuda2:"Ajudo a unir roba.",solucio:"Una agulla"},
  {id:10,enunciat:"Com més n'hi ha, menys hi veus. Què és?",ajuda1:"No és cap objecte.",ajuda2:"Apareix quan falta llum.",solucio:"La foscor"},
  {id:11,enunciat:"Què es trenca només de dir-ne el nom?",ajuda1:"Necessita que ningú parli.",ajuda2:"Una sola paraula el fa desaparèixer.",solucio:"El silenci"},
  {id:12,enunciat:"Corro sense cames i tinc un llit. Què soc?",ajuda1:"Em moc cap a llocs més baixos.",ajuda2:"Puc desembocar al mar.",solucio:"Un riu"},
  {id:13,enunciat:"Entro a l'aigua i no em mullo; em moc quan tu et mous. Què soc?",ajuda1:"Em veus en superfícies llises.",ajuda2:"Imito els teus moviments.",solucio:"El reflex"},
  {id:14,enunciat:"Tinc ciutats sense cases, rius sense aigua i muntanyes sense pedra. Què soc?",ajuda1:"Serveixo per orientar-nos.",ajuda2:"Represento llocs en petit.",solucio:"Un mapa"},
  {id:15,enunciat:"Què pots agafar sense tocar-ho ni poder-ho llançar?",ajuda1:"No és cap objecte.",ajuda2:"Pot arribar amb tos i esternuts.",solucio:"Un refredat"},
  {id:16,enunciat:"Sempre soc davant teu, però no em pots veure. Què soc?",ajuda1:"Encara no he passat.",ajuda2:"Quan arribo, ja soc el present.",solucio:"El futur"},
  {id:17,enunciat:"Què pot omplir una habitació sense ocupar espai?",ajuda1:"No ho pots agafar amb les mans.",ajuda2:"Quan apareix, ho veus tot.",solucio:"La llum"},
  {id:18,enunciat:"Què pesa més: un quilo de ferro o un quilo de plomes?",ajuda1:"Fixa't en la unitat de pes.",ajuda2:"Tots dos pesen un quilo.",solucio:"Pesen igual"},
  {id:19,enunciat:"Dos pares i dos fills comparteixen tres entrepans, un per persona. Com pot ser?",ajuda1:"No calen quatre persones.",ajuda2:"Una persona és pare i fill alhora.",solucio:"Avi, pare i fill"},
  {id:20,enunciat:"Tens tres pomes i n'agafes dues. Quantes pomes tens?",ajuda1:"No pregunta quantes en queden.",ajuda2:"Compta les que has agafat.",solucio:"Dues pomes"},
  {id:21,enunciat:"Quants mesos de l'any arriben al dia 28?",ajuda1:"No pensis només en el febrer.",ajuda2:"Tots superen o arriben a aquest dia.",solucio:"Tots dotze mesos"},
  {id:22,enunciat:"Un gall posa un ou al punt més alt d'una teulada. Cap a quin costat cau?",ajuda1:"Revisa quin animal apareix.",ajuda2:"Només les gallines ponen ous.",solucio:"Els galls no ponen"},
  {id:23,enunciat:"Una mà té cinc dits. Quants dits tenen deu mans?",ajuda1:"Calcula cinc per cada mà.",ajuda2:"Multiplica 10 per 5.",solucio:"Cinquanta dits"},
  {id:24,enunciat:"Cinc gats cacen cinc ratolins en cinc minuts. Quants gats calen per caçar-ne cent en cent minuts?",ajuda1:"Observa el temps disponible.",ajuda2:"Cada gat pot caçar molts ratolins en cent minuts.",solucio:"Cinc gats"},
  {id:25,enunciat:"Tinc 10 anys i el meu germà en té la meitat. Quan jo en tingui 20, quants en tindrà ell?",ajuda1:"La diferència d'edat no canvia.",ajuda2:"El germà sempre té cinc anys menys.",solucio:"Quinze anys"},
  {id:26,enunciat:"Quin nombre continua la sèrie: 2, 4, 8, 16, ...?",ajuda1:"Cada nombre duplica l'anterior.",ajuda2:"Multiplica 16 per 2.",solucio:"32"},
  {id:27,enunciat:"Quin nombre falta: 1, 4, 9, 16, ...?",ajuda1:"Són quadrats de nombres seguits.",ajuda2:"Després de 4 × 4 ve 5 × 5.",solucio:"25"},
  {id:28,enunciat:"Quin nombre continua: 1, 1, 2, 3, 5, ...?",ajuda1:"Suma els dos nombres anteriors.",ajuda2:"3 + 5 dona el següent.",solucio:"8"},
  {id:29,enunciat:"Tres gallines ponen tres ous en tres dies. Quants ous ponen sis gallines en sis dies?",ajuda1:"Dobles les gallines i també els dies.",ajuda2:"La producció es multiplica per quatre.",solucio:"Dotze ous"},
  {id:30,enunciat:"Una aranya té vuit potes. Quantes potes tenen quatre aranyes?",ajuda1:"No pensis en cames humanes.",ajuda2:"Multiplica 8 per 4.",solucio:"Trenta-dues potes"},
  {id:31,enunciat:"A les tres en punt, quin angle formen les dues agulles d'un rellotge?",ajuda1:"Imagina les posicions 12 i 3.",ajuda2:"És una quarta part d'un cercle.",solucio:"90 graus"},
  {id:32,enunciat:"Quantes vegades pots restar 5 de 25?",ajuda1:"Després de la primera resta ja no tens 25.",ajuda2:"Només la primera resta és des de 25.",solucio:"Una vegada"},
  {id:33,enunciat:"Tinc tres xifres: soc més gran que 400, menor que 500, la desena és 2 i acabo en 7. Quin nombre soc?",ajuda1:"La centena és 4.",ajuda2:"Forma el nombre amb 4, 2 i 7.",solucio:"427"},
  {id:34,enunciat:"Soc parell, menor que 20, major que 14 i no soc 18. Quin nombre soc?",ajuda1:"Els candidats són 16 i 18.",ajuda2:"L'enunciat descarta un dels dos.",solucio:"16"},
  {id:35,enunciat:"Quin resultat dona 30 ÷ 0,5 + 10?",ajuda1:"Dividir per 0,5 no redueix.",ajuda2:"Dividir entre 0,5 duplica.",solucio:"70"},
  {id:36,enunciat:"Quina lletra surt un cop a «minut», dos cops a «moment» i cap a «segle»?",ajuda1:"No busquis nombres.",ajuda2:"Compta una mateixa lletra en cada paraula.",solucio:"La lletra M"},
  {id:37,enunciat:"Què hi ha just al mig de la paraula «mar»?",ajuda1:"Mira la posició central.",ajuda2:"La paraula té tres lletres.",solucio:"La lletra A"},
  {id:38,enunciat:"Quina lletra inicia «núvol» i acaba «tren»?",ajuda1:"Mira l'inici i el final.",ajuda2:"És la mateixa consonant.",solucio:"La lletra N"},
  {id:39,enunciat:"Quantes lletres té la paraula «alfabet»?",ajuda1:"Compta només la paraula entre cometes.",ajuda2:"Separa-la lletra per lletra.",solucio:"Set lletres"},
  {id:40,enunciat:"Quina és l'última lletra de la paraula «Catalunya»?",ajuda1:"No pensis en geografia.",ajuda2:"Mira el final de la paraula.",solucio:"La lletra A"},
  {id:41,enunciat:"Si reordenes les lletres de «ROMA», quin sentiment pots formar?",ajuda1:"No afegeixis ni treguis lletres.",ajuda2:"Reordena-les per formar una emoció.",solucio:"AMOR"},
  {id:42,enunciat:"Quina vocal apareix tres vegades a la paraula «banana»?",ajuda1:"Compta una sola vocal.",ajuda2:"Ocupa els llocs 2, 4 i 6.",solucio:"La lletra A"},
  {id:43,enunciat:"Quin animal s'amaga al principi de la paraula «gatell»?",ajuda1:"Busca una paraula dins d'una altra.",ajuda2:"Són les tres primeres lletres.",solucio:"Un gat"},
  {id:44,enunciat:"Quina fruita s'amaga dins la paraula «espera»?",ajuda1:"No necessites totes les lletres.",ajuda2:"Comença a la tercera lletra.",solucio:"Una pera"},
  {id:45,enunciat:"Soc una paraula de cinc lletres: detecto objectes i em llegeixes igual en tots dos sentits. Quina soc?",ajuda1:"Començo i acabo amb la mateixa lletra.",ajuda2:"També dono nom a aquest joc.",solucio:"RADAR"},
  {id:46,enunciat:"Una família té quatre filles i totes comparteixen un mateix germà. Quants fills hi ha?",ajuda1:"El germà no és diferent per a cada filla.",ajuda2:"Suma les quatre filles i el germà.",solucio:"Cinc fills"},
  {id:47,enunciat:"En una cursa avances la persona que va segona. En quina posició quedes?",ajuda1:"Ocupes el lloc de qui acabes d'avançar.",ajuda2:"No has avançat qui anava primer.",solucio:"Segon lloc"},
  {id:48,enunciat:"Un tren elèctric va cap al nord. Cap a on va el fum?",ajuda1:"Fixa't en el tipus de tren.",ajuda2:"No crema combustible per moure's.",solucio:"No fa fum"},
  {id:49,enunciat:"Tens un llumí i entres en una sala amb una espelma, una llar de foc i un llum d'oli. Què encens primer?",ajuda1:"Necessites una cosa per encendre les altres.",ajuda2:"La tens a la mà des del principi.",solucio:"El llumí"},
  {id:50,enunciat:"Un metge et dona tres pastilles: n'has de prendre una cada mitja hora. Quant de temps tardes a prendre-les totes?",ajuda1:"La primera la prens de seguida.",ajuda2:"Les preses són als minuts 0, 30 i 60.",solucio:"Una hora"}
];

const RESPOSTES_EQUIVALENTS={
  18:["igual","el mateix"],19:["avi pare fill","tres persones"],21:["12","dotze","tots"],22:["no posa ous","un gall no pon ous"],23:["50","cinquanta"],24:["5","cinc"],25:["15","quinze"],26:["trenta-dos"],27:["vint-i-cinc"],28:["vuit"],29:["12","dotze"],30:["32","trenta-dues"],31:["90","noranta graus"],32:["1","un cop"],33:["quatre-cents vint-i-set"],34:["setze"],35:["setanta"],36:["m"],37:["a"],38:["n"],39:["7","set"],40:["a"],42:["a"],46:["5","cinc"],47:["segon","segona"],48:["cap","no hi ha fum"],50:["60 minuts","1 hora"]
};

const ENIGMES=ENIGMES_BASE.map(enigma=>{
  const senseArticle=enigma.solucio.replace(/^(un|una|el|la|els|les)\s+/i,'');
  return {...enigma,respostes:[enigma.solucio,senseArticle,...(RESPOSTES_EQUIVALENTS[enigma.id]||[])]};
});
