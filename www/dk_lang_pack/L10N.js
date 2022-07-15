var gCatName = new Array(
    "Abort",
    "Alkohol / tobak / ulovlige stoffer",
    "Alternative tidsskrifter",
    "Blogs / onlinefora",
    "Chat / instant messaging",
    "Kriminalitet",
    "Kult / okkult",
    "E-mail",
    "Hasardspil",
    "Spil",
    "Hackervirksomhed",
    "Had / racisme / vold",
    "Homoseksualitet",
    "Indhold for voksne",
    "Mediedownloads / streaming",
    "Nyhedsgrupper",
    "Pay to Surf",
    "Peer-to-peer",
    "Personligt netværkslager/servere til fildownload",
    "Personlige hjemmesider",
    "Kontaktannoncer / dating",
    "Fotosøgning",
    "Pornografi",
    "Religion",
    "Ringetoner/downloads til mobiltelefoner",
    "Seksualundervisning",
    "Indkøb / auktioner",
    "Sociale netværk",
    "Selskabsliv / livsstil",
    "Download af software",
    "Våben",
    "Webreklamer");
	
var gThreatName = new Array(
    "LAV SIKKERHEDSSCORE",
    "PHISHING- ELLER PHARMING-SVINDEL",
    "PHISHING- ELLER PHARMING-SVINDEL");

var gThreatTitle = new Array(
    "Funktionen Sikker surfing blokerede denne hjemmeside, som har en: ",
    "Funktionen Sikker surfing blokerede denne hjemmeside, som ville kunne udsætte dig for en: ",
    "Funktionen Sikker surfing blokerede denne hjemmeside, som ville kunne udsætte dig for en: ");
	
var common = new Object();
common.hnd="Home Network Defender";
common.domsg="Hvad du kan gøre nu";
common.button1="Klik på knappen Tilbage";
common.learn="Få mere at vide";
common.url="http://us.trendmicro.com/us/partners/consumer/linksys/index.html";
common.timeblock="Denne hjemmeside er i øjeblikket blokeret pga. adgangstimere. Hvis du er Home Network Defender-kunde, konfigureres denne indstilling via Linksys Network Magic- eller Linksys Easy Link Advisor-programmet.";
common.block="Denne hjemmeside indeholder URL'er eller nøgleord, der står på listen over URL'er eller nøgleord, der skal filtreres eller blokeres. Hvis du er Home Network Defender-kunde, konfigureres denne indstilling via Linksys Network Magic- eller Linksys Easy Link Advisor-programmet.";

var pc = new Object();
pc.webblock="Hjemmesiden er blokeret";
pc.msg1="Børnesikringen blokerer hjemmesider i denne kategori:";
pc.msg2="på din webbrowser, eller luk dette vindue.";
pc.msg3="ved at indtaste korrekt e-mail-adresse og adgangskode.";
pc.msg4="E-mail-adresse:";
pc.msg5="Hvor længe skal børnesikringen tilsidesættes?";
pc.msg6="5 Min.";
pc.msg7="15 Min.";
pc.msg8="30 Min.";
pc.msg9="Adgangskode:";
pc.msg10="Giv adgang";
pc.msg11="Prøv igen";
pc.err1="Der opstod en uventet fejl i Trend Micro Home Network Defender. Genstart routeren, og prøv igen.";
pc.err2="Kunne ikke bekræfte dine oplysninger. Prøv igen.";
pc.button1="Tilsidesæt børnesikringssystemet midlertidigt";
pc.help="om børnesikringen.";

var wtp = new Object();
wtp.wtd="Der er registreret trusler fra internettet";
wtp.msg1="på din webbrowser, eller luk dette vindue.";
wtp.msg2="hvis du betragter denne hjemmeside som sikker.";
wtp.button1="Giv besked til Trend Micro";
wtp.help="om trusler fra internettet.";








