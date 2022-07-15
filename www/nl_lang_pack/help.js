//Basic Setup
var hsetup = new Object();
hsetup.phase1="Het scherm <i>Instellingen</i> \
		is het eerste scherm dat u ziet wanneer u de routerpagina opent. De meeste gebruikers \
		kunnen aan de hand van de instellingen in dit venster de router \
		configureren en laten werken. Bij sommige internetproviders (ISP's) moet u \
		specifieke gegevens opgeven, zoals gebruikersnaam, wachtwoord, IP-adres, \
		standaardgateway-adres of DNS IP-adres. Deze gegevens kunt u zo nodig \
		bij uw ISP opvragen.";
hsetup.phase2="Opmerking: nadat \
		u deze instellingen hebt geconfigureerd, moet u in het scherm \
		<i>Beveiliging</i> een nieuw wachtwoord voor de router opgeven. Dit verbetert de beveiliging en voorkomt \
		dat de router door iedereen kan worden gewijzigd. Alle gebruikers die proberen het webgebaseerde hulpprogramma van de router \
		of de installatiewizard te openen, moeten het wachtwoord van de router opgeven.";
hsetup.phase3="Selecteer de \
		tijdzone voor uw regio. Als binnen uw regio de zomertijd wordt gehanteerd, \
    		laat u het selectievakje <i>Klok automatisch aanpassen \
    		aan zomer- en wintertijd</i> ingeschakeld.";
hsetup.phase4="MTU is de \
    		Maximum Transmission Unit. Deze geeft de maximale pakketgrootte aan \
    		die via internet kan worden verstuurd. Gebruik de standaardinstelling <b>Auto</b>. \
    		Bij deze instelling kiest de router de beste MTU voor uw internetverbinding. U kunt een \
    		MTU-grootte opgeven door <b>Handmatig</b> te selecteren en de gewenste waarde op te geven (standaard is dat de waarde <b> \
    		1400</b>).&nbsp; U dient hier een getal tussen 1200 en 1500 op te geven.";
hsetup.phase5="Deze invoer is voor sommige internetproviders vereist. Zij verschaffen u de juiste informatie.";
hsetup.phase6="De router ondersteunt vier verbindingstypen:";
hsetup.phase7="Automatische configuratie DCHP";
hsetup.phase8="(Point-To-Point-protocol via LAN)";
hsetup.phase9="(Point-To-Point-Tunneling-protocol)";
hsetup.phase10="Deze typen kunnen worden geselecteerd in het vervolgkeuzemenu naast Internetverbinding. \
    		De vereiste gegevens en beschikbare functies zijn \
    		bij elk geselecteerd verbindingstype weer anders. Hier worden enkele beschrijvingen \
    		van deze gegevens gegeven:";		
hsetup.phase11="IP-adres en subnetmasker voor internet";
hsetup.phase12="Dit zijn het IP-adres \
    		en het subnetmasker van de router die externe gebruikers op internet (inclusief uw internetprovider) te zien \
    		krijgen. Als er voor de internetverbinding een vast IP-adres moet worden opgegeven, krijgt u van uw \
    		ISP een vast IP-adres en een subnetmasker.";
hsetup.phase13="Van uw internetprovider ontvangt u het IP-adres van de gateway.";
hsetup.phase14="(Domeinnaamserver)";
hsetup.phase15="Van uw internetprovider ontvangt u het IP-adres van tenminste één domeinnaamserver.";
hsetup.phase16="Gebruikersnaam en wachtwoord";
hsetup.phase17="Geef de <b>Gebruikersnaam</b> en het \
				<b>Wachtwoord</b> op waarmee u zich via een PPPoE- of PPTP-verbinding bij uw ISP \
    		aanmeldt.";
hsetup.phase18="Verbinden op verzoek";
hsetup.phase19="U kunt de router zodanig instellen dat \
    		na een bepaalde tijd zonder activiteit \
    		(maximale duur inactiviteit) de verbinding met internet automatisch wordt verbroken. Als de internetverbinding vanwege inactiviteit is verbroken, \
    		wordt de router door Verbinden op verzoek zodanig ingesteld dat er automatisch \
   		weer verbinding wordt gemaakt wanneer u opnieuw verbinding met internet probeert te \
   		maken. Als u de optie voor verbinden op verzoek wilt inschakelen, klikt u op het keuzerondje. Als \
    		u de internetverbinding wilt openhouden, geeft u <b>0</b> op \
    		in het veld <i>Maximale duur inactiviteit</i>. In alle andere gevallen voert u het aantal minuten in \
    		waarna u wilt dat de internetverbinding moet worden verbroken.";
hsetup.phase20="Continu verbinding houden ";
hsetup.phase21="Met deze optie hebt u steeds verbinding \
    		met internet, ook als u geen gebruikmaakt van de verbinding. U gebruikt \
    		deze optie door op het keuzerondje bij <i>Continu verbinding houden</i> te klikken. De standaard \
    		time-out voor opnieuw kiezen is 30 seconden, met andere woorden, de internetverbinding wordt elke 30 seconden \
    		door de router gecontroleerd.";
hsetup.phase22="Opmerking: bij sommige \
    		kabelproviders moet er een MAC-adres worden opgegeven om verbinding te kunnen maken met \
    		internet. Klik op het tabblad <b>Systeem</b> voor meer informatie. Klik vervolgens op \
    		de knop <b>Help</b> waarna het onderwerp over het klonen van het MAC-adres wordt geopend.";
hsetup.phase23="LAN";
hsetup.phase24="IP-adres en subnetmasker";
hsetup.phase25="Dit zijn \
    		het IP-adres en het subnetmasker van de router die in het interne LAN worden weergegeven. De \
    		standaardwaarde voor het IP-adres is 192.168.1.1 en 255.255.255.0 voor het \
    		subnetmasker.";
hsetup.phase26="DHCP";
hsetup.phase27="Gebruik de \
    		standaardinstelling <b>Inschakelen</b> als u de DHCP-serveroptie van de router wilt inschakelen. Als er zich \
    		al een DHCP-server in uw netwerk bevindt of als u geen DHCP-server wilt gebruiken, \
    		selecteert u <b>Uitschakelen</b>.";
hsetup.phase28="Voer een \
    		numerieke waarde voor de DHCP-server in als u IP-adressen gaat uitgeven. \
    		Begin niet met IP-adres 192.168.1.1, want dit is het IP-adres van de router.";
hsetup.phase29="Maximumaantal DHCP-gebruikers";
hsetup.phase30="Voer het \
    		maximumaantal computers in waaraan u door de DHCP-server IP-adressen wilt laten \
    		toewijzen. U kunt maximaal 253 computers opgeven als 192.168.1.2 het eerste IP-adres \
    		is.";
hsetup.phase31="De leasetijd van de client \
    		geeft aan hoe lang een netwerkgebruiker met zijn of haar huidige dynamische IP-adres verbinding \
    		kan hebben met de router. Voer de tijd \
    		in minuten in die de gebruiker krijgt om dit dynamische IP-adres te kunnen gebruiken ('leasen').";
hsetup.phase32="Statische DNS 1-3 ";
hsetup.phase33="Het DNS \
    		(Domain Name System) is de manier waarop namen van domeinen of websites \
    		op internet worden omgezet naar internetadressen of URL's. Van uw internetprovider ontvangt u het IP-adres van ten minste één \
    		domeinnaamserver. Wilt u een andere IP-server gebruiken, voer dan het betreffende IP-adres \
    		in een van deze velden in. U kunt hier maximaal drie IP-adressen van DNS-servers \
    		invoeren. Deze adressen worden door de router gebruikt om sneller toegang te krijgen tot werkende \
    		DNS-servers.";
hsetup.phase34="De interactie van elke computer met internet wordt door WINS (Windows Internet Naming Service) \
    		beheerd. Als u een WINS-server gebruikt, voert u hier het IP-adres van die server in. \
    		In alle andere gevallen laat u dit veld leeg.";
hsetup.phase35="Controleer alle \
		waarden en klik op <b>Instellingen opslaan</b> als u alle instellingen wilt opslaan. Klik op <b>Wijzigingen \
		Annuleren</b> als u \
		de niet-opgeslagen wijzigingen wilt annuleren. U kunt de instellingen testen door verbinding te maken met \
		internet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="De router beschikt over een DDNS-functie (Dynamic Domain Name System). Met DDNS kunt u een vaste \
		host- en domeinnaam aan een dynamisch IP-adres toekennen. Dit is een handige optie wanneer u de \
		host van uw eigen website, FTP-server, of een andere server achter de router bent. Voordat \
		u deze functie gaat gebruiken, dient u zich aan te melden voor de DDNS-service op <i>www.dyndns.org</i>, \
		een DDNS-provider.";
helpddns.phase2="DDNS-service";
helpddns.phase3="Als u de DDNS-service wilt uitschakelen, behoudt u de standaardinstelling <b>Uitschakelen</b>. U schakelt de \
		DDNS-service als volgt in:";
helpddns.phase4="Meld u aan voor de DDNS-service op <i>www.dyndns.org</i>, en voer \
		uw gebruikersnaam,<i> </i>wachtwoord en<i> </i>hostnaam in.";
helpddns.phase5="Selecteer in het <i>DDNS</i>-venster de optie <b>Inschakelen.</b>";
helpddns.phase6="Vul de velden <i> Gebruikersnaam</i>,<i> Wachtwoord</i> en<i> Hostnaam</i> in.";
helpddns.phase7="Klik op de knop <b>Inst. opslaan</b> als u de wijzigingen wilt opslaan. Klik op de knop <b>Wijzigingen annuleren</b> als u \
		de niet-opgeslagen wijzigingen wilt annuleren.";
helpddns.phase8="Hier wordt het huidige internet-IP-adres van de router weergegeven.";
helpddns.phase9="Hier wordt de status van de verbinding met de DDNS-dienst weergegeven.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC-adres klonen";
helpmac.phase2="Het MAC-adres van de router is een 12-cijferige code die voor identificatiedoeleinden is toegewezen aan een \
    		uniek stuk hardware. Bij sommige ISP's moet u het MAC-adres \
    		registreren van uw netwerkkaart of netwerkadapter die tijdens de installatie is aangesloten op uw kabel- of \
    		DSL-modem. Als het bij uw ISP verplicht is om het MAC-adres \
    		te registreren, zoekt u aan de hand van de instructies in het \
    		besturingssysteem op uw computer het MAC-adres van de adapter op.";
helpmac.phase3="Voor Windows 98 en Windows Millennium:";
helpmac.phase4="1.  Klik op de knop <b>Start</b> en selecteer <b>Uitvoeren</b>.";
helpmac.phase5="2.  Typ <b>winipcfg </b>in het veld dat wordt weergegeven en druk op de knop <b>OK</b>.";
helpmac.phase6="3.  Selecteer de Ethernet-adapter die u wilt gebruiken.";
helpmac.phase7="4.  Klik op <b>Meer info</b>.";
helpmac.phase8="5.  Noteer het MAC-adres van de adapter.";
helpmac.phase9="1.  Klik op de knop <b>Start</b> en selecteer <b>Uitvoeren</b>.";
helpmac.phase10="2.  Typ <b>cmd</b> in het veld dat wordt weergegeven en druk op de knop <b>OK</b>.";
helpmac.phase11="3.  Typ <b>ipconfig /all</b> in de opdrachtprompt en kijk wat het fysieke adres van de Ethernet-adapter is.";
helpmac.phase12="4.  Noteer het MAC-adres van de adapter.";
helpmac.phase13="Aan de hand van de volgende instructies kunt u het MAC-adres van de netwerkadapter naar de router klonen en hoeft u geen \
    		contact op te nemen met uw internetprovider om het geregistreerde MAC-adres te wijzigen:";
helpmac.phase14="Voor Windows 2000 en Windows XP:";
helpmac.phase15="1.  Selecteer <b>Inschakelen</b>.";
helpmac.phase16="2.  Geef het adres van de MAC-adapter op in het veld <i>MAC-adres</i>.";
helpmac.phase17="3.  Klik op de knop <b>Instellingen opslaan</b>.";
helpmac.phase18="Als u de functie MAC-adres klonen wilt uitschakelen, behoudt u de standaardinstelling <b>Uitschakelen</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="In het scherm <i>Routing</i> kunt u de routingmodus en -instellingen opgeven. \
		 Over het algemeen wordt de gateway-modus aangeraden.";
hrouting.phase3="Kies de juiste werkmodus. Gebruik de standaardinstelling <b> \
    		 Gateway</b> als de router de host is uw internetverbinding. (De gateway-modus wordt voor de meeste gebruikers aanbevolen). Selecteer <b> \
    		 Router</b> als de router voorkomt in een netwerk met andere routers.";
hrouting.phase4="Dynamische routing (RIP)";
hrouting.phase5="Opmerking: deze functie is niet beschikbaar wanneer de modus Gateway is geselecteerd.";
hrouting.phase6="Bij dynamische routing kan de router zich automatisch aanpassen aan fysieke veranderingen in\
    		 de netwerkstructuur en routingtabellen met andere routers uitwisselen. De \
    		 router bepaalt de route van de netwerkpakketten op basis van het minste aantal \
    		 knooppunten tussen de bron en het doel. ";
hrouting.phase7="Selecteer <b>WAN</b> als u dynamische routing voor de WAN-zijde wilt inschakelen. \
    		 U schakelt deze functie voor de LAN- en WLAN-zijde in door <b>LAN en WLAN</b> te selecteren. \
    		 U schakelt deze functie voor zowel de WAN als LAN in door <b> \
    		 Beide</b> te selecteren. U schakelt de dynamische routing voor alle gegevenstransmissies uit door de \
    		 standaardinstelling <b>Uitschakelen</b> te gebruiken. ";
hrouting.phase8="Statische routing,&nbsp; doel-IP, subnetmasker, gateway en interface";
hrouting.phase9="U stelt een statische route tussen de router en een ander netwerk \
    		 in door een getal in de keuzelijst <i>Statische routing</i> te selecteren. (Een statische \
    		 route is een vooraf bepaald pad waarover netwerkgegevens moeten gaan om \
    		 bij een bepaalde host of een bepaald netwerk te komen.)";
hrouting.phase10="Voer de volgende gegevens in:";
hrouting.phase11="Doel-IP-adres </b>- \
		  Het doel-IP-adres is het adres van het externe netwerk of de host waaraan u een statische route wilt toewijzen.";
hrouting.phase12="Subnetmasker </b>- \
		  Het subnetmasker bepaalt welk deel van een IP-adres het netwerk en welk \
    		  deel de host is. ";
hrouting.phase13="Gateway </b>- \
		  Dit is het IP-adres van het apparaat dat als gateway dient en dat de verbinding tussen de router en het netwerk of de host mogelijk maakt.";
hrouting.phase14="Selecteer \
    		      		  <b>LAN en WLAN</b> of <b>WAN </b>in de vervolgkeuzelijst <i>Interface</i>. Welke optie u dient te selecteren, is afhankelijk van waar het doel-IP-adres zich bevindt.";
hrouting.phase15="U slaat de wijzigingen op door op de knop <b>Toepassen</b> te klikken. U annuleert de niet-opgeslagen wijzigingen door op de knop <b> \
    		  Annuleren </b>te klikken.";
hrouting.phase16="Als u meer statische routes wilt invoeren, herhaalt u stap 1-4.";
hrouting.phase17="Item verwijderen";
hrouting.phase18="Als u een statische route wilt verwijderen, gaat u als volgt te werk:";
hrouting.phase19="Selecteer het itemnummer van de statische route in de vervolgkeuzelijst <i>Statische routing</i>.";
hrouting.phase20="Klik op de knop <b>Item verwijderen</b>.";
hrouting.phase21="U slaat een verwijdering op door op de knop <b>Toepassen</b> te klikken. U annuleert een verwijdering door op de knop <b> \
    		  Annuleren </b>te klikken. ";
hrouting.phase22="Routingtabel weergeven";
hrouting.phase23="Klik op de knop \
    		      		  <b>Routingtabel weergeven</b> als u alle geldige, in gebruik zijnde routevermeldingen wilt weergeven. Voor elke vermelding wordt het volgende weergegeven: \
    		  het IP-adres van de bestemming, subnetmasker, gateway en interface. Klik op de knop <b>Vernieuwen</b> als u de weergegeven gegevens wilt vernieuwen. Klik op de knop <b> \
    		  Sluiten</b> als u wilt terugkeren naar het scherm <i>Routing</i>.";
hrouting.phase24="Doel-IP-adres</b> - \
		  Het doel-IP-adres is het adres van het netwerk of de host waaraan de statische route is toegewezen. ";
hrouting.phase25="Subnetmasker</b> - \
		  Het subnetmasker bepaalt welk deel van een IP-adres het netwerk en welk deel de host is.";
hrouting.phase26="Gateway</b> - het IP-adres van het apparaat dat als gateway dient en dat de verbinding tussen de router en het netwerk of de host mogelijk maakt.";
hrouting.phase27="Interface</b> - Deze interface geeft aan of het doel-IP-adres voor \
    		      		  <b> LAN &amp; WLAN </b>(interne bekabelde en draadloze netwerken), <b>WAN</b> (internet), of <b> \
    		  Lus</b> (een dummynetwerk waarin één computer als een netwerk fungeert, nodig voor bepaalde softwareprogramma's) is. ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="WAN-verzoek blokkeren";
hfirewall.phase2="Door de functie 'WAN-verzoek blokkeren' in te schakelen kunt u voorkomen dat het netwerk door \
    		 andere internetgebruikers kan worden gedetecteerd (pingen). Uw netwerk wordt met deze functie \
    		 ook beter beveiligd, omdat de netwerkpoorten worden verborgen. \
    		 Als u WAN-verzoeken blokkeert, wordt het voor \
    		 gebruikers van buitenaf moeilijker uw netwerk binnen te dringen. Deze functie is standaard \
    		 ingeschakeld. Selecteer <b>Uitschakelen</b> als u deze functie wilt uitschakelen.";
hfirewall.right="De SPI-firewall in- of uitschakelen.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN-doorvoer";
helpvpn.phase2="VPN (Virtual Private Networking) wordt doorgaans gebruikt voor zakelijke netwerken. Voor \
    		VPN-tunnels ondersteunt de router IPSec-doorvoer en PPTP-doorvoer.";
helpvpn.phase3="<b>IPSec</b> - IPSec (Internet Protocol Security) is een<b> </b>serie protocollen waarmee een \
      		veilige uitwisseling van pakketten op de IP-laag kan worden gegarandeerd. Om IPSec-tunnels via de router door te geven \
      		is IPSec-doorvoer standaard ingeschakeld. U schakelt \
      		IPSec-doorvoer uit door het selectievakje naast <i>IPSec</i> uit te schakelen.";
helpvpn.phase4="<b>PPTP </b>- het protocol Point-to-Point Tunneling is de methode voor het inschakelen van VPN-sessies \
      		naar een Windows NT 4.0- of 2000-server. Om PPTP-tunnels via de router door te geven \
      		is PPTP-doorvoer standaard ingeschakeld. U schakelt \
      		PPT-doorvoer uit door het selectievakje naast <i>PPTP</i> uit te schakelen.";

helpvpn.right="U kunt PPTP-, L2TP- of IPSec-doorvoer inschakelen zodat apparaten in uw netwerk \
		kunnen communiceren via VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filters";
hfilter.phase2="In het scherm <i>Filters</i> kunt u de toegang tot internet blokkeren of bepaalde soorten internetgebruik \
		toestaan. U kunt een internettoegangsbeleid voor bepaalde computers instellen en \
		filters instellen met behulp van netwerkpoortnummers.";
hfilter.phase3="Deze functie stelt u in staat tot tien internettoegangsbeleidsregels \
    		voor individuele computers in te stellen. Deze computers worden aangegeven met hun IP- of MAC-adres. Voor \
    		elk beleid worden computers aangegeven voor de opgegeven dagen en tijden.";
hfilter.phase4="Als u een instellingenset wilt maken of bewerken, gaat u als volgt te werk:";
hfilter.phase5="Selecteer het nummer van de instellingenset \(1-10\) in het vervolgkeuzemenu.";
hfilter.phase6="Geef in het veld <i>Profielnaam invoeren</i> een naam op.";
hfilter.phase7="Klik op de knop <b>Lijst met pc's bewerken</b>.";
hfilter.phase8="Klik op de knop <b>Toepassen</b> als u uw wijzigingen wilt opslaan. Klik op de knop <b>Annuleren</b> als u \
    		de niet-opgeslagen wijzigingen wilt annuleren. Klik op de knop <b>Sluiten</b> als u wilt terugkeren naar het scherm \
    		    		<i>Filters</i>.";
hfilter.phase9="Als u niet wilt dat tijdens de opgegeven dagen en \
    		tijden via internet verbinding met de vermelde computers kan worden gemaakt, gebruikt u de standaardinstelling <b>Internettoegang voor vermelde computers \
    		uitschakelen</b>. Als u wel wilt dat tijdens de opgegeven dagen en tijden via internet \
    		verbinding met de vermelde computers kan worden gemaakt, selecteert u het keuzerondje naast<i> Internettoegang \
    		voor vermelde computers inschakelen</i>.";
hfilter.phase10="Geef in het scherm <i>Lijst met computers</i> de gewenste computers per IP-adres of MAC-adres op. Geef de \
    		desbetreffende IP-adressen op in de <i>IP</i>-velden. Als u een groot aantal \
    		IP-adressen hebt en deze wilt filteren, vult u de desbetreffende velden voor <i>IP-bereik</i> in. \
    		Geef de desbetreffende MAC-adressen op in de <i>MAC</i>-velden.";
hfilter.phase11="Stel in op welke tijd het filter actief moet zijn. Selecteer <b>24 uur</b>,<b> </b>of schakel het selectievakje naast <i>Van</i> \
    		in en geef een bepaalde tijdsduur aan met de vervolgkeuzelijsten. ";
hfilter.phase12="Stel in op welke dagen het filter actief is. Selecteer <b>Dagelijks</b> of de gewenste weekdagen. ";
hfilter.phase13="Klik op <b>Toevoegen aan instellingenset</b> als u uw wijzigingen wilt opslaan en activeren.";
hfilter.phase14="Als u meer instellingensets wilt maken of bewerken, herhaalt u stap 1-9.";
hfilter.phase15="Als u een instellingenset voor internettoegang wilt verwijderen, selecteert u het nummer van de set en klikt u op <b>Verwijderen</b>.";
hfilter.phase16="Voor een overzicht van alle toegangsregels klikt u op de knop <b>Samenvatting</b>. In het scherm <i> \
    		Samenvatting internettoegangsbeleid</i> worden het nummer,\
    		de naam, de dagen en de tijd van elke toegangsregel weergegeven. U verwijdert een toegangsbeleid door op het selectievakje bij dat beleid en vervolgens \
    		op de knop <b>Verwijderen</b> te klikken. Klik op de knop <b>Sluiten</b> als u wilt terugkeren naar het scherm \
    		<i>Filters</i>.";
hfilter.phase17="Gefilterd internetpoortbereik";
hfilter.phase18="Als u pc's wilt filteren op netwerkpoortnummer, selecteert u <b>Beide</b>, <b>TCP</b> of <b>UDP</b>, \
    		afhankelijk van op de protocollen die u wilt filteren. Voer<b> </b>vervolgens in de poortnummervelden de \
    		poortnummers in die u wilt filteren. Pc's die zijn verbonden met de \
    		router kunnen niet langer toegang krijgen tot de hier vermelde poortnummers. Als u \
    		een filter wilt uitschakelen, selecteert u <b>Uitschakelen</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Selecteer alle waarden en klik op <b>Instellingen opslaan</b> als u alle instellingen wilt opslaan. Klik op de knop <b>Wijzigingen \
		annuleren </b> als u de niet-opgeslagen wijzigingen wilt annuleren.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="Met de DMZ-hostingfunctie kan één lokale gebruiker verbinding met internet maken en bepaalde services gebruiken, \
		zoals videoconferenties en onlinegames. \
		DMZ-hosting wijst alle poorten op hetzelfde moment aan één computer toe. De functie voor het doorsturen van poorten \
    		is veiliger, omdat alleen de poorten worden geopend die u wilt openen, \
    		terwijl bij DMZ-hosting alle poorten op één computer worden geopend, \
    		zodat via internet verbinding met de computer kan worden gemaakt.";    		
helpdmz.phase2="Op elke computer waarvan de poort wordt doorgestuurd, moet de DHCP clientfunctie worden uitgeschakeld \
    		en moet er een nieuw, vast IP-adres worden toegewezen, omdat het \
    		IP-adres kan veranderen wanneer de DHCP-functie wordt gebruikt.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Als u één pc wilt weergeven, selecteert u ";
helpdmz.phase4="Geef in het veld <i>IP-adres DMZ-host</i> het IP-adres van de computer op.";



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
 
