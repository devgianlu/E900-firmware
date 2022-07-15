var firewall2 = new Object();
firewall2.natredir="Filtro reindirizzamento NAT Internet solo per Internet IPv4";
firewall2.ident="Filtro IDENT (Porta 113)";
firewall2.multi="Filtro multicast";
firewall2.internetfilter="Filtro Internet";
firewall2.webfilter="Filtro Web";

var hupgrade = new Object();
hupgrade.right1="Fare clic sul pulsante Sfoglia per selezionare il file firmware da caricare sul router.";
hupgrade.right2="Fare clic sul pulsante Aggiorna per avviare la procedura di aggiornamento. L'aggiornamento non deve essere interrotto.";
hupgrade.wrimage="File immagine errato.";

var hfacdef = new Object();
hfacdef.right1="Tutte le impostazioni saranno riportate ai valori predefiniti in fabbrica. Tutte le impostazioni personali saranno cancellate.";
hfacdef.warning="Avvertenza: facendo clic su OK, verranno ripristinate le impostazioni predefinite del dispositivo e tutte le impostazioni precedenti andranno perse.";

var hdiag = new Object();
hdiag.right1="Immettere l'indirizzo IP o il nome di dominio su cui si desidera eseguire il ping e fare clic sul pulsante Ping.";
hdiag.right2="Immettere l'indirizzo IP o il nome di dominio che si desidera tracciare e fare clic sul pulsante Traceroute.";

var hlog = new Object();
hlog.right1="Per attivare o disattivare l'uso dei registri <b>in entrata</b> e <b>in uscita</b>, selezionare il pulsante di opzione corrispondente.";

var manage2 = new Object();
manage2.webacc="Accesso a gestione locale";
manage2.accser="Server di accesso";
manage2.wlacc="Accesso wireless &nbsp;Web";
manage2.vapass="La password di conferma non corrisponde alla password inserita. Immettere nuovamente la password.";
manage2.passnot="La password di conferma non corrisponde.";
manage2.selweb="Selezionare un server Web.";
manage2.changpass="La password corrente del router è quella predefinita. Come misura di sicurezza, è necessario modificare la password prima di attivare la funzione Gestione remota. Fare clic sul pulsante OK per modificare la password. Fare clic sul pulsante Annulla per mantenere disattivata la funzione Gestione remota.";
manage2.webutiacc="Accesso via";
manage2.wlutiacc="Accesso via wireless";

var hmanage2 = new Object();
hmanage2.right1="<b>Accesso al router locale: </b>consente di modificare la password del router. Immettere la nuova password per il router e digitarla nuovamente nel campo Conferma password.<br>";
hmanage2.right2="<b>Accesso Web: </b>consente di configurare le opzioni di accesso all'utilità del router basata sul Web.";
hmanage2.right3="<b>Accesso al router remoto: </b>consente l'accesso remoto al router. Scegliere la porta che si desidera utilizzare. È necessario modificare la password del router se si utilizza ancora la password predefinita.";
hmanage2.right4="<b>UPnP: </b>utilizzato da alcuni programmi per aprire automaticamente le porte di comunicazione.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Indirizzo MAC</b>. L'indirizzo MAC del router come appare sulla rete wireless locale.";
hstatwl2.right2="<b>Modalità</b>. Visualizza la modalità wireless utilizzata dalla rete e selezionata nella scheda Wireless: Mista, Solo G o Disattivata.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Indirizzo MAC</b>. L'indirizzo MAC del router come appare sulla rete Ethernet locale.";
hstatlan2.right2="<b>Indirizzo IP</b>. L'indirizzo IP del router come appare sulla rete Ethernet locale.";
hstatlan2.right3="<b>Maschera di sottorete</b>. Visualizza la maschera di sottorete utilizzata dal router.";
hstatlan2.right4="<b>Server DHCP</b>. Indica se il router viene utilizzato come server DHCP.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statico";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Cavo Telstra";
hstatrouter2.connecting="Connessione in corso";
hstatrouter2.disconnected="Disconnesso";
hstatrouter2.disconnect="Disconnetti";
hstatrouter2.right1="<b>Versione firmware.  </b>La versione in uso del firmware del router.";
hstatrouter2.right2="<b>Ora corrente.  </b>Visualizza l'ora impostata nella scheda Configurazione.";
hstatrouter2.right3="<b>Indirizzo MAC.  </b>L'indirizzo MAC del router come appare al provider di servizi Internet.";
hstatrouter2.right4="<b>Nome router.  </b>Il nome specifico del router impostato nella scheda Configurazione.";
hstatrouter2.right5="<b>Tipo di configurazione.  </b>Informazione richiesta dal provider di servizi Internet (ISP) per il collegamento a Internet. Questa informazione è stata immessa nella scheda Configurazione. È possibile attivare o disattivare la connessione facendo clic sul pulsante <b>Connetti</b> o <b>Disconnetti</b>.";
hstatrouter2.authfail=" autenticazione non riuscita";
hstatrouter2.noip="Impossibile ottenere un indirizzo IP da ";
hstatrouter2.negfail=" negoziazione non riuscita";
hstatrouter2.lcpfail=" Negoziazione LCP non riuscita";
hstatrouter2.tcpfail="Impossibile stabilire una connessione TCP a ";
hstatrouter2.noconn="Impossibile effettuare la connessione a ";
hstatrouter2.server=" server";
hstatrouter2.pppoenoip="Impossibile ottenere un indirizzo IP da PPPoE";
hstatrouter2.undetermined="Indeterminato";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ: </b>l'attivazione di questa opzione rende visibile il router alla rete Internet. Tutte le porte saranno accessibili da Internet";

var hforward2 = new Object();
hforward2.right1="<b>Inoltro intervallo porte: </b>alcune applicazioni possono richiedere l'apertura di porte specifiche per funzionare correttamente,  ad esempio server e alcuni giochi online. Quando si riceve da Internet la richiesta per una determinata porta, il router invia i dati al computer specificato. Per motivi di sicurezza, può essere consigliabile limitare l'inoltro solo alle porte effettivamente in uso e deselezionare la casella di controllo <b>Attiva</b> al termine delle operazioni.";

var hfilter2 = new Object();
hfilter2.delpolicy="Eliminare i criteri?";
hfilter2.right1="<b>Criteri di accesso a Internet: </b>è possibile definire fino a 10 criteri di accesso. Fare clic su <b>Elimina</b> per eliminare un criterio o su <b>Riepilogo</b> per visualizzare il riepilogo del criterio.";
hfilter2.right2="<b>Stato: </b>attiva o disattiva un criterio.";
hfilter2.right3="<b>Nome criterio: </b>consente di assegnare un nome a un criterio.";
hfilter2.right4="<b>Tipo di criterio: </b>scegliere fra l'accesso a Internet o il traffico in entrata.";
hfilter2.right5="<b>Giorni: </b>scegliere il giorno della settimana in cui si desidera applicare il criterio.";
hfilter2.right6="<b>Ora: </b>specificare l'ora in cui si desidera applicare il criterio.";
hfilter2.right7="<b>Servizi bloccati: </b>è possibile bloccare l'accesso ad alcuni servizi. Fare clic su <b>Aggiungi/modifica</b> servizio per modificare queste impostazioni.";
hfilter2.right8="<b>Blocco del sito Web mediante indirizzo URL: </b>è possibile bloccare l'accesso a particolari siti Web inserendo l'indirizzo URL.";
hfilter2.right9="<b>Blocco del sito Web mediante parola chiave: </b>è possibile bloccare l'accesso a particolari siti Web utilizzando le parole chiave contenute nelle relative pagine.";

var hportser2 = new Object();
hportser2.submit="Applica";

var hwlad2 = new Object();
hwlad2.authtyp="Tipo di autenticazione";
hwlad2.basrate="Velocità di base";
hwlad2.mbps="Mbps";
hwlad2.def="Predefinito";
hwlad2.all="Tutti";
hwlad2.defdef="(Impostazione predefinita: Predefinita)";
hwlad2.fburst="Suddivisione frame";
hwlad2.milli="Millisecondi";
hwlad2.range="Intervallo";
hwlad2.frathrh="Soglia di frammentazione";
hwlad2.apiso="Isolamento AP";
hwlad2.off="Disattivato";
hwlad2.on="Attivato";
hwlad2.right1="<b>Tipo di autenticazione: </b>è possibile scegliere tra Auto o Chiave condivisa. L'autenticazione a chiave condivisa è più sicura, ma tutti i dispositivi della rete devono supportarla.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Modalità di rete wireless: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster è attivato automaticamente nelle modalità <b>Mista</b> e <b>Solo G</b>."); %> Se si desidera escludere i client Wireless-G, scegliere la modalità <b>Solo B</b>. Se si desidera disattivare l'accesso wireless, scegliere <b>Disattiva</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="Chiave precondivisa WPA";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="Solo chiave precondivisa WPA2";
hwlsec2.wpa2radius="Solo WPA2 RADIUS";
hwlsec2.wpa2pskmix="Chiavi precondivise WPA2 miste";
hwlsec2.wpa2radiusmix="WPA2 RADIUS misto";
hwlsec2.wpa2personal="WPA2-Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="Modalità mista WPA2/WPA";
hwlsec2.enterprisemixed="Modalità mista WPA2/WPA Enterprise";
hwlsec2.pskpersonal="PSK Personal";
hwlsec2.pskenterprise="PSK Enterprise";
hwlsec2.psk2personal="PSK2 Personal";
hwlsec2.psk2enterprise="PSK2 Enterprise";

hwlsec2.right1="<b>Modalità di protezione: </b>è possibile scegliere Disattiva, WEP, Chiave precondivisa WPA, WPA RADIUS o RADIUS. Tutti i dispositivi collegati in rete devono utilizzare la stessa modalità di protezione per comunicare tra di loro.";

var hwmac2 = new Object();
hwmac2.right1="<b>Clonazione indirizzo MAC: </b>alcuni ISP richiedono la registrazione dell'indirizzo MAC. Se non si desidera registrare nuovamente l'indirizzo MAC, il router può clonare l'indirizzo MAC registrato presso il proprio provider di servizi Internet.";

var hddns2 = new Object();
hddns2.right1="<b>Servizio DDNS: </b>consente di accedere alla rete utilizzando i nomi di dominio al posto degli indirizzi IP. Il servizio gestisce la modifica degli indirizzi IP e aggiorna dinamicamente le informazioni sul dominio. È necessario iscriversi al servizio tramite il sito TZO.com o DynDNS.org.";
hddns2.right2="Fare clic <b><a target=_blank href=http://Linksys.tzo.com>qui</a></b> per ISCRIVERSI a un <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCOUNT TZO DI PROVA GRATUITO";
hddns2.right3="Fare clic <b><a target=_blank href=https://controlpanel.tzo.com>qui</a></b> per gestire il proprio <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;account TZO";
hddns2.right4="Fare clic <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>qui</a></b> per acquistare un <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;abbonamento TZO DDNS";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Supporto/Esercitazioni</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Modalità operativa: </b>se il router fa da host per la connessione a Internet, selezionare la modalità <b>Gateway</b>. Se è presente un secondo router nella rete, selezionare la modalità <b>Router</b>.";
hrouting2.right2="<b>Seleziona numero preimpostato: </b>il numero univoco della route. È possibile impostare fino a 20 route.";
hrouting2.right3="<b>Nome route: </b>immettere il nome che si desidera assegnare alla route.";
hrouting2.right4="<b>IP LAN di destinazione: </b>l'host remoto a cui si desidera assegnare la route statica.";
hrouting2.right5="<b>Maschera di sottorete: </b>definisce l'host e la parte di rete.";

var hindex2 = new Object();
hindex2.telstra="Cavo Telstra";
hindex2.dns3="DNS statico 3";
hindex2.hbs="Server Heart Beat";
hindex2.l2tps="Server L2TP";
hindex2.pptps="Server PPTP";
hindex2.hdhcp="<b>Configurazione automatica - DHCP: </b>questa impostazione viene generalmente utilizzata dagli operatori via cavo.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>questa impostazione viene generalmente utilizzata dai provider DSL.<br>";
hindex2.hpppoe2="<b>Nome utente: </b>immettere il nome utente fornito dal provider di servizi Internet.<br>";
hindex2.hpppoe3="<b>Password: </b>immettere la password fornita dal provider di servizi Internet.<br>";

hindex2.hstatic1="<b>IP statico: </b>questa impostazione viene generalmente utilizzata dai provider di servizi Internet aziendali.<br>";
hindex2.hstatic2="<b>Indirizzo IP Internet: </b>immettere l'indirizzo IP fornito dal provider di servizi Internet.<br>";
hindex2.hstatic3="<b>Maschera di sottorete: </b>immettere la maschera di sottorete<br>";

hindex2.hpptp1="<b>PPTP: </b>questa impostazione viene generalmente utilizzata dai provider DSL.<br>";
hindex2.hpptp2="<b>Indirizzo IP Internet: </b>immettere l'indirizzo IP fornito dal provider di servizi Internet.<br>";
hindex2.hpptp3="<b>Maschera di sottorete: </b>immettere la maschera di sottorete<br>";
hindex2.hpptp4="<b>Gateway: </b>immettere l'indirizzo del gateway del provider di servizi Internet<br>";

hindex2.hl2tp1="<b>L2TP: </b>questa impostazione viene utilizzata da alcuni provider di servizi Internet in Europa.<br>";
hindex2.hl2tp2="<b>Nome utente: </b>immettere il nome utente fornito dal provider di servizi Internet.<br>";
hindex2.hl2tp3="<b>Password: </b>immettere la password fornita dal provider di servizi Internet.<br>";

hindex2.hhb1="<b>Cavo Telstra: </b>questa impostazione viene generalmente utilizzata dai provider DSL.<br>";
hindex2.hhb2="<b>Nome utente: </b>immettere il nome utente fornito dal provider di servizi Internet.<br>";
hindex2.hhb3="<b>Password: </b>immettere la password fornita dal provider di servizi Internet.<br>";

hindex2.right1="<b>Nome host: </b>immettere il nome host fornito dal provider di servizi Internet.<br>";
hindex2.right2="<b>Nome dominio: </b>immettere il nome di dominio fornito dal provider di servizi Internet.<br>";
hindex2.right3="<b>Indirizzo IP locale: </b>questo è l'indirizzo del router.<br>";
hindex2.right4="<b>Maschera di sottorete: </b>questa è la maschera di sottorete del router.<br><br><br>";
hindex2.right5="<b>Server DHCP: </b>consente al router di gestire gli indirizzi IP.<br>";
hindex2.right6="<b>Indirizzo IP iniziale: </b>l'indirizzo scelto per iniziare.<br>";
hindex2.right7="<b>Impostazione orario: </b>consente di scegliere il fuso orario locale. Il router può anche applicare automaticamente l'ora legale.";
hindex2.hdhcps1="<b>N. massimo utenti DHCP: </b>è possibile limitare il numero di indirizzi che il router può assegnare.<br>";

var errmsg2 = new Object();
errmsg2.err0="Indirizzo IP del server HeartBeat non valido.";
errmsg2.err1="Eliminare la voce?";
errmsg2.err2="È necessario inserire un SSID.";
errmsg2.err3="Immettere una chiave condivisa.";
errmsg2.err4=" cifre esadecimali non valide o voce più lunga di 63 caratteri.";
errmsg2.err5="La chiave deve contenere da 8 a 63 caratteri ASCII o 64 cifre esadecimali.";
errmsg2.err6="È necessario immettere una chiave.";
errmsg2.err7="La lunghezza della chiave non è corretta.";
errmsg2.err8="Immettere una passphrase.";
errmsg2.err9="I controlli complessivi superano i 40 conteggi.";
errmsg2.err10="Non sono consentiti spazi.";
errmsg2.err11="Al termine di tutte le operazioni, fare clic sul pulsante Applica per salvare le impostazioni.";
errmsg2.err12="È necessario inserire il nome del servizio.";
errmsg2.err13="Il nome del servizio esiste già.";
errmsg2.err14="L'indirizzo IP LAN o la maschera di sottorete riporta un errore.";

var trigger2 = new Object();
trigger2.ptrigger="Attivazione intervallo porte";
trigger2.qos="QoS";
trigger2.trirange="Intervallo di attivazione";
trigger2.forrange="Intervallo di inoltro";
trigger2.trirange1="Intervallo di attivazione";
trigger2.forrange1="Intervallo di inoltro";
trigger2.sport="Porta di inizio";
trigger2.eport="Porta di fine";
trigger2.right1="Applicazione Immettere il nome dell'applicazione di attivazione. <b>Intervallo di attivazione</b> Per ciascuna applicazione, elencare l'intervallo del numero di porte attivate. Per informazioni sui numeri di porta necessari, consultare la documentazione relativa all'applicazione Internet.<b>Porta di inizio</b> Immettere il numero di porta di inizio dell'intervallo di attivazione.<b>Porta di fine</b> Immettere il numero di porta di fine dell'intervallo di attivazione.   <b>Intervallo di inoltro</b> Per ciascuna applicazione, elencare l'intervallo del numero di porte da inoltrare. Per informazioni sui numeri di porta necessari, consultare la documentazione relativa all'applicazione Internet.   <b>Porta di inizio</b> Immettere il numero di porta di inizio dell'intervallo di inoltro.   <b>Porta di fine</b> Immettere il numero di porta di fine dell'intervallo di inoltro.";

var bakres2 = new Object();
bakres2.conman="Gestione configurazione";
bakres2.bakconf="Backup configurazioni";
bakres2.resconf="Ripristino configurazioni";
bakres2.bakres="Backup e ripristino";
bakres2.file2res="Selezionare un file da ripristinare.";
bakres2.bakbutton="Backup configurazioni";
bakres2.resbutton="Ripristino configurazioni";
bakres2.right1="È possibile eseguire il backup della configurazione corrente qualora si effettui il ripristino delle impostazioni predefinite del router.";
bakres2.right2="Per eseguire il backup della configurazione, fare clic sul pulsante di backup.";
bakres2.right3="Fare clic sul pulsante Sfoglia per scegliere un file di configurazione salvato sul PC.";
bakres2.right4="Fare clic su Ripristina per sovrascrivere tutte le configurazioni correnti con quelle del file di configurazione.";

var qos = new Object();
qos.uband="Larghezza di banda di upstream";
qos.bandwidth="Larghezza di banda";
qos.dpriority="Priorità dispositivo";
qos.priority="Priorità";
qos.dname="Nome dispositivo";
qos.low="Bassa";
qos.medium="Media";
qos.high="Alta";
qos.highest="Massima";
qos.eppriority="Priorità porta Ethernet";
qos.flowctrl="Controllo di flusso";
qos.appriority="Priorità applicazione";
qos.specport="Porta specifica";
qos.appname="Nome applicazione";
qos.alert1="Il valore della porta non è compreso nell'intervallo [0 - 65535]";
qos.alert2="Il valore della porta di inizio è maggiore di quello della porta di fine.";
qos.confirm1="\nL'impostazione di una priorità alta per più periferiche, porte Ethernet o applicazioni potrebbe annullare l'effetto del QoS.\Procedere comunque?";

qos.optgame="Ottimizza giochi";
qos.wqos="QoS cablato";
qos.wlqos="WMM   ";
qos.wlqos2="QoS wireless";
qos.edca_ap="Parametri EDCA AP";
qos.edca_sta="Parametri EDCA STA";
qos.wme="Supporto WMM";
qos.noack="Nessun riconoscimento";
qos.apsdsupp="Supporto APSD";
qos.defdis="(Impostazione predefinita: Disattiva)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Forzato";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service)";
qos.intqccpri="Priorità accesso Internet";
qos.category="Categoria";
qos.mediumrec="Media (consigliata)";
qos.normal="Normale";
qos.msnmess="MSN Messenger";
qos.skype="Skype";
qos.yahoomess="Yahoo Messenger";
qos.winlivemsg="Windows Live Messenger";
qos.aim="AIM";
qos.winmediaplay="Windows Media Player:";
qos.realplayer="RealPlayer";
qos.quicktime="QuickTime";
qos.itunes="iTunes";
qos.yahoomusic="Yahoo Music Jukebox";
qos.rhapsody="Rhapsody";
qos.addapp="Aggiungi una nuova applicazione";
qos.onlinegame="Giochi online";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tourment";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.:Shadow Of Chernobyl";
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
qos.addgame="Aggiungi un nuovo gioco";
qos.entername="Immetti un nome";
qos.etherport="Porta Ethernet";
qos.voicedevice="Dispositivo vocale";
qos.voicemac="Indirizzo MAC del dispositivo vocale";
qos.recommend="Consiglia";
qos.game="Gioco";
qos.mymac="Indirizzo MAC del PC corrente";

qos.right1="Sono disponibili due tipi di funzioni QoS: QoS cablato, che controlla i dispositivi collegati al router tramite cavo Ethernet, e QoS wireless, che controlla i dispositivi collegati al router in modo wireless.";
qos.right2="<b>Priorità dispositivo:</b> è possibile specificare la priorità per tutto il traffico proveniente da un dispositivo appartenente alla rete assegnando un nome al dispositivo, specificando la priorità e immettendo l'indirizzo MAC.";
qos.right3="<b>Priorità porta Ethernet:</b> consente di verificare la velocità dei dati in base alla porta LAN fisica in cui il dispositivo è inserito. È possibile assegnare priorità alta o bassa al traffico dei dati proveniente dai dispositivi collegati alle porte LAN dalla 1 alla 4.";
qos.right4="<b>Priorità applicazione:</b> consente di verificare la velocità dei dati rispetto all'applicazione che sta utilizzando la larghezza di banda. Selezionare <b>Ottimizza giochi</b> per assegnare automaticamente una priorità più alta alle porte utilizzate da alcune comuni applicazioni per giochi. È possibile personalizzare fino a otto applicazioni immettendo il numero di porta che utilizzano.";
qos.right5="QoS wireless è chiamato anche <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> da Wi-Fi Alliance<sup>TM</sup>. Se si impiegano altri dispositivi wireless con certificazione WMM, selezionare Attiva per utilizzare WMM.";
qos.right6="<b>Nessun riconoscimento:</b> attivare questa opzione se si desidera disabilitare il riconoscimento. Quando questa opzione è attivata, se si verifica un errore il router non invierà nuovamente i dati.";
qos.exist = "Questa impostazione è già esistente.";

var vpn2 = new Object();
vpn2.right1="È possibile scegliere di attivare PPTP e L2TP del passthrough IPSec per consentire ai dispositivi di rete di comunicare tramite VPN.";

var fail = new Object();
fail.msg="I valori immessi non sono validi. Riprovare.";

var pactrl = new Object();
pactrl.pactrl ="Filtro famiglia";
pactrl.accsign ="Iscrizione account";
pactrl.center1 ="La soluzione Filtro famiglia di Linksys consente di salvaguardare i bambini <br>durante la navigazione in Internet.";
pactrl.center2 ="<li>Facile da configure</li><br><li>È possibile proteggere ogni computer domestico dal router Linksys</li><br><li>I rapporti consentono di controllare i collegamenti Web, la posta elettronica e la messaggeria immediata</li>";
pactrl.center3 ="** L'iscrizione a questo servizio disattiva i criteri di accesso a Internet integrati nel router";
pactrl.manageacc ="Gestisci account";
pactrl.center4 ="Gestione dell'account del filtro famiglia";
pactrl.signparental ="Attiva servizio di filtro famiglia";
pactrl.moreinfo ="Ulteriori informazioni";
pactrl.isprovision ="dispositivo in dotazione ";
pactrl.notprovision ="dispositivo non in dotazione ";
pactrl.right1 ="La schermata Filtro famiglia consente l'attivazione e la gestione degli account del filtro famiglia di Linksys. Il servizio Filtro famiglia di Linksys fornisce potenti strumenti per il controllo della disponibilità dei servizi, degli accessi e delle funzioni Internet ed è personalizzabile per ciascun membro della famiglia.";

var satusroute = new Object();
satusroute.localtime ="Non disponibile";

var succ = new Object();
succ.autoreturn ="Tra qualche secondo, verrà visualizzata nuovamente la pagina precedente.";
succ.return_desc = "Tra qualche secondo, verrà visualizzata nuovamente la pagina Aggiornamento sicuro.";
succ.interrupt_desc = "Non interrompere l'aggiornamento. Attendere...";
succ.return_index = "Dopo alcuni secondi, verrà visualizzata la pagina Configurazione di base. ";

var gn = new Object();
gn.gnip="IP rete guest";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nome rete guest (SSID)";
gn.err1="L'indirizzo IP della rete guest non può essere la stessa sottorete dell'indirizzo LAN.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Durata account";
gn.minutes="ore";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
    
gn.title="Accesso guest";
gn.tips0="Password errata, riprovare";
gn.tips1="Inserire la password per accedere a questo hotspot.";
gn.login=" Accesso";
gn.err3="Il SSID wireless 5 G è identico al SSID guest; modificarlo."
gn.err4="Il SSID wireless 2,4 G è identico al SSID guest; modificarlo."
gn.err5="L'indirizzo IP LAN non può essere la stessa sottorete dell'indirizzo IP della rete guest.";
gn.err6="La rete 192.168.33.0/24 (indirizzi IP 192.168.33.0 – 255) è riservata alla rete ospite wireless. Utilizzare un indirizzo di rete diverso.";
gn.tips6=" Per accedere a Internet immettere la password visitatore. Se non si conosce la password, chiedere al proprietario. La password di accesso guest può essere ottenuta mediante Linksys Connect.";
gn.dv="Visualizzazione versione desktop";
gn.mv="Visualizzazione versione mobile";
gn.context="Per accedere a Internet immettere la password visitatore. Se non si conosce la password, chiedere al proprietario. La password di accesso guest può essere ottenuta mediante Linksys Connect.";
gn.nat="L'accesso ospite non sarà disponibile se l'opzione NAT è disattivata.  Salvare le modifiche?";

