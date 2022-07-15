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
DISK_FUN.MSG1 = "Den/de valda diskarna innehåller skrivarserverinformation.\n Du kan inte radera diskarna";
DISK_FUN.MSG2 = "Det går inte att radera diskar utan att samtidigt radera andra diskar som ingår i samma diskpool";
DISK_FUN.MSG3 = "Inga diskar har valts för radering";
DISK_FUN.MSG4 = "Vänta! Disken raderas.";
DISK_FUN.MSG5 = "Inga diskar är tillgängliga";
DISK_FUN.MSG6 = "Du kan inte ta bort åtkomst för administratörsgruppen.";
DISK_FUN.MSG7 = "Den anslutna USB-enheten kan inte användas.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Inga diskar är tillgängliga.";
DISK_FUN.AP = "Alla_partitioner";
DISK_FUN.ENTERNAME = "Ange ett partitionsnamn:";
DISK_FUN.WARNING = "Varning!";
DISK_FUN.FORMATWARN1 = "Formateringen kan ta ett par minuter. Stäng inte av";
DISK_FUN.FORMATWARN2 = "strömmen eller tryck på återställningsknappen.";
DISK_FUN.FIRMVER = "Version av fast programvara";
DISK_FUN.BACKUP = "Säkerhetskopiera";
DISK_FUN.WARNING1 = "VARNING! Om du rensar diskarna försvinner data permanent. Vill du fortsätta? ";
DISK_FUN.FR = "Mapp";
DISK_FUN.ENTERINTOF= "Öppna mapp";
DISK_FUN.SELECT = "Välj";
DISK_FUN.MPATH = " Den här platsen finns inte.";
DISK_FUN.CPATH = "Den här delade mappen finns inte.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Visningsnamn.";
SHARE_FUN.ShareAccess = "Åtkomst till delat objekt";
SHARE_FUN.Title = "Hantering av delat objekt";
SHARE_FUN.NOTEXIST ="Finns inte!";
SHARE_FUN.MSG1 = "Inga delade objekt har angetts.";
SHARE_FUN.MSG2 = "Antalet delade objekt överstiger maxgränsen! Du måste ta bort en.";
SHARE_FUN.Properties = "Ändra";
SHARE_FUN.FF = "FTP-mapp";
SHARE_FUN.MSF = "Media-mapp";
SHARE_FUN.SF = "Delad mapp";
SHARE_FUN.DN = "Visningsnamn.";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Plats";
SHARE_FUN.NF = "Ny mapp";
SHARE_FUN.CF = "Aktuell mapp";
SHARE_FUN.AF="Åtkomstmapp";
SHARE_FUN.AS = "Åtkomst";
SHARE_FUN.AG = "Tillgängliga grupper";
SHARE_FUN.GWA = "Grupper med åtkomst";
SHARE_FUN.GN = "Gruppnamn";
SHARE_FUN.description = "Beskrivning";
SHARE_FUN.rw = "läs och skriv";
SHARE_FUN.ro = "skrivskyddad";
SHARE_FUN.NAME ="Namn";
SHARE_FUN.FN = "Fullständigt namn";
SHARE_FUN.PW = "Lösenord";
SHARE_FUN.CP = "Bekräfta lösenord";
SHARE_FUN.GM = "Gruppmedlem";
SHARE_FUN.AD = "Kontot är avaktiverat";
SHARE_FUN.SUMMARY="Delade mappar - översikt";
SHARE_FUN.IP = "Delad IP-adress för disk: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Grupp med åtkomst";
SA_FUN.OG = "Annan grupp";
SA_FUN.MSG1 = "Det går inte att ta bort administratörsgruppen!";
SA_FUN.MSG2 = "Gruppnamnet finns redan!";
SA_FUN.FTP_Access ="FTP-åtkomst";
SA_FUN.Entire_Partition ="Dela hela partitionen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "gäst";
AD_FUN.MN = "&nbsp;Datornamn:";
AD_FUN.WN = "&nbsp;Arbetsgruppsnamn:";
AD_FUN.MD = "&nbsp;Datorbeskrivning:";
AD_FUN.APS = "&nbsp;Dela alla partitioner:";
AD_FUN.UserName = "Användarnamn";
AD_FUN.FULLNAME = "Fullständigt namn";
AD_FUN.GroupName = "Gruppnamn";
AD_FUN.Basic = "Grundläggande";
AD_FUN.UserM = "Användarhantering";
AD_FUN.GroupM = "Grupphantering";
AD_FUN.AnymsAcess="Anonym åtkomst";
AD_FUN.AnymsFTP="Anonym FTP";
AD_FUN.AnymsDisk="Anonym diskåtkomst";
AD_FUN.readonly="Skrivskyddad diskåtkomst";
AD_FUN.readwrite="Läs- och skrivåtkomst till disk";
AD_FUN.svrname="Servernamn";
AD_FUN.devname="Enhetsnamn";
AD_FUN.SLIP="Serverns LAN IP-adress";
AD_FUN.SWIP="Serverns Internet IP-adress";
AD_FUN.MSG1 = "Inga användare har angetts.";
AD_FUN.MSG2 = "Det går inte att ta bort användaradmin!";
AD_FUN.MSG3 = "Vill du ta bort den här användaren?";
AD_FUN.MSG4 = "Vill du ta bort den här gruppen?";
AD_FUN.MSG5 = "Maximalt antal användare har uppnåtts! Om du vill kunna lägga till en ny användare måste du först ta bort en.";
AD_FUN.MSG6 = "Maximalt antal grupper har uppnåtts! Om du vill kunna lägga till en ny grupp måste du först ta bort en.";
AD_FUN.MSG7 = "Arbetsgruppsnamnet får inte bestå av blanksteg!";
AD_FUN.MSG8 = "Arbetsgruppsnamnet får inte bestå av mer än 15 tecken!";
AD_FUN.MSG9 = "Arbetsgruppsnamnet får endast bestå av alfanumeriska tecken och streck";
AD_FUN.MSG10 = "Arbetsgruppsnamnet måste börja med en bokstav";
AD_FUN.MSG11 = "Du har valt att ändra datornamnet. Nätverksavbildningen måste göras om. \n Vill du fortsätta?";
AD_FUN.MSG12 = "Datornamnet får inte bestå av blanksteg!";
AD_FUN.MSG13 = "Datornamnet får inte bestå av mer än 15 tecken!";
AD_FUN.MSG14 = "Datornamnet får endast bestå av alfanumeriska tecken och streck";
AD_FUN.MSG15 = "Datornamnet måste börja med en bokstav"; 
AD_FUN.MSG16 = "Användarnamnet finns redan!";
AD_FUN.MSG17 = "Användarnamnet kan endast bestå av följande tecken: alfanumeriska tecken, bindestreck och understreck.";
AD_FUN.MSG18 = "Antalet grupper överstiger maxgränsen! Du måste ta bort en.";
AD_FUN.MSG19 = "Det bekräftade lösenordet matchade inte.";
AD_FUN.MSG20 = "Lösenordet är ogiltigt! (minst 4, högst 8 tecken)";
AD_FUN.MSG21 = "Det går inte att byta namn på användaradmin!";
AD_FUN.MSG22 = "Det går inte att byta namn på användargäst!";
AD_FUN.MSG23 = "Användarnamnet får inte vara tomt!";
AD_FUN.MSG24 = "Du måste ange ett kontonamn.";
AD_FUN.MSG25 = "Kontonamnet finns redan!";
AD_FUN.MSG26 = "Du måste ange ett lösenord.";
AD_FUN.MSG27 = "Antalet användare överstiger maxgränsen! Du måste ta bort en.";
AD_FUN.MSG28 = "Användarkonto";
AD_FUN.MSG29 = "Användaradmin kan inte tas bort. ";
AD_FUN.MSG30 = "Användaren ";
AD_FUN.MSG31 = " kan inte tas bort. ";
AD_FUN.MSG32="Blanksteg är inte tillåtna i lösenord.";
AD_FUN.MSG33 = " Visningsnamn får endast bestå av alfanumeriska tecken och streck.";
AD_FUN.MSG34 = "Vill du ta bort användaren \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Vill du radera gruppen \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Enhets-/servernamnet får inte vara tomt!";
AD_FUN.MSG39 = "Enhets-/servernamnet får endast innehålla alfanumeriska tecken och bindestreck!";
AD_FUN.MSG40 = "Enhets-/servernamnet måste inledas med en bokstav!";
AD_FUN.MSG41 = "Routernamnet kan inte lämnas tomt.";
AD_FUN.MSG42 = "Routernamnet kan endast bestå av alfanumeriska tecken och bindestreck.";
AD_FUN.MSG43 = "Routernamnet måste börja med en bokstav.";
AD_FUN.MSG44 = "Användarens fullständiga namn och beskrivning kan endast bestå av följande tecken: alfanumeriska tecken, blanksteg, bindestreck och understreck.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Gruppegenskaper";
GA_FUN.OU = "Andra användare";
GA_FUN.UIG = "Användare i gruppen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP-medieserver";
MS_FUN.svrname = "Namn på mediaserver";
MS_FUN.Setup = "Konfiguration";
MS_FUN.DB = "Databas";
MS_FUN.ServerName = "Servernamn:";
MS_FUN.FR= "Mapp";
MS_FUN.SCAN = "Sök";
MS_FUN.LASTSCAN = "Senaste genomsökningstid";
MS_FUN.AUTOSCAN = "Genomsök automatiskt var";
MS_FUN.HOUR="Timmar";
MS_FUN.MSG1 = "Inga sökningar på delade objekt har angetts.";
MS_FUN.MSG2 = "Antalet sökningar på delade objekt överstiger maxgränsen! Du måste ta bort en.";
MS_FUN.MSG3 = "Det kan ta lång tid att söka igenom alla partitioner. Vill du fortsätta?";
MS_FUN.MSG4 = "Vänta! Disken genomsöks.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partitionslista";
SP_FUN.ST = "Välj";
SP_FUN.MSG1 = "Den delade mappen har lagts till.";
SP_FUN.MSG2 = "Den delade FTP-mappen har lagts till.";
SP_FUN.MSG3 = "Sökvägen finns redan i söklistan! Det kan inte läggas till två gånger.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "FTP-server";
FS_FUN.svrname = "Namn på FTP-server";
FS_FUN.Share = "Delat objekt";
FS_FUN.EDIT = "Ändra";
FS_FUN.MSG1 = "Det finns för tillfället ingen FTP-åtkomst definierad.";
FS_FUN.ACCESS = "Åtkomst";
FS_FUN.PO = "FTP-port:";
FS_FUN.FTP_CHARACTERSET = "Kodning:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Förenklad kinesiska(GB18030)";
FS_FUN.BIG5="Traditionell kinesiska(Big5)";
FS_FUN.CP1258="Vietnamesiska(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Den här roten är inte tillåten för att skapa en ny mapp!";
FS_FUN.ALERT2 = "Ange ett giltigt mappnamn!";
FS_FUN.ALERT3 = "Ange ett giltigt delningsnamn!";
FS_FUN.ALERT4 = " Visningsnamnet finns redan i delningslistan!";
FS_FUN.ALERT5 = "Ange en giltig delningsplats!";
FS_FUN.FTPFOLDER = "FTP-mapp";
FS_FUN.DISPNAME = "Visningsnamn.";
FS_FUN.UNIQUE = "Måste vara unikt.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Location";
FS_FUN.NEWFOLDER = "Ny mapp";
FS_FUN.CURRENTFOLD = "Aktuell mapp:";
FS_FUN.ACCESS = "Åtkomst";
FS_FUN.AVAILGROUP =  "Tillgängliga grupper";
FS_FUN.GROUPACCESS  = "Grupper med åtkomst";
FS_FUN.INTERNET = "Internet-åtkomst";
FS_FUN.SUMMARY = "FTP-sammanfattning";
FS_FUN.ALERT6 = "FTP-port får inte vara tomt. ";
FS_FUN.ALERT7 = "Välj delad mapp för FTP. ";
FS_FUN.UNIQUE = " (Måste vara unikt.) ";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Begär disk";
CD_FUN.DISK = "Disk";
CD_FUN.MAM =  "Märke och modell";
CD_FUN.PS = "Storlek";
CD_FUN.NPN = "Nytt partitionsnamn:";
CD_FUN.MSG1 = "VARNING! Om du väljer Begär disk förstörs allt på disken.\nVill du fortsätta?";
CD_FUN.MSG2 = "VARNING! Partitionsnamnet måste skrivas med versaler \n\nDisknamnet '";
CD_FUN.MSG3 = "' kommer att omvandlas till versaler. Vill du fortsätta?";
CD_FUN.MSG4 = "Partitionsnamnet får endast innehålla alfanumeriska tecken, streck och understreck";
CD_FUN.MSG5 = "Nya disknamn får inte innehålla blanksteg";
CD_FUN.MSG6 = "VARNING! FAT32-disknamn får inte innehålla mer än 11 tecken\n\n Disknamnet '";
CD_FUN.MSG7 = "' kommer att kortas ned till 11 tecken. Vill du fortsätta?";
CD_FUN.DISK_MSG = " finns inte.\n";
CD_FUN.NODISKS = "Inga diskar anslutna";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Användarnamnet får endast innehålla alfanumeriska tecken, streck och understreck";
GP_FUN.MSG2 = "Antalet grupper överstiger maxgränsen! Du måste ta bort en.";
GP_FUN.MSG3 = "Gruppen finns redan!";
GP_FUN.MSG4 = "Gruppnamnet får inte vara tomt!";
GP_FUN.MSG5 = "Gruppnamnet får endast innehålla alfanumeriska tecken, streck och understreck";
GP_FUN.GA = "Gruppkonto";
GP_FUN.GN = "Gruppnamn";
GP_FUN.DES = "Beskrivning";
GP_FUN.ACCESS = "Åtkomst";
GP_FUN.RNW = "läs och skriv";
GP_FUN.RO = "skrivskyddad";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Egenskaper för delade objekt";
ShareP_FUN.SF = "Delad mapp";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Användaregenskaper";
UP_FUN.FName = "Namn";
UP_FUN.PWD = "Lösenord";
UP_FUN.Reconfirm = "Bekräfta genom att ange en gång till";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Säkerhetskopiering av data";
DB_FUN.SELJOB = "Välj jobbnummer";
DB_FUN.JOBNAME = "Jobbnamn";
DB_FUN.BType ="Typ av säkerhetskopiering";
DB_FUN.Direction = "Riktning";
DB_FUN.WRTSL54GS = "Denna WRTSL54GS";
DB_FUN.RD = "Fjärrenhet";
DB_FUN.DAYS = "Dagar";
DB_FUN.TIMES = "Tider";
DB_FUN.LOGIN = "Inloggningsnamn";
DB_FUN.sunday = "&nbsp;sö";
DB_FUN.Mon = "&nbsp;mån"; 
DB_FUN.Tue = "&nbsp;tis"; 
DB_FUN.Wed = "&nbsp;ons";
DB_FUN.Thu = "&nbsp;tor";
DB_FUN.Fri = "&nbsp;fre";
DB_FUN.Sat = "&nbsp;lö";
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
CMD.FullErase = "Fullständig borttagning";
CMD.EraseDisk = "Format Disk (Formatera disk)";
CMD.Refresh = "Uppdatera";
CMD.Claim = "Begär";
CMD.SAVESET = "Spara inställningar";
CMD.SafeRemove = "Säker borttagning av disk";
CMD.CreateShare = "Skapa delat objekt";
CMD.ModifyShare = "Ändra delat objekt";
CMD.SELPart = "Välj partition";
CMD.Modify = "Ändra";
CMD.Delete = "Ta bort";
CMD.RO = ">> Skrivskyddad";
CMD.RW = ">> Läs/skriv";
CMD.RM = "<< Ta bort";
CMD.CANCELCHANGE = "Avbryt ändringar";
CMD.CT = "Fortsätt";
CMD.CLOSE = "Stäng";
CMD.CreateNewUser = "Skapa ny användare";
CMD.CreateNewGroup = "Skapa ny grupp";
CMD.CreateNewShare = "Skapa nytt delat objekt";
CMD.JG = ">> Anslut till grupp ";
CMD.SAP = "Sök alla ";
CMD.SPS = "Ange mapp för sökning";
CMD.UOL = " Upp en nivå ";
CMD.SP = "Välj partition";
CMD.FSA = "Ange mapp för åtkomst";
CMD.Claim = "Begär";
CMD.CL = "Rensa";
CMD.CANCEL = "Avbryt";
CMD.CGroup = "Skapa grupp";
CMD.CUser = "Skapa användare";
CMD.MUser = "Ändra användare";
CMD.NOPWD = "INGET LÖSENORD";
CMD.DTE = "Ta bort den här posten";
CMD.ALERT1 = "Vänta! Disken förnyas. ";
CMD.CREATE = "Skapa";
CMD.UPFOLDER = "Tillbaka till övermapp";
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
OPT.item_opt1 = "Från denna WRTSL54GS till annan enhet";
OPT.item_opt2 = "Från annan enhet till denna WRTSL54GS"; 
OPT.item_opt3 = "Inloggning krävs för åtkomst";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Mer...";
HELPMSG.DISK1 = "Här visas information om den disk som är ansluten till routern.";
HELPMSG.DISK2 = "Om du vill radera en disk markerar du kryssrutan bredvid namnet på disken.";
HELPMSG.SHARE1 = "Här visas information om de delade objekt som du just har skapat.";
HELPMSG.SHARE2 = "Skapa ett nytt delat objekt genom att klicka på Skapa nytt delat objekt.";
HELPMSG.AD1 = "Namnet på den här routern.";
HELPMSG.AD2 = "Namnet på dina nätverksanslutna datorer.";
HELPMSG.AD3 = "Användarna finns angivna i tabellen.";
HELPMSG.AD4 = "Om du vill skapa en ny användare klickar du på Skapa ny användare.";
HELPMSG.AD5 = "Grupperna finns angivna i tabellen.";
HELPMSG.AD6 = "Om du vill skapa en ny grupp klickar du på Skapa ny grupp.";
HELPMSG.AD7 = "Ange gruppens namn. Namnet får bestå av max 12 tecken.";
HELPMSG.MS1 = "Här visas det namn som medieadaptern använder för att identifiera servern.";
HELPMSG.MS2 = "Klicka här om du vill söka igenom alla partitioner på USB-disken.";
HELPMSG.MS3 = "Klicka här om du vill söka igenom en viss mapp eller partition.";
HELPMSG.CD1 = "Skapa en partition på den tomma disk som kommer att formateras som FAT32.";
HELPMSG.ShareP1 = "Ange namnet på det delade objektet.";
HELPMSG.ShareP2 = "Det här är den mapp som det delade objektet kommer att innehålla. Klicka på Välj partition om du vill välja från en lista över tillgängliga mappar.";
HELPMSG.UP1 = "Skriv in användarnamnet. Användarnamnet får bestå av max 20 tecken.";
HELPMSG.UP2 = "Ange lösenordet. Lösenordet ska bestå av minst 4 och max 8 tecken.";
HELPMSG.UP3 = "Bekräfta genom att ange lösenordet igen.";
HELPMSG.UP4 = "Grupp";
HELPMSG.UP5 = "Välj ur den grupp som du vill placera användaren i.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disk";
FUNST.Share="Delat objekt";
FUNST.MS="Mediaserver";
FUNST.FTP = "FTP-server";

var NAS = new Object();
NAS.MSG1 = "Använde kontoinställningarna. ";
NAS.MSG2 = "Kontot %s finns redan. ";
NAS.MSG3 = "Inställningarna kunde inte användas. ";
NAS.MSG4 = "Genomsökningsdelningen togs bort. ";
NAS.MSG5 = "Mediadatabasen kunde inte uppdateras. ";
NAS.MSG6 = "Mediadatabasen kunde inte uppdateras. Delningen finns inte. ";
NAS.MSG7 = "Mediadatabasen kunde inte uppdateras. ";
NAS.MSG8 = "Databasen uppdaterades. ";
NAS.MSG9 = "Mediadatabasen kunde inte uppdateras. Det finns ingen partition. ";
NAS.MSG10 = "Databasen uppdaterades. ";
NAS.MSG11 = "Genomsökningsdelningen lades till. ";
NAS.MSG12 = "Delningsnamnet %s är reserverat. Välj ett annat namn. ";
NAS.MSG13 = "Modifierade delningen %s. ";
NAS.MSG14 = "Skapade delningen %s. ";
NAS.MSG15 = "Ett fel inträffade vid diskbegäran %s: Disken \"%s\" finns inte. ";
NAS.MSG16 = "Ett fel inträffade vid diskbegäran: Du angav inget nytt namn för disken. ";
NAS.MSG17 = "Det angivna disknamnet \"%s\" är ogiltigt. ";
NAS.MSG18 = "Diskbegäran utfördes. ";
NAS.MSG19 = "Ett fel inträffade vid diskbegäran %s: Försöket att begära misslyckades. ";
NAS.MSG20 = "Ett fel inträffade vid borttagning av delningen %s: Delningen %s är en särskild delning som är reserverad för den primära domänkontrollfunktionen. Den kan inte tas bort separat, men om primärdomänkontrollen stängs av tas den bort automatiskt. ";
NAS.MSG21 = "Tog bort delningen %s. ";
NAS.MSG23 = "Modifierade delningen %s. ";
NAS.MSG24 = "Skapade delningen %s. ";
NAS.MSG25 = "Delningsnamnet %s är reserverat. Välj ett annat namn. ";
NAS.MSG30 = "Ett fel inträffade vid radering av diskar: Inga diskar angavs för radering. ";
NAS.MSG31 = "Ett fel inträffade vid radering av diskar: Slut på minne när diskarna skulle raderas. ";
NAS.MSG32 = "Ett fel inträffade vid radering av diskar: Det går inte att radera disken \"%s\".";
NAS.MSG33 = "Ett fel inträffade vid radering av diskar: Slut på minne. ";
NAS.MSG34 = "Alla begärda diskar raderades. ";
NAS.MSG35 = "Ingen åtgärd utfördes eftersom inga diskar var angivna för radering. ";
NAS.MSG36 = "Ett fel inträffade vid radering av diskar: Slut på minne när diskarna skulle raderas. ";
NAS.MSG37 = "Ett fel inträffade vid radering av diskar: Inga diskar angavs för radering. ";
NAS.MSG38 = "Alla begärda diskar raderades. ";
NAS.MSG39 = "Ingen åtgärd utfördes eftersom inga diskar var angivna för radering. ";
NAS.MSG40 = "Det går inte att koppla från disken \"%s\" på ett säkert sätt. ";
NAS.MSG41 = "Kopplade från disk. ";
NAS.MSG42 = "Ändringen av åtkomstegenskaper för delningen %s utfördes. ";
NAS.MSG43 = "Kontoinställningarna kunde inte användas. ";
NAS.MSG44 = "Använde kontoinställningarna. ";
NAS.MSG45 = "De värden du angav är ogiltiga. Försök igen. ";
NAS.MSG46 = "Inställningarna slutfördes. ";
NAS.MSG47 = "Kunde inte %s domän %s (felet %s inträffade) och kunde inte återansluta till domän %s (felet %s inträffade), återgick till medlemskap i arbetsgruppen %s. ";
NAS.MSG48 = "Kunde inte %s domän %s (felet %s inträffade), återgick till medlemskap i domänen %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error Kunde inte %s domän %s (felet %s inträffade), återgick till medlemskap i domän %s. ";
NAS.MSG50 = "Är nu medlem av domän %s. ";
NAS.MSG51 = "Är nu medlem i arbetsgrupp  %s. ";
NAS.MSG52 = "Inställningarna kunde inte användas. ";
NAS.MSG53 = "FTP-delningen togs bort. ";
NAS.MSG54 = "Disken är upptagen!";









