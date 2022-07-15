var adtopmenu = new Object();
adtopmenu.manage="Styring";
adtopmenu.log="Log";
adtopmenu.diag="Diagnostik";
adtopmenu.facdef="Fabriksindstillinger";
adtopmenu.upgarde="Firmware-opgradering";
adtopmenu.lang="Sprog";
adtopmenu.multilang="Flere sprog";
adtopmenu.selan="Vælg sprog";

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
mgt.reconfirm="Genindtast for at bekræfte";
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
log.inlogtbl="Indgående logtabel";
log.srcip="Kilde-IP";
log.desportnum="Nummer på destinationsport";
log.outlogtbl="Udgående logtabel";
log.lanip="LAN-IP";
log.desurlip="Destinations-URL/IP";
log.portnum="Service-/portnummer";
log.inlog="Indgående log";
log.outlog="Udgående log";
log.seclog="Sikkerhedslog";
log.dhcplog="DHCP-klientlog";
log.type="Type";
log.remotelog="IP-adresse på Logviewer";
log.msg1="(0 betyder deaktiveret)";
log.lanipaddr="LAN-IP-adresse";
log.dstip="Destinations-URL eller -IP-adresse";
log.srvport="Portnummer (tjeneste)";

var ping = new Object();
ping.ipdomain="IP-adresse eller domænenavn";
ping.ipurl="IP- eller URL-adresse";
ping.times="Antal ping";
ping.unlimited="Ubegrænset";
ping.pktsize="Pakkestørrelse";
ping.unreach="Netværket kan ikke kontaktes";
ping.pkttr="Afsendte pakker";
ping.pktrx="Modtagne pakker";
ping.pktloss="Mistede pakker";
ping.databyte="databyte";
ping.datastat="datastatistik";
ping.roundtrip="round-trip min/gensn/maks";
ping.bytefrom="byte fra";
ping.time="Tid";
ping.reqout="Forespørgsel udløbet";
ping.unknown="Ukendt vært";

var tracert = new Object();
tracert.unreach="Netværket kan ikke kontaktes";
tracert.traceto="traceroute til";
tracert.hopsmax="maks. hop";
tracert.bytepkt="bytepakker";
tracert.reqout="Forespørgsel udløbet";
tracert.tracecomp="Sporing gennemført";
tracert.unknown="Ukendt vært";

var facdef = new Object();
facdef.refacdefa="Gendan fabriksindstillinger";
facdef.refacdefa2="Gendan fabriksindstillinger";
facdef.helpmsg="Med denne funktion kan du nulstille alle routerens konfigurationsindstillinger til deres standardværdier. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Vælg venligst en fil, der skal opgraderes";
fwupgrade.warning="<B>Advarsel: </B>Opgradering af firmware kan tage et par minutter. Undgå at slukke for <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;strømmen eller at trykke på reset-knappen.";
fwupgrade.notinterrupted="Opgraderingen må IKKE afbrydes!!";
fwupgrade.upgradesuccess="Opgraderingen lykkedes.";
fwupgrade.restoresuccess="Gendannelse fuldført.";
fwupgrade.reboot="Genstarter......";
fwupgrade.helpmsg="Download firmware-opgraderingsfilen til routeren fra webstedet på <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Klik på <b>Gennemse/Vælg</b>, og vælg firmware-opgraderingsfilen. Klik derefter på <b>Start opgradering<b>."

fwupgrade.safeupmsg1="Hvis du vil bruge sikker opgradering, skal du ændre LAN-IP til \"192.168.1.1\" først! ";
fwupgrade.safeupmsg2="Er du sikker på, du vil bruge Safe Mode (Sikker tilstand) for at opgradere? ";

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
lang.ru="Russisk";
lang.pl="Polsk";
lang.ar="Arabisk";
lang.tr="Tyrkisk";
lang.title="Opgradering af sprogpakke";
lang.uploadfile="Vælg venligst et sprog, der skal opgraderes";

var adbutton = new Object();
adbutton.inlog="Indgående log";
adbutton.outlog="Udgående log";
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









