//Basic Setup
var hsetup = new Object();
hsetup.phase1="Das Fenster <i>Einrichtung</i>  \
		ist das erste Fenster, das angezeigt wird, wenn Sie auf den Router zugreifen. Bei den meisten Benutzern  \
		gen�gen die Einstellungen in diesem Fenster, um den Router zu konfigurieren und ordnungsgem�� \
		in Betrieb zu nehmen. Bei einigen Internetdienstanbietern (ISPs) ist es erforderlich,  \
		dass Sie bestimmte Informationen wie Benutzernamen, Passwort, IP-Adresse,  \
		Standard-Gateway-Adresse oder DNS-IP-Adresse eingeben. Diese Informationen erhalten Sie  \
		bei Bedarf von Ihrem ISP.";
hsetup.phase2="Hinweis: Nachdem \
		Sie diese Einstellungen konfiguriert haben, sollten Sie ein neues Passwort f�r den Router  \
		im Fenster <i>Sicherheit</i> festlegen. Dadurch wird die Sicherheit erh�ht und der  \
		Router vor unbefugtem Zugriff gesch�tzt. Alle Benutzer, die versuchen, auf das webbasierte Dienstprogramm des Routers \
		oder den Setup-Assistenten zuzugreifen, werden aufgefordert, das Router-Passwort einzugeben.";
hsetup.phase3="W�hlen Sie die \
		Zeitzone f�r Ihren Standort aus. Wenn an Ihrem Standort die Sommerzeit gilt, \
    		aktivieren Sie das Kontrollk�stchen <i>Uhr automatisch an \
    		Zeitumstellung anpassen</i>.";
hsetup.phase4="MTU steht f�r  \
    		Maximum Transmission Unit (Maximale �bertragungseinheit). Hiermit wird die gr��te zul�ssige Paketgr��e \
    		f�r Internet�bertragungen angegeben. Behalten Sie die Standardeinstellung <b>Auto</b> bei, um den \
    		Router die beste MTU f�r Ihre Internetverbindung ausw�hlen zu lassen. Um die \
    		MTU-Gr��e festzulegen, w�hlen Sie <b>Manuell</b> aus, und geben Sie den gew�nschten Wert ein (der Standardwert ist <b> \
    		1400</b>).&nbsp; Sie sollten einen Wert zwischen 1200 und 1500 einstellen.";
hsetup.phase5="Dieser Eintrag ist bei manchen ISPs erforderlich und wird von ihnen zur Verf�gung gestellt.";
hsetup.phase6="Der Router unterst�tzt vier Verbindungstypen:";
hsetup.phase7="Automatische Konfiguration � DHCP";
hsetup.phase8="(Point to Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Diese Typen k�nnen aus dem Dropdown-Men� neben der Option Internetverbindung ausgew�hlt werden. \
    		Die erforderlichen Informationen und verf�gbaren Funktionen unterscheiden sich je \
    		nach ausgew�hltem Verbindungstyp. Einige dieser Informationen werden \
    		im Folgenden beschrieben:";		
hsetup.phase11="Internet-IP-Adresse und Subnetzmaske";
hsetup.phase12="Hierbei handelt es sich um die IP-Adresse  \
    		und Subnetzmaske des Routers wie sie externen Internetbenutzern (einschlie�lich Ihres \
    		ISP (Internet-Dienstanbieter) angezeigt werden. Wenn f�r Ihre Internetverbindung eine statische IP-Adresse ben�tigt wird, \
    		erhalten Sie von Ihrem ISP eine statische IP-Adresse.";
hsetup.phase13="Sie erhalten die Gateway-IP-Adresse von Ihrem ISP."
hsetup.phase14="(Domain Name Server)";
hsetup.phase15="Sie erhalten von Ihrem ISP mindestens eine DNS-IP-Adresse.";
hsetup.phase16="Benutzername und Passwort";
hsetup.phase17="Geben Sie <b>Benutzernamen</b> und \
				<b>Passwort</b> ein, den/das Sie verwenden, wenn Sie sich bei Ihrem ISP �ber eine PPPoE oder eine PPTP-Verbindung \
    		�berpr�fen soll.";
hsetup.phase18="Bei Bedarf verbinden";
hsetup.phase19="Sie k�nnen den Router so konfigurieren, \
    		dass die Internetverbindung nach einem bestimmten Leerlauf-Zeitraum \
    		(maximale Leerlaufzeit) getrennt wird. Wenn Ihre Internetverbindung wegen Leerlaufs getrennt \
    		wurde, kann der Router mit Hilfe der Option Bei Bedarf verbinden automatisch \
   		die Verbindung erneut herstellen, sobald Sie versuchen, auf das Internet zuzugreifen \
   		. Klicken Sie auf die entsprechende Optionsschaltfl�che, um die Option Connect on Demand (Bei Bedarf verbinden) zu aktivieren. Wenn \
    		Ihre Internetverbindung st�ndig aktiv bleiben soll, geben Sie <b>0</b> \
    		in das Feld <i>Maximale Leerlaufzeit</i> ein. Geben Sie andernfalls die Anzahl \
    		der Minuten ein, nach deren Ablauf Ihre Internetverbindung beendet wird.";
hsetup.phase20="Verbindung aufrecht halten ";
hsetup.phase21="Mit dieser Option bleiben Sie f�r einen \
    		unbegrenzten Zeitraum mit dem Internet verbunden. Aktivieren Sie zur Verwendung \
    		dieser Option die Optionsschaltfl�che neben <i>Verbindung aufrecht halten</i>. Die standardm��ige \
    		Wahlwiederholung erfolgt nach 30�Sekunden (d.�h. der Router �berpr�ft die \
    		Internetverbindung alle 30�Sekunden).";
hsetup.phase22="Hinweis: Einige \
    		Kabelanbieter ben�tigen eine spezielle MAC-Adresse f�r die Verbindung mit dem \
    		Internet. Um weitere Informationen zu diesem Thema zu erhalten, klicken Sie auf die Registerkarte <b>System</b>. Klicken Sie anschlie�end auf \
    		die Schaltfl�che <b>Hilfe</b>, und informieren Sie sich �ber die Funktion MAC kopieren.";
hsetup.phase23="LAN";
hsetup.phase24="IP-Adresse/Subnetzmaske";
hsetup.phase25="Hierbei handelt \
    		es sich um die Router-IP-Adresse und die Subnetzmaske, wie sie im internen LAN angezeigt werden. Der \
    		Standardwert lautet 192.168.1.1 f�r die IP-Adresse und 255.255.255.0 f�r die Subnetzmaske \
    		.";
hsetup.phase26="DHCP";
hsetup.phase27="Behalten Sie die \
    		Standardeinstellung <b>Aktivieren</b> bei, um die DHCP-Serveroption des Routers zu aktivieren. Wenn \
    		in Ihrem Netzwerk bereits ein DHCP-Server vorhanden ist oder kein DHCP-Server eingerichtet werden soll, \
    		w�hlen Sie <b>Deaktivieren</b> aus.";
hsetup.phase28="Geben Sie einen \
    		numerischen Wert ein, mit dem der DHCP-Server beim Zuweisen von IP-Adressen beginnen soll. \
    		Beginnen Sie nicht mit 192.168.1.1 (IP-Adresse des Routers).";
hsetup.phase29="Maximale Anzahl der DHCP-Benutzer";
hsetup.phase30="Geben Sie die \
    		maximale Anzahl der PCs ein, denen der DHCP-Server IP-Adressen \
    		zuweist. Die obere Grenze liegt bei 253, sofern Sie 192.168.1.2 als Start-IP-Adresse gew�hlt haben \
    		IP-Adresse zu ersetzen.";
hsetup.phase31="Bei der Client-\
    		Leasedauer handelt es sich um den Zeitraum, �ber den ein Netzwerkbenutzer \
    		mithilfe seiner aktuellen dynamischen IP-Adresse eine Verbindung mit dem Router herstellen darf. Geben Sie den \
    		Zeitraum, �ber den dem Benutzer diese dynamische IP-Adresse gew�hrt wird, in Minuten ein.";
hsetup.phase32="Statisches DNS 1-3 ";
hsetup.phase33="Mit dem \
    		DNS (Domain Name System) �bersetzt das Internet Dom�nen- oder Website-Namen \
    		in Internetadressen oder URLs. Sie erhalten von Ihrem ISP mindestens \
    		eine DNS-Server-IP-Adresse Wenn Sie eine andere IP-Adresse verwenden m�chten, geben Sie diese \
    		in eines der Felder ein. Hier k�nnen Sie bis zu drei IP-Adressen f�r den DNS-Server  \
    		eingeben. Der Router verwendet diese f�r einen schnelleren Zugriff auf arbeitende DNS- \
    		Server.";
hsetup.phase34="Mit dem WINS (Windows Internet Naming Service) wird der Datenaustausch jedes PCs mit \
    		dem Internet verwaltet. Wenn Sie einen WINS-Server verwenden, geben Sie hier die IP-Adresse dieses Servers ein. \
    		Andernfalls lassen Sie dieses Feld leer.";
hsetup.phase35="�berpr�fen Sie alle \
		Werte, und klicken Sie auf <b>Einstellungen speichern</b>, um die Einstellungen zu speichern. Klicken Sie auf die Schaltfl�che <b>�nderungen \
		verwerfen</b>, um \
		ungespeicherte �nderungen zu verwerfen. Sie k�nnen die Einstellungen testen, indem Sie eine Verbindung zum Internet herstellenen  \
		Internet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Der Router verf�gt �ber die Funktion DDNS (Dynamic Domain Name System). Mit DDNS k�nnen Sie einer dynamischen \
		Internet-IP-Adresse einen festen Host- oder Dom�nennamen zuweisen. Dies kann sich f�r das Hosting \
		Ihrer eigenen Website, Ihres FTP-Servers oder anderer Server hinter dem Router als n�tzlich erweisen. Bevor \
		Sie diese Funktion verwenden k�nnen, m�ssen Sie sich unter <i>www.dyndns.org</i>, \
		einem DDNS-Dienstanbieter, f�r diesen DDNS -Dienst anmelden.";
helpddns.phase2="DDNS-Dienst";
helpddns.phase3="Um den DDNS-Dienst zu deaktivieren, behalten Sie die Standardeinstellung <b>Deaktivieren</b> bei. Um den DDNS-Dienst \
		zu aktivieren, gehen Sie wie folgt vor:";
helpddns.phase4="Melden Sie sich f�r den DDNS-Dienst unter <i>www.dyndns.org</i> an, und notieren Sie sich \
		Benutzernamen,<i> </i>Passwort und<i> </i>Hostnamen.";
helpddns.phase5="W�hlen Sie im Fenster <i>DDNS</i> die Option <b>Aktivieren</b>";;
helpddns.phase6="F�llen Sie die Felder <i>Benutzername</i>, <i>Passwort</i> und <i>Hostname</i> aus.";
helpddns.phase7="Klicken Sie auf die Schaltfl�che <b>Einstellungen speichern</b>, um Ihre �nderungen zu speichern. Klicken Sie auf die Schaltfl�che <b>�nderungen verwerfen</b>, um \
		ungespeicherte �nderungen zu verwerfen.";
helpddns.phase8="Hier ist die aktuelle IP-Adresse des Routers aufgef�hrt.";
helpddns.phase9="Hier wird der Status der Verbindung zum DDNS-Dienst aufgef�hrt.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC kopieren";
helpmac.phase2="Die MAC-Adresse des Routers ist ein 12-stelliger Code, der einem bestimmten Hardware-Objekt zu \
    		Identifikationszwecken zugewiesen wird. Bei einigen ISPs ist die Registrierung der MAC-\
    		Adresse der Netzwerkkarte/des Netzwerkadapters erforderlich, die/der w�hrend der Installation an Ihr Kabel- bzw. \
    		DSL-Modem angeschlossen war. Wenn die Registrierung der MAC-Adresse \
    		bei Ihrem ISP erforderlich ist, befolgen Sie die \
    		Anweisungen f�r Ihr Betriebssystem, um die MAC-Adresse Ihres Adapters herauszufinden.";
helpmac.phase3="F�r Benutzer von Windows 98 und Windows ME:";
helpmac.phase4="1.  Klicken Sie auf die Schaltfl�che <b>Start</b>, und w�hlen Sie die Option <b>Ausf�hren</b> aus.";
helpmac.phase5="2.  Geben Sie <b>winipcfg</b> in das entsprechende Feld ein, und klicken Sie die Schaltfl�che <b>OK</b>.";
helpmac.phase6="3.  W�hlen Sie den verwendeten Ethernet-Adapter aus.";
helpmac.phase7="4.  Klicken Sie auf <b>Weitere Informationen</b>.";
helpmac.phase8="5.  Notieren Sie die MAC-Adresse Ihres Adapters.";
helpmac.phase9="1.  Klicken Sie auf die Schaltfl�che <b>Start</b>, und w�hlen Sie die Option <b>Ausf�hren</b> aus.";
helpmac.phase10="2.  Geben Sie <b>cmd</b> in das entsprechende Feld ein, und klicken Sie die Schaltfl�che <b>OK</b>.";
helpmac.phase11="3.  Geben Sie in die Eingabeaufforderung <b>ipconfig /all</b> ein, und rufen Sie die physische Adresse Ihres Adapters auf.";
helpmac.phase12="4.  Notieren Sie die MAC-Adresse Ihres Adapters.";
helpmac.phase13="Befolgen Sie die nachstehenden Anweisungen, um die MAC-Adresse Ihres Netzwerk-Adapters auf den Router zu kopieren, \
    		ohne Ihren ISP wegen einer �nderung Ihrer registrierten MAC-Adresse anrufen zu m�ssen.";
helpmac.phase14="F�r Benutzer von Windows�2000 und XP:";
helpmac.phase15="1.  W�hlen Sie <b>Aktivieren</b> aus.";
helpmac.phase16="2.  Geben Sie in das Feld <i>MAC-Adresse</i> die MAC-Adresse Ihres Adapters ein.";
helpmac.phase17="3.  Klicken Sie auf die Schaltfl�che <b>Einstellungen speichern</b>.";
helpmac.phase18="Um die Option MAC-Adresse kopieren zu deaktivieren, behalten Sie die Standardeinstellung <b>Deaktivieren</b> bei.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="Im Fenster <i>Routing</i> k�nnen Sie den Routing-Modus und Router-Einstellungen festlegen. \
		 Der Gateway-Modus wird f�r die meisten Benutzer empfohlen.";
hrouting.phase3="W�hlen Sie den korrekten Arbeitsmodus. Behalten Sie die Standardeinstellung <b> \
    		 Gateway</b> bei, wenn der Router als Host der Internetverbindung Ihres Netzwerks fungiert (der Gateway-Modus wird f�r die meisten Benutzer empfohlen). W�hlen Sie <b> \
    		 Router</b>, wenn sich der Router in einem Netzwerk mit weiteren Routern befindet.";
hrouting.phase4="Dynamisches Routing (RIP)";
hrouting.phase5="Hinweis: Diese Funktion ist im Gateway-Modus nicht verf�gbar.";
hrouting.phase6="Mit der Funktion Dynamisches Routing kann sich der Router automatisch an �nderungen in der physischen Anordnung \
    		 des Netzwerks anpassen und Routing-Tabellen mit weiteren Routern austauschen. Der \
    		 Router legt die Route der Netzwerkpakete basierend auf der geringsten Anzahl an \
    		 Hops (Spr�ngen) zwischen Quelle und Ziel fest. ";
hrouting.phase7="Um die Funktion Dynamisches Routing f�r WAN zu aktivieren, w�hlen Sie <b>WAN</b>. \
    		 Um diese Funktion f�r LAN und Wireless zu aktivieren, w�hlen Sie <b>LAN & Wireless</b>. \
    		 Um die Funktion sowohl f�r WAN als auch f�r LAN zu aktivieren, w�hlen Sie <b> \
    		 Beide</b>. Um die Funktion Dynamisches Routing f�r jegliche Daten�bertragung abzuschalten, behalten Sie die \
    		 Standardeinstellung <b>Deaktivieren</b> bei. ";
hrouting.phase8="Statisches Routing,&nbsp; Ziel-IP-Adresse, Subnetzmaske, Gateway und Schnittstelle";
hrouting.phase9="Um eine statische Route zwischen dem Router und einem anderen Netzwerk einzurichten, \
    		 w�hlen Sie aus der Dropdown-Liste <i>Statisches Routing</i> eine Zahl aus. (Eine statische \
    		 Route ist ein vordefinierter Pfad, �ber den Netzwerkinformationen an einen bestimmten \
    		 Host oder ein bestimmtes Netzwerk �bertragen werden.)";
hrouting.phase10="Geben Sie die folgenden Daten ein:";
hrouting.phase11="Ziel-IP-Adresse</b>�- \
		  Bei der Ziel-IP-Adresse handelt es sich um die Adresse des Netzwerks bzw. Hosts, dem Sie eine statische Route zuweisen m�chten.";
hrouting.phase12="Subnetzmaske</b>�- \
		  Die Subnetzmaske bestimmt, welcher Teil der IP-Adresse den Netzwerkbereich und welcher Teil \
    		  den Hostbereich darstellt. ";
hrouting.phase13="Gateway�</b>- \
		  Hierbei handelt es sich um die IP-Adresse des Gateway-Ger�ts, das eine Verbindung zwischen dem Router und dem Netzwerk bzw. Host erm�glicht.";
hrouting.phase14="Je nachdem, wo sich die Ziel-IP-Adresse befindet, w�hlen Sie die Option \
    		      		  <b>LAN Wireless</b> oder <b>WAN</b> im Dropdown-Men� <i>Schnittstelle</i> aus.";
hrouting.phase15="Um Ihre �nderungen zu speichern, klicken Sie auf die Schaltfl�che <b>Anwenden</b>. Um Ihre nicht gespeicherten �nderungen zu verwerfen, klicken Sie auf die Schaltfl�che <b> \
    		  Abbrechen</b>.";
hrouting.phase16="Wiederholen Sie die Schritte 1 bis 4, um weitere statische Routen einzurichten.";
hrouting.phase17="Diesen Eintrag l�schen";
hrouting.phase18="So l�schen Sie einen Eintrag f�r eine statische Route:";
hrouting.phase19="W�hlen Sie in der Dropdown-Liste <i>Statisches Routing</i> die Eintragsnummer der statischen Route aus.";
hrouting.phase20="Klicken Sie auf die Schaltfl�che <b>Diesen Eintrag l�schen</b>.";
hrouting.phase21="Um das L�schen zu best�tigen, klicken Sie auf die Schaltfl�che <b>Anwenden</b>. Um das L�schen abzubrechen, klicken Sie auf die Schaltfl�che <b> \
    		  Abbrechen</b>. ";
hrouting.phase22="Routing-Tabelle anzeigen";
hrouting.phase23="Klicken Sie auf die Schaltfl�che \
    		      		  <b>Routing-Tabelle anzeigen</b>, um alle g�ltigen Routeneintr�ge anzuzeigen. F�r jeden Eintrag werden die Ziel-IP-Adresse, die Subnetzmaske, \
    		  das Gateway und die Schnittstelle angezeigt. Klicken Sie auf die Schaltfl�che <b>Aktualisieren</b>, um die angezeigten Daten zu aktualisieren. Klicken Sie auf die Schaltfl�che <b> \
    		  Schlie�en</b>, um zum Fenster <i>Routing</i> zur�ckzukehren.";
hrouting.phase24="Ziel-IP-Adresse</b>�- \
		  Bei der Ziel-IP-Adresse handelt es sich um die Adresse des Netzwerks bzw. Hosts, dem die statische Route zugewiesen ist. ";
hrouting.phase25="Subnetzmaske</b>�- \
		  Die Subnetzmaske bestimmt, welcher Teil der IP-Adresse den Netzwerkbereich und welcher Teil den Hostbereich darstellt.";
hrouting.phase26="Gateway</b> - Hierbei handelt es sich um die IP-Adresse des Gateway-Ger�ts, das eine Verbindung zwischen dem Router und dem Netzwerk bzw. Host erm�glicht.";
hrouting.phase27="Schnittstelle</b>�- Diese Schnittstelle gibt an, ob sich die Ziel-IP-Adresse im \
    		      		  <b>LAN Wireless</b> (interne Wired- und Wireless-Netzwerke), im <b>WAN</b> (Internet) oder <b> \
    		  Loopback</b> (Dummy-Netzwerk, in dem ein PC als Netzwerk fungiert, da dies f�r bestimmte Softwareprogramme erforderlich ist.) ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="WAN-Anfragen blockieren";
hfirewall.phase2="Wenn Sie die Funktion WAN-Anfragen blockieren aktivieren, k�nnen Sie Ihr Netzwerk vor \
    		 Pingangriffen oder dem Erkennen durch andere Internetbenutzer sch�tzen. Durch die Funktion WAN-Anfragen blockieren \
    		 wird zudem die Sicherheit Ihres Netzwerks erh�ht, da Ihre Netzwerk-Ports verborgen bleiben. \
    		 Durch die beiden Komponenten der Funktion WAN-Anfragen blockieren ist es schwieriger, \
    		 von au�en in Ihr Netzwerk einzudringen. Diese Funktion ist standardm��ig aktiviert \
    		 . W�hlen Sie <b>Deaktivieren</b> aus, um diese Funktion zu deaktivieren.";
hfirewall.right="Aktivieren oder deaktivieren Sie die SPI-Firewall.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN-Passthrough";
helpvpn.phase2="VPN (Virtual Private Networking) wird gew�hnlich bei B�ronetzwerken verwendet. F�r \
    		VPN-Tunnel unterst�tzt der Router IPSec-Passthrough und PPTP-Passthrough.";
helpvpn.phase3="<b>IPSec</b>: IPSec (Internet Protocol Security) ist ein<b> </b>Protokollsatz, der zur Implementierung \
      		eines sicheren Paketaustauschs auf der IP-Ebene verwendet wird. Um IPSec-Tunnel durch \
      		den Router zuzulassen, ist IPSec-Passthrough standardm��ig aktiviert. Um \
      		IPSec-Passthrough zu deaktivieren, heben Sie die Auswahl f�r das Kontrollk�stchen neben <i>IPSec</i> auf.";
helpvpn.phase4="<b>PPTP</b>: PPTP-Passthrough (Point-to-Point Tunneling Protocol Passthrough) ist eine Methode zum Aktivieren von VPN-\
      		Sitzungen auf einem Windows�NT�4.0- oder Windows�2000-Server. Um PPTP-Tunnel durch \
      		den Router zuzulassen, ist PPTP-Passthrough standardm��ig aktiviert. Um \
      		PPTP-Passthrough zu deaktivieren, heben Sie die Auswahl f�r das Kontrollk�stchen neben <i>PPTP</i> auf.";

helpvpn.right="Sie k�nnen PPTP-Passthrough, L2TP-Passthrough oder IPSec-Passthrough aktivieren, \
		damit Ihre Netzwerkger�te �ber VPN Daten austauschen k�nnen.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filter";
hfilter.phase2="Im Fenster <i>Filter</i> lassen sich bestimmte Arten der Internetverwendung blockieren bzw. zulassen \
		. Sie k�nnen f�r bestimmte PCs Sicherheitsrichtlinien f�r den Internetzugriff und \
		Filter mithilfe von Netzwerk-Port-Nummern einrichten.";
hfilter.phase3="Mit dieser Funktion k�nnen Sie bis zu zehn verschiedene Richtlinien f�r den Internetzugriff \
    		f�r bestimmte PCs konfigurieren, die an ihrer IP- oder MAC-Adresse zu erkennen sind. F�r \
    		jede Richtlinie legen Sie entsprechende PCs und bestimmte Tage und Zeiten fest.";
hfilter.phase4="Befolgen Sie die nachstehenden Anweisungen, um eine Richtlinie zu erstellen oder zu bearbeiten:";
hfilter.phase5="W�hlen Sie aus dem Dropdown-Men� die Richtliniennummer \(1�-�10) aus.";
hfilter.phase6="Geben Sie in das Feld <i>Profilname eingeben</i> einen Namen ein.";
hfilter.phase7="Klicken Sie auf die Schaltfl�che <b>PC-Liste bearbeiten</b>.";
hfilter.phase8="Klicken Sie auf die Schaltfl�che <b>Anwenden</b>, um Ihre �nderungen zu speichern. Klicken Sie auf die Schaltfl�che <b>Abbrechen</b>, um \
    		ungespeicherte �nderungen zu verwerfen. Klicken Sie auf <b>Schlie�en</b>, um zum Fenster \
    		    		<i>Filter</i> zur�ckzukehren.";
hfilter.phase9="Wenn Sie den aufgef�hrten PCs den Internetzugriff an den festgelegten Tagen und zu den angegebenen \
    		Zeiten verweigern m�chten, behalten Sie die Standardeinstellung <b>Internetzugriff f�r aufgef�hrte \
    		PCs deaktivieren</b> bei. Wenn Sie den aufgef�hrten PCs den Internetzugriff an den \
    		festgelegten Tagen und zu den angegebenen Zeiten erm�glichen m�chten, klicken Sie auf die Optionsschaltfl�che neben <i>\
    		Internetzugriff f�r aufgef�hrte PCs aktivieren</i>.";
hfilter.phase10="Geben Sie im Fenster <i>PC-Liste</i> die PCs anhand ihrer IP- oder MAC-Adresse an. Geben Sie die  \
    		entsprechenden IP-Adressen in die <i>IP</i>-Felder ein. Wenn Sie einen Bereich von \
    		IP-Adressen filtern m�ssen, f�llen Sie die entsprechenden <i>IP-Bereich</i>-Felder aus. \
    		Geben Sie die jeweiligen MAC-Adressen in die <i>MAC</i>-Felder ein.";
hfilter.phase11="Legen Sie die Zeiten fest, zu denen der Zugriff gefiltert werden soll. W�hlen Sie <b>24�Stunden</b> aus,<b> </b>oder aktivieren Sie das Kontrollk�stchen neben <i>Von</i>, \
    		und legen Sie in den Dropdown-Feldern einen bestimmten Zeitraum fest. ";
hfilter.phase12="Legen Sie die Tage fest, an denen der Zugriff gefiltert werden soll. W�hlen Sie <b>Jeden Tag</b> oder die jeweiligen Wochentage aus. ";
hfilter.phase13="Klicken Sie auf die Schaltfl�che <b>Zu Richtlinie hinzuf�gen</b>, um Ihre �nderungen zu speichern und zu �bernehmen.";
hfilter.phase14="Um zus�tzliche Richtlinien zu erstellen oder zu bearbeiten, wiederholen Sie die Schritte 1 bis 9.";
hfilter.phase15="Um eine Richtlinie f�r den Internetzugriff zu l�schen, w�hlen Sie die Richtliniennummer aus, und klicken Sie auf die Schaltfl�che <b>L�schen</b>.";
hfilter.phase16="Klicken Sie zur Anzeige einer Zusammenfassung aller Richtlinien auf die Schaltfl�che <b>Zusammenfassung</b>. Im Fenster <i> \
    		Internetrichtlinien�- Zusammenfassung</i> wird jede Richtlinie mit Nummer, \
    		Name, Tagen und Uhrzeit angezeigt. Um eine Richtlinie zu l�schen, aktivieren Sie das entsprechende Kontrollk�stchen, \
    		und klicken Sie anschlie�end auf die Schaltfl�che <b>L�schen</b>. Klicken Sie auf <b>Schlie�en</b>, um zum Fenster \
    		<i>Filter</i> zur�ckzukehren.";
hfilter.phase17="Gefilterter Internet-Port-Bereich";
hfilter.phase18="Um PCs nach Netzwerk-Port-Nummern zu filtern, w�hlen Sie je nach zu filternden Protokollen <b>Beide</b>, <b>TCP</b> oder <b>UDP</b> aus \
    		. Geben<b> </b>Sie anschlie�en die zu filternden  \
    		Port-Nummern in die Felder f�r die Port-Nummern ein. Mit dem Router verbundene  \
    		PCs erhalten keinen Zugriff mehr auf alle hier aufgef�hrten Port-Nummern. Um  \
    		einen Filter zu deaktivieren, w�hlen Sie <b>Deaktivieren</b> aus.";

//share of help string
var hshare = new Object();
hshare.phase1="�berpr�fen Sie alle Werte, und klicken Sie auf <b>Einstellungen speichern</b>, um Ihre Einstellungen zu speichern. Klicken Sie auf die Schaltfl�che <b>�nderungen \
		verwerfen</b>, um die ungespeicherten �nderungen zu verwerfen.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="Mit der DMZ-Hosting-Funktion (DMZ = Demilitarized Zone; entmilitarisierte Zone) kann f�r einen lokalen Benutzer eine Verbindung zum Internet hergestellt werden, \
		damit dieser einen speziellen Dienst, z.�B. Internetspiele oder Videokonferenzen, verwenden kann. \
		Mit DMZ-Hosting werden alle Ports gleichzeitig an einen PC weitergeleitet. Die Funktion zur \
    		Port-Bereich-Weiterleitung ist sicherer, da durch sie nur die gew�nschten Ports \
    		ge�ffnet werden, w�hrend durch DMZ-Hosting alle Ports eines Computers ge�ffnet werden \
    		und auf diesen Computer vom Internet aus zugegriffen werden kann.";    		
helpdmz.phase2="Auf jedem PC, dessen Port weitergeleitet wird, muss die DHCP-Client-Funktion deaktiviert sein;  \
    		dar�ber hinaus sollte jedem PC eine neue statische IP-Adresse zugewiesen werden, \
    		da die IP-Adresse bei Verwendung der DHCP-Funktion u.�U. ge�ndert wird.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Um einen PC mit dem Internet zu verbinden, w�hlen Sie ";
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
 
