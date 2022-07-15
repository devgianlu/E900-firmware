var firewall2 = new Object();
firewall2.natredir="Internet-NAT-Umleitung nur nach IPv4-Internet filtern";
firewall2.ident="IDENT-Port�113 filtern";
firewall2.multi="Multicast filtern";
firewall2.internetfilter="Internet-Filter";
firewall2.webfilter="Web-Filter";

var hupgrade = new Object();
hupgrade.right1="Klicken Sie auf die Schaltfl�che Durchsuchen, um die Firmwaredatei auszuw�hlen, die in den Router hochgeladen werden soll.";
hupgrade.right2="Klicken Sie auf die Schaltfl�che Aktualisieren, um mit dem Aktualisierungsvorgang zu beginnen. Der Aktualisierungsvorgang darf nicht unterbrochen werden.";
hupgrade.wrimage="Falsche Bilddatei.";

var hfacdef = new Object();
hfacdef.right1="Dadurch werden alle Einstellungen auf die Werkseinstellungen zur�ckgesetzt. All Ihre Einstellungen werden gel�scht.";
hfacdef.warning="Warnung! Wenn Sie auf OK klicken, wird das Ger�t auf die Werkseinstellungen zur�ckgesetzt, und alle bisherigen Einstellungen werden gel�scht.";

var hdiag = new Object();
hdiag.right1="Geben Sie die IP-Adresse oder den Dom�nennamen ein, f�r die/den Sie einen Ping-Test durchf�hren m�chten, und klicken Sie auf die Schaltfl�che Ping.";
hdiag.right2="Geben Sie die IP-Adresse oder den Dom�nennamen ein, die/den Sie verfolgen m�chten, und klicken Sie dann auf die Schaltfl�che Routenverfolgung.";

var hlog = new Object();
hlog.right1="Sie k�nnen die Verwendung von <b>eingehenden</b> und <b>ausgehenden</b> Protokollen aktivieren oder deaktivieren, indem Sie die entsprechende Optionsschaltfl�che ausw�hlen.";

var manage2 = new Object();
manage2.webacc="Zugriff auf lokale Verwaltung";
manage2.accser="Zugriffsserver";
manage2.wlacc="Wireless Web-Zugriff&nbsp;";
manage2.vapass="Die Passwort-Best�tigung stimmt nicht mit dem eingegebenen Passwort �berein. Geben Sie das Passwort erneut ein.";
manage2.passnot="Die Passwort-Best�tigung stimmt nicht mit dem Passwort �berein.";
manage2.selweb="Sie m�ssen einen Webserver ausw�hlen.";
manage2.changpass="F�r den Router ist derzeit das Standardpasswort festgelegt. Sie m�ssen aus Sicherheitsgr�nden das Passwort �ndern, bevor die Funktion Remote-Verwaltung aktiviert werden kann. Klicken Sie auf die Schaltfl�che OK, um Ihr Passwort zu �ndern. Klicken Sie auf die Schaltfl�che Abbrechen, um die Funktion Remote-Verwaltung deaktiviert zu lassen.";
manage2.webutiacc="Zugriff �ber";
manage2.wlutiacc="Wireless-Zugriff";

var hmanage2 = new Object();
hmanage2.right1="<b>Lokaler Routerzugriff: </b>Hier k�nnen Sie das Passwort des Routers �ndern. Geben Sie ein neues Passwort f�r den Router ein, und geben Sie dieses zur Best�tigung erneut im Feld Zur Best�tigung erneut eingeben ein.<br>";
hmanage2.right2="<b>Web-Zugriff: </b>Erm�glicht die Konfiguration von Zugriffsoptionen auf das webbasierte Dienstprogramm des Routers.";
hmanage2.right3="<b>Entfernter Routerzugriff: </b>Mit dieser Funktion k�nnen Sie von einem entfernten Standort auf den Router zugreifen. W�hlen Sie den Port aus, den Sie verwenden m�chten. Wenn f�r den Router noch das Standardpasswort verwendet wird, m�ssen Sie dieses �ndern.";
hmanage2.right4="<b>UPnP: </b>Wird von bestimmten Programmen verwendet, um Ports automatisch f�r Kommunikationszwecke zu �ffnen.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC-Adresse</b>. Hierbei handelt es sich um die MAC-Adresse des Routers, vom Standpunkt Ihres lokalen Wireless-Netzwerks aus gesehen.";
hstatwl2.right2="<b>Modus</b>. Hier wird der auf der Registerkarte Wireless ausgew�hlte und im Netzwerk verwendete Wireless-Modus Gemischt, Nur G oder Deaktiviert angezeigt.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC-Adresse</b>. Hierbei handelt es sich um die MAC-Adresse des Routers, wie sie in Ihrem lokalen Ethernet-Netzwerk angezeigt wird.";
hstatlan2.right2="<b>IP-Adresse</b>. Hierbei handelt es sich um die IP-Adresse des Routers, wie sie in Ihrem lokalen Ethernet-Netzwerk angezeigt wird.";
hstatlan2.right3="<b>Subnetzmaske</b>. Wenn der Router eine Subnetzmaske verwendet, wird diese hier angezeigt.";
hstatlan2.right4="<b>DHCP-Server</b>. Wenn Sie den Router als DHCP-Server verwenden, wird dies hier angezeigt.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statisch";
hstatrouter2.l2tp="L2TP-Passthrough";
hstatrouter2.hb="Telstra-Kabel";
hstatrouter2.connecting="Verbindung wird hergestellt";
hstatrouter2.disconnected="Nicht verbunden";
hstatrouter2.disconnect="Trennen";
hstatrouter2.right1="<b>Firmware-Version.  </b>Hierbei handelt es sich um die aktuelle Firmware-Version des Routers.";
hstatrouter2.right2="<b>Aktuelle Uhrzeit.  </b>Hier wird die Uhrzeit so angezeigt, wie Sie sie auf der Registerkarte 'Einrichtung' festgelegt haben.";
hstatrouter2.right3="<b>MAC-Adresse.  </b>Hierbei handelt es sich um die MAC-Adresse des Routers, vom Standpunkt des ISP aus gesehen.";
hstatrouter2.right4="<b>Router Name (Routername):  </b>Hierbei handelt es sich um den Namen f�r den Router, den Sie auf der Registerkarte 'Einrichtung' festgelegt haben.";
hstatrouter2.right5="<b>Konfigurationstyp.  </b>Hier werden die f�r eine Internetverbindung von Ihrem ISP ben�tigten Informationen angezeigt. Diese Informationen wurden auf der Registerkarte Einrichtung eingegeben. Hier k�nnen Sie die Verbindung <b>herstellen</b> bzw. <b>trennen</b>, indem Sie auf die Schaltfl�che Verbinden bzw. Trennen klicken.";
hstatrouter2.authfail=" Authentifizierung fehlgeschlagen";
hstatrouter2.noip="Kann keine IP-Adresse abrufen vom ";
hstatrouter2.negfail=" Verhandlung fehlgeschlagen";
hstatrouter2.lcpfail=" LCP-Verhandlung fehlgeschlagen";
hstatrouter2.tcpfail="TCP-Verbindung kann nicht hergestellt werden zum ";
hstatrouter2.noconn="Kann keine Verbindung herstellen zum ";
hstatrouter2.server=" Server";
hstatrouter2.pppoenoip="IP-Adresse kann nicht vom PPPoE-Server abgerufen werden.";
hstatrouter2.undetermined="Unbestimmt";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ: </b>Das Aktivieren dieser Funktion verbindet den Router mit dem Internet. Auf alle Ports kann aus dem Internet zugegriffen werden.";

var hforward2 = new Object();
hforward2.right1="<b>Port-Bereich-Weiterleitung: </b>Manche Anwendungen m�ssen u.�U. spezielle Ports �ffnen, um richtig zu funktionieren. Zu diesen Anwendungen geh�ren Server und bestimmte Online-Spiele. Wenn aus dem Internet eine Anfrage f�r einen bestimmten Port eingeht, leitet der Router die Daten an den von Ihnen festgelegten Computer weiter. Aufgrund von Sicherheitsrisiken sollten Sie die Port-Weiterleitung auf die verwendeten Ports beschr�nken und das Kontrollk�stchen <b>Aktivieren</b> deaktivieren, wenn Sie den Vorgang beendet haben.";

var hfilter2 = new Object();
hfilter2.delpolicy="Diese Richtlinie l�schen?";
hfilter2.right1="<b>Richtlinien f�r Internetzugriff: </b>Sie k�nnen bis zu 10 Zugriffsrichtlinien definieren. Zum L�schen einer Richtlinie klicken Sie auf <b>L�schen</b>, zum Anzeigen einer Zusammenfassung der Richtlinie auf <b>Zusammenfassung</b>.";
hfilter2.right2="<b>Status: </b>Zum Aktivieren oder Deaktivieren von Richtlinien.";
hfilter2.right3="<b>Richtlinienname: </b>Sie k�nnen der Richtlinie einen Namen zuweisen.";
hfilter2.right4="<b>Richtlinientyp: </b>W�hlen Sie zwischen Internetzugriff und Eingehender Datenverkehr aus.";
hfilter2.right5="<b>Tage: </b>W�hlen Sie den Wochentag aus, an dem die Richtlinie gelten soll.";
hfilter2.right6="<b>Zeiten: </b>Geben Sie die Tageszeit ein, zu der die Richtlinie gelten soll.";
hfilter2.right7="<b>Blockierte Dienste: </b>Sie k�nnen den Zugriff auf bestimmte Dienste blockieren. Klicken Sie auf <b>Dienste hinzuf�gen/bearbeiten</b>, um diese Einstellungen zu �ndern.";
hfilter2.right8="<b>Website nach URL-Adresse blockieren: </b>Sie k�nnen bestimmte Websites durch Eingabe der URL blockieren.";
hfilter2.right9="<b>Website nach Schl�sselwort blockieren: </b>Sie k�nnen bestimmte Websites nach Schl�sselw�rtern blockieren, die auf den Websites enthalten sind.";

var hportser2 = new Object();
hportser2.submit="Anwenden";

var hwlad2 = new Object();
hwlad2.authtyp="Authentifizierungstyp";
hwlad2.basrate="Grundrate";
hwlad2.mbps="Mbit/s";
hwlad2.def="Standard";
hwlad2.all="Alle";
hwlad2.defdef="(Standard: Standard)";
hwlad2.fburst="Rahmen-Burst";
hwlad2.milli="Millisekunden";
hwlad2.range="Empfangsbereich";
hwlad2.frathrh="Fragmentierungsschwelle";
hwlad2.apiso="AP-Isolierung";
hwlad2.off="Aus";
hwlad2.on="Ein";
hwlad2.right1="<b>Authentifizierungstyp: </b>Sie k�nnen zwischen der Option Auto oder Freigegebener Schl�ssel w�hlen. Der Authentifizierungstyp Freigegebener Schl�ssel ist sicherer, es m�ssen jedoch alle Ger�te in Ihrem Netzwerk den Authentifizierungstyp Freigegebener Schl�ssel unterst�tzen.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Wireless-Netzwerkmodus </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster ist im <b>gemischten</b> Modus und im <b>Nur G</b>-Modus automatisch aktiviert."); %> Wenn Sie Wireless-G-Clients ausschlie�en m�chten, w�hlen Sie den Modus <b>Nur B</b> aus. Wenn Sie den Wireless-Zugriff deaktivieren m�chten, w�hlen Sie <b>Deaktivieren</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA Vorl�ufiger gemeinsamer Schl�ssel";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="Nur WPA2 Vorl�ufiger gemeinsamer Schl�ssel";
hwlsec2.wpa2radius="Nur WPA2 RADIUS";
hwlsec2.wpa2pskmix="Gemischt WPA2 Vorl�ufiger gemeinsamer Schl�ssel";
hwlsec2.wpa2radiusmix="WPA2 RADIUS gemischt";
hwlsec2.wpa2personal="WPA2-Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA-Gemischt";
hwlsec2.enterprisemixed="WPA2/WPA-Enterprise-Gemischt";
hwlsec2.newwpa2personal="WPA2 Personal"
hwlsec2.pskpersonal="PSK-Personal";
hwlsec2.pskenterprise="PSK-Enterprise";
hwlsec2.psk2personal="PSK2-Personal";
hwlsec2.psk2enterprise="PSK2-Enterprise";
hwlsec2.right1="<b>Sicherheitsmodus: </b>Sie k�nnen aus Deaktivieren, WEP, WPA Vorl�ufiger gemeinsamer Schl�ssel, WPA RADIUS und RADIUS ausw�hlen. Alle Ger�te in Ihrem Netzwerk m�ssen denselben Sicherheitsmodus verwenden, um Daten austauschen zu k�nnen.";

var hwmac2 = new Object();
hwmac2.right1="<b>Kopieren der MAC-Adresse: </b>Bei einigen ISPs ist es erforderlich, dass Sie Ihre MAC-Adresse registrieren. Wenn Sie Ihre MAC-Adresse nicht erneut registrieren m�chten, kann der Router die bei Ihrem ISP registrierte MAC-Adresse kopieren.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS-Service: </b>Mit DDNS k�nnen Sie statt IP-Adressen Dom�nennamen verwenden, um auf Ihr Netzwerk zuzugreifen. Dieser Dienst verwaltet �nderungen der IP-Adresse und aktualisiert Ihre Dom�neninformationen dynamisch. Sie m�ssen sich f�r diesen Dienst �ber TZO.com oder DynDNS.org anmelden.";
hddns2.right2="Klicken Sie <b><a target=_blank href=http://Linksys.tzo.com>hier</a></b>, um sich f�r ein KOSTENLOSES <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO-KONTO ZUM KENNENLERNEN anzumelden.";
hddns2.right3="Klicken Sie <b><a target=_blank href=https://controlpanel.tzo.com>hier</a></b>, um Ihr <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO-Konto zu verwalten.";
hddns2.right4="Klicken Sie <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>hier</a></b>, um ein TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS-Abonnement zu erwerben.";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Support/Lernprogramme</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Betriebsmodus: </b>Wenn der Router als Host der Internetverbindung fungiert, w�hlen Sie den Modus <b>Gateway</b> aus. Wenn sich ein weiterer Router in Ihrem Netzwerk befindet, w�hlen Sie <b>Router-Modus</b> aus.";
hrouting2.right2="<b>Set-Nummer ausw�hlen: </b>Dies ist die eindeutige Routennummer, die Sie f�r bis zu 20 Routen einrichten k�nnen.";
hrouting2.right3="<b>Routenname: </b>Geben Sie den Namen ein, den Sie dieser Route zuweisen m�chten.";
hrouting2.right4="<b>IP-Adresse des Ziel-LANs: </b>Dies ist der entfernte Host, dem Sie eine statische Route zuweisen m�chten.";
hrouting2.right5="<b>Subnetzmaske: </b>Diese bestimmt den Host und den Netzwerkbereich.";

var hindex2 = new Object();
hindex2.telstra="Telstra-Kabel";
hindex2.dns3="Statischer DNS 3";
hindex2.hbs="Heart Beat-Server";
hindex2.l2tps="L2TP-Server";
hindex2.pptps="PPTP-Server";
hindex2.hdhcp="<b>Automatische Konfiguration � DHCP: </b>Diese Einstellung wird gew�hnlich von Kabelanbietern verwendet.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Diese Einstellung wird gew�hnlich von DSL-Anbietern verwendet.<br>";
hindex2.hpppoe2="<b>Benutzername: </b>Geben Sie den Benutzernamen ein, der Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.hpppoe3="<b>Passwort: </b>Geben Sie das Passwort ein, das Ihnen von Ihrem ISP zugeteilt wurde.<br>";

hindex2.hstatic1="<b>Statische IP-Adresse: </b>Diese Einstellung wird gew�hnlich von Business-Class-ISPs verwendet.<br>";
hindex2.hstatic2="<b>Internet-IP-Adresse: </b>Geben Sie die IP-Adresse ein, die Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.hstatic3="<b>Subnetzmaske: </b>Geben Sie Ihre Subnetzmaske ein.<br>";

hindex2.hpptp1="<b>PPTP: </b>Diese Einstellung wird gew�hnlich von DSL-Anbietern verwendet.<br>";
hindex2.hpptp2="<b>Internet-IP-Adresse: </b>Geben Sie die IP-Adresse ein, die Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.hpptp3="<b>Subnetzmaske: </b>Geben Sie Ihre Subnetzmaske ein.<br>";
hindex2.hpptp4="<b>Gateway: </b>Geben Sie die Gateway-Adresse Ihres ISPs ein.<br>";

hindex2.hl2tp1="<b>L2TP: </b>Diese Einstellung wird von einigen ISPs in Europa verwendet.<br>";
hindex2.hl2tp2="<b>Benutzername: </b>Geben Sie den Benutzernamen ein, der Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.hl2tp3="<b>Passwort: </b>Geben Sie das Passwort ein, das Ihnen von Ihrem ISP zugeteilt wurde.<br>";

hindex2.hhb1="<b>Telstra-Kabel: </b>Diese Einstellung wird gew�hnlich von DSL-Anbietern verwendet.<br>";
hindex2.hhb2="<b>Benutzername: </b>Geben Sie den Benutzernamen ein, der Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.hhb3="<b>Passwort: </b>Geben Sie das Passwort ein, das Ihnen von Ihrem ISP zugeteilt wurde.<br>";

hindex2.right1="<b>Hostname: </b>Geben Sie den Hostnamen ein, der Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.right2="<b>Dom�nenname: </b>Geben Sie den Dom�nennamen ein, der Ihnen von Ihrem ISP zugeteilt wurde.<br>";
hindex2.right3="<b>Lokale IP-Adresse: </b>Dies ist die Adresse des Routers.<br>";
hindex2.right4="<b>Subnetzmaske: </b>Dies ist die Subnetzmaske des Routers.<br><br><br>";
hindex2.right5="<b>DHCP-Server: </b>Hiermit verwaltet der Router Ihre IP-Adressen.<br>";
hindex2.right6="<b>Start-IP-Adresse: </b>Dies ist die Adresse, mit der Sie beginnen m�chten.<br>";
hindex2.right7="<b>Zeiteinstellung: </b>W�hlen Sie die Zeitzone aus, in der Sie sich befinden. Der Router kann auch automatisch an die Sommerzeit angepasst werden.";
hindex2.hdhcps1="<b>Maximale Anzahl der DHCP-Benutzer: </b>Sie k�nnen die Anzahl der Adressen, die der Router zuweist, einschr�nken.<br>";

var errmsg2 = new Object();
errmsg2.err0="Die IP-Adresse des HeartBeat-Servers ist ung�ltig.";
errmsg2.err1="Eintrag l�schen?";
errmsg2.err2="Geben Sie eine SSID ein.";
errmsg2.err3="Geben Sie einen freigegebenen Schl�ssel ein.";
errmsg2.err4=" Eingabe unzul�ssiger Zeichen bzw. Eingabe von mehr als 63�Zeichen.";
errmsg2.err5="Der Schl�ssel muss zwischen 8 und 63 ASCII-Zeichen bzw. 64 Hexadezimalziffern umfassen.";
errmsg2.err6="Sie m�ssen einen Schl�ssel eingeben.";
errmsg2.err7="Die Schl�ssell�nge ist ung�ltig.";
errmsg2.err8="Geben Sie eine Passphrase ein.";
errmsg2.err9="Die Anzahl der �berpr�fungen �bersteigt 40.";
errmsg2.err10="Es d�rfen keine Leerzeichen verwendet werden.";
errmsg2.err11="Klicken Sie nach Abschluss aller Vorg�nge auf die Schaltfl�che Anwenden, um die Einstellungen zu speichern.";
errmsg2.err12="Sie m�ssen einen Dienstnamen eingeben.";
errmsg2.err13="Der Dienstname ist bereits vorhanden.";
errmsg2.err14="Die LAN-IP-Adresse oder die Subnetzmaske ist ung�ltig.";

var trigger2 = new Object();
trigger2.ptrigger="Port-Bereich-Triggering";
trigger2.qos="QoS";
trigger2.trirange="Triggering-Bereich";
trigger2.forrange="Weiterleitungsbereich";
trigger2.trirange1="Triggering-Bereich";
trigger2.forrange1="Weiterleitungsbereich";
trigger2.sport="Start-Port";
trigger2.eport="End-Port";
trigger2.right1="Anwendung: Geben Sie den Namen der Trigger-Anwendung ein. <b>Triggering-Bereich: </b>Geben Sie f�r jede Anwendung den Port-Nummernbereich f�r das Triggering an. Die ben�tigten Port-Nummern finden Sie in der Dokumentation der Internetanwendung.<b>Start-Port</b> Geben Sie hier die Nummer des Start-Ports f�r den Triggering-Bereich ein.<b>End-Port</b> Geben Sie hier die Nummer des End-Ports f�r den Triggering-Bereich ein.   <b>Weiterleitungsbereich</b> Geben Sie f�r jede Anwendung den Port-Nummernbereich f�r die Weiterleitung an. Die ben�tigten Port-Nummern finden Sie in der Dokumentation der Internetanwendung.   <b>Start-Port</b> Geben Sie hier die Nummer des Start-Ports f�r den Weiterleitungsbereich ein.   <b>End-Port</b> Geben Sie hier die Nummer des End-Ports f�r den Weiterleitungsbereich ein.";

var bakres2 = new Object();
bakres2.conman="Konfigurationsverwaltung";
bakres2.bakconf="Konfigurationen sichern";
bakres2.resconf="Konfigurationen wiederherstellen";
bakres2.bakres="Sichern und Wiederherstellen";
bakres2.file2res="W�hlen Sie die Datei aus, die wiederhergestellt werden soll.";
bakres2.bakbutton="Konfigurationen sichern";
bakres2.resbutton="Konfigurationen wiederherstellen";
bakres2.right1="Sie k�nnen Ihre aktuelle Konfiguration sichern, um den Router gegebenenfalls auf die Werkseinstellungen zur�ckzusetzen.";
bakres2.right2="Klicken Sie zum Sichern der aktuellen Konfiguration auf die Schaltfl�che 'Konfigurationen sichern'.";
bakres2.right3="Klicken Sie auf die Schaltfl�che Durchsuchen, um nach der auf dem PC gespeicherten aktuellen Konfigurationsdatei zu suchen.";
bakres2.right4="Klicken Sie auf Wiederherstellen, um alle aktuellen Konfigurationen mit denen in der Konfigurationsdatei zu �berschreiben.";

var qos = new Object();
qos.uband="Upstream-Bandbreite";
qos.bandwidth="Bandbreite";
qos.dpriority="Ger�tepriorit�t";
qos.priority="Priorit�t";
qos.dname="Ger�tename";
qos.low="Niedrig";
qos.medium="Mittel";
qos.high="Hoch";
qos.highest="H�chste";
qos.eppriority="Ethernet-Port-Priorit�t";
qos.flowctrl="Flusskontrolle";
qos.appriority="Anwendungspriorit�t";
qos.specport="Spezieller Port";
qos.appname="Name der Anwendung";
qos.alert1="Port liegt au�erhalb des zul�ssigen Bereichs [0�-�65535]";
qos.alert2="Wert des Start-Ports ist h�her als Wert des End-Ports";
qos.confirm1="Das Festlegen einer hohen Priorit�t f�r mehrere Ger�te, den Ethernet-Port oder die Anwendung kann die QoS beeintr�chtigen.\nSind Sie sicher, dass Sie fortfahren m�chten?";

qos.optgame="Spieleanwendungen optimieren";
qos.wqos="Wired QoS";
qos.wlqos="WMM   ";
qos.wlqos2="Wireless QoS";
qos.edca_ap="EDCA AP-Parameter";
qos.edca_sta="EDCA STA-Parameter";
qos.wme="WMM-Unterst�tzung";
qos.noack="Keine Best�tigung";
qos.apsdsupp="APSD-Unterst�tzung";
qos.defdis="(Standard: Deaktiviert)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Erzwungen";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service)";
qos.intqccpri="Priorit�t f�r Internetzugriff";
qos.category="Kategorie";
qos.mediumrec="Mittel (Empfohlen)";
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
qos.addapp="Neue Anwendung hinzuf�gen";
qos.onlinegame="Online-Spiele";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo�II";
qos.everquest="Everquest";
qos.halflife="Half-Life";
qos.quake2="Quake�2";
qos.quake3="Quake�3";
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
qos.addgame="Neues Spiel hinzuf�gen";
qos.entername="Namen eingeben";
qos.etherport="Ethernet-Port";
qos.voicedevice="Sprachger�t";
qos.voicemac="MAC-Adresse meines Sprachger�ts";
qos.recommend="Empfehlung";
qos.game="Spiel";
qos.mymac="MAC-Adresse meines aktuellen PCs";
qos.right1="Zwei QoS-Funktionen (Quality of Service) stehen zur Verf�gung: Wired�QoS zur Steuerung von Ger�ten, die mit einem Ethernet-Kabel an den Router angeschlossen werden, und Wireless�QoS f�r die Steuerung von Ger�ten, die drahtlos an den Router angeschlossen werden.";
qos.right2="<b>Ger�tepriorit�t:</b> Sie k�nnen die Priorit�t f�r den gesamten Datenverkehr von einem Ger�t auf Ihrem Netzwerk festlegen, indem Sie f�r das Ger�t einen Ger�tenamen bestimmen, die Priorit�t festlegen und seine MAC-Adresse eingeben.";
qos.right3="<b>Ethernet-Port-Priorit�t:</b> Sie k�nnen die Datenrate bestimmen, indem Sie das Ger�t an den entsprechenden physischen LAN-Port anschlie�en. Sie k�nnen dem Datenverkehr von Ger�ten, die an die LAN-Ports 1�bis�4 angeschlossen sind, hohe oder niedrige Priorit�t zuweisen.";
qos.right4="<b>Anwendungspriorit�t:</b> Sie k�nnen die Datenrate bestimmen, indem Sie den jeweiligen Anwendungen bestimmte Bandbreiten zuweisen. Aktivieren Sie die Option <b>Spieleanwendungen optimieren</b>, um den �blichen Anwendungs-Ports f�r Spiele automatisch eine h�here Priorit�t zuzuweisen. Sie k�nnen bis zu acht Anwendungen anpassen, indem Sie die jeweilige Port-Nummer eingeben.";
qos.right5="Wireless QoS wird auch als <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> von der Wi-Fi Alliance<sup>TM</sup> bezeichnet. W�hlen Sie zur Verwendung von WMM Aktivieren aus, wenn Sie andere Wireless-Ger�te verwenden, die ebenfalls WMM-zertifiziert sind.";
qos.right6="<b>Keine Best�tigung:</b> Aktivieren Sie diese Option, wenn Sie die Funktion zur Best�tigung abschalten m�chten. Wenn diese Option aktiviert ist, sendet der Router bei einem Fehler die Daten nicht erneut.";
qos.exist = "Diese Einstellung ist bereits vorhanden.";

var vpn2 = new Object();
vpn2.right1="Sie k�nnen PPTP-Passthrough, L2TP-Passthrough oder IPSec-Passthrough aktivieren, damit Ihre Netzwerkger�te �ber VPN Daten austauschen k�nnen.";

var fail = new Object();
fail.msg="Die von Ihnen eingegebenen Werte sind ung�ltig. Geben Sie sie erneut ein.";

var pactrl = new Object();
pactrl.pactrl ="Kinderschutzfunktionen";
pactrl.accsign ="Konto anmelden";
pactrl.center1 ="Mithilfe der Parental Control-Schutzfunktionen von Linksys kann<br>Ihre Familie sicher im Internet surfen.";
pactrl.center2 ="<li>Problemlose Einrichtung</li><br><li>Sch�tzen Sie jeden Computer, den Sie zu Hause verwenden, mithilfe des Linksys Routers.</li><br><li>Mit Berichten k�nnen Sie Internet-, E-Mail- und IM-Verwendung �berwachen.</li>";
pactrl.center3 ="** Durch die Anmeldung bei diesem Dienst werden die in den Router integrierten Sicherheitsrichtlinien f�r den Internetzugriff deaktiviert.";
pactrl.manageacc ="Konto verwalten";
pactrl.center4 ="Konto f�r Kinderschutzfunktionen verwalten";
pactrl.signparental ="Anmeldung beim Parental Control-Dienst";
pactrl.moreinfo ="Weitere Informationen";
pactrl.isprovision ="Ger�t ist bereitgestellt";
pactrl.notprovision ="Ger�t ist nicht bereitgestellt";
pactrl.right1 ="Im Fenster Parental Control (Parental Control-Dienst) k�nnen Sie Ihr Linksys Parental Control-Konto anmelden und verwalten. Mit dem Parental Control-Dienst von Linksys erhalten Sie leistungsstarke Werkzeuge zur Steuerung der Verf�gbarkeit von Internetdiensten, Internetzugang und Internetfunktionen, die f�r jedes Mitglied in Ihrem Haushalt individuell einstellbar sind.";

var satusroute = new Object();
satusroute.localtime ="Nicht verf�gbar";

var succ = new Object();
succ.autoreturn ="Sie werden in einigen Sekunden zur vorherigen Seite zur�ckgeleitet.";
succ.return_desc = "Sie werden in einigen Sekunden zur Seite 'Aktualisierung speichern' geleitet.";
succ.interrupt_desc = "Bitte die Aktualisierung unter keinen Umst�nden unterbrechen. Bitte warten�...";
succ.return_index = "Sie werden in K�rze zur Seite 'Grundlegende Einrichtung' weitergeleitet. ";

var gn = new Object();
gn.gnip="Gast-Netzwerk-IP";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Gast-Netzwerkname (SSID)";
gn.err1="Die Gast-Netzwerk-IP-Adresse darf sich nicht im gleichen Subnetz wie die LAN-Adresse befinden.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Kontendauer";
gn.minutes="Stunden";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
gn.title=" Gastzugriff";
gn.tips0="Falsches Passwort. Bitte erneut eingeben.";
gn.tips1="Der Zugriff auf den Hotspot ist erst nach Eingabe des Passworts m�glich.";
gn.login=" Anmeldung";
gn.err3="Wireless 5G-SSID identisch mit Gast-SSID. Bitte �ndern.";
gn.err4="Wireless 2.4G-SSID identisch mit Gast-SSID. Bitte �ndern.";
gn.err5="Die LAN-IP-Adresse darf sich nicht im gleichen Subnetz wie die Gast-Netzwerk-IP-Adresse befinden.";
gn.err6="Das Netzwerk 192.168.33.0/24 (IP-Adressen 192.168.33.0 � 255) ist f�r das Wireless-Gastnetzwerk reserviert. Bitte verwenden Sie eine andere Netzwerkadresse.";
gn.tips6=" Geben Sie das Gast-Passwort ein, um eine Verbindung mit dem Internet herzustellen. Wenn Ihnen das Passwort nicht bekannt ist, erfragen Sie es vom Eigent�mer. Sie finden das Gast-Passwort mithilfe von Linksys Connect.";
gn.dv="Desktop-Ansicht";
gn.mv="Mobile Ansicht";
gn.context="Geben Sie das Gast-Passwort ein, um eine Verbindung mit dem Internet herzustellen. Wenn Ihnen das Passwort nicht bekannt ist, erfragen Sie es vom Besitzer. Sie finden das Gast-Passwort mithilfe von Linksys Connect.";
gn.nat="Gastzugriff nicht m�glich, wenn NAT deaktiviert.  M�chten Sie mit dem Speichern Ihrer �nderungen fortfahren?";






