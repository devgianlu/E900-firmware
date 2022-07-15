/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (skrivebeskyttet)";
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
DISK_FUN.Title = "Diskadministration";
DISK_FUN.Part1 = "Diskoplysninger";
DISK_FUN.Part2 = "Formater disk";
DISK_FUN.Manufacture = "Disk";
DISK_FUN.Partition = "Partition";
DISK_FUN.FS = "Filsystem";
DISK_FUN.TS = "Kapacitet";
DISK_FUN.FreeS = "Fri plads";
DISK_FUN.Shares = "Delinger";
DISK_FUN.SharesFd = "Delingsmapper";
DISK_FUN.CreateShare = "Opret deling";
DISK_FUN.Remain = "Ikke-tildelt";
DISK_FUN.TotalSize = "Ialt";
DISK_FUN.Detecting = "Registrerer";
DISK_FUN.MSG1 = "De valgte diske indeholder printerserveroplysninger.\n Du kan ikke slette disken(e)";
DISK_FUN.MSG2 = "Du kan ikke slette diske uden at slette andre diske, der deltager i samme diskklynge";
DISK_FUN.MSG3 = "Ingen diske valgt til sletning";
DISK_FUN.MSG4 = "Sletter disken. Vent et �jeblik!";
DISK_FUN.MSG5 = "Ingen diske tilg�ngelige";
DISK_FUN.MSG6 = "Administratorgruppeadgangen kan ikke fjernes";
DISK_FUN.MSG7 = "Den tilsluttede USB-enhed underst�ttes ikke.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Ingen diske tilg�ngelige.";
DISK_FUN.AP = "All_Partitions";
DISK_FUN.ENTERNAME = "Indtast et partitionsnavn:";
DISK_FUN.WARNING = "Advarsel:";
DISK_FUN.FORMATWARN1 = "Det kan tage nogle minutter at formatere disken. Sluk ikke for";
DISK_FUN.FORMATWARN2 = "str�mmen, og tryk ikke p� nulstillingsknappen.";
DISK_FUN.FIRMVER = "Firmware-version";
DISK_FUN.BACKUP = "Sikkerhedskopi";
DISK_FUN.WARNING1 = "ADVARSEL! Sletning af diske f�rer til uoprettelige tab af data. Vil du forts�tte? ";
DISK_FUN.FR = "Mappe";
DISK_FUN.ENTERINTOF= "G� ind i mappe";
DISK_FUN.SELECT = "V�lg";
DISK_FUN.MPATH = " Denne placering findes ikke.";
DISK_FUN.CPATH = "Denne delte mappeplacering findes ikke.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Visningsnavn";
SHARE_FUN.ShareAccess = "Delingsadgang";
SHARE_FUN.Title = "Delingsadministration";
SHARE_FUN.NOTEXIST ="Eksisterer ikke!";
SHARE_FUN.MSG1 = "Der er i �jeblikket ingen definerede delinger.";
SHARE_FUN.MSG2 = "For mange delinger! Slet f�rst en deling.";
SHARE_FUN.Properties = "Rediger";
SHARE_FUN.FF = "FTP-floader";
SHARE_FUN.MSF = "Mediemappe";
SHARE_FUN.SF = "Delingsmappe";
SHARE_FUN.DN = "Visningsnavn";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Placering";
SHARE_FUN.NF = "Ny mappe";
SHARE_FUN.CF = "Aktuel mappe";
SHARE_FUN.AF="Adgang til mappe";
SHARE_FUN.AS = "Adgang";
SHARE_FUN.AG = "Tilg�ngelige grupper";
SHARE_FUN.GWA = "Grupper med adgang";
SHARE_FUN.GN = "Gruppenavn";
SHARE_FUN.description = "Beskrivelse";
SHARE_FUN.rw = "l�s og skriv";
SHARE_FUN.ro = "skrivebeskyttet";
SHARE_FUN.NAME ="Navn";
SHARE_FUN.FN = "Fuldt navn";
SHARE_FUN.PW = "Adgangskode";
SHARE_FUN.CP = "Bekr�ft adgangskode";
SHARE_FUN.GM = "Gruppemedlem";
SHARE_FUN.AD = "Konto deaktiveret";
SHARE_FUN.SUMMARY="Oversigt over delte mapper";
SHARE_FUN.IP = "IP-adresse for delt disk: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Gruppe med adgang";
SA_FUN.OG = "Anden gruppe";
SA_FUN.MSG1 = "Administratorgruppen kan ikke fjernes!";
SA_FUN.MSG2 = "Gruppenavnet eksisterer i forvejen!";
SA_FUN.FTP_Access ="FTP-adgang";
SA_FUN.Entire_Partition ="Del hele partitionen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "g�st";
AD_FUN.MN = "&nbsp;Maskinnavn:";
AD_FUN.WN = "&nbsp;Arbejdsgruppenavn:";
AD_FUN.MD = "&nbsp;Maskinbeskrivelse:";
AD_FUN.APS = "&nbsp;Deling af alle partitioner:";
AD_FUN.UserName = "Brugernavn";
AD_FUN.FULLNAME = "Fuldt navn";
AD_FUN.GroupName = "Gruppenavn";
AD_FUN.Basic = "Generelt";
AD_FUN.UserM = "Brugeradministration";
AD_FUN.GroupM = "Gruppeadministration";
AD_FUN.AnymsAcess="Anonym adgang";
AD_FUN.AnymsFTP="Anonym FTP";
AD_FUN.AnymsDisk="Anonym diskadgang";
AD_FUN.readonly="skrivebeskyttet diskadgang";
AD_FUN.readwrite="l�s og skriv-diskadgang";
AD_FUN.svrname="Servernavn";
AD_FUN.devname="Enhedsnavn";
AD_FUN.SLIP="Serverens LAN IP-adresse";
AD_FUN.SWIP="Serverens internet IP-adresse";
AD_FUN.MSG1 = "Der er ikke defineret nogen brugere i �jeblikket.";
AD_FUN.MSG2 = "Brugeradministratoren kan ikke slettes!";
AD_FUN.MSG3 = "Er du sikker p�, at du vil slette denne bruger?";
AD_FUN.MSG4 = "Er du sikker p�, at du vil slette denne gruppe?";
AD_FUN.MSG5 = "Det maksimale antal brugere er n�et! For at kunne tilf�je en bruger mere, skal du slette en f�rst.";
AD_FUN.MSG6 = "Det maksimale antal grupper er n�et! For at kunne tilf�je en gruppe mere, skal du slette en f�rst.";
AD_FUN.MSG7 = "Arbejdsgruppenavn m� ikke v�re tomt!";
AD_FUN.MSG8 = "Arbejdsgruppenavn m� ikke indeholde mere end 15 tegn!";
AD_FUN.MSG9 = "Arbejdsgruppenavn m� kun indeholde alfanumeriske tegn/bindestreger";
AD_FUN.MSG10 = "Arbejdsgruppenavn skal begynde med et bogstav";
AD_FUN.MSG11 = "Du har valgt at redigere maskinnavn. Tilknytning af eksisterende netv�rk skal �ndres. \n Vil du forts�tte?";
AD_FUN.MSG12 = "Maskinnavn m� ikke v�re tomt!";
AD_FUN.MSG13 = "Maskinnavn m� ikke indeholde mere end 15 tegn!";
AD_FUN.MSG14 = "Maskinnavn m� kun indeholde alfanumeriske tegn/bindestreger";
AD_FUN.MSG15 = "Maskinnavn skal begynde med et bogstav"; 
AD_FUN.MSG16 = "Brugernavnet eksisterer i forvejen.";
AD_FUN.MSG17 = "Brugernavnet m� kun indeholde f�lgende tegn: alfanumeriske tegn, tankestreger eller understregningstegn.";
AD_FUN.MSG18 = "For mange grupper! Slet f�rst en deling.";
AD_FUN.MSG19 = "Den bekr�ftede adgangskode matcher ikke.";
AD_FUN.MSG20 = "Ugyldig adgangskode! (min. 4, maks. 8 tegn)";
AD_FUN.MSG21 = "Brugeradministratoren m� ikke omd�bes!";
AD_FUN.MSG22 = "G�stebrugeren m� ikke omd�bes!";
AD_FUN.MSG23 = "Brugernavn m� ikke v�re tomt!";
AD_FUN.MSG24 = "Du skal indtaste et kontonavn!";
AD_FUN.MSG25 = "Navnet p� kontoen findes allerede!";
AD_FUN.MSG26 = "Du skal indtaste en adgangskode!";
AD_FUN.MSG27 = "For mange brugere! Slet f�rst en deling.";
AD_FUN.MSG28 = "Brugerkonto";
AD_FUN.MSG29 = "Brugeradministratoren kan ikke fjernes! ";
AD_FUN.MSG30 = "Brugeren ";
AD_FUN.MSG31 = " kan ikke fjernes! ";
AD_FUN.MSG32 = "Mellemrum er ikke tilladt i adgangskoden.";
AD_FUN.MSG33 = " Visningsnavn m� kun indeholde alfanumeriske tegn/bindestreger. ";
AD_FUN.MSG34 = "Vil du slette brugeren \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Vil du slette gruppen \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Navn p� enhed/server skal udfyldes!";
AD_FUN.MSG39 = "Navn p� enhed/server m� kun indeholde alfanumeriske tegn/tankestreger!";
AD_FUN.MSG40 = "Enheds-/servernavnet skal starte med et bogstav!";
AD_FUN.MSG41 = "Routernavnet m� ikke v�re tomt.";
AD_FUN.MSG42 = "Routernavnet m� kun indeholde alfanumeriske tegn og tankestreger.";
AD_FUN.MSG43 = "Routernavnet skal begynde med et bogstav.";
AD_FUN.MSG44 = "Brugerens fulde navn og beskrivelsen m� kun indeholde f�lgende tegn: alfanumeriske tegn, mellemrum, tankestreger og understregningstegn.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Gruppeegenskaber";
GA_FUN.OU = "Andre brugere";
GA_FUN.UIG = "Brugere i gruppe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP-medieserver";
MS_FUN.svrname = "Navn p� medieserver";
MS_FUN.Setup = "Konfiguration";
MS_FUN.DB = "Database";
MS_FUN.ServerName = "Servernavn:";
MS_FUN.FR= "Mappe";
MS_FUN.SCAN = "Scan";
MS_FUN.LASTSCAN = "Sidste scanning udf�rt";
MS_FUN.AUTOSCAN = "Scan automatisk hver";
MS_FUN.HOUR="Timer";
MS_FUN.MSG1 = "Der er i �jeblikket ikke defineret nogen scanningsdelinger.";
MS_FUN.MSG2 = "For mange scanningsdelinger! Slet f�rst en deling.";
MS_FUN.MSG3 = "Scanning af alle partitioner kan tage lang tid at gennemf�re. Vil du forts�tte?";
MS_FUN.MSG4 = "Scanner disken. Vent et �jeblik!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partitionsliste";
SP_FUN.ST = "V�lg";
SP_FUN.MSG1 = "Delingsmappe tilf�jet.";
SP_FUN.MSG2 = "FTP-delingsmappe tilf�jet.";
SP_FUN.MSG3 = "Denne sti eksisterer allerede p� scanningslisten! Den kan ikke tilf�jes to gange.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "FTP-server";
FS_FUN.svrname = "Navn p� FTP-server";
FS_FUN.Share = "Del";
FS_FUN.EDIT = "Rediger";
FS_FUN.MSG1 = "Der er i �jeblikket ikke angivet FTP-adgang.";
FS_FUN.ACCESS = "Adgang";
FS_FUN.PO = "FTP-port:";
FS_FUN.FTP_CHARACTERSET = "Kodning:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Forenklet kinesisk(GB18030)";
FS_FUN.BIG5="Traditionelt kinesisk(Big5)";
FS_FUN.CP1258="Vietnamesisk(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Denne rod har ikke lov til at oprette nye mapper!";
FS_FUN.ALERT2 = "Indtast et gyldigt mappenavn!";
FS_FUN.ALERT3 = "Indtast et gyldigt delingsnavn.";
FS_FUN.ALERT4 = "Visningsnavnet findes allerede p� delingslisten!";
FS_FUN.ALERT5 = "Indtast et gyldigt delingsnavn.";
FS_FUN.FTPFOLDER = "FTP-mappe";
FS_FUN.DISPNAME = "Visningsnavn";
FS_FUN.UNIQUE = "Skal v�re entydigt.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Placering";
FS_FUN.NEWFOLDER = "Ny mappe";
FS_FUN.CURRENTFOLD = "Aktuel mappe:";
FS_FUN.ACCESS = "Adgang";
FS_FUN.AVAILGROUP =  "Tilg�ngelige grupper";
FS_FUN.GROUPACCESS  = "Grupper med adgang";
FS_FUN.INTERNET = "Internetadgang";
FS_FUN.SUMMARY = "FTP-oversigt";
FS_FUN.ALERT6 = "FTP-port m� ikke v�re tom! ";
FS_FUN.ALERT7 = "V�lg FTP-delingsmappe! ";
FS_FUN.UNIQUE = "Skal v�re entydig(t). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Overtag disk";
CD_FUN.DISK = "Disk";
CD_FUN.MAM =  "M�rke og model";
CD_FUN.PS = "Fysisk st�rrelse";
CD_FUN.NPN = "Navn p� ny partition:";
CD_FUN.MSG1 = "ADVARSEL! Overtag disk destruerer alt indhold p� disken.\nVil du forts�tte?";
CD_FUN.MSG2 = "ADVARSEL: Partitionsnavn skal skrives med STORE BOGSTAVER\n\n Dit disknavn '";
CD_FUN.MSG3 = "' konverteres til store bogstaver. Vil du forts�tte?";
CD_FUN.MSG4 = "Paratitionsnavn m� kun indeholde alfanumeriske tegn/bindestreger/understregninger";
CD_FUN.MSG5 = "Nyt disknavn m� ikke v�re tomt";
CD_FUN.MSG6 = "ADVARSEL: FAT32-disknavne m� ikke indeholde mere end 11 tegn\n\n Dit disknavn '";
CD_FUN.MSG7 = "' vil blive forkortet til 11 tegn. Vil du forts�tte?";
CD_FUN.DISK_MSG = " eksisterer ikke.\n";
CD_FUN.NODISKS = "Ingen diske tilknyttet";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Brugernavn m� kun indeholde alfanumeriske tegn/bindestreger/understregninger";
GP_FUN.MSG2 = "For mange grupper! Slet f�rst en deling.";
GP_FUN.MSG3 = "Gruppen eksisterer allerede!";
GP_FUN.MSG4 = "Gruppenavn m� ikke v�re tomt!";
GP_FUN.MSG5 = "Gruppenavn m� kun indeholde alfanumeriske tegn/bindestreger/understregninger";
GP_FUN.GA = "Gruppekonto";
GP_FUN.GN = "Gruppenavn";
GP_FUN.DES = "Beskrivelse";
GP_FUN.ACCESS = "Adgang";
GP_FUN.RNW = "l�s og skriv";
GP_FUN.RO = "skrivebeskyttet";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Delingsegenskaber";
ShareP_FUN.SF = "Delingsmappe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Brugeregenskaber";
UP_FUN.FName = "Navn";
UP_FUN.PWD = "Adgangskode";
UP_FUN.Reconfirm = "Genindtast for at bekr�fte";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Datasikkerhedskopiering";
DB_FUN.SELJOB = "V�lg jobnummer";
DB_FUN.JOBNAME = "Jobnavn";
DB_FUN.BType ="Sikkerhedskopitype";
DB_FUN.Direction = "Retning";
DB_FUN.WRTSL54GS = "Denne WRTSL54GS";
DB_FUN.RD = "Ekstern enhed";
DB_FUN.DAYS = "Dage";
DB_FUN.TIMES = "Tidspunkter";
DB_FUN.LOGIN = "Logon-navn";
DB_FUN.sunday = "&nbsp;S�n";
DB_FUN.Mon = "&nbsp;Man"; 
DB_FUN.Tue = "&nbsp;Tir"; 
DB_FUN.Wed = "&nbsp;Ons";
DB_FUN.Thu = "&nbsp;Tor";
DB_FUN.Fri = "&nbsp;Fre";
DB_FUN.Sat = "&nbsp;L�r";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Mappeliste";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Lynsletning";
CMD.FullErase = "Komplet sletning";
CMD.EraseDisk = "Formater disk";
CMD.Refresh = "Opdater";
CMD.Claim = "Overtag";
CMD.SAVESET = "Gem indstillinger";
CMD.SafeRemove = "Sikker fjernelse af disken";
CMD.CreateShare = "Opret deling";
CMD.ModifyShare = "Rediger deling";
CMD.SELPart = "V�lg partition";
CMD.Modify = "�ndre";
CMD.Delete = "Slet";
CMD.RO = ">> Skrivebeskyttet";
CMD.RW = ">> L�s/skriv";
CMD.RM = "<< Fjern";
CMD.CANCELCHANGE = "Annuller �ndringer";
CMD.CT = "Forts�t";
CMD.CLOSE = "Luk";
CMD.CreateNewUser = "Opret ny bruger";
CMD.CreateNewGroup = "Opret ny gruppe";
CMD.CreateNewShare = "Opret ny deling";
CMD.JG = ">> Tilmeld gruppe ";
CMD.SAP = "Scan alle ";
CMD.SPS = "Angiv mappe, der skal scannes";
CMD.UOL = " Et niveau op ";
CMD.SP = "V�lg partition";
CMD.FSA = "Angiv mappe, der skal v�re adgang til";
CMD.Claim = "Overtag";
CMD.CL = "Ryd";
CMD.CANCEL = "Annuller";
CMD.CGroup = "Opret gruppe";
CMD.CUser = "Opret bruger";
CMD.MUser = "Rediger bruger";
CMD.NOPWD = "INGEN ADGANGSKODE";
CMD.DTE = "Slet denne indtastning";
CMD.ALERT1 = "Fornyer disken. Vent et �jeblik! ";
CMD.CREATE = " Opret";
CMD.UPFOLDER = "G� tilbage til den �verste mappe";
CMD.ALLFOLDER = "Alle mapper";
CMD.FORMAT = "Format";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Aktiver";
OPT.item_Disable = "Deaktiver";
OPT.item_ALLP = "Alle delinger";
OPT.item_SF = "Angiv mappe";
OPT.item_Everyday = "Dagligt";
OPT.item_opt1 = "Fra denne WRTSL54GS til en anden enhed";
OPT.item_opt2 = "Fra en anden enhed til denne WRTSL54GS"; 
OPT.item_opt3 = "Adgang kr�ver login";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Mere...";
HELPMSG.DISK1 = "Viser oplysninger for den disk, som i �jeblikket er sluttet til routeren.";
HELPMSG.DISK2 = "Du kan slette en disk ved at markere afkrydsningsfeltet ud for disken.";
HELPMSG.SHARE1 = "Viser en oversigt over de delinger, du har oprettet for nyligt.";
HELPMSG.SHARE2 = "Klik p� knappen Opret ny deling for at oprette en ny deling.";
HELPMSG.AD1 = "Navnet p� denne router.";
HELPMSG.AD2 = "Navnene p� det computere, der er i netv�rket.";
HELPMSG.AD3 = "Brugerne er vist i tabelform.";
HELPMSG.AD4 = "Hvis du vil oprette en ny bruger, skal du klikke p� knappen Opret ny bruger.";
HELPMSG.AD5 = "Grupperne er vist i tabelform.";
HELPMSG.AD6 = "Hvis du vil oprette en ny bruger, skal du klikke p� knappen Opret ny gruppe.";
HELPMSG.AD7 = "Indtast gruppenavnet, der kan v�re op til 12 tegn langt";
HELPMSG.MS1 = "Viser det navn, som medieadapteren anvender til at identificere serveren.";
HELPMSG.MS2 = "N�r du klikker p� denne knap, scannes alle partitioner af USB-disken.";
HELPMSG.MS3 = "Brug denne knap til at v�lge den specifikke mappe eller partition, som du vil scanne.";
HELPMSG.CD1 = "Hvis du vil oprette en partition p� den tomme disk, der vil blive formateret som FAT32.";
HELPMSG.ShareP1 = "Indtast navnet p� delingen.";
HELPMSG.ShareP2 = "Det er denne mappe, som denne deling vil indeholde. Klik p� V�lg partition for at v�lge fra en oversigt over tilg�ngelige mapper.";
HELPMSG.UP1 = "Indtast brugernavnet. Brugernavnet kan v�re op til 20 tegn langt.";
HELPMSG.UP2 = "Indtast adgangskode  Adgangskoden skal indeholde min. 4, maks. 8 tegn.";
HELPMSG.UP3 = "Indtast adgangskoden igen for at bekr�fte den.";
HELPMSG.UP4 = "Gruppe";
HELPMSG.UP5 = "V�lg den gruppe, som brugeren skal placeres i.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disk";
FUNST.Share="Del";
FUNST.MS="Medieserver";
FUNST.FTP = "FTP-server";

var NAS = new Object();
NAS.MSG1 = "Anvendelse af kontoindstillinger lykkedes. ";
NAS.MSG2 = "Kontoen %s eksisterer allerede! ";
NAS.MSG3 = "Kunne ikke anvende indstillinger! ";
NAS.MSG4 = "Sletning af scanningsdeling lykkedes. ";
NAS.MSG5 = "Kunne ikke opdatere mediedatabase! ";
NAS.MSG6 = "Kunne ikke opdatere mediedatabase! Deling eksisterer ikke. ";
NAS.MSG7 = "Kunne ikke opdatere mediedatabase! ";
NAS.MSG8 = "Opdatering af database lykkedes. ";
NAS.MSG9 = "Kunne ikke opdatere mediedatabase. Der eksisterer ingen partition! ";
NAS.MSG10 = "Opdatering af database lykkedes. ";
NAS.MSG11 = "Tilf�jelse af scanningsdeling lykkedes. ";
NAS.MSG12 = "Delingsnavnet %s er reserveret. V�lg et andet navn. ";
NAS.MSG13 = "�ndring af deling %s lykkedes. ";
NAS.MSG14 = "Oprettelse af deling %s lykkedes. ";
NAS.MSG15 = "Fejl ved overtagelse af disk %s: Disk \"%s\" eksisterer ikke. ";
NAS.MSG16 = "Fejl ved overtagelse af disk: Du angav ikke et nyt navn for disken. ";
NAS.MSG17 = "Det angivne disknavn, \"%s\", er ikke gyldigt. ";
NAS.MSG18 = "Overtagelse af disken lykkedes. ";
NAS.MSG19 = "Fejl ved overtagelse af disk %s: Fors�get p� overtagelse mislykkedes. ";
NAS.MSG20 = "Fejl ved sletning af deling %s: Deling %s er en speciel deling, der er reserveret til brug af Primary Domain Controller-funktionen. Den kan ikke slettes separat, men hvis Primary Domain Controller er slukket, fjernes den automatisk. ";
NAS.MSG21 = "Sletning af deling %s lykkedes. ";
NAS.MSG23 = "�ndring af deling %s lykkedes. ";
NAS.MSG24 = "Oprettelse af deling %s lykkedes. ";
NAS.MSG25 = "Delingsnavnet %s er reserveret. V�lg et andet navn. ";
NAS.MSG30 = "Fejl ved sletning af diske: Der blev ikke angivet nogen diske til sletning. ";
NAS.MSG31 = "Fejl ved sletning af diske: Ikke mere ledig hukommelse ved fors�g p� at slette diske. ";
NAS.MSG32 = "Fejl ved sletning af diske: Kunne ikke slette disk \"%s\".";
NAS.MSG33 = "Fejl ved sletning af diske: Ikke mere ledig hukommelse. ";
NAS.MSG34 = "Alle de angivne diske er blevet slettet. ";
NAS.MSG35 = "Der var ingen anmodninger om sletning af diske, s� der er ikke foretaget noget. ";
NAS.MSG36 = "Fejl ved sletning af diske: Ikke mere ledig hukommelse ved fors�g p� at slette diske. ";
NAS.MSG37 = "Fejl ved sletning af diske: Der blev ikke angivet nogen diske til sletning. ";
NAS.MSG38 = "Alle de angivne diske er blevet slettet. ";
NAS.MSG39 = "Der var ingen anmodninger om sletning af diske, s� der er ikke foretaget noget. ";
NAS.MSG40 = "Kunne ikke udf�re sikker afbrydelse af disk \"%s\".";
NAS.MSG41 = "Afbrydelse af disk lykkedes. ";
NAS.MSG42 = "�ndring af adgangsegenskaber for deling %s lykkedes. ";
NAS.MSG43 = "Kunne ikke anvende kontoindstillinger! ";
NAS.MSG44 = "Anvendelse af kontoindstillinger lykkedes. ";
NAS.MSG45 = "De indtastede v�rdier er ugyldige. Pr�v igen. ";
NAS.MSG46 = "Indstillinger er udf�rt. ";
NAS.MSG47 = "Kunne ikke %s dom�ne %s (fik fejl %s) og kunne ikke genoprette forbindelse til dom�ne %s (fik fejl %s), vendte tilbage til medlemskab i arbejdsgruppe %s. ";
NAS.MSG48 = "Kunne ikke %s dom�ne %s (fik fejl %s), vendte tilbage til medlemskab i dom�ne %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error Kunne ikke %s dom�ne %s (fik fejl %s), vendte tilbage til medlemskab i dom�ne %s. ";
NAS.MSG50 = "Nu medlem af dom�ne %s. ";
NAS.MSG51 = "Nu medlem af arbejdsgruppe %s. ";
NAS.MSG52 = "Kunne ikke anvende indstillinger! ";
NAS.MSG53 = "Sletning af FTP-deling lykkedes. ";
NAS.MSG54 = "Disken er optaget!";










