var adtopmenu = new Object();
adtopmenu.manage="Beheer";
adtopmenu.log="Logboek";
adtopmenu.diag="Diagnostische gegevens";
adtopmenu.facdef="Fabrieksinstellingen";
adtopmenu.upgarde="Firmware-upgrade";
adtopmenu.lang="Taal";
adtopmenu.multilang="Meerdere talen";
adtopmenu.selan="Selecteer uw taal";

var adleftmenu = new Object();
adleftmenu.routerpsw="Wachtwoord router";
adleftmenu.localaccess="Routertoegang";
adleftmenu.routerpsw="Wachtwoord router";
adleftmenu.remoteaccess="Toegang voor extern beheer";
adleftmenu.ping="Ping-test";
adleftmenu.pingparam="Pingparameters";
adleftmenu.tracertest="Traceroute-test";
adleftmenu.tracerparam="Traceroute-parameters";
adleftmenu.upgradefw="Firmware upgraden";
adleftmenu.advfeature="Geavanceerde functies";
adleftmenu.reboot="Opnieuw opstarten";

var mgt = new Object();
mgt.reconfirm="Voer opnieuw in ter bevestiging";
mgt.remotemgt="Extern &nbsp;beheer";
mgt.webassistant="Linksys Web Assistant";
mgt.mgtport="Beheerpoort";
mgt.rmtmgtport="Poort voor extern beheer";
mgt.https="HTTPS gebruiken";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Externe upgrade";
mgt.remoteip="Toegestaan extern IP-adres";
mgt.anyip="Elk IP-adres";
mgt.upnpconfig="Gebruikers mogen configureren";
mgt.upnpinternetdis="Gebruikers mogen <BR>&nbsp;internettoegang uitschakelen";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Logtabel inkomend verkeer";
log.srcip="Bron-IP";
log.desportnum="Doelpoortnummer";
log.outlogtbl="Logtabel uitgaand verkeer";
log.lanip="LAN-IP";
log.desurlip="Doel-URL/IP";
log.portnum="Service/poortnummer";
log.inlog="Logboek inkomend verkeer";
log.outlog="Logboek uitgaand verkeer";
log.seclog="Beveiligingslogboek";
log.dhcplog="DHCP-clientlogboek";
log.type="Type";
log.remotelog="IP-adres logviewer";
log.msg1="(0 betekent uitgeschakeld)";
log.lanipaddr="LAN-IP-adres";
log.dstip="Doel-URL/IP-adres";
log.srvport="Poortnummer (service)";

var ping = new Object();
ping.ipdomain="IP-adres of domeinnaam";
ping.ipurl="IP- of URL-adres";
ping.times="Aantal pings";
ping.unlimited="Onbeperkt";
ping.pktsize="Pakketgrootte";
ping.unreach="Netwerk is onbereikbaar";
ping.pkttr="Verzonden pakketten";
ping.pktrx="Ontvangen pakketten";
ping.pktloss="Verloren pakketten";
ping.databyte="databytes";
ping.datastat="datastatistieken";
ping.roundtrip="heen & terug  min/gem/max";
ping.bytefrom="bytes van";
ping.time="Tijd";
ping.reqout="Time-out bij verzoek";
ping.unknown="Onbekende host";

var tracert = new Object();
tracert.unreach="Netwerk is onbereikbaar";
tracert.traceto="traceroute naar";
tracert.hopsmax="knooppunten max";
tracert.bytepkt="byte pakketten";
tracert.reqout="Time-out bij verzoek";
tracert.tracecomp="Traceroute voltooid";
tracert.unknown="Onbekende host";

var facdef = new Object();
facdef.refacdefa="Fabrieksinstellingen herstellen";
facdef.refacdefa2="Fabrieksinstellingen herstellen";
facdef.helpmsg="Met deze functie kunt u de standaardwaarden van alle configuratie-instellingen terugzetten. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Selecteer het bestand dat de upgrade bevat";
fwupgrade.warning="<B>Waarschuwing: </B>Het upgraden van de firmware kan enkele minuten duren. <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schakel de netstroom niet uit en druk niet op de resetknop.";
fwupgrade.notinterrupted="De upgrade mag niet worden onderbroken!";
fwupgrade.upgradesuccess="Het upgraden is voltooid.";
fwupgrade.restoresuccess="Het terugzetten is voltooid.";
fwupgrade.reboot="Bezig met herstarten...";
fwupgrade.helpmsg="Download het firmware-upgradebestand voor de router van de website: <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Klik op <b>Bladeren/Bestand kiezen </b> en selecteer het firmware-upgradebestand. Klik vervolgens op <b>Upgrade starten</b>."
fwupgrade.safeupmsg1="Als u de veilige modus wilt gebruiken voor de upgrade, wijzig uw LAN IP-adres dan eerst in \"192.168.1.1\". ";
fwupgrade.safeupmsg2="Weet u zeker dat u de veilige modus wilt gebruiken voor de upgrade? ";

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
lang.ru="Russisch";
lang.pl="Pools";
lang.ar="Arabisch";
lang.tr="Turks";
lang.title="Talenpakketupgrade";
lang.uploadfile="Selecteer het bestand dat het talenpakket bevat";

var adbutton = new Object();
adbutton.inlog="Logboek inkomend verkeer";
adbutton.outlog="Logboek uitgaand verkeer";
adbutton.ping="Ping";
adbutton.tracer="Traceroute";
adbutton.safeupgrade="Veilig upgraden";
adbutton.upgrade="Upgraden";
adbutton.stop="Stoppen";
adbutton.clearlog="Logboek wissen";
adbutton.traceroute="Traceroute";
adbutton.starttracer="Traceroute starten";
adbutton.startupgrade="Upgrade starten";
adbutton.startping="Starten met pingen";
adbutton.viewlog="Logboek weergeven";
adbutton.clear="Wissen";
adbutton.savelog="Logboek opslaan";
adbutton.dhcpres="DHCP-reservering";
adbutton.startrestore="Terugzetten starten";
adbutton.starttest="Test starten";









