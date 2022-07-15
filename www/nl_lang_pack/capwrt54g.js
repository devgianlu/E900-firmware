var firewall2 = new Object();
firewall2.natredir="Internet NAT Redirection alleen filteren voor IPv4-internet";
firewall2.ident="Filter IDENT (poort 113)";
firewall2.multi="Filter Multicast";
firewall2.internetfilter="Internetfilter";
firewall2.webfilter="Webfilter";

var hupgrade = new Object();
hupgrade.right1="Klik op de knop Bladeren om het firmware-bestand te selecteren dat u wilt uploaden naar de router.";
hupgrade.right2="Klik op de knop Upgraden om het upgraden te starten. Het upgraden mag niet worden onderbroken.";
hupgrade.wrimage="Het afbeeldingsbestand is onjuist.";

var hfacdef = new Object();
hfacdef.right1="Hiermee herstelt u de fabrieksinstellingen. Al uw instellingen zullen verloren gaan.";
hfacdef.warning="Waarschuwing! Als u op OK klikt, worden de fabrieksinstellingen hersteld en gaan uw huidige instellingen verloren.";

var hdiag = new Object();
hdiag.right1="Voer het IP-adres of domein in dat u wilt pingen en klik op Ping.";
hdiag.right2="Voer het IP-adres of domein in dat u wilt traceren en klik op Traceroute.";

var hlog = new Object();
hlog.right1="U kunt de logboeken voor <b>Inkomend</b> en <b>Uitgaand</b> verkeer in- en uitschakelen door het desbetreffende keuzerondje te selecteren.";

var manage2 = new Object();
manage2.webacc="Toegang voor lokaal beheer";
manage2.accser="Toegangsserver";
manage2.wlacc="Draadloze &nbsp;internettoegang";
manage2.vapass="Wachtwoordbevestiging komt niet overeen met wachtwoord. Voer wachtwoord opnieuw in.";
manage2.passnot="De wachtwoordbevestiging komt niet overeen.";
manage2.selweb="U moet een webserver selecteren.";
manage2.changpass="De router is beveiligd met het standaardwachtwoord. Om veiligheidsredenen moet u het wachtwoord wijzigen voordat u de functie Extern beheer kunt inschakelen. Klik op OK om het wachtwoord te wijzigen. Klik op Annuleren om de functie Extern beheer niet in te schakelen.";
manage2.webutiacc="Toegang via";
manage2.wlutiacc="Toegang via WLAN";

var hmanage2 = new Object();
hmanage2.right1="<b>Lokale routertoegang: </b>Het wachtwoord van de router wijzigen. Voer een nieuw routerwachtwoord in en typ dit wachtwoord nogmaals in het veld voor wachtwoordbevestiging om het te bevestigen.<br>";
hmanage2.right2="<b>Internettoegang: </b>Toegang tot het webhulpprogramma van de router instellen.";
hmanage2.right3="<b>Externe routertoegang: </b>Externe toegang tot de router instellen. Kies de gewenste poort. Als u gebruikmaakt van het standaardwachtwoord van de router, moet u dit eerst wijzigen.";
hmanage2.right4="<b>UPnP: </b>Wordt door bepaalde programma's gebruikt om poorten automatisch te openen voor communicatie.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC-adres</b>. Het MAC-adres van de router, zoals dit wordt weergegeven in het lokale WLAN-netwerk.";
hstatwl2.right2="<b>Modus</b>. De draadloze modus (Gemengd, Alleen G of Uitgeschakeld) van het netwerk, die u hebt ingesteld op het tabblad WLAN.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC-adres</b>. Het MAC-adres van de router, zoals dit wordt weergegeven in uw LAN-netwerk.";
hstatlan2.right2="<b>IP-adres</b>. Het IP-adres van de router, zoals dit wordt weergegeven in uw LAN-netwerk.";
hstatlan2.right3="<b>Subnetmasker</b>. Als de router een subnetmasker gebruikt, wordt dat hier weergegeven.";
hstatlan2.right4="<b>DHCP-server</b>. Als de router wordt gebruikt als DHCP-server, wordt dat hier weergegeven.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statisch";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra-kabel";
hstatrouter2.connecting="Maakt verbinding";
hstatrouter2.disconnected="Niet verbonden";
hstatrouter2.disconnect="Verbinding verbreken";
hstatrouter2.right1="<b>Firmwareversie.  </b>De huidige firmware van de router.";
hstatrouter2.right2="<b>Huidige tijd.  </b>De huidige tijd, zoals u deze hebt ingesteld op het tabblad Instellingen.";
hstatrouter2.right3="<b>MAC-adres.  </b>Het MAC-adres van de router dat wordt doorgegeven aan uw internetprovider.";
hstatrouter2.right4="<b>Naam router.  </b>De routernaam die u hebt ingesteld op het tabblad Instellingen.";
hstatrouter2.right5="<b>Configuratietype.  </b>De gegevens die uw internetprovider nodig heeft om verbinding te kunnen maken met internet. Deze gegevens zijn ingevoerd op het tabblad Instellingen. U kunt een verbinding tot stand brengen met de knop <b>Verbinding maken</b> of verbreken met de knop <b>Verbinding verbreken</b>.";
hstatrouter2.authfail=" verificatie mislukt";
hstatrouter2.noip="Kan geen IP-adres ontvangen van ";
hstatrouter2.negfail=" onderhandeling mislukt";
hstatrouter2.lcpfail=" LCP-onderhandeling mislukt";
hstatrouter2.tcpfail="Kan geen TCP-verbinding maken met ";
hstatrouter2.noconn="Kan geen verbinding maken met ";
hstatrouter2.server=" server";
hstatrouter2.pppoenoip="Kan geen IP-adres ontvangen van PPPoE";
hstatrouter2.undetermined="Onbepaald";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ: </b>Als u deze optie inschakelt, wordt uw router weergegeven op internet. Alle poorten zijn toegankelijk vanaf internet.";

var hforward2 = new Object();
hforward2.right1="<b>Doorsturen poortbereik: </b>Sommige toepassingen kunnen alleen correct functioneren wanneer bepaalde poorten zijn geopend. Dit zijn onder andere servers en sommige online games. Wanneer een verzoek aan een bepaalde poort wordt ontvangen van internet, zal de router deze gegevens doorsturen naar de opgegeven computer. Om beveiligingsredenen is het aan te bevelen om alleen de poorten die u gebruikt door te sturen en het selectievakje <b>Inschakelen</b> pas in te schakelen nadat u de instellingen hebt gemaakt.";

var hfilter2 = new Object();
hfilter2.delpolicy="Beleid verwijderen?";
hfilter2.right1="<b>Internettoegangsbeleid: </b>U kunt maximaal 10 beleidsregels definiëren. Klik op <b>Verwijderen</b> als u een beleid wilt verwijderen of klik op <b>Samenvatting</b> als u een overzicht van het beleid wilt weergeven.";
hfilter2.right2="<b>Status: </b>Een beleid in- of uitschakelen.";
hfilter2.right3="<b>Beleidsnaam: </b>Een naam toewijzen aan uw beleid.";
hfilter2.right4="<b>Type instellingenset: </b>Kies Internettoegang of Inkomend verkeer.";
hfilter2.right5="<b>Dagen: </b>Kies de dagen in de week waarop het beleid van toepassing is.";
hfilter2.right6="<b>Tijden: </b>Voer de tijden in waarop het beleid van toepassing is.";
hfilter2.right7="<b>Geblokkeerde diensten: </b>U kunt desgewenst de toegang tot bepaalde services blokkeren. Klik op <b>Diensten toevoegen/bewerken</b> als u deze instellingen wilt wijzigen.";
hfilter2.right8="<b>Websiteblokkering op URL: </b>U kunt de toegang tot bepaalde websites blokkeren op basis van de URL van de site.";
hfilter2.right9="<b>Websiteblokkering op trefwoord: </b>U kunt de toegang tot bepaalde websites blokkeren op basis van trefwoorden die zijn opgenomen in de pagina.";

var hportser2 = new Object();
hportser2.submit="Toepassen";

var hwlad2 = new Object();
hwlad2.authtyp="Verificatietype";
hwlad2.basrate="Basissnelheid";
hwlad2.mbps="Mbps";
hwlad2.def="Standaard";
hwlad2.all="Alle";
hwlad2.defdef="(Standaard: standaard)";
hwlad2.fburst="Frame-burst";
hwlad2.milli="Milliseconden";
hwlad2.range="Bereik";
hwlad2.frathrh="Fragmentatiedrempel";
hwlad2.apiso="AP-isolatie";
hwlad2.off="Uit";
hwlad2.on="Aan";
hwlad2.right1="<b>Verificatietype: </b>Kies Auto of Gedeelde sleutel. Verificatie met een gedeelde sleutel is veiliger, maar vereist dat alle apparaten in uw netwerk deze vorm van verificatie ondersteunen.";

var hwlbas2 = new Object();
hwlbas2.right1='<b>WLAN-netwerkmodus: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster wordt automatisch ingeschakeld in de modus <b>Gemengd</b> en de modus <b>Alleen G</b>."); %> Als u Wireless-G-clients wilt uitsluiten, kiest u de modus <b>Alleen B</b>. U kunt draadloze toegang uitschakelen met de optie <b>Uitschakelen</b>.';

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA - Vooraf gedeelde sleutel";
hwlsec2.wparadius="WPA - RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="WPA2 - Alleen vooraf gedeelde sleutel";
hwlsec2.wpa2radius="WPA2 - Alleen RADIUS";
hwlsec2.wpa2pskmix="WPA2 - Vooraf gedeelde sleutel gemengd";
hwlsec2.wpa2radiusmix="WPA2 - RADIUS gemengd";
hwlsec2.wpa2personal="WPA2-Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA gemengde modus";
hwlsec2.enterprisemixed="WPA2/WPA Enterprise gemengde modus"
hwlsec2.pskpersonal="PSK-Personal";
hwlsec2.pskenterprise="PSK-Enterprise";
hwlsec2.psk2personal="PSK2-Personal";
hwlsec2.psk2enterprise="PSK2-Enterprise";

hwlsec2.right1="<b>Beveiligingsmodus: </b>Kies Uitschakelen, WEP, WPA met vooraf gedeelde sleutel, WPA RADIUS of RADIUS. Alle apparaten in uw netwerk moeten dezelfde beveiligingsmodus gebruiken om te kunnen communiceren.";

var hwmac2 = new Object();
hwmac2.right1="<b>MAC-adres klonen: </b>Sommige internetproviders vereisen een geregistreerd MAC-adres. Als u geen nieuw MAC-adres wilt registreren, kunt u de router het MAC-adres laten klonen dat is geregistreerd bij uw internetprovider.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS-dienst: </b>Met DDNS kunt u domeinnamen gebruiken in plaats van IP-adressen om toegang tot uw netwerk te krijgen. De dienst beheert wisselende IP-adressen en werkt uw domeininformatie automatisch bij. Voor deze dienst moet u zich aanmelden bij TZO.com of bij DynDNS.org.";
hddns2.right2="Klik <b><a target=_blank href=http://Linksys.tzo.com>hier</a></b> om u AAN TE MELDEN voor een <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GRATIS TZO-proefaccount";
hddns2.right3="Klik <b><a target=_blank href=https://controlpanel.tzo.com>hier</a></b> om uw <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO Account te beheren.";
hddns2.right4="Klik <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>hier</a></b> om een TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS-abonnement aan te schaffen";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Ondersteuning/tutorials</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Bedrijfsmodus: </b>Als de router uw internetverbinding host, selecteert u de modus <b>Gateway</b>. Als zich nog een router in uw netwerk bevindt, selecteert u <b>Router</b>.";
hrouting2.right2="<b>Setnummer selecteren: </b>Het unieke routenummer. U kunt maximaal 20 routes definiëren.";
hrouting2.right3="<b>Routenaam: </b>Voer de naam in, die u wilt toewijzen aan deze route.";
hrouting2.right4="<b>Doel-IP LAN: </b>De externe host waaraan u de statische route wilt toewijzen.";
hrouting2.right5="<b>Subnetmasker: </b>Definieert het host- en het netwerkdeel.";

var hindex2 = new Object();
hindex2.telstra="Telstra-kabel";
hindex2.dns3="Statische DNS 3";
hindex2.hbs="HeartBeat-server";
hindex2.l2tps="L2TP-server";
hindex2.pptps="PPTP-server";
hindex2.hdhcp="<b>Automatische configuratie DHCP: </b>Deze instelling wordt meestal gebruikt door kabelinternetproviders.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Deze instelling wordt meestal gebruikt door DSL-internetproviders.<br>";
hindex2.hpppoe2="<b>Gebruikersnaam: </b>Voer de gebruikersnaam in die u hebt ontvangen van uw internetprovider.<br>";
hindex2.hpppoe3="<b>Wachtwoord: </b>Voer het wachtwoord in dat u hebt ontvangen van uw internetprovider.<br>";

hindex2.hstatic1="<b>Vast IP: </b>Deze instelling wordt meestal gebruikt voor zakelijke internetproviders.<br>";
hindex2.hstatic2="<b>Internet-IP-adres: </b>Voer het IP-adres in dat u hebt ontvangen van uw internetprovider.<br>";
hindex2.hstatic3="<b>Subnetmasker: </b>Voer het subnetmasker<br>";

hindex2.hpptp1="<b>PPTP: </b>Deze instelling wordt meestal gebruikt door DSL-internetproviders.<br>";
hindex2.hpptp2="<b>Internet-IP-adres: </b>Voer het IP-adres in dat u hebt ontvangen van uw internetprovider.<br>";
hindex2.hpptp3="<b>Subnetmasker: </b>Voer het subnetmasker<br>";
hindex2.hpptp4="<b>Gateway: </b>Voer het gateway-adres van uw internetprovider in<br>";

hindex2.hl2tp1="<b>L2TP: </b>Deze instelling wordt gebruikt door sommige Europese internetproviders.<br>";
hindex2.hl2tp2="<b>Gebruikersnaam: </b>Voer de gebruikersnaam in die u hebt ontvangen van uw internetprovider.<br>";
hindex2.hl2tp3="<b>Wachtwoord: </b>Voer het wachtwoord in dat u hebt ontvangen van uw internetprovider.<br>";

hindex2.hhb1="<b>Telstra-kabel: </b>Deze instelling wordt meestal gebruikt door DSL-internetproviders.<br>";
hindex2.hhb2="<b>Gebruikersnaam: </b>Voer de gebruikersnaam in die u hebt ontvangen van uw internetprovider.<br>";
hindex2.hhb3="<b>Wachtwoord: </b>Voer het wachtwoord in dat u hebt ontvangen van uw internetprovider.<br>";

hindex2.right1="<b>Hostnaam: </b>Voer de hostnaam in die u hebt ontvangen van uw internetprovider.<br>";
hindex2.right2="<b>Domeinnaam: </b>Voer de domeinnaam in die u hebt ontvangen van uw internetprovider.<br>";
hindex2.right3="<b>Lokaal IP-adres: </b>Het IP-adres van de router.<br>";
hindex2.right4="<b>Subnetmasker: </b>Het subnetmasker van de router.<br><br><br>";
hindex2.right5="<b>DHCP-server: </b>Hiermee beheert de router uw IP-adressen.<br>";
hindex2.right6="<b>Eerste-IP-adres: </b>Het IP-adres dat u als eerste wilt uitgeven.<br>";
hindex2.right7="<b>Tijdsinstelling: </b>Kies de tijdzone waarin u zich bevindt. De router kan de tijd automatisch aanpassen aan zomer- en wintertijd.";
hindex2.hdhcps1="<b>Maximumaantal DHCP-gebruikers: </b>U kunt het aantal IP-adressen dat de router uitgeeft, beperken.<br>";

var errmsg2 = new Object();
errmsg2.err0="Het IP-adres van de HeartBeat-server is ongeldig!";
errmsg2.err1="Item verwijderen?";
errmsg2.err2="Voer een SSID in.";
errmsg2.err3="Voer een gedeelde sleutel in.";
errmsg2.err4=" ongeldige hexadecimale getallen of meer dan 63 tekens bevat.";
errmsg2.err5="De sleutel moet minimaal 8 en maximaal 63 ASCII-tekens of 64 hexadecimale getallen bevatten.";
errmsg2.err6="Voer een sleutel in.";
errmsg2.err7="Onjuiste sleutellengte.";
errmsg2.err8="Voer een wachtzin in.";
errmsg2.err9="Het aantal checks is groter dan 40.";
errmsg2.err10="Spaties zijn niet toegestaan.";
errmsg2.err11="Nadat alle stappen zijn voltooid, slaat u de instellingen op door op Toepassen te klikken.";
errmsg2.err12="Voer een servicenaam in.";
errmsg2.err13="Deze servicenaam is al in gebruik.";
errmsg2.err14="Het LAN-IP-adres of het subnetmasker is onjuist.";

var trigger2 = new Object();
trigger2.ptrigger="Trigger poortbereik";
trigger2.qos="QoS";
trigger2.trirange="Getriggerd bereik";
trigger2.forrange="Doorgestuurd bereik";
trigger2.trirange1="Getriggerd bereik";
trigger2.forrange1="Doorgestuurd bereik";
trigger2.sport="Begin poortbereik";
trigger2.eport="Einde poortbereik";
trigger2.right1="Toepassing Voer de naam van de triggertoepassing in. <b>Getriggerd bereik</b> Voer voor elke toepassing het getriggerde poortbereik in. Zie de documentatie bij de Internettoepassing voor het/de gewenste poortnummer(s).<b>Begin poortbereik</b> Voer het poortnummer in van de eerste poort in het getriggerde bereik.<b>Einde poortbereik</b> Voer het poortnummer in van de laatste poort in het getriggerde bereik    <b>Doorgestuurd bereik</b> Voer voor elke toepassing het doorgestuurde poortbereik in. Raadpleeg de documentatie bij de internettoepassing voor de gewenste poortnummers.   <b>Begin poortbereik</b> Voer het poortnummer in van de eerste poort in het doorgestuurde bereik.   <b>Einde poortbereik</b> Voer het poortnummer in van de laatste poort in het doorgestuurde bereik.";

var bakres2 = new Object();
bakres2.conman="Configuratiebeheer";
bakres2.bakconf="Back-up van configuraties maken";
bakres2.resconf="Configuraties herstellen";
bakres2.bakres="Back-up en herstel";
bakres2.file2res="Selecteer het bestand dat de reservekopie bevat.";
bakres2.bakbutton="Back-up van configuraties maken";
bakres2.resbutton="Configuraties herstellen";
bakres2.right1="U kunt een reservekopie van de huidige configuratie maken voor het geval u de fabrieksinstellingen van de router moet herstellen.";
bakres2.right2="Klik op Reservekopie maken als u een reservekopie wilt maken van de huidige configuratie.";
bakres2.right3="Klik op Bladeren als u een configuratiebestand wilt selecteren dat is opgeslagen op uw pc.";
bakres2.right4="Klik op Herstellen als u alle huidige configuraties wilt overschrijven met de configuraties in het configuratiebestand.";

var qos = new Object();
qos.uband="Upload-bandbreedte";
qos.bandwidth="Bandbreedte";
qos.dpriority="Prioriteit apparaat";
qos.priority="Prioriteit";
qos.dname="Naam apparaat";
qos.low="Laag";
qos.medium="Gemiddeld";
qos.high="Hoog";
qos.highest="Hoogst";
qos.eppriority="Prioriteit LAN-poort";
qos.flowctrl="Gegevensstroombeheer";
qos.appriority="Prioriteit toepassing";
qos.specport="Specifieke poort";
qos.appname="Naam toepassing";
qos.alert1="De poortwaarde valt buiten het bereik [0-65535]";
qos.alert2="De waarde in Begin poortbereik is hoger dan die in Einde poortbereik.";
qos.confirm1="Als meerdere apparaten, LAN-poorten of toepassingen de prioriteit Hoog hebben, kan het effect van QoS verloren gaan.\nWilt u toch doorgaan?";

qos.optgame="Games optimaliseren";
qos.wqos="QoS voor LAN";
qos.wlqos="WMM   ";
qos.wlqos2="QoS voor WLAN";
qos.edca_ap="EDCA AP-parameters";
qos.edca_sta="EDCA STA-parameters";
qos.wme="WMM-ondersteuning";
qos.noack="Geen bevestiging";
qos.apsdsupp="WMM-ondersteuning";
qos.defdis="(Standaard: uitgeschakeld)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Geforceerd";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service)";
qos.intqccpri="Prioriteit voor internettoegang";
qos.category="Categorie";
qos.mediumrec="Gemiddeld (Aanbevolen)";
qos.normal="Normaal";
qos.msnmess="MSN Messenger";
qos.skype="Skype";
qos.yahoomess="Yahoo Messenger";
qos.winlivemsg="Windows Live Messenger";
qos.aim="AIM";
qos.winmediaplay="Windows Media Player";
qos.realplayer="RealPlayer";
qos.quicktime="QuickTime";
qos.itunes="iTunes";
qos.yahoomusic="Yahoo Music Jukebox";
qos.rhapsody="Rhapsody";
qos.addapp="Een nieuwe toepassing toevoegen";
qos.onlinegame="Online-games";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tourment";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.:Shadow Of Chernobyl";
qos.worldofwar="World Of Warcraft";
qos.suprecomm="Supreme Commander";
qos.thesims2="De Sims 2";
qos.titanquest="Titan Quest: Immortal Throne";
qos.battlefield="Battlefield 2142";
qos.halflife2="Half-Life 2: Episode 1";
qos.heroesofmight="Heroes of Might & Magic V";
qos.theelderscrolls="The Elder Scrolls IV";
qos.guildwarsfactions="Guild Wars Factions I & II";
qos.neverwinternights2="Neverwinter Nights 2";
qos.enemyterritory="Enemy Territory";
qos.worldinconflict="World In Conflict";
qos.callofduty4="Call of Duty 4";
qos.sinofasolarempire="Sins of A Solar Empire";
qos.halflifetob="Half-Life 2:The Orange Box";
qos.crysis="Crysis";
qos.frontlines="Frontlines";
qos.warhanmer4k="Warhammer 40,000:Dawn of War:Soulstorm";
qos.addgame="Een nieuwe game toevoegen";
qos.entername="Voer een naam in";
qos.etherport="Ethernetpoort";
qos.voicedevice="Spraakapparaat";
qos.voicemac="MAC-adres van mijn spraakapparaat";
qos.recommend="Aanbevolen";
qos.game="Game";
qos.mymac="Het MAC-adres van mijn pc";

qos.right1="Er zijn twee functies voor QoS (Quality of Service): QoS voor LAN, waarmee u apparaten die met een LAN-kabel zijn aangesloten op de router kunt beheren, en QoS voor WLAN, voor apparaten die een draadloze verbinding met de router hebben.";
qos.right2="<b>Prioriteit apparaat:</b> U kunt de prioriteit van al het verkeer dat afkomstig is van een apparaat in uw netwerk instellen door het apparaat een naam te geven en het MAC-adres in te voeren.";
qos.right3="<b>Prioriteit LAN-poort:</b> u kunt de gegevenssnelheid beheren op basis van de fysieke LAN-poort waarop uw apparaat is aangesloten. U kunt een hoge of lage prioriteit toewijzen aan gegevensverkeer dat afkomstig is van apparaten die zijn aangesloten op de LAN-poorten 1-4.";
qos.right4="<b>Prioriteit toepassing:</b> u kunt de gegevenssnelheid van een toepassing beheren op basis van de bandbreedte die de toepassing gebruikt. Schakel <b>Games optimaliseren</b> in als u wilt toestaan dat algemene gamepoorten automatisch een hogere prioriteit krijgen. U kunt voor maximaal acht toepassingen de instellingensets aanpassen door de gebruikte poortnummers in te voeren.";
qos.right5="Wireless QoS heet ook wel <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> en is ontwikkeld door de Wi-Fi Alliance<sup>TM</sup>. Selecteer Inschakelen om WMM te gebruiken wanneer u andere draadloze apparaten gebruikt die WMM ook ondersteunen.";
qos.right6="<b>Geen bevestiging:</b> Schakel deze optie in als u bevestiging wilt uitschakelen. Als deze optie is ingeschakeld, zal de router informatie niet opnieuw verzenden wanneer zich een fout voordoet.";
qos.exist = "Deze instelling bestaat al.";

var vpn2 = new Object();
vpn2.right1="U kunt PPTP-, L2TP- of IPSec-doorvoer inschakelen zodat apparaten in uw netwerk kunnen communiceren via VPN.";

var fail = new Object();
fail.msg="De ingevoerde waarden zijn ongeldig. Probeer het opnieuw.";

var pactrl = new Object();
pactrl.pactrl ="Restricties voor kinderen";
pactrl.accsign ="Account aanmelden";
pactrl.center1 ="De functie Internetrestricties voor kinderen van Linksys beschermt uw familie beter <br>tijdens het internetten.";
pactrl.center2 ="<li>Gemakkelijk in te stellen</li><br><li>Bescherm iedere computer thuis vanaf uw Linksys-router</li><br><li>Houd beter toezicht op het gebruik van internet, e-mail en expresberichten</li>";
pactrl.center3 ="** Als u zich aanmeldt voor deze dienst, worden de ingebouwde instellingensets voor internettoegang uitgeschakeld.";
pactrl.manageacc ="Account beheren";
pactrl.center4 ="Uw account voor Internetrestricties voor kinderen beheren";
pactrl.signparental ="Aanmelden voor de dienst Internetrestricties voor kinderen";
pactrl.moreinfo ="Meer info";
pactrl.isprovision ="apparaat is beveiligd";
pactrl.notprovision ="apparaat niet beveiligd";
pactrl.right1 ="In het scherm Internetrestricties voor kinderen kunt u zich aanmelden en uw account voor Internetrestricties voor kinderen beheren. De dienst Internetrestricties voor kinderen is een effectief hulpmiddel van Linksys voor het beheren van de beschikbaarheid van internetdiensten, -toegang en -functies voor elk lid van uw gezin.";

var satusroute = new Object();
satusroute.localtime ="Niet beschikbaar";

var succ = new Object();
succ.autoreturn ="U wordt over enkele seconden teruggebracht naar de vorige pagina.";
succ.return_desc = "U wordt over enkele seconden naar de pagina Veilig upgraden gebracht.";
succ.interrupt_desc = "Onderbreek de upgrade NIET. Een ogenblik geduld...";
succ.return_index = "U wordt over enkele seconden naar de pagina Basisinstellingen gebracht. ";


var gn = new Object();
gn.gnip="Gastnetwerk-IP";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Gastnetwerknaam (SSID)";
gn.err1="Het IP-adres van het gastnetwerk mag niet hetzelfde subnet zijn als het LAN-adres.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Duur van account";
gn.minutes="uur";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title="Gasttoegang";
gn.tips0="Onjuist wachtwoord. Voer het opnieuw in";
gn.tips1="Voer het wachtwoord in om toegang te krijgen tot deze hotspot.";
gn.login=" Aanmelden";
gn.err3="SSID 5G SSID zelfde als Gast-SSID. Wijzig een van beiden.";
gn.err4="SSID 2,4G SSID zelfde als Gast-SSID. Wijzig een van beiden.";
gn.err5="Het LAN-IP-adres mag niet hetzelfde subnet zijn als het IP-adres van het gastnetwerk.";
gn.err6="Het netwerk 192.168.33.0/24 (IP-adressen 192.168.33.0 – 255) is gereserveerd voor het draadloze gastnetwerk. Gebruik een ander netwerkadres.";
gn.tips6=" Voer het gastwachtwoord in om toegang te krijgen tot internet. Vraag de eigenaar om het wachtwoord als u niet weet wat het wachtwoord is. U vindt het gastwachtwoord via Linksys Connect.";
gn.dv="Weergave (desktop)";
gn.mv="Weergave (mobiel)";
gn.context="Voer het gastwachtwoord in om toegang te krijgen tot internet. Vraag de eigenaar om het wachtwoord als u niet weet wat het wachtwoord is. U vindt het gastwachtwoord via Linksys Connect.";
gn.nat="Gasttoegang is niet beschikbaar als NAT is uitgeschakeld.  Doorgaan met het opslaan van uw wijzigingen?";




