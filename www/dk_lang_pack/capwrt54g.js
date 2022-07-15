var firewall2 = new Object();
firewall2.natredir="NAT-omdirigering af internetfilter kun til IPv4-internet";
firewall2.ident="Filtrer IDENT (Port 113)";
firewall2.multi="Filtrer multicast";
firewall2.internetfilter="Internetfiltre";
firewall2.webfilter="Webfiltre";

var hupgrade = new Object();
hupgrade.right1="Klik på knappen Gennemse for at vælge den firmwarefil, der skal uploades til routeren.";
hupgrade.right2="Klik på knappen Opgrader for at starte opgraderingsprocessen. Opgraderingen må ikke afbrydes.";
hupgrade.wrimage="Billedfilen er forkert.";

var hfacdef = new Object();
hfacdef.right1="Dette nulstiller alle indstillinger til fabriksindstillingerne. Alle dine indstillinger slettes.";
hfacdef.warning="Advarsel! Hvis du klikker på OK, nulstilles enheden til fabriksindstillingerne, og alle tidligere indstillinger slettes.";

var hdiag = new Object();
hdiag.right1="Indtast den IP-adresse eller det domænenavn, du vil pinge, og klik på knappen Ping.";
hdiag.right2="Indtast den IP-adresse eller det domænenavn, du vil spore, og klik på knappen Traceroute.";

var hlog = new Object();
hlog.right1="Du kan aktivere eller deaktivere brugen af <b>Indgående</b> og <b>Udgående</b> logs ved at vælge den relevante alternativknap.";

var manage2 = new Object();
manage2.webacc="Adgang til lokal styring";
manage2.accser="Få adgang til serveren";
manage2.wlacc="Trådløs adgang til &nbsp;internettet";
manage2.vapass="Den bekræftede adgangskode matcher ikke den indtastede adgangskode. Genindtast adgangskoden.";
manage2.passnot="Den bekræftede adgangskode matcher ikke.";
manage2.selweb="Du skal vælge en webserver.";
manage2.changpass="Routeren er i øjeblikket indstillet til standardadgangskoden. Som sikkerhedsforanstaltning skal du ændre adgangskoden, før funktionen Fjernstyring kan aktiveres. Klik på knappen OK for at ændre din adgangskode. Klik på knappen Annuller for at lade funktionen Fjernstyring forblive deaktiveret.";
manage2.webutiacc="Adgang via";
manage2.wlutiacc="Adgang via trådløs";

var hmanage2 = new Object();
hmanage2.right1="<b>Lokal routeradgang: </b>Herfra kan du ændre routerens adgangskode. Indtast en ny routeradgangskode, og indtast den herefter igen i feltet Genindtast for at bekræfte for at bekræfte adgangskoden.<br>";
hmanage2.right2="<b>Internetadgang: </b>Giver dig mulighed for at konfigurere adgangsindstillingerne til routerens webhjælpeprogram.";
hmanage2.right3="<b>Fjernstyret routeradgang: </b>Giver dig mulighed for at få fjernadgang til routeren. Vælg den port, du vil benytte. Du skal ændre adgangskoden til routeren, hvis den stadig bruger standardadgangskoden.";
hmanage2.right4="<b>UPnP : </b>Bruges af visse programmer til at åbne kommunikationsporte automatisk.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC-adresse</b>. Dette er routerens MAC-adresse, som vist i dit lokale trådløse netværk.";
hstatwl2.right2="<b>Tilstand</b>. Når du vælger det under fanen Trådløs, viser det den trådløse tilstand (Blandet, Kun G eller Deaktiveret), som bruges af netværket.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC-adresse</b>. Dette er routerens MAC-adresse, som vist i dit lokale Ethernet-netværk.";
hstatlan2.right2="<b>IP-adresse</b>. Det viser routerens IP-adresse, som den vises i dit lokale Ethernet-netværk.";
hstatlan2.right3="<b>Undernetmaske</b>. Når routeren bruger en undernetmaske, vises det her.";
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
hstatrouter2.right5="<b>Konfigurationstype. </b>Dette viser de oplysninger, som kræves af din internetudbyder for at oprette forbindelse til internettet. Disse oplysninger blev angivet under fanen Konfiguration. Du kan <b>Tilslutte</b> eller <b>Frakoble</b> din forbindelse her ved at klikke på denne knap.";
hstatrouter2.authfail=" godkendelse mislykket";
hstatrouter2.noip="Kan ikke få en IP-adresse fra ";
hstatrouter2.negfail=" forhandling mislykket";
hstatrouter2.lcpfail=" LCP-forhandling mislykket";
hstatrouter2.tcpfail="Kan ikke oprette en TCP-forbindelse til ";
hstatrouter2.noconn="Kan ikke oprette forbindelse til ";
hstatrouter2.server=" serveren";
hstatrouter2.pppoenoip="Kan ikke få en IP-adresse fra PPPoE";
hstatrouter2.undetermined="Ubestemt";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>Hvis du aktiverer denne indstilling, fremvises din router til internettet. Alle porte vil være tilgængelige fra internettet";

var hforward2 = new Object();
hforward2.right1="<b>Viderestilling af portinterval : </b>Visse programmer kræver måske, at visse porte åbnes, for at kunne fungere korrekt. Eksempler på disse programmer er servere og visse onlinespil. Når en forespørgsel efter en bestemt port kommer fra internettet, vil routeren viderestille dataene til den computer, du angiver. Pga. sikkerhedshensyn, vil du måske begrænse viderestilling af porte til udelukkende de porte, som du bruger, og fjerne markeringen i markeringsfeltet <b>Aktiver</b>, efter du er færdig.";

var hfilter2 = new Object();
hfilter2.delpolicy="Slet reglerne?";
hfilter2.right1="<b>Internetadgangsregler : </b>Du kan definere op til 10 adgangsregler. Klik på <b>Slet</b> for at slette en regel eller <b>Oversigt</b>, for at se en oversigt over reglen.";
hfilter2.right2="<b>Status : </b>Aktiver eller deaktiver en regel.";
hfilter2.right3="<b>Regelnavn : </b>Reglen kan gives et navn.";
hfilter2.right4="<b>Regeltype : </b>Vælg mellem internetadgang og indgående trafik.";
hfilter2.right5="<b>Dage : </b>Vælg den dag i ugen, fra hvilken reglen skal gælde.";
hfilter2.right6="<b>Tidspunkt : </b>Indtast det tidspunkt på dagen, fra hvilket reglen skal gælde.";
hfilter2.right7="<b>Blokerede tjenester : </b>Du kan vælge at blokere adgangen til visse tjenester. Klik på <b>Tilføj/Rediger</b> tjenester for at tilpasse disse indstillinger.";
hfilter2.right8="<b>Blokering af websteder med URL : </b>Man kan blokere adgangen til bestemte websteder ved at indtaste deres URL-adresser.";
hfilter2.right9="<b>Blokering af websteder med nøgleord : </b>Man kan blokere adgangen til websteder ved at angive nøgleord, som findes på websiderne.";

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
hwlad2.range="Dækning";
hwlad2.frathrh="Fragmentationstærskel";
hwlad2.apiso="AP-isolation";
hwlad2.off="Fra";
hwlad2.on="Til";
hwlad2.right1="<b>Godkendelsestype : </b>Du kan vælge mellem Auto eller Delt nøgle. Godkendelse af delt nøgle er mere sikkert, men alle enheder på dit netværk skal understøtte godkendelse af delt nøgle.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Tilstand for trådløst netværk: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster aktiveres automatisk til <b>Blandet</b> tilstand og <b>Kun G</b>-tilstand.");%>Hvis du vil udelukke Trådløs-G-klienter, skal du vælge <b>Kun B</b>-tilstand. Vælg <b>Deaktiver</b>, hvis du vil deaktivere trådløs adgang.";

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

hwlsec2.right1="<b>Sikkerhedstilstand: </b>Du kan vælge imellem Deaktiver, WEP, WPA Pre-Shared Key, WPA RADIUS og RADIUS. Alle enheder i netværket skal bruge samme sikkerhedstilstand for at kunne kommunikere.";

var hwmac2 = new Object();
hwmac2.right1="<b>Kopi af MAC-adresse: </b>Nogle internetudbydere kræver, at du registrerer din MAC-adresse. Hvis du ikke ønsker at registrere din MAC-adresse igen, kan du få routeren til at kopiere den MAC-adresse, som er registreret hos din internetudbyder.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS-tjeneste: </b>DDNS giver dig mulighed for at få adgang til dit netværk vha. domænenavne i stedet for IP-adresser. Tjenesten administrerer dynamisk ændring af IP-adresse og opdatering af dine domæneoplysninger. Du skal tilmelde dig tjenesten via TZO.com eller DynDNS.org.";
hddns2.right2="Klik  <b><a target=_blank href=http://Linksys.tzo.com>her</a></b> for at TILMELDE dig en <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GRATIS TZO-PRØVEKONTO";
hddns2.right3="Klik <b><a target=_blank href=https://controlpanel.tzo.com>her</a></b> for at administrere din <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO-konto";
hddns2.right4="Klik  <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>her</a></b> for at købe et TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS-abonnement";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Support/vejledning</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Driftstilstand : </b>Hvis routeren er vært for din internetforbindelse, skal du vælge <b>Gateway</b>-tilstand. Hvis der er en anden router i netværket, skal du vælge <b>Router</b>-tilstand.";
hrouting2.right2="<b>Vælg sætnummer : </b>Dette en det unikke rutenummer. Du kan angive op til 20 ruter.";
hrouting2.right3="<b>Rutenavn : </b>Indtast det navn, der skal knyttes til denne rute.";
hrouting2.right4="<b>Destinations-LAN IP : </b>Dette er den fjernvært, den statiske rute skal knyttes til.";
hrouting2.right5="<b>Undernetmaske: </b>Bestemmer værts- og netværksdelen.";

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

hindex2.hstatic1="<b>Statisk IP: </b>Denne indstilling bruges oftest af internetudbydere, der tilbyder erhvervsløsninger.<br>";
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

hindex2.right1="<b>Værtsnavn: </b>Indtast det værtsnavn, internetudbyderen har oplyst.<br>";
hindex2.right2="<b>Domænenavn: </b>Indtast det domænenavn, internetudbyderen har oplyst.<br>";
hindex2.right3="<b>Lokal IP-adresse: </b>Dette er routerens adresse.<br>";
hindex2.right4="<b>Undernetmaske: </b>Dette er routerens undernetmaske.<br><br><br>";
hindex2.right5="<b>DHCP-server : </b>Gør det muligt for routeren at administrere dine IP-adresser.<br>";
hindex2.right6="<b>Første IP-adresse: </b>Den adresse, der skal startes med.<br>";
hindex2.right7="<b>Tidsindstilling: </b>Vælg den tidszone, du befinder dig i. Routeren kan også automatisk skifte til sommertid.";
hindex2.hdhcps1="<b>Maks. antal DHCP-brugere: </b>Du kan begrænse det antal af adresser, som din router uddeler.<br>";

var errmsg2 = new Object();
errmsg2.err0="Heart Beat-serverens IP-adresse er forkert.";
errmsg2.err1="Slet indtastningen?";
errmsg2.err2="Du skal indtaste et SSID.";
errmsg2.err3="Indtast en Delt nøgle.";
errmsg2.err4=" har ugyldige hexadecimale tegn eller flere end 63 tegn.";
errmsg2.err5="Nøglen skal indeholde mellem 8 og 63 ASCII-tegn eller 64 hexadecimale cifre.";
errmsg2.err6="Du skal indtaste en nøgle.";
errmsg2.err7="Nøglelængden er forkert.";
errmsg2.err8="Indtast et adgangsord.";
errmsg2.err9="Det samlede antal kontroller overskrider 40 optællinger.";
errmsg2.err10="Mellemrum er ikke tilladt.";
errmsg2.err11="Når du har afsluttet alle handlinger, skal du klikke på knappen Anvend for at gemme indstillingerne.";
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
bakres2.file2res="Vælg en fil, der skal gendannes.";
bakres2.bakbutton="Sikkerhedskopier konfigurationer";
bakres2.resbutton="Gendan konfigurationer";
bakres2.right1="Du kan tage en sikkerhedskopi af den aktuelle konfiguration, hvis du skulle være nødt til at nulstille routeren til dens fabriksindstillinger.";
bakres2.right2="Du kan klikke på knappen Sikkerhedskopi for at sikkerhedskopiere den aktuelle konfiguration.";
bakres2.right3="Klik på knappen Gennemse for at  finde en konfigurationsfil, som i øjeblikket er gemt på pc'en.";
bakres2.right4="Klik på Gendan for at overskrive alle aktuelle konfigurationer med dem i konfigurationsfilen.";

var qos = new Object();
qos.uband="Upstream-båndbredde";
qos.bandwidth="Båndbredde";
qos.dpriority="Enhedsprioritering";
qos.priority="Prioritet";
qos.dname="Enhedsnavn";
qos.low="Lav";
qos.medium="Middel";
qos.high="Høj";
qos.highest="Højest";
qos.eppriority="Ethernet-portprioritering";
qos.flowctrl="Flow-styring";
qos.appriority="Programprioritering";
qos.specport="Specifik port";
qos.appname="Programnavn";
qos.alert1="Portværdien er uden for intervallet [0 - 65535]";
qos.alert2="Startportværdien er højere end slutportværdien";
qos.confirm1="Hvis du indstiller flere enheder, Ethernet-porte eller programmer til høj prioritet, kan dette ophæve effekten af QoS.\nVil du fortsætte?";

qos.optgame="Optimering af spilprogrammer";
qos.wqos="Kabelbaseret QoS";
qos.wlqos="WMM   ";
qos.wlqos2="Trådløs QoS";
qos.edca_ap="EDCA AP-parametre";
qos.edca_sta="EDCA STA-parametre";
qos.wme="WMM-understøttelse";
qos.noack="Ingen bekræftelse";
qos.apsdsupp="APSD-understøttelse";
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
qos.addapp="Tilføj et nyt program";
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
qos.addgame="Tilføj et nyt spil";
qos.entername="Indtast et navn";
qos.etherport="Ethernet-port";
qos.voicedevice="Taleenhed";
qos.voicemac="Min taleenheds MAC-adresse";
qos.recommend="Anbefalet";
qos.game="Spil";
qos.mymac="Min aktuelle pc's MAC-adresse";

qos.right1="Der findes to type QoS-funktioner (Quality of Service): Kabelbaseret QoS, som styrer enheder, der er tilsluttet en router via et Ethernet-kabel, og trådløs QoS, som styrer enheder, der er tilsluttet routeren trådløst.";
qos.right2="<b>Enhedsprioritering :</b>  Du kan angive en prioritet for al trafik fra en enhed i dit netværk ved at give enheden et enhedsnavn, angive prioriteten og indtaste dens MAC-adresse.";
qos.right3="<b>Ethernet-port-prioritet :</b> Du kan styre datahastigheden i henhold til den fysiske LAN-port, som din enhed er sluttet til. Du kan tildele høj eller lav prioritet til datatrafik fra enheder, som er tilsluttet på LAN-port 1 til 4.";
qos.right4="<b>Programprioritering :</b> Du kan styre datahastigheden mht. det program, som bruger båndbredde. Marker <b>Optimering af spilprogrammer</b> for automatisk at tillade, at almindelige spilprogramporte har en højere prioritet. Du kan brugerdefinere op til otte programmer ved at indtaste det portnummer, de bruger.";
qos.right5="Trådløs QoS kaldes også <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> af Wi-Fi Alliance<sup>TM</sup>. Vælg Aktiver for at bruge WMM, hvis du bruger andre trådløse enheder, som også er WMM-certificeret.";
qos.right6="<b>Ingen bekræftelse :</b>  Aktiver denne indstilling, hvis du vil deaktivere bekræftelse. Hvis denne indstilling er aktiveret, sender routeren ikke dataene igen, hvis der opstår en fejl.";
qos.exist = "Denne indstilling eksisterer i forvejen.";

var vpn2 = new Object();
vpn2.right1="Du kan vælge at aktivere PPTP, L2TP eller IPSec-passthrough for at tillade, at dine netværksenheder kommunikerer via VPN.";

var fail = new Object();
fail.msg="De indtastede værdier er ugyldige. Prøv igen.";

var pactrl = new Object();
pactrl.pactrl ="Børnesikring";
pactrl.accsign ="Kontotilmelding";
pactrl.center1 ="Linksys' børnesikringsløsning giver din familie sikkerhed, mens <br>den surfer på internettet";
pactrl.center2 ="<li>Nem konfiguration</li><br><li>Beskyt alle dine hjemmecomputere fra din Linksys-router</li><br><li>Rapporter hjælper dig med at overvåge brug af internettet, e-mail og IM</li>";
pactrl.center3 ="** Hvis du tilmelder dig til denne tjeneste, deaktiveres routerens indbyggede internetadgangsregler";
pactrl.manageacc ="Kontostyring";
pactrl.center4 ="Styring af din børnesikringskonto";
pactrl.signparental ="Tilmeld dig til en børnesikringstjeneste";
pactrl.moreinfo ="Yderligere oplysninger";
pactrl.isprovision ="enheden er tilvejebragt";
pactrl.notprovision ="enheden er ikke tilvejebragt";
pactrl.right1 ="Skærmbilledet Børnesikring giver dig mulighed for at tilmelde dig til og styre din Linksys Børnesikringskonto. Linksys' Børnesikringskonto giver dig en række stærke værktøjer til styring af tilgængeligheden af internettjenester, adgang og funktioner, og det hele kan konfigureres individuelt for hvert enkelt familiemedlem.";

var satusroute = new Object();
satusroute.localtime ="Ikke tilgængelig";

var succ = new Object();
succ.autoreturn ="Du kommer tilbage til den foregående side efter få sekunder.";
succ.return_desc = "Du kommer til siden Sikker opgradering efter nogle sekunder.";
succ.interrupt_desc = "Afbryd aldrig opgraderingen, vent venligst...";
succ.return_index = "Du kommer til siden Basic Setup (Grundlæggende konfiguration) efter nogle sekunder. ";

var gn = new Object();
gn.gnip="IP-adresse for gæstenetværk";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Gæstenetværksnavn (SSID)";
gn.err1="IP-adressen for gæstenetværket må ikke være i samme undernet som LAN-adressen.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Kontovarighed";
gn.minutes="timer";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title=" Gæsteadgang";
gn.tips0="Forkert adgangskode, indtast igen";
gn.tips1="Indtast adgangskoden for at få adgang til dette hotspot.";
gn.login=" Log på";
gn.err3="SSID for trådløst 5G er det samme som SSID for gæst. Skift venligst dette.";
gn.err4="SSID for trådløst 2.4G er det samme som SSID for gæst. Skift venligst dette.";
gn.err5="LAN IP-adressen må ikke være i samme undernet som IP-adressen for gæstenetværket.";
gn.err6="Netværket 192.168.33.0/24 (IP-adresserne 192.168.33.0 - 255) er reserveret til det trådløse gæstenetværk. Brug en anden netværksadresse.";
gn.tips6=" Indtast gæsteadgangskoden for at få adgang til internettet. Spørg ejeren, hvis du ikke kender adgangskoden. Gæsteadgangskoden kan findes vha. Linksys Connect.";
gn.dv="Stationær visning";
gn.mv="Mobil visning";
gn.context="Indtast gæsteadgangskoden for at få adgang til internettet. Spørg ejeren, hvis du ikke kender adgangskoden. Gæsteadgangskoden kan findes vha. Linksys Connect.";
gn.nat="Gæsteadgang er ikke mulig, når NAT er deaktiveret.  Fortsæt med at gemme dine ændringer?";







