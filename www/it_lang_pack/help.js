//Basic Setup
var hsetup = new Object();
hsetup.phase1="La schermata <i>Configurazione</i> \
		è la prima schermata che viene visualizzata quando si accede al router. La maggior parte degli utenti \
		potrà configurare e utilizzare il router correttamente utilizzando solo le \
		impostazioni contenute in questa schermata. Alcuni provider di servizi Internet (ISP) richiedono \
		l'immissione di informazioni specifiche, come nome utente, password, indirizzo IP, \
		indirizzo gateway predefinito o indirizzo IP del server DNS. Se richiesto, queste informazioni possono essere fornite \
		dal provider di servizi Internet.";
hsetup.phase2="Nota: dopo \
		avere configurato tali impostazioni, è necessario specificare una nuova password per il router \
		utilizzando la schermata <i>Protezione</i>. Ciò migliora la sicurezza, proteggendo il \
		router da modifiche non autorizzate. Agli utenti che tentano di accedere all'utilità del router \
		basata sul Web o all'installazione guidata verrà richiesto di immettere la password del router.";
hsetup.phase3="Selezionare il \
		fuso orario della propria zona. Se nella propria zona viene utilizzata l'ora legale, \
    		lasciare selezionata la casella di controllo <i>Passa automaticamente \
    		all'ora legale.</i>";
hsetup.phase4="MTU è l'acronimo di \
    		Maximum Transmission Unit, ossia unità di trasmissione massima. Questo valore specifica la dimensione massima dei pacchetti consentita \
    		durante la trasmissione via Internet. Mantenere l'impostazione predefinita, <b>Auto</b>, per fare in modo \
    		che il router selezioni la MTU migliore per la connessione Internet in uso. Per specificare \
    		le dimensioni della MTU, selezionare <b>Manuale</b> e immettere il valore desiderato (il valore predefinito è <b> \
    		1400</b>).&nbsp; Tale valore deve essere compreso nell'intervallo tra 1200 e 1500.";
hsetup.phase5="Questa voce è necessaria per alcuni provider di servizi Internet e viene da essi fornita.";
hsetup.phase6="Il router supporta quattro tipi di connessione:";
hsetup.phase7="Configurazione automatica DHCP";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Questi tipi di connessione possono essere selezionati dal menu a discesa accanto a Connessione Internet. \
    		Le informazioni richieste e le funzioni disponibili possono variare a seconda \
    		del tipo di connessione selezionato. Alcune di queste \
    		informazioni sono descritte di seguito:";		
hsetup.phase11="Indirizzo IP Internet e Maschera di sottorete";
hsetup.phase12="L'indirizzo IP \
    		e la maschera di sottorete del router visti dagli utenti esterni su Internet (incluso il \
    		provider di servizi Internet). Se la connessione Internet in uso richiede un indirizzo IP statico, \
    		questo verrà fornito dal provider di servizi Internet insieme alla maschera di sottorete.";
hsetup.phase13="Il provider di servizi Internet fornirà l'indirizzo IP del gateway."
hsetup.phase14="(Server DNS)";
hsetup.phase15="Il provider di servizi Internet fornirà almeno un indirizzo IP del server DNS.";
hsetup.phase16="Nome utente e Password.";
hsetup.phase17="Immettere il <b>Nome utente</b> e la \
				<b>Password</b> utilizzati per collegarsi al provider di servizi Internet tramite una connessione PPPoE \
    		o PPTP.";
hsetup.phase18="Connessione su richiesta";
hsetup.phase19="È possibile configurare il router in modo che \
    		interrompa la connessione a Internet dopo un periodo di inattività specificato \
    		(Tempo max. di inattività) Se la connessione a Internet viene interrotta per \
    		inattività, l'opzione Connessione su richiesta consente al router di \
   		ristabilirla automaticamente non appena si tenta di accedere \
   		nuovamente a Internet. Se si desidera attivare Connessione su richiesta, fare clic sul pulsante di opzione. Se \
    		si desidera che la connessione a Internet rimanga sempre attiva, immettere <b>0</b> \
    		nel campo <i>Tempo max. di inattività</i>. In caso contrario, immettere il numero di minuti \
    		che si desidera far trascorrere prima che la connessione a Internet venga interrotta.";
hsetup.phase20="Opzione Connessione sempre attiva ";
hsetup.phase21="Questa opzione consente di mantenere il collegamento \
    		a Internet per un tempo indefinito, anche quando la connessione è inattiva. Per utilizzare \
    		questa funzionalità, fare clic sul pulsante di opzione accanto a <i>Connessione sempre attiva</i>. L'intervallo \
    		di riselezione predefinito è di 30 secondi (in altre parole, il router verificherà la \
    		connessione a Internet ogni 30 secondi).";
hsetup.phase22="Nota: alcuni \
    		provider di servizi via cavo richiedono un indirizzo MAC specifico per la connessione a \
    		Internet. Per ulteriori informazioni, fare clic sulla scheda <b>Sistema</b>, quindi fare clic \
    		sul pulsante <b>Guida</b> e leggere le informazioni sulla funzione Clonazione MAC.";
hsetup.phase23="Indirizzo IP LAN";
hsetup.phase24="Indirizzo IP e Maschera di sottorete";
hsetup.phase25="L'indirizzo\
    		IP e la maschera di sottorete del router visti dalla rete LAN interna. Il \
    		valore predefinito è 192.168.1.1 per l'indirizzo IP e 255.255.255.0 per la maschera \
    		di sottorete.";
hsetup.phase26="DHCP";
hsetup.phase27="Mantenere \
    		l'impostazione predefinita, <b>Attiva</b>, per utilizzare la funzione server DHCP del router. Se si \
    		dispone già di un server DHCP nella rete o se non si desidera utilizzarlo, \
    		selezionare <b>Disattiva</b>.";
hsetup.phase28="Immettere un \
    		valore numerico di partenza per l'emissione di indirizzi IP da parte del server DHCP. \
    		Non iniziare con 192.168.1.1 (l'indirizzo IP del router).";
hsetup.phase29="N. massimo utenti DHCP";
hsetup.phase30="Immettere il \
    		numero massimo di computer a cui il server DHCP può assegnare indirizzi \
    		IP. Il numero massimo assoluto è 253, possibile solo se l'indirizzo IP \
    		iniziale è 192.168.1.2.";
hsetup.phase31="La durata lease del client \
    		è il tempo massimo di connessione al router concesso a un utente di rete \
    		con l'indirizzo IP dinamico corrente. Immettere l'intervallo di \
    		tempo, in minuti, durante il quale all'utente viene assegnato in \"lease\" l'indirizzo IP dinamico.";
hsetup.phase32="DNS statico 1-3 ";
hsetup.phase33="DNS (Domain Name System) \
    		è il sistema mediante il quale Internet converte i nomi di dominio e dei siti Web \
    		in indirizzi Internet o URL. Il provider di servizi Internet fornirà almeno un \
    		indirizzo IP del server DNS. Se si desidera utilizzarne un altro, immettere tale indirizzo IP \
    		in uno di questi campi. È possibile immettere fino a tre indirizzi IP di server DNS \
    		in questi campi. Il router utilizzerà gli indirizzi immessi per accedere più rapidamente ai server \
    		DNS in funzione.";
hsetup.phase34="WINS (Windows Internet Naming Service) gestisce le interazioni fra i computer \
    		e la rete Internet. Se si utilizza un server WINS, immettere l'indirizzo IP del server in questo campo. \
    		In caso contrario, lasciarlo vuoto.";
hsetup.phase35="Verificare tutti i \
		valori immessi e fare clic su <b>Salva impostazioni</b> per salvare le impostazioni. Fare clic su <b>Annulla \
		modifiche</b> per \
		annullare le modifiche non salvate. Per verificare le impostazioni, collegarsi a \
		Internet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Il router supporta la funzione DDNS (Dynamic Domain Name System), che consente di assegnare \
		un nome host e di dominio fissi a un indirizzo IP Internet dinamico. Ciò è utile per l'hosting \
		del proprio sito Web, di un server FTP o di altri server dietro al router. Prima di \
		utilizzare questa funzione, è necessario iscriversi al servizio DDNS all'indirizzo <i>www.dyndns.org</i>, \
		un provider di servizi DDNS.";
helpddns.phase2="Servizio DDNS";
helpddns.phase3="Per disattivare il servizio DDNS, mantenere l'impostazione predefinita <b>Disattiva</b>. Per attivare il servizio DDNS, \
		seguire queste istruzioni:";
helpddns.phase4="Iscriversi al servizio DDNS all'indirizzo <i>www.dyndns.org</i> e prendere nota delle \
		impostazioni Nome utente,<i> </i>Password e<i> </i>Nome host.";
helpddns.phase5="Nella schermata <i>DDNS</i>, selezionare <b>Attiva.</b>";
helpddns.phase6="Compilare i campi <i> Nome utente</i>,<i> Password</i> e<i> Nome host</i>.";
helpddns.phase7="Fare clic sul pulsante <b>Salva impostazioni</b> per salvare le modifiche. Fare clic sul pulsante <b>Annulla modifiche</b> per \
		annullare le modifiche non salvate.";
helpddns.phase8="L'indirizzo IP Internet corrente del router viene visualizzato qui.";
helpddns.phase9="Mostra lo stato della connessione al servizio DDNS.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonazione MAC";
helpmac.phase2="L'indirizzo MAC del router è un codice composto da 12 cifre assegnato a un singolo componente \
    		hardware per identificarlo. Alcuni provider di servizi Internet richiedono la registrazione dell'indirizzo MAC \
    		della scheda o dell'adattatore di rete collegato al modem DSL o via cavo \
    		durante l'installazione. Se il provider di servizi Internet richiede la registrazione dell'indirizzo MAC, \
    		individuare l'indirizzo MAC dell'adattatore seguendo le \
    		istruzioni relative al sistema operativo in uso.";
helpmac.phase3="Per Windows 98 e Millennium:";
helpmac.phase4="1.  Fare clic sul pulsante <b>Start</b> e selezionare <b>Esegui</b>.";
helpmac.phase5="2.  Digitare <b>winipcfg </b>nel campo di testo e premere il tasto <b>OK</b>.";
helpmac.phase6="3.  Selezionare l'adattatore Ethernet in uso.";
helpmac.phase7="4.  Fare clic su <b>Ulteriori informazioni</b>.";
helpmac.phase8="5.  Annotare l'indirizzo MAC dell'adattatore.";
helpmac.phase9="1.  Fare clic sul pulsante <b>Start</b> e selezionare <b>Esegui</b>.";
helpmac.phase10="2.  Digitare <b>cmd </b>nel campo di testo e premere il tasto <b>OK</b>.";
helpmac.phase11="3.  Al prompt dei comandi, eseguire il comando <b>ipconfig /all</b> e leggere l'indirizzo fisico dell'adattatore.";
helpmac.phase12="4.  Annotare l'indirizzo MAC dell'adattatore.";
helpmac.phase13="Per clonare l'indirizzo MAC dell'adattatore di rete sul router ed evitare di contattare il \
    		provider di servizi Internet per modificare l'indirizzo MAC registrato, seguire queste istruzioni:";
helpmac.phase14="Per Windows 2000 e XP:";
helpmac.phase15="1.  Selezionare <b>Attiva</b>.";
helpmac.phase16="2.  Immettere l'indirizzo MAC dell'adattatore nel campo <i>Indirizzo MAC</i>.";
helpmac.phase17="3.  Fare clic sul pulsante <b>Salva impostazioni</b>.";
helpmac.phase18="Per disattivare la clonazione dell'indirizzo MAC, mantenere l'impostazione predefinita <b>Disattiva</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routing";
hrouting.phase2="Nella schermata <i>Routing</i> è possibile impostare la modalità di routing e le impostazioni del router. \
		 La modalità Gateway è consigliata per la maggior parte degli utenti.";
hrouting.phase3="Scegliere la modalità operativa appropriata. Mantenere l'impostazione predefinita, <b> \
    		 Gateway</b>, se il router funge da host nella connessione di rete a Internet (la modalità Gateway è consigliata per la maggior parte degli utenti). Selezionare<b> \
    		 Router </b>se la rete comprende altri router.";
hrouting.phase4="Routing dinamico (RIP)";
hrouting.phase5="Nota: questa funzione non è disponibile in modalità Gateway.";
hrouting.phase6="Il routing dinamico consente al router di adattarsi automaticamente alle modifiche fisiche del \
    		 layout di rete e scambiare le tabelle di routing con altri router. Il \
    		 router determina la route dei pacchetti di rete in base al minor numero di \
    		 passaggi necessari tra origine e destinazione. ";
hrouting.phase7="Per attivare la funzione di routing dinamico sul lato WAN, selezionare <b>WAN</b>. \
    		 Per attivare questa funzione sul lato LAN e wireless, selezionare <b>LAN e Wireless</b>. \
    		 Per attivare la funzione sia per WAN che per LAN, selezionare<b> \
    		 Entrambe</b>. Per disattivare la funzione di routing dinamico per tutte le trasmissioni di dati, mantenere \
    		 l'impostazione predefinita <b>Disattiva</b>. ";
hrouting.phase8="Routing statico,&nbsp; Indirizzo IP di destinazione, Maschera di sottorete, Gateway e Interfaccia";
hrouting.phase9="Per configurare una route statica tra il router e un'altra rete, \
    		 selezionare un numero dall'elenco a discesa <i>Routing statico</i>. Una route statica \
    		 è un percorso predeterminato tramite il quale le informazioni raggiungono \
    		 un host o una rete specifica.";
hrouting.phase10="Immettere i seguenti dati:";
hrouting.phase11="Indirizzo IP di destinazione </b>- \
		  L'indirizzo della rete o dell'host a cui si desidera assegnare una route statica.";
hrouting.phase12="Maschera di sottorete </b>- \
		  Determina la porzione dell'indirizzo IP assegnata alla rete e quella assegnata \
    		  all'host. ";
hrouting.phase13="Gateway </b>- \
		  L'indirizzo IP del dispositivo gateway che consente la connessione tra il router e la rete o l'host.";
hrouting.phase14="A seconda della posizione dell'indirizzo IP di destinazione, selezionare \
    		      		  <b>LAN e Wireless </b>o <b>WAN </b>dal menu a discesa <i>Interfaccia</i>.";
hrouting.phase15="Per salvare le modifiche, fare clic sul pulsante <b>Applica</b>. Per annullare le modifiche, fare clic sul pulsante <b>\
    		  Annulla</b>.";
hrouting.phase16="Per ulteriori route statiche, ripetere i passaggi 1-4.";
hrouting.phase17="Elimina questa voce";
hrouting.phase18="Per eliminare una voce di route statica:";
hrouting.phase19="Nell'elenco a discesa <i>Routing statico</i>, selezionare il numero della route statica.";
hrouting.phase20="Fare clic sul pulsante <b>Elimina questa voce</b>.";
hrouting.phase21="Per salvare un'eliminazione, fare clic sul pulsante <b>Applica</b>. Per annullare un'eliminazione, fare clic sul pulsante <b> \
    		  Annulla</b>. ";
hrouting.phase22="Mostra tabella di routing";
hrouting.phase23="Fare clic sul \
pulsante     		      		  <b>Mostra tabella di routing</b> per visualizzare tutte le voci di route valide in uso. Per ogni voce vengono visualizzati Indirizzo IP di destinazione, Maschera di sottorete, \
    		  Gateway e Interfaccia. Fare clic sul pulsante <b>Aggiorna</b> per aggiornare i dati visualizzati. Fare clic sul pulsante <b> \
    		  Chiudi </b>per tornare alla schermata <i>Routing</i>.";
hrouting.phase24="Indirizzo IP di destinazione </b>- \
		  L'indirizzo della rete o dell'host a cui è assegnata la route statica. ";
hrouting.phase25="Maschera di sottorete </b>- \
		  Determina la porzione di indirizzo IP assegnata alla rete e quella assegnata all'host.";
hrouting.phase26="Gateway</b> - L'indirizzo IP del dispositivo gateway che consente la connessione tra il router e la rete o l'host.";
hrouting.phase27="Interfaccia</b> - Indica se l'indirizzo IP di destinazione si trova sulla rete \
    		      		  <b> LAN e Wireless </b>(reti interne cablate e wireless), <b>WAN</b> (Internet) o <b> \
    		  Loopback</b> (una rete fittizia in cui un PC svolge le funzioni di una rete, necessaria per alcuni programmi software). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Blocca richieste WAN";
hfirewall.phase2="Attivando la funzione Blocca richieste WAN, è possibile evitare che la rete venga \
    		 rilevata (ad esempio tramite \"ping\") da altri utenti Internet. La funzione Blocca richieste WAN \
    		 rafforza ulteriormente la sicurezza della rete nascondendone le porte. \
    		 Entrambe le funzionalità della funzione Blocca richieste WAN rendono più difficile agli \
    		 utenti esterni l'ingresso nella rete. Questa funzione è attivata \
    		 per impostazione predefinita. Per disattivarla, selezionare <b>Disattiva</b>.";
hfirewall.right="Attiva o disattiva il firewall SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Passthrough VPN";
helpvpn.phase2="La VPN (Virtual Private Networking, rete privata virtuale) viene solitamente utilizzata per la connettività a livello professionale. Per \
    		i tunnel VPN, il router supporta passthrough IPSec e PPTP.";
helpvpn.phase3="<b>IPSec</b> - Internet Protocol Security è una<b> </b>suite di protocolli utilizzati per implementare \
      		lo scambio sicuro di pacchetti a livello IP. Per consentire ai tunnel IPSec di attraversare \
      		il router, Passthrough IPSec è attivato per impostazione predefinita. Per disattivare \
      		questa funzione, deselezionare la casella accanto a <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- Point-to-Point Tunneling Protocol è un metodo utilizzato per consentire le sessioni VPN \
      		verso un server Windows NT 4.0 o 2000. Per consentire ai tunnel PPTP di attraversare \
      		il router, Passthrough PPTP è attivato per impostazione predefinita. Per disattivare \
      		questa funzione, deselezionare la casella accanto a<i> PPTP</i>.";

helpvpn.right="È possibile attivare il passthrough PPTP, L2TP o IPSec per consentire ai dispositivi di retee \
		di comunicare tramite VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtri";
hfilter.phase2="La schermata <i>Filtri</i> consente di bloccare o attivare determinati \
		usi di Internet. È possibile impostare criteri di accesso a Internet per specifici computer e configurare \
		i filtri utilizzando i numeri delle porte di rete.";
hfilter.phase3="Questa funzione consente di personalizzare fino a dieci criteri di accesso a Internet \
    		per computer specifici, identificati dai rispettivi indirizzi IP o MAC, per \
    		i quali è stato designato un criterio durante i giorni e gli orari specificati.";
hfilter.phase4="Per creare o modificare un criterio, seguire queste istruzioni:";
hfilter.phase5="Selezionare il numero del criterio \(1-10\) nel menu a discesa.";
hfilter.phase6="Immettere un nome nel campo <i>Immetti nome profilo</i>.";
hfilter.phase7="Fare clic sul pulsante <b>Modifica elenco PC</b>.";
hfilter.phase8="Fare clic sul pulsante <b>Applica</b> per salvare le modifiche. Fare clic sul pulsante <b>Annulla</b> per \
    		annullare le modifiche non salvate. Fare clic sul pulsante <b>Chiudi</b> per tornare alla \
schermata     		    		<i>Filtri</i>.";
hfilter.phase9="Se si desidera bloccare l'accesso a Internet dai PC elencati nei giorni e negli orari specificati, \
    		mantenere l'impostazione predefinita, <b>Disattiva accesso Internet per \
    		PC in elenco</b>. Se si desidera consentire l'accesso a Internet dai PC elencati nei \
    		giorni e negli orari specificati, fare clic sul pulsante di opzione <i>Attiva \
    		accesso Internet per PC in elenco.</i>";
hfilter.phase10="Nella schermata <i>Elenco PC</i>, specificare i PC in base all'indirizzo IP o MAC. Immettere \
    		gli indirizzi IP appropriati nei campi <i>IP</i>. Se si desidera filtrare un intervallo \
    		di indirizzi IP, compilare i campi <i>Intervallo IP</i> appropriati. \
    		Immettere gli indirizzi MAC appropriati nei campi <i>MAC</i>.";
hfilter.phase11="Impostare l'orario in cui l'accesso deve essere filtrato. Selezionare <b>24 ore</b>,<b> </b>oppure selezionare la casella accanto a <i>Da</i> \
    		e utilizzare le caselle a discesa per definire un periodo di tempo specifico. ";
hfilter.phase12="Impostare i giorni in cui l'accesso deve essere filtrato. Selezionare <b>Tutti i giorni</b> oppure i giorni della settimana desiderati. ";
hfilter.phase13="Fare clic sul pulsante <b>Aggiungi al criterio</b> per salvare le modifiche e renderle attive.";
hfilter.phase14="Per creare o modificare ulteriori criteri, ripetere i passaggi 1-9.";
hfilter.phase15="Per eliminare un criterio di accesso a Internet, selezionare il numero del criterio e fare clic sul pulsante <b>Elimina</b>.";
hfilter.phase16="Per visualizzare un riepilogo di tutti i criteri, fare clic sul pulsante <b>Riepilogo</b>. La schermata <i> \
    		Riepilogo criteri Internet</i> visualizza il numero e il nome di ogni criterio, \
    		i giorni e l'orario. Per eliminare un criterio, selezionare la casella corrispondente e \
    		fare clic sul pulsante <b>Elimina</b>. Fare clic sul pulsante <b>Chiudi</b> per tornare alla \
    		schermata <i>Filtri</i>.";
hfilter.phase17="Intervallo porte Internet filtrato";
hfilter.phase18="Per filtrare i PC in base al numero della porta di rete, selezionare <b>Entrambi</b>, <b>TCP</b> o <b>UDP</b> \
    		a seconda dei protocolli che si desidera filtrare. Quindi<b> </b>immettere i numeri di porta \
    		che si desidera filtrare nei campi corrispondenti. I PC collegati al \
    		router non potranno più accedere ai numeri di porta elencati qui. Per \
    		disattivare un filtro, selezionare <b>Disattiva</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Verificare tutti i valori immessi e fare clic su <b>Salva impostazioni</b> per salvare le modifiche. Fare clic sul pulsante <b>Annulla \
		modifiche </b>per annullare le modifiche non salvate.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La funzione di hosting DMZ consente a un singolo utente locale di accedere a Internet per utilizzare \
		un determinato servizio, ad esempio giochi online o videoconferenze. \
		L'hosting DMZ inoltra contemporaneamente tutte le porte a un unico computer. La funzione di inoltro porta \
    		è più sicura perché apre solo le porte specificate, \
    		mentre l'hosting DMZ apre tutte le porte di un computer, \
    		rendendolo visibile da Internet.";    		
helpdmz.phase2="È necessario disattivare la funzione di client DHCP su tutti i PC in cui viene eseguito l'inoltro porte. \
    		Inoltre, è necessario assegnare a tali PC un nuovo indirizzo IP statico, perché l'indirizzo IP \
    		potrebbe cambiare quando si utilizza la funzione DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Per rendere visibile un PC, selezionare ";
helpdmz.phase4="Immettere l'indirizzo IP del computer nel campo <i>Indirizzo IP dell'host DMZ</i>.";



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
 
