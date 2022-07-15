var firewall2 = new Object();
firewall2.natredir="NAT-omdirigering af internetfilter kun til IPv4-internet";
firewall2.ident="Filtrer IDENT (Port 113)";
firewall2.multi="Filtrer multicast";
firewall2.internetfilter="Internetfiltre";
firewall2.webfilter="Webfiltre";

var hupgrade = new Object();
hupgrade.right1="Klik p� knappen Gennemse for at v�lge den firmwarefil, der skal uploades til routeren.";
hupgrade.right2="Klik p� knappen Opgrader for at starte opgraderingsprocessen. Opgraderingen m� ikke afbrydes.";
hupgrade.wrimage="Billedfilen er forkert.";

var hfacdef = new Object();
hfacdef.right1="Dette nulstiller alle indstillinger til fabriksindstillingerne. Alle dine indstillinger slettes.";
hfacdef.warning="Advarsel! Hvis du klikker p� OK, nulstilles enheden til fabriksindstillingerne, og alle tidligere indstillinger slettes.";

var hdiag = new Object();
hdiag.right1="Indtast den IP-adresse eller det dom�nenavn, du vil pinge, og klik p� knappen Ping.";
hdiag.right2="Indtast den IP-adresse eller det dom�nenavn, du vil spore, og klik p� knappen Traceroute.";

var hlog = new Object();
hlog.right1="Du kan aktivere eller deaktivere brugen af <b>Indg�ende</b> og <b>Udg�ende</b> logs ved at v�lge den relevante alternativknap.";

var manage2 = new Object();
manage2.webacc="Adgang til lokal styring";
manage2.accser="F� adgang til serveren";
manage2.wlacc="Tr�dl�s adgang til &nbsp;internettet";
manage2.vapass="Den bekr�ftede adgangskode matcher ikke den indtastede adgangskode. Genindtast adgangskoden.";
manage2.passnot="Den bekr�ftede adgangskode matcher ikke.";
manage2.selweb="Du skal v�lge en webserver.";
manage2.changpass="Routeren er i �jeblikket indstillet til standardadgangskoden. Som sikkerhedsforanstaltning skal du �ndre adgangskoden, f�r funktionen Fjernstyring kan aktiveres. Klik p� knappen OK for at �ndre din adgangskode. Klik p� knappen Annuller for at lade funktionen Fjernstyring forblive deaktiveret.";
manage2.webutiacc="Adgang via";
manage2.wlutiacc="Adgang via tr�dl�s";

var hmanage2 = new Object();
hmanage2.right1="<b>Lokal routeradgang: </b>Herfra kan du �ndre routerens adgangskode. Indtast en ny routeradgangskode, og indtast den herefter igen i feltet Genindtast for at bekr�fte for at bekr�fte adgangskoden.<br>";
hmanage2.right2="<b>Internetadgang: </b>Giver dig mulighed for at konfigurere adgangsindstillingerne til routerens webhj�lpeprogram.";
hmanage2.right3="<b>Fjernstyret routeradgang: </b>Giver dig mulighed for at f� fjernadgang til routeren. V�lg den port, du vil benytte. Du skal �ndre adgangskoden til routeren, hvis den stadig bruger standardadgangskoden.";
hmanage2.right4="<b>UPnP : </b>Bruges af visse programmer til at �bne kommunikationsporte automatisk.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC-adresse</b>. Dette er routerens MAC-adresse, som vist i dit lokale tr�dl�se netv�rk.";
hstatwl2.right2="<b>Tilstand</b>. N�r du v�lger det under fanen Tr�dl�s, viser det den tr�dl�se tilstand (Blandet, Kun G eller Deaktiveret), som bruges af netv�rket.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC-adresse</b>. Dette er routerens MAC-adresse, som vist i dit lokale Ethernet-netv�rk.";
hstatlan2.right2="<b>IP-adresse</b>. Det viser routerens IP-adresse, som den vises i dit lokale Ethernet-netv�rk.";
hstatlan2.right3="<b>Undernetmaske</b>. N�r routeren bruger en undernetmaske, vises det her.";
hstatlan2.right4="<b>DHCP-server</b>. Hvis du bruger routeren som en DHCP-server, vil det blive vist her.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statisk";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="Opretter forbindelse";
hstatrouter2.disconnected="Forbindelse afbrudt";
hstatrouter2.disconnect="Afbryd forbindelse";
hstatrouter2.right1="<b>Firmware-version. </b>Dette er routerens aktuelle firmware.";
hstatrouter2.right2="<b>Aktuelt tidsrum.  </b>Dette viser tiden, som du angiver under fanen Konfiguration.";
hstatrouter2.right3="<b>MAC-adresse. </b>Dette er routerens MAC-adresse, som det vises for din internetudbyder.";
hstatrouter2.right4="<b>Routernavn. </b>Dette er det specifikke navn for routeren, som du kan angive under fanen Konfiguration.";
hstatrouter2.right5="<b>Konfigurationstype. </b>Dette viser de oplysninger, som kr�ves af din internetudbyder for at oprette forbindelse til internettet. Disse oplysninger blev angivet under fanen Konfiguration. Du kan <b>Tilslutte</b> eller <b>Frakoble</b> din forbindelse her ved at klikke p� denne knap.";
hstatrouter2.authfail=" godkendelse mislykket";
hstatrouter2.noip="Kan ikke f� en IP-adresse fra ";
hstatrouter2.negfail=" forhandling mislykket";
hstatrouter2.lcpfail=" LCP-forhandling mislykket";
hstatrouter2.tcpfail="Kan ikke oprette en TCP-forbindelse til ";
hstatrouter2.noconn="Kan ikke oprette forbindelse til ";
hstatrouter2.server=" serveren";
hstatrouter2.pppoenoip="Kan ikke f� en IP-adresse fra PPPoE";
hstatrouter2.undetermined="Ubestemt";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>Hvis du aktiverer denne indstilling, fremvises din router til internettet. Alle porte vil v�re tilg�ngelige fra internettet";

var hforward2 = new Object();
hforward2.right1="<b>Viderestilling af portinterval : </b>Visse programmer kr�ver m�ske, at visse porte �bnes, for at kunne fungere korrekt. Eksempler p� disse programmer er servere og visse onlinespil. N�r en foresp�rgsel efter en bestemt port kommer fra internettet, vil routeren viderestille dataene til den computer, du angiver. Pga. sikkerhedshensyn, vil du m�ske begr�nse viderestilling af porte til udelukkende de porte, som du bruger, og fjerne markeringen i markeringsfeltet <b>Aktiver</b>, efter du er f�rdig.";

var hfilter2 = new Object();
hfilter2.delpolicy="Slet reglerne?";
hfilter2.right1="<b>Internetadgangsregler : </b>Du kan definere op til 10 adgangsregler. Klik p� <b>Slet</b> for at slette en regel eller <b>Oversigt</b>, for at se en oversigt over reglen.";
hfilter2.right2="<b>Status : </b>Aktiver eller deaktiver en regel.";
hfilter2.right3="<b>Regelnavn : </b>Reglen kan gives et navn.";
hfilter2.right4="<b>Regeltype : </b>V�lg mellem internetadgang og indg�ende trafik.";
hfilter2.right5="<b>Dage : </b>V�lg den dag i ugen, fra hvilken reglen skal g�lde.";
hfilter2.right6="<b>Tidspunkt : </b>Indtast det tidspunkt p� dagen, fra hvilket reglen skal g�lde.";
hfilter2.right7="<b>Blokerede tjenester : </b>Du kan v�lge at blokere adgangen til visse tjenester. Klik p� <b>Tilf�j/Rediger</b> tjenester for at tilpasse disse indstillinger.";
hfilter2.right8="<b>Blokering af websteder med URL : </b>Man kan blokere adgangen til bestemte websteder ved at indtaste deres URL-adresser.";
hfilter2.right9="<b>Blokering af websteder med n�gleord : </b>Man kan blokere adgangen til websteder ved at angive n�gleord, som findes p� websiderne.";

var hportser2 = new Object();
hportser2.submit="Anvend";

var hwlad2 = new Object();
hwlad2.authtyp="Godkendelsestype";
hwlad2.basrate="Basishastighed";
hwlad2.mbps="Mbps";
hwlad2.def="Standard";
hwlad2.all="Alle";
hwlad2.defdef="(Standard: Standard)";
hwlad2.fburst="Frame Burst";
hwlad2.milli="Millisekunder";
hwlad2.range="D�kning";
hwlad2.frathrh="Fragmentationst�rskel";
hwlad2.apiso="AP-isolation";
hwlad2.off="Fra";
hwlad2.on="Til";
hwlad2.right1="<b>Godkendelsestype : </b>Du kan v�lge mellem Auto eller Delt n�gle. Godkendelse af delt n�gle er mere sikkert, men alle enheder p� dit netv�rk skal underst�tte godkendelse af delt n�gle.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Tilstand for tr�dl�st netv�rk: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster aktiveres automatisk til <b>Blandet</b> tilstand og <b>Kun G</b>-tilstand.");%>Hvis du vil udelukke Tr�dl�s-G-klienter, skal du v�lge <b>Kun B</b>-tilstand. V�lg <b>Deaktiver</b>, hvis du vil deaktivere tr�dl�s adgang.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA Pre-Shared Key";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
hwlsec2.wpaenterprise="WPA - Enterprise";
hwlsec2.wpa2psk="Kun WPA2 Pre-Shared Key";
hwlsec2.wpa2radius="Kun WPA2 RADIUS";
hwlsec2.wpa2pskmix="Blandet WPA2 Pre-Shared Key";
hwlsec2.wpa2radiusmix="Blandet WPA2 RADIUS";
hwlsec2.wpa2personal="WPA2-Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA Blandet tilstand";
hwlsec2.enterprisemixed="WPA2/WPA Enterprise Blandet tilstand";
hwlsec2.pskpersonal="PSK Personal";
hwlsec2.pskenterprise="PSK Enterprise";
hwlsec2.psk2personal="PSK2 Personal";
hwlsec2.psk2enterprise="PSK2 Enterprise";

hwlsec2.right1="<b>Sikkerhedstilstand: </b>Du kan v�lge imellem Deaktiver, WEP, WPA Pre-Shared Key, WPA RADIUS og RADIUS. Alle enheder i netv�rket skal bruge samme sikkerhedstilstand for at kunne kommunikere.";

var hwmac2 = new Object();
hwmac2.right1="<b>Kopi af MAC-adresse: </b>Nogle internetudbydere kr�ver, at du registrerer din MAC-adresse. Hvis du ikke �nsker at registrere din MAC-adresse igen, kan du f� routeren til at kopiere den MAC-adresse, som er registreret hos din internetudbyder.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS-tjeneste: </b>DDNS giver dig mulighed for at f� adgang til dit netv�rk vha. dom�nenavne i stedet for IP-adresser. Tjenesten administrerer dynamisk �ndring af IP-adresse og opdatering af dine dom�neoplysninger. Du skal tilmelde dig tjenesten via TZO.com eller DynDNS.org.";
hddns2.right2="Klik  <b><a target=_blank href=http://Linksys.tzo.com>her</a></b> for at TILMELDE dig en <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GRATIS TZO-PR�VEKONTO";
hddns2.right3="Klik <b><a target=_blank href=https://controlpanel.tzo.com>her</a></b> for at administrere din <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO-konto";
hddns2.right4="Klik  <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>her</a></b> for at k�be et TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS-abonnement";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Support/vejledning</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Driftstilstand : </b>Hvis routeren er v�rt for din internetforbindelse, skal du v�lge <b>Gateway</b>-tilstand. Hvis der er en anden router i netv�rket, skal du v�lge <b>Router</b>-tilstand.";
hrouting2.right2="<b>V�lg s�tnummer : </b>Dette en det unikke rutenummer. Du kan angive op til 20 ruter.";
hrouting2.right3="<b>Rutenavn : </b>Indtast det navn, der skal knyttes til denne rute.";
hrouting2.right4="<b>Destinations-LAN IP : </b>Dette er den fjernv�rt, den statiske rute skal knyttes til.";
hrouting2.right5="<b>Undernetmaske: </b>Bestemmer v�rts- og netv�rksdelen.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="Statisk DNS 3";
hindex2.hbs="Heart Beat-server";
hindex2.l2tps="L2TP-Server";
hindex2.pptps="PPTP-server";
hindex2.hdhcp="<b>Automatisk konfiguration - DHCP: </b>Denne indstilling bruges oftest af kabelselskaber.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Denne indstilling bruges oftest af DSL-udbydere.<br>";
hindex2.hpppoe2="<b>Brugernavn: </b>Indtast det brugernavn, internetudbyderen har oplyst.<br>";
hindex2.hpppoe3="<b>Adgangskode: </b>Indtast den adgangskode, internetudbyderen har oplyst.<br>";

hindex2.hstatic1="<b>Statisk IP: </b>Denne indstilling bruges oftest af internetudbydere, der tilbyder erhvervsl�sninger.<br>";
hindex2.hstatic2="<b>Internet-IP-adresse: </b>Indtast den IP-adresse, internetudbyderen har oplyst.<br>";
hindex2.hstatic3="<b>Undernetmaske: </b>Indtast din undernetmaske<br>";

hindex2.hpptp1="<b>PPTP: </b>Denne indstilling bruges oftest af DSL-udbydere.<br>";
hindex2.hpptp2="<b>Internet-IP-adresse: </b>Indtast den IP-adresse, internetudbyderen har oplyst.<br>";
hindex2.hpptp3="<b>Undernetmaske: </b>Indtast din undernetmaske<br>";
hindex2.hpptp4="<b>Gateway : </b>Indtast internetudbyderens gateway-adresse<br>";

hindex2.hl2tp1="<b>L2TP : </b>Denne indstilling bruges af visse internetudbydere i Europa.<br>";
hindex2.hl2tp2="<b>Brugernavn: </b>Indtast det brugernavn, internetudbyderen har oplyst.<br>";
hindex2.hl2tp3="<b>Adgangskode: </b>Indtast den adgangskode, internetudbyderen har oplyst.<br>";

hindex2.hhb1="<b>Telstra Cable : </b>Denne indstilling bruges oftest af DSL-udbydere.<br>";
hindex2.hhb2="<b>Brugernavn: </b>Indtast det brugernavn, internetudbyderen har oplyst.<br>";
hindex2.hhb3="<b>Adgangskode: </b>Indtast den adgangskode, internetudbyderen har oplyst.<br>";

hindex2.right1="<b>V�rtsnavn: </b>Indtast det v�rtsnavn, internetudbyderen har oplyst.<br>";
hindex2.right2="<b>Dom�nenavn: </b>Indtast det dom�nenavn, internetudbyderen har oplyst.<br>";
hindex2.right3="<b>Lokal IP-adresse: </b>Dette er routerens adresse.<br>";
hindex2.right4="<b>Undernetmaske: </b>Dette er routerens undernetmaske.<br><br><br>";
hindex2.right5="<b>DHCP-server : </b>G�r det muligt for routeren at administrere dine IP-adresser.<br>";
hindex2.right6="<b>F�rste IP-adresse: </b>Den adresse, der skal startes med.<br>";
hindex2.right7="<b>Tidsindstilling: </b>V�lg den tidszone, du befinder dig i. Routeren kan ogs� automatisk skifte til sommertid.";
hindex2.hdhcps1="<b>Maks. antal DHCP-brugere: </b>Du kan begr�nse det antal af adresser, som din router uddeler.<br>";

var errmsg2 = new Object();
errmsg2.err0="Heart Beat-serverens IP-adresse er forkert.";
errmsg2.err1="Slet indtastningen?";
errmsg2.err2="Du skal indtaste et SSID.";
errmsg2.err3="Indtast en Delt n�gle.";
errmsg2.err4=" har ugyldige hexadecimale tegn eller flere end 63 tegn.";
errmsg2.err5="N�glen skal indeholde mellem 8 og 63 ASCII-tegn eller 64 hexadecimale cifre.";
errmsg2.err6="Du skal indtaste en n�gle.";
errmsg2.err7="N�glel�ngden er forkert.";
errmsg2.err8="Indtast et adgangsord.";
errmsg2.err9="Det samlede antal kontroller overskrider 40 opt�llinger.";
errmsg2.err10="Mellemrum er ikke tilladt.";
errmsg2.err11="N�r du har afsluttet alle handlinger, skal du klikke p� knappen Anvend for at gemme indstillingerne.";
errmsg2.err12="Du skal indtaste et tjenestenavn.";
errmsg2.err13="Tjenestenavnet findes allerede.";
errmsg2.err14="LAN IP-adressen eller undernetmasken er forkert.";

var trigger2 = new Object();
trigger2.ptrigger="Aktivering af portintervaller";
trigger2.qos="QoS";
trigger2.trirange="Aktiveret interval";
trigger2.forrange="Viderestillet interval";
trigger2.trirange1="Aktiveret interval";
trigger2.forrange1="Viderestillet interval";
trigger2.sport="Startport";
trigger2.eport="Slutport";
trigger2.right1="Program Indtast aktiveringens programnavn. <b>Aktiveret interval</b> Angiv det aktiverede portnummerinterval for hvert program. Du kan finde de portnumre, du skal bruge, i dokumentationen til internetprogrammet.<b>Startport</b> Indtast startportnummeret for det aktiverede interval.<b>Slutport</b> Indtast slutportnummeret for det aktiverede interval.   <b>Viderestillet interval</b> Angiv portviderestillingsintervallet for hvert program. Du kan finde de portnumre, du skal bruge, i dokumentationen til internetprogrammet.   <b>Startport</b> Indtast startportnummeret i det viderestillede interval.   <b>Slutport</b> Indtast slutportnummeret i det viderestillede interval.";

var bakres2 = new Object();
bakres2.conman="Konfigurer styring";
bakres2.bakconf="Sikkerhedskopier konfigurationer";
bakres2.resconf="Gendan konfigurationer";
bakres2.bakres="Sikkerhedskopiering og gendannelse";
bakres2.file2res="V�lg en fil, der skal gendannes.";
bakres2.bakbutton="Sikkerhedskopier konfigurationer";
bakres2.resbutton="Gendan konfigurationer";
bakres2.right1="Du kan tage en sikkerhedskopi af den aktuelle konfiguration, hvis du skulle v�re n�dt til at nulstille routeren til dens fabriksindstillinger.";
bakres2.right2="Du kan klikke p� knappen Sikkerhedskopi for at sikkerhedskopiere den aktuelle konfiguration.";
bakres2.right3="Klik p� knappen Gennemse for at  finde en konfigurationsfil, som i �jeblikket er gemt p� pc'en.";
bakres2.right4="Klik p� Gendan for at overskrive alle aktuelle konfigurationer med dem i konfigurationsfilen.";

var qos = new Object();
qos.uband="Upstream-b�ndbredde";
qos.bandwidth="B�ndbredde";
qos.dpriority="Enhedsprioritering";
qos.priority="Prioritet";
qos.dname="Enhedsnavn";
qos.low="Lav";
qos.medium="Middel";
qos.high="H�j";
qos.highest="H�jest";
qos.eppriority="Ethernet-portprioritering";
qos.flowctrl="Flow-styring";
qos.appriority="Programprioritering";
qos.specport="Specifik port";
qos.appname="Programnavn";
qos.alert1="Portv�rdien er uden for intervallet [0 - 65535]";
qos.alert2="Startportv�rdien er h�jere end slutportv�rdien";
qos.confirm1="Hvis du indstiller flere enheder, Ethernet-porte eller programmer til h�j prioritet, kan dette oph�ve effekten af QoS.\nVil du forts�tte?";

qos.optgame="Optimering af spilprogrammer";
qos.wqos="Kabelbaseret QoS";
qos.wlqos="WMM   ";
qos.wlqos2="Tr�dl�s QoS";
qos.edca_ap="EDCA AP-parametre";
qos.edca_sta="EDCA STA-parametre";
qos.wme="WMM-underst�ttelse";
qos.noack="Ingen bekr�ftelse";
qos.apsdsupp="APSD-underst�ttelse";
qos.defdis="(Standard: Deaktiver)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Tvunget";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service)";
qos.intqccpri="Internetadgangsprioritet";
qos.category="Kategori";
qos.mediumrec="Middel (anbefalet)";
qos.normal="Normal";
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
qos.addapp="Tilf�j et nyt program";
qos.onlinegame="Onlinespil";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tournament";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.: Shadow Of Chernobyl";
qos.worldofwar="World Of Warcraft";
qos.suprecomm="Supreme Commander";
qos.thesims2="The Sims 2";
qos.titanquest="Titan Quest: Immortal Throne";
qos.battlefield="Battlefield 2142";
qos.halflife2="Half-Life 2: Episode 1";
qos.heroesofmight="Heroes of Might & Magic V";
qos.theelderscrolls="The Elder Scrolls IV";
qos.guildwarsfactions="Guild Wars Factions I og II";
qos.neverwinternights2="Neverwinter Nights 2";
qos.enemyterritory="Enemy Territory";
qos.worldinconflict="World In Conflict";
qos.callofduty4="Call of Duty 4";
qos.sinofasolarempire="Sins of A Solar Empire";
qos.halflifetob="Half-Life 2:The Orange Box";
qos.crysis="Crysis";
qos.frontlines="Frontlines";
qos.warhanmer4k="Warhammer 40,000:Dawn of War:Soulstorm";
qos.addgame="Tilf�j et nyt spil";
qos.entername="Indtast et navn";
qos.etherport="Ethernet-port";
qos.voicedevice="Taleenhed";
qos.voicemac="Min taleenheds MAC-adresse";
qos.recommend="Anbefalet";
qos.game="Spil";
qos.mymac="Min aktuelle pc's MAC-adresse";

qos.right1="Der findes to type QoS-funktioner (Quality of Service): Kabelbaseret QoS, som styrer enheder, der er tilsluttet en router via et Ethernet-kabel, og tr�dl�s QoS, som styrer enheder, der er tilsluttet routeren tr�dl�st.";
qos.right2="<b>Enhedsprioritering :</b>  Du kan angive en prioritet for al trafik fra en enhed i dit netv�rk ved at give enheden et enhedsnavn, angive prioriteten og indtaste dens MAC-adresse.";
qos.right3="<b>Ethernet-port-prioritet :</b> Du kan styre datahastigheden i henhold til den fysiske LAN-port, som din enhed er sluttet til. Du kan tildele h�j eller lav prioritet til datatrafik fra enheder, som er tilsluttet p� LAN-port 1 til 4.";
qos.right4="<b>Programprioritering :</b> Du kan styre datahastigheden mht. det program, som bruger b�ndbredde. Marker <b>Optimering af spilprogrammer</b> for automatisk at tillade, at almindelige spilprogramporte har en h�jere prioritet. Du kan brugerdefinere op til otte programmer ved at indtaste det portnummer, de bruger.";
qos.right5="Tr�dl�s QoS kaldes ogs� <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> af Wi-Fi Alliance<sup>TM</sup>. V�lg Aktiver for at bruge WMM, hvis du bruger andre tr�dl�se enheder, som ogs� er WMM-certificeret.";
qos.right6="<b>Ingen bekr�ftelse :</b>  Aktiver denne indstilling, hvis du vil deaktivere bekr�ftelse. Hvis denne indstilling er aktiveret, sender routeren ikke dataene igen, hvis der opst�r en fejl.";
qos.exist = "Denne indstilling eksisterer i forvejen.";

var vpn2 = new Object();
vpn2.right1="Du kan v�lge at aktivere PPTP, L2TP eller IPSec-passthrough for at tillade, at dine netv�rksenheder kommunikerer via VPN.";

var fail = new Object();
fail.msg="De indtastede v�rdier er ugyldige. Pr�v igen.";

var pactrl = new Object();
pactrl.pactrl ="B�rnesikring";
pactrl.accsign ="Kontotilmelding";
pactrl.center1 ="Linksys' b�rnesikringsl�sning giver din familie sikkerhed, mens <br>den surfer p� internettet";
pactrl.center2 ="<li>Nem konfiguration</li><br><li>Beskyt alle dine hjemmecomputere fra din Linksys-router</li><br><li>Rapporter hj�lper dig med at overv�ge brug af internettet, e-mail og IM</li>";
pactrl.center3 ="** Hvis du tilmelder dig til denne tjeneste, deaktiveres routerens indbyggede internetadgangsregler";
pactrl.manageacc ="Kontostyring";
pactrl.center4 ="Styring af din b�rnesikringskonto";
pactrl.signparental ="Tilmeld dig til en b�rnesikringstjeneste";
pactrl.moreinfo ="Yderligere oplysninger";
pactrl.isprovision ="enheden er tilvejebragt";
pactrl.notprovision ="enheden er ikke tilvejebragt";
pactrl.right1 ="Sk�rmbilledet B�rnesikring giver dig mulighed for at tilmelde dig til og styre din Linksys B�rnesikringskonto. Linksys' B�rnesikringskonto giver dig en r�kke st�rke v�rkt�jer til styring af tilg�ngeligheden af internettjenester, adgang og funktioner, og det hele kan konfigureres individuelt for hvert enkelt familiemedlem.";

var satusroute = new Object();
satusroute.localtime ="Ikke tilg�ngelig";

var succ = new Object();
succ.autoreturn ="Du kommer tilbage til den foreg�ende side efter f� sekunder.";
succ.return_desc = "Du kommer til siden Sikker opgradering efter nogle sekunder.";
succ.interrupt_desc = "Afbryd aldrig opgraderingen, vent venligst...";
succ.return_index = "Du kommer til siden Basic Setup (Grundl�ggende konfiguration) efter nogle sekunder. ";

var gn = new Object();
gn.gnip="IP-adresse for g�stenetv�rk";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="G�stenetv�rksnavn (SSID)";
gn.err1="IP-adressen for g�stenetv�rket m� ikke v�re i samme undernet som LAN-adressen.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Kontovarighed";
gn.minutes="timer";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title=" G�steadgang";
gn.tips0="Forkert adgangskode, indtast igen";
gn.tips1="Indtast adgangskoden for at f� adgang til dette hotspot.";
gn.login=" Log p�";
gn.err3="SSID for tr�dl�st 5G er det samme som SSID for g�st. Skift venligst dette.";
gn.err4="SSID for tr�dl�st 2.4G er det samme som SSID for g�st. Skift venligst dette.";
gn.err5="LAN IP-adressen m� ikke v�re i samme undernet som IP-adressen for g�stenetv�rket.";
gn.err6="Netv�rket 192.168.33.0/24 (IP-adresserne 192.168.33.0 - 255) er reserveret til det tr�dl�se g�stenetv�rk. Brug en anden netv�rksadresse.";
gn.tips6=" Indtast g�steadgangskoden for at f� adgang til internettet. Sp�rg ejeren, hvis du ikke kender adgangskoden. G�steadgangskoden kan findes vha. Linksys Connect.";
gn.dv="Station�r visning";
gn.mv="Mobil visning";
gn.context="Indtast g�steadgangskoden for at f� adgang til internettet. Sp�rg ejeren, hvis du ikke kender adgangskoden. G�steadgangskoden kan findes vha. Linksys Connect.";
gn.nat="G�steadgang er ikke mulig, n�r NAT er deaktiveret.  Forts�t med at gemme dine �ndringer?";







