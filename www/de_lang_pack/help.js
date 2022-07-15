//Basic Setup
var hsetup = new Object();
hsetup.phase1="Das Fenster <i>Einrichtung</i>  \
		ist das erste Fenster, das angezeigt wird, wenn Sie auf den Router zugreifen. Bei den meisten Benutzern  \
		genügen die Einstellungen in diesem Fenster, um den Router zu konfigurieren und ordnungsgemäß \
		in Betrieb zu nehmen. Bei einigen Internetdienstanbietern (ISPs) ist es erforderlich,  \
		dass Sie bestimmte Informationen wie Benutzernamen, Passwort, IP-Adresse,  \
		Standard-Gateway-Adresse oder DNS-IP-Adresse eingeben. Diese Informationen erhalten Sie  \
		bei Bedarf von Ihrem ISP.";
hsetup.phase2="Hinweis: Nachdem \
		Sie diese Einstellungen konfiguriert haben, sollten Sie ein neues Passwort für den Router  \
		im Fenster <i>Sicherheit</i> festlegen. Dadurch wird die Sicherheit erhöht und der  \
		Router vor unbefugtem Zugriff geschützt. Alle Benutzer, die versuchen, auf das webbasierte Dienstprogramm des Routers \
		oder den Setup-Assistenten zuzugreifen, werden aufgefordert, das Router-Passwort einzugeben.";
hsetup.phase3="Wählen Sie die \
		Zeitzone für Ihren Standort aus. Wenn an Ihrem Standort die Sommerzeit gilt, \
    		aktivieren Sie das Kontrollkästchen <i>Uhr automatisch an \
    		Zeitumstellung anpassen</i>.";
hsetup.phase4="MTU steht für  \
    		Maximum Transmission Unit (Maximale Übertragungseinheit). Hiermit wird die größte zulässige Paketgröße \
    		für Internetübertragungen angegeben. Behalten Sie die Standardeinstellung <b>Auto</b> bei, um den \
    		Router die beste MTU für Ihre Internetverbindung auswählen zu lassen. Um die \
    		MTU-Größe festzulegen, wählen Sie <b>Manuell</b> aus, und geben Sie den gewünschten Wert ein (der Standardwert ist <b> \
    		1400</b>).&nbsp; Sie sollten einen Wert zwischen 1200 und 1500 einstellen.";
hsetup.phase5="Dieser Eintrag ist bei manchen ISPs erforderlich und wird von ihnen zur Verfügung gestellt.";
hsetup.phase6="Der Router unterstützt vier Verbindungstypen:";
hsetup.phase7="Automatische Konfiguration – DHCP";
hsetup.phase8="(Point to Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Diese Typen können aus dem Dropdown-Menü neben der Option Internetverbindung ausgewählt werden. \
    		Die erforderlichen Informationen und verfügbaren Funktionen unterscheiden sich je \
    		nach ausgewähltem Verbindungstyp. Einige dieser Informationen werden \
    		im Folgenden beschrieben:";		
hsetup.phase11="Internet-IP-Adresse und Subnetzmaske";
hsetup.phase12="Hierbei handelt es sich um die IP-Adresse  \
    		und Subnetzmaske des Routers wie sie externen Internetbenutzern (einschließlich Ihres \
    		ISP (Internet-Dienstanbieter) angezeigt werden. Wenn für Ihre Internetverbindung eine statische IP-Adresse benötigt wird, \
    		erhalten Sie von Ihrem ISP eine statische IP-Adresse.";
hsetup.phase13="Sie erhalten die Gateway-IP-Adresse von Ihrem ISP."
hsetup.phase14="(Domain Name Server)";
hsetup.phase15="Sie erhalten von Ihrem ISP mindestens eine DNS-IP-Adresse.";
hsetup.phase16="Benutzername und Passwort";
hsetup.phase17="Geben Sie <b>Benutzernamen</b> und \
				<b>Passwort</b> ein, den/das Sie verwenden, wenn Sie sich bei Ihrem ISP über eine PPPoE oder eine PPTP-Verbindung \
    		überprüfen soll.";
hsetup.phase18="Bei Bedarf verbinden";
hsetup.phase19="Sie können den Router so konfigurieren, \
    		dass die Internetverbindung nach einem bestimmten Leerlauf-Zeitraum \
    		(maximale Leerlaufzeit) getrennt wird. Wenn Ihre Internetverbindung wegen Leerlaufs getrennt \
    		wurde, kann der Router mit Hilfe der Option Bei Bedarf verbinden automatisch \
   		die Verbindung erneut herstellen, sobald Sie versuchen, auf das Internet zuzugreifen \
   		. Klicken Sie auf die entsprechende Optionsschaltfläche, um die Option Connect on Demand (Bei Bedarf verbinden) zu aktivieren. Wenn \
    		Ihre Internetverbindung ständig aktiv bleiben soll, geben Sie <b>0</b> \
    		in das Feld <i>Maximale Leerlaufzeit</i> ein. Geben Sie andernfalls die Anzahl \
    		der Minuten ein, nach deren Ablauf Ihre Internetverbindung beendet wird.";
hsetup.phase20="Verbindung aufrecht halten ";
hsetup.phase21="Mit dieser Option bleiben Sie für einen \
    		unbegrenzten Zeitraum mit dem Internet verbunden. Aktivieren Sie zur Verwendung \
    		dieser Option die Optionsschaltfläche neben <i>Verbindung aufrecht halten</i>. Die standardmäßige \
    		Wahlwiederholung erfolgt nach 30 Sekunden (d. h. der Router überprüft die \
    		Internetverbindung alle 30 Sekunden).";
hsetup.phase22="Hinweis: Einige \
    		Kabelanbieter benötigen eine spezielle MAC-Adresse für die Verbindung mit dem \
    		Internet. Um weitere Informationen zu diesem Thema zu erhalten, klicken Sie auf die Registerkarte <b>System</b>. Klicken Sie anschließend auf \
    		die Schaltfläche <b>Hilfe</b>, und informieren Sie sich über die Funktion MAC kopieren.";
hsetup.phase23="LAN";
hsetup.phase24="IP-Adresse/Subnetzmaske";
hsetup.phase25="Hierbei handelt \
    		es sich um die Router-IP-Adresse und die Subnetzmaske, wie sie im internen LAN angezeigt werden. Der \
    		Standardwert lautet 192.168.1.1 für die IP-Adresse und 255.255.255.0 für die Subnetzmaske \
    		.";
hsetup.phase26="DHCP";
hsetup.phase27="Behalten Sie die \
    		Standardeinstellung <b>Aktivieren</b> bei, um die DHCP-Serveroption des Routers zu aktivieren. Wenn \
    		in Ihrem Netzwerk bereits ein DHCP-Server vorhanden ist oder kein DHCP-Server eingerichtet werden soll, \
    		wählen Sie <b>Deaktivieren</b> aus.";
hsetup.phase28="Geben Sie einen \
    		numerischen Wert ein, mit dem der DHCP-Server beim Zuweisen von IP-Adressen beginnen soll. \
    		Beginnen Sie nicht mit 192.168.1.1 (IP-Adresse des Routers).";
hsetup.phase29="Maximale Anzahl der DHCP-Benutzer";
hsetup.phase30="Geben Sie die \
    		maximale Anzahl der PCs ein, denen der DHCP-Server IP-Adressen \
    		zuweist. Die obere Grenze liegt bei 253, sofern Sie 192.168.1.2 als Start-IP-Adresse gewählt haben \
    		IP-Adresse zu ersetzen.";
hsetup.phase31="Bei der Client-\
    		Leasedauer handelt es sich um den Zeitraum, über den ein Netzwerkbenutzer \
    		mithilfe seiner aktuellen dynamischen IP-Adresse eine Verbindung mit dem Router herstellen darf. Geben Sie den \
    		Zeitraum, über den dem Benutzer diese dynamische IP-Adresse gewährt wird, in Minuten ein.";
hsetup.phase32="Statisches DNS 1-3 ";
hsetup.phase33="Mit dem \
    		DNS (Domain Name System) übersetzt das Internet Domänen- oder Website-Namen \
    		in Internetadressen oder URLs. Sie erhalten von Ihrem ISP mindestens \
    		eine DNS-Server-IP-Adresse Wenn Sie eine andere IP-Adresse verwenden möchten, geben Sie diese \
    		in eines der Felder ein. Hier können Sie bis zu drei IP-Adressen für den DNS-Server  \
    		eingeben. Der Router verwendet diese für einen schnelleren Zugriff auf arbeitende DNS- \
    		Server.";
hsetup.phase34="Mit dem WINS (Windows Internet Naming Service) wird der Datenaustausch jedes PCs mit \
    		dem Internet verwaltet. Wenn Sie einen WINS-Server verwenden, geben Sie hier die IP-Adresse dieses Servers ein. \
    		Andernfalls lassen Sie dieses Feld leer.";
hsetup.phase35="Überprüfen Sie alle \
		Werte, und klicken Sie auf <b>Einstellungen speichern</b>, um die Einstellungen zu speichern. Klicken Sie auf die Schaltfläche <b>Änderungen \
		verwerfen</b>, um \
		ungespeicherte Änderungen zu verwerfen. Sie können die Einstellungen testen, indem Sie eine Verbindung zum Internet herstellenen  \
		Internet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Der Router verfügt über die Funktion DDNS (Dynamic Domain Name System). Mit DDNS können Sie einer dynamischen \
		Internet-IP-Adresse einen festen Host- oder Domänennamen zuweisen. Dies kann sich für das Hosting \
		Ihrer eigenen Website, Ihres FTP-Servers oder anderer Server hinter dem Router als nützlich erweisen. Bevor \
		Sie diese Funktion verwenden können, müssen Sie sich unter <i>www.dyndns.org</i>, \
		einem DDNS-Dienstanbieter, für diesen DDNS -Dienst anmelden.";
helpddns.phase2="DDNS-Dienst";
helpddns.phase3="Um den DDNS-Dienst zu deaktivieren, behalten Sie die Standardeinstellung <b>Deaktivieren</b> bei. Um den DDNS-Dienst \
		zu aktivieren, gehen Sie wie folgt vor:";
helpddns.phase4="Melden Sie sich für den DDNS-Dienst unter <i>www.dyndns.org</i> an, und notieren Sie sich \
		Benutzernamen,<i> </i>Passwort und<i> </i>Hostnamen.";
helpddns.phase5="Wählen Sie im Fenster <i>DDNS</i> die Option <b>Aktivieren</b>";;
helpddns.phase6="Füllen Sie die Felder <i>Benutzername</i>, <i>Passwort</i> und <i>Hostname</i> aus.";
helpddns.phase7="Klicken Sie auf die Schaltfläche <b>Einstellungen speichern</b>, um Ihre Änderungen zu speichern. Klicken Sie auf die Schaltfläche <b>Änderungen verwerfen</b>, um \
		ungespeicherte Änderungen zu verwerfen.";
helpddns.phase8="Hier ist die aktuelle IP-Adresse des Routers aufgeführt.";
helpddns.phase9="Hier wird der Status der Verbindung zum DDNS-Dienst aufgeführt.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC kopieren";
helpmac.phase2="Die MAC-Adresse des Routers ist ein 12-stelliger Code, der einem bestimmten Hardware-Objekt zu \
    		Identifikationszwecken zugewiesen wird. Bei einigen ISPs ist die Registrierung der MAC-\
    		Adresse der Netzwerkkarte/des Netzwerkadapters erforderlich, die/der während der Installation an Ihr Kabel- bzw. \
    		DSL-Modem angeschlossen war. Wenn die Registrierung der MAC-Adresse \
    		bei Ihrem ISP erforderlich ist, befolgen Sie die \
    		Anweisungen für Ihr Betriebssystem, um die MAC-Adresse Ihres Adapters herauszufinden.";
helpmac.phase3="Für Benutzer von Windows 98 und Windows ME:";
helpmac.phase4="1.  Klicken Sie auf die Schaltfläche <b>Start</b>, und wählen Sie die Option <b>Ausführen</b> aus.";
helpmac.phase5="2.  Geben Sie <b>winipcfg</b> in das entsprechende Feld ein, und klicken Sie die Schaltfläche <b>OK</b>.";
helpmac.phase6="3.  Wählen Sie den verwendeten Ethernet-Adapter aus.";
helpmac.phase7="4.  Klicken Sie auf <b>Weitere Informationen</b>.";
helpmac.phase8="5.  Notieren Sie die MAC-Adresse Ihres Adapters.";
helpmac.phase9="1.  Klicken Sie auf die Schaltfläche <b>Start</b>, und wählen Sie die Option <b>Ausführen</b> aus.";
helpmac.phase10="2.  Geben Sie <b>cmd</b> in das entsprechende Feld ein, und klicken Sie die Schaltfläche <b>OK</b>.";
helpmac.phase11="3.  Geben Sie in die Eingabeaufforderung <b>ipconfig /all</b> ein, und rufen Sie die physische Adresse Ihres Adapters auf.";
helpmac.phase12="4.  Notieren Sie die MAC-Adresse Ihres Adapters.";
helpmac.phase13="Befolgen Sie die nachstehenden Anweisungen, um die MAC-Adresse Ihres Netzwerk-Adapters auf den Router zu kopieren, \
    		ohne Ihren ISP wegen einer Änderung Ihrer registrierten MAC-Adresse anrufen zu müssen.";
helpmac.phase14="Für Benutzer von Windows 2000 und XP:";
helpmac.phase15="1.  Wählen Sie <b>Aktivieren</b> aus.";
helpmac.phase16="2.  Geben Sie in das Feld <i>MAC-Adresse</i> die MAC-Adresse Ihres Adapters ein.";
helpmac.phase17="3.  Klicken Sie auf die Schaltfläche <b>Einstellungen speichern</b>.";
helpmac.phase18="Um die Option MAC-Adresse kopieren zu deaktivieren, behalten Sie die Standardeinstellung <b>Deaktivieren</b> bei.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="Im Fenster <i>Routing</i> können Sie den Routing-Modus und Router-Einstellungen festlegen. \
		 Der Gateway-Modus wird für die meisten Benutzer empfohlen.";
hrouting.phase3="Wählen Sie den korrekten Arbeitsmodus. Behalten Sie die Standardeinstellung <b> \
    		 Gateway</b> bei, wenn der Router als Host der Internetverbindung Ihres Netzwerks fungiert (der Gateway-Modus wird für die meisten Benutzer empfohlen). Wählen Sie <b> \
    		 Router</b>, wenn sich der Router in einem Netzwerk mit weiteren Routern befindet.";
hrouting.phase4="Dynamisches Routing (RIP)";
hrouting.phase5="Hinweis: Diese Funktion ist im Gateway-Modus nicht verfügbar.";
hrouting.phase6="Mit der Funktion Dynamisches Routing kann sich der Router automatisch an Änderungen in der physischen Anordnung \
    		 des Netzwerks anpassen und Routing-Tabellen mit weiteren Routern austauschen. Der \
    		 Router legt die Route der Netzwerkpakete basierend auf der geringsten Anzahl an \
    		 Hops (Sprüngen) zwischen Quelle und Ziel fest. ";
hrouting.phase7="Um die Funktion Dynamisches Routing für WAN zu aktivieren, wählen Sie <b>WAN</b>. \
    		 Um diese Funktion für LAN und Wireless zu aktivieren, wählen Sie <b>LAN & Wireless</b>. \
    		 Um die Funktion sowohl für WAN als auch für LAN zu aktivieren, wählen Sie <b> \
    		 Beide</b>. Um die Funktion Dynamisches Routing für jegliche Datenübertragung abzuschalten, behalten Sie die \
    		 Standardeinstellung <b>Deaktivieren</b> bei. ";
hrouting.phase8="Statisches Routing,&nbsp; Ziel-IP-Adresse, Subnetzmaske, Gateway und Schnittstelle";
hrouting.phase9="Um eine statische Route zwischen dem Router und einem anderen Netzwerk einzurichten, \
    		 wählen Sie aus der Dropdown-Liste <i>Statisches Routing</i> eine Zahl aus. (Eine statische \
    		 Route ist ein vordefinierter Pfad, über den Netzwerkinformationen an einen bestimmten \
    		 Host oder ein bestimmtes Netzwerk übertragen werden.)";
hrouting.phase10="Geben Sie die folgenden Daten ein:";
hrouting.phase11="Ziel-IP-Adresse</b> - \
		  Bei der Ziel-IP-Adresse handelt es sich um die Adresse des Netzwerks bzw. Hosts, dem Sie eine statische Route zuweisen möchten.";
hrouting.phase12="Subnetzmaske</b> - \
		  Die Subnetzmaske bestimmt, welcher Teil der IP-Adresse den Netzwerkbereich und welcher Teil \
    		  den Hostbereich darstellt. ";
hrouting.phase13="Gateway </b>- \
		  Hierbei handelt es sich um die IP-Adresse des Gateway-Geräts, das eine Verbindung zwischen dem Router und dem Netzwerk bzw. Host ermöglicht.";
hrouting.phase14="Je nachdem, wo sich die Ziel-IP-Adresse befindet, wählen Sie die Option \
    		      		  <b>LAN Wireless</b> oder <b>WAN</b> im Dropdown-Menü <i>Schnittstelle</i> aus.";
hrouting.phase15="Um Ihre Änderungen zu speichern, klicken Sie auf die Schaltfläche <b>Anwenden</b>. Um Ihre nicht gespeicherten Änderungen zu verwerfen, klicken Sie auf die Schaltfläche <b> \
    		  Abbrechen</b>.";
hrouting.phase16="Wiederholen Sie die Schritte 1 bis 4, um weitere statische Routen einzurichten.";
hrouting.phase17="Diesen Eintrag löschen";
hrouting.phase18="So löschen Sie einen Eintrag für eine statische Route:";
hrouting.phase19="Wählen Sie in der Dropdown-Liste <i>Statisches Routing</i> die Eintragsnummer der statischen Route aus.";
hrouting.phase20="Klicken Sie auf die Schaltfläche <b>Diesen Eintrag löschen</b>.";
hrouting.phase21="Um das Löschen zu bestätigen, klicken Sie auf die Schaltfläche <b>Anwenden</b>. Um das Löschen abzubrechen, klicken Sie auf die Schaltfläche <b> \
    		  Abbrechen</b>. ";
hrouting.phase22="Routing-Tabelle anzeigen";
hrouting.phase23="Klicken Sie auf die Schaltfläche \
    		      		  <b>Routing-Tabelle anzeigen</b>, um alle gültigen Routeneinträge anzuzeigen. Für jeden Eintrag werden die Ziel-IP-Adresse, die Subnetzmaske, \
    		  das Gateway und die Schnittstelle angezeigt. Klicken Sie auf die Schaltfläche <b>Aktualisieren</b>, um die angezeigten Daten zu aktualisieren. Klicken Sie auf die Schaltfläche <b> \
    		  Schließen</b>, um zum Fenster <i>Routing</i> zurückzukehren.";
hrouting.phase24="Ziel-IP-Adresse</b> - \
		  Bei der Ziel-IP-Adresse handelt es sich um die Adresse des Netzwerks bzw. Hosts, dem die statische Route zugewiesen ist. ";
hrouting.phase25="Subnetzmaske</b> - \
		  Die Subnetzmaske bestimmt, welcher Teil der IP-Adresse den Netzwerkbereich und welcher Teil den Hostbereich darstellt.";
hrouting.phase26="Gateway</b> - Hierbei handelt es sich um die IP-Adresse des Gateway-Geräts, das eine Verbindung zwischen dem Router und dem Netzwerk bzw. Host ermöglicht.";
hrouting.phase27="Schnittstelle</b> - Diese Schnittstelle gibt an, ob sich die Ziel-IP-Adresse im \
    		      		  <b>LAN Wireless</b> (interne Wired- und Wireless-Netzwerke), im <b>WAN</b> (Internet) oder <b> \
    		  Loopback</b> (Dummy-Netzwerk, in dem ein PC als Netzwerk fungiert, da dies für bestimmte Softwareprogramme erforderlich ist.) ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="WAN-Anfragen blockieren";
hfirewall.phase2="Wenn Sie die Funktion WAN-Anfragen blockieren aktivieren, können Sie Ihr Netzwerk vor \
    		 Pingangriffen oder dem Erkennen durch andere Internetbenutzer schützen. Durch die Funktion WAN-Anfragen blockieren \
    		 wird zudem die Sicherheit Ihres Netzwerks erhöht, da Ihre Netzwerk-Ports verborgen bleiben. \
    		 Durch die beiden Komponenten der Funktion WAN-Anfragen blockieren ist es schwieriger, \
    		 von außen in Ihr Netzwerk einzudringen. Diese Funktion ist standardmäßig aktiviert \
    		 . Wählen Sie <b>Deaktivieren</b> aus, um diese Funktion zu deaktivieren.";
hfirewall.right="Aktivieren oder deaktivieren Sie die SPI-Firewall.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN-Passthrough";
helpvpn.phase2="VPN (Virtual Private Networking) wird gewöhnlich bei Büronetzwerken verwendet. Für \
    		VPN-Tunnel unterstützt der Router IPSec-Passthrough und PPTP-Passthrough.";
helpvpn.phase3="<b>IPSec</b>: IPSec (Internet Protocol Security) ist ein<b> </b>Protokollsatz, der zur Implementierung \
      		eines sicheren Paketaustauschs auf der IP-Ebene verwendet wird. Um IPSec-Tunnel durch \
      		den Router zuzulassen, ist IPSec-Passthrough standardmäßig aktiviert. Um \
      		IPSec-Passthrough zu deaktivieren, heben Sie die Auswahl für das Kontrollkästchen neben <i>IPSec</i> auf.";
helpvpn.phase4="<b>PPTP</b>: PPTP-Passthrough (Point-to-Point Tunneling Protocol Passthrough) ist eine Methode zum Aktivieren von VPN-\
      		Sitzungen auf einem Windows NT 4.0- oder Windows 2000-Server. Um PPTP-Tunnel durch \
      		den Router zuzulassen, ist PPTP-Passthrough standardmäßig aktiviert. Um \
      		PPTP-Passthrough zu deaktivieren, heben Sie die Auswahl für das Kontrollkästchen neben <i>PPTP</i> auf.";

helpvpn.right="Sie können PPTP-Passthrough, L2TP-Passthrough oder IPSec-Passthrough aktivieren, \
		damit Ihre Netzwerkgeräte über VPN Daten austauschen können.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filter";
hfilter.phase2="Im Fenster <i>Filter</i> lassen sich bestimmte Arten der Internetverwendung blockieren bzw. zulassen \
		. Sie können für bestimmte PCs Sicherheitsrichtlinien für den Internetzugriff und \
		Filter mithilfe von Netzwerk-Port-Nummern einrichten.";
hfilter.phase3="Mit dieser Funktion können Sie bis zu zehn verschiedene Richtlinien für den Internetzugriff \
    		für bestimmte PCs konfigurieren, die an ihrer IP- oder MAC-Adresse zu erkennen sind. Für \
    		jede Richtlinie legen Sie entsprechende PCs und bestimmte Tage und Zeiten fest.";
hfilter.phase4="Befolgen Sie die nachstehenden Anweisungen, um eine Richtlinie zu erstellen oder zu bearbeiten:";
hfilter.phase5="Wählen Sie aus dem Dropdown-Menü die Richtliniennummer \(1 - 10) aus.";
hfilter.phase6="Geben Sie in das Feld <i>Profilname eingeben</i> einen Namen ein.";
hfilter.phase7="Klicken Sie auf die Schaltfläche <b>PC-Liste bearbeiten</b>.";
hfilter.phase8="Klicken Sie auf die Schaltfläche <b>Anwenden</b>, um Ihre Änderungen zu speichern. Klicken Sie auf die Schaltfläche <b>Abbrechen</b>, um \
    		ungespeicherte Änderungen zu verwerfen. Klicken Sie auf <b>Schließen</b>, um zum Fenster \
    		    		<i>Filter</i> zurückzukehren.";
hfilter.phase9="Wenn Sie den aufgeführten PCs den Internetzugriff an den festgelegten Tagen und zu den angegebenen \
    		Zeiten verweigern möchten, behalten Sie die Standardeinstellung <b>Internetzugriff für aufgeführte \
    		PCs deaktivieren</b> bei. Wenn Sie den aufgeführten PCs den Internetzugriff an den \
    		festgelegten Tagen und zu den angegebenen Zeiten ermöglichen möchten, klicken Sie auf die Optionsschaltfläche neben <i>\
    		Internetzugriff für aufgeführte PCs aktivieren</i>.";
hfilter.phase10="Geben Sie im Fenster <i>PC-Liste</i> die PCs anhand ihrer IP- oder MAC-Adresse an. Geben Sie die  \
    		entsprechenden IP-Adressen in die <i>IP</i>-Felder ein. Wenn Sie einen Bereich von \
    		IP-Adressen filtern müssen, füllen Sie die entsprechenden <i>IP-Bereich</i>-Felder aus. \
    		Geben Sie die jeweiligen MAC-Adressen in die <i>MAC</i>-Felder ein.";
hfilter.phase11="Legen Sie die Zeiten fest, zu denen der Zugriff gefiltert werden soll. Wählen Sie <b>24 Stunden</b> aus,<b> </b>oder aktivieren Sie das Kontrollkästchen neben <i>Von</i>, \
    		und legen Sie in den Dropdown-Feldern einen bestimmten Zeitraum fest. ";
hfilter.phase12="Legen Sie die Tage fest, an denen der Zugriff gefiltert werden soll. Wählen Sie <b>Jeden Tag</b> oder die jeweiligen Wochentage aus. ";
hfilter.phase13="Klicken Sie auf die Schaltfläche <b>Zu Richtlinie hinzufügen</b>, um Ihre Änderungen zu speichern und zu übernehmen.";
hfilter.phase14="Um zusätzliche Richtlinien zu erstellen oder zu bearbeiten, wiederholen Sie die Schritte 1 bis 9.";
hfilter.phase15="Um eine Richtlinie für den Internetzugriff zu löschen, wählen Sie die Richtliniennummer aus, und klicken Sie auf die Schaltfläche <b>Löschen</b>.";
hfilter.phase16="Klicken Sie zur Anzeige einer Zusammenfassung aller Richtlinien auf die Schaltfläche <b>Zusammenfassung</b>. Im Fenster <i> \
    		Internetrichtlinien - Zusammenfassung</i> wird jede Richtlinie mit Nummer, \
    		Name, Tagen und Uhrzeit angezeigt. Um eine Richtlinie zu löschen, aktivieren Sie das entsprechende Kontrollkästchen, \
    		und klicken Sie anschließend auf die Schaltfläche <b>Löschen</b>. Klicken Sie auf <b>Schließen</b>, um zum Fenster \
    		<i>Filter</i> zurückzukehren.";
hfilter.phase17="Gefilterter Internet-Port-Bereich";
hfilter.phase18="Um PCs nach Netzwerk-Port-Nummern zu filtern, wählen Sie je nach zu filternden Protokollen <b>Beide</b>, <b>TCP</b> oder <b>UDP</b> aus \
    		. Geben<b> </b>Sie anschließen die zu filternden  \
    		Port-Nummern in die Felder für die Port-Nummern ein. Mit dem Router verbundene  \
    		PCs erhalten keinen Zugriff mehr auf alle hier aufgeführten Port-Nummern. Um  \
    		einen Filter zu deaktivieren, wählen Sie <b>Deaktivieren</b> aus.";

//share of help string
var hshare = new Object();
hshare.phase1="Überprüfen Sie alle Werte, und klicken Sie auf <b>Einstellungen speichern</b>, um Ihre Einstellungen zu speichern. Klicken Sie auf die Schaltfläche <b>Änderungen \
		verwerfen</b>, um die ungespeicherten Änderungen zu verwerfen.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="Mit der DMZ-Hosting-Funktion (DMZ = Demilitarized Zone; entmilitarisierte Zone) kann für einen lokalen Benutzer eine Verbindung zum Internet hergestellt werden, \
		damit dieser einen speziellen Dienst, z. B. Internetspiele oder Videokonferenzen, verwenden kann. \
		Mit DMZ-Hosting werden alle Ports gleichzeitig an einen PC weitergeleitet. Die Funktion zur \
    		Port-Bereich-Weiterleitung ist sicherer, da durch sie nur die gewünschten Ports \
    		geöffnet werden, während durch DMZ-Hosting alle Ports eines Computers geöffnet werden \
    		und auf diesen Computer vom Internet aus zugegriffen werden kann.";    		
helpdmz.phase2="Auf jedem PC, dessen Port weitergeleitet wird, muss die DHCP-Client-Funktion deaktiviert sein;  \
    		darüber hinaus sollte jedem PC eine neue statische IP-Adresse zugewiesen werden, \
    		da die IP-Adresse bei Verwendung der DHCP-Funktion u. U. geändert wird.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Um einen PC mit dem Internet zu verbinden, wählen Sie ";
helpdmz.phase4="Geben Sie im Feld <i>IP-Adresse des DMZ-Hosts</i> die IP-Adresse des Computers ein.";



//help number string
var hnum = new Object();
hnum.one="1.";
hnum.two="2.";
hnum.three="3.";
hnum.four="4.";
hnum.five="5.";
hnum.six="5.";
hnum.seven="6.";
hnum.eight="7.";
hnum.night="8.";
 
