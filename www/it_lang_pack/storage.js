/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (solo lettura)";
//--------------------------------------------------------------------------------------------------
var PT = new Object();
PT.type1="FAT2";
PT.type2="NTF32";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var DISK_FUN = new Object();
DISK_FUN.Title = "Gestione disco";
DISK_FUN.Part1 = "Dettagli disco";
DISK_FUN.Part2 = "Formatta disco";
DISK_FUN.Manufacture = "Disco";
DISK_FUN.Partition = "Partizione";
DISK_FUN.FS = "File system";
DISK_FUN.TS = "Capacità" ;
DISK_FUN.FreeS = "Spazio libero";
DISK_FUN.Shares = "Condivisioni";
DISK_FUN.SharesFd = "Cartella condivisioni";
DISK_FUN.CreateShare = "Crea condivisione";
DISK_FUN.Remain = "Non assegnato";
DISK_FUN.TotalSize = "Totale";
DISK_FUN.Detecting = "Rilevamento";
DISK_FUN.MSG1 = "I dischi selezionati contengono informazioni sul server di stampa.\n Impossibile pulire i dischi";
DISK_FUN.MSG2 = "Impossibile pulire i dischi senza pulire anche gli altri dischi che fanno parte dello stesso pool di dischi.";
DISK_FUN.MSG3 = "Nessun disco selezionato per la pulizia";
DISK_FUN.MSG4 = "Attendere. Cancellazione disco in corso.";
DISK_FUN.MSG5 = "Non sono disponibili dischi";
DISK_FUN.MSG6 = "Impossibile rimuovere l'accesso al gruppo amministratori.";
DISK_FUN.MSG7 = "Il dispositivo USB collegato non è supportato.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Non sono disponibili dischi.";
DISK_FUN.AP = "All_Partitions";
DISK_FUN.ENTERNAME = "Immettere il nome di una partizione:";
DISK_FUN.WARNING = "Avvertenza:";
DISK_FUN.FORMATWARN1 = "la formattazione di un disco può richiedere alcuni minuti. Non spegnere";
DISK_FUN.FORMATWARN2 = "il sistema né premere il pulsante di ripristino.";
DISK_FUN.FIRMVER = "Versione firmware";
DISK_FUN.BACKUP = "Backup";
DISK_FUN.WARNING1 = "AVVERTENZA! La cancellazione dei dischi comporta una perdita irreversibile dei dati. Continuare? ";
DISK_FUN.FR = "Cartella";
DISK_FUN.ENTERINTOF= "Entra nella cartella";
DISK_FUN.SELECT = "Selezionare";
DISK_FUN.MPATH = " Il percorso non esiste.";
DISK_FUN.CPATH = "Il percorso della cartella condivisa non esiste.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nome visualizzato.";
SHARE_FUN.ShareAccess = "Accesso condivisioni";
SHARE_FUN.Title = "Gestione condivisioni";
SHARE_FUN.NOTEXIST ="Inesistente.";
SHARE_FUN.MSG1 = "Nessuna condivisione attualmente definita.";
SHARE_FUN.MSG2 = "Il numero di condivisioni supera il limite. È necessario eliminare una condivisione.";
SHARE_FUN.Properties = "Modifica";
SHARE_FUN.FF = "Cartella FTP";
SHARE_FUN.MSF = "Cartella multimediale";
SHARE_FUN.SF = "Cartella condivisa";
SHARE_FUN.DN = "Nome visualizzato.";
SHARE_FUN.patition = "Partizione";
SHARE_FUN.location = "Posizione";
SHARE_FUN.NF = "Nuova cartella";
SHARE_FUN.CF = "Cartella corrente";
SHARE_FUN.AF="Accesso a cartella";
SHARE_FUN.AS = "Accesso";
SHARE_FUN.AG = "Gruppi disponibili";
SHARE_FUN.GWA = "Gruppi con accesso";
SHARE_FUN.GN = "Nome gruppo";
SHARE_FUN.description = "Descrizione";
SHARE_FUN.rw = "lettura e scrittura";
SHARE_FUN.ro = "solo lettura";
SHARE_FUN.NAME ="Nome";
SHARE_FUN.FN = "Nome";
SHARE_FUN.PW = "Password";
SHARE_FUN.CP = "Conferma password";
SHARE_FUN.GM = "Membro gruppo";
SHARE_FUN.AD = "Account disattivato";
SHARE_FUN.SUMMARY="Riepilogo cartelle condivise";
SHARE_FUN.IP = "Indirizzo IP disco condiviso: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Gruppo con accesso";
SA_FUN.OG = "Altro gruppo";
SA_FUN.MSG1 = "Impossibile rimuovere il gruppo amministratori.";
SA_FUN.MSG2 = "Il nome del gruppo è già esistente.";
SA_FUN.FTP_Access ="Accesso FTP";
SA_FUN.Entire_Partition ="Condividi intera partizione";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "amministratore";
AD_FUN.guest = "ospite";
AD_FUN.MN = "&nbsp;Nome computer:";
AD_FUN.WN = "&nbsp;Nome gruppo di lavoro:";
AD_FUN.MD = "&nbsp;Descrizione del computer:";
AD_FUN.APS = "&nbsp;Condivisione di tutte le partizioni:";
AD_FUN.UserName = "Nome utente";
AD_FUN.FULLNAME = "Nome";
AD_FUN.GroupName = "Nome gruppo";
AD_FUN.Basic = "Base";
AD_FUN.UserM = "Gestione utente";
AD_FUN.GroupM = "Gestione gruppo";
AD_FUN.AnymsAcess="Accesso anonimo";
AD_FUN.AnymsFTP="FTP anonimo";
AD_FUN.AnymsDisk="Accesso al disco anonimo";
AD_FUN.readonly="accesso al disco in sola lettura";
AD_FUN.readwrite="accesso al disco in lettura e scrittura";
AD_FUN.svrname="Nome server";
AD_FUN.devname="Nome dispositivo";
AD_FUN.SLIP="Indirizzo IP LAN del server";
AD_FUN.SWIP="Indirizzo IP Internet del server";
AD_FUN.MSG1 = "Nessun utente attualmente definito.";
AD_FUN.MSG2 = "Impossibile eliminare l'amministratore utenti.";
AD_FUN.MSG3 = "Eliminare questo utente?";
AD_FUN.MSG4 = "Eliminare questo gruppo?";
AD_FUN.MSG5 = " Il numero massimo di utenti è stato raggiunto. Per aggiungere un altro utente, eliminarne uno.";
AD_FUN.MSG6 = " Il numero massimo di gruppi è stato raggiunto. Per aggiungere un altro gruppo, eliminarne uno.";
AD_FUN.MSG7 = "Il campo Nome gruppo di lavoro non può essere vuoto.";
AD_FUN.MSG8 = "Il nome del gruppo di lavoro non può essere superiore a 15 caratteri.";
AD_FUN.MSG9 = "Il nome del gruppo di lavoro può contenere solo caratteri alfanumerici/trattini";
AD_FUN.MSG10 = "Il nome del gruppo di lavoro deve iniziare con una lettera";
AD_FUN.MSG11 = "Si è scelto di modificare il nome del computer. La mappatura di rete esistente dovrà essere eseguita nuovamente. \n Continuare?";
AD_FUN.MSG12 = "Il campo Nome computer non può essere vuoto.";
AD_FUN.MSG13 = "Il nome del computer non può essere superiore a 15 caratteri.";
AD_FUN.MSG14 = "Il nome del computer può contenere solo caratteri alfanumerici/trattini";
AD_FUN.MSG15 = "Il nome del computer deve iniziare con una lettera"; 
AD_FUN.MSG16 = "Il nome del gruppo è già esistente.";
AD_FUN.MSG17 = "Il nome utente può contenere solo i seguenti caratteri: alfanumerici, trattini o sottolineature.";
AD_FUN.MSG18 = "Il numero di gruppi supera il limite. È necessario eliminare una condivisione.";
AD_FUN.MSG19 = "La password di conferma non corrisponde.";
AD_FUN.MSG20 = "La password non è valida (la lunghezza deve essere compresa tra 4 e 8 caratteri)";
AD_FUN.MSG21 = "Impossibile ridenominare l'amministratore utenti.";
AD_FUN.MSG22 = "Impossibile ridenominare l'utente guest.";
AD_FUN.MSG23 = "Il campo Nome utente non può essere vuoto.";
AD_FUN.MSG24 = "Immettere un nome account.";
AD_FUN.MSG25 = "Questo nome account esiste già.";
AD_FUN.MSG26 = "Immettere una password.";
AD_FUN.MSG27 = "Il numero di utenti supera il limite. È necessario eliminare una condivisione.";
AD_FUN.MSG28 = "Account utente";
AD_FUN.MSG29 = "Impossibile rimuovere l'utente admin. ";
AD_FUN.MSG30 = "L'utente ";
AD_FUN.MSG31 = " non può essere rimosso. ";
AD_FUN.MSG32 = "Non sono consentiti spazi nella password.";
AD_FUN.MSG33 = " Il Nome visualizzato può contenere solo caratteri alfanumerici/trattini.";
AD_FUN.MSG34 = "Si desidera eliminare l'utente \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Eliminare il gruppo \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "È necessario specificare il Nome dispositivo/server!";
AD_FUN.MSG39 = "Il Nome dispositivo/server può contenere solo caratteri alfanumerici/trattini!";
AD_FUN.MSG40 = "Il nome del dispositivo o del server deve iniziare con una lettera.";
AD_FUN.MSG41 = "Il nome del router non può essere vuoto.";
AD_FUN.MSG42 = "Il nome del router può contenere solo caratteri alfanumerici e trattini.";
AD_FUN.MSG43 = "Il nome del router deve iniziare con una lettera.";
AD_FUN.MSG44 = "Il nome completo dell'utente e la descrizione possono contenere solo i seguenti caratteri: alfanumerici, spazio, trattini o sottolineature.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Proprietà gruppo";
GA_FUN.OU = "Altri utenti";
GA_FUN.UIG = "Utenti del gruppo";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP Media Server";
MS_FUN.svrname = "Nome server multimediale";
MS_FUN.Setup = "Configurazione";
MS_FUN.DB = "Database";
MS_FUN.ServerName = "Nome server:";
MS_FUN.FR= "Cartella";
MS_FUN.SCAN = "Scansione";
MS_FUN.LASTSCAN = "Ora ultima scansione";
MS_FUN.AUTOSCAN = "Scansione automatica di tutto";
MS_FUN.HOUR="Ore";
MS_FUN.MSG1 = "Nessuna condivisione da sottoporre a scansione attualmente definita.";
MS_FUN.MSG2 = "Il numero di condivisioni da sottoporre a scansione supera il limite. È necessario eliminare una condivisione.";
MS_FUN.MSG3 = "La scansione di tutte le partizioni potrebbe richiedere molto tempo. Continuare?";
MS_FUN.MSG4 = "Attendere. Scansione disco in corso.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Elenco partizioni";
SP_FUN.ST = "Selezionare";
SP_FUN.MSG1 = "Cartella di condivisione aggiunta.";
SP_FUN.MSG2 = "Cartella di condivisione FTP?aggiunta.";
SP_FUN.MSG3 = "Questo percorso è già esistente nell'elenco di scansione. Non può essere aggiunto due volte.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "Server FTP";
FS_FUN.svrname = "Nome server FTP";
FS_FUN.Share = "Condivisione";
FS_FUN.EDIT = "Modifica";
FS_FUN.MSG1 = "Nessun accesso FTP attualmente definito.";
FS_FUN.ACCESS = "Accesso";
FS_FUN.PO = "Porta FTP:";
FS_FUN.FTP_CHARACTERSET = "Codifica:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Cinese Semplificato(GB18030)";
FS_FUN.BIG5="Cinese Tradizionale(Big5)";
FS_FUN.CP1258="Vietnamita(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "questa radice non consente di creare una nuova cartella.";
FS_FUN.ALERT2 = "Immettere un nome di cartella valido.";
FS_FUN.ALERT3 = "Immettere un nome di condivisione valido.";
FS_FUN.ALERT4 = " Il nome visualizzato è già presente nell'elenco di condivisioni.";
FS_FUN.ALERT5 = "Immettere un percorso di condivisione valido.";
FS_FUN.FTPFOLDER = "Cartella FTP";
FS_FUN.DISPNAME = "Nome visualizzato.";
FS_FUN.UNIQUE = "Deve essere univoco.";
FS_FUN.PAR = "Partizione";
FS_FUN.LOCA = "Posizione";
FS_FUN.NEWFOLDER = "Nuova cartella";
FS_FUN.CURRENTFOLD = "Cartella corrente:";
FS_FUN.ACCESS = "Accesso";
FS_FUN.AVAILGROUP =  "Gruppi disponibili";
FS_FUN.GROUPACCESS  = "Gruppi con accesso";
FS_FUN.INTERNET = "Accesso Internet";
FS_FUN.SUMMARY = "Riepilogo FTP";
FS_FUN.ALERT6 = "La porta FTP non può essere vuota. ";
FS_FUN.ALERT7 = "Selezionare cartella di condivisione FTP. ";
FS_FUN.UNIQUE = " (Deve essere univoca). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Richiedi disco";
CD_FUN.DISK = "Disco";
CD_FUN.MAM =  "Produttore e modello";
CD_FUN.PS = "Dimensioni";
CD_FUN.NPN = "Nome nuova partizione:";
CD_FUN.MSG1 = "AVVERTENZA: l'opzione Richiedi disco cancellerà tutto il contenuto del disco.\nContinuare?";
CD_FUN.MSG2 = "AVVERTENZA: il nome della partizione deve essere scritto in lettere maiuscole\n\n Il nome del disco '";
CD_FUN.MSG3 = "' verrà convertito in lettere maiuscole. Continuare?";
CD_FUN.MSG4 = "Il nome della partizione può contenere solo caratteri alfanumerici/trattini/sottolineature";
CD_FUN.MSG5 = "Il campo relativo al nome del nuovo disco non può essere vuoto";
CD_FUN.MSG6 = "AVVERTENZA: il nome del disco FAT32 non può superare gli 11 caratteri\n\n Il nome del disco '";
CD_FUN.MSG7 = "' verrà troncato a 11 caratteri. Continuare?";
CD_FUN.DISK_MSG = " non esiste.\n";
CD_FUN.NODISKS = "Nessun disco collegato";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Il nome utente può contenere solo caratteri alfanumerici/trattini/sottolineature";
GP_FUN.MSG2 = "Il numero di gruppi supera il limite. È necessario eliminare una condivisione.";
GP_FUN.MSG3 = "Il nome del gruppo è già esistente.";
GP_FUN.MSG4 = "Il campo Nome gruppo non può essere vuoto.";
GP_FUN.MSG5 = "Il nome del gruppo può contenere solo caratteri alfanumerici/trattini/sottolineature";
GP_FUN.GA = "Account gruppo";
GP_FUN.GN = "Nome gruppo";
GP_FUN.DES = "Descrizione";
GP_FUN.ACCESS = "Accesso";
GP_FUN.RNW = "lettura e scrittura";
GP_FUN.RO = "solo lettura";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Proprietà condivisioni";
ShareP_FUN.SF = "Cartella di condivisione";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Proprietà utente";
UP_FUN.FName = "Nome";
UP_FUN.PWD = "Password";
UP_FUN.Reconfirm = "Confermare la password";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Backup dei dati";
DB_FUN.SELJOB = "Selezionare il numero del processo";
DB_FUN.JOBNAME = "Nome processo";
DB_FUN.BType ="Tipo di backup";
DB_FUN.Direction = "Direzione";
DB_FUN.WRTSL54GS = "Dispositivo WRTSL54GS";
DB_FUN.RD = "Dispositivo remoto";
DB_FUN.DAYS = "Giorni";
DB_FUN.TIMES = "Ora";
DB_FUN.LOGIN = "Nome di accesso";
DB_FUN.sunday = "&nbsp;Dom";
DB_FUN.Mon = "&nbsp;Lun"; 
DB_FUN.Tue = "&nbsp;Mar"; 
DB_FUN.Wed = "&nbsp;Mer";
DB_FUN.Thu = "&nbsp;Gio";
DB_FUN.Fri = "&nbsp;Ven";
DB_FUN.Sat = "&nbsp;Sab";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Elenco cartelle";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Cancellazione rapida";
CMD.FullErase = "Cancellazione completa";
CMD.EraseDisk = "Formatta disco";
CMD.Refresh = "Aggiorna";
CMD.Claim = "Richiedi";
CMD.SAVESET = "Salva impostazioni";
CMD.SafeRemove = "Rimozione sicura disco";
CMD.CreateShare = "Crea condivisione";
CMD.ModifyShare = "Modifica condivisione";
CMD.SELPart = "Seleziona partizione";
CMD.Modify = "Modifica";
CMD.Delete = "Elimina";
CMD.RO = ">> Solo lettura";
CMD.RW = ">> Lettura/Scrittura";
CMD.RM = "<< Rimuovi";
CMD.CANCELCHANGE = "Annulla modifiche";
CMD.CT = "Continua";
CMD.CLOSE = "Chiudi";
CMD.CreateNewUser = "Crea nuovo utente";
CMD.CreateNewGroup = "Crea nuovo gruppo";
CMD.CreateNewShare = "Crea nuova condivisione";
CMD.JG = ">> Partecipa al gruppo ";
CMD.SAP = "Esegui la scansione di tutto ";
CMD.SPS = "Specifica cartella per la scansione";
CMD.UOL = " Livello superiore ";
CMD.SP = "Seleziona partizione";
CMD.FSA = "Specifica cartella per l'accesso";
CMD.Claim = "Richiedi";
CMD.CL = "Cancella";
CMD.CANCEL = "Annulla";
CMD.CGroup = "Crea gruppo";
CMD.CUser = "Crea utente";
CMD.MUser = "Modifica utente";
CMD.NOPWD = "NESSUNA PASSWORD";
CMD.DTE = "Elimina questa voce";
CMD.ALERT1 = "Attendere. Rinnovo disco in corso. ";
CMD.CREATE = "Crea";
CMD.UPFOLDER = "Torna alla cartella superiore";
CMD.ALLFOLDER = "Tutte le cartelle";
CMD.FORMAT = " Formato ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Attiva";
OPT.item_Disable = "Disattiva";
OPT.item_ALLP = "Tutte le partizioni";
OPT.item_SF = "Specifica cartella";
OPT.item_Everyday = "Tutti i giorni";
OPT.item_opt1 = "Dal dispositivo WRTSL54GS a un altro dispositivo";
OPT.item_opt2 = "Da un altro dispositivo al dispositivo WRTSL54GS"; 
OPT.item_opt3 = "Immettere i dati di accesso per accedere";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Altro...";
HELPMSG.DISK1 = "Consente di visualizzare i dettagli del disco collegato al router.";
HELPMSG.DISK2 = "Per cancellare un disco, fare clic sulla casella di controllo accanto al nome del disco.";
HELPMSG.SHARE1 = "Consente di visualizzare i dettagli delle condivisioni create.";
HELPMSG.SHARE2 = "Per creare una nuova condivisione, fare clic sul pulsante Crea nuova condivisione.";
HELPMSG.AD1 = "Il nome del router.";
HELPMSG.AD2 = "Il nome dei computer in rete.";
HELPMSG.AD3 = "Gli utenti sono elencati nella tabella.";
HELPMSG.AD4 = "Per creare un nuovo utente, fare clic sul pulsante Crea nuovo utente.";
HELPMSG.AD5 = "I gruppi sono elencati nella tabella.";
HELPMSG.AD6 = "Per creare un nuovo gruppo, fare clic sul pulsante Crea nuovo gruppo.";
HELPMSG.AD7 = "Immettere il nome del gruppo. Il nome del gruppo non può contenere più di 12 caratteri.";
HELPMSG.MS1 = "Consente di visualizzare il nome utilizzato dall'adattatore per file multimediali per identificare il server.";
HELPMSG.MS2 = "Fare clic su questo pulsante per eseguire la scansione di tutte le partizioni del disco USB.";
HELPMSG.MS3 = "Fare clic su questo pulsante per selezionare una specifica cartella o partizione da sottoporre a scansione.";
HELPMSG.CD1 = "Per creare una partizione sul disco vuoto che verrà formattato come FAT32.";
HELPMSG.ShareP1 = "Immettere il nome della condivisione.";
HELPMSG.ShareP2 = "La cartella contenuta in questa condivisione. Fare clic su Seleziona partizione per effettuare una scelta dall'elenco delle cartelle disponibili.";
HELPMSG.UP1 = "Immettere il nome utente. Il nome utente non può contenere più di 20 caratteri.";
HELPMSG.UP2 = "Immettere la password. La password può avere una lunghezza compresa tra 4 e 8 caratteri.";
HELPMSG.UP3 = "Immettere nuovamente la password per confermare.";
HELPMSG.UP4 = "Gruppo";
HELPMSG.UP5 = "Selezionare il gruppo nel quale si desidera inserire l'utente.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disco";
FUNST.Share="Condivisione";
FUNST.MS="Server multimediale";
FUNST.FTP = "Server FTP";

var NAS = new Object();
NAS.MSG1 = "Applicazione impostazioni account riuscita. ";
NAS.MSG2 = "L'account %s esiste già. ";
NAS.MSG3 = "Impossibile applicare le impostazioni. ";
NAS.MSG4 = "Eliminazione condivisione da sottoporre a scansione riuscita. ";
NAS.MSG5 = "Impossibile aggiornare il database multimediale. ";
NAS.MSG6 = "Impossibile aggiornare il database multimediale. La condivisione non esiste. ";
NAS.MSG7 = "Impossibile aggiornare il database multimediale. ";
NAS.MSG8 = "Aggiornamento database riuscito. ";
NAS.MSG9 = "Impossibile aggiornare il database multimediale. Non esiste alcuna partizione. ";
NAS.MSG10 = "Aggiornamento database riuscito. ";
NAS.MSG11 = "Aggiunta condivisione da sottoporre a scansione riuscita. ";
NAS.MSG12 = "Nome condivisione %s riservato. Scegliere un altro nome. ";
NAS.MSG13 = "Modifica condivisione %s riuscita. ";
NAS.MSG14 = "Creazione condivisione %s riuscita. ";
NAS.MSG15 = "Errore durante il recupero del disco %s: il disco \"%s\" non esiste. ";
NAS.MSG16 = "Errore durante il recupero del disco: non è stato specificato un nome nuovo per il disco. ";
NAS.MSG17 = "Il nome del disco specificato, \"%s\", non è valido. ";
NAS.MSG18 = "Disco recuperato con successo. ";
NAS.MSG19 = "Errore durante il recupero del disco %s: il recupero non è riuscito. ";
NAS.MSG20 = "Errore durante l'eliminazione della condivisione %s: la condivisione %s è riservata per l'uso da parte del Controller dominio primario. Non può essere eliminata separatamente; se il Controller dominio primario non è attivo, verrà rimossa automaticamente. ";
NAS.MSG21 = "Eliminazione condivisione %s riuscita";
NAS.MSG23 = "Modifica condivisione %s riuscita. ";
NAS.MSG24 = "Creazione condivisione %s riuscita. ";
NAS.MSG25 = "Nome condivisione %s riservato. Scegliere un altro nome. ";
NAS.MSG30 = "Errore cancellazione dischi: nessun disco specificato per la cancellazione. ";
NAS.MSG31 = "Errore cancellazione dischi: memoria insufficiente durante la cancellazione dei dischi. ";
NAS.MSG32 = "Errore cancellazione dischi: impossibile cancellare disco \"%s\".";
NAS.MSG33 = "Errore cancellazione dischi: memoria insufficiente. ";
NAS.MSG34 = "Cancellazione di tutti i dischi specificati riuscita. ";
NAS.MSG35 = "Nessun disco specificato per la cancellazione; nessuna operazione eseguita. ";
NAS.MSG36 = "Errore cancellazione dischi: memoria insufficiente durante la cancellazione dei dischi. ";
NAS.MSG37 = "Errore cancellazione dischi: nessun disco specificato per la cancellazione. ";
NAS.MSG38 = "Cancellazione di tutti i dischi specificati riuscita. ";
NAS.MSG39 = "Nessun disco specificato per la cancellazione; nessuna operazione eseguita. ";
NAS.MSG40 = "Impossibile scollegare il disco \"%s\" in modo sicuro. ";
NAS.MSG41 = "Disconnessione del disco riuscita. ";
NAS.MSG42 = "Modifica delle proprietà di accesso per la condivisione %s riuscita. ";
NAS.MSG43 = "Impossibile applicare le impostazioni account. ";
NAS.MSG44 = "Applicazione impostazioni account riuscita. ";
NAS.MSG45 = "I valori immessi non sono validi. Riprovare. ";
NAS.MSG46 = "Impostazioni configurate correttamente. ";
NAS.MSG47 = "Impossibile %s dominio %s (errore %s); impossibile riaccedere al dominio %s (errore %s), che appartiene nuovamente al gruppo di lavoro %s. ";
NAS.MSG48 = "Impossibile %s dominio %s (errore %s) che appartiene nuovamente al gruppo di lavoro %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error Impossibile %s dominio %s (errore %s) che appartiene nuovamente al gruppo di lavoro %s. ";
NAS.MSG50 = "Accesso al dominio %s riuscito. ";
NAS.MSG51 = "Accesso al gruppo di lavoro %s riuscito. ";
NAS.MSG52 = "Impossibile applicare le impostazioni. ";
NAS.MSG53 = "Eliminazione condivisione FTP riuscita. ";
NAS.MSG54 = "Il disco è occupato.";










