var adtopmenu = new Object();
adtopmenu.manage="Styring";
adtopmenu.log="Log";
adtopmenu.diag="Diagnostik";
adtopmenu.facdef="Fabriksindstillinger";
adtopmenu.upgarde="Firmware-opgradering";
adtopmenu.lang="Sprog";
adtopmenu.multilang="Flere sprog";
adtopmenu.selan="V�lg sprog";

var adleftmenu = new Object();
adleftmenu.routerpsw="Routeradgangskode";
adleftmenu.localaccess="Routeradgang";
adleftmenu.routerpsw="Routeradgangskode";
adleftmenu.remoteaccess="Adgang til fjernstyring";
adleftmenu.ping="Ping-test";
adleftmenu.pingparam="Ping-parametre";
adleftmenu.tracertest="Traceroute-test";
adleftmenu.tracerparam="Traceroute-parametre";
adleftmenu.upgradefw="Opgrader firmware";
adleftmenu.advfeature="Avancerede funktioner";
adleftmenu.reboot="Genstart";

var mgt = new Object();
mgt.reconfirm="Genindtast for at bekr�fte";
mgt.remotemgt="Fjernstyring&nbsp;";
mgt.webassistant="Linksys-webassistent";
mgt.mgtport="Styringsport";
mgt.rmtmgtport="Fjernstyringsport";
mgt.https="Brug https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Fjernopgradering";
mgt.remoteip="Tilladt fjern-IP-adresse";
mgt.anyip="Alle IP-adresser";
mgt.upnpconfig="Tillad brugere at konfigurere";
mgt.upnpinternetdis="Tillad brugere at deaktivere <BR>&nbsp;internetadgang";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Indg�ende logtabel";
log.srcip="Kilde-IP";
log.desportnum="Nummer p� destinationsport";
log.outlogtbl="Udg�ende logtabel";
log.lanip="LAN-IP";
log.desurlip="Destinations-URL/IP";
log.portnum="Service-/portnummer";
log.inlog="Indg�ende log";
log.outlog="Udg�ende log";
log.seclog="Sikkerhedslog";
log.dhcplog="DHCP-klientlog";
log.type="Type";
log.remotelog="IP-adresse p� Logviewer";
log.msg1="(0 betyder deaktiveret)";
log.lanipaddr="LAN-IP-adresse";
log.dstip="Destinations-URL eller -IP-adresse";
log.srvport="Portnummer (tjeneste)";

var ping = new Object();
ping.ipdomain="IP-adresse eller dom�nenavn";
ping.ipurl="IP- eller URL-adresse";
ping.times="Antal ping";
ping.unlimited="Ubegr�nset";
ping.pktsize="Pakkest�rrelse";
ping.unreach="Netv�rket kan ikke kontaktes";
ping.pkttr="Afsendte pakker";
ping.pktrx="Modtagne pakker";
ping.pktloss="Mistede pakker";
ping.databyte="databyte";
ping.datastat="datastatistik";
ping.roundtrip="round-trip min/gensn/maks";
ping.bytefrom="byte fra";
ping.time="Tid";
ping.reqout="Foresp�rgsel udl�bet";
ping.unknown="Ukendt v�rt";

var tracert = new Object();
tracert.unreach="Netv�rket kan ikke kontaktes";
tracert.traceto="traceroute til";
tracert.hopsmax="maks. hop";
tracert.bytepkt="bytepakker";
tracert.reqout="Foresp�rgsel udl�bet";
tracert.tracecomp="Sporing gennemf�rt";
tracert.unknown="Ukendt v�rt";

var facdef = new Object();
facdef.refacdefa="Gendan fabriksindstillinger";
facdef.refacdefa2="Gendan fabriksindstillinger";
facdef.helpmsg="Med denne funktion kan du nulstille alle routerens konfigurationsindstillinger til deres standardv�rdier. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="V�lg venligst en fil, der skal opgraderes";
fwupgrade.warning="<B>Advarsel: </B>Opgradering af firmware kan tage et par minutter. Undg� at slukke for <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;str�mmen eller at trykke p� reset-knappen.";
fwupgrade.notinterrupted="Opgraderingen m� IKKE afbrydes!!";
fwupgrade.upgradesuccess="Opgraderingen lykkedes.";
fwupgrade.restoresuccess="Gendannelse fuldf�rt.";
fwupgrade.reboot="Genstarter......";
fwupgrade.helpmsg="Download firmware-opgraderingsfilen til routeren fra webstedet p� <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Klik p� <b>Gennemse/V�lg</b>, og v�lg firmware-opgraderingsfilen. Klik derefter p� <b>Start opgradering<b>."

fwupgrade.safeupmsg1="Hvis du vil bruge sikker opgradering, skal du �ndre LAN-IP til \"192.168.1.1\" f�rst! ";
fwupgrade.safeupmsg2="Er du sikker p�, du vil bruge Safe Mode (Sikker tilstand) for at opgradere? ";

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
lang.ru="Russisk";
lang.pl="Polsk";
lang.ar="Arabisk";
lang.tr="Tyrkisk";
lang.title="Opgradering af sprogpakke";
lang.uploadfile="V�lg venligst et sprog, der skal opgraderes";

var adbutton = new Object();
adbutton.inlog="Indg�ende log";
adbutton.outlog="Udg�ende log";
adbutton.ping="Ping";
adbutton.tracer="Traceroute";
adbutton.safeupgrade="Sikker opgradering";
adbutton.upgrade="Opgrader";
adbutton.stop="Stop";
adbutton.clearlog="Ryd log";
adbutton.traceroute="Traceroute";
adbutton.starttracer="Start Traceroute";
adbutton.startupgrade="Start opgradering";
adbutton.startping="Start ping-test";
adbutton.viewlog="Vis logfil";
adbutton.clear="Ryd";
adbutton.savelog="Gem log";
adbutton.dhcpres="DHCP-reservation";
adbutton.startrestore="Start gendannelse";
adbutton.starttest="Start test";









