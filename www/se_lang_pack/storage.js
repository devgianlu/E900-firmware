/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (skrivskyddad)";
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
DISK_FUN.Title = "Diskhantering";
DISK_FUN.Part1 = "Diskuppgift";
DISK_FUN.Part2 = "Format Disk (Formatera disk)";
DISK_FUN.Manufacture = "Disk";
DISK_FUN.Partition = "Partition";
DISK_FUN.FS = "Filsystem";
DISK_FUN.TS = "Kapacitet";
DISK_FUN.FreeS = "Ledigt utrymme";
DISK_FUN.Shares = "Delade objekt";
DISK_FUN.SharesFd = "Delningsmapp";
DISK_FUN.CreateShare = "Skapa delat objekt";
DISK_FUN.Remain = "Icke tilldelade";
DISK_FUN.TotalSize = "Totalt";
DISK_FUN.Detecting = "Identifierar";
DISK_FUN.MSG1 = "Den/de valda diskarna inneh�ller skrivarserverinformation.\n Du kan inte radera diskarna";
DISK_FUN.MSG2 = "Det g�r inte att radera diskar utan att samtidigt radera andra diskar som ing�r i samma diskpool";
DISK_FUN.MSG3 = "Inga diskar har valts f�r radering";
DISK_FUN.MSG4 = "V�nta! Disken raderas.";
DISK_FUN.MSG5 = "Inga diskar �r tillg�ngliga";
DISK_FUN.MSG6 = "Du kan inte ta bort �tkomst f�r administrat�rsgruppen.";
DISK_FUN.MSG7 = "Den anslutna USB-enheten kan inte anv�ndas.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Inga diskar �r tillg�ngliga.";
DISK_FUN.AP = "Alla_partitioner";
DISK_FUN.ENTERNAME = "Ange ett partitionsnamn:";
DISK_FUN.WARNING = "Varning!";
DISK_FUN.FORMATWARN1 = "Formateringen kan ta ett par minuter. St�ng inte av";
DISK_FUN.FORMATWARN2 = "str�mmen eller tryck p� �terst�llningsknappen.";
DISK_FUN.FIRMVER = "Version av fast programvara";
DISK_FUN.BACKUP = "S�kerhetskopiera";
DISK_FUN.WARNING1 = "VARNING! Om du rensar diskarna f�rsvinner data permanent. Vill du forts�tta? ";
DISK_FUN.FR = "Mapp";
DISK_FUN.ENTERINTOF= "�ppna mapp";
DISK_FUN.SELECT = "V�lj";
DISK_FUN.MPATH = " Den h�r platsen finns inte.";
DISK_FUN.CPATH = "Den h�r delade mappen finns inte.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Visningsnamn.";
SHARE_FUN.ShareAccess = "�tkomst till delat objekt";
SHARE_FUN.Title = "Hantering av delat objekt";
SHARE_FUN.NOTEXIST ="Finns inte!";
SHARE_FUN.MSG1 = "Inga delade objekt har angetts.";
SHARE_FUN.MSG2 = "Antalet delade objekt �verstiger maxgr�nsen! Du m�ste ta bort en.";
SHARE_FUN.Properties = "�ndra";
SHARE_FUN.FF = "FTP-mapp";
SHARE_FUN.MSF = "Media-mapp";
SHARE_FUN.SF = "Delad mapp";
SHARE_FUN.DN = "Visningsnamn.";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Plats";
SHARE_FUN.NF = "Ny mapp";
SHARE_FUN.CF = "Aktuell mapp";
SHARE_FUN.AF="�tkomstmapp";
SHARE_FUN.AS = "�tkomst";
SHARE_FUN.AG = "Tillg�ngliga grupper";
SHARE_FUN.GWA = "Grupper med �tkomst";
SHARE_FUN.GN = "Gruppnamn";
SHARE_FUN.description = "Beskrivning";
SHARE_FUN.rw = "l�s och skriv";
SHARE_FUN.ro = "skrivskyddad";
SHARE_FUN.NAME ="Namn";
SHARE_FUN.FN = "Fullst�ndigt namn";
SHARE_FUN.PW = "L�senord";
SHARE_FUN.CP = "Bekr�fta l�senord";
SHARE_FUN.GM = "Gruppmedlem";
SHARE_FUN.AD = "Kontot �r avaktiverat";
SHARE_FUN.SUMMARY="Delade mappar - �versikt";
SHARE_FUN.IP = "Delad IP-adress f�r disk: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Grupp med �tkomst";
SA_FUN.OG = "Annan grupp";
SA_FUN.MSG1 = "Det g�r inte att ta bort administrat�rsgruppen!";
SA_FUN.MSG2 = "Gruppnamnet finns redan!";
SA_FUN.FTP_Access ="FTP-�tkomst";
SA_FUN.Entire_Partition ="Dela hela partitionen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "g�st";
AD_FUN.MN = "&nbsp;Datornamn:";
AD_FUN.WN = "&nbsp;Arbetsgruppsnamn:";
AD_FUN.MD = "&nbsp;Datorbeskrivning:";
AD_FUN.APS = "&nbsp;Dela alla partitioner:";
AD_FUN.UserName = "Anv�ndarnamn";
AD_FUN.FULLNAME = "Fullst�ndigt namn";
AD_FUN.GroupName = "Gruppnamn";
AD_FUN.Basic = "Grundl�ggande";
AD_FUN.UserM = "Anv�ndarhantering";
AD_FUN.GroupM = "Grupphantering";
AD_FUN.AnymsAcess="Anonym �tkomst";
AD_FUN.AnymsFTP="Anonym FTP";
AD_FUN.AnymsDisk="Anonym disk�tkomst";
AD_FUN.readonly="Skrivskyddad disk�tkomst";
AD_FUN.readwrite="L�s- och skriv�tkomst till disk";
AD_FUN.svrname="Servernamn";
AD_FUN.devname="Enhetsnamn";
AD_FUN.SLIP="Serverns LAN IP-adress";
AD_FUN.SWIP="Serverns Internet IP-adress";
AD_FUN.MSG1 = "Inga anv�ndare har angetts.";
AD_FUN.MSG2 = "Det g�r inte att ta bort anv�ndaradmin!";
AD_FUN.MSG3 = "Vill du ta bort den h�r anv�ndaren?";
AD_FUN.MSG4 = "Vill du ta bort den h�r gruppen?";
AD_FUN.MSG5 = "Maximalt antal anv�ndare har uppn�tts! Om du vill kunna l�gga till en ny anv�ndare m�ste du f�rst ta bort en.";
AD_FUN.MSG6 = "Maximalt antal grupper har uppn�tts! Om du vill kunna l�gga till en ny grupp m�ste du f�rst ta bort en.";
AD_FUN.MSG7 = "Arbetsgruppsnamnet f�r inte best� av blanksteg!";
AD_FUN.MSG8 = "Arbetsgruppsnamnet f�r inte best� av mer �n 15�tecken!";
AD_FUN.MSG9 = "Arbetsgruppsnamnet f�r endast best� av alfanumeriska tecken och streck";
AD_FUN.MSG10 = "Arbetsgruppsnamnet m�ste b�rja med en bokstav";
AD_FUN.MSG11 = "Du har valt att �ndra datornamnet. N�tverksavbildningen m�ste g�ras om. \n Vill du forts�tta?";
AD_FUN.MSG12 = "Datornamnet f�r inte best� av blanksteg!";
AD_FUN.MSG13 = "Datornamnet f�r inte best� av mer �n 15�tecken!";
AD_FUN.MSG14 = "Datornamnet f�r endast best� av alfanumeriska tecken och streck";
AD_FUN.MSG15 = "Datornamnet m�ste b�rja med en bokstav"; 
AD_FUN.MSG16 = "Anv�ndarnamnet finns redan!";
AD_FUN.MSG17 = "Anv�ndarnamnet kan endast best� av f�ljande tecken: alfanumeriska tecken, bindestreck och understreck.";
AD_FUN.MSG18 = "Antalet grupper �verstiger maxgr�nsen! Du m�ste ta bort en.";
AD_FUN.MSG19 = "Det bekr�ftade l�senordet matchade inte.";
AD_FUN.MSG20 = "L�senordet �r ogiltigt! (minst 4, h�gst 8 tecken)";
AD_FUN.MSG21 = "Det g�r inte att byta namn p� anv�ndaradmin!";
AD_FUN.MSG22 = "Det g�r inte att byta namn p� anv�ndarg�st!";
AD_FUN.MSG23 = "Anv�ndarnamnet f�r inte vara tomt!";
AD_FUN.MSG24 = "Du m�ste ange ett kontonamn.";
AD_FUN.MSG25 = "Kontonamnet finns redan!";
AD_FUN.MSG26 = "Du m�ste ange ett l�senord.";
AD_FUN.MSG27 = "Antalet anv�ndare �verstiger maxgr�nsen! Du m�ste ta bort en.";
AD_FUN.MSG28 = "Anv�ndarkonto";
AD_FUN.MSG29 = "Anv�ndaradmin kan inte tas bort. ";
AD_FUN.MSG30 = "Anv�ndaren ";
AD_FUN.MSG31 = " kan inte tas bort. ";
AD_FUN.MSG32="Blanksteg �r inte till�tna i l�senord.";
AD_FUN.MSG33 = " Visningsnamn f�r endast best� av alfanumeriska tecken och streck.";
AD_FUN.MSG34 = "Vill du ta bort anv�ndaren \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Vill du radera gruppen \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Enhets-/servernamnet f�r inte vara tomt!";
AD_FUN.MSG39 = "Enhets-/servernamnet f�r endast inneh�lla alfanumeriska tecken och bindestreck!";
AD_FUN.MSG40 = "Enhets-/servernamnet m�ste inledas med en bokstav!";
AD_FUN.MSG41 = "Routernamnet kan inte l�mnas tomt.";
AD_FUN.MSG42 = "Routernamnet kan endast best� av alfanumeriska tecken och bindestreck.";
AD_FUN.MSG43 = "Routernamnet m�ste b�rja med en bokstav.";
AD_FUN.MSG44 = "Anv�ndarens fullst�ndiga namn och beskrivning kan endast best� av f�ljande tecken: alfanumeriska tecken, blanksteg, bindestreck och understreck.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Gruppegenskaper";
GA_FUN.OU = "Andra anv�ndare";
GA_FUN.UIG = "Anv�ndare i gruppen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP-medieserver";
MS_FUN.svrname = "Namn p� mediaserver";
MS_FUN.Setup = "Konfiguration";
MS_FUN.DB = "Databas";
MS_FUN.ServerName = "Servernamn:";
MS_FUN.FR= "Mapp";
MS_FUN.SCAN = "S�k";
MS_FUN.LASTSCAN = "Senaste genoms�kningstid";
MS_FUN.AUTOSCAN = "Genoms�k automatiskt var";
MS_FUN.HOUR="Timmar";
MS_FUN.MSG1 = "Inga s�kningar p� delade objekt har angetts.";
MS_FUN.MSG2 = "Antalet s�kningar p� delade objekt �verstiger maxgr�nsen! Du m�ste ta bort en.";
MS_FUN.MSG3 = "Det kan ta l�ng tid att s�ka igenom alla partitioner. Vill du forts�tta?";
MS_FUN.MSG4 = "V�nta! Disken genoms�ks.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partitionslista";
SP_FUN.ST = "V�lj";
SP_FUN.MSG1 = "Den delade mappen har lagts till.";
SP_FUN.MSG2 = "Den delade FTP-mappen har lagts till.";
SP_FUN.MSG3 = "S�kv�gen finns redan i s�klistan! Det kan inte l�ggas till tv� g�nger.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "FTP-server";
FS_FUN.svrname = "Namn p� FTP-server";
FS_FUN.Share = "Delat objekt";
FS_FUN.EDIT = "�ndra";
FS_FUN.MSG1 = "Det finns f�r tillf�llet ingen FTP-�tkomst definierad.";
FS_FUN.ACCESS = "�tkomst";
FS_FUN.PO = "FTP-port:";
FS_FUN.FTP_CHARACTERSET = "Kodning:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="F�renklad kinesiska(GB18030)";
FS_FUN.BIG5="Traditionell kinesiska(Big5)";
FS_FUN.CP1258="Vietnamesiska(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Den h�r roten �r inte till�ten f�r att skapa en ny mapp!";
FS_FUN.ALERT2 = "Ange ett giltigt mappnamn!";
FS_FUN.ALERT3 = "Ange ett giltigt delningsnamn!";
FS_FUN.ALERT4 = " Visningsnamnet finns redan i delningslistan!";
FS_FUN.ALERT5 = "Ange en giltig delningsplats!";
FS_FUN.FTPFOLDER = "FTP-mapp";
FS_FUN.DISPNAME = "Visningsnamn.";
FS_FUN.UNIQUE = "M�ste vara unikt.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Location";
FS_FUN.NEWFOLDER = "Ny mapp";
FS_FUN.CURRENTFOLD = "Aktuell mapp:";
FS_FUN.ACCESS = "�tkomst";
FS_FUN.AVAILGROUP =  "Tillg�ngliga grupper";
FS_FUN.GROUPACCESS  = "Grupper med �tkomst";
FS_FUN.INTERNET = "Internet-�tkomst";
FS_FUN.SUMMARY = "FTP-sammanfattning";
FS_FUN.ALERT6 = "FTP-port f�r inte vara tomt. ";
FS_FUN.ALERT7 = "V�lj delad mapp f�r FTP. ";
FS_FUN.UNIQUE = " (M�ste vara unikt.) ";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Beg�r disk";
CD_FUN.DISK = "Disk";
CD_FUN.MAM =  "M�rke och modell";
CD_FUN.PS = "Storlek";
CD_FUN.NPN = "Nytt partitionsnamn:";
CD_FUN.MSG1 = "VARNING! Om du v�ljer Beg�r disk f�rst�rs allt p� disken.\nVill du forts�tta?";
CD_FUN.MSG2 = "VARNING! Partitionsnamnet m�ste skrivas med versaler \n\nDisknamnet '";
CD_FUN.MSG3 = "' kommer att omvandlas till versaler. Vill du forts�tta?";
CD_FUN.MSG4 = "Partitionsnamnet f�r endast inneh�lla alfanumeriska tecken, streck och understreck";
CD_FUN.MSG5 = "Nya disknamn f�r inte inneh�lla blanksteg";
CD_FUN.MSG6 = "VARNING! FAT32-disknamn f�r inte inneh�lla mer �n 11�tecken\n\n Disknamnet '";
CD_FUN.MSG7 = "' kommer att kortas ned till 11�tecken. Vill du forts�tta?";
CD_FUN.DISK_MSG = " finns inte.\n";
CD_FUN.NODISKS = "Inga diskar anslutna";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Anv�ndarnamnet f�r endast inneh�lla alfanumeriska tecken, streck och understreck";
GP_FUN.MSG2 = "Antalet grupper �verstiger maxgr�nsen! Du m�ste ta bort en.";
GP_FUN.MSG3 = "Gruppen finns redan!";
GP_FUN.MSG4 = "Gruppnamnet f�r inte vara tomt!";
GP_FUN.MSG5 = "Gruppnamnet f�r endast inneh�lla alfanumeriska tecken, streck och understreck";
GP_FUN.GA = "Gruppkonto";
GP_FUN.GN = "Gruppnamn";
GP_FUN.DES = "Beskrivning";
GP_FUN.ACCESS = "�tkomst";
GP_FUN.RNW = "l�s och skriv";
GP_FUN.RO = "skrivskyddad";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Egenskaper f�r delade objekt";
ShareP_FUN.SF = "Delad mapp";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Anv�ndaregenskaper";
UP_FUN.FName = "Namn";
UP_FUN.PWD = "L�senord";
UP_FUN.Reconfirm = "Bekr�fta genom att ange en g�ng till";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "S�kerhetskopiering av data";
DB_FUN.SELJOB = "V�lj jobbnummer";
DB_FUN.JOBNAME = "Jobbnamn";
DB_FUN.BType ="Typ av s�kerhetskopiering";
DB_FUN.Direction = "Riktning";
DB_FUN.WRTSL54GS = "Denna WRTSL54GS";
DB_FUN.RD = "Fj�rrenhet";
DB_FUN.DAYS = "Dagar";
DB_FUN.TIMES = "Tider";
DB_FUN.LOGIN = "Inloggningsnamn";
DB_FUN.sunday = "&nbsp;s�";
DB_FUN.Mon = "&nbsp;m�n"; 
DB_FUN.Tue = "&nbsp;tis"; 
DB_FUN.Wed = "&nbsp;ons";
DB_FUN.Thu = "&nbsp;tor";
DB_FUN.Fri = "&nbsp;fre";
DB_FUN.Sat = "&nbsp;l�";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Mapplista";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Snabborttagning";
CMD.FullErase = "Fullst�ndig borttagning";
CMD.EraseDisk = "Format Disk (Formatera disk)";
CMD.Refresh = "Uppdatera";
CMD.Claim = "Beg�r";
CMD.SAVESET = "Spara inst�llningar";
CMD.SafeRemove = "S�ker borttagning av disk";
CMD.CreateShare = "Skapa delat objekt";
CMD.ModifyShare = "�ndra delat objekt";
CMD.SELPart = "V�lj partition";
CMD.Modify = "�ndra";
CMD.Delete = "Ta bort";
CMD.RO = ">> Skrivskyddad";
CMD.RW = ">> L�s/skriv";
CMD.RM = "<< Ta bort";
CMD.CANCELCHANGE = "Avbryt �ndringar";
CMD.CT = "Forts�tt";
CMD.CLOSE = "St�ng";
CMD.CreateNewUser = "Skapa ny anv�ndare";
CMD.CreateNewGroup = "Skapa ny grupp";
CMD.CreateNewShare = "Skapa nytt delat objekt";
CMD.JG = ">> Anslut till grupp ";
CMD.SAP = "S�k alla ";
CMD.SPS = "Ange mapp f�r s�kning";
CMD.UOL = " Upp en niv� ";
CMD.SP = "V�lj partition";
CMD.FSA = "Ange mapp f�r �tkomst";
CMD.Claim = "Beg�r";
CMD.CL = "Rensa";
CMD.CANCEL = "Avbryt";
CMD.CGroup = "Skapa grupp";
CMD.CUser = "Skapa anv�ndare";
CMD.MUser = "�ndra anv�ndare";
CMD.NOPWD = "INGET L�SENORD";
CMD.DTE = "Ta bort den h�r posten";
CMD.ALERT1 = "V�nta! Disken f�rnyas. ";
CMD.CREATE = "Skapa";
CMD.UPFOLDER = "Tillbaka till �vermapp";
CMD.ALLFOLDER = "Alla mappar";
CMD.FORMAT = "Format";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Aktivera";
OPT.item_Disable = "Avaktivera";
OPT.item_ALLP = "Alla partitioner";
OPT.item_SF = "Ange mapp";
OPT.item_Everyday = "Alla dagar";
OPT.item_opt1 = "Fr�n denna WRTSL54GS till annan enhet";
OPT.item_opt2 = "Fr�n annan enhet till denna WRTSL54GS"; 
OPT.item_opt3 = "Inloggning kr�vs f�r �tkomst";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Mer...";
HELPMSG.DISK1 = "H�r visas information om den disk som �r ansluten till routern.";
HELPMSG.DISK2 = "Om du vill radera en disk markerar du kryssrutan bredvid namnet p� disken.";
HELPMSG.SHARE1 = "H�r visas information om de delade objekt som du just har skapat.";
HELPMSG.SHARE2 = "Skapa ett nytt delat objekt genom att klicka p� Skapa nytt delat objekt.";
HELPMSG.AD1 = "Namnet p� den h�r routern.";
HELPMSG.AD2 = "Namnet p� dina n�tverksanslutna datorer.";
HELPMSG.AD3 = "Anv�ndarna finns angivna i tabellen.";
HELPMSG.AD4 = "Om du vill skapa en ny anv�ndare klickar du p� Skapa ny anv�ndare.";
HELPMSG.AD5 = "Grupperna finns angivna i tabellen.";
HELPMSG.AD6 = "Om du vill skapa en ny grupp klickar du p� Skapa ny grupp.";
HELPMSG.AD7 = "Ange gruppens namn. Namnet f�r best� av max 12�tecken.";
HELPMSG.MS1 = "H�r visas det namn som medieadaptern anv�nder f�r att identifiera servern.";
HELPMSG.MS2 = "Klicka h�r om du vill s�ka igenom alla partitioner p� USB-disken.";
HELPMSG.MS3 = "Klicka h�r om du vill s�ka igenom en viss mapp eller partition.";
HELPMSG.CD1 = "Skapa en partition p� den tomma disk som kommer att formateras som FAT32.";
HELPMSG.ShareP1 = "Ange namnet p� det delade objektet.";
HELPMSG.ShareP2 = "Det h�r �r den mapp som det delade objektet kommer att inneh�lla. Klicka p� V�lj partition om du vill v�lja fr�n en lista �ver tillg�ngliga mappar.";
HELPMSG.UP1 = "Skriv in anv�ndarnamnet. Anv�ndarnamnet f�r best� av max 20�tecken.";
HELPMSG.UP2 = "Ange l�senordet. L�senordet ska best� av minst�4 och max�8�tecken.";
HELPMSG.UP3 = "Bekr�fta genom att ange l�senordet igen.";
HELPMSG.UP4 = "Grupp";
HELPMSG.UP5 = "V�lj ur den grupp som du vill placera anv�ndaren i.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disk";
FUNST.Share="Delat objekt";
FUNST.MS="Mediaserver";
FUNST.FTP = "FTP-server";

var NAS = new Object();
NAS.MSG1 = "Anv�nde kontoinst�llningarna. ";
NAS.MSG2 = "Kontot %s finns redan. ";
NAS.MSG3 = "Inst�llningarna kunde inte anv�ndas. ";
NAS.MSG4 = "Genoms�kningsdelningen togs bort. ";
NAS.MSG5 = "Mediadatabasen kunde inte uppdateras. ";
NAS.MSG6 = "Mediadatabasen kunde inte uppdateras. Delningen finns inte. ";
NAS.MSG7 = "Mediadatabasen kunde inte uppdateras. ";
NAS.MSG8 = "Databasen uppdaterades. ";
NAS.MSG9 = "Mediadatabasen kunde inte uppdateras. Det finns ingen partition. ";
NAS.MSG10 = "Databasen uppdaterades. ";
NAS.MSG11 = "Genoms�kningsdelningen lades till. ";
NAS.MSG12 = "Delningsnamnet %s �r reserverat. V�lj ett annat namn. ";
NAS.MSG13 = "Modifierade delningen %s. ";
NAS.MSG14 = "Skapade delningen %s. ";
NAS.MSG15 = "Ett fel intr�ffade vid diskbeg�ran %s: Disken \"%s\" finns inte. ";
NAS.MSG16 = "Ett fel intr�ffade vid diskbeg�ran: Du angav inget nytt namn f�r disken. ";
NAS.MSG17 = "Det angivna disknamnet \"%s\" �r ogiltigt. ";
NAS.MSG18 = "Diskbeg�ran utf�rdes. ";
NAS.MSG19 = "Ett fel intr�ffade vid diskbeg�ran %s: F�rs�ket att beg�ra misslyckades. ";
NAS.MSG20 = "Ett fel intr�ffade vid borttagning av delningen %s: Delningen %s �r en s�rskild delning som �r reserverad f�r den prim�ra dom�nkontrollfunktionen. Den kan inte tas bort separat, men om prim�rdom�nkontrollen st�ngs av tas den bort automatiskt. ";
NAS.MSG21 = "Tog bort delningen %s. ";
NAS.MSG23 = "Modifierade delningen %s. ";
NAS.MSG24 = "Skapade delningen %s. ";
NAS.MSG25 = "Delningsnamnet %s �r reserverat. V�lj ett annat namn. ";
NAS.MSG30 = "Ett fel intr�ffade vid radering av diskar: Inga diskar angavs f�r radering. ";
NAS.MSG31 = "Ett fel intr�ffade vid radering av diskar: Slut p� minne n�r diskarna skulle raderas. ";
NAS.MSG32 = "Ett fel intr�ffade vid radering av diskar: Det g�r inte att radera disken \"%s\".";
NAS.MSG33 = "Ett fel intr�ffade vid radering av diskar: Slut p� minne. ";
NAS.MSG34 = "Alla beg�rda diskar raderades. ";
NAS.MSG35 = "Ingen �tg�rd utf�rdes eftersom inga diskar var angivna f�r radering. ";
NAS.MSG36 = "Ett fel intr�ffade vid radering av diskar: Slut p� minne n�r diskarna skulle raderas. ";
NAS.MSG37 = "Ett fel intr�ffade vid radering av diskar: Inga diskar angavs f�r radering. ";
NAS.MSG38 = "Alla beg�rda diskar raderades. ";
NAS.MSG39 = "Ingen �tg�rd utf�rdes eftersom inga diskar var angivna f�r radering. ";
NAS.MSG40 = "Det g�r inte att koppla fr�n disken \"%s\" p� ett s�kert s�tt. ";
NAS.MSG41 = "Kopplade fr�n disk. ";
NAS.MSG42 = "�ndringen av �tkomstegenskaper f�r delningen %s utf�rdes. ";
NAS.MSG43 = "Kontoinst�llningarna kunde inte anv�ndas. ";
NAS.MSG44 = "Anv�nde kontoinst�llningarna. ";
NAS.MSG45 = "De v�rden du angav �r ogiltiga. F�rs�k igen. ";
NAS.MSG46 = "Inst�llningarna slutf�rdes. ";
NAS.MSG47 = "Kunde inte %s dom�n %s (felet %s intr�ffade) och kunde inte �teransluta till dom�n %s (felet %s intr�ffade), �tergick till medlemskap i arbetsgruppen %s. ";
NAS.MSG48 = "Kunde inte %s dom�n %s (felet %s intr�ffade), �tergick till medlemskap i dom�nen %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error Kunde inte %s dom�n %s (felet %s intr�ffade), �tergick till medlemskap i dom�n %s. ";
NAS.MSG50 = "�r nu medlem av dom�n %s. ";
NAS.MSG51 = "�r nu medlem i arbetsgrupp  %s. ";
NAS.MSG52 = "Inst�llningarna kunde inte anv�ndas. ";
NAS.MSG53 = "FTP-delningen togs bort. ";
NAS.MSG54 = "Disken �r upptagen!";









