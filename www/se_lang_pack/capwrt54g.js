var firewall2 = new Object();
firewall2.natredir="Filtrera NAT-omdirigeringar via internet endast för IPv4-internet";
firewall2.ident="Filtrera IDENT (Port 113)";
firewall2.multi="Filtrera multicast-sändningar";
firewall2.internetfilter="Internetfilter";
firewall2.webfilter="Webbfilter";

var hupgrade = new Object();
hupgrade.right1="Klicka på bläddringsknappen och markera den fil för fast programvara som ska skickas till routern.";
hupgrade.right2="Klicka på knappen Uppgradera när du vill påbörja uppgraderingsprocessen. Uppgraderingen får inte avbrytas.";
hupgrade.wrimage="Bildfilen är inte rätt.";

var hfacdef = new Object();
hfacdef.right1="Alla inställningar återställs till fabriksinställningarna. Alla dina inställningar raderas.";
hfacdef.warning="Varning! Om du klickar på OK återställs fabriksinställningarna och alla tidigare inställningar raderas.";

var hdiag = new Object();
hdiag.right1="Ange den IP-adress eller det domännamn som du vill pinga och klicka på knappen Ping.";
hdiag.right2="Ange den IP-adress eller det domännamn som du vill spåra och klicka på knappen Traceroute.";

var hlog = new Object();
hlog.right1="Du kan aktivera eller avaktivera användandet av <b>inkommande</b> och <b>utgående</b> loggar genom att välja lämplig alternativknapp.";

var manage2 = new Object();
manage2.webacc="Åtkomst till lokal hantering";
manage2.accser="Åtkomst till server";
manage2.wlacc="Trådlös åtkomst till &nbsp;webben";
manage2.vapass="Det bekräftade lösenordet stämmer inte överens med det angivna lösenordet. Ange lösenordet igen.";
manage2.passnot="Det bekräftade lösenordet matchade inte.";
manage2.selweb="Du måste välja en webbserver.";
manage2.changpass="Standardlösenordet används på routern. För säkerhets skull måste du ändra lösenordet innan funktionen Fjärrhantering kan aktiveras. Ändra lösenordet genom att klicka på OK. Om du vill att funktionen Fjärrhantering ska vara avaktiverad klickar du på Avbryt.";
manage2.webutiacc="Åtkomst via";
manage2.wlutiacc="Åtkomst via trådlöst";

var hmanage2 = new Object();
hmanage2.right1="<b>Lokal åtkomst till router: </b>Du kan ändra routerns lösenord härifrån. Ange ett nytt lösenord för routern i Lösenord för router och bekräfta det genom att ange det igen i fältet Bekräfta genom att ange igen.<br>";
hmanage2.right2="<b>Webbåtkomst: </b>Här kan du konfigurera åtkomstalternativ till routerns webbverktyg.";
hmanage2.right3="<b>Fjärråtkomst till router: </b>Här kan du få fjärråtkomst till routern. Välj den port som du vill använda. Du måste ändra lösenordet till routern om standardlösenordet fortfarande används.";
hmanage2.right4="<b>UPnP: </b>Används i vissa program för att automatiskt öppna portar för kommunikation.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC-adress</b>. Det här är routerns MAC-adress, så som den visas i det lokala, trådlösa nätverket.";
hstatwl2.right2="<b>Läge</b>. I enlighet med val på fliken Trådlöst visas här det trådlösa läge – Blandat läge, Endast G-läge eller Avaktiverad – som används i nätverket.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC-adress</b>. Routerns MAC-adress, så som den visas i det lokala Ethernet-nätverket.";
hstatlan2.right2="<b>IP-adress</b>. Här visas routerns IP-adress, så som den anges i det lokala, Ethernet-nätverket.";
hstatlan2.right3="<b>Nätmask</b>. Om du använder en nätmask för routern visas den här.";
hstatlan2.right4="<b>DHCP-server</b>. Om du använder routern som en DHCP-server visas det här.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statisk";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="Ansluta";
hstatrouter2.disconnected="Frånkopplad";
hstatrouter2.disconnect="Koppla bort";
hstatrouter2.right1="<b>Version av fast programvara.  </b>Den aktuella fasta programvaran för routern.";
hstatrouter2.right2="<b>Aktuell tid.  </b>Här visas tiden som den har ställts in på fliken Inställningar.";
hstatrouter2.right3="<b>MAC-adress.  </b>Routerns MAC-adress, så som den visas hos Internet-leverantören.";
hstatrouter2.right4="<b>Routernamn.  </b>Det specifika namnet för routern, som du anger på fliken Inställningar.";
hstatrouter2.right5="<b>Konfigurationstyp.  </b>Här visas den information som krävs av Internet-leverantören för anslutning till Internet. Den här informationen har angetts på fliken Inställningar. Du kan <b>Ansluta</b> eller <b>Koppla ned</b> anslutningen genom att klicka på den här knappen.";
hstatrouter2.authfail=" autentiseringsfel";
hstatrouter2.noip="Det går inte att hämta en IP-adress från ";
hstatrouter2.negfail=" anpassningsfel";
hstatrouter2.lcpfail=" LCP-anpassningsfel";
hstatrouter2.tcpfail="Det går inte att upprätta en TCP-anslutning till ";
hstatrouter2.noconn="Det går inte att ansluta till ";
hstatrouter2.server=" servern";
hstatrouter2.pppoenoip="Det går inte att hämta en IP-adress från PPPoE";
hstatrouter2.undetermined="Obestämd";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ: </b>När du aktiverar det här alternativet exponeras routern mot Internet. Alla portar blir åtkomliga från Internet";

var hforward2 = new Object();
hforward2.right1="<b>Vidarebefordran av portintervall: </b>För att vissa tillämpningar ska fungera på rätt sätt kan det krävas att vissa portar öppnas. Exempel på sådana tillämpningar är servrar och vissa Internet-spel. När en begäran för en viss port kommer in från Internet, dirigeras data via routern till den dator som du anger. Av säkerhetsskäl kan det vara bra att begränsa vidarebefordran av portar till endast de portar du använder och avmarkera kryssrutan <b>Aktivera</b> när du inte längre använder dem.";

var hfilter2 = new Object();
hfilter2.delpolicy="Ta bort regeln?";
hfilter2.right1="<b>Regler för Internet-åtkomst: </b>Du kan definiera upp till 10 åtkomstregler. Klicka på <b>Ta bort</b> om du vill ta bort en regel eller på <b>Sammanfattning</b> om du vill visa en sammanfattning av regeln.";
hfilter2.right2="<b>Status : </b>Aktivera eller avaktivera en regel.";
hfilter2.right3="<b>Regelnamn: </b>Du kan tilldela ett namn till regeln.";
hfilter2.right4="<b>Regeltyp: </b>Välj mellan Internet-åtkomst och Inkommande trafik.";
hfilter2.right5="<b>Dagar: </b>Välj vilken dag i veckan som du vill att regeln ska användas.";
hfilter2.right6="<b>Tider: </b>Ange vid vilken tid på dagen regeln ska användas.";
hfilter2.right7="<b>Blockerade tjänster: </b>Du kan välja att blockera åtkomst till vissa tjänster. Klicka på <b>Lägg till/Redigera</b> tjänster om du vill ändra de här inställningarna.";
hfilter2.right8="<b>Webbplatsblockering efter URL-adress: </b>Du kan blockera åtkomst till vissa webbplatser genom att ange deras URL-adress.";
hfilter2.right9="<b>Webbplatsblockering efter nyckelord: </b>Du kan blockera åtkomst till vissa webbplatser med hjälp av de nyckelord som webbsidan innehåller.";

var hportser2 = new Object();
hportser2.submit="Verkställ";

var hwlad2 = new Object();
hwlad2.authtyp="Autentiseringstyp";
hwlad2.basrate="Allmän hastighet";
hwlad2.mbps="Mbit/s";
hwlad2.def="Standard";
hwlad2.all="Alla";
hwlad2.defdef="(Standard: standard)";
hwlad2.fburst="Frame Burst";
hwlad2.milli="millisekunder";
hwlad2.range="Räckvidd";
hwlad2.frathrh="Fragmenteri-<br>ngsgränsvärde";
hwlad2.apiso="AP-isolering";
hwlad2.off="Av ";
hwlad2.on="På";
hwlad2.right1="<b>Autentiseringstyp: </b>Du kan välja mellan Automatiskt och Delad nyckel. Autentisering med delad nyckel är säkrare men alla enheter i nätverket måste ha funktioner för autentisering med delad nyckel.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Trådlöst nätverksläge: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster aktiveras automatiskt i <b>Blandat</b> läge och <b>Endast G-</b>läge."); %> Om du vill utelämna Wireless-G-klienter väljer du <b>Endast B-</b>läge. Om du vill avaktivera trådlös åtkomst väljer du <b>Avaktivera</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA med för-delad nyckel";
hwlsec2.wparadius="WPA med RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="WPA2 med endast för-delad nyckel";
hwlsec2.wpa2radius="WPA2 - endast RADIUS";
hwlsec2.wpa2pskmix="WPA2 blandad, med för-delad nyckel";
hwlsec2.wpa2radiusmix="WPA2 - blandad RADIUS";
hwlsec2.wpa2personal="WPA2-Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA – blandat läge";
hwlsec2.enterprisemixed="WPA2/WPA - företag blandat";
hwlsec2.pskpersonal="PSK - privat";
hwlsec2.pskenterprise="PSK - företag";
hwlsec2.psk2personal="PSK2 - privat";
hwlsec2.psk2enterprise="PSK2 - företag";

hwlsec2.right1="<b>Säkerhetsläge: </b>Du kan välja mellan Avaktivera, WEP, WPA med för-delad nyckel, WPA RADIUS och RADIUS. För att alla enheterna i nätverket ska kunna kommunicera med varandra måste du använda samma säkerhetsläge för alla.";

var hwmac2 = new Object();
hwmac2.right1="<b>MAC-adressklon: </b>Vissa Internet-leverantörer kräver att du registrerar din MAC-adress. Om du inte vill registrera om din MAC-adress kan du låta routern klona den MAC-adress som är registrerad hos Internet-leverantören.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS-tjänst: </b>Med DDNS kan du få åtkomst till nätverket genom att använda domännamn i stället för IP-adresser. Med tjänsten hanteras ändringar av IP-adresser och uppdateringar av domäninformationen dynamiskt. Du måste registrera dig för tjänsten hos TZO.com eller DynDNS.org.";
hddns2.right2="Klicka <b><a target=_blank href=http://Linksys.tzo.com>här</a></b> om du vill öppna ett <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KOSTNADSFRITT TZO-PROVKONTO";
hddns2.right3="Klicka <b><a target=_blank href=https://controlpanel.tzo.com>här</a></b> om du vill hantera ditt <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO-konto";
hddns2.right4="Klicka <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>här</a></b> om du vill köpa en TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS-prenumeration";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Support/handböcker</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Driftsläge: </b>Om routern fungerar som värd för Internet-anslutningen väljer du läget <b>Gateway</b>. Om det finns en annan router i nätverket väljer du <b>Router</b>.";
hrouting2.right2="<b>Välj uppsättningsnummer: </b>Det unika routernumret. Du kan konfigurera upp till 20 stycken.";
hrouting2.right3="<b>Routernamn: </b>Ange det namn som du vill tilldela routern.";
hrouting2.right4="<b>LAN-IP-adress för mål: </b>Den fjärrvärd som du vill tilldela den statiska routern till.";
hrouting2.right5="<b>Nätmask: </b>Fastställer värd och nätverksdel.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="Statisk DNS 3";
hindex2.hbs="Heart Beat Server";
hindex2.l2tps="L2TP-server";
hindex2.pptps="PPTP-server";
hindex2.hdhcp="<b>Automatisk konfiguration - DHCP: </b>Den här inställningen används vanligen av kabeloperatörer.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Den här inställningen används vanligen av DSL-leverantörer.<br>";
hindex2.hpppoe2="<b>Användarnamn: </b>Ange det användarnamn som du har fått av din Internet-leverantör.<br>";
hindex2.hpppoe3="<b>Lösenord: </b>Ange det lösenord som du har fått av din Internet-leverantör.<br>";

hindex2.hstatic1="<b>Statisk IP-adress: </b>Den här inställningen används vanligen av Internet-leverantörer för företag.<br>";
hindex2.hstatic2="<b>Internet-IP-adress: </b>Ange den IP-adress som du har fått av din Internet-leverantör.<br>";
hindex2.hstatic3="<b>Nätmask: </b>Ange nätmasken<br>";

hindex2.hpptp1="<b>PPTP: </b>Den här inställningen används vanligen av DSL-leverantörer.<br>";
hindex2.hpptp2="<b>Internet-IP-adress: </b>Ange den IP-adress som du har fått av din Internet-leverantör.<br>";
hindex2.hpptp3="<b>Nätmask: </b>Ange nätmasken<br>";
hindex2.hpptp4="<b>Gateway : </b>Ange Internet-leverantörens gatewayadress<br>";

hindex2.hl2tp1="<b>L2TP: </b>Den här inställningen används av vissa Internet-leverantörer i Europa.<br>";
hindex2.hl2tp2="<b>Användarnamn: </b>Ange det användarnamn som du har fått av din Internet-leverantör.<br>";
hindex2.hl2tp3="<b>Lösenord: </b>Ange det lösenord som du har fått av din Internet-leverantör.<br>";

hindex2.hhb1="<b>Telstra Cable: </b>Den här inställningen används vanligen av DSL-leverantörer.<br>";
hindex2.hhb2="<b>Användarnamn: </b>Ange det användarnamn som du har fått av din Internet-leverantör.<br>";
hindex2.hhb3="<b>Lösenord: </b>Ange det lösenord som du har fått av din Internet-leverantör.<br>";

hindex2.right1="<b>Värdnamn: </b>Ange det värdnamn som du har fått av din Internet-leverantör.<br>";
hindex2.right2="<b>Domännamn: </b>Ange det domännamn som du har fått av din Internet-leverantör.<br>";
hindex2.right3="<b>Lokal IP-adress: </b>Adressen till routern.<br>";
hindex2.right4="<b>Nätmask: </b>Nätmasken för routern.<br><br><br>";
hindex2.right5="<b>DHCP-server: </b>Möjliggör för routern att hantera dina IP-adresser.<br>";
hindex2.right6="<b>Start-IP-adress: </b>Den adress som du vill starta med.<br>";
hindex2.right7="<b>Tidsinställning: </b>Välj den tidszon där du befinner dig. Routern kan även automatiskt justera för sommartid.";
hindex2.hdhcps1="<b>Maximalt antal DHCP-användare: </b>Du kan begränsa antalet adresser som routern kan dela ut.<br>";

var errmsg2 = new Object();
errmsg2.err0="HeartBeat Server-IP-adressen är ogiltig!";
errmsg2.err1="Vill du ta bort den här posten?";
errmsg2.err2="Du måste ange ett SSID.";
errmsg2.err3="Ange en delad nyckel.";
errmsg2.err4=" innehåller otillåtna hexadecimala siffror eller över 63 tecken.";
errmsg2.err5="Nyckeln måste bestå av mellan 8 och 63 ASCII-tecken eller 64 hexadecimala siffror";
errmsg2.err6="Du måste ange en nyckel.";
errmsg2.err7="Felaktig nyckellängd.";
errmsg2.err8="Ange en lösenordsfras.";
errmsg2.err9="Sammanlagt antal kontroller överstiger 40.";
errmsg2.err10="Blanksteg är inte tillåtna.";
errmsg2.err11="När du har slutfört alla åtgärder sparar du inställningarna genom att klicka på Verkställ.";
errmsg2.err12="Du måste ange ett tjänstenamn.";
errmsg2.err13="Tjänstnamnet finns redan.";
errmsg2.err14="LAN-IP-adressen eller nätmasken är felaktig.";

var trigger2 = new Object();
trigger2.ptrigger="Portintervallsutlösning";
trigger2.qos="QoS";
trigger2.trirange="Utlösningsintervall";
trigger2.forrange="Vidarebefordring<br>sintervall";
trigger2.trirange1="Utlösningsintervall";
trigger2.forrange1="Vidarebefordringsintervall";
trigger2.sport="Startport";
trigger2.eport="Slutport";
trigger2.right1="Tillämpning Ange tillämpningsnamnet på utlösaren. <b>Utlösningsinternvall</b> För varje tillämpning visas det utlösta portnummerintervallet. Kontrollera vilka portnummer som behövs i Internet-tillämpningens dokumentation.<b>Startport</b> Ange startportsnummer för utlösningsintervallet.<b>Slutport</b> Ange slutportsnummer för utlösningsintervallet.   <b>Vidarebefordrat intervall </b>För varje tillämpning visas det vidarebefordrade portnummerintervallet. Om du vill ha mer information om portnummer läser du i dokumentationen för Internet-programmet.   <b>Startport </b>Ange startportsnummer för det vidarebefordrade intervallet.   <b>Slutport </b>Ange slutportsnummer för det vidarebefordrade intervallet.";

var bakres2 = new Object();
bakres2.conman="Konfigurationshantering";
bakres2.bakconf="Säkerhetskopiera konfiguration";
bakres2.resconf="Återställ konfiguration";
bakres2.bakres="Säkerhetskopiering och återställning";
bakres2.file2res="Välj en fil du vill återställa:";
bakres2.bakbutton="Säkerhetskopiera konfiguration";
bakres2.resbutton="Återställ konfiguration";
bakres2.right1="Du kan säkerhetskopiera din nuvarande konfiguration om du skulle behöva återställa routern till de ursprungliga fabriksinställningarna.";
bakres2.right2="Du kan klicka på knappen Säkerhetskopiera, så säkerhetskopieras den aktuella konfigurationen.";
bakres2.right3="Klicka på knappen Bläddra om du vill bläddra efter en konfigurationsfil som du har sparat i datorn.";
bakres2.right4="Klicka på Återställ om du vill skriva över alla nuvarande konfigurationer med dem som finns i konfigurationsfilen.";

var qos = new Object();
qos.uband="Utgående bandbredd";
qos.bandwidth="Bandbredd";
qos.dpriority="Enhetsprioritet";
qos.priority="Prioritet";
qos.dname="Enhetsnamn";
qos.low="Låg";
qos.medium="Medelhög";
qos.high="Hög";
qos.highest="Högsta";
qos.eppriority="Ethernet-portsprioritet";
qos.flowctrl="Flödeskontroll";
qos.appriority="Tillämpningsprioritet";
qos.specport="Viss port";
qos.appname="Programnamn";
qos.alert1="Portvärdet är utanför intervallet [0-65535].";
qos.alert2="Startportsvärdet är större än slutportsvärdet";
qos.confirm1="Om du anger hög prioritet för flera enheter, Ethernet-porten eller programmet, kan effekten av QoS upphävas.\nÄr du säker på att du vill fortsätta?";

qos.optgame="Optimera speltillämpningar";
qos.wqos="Trådburen QoS";
qos.wlqos="WMM   ";
qos.wlqos2="Trådlös QoS";
qos.edca_ap="AP-parametrar för EDCA";
qos.edca_sta="STA-parametrar för EDCA";
qos.wme="WMM-funktioner";
qos.noack="Inget tillkännagivande";
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
qos.intqccpri="Prioriterad Internet-åtkomst";
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
qos.addapp="Lägg till en ny tillämpning";
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
qos.addgame="Lägg till ett nytt spel";
qos.entername="Ange namn";
qos.etherport="Ethernet-port";
qos.voicedevice="Röstenhet";
qos.voicemac="Min röstenhets MAC-adress";
qos.recommend="Rekommendera";
qos.game="Spel";
qos.mymac="Min nuvarande dators MAC-adress";

qos.right1="Två typer av QoS-funktioner (Quality of Service) är tillgängliga: trådburen QoS, som styr enheter som är anslutna till routern med en Ethernet-kabel och trådlös QoS, som styr enheter som är trådlöst anslutna till routern.";
qos.right2="<b>Enhetsprioritet: </b>Du kan ange prioritet för all trafik från en enhet i nätverket genom att ge enheten ett enhetsnamn, ange prioritet och ange dess MAC-adress.";
qos.right3="<b>Ethernet-portsprioritet: </b>Du kan styra datahastigheterna i enlighet med vilka fysiska LAN-portar enheterna är anslutna till. Du kan tilldela hög eller låg prioritet för datatrafik från enheter som är anslutna till LAN-portarna 1 till 4.";
qos.right4="<b>Tillämpningsprioritet: </b>Du kan reglera datahastigheten efter tillämpningar som konsumerar bandbredd. Markera <b>Optimera speltillämpningar</b> om du automatiskt vill tillåta att portar för speltillämpningar får högre prioritet. Du kan anpassa upp till åtta tillämpningar genom att ange vilka portnummer de använder.";
qos.right5="Trådlös QoS kallas även för <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> av Wi-Fi Alliance<sup>TM</sup>. Markera Aktivera om du vill använda WMM för andra trådlösa enheter som också är WMM-certifierade.";
qos.right6="<b>Inget tillkännagivande: </b>Markera det här alternativet om du vill avaktivera tillkännagivande. Om alternativet är aktiverat skickas inga data om från routern om ett fel inträffar.";
qos.exist = "Inställningen finns redan.";

var vpn2 = new Object();
vpn2.right1="Du kan välja att aktivera PPTP-, L2TP- eller IPSec-genomströmning om du vill att dina nätverksenheter ska kommunicera via VPN.";

var fail = new Object();
fail.msg="De värden du angav är ogiltiga. Försök igen.";

var pactrl = new Object();
pactrl.pactrl ="Parental Control (barnlås)";
pactrl.accsign ="Kontoregistrering";
pactrl.center1 ="Linksys Parental Control-lösning bidrar till din familjs säkerhet<br>när de surfar på Internet";
pactrl.center2 ="<li>Enkel konfiguration</li><br><li>Skydda alla datorer i hemmet med din Linksys-router</li><br><li>Med hjälp av rapporter kan du övervaka användning av webben, e-post och IM</li>";
pactrl.center3 ="** Om du anmäler dig till den här tjänsten avaktiveras routerns inbyggda regler för Internet-åtkomst";
pactrl.manageacc ="Hantera konto";
pactrl.center4 ="Hantera ditt Parental Control-konto";
pactrl.signparental ="Registrera dig för Parental Control-tjänsten";
pactrl.moreinfo ="Mer information.";
pactrl.isprovision ="enheten är godkänd";
pactrl.notprovision ="enheten är inte godkänd";
pactrl.right1 ="På skärmbilden Parental Control kan du registrera dig och hantera ditt Linksys Parental Control-konto. Med Linksys Parental Control-tjänst får du kraftfulla verktyg för att reglera tillgängligheten för Internet-tjänster, åtkomst och funktioner. Du kan anpassa dem för varje medlem i familjen.";

var satusroute = new Object();
satusroute.localtime ="Inte tillgänglig";

var succ = new Object();
succ.autoreturn ="Du återgår till föregående sida efter ett antal sekunder.";
succ.return_desc = "Du kommer till sidan för säker uppgradering efter ett antal sekunder.";
succ.interrupt_desc = "Avbryt aldrig uppgraderingen, vänta...";
succ.return_index = "Du kommer till sidan för grundläggande inställningar efter ett antal sekunder. ";

var gn = new Object();
gn.gnip="Nätverks-IP för gäst ";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nätverksnamn (SSID) för gäst";
gn.err1="Gästens nätverks-IP-adress får inte vara samma subnät som LAN-adressen.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Kontots varaktighet";
gn.minutes="timmar";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title="Gäståtkomst";
gn.tips0="Felaktigt lösenord, skriv in det igen";
gn.tips1="Ange lösenordet för åtkomst till denna hotspot.";
gn.login="Logga in";
gn.err3="Wireless 5G SSID är samma som gästens SSID, ändra namnet.";
gn.err4="Wireless 2,4G SSID är samma som gästens SSID, ändra namnet.";
gn.err5="LAN-IP-adressen får inte vara samma subnät som gästens nätverks-IP-adress.";
gn.err6="192.168.33.0/24-nätverket (IP-adresserna 192.168.33.0–255) är reserverat för det trådlösa gästnätverket.Använd en annan nätverksadress.";
gn.tips6="Ange lösenordet för gäståtkomst om du vill ansluta till internet. Om du inte känner till lösenordet frågar du ägaren. Lösenordet för gäståtkomst finns i Linksys Connect.";
gn.dv="Skrivbordsvy";
gn.mv="MMobilvy";
gn.context="Ange lösenordet för gäståtkomst om du vill ansluta till internet. Om du inte känner till lösenordet frågar du ägaren. Lösenordet för gäståtkomst finns i Linksys Connect.";
gn.nat="Gäståtkomst är inte tillgänglig om NAT är avaktiverat.  Fortsätt med att spara dina ändringar?";









