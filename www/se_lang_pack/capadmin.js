var adtopmenu = new Object();
adtopmenu.manage="Hantering";
adtopmenu.log="Logg";
adtopmenu.diag="Diagnostik";
adtopmenu.facdef="Fabriksinställningar";
adtopmenu.upgarde="Uppgradera fast programvara";
adtopmenu.lang="Språk";
adtopmenu.multilang="Flera språk";
adtopmenu.selan="Välj språk";

var adleftmenu = new Object();
adleftmenu.routerpsw="Routerlösenord";
adleftmenu.localaccess="Routeråtkomst";
adleftmenu.routerpsw="Routerlösenord";
adleftmenu.remoteaccess="Fjärrhanteringsåtkomst";
adleftmenu.ping="Ping-test";
adleftmenu.pingparam="Pingparametrar";
adleftmenu.tracertest="Traceroute-test";
adleftmenu.tracerparam="Traceroute-parametrar";
adleftmenu.upgradefw="Uppgradera fast programvara";
adleftmenu.advfeature="Avancerade funktioner";
adleftmenu.reboot="Starta om";

var mgt = new Object();
mgt.reconfirm="Ange det på nytt för att bekräfta";
mgt.remotemgt="&nbsp;Fjärrhantering";
mgt.webassistant="Linksyss webbassistent";
mgt.mgtport="Hanteringsport";
mgt.rmtmgtport="Fjärrhanteringsport";
mgt.https="Använd https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Fjärruppgradering";
mgt.remoteip="Tillåten fjärr-IP-adress";
mgt.anyip="Alla IP-adresser";
mgt.upnpconfig="Tillåt användare att konfigurera";
mgt.upnpinternetdis="Tillåt användare att avaktivera <BR>&nbsp;Internet-åtkomst";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Inkommande loggtabell";
log.srcip="Källans IP";
log.desportnum="Destinationens portnummer";
log.outlogtbl="Utgående loggtabell";
log.lanip="LAN-IP-adress";
log.desurlip="URL/IP-adress för mål";
log.portnum="Tjänst-/portnummer";
log.inlog="Logg för inkommande";
log.outlog="Logg för utgående";
log.seclog="Säkerhetslogg";
log.dhcplog="DHCP-klientlogg";
log.type="Typ";
log.remotelog="IP-adress för Logviewer";
log.msg1="(0 innebär avaktiverad)";
log.lanipaddr="IP-adress för LAN";
log.dstip="Mål-URL eller mål-IP-adress";
log.srvport="Port-nummer (tjänst)";

var ping = new Object();
ping.ipdomain="IP-adress eller domännamn";
ping.ipurl="IP- eller URL-adress";
ping.times="Antal ping";
ping.unlimited="Obegränsat";
ping.pktsize="Paketstorlek";
ping.unreach="Det går inte att nå nätverket";
ping.pkttr="Överförda paket";
ping.pktrx="Mottagna paket";
ping.pktloss="Paketförlust";
ping.databyte="databyte";
ping.datastat="datastatistik";
ping.roundtrip="tur och retur min/med/max";
ping.bytefrom="byte från";
ping.time="Tid";
ping.reqout="Tidsgränsen för begäran uppnåddes";
ping.unknown="Okänd värd";

var tracert = new Object();
tracert.unreach="Det går inte att nå nätverket";
tracert.traceto="traceroute till";
tracert.hopsmax="max hopp";
tracert.bytepkt="byte-paket";
tracert.reqout="Tidsgränsen för begäran uppnåddes";
tracert.tracecomp="Traceroute har slutförts";
tracert.unknown="Okänd värd";

var facdef = new Object();
facdef.refacdefa="Återställ fabriksinställningar";
facdef.refacdefa2="Återställ till fabriksinställningar";
facdef.helpmsg="Med den här funktionen återställer du routerns samtliga konfigurationsinställningar till standardvärdena. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Välj den fil du vill uppgradera";
fwupgrade.warning="<B>Varning! </B>Uppgraderingen av fast programvara kan ta några minuter. Stäng inte av <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;strömmen och tryck inte på återställningsknappen.";
fwupgrade.notinterrupted="Du får INTE avbryta uppgraderingen!";
fwupgrade.upgradesuccess="Uppgraderingen slutfördes.";
fwupgrade.restoresuccess="Återställningen slutfördes.";
fwupgrade.reboot="Startar om...";
fwupgrade.helpmsg="Hämta uppgraderingsfilen för routerns fasta programvara från webbplatsen <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Klicka på <b>Bläddra/Välj fil</b> och välj uppgraderingsfilen. Klicka sedan på <b>Starta uppgradering</b>."
fwupgrade.safeupmsg1="Om du vill använda säker uppgradering ändrar du först din LAN-IP-adress till \"192.168.1.1\".";
fwupgrade.safeupmsg2="Vill du verkligen använda säkert läge vid uppgraderingen? ";

var lang = new Object();

lang.en="English";
lang.dk="Dansk";
lang.de="Deutsch";
lang.es="Español";
lang.fr="Français";
lang.frc="Français canadien";
lang.it="Italiano";
lang.nl="Nederlands";
lang.pt="Português";
lang.se="Svenska";
lang.ru="Ryska";
lang.pl="Polska";
lang.ar="Arabiska";
lang.tr="Turkiska";
lang.title="Uppgradering av språkpaket";
lang.uploadfile="Välj den språkfil du vill uppgradera";

var adbutton = new Object();
adbutton.inlog="Logg för inkommande";
adbutton.outlog="Logg för utgående";
adbutton.ping="Ping";
adbutton.tracer="Traceroute";
adbutton.safeupgrade="Säker uppgradering";
adbutton.upgrade="Uppgradera";
adbutton.stop="Stopp";
adbutton.clearlog="Rensa logg";
adbutton.traceroute="Traceroute";
adbutton.starttracer="Börja Traceroute";
adbutton.startupgrade="Påbörja uppgradering";
adbutton.startping="Börja pinga";
adbutton.viewlog="Visa logg";
adbutton.clear="Rensa";
adbutton.savelog="Spara logg";
adbutton.dhcpres="DHCP-reservation";
adbutton.startrestore="Börja återställa";
adbutton.starttest="Börja testa";








