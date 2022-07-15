var adtopmenu = new Object();
adtopmenu.manage="Verwaltungsfunktionen";
adtopmenu.log="Protokoll";
adtopmenu.diag="Diagnose";
adtopmenu.facdef="Werkseinstellungen";
adtopmenu.upgarde="Firmware-Aktualisierung";
adtopmenu.lang="Sprache";
adtopmenu.multilang="Mehrere Sprachen";
adtopmenu.selan="Wählen Sie Ihre Sprache aus.";

var adleftmenu = new Object();
adleftmenu.routerpsw="Router-Passwort";
adleftmenu.localaccess="Router-Zugriff";
adleftmenu.routerpsw="Router-Passwort";
adleftmenu.remoteaccess="Zugriff auf Remote-Verwaltung";
adleftmenu.ping="Ping-Test";
adleftmenu.pingparam="Ping-Parameter";
adleftmenu.tracertest="Test zur Routenverfolgung";
adleftmenu.tracerparam="Parameter zur Routenverfolgung";
adleftmenu.upgradefw="Firmware aktualisieren";
adleftmenu.advfeature="Erweiterte Funktionen";
adleftmenu.reboot="Neustart";

var mgt = new Object();
mgt.reconfirm="Zur Bestätigung erneut eingeben";
mgt.remotemgt="&nbsp;Remote-Verwaltung";
mgt.webassistant="Linksys Web-Assistent";
mgt.mgtport="Verwaltungs-Port";
mgt.rmtmgtport="Remote-Verwaltungs-Port";
mgt.https="HTTPS verwenden";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Remote-Aktualisierung";
mgt.remoteip="Zulässige Remote-IP-Adresse";
mgt.anyip="Jede IP-Adresse";
mgt.upnpconfig="Allen Benutzern Konfiguration gestatten";
mgt.upnpinternetdis="Benutzern gestatten, <BR>&nbsp;Internetzugriff zu deaktivieren.";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Tabelle für eingehende Protokolle";
log.srcip="IP-Adresse der Quelle";
log.desportnum="Ziel-Port-Nummer";
log.outlogtbl="Tabelle für ausgehende Protokolle";
log.lanip="LAN-IP-Adresse";
log.desurlip="Ziel-URL-/IP-Adresse";
log.portnum="Dienst-/Port-Nummer";
log.inlog="Protokoll – eingehend";
log.outlog="Protokoll – ausgehend";
log.seclog="Sicherheitsprotokoll";
log.dhcplog="DHCP-Client-Protokoll";
log.type="Typ";
log.remotelog="Logviewer-IP-Adresse";
log.msg1="(0 bedeutet deaktiviert)";
log.lanipaddr="LAN-IP-Adresse";
log.dstip="Ziel-URL- oder IP-Adresse";
log.srvport="Port-Nummer (Dienst-)";

var ping = new Object();
ping.ipdomain="IP-Adresse oder Domänenname";
ping.ipurl="IP-Adresse oder URL";
ping.times="Anzahl der Pings";
ping.unlimited="Unbegrenzt";
ping.pktsize="Paket-Größe";
ping.unreach="Netzwerk ist nicht erreichbar";
ping.pkttr="Übertragene Datenpakete";
ping.pktrx="Empfangene Datenpakete";
ping.pktloss="Verlorene Datenpakete";
ping.databyte="Datenbyte";
ping.datastat="Datenstatistiken";
ping.roundtrip="Durchlauf, Minimum/Mittelwert/Maximum";
ping.bytefrom="Byte von";
ping.time="Uhrzeit";
ping.reqout="Zeitüberschreitung für Anforderung";
ping.unknown="Unbekannter Host";

var tracert = new Object();
tracert.unreach="Netzwerk ist nicht erreichbar";
tracert.traceto="Routenverfolgung zu";
tracert.hopsmax="Hops max.";
tracert.bytepkt="Byte Pakete";
tracert.reqout="Zeitüberschreitung für Anforderung";
tracert.tracecomp="Ablaufverfolgung beendet";
tracert.unknown="Unbekannter Host";

var facdef = new Object();
facdef.refacdefa="Werkseinstellungen wiederherstellen";
facdef.refacdefa2="Standardeinstellungen wiederherstellen";
facdef.helpmsg="Mit dieser Funktion können Sie alle Konfigurationseinstellungen des Routers auf die Standardwerte zurücksetzen. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Wählen Sie eine Datei aus, die aktualisiert werden soll.";
fwupgrade.warning="<B>Warnung: </B>Die Aktualisierung der Firmware kann einige Minuten dauern. Schalten Sie das <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gerät nicht aus, und drücken Sie nicht die Reset-Taste.";
fwupgrade.notinterrupted="Der Aktualisierungsvorgang darf nicht unterbrochen werden.";
fwupgrade.upgradesuccess="Aktualisierung war erfolgreich.";
fwupgrade.restoresuccess="Wiederherstellung war erfolgreich.";
fwupgrade.reboot="Neustart ...";
fwupgrade.helpmsg="Laden Sie die Datei zur Aktualisierung der Firmware für den Router unter der folgenden Website herunter: <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Klicken Sie auf <b>Durchsuchen/auswählen</b>, und wählen Sie die Datei zur Aktualisierung der Firmware aus. Klicken Sie anschließend auf die Schaltfläche <b>Aktualisierung starten</b>."

fwupgrade.safeupmsg1="Wenn Sie möchten, dass die Aktualisierung im abgesicherten Modus erfolgt, müssen Sie die LAN-IP-Adresse folgendermaßen ändern: \"192.168.1.1\"";

fwupgrade.safeupmsg2="Sind Sie sicher, dass Sie mit der Aktualisierung im abgesicherten Modus fortfahren möchten? ";

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
lang.pl="Polnisch";
lang.ar="Arabisch";
lang.tr="Türkisch";
lang.title="Aktualisierung des Sprachpakets";
lang.uploadfile="Wählen Sie eine Sprachdatei für die Aktualisierung aus.";

var adbutton = new Object();
adbutton.inlog="Protokoll – eingehend";
adbutton.outlog="Protokoll – ausgehend";
adbutton.ping="Ping";
adbutton.tracer="Routenverfolgung";
adbutton.safeupgrade="Aktualisierung speichern";
adbutton.upgrade="Aktualisieren";
adbutton.stop="Anhalten";
adbutton.clearlog="Protokoll löschen";
adbutton.traceroute="Routenverfolgung";
adbutton.starttracer="Routenverfolgung starten";
adbutton.startupgrade="Aktualisierung starten";
adbutton.startping="Ping-Test starten";
adbutton.viewlog="Protokoll anzeigen";
adbutton.clear="Löschen";
adbutton.savelog="Protokoll speichern";
adbutton.dhcpres="DHCP-Reservierung";
adbutton.startrestore="Wiederherstellung starten";
adbutton.starttest="Test starten";









