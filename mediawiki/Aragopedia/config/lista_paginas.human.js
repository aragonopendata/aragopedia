﻿var comarcas = ["Alto Gállego",
"Andorra-Sierra de Arcos",
"Aranda",
"Bajo Aragón",
"Bajo Aragón-Caspe/ Baix Aragó-Casp",
"Bajo Cinca/Baix Cinca",
"Bajo Martín",
"Campo de Belchite",
"Campo de Borja",
"Campo de Cariñena",
"Campo de Daroca",
"Cinca Medio",
"Cinco Villas",
"Comunidad de Calatayud",
"Comunidad de Teruel",
"Cuencas Mineras",
"D.C. Zaragoza",
"Gúdar-Javalambre",
"Hoya de Huesca/Plana de Uesca",
"Jiloca",
"La Jacetania",
"La Litera/La Llitera",
"La Ribagorza",
"Los Monegros",
"Maestrazgo",
"Matarraña/Matarranya",
"Ribera Alta del Ebro",
"Ribera Baja del Ebro",
"Sierra de Albarracín",
"Sobrarbe",
"Somontano de Barbastro",
"Tarazona y el Moncayo",
"Valdejalón",
];

var municipios = ["Ababuj",
"Abanto",
"Abejuela",
"Abiego",
"Abizanda",
"Acered",
"Adahuesca",
"Agón",
"Aguarón",
"Aguatón",
"Aguaviva",
"Agüero",
"Aguilar del Alfambra",
"Aguilón",
"Aínsa-Sobrarbe",
"Ainzón",
"Aísa",
"Alacón",
"Aladrén",
"Alagón",
"Alarba",
"Alba",
"Albalate de Cinca",
"Albalate del Arzobispo",
"Albalatillo",
"Albarracín",
"Albelda",
"Albentosa",
"Alberite de San Juan",
"Albero Alto",
"Albero Bajo",
"Alberuela de Tubo",
"Albeta",
"Alborge",
"Alcaine",
"Alcalá de Ebro",
"Alcalá de Gurrea",
"Alcalá de la Selva",
"Alcalá de Moncayo",
"Alcalá del Obispo",
"Alcampell",
"Alcañiz",
"Alcolea de Cinca",
"Alconchel de Ariza",
"Alcorisa",
"Alcubierre",
"Aldehuela de Liestos",
"Alerre",
"Alfajarín",
"Alfambra",
"Alfamén",
"Alfántega",
"Alforque",
"Alhama de Aragón",
"Aliaga",
"Allepuz",
"Alloza",
"Allueva",
"Almochuel",
"Almohaja",
"Almolda (La)",
"Almonacid de la Cuba",
"Almonacid de la Sierra",
"Almudévar",
"Almunia de Doña Godina (La)",
"Almunia de San Juan",
"Almuniente",
"Alobras",
"Alpartir",
"Alpeñés",
"Alquézar",
"Altorricón",
"Ambel",
"Anadón",
"Andorra",
"Anento",
"Angüés",
"Aniñón",
"Ansó",
"Antillón",
"Añón de Moncayo",
"Aragüés del Puerto",
"Aranda de Moncayo",
"Arándiga",
"Arcos de las Salinas",
"Ardisa",
"Arén",
"Arens de Lledó",
"Argavieso",
"Argente",
"Arguis",
"Ariño",
"Ariza",
"Artieda",
"Asín",
"Atea",
"Ateca",
"Ayerbe",
"Azaila",
"Azanuy-Alins",
"Azara",
"Azlor",
"Azuara",
"Bádenas",
"Badules",
"Baells",
"Báguena",
"Bagüés",
"Bailo",
"Balconchán",
"Baldellou",
"Ballobar",
"Banastás",
"Bañón",
"Barbastro",
"Bárboles",
"Barbués",
"Barbuñales",
"Bárcabo",
"Bardallur",
"Barrachina",
"Bea",
"Beceite",
"Belchite",
"Bello",
"Belmonte de Gracián",
"Belmonte de San José",
"Belver de Cinca",
"Benabarre",
"Benasque",
"Beranuy",
"Berbegal",
"Berdejo",
"Berge",
"Berrueco",
"Bezas",
"Biel",
"Bielsa",
"Bierge",
"Biescas",
"Bijuesca",
"Binaced",
"Binéfar",
"Biota",
"Bisaurri",
"Biscarrués",
"Bisimbre",
"Blancas",
"Blecua y Torres",
"Blesa",
"Boltaña",
"Bonansa",
"Boquiñeni",
"Borau",
"Bordalba",
"Bordón",
"Borja",
"Botorrita",
"Brea de Aragón",
"Bronchales",
"Broto",
"Bubierca",
"Bueña",
"Bujaraloz",
"Bulbuente",
"Burbáguena",
"Bureta",
"Burgo de Ebro (El)",
"Buste (El)",
"Cabañas de Ebro",
"Cabolafuente",
"Cabra de Mora",
"Cadrete",
"Calaceite",
"Calamocha",
"Calanda",
"Calatayud",
"Calatorao",
"Calcena",
"Caldearenas",
"Calmarza",
"Calomarde",
"Camañas",
"Camarena de la Sierra",
"Camarillas",
"Caminreal",
"Campillo de Aragón",
"Campo",
"Camporrells",
"Canal de Berdún",
"Candasnos",
"Canfranc",
"Cantavieja",
"Cañada de Benatanduz",
"Cañada de Verich (La)",
"Cañada Vellida",
"Cañizar del Olivar",
"Capdesaso",
"Capella",
"Carenas",
"Cariñena",
"Casbas de Huesca",
"Cascante del Río",
"Caspe",
"Castejón de Alarba",
"Castejón de las Armas",
"Castejón de Monegros",
"Castejón de Sos",
"Castejón de Tornos",
"Castejón de Valdejasa",
"Castejón del Puente",
"Castel de Cabra",
"Castelflorite",
"Castellar (El)",
"Castellote",
"Castelnou",
"Castelserás",
"Castiello de Jaca",
"Castigaleu",
"Castiliscar",
"Castillazuelo",
"Castillonroy",
"Cedrillas",
"Celadas",
"Cella",
"Cerollera (La)",
"Cervera de la Cañada",
"Cerveruela",
"Cetina",
"Chalamera",
"Chía",
"Chimillas",
"Chiprana",
"Chodes",
"Cimballa",
"Cinco Olivas",
"Clarés de Ribota",
"Codo",
"Codoñera (La)",
"Codos",
"Colungo",
"Contamina",
"Corbalán",
"Cortes de Aragón",
"Cosa",
"Cosuenda",
"Cretas",
"Crivillén",
"Cuarte de Huerva",
"Cuba (La)",
"Cubel",
"Cubla",
"Cucalón",
"Cuerlas (Las)",
"Cuervo (El)",
"Cuevas de Almudén",
"Cuevas Labradas",
"Daroca",
"Ejea de los Caballeros",
"Ejulve",
"Embid de Ariza",
"Encinacorba",
"Épila",
"Erla",
"Escatrón",
"Escorihuela",
"Escucha",
"Esplús",
"Estada",
"Estadilla",
"Estercuel",
"Estopiñán del Castillo",
"Fabara",
"Fago",
"Fanlo",
"Farlete",
"Fayón",
"Fayos (Los)",
"Ferreruela de Huerva",
"Figueruelas",
"Fiscal",
"Fombuena",
"Fonfría",
"Fonz",
"Foradada del Toscar",
"Formiche Alto",
"Fórnoles",
"Fortanete",
"Foz-Calanda",
"Fraga",
"Frago (El)",
"Frasno (El)",
"Fréscano",
"Fresneda (La)",
"Frías de Albarracín",
"Fuendejalón",
"Fuendetodos",
"Fuenferrada",
"Fuentes Calientes",
"Fuentes Claras",
"Fuentes de Ebro",
"Fuentes de Jiloca",
"Fuentes de Rubielos",
"Fuentespalda",
"Fueva (La)",
"Gallocanta",
"Gallur",
"Galve",
"Gargallo",
"Gea de Albarracín",
"Gelsa",
"Ginebrosa (La)",
"Gistaín",
"Godojos",
"Gotor",
"Grado (El)",
"Grañén",
"Graus",
"Griegos",
"Grisel",
"Grisén",
"Guadalaviar",
"Gúdar",
"Gurrea de Gállego",
"Herrera de los Navarros",
"Híjar",
"Hinojosa de Jarque",
"Hoz de Jaca",
"Hoz de la Vieja (La)",
"Hoz y Costeán",
"Huerto",
"Huesa del Común",
"Huesca",
"Ibdes",
"Ibieca",
"Iglesuela del Cid (La)",
"Igriés",
"Ilche",
"Illueca",
"Isábena",
"Isuerre",
"Jabaloyas",
"Jaca",
"Jaraba",
"Jarque",
"Jarque de la Val",
"Jasa",
"Jatiel",
"Jaulín",
"Jorcas",
"Josa",
"Joyosa (La)",
"Labuerda",
"Lagata",
"Lagueruela",
"Laluenga",
"Lalueza",
"Lanaja",
"Langa del Castillo",
"Lanzuela",
"Laperdiguera",
"Lascellas-Ponzano",
"Lascuarre",
"Laspaúles",
"Laspuña",
"Layana",
"Lécera",
"Lechón",
"Leciñena",
"Letux",
"Libros",
"Lidón",
"Linares de Mora",
"Litago",
"Lituénigo",
"Lledó",
"Loarre",
"Lobera de Onsella",
"Longares",
"Longás",
"Loporzano",
"Loscorrales",
"Loscos",
"Lucena de Jalón",
"Luceni",
"Luesia",
"Luesma",
"Lumpiaque",
"Luna",
"Lupiñén-Ortilla",
"Maella",
"Magallón",
"Maicas",
"Mainar",
"Malanquilla",
"Maleján",
"Mallén",
"Malón",
"Maluenda",
"Manchones",
"Manzanera",
"Mara",
"María de Huerva",
"Marracos",
"Martín del Río",
"Mas de las Matas",
"Mata de los Olmos (La)",
"Mazaleón",
"Mediana de Aragón",
"Mequinenza",
"Mesones de Isuela",
"Mezalocha",
"Mezquita de Jarque",
"Mianos",
"Miedes de Aragón",
"Mirambel",
"Miravete de la Sierra",
"Molinos",
"Monegrillo",
"Monesma y Cajigar",
"Moneva",
"Monflorite-Lascasas",
"Monforte de Moyuela",
"Monreal de Ariza",
"Monreal del Campo",
"Monroyo",
"Montalbán",
"Montanuy",
"Monteagudo del Castillo",
"Monterde",
"Monterde de Albarracín",
"Montón",
"Monzón",
"Mora de Rubielos",
"Morata de Jalón",
"Morata de Jiloca",
"Morés",
"Moros",
"Moscardón",
"Mosqueruela",
"Moyuela",
"Mozota",
"Muel",
"Muela (La)",
"Munébrega",
"Muniesa",
"Murero",
"Murillo de Gállego",
"Naval",
"Navardún",
"Nigüella",
"Noguera de Albarracín",
"Nogueras",
"Nogueruelas",
"Nombrevilla",
"Nonaspe",
"Novales",
"Novallas",
"Novillas",
"Nueno",
"Nuévalos",
"Nuez de Ebro",
"Obón",
"Odón",
"Ojos Negros",
"Olba",
"Oliete",
"Olmos (Los)",
"Olvena",
"Olvés",
"Ontiñena",
"Orcajo",
"Orera",
"Orés",
"Orihuela del Tremedal",
"Orrios",
"Oseja",
"Osera de Ebro",
"Osso de Cinca",
"Palo",
"Palomar de Arroyos",
"Pancrudo",
"Paniza",
"Panticosa",
"Paracuellos de Jiloca",
"Paracuellos de la Ribera",
"Parras de Castellote (Las)",
"Pastriz",
"Pedrola",
"Pedrosas (Las)",
"Peñalba",
"Peñarroya de Tastavins",
"Peñas de Riglos (Las)",
"Peracense",
"Peralejos",
"Perales del Alfambra",
"Peralta de Alcofea",
"Peralta de Calasanz",
"Peraltilla",
"Perarrúa",
"Perdiguera",
"Pertusa",
"Piedratajada",
"Pina de Ebro",
"Pinseque",
"Pintanos (Los)",
"Piracés",
"Pitarque",
"Plan",
"Plasencia de Jalón",
"Pleitas",
"Plenas",
"Plou",
"Pobo (El)",
"Poleñino",
"Pomer",
"Portellada (La)",
"Pozán de Vero",
"Pozondón",
"Pozuel de Ariza",
"Pozuel del Campo",
"Pozuelo de Aragón",
"Pradilla de Ebro",
"Puebla de Albortón",
"Puebla de Alfindén (La)",
"Puebla de Castro (La)",
"Puebla de Híjar (La)",
"Puebla de Valverde (La)",
"Puendeluna",
"Puente de Montañana",
"Puente la Reina de Jaca",
"Puértolas",
"Puertomingalvo",
"Pueyo de Araguás (El)",
"Pueyo de Santa Cruz",
"Purujosa",
"Quicena",
"Quinto",
"Ráfales",
"Remolinos",
"Retascón",
"Ricla",
"Rillo",
"Riodeva",
"Robres",
"Ródenas",
"Romanos",
"Royuela",
"Rubiales",
"Rubielos de la Cérida",
"Rubielos de Mora",
"Rueda de Jalón",
"Ruesca",
"Sabiñánigo",
"Sádaba",
"Sahún",
"Salas Altas",
"Salas Bajas",
"Salcedillo",
"Saldón",
"Salillas",
"Salillas de Jalón",
"Sallent de Gállego",
"Salvatierra de Esca",
"Samper de Calanda",
"Samper del Salz",
"San Agustín",
"San Esteban de Litera",
"San Juan de Plan",
"San Martín de la Virgen de Moncayo",
"San Martín del Río",
"San Mateo de Gállego",
"San Miguel del Cinca",
"Sangarrén",
"Santa Cilia",
"Santa Cruz de Grío",
"Santa Cruz de la Serós",
"Santa Cruz de Moncayo",
"Santa Cruz de Nogueras",
"Santa Eulalia",
"Santa Eulalia de Gállego",
"Santa María de Dulcis",
"Santaliestra y San Quílez",
"Santed",
"Sariñena",
"Sarrión",
"Sástago",
"Saviñán",
"Secastilla",
"Sediles",
"Segura de los Baños",
"Seira",
"Sena",
"Senés de Alcubierre",
"Seno",
"Sesa",
"Sestrica",
"Sesué",
"Sierra de Luna",
"Siétamo",
"Sigüés",
"Singra",
"Sisamón",
"Sobradiel",
"Sopeira",
"Sos del Rey Católico",
"Sotonera (La)",
"Tabuenca",
"Talamantes",
"Tamarite de Litera",
"Tarazona",
"Tardienta",
"Tauste",
"Tella-Sin",
"Terrer",
"Terriente",
"Teruel",
"Tierga",
"Tierz",
"Tobed",
"Tolva",
"Toril y Masegoso",
"Torla-Ordesa",
"Tormón",
"Tornos",
"Torralba de Aragón",
"Torralba de los Frailes",
"Torralba de los Sisones",
"Torralba de Ribota",
"Torralbilla",
"Torre de Arcas",
"Torre de las Arcas",
"Torre del Compte",
"Torre la Ribera",
"Torre los Negros",
"Torrecilla de Alcañiz",
"Torrecilla del Rebollar",
"Torrehermosa",
"Torrelacárcel",
"Torrelapaja",
"Torrellas",
"Torremocha de Jiloca",
"Torrente de Cinca",
"Torres de Albarracín",
"Torres de Alcanadre",
"Torres de Barbués",
"Torres de Berrellén",
"Torrevelilla",
"Torrijas",
"Torrijo de la Cañada",
"Torrijo del Campo",
"Tosos",
"Tramacastiel",
"Tramacastilla",
"Tramaced",
"Trasmoz",
"Trasobares",
"Tronchón",
"Uncastillo",
"Undués de Lerda",
"Urrea de Gaén",
"Urrea de Jalón",
"Urriés",
"Used",
"Utebo",
"Utrillas",
"Val de San Martín",
"Valacloche",
"Valbona",
"Valdealgorfa",
"Valdecuenca",
"Valdehorna",
"Valdelinares",
"Valdeltormo",
"Valderrobres",
"Valfarta",
"Valjunquera",
"Valle de Bardají",
"Valle de Hecho",
"Valle de Lierp",
"Vallecillo (El)",
"Valmadrid",
"Valpalmas",
"Valtorres",
"Veguillas de la Sierra",
"Velilla de Cinca",
"Velilla de Ebro",
"Velilla de Jiloca",
"Vencillón",
"Vera de Moncayo",
"Viacamp y Litera",
"Vicién",
"Vierlas",
"Villadoz",
"Villafeliche",
"Villafranca de Ebro",
"Villafranca del Campo",
"Villahermosa del Campo",
"Villalba de Perejil",
"Villalengua",
"Villamayor de Gállego",
"Villanova",
"Villanúa",
"Villanueva de Gállego",
"Villanueva de Huerva",
"Villanueva de Jiloca",
"Villanueva de Sigena",
"Villanueva del Rebollar de la Sierra",
"Villar de los Navarros",
"Villar del Cobo",
"Villar del Salz",
"Villarluengo",
"Villarquemado",
"Villarreal de Huerva",
"Villarroya de la Sierra",
"Villarroya de los Pinares",
"Villarroya del Campo",
"Villastar",
"Villel",
"Vilueña (La)",
"Vinaceite",
"Visiedo",
"Vistabella",
"Vivel del Río Martín",
"Yebra de Basa",
"Yésero",
"Zaida (La)",
"Zaidín",
"Zaragoza",
"Zoma (La)",
"Zuera"];

var municipios_x_comarca = new Array();
municipios_x_comarca["01"] =["La Jacetania"];
municipios_x_comarca["02"] =["Alto Gállego"];
municipios_x_comarca["03"] =["Sobrarbe"];
municipios_x_comarca["04"] =["La Ribagorza"];
municipios_x_comarca["05"] =["Cinco Villas"];
municipios_x_comarca["06"] =["Hoya de Huesca/Plana de Uesca"];
municipios_x_comarca["07"] =["Somontano de Barbastro"];
municipios_x_comarca["08"] =["Cinca Medio"];
municipios_x_comarca["09"] =["La Litera/La Llitera"];
municipios_x_comarca["10"] =["Los Monegros"];
municipios_x_comarca["11"] =["Bajo Cinca/Baix Cinca"];
municipios_x_comarca["12"] =["Tarazona y el Moncayo"];
municipios_x_comarca["13"] =["Campo de Borja"];
municipios_x_comarca["14"] =["Aranda"];
municipios_x_comarca["15"] =["Ribera Alta del Ebro"];
municipios_x_comarca["16"] =["Valdejalón"];
municipios_x_comarca["17"] =["D.C. Zaragoza"];
municipios_x_comarca["18"] =["Ribera Baja del Ebro"];
municipios_x_comarca["19"] =["Bajo Aragón-Caspe/ Baix Aragó-Casp"];
municipios_x_comarca["20"] =["Comunidad de Calatayud"];
municipios_x_comarca["21"] =["Campo de Cariñena"];
municipios_x_comarca["22"] =["Campo de Belchite"];
municipios_x_comarca["23"] =["Bajo Martín"];
municipios_x_comarca["24"] =["Campo de Daroca"];
municipios_x_comarca["25"] =["Jiloca"];
municipios_x_comarca["26"] =["Cuencas Mineras"];
municipios_x_comarca["27"] =["Andorra-Sierra de Arcos"];
municipios_x_comarca["28"] =["Bajo Aragón"];
municipios_x_comarca["29"] =["Comunidad de Teruel"];
municipios_x_comarca["30"] =["Maestrazgo"];
municipios_x_comarca["31"] =["Sierra de Albarracín"];
municipios_x_comarca["32"] =["Gúdar-Javalambre"];
municipios_x_comarca["33"] =["Matarraña/Matarranya"];



municipios_x_comarca["07"].push("Abiego");
municipios_x_comarca["03"].push("Abizanda");
municipios_x_comarca["07"].push("Adahuesca");
municipios_x_comarca["06"].push("Agüero");
municipios_x_comarca["01"].push("Aísa");
municipios_x_comarca["08"].push("Albalate de Cinca");
municipios_x_comarca["10"].push("Albalatillo");
municipios_x_comarca["09"].push("Albelda");
municipios_x_comarca["06"].push("Albero Alto");
municipios_x_comarca["10"].push("Albero Bajo");
municipios_x_comarca["10"].push("Alberuela de Tubo");
municipios_x_comarca["06"].push("Alcalá de Gurrea");
municipios_x_comarca["06"].push("Alcalá del Obispo");
municipios_x_comarca["09"].push("Alcampell");
municipios_x_comarca["08"].push("Alcolea de Cinca");
municipios_x_comarca["10"].push("Alcubierre");
municipios_x_comarca["06"].push("Alerre");
municipios_x_comarca["08"].push("Alfántega");
municipios_x_comarca["06"].push("Almudévar");
municipios_x_comarca["08"].push("Almunia de San Juan");
municipios_x_comarca["10"].push("Almuniente");
municipios_x_comarca["07"].push("Alquézar");
municipios_x_comarca["09"].push("Altorricón");
municipios_x_comarca["06"].push("Angüés");
municipios_x_comarca["01"].push("Ansó");
municipios_x_comarca["06"].push("Antillón");
municipios_x_comarca["01"].push("Aragüés del Puerto");
municipios_x_comarca["04"].push("Arén");
municipios_x_comarca["06"].push("Argavieso");
municipios_x_comarca["06"].push("Arguis");
municipios_x_comarca["06"].push("Ayerbe");
municipios_x_comarca["09"].push("Azanuy-Alins");
municipios_x_comarca["07"].push("Azara");
municipios_x_comarca["07"].push("Azlor");
municipios_x_comarca["09"].push("Baells");
municipios_x_comarca["01"].push("Bailo");
municipios_x_comarca["09"].push("Baldellou");
municipios_x_comarca["11"].push("Ballobar");
municipios_x_comarca["06"].push("Banastás");
municipios_x_comarca["07"].push("Barbastro");
municipios_x_comarca["10"].push("Barbués");
municipios_x_comarca["07"].push("Barbuñales");
municipios_x_comarca["03"].push("Bárcabo");
municipios_x_comarca["11"].push("Belver de Cinca");
municipios_x_comarca["04"].push("Benabarre");
municipios_x_comarca["04"].push("Benasque");
municipios_x_comarca["07"].push("Berbegal");
municipios_x_comarca["03"].push("Bielsa");
municipios_x_comarca["07"].push("Bierge");
municipios_x_comarca["02"].push("Biescas");
municipios_x_comarca["08"].push("Binaced");
municipios_x_comarca["09"].push("Binéfar");
municipios_x_comarca["04"].push("Bisaurri");
municipios_x_comarca["06"].push("Biscarrués");
municipios_x_comarca["06"].push("Blecua y Torres");
municipios_x_comarca["03"].push("Boltaña");
municipios_x_comarca["04"].push("Bonansa");
municipios_x_comarca["01"].push("Borau");
municipios_x_comarca["03"].push("Broto");
municipios_x_comarca["02"].push("Caldearenas");
municipios_x_comarca["04"].push("Campo");
municipios_x_comarca["09"].push("Camporrells");
municipios_x_comarca["01"].push("Canal de Berdún");
municipios_x_comarca["11"].push("Candasnos");
municipios_x_comarca["01"].push("Canfranc");
municipios_x_comarca["10"].push("Capdesaso");
municipios_x_comarca["04"].push("Capella");
municipios_x_comarca["06"].push("Casbas de Huesca");
municipios_x_comarca["07"].push("Castejón del Puente");
municipios_x_comarca["10"].push("Castejón de Monegros");
municipios_x_comarca["04"].push("Castejón de Sos");
municipios_x_comarca["10"].push("Castelflorite");
municipios_x_comarca["01"].push("Castiello de Jaca");
municipios_x_comarca["04"].push("Castigaleu");
municipios_x_comarca["07"].push("Castillazuelo");
municipios_x_comarca["09"].push("Castillonroy");
municipios_x_comarca["07"].push("Colungo");
municipios_x_comarca["11"].push("Chalamera");
municipios_x_comarca["04"].push("Chía");
municipios_x_comarca["06"].push("Chimillas");
municipios_x_comarca["09"].push("Esplús");
municipios_x_comarca["07"].push("Estada");
municipios_x_comarca["07"].push("Estadilla");
municipios_x_comarca["04"].push("Estopiñán del Castillo");
municipios_x_comarca["01"].push("Fago");
municipios_x_comarca["03"].push("Fanlo");
municipios_x_comarca["03"].push("Fiscal");
municipios_x_comarca["08"].push("Fonz");
municipios_x_comarca["04"].push("Foradada del Toscar");
municipios_x_comarca["11"].push("Fraga");
municipios_x_comarca["03"].push("Fueva (La)");
municipios_x_comarca["03"].push("Gistaín");
municipios_x_comarca["07"].push("Grado (El)");
municipios_x_comarca["10"].push("Grañén");
municipios_x_comarca["04"].push("Graus");
municipios_x_comarca["06"].push("Gurrea de Gállego");
municipios_x_comarca["02"].push("Hoz de Jaca");
municipios_x_comarca["10"].push("Huerto");
municipios_x_comarca["06"].push("Huesca");
municipios_x_comarca["06"].push("Ibieca");
municipios_x_comarca["06"].push("Igriés");
municipios_x_comarca["07"].push("Ilche");
municipios_x_comarca["04"].push("Isábena");
municipios_x_comarca["01"].push("Jaca");
municipios_x_comarca["01"].push("Jasa");
municipios_x_comarca["03"].push("Labuerda");
municipios_x_comarca["07"].push("Laluenga");
municipios_x_comarca["10"].push("Lalueza");
municipios_x_comarca["10"].push("Lanaja");
municipios_x_comarca["07"].push("Laperdiguera");
municipios_x_comarca["07"].push("Lascellas-Ponzano");
municipios_x_comarca["04"].push("Lascuarre");
municipios_x_comarca["04"].push("Laspaúles");
municipios_x_comarca["03"].push("Laspuña");
municipios_x_comarca["06"].push("Loarre");
municipios_x_comarca["06"].push("Loporzano");
municipios_x_comarca["06"].push("Loscorrales");
municipios_x_comarca["04"].push("Monesma y Cajigar");
municipios_x_comarca["06"].push("Monflorite-Lascasas");
municipios_x_comarca["04"].push("Montanuy");
municipios_x_comarca["08"].push("Monzón");
municipios_x_comarca["07"].push("Naval");
municipios_x_comarca["06"].push("Novales");
municipios_x_comarca["06"].push("Nueno");
municipios_x_comarca["07"].push("Olvena");
municipios_x_comarca["11"].push("Ontiñena");
municipios_x_comarca["11"].push("Osso de Cinca");
municipios_x_comarca["03"].push("Palo");
municipios_x_comarca["02"].push("Panticosa");
municipios_x_comarca["10"].push("Peñalba");
municipios_x_comarca["06"].push("Peñas de Riglos (Las)");
municipios_x_comarca["07"].push("Peralta de Alcofea");
municipios_x_comarca["09"].push("Peralta de Calasanz");
municipios_x_comarca["07"].push("Peraltilla");
municipios_x_comarca["04"].push("Perarrúa");
municipios_x_comarca["06"].push("Pertusa");
municipios_x_comarca["06"].push("Piracés");
municipios_x_comarca["03"].push("Plan");
municipios_x_comarca["10"].push("Poleñino");
municipios_x_comarca["07"].push("Pozán de Vero");
municipios_x_comarca["04"].push("Puebla de Castro (La)");
municipios_x_comarca["04"].push("Puente de Montañana");
municipios_x_comarca["03"].push("Puértolas");
municipios_x_comarca["03"].push("Pueyo de Araguás (El)");
municipios_x_comarca["08"].push("Pueyo de Santa Cruz");
municipios_x_comarca["06"].push("Quicena");
municipios_x_comarca["10"].push("Robres");
municipios_x_comarca["02"].push("Sabiñánigo");
municipios_x_comarca["04"].push("Sahún");
municipios_x_comarca["07"].push("Salas Altas");
municipios_x_comarca["07"].push("Salas Bajas");
municipios_x_comarca["06"].push("Salillas");
municipios_x_comarca["02"].push("Sallent de Gállego");
municipios_x_comarca["09"].push("San Esteban de Litera");
municipios_x_comarca["10"].push("Sangarrén");
municipios_x_comarca["03"].push("San Juan de Plan");
municipios_x_comarca["01"].push("Santa Cilia");
municipios_x_comarca["01"].push("Santa Cruz de la Serós");
municipios_x_comarca["04"].push("Santaliestra y San Quílez");
municipios_x_comarca["10"].push("Sariñena");
municipios_x_comarca["04"].push("Secastilla");
municipios_x_comarca["04"].push("Seira");
municipios_x_comarca["10"].push("Sena");
municipios_x_comarca["10"].push("Senés de Alcubierre");
municipios_x_comarca["06"].push("Sesa");
municipios_x_comarca["04"].push("Sesué");
municipios_x_comarca["06"].push("Siétamo");
municipios_x_comarca["04"].push("Sopeira");
municipios_x_comarca["09"].push("Tamarite de Litera");
municipios_x_comarca["10"].push("Tardienta");
municipios_x_comarca["03"].push("Tella-Sin");
municipios_x_comarca["06"].push("Tierz");
municipios_x_comarca["04"].push("Tolva");
municipios_x_comarca["03"].push("Torla-Ordesa");
municipios_x_comarca["10"].push("Torralba de Aragón");
municipios_x_comarca["04"].push("Torre la Ribera");
municipios_x_comarca["11"].push("Torrente de Cinca");
municipios_x_comarca["07"].push("Torres de Alcanadre");
municipios_x_comarca["10"].push("Torres de Barbués");
municipios_x_comarca["06"].push("Tramaced");
municipios_x_comarca["10"].push("Valfarta");
municipios_x_comarca["04"].push("Valle de Bardají");
municipios_x_comarca["04"].push("Valle de Lierp");
municipios_x_comarca["11"].push("Velilla de Cinca");
municipios_x_comarca["04"].push("Veracruz");
municipios_x_comarca["04"].push("Viacamp y Litera");
municipios_x_comarca["06"].push("Vicién");
municipios_x_comarca["04"].push("Villanova");
municipios_x_comarca["01"].push("Villanúa");
municipios_x_comarca["10"].push("Villanueva de Sigena");
municipios_x_comarca["02"].push("Yebra de Basa");
municipios_x_comarca["02"].push("Yésero");
municipios_x_comarca["11"].push("Zaidín");
municipios_x_comarca["01"].push("Valle de Hecho");
municipios_x_comarca["01"].push("Puente la Reina de Jaca");
municipios_x_comarca["08"].push("San Miguel del Cinca");
municipios_x_comarca["06"].push("Sotonera (La)");
municipios_x_comarca["06"].push("Lupiñén-Ortilla");
municipios_x_comarca["07"].push("Santa María de Dulcis");
municipios_x_comarca["03"].push("Aínsa-Sobrarbe");
municipios_x_comarca["07"].push("Hoz y Costeán");
municipios_x_comarca["09"].push("Vencillón");
municipios_x_comarca["29"].push("Ababuj");
municipios_x_comarca["32"].push("Abejuela");
municipios_x_comarca["29"].push("Aguatón");
municipios_x_comarca["28"].push("Aguaviva");
municipios_x_comarca["29"].push("Aguilar del Alfambra");
municipios_x_comarca["27"].push("Alacón");
municipios_x_comarca["29"].push("Alba");
municipios_x_comarca["23"].push("Albalate del Arzobispo");
municipios_x_comarca["31"].push("Albarracín");
municipios_x_comarca["32"].push("Albentosa");
municipios_x_comarca["26"].push("Alcaine");
municipios_x_comarca["32"].push("Alcalá de la Selva");
municipios_x_comarca["28"].push("Alcañiz");
municipios_x_comarca["28"].push("Alcorisa");
municipios_x_comarca["29"].push("Alfambra");
municipios_x_comarca["26"].push("Aliaga");
municipios_x_comarca["29"].push("Almohaja");
municipios_x_comarca["29"].push("Alobras");
municipios_x_comarca["29"].push("Alpeñés");
municipios_x_comarca["30"].push("Allepuz");
municipios_x_comarca["27"].push("Alloza");
municipios_x_comarca["25"].push("Allueva");
municipios_x_comarca["26"].push("Anadón");
municipios_x_comarca["27"].push("Andorra");
municipios_x_comarca["32"].push("Arcos de las Salinas");
municipios_x_comarca["33"].push("Arens de Lledó");
municipios_x_comarca["29"].push("Argente");
municipios_x_comarca["27"].push("Ariño");
municipios_x_comarca["23"].push("Azaila");
municipios_x_comarca["25"].push("Bádenas");
municipios_x_comarca["25"].push("Báguena");
municipios_x_comarca["25"].push("Bañón");
municipios_x_comarca["25"].push("Barrachina");
municipios_x_comarca["25"].push("Bea");
municipios_x_comarca["33"].push("Beceite");
municipios_x_comarca["28"].push("Belmonte de San José");
municipios_x_comarca["25"].push("Bello");
municipios_x_comarca["28"].push("Berge");
municipios_x_comarca["31"].push("Bezas");
municipios_x_comarca["25"].push("Blancas");
municipios_x_comarca["26"].push("Blesa");
municipios_x_comarca["30"].push("Bordón");
municipios_x_comarca["31"].push("Bronchales");
municipios_x_comarca["25"].push("Bueña");
municipios_x_comarca["25"].push("Burbáguena");
municipios_x_comarca["32"].push("Cabra de Mora");
municipios_x_comarca["33"].push("Calaceite");
municipios_x_comarca["25"].push("Calamocha");
municipios_x_comarca["28"].push("Calanda");
municipios_x_comarca["31"].push("Calomarde");
municipios_x_comarca["29"].push("Camañas");
municipios_x_comarca["32"].push("Camarena de la Sierra");
municipios_x_comarca["29"].push("Camarillas");
municipios_x_comarca["25"].push("Caminreal");
municipios_x_comarca["30"].push("Cantavieja");
municipios_x_comarca["30"].push("Cañada de Benatanduz");
municipios_x_comarca["28"].push("Cañada de Verich (La)");
municipios_x_comarca["29"].push("Cañada Vellida");
municipios_x_comarca["26"].push("Cañizar del Olivar");
municipios_x_comarca["29"].push("Cascante del Río");
municipios_x_comarca["25"].push("Castejón de Tornos");
municipios_x_comarca["26"].push("Castel de Cabra");
municipios_x_comarca["23"].push("Castelnou");
municipios_x_comarca["28"].push("Castelserás");
municipios_x_comarca["32"].push("Castellar (El)");
municipios_x_comarca["30"].push("Castellote");
municipios_x_comarca["29"].push("Cedrillas");
municipios_x_comarca["29"].push("Celadas");
municipios_x_comarca["29"].push("Cella");
municipios_x_comarca["28"].push("Cerollera (La)");
municipios_x_comarca["28"].push("Codoñera (La)");
municipios_x_comarca["29"].push("Corbalán");
municipios_x_comarca["26"].push("Cortes de Aragón");
municipios_x_comarca["25"].push("Cosa");
municipios_x_comarca["33"].push("Cretas");
municipios_x_comarca["27"].push("Crivillén");
municipios_x_comarca["30"].push("Cuba (La)");
municipios_x_comarca["29"].push("Cubla");
municipios_x_comarca["25"].push("Cucalón");
municipios_x_comarca["29"].push("Cuervo (El)");
municipios_x_comarca["26"].push("Cuevas de Almudén");
municipios_x_comarca["29"].push("Cuevas Labradas");
municipios_x_comarca["27"].push("Ejulve");
municipios_x_comarca["29"].push("Escorihuela");
municipios_x_comarca["26"].push("Escucha");
municipios_x_comarca["27"].push("Estercuel");
municipios_x_comarca["25"].push("Ferreruela de Huerva");
municipios_x_comarca["25"].push("Fonfría");
municipios_x_comarca["32"].push("Formiche Alto");
municipios_x_comarca["33"].push("Fórnoles");
municipios_x_comarca["30"].push("Fortanete");
municipios_x_comarca["28"].push("Foz-Calanda");
municipios_x_comarca["33"].push("Fresneda (La)");
municipios_x_comarca["31"].push("Frías de Albarracín");
municipios_x_comarca["26"].push("Fuenferrada");
municipios_x_comarca["29"].push("Fuentes Calientes");
municipios_x_comarca["25"].push("Fuentes Claras");
municipios_x_comarca["32"].push("Fuentes de Rubielos");
municipios_x_comarca["33"].push("Fuentespalda");
municipios_x_comarca["29"].push("Galve");
municipios_x_comarca["27"].push("Gargallo");
municipios_x_comarca["31"].push("Gea de Albarracín");
municipios_x_comarca["28"].push("Ginebrosa (La)");
municipios_x_comarca["31"].push("Griegos");
municipios_x_comarca["31"].push("Guadalaviar");
municipios_x_comarca["32"].push("Gúdar");
municipios_x_comarca["23"].push("Híjar");
municipios_x_comarca["26"].push("Hinojosa de Jarque");
municipios_x_comarca["26"].push("Hoz de la Vieja (La)");
municipios_x_comarca["26"].push("Huesa del Común");
municipios_x_comarca["30"].push("Iglesuela del Cid (La)");
municipios_x_comarca["31"].push("Jabaloyas");
municipios_x_comarca["26"].push("Jarque de la Val");
municipios_x_comarca["23"].push("Jatiel");
municipios_x_comarca["29"].push("Jorcas");
municipios_x_comarca["26"].push("Josa");
municipios_x_comarca["25"].push("Lagueruela");
municipios_x_comarca["25"].push("Lanzuela");
municipios_x_comarca["29"].push("Libros");
municipios_x_comarca["29"].push("Lidón");
municipios_x_comarca["32"].push("Linares de Mora");
municipios_x_comarca["25"].push("Loscos");
municipios_x_comarca["33"].push("Lledó");
municipios_x_comarca["26"].push("Maicas");
municipios_x_comarca["32"].push("Manzanera");
municipios_x_comarca["26"].push("Martín del Río");
municipios_x_comarca["28"].push("Mas de las Matas");
municipios_x_comarca["28"].push("Mata de los Olmos (La)");
municipios_x_comarca["33"].push("Mazaleón");
municipios_x_comarca["26"].push("Mezquita de Jarque");
municipios_x_comarca["30"].push("Mirambel");
municipios_x_comarca["30"].push("Miravete de la Sierra");
municipios_x_comarca["30"].push("Molinos");
municipios_x_comarca["25"].push("Monforte de Moyuela");
municipios_x_comarca["25"].push("Monreal del Campo");
municipios_x_comarca["33"].push("Monroyo");
municipios_x_comarca["26"].push("Montalbán");
municipios_x_comarca["29"].push("Monteagudo del Castillo");
municipios_x_comarca["31"].push("Monterde de Albarracín");
municipios_x_comarca["32"].push("Mora de Rubielos");
municipios_x_comarca["31"].push("Moscardón");
municipios_x_comarca["32"].push("Mosqueruela");
municipios_x_comarca["26"].push("Muniesa");
municipios_x_comarca["31"].push("Noguera de Albarracín");
municipios_x_comarca["25"].push("Nogueras");
municipios_x_comarca["32"].push("Nogueruelas");
municipios_x_comarca["26"].push("Obón");
municipios_x_comarca["25"].push("Odón");
municipios_x_comarca["25"].push("Ojos Negros");
municipios_x_comarca["32"].push("Olba");
municipios_x_comarca["27"].push("Oliete");
municipios_x_comarca["28"].push("Olmos (Los)");
municipios_x_comarca["31"].push("Orihuela del Tremedal");
municipios_x_comarca["29"].push("Orrios");
municipios_x_comarca["26"].push("Palomar de Arroyos");
municipios_x_comarca["29"].push("Pancrudo");
municipios_x_comarca["28"].push("Parras de Castellote (Las)");
municipios_x_comarca["33"].push("Peñarroya de Tastavins");
municipios_x_comarca["25"].push("Peracense");
municipios_x_comarca["29"].push("Peralejos");
municipios_x_comarca["29"].push("Perales del Alfambra");
municipios_x_comarca["30"].push("Pitarque");
municipios_x_comarca["26"].push("Plou");
municipios_x_comarca["29"].push("Pobo (El)");
municipios_x_comarca["33"].push("Portellada (La)");
municipios_x_comarca["31"].push("Pozondón");
municipios_x_comarca["25"].push("Pozuel del Campo");
municipios_x_comarca["23"].push("Puebla de Híjar (La)");
municipios_x_comarca["32"].push("Puebla de Valverde (La)");
municipios_x_comarca["32"].push("Puertomingalvo");
municipios_x_comarca["33"].push("Ráfales");
municipios_x_comarca["29"].push("Rillo");
municipios_x_comarca["29"].push("Riodeva");
municipios_x_comarca["31"].push("Ródenas");
municipios_x_comarca["31"].push("Royuela");
municipios_x_comarca["31"].push("Rubiales");
municipios_x_comarca["25"].push("Rubielos de la Cérida");
municipios_x_comarca["32"].push("Rubielos de Mora");
municipios_x_comarca["26"].push("Salcedillo");
municipios_x_comarca["31"].push("Saldón");
municipios_x_comarca["23"].push("Samper de Calanda");
municipios_x_comarca["32"].push("San Agustín");
municipios_x_comarca["25"].push("San Martín del Río");
municipios_x_comarca["25"].push("Santa Cruz de Nogueras");
municipios_x_comarca["29"].push("Santa Eulalia");
municipios_x_comarca["32"].push("Sarrión");
municipios_x_comarca["26"].push("Segura de los Baños");
municipios_x_comarca["28"].push("Seno");
municipios_x_comarca["25"].push("Singra");
municipios_x_comarca["31"].push("Terriente");
municipios_x_comarca["29"].push("Teruel");
municipios_x_comarca["31"].push("Toril y Masegoso");
municipios_x_comarca["29"].push("Tormón");
municipios_x_comarca["25"].push("Tornos");
municipios_x_comarca["25"].push("Torralba de los Sisones");
municipios_x_comarca["28"].push("Torrecilla de Alcañiz");
municipios_x_comarca["25"].push("Torrecilla del Rebollar");
municipios_x_comarca["33"].push("Torre de Arcas");
municipios_x_comarca["26"].push("Torre de las Arcas");
municipios_x_comarca["33"].push("Torre del Compte");
municipios_x_comarca["29"].push("Torrelacárcel");
municipios_x_comarca["25"].push("Torre los Negros");
municipios_x_comarca["29"].push("Torremocha de Jiloca");
municipios_x_comarca["31"].push("Torres de Albarracín");
municipios_x_comarca["28"].push("Torrevelilla");
municipios_x_comarca["32"].push("Torrijas");
municipios_x_comarca["25"].push("Torrijo del Campo");
municipios_x_comarca["29"].push("Tramacastiel");
municipios_x_comarca["31"].push("Tramacastilla");
municipios_x_comarca["30"].push("Tronchón");
municipios_x_comarca["23"].push("Urrea de Gaén");
municipios_x_comarca["26"].push("Utrillas");
municipios_x_comarca["29"].push("Valacloche");
municipios_x_comarca["32"].push("Valbona");
municipios_x_comarca["28"].push("Valdealgorfa");
municipios_x_comarca["31"].push("Valdecuenca");
municipios_x_comarca["32"].push("Valdelinares");
municipios_x_comarca["33"].push("Valdeltormo");
municipios_x_comarca["33"].push("Valderrobres");
municipios_x_comarca["33"].push("Valjunquera");
municipios_x_comarca["31"].push("Vallecillo (El)");
municipios_x_comarca["29"].push("Veguillas de la Sierra");
municipios_x_comarca["25"].push("Villafranca del Campo");
municipios_x_comarca["25"].push("Villahermosa del Campo");
municipios_x_comarca["26"].push("Villanueva del Rebollar de la Sierra");
municipios_x_comarca["31"].push("Villar del Cobo");
municipios_x_comarca["25"].push("Villar del Salz");
municipios_x_comarca["30"].push("Villarluengo");
municipios_x_comarca["29"].push("Villarquemado");
municipios_x_comarca["30"].push("Villarroya de los Pinares");
municipios_x_comarca["29"].push("Villastar");
municipios_x_comarca["29"].push("Villel");
municipios_x_comarca["23"].push("Vinaceite");
municipios_x_comarca["29"].push("Visiedo");
municipios_x_comarca["26"].push("Vivel del Río Martín");
municipios_x_comarca["26"].push("Zoma (La)");
municipios_x_comarca["20"].push("Abanto");
municipios_x_comarca["24"].push("Acered");
municipios_x_comarca["13"].push("Agón");
municipios_x_comarca["21"].push("Aguarón");
municipios_x_comarca["21"].push("Aguilón");
municipios_x_comarca["13"].push("Ainzón");
municipios_x_comarca["21"].push("Aladrén");
municipios_x_comarca["15"].push("Alagón");
municipios_x_comarca["20"].push("Alarba");
municipios_x_comarca["13"].push("Alberite de San Juan");
municipios_x_comarca["13"].push("Albeta");
municipios_x_comarca["18"].push("Alborge");
municipios_x_comarca["15"].push("Alcalá de Ebro");
municipios_x_comarca["12"].push("Alcalá de Moncayo");
municipios_x_comarca["20"].push("Alconchel de Ariza");
municipios_x_comarca["24"].push("Aldehuela de Liestos");
municipios_x_comarca["17"].push("Alfajarín");
municipios_x_comarca["21"].push("Alfamén");
municipios_x_comarca["18"].push("Alforque");
municipios_x_comarca["20"].push("Alhama de Aragón");
municipios_x_comarca["22"].push("Almochuel");
municipios_x_comarca["10"].push("Almolda (La)");
municipios_x_comarca["22"].push("Almonacid de la Cuba");
municipios_x_comarca["16"].push("Almonacid de la Sierra");
municipios_x_comarca["16"].push("Almunia de Doña Godina (La)");
municipios_x_comarca["16"].push("Alpartir");
municipios_x_comarca["13"].push("Ambel");
municipios_x_comarca["24"].push("Anento");
municipios_x_comarca["20"].push("Aniñón");
municipios_x_comarca["12"].push("Añón de Moncayo");
municipios_x_comarca["14"].push("Aranda de Moncayo");
municipios_x_comarca["20"].push("Arándiga");
municipios_x_comarca["05"].push("Ardisa");
municipios_x_comarca["20"].push("Ariza");
municipios_x_comarca["01"].push("Artieda");
municipios_x_comarca["05"].push("Asín");
municipios_x_comarca["24"].push("Atea");
municipios_x_comarca["20"].push("Ateca");
municipios_x_comarca["22"].push("Azuara");
municipios_x_comarca["24"].push("Badules");
municipios_x_comarca["05"].push("Bagüés");
municipios_x_comarca["24"].push("Balconchán");
municipios_x_comarca["15"].push("Bárboles");
municipios_x_comarca["16"].push("Bardallur");
municipios_x_comarca["22"].push("Belchite");
municipios_x_comarca["20"].push("Belmonte de Gracián");
municipios_x_comarca["20"].push("Berdejo");
municipios_x_comarca["24"].push("Berrueco");
municipios_x_comarca["20"].push("Bijuesca");
municipios_x_comarca["05"].push("Biota");
municipios_x_comarca["13"].push("Bisimbre");
municipios_x_comarca["15"].push("Boquiñeni");
municipios_x_comarca["20"].push("Bordalba");
municipios_x_comarca["13"].push("Borja");
municipios_x_comarca["17"].push("Botorrita");
municipios_x_comarca["14"].push("Brea de Aragón");
municipios_x_comarca["20"].push("Bubierca");
municipios_x_comarca["10"].push("Bujaraloz");
municipios_x_comarca["13"].push("Bulbuente");
municipios_x_comarca["13"].push("Bureta");
municipios_x_comarca["17"].push("Burgo de Ebro (El)");
municipios_x_comarca["12"].push("Buste (El)");
municipios_x_comarca["15"].push("Cabañas de Ebro");
municipios_x_comarca["20"].push("Cabolafuente");
municipios_x_comarca["17"].push("Cadrete");
municipios_x_comarca["20"].push("Calatayud");
municipios_x_comarca["16"].push("Calatorao");
municipios_x_comarca["14"].push("Calcena");
municipios_x_comarca["20"].push("Calmarza");
municipios_x_comarca["20"].push("Campillo de Aragón");
municipios_x_comarca["20"].push("Carenas");
municipios_x_comarca["21"].push("Cariñena");
municipios_x_comarca["19"].push("Caspe");
municipios_x_comarca["20"].push("Castejón de Alarba");
municipios_x_comarca["20"].push("Castejón de las Armas");
municipios_x_comarca["05"].push("Castejón de Valdejasa");
municipios_x_comarca["05"].push("Castiliscar");
municipios_x_comarca["20"].push("Cervera de la Cañada");
municipios_x_comarca["24"].push("Cerveruela");
municipios_x_comarca["20"].push("Cetina");
municipios_x_comarca["20"].push("Cimballa");
municipios_x_comarca["18"].push("Cinco Olivas");
municipios_x_comarca["20"].push("Clarés de Ribota");
municipios_x_comarca["22"].push("Codo");
municipios_x_comarca["20"].push("Codos");
municipios_x_comarca["20"].push("Contamina");
municipios_x_comarca["21"].push("Cosuenda");
municipios_x_comarca["17"].push("Cuarte de Huerva");
municipios_x_comarca["24"].push("Cubel");
municipios_x_comarca["24"].push("Cuerlas (Las)");
municipios_x_comarca["19"].push("Chiprana");
municipios_x_comarca["16"].push("Chodes");
municipios_x_comarca["24"].push("Daroca");
municipios_x_comarca["05"].push("Ejea de los Caballeros");
municipios_x_comarca["20"].push("Embid de Ariza");
municipios_x_comarca["21"].push("Encinacorba");
municipios_x_comarca["16"].push("Épila");
municipios_x_comarca["05"].push("Erla");
municipios_x_comarca["18"].push("Escatrón");
municipios_x_comarca["19"].push("Fabara");
municipios_x_comarca["10"].push("Farlete");
municipios_x_comarca["19"].push("Fayón");
municipios_x_comarca["12"].push("Fayos (Los)");
municipios_x_comarca["15"].push("Figueruelas");
municipios_x_comarca["24"].push("Fombuena");
municipios_x_comarca["05"].push("Frago (El)");
municipios_x_comarca["20"].push("Frasno (El)");
municipios_x_comarca["13"].push("Fréscano");
municipios_x_comarca["13"].push("Fuendejalón");
municipios_x_comarca["22"].push("Fuendetodos");
municipios_x_comarca["17"].push("Fuentes de Ebro");
municipios_x_comarca["20"].push("Fuentes de Jiloca");
municipios_x_comarca["24"].push("Gallocanta");
municipios_x_comarca["15"].push("Gallur");
municipios_x_comarca["18"].push("Gelsa");
municipios_x_comarca["20"].push("Godojos");
municipios_x_comarca["14"].push("Gotor");
municipios_x_comarca["12"].push("Grisel");
municipios_x_comarca["15"].push("Grisén");
municipios_x_comarca["24"].push("Herrera de los Navarros");
municipios_x_comarca["20"].push("Ibdes");
municipios_x_comarca["14"].push("Illueca");
municipios_x_comarca["05"].push("Isuerre");
municipios_x_comarca["20"].push("Jaraba");
municipios_x_comarca["14"].push("Jarque");
municipios_x_comarca["17"].push("Jaulín");
municipios_x_comarca["15"].push("Joyosa (La)");
municipios_x_comarca["22"].push("Lagata");
municipios_x_comarca["24"].push("Langa del Castillo");
municipios_x_comarca["05"].push("Layana");
municipios_x_comarca["22"].push("Lécera");
municipios_x_comarca["10"].push("Leciñena");
municipios_x_comarca["24"].push("Lechón");
municipios_x_comarca["22"].push("Letux");
municipios_x_comarca["12"].push("Litago");
municipios_x_comarca["12"].push("Lituénigo");
municipios_x_comarca["05"].push("Lobera de Onsella");
municipios_x_comarca["21"].push("Longares");
municipios_x_comarca["05"].push("Longás");
municipios_x_comarca["16"].push("Lucena de Jalón");
municipios_x_comarca["15"].push("Luceni");
municipios_x_comarca["05"].push("Luesia");
municipios_x_comarca["24"].push("Luesma");
municipios_x_comarca["16"].push("Lumpiaque");
municipios_x_comarca["05"].push("Luna");
municipios_x_comarca["19"].push("Maella");
municipios_x_comarca["13"].push("Magallón");
municipios_x_comarca["24"].push("Mainar");
municipios_x_comarca["20"].push("Malanquilla");
municipios_x_comarca["13"].push("Maleján");
municipios_x_comarca["12"].push("Malón");
municipios_x_comarca["20"].push("Maluenda");
municipios_x_comarca["13"].push("Mallén");
municipios_x_comarca["24"].push("Manchones");
municipios_x_comarca["20"].push("Mara");
municipios_x_comarca["17"].push("María de Huerva");
municipios_x_comarca["17"].push("Mediana de Aragón");
municipios_x_comarca["11"].push("Mequinenza");
municipios_x_comarca["14"].push("Mesones de Isuela");
municipios_x_comarca["21"].push("Mezalocha");
municipios_x_comarca["01"].push("Mianos");
municipios_x_comarca["20"].push("Miedes de Aragón");
municipios_x_comarca["10"].push("Monegrillo");
municipios_x_comarca["22"].push("Moneva");
municipios_x_comarca["20"].push("Monreal de Ariza");
municipios_x_comarca["20"].push("Monterde");
municipios_x_comarca["20"].push("Montón");
municipios_x_comarca["16"].push("Morata de Jalón");
municipios_x_comarca["20"].push("Morata de Jiloca");
municipios_x_comarca["20"].push("Morés");
municipios_x_comarca["20"].push("Moros");
municipios_x_comarca["22"].push("Moyuela");
municipios_x_comarca["17"].push("Mozota");
municipios_x_comarca["21"].push("Muel");
municipios_x_comarca["16"].push("Muela (La)");
municipios_x_comarca["20"].push("Munébrega");
municipios_x_comarca["24"].push("Murero");
municipios_x_comarca["06"].push("Murillo de Gállego");
municipios_x_comarca["05"].push("Navardún");
municipios_x_comarca["20"].push("Nigüella");
municipios_x_comarca["24"].push("Nombrevilla");
municipios_x_comarca["19"].push("Nonaspe");
municipios_x_comarca["12"].push("Novallas");
municipios_x_comarca["13"].push("Novillas");
municipios_x_comarca["20"].push("Nuévalos");
municipios_x_comarca["17"].push("Nuez de Ebro");
municipios_x_comarca["20"].push("Olvés");
municipios_x_comarca["24"].push("Orcajo");
municipios_x_comarca["20"].push("Orera");
municipios_x_comarca["05"].push("Orés");
municipios_x_comarca["14"].push("Oseja");
municipios_x_comarca["17"].push("Osera de Ebro");
municipios_x_comarca["21"].push("Paniza");
municipios_x_comarca["20"].push("Paracuellos de Jiloca");
municipios_x_comarca["20"].push("Paracuellos de la Ribera");
municipios_x_comarca["17"].push("Pastriz");
municipios_x_comarca["15"].push("Pedrola");
municipios_x_comarca["05"].push("Pedrosas (Las)");
municipios_x_comarca["10"].push("Perdiguera");
municipios_x_comarca["05"].push("Piedratajada");
municipios_x_comarca["18"].push("Pina de Ebro");
municipios_x_comarca["15"].push("Pinseque");
municipios_x_comarca["05"].push("Pintanos (Los)");
municipios_x_comarca["16"].push("Plasencia de Jalón");
municipios_x_comarca["15"].push("Pleitas");
municipios_x_comarca["22"].push("Plenas");
municipios_x_comarca["14"].push("Pomer");
municipios_x_comarca["20"].push("Pozuel de Ariza");
municipios_x_comarca["13"].push("Pozuelo de Aragón");
municipios_x_comarca["15"].push("Pradilla de Ebro");
municipios_x_comarca["22"].push("Puebla de Albortón");
municipios_x_comarca["17"].push("Puebla de Alfindén (La)");
municipios_x_comarca["05"].push("Puendeluna");
municipios_x_comarca["14"].push("Purujosa");
municipios_x_comarca["18"].push("Quinto");
municipios_x_comarca["15"].push("Remolinos");
municipios_x_comarca["24"].push("Retascón");
municipios_x_comarca["16"].push("Ricla");
municipios_x_comarca["24"].push("Romanos");
municipios_x_comarca["16"].push("Rueda de Jalón");
municipios_x_comarca["20"].push("Ruesca");
municipios_x_comarca["05"].push("Sádaba");
municipios_x_comarca["16"].push("Salillas de Jalón");
municipios_x_comarca["01"].push("Salvatierra de Esca");
municipios_x_comarca["22"].push("Samper del Salz");
municipios_x_comarca["12"].push("San Martín de la Virgen de Moncayo");
municipios_x_comarca["17"].push("San Mateo de Gállego");
municipios_x_comarca["16"].push("Santa Cruz de Grío");
municipios_x_comarca["12"].push("Santa Cruz de Moncayo");
municipios_x_comarca["06"].push("Santa Eulalia de Gállego");
municipios_x_comarca["24"].push("Santed");
municipios_x_comarca["18"].push("Sástago");
municipios_x_comarca["20"].push("Saviñán");
municipios_x_comarca["20"].push("Sediles");
municipios_x_comarca["14"].push("Sestrica");
municipios_x_comarca["05"].push("Sierra de Luna");
municipios_x_comarca["01"].push("Sigüés");
municipios_x_comarca["20"].push("Sisamón");
municipios_x_comarca["15"].push("Sobradiel");
municipios_x_comarca["05"].push("Sos del Rey Católico");
municipios_x_comarca["13"].push("Tabuenca");
municipios_x_comarca["13"].push("Talamantes");
municipios_x_comarca["12"].push("Tarazona");
municipios_x_comarca["05"].push("Tauste");
municipios_x_comarca["20"].push("Terrer");
municipios_x_comarca["14"].push("Tierga");
municipios_x_comarca["20"].push("Tobed");
municipios_x_comarca["24"].push("Torralba de los Frailes");
municipios_x_comarca["20"].push("Torralba de Ribota");
municipios_x_comarca["24"].push("Torralbilla");
municipios_x_comarca["20"].push("Torrehermosa");
municipios_x_comarca["20"].push("Torrelapaja");
municipios_x_comarca["12"].push("Torrellas");
municipios_x_comarca["15"].push("Torres de Berrellén");
municipios_x_comarca["20"].push("Torrijo de la Cañada");
municipios_x_comarca["21"].push("Tosos");
municipios_x_comarca["12"].push("Trasmoz");
municipios_x_comarca["14"].push("Trasobares");
municipios_x_comarca["05"].push("Uncastillo");
municipios_x_comarca["05"].push("Undués de Lerda");
municipios_x_comarca["16"].push("Urrea de Jalón");
municipios_x_comarca["05"].push("Urriés");
municipios_x_comarca["24"].push("Used");
municipios_x_comarca["17"].push("Utebo");
municipios_x_comarca["24"].push("Valdehorna");
municipios_x_comarca["24"].push("Val de San Martín");
municipios_x_comarca["22"].push("Valmadrid");
municipios_x_comarca["05"].push("Valpalmas");
municipios_x_comarca["20"].push("Valtorres");
municipios_x_comarca["18"].push("Velilla de Ebro");
municipios_x_comarca["20"].push("Velilla de Jiloca");
municipios_x_comarca["12"].push("Vera de Moncayo");
municipios_x_comarca["12"].push("Vierlas");
municipios_x_comarca["20"].push("Vilueña (La)");
municipios_x_comarca["24"].push("Villadoz");
municipios_x_comarca["20"].push("Villafeliche");
municipios_x_comarca["17"].push("Villafranca de Ebro");
municipios_x_comarca["20"].push("Villalba de Perejil");
municipios_x_comarca["20"].push("Villalengua");
municipios_x_comarca["17"].push("Villanueva de Gállego");
municipios_x_comarca["24"].push("Villanueva de Jiloca");
municipios_x_comarca["21"].push("Villanueva de Huerva");
municipios_x_comarca["24"].push("Villar de los Navarros");
municipios_x_comarca["24"].push("Villarreal de Huerva");
municipios_x_comarca["20"].push("Villarroya de la Sierra");
municipios_x_comarca["24"].push("Villarroya del Campo");
municipios_x_comarca["21"].push("Vistabella");
municipios_x_comarca["18"].push("Zaida (La)");
municipios_x_comarca["17"].push("Zaragoza");
municipios_x_comarca["17"].push("Zuera");
municipios_x_comarca["05"].push("Biel");
municipios_x_comarca["05"].push("Marracos");
municipios_x_comarca["17"].push("Villamayor de Gállego");


