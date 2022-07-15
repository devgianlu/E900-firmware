/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (schreibgeschützt)";
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
DISK_FUN.Title = "Datenträgerverwaltung";
DISK_FUN.Part1 = "Datenträgerdetails";
DISK_FUN.Part2 = "Formatieren des Datenträgers";
DISK_FUN.Manufacture = "Datenträger";
DISK_FUN.Partition = "Partition";
DISK_FUN.FS = "Dateisystem";
DISK_FUN.TS = "Speicherplatz";
DISK_FUN.FreeS = "Freier<br>Speicher-<br>platz";
DISK_FUN.Shares = "Freigaben";
DISK_FUN.SharesFd = "Freigabeordner";
DISK_FUN.CreateShare = "Freigabe erstellen";
DISK_FUN.Remain = "Nicht zugewiesen";
DISK_FUN.TotalSize = "Insgesamt";
DISK_FUN.Detecting = "Suche";
DISK_FUN.MSG1 = "Auf den ausgewählten Datenträgern sind Druckserverinformationen vorhanden.\n Sie können die Datenträger nicht löschen.";
DISK_FUN.MSG2 = "Sie können Datenträger nicht löschen, ohne auch andere Datenträger des gleichen Datenträgerpools zu löschen.";
DISK_FUN.MSG3 = "Keine Datenträger zum Löschen ausgewählt";
DISK_FUN.MSG4 = "Datenträger wird gelöscht, bitte warten!";
DISK_FUN.MSG5 = "Kein Datenträger vorhanden";
DISK_FUN.MSG6 = "Der Zugriff auf die Admin-Gruppe kann nicht entfernt werden!";
DISK_FUN.MSG7= "Das angeschlossene USB-Gerät wird nicht unterstützt!";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Kein Datenträger vorhanden.";
DISK_FUN.AP = "All_Partitions";
DISK_FUN.ENTERNAME = "Geben Sie einen Partitionsnamen ein:";
DISK_FUN.WARNING = "Warnung:";
DISK_FUN.FORMATWARN1 = "Die Formatierung des Datenträgers kann einige Minuten dauern. Schalten Sie das Gerät nicht aus,";
DISK_FUN.FORMATWARN2 = "und drücken Sie nicht die Reset-Taste.";
DISK_FUN.FIRMVER = "Firmware-Version";
DISK_FUN.BACKUP = "Sicherung";
DISK_FUN.WARNING1 = "WARNUNG! Durch das Löschen von Datenträgern gehen Daten verloren, die nicht wiederhergestellt werden können. Möchten Sie trotzdem fortfahren? ";
DISK_FUN.FR = "Ordner";
DISK_FUN.ENTERINTOF= "In Ordner eingeben";
DISK_FUN.SELECT = "Auswählen";
DISK_FUN.MPATH = " Dieser Speicherort existiert nicht.";
DISK_FUN.CPATH = "Der Speicherort des freigegebenen Ordners existiert nicht.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Anzeigename";
SHARE_FUN.ShareAccess = "Freigabezugriff";
SHARE_FUN.Title = "Freigabeverwaltung";
SHARE_FUN.NOTEXIST ="Nicht vorhanden!";
SHARE_FUN.MSG1 = "Zurzeit sind keine Freigaben definiert.";
SHARE_FUN.MSG2 = "Die Anzahl der Freigaben übersteigt das Maximum! Es muss zunächst einer gelöscht werden.";
SHARE_FUN.Properties = "Bearbeiten";
SHARE_FUN.FF = "FTP Floader";
SHARE_FUN.MSF = "Medienordner";
SHARE_FUN.SF = "Freigegebener Ordner";
SHARE_FUN.DN = "Anzeigename";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Speicherort";
SHARE_FUN.NF = "Neuer Ordner";
SHARE_FUN.CF = "Aktueller Ordner";
SHARE_FUN.AF="Auf Ordner zugreifen";
SHARE_FUN.AS = "Zugriff";
SHARE_FUN.AG = "Verfügbare Gruppen";
SHARE_FUN.GWA = "Gruppen mit Zugriff";
SHARE_FUN.GN = "Gruppenname";
SHARE_FUN.description = "Beschreibung";
SHARE_FUN.rw = "Lese-/Schreibzugriff";
SHARE_FUN.ro = "Schreibgeschützt";
SHARE_FUN.NAME ="Name";
SHARE_FUN.FN = "Vollständiger Name";
SHARE_FUN.PW = "Passwort";
SHARE_FUN.CP = "Passwort bestätigen";
SHARE_FUN.GM = "Gruppenmitglied";
SHARE_FUN.AD = "Konto deaktiviert";
SHARE_FUN.SUMMARY="Freigegebene Ordner – Übersicht";
SHARE_FUN.IP = "IP-Adresse des freigegebenen Datenträgers: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Gruppe mit Zugriff";
SA_FUN.OG = "Andere Gruppe";
SA_FUN.MSG1 = "Die Admin-Gruppe kann nicht entfernt werden!";
SA_FUN.MSG2 = "Der Gruppenname ist bereits vorhanden.";
SA_FUN.FTP_Access ="FTP-Zugriff";
SA_FUN.Entire_Partition ="Gesamte Partition freigeben";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "Gast";
AD_FUN.MN = "&nbsp;Gerätename:";
AD_FUN.WN = "&nbsp;Arbeitsgruppenname:";
AD_FUN.MD = "&nbsp;Gerätebeschreibung:";
AD_FUN.APS = "&nbsp;Alle Partitionen freigegeben:";
AD_FUN.UserName = "Benutzername";
AD_FUN.FULLNAME = "Vollständiger Name";
AD_FUN.GroupName = "Gruppenname";
AD_FUN.Basic = "Allgemein";
AD_FUN.UserM = "Benutzerverwaltung";
AD_FUN.GroupM = "Gruppenverwaltung";
AD_FUN.AnymsAcess="Anonymer Zugriff";
AD_FUN.AnymsFTP="Anonymer FTP";
AD_FUN.AnymsDisk="Anonymer Zugriff auf Datenträger";
AD_FUN.readonly="Lesezugriff auf Datenträger";
AD_FUN.readwrite="Lese- und Schreibzugriff auf Datenträger";
AD_FUN.svrname="Servername";
AD_FUN.devname="Gerätename";
AD_FUN.SLIP="LAN-IP-Adresse des Servers";
AD_FUN.SWIP="Internet-IP-Adresse des Servers";
AD_FUN.MSG1 = "Zurzeit sind keine Benutzer definiert.";
AD_FUN.MSG2 = "Der Benutzeradministrator kann nicht gelöscht werden!";
AD_FUN.MSG3 = "Möchten Sie diesen Benutzer wirklich löschen?";
AD_FUN.MSG4 = "Möchten Sie diese Gruppe wirklich löschen?";
AD_FUN.MSG5 = "Die maximale Anzahl an Benutzern wurde erreicht! Um weitere Benutzer hinzuzufügen, müssen Sie zuvor einen anderen Benutzer löschen.";
AD_FUN.MSG6 = "Die maximale Anzahl an Gruppen wurde erreicht! Um weitere Gruppen hinzuzufügen, müssen Sie zuvor eine andere Gruppe löschen.";
AD_FUN.MSG7 = "Der Arbeitsgruppenname darf nicht leer sein!";
AD_FUN.MSG8 = "Der Arbeitsgruppenname darf höchstes 15 Zeichen lang sein!";
AD_FUN.MSG9 = "Der Arbeitsgruppenname darf ausschließlich alphanumerische Zeichen und Bindestriche enthalten.";
AD_FUN.MSG10 = "Der Arbeitsgruppenname muss mit einem Buchstaben beginnen.";
AD_FUN.MSG11 = "Sie möchten den Gerätenamen ändern. Vorhandene Netzwerkzuordnungen müssen neu vorgenommen werden. \n Möchten Sie fortfahren?";
AD_FUN.MSG12 = "Der Gerätename darf nicht leer sein!";
AD_FUN.MSG13 = "Der Gerätename darf höchstes 15 Zeichen lang sein!";
AD_FUN.MSG14 = "Der Gerätename darf ausschließlich alphanumerische Zeichen und Bindestriche enthalten.";
AD_FUN.MSG15 = "Der Gerätename muss mit einem Buchstaben beginnen."; 
AD_FUN.MSG16 = "Der Benutzername ist bereits vorhanden.";
AD_FUN.MSG17 = "Der Benutzername darf ausschließlich die folgenden Zeichen enthalten: alphanumerische Zeichen, Bindestriche und Unterstriche.";
AD_FUN.MSG18 = "Die Anzahl der Gruppen übersteigt das Maximum! Es muss zunächst einer gelöscht werden.";
AD_FUN.MSG19 = "Die Passwort-Bestätigung stimmt nicht mit dem Passwort überein.";
AD_FUN.MSG20 = "Das Passwort ist ungültig. (mindestens 4, maximal 8 Zeichen)";
AD_FUN.MSG21 = "Der Benutzer Admin kann nicht umbenannt werden!";
AD_FUN.MSG22 = "Der Benutzer Gast kann nicht umbenannt werden!";
AD_FUN.MSG23 = "Benutzername darf nicht leer sein!";
AD_FUN.MSG24 = "Sie müssen einen Kontonamen eingeben.";
AD_FUN.MSG25 = "Der Name des Kontos ist bereits vorhanden.";
AD_FUN.MSG26 = "Geben Sie ein Passwort ein.";
AD_FUN.MSG27 = "Die Anzahl der Benutzer übersteigt das Maximum. Es muss zunächst einer gelöscht werden.";
AD_FUN.MSG28 = "Benutzerkonto";
AD_FUN.MSG29 = "Der Benutzeradministrator kann nicht entfernt werden! ";
AD_FUN.MSG30 = "Der Benutzer ";
AD_FUN.MSG31 = " kann nicht entfernt werden! ";
AD_FUN.MSG32 = "Das Passwort darf keine Leerzeichen enthalten.";
AD_FUN.MSG33 = " Der Anzeigename darf ausschließlich alphanumerische Zeichen und Bindestriche enthalten. ";
AD_FUN.MSG34 = "Möchten Sie den Benutzer \"";
AD_FUN.MSG35 = "\" löschen?";
AD_FUN.MSG36 = "Möchten Sie die Gruppe \"";
AD_FUN.MSG37 = "\" löschen?";
AD_FUN.MSG38 = "Der Geräte-/Servername darf nicht leer sein!";
AD_FUN.MSG39 = "Der Geräte-/Servername darf ausschließlich alphanumerische Zeichen und Bindestriche enthalten!";
AD_FUN.MSG40 = "Der Geräte-/Servername muss mit einem Buchstaben beginnen!";
AD_FUN.MSG41 = "Der Routername darf nicht leer sein.";
AD_FUN.MSG42 = "Der Routername darf ausschließlich alphanumerische Zeichen und Bindestriche enthalten.";
AD_FUN.MSG43 = "Der Routername muss mit einem Buchstaben beginnen.";
AD_FUN.MSG44 = "Der vollständige Benutzername und die Beschreibung dürfen ausschließlich die folgenden Zeichen enthalten: alphanumerische Zeichen, Leerzeichen, Bindestriche und Unterstriche.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Gruppeneigenschaften";
GA_FUN.OU = "Weitere Benutzer";
GA_FUN.UIG = "Benutzer in Gruppe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP Media Server";
MS_FUN.svrname = "Media-Servername";
MS_FUN.Setup = "Einrichtung";
MS_FUN.DB = "Datenbank";
MS_FUN.ServerName = "Servername:";
MS_FUN.FR= "Ordner";
MS_FUN.SCAN = "Scannen";
MS_FUN.LASTSCAN = "Zeitpunkt des letzten Scanvorgangs";
MS_FUN.AUTOSCAN = "Automatisch Scannen alle";
MS_FUN.HOUR="Stunden";
MS_FUN.MSG1 = "Zurzeit sind keine Scanfreigaben definiert.";
MS_FUN.MSG2 = "Die Anzahl der Scanfreigaben übersteigt das Maximum! Es muss zunächst einer gelöscht werden.";
MS_FUN.MSG3 = "Das Scannen aller Partitionen kann einige Zeit in Anspruch nehmen. Möchten Sie wirklich fortfahren?";
MS_FUN.MSG4 = "Datenträger wird gescannt, bitte warten.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partitionsliste";
SP_FUN.ST = "Wählen Sie";
SP_FUN.MSG1 = "Freigabeordner erfolgreich hinzugefügt.";
SP_FUN.MSG2 = "FTP-Freigabeordner erfolgreich hinzugefügt.";
SP_FUN.MSG3 = "Dieser Pfad ist in der Scanliste bereits vorhanden! Er kann nicht zweimal verwendet werden.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "FTP-Server";
FS_FUN.svrname = "FTP-Servername";
FS_FUN.Share = "Freigabe";
FS_FUN.EDIT = "Bearbeiten";
FS_FUN.MSG1 = "Zurzeit ist kein FTP-Zugriff definiert.";
FS_FUN.ACCESS = "Zugriff";
FS_FUN.PO = "FTP-Port:";
FS_FUN.FTP_CHARACTERSET = "Encoding:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chinesisch vereinfacht(GB18030)";
FS_FUN.BIG5="Traditionelles Chinesisch(Big5)";
FS_FUN.CP1258="Vietnamesisch(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Für diese Root ist das Erstellen eines neuen Ordners nicht zugelassen.";
FS_FUN.ALERT2 = "Geben Sie einen gültigen Ordnernamen ein.";
FS_FUN.ALERT3 = "Geben Sie einen gültigen Freigabenamen ein.";
FS_FUN.ALERT4 = "Der Anzeigename ist bereits in der Freigabeliste enthalten.";
FS_FUN.ALERT5 = "Geben Sie einen gültigen Freigabespeicherplatz ein.";
FS_FUN.FTPFOLDER = "FTP-Ordner";
FS_FUN.DISPNAME = "Anzeigename";
FS_FUN.UNIQUE = "Muss eindeutig sein.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Speicherort";
FS_FUN.NEWFOLDER = "Neuer Ordner";
FS_FUN.CURRENTFOLD = "Aktueller Ordner:";
FS_FUN.ACCESS = "Zugriff";
FS_FUN.AVAILGROUP =  "Verfügbare Gruppen";
FS_FUN.GROUPACCESS  = "Gruppen mit Zugriff";
FS_FUN.INTERNET = "Internetzugriff";
FS_FUN.SUMMARY = "FTP-Übersicht";
FS_FUN.ALERT6 = "Sie müssen einen FTP-Port angeben! ";
FS_FUN.ALERT7 = "Wählen Sie einen FTP-Freigabeordner aus";
FS_FUN.UNIQUE = " (muss eindeutig sein). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Datenträger beanspruchen";
CD_FUN.DISK = "Datenträger";
CD_FUN.MAM =  "Hersteller und Modell";
CD_FUN.PS = "Physische Größe";
CD_FUN.NPN = "Neuer Partitionsname:";
CD_FUN.MSG1 = "WARNUNG! Durch die Beanspruchung des Datenträgers werden sämtliche Daten auf diesem Datenträger gelöscht.\nMöchten Sie fortfahren?";
CD_FUN.MSG2 = "WARNUNG: Für Partitionsnamen sind Großbuchstaben erforderlich. \n\nDer Datenträgername '";
CD_FUN.MSG3 = "' wird in Großbuchstaben konvertiert. Möchten Sie fortfahren?";
CD_FUN.MSG4 = "Der Partitionsname darf ausschließlich alphanumerische Zeichen, Bindestriche und Unterstriche enthalten.";
CD_FUN.MSG5 = "Neue Datenträgernamen dürfen nicht leer sein.";
CD_FUN.MSG6 = "WARNUNG: FAT32-Datenträgernamen dürfen höchstens 11 Zeichen lang sein.\n\n Der Datenträgername '";
CD_FUN.MSG7 = "' wird auf 11 Zeichen gekürzt. Möchten Sie fortfahren?";
CD_FUN.DISK_MSG = " ist nicht vorhanden.\n";
CD_FUN.NODISKS = "Kein Datenträger ausgewählt";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Der Benutzername darf ausschließlich alphanumerische Zeichen, Bindestriche und Unterstriche enthalten.";
GP_FUN.MSG2 = "Die Anzahl der Gruppen übersteigt das Maximum! Es muss zunächst einer gelöscht werden.";
GP_FUN.MSG3 = "Die Gruppe ist bereits vorhanden!";
GP_FUN.MSG4 = "Gruppenname darf nicht leer sein!";
GP_FUN.MSG5 = "Der Gruppenname darf ausschließlich alphanumerische Zeichen, Bindestriche und Unterstriche enthalten.";
GP_FUN.GA = "Gruppenkonto";
GP_FUN.GN = "Gruppenname";
GP_FUN.DES = "Beschreibung";
GP_FUN.ACCESS = "Zugriff";
GP_FUN.RNW = "Lese-/Schreibzugriff";
GP_FUN.RO = "Schreibgeschützt";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Freigabeeigenschaften";
ShareP_FUN.SF = "Freigabeordner";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Benutzereigenschaften";
UP_FUN.FName = "Name";
UP_FUN.PWD = "Passwort";
UP_FUN.Reconfirm = "Zur Bestätigung erneut eingeben";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Datensicherung";
DB_FUN.SELJOB = "Auftragsnummer auswählen";
DB_FUN.JOBNAME = "Auftragsname";
DB_FUN.BType ="Sicherungsart";
DB_FUN.Direction = "Richtung";
DB_FUN.WRTSL54GS = "Dieser WRTSL54GS";
DB_FUN.RD = "Entferntes Gerät";
DB_FUN.DAYS = "Tage";
DB_FUN.TIMES = "Zeiten";
DB_FUN.LOGIN = "Anmeldename";
DB_FUN.sunday = "&nbsp;So";
DB_FUN.Mon = "&nbsp;Mo"; 
DB_FUN.Tue = "&nbsp;Di"; 
DB_FUN.Wed = "&nbsp;Mi";
DB_FUN.Thu = "&nbsp;Do";
DB_FUN.Fri = "&nbsp;Fr";
DB_FUN.Sat = "&nbsp;Sa";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Ordnerliste";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Schnelles Löschen";
CMD.FullErase = "Vollständiges Löschen";
CMD.EraseDisk = "Formatieren des Datenträgers";
CMD.Refresh = "Aktualisieren";
CMD.Claim = "Beanspruchen";
CMD.SAVESET = "Einstellungen speichern";
CMD.SafeRemove = "Datenträger sicher entfernen";
CMD.CreateShare = "Freigabe erstellen";
CMD.ModifyShare = "Freigabe bearbeiten";
CMD.SELPart = "Partition auswählen";
CMD.Modify = "Bearbeiten";
CMD.Delete = "Löschen";
CMD.RO = ">> Schreibgeschützt";
CMD.RW = ">> Lese-/Schreibzugriff";
CMD.RM = "<< Entfernen";
CMD.CANCELCHANGE = "Änderungen verwerfen";
CMD.CT = "Fortfahren";
CMD.CLOSE = "Schließen";
CMD.CreateNewUser = "Neuen Benutzer erstellen";
CMD.CreateNewGroup = "Neue Gruppe erstellen";
CMD.CreateNewShare = "Neue Freigabe erstellen";
CMD.JG = ">> Gruppe beitreten ";
CMD.SAP = "Alle scannen ";
CMD.SPS = "Bestimmten Ordner für Scanvorgang auswählen";
CMD.UOL = " Eine Ebene nach oben ";
CMD.SP = "Partition auswählen";
CMD.FSA = "Bestimmten Ordner für Zugriff auswählen";
CMD.Claim = "Beanspruchen";
CMD.CL = "Löschen";
CMD.CANCEL = "Abbrechen";
CMD.CGroup = "Gruppe erstellen";
CMD.CUser = "Benutzer erstellen";
CMD.MUser = "Benutzer bearbeiten";
CMD.NOPWD = "KEIN PASSWORT";
CMD.DTE = "Diesen Eintrag löschen";
CMD.ALERT1 = "Datenträger wird erneuert. Bitte warten... ";
CMD.CREATE = " Erstellen";
CMD.UPFOLDER = " Zu übergeordnetem Ordner";
CMD.ALLFOLDER = " Alle Ordner";
CMD.FORMAT = "Format";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Aktivieren";
OPT.item_Disable = "Deaktivieren";
OPT.item_ALLP = "Alle Partitionen";
OPT.item_SF = "Ordner angeben";
OPT.item_Everyday = "An allen Tagen";
OPT.item_opt1 = "Von diesem WRTSL54GS auf ein anderes Gerät";
OPT.item_opt2 = "Von einem anderen Gerät auf diesen WRTSL54GS"; 
OPT.item_opt3 = "Für den Zugriff ist eine Anmeldung erforderlich.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Weitere Informationen";
HELPMSG.DISK1 = "Zeigt Details zum Datenträger an, der momentan mit dem Router verbunden ist.";
HELPMSG.DISK2 = "Aktivieren Sie zum Löschen eines Datenträgers das Kontrollkästchen neben diesem Datenträger.";
HELPMSG.SHARE1 = "Zeigt Details zu den Freigaben an, die Sie zuletzt erstellt haben.";
HELPMSG.SHARE2 = "Klicken Sie auf die Schaltfläche Neue Freigabe erstellen, um eine neue Freigabe zu erstellen.";
HELPMSG.AD1 = "Der Name dieses Routers.";
HELPMSG.AD2 = "Der Name der Netzwerk-Computer.";
HELPMSG.AD3 = "Die Benutzer werden in der Tabelle angegeben.";
HELPMSG.AD4 = "Klicken Sie zum Erstellen eines neuen Benutzers auf die Schaltfläche Neuen Benutzer erstellen.";
HELPMSG.AD5 = "Die Gruppen werden in der Tabelle angegeben.";
HELPMSG.AD6 = "Klicken Sie zum Erstellen einer neuen Gruppe auf die Schaltfläche Neue Gruppe erstellen.";
HELPMSG.AD7 = "Geben Sie den Namen der Gruppe ein. Gruppennamen dürfen höchstens 12 Zeichen lang sein.";
HELPMSG.MS1 = "Zeigt den Namen an, der vom Media-Adapter zur Identifizierung des Servers verwendet wird.";
HELPMSG.MS2 = "Klicken Sie auf diese Schaltfläche, um sämtliche Partitionen des USB-Datenträgers zu scannen.";
HELPMSG.MS3 = "Klicken Sie auf diese Schaltfläche, um einen bestimmten Ordner oder eine bestimmte Partition für den Scanvorgang auszuwählen.";
HELPMSG.CD1 = "Zur Erstellung einer Partition auf dem leeren Datenträger, der als FAT32 formatiert wird.";
HELPMSG.ShareP1 = "Geben Sie den Freigabenamen ein.";
HELPMSG.ShareP2 = "Dies ist der Ordner, den diese Freigabe enthalten wird. Klicken Sie auf Partition auswählen, um aus einer Liste der verfügbaren Ordner auszuwählen.";
HELPMSG.UP1 = "Geben Sie den Benutzernamen ein. Der Benutzername darf höchstens 20 Zeichen lang sein.";
HELPMSG.UP2 = "Geben Sie das Passwort ein. Das Passwort muss zwischen 4 und 8 Zeichen lang sein.";
HELPMSG.UP3 = "Geben Sie das Passwort zur Bestätigung erneut ein.";
HELPMSG.UP4 = "Gruppe";
HELPMSG.UP5 = "Wählen Sie die Gruppe aus, zu der dieser Benutzer gehören soll.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Datenträger";
FUNST.Share="Freigabe";
FUNST.MS="Medien-Server";
FUNST.FTP = "FTP-Server";

var NAS = new Object();
NAS.MSG1 = "Konto-Einstellungen wurden erfolgreich übernommen. ";
NAS.MSG2 = "Das Konto %s ist bereits vorhanden. ";
NAS.MSG3 = "Einstellungen konnten nicht übernommen werden. ";
NAS.MSG4 = "Scanfreigaben wurden erfolgreich gelöscht. ";
NAS.MSG5 = "Mediendatenbank konnte nicht aktualisiert werden. ";
NAS.MSG6 = "Mediendatenbank konnte nicht aktualisiert werden. Keine Freigabe vorhanden. ";
NAS.MSG7 = "Mediendatenbank konnte nicht aktualisiert werden. ";
NAS.MSG8 = "Datenbank wurde erfolgreich aktualisiert. ";
NAS.MSG9 = "Mediendatenbank konnte nicht aktualisiert werden. Keine Partition vorhanden. ";
NAS.MSG10 = "Datenbank wurde erfolgreich aktualisiert. ";
NAS.MSG11 = "Scanfreigaben wurden erfolgreich hinzugefügt. ";
NAS.MSG12 = "Der Freigabename %s ist bereits vergeben. Geben Sie einen anderen Namen ein. ";
NAS.MSG13 = "Freigabe %s wurde erfolgreich geändert. ";
NAS.MSG14 = "Freigabe %s wurde erfolgreich erstellt. ";
NAS.MSG15 = "Fehler beim Zugriff auf Datenträger %s: Datenträger '%s' existiert nicht. ";
NAS.MSG16 = "Fehler beim Zugriff auf Datenträger %s: Sie haben keinen neuen Namen für den Datenträger angegeben. ";
NAS.MSG17 = "Der angegebene Name des Datenträger '%s' ist ungültig. ";
NAS.MSG18 = "Auf Datenträger konnte erfolgreich zugegriffen werden. ";
NAS.MSG19 = "Fehler beim Zugriff auf Datenträger %s: Zugriff ist fehlgeschlagen. ";
NAS.MSG20 = "Fehler beim Löschen der Freigabe %s: Die Freigabe %s ist der Verwendung durch den Primary Domain Controller vorbehalten. Die Freigabe kann nicht separat gelöscht werden. Sie wird jedoch automatisch entfernt, sobald der Primary Domain Controller deaktiviert ist. ";
NAS.MSG21 = "Freigabe %s wurde erfolgreich gelöscht. ";
NAS.MSG23 = "Freigabe %s wurde erfolgreich geändert. ";
NAS.MSG24 = "Freigabe %s wurde erfolgreich erstellt. ";
NAS.MSG25 = "Der Freigabename %s ist bereits vergeben. Geben Sie einen anderen Namen ein. ";
NAS.MSG30 = "Fehler beim Löschen der Datenträger: Keine Datenträger angegeben. ";
NAS.MSG31 = "Fehler beim Löschen der Datenträger: Nicht genügend Arbeitsspeicher für Vorgang verfügbar. ";
NAS.MSG32 = "Fehler beim Löschen der Datenträger: Datenträger '%s' konnte nicht gelöscht werden. ";
NAS.MSG33 = "Fehler beim Löschen der Datenträger: Nicht genügend Arbeitsspeicher. ";
NAS.MSG34 = "Alle angegebenen Datenträger wurden erfolgreich gelöscht. ";
NAS.MSG35 = "Keine Datenträger angegeben. Der Löschvorgang konnte nicht ausgeführt werden. ";
NAS.MSG36 = "Fehler beim Löschen der Datenträger: Nicht genügend Arbeitsspeicher für Vorgang verfügbar. ";
NAS.MSG37 = "Fehler beim Löschen der Datenträger: Keine Datenträger angegeben. ";
NAS.MSG38 = "Alle angegebenen Datenträger wurden erfolgreich gelöscht. ";
NAS.MSG39 = "Keine Datenträger angegeben. Der Löschvorgang konnte nicht ausgeführt werden. ";
NAS.MSG40 = "Datenträger '%s' konnte nicht sicher entfernt werden. ";
NAS.MSG41 = "Datenträger konnte sicher entfernt werden. ";
NAS.MSG42 = "Zugriffseinstellungen für Freigabe %s wurden geändert. ";
NAS.MSG43 = "Konto-Einstellungen konnten nicht übernommen werden. ";
NAS.MSG44 = "Konto-Einstellungen wurden erfolgreich übernommen. ";
NAS.MSG45 = "Die von Ihnen eingegebenen Werte sind ungültig. Versuchen Sie es erneut. ";
NAS.MSG46 = "Ihre Einstellungen waren erfolgreich. ";
NAS.MSG47 = "Domäne %s konnte nicht %s werden (Fehler %s); Domäne %s konnte nicht wieder verbunden werden (Fehler %s); PC wieder Mitgliedschaft in Arbeitsgruppe %s zugewiesen. ";
NAS.MSG48 = "Domäne %s konnte nicht %s werden (Fehler %s); PC wieder Mitgliedschaft in Domäne %s zugewiesen. ";
NAS.MSG49 = "join_workgroup_or_domain_error Domäne %s konnte nicht %s werden (Fehler %s); PC wieder Mitgliedschaft in Domäne %s zugewiesen. ";
NAS.MSG50 = "Mitglied der Domäne %s. ";
NAS.MSG51 = "Mitglied der Arbeitsgruppe %s. ";
NAS.MSG52 = "Einstellungen konnten nicht übernommen werden. ";
NAS.MSG53 = "FTP-Freigabeordner wurde erfolgreich gelöscht. ";
NAS.MSG54 = "Der Datenträger ist ausgelastet!";









