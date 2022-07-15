//Basic Setup
var hsetup = new Object();
hsetup.phase1="Skærmbilledet <i>Konfiguration</i> \
		er det første skærmbillede, du får vist, når du får adgang til routeren. De fleste brugere  \
		kan konfigurere routeren og få den til at fungere kun vha. \
		indstillingerne i dette skærmbillede. Nogle internetudbydere (ISP'er) kræver,  \
		at du indtaster specifikke oplysninger, så som brugernavn, adgangskode, IP-adresse,  \
		adressen på standardgatewayen eller DNS-IP-adresse. Du kan få disse oplysninger  \
		fra din internetudbyder.";
hsetup.phase2="Bemærk: Efter \
		du har konfigureret disse indstillinger, bør du angive en ny adgangskode til routeren  \
		på skærmbilledet <i>Sikkerhed</i>. Det vil øge sikkerheden og beskytter  \
		routeren fra uautoriserede ændringer. Alle brugere, som forsøger at få adgang til \
		det webbaserede hjælpeprogram til routeren eller den guidede konfiguration, bliver bedt om at angive routerens adgangskode.";
hsetup.phase3="Vælg \
		tidszonen for det land, du befinder dig i. Hvis dit land har sommertid, \
    		skal du markere afkrydsningsfeltet ud for <i>Automatisk skift til \
    		sommertid</i>.";
hsetup.phase4="MTU står for  \
    		Maksimal overførselsenhed. Det angiver den største pakkestørrelse, der må bruges \
    		i forbindelse med internetoverførsler. Behold standardindstillingen, <b>Auto</b>, hvis \
    		routeren skal vælge den bedste MTU til din internetforbindelse. Hvis du vil angive en \
    		MTU-størrelse, skal du vælge <b>Manuel</b> og indtaste den ønskede værdi (standard er <b> \
    		1400</b>).&nbsp; Du bør bruge en værdi i intervallet 1200 til 1500.";
hsetup.phase5="Nogle internetudbydere kræver et domænenavn, som kan fås hos dem.";
hsetup.phase6="Routeren understøtter fire forbindelsestyper:";
hsetup.phase7="Automatisk konfiguration - DHCP.";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point-Tunnelføringsprotokol)";
hsetup.phase10="Disse typer kan vælges fra rullemenuen ud for Internetforbindelse. \
    		De påkrævede oplysninger og tilgængelige funktioner varierer, \
    		afhængigt af hvilken type forbindelse du vælger. Nogle beskrivelser af disse \
    		oplysninger findes her:";		
hsetup.phase11="Internet-IP-adresse og undernetmaske";
hsetup.phase12="Dette er routerens IP-adresse \
    		og undernetmaske, som det vises for eksterne brugere på internettet (herunder din \
    		internetudbyder). Hvis din internetforbindelse kræver en statisk IP-adresse, \
    		får du en statisk IP-adresse og en undernetmaske fra din internetudbyder.";
hsetup.phase13="Din internetudbyder giver dig IP-adressen til din gateway."
hsetup.phase14="(Domænenavnserver)";
hsetup.phase15="Din internetudbyder giver dig mindst én IP-adresse til din DNS.";
hsetup.phase16="Brugernavn og adgangskode";
hsetup.phase17="Indtast det <b>brugernavn</b> og den \
				<b>adgangskode</b>,  du bruger, når du logger på din internetudbyder via en PPPoE- eller PPTP- \
    		forbindelse.";
hsetup.phase18="Opret forbindelse efter behov";
hsetup.phase19="Du kan konfigurere routeren, så den \
    		afbryder internetforbindelsen efter en periode med inaktivitet \
    		(Maks. inaktiv periode). Hvis din internetforbindelse er blevet afbrudt efter en periode med inaktivitet, \
    		giver Opret forbindelse efter behov routeren mulighed for automatisk at genoprette \
   		forbindelsen, når du forsøger at få adgang til internettet \
   		igen. Hvis du vil aktivere Opret forbindelse efter behov, skal du klikke på alternativknappen. Hvis \
    		du ønsker, at din internetforbindelse hele tiden er aktiv, skal du angive <b>0</b> \
    		i feltet <i>Maksimal inaktiv periode</i>. Ellers skal du angive det antal minutter, \
    		der skal gå, inden internetforbindelsen afbrydes.";
hsetup.phase20="Permanent ";
hsetup.phase21="Denne indstilling opretholder forbindelsen \
    		til internettet på ubestemt tid, selv når forbindelsen er inaktiv. Hvis du vil bruge denne indstilling, \
    		skal du klikke på alternativknappen <i>Permanent</i>. Standard \
    		genopkaldsperioden er 30 sekunder (routeren vil med andre ord kontrollere \
    		internetforbindelsen hver 30. sekund).";
hsetup.phase22="Bemærk: Nogle \
    		udbydere kræver en specifik MAC-adresse for forbindelsen til \
    		internettet. Hvis du vil have mere at vide om dette, skal du klikke på fanen <b>System</b>. Klik herefter på \
    		knappen <b>Hjælp</b>, og læs om MAC-kopieringsfunktionen.";
hsetup.phase23="LAN";
hsetup.phase24="IP-adresse og undernetmaske";
hsetup.phase25="Dette er \
    		IP-adressen til routeren og undernetmasken, som det vises på det interne LAN. Feltet \
    		er 192.168.1.1 for IP-adressen og 255.255.255.0 for \
    		undernetmasken.";
hsetup.phase26="DHCP";
hsetup.phase27="Behold \
    		standarden, <b>Aktiver</b> for at aktivere DHCP-serverindstillingen for routeren. Hvis du \
    		allerede har en DHCP-server på dit netværk, eller du ikke vil have en DHCP-server, \
    		skal du vælge <b>Deaktiver</b>.";
hsetup.phase28="Angiv en \
    		numerisk værdi, som DHCP-serveren skal starte med, når der tildeles IP-adresser. \
    		Start ikke med 192.168.1.1 (IP-adressen til routeren).";
hsetup.phase29="Maks. antal af DHCP-brugere";
hsetup.phase30="Angiv det \
    		maksimale antal computere, som DHCP-serveren skal tildele IP-adresser \
    		til. Maksimum er 253, hvilket er muligt, hvis 192.168.1.2 er din første IP- \
    		adresse.";
hsetup.phase31="Leasingtid \
    		er den tid, som en netværksbruger må opretholde forbindelse \
    		til routeren med sin nuværende dynamiske IP-adresse. Angiv tiden i minutter, \
    		som en bruger kan \"lease\" sig ind med denne dynamiske IP-adresse.";
hsetup.phase32="Statisk DNS 1-3 ";
hsetup.phase33="DNS \
    		(Domænenavneserveren) er den måde som internettet oversætter domæne- eller webstedsnavne til \
    		internetadresser eller URL-adresser. Din internetudbyder giver dig mindst én \
    		IP-adresse til din DNS-server. Hvis du vil bruge en anden, skal du angive denne IP-adresse \
    		i et af disse felter. Du kan angive op til tre IP-adresser på DNS-servere \
    		her. Routeren bruger disse for at få hurtigere adgang til aktive  \
    		DNS-servere.";
hsetup.phase34="WINS (Windows Internet Naming Service) administrerer hver pc's interaktion med \
    		internettet. Hvis du bruger en WINS-server, skal du angive denne servers IP-adresse her. \
    		Ellers skal feltet være tomt.";
hsetup.phase35="Kontroller alle \
		værdierne, og klik på <b>Gem indstillingerne</b> for at gemme dine indstillinger. Klik på <b>Annuller \
		ændringer</b> for at \
		annullere ændringer, der ikke er gemt. Du kan kontrollere indstillingerne ved at oprette forbindelse til \
		internettet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Routeren har funktionen DDNS (Dynamic Domain Name System). Med DDNS kan du tildele et fast \
		værts- og domænenavn til en dynamisk internet-IP-adresse. Dette er nyttigt, hvis du \
		har dit eget websted, en FTP-server eller en anden server bagved routeren. Før \
		du kan benytte denne funktion, skal du tilmelde dig DDNS-tjenesten hos <i>www.dyndns.org</i>, \
		en DDNS-tjenesteudbyder.";
helpddns.phase2="DDNS-tjeneste";
helpddns.phase3="Hvis du vil deaktivere DDNS-tjenesten, skal du beholde standardindstillingen <b>Deaktiver</b>. Hvis du vil aktivere DDNS-tjenesten, \
		skal du følge disse instruktioner:";
helpddns.phase4="Tilmeld dig en DDNS-tjeneste på <i>www.dyndns.org</i>, og noter \
		dit brugernavn, din<i> </i>adgangskode og<i> </i>værtsnavnet.";
helpddns.phase5="På skærmbilledet <i>DDNS</i> skal du vælge <b>Aktiver.</b>";
helpddns.phase6="Udfyld felterne <i> Brugernavn</i>,<i> Adgangskode</i> og <i> Værtsnavn</i>.";
helpddns.phase7="Klik på knappen <b>Gem indstillinger</b> for at gemme ændringerne. Klik på knappen <b>Annuller ændringer</b> for at \
		annullere ændringer, der ikke er gemt.";
helpddns.phase8="Her vises routerens aktuelle internet-IP-adresse.";
helpddns.phase9="Status for forbindelsen til DDNS-tjenesten vises her.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC-kopiering";
helpmac.phase2="Routerens MAC-adresse er en 12-cifret kode, som er tildelt et unikt stykke \
    		hardware til identifikation. Nogle internetudbydere kræver, at du registrerer netværkskortets MAC- \
    		adresse, som blev tilsluttet dit kabel- eller \
    		DSL-modem under installationen. Hvis din internetudbyder kræver registrering af MAC-adresse, \
    		kan du finde netværkskortets MAC-adresse ved at følge \
    		instruktionerne for PC'ens operativsystem.";
helpmac.phase3="Hvis du anvender Windows 98 eller Millennium:";
helpmac.phase4="1.  Klik på knappen <b>Start</b>, og vælg <b>Kør</b>.";
helpmac.phase5="2.  Indtast <b>winipcfg </b>i det viste felt, og tryk på knappen <b>OK </b>.";
helpmac.phase6="3.  Vælg det Ethernet-kort, du bruger.";
helpmac.phase7="4.  Klik på <b>Yderligere oplysninger</b>.";
helpmac.phase8="5.  Notér netværkskortets MAC-adresse.";
helpmac.phase9="1.  Klik på knappen <b>Start</b>, og vælg <b>Kør</b>.";
helpmac.phase10="2.  Indtast <b>cmd </b>i feltet, og tryk på knappen <b>OK</b>.";
helpmac.phase11="3.  Når du bliver bedt om det, skal du køre <b>ipconfig /all</b> og se på netværkskortets fysiske adresse.";
helpmac.phase12="4.  Notér netværkskortets MAC-adresse.";
helpmac.phase13="Hvis du vil kopiere netværkskortets MAC-adresse til routeren og undgå at ringe til \
    		internetudbyder for at ændre den registrerede MAC-adresse, skal du følge nedenstående instruktioner:";
helpmac.phase14="Hvis du anvender Windows 2000 eller XP:";
helpmac.phase15="1.  Vælg <b>Aktiver</b>.";
helpmac.phase16="2.  Indtast adapterens MAC-adresse i feltet <i>MAC-adresse</i>.";
helpmac.phase17="3.  Klik på knappen <b>Gem indstillinger </b>.";
helpmac.phase18="Hvis du vil deaktivere kopiering af MAC-adressen, skal du beholde standardindstillingen <b>Deaktiver</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="I skærmbilledet <i>Routing</i> kan du indstille routing-tilstand og routerens indstillinger. \
		 Gateway-tilstand anbefales til de fleste brugere.";
hrouting.phase3="Vælg den korrekte arbejdstilstand. Behold standardindstillingen, <b> \
    		 Gateway</b>, hvis routeren er vært for din netværksforbindelse til internettet (gateway-tilstand anbefales til de fleste brugere). Vælg <b> \
    		 Router</b>, hvis routeren findes i et netværk med andre routere.";
hrouting.phase4="Dynamisk routing (RIP)";
hrouting.phase5="Bemærk: Denne funktion er ikke tilgængelig i gateway-tilstand.";
hrouting.phase6="Med dynamisk routing kan routeren automatisk tilpasses fysiske ændringer i \
    		 netværkets layout og udveksle routing-tabeller med andre routere. Feltet \
    		 Router bestemmer netværkets pakkerute baseret på det færreste \
    		 antal hop mellem kilde og destination. ";
hrouting.phase7="Hvis du ønsker at aktivere funktionen dynamisk routing for WAN-siden, skal du vælge <b>WAN</b>. \
    		 Hvis du ønsker at aktivere denne funktion for LAN-siden og den trådløse side, skal du vælge <b>LAN &amp; trådløs</b>. \
    		 Hvis du ønsker at aktivere denne funktion for både WAN og LAN, skal du vælge <b> \
    		 Begge</b>. Hvis du ønsker at deaktivere funktionen Dynamisk routing for alle dataoverførsler, skal du beholde \
    		 standardindstillingen, <b>Deaktiver</b>. ";
hrouting.phase8="Statisk routing,&nbsp; Destinationens IP-adresse, Undernetmaske, Gateway og Grænseflade";
hrouting.phase9="Hvis du ønsker at indstille en statisk rute mellem routeren og et andet netværk, \
    		 skal du vælge et nummer fra rullemenuen <i>Statisk routing</i>. (En statisk \
    		 rute er en forudbestemt sti, som netværksoplysninger skal bevæge sig på \
    		 for at oprette forbindelse til en specifik vært eller et specifikt netværk.)";
hrouting.phase10="Angiv følgende data:";
hrouting.phase11="Destinationens IP-adresse </b>- \
		  Destinationens IP-adresse er adressen på det netværk eller den vært, som du vil tildele en statisk rute.";
hrouting.phase12="Undernetmaske </b>- \
		  Undernetmasken afgør, hvilken del af IP-adressen der er netværksdelen, og hvilken \
    		  del der er værtsdelen. ";
hrouting.phase13="Gateway </b>- \
		  Dette er IP-adressen på den gateway-enhed, som etablerer kontakt mellem routeren og netværket eller værten.";
hrouting.phase14="Afhængigt af hvor destinationens IP-adresse er placeret, skal du vælge \
    		      		  <b>LAN &amp; trådløs </b>eller <b>WAN </b>i rullemenuen <i>Interface</i>.";
hrouting.phase15="Du kan gemme dine ændringer ved at klikke på knappen <b>Anvend</b>. Hvis du vil annullere ændringer, som ikke er gemt, skal du klikke på <b> \
    		  knappen Annuller</b>.";
hrouting.phase16="Hvis du vil have yderligere statiske ruter, skal du gentage trin 1-4.";
hrouting.phase17="Slet denne indtastning";
hrouting.phase18="Sådan sletter du indtastning af en statisk rute:";
hrouting.phase19="I rullemenuen <i>Statisk routing</i> skal du vælge den statiske ruteposts nummer.";
hrouting.phase20="Klik på knappen <b>Slet denne indtastning</b>.";
hrouting.phase21="For at gemme en sletning skal du klikke på knappen <b>Anvend</b>. For at annullere en sletning skal du klikke på <b> \
    		  knappen Annuller</b>. ";
hrouting.phase22="Vis routing-tabel";
hrouting.phase23="Klik på knappen \
    		      		  <b>Vis routing-tabel  </b>for at vise alle gyldige ruteposter, som er i brug. Destinationens IP-adresse, Undernetmaske, \
    		  Gateway og Interface vises for hver indtastning. Klik på knappen <b>Opdater </b>for at opdatere de viste data. Klik på knappen <b> \
    		  Luk</b>for at vende tilbage til skærmbilledet <i>Routing</i>.";
hrouting.phase24="Destinationens IP-adresse</b> - \
		  Destinationens IP-adresse er adressen på det netværk eller den vært, som har fået tildelt den statiske rute. ";
hrouting.phase25="Undernetmaske</b> - \
		  Undernetmasken afgør, hvilken del af IP-adressen der er netværksdelen, og hvilken del der er værtsdelen.";
hrouting.phase26="Gateway</b> - Dette er IP-adressen på den gateway-enhed, som etablerer kontakt mellem routeren og netværket eller værten.";
hrouting.phase27="Interface</b> - Denne interface fortæller dig, om destinationens IP-adresse er på \
    		      		  <b> LAN &amp; trådløs </b>(interne kabelbaserede og trådløse netværk), <b>WAN</b> (internet) eller <b> \
    		  Loopback</b> (et kunstigt netværk, i hvilket en pc fungerer som et netværk, som er nødvendigt for visse softwareprogrammer). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloker WAN-anmodning";
hfirewall.phase2="Hvis du aktiverer funktionen bloker WAN-anmodning, kan du undgå, at netværket \
    		 bliver \"pinget\" eller registreret af andre internetbrugere. Funktionen bloker WAN-anmodning \
    		 styrker også netværkets sikkerhed ved at skjule netværksportene. \
    		 Begge funktioner af funktionen bloker WAN-anmodning gør det sværere for \
    		 eksterne brugere at få adgang til netværket. Denne funktion er aktiveret \
    		 som standard. Vælg <b>Deaktiver</b> for at deaktivere denne funktion.";
hfirewall.right="Aktiver eller deaktiver SPI-firewall.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN-passthrough";
helpvpn.phase2="VPN (Virtual Private Networking) bruges normalt til arbejdsrelateret netværk. Til \
    		VPN-tunneller understøtter routeren IPSec-passthrough og PPTP-passthrough.";
helpvpn.phase3="<b>IPSec</b> - IPSec (Internet Protocol Security) er en<b> </b>protokolpakke, som bruges til at implementere \
      		en sikker udveksling af pakker på IP-laget. For at tillade IPSec-tunneller at passere \
      		gennem routeren, er IPSec-passthrough som standard aktiveret. For at deaktivere \
      		IPSec-passthrough skal du fjerne markeringen i afkrydsningsfeltet ud for <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- Point-to-Point-tunnelføringsprotokol er den metode, der bruges til at aktivere VPN-sessioner \
      		til en Windows NT 4.0- eller 2000-server. For at tillade IPSec-tunneller at passere \
      		gennem routeren, er PPTP-passthrough som standard aktiveret. For at deaktivere \
      		PPTP-passthrough skal du fjerne markeringen i afkrydsningsfeltet ud for <i>PPTP</i>.";

helpvpn.right="Du kan vælge at aktivere PPTP, L2TP eller IPSec-passthrough for at tillade, at dine netværksenheder \
		kommunikerer via VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtre";
hfilter.phase2="Skærmbilledet <i>Filtre</i> giver dig mulighed for at blokere eller tillade visse former for \
		internetbrug. Du kan konfigurere internetadgangspolicer til specifikke PC'er og konfigurere \
		filtre vha. netværksportnumre.";
hfilter.phase3="Med denne funktion kan du brugerdefinere op til ti forskellige internetadgangspolicer \
    		for bestemte PC'er, som identificeres ved deres IP- eller MAC-adresser. Til \
    		alle PC'er, hvor der er tilknyttet regler, i de angivne dage og tidsrum.";
hfilter.phase4="Hvis du ønsker at oprette eller redigere reglerne, skal du følge nedenstående instruktioner:";
hfilter.phase5="Vælg regelnummeret \(1-10\) i rullemenuen.";
hfilter.phase6="Indtast et navn i feltet <i>Indtast profilnavn</i>.";
hfilter.phase7="Klik på knappen <b>Rediger liste over pc'er</b>.";
hfilter.phase8="Klik på knappen <b>Anvend</b> for at gemme dine ændringer. Klik på knappen <b>Annuller</b> for at \
    		annullere ændringer, der ikke er gemt. Klik på knappen <b>Luk</b> for at vende tilbage til skærmbilledet \
    		    		<i>Filtre</i>.";
hfilter.phase9="Hvis du ønsker at blokere de anførte pc'er fra internetadgangen i de udvalgte dage og \
    		tidsrum, skal du beholde standardindstillingen <b>Deaktiver internetadgang for anførte \
    		pc'er</b>. Hvis du ønsker, at de anførte pc'er skal kunne få adgang til internettet i \
    		de udvalgte dage og tidsrum, skal du klikke på alternativknappen ud for<i> Aktiver \
    		internetadgang for anførte pc'er</i>.";
hfilter.phase10="I skærmbilledet <i>Liste over pc'er</i> skal du angive pc'erne vha. IP- eller MAC-adresse. Indtast de  \
    		pågældende IP-adresser i <i>IP</i>-felterne. Hvis du skal filtrere et interval for \
    		IP-adresser, skal du udfylde felterne for <i>IP-interval</i>. \
    		Indtast de korrekte MAC-adresser i felterne <i>MAC</i>.";
hfilter.phase11="Angiv det tidspunkt, når adgangen filtreres. Vælg <b>24 timer</b>,<b> </b>eller marker afkrydsningsfeltet ud for <i>Fra</i> \
    		og brug rullelisterne til at udvælge et bestemt tidsrum. ";
hfilter.phase12="Angiv de dage, hvor adgangen skal filtreres. Vælg <b>Dagligt</b> eller de relevante dage i ugen. ";
hfilter.phase13="Klik på knappen <b>Føj til reglerne </b> for at gemme dine ændringer og aktivere reglerne.";
hfilter.phase14="Hvis du ønsker at oprette eller redigere yderligere regler, skal du gentage trin 1-9.";
hfilter.phase15="Hvis du ønsker at slette en internetadgangsregel, skal du vælge regelnummeret og klikke på knappen <b>Slet</b>.";
hfilter.phase16="Du kan få vist en oversigt over alle regler ved at trykke på knappen <b>Oversigt</b>. Skærmbilledet <i> \
    		Oversigten over internetregler</i> viser hvert regelnummer, \
    		regelnavn, dage og tidspunkt på dagen. Hvis du ønsker at slette en regel, skal du klikke på dens afkrydsningsfelt og herefter \
    		klikke på knappen <b>Slet</b>. Klik på knappen <b>Luk</b> for at vende tilbage til \
    		skærmbilledet <i>Filtre</i>.";
hfilter.phase17="Filtreret internetportinverval";
hfilter.phase18="Du kan filtrere pc'er efter portnummer ved at vælge <b>Begge</b>, <b>TCP</b> eller <b>UDP</b>, \
    		afhængigt af hvilke protokoller, du vil filtrere. Indtast derefter<b> </b>de portnumre, \
    		som du vil filtrere, i portnummerfelterne. Pc'er, der er sluttet til  \
    		routeren, vil ikke længere være i stand til at få adgang til noget portnummer, der er opført her. Hvis du vil  \
    		deaktivere et filter, skal du vælge <b>Dekativer</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Kontroller alle værdier, og klik på <b>Gem indstillinger</b> for at gemme dine indstillinger. Klik på knappen <b>Annuller \
		ændringer</b> for at annullere ændringer, der ikke er gemt.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="Funktionen DMZ-hosting giver en lokal bruger mulighed for at få adgang til internettet for at bruge \
		en specialtjeneste såsom spil over internettet eller videokonference. \
		DMZ-hosting viderestiller alle porte på samme tid til en pc. Funktionen \
    		Viderestilling af porte er mere sikker, da det kun åbner de porte, du ønsker \
    		at åbne, mens DMZ-hosting åbner alle porte på en computer \
    		og fremviser computeren, så internettet kan se den.";    		
helpdmz.phase2="Pc'er, hvis porte viderestilles, skal have deaktiveret deres DHCP-klientfunktion \
    		og skal have en ny statisk IP-adresse tildelt til den, da deres IP-  \
    		adresse kan ændre sig, når DHCP-funktionen bruges.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Hvis du vil fremvise en pc, skal du vælge ";
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
 
