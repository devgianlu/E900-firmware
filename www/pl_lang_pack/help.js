//Basic Setup
var hsetup = new Object();
hsetup.phase1="Ekran <i>Konfiguracja</i> \
		to pierwszy ekran wyświetlany po uzyskaniu dostępu do routera. Dla większości użytkowników \
		ustawienia dostępne na tym ekranie będą wystarczające do skonfigurowania routera \
		i zapewnienia jego prawidłowej pracy. Część usługodawców internetowych (ISP) będzie wymagać \
		wprowadzenia określonych informacji, takich jak nazwa użytkownika, hasło, adres IP, \
		adres bramy domyślnej lub adres IP serwera DNS. W razie potrzeby informacje te można uzyskać \
		od usługodawcy internetowego.";
hsetup.phase2="Uwaga: Po \
		wprowadzeniu tych ustawień należy ustawić nowe hasło dla routera, \
		korzystając z ekranu <i>Zabezpieczenia</i>. Zwiększy to bezpieczeństwo poprzez zapewnienie ochrony \
		routera przed wprowadzaniem nieautoryzowanych zmian. Każdy użytkownik, który będzie chciał uzyskać dostęp do narzędzia WWW \
		routera lub uruchomić Kreatora konfiguracji, zostanie poproszony o wprowadzenie hasła routera.";
hsetup.phase3="Wybierz \
		strefę czasową dla swojego miejsca pobytu. Jeśli w tym miejscu stosuje się czas letni, \
    		pozostaw zaznaczenie pola wyboru <i>Automatycznie uwzględniaj \
    		zmiany czasu letniego</i>.";
hsetup.phase4="MTU to skrót oznaczający \
    		największą jednostkę transmisji (Maximum Transmission Unit). Jest to określenie maksymalnego rozmiaru pakietu, jakiego można użyć \
    		w transmisji internetowej. Aby router wybrał optymalną wartość MTU dla posiadanego połączenia internetowego,\
    		zachowaj ustawienie domyślne, <b>Automatycznie</b>. Aby określić \
    		wartość MTU, wybierz opcję <b>Ręcznie</b> i wprowadź żądaną wartość (wartość domyślna to <b> \
    		1400</b>).&nbsp;Wartość tego ustawienia nie powinna wykraczać poza zakres 1200–1500.";
hsetup.phase5="Ten wpis jest wymagany przez niektórych usługodawców internetowych, którzy mogą zapewnić odpowiednią wartość.";
hsetup.phase6="Router obsługuje cztery typy połączeń:";
hsetup.phase7="Konfiguracja automatyczna — DHCP";
hsetup.phase8="(Point to Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Typy te można wybrać z menu rozwijanego obok opcji Połączenie internetowe. \
    		Wymagane informacje i dostępne funkcje będą się różnić w zależności \
    		od wybranego typu połączenia. Poniżej przedstawiony opisy \
    		niektórych tych informacji:";		
hsetup.phase11="Internetowy adres IP i maska podsieci";
hsetup.phase12="Adres IP i maska podsieci routera \
    		w formie, w jakiej widziane są przez użytkowników zewnętrznych z Internetu (w tym \
    		usługodawcę internetowego). Jeśli posiadane połączenie internetowe wymaga statycznego adresu IP, \
    		usługodawca dostarczy go wraz z maską podsieci.";
hsetup.phase13="Usługodawca internetowy poda adres IP bramy.";
hsetup.phase14="(Domain Name Server)";
hsetup.phase15="Usługodawca internetowy poda co najmniej jeden adres IP serwera DNS.";
hsetup.phase16="Nazwa użytkownika i hasło";
hsetup.phase17="Wprowadź <b>nazwę użytkownika</b> \
		i <b>hasło</b> używane podczas logowania do usługodawcy internetowego za pośrednictwem połączenia \
    		PPPoE.";
hsetup.phase18="Połączenie na żądanie";
hsetup.phase19="Router można skonfigurować tak, \
    		aby po określonym czasie braku aktywności połączenie z Internetem było rozłączane \
    		(maks. czas bezczynności). Jeśli połączenie z Internetem zostanie zakończone z powodu braku \
    		aktywności, opcja ta pozwala urządzeniu na automatyczne \
   		ponowne nawiązanie połączenia bezpośrednio po próbie uzyskania przez użytkownika dostępu \
   		do Internetu. Kliknij przycisk radiowy, aby aktywować opcję Połączenie na żądanie. Aby \
    		połączenie internetowe było aktywne przez cały czas, w polu \
    		<i>Maks. czas bezczynności</i> wprowadź wartość <b>0</b>. W przeciwnym razie wprowadź czas w minutach, \
    		po upływie którego nieaktywne połączenie internetowe powinno zostać przerwane.";
hsetup.phase20="Opcja Utrzymywanie aktywności ";
hsetup.phase21="Ta opcja pozwala zachować połączenie \
    		z Internetem przez nieograniczony czas, nawet jeśli jest ono nieaktywne. Aby jej użyć, \
    		kliknij przycisk radiowy obok opcji <i>Utrzymywanie aktywności</i>. Domyślna wartość \
    		opcji Ponowne wybieranie numeru co wynosi 30 sekund (innymi słowy, router będzie sprawdzać \
    		połączenie z Internetem co 30 sekund).";
hsetup.phase22="Uwaga: Niektórzy \
    		dostawcy kablowi wymagają określonego adresu MAC w celu połączenia \
    		z Internetem. Aby uzyskać więcej informacji na ten temat, kliknij kartę <b>System</b>. Następnie kliknij \
    		przycisk <b>Pomoc</b> i przeczytaj o funkcji Klonowanie adresów MAC.";
hsetup.phase23="LAN";
hsetup.phase24="IP sieci LAN i maska podsieci";
hsetup.phase25="Adres IP \
    		i maska podsieci routera w formie, w jakiej są widoczne w wewnętrznej sieci LAN. Wartość \
    		domyślna to 192.168.1.1 dla adresu IP i 255.255.255.0 dla maski \
    		podsieci:";
hsetup.phase26="Protokół DHCP";
hsetup.phase27="Zachowaj \
    		wartość domyślną, <b>Włącz</b>, aby włączyć opcję serwera DHCP routera. Jeśli \
    		w sieci jest już serwer DHCP lub nie chcesz włączać tej opcji, \
    		wybierz opcję <b>Wyłącz</b>.";
hsetup.phase28="Wprowadź \
    		wartość numeryczną, od której serwer DHCP ma zacząć tworzenie adresów IP. \
    		Nie zaczynaj od wartości 192.168.1.1 (adres IP routera).";
hsetup.phase29="Maksymalna liczba użytkowników DHCP";
hsetup.phase30="Wprowadź \
    		maksymalną liczbę komputerów, którym serwer DHCP ma przypisać adresy \
    		IP. Wartość maksymalna to 253, która jest możliwa po ustawieniu początkowego adresu IP \
    		192.168.1.2.";
hsetup.phase31="Okres \
    		dzierżawy klienta to czas, przez jaki użytkownik sieci będzie mógł łączyć się \
    		z routerem przy użyciu bieżącego dynamicznego adresu IP. Wprowadź wyrażony \
    		w minutach czas, na jaki zostanie użytkownikowi wydzierżawiony ten dynamiczny adres IP.";
hsetup.phase32="Statyczny DNS 1-3 ";
hsetup.phase33="System nazw \
    		domenowych (Domain Name System, DNS) określa sposób tłumaczenia przez Internet nazw domen lub witryn internetowych \
    		na adresy internetowe lub adresy URL Usługodawca internetowy poda co najmniej jeden \
    		adres IP serwera DNS. Aby używać innego adresu IP, wpisz go \
    		w jednym z pól. Maksymalnie można w tym miejscu wprowadzić 3 adresy IP serwera \
    		DNS. Router będzie z nich korzystać w celu szybszego uzyskania dostępu do działających serwerów \
    		DNS.";
hsetup.phase34="WINS (Windows Internet Naming Service) to usługa zarządzająca wszystkimi interakcjami między \
    		komputerem z systemem Windows a Internetem. Jeśli serwer WINS jest używany, wprowadź tu jego adres IP. \
    		W przeciwnym wypadku pozostaw to pole niewypełnione.";
hsetup.phase35="Sprawdź wszystkie \
		wartości i kliknij przycisk <b>Zapisz ustawienia</b>, aby zapisać ustawienia. Kliknij przycisk <b>Anuluj \
		zmiany</b>, aby \
		anulować niezapisane zmiany. Ustawienia można przetestować, łącząc się \
		z Internetem. ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Router wyposażony jest w funkcję Dynamic Domain Name System (DDNS). Funkcja DDNS umożliwia przypisanie stałej \
		nazwy hosta i domeny do dynamicznego internetowego adresu IP. Jest ona przydatna w przypadku \
		hostingu własnej strony internetowej, serwera FTP lub innego serwera poza routerem. Przed \
		użyciem tej funkcji konieczne jest zarejestrowanie się do korzystania z usługi DDNS u dostawcy usług DDNS \
		pod adresem <i>www.dyndns.org</i>.";
helpddns.phase2="Usługa DDNS";
helpddns.phase3="Aby wyłączyć usługę DDNS, zachowaj ustawienie domyślne, <b>Wyłącz</b>. Aby włączyć usługę DDNS, \
		wykonaj następujące instrukcje:";
helpddns.phase4="Zarejestruj się do korzystania z usługi DDNS na stronie <i>www.dyndns.org</i> i zapisz \
		nazwę użytkownika,<i> </i>hasło i <i> </i>nazwę hosta.";
helpddns.phase5="Na ekranie <i>DDNS</i> wybierz opcję <b>Włącz</b>.";
helpddns.phase6="Wypełnij pola <i>Nazwa użytkownika</i>, <i>Hasło</i> i <i>Nazwa hosta</i>.";
helpddns.phase7="Kliknij przycisk <b>Zapisz ustawienia</b>, aby zapisać zmiany. Kliknij przycisk <b>Anuluj zmiany</b>, aby \
		anulować niezapisane zmiany.";
helpddns.phase8="W tym miejscu wyświetlany jest bieżący internetowy adres IP routera.";
helpddns.phase9="W tym miejscu wyświetlany jest status połączenia z usługą DDNS.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Klonowanie adresów MAC";
helpmac.phase2="Adres MAC routera to 12-cyfrowy kod, przypisany określonemu egzemplarzowi \
    		sprzętu w celach identyfikacyjnych. Niektórzy usługodawcy internetowi wymagają zarejestrowania adresu \
    		MAC karty sieciowej, która była podłączona do modemu kablowego \
    		lub DSL podczas instalacji. Jeśli usługodawca internetowy wymaga rejestracji \
    		adresu MAC, znajdź adres MAC karty sieciowej, postępując zgodnie \
    		z instrukcjami odpowiednimi dla używanego systemu operacyjnego komputera.";
helpmac.phase3="System Windows 98 i Millennium:";
helpmac.phase4="1.  Kliknij przycisk <b>Start</b> i wybierz polecenie <b>Uruchom</b>.";
helpmac.phase5="2.  W wyświetlonym polu wpisz <b>winipcfg</b> i kliknij przycisk <b>OK</b>.";
helpmac.phase6="3.  Wybierz używaną kartę sieciową Ethernet.";
helpmac.phase7="4.  Kliknij przycisk <b>Więcej informacji</b>.";
helpmac.phase8="5.  Zapisz adres MAC karty sieciowej.";
helpmac.phase9="1.  Kliknij przycisk <b>Start</b> i wybierz polecenie <b>Uruchom</b>.";
helpmac.phase10="2.  W wyświetlonym polu wpisz <b>cmd</b> i kliknij przycisk <b>OK</b>.";
helpmac.phase11="3.  W wierszu polecenia wykonaj polecenie <b>ipconfig /all</b> i wyszukaj fizyczny adres karty sieciowej.";
helpmac.phase12="4.  Zapisz adres MAC karty sieciowej.";
helpmac.phase13="Aby sklonować do routera adres MAC karty sieciowej i uniknąć konieczności dzwonienia \
    		do usługodawcy internetowego w celu zmiany zarejestrowanego adresu MAC, wykonaj następujące instrukcje:";
helpmac.phase14="System Windows 2000 i XP:";
helpmac.phase15="1.  Wybierz opcję <b>Włącz</b>.";
helpmac.phase16="2.  Wprowadź adres MAC karty sieciowej w polu <i>Adres MAC</i>.";
helpmac.phase17="3.  Kliknij przycisk <b>Zapisz ustawienia</b>.";
helpmac.phase18="Aby wyłączyć klonowanie adresu MAC, zachowaj ustawienie domyślne, <b>Wyłącz</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="Na ekranie <i>Routing</i> można określić tryb routingu i ustawienia routera. \
		 W przypadku większości użytkowników zalecany jest tryb bramy.";
hrouting.phase3="Wybierz właściwy tryb pracy. Zachowaj ustawienie domyślne, <b> \
    		 Brama</b>, jeśli router zapewnia połączenie sieciowe z Internetem (tryb bramy jest zalecany dla większości użytkowników). Wybierz opcję <b> \
    		 Router</b>, jeśli router znajduje się w sieci z innymi routerami.";
hrouting.phase4="Dynamiczny routing (RIP)";
hrouting.phase5="Uwaga: Ta funkcja jest niedostępna w trybie bramy.";
hrouting.phase6="Funkcja dynamicznego routingu umożliwia routerowi automatyczne dostosowywanie się do fizycznych zmian \
    		 w układzie sieci i wymianę tabel routingu z innymi routerami. Wartość \
    		 określa trasy pakietów w sieci w oparciu o najniższą liczbę przeskoków \
    		 między punktem początkowym i punktem docelowym. ";
hrouting.phase7="Aby włączyć funkcję dynamicznego routingu po stronie sieci WAN, wybierz opcję <b>WAN</b>. \
    		 Aby włączyć tę funkcję po stronie sieci LAN i sieci bezprzewodowej, wybierz opcję <b>LAN i bezprzewodowa</b>. \
    		 Aby włączyć tę funkcję zarówno dla sieci WAN, jak i dla sieci LAN, wybierz opcję <b> \
    		 Oba</b>. Aby wyłączyć funkcję dynamicznego routingu dla wszystkich transmisji danych, zachowaj \
    		 ustawienie domyślne, <b>Wyłącz</b>. ";
hrouting.phase8="Statyczny routing,&nbsp;Docelowy adres IP, Maska podsieci, Brama i Interfejs";
hrouting.phase9="Aby skonfigurować trasę statyczną między routerem a inną siecią, \
    		 wybierz numer na liście rozwijanej <i>Statyczny routing</i>. (Trasa \
    		 statyczna to wstępnie określona ścieżka, którą w sieci muszą pokonywać dane, \
    		 aby trafić do określonego hosta lub sieci).";
hrouting.phase10="Wprowadź następujące dane:";
hrouting.phase11="Docelowy adres IP </b>- \
		  docelowy adres IP to adres sieci lub zdalnego hosta, do którego trasa statyczna ma zostać przypisana.";
hrouting.phase12="Maska podsieci </b>- \
		  maska podsieci określa, która część adresu IP należy do sieci, a która \
    		  oznacza hosta. ";
hrouting.phase13="Brama </b>- \
		  jest to adres IP urządzenia bramy, który umożliwia komunikację między routerem i siecią lub hostem.";
hrouting.phase14="W zależności od lokalizacji docelowego adresu IP, wybierz pozycję \
    		  <b>LAN i bezprzewodowa</b> lub <b>WAN</b> z menu rozwijanego <i>Interfejs</i>.";
hrouting.phase15="Aby zapisać zmiany, kliknij przycisk <b>Zastosuj </b>. Aby anulować niezapisane zmiany, kliknij przycisk <b> \
    		  Anuluj </b>.";
hrouting.phase16="Aby utworzyć dodatkowe trasy statyczne, powtórz kroki 1-4.";
hrouting.phase17="Usuń ten wpis";
hrouting.phase18="Aby usunąć wpis trasy statycznej:";
hrouting.phase19="Na liście rozwijanej <i>Statyczny routing</i> wybierz numer wpisu trasy statycznej.";
hrouting.phase20="Kliknij przycisk <b>Usuń ten wpis</b>.";
hrouting.phase21="Aby potwierdzić usunięcie, kliknij przycisk <b>Zastosuj </b>. Aby anulować usunięcie, kliknij przycisk <b> \
    		  Anuluj </b>. ";
hrouting.phase22="Pokaż tablicę routingu";
hrouting.phase23="Kliknij przycisk \
    		  <b>Pokaż tablicę routingu</b>, aby wyświetlić wszystkie prawidłowe wpisy tras, które są używane. Dla każdego wpisu zostaną wyświetlone informacje \
    		  o docelowym adresie IP, masce podsieci, bramie i interfejsie. Kliknij przycisk <b>Odśwież</b>, aby odświeżyć wyświetlane dane. Kliknij przycisk <b> \
    		  Zamknij</b>, aby wrócić do ekranu <i>Routing</i>.";
hrouting.phase24="Docelowy adres IP</b> — \
		  docelowy adres IP to adres sieci lub zdalnego hosta, do którego jest przypisana trasa statyczna. ";
hrouting.phase25="Maska podsieci</b> — \
		  maska podsieci określa, która część adresu IP należy do sieci, a która oznacza hosta.";
hrouting.phase26="Brama</b> — jest to adres IP urządzenia bramy, który umożliwia komunikację między routerem i siecią lub hostem.";
hrouting.phase27="Interfejs</b> — ten interfejs informuje o tym, czy docelowy adres IP znajduje się \
    		  w obrębie sieci <b> LAN i bezprzewodowej</b>(wewnętrzne sieci przewodowe i bezprzewodowe), sieci <b>WAN</b> (Internet) lub <b> \
    		  pętli zwrotnej</b> (fikcyjna sieć, w przypadku której komputer pełni rolę sieci wymaganej przez niektóre programy). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Blokuj żądanie WAN";
hfirewall.phase2="Włączając funkcję Blokuj żądanie WAN, można zapobiec wykrywaniu (pingowaniu) \
    		 sieci przez użytkowników Internetu. Funkcja Blokuj żądanie WAN \
    		 zwiększa także bezpieczeństwo sieci poprzez ukrycie portów sieciowych. \
    		 Obie opcje zapewniane przez funkcję Blokuj żądanie WAN utrudniają \
    		 użytkownikom zewnętrznym dostanie się do sieci. Domyślnie ta funkcja jest \
    		 włączona. Wybierz opcję <b>Wyłącz</b>, aby wyłączyć tę funkcję.";
hfirewall.right="Włącz lub wyłącz zaporę SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN Pass-Through";
helpvpn.phase2="Sieć VPN (Virtual Private Networking) jest zwykle używana do obsługi połączeń z siecią firmową. W przypadku \
    		tuneli VPN router obsługuje protokoły IPSec Pass-Through i PPTP Pass-Through.";
helpvpn.phase3="<b>IPSec</b> — IPSec (Internet Protocol Security) to<b> </b>zestaw protokołów służących do implementacji \
      		bezpiecznej wymiany pakietów w warstwie IP. Aby zezwolić na przechodzenie tuneli IPSec \
      		przez router, protokół IPSec Pass-Through jest włączony domyślnie. Aby wyłączyć \
      		protokół IPSec Pass-Through, usuń zaznaczenie pola wyboru <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- protokół Point-to-Point Tunneling Protocol to metoda aktywowania sesji VPN \
      		z serwerem Windows NT 4.0 lub 2000. Aby zezwolić na przechodzenie tuneli PPTP \
      		przez router, protokół PPTP Pass-Through jest włączony domyślnie. Aby wyłączyć \
      		protokół PPTP Pass-Through, usuń zaznaczenie pola wyboru <i>PPTP</i>.";

helpvpn.right="Aby umożliwić urządzeniom sieciowym komunikowanie się za pośrednictwem sieci VPN, \
		można włączyć protokół PPTP lub L2TP usługi IPSec Passthrough.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtry";
hfilter.phase2="Ekran <i>Filtry</i> umożliwia zablokowanie lub dopuszczenie określonego sposobu \
		wykorzystania Internetu. Istnieje możliwość skonfigurowania zasad dostępu do Internetu dla określonych komputerów \
		oraz skonfigurowania filtrów przy użyciu numerów portów sieciowych.";
hfilter.phase3="Ta funkcja umożliwia dostosowanie do dziesięciu różnych zasad dostępu do Internetu \
    		dla określonych komputerów, które są identyfikowane według adresu IP lub MAC. W przypadku \
    		komputerów określonych przez poszczególne zasady, w określonych dniach i godzinach.";
hfilter.phase4="Aby utworzyć lub edytować zasady, wykonaj następujące instrukcje:";
hfilter.phase5="Wybierz numer zasady \(1-10\) z menu rozwijanego.";
hfilter.phase6="Wprowadź nazwę w polu <i>Wprowadź nazwę profilu</i>.";
hfilter.phase7="Kliknij przycisk <b>Edytuj listę komputerów</b>.";
hfilter.phase8="Kliknij przycisk <b>Zastosuj</b>, aby zapisać zmiany. Kliknij przycisk <b>Anuluj</b>, aby \
    		anulować niezapisane zmiany. Kliknij przycisk <b>Zamknij</b>, aby wrócić do ekranu \
    		<i>Filtry</i>.";
hfilter.phase9="Aby zablokować dostęp do Internetu dla wymienionych komputerów w określonych dniach \
    		i godzinach, zachowaj ustawienie domyślne, <b>Wyłącz dostęp do Internetu dla wymienionych \
    		komputerów</b>. Aby umożliwić dostęp do Internetu dla wymienionych komputerów w określonych dniach \
    		i godzinach, kliknij przycisk radiowy <i>Włącz \
    		dostęp do Internetu dla wymienionych komputerów</i>.";
hfilter.phase10="Na ekranie <i>Lista komputerów</i> określ komputery według adresu IP lub MAC. Wprowadź \
    		odpowiednie adresy IP w polach <i>IP</i>. Aby filtrować zakres \
    		adresów IP, wypełnij odpowiednie pola <i>Zakres IP</i>. \
    		Wprowadź odpowiednie adresy MAC w polach <i>MAC</i>.";
hfilter.phase11="Ustaw godzinę filtrowania dostępu. Wybierz opcję <b>24 godziny</b><b> </b>lub zaznacz pole wyboru <i>Od</i> \
    		i użyj pól rozwijanych, aby wyznaczyć okres. ";
hfilter.phase12="Ustaw dni filtrowania dostępu. Wybierz opcję <b>Codziennie</b> lub odpowiednie dni tygodnia. ";
hfilter.phase13="Kliknij przycisk <b>Dodaj do zasady</b>, aby zapisać zmiany i uaktywnić zasadę.";
hfilter.phase14="Aby utworzyć lub edytować kolejne zasady, powtórz kroki 1-9.";
hfilter.phase15="Aby usunąć zasadę dostępu do Internetu, wybierz numer zasady i kliknij przycisk <b>Usuń</b>.";
hfilter.phase16="Aby wyświetlić podsumowanie wszystkich zasad, kliknij przycisk <b>Podsumowanie</b>. Na ekranie <i> \
    		Podsumowanie zasad dotyczących Internetu</i> wyświetlany jest numer każdej zasady, jej nazwa, \
    		dni i pora dnia. Aby usunąć zasadę, kliknij jej pole wyboru, \
    		a następnie kliknij przycisk <b>Usuń</b>. Kliknij przycisk <b>Zamknij</b>, aby wrócić do ekranu \
    		<i>Filtry</i>.";
hfilter.phase17="Filtrowany zakres portów internetowych";
hfilter.phase18="Aby filtrować komputery według numeru portu sieciowego, wybierz opcję <b>Oba</b>, <b>TCP</b> lub <b>UDP</b> \
    		w zależności od tego, które protokoły mają być filtrowane. Następnie<b> </b>wprowadź numery \
    		portów do filtrowania w polach numerów portów. Komputery połączone \
    		z routerem nie będą już mogły uzyskać dostępu do żadnych portów wyświetlanych w tym miejscu. Aby \
    		wyłączyć filtr, wybierz opcję <b>Wyłącz</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Sprawdź wszystkie wartości i kliknij przycisk <b>Zapisz ustawienia</b>, aby zapisać ustawienia. Kliknij przycisk <b>Anuluj \
		zmiany</b>, aby anulować niezapisane zmiany.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="Funkcja hostingu DMZ umożliwia uwidocznienie użytkownika lokalnego dla Internetu w celu skorzystania \
		ze specjalnych usług, takich jak gry internetowe i wideokonferencje. \
		Hosting DMZ przekierowuje jednocześnie wszystkie porty do jednego komputera. Funkcja \
    		Przekierowanie zakresu portów jest bezpieczniejsza, ponieważ otwiera tylko te porty, które chce otworzyć \
    		użytkownik, podczas gdy funkcja hostingu DMZ otwiera wszystkie porty pojedynczego komputera, \
    		udostępniając go dla Internetu. ";    		
helpdmz.phase2="Każdy komputer, którego port jest przekierowywany, musi mieć wyłączoną funkcję klienta DHCP \
    		i powinien mieć przypisany nowy statyczny adres IP, ponieważ w przypadku korzystania \
    		z funkcji DHCP adres IP może się zmieniać.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Aby uwidocznić jeden komputer, wybierz opcję ";
helpdmz.phase4="Wprowadź adres IP komputera w polu <i>Adres IP hosta DMZ</i>.";



//help number string
var hnum = new Object();
hnum.one="1."
hnum.two="2."
hnum.three="3."
hnum.four="4."
hnum.five="5."
hnum.six="5."
hnum.seven="6."
hnum.eight="7."
hnum.night="8."
 
