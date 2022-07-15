//Basic Setup
var hsetup = new Object();
hsetup.phase1="Sk�rmbilledet <i>Konfiguration</i> \
		er det f�rste sk�rmbillede, du f�r vist, n�r du f�r adgang til routeren. De fleste brugere  \
		kan konfigurere routeren og f� den til at fungere kun vha. \
		indstillingerne i dette sk�rmbillede. Nogle internetudbydere (ISP'er) kr�ver,  \
		at du indtaster specifikke oplysninger, s� som brugernavn, adgangskode, IP-adresse,  \
		adressen p� standardgatewayen eller DNS-IP-adresse. Du kan f� disse oplysninger  \
		fra din internetudbyder.";
hsetup.phase2="Bem�rk: Efter \
		du har konfigureret disse indstillinger, b�r du angive en ny adgangskode til routeren  \
		p� sk�rmbilledet <i>Sikkerhed</i>. Det vil �ge sikkerheden og beskytter  \
		routeren fra uautoriserede �ndringer. Alle brugere, som fors�ger at f� adgang til \
		det webbaserede hj�lpeprogram til routeren eller den guidede konfiguration, bliver bedt om at angive routerens adgangskode.";
hsetup.phase3="V�lg \
		tidszonen for det land, du befinder dig i. Hvis dit land har sommertid, \
    		skal du markere afkrydsningsfeltet ud for <i>Automatisk skift til \
    		sommertid</i>.";
hsetup.phase4="MTU st�r for  \
    		Maksimal overf�rselsenhed. Det angiver den st�rste pakkest�rrelse, der m� bruges \
    		i forbindelse med internetoverf�rsler. Behold standardindstillingen, <b>Auto</b>, hvis \
    		routeren skal v�lge den bedste MTU til din internetforbindelse. Hvis du vil angive en \
    		MTU-st�rrelse, skal du v�lge <b>Manuel</b> og indtaste den �nskede v�rdi (standard er <b> \
    		1400</b>).&nbsp; Du b�r bruge en v�rdi i intervallet 1200 til 1500.";
hsetup.phase5="Nogle internetudbydere kr�ver et dom�nenavn, som kan f�s hos dem.";
hsetup.phase6="Routeren underst�tter fire forbindelsestyper:";
hsetup.phase7="Automatisk konfiguration - DHCP.";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point-Tunnelf�ringsprotokol)";
hsetup.phase10="Disse typer kan v�lges fra rullemenuen ud for Internetforbindelse. \
    		De p�kr�vede oplysninger og tilg�ngelige funktioner varierer, \
    		afh�ngigt af hvilken type forbindelse du v�lger. Nogle beskrivelser af disse \
    		oplysninger findes her:";		
hsetup.phase11="Internet-IP-adresse og undernetmaske";
hsetup.phase12="Dette er routerens IP-adresse \
    		og undernetmaske, som det vises for eksterne brugere p� internettet (herunder din \
    		internetudbyder). Hvis din internetforbindelse kr�ver en statisk IP-adresse, \
    		f�r du en statisk IP-adresse og en undernetmaske fra din internetudbyder.";
hsetup.phase13="Din internetudbyder giver dig IP-adressen til din gateway."
hsetup.phase14="(Dom�nenavnserver)";
hsetup.phase15="Din internetudbyder giver dig mindst �n IP-adresse til din DNS.";
hsetup.phase16="Brugernavn og adgangskode";
hsetup.phase17="Indtast det <b>brugernavn</b> og den \
				<b>adgangskode</b>,  du bruger, n�r du logger p� din internetudbyder via en PPPoE- eller PPTP- \
    		forbindelse.";
hsetup.phase18="Opret forbindelse efter behov";
hsetup.phase19="Du kan konfigurere routeren, s� den \
    		afbryder internetforbindelsen efter en periode med inaktivitet \
    		(Maks. inaktiv periode). Hvis din internetforbindelse er blevet afbrudt efter en periode med inaktivitet, \
    		giver Opret forbindelse efter behov routeren mulighed for automatisk at genoprette \
   		forbindelsen, n�r du fors�ger at f� adgang til internettet \
   		igen. Hvis du vil aktivere Opret forbindelse efter behov, skal du klikke p� alternativknappen. Hvis \
    		du �nsker, at din internetforbindelse hele tiden er aktiv, skal du angive <b>0</b> \
    		i feltet <i>Maksimal inaktiv periode</i>. Ellers skal du angive det antal minutter, \
    		der skal g�, inden internetforbindelsen afbrydes.";
hsetup.phase20="Permanent ";
hsetup.phase21="Denne indstilling opretholder forbindelsen \
    		til internettet p� ubestemt tid, selv n�r forbindelsen er inaktiv. Hvis du vil bruge denne indstilling, \
    		skal du klikke p� alternativknappen <i>Permanent</i>. Standard \
    		genopkaldsperioden er 30 sekunder (routeren vil med andre ord kontrollere \
    		internetforbindelsen hver 30. sekund).";
hsetup.phase22="Bem�rk: Nogle \
    		udbydere kr�ver en specifik MAC-adresse for forbindelsen til \
    		internettet. Hvis du vil have mere at vide om dette, skal du klikke p� fanen <b>System</b>. Klik herefter p� \
    		knappen <b>Hj�lp</b>, og l�s om MAC-kopieringsfunktionen.";
hsetup.phase23="LAN";
hsetup.phase24="IP-adresse og undernetmaske";
hsetup.phase25="Dette er \
    		IP-adressen til routeren og undernetmasken, som det vises p� det interne LAN. Feltet \
    		er 192.168.1.1 for IP-adressen og 255.255.255.0 for \
    		undernetmasken.";
hsetup.phase26="DHCP";
hsetup.phase27="Behold \
    		standarden, <b>Aktiver</b> for at aktivere DHCP-serverindstillingen for routeren. Hvis du \
    		allerede har en DHCP-server p� dit netv�rk, eller du ikke vil have en DHCP-server, \
    		skal du v�lge <b>Deaktiver</b>.";
hsetup.phase28="Angiv en \
    		numerisk v�rdi, som DHCP-serveren skal starte med, n�r der tildeles IP-adresser. \
    		Start ikke med 192.168.1.1 (IP-adressen til routeren).";
hsetup.phase29="Maks. antal af DHCP-brugere";
hsetup.phase30="Angiv det \
    		maksimale antal computere, som DHCP-serveren skal tildele IP-adresser \
    		til. Maksimum er 253, hvilket er muligt, hvis 192.168.1.2 er din f�rste IP- \
    		adresse.";
hsetup.phase31="Leasingtid \
    		er den tid, som en netv�rksbruger m� opretholde forbindelse \
    		til routeren med sin nuv�rende dynamiske IP-adresse. Angiv tiden i minutter, \
    		som en bruger kan \"lease\" sig ind med denne dynamiske IP-adresse.";
hsetup.phase32="Statisk DNS 1-3 ";
hsetup.phase33="DNS \
    		(Dom�nenavneserveren) er den m�de som internettet overs�tter dom�ne- eller webstedsnavne til \
    		internetadresser eller URL-adresser. Din internetudbyder giver dig mindst �n \
    		IP-adresse til din DNS-server. Hvis du vil bruge en anden, skal du angive denne IP-adresse \
    		i et af disse felter. Du kan angive op til tre IP-adresser p� DNS-servere \
    		her. Routeren bruger disse for at f� hurtigere adgang til aktive  \
    		DNS-servere.";
hsetup.phase34="WINS (Windows Internet Naming Service) administrerer hver pc's interaktion med \
    		internettet. Hvis du bruger en WINS-server, skal du angive denne servers IP-adresse her. \
    		Ellers skal feltet v�re tomt.";
hsetup.phase35="Kontroller alle \
		v�rdierne, og klik p� <b>Gem indstillingerne</b> for at gemme dine indstillinger. Klik p� <b>Annuller \
		�ndringer</b> for at \
		annullere �ndringer, der ikke er gemt. Du kan kontrollere indstillingerne ved at oprette forbindelse til \
		internettet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Routeren har funktionen DDNS (Dynamic Domain Name System). Med DDNS kan du tildele et fast \
		v�rts- og dom�nenavn til en dynamisk internet-IP-adresse. Dette er nyttigt, hvis du \
		har dit eget websted, en FTP-server eller en anden server bagved routeren. F�r \
		du kan benytte denne funktion, skal du tilmelde dig DDNS-tjenesten hos <i>www.dyndns.org</i>, \
		en DDNS-tjenesteudbyder.";
helpddns.phase2="DDNS-tjeneste";
helpddns.phase3="Hvis du vil deaktivere DDNS-tjenesten, skal du beholde standardindstillingen <b>Deaktiver</b>. Hvis du vil aktivere DDNS-tjenesten, \
		skal du f�lge disse instruktioner:";
helpddns.phase4="Tilmeld dig en DDNS-tjeneste p� <i>www.dyndns.org</i>, og noter \
		dit brugernavn, din<i> </i>adgangskode og<i> </i>v�rtsnavnet.";
helpddns.phase5="P� sk�rmbilledet <i>DDNS</i> skal du v�lge <b>Aktiver.</b>";
helpddns.phase6="Udfyld felterne <i> Brugernavn</i>,<i> Adgangskode</i> og <i> V�rtsnavn</i>.";
helpddns.phase7="Klik p� knappen <b>Gem indstillinger</b> for at gemme �ndringerne. Klik p� knappen <b>Annuller �ndringer</b> for at \
		annullere �ndringer, der ikke er gemt.";
helpddns.phase8="Her vises routerens aktuelle internet-IP-adresse.";
helpddns.phase9="Status for forbindelsen til DDNS-tjenesten vises her.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC-kopiering";
helpmac.phase2="Routerens MAC-adresse er en 12-cifret kode, som er tildelt et unikt stykke \
    		hardware til identifikation. Nogle internetudbydere kr�ver, at du registrerer netv�rkskortets MAC- \
    		adresse, som blev tilsluttet dit kabel- eller \
    		DSL-modem under installationen. Hvis din internetudbyder kr�ver registrering af MAC-adresse, \
    		kan du finde netv�rkskortets MAC-adresse ved at f�lge \
    		instruktionerne for PC'ens operativsystem.";
helpmac.phase3="Hvis du anvender Windows 98 eller Millennium:";
helpmac.phase4="1.  Klik p� knappen <b>Start</b>, og v�lg <b>K�r</b>.";
helpmac.phase5="2.  Indtast <b>winipcfg </b>i det viste felt, og tryk p� knappen <b>OK </b>.";
helpmac.phase6="3.  V�lg det Ethernet-kort, du bruger.";
helpmac.phase7="4.  Klik p� <b>Yderligere oplysninger</b>.";
helpmac.phase8="5.  Not�r netv�rkskortets MAC-adresse.";
helpmac.phase9="1.  Klik p� knappen <b>Start</b>, og v�lg <b>K�r</b>.";
helpmac.phase10="2.  Indtast <b>cmd </b>i feltet, og tryk p� knappen <b>OK</b>.";
helpmac.phase11="3.  N�r du bliver bedt om det, skal du k�re <b>ipconfig /all</b> og se p� netv�rkskortets fysiske adresse.";
helpmac.phase12="4.  Not�r netv�rkskortets MAC-adresse.";
helpmac.phase13="Hvis du vil kopiere netv�rkskortets MAC-adresse til routeren og undg� at ringe til \
    		internetudbyder for at �ndre den registrerede MAC-adresse, skal du f�lge nedenst�ende instruktioner:";
helpmac.phase14="Hvis du anvender Windows 2000 eller XP:";
helpmac.phase15="1.  V�lg <b>Aktiver</b>.";
helpmac.phase16="2.  Indtast adapterens MAC-adresse i feltet <i>MAC-adresse</i>.";
helpmac.phase17="3.  Klik p� knappen <b>Gem indstillinger </b>.";
helpmac.phase18="Hvis du vil deaktivere kopiering af MAC-adressen, skal du beholde standardindstillingen <b>Deaktiver</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="I sk�rmbilledet <i>Routing</i> kan du indstille routing-tilstand og routerens indstillinger. \
		 Gateway-tilstand anbefales til de fleste brugere.";
hrouting.phase3="V�lg den korrekte arbejdstilstand. Behold standardindstillingen, <b> \
    		 Gateway</b>, hvis routeren er v�rt for din netv�rksforbindelse til internettet (gateway-tilstand anbefales til de fleste brugere). V�lg <b> \
    		 Router</b>, hvis routeren findes i et netv�rk med andre routere.";
hrouting.phase4="Dynamisk routing (RIP)";
hrouting.phase5="Bem�rk: Denne funktion er ikke tilg�ngelig i gateway-tilstand.";
hrouting.phase6="Med dynamisk routing kan routeren automatisk tilpasses fysiske �ndringer i \
    		 netv�rkets layout og udveksle routing-tabeller med andre routere. Feltet \
    		 Router bestemmer netv�rkets pakkerute baseret p� det f�rreste \
    		 antal hop mellem kilde og destination. ";
hrouting.phase7="Hvis du �nsker at aktivere funktionen dynamisk routing for WAN-siden, skal du v�lge <b>WAN</b>. \
    		 Hvis du �nsker at aktivere denne funktion for LAN-siden og den tr�dl�se side, skal du v�lge <b>LAN &amp; tr�dl�s</b>. \
    		 Hvis du �nsker at aktivere denne funktion for b�de WAN og LAN, skal du v�lge <b> \
    		 Begge</b>. Hvis du �nsker at deaktivere funktionen Dynamisk routing for alle dataoverf�rsler, skal du beholde \
    		 standardindstillingen, <b>Deaktiver</b>. ";
hrouting.phase8="Statisk routing,&nbsp; Destinationens IP-adresse, Undernetmaske, Gateway og Gr�nseflade";
hrouting.phase9="Hvis du �nsker at indstille en statisk rute mellem routeren og et andet netv�rk, \
    		 skal du v�lge et nummer fra rullemenuen <i>Statisk routing</i>. (En statisk \
    		 rute er en forudbestemt sti, som netv�rksoplysninger skal bev�ge sig p� \
    		 for at oprette forbindelse til en specifik v�rt eller et specifikt netv�rk.)";
hrouting.phase10="Angiv f�lgende data:";
hrouting.phase11="Destinationens IP-adresse </b>- \
		  Destinationens IP-adresse er adressen p� det netv�rk eller den v�rt, som du vil tildele en statisk rute.";
hrouting.phase12="Undernetmaske </b>- \
		  Undernetmasken afg�r, hvilken del af IP-adressen der er netv�rksdelen, og hvilken \
    		  del der er v�rtsdelen. ";
hrouting.phase13="Gateway </b>- \
		  Dette er IP-adressen p� den gateway-enhed, som etablerer kontakt mellem routeren og netv�rket eller v�rten.";
hrouting.phase14="Afh�ngigt af hvor destinationens IP-adresse er placeret, skal du v�lge \
    		      		  <b>LAN &amp; tr�dl�s </b>eller <b>WAN </b>i rullemenuen <i>Interface</i>.";
hrouting.phase15="Du kan gemme dine �ndringer ved at klikke p� knappen <b>Anvend</b>. Hvis du vil annullere �ndringer, som ikke er gemt, skal du klikke p� <b> \
    		  knappen Annuller</b>.";
hrouting.phase16="Hvis du vil have yderligere statiske ruter, skal du gentage trin 1-4.";
hrouting.phase17="Slet denne indtastning";
hrouting.phase18="S�dan sletter du indtastning af en statisk rute:";
hrouting.phase19="I rullemenuen <i>Statisk routing</i> skal du v�lge den statiske ruteposts nummer.";
hrouting.phase20="Klik p� knappen <b>Slet denne indtastning</b>.";
hrouting.phase21="For at gemme en sletning skal du klikke p� knappen <b>Anvend</b>. For at annullere en sletning skal du klikke p� <b> \
    		  knappen Annuller</b>. ";
hrouting.phase22="Vis routing-tabel";
hrouting.phase23="Klik p� knappen \
    		      		  <b>Vis routing-tabel  </b>for at vise alle gyldige ruteposter, som er i brug. Destinationens IP-adresse, Undernetmaske, \
    		  Gateway og Interface vises for hver indtastning. Klik p� knappen <b>Opdater </b>for at opdatere de viste data. Klik p� knappen <b> \
    		  Luk</b>for at vende tilbage til sk�rmbilledet <i>Routing</i>.";
hrouting.phase24="Destinationens IP-adresse</b> - \
		  Destinationens IP-adresse er adressen p� det netv�rk eller den v�rt, som har f�et tildelt den statiske rute. ";
hrouting.phase25="Undernetmaske</b> - \
		  Undernetmasken afg�r, hvilken del af IP-adressen der er netv�rksdelen, og hvilken del der er v�rtsdelen.";
hrouting.phase26="Gateway</b> - Dette er IP-adressen p� den gateway-enhed, som etablerer kontakt mellem routeren og netv�rket eller v�rten.";
hrouting.phase27="Interface</b> - Denne interface fort�ller dig, om destinationens IP-adresse er p� \
    		      		  <b> LAN &amp; tr�dl�s </b>(interne kabelbaserede og tr�dl�se netv�rk), <b>WAN</b> (internet) eller <b> \
    		  Loopback</b> (et kunstigt netv�rk, i hvilket en pc fungerer som et netv�rk, som er n�dvendigt for visse softwareprogrammer). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloker WAN-anmodning";
hfirewall.phase2="Hvis du aktiverer funktionen bloker WAN-anmodning, kan du undg�, at netv�rket \
    		 bliver \"pinget\" eller registreret af andre internetbrugere. Funktionen bloker WAN-anmodning \
    		 styrker ogs� netv�rkets sikkerhed ved at skjule netv�rksportene. \
    		 Begge funktioner af funktionen bloker WAN-anmodning g�r det sv�rere for \
    		 eksterne brugere at f� adgang til netv�rket. Denne funktion er aktiveret \
    		 som standard. V�lg <b>Deaktiver</b> for at deaktivere denne funktion.";
hfirewall.right="Aktiver eller deaktiver SPI-firewall.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN-passthrough";
helpvpn.phase2="VPN (Virtual Private Networking) bruges normalt til arbejdsrelateret netv�rk. Til \
    		VPN-tunneller underst�tter routeren IPSec-passthrough og PPTP-passthrough.";
helpvpn.phase3="<b>IPSec</b> - IPSec (Internet Protocol Security) er en<b> </b>protokolpakke, som bruges til at implementere \
      		en sikker udveksling af pakker p� IP-laget. For at tillade IPSec-tunneller at passere \
      		gennem routeren, er IPSec-passthrough som standard aktiveret. For at deaktivere \
      		IPSec-passthrough skal du fjerne markeringen i afkrydsningsfeltet ud for <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- Point-to-Point-tunnelf�ringsprotokol er den metode, der bruges til at aktivere VPN-sessioner \
      		til en Windows NT 4.0- eller 2000-server. For at tillade IPSec-tunneller at passere \
      		gennem routeren, er PPTP-passthrough som standard aktiveret. For at deaktivere \
      		PPTP-passthrough skal du fjerne markeringen i afkrydsningsfeltet ud for <i>PPTP</i>.";

helpvpn.right="Du kan v�lge at aktivere PPTP, L2TP eller IPSec-passthrough for at tillade, at dine netv�rksenheder \
		kommunikerer via VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtre";
hfilter.phase2="Sk�rmbilledet <i>Filtre</i> giver dig mulighed for at blokere eller tillade visse former for \
		internetbrug. Du kan konfigurere internetadgangspolicer til specifikke PC'er og konfigurere \
		filtre vha. netv�rksportnumre.";
hfilter.phase3="Med denne funktion kan du brugerdefinere op til ti forskellige internetadgangspolicer \
    		for bestemte PC'er, som identificeres ved deres IP- eller MAC-adresser. Til \
    		alle PC'er, hvor der er tilknyttet regler, i de angivne dage og tidsrum.";
hfilter.phase4="Hvis du �nsker at oprette eller redigere reglerne, skal du f�lge nedenst�ende instruktioner:";
hfilter.phase5="V�lg regelnummeret \(1-10\) i rullemenuen.";
hfilter.phase6="Indtast et navn i feltet <i>Indtast profilnavn</i>.";
hfilter.phase7="Klik p� knappen <b>Rediger liste over pc'er</b>.";
hfilter.phase8="Klik p� knappen <b>Anvend</b> for at gemme dine �ndringer. Klik p� knappen <b>Annuller</b> for at \
    		annullere �ndringer, der ikke er gemt. Klik p� knappen <b>Luk</b> for at vende tilbage til sk�rmbilledet \
    		    		<i>Filtre</i>.";
hfilter.phase9="Hvis du �nsker at blokere de anf�rte pc'er fra internetadgangen i de udvalgte dage og \
    		tidsrum, skal du beholde standardindstillingen <b>Deaktiver internetadgang for anf�rte \
    		pc'er</b>. Hvis du �nsker, at de anf�rte pc'er skal kunne f� adgang til internettet i \
    		de udvalgte dage og tidsrum, skal du klikke p� alternativknappen ud for<i> Aktiver \
    		internetadgang for anf�rte pc'er</i>.";
hfilter.phase10="I sk�rmbilledet <i>Liste over pc'er</i> skal du angive pc'erne vha. IP- eller MAC-adresse. Indtast de  \
    		p�g�ldende IP-adresser i <i>IP</i>-felterne. Hvis du skal filtrere et interval for \
    		IP-adresser, skal du udfylde felterne for <i>IP-interval</i>. \
    		Indtast de korrekte MAC-adresser i felterne <i>MAC</i>.";
hfilter.phase11="Angiv det tidspunkt, n�r adgangen filtreres. V�lg <b>24 timer</b>,<b> </b>eller marker afkrydsningsfeltet ud for <i>Fra</i> \
    		og brug rullelisterne til at udv�lge et bestemt tidsrum. ";
hfilter.phase12="Angiv de dage, hvor adgangen skal filtreres. V�lg <b>Dagligt</b> eller de relevante dage i ugen. ";
hfilter.phase13="Klik p� knappen <b>F�j til reglerne </b> for at gemme dine �ndringer og aktivere reglerne.";
hfilter.phase14="Hvis du �nsker at oprette eller redigere yderligere regler, skal du gentage trin 1-9.";
hfilter.phase15="Hvis du �nsker at slette en internetadgangsregel, skal du v�lge regelnummeret og klikke p� knappen <b>Slet</b>.";
hfilter.phase16="Du kan f� vist en oversigt over alle regler ved at trykke p� knappen <b>Oversigt</b>. Sk�rmbilledet <i> \
    		Oversigten over internetregler</i> viser hvert regelnummer, \
    		regelnavn, dage og tidspunkt p� dagen. Hvis du �nsker at slette en regel, skal du klikke p� dens afkrydsningsfelt og herefter \
    		klikke p� knappen <b>Slet</b>. Klik p� knappen <b>Luk</b> for at vende tilbage til \
    		sk�rmbilledet <i>Filtre</i>.";
hfilter.phase17="Filtreret internetportinverval";
hfilter.phase18="Du kan filtrere pc'er efter portnummer ved at v�lge <b>Begge</b>, <b>TCP</b> eller <b>UDP</b>, \
    		afh�ngigt af hvilke protokoller, du vil filtrere. Indtast derefter<b> </b>de portnumre, \
    		som du vil filtrere, i portnummerfelterne. Pc'er, der er sluttet til  \
    		routeren, vil ikke l�ngere v�re i stand til at f� adgang til noget portnummer, der er opf�rt her. Hvis du vil  \
    		deaktivere et filter, skal du v�lge <b>Dekativer</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Kontroller alle v�rdier, og klik p� <b>Gem indstillinger</b> for at gemme dine indstillinger. Klik p� knappen <b>Annuller \
		�ndringer</b> for at annullere �ndringer, der ikke er gemt.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="Funktionen DMZ-hosting giver en lokal bruger mulighed for at f� adgang til internettet for at bruge \
		en specialtjeneste s�som spil over internettet eller videokonference. \
		DMZ-hosting viderestiller alle porte p� samme tid til en pc. Funktionen \
    		Viderestilling af porte er mere sikker, da det kun �bner de porte, du �nsker \
    		at �bne, mens DMZ-hosting �bner alle porte p� en computer \
    		og fremviser computeren, s� internettet kan se den.";    		
helpdmz.phase2="Pc'er, hvis porte viderestilles, skal have deaktiveret deres DHCP-klientfunktion \
    		og skal have en ny statisk IP-adresse tildelt til den, da deres IP-  \
    		adresse kan �ndre sig, n�r DHCP-funktionen bruges.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Hvis du vil fremvise en pc, skal du v�lge ";
helpdmz.phase4="Indtast computerens IP-adresse i feltet <i>DMZ Host-IP-adresse</i>.";



//help number string
var hnum = new Object();
hnum.one="1.";
hnum.two="2.";
hnum.three="3.";
hnum.four="4.";
hnum.five="5.";
hnum.six="5.";
hnum.seven="6.";
hnum.eight="7.";
hnum.night="8.";
 
