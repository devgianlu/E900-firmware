var firewall2 = new Object();
firewall2.natredir="Filtrera NAT-omdirigeringar via internet endast f�r IPv4-internet";
firewall2.ident="Filtrera IDENT (Port 113)";
firewall2.multi="Filtrera multicast-s�ndningar";
firewall2.internetfilter="Internetfilter";
firewall2.webfilter="Webbfilter";

var hupgrade = new Object();
hupgrade.right1="Klicka p� bl�ddringsknappen och markera den fil f�r fast programvara som ska skickas till routern.";
hupgrade.right2="Klicka p� knappen Uppgradera n�r du vill p�b�rja uppgraderingsprocessen. Uppgraderingen f�r inte avbrytas.";
hupgrade.wrimage="Bildfilen �r inte r�tt.";

var hfacdef = new Object();
hfacdef.right1="Alla inst�llningar �terst�lls till fabriksinst�llningarna. Alla dina inst�llningar raderas.";
hfacdef.warning="Varning! Om du klickar p� OK �terst�lls fabriksinst�llningarna och alla tidigare inst�llningar raderas.";

var hdiag = new Object();
hdiag.right1="Ange den IP-adress eller det dom�nnamn som du vill pinga och klicka p� knappen Ping.";
hdiag.right2="Ange den IP-adress eller det dom�nnamn som du vill sp�ra och klicka p� knappen Traceroute.";

var hlog = new Object();
hlog.right1="Du kan aktivera eller avaktivera anv�ndandet av <b>inkommande</b> och <b>utg�ende</b> loggar genom att v�lja l�mplig alternativknapp.";

var manage2 = new Object();
manage2.webacc="�tkomst till lokal hantering";
manage2.accser="�tkomst till server";
manage2.wlacc="Tr�dl�s �tkomst till &nbsp;webben";
manage2.vapass="Det bekr�ftade l�senordet st�mmer inte �verens med det angivna l�senordet. Ange l�senordet igen.";
manage2.passnot="Det bekr�ftade l�senordet matchade inte.";
manage2.selweb="Du m�ste v�lja en webbserver.";
manage2.changpass="Standardl�senordet anv�nds p� routern. F�r s�kerhets skull m�ste du �ndra l�senordet innan funktionen Fj�rrhantering kan aktiveras. �ndra l�senordet genom att klicka p� OK. Om du vill att funktionen Fj�rrhantering ska vara avaktiverad klickar du p� Avbryt.";
manage2.webutiacc="�tkomst via";
manage2.wlutiacc="�tkomst via tr�dl�st";

var hmanage2 = new Object();
hmanage2.right1="<b>Lokal �tkomst till router: </b>Du kan �ndra routerns l�senord h�rifr�n. Ange ett nytt l�senord f�r routern i L�senord f�r router och bekr�fta det genom att ange det igen i f�ltet Bekr�fta genom att ange igen.<br>";
hmanage2.right2="<b>Webb�tkomst: </b>H�r kan du konfigurera �tkomstalternativ till routerns webbverktyg.";
hmanage2.right3="<b>Fj�rr�tkomst till router: </b>H�r kan du f� fj�rr�tkomst till routern. V�lj den port som du vill anv�nda. Du m�ste �ndra l�senordet till routern om standardl�senordet fortfarande anv�nds.";
hmanage2.right4="<b>UPnP: </b>Anv�nds i vissa program f�r att automatiskt �ppna portar f�r kommunikation.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC-adress</b>. Det h�r �r routerns MAC-adress, s� som den visas i det lokala, tr�dl�sa n�tverket.";
hstatwl2.right2="<b>L�ge</b>. I enlighet med val p� fliken Tr�dl�st visas h�r det tr�dl�sa l�ge � Blandat l�ge, Endast G-l�ge eller Avaktiverad � som anv�nds i n�tverket.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC-adress</b>. Routerns MAC-adress, s� som den visas i det lokala Ethernet-n�tverket.";
hstatlan2.right2="<b>IP-adress</b>. H�r visas routerns IP-adress, s� som den anges i det lokala, Ethernet-n�tverket.";
hstatlan2.right3="<b>N�tmask</b>. Om du anv�nder en n�tmask f�r routern visas den h�r.";
hstatlan2.right4="<b>DHCP-server</b>. Om du anv�nder routern som en DHCP-server visas det h�r.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statisk";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="Ansluta";
hstatrouter2.disconnected="Fr�nkopplad";
hstatrouter2.disconnect="Koppla bort";
hstatrouter2.right1="<b>Version av fast programvara.  </b>Den aktuella fasta programvaran f�r routern.";
hstatrouter2.right2="<b>Aktuell tid.  </b>H�r visas tiden som den har st�llts in p� fliken Inst�llningar.";
hstatrouter2.right3="<b>MAC-adress.  </b>Routerns MAC-adress, s� som den visas hos Internet-leverant�ren.";
hstatrouter2.right4="<b>Routernamn.  </b>Det specifika namnet f�r routern, som du anger p� fliken Inst�llningar.";
hstatrouter2.right5="<b>Konfigurationstyp.  </b>H�r visas den information som kr�vs av Internet-leverant�ren f�r anslutning till Internet. Den h�r informationen har angetts p� fliken Inst�llningar. Du kan <b>Ansluta</b> eller <b>Koppla ned</b> anslutningen genom att klicka p� den h�r knappen.";
hstatrouter2.authfail=" autentiseringsfel";
hstatrouter2.noip="Det g�r inte att h�mta en IP-adress fr�n ";
hstatrouter2.negfail=" anpassningsfel";
hstatrouter2.lcpfail=" LCP-anpassningsfel";
hstatrouter2.tcpfail="Det g�r inte att uppr�tta en TCP-anslutning till ";
hstatrouter2.noconn="Det g�r inte att ansluta till ";
hstatrouter2.server=" servern";
hstatrouter2.pppoenoip="Det g�r inte att h�mta en IP-adress fr�n PPPoE";
hstatrouter2.undetermined="Obest�md";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ: </b>N�r du aktiverar det h�r alternativet exponeras routern mot Internet. Alla portar blir �tkomliga fr�n Internet";

var hforward2 = new Object();
hforward2.right1="<b>Vidarebefordran av portintervall: </b>F�r att vissa till�mpningar ska fungera p� r�tt s�tt kan det kr�vas att vissa portar �ppnas. Exempel p� s�dana till�mpningar �r servrar och vissa Internet-spel. N�r en beg�ran f�r en viss port kommer in fr�n Internet, dirigeras data via routern till den dator som du anger. Av s�kerhetssk�l kan det vara bra att begr�nsa vidarebefordran av portar till endast de portar du anv�nder och avmarkera kryssrutan <b>Aktivera</b> n�r du inte l�ngre anv�nder dem.";

var hfilter2 = new Object();
hfilter2.delpolicy="Ta bort regeln?";
hfilter2.right1="<b>Regler f�r Internet-�tkomst: </b>Du kan definiera upp till 10 �tkomstregler. Klicka p� <b>Ta bort</b> om du vill ta bort en regel eller p� <b>Sammanfattning</b> om du vill visa en sammanfattning av regeln.";
hfilter2.right2="<b>Status : </b>Aktivera eller avaktivera en regel.";
hfilter2.right3="<b>Regelnamn: </b>Du kan tilldela ett namn till regeln.";
hfilter2.right4="<b>Regeltyp: </b>V�lj mellan Internet-�tkomst och Inkommande trafik.";
hfilter2.right5="<b>Dagar: </b>V�lj vilken dag i veckan som du vill att regeln ska anv�ndas.";
hfilter2.right6="<b>Tider: </b>Ange vid vilken tid p� dagen regeln ska anv�ndas.";
hfilter2.right7="<b>Blockerade tj�nster: </b>Du kan v�lja att blockera �tkomst till vissa tj�nster. Klicka p� <b>L�gg till/Redigera</b> tj�nster om du vill �ndra de h�r inst�llningarna.";
hfilter2.right8="<b>Webbplatsblockering efter URL-adress: </b>Du kan blockera �tkomst till vissa webbplatser genom att ange deras URL-adress.";
hfilter2.right9="<b>Webbplatsblockering efter nyckelord: </b>Du kan blockera �tkomst till vissa webbplatser med hj�lp av de nyckelord som webbsidan inneh�ller.";

var hportser2 = new Object();
hportser2.submit="Verkst�ll";

var hwlad2 = new Object();
hwlad2.authtyp="Autentiseringstyp";
hwlad2.basrate="Allm�n hastighet";
hwlad2.mbps="Mbit/s";
hwlad2.def="Standard";
hwlad2.all="Alla";
hwlad2.defdef="(Standard: standard)";
hwlad2.fburst="Frame Burst";
hwlad2.milli="millisekunder";
hwlad2.range="R�ckvidd";
hwlad2.frathrh="Fragmenteri-<br>ngsgr�nsv�rde";
hwlad2.apiso="AP-isolering";
hwlad2.off="Av ";
hwlad2.on="P�";
hwlad2.right1="<b>Autentiseringstyp: </b>Du kan v�lja mellan Automatiskt och Delad nyckel. Autentisering med delad nyckel �r s�krare men alla enheter i n�tverket m�ste ha funktioner f�r autentisering med delad nyckel.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Tr�dl�st n�tverksl�ge: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster aktiveras automatiskt i <b>Blandat</b> l�ge och <b>Endast G-</b>l�ge."); %> Om du vill utel�mna Wireless-G-klienter v�ljer du <b>Endast B-</b>l�ge. Om du vill avaktivera tr�dl�s �tkomst v�ljer du <b>Avaktivera</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA med f�r-delad nyckel";
hwlsec2.wparadius="WPA med RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="WPA2 med endast f�r-delad nyckel";
hwlsec2.wpa2radius="WPA2 - endast RADIUS";
hwlsec2.wpa2pskmix="WPA2 blandad, med f�r-delad nyckel";
hwlsec2.wpa2radiusmix="WPA2 - blandad RADIUS";
hwlsec2.wpa2personal="WPA2-Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA � blandat l�ge";
hwlsec2.enterprisemixed="WPA2/WPA - f�retag blandat";
hwlsec2.pskpersonal="PSK - privat";
hwlsec2.pskenterprise="PSK - f�retag";
hwlsec2.psk2personal="PSK2 - privat";
hwlsec2.psk2enterprise="PSK2 - f�retag";

hwlsec2.right1="<b>S�kerhetsl�ge: </b>Du kan v�lja mellan Avaktivera, WEP, WPA med f�r-delad nyckel, WPA RADIUS och RADIUS. F�r att alla enheterna i n�tverket ska kunna kommunicera med varandra m�ste du anv�nda samma s�kerhetsl�ge f�r alla.";

var hwmac2 = new Object();
hwmac2.right1="<b>MAC-adressklon: </b>Vissa Internet-leverant�rer kr�ver att du registrerar din MAC-adress. Om du inte vill registrera om din MAC-adress kan du l�ta routern klona den MAC-adress som �r registrerad hos Internet-leverant�ren.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS-tj�nst: </b>Med DDNS kan du f� �tkomst till n�tverket genom att anv�nda dom�nnamn i st�llet f�r IP-adresser. Med tj�nsten hanteras �ndringar av IP-adresser och uppdateringar av dom�ninformationen dynamiskt. Du m�ste registrera dig f�r tj�nsten hos TZO.com eller DynDNS.org.";
hddns2.right2="Klicka <b><a target=_blank href=http://Linksys.tzo.com>h�r</a></b> om du vill �ppna ett <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KOSTNADSFRITT TZO-PROVKONTO";
hddns2.right3="Klicka <b><a target=_blank href=https://controlpanel.tzo.com>h�r</a></b> om du vill hantera ditt <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO-konto";
hddns2.right4="Klicka <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>h�r</a></b> om du vill k�pa en TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS-prenumeration";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Support/handb�cker</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Driftsl�ge: </b>Om routern fungerar som v�rd f�r Internet-anslutningen v�ljer du l�get <b>Gateway</b>. Om det finns en annan router i n�tverket v�ljer du <b>Router</b>.";
hrouting2.right2="<b>V�lj upps�ttningsnummer: </b>Det unika routernumret. Du kan konfigurera upp till 20 stycken.";
hrouting2.right3="<b>Routernamn: </b>Ange det namn som du vill tilldela routern.";
hrouting2.right4="<b>LAN-IP-adress f�r m�l: </b>Den fj�rrv�rd som du vill tilldela den statiska routern till.";
hrouting2.right5="<b>N�tmask: </b>Fastst�ller v�rd och n�tverksdel.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="Statisk DNS 3";
hindex2.hbs="Heart Beat Server";
hindex2.l2tps="L2TP-server";
hindex2.pptps="PPTP-server";
hindex2.hdhcp="<b>Automatisk konfiguration - DHCP: </b>Den h�r inst�llningen anv�nds vanligen av kabeloperat�rer.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Den h�r inst�llningen anv�nds vanligen av DSL-leverant�rer.<br>";
hindex2.hpppoe2="<b>Anv�ndarnamn: </b>Ange det anv�ndarnamn som du har f�tt av din Internet-leverant�r.<br>";
hindex2.hpppoe3="<b>L�senord: </b>Ange det l�senord som du har f�tt av din Internet-leverant�r.<br>";

hindex2.hstatic1="<b>Statisk IP-adress: </b>Den h�r inst�llningen anv�nds vanligen av Internet-leverant�rer f�r f�retag.<br>";
hindex2.hstatic2="<b>Internet-IP-adress: </b>Ange den IP-adress som du har f�tt av din Internet-leverant�r.<br>";
hindex2.hstatic3="<b>N�tmask: </b>Ange n�tmasken<br>";

hindex2.hpptp1="<b>PPTP: </b>Den h�r inst�llningen anv�nds vanligen av DSL-leverant�rer.<br>";
hindex2.hpptp2="<b>Internet-IP-adress: </b>Ange den IP-adress som du har f�tt av din Internet-leverant�r.<br>";
hindex2.hpptp3="<b>N�tmask: </b>Ange n�tmasken<br>";
hindex2.hpptp4="<b>Gateway : </b>Ange Internet-leverant�rens gatewayadress<br>";

hindex2.hl2tp1="<b>L2TP: </b>Den h�r inst�llningen anv�nds av vissa Internet-leverant�rer i Europa.<br>";
hindex2.hl2tp2="<b>Anv�ndarnamn: </b>Ange det anv�ndarnamn som du har f�tt av din Internet-leverant�r.<br>";
hindex2.hl2tp3="<b>L�senord: </b>Ange det l�senord som du har f�tt av din Internet-leverant�r.<br>";

hindex2.hhb1="<b>Telstra Cable: </b>Den h�r inst�llningen anv�nds vanligen av DSL-leverant�rer.<br>";
hindex2.hhb2="<b>Anv�ndarnamn: </b>Ange det anv�ndarnamn som du har f�tt av din Internet-leverant�r.<br>";
hindex2.hhb3="<b>L�senord: </b>Ange det l�senord som du har f�tt av din Internet-leverant�r.<br>";

hindex2.right1="<b>V�rdnamn: </b>Ange det v�rdnamn som du har f�tt av din Internet-leverant�r.<br>";
hindex2.right2="<b>Dom�nnamn: </b>Ange det dom�nnamn som du har f�tt av din Internet-leverant�r.<br>";
hindex2.right3="<b>Lokal IP-adress: </b>Adressen till routern.<br>";
hindex2.right4="<b>N�tmask: </b>N�tmasken f�r routern.<br><br><br>";
hindex2.right5="<b>DHCP-server: </b>M�jligg�r f�r routern att hantera dina IP-adresser.<br>";
hindex2.right6="<b>Start-IP-adress: </b>Den adress som du vill starta med.<br>";
hindex2.right7="<b>Tidsinst�llning: </b>V�lj den tidszon d�r du befinner dig. Routern kan �ven automatiskt justera f�r sommartid.";
hindex2.hdhcps1="<b>Maximalt antal DHCP-anv�ndare: </b>Du kan begr�nsa antalet adresser som routern kan dela ut.<br>";

var errmsg2 = new Object();
errmsg2.err0="HeartBeat Server-IP-adressen �r ogiltig!";
errmsg2.err1="Vill du ta bort den h�r posten?";
errmsg2.err2="Du m�ste ange ett SSID.";
errmsg2.err3="Ange en delad nyckel.";
errmsg2.err4=" inneh�ller otill�tna hexadecimala siffror eller �ver 63 tecken.";
errmsg2.err5="Nyckeln m�ste best� av mellan 8 och 63 ASCII-tecken eller 64 hexadecimala siffror";
errmsg2.err6="Du m�ste ange en nyckel.";
errmsg2.err7="Felaktig nyckell�ngd.";
errmsg2.err8="Ange en l�senordsfras.";
errmsg2.err9="Sammanlagt antal kontroller �verstiger 40.";
errmsg2.err10="Blanksteg �r inte till�tna.";
errmsg2.err11="N�r du har slutf�rt alla �tg�rder sparar du inst�llningarna genom att klicka p� Verkst�ll.";
errmsg2.err12="Du m�ste ange ett tj�nstenamn.";
errmsg2.err13="Tj�nstnamnet finns redan.";
errmsg2.err14="LAN-IP-adressen eller n�tmasken �r felaktig.";

var trigger2 = new Object();
trigger2.ptrigger="Portintervallsutl�sning";
trigger2.qos="QoS";
trigger2.trirange="Utl�sningsintervall";
trigger2.forrange="Vidarebefordring<br>sintervall";
trigger2.trirange1="Utl�sningsintervall";
trigger2.forrange1="Vidarebefordringsintervall";
trigger2.sport="Startport";
trigger2.eport="Slutport";
trigger2.right1="Till�mpning Ange till�mpningsnamnet p� utl�saren. <b>Utl�sningsinternvall</b> F�r varje till�mpning visas det utl�sta portnummerintervallet. Kontrollera vilka portnummer som beh�vs i Internet-till�mpningens dokumentation.<b>Startport</b> Ange startportsnummer f�r utl�sningsintervallet.<b>Slutport</b> Ange slutportsnummer f�r utl�sningsintervallet.   <b>Vidarebefordrat intervall </b>F�r varje till�mpning visas det vidarebefordrade portnummerintervallet. Om du vill ha mer information om portnummer l�ser du i dokumentationen f�r Internet-programmet.   <b>Startport </b>Ange startportsnummer f�r det vidarebefordrade intervallet.   <b>Slutport </b>Ange slutportsnummer f�r det vidarebefordrade intervallet.";

var bakres2 = new Object();
bakres2.conman="Konfigurationshantering";
bakres2.bakconf="S�kerhetskopiera konfiguration";
bakres2.resconf="�terst�ll konfiguration";
bakres2.bakres="S�kerhetskopiering och �terst�llning";
bakres2.file2res="V�lj en fil du vill �terst�lla:";
bakres2.bakbutton="S�kerhetskopiera konfiguration";
bakres2.resbutton="�terst�ll konfiguration";
bakres2.right1="Du kan s�kerhetskopiera din nuvarande konfiguration om du skulle beh�va �terst�lla routern till de ursprungliga fabriksinst�llningarna.";
bakres2.right2="Du kan klicka p� knappen S�kerhetskopiera, s� s�kerhetskopieras den aktuella konfigurationen.";
bakres2.right3="Klicka p� knappen Bl�ddra om du vill bl�ddra efter en konfigurationsfil som du har sparat i datorn.";
bakres2.right4="Klicka p� �terst�ll om du vill skriva �ver alla nuvarande konfigurationer med dem som finns i konfigurationsfilen.";

var qos = new Object();
qos.uband="Utg�ende bandbredd";
qos.bandwidth="Bandbredd";
qos.dpriority="Enhetsprioritet";
qos.priority="Prioritet";
qos.dname="Enhetsnamn";
qos.low="L�g";
qos.medium="Medelh�g";
qos.high="H�g";
qos.highest="H�gsta";
qos.eppriority="Ethernet-portsprioritet";
qos.flowctrl="Fl�deskontroll";
qos.appriority="Till�mpningsprioritet";
qos.specport="Viss port";
qos.appname="Programnamn";
qos.alert1="Portv�rdet �r utanf�r intervallet [0-65535].";
qos.alert2="Startportsv�rdet �r st�rre �n slutportsv�rdet";
qos.confirm1="Om du anger h�g prioritet f�r flera enheter, Ethernet-porten eller programmet, kan effekten av QoS upph�vas.\n�r du s�ker p� att du vill forts�tta?";

qos.optgame="Optimera speltill�mpningar";
qos.wqos="Tr�dburen QoS";
qos.wlqos="WMM   ";
qos.wlqos2="Tr�dl�s QoS";
qos.edca_ap="AP-parametrar f�r EDCA";
qos.edca_sta="STA-parametrar f�r EDCA";
qos.wme="WMM-funktioner";
qos.noack="Inget tillk�nnagivande";
qos.apsdsupp="APSD Support (WMM-funktioner).";
qos.defdis="(Standard: Avaktivera)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Tvingad";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service)";
qos.intqccpri="Prioriterad Internet-�tkomst";
qos.category="Kategori";
qos.mediumrec="Medel (rekommenderas)";
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
qos.addapp="L�gg till en ny till�mpning";
qos.onlinegame="Onlinespel";
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
qos.thesims2="The Sims 2";
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
qos.addgame="L�gg till ett nytt spel";
qos.entername="Ange namn";
qos.etherport="Ethernet-port";
qos.voicedevice="R�stenhet";
qos.voicemac="Min r�stenhets MAC-adress";
qos.recommend="Rekommendera";
qos.game="Spel";
qos.mymac="Min nuvarande dators MAC-adress";

qos.right1="Tv� typer av QoS-funktioner (Quality of Service) �r tillg�ngliga: tr�dburen QoS, som styr enheter som �r anslutna till routern med en Ethernet-kabel och tr�dl�s QoS, som styr enheter som �r tr�dl�st anslutna till routern.";
qos.right2="<b>Enhetsprioritet: </b>Du kan ange prioritet f�r all trafik fr�n en enhet i n�tverket genom att ge enheten ett enhetsnamn, ange prioritet och ange dess MAC-adress.";
qos.right3="<b>Ethernet-portsprioritet: </b>Du kan styra datahastigheterna i enlighet med vilka fysiska LAN-portar enheterna �r anslutna till. Du kan tilldela h�g eller l�g prioritet f�r datatrafik fr�n enheter som �r anslutna till LAN-portarna 1 till 4.";
qos.right4="<b>Till�mpningsprioritet: </b>Du kan reglera datahastigheten efter till�mpningar som konsumerar bandbredd. Markera <b>Optimera speltill�mpningar</b> om du automatiskt vill till�ta att portar f�r speltill�mpningar f�r h�gre prioritet. Du kan anpassa upp till �tta till�mpningar genom att ange vilka portnummer de anv�nder.";
qos.right5="Tr�dl�s QoS kallas �ven f�r <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> av Wi-Fi Alliance<sup>TM</sup>. Markera Aktivera om du vill anv�nda WMM f�r andra tr�dl�sa enheter som ocks� �r WMM-certifierade.";
qos.right6="<b>Inget tillk�nnagivande: </b>Markera det h�r alternativet om du vill avaktivera tillk�nnagivande. Om alternativet �r aktiverat skickas inga data om fr�n routern om ett fel intr�ffar.";
qos.exist = "Inst�llningen finns redan.";

var vpn2 = new Object();
vpn2.right1="Du kan v�lja att aktivera PPTP-, L2TP- eller IPSec-genomstr�mning om du vill att dina n�tverksenheter ska kommunicera via VPN.";

var fail = new Object();
fail.msg="De v�rden du angav �r ogiltiga. F�rs�k igen.";

var pactrl = new Object();
pactrl.pactrl ="Parental Control (barnl�s)";
pactrl.accsign ="Kontoregistrering";
pactrl.center1 ="Linksys Parental Control-l�sning bidrar till din familjs s�kerhet<br>n�r de surfar p� Internet";
pactrl.center2 ="<li>Enkel konfiguration</li><br><li>Skydda alla datorer i hemmet med din Linksys-router</li><br><li>Med hj�lp av rapporter kan du �vervaka anv�ndning av webben, e-post och IM</li>";
pactrl.center3 ="** Om du anm�ler dig till den h�r tj�nsten avaktiveras routerns inbyggda regler f�r Internet-�tkomst";
pactrl.manageacc ="Hantera konto";
pactrl.center4 ="Hantera ditt Parental Control-konto";
pactrl.signparental ="Registrera dig f�r Parental Control-tj�nsten";
pactrl.moreinfo ="Mer information.";
pactrl.isprovision ="enheten �r godk�nd";
pactrl.notprovision ="enheten �r inte godk�nd";
pactrl.right1 ="P� sk�rmbilden Parental Control kan du registrera dig och hantera ditt Linksys Parental Control-konto. Med Linksys Parental Control-tj�nst f�r du kraftfulla verktyg f�r att reglera tillg�ngligheten f�r Internet-tj�nster, �tkomst och funktioner. Du kan anpassa dem f�r varje medlem i familjen.";

var satusroute = new Object();
satusroute.localtime ="Inte tillg�nglig";

var succ = new Object();
succ.autoreturn ="Du �terg�r till f�reg�ende sida efter ett antal sekunder.";
succ.return_desc = "Du kommer till sidan f�r s�ker uppgradering efter ett antal sekunder.";
succ.interrupt_desc = "Avbryt aldrig uppgraderingen, v�nta...";
succ.return_index = "Du kommer till sidan f�r grundl�ggande inst�llningar efter ett antal sekunder. ";

var gn = new Object();
gn.gnip="N�tverks-IP f�r g�st ";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="N�tverksnamn (SSID) f�r g�st";
gn.err1="G�stens n�tverks-IP-adress f�r inte vara samma subn�t som LAN-adressen.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Kontots varaktighet";
gn.minutes="timmar";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title="G�st�tkomst";
gn.tips0="Felaktigt l�senord, skriv in det igen";
gn.tips1="Ange l�senordet f�r �tkomst till denna hotspot.";
gn.login="Logga in";
gn.err3="Wireless 5G SSID �r samma som g�stens SSID, �ndra namnet.";
gn.err4="Wireless 2,4G SSID �r samma som g�stens SSID, �ndra namnet.";
gn.err5="LAN-IP-adressen f�r inte vara samma subn�t som g�stens n�tverks-IP-adress.";
gn.err6="192.168.33.0/24-n�tverket (IP-adresserna 192.168.33.0�255) �r reserverat f�r det tr�dl�sa g�stn�tverket.Anv�nd en annan n�tverksadress.";
gn.tips6="Ange l�senordet f�r g�st�tkomst om du vill ansluta till internet. Om du inte k�nner till l�senordet fr�gar du �garen. L�senordet f�r g�st�tkomst finns i Linksys Connect.";
gn.dv="Skrivbordsvy";
gn.mv="MMobilvy";
gn.context="Ange l�senordet f�r g�st�tkomst om du vill ansluta till internet. Om du inte k�nner till l�senordet fr�gar du �garen. L�senordet f�r g�st�tkomst finns i Linksys Connect.";
gn.nat="G�st�tkomst �r inte tillg�nglig om NAT �r avaktiverat.  Forts�tt med att spara dina �ndringar?";









