var adtopmenu = new Object();
adtopmenu.manage="Hantering";
adtopmenu.log="Logg";
adtopmenu.diag="Diagnostik";
adtopmenu.facdef="Fabriksinst�llningar";
adtopmenu.upgarde="Uppgradera fast programvara";
adtopmenu.lang="Spr�k";
adtopmenu.multilang="Flera spr�k";
adtopmenu.selan="V�lj spr�k";

var adleftmenu = new Object();
adleftmenu.routerpsw="Routerl�senord";
adleftmenu.localaccess="Router�tkomst";
adleftmenu.routerpsw="Routerl�senord";
adleftmenu.remoteaccess="Fj�rrhanterings�tkomst";
adleftmenu.ping="Ping-test";
adleftmenu.pingparam="Pingparametrar";
adleftmenu.tracertest="Traceroute-test";
adleftmenu.tracerparam="Traceroute-parametrar";
adleftmenu.upgradefw="Uppgradera fast programvara";
adleftmenu.advfeature="Avancerade funktioner";
adleftmenu.reboot="Starta om";

var mgt = new Object();
mgt.reconfirm="Ange det p� nytt f�r att bekr�fta";
mgt.remotemgt="&nbsp;Fj�rrhantering";
mgt.webassistant="Linksyss webbassistent";
mgt.mgtport="Hanteringsport";
mgt.rmtmgtport="Fj�rrhanteringsport";
mgt.https="Anv�nd https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Fj�rruppgradering";
mgt.remoteip="Till�ten fj�rr-IP-adress";
mgt.anyip="Alla IP-adresser";
mgt.upnpconfig="Till�t anv�ndare att konfigurera";
mgt.upnpinternetdis="Till�t anv�ndare att avaktivera <BR>&nbsp;Internet-�tkomst";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Inkommande loggtabell";
log.srcip="K�llans IP";
log.desportnum="Destinationens portnummer";
log.outlogtbl="Utg�ende loggtabell";
log.lanip="LAN-IP-adress";
log.desurlip="URL/IP-adress f�r m�l";
log.portnum="Tj�nst-/portnummer";
log.inlog="Logg f�r inkommande";
log.outlog="Logg f�r utg�ende";
log.seclog="S�kerhetslogg";
log.dhcplog="DHCP-klientlogg";
log.type="Typ";
log.remotelog="IP-adress f�r Logviewer";
log.msg1="(0 inneb�r avaktiverad)";
log.lanipaddr="IP-adress f�r LAN";
log.dstip="M�l-URL eller m�l-IP-adress";
log.srvport="Port-nummer (tj�nst)";

var ping = new Object();
ping.ipdomain="IP-adress eller dom�nnamn";
ping.ipurl="IP- eller URL-adress";
ping.times="Antal ping";
ping.unlimited="Obegr�nsat";
ping.pktsize="Paketstorlek";
ping.unreach="Det g�r inte att n� n�tverket";
ping.pkttr="�verf�rda paket";
ping.pktrx="Mottagna paket";
ping.pktloss="Paketf�rlust";
ping.databyte="databyte";
ping.datastat="datastatistik";
ping.roundtrip="tur och retur min/med/max";
ping.bytefrom="byte fr�n";
ping.time="Tid";
ping.reqout="Tidsgr�nsen f�r beg�ran uppn�ddes";
ping.unknown="Ok�nd v�rd";

var tracert = new Object();
tracert.unreach="Det g�r inte att n� n�tverket";
tracert.traceto="traceroute till";
tracert.hopsmax="max hopp";
tracert.bytepkt="byte-paket";
tracert.reqout="Tidsgr�nsen f�r beg�ran uppn�ddes";
tracert.tracecomp="Traceroute har slutf�rts";
tracert.unknown="Ok�nd v�rd";

var facdef = new Object();
facdef.refacdefa="�terst�ll fabriksinst�llningar";
facdef.refacdefa2="�terst�ll till fabriksinst�llningar";
facdef.helpmsg="Med den h�r funktionen �terst�ller du routerns samtliga konfigurationsinst�llningar till standardv�rdena. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="V�lj den fil du vill uppgradera";
fwupgrade.warning="<B>Varning! </B>Uppgraderingen av fast programvara kan ta n�gra minuter. St�ng inte av <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;str�mmen och tryck inte p� �terst�llningsknappen.";
fwupgrade.notinterrupted="Du f�r INTE avbryta uppgraderingen!";
fwupgrade.upgradesuccess="Uppgraderingen slutf�rdes.";
fwupgrade.restoresuccess="�terst�llningen slutf�rdes.";
fwupgrade.reboot="Startar om...";
fwupgrade.helpmsg="H�mta uppgraderingsfilen f�r routerns fasta programvara fr�n webbplatsen <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Klicka p� <b>Bl�ddra/V�lj fil</b> och v�lj uppgraderingsfilen. Klicka sedan p� <b>Starta uppgradering</b>."
fwupgrade.safeupmsg1="Om du vill anv�nda s�ker uppgradering �ndrar du f�rst din LAN-IP-adress till \"192.168.1.1\".";
fwupgrade.safeupmsg2="Vill du verkligen anv�nda s�kert l�ge vid uppgraderingen? ";

var lang = new Object();

lang.en="English";
lang.dk="Dansk";
lang.de="Deutsch";
lang.es="Espa�ol";
lang.fr="Fran�ais";
lang.frc="Fran�ais canadien";
lang.it="Italiano";
lang.nl="Nederlands";
lang.pt="Portugu�s";
lang.se="Svenska";
lang.ru="Ryska";
lang.pl="Polska";
lang.ar="Arabiska";
lang.tr="Turkiska";
lang.title="Uppgradering av spr�kpaket";
lang.uploadfile="V�lj den spr�kfil du vill uppgradera";

var adbutton = new Object();
adbutton.inlog="Logg f�r inkommande";
adbutton.outlog="Logg f�r utg�ende";
adbutton.ping="Ping";
adbutton.tracer="Traceroute";
adbutton.safeupgrade="S�ker uppgradering";
adbutton.upgrade="Uppgradera";
adbutton.stop="Stopp";
adbutton.clearlog="Rensa logg";
adbutton.traceroute="Traceroute";
adbutton.starttracer="B�rja Traceroute";
adbutton.startupgrade="P�b�rja uppgradering";
adbutton.startping="B�rja pinga";
adbutton.viewlog="Visa logg";
adbutton.clear="Rensa";
adbutton.savelog="Spara logg";
adbutton.dhcpres="DHCP-reservation";
adbutton.startrestore="B�rja �terst�lla";
adbutton.starttest="B�rja testa";








