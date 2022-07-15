/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (alleen-lezen)";
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
DISK_FUN.Title = "Schijfbeheer";
DISK_FUN.Part1 = "Details over de schijf";
DISK_FUN.Part2 = "Schijf formatteren";
DISK_FUN.Manufacture = "Schijf";
DISK_FUN.Partition = "Partitie";
DISK_FUN.FS = "Bestandssysteem";
DISK_FUN.TS = "Capaciteit";
DISK_FUN.FreeS = "Vrije ruimte";
DISK_FUN.Shares = "Shares";
DISK_FUN.SharesFd = "Sharesmap";
DISK_FUN.CreateShare = "Share maken";
DISK_FUN.Remain = "Niet-toegewezen";
DISK_FUN.TotalSize = "Totaal";
DISK_FUN.Detecting = "Detectie";
DISK_FUN.MSG1 = "De geselecteerde schijf/schijven bevat(ten) informatie over de afdrukserver.\n U kunt deze schijf/schijven niet wissen";
DISK_FUN.MSG2 = "U kunt deze schijven niet wissen zonder andere schijven in dezelfde schijvengroep te wissen";
DISK_FUN.MSG3 = "Geen schijven geselecteerd om te wissen";
DISK_FUN.MSG4 = "Schijf wordt gewist. Wachten a.u.b.";
DISK_FUN.MSG5 = "Geen schijven beschikbaar";
DISK_FUN.MSG6 = "De toegang voor de groep Admin kan niet worden verwijderd.";
DISK_FUN.MSG7 ="Het aangesloten USB-apparaat wordt niet ondersteund.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Geen schijven beschikbaar.";
DISK_FUN.AP = "Alle_partities";
DISK_FUN.ENTERNAME = "Geef de naam van een partitie op:";
DISK_FUN.WARNING = "Waarschuwing:";
DISK_FUN.FORMATWARN1 = "Waarschuwing: het formatteren van de schijf kan enkele minuten duren. Schakel de";
DISK_FUN.FORMATWARN2 = "netstroom niet uit en druk niet op de Reset-knop.";
DISK_FUN.FIRMVER = "Firmwareversie";
DISK_FUN.BACKUP = "Reservekopie maken";
DISK_FUN.WARNING1 = "WAARSCHUWING! Het wissen van schijven leidt tot onherstelbaar gegevensverlies. Wilt u doorgaan? ";
DISK_FUN.FR = "Map";
DISK_FUN.ENTERINTOF= "Map openen";
DISK_FUN.SELECT = "Selecteer";
DISK_FUN.MPATH = " Deze locatie bestaat niet.";
DISK_FUN.CPATH = "Deze locatie met een gedeelde map bestaat niet.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Schermnaam";
SHARE_FUN.ShareAccess = "Sharetoegang";
SHARE_FUN.Title = "Sharebeheer";
SHARE_FUN.NOTEXIST ="Bestaat niet!";
SHARE_FUN.MSG1 = "Er zijn momenteel geen shares gedefinieerd.";
SHARE_FUN.MSG2 = "Het aantal shares overschrijdt het maximum! U dient er eerst één te verwijderen.";
SHARE_FUN.Properties = "Bewerken";
SHARE_FUN.FF = "FTP-Floader";
SHARE_FUN.MSF = "Mediamap";
SHARE_FUN.SF = "Gedeelde map";
SHARE_FUN.DN = "Schermnaam";
SHARE_FUN.patition = "Partitie";
SHARE_FUN.location = "Locatie";
SHARE_FUN.NF = "Nieuwe map";
SHARE_FUN.CF = "Huidige map";
SHARE_FUN.AF="Toegangsmap";
SHARE_FUN.AS = "Toegang";
SHARE_FUN.AG = "Beschikbare groepen";
SHARE_FUN.GWA = "Groepen met toegang";
SHARE_FUN.GN = "Naam groep";
SHARE_FUN.description = "Omschrijving";
SHARE_FUN.rw = "lezen en schrijven";
SHARE_FUN.ro = "alleen lezen";
SHARE_FUN.NAME ="Naam";
SHARE_FUN.FN = "Naam voluit";
SHARE_FUN.PW = "Wachtwoord";
SHARE_FUN.CP = "Wachtwoord bevestigen";
SHARE_FUN.GM = "Groepslid";
SHARE_FUN.AD = "Account uitgeschakeld";
SHARE_FUN.SUMMARY="Overzicht gedeelde mappen";
SHARE_FUN.IP = "IP-adres van gedeelde schijf";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Groep met toegang";
SA_FUN.OG = "Andere groep";
SA_FUN.MSG1 = "De groep Admin kan niet worden verwijderd!";
SA_FUN.MSG2 = "De groepsnaam bestaat al!";
SA_FUN.FTP_Access ="FTP-toegang";
SA_FUN.Entire_Partition ="Gehele parititie delen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "gast";
AD_FUN.MN = "&nbsp;Computernaam:";
AD_FUN.WN = "&nbsp;Werkgroepnaam:";
AD_FUN.MD = "&nbsp;Omschrijving computer:";
AD_FUN.APS = "&nbsp;Share alle partities:";
AD_FUN.UserName = "Gebruikersnaam";
AD_FUN.FULLNAME = "Naam voluit";
AD_FUN.GroupName = "Naam groep";
AD_FUN.Basic = "Basis";
AD_FUN.UserM = "Gebruikersbeheer";
AD_FUN.GroupM = "Groepsbeheer";
AD_FUN.AnymsAcess="Anonieme toegang";
AD_FUN.AnymsFTP="Anonieme FTP";
AD_FUN.AnymsDisk="Anonieme schijftoegang";
AD_FUN.readonly="schijftoegang; alleen lezen";
AD_FUN.readwrite="schijftoegang; lezen en schrijven";
AD_FUN.svrname="Servernaam";
AD_FUN.devname="Apparaatnaam";
AD_FUN.SLIP="LAN-IP-adres server";
AD_FUN.SWIP="Internet-IP-adres server";
AD_FUN.MSG1 = "Er zijn momenteel geen gebruikers gedefinieerd.";
AD_FUN.MSG2 = "Gebruiker admin kan niet worden verwijderd!";
AD_FUN.MSG3 = "Weet u zeker dat u deze gebruiker wilt verwijderen?";
AD_FUN.MSG4 = "Weet u zeker dat u deze groep wilt verwijderen?";
AD_FUN.MSG5 = " Het maximumaantal gebruikers is bereikt! Als u een andere gebruiker wilt toevoegen, dient u er eerst een te verwijderen.";
AD_FUN.MSG6 = " Het maximumaantal groepen is bereikt! Als u een andere groep wilt toevoegen, dient u er eerst een te verwijderen.";
AD_FUN.MSG7 = "Werkgroepnaam mag niet uit spaties bestaan!";
AD_FUN.MSG8 = "Werkgroepnaam mag niet meer dan 15 tekens zijn!";
AD_FUN.MSG9 = "Werkgroepnaam mag alleen alfanumerieke tekens en streepjes bevatten";
AD_FUN.MSG10 = "Werkgroepnaam moet met een letter beginnen";
AD_FUN.MSG11 = "U wilt de computernaam wijzigen. De bestaande netwerktoewijzing moet dan opnieuw worden ingesteld. \n Wilt u doorgaan?";
AD_FUN.MSG12 = "Computernaam mag niet uit spaties bestaan!";
AD_FUN.MSG13 = "Computernaam mag niet meer dan 15 tekens zijn!";
AD_FUN.MSG14 = "Computernaam mag alleen alfanumerieke tekens en streepjes bevatten";
AD_FUN.MSG15 = "Computernaam moet met een letter beginnen"; 
AD_FUN.MSG16 = "De gebruikersnaam bestaat al!";
AD_FUN.MSG17 = "De gebruikersnaam mag alleen de volgende tekens bevatten: alfanumerieke tekens, streepjes en onderstrepingstekens.";
AD_FUN.MSG18 = "Het aantal groepen overschrijdt het maximum! U dient er eerst één te verwijderen.";
AD_FUN.MSG19 = "De wachtwoordbevestiging komt niet overeen.";
AD_FUN.MSG20 = "Wachtwoord is ongeldig! (minimaal 4, maximaal 8 tekens)";
AD_FUN.MSG21 = "De naam van de gebruiker admin kan niet worden gewijzigd!";
AD_FUN.MSG22 = "De naam van de gebruiker gast kan niet worden gewijzigd!";
AD_FUN.MSG23 = "Gebruikersnaam kan niet leeg zijn!";
AD_FUN.MSG24 = "Voer een accountnaam in!";
AD_FUN.MSG25 = "De accountnaam bestaat al!";
AD_FUN.MSG26 = "Voer een wachtwoord in!";
AD_FUN.MSG27 = "Het aantal gebruikers overschrijdt het maximum! U dient er eerst één te verwijderen.";
AD_FUN.MSG28 = "Gebruikersaccount";
AD_FUN.MSG29 = "De gebruiker admin kan niet worden verwijderd! ";
AD_FUN.MSG30 = "De gebruiker ";
AD_FUN.MSG31 = " kan niet worden verwijderd! ";
AD_FUN.MSG32 = "Geen spaties toegestaan in wachtwoord";
AD_FUN.MSG33 = " Schermnaam mag alleen alfanumerieke tekens en streepjes bevatten.";
AD_FUN.MSG34 = "Wilt u de gebruiker met de naam \"";
AD_FUN.MSG35 = "\" verwijderen?";
AD_FUN.MSG36 = "Wilt u de groep \"";
AD_FUN.MSG37 = "\" verwijderen?";
AD_FUN.MSG38 = "Computer-/servernaam mag niet leeg zijn.";
AD_FUN.MSG39 = "Computer-/servernaam mag alleen alfanumerieke tekens en streepjes bevatten.";
AD_FUN.MSG40 = "Apparaat-/servernaam moet met een letter beginnen!";
AD_FUN.MSG41 = "De routernaam mag niet leeg zijn.";
AD_FUN.MSG42 = "De routernaam mag alleen de volgende tekens bevatten: alfanumerieke tekens en streepjes.";
AD_FUN.MSG43 = "De routernaam moet beginnen met een letter.";
AD_FUN.MSG44 = "De volledige naam van de gebruiker en de omschrijving mogen alleen de volgende tekens bevatten: alfanumerieke tekens, spaties, streepjes en onderstrepingstekens.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Eigenschappen groep";
GA_FUN.OU = "Andere gebruikers";
GA_FUN.UIG = "Gebruikers in groep";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP-mediaserver";
MS_FUN.svrname = "Naam mediaserver";
MS_FUN.Setup = "Instellingen";
MS_FUN.DB = "Database";
MS_FUN.ServerName = "Servernaam:";
MS_FUN.FR= "Folder";
MS_FUN.SCAN = "Scannen";
MS_FUN.LASTSCAN = "Tijd laatste scan";
MS_FUN.AUTOSCAN = "Autoscan elke";
MS_FUN.HOUR="uur";
MS_FUN.MSG1 = "Er zijn momenteel geen scanshares gedefinieerd.";
MS_FUN.MSG2 = "Het aantal scanshares overschrijdt het maximum! U dient er eerst één te verwijderen.";
MS_FUN.MSG3 = "Het scannen van alle partities kan lange tijd in beslag nemen. Wilt u werkelijk doorgaan?";
MS_FUN.MSG4 = "Schijf wordt gescand. Wachten a.u.b.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partitielijst";
SP_FUN.ST = "Selecteer";
SP_FUN.MSG1 = "Sharemap is toegevoegd.";
SP_FUN.MSG2 = "FTP-sharemap is toegevoegd.";
SP_FUN.MSG3 = "Dit pad bestaat al op de scanninglijst! Het kan niet twee keer worden toegevoegd.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "FTP-server";
FS_FUN.svrname = "Naam FTP-server";
FS_FUN.Share = "Delen";
FS_FUN.EDIT = "Bewerken";
FS_FUN.MSG1 = "Momenteel is er geen FTP-toegang gedefinieerd.";
FS_FUN.ACCESS = "Toegang";
FS_FUN.PO = "FTP-poort:";
FS_FUN.FTP_CHARACTERSET = "Codering:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Vereenvoudigd Chinees(GB18030)";
FS_FUN.BIG5="Traditioneel Chinees(Big5)";
FS_FUN.CP1258="Vietnamees(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "In deze hoofdmap kunt u geen nieuwe map maken!";
FS_FUN.ALERT2 = "Voer een geldige mapnaam in!";
FS_FUN.ALERT3 = "Voer een geldige sharenaam in.";
FS_FUN.ALERT4 = "De schermnaam komt al voor op de sharelijst!";
FS_FUN.ALERT5 = "Voer een geldige sharelocatie in.";
FS_FUN.FTPFOLDER = "FTP-map";
FS_FUN.DISPNAME = "Schermnaam";
FS_FUN.UNIQUE = "Moet uniek zijn.";
FS_FUN.PAR = "Partitie";
FS_FUN.LOCA = "Locatie";
FS_FUN.NEWFOLDER = "Nieuwe map";
FS_FUN.CURRENTFOLD = "Huidige map:";
FS_FUN.ACCESS = "Toegang";
FS_FUN.AVAILGROUP =  "Beschikbare groepen";
FS_FUN.GROUPACCESS  = "Groepen met toegang";
FS_FUN.INTERNET = "Internettoegang";
FS_FUN.SUMMARY = "FTP-overzicht";
FS_FUN.ALERT6 = "FTP-poort kan niet leeg zijn! ";
FS_FUN.ALERT7 = "Selecteer een FTP-sharemap! ";
FS_FUN.UNIQUE = " (Moet uniek zijn.) ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Schijf claimen";
CD_FUN.DISK = "Schijf";
CD_FUN.MAM =  "Merk en model";
CD_FUN.PS = "Fysieke grootte";
CD_FUN.NPN = "Nieuwe partitienaam:";
CD_FUN.MSG1 = "WAARSCHUWING! Door Schijf claimen wordt alles op deze schijf gewist.\nWilt u hiermee doorgaan?";
CD_FUN.MSG2 = "WAARSCHUWING: Partitienaam moet in hoofdletters zijn\n\n Uw schijfnaam'";
CD_FUN.MSG3 = "' wordt in hoofdletters omgezet. Wilt u doorgaan?";
CD_FUN.MSG4 = "Partitienaam mag alleen alfanumerieke tekens, streepjes en onderstrepingstekens bevatten";
CD_FUN.MSG5 = "Nieuwe schijfnaam kan niet uit spaties bestaan";
CD_FUN.MSG6 = "WAARSCHUWING: Namen van FAT32-schijven kunnen uit niet meer dan 11 tekens bestaan\n\n Uw schijfnaam'";
CD_FUN.MSG7 = "' wordt verkort tot 11 tekens. Wilt u doorgaan?";
CD_FUN.DISK_MSG = " bestaat niet.\n";
CD_FUN.NODISKS = "Geen schijven aangesloten";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Gebruikersnaam mag alleen alfanumerieke tekens, streepjes en onderstrepingstekens bevatten";
GP_FUN.MSG2 = "Het aantal groepen overschrijdt het maximum! U dient er eerst één te verwijderen.";
GP_FUN.MSG3 = "De groep bestaat al!";
GP_FUN.MSG4 = "Groepsnaam kan niet leeg zijn!";
GP_FUN.MSG5 = "Groepsnaam mag alleen alfanumerieke tekens, streepjes en onderstrepingstekens bevatten";
GP_FUN.GA = "Groepsaccount";
GP_FUN.GN = "Naam groep";
GP_FUN.DES = "Omschrijving";
GP_FUN.ACCESS = "Toegang";
GP_FUN.RNW = "lezen en schrijven";
GP_FUN.RO = "alleen lezen";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Eigenschappen share";
ShareP_FUN.SF = "Sharemap";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Eigenschappen gebruiker";
UP_FUN.FName = "Naam";
UP_FUN.PWD = "Wachtwoord";
UP_FUN.Reconfirm = "Voer opnieuw in ter bevestiging";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Back-up gegevens";
DB_FUN.SELJOB = "Selecteer taaknummer";
DB_FUN.JOBNAME = "Taaknaam";
DB_FUN.BType ="Soort back-up";
DB_FUN.Direction = "Richting";
DB_FUN.WRTSL54GS = "Deze WRTSL54GS";
DB_FUN.RD = "Extern apparaat";
DB_FUN.DAYS = "Dagen";
DB_FUN.TIMES = "Tijden";
DB_FUN.LOGIN = "Aanmeldingsnaam";
DB_FUN.sunday = "&nbsp;Zo";
DB_FUN.Mon = "&nbsp;Ma"; 
DB_FUN.Tue = "&nbsp;Di"; 
DB_FUN.Wed = "&nbsp;Wo";
DB_FUN.Thu = "&nbsp;Do";
DB_FUN.Fri = "&nbsp;Vr";
DB_FUN.Sat = "&nbsp;Za";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Mappenlijst";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Snel wissen";
CMD.FullErase = "Volledig wissen";
CMD.EraseDisk = "Schijf formatteren";
CMD.Refresh = "Vernieuwen";
CMD.Claim = "Claimen";
CMD.SAVESET = "Instellingen opslaan";
CMD.SafeRemove = "Schijf veilig verwijderen";
CMD.CreateShare = "Share maken";
CMD.ModifyShare = "Share wijzigen";
CMD.SELPart = "Partitie selecteren";
CMD.Modify = "Wijzigen";
CMD.Delete = "Verwijderen";
CMD.RO = ">> Alleen lezen";
CMD.RW = ">> Lezen/schrijven";
CMD.RM = "<< Verwijderen";
CMD.CANCELCHANGE = "Wijzigingen annuleren";
CMD.CT = "Doorgaan";
CMD.CLOSE = "Sluiten";
CMD.CreateNewUser = "Nieuwe gebruiker maken";
CMD.CreateNewGroup = "Nieuwe groep maken";
CMD.CreateNewShare = "Nieuwe share maken";
CMD.JG = ">> Bij groep voegen ";
CMD.SAP = "Alles scannen ";
CMD.SPS = "Map opgeven voor scannen";
CMD.UOL = " Eén niveau omhoog ";
CMD.SP = "Partitie selecteren";
CMD.FSA = "Map opgeven voor toegang";
CMD.Claim = "Claimen";
CMD.CL = "Wissen";
CMD.CANCEL = "Annuleren";
CMD.CGroup = "Groep maken";
CMD.CUser = "Gebruiker maken";
CMD.MUser = "Gebruiker wijzigen";
CMD.NOPWD = "GEEN WACHTWOORD";
CMD.DTE = "Item verwijderen";
CMD.ALERT1 = "Schijf wordt vernieuwd. Een ogenblik geduld. ";
CMD.CREATE = "Maken";
CMD.UPFOLDER = "Terug naar bovenliggende map";
CMD.ALLFOLDER = "Alle mappen";
CMD.FORMAT = "Indeling";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Inschakelen";
OPT.item_Disable = "Uitschakelen";
OPT.item_ALLP = "Alle partities";
OPT.item_SF = "Map opgeven";
OPT.item_Everyday = "Dagelijks";
OPT.item_opt1 = "Van deze WRTSL54GS naar een ander apparaat";
OPT.item_opt2 = "Van een ander apparaat naar deze WRTSL54GS"; 
OPT.item_opt3 = "Toegang vereist aanmelden";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Meer...";
HELPMSG.DISK1 = "Geeft de details weer van de schijf die momenteel met de router is verbonden.";
HELPMSG.DISK2 = "Klik op het aankruisvakje naast de naam van elke schijf die u wilt wissen.";
HELPMSG.SHARE1 = "Geeft de details weer van de shares die u momenteel heeft gemaakt.";
HELPMSG.SHARE2 = "Klik op de knop Nieuwe share maken om een nieuwe share te maken.";
HELPMSG.AD1 = "De naam van deze router.";
HELPMSG.AD2 = "De naam van de computers in het netwerk.";
HELPMSG.AD3 = "De gebruikers staan in de tabel vermeld.";
HELPMSG.AD4 = "Klik op de knop Nieuwe gebruiker maken om een nieuwe gebruiker te maken.";
HELPMSG.AD5 = "De groepen staan in de tabel vermeld.";
HELPMSG.AD6 = "Klik op de knop Nieuwe groep maken om een nieuwe groep te maken.";
HELPMSG.AD7 = "Voer de naam van de groep in. De lengte van de groepsnaam mag niet meer dan 12 tekens zijn.";
HELPMSG.MS1 = "Geeft de naam weer die de media-adapter gebruikt om de server te identificeren.";
HELPMSG.MS2 = "Klik op deze knop om alle partities van de USB-schijf te scannen.";
HELPMSG.MS3 = "Klik op deze knop om de map of partitie te selecteren die u wilt scannen.";
HELPMSG.CD1 = "Een partitie op de lege schijf maken die als FAT32 wordt geformatteerd.";
HELPMSG.ShareP1 = "Geef de naam van de share op.";
HELPMSG.ShareP2 = "Dit is de map die deze share zal bevatten. Klik op Partitie selecteren om uit een lijst met beschikbare mappen te kiezen.";
HELPMSG.UP1 = "Voer de gebruikersnaam in. De gebruikersnaam kan uit maximaal 20 tekens bestaan.";
HELPMSG.UP2 = "Voer het wachtwoord in. Het wachtwoord dient uit minimaal 4 en maximaal 8 tekens te bestaan.";
HELPMSG.UP3 = "Voer het wachtwoord nogmaals in om het te bevestigen.";
HELPMSG.UP4 = "Groep";
HELPMSG.UP5 = "Selecteer de groep waarin u deze gebruiker wilt plaatsen.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Schijf";
FUNST.Share="Delen";
FUNST.MS="Mediaserver";
FUNST.FTP = "FTP-server";

var NAS = new Object();
NAS.MSG1 = "Accountinstellingen zijn toegepast. ";
NAS.MSG2 = "De account %s bestaat al! ";
NAS.MSG3 = "Kan instellingen niet toepassen! ";
NAS.MSG4 = "Scanshare is verwijderd. ";
NAS.MSG5 = "Kan mediadatabase niet bijwerken! ";
NAS.MSG6 = "Kan mediadatabase niet bijwerken! Share bestaat niet. ";
NAS.MSG7 = "Kan mediadatabase niet bijwerken! ";
NAS.MSG8 = "Database is bijgewerkt. ";
NAS.MSG9 = "Kan mediadatabase niet bijwerken. Er is geen partitie! ";
NAS.MSG10 = "Database is bijgewerkt. ";
NAS.MSG11 = "Scanshare is toegevoegd. ";
NAS.MSG12 = "Sharenaam %s is gereserveerd. Kies een andere naam. ";
NAS.MSG13 = "Share %s is gewijzigd. ";
NAS.MSG14 = "Share %s is gemaakt. ";
NAS.MSG15 = "Fout bij claimen van schijf %s: Schijf '%s' bestaat niet. ";
NAS.MSG16 = "Fout bij claimen van schijf: u hebt geen nieuwe naam opgegeven voor de schijf. ";
NAS.MSG17 = "De opgegeven schijfnaam, '%s', is ongeldig. ";
NAS.MSG18 = "De schijf is geclaimd. ";
NAS.MSG19 = "Fout bij claimen van schijf %s: de claim is mislukt. ";
NAS.MSG20 = "Fout tijdens verwijderen van share %s: share %s is een speciale share die gereserveerd is voor gebruik door de primaire domeincontroller. Deze share kan niet apart worden verwijderd, maar als de primaire domeincontroller wordt uitgeschakeld, wordt deze share automatisch verwijderd. ";
NAS.MSG21 = "Share %s is verwijderd. ";
NAS.MSG23 = "Share %s is gewijzigd. ";
NAS.MSG24 = "Share %s is gemaakt. ";
NAS.MSG25 = "Sharenaam %s is gereserveerd. Kies een andere naam. ";
NAS.MSG30 = "Fout bij schijven wissen: er zijn geen schijven opgegeven om te wissen. ";
NAS.MSG31 = "Fout bij schijven wissen: onvoldoende geheugenruimte om schijven te wissen. ";
NAS.MSG32 = "Fout bij schijven wissen: kan schijf '%s' niet wissen. ";
NAS.MSG33 = "Fout bij schijven wissen: geheugen vol. ";
NAS.MSG34 = "Alle gevraagde schijven zijn gewist. ";
NAS.MSG35 = "Er zijn geen schijven opgegeven om te wissen; er is niets gewist. ";
NAS.MSG36 = "Fout bij schijven wissen: onvoldoende geheugenruimte om schijven te wissen. ";
NAS.MSG37 = "Fout bij schijven wissen: er zijn geen schijven opgegeven om te wissen. ";
NAS.MSG38 = "Alle gevraagde schijven zijn gewist. ";
NAS.MSG39 = "Er zijn geen schijven opgegeven om te wissen; er is niets gewist. ";
NAS.MSG40 = "Kan schijf '%s' niet veilig loskoppelen. ";
NAS.MSG41 = "Schijf is losgekoppeld. ";
NAS.MSG42 = "Eigenschappen van share %s zijn gewijzigd. ";
NAS.MSG43 = "Kan accountinstellingen niet toepassen! ";
NAS.MSG44 = "Accountinstellingen zijn toegepast. ";
NAS.MSG45 = "De ingevoerde waarden zijn ongeldig. Probeer het opnieuw. ";
NAS.MSG46 = "Instellen voltooid. ";
NAS.MSG47 = "Kan domein %s niet %s (fout %s) en kan niet opnieuw lid worden van domein %s (fout %s), teruggezet naar lidmaatschap van werkgroep %s. ";
NAS.MSG48 = "Kan domein %s niet %s (fout %s); teruggezet naar lidmaatschap van domein %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error Kan domein %s niet %s (fout %s); teruggezet naar lidmaatschap van domein %s. ";
NAS.MSG50 = "Nu lid van domein %s. ";
NAS.MSG51 = "Nu lid van een werkgroep %s. ";
NAS.MSG52 = "Kan instellingen niet toepassen! ";
NAS.MSG53 = "FTP-share is verwijderd. ";
NAS.MSG54 = "De schijf is bezig!";








