/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (schreibgesch�tzt)";
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
DISK_FUN.Title = "Datentr�gerverwaltung";
DISK_FUN.Part1 = "Datentr�gerdetails";
DISK_FUN.Part2 = "Formatieren des Datentr�gers";
DISK_FUN.Manufacture = "Datentr�ger";
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
DISK_FUN.MSG1 = "Auf den ausgew�hlten Datentr�gern sind Druckserverinformationen vorhanden.\n Sie k�nnen die Datentr�ger nicht l�schen.";
DISK_FUN.MSG2 = "Sie k�nnen Datentr�ger nicht l�schen, ohne auch andere Datentr�ger des gleichen Datentr�gerpools zu l�schen.";
DISK_FUN.MSG3 = "Keine Datentr�ger zum L�schen ausgew�hlt";
DISK_FUN.MSG4 = "Datentr�ger wird gel�scht, bitte warten!";
DISK_FUN.MSG5 = "Kein Datentr�ger vorhanden";
DISK_FUN.MSG6 = "Der Zugriff auf die Admin-Gruppe kann nicht entfernt werden!";
DISK_FUN.MSG7= "Das angeschlossene USB-Ger�t wird nicht unterst�tzt!";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Kein Datentr�ger vorhanden.";
DISK_FUN.AP = "All_Partitions";
DISK_FUN.ENTERNAME = "Geben Sie einen Partitionsnamen ein:";
DISK_FUN.WARNING = "Warnung:";
DISK_FUN.FORMATWARN1 = "Die Formatierung des Datentr�gers kann einige Minuten dauern. Schalten Sie das Ger�t nicht aus,";
DISK_FUN.FORMATWARN2 = "und dr�cken Sie nicht die Reset-Taste.";
DISK_FUN.FIRMVER = "Firmware-Version";
DISK_FUN.BACKUP = "Sicherung";
DISK_FUN.WARNING1 = "WARNUNG! Durch das L�schen von Datentr�gern gehen Daten verloren, die nicht wiederhergestellt werden k�nnen. M�chten Sie trotzdem fortfahren? ";
DISK_FUN.FR = "Ordner";
DISK_FUN.ENTERINTOF= "In Ordner eingeben";
DISK_FUN.SELECT = "Ausw�hlen";
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
SHARE_FUN.MSG2 = "Die Anzahl der Freigaben �bersteigt das Maximum! Es muss zun�chst einer gel�scht werden.";
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
SHARE_FUN.AG = "Verf�gbare Gruppen";
SHARE_FUN.GWA = "Gruppen mit Zugriff";
SHARE_FUN.GN = "Gruppenname";
SHARE_FUN.description = "Beschreibung";
SHARE_FUN.rw = "Lese-/Schreibzugriff";
SHARE_FUN.ro = "Schreibgesch�tzt";
SHARE_FUN.NAME ="Name";
SHARE_FUN.FN = "Vollst�ndiger Name";
SHARE_FUN.PW = "Passwort";
SHARE_FUN.CP = "Passwort best�tigen";
SHARE_FUN.GM = "Gruppenmitglied";
SHARE_FUN.AD = "Konto deaktiviert";
SHARE_FUN.SUMMARY="Freigegebene Ordner�� �bersicht";
SHARE_FUN.IP = "IP-Adresse des freigegebenen Datentr�gers: ";


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
AD_FUN.MN = "&nbsp;Ger�tename:";
AD_FUN.WN = "&nbsp;Arbeitsgruppenname:";
AD_FUN.MD = "&nbsp;Ger�tebeschreibung:";
AD_FUN.APS = "&nbsp;Alle Partitionen freigegeben:";
AD_FUN.UserName = "Benutzername";
AD_FUN.FULLNAME = "Vollst�ndiger Name";
AD_FUN.GroupName = "Gruppenname";
AD_FUN.Basic = "Allgemein";
AD_FUN.UserM = "Benutzerverwaltung";
AD_FUN.GroupM = "Gruppenverwaltung";
AD_FUN.AnymsAcess="Anonymer Zugriff";
AD_FUN.AnymsFTP="Anonymer FTP";
AD_FUN.AnymsDisk="Anonymer Zugriff auf Datentr�ger";
AD_FUN.readonly="Lesezugriff auf Datentr�ger";
AD_FUN.readwrite="Lese- und Schreibzugriff auf Datentr�ger";
AD_FUN.svrname="Servername";
AD_FUN.devname="Ger�tename";
AD_FUN.SLIP="LAN-IP-Adresse des Servers";
AD_FUN.SWIP="Internet-IP-Adresse des Servers";
AD_FUN.MSG1 = "Zurzeit sind keine Benutzer definiert.";
AD_FUN.MSG2 = "Der Benutzeradministrator kann nicht gel�scht werden!";
AD_FUN.MSG3 = "M�chten Sie diesen Benutzer wirklich l�schen?";
AD_FUN.MSG4 = "M�chten Sie diese Gruppe wirklich l�schen?";
AD_FUN.MSG5 = "Die maximale Anzahl an Benutzern wurde erreicht! Um weitere Benutzer hinzuzuf�gen, m�ssen Sie zuvor einen anderen Benutzer l�schen.";
AD_FUN.MSG6 = "Die maximale Anzahl an Gruppen wurde erreicht! Um weitere Gruppen hinzuzuf�gen, m�ssen Sie zuvor eine andere Gruppe l�schen.";
AD_FUN.MSG7 = "Der Arbeitsgruppenname darf nicht leer sein!";
AD_FUN.MSG8 = "Der Arbeitsgruppenname darf h�chstes 15�Zeichen lang sein!";
AD_FUN.MSG9 = "Der Arbeitsgruppenname darf ausschlie�lich alphanumerische Zeichen und Bindestriche enthalten.";
AD_FUN.MSG10 = "Der Arbeitsgruppenname muss mit einem Buchstaben beginnen.";
AD_FUN.MSG11 = "Sie m�chten den Ger�tenamen �ndern. Vorhandene Netzwerkzuordnungen m�ssen neu vorgenommen werden. \n M�chten Sie fortfahren?";
AD_FUN.MSG12 = "Der Ger�tename darf nicht leer sein!";
AD_FUN.MSG13 = "Der Ger�tename darf h�chstes 15�Zeichen lang sein!";
AD_FUN.MSG14 = "Der Ger�tename darf ausschlie�lich alphanumerische Zeichen und Bindestriche enthalten.";
AD_FUN.MSG15 = "Der Ger�tename muss mit einem Buchstaben beginnen."; 
AD_FUN.MSG16 = "Der Benutzername ist bereits vorhanden.";
AD_FUN.MSG17 = "Der Benutzername darf ausschlie�lich die folgenden Zeichen enthalten: alphanumerische Zeichen, Bindestriche und Unterstriche.";
AD_FUN.MSG18 = "Die Anzahl der Gruppen �bersteigt das Maximum! Es muss zun�chst einer gel�scht werden.";
AD_FUN.MSG19 = "Die Passwort-Best�tigung stimmt nicht mit dem Passwort �berein.";
AD_FUN.MSG20 = "Das Passwort ist ung�ltig. (mindestens 4, maximal 8�Zeichen)";
AD_FUN.MSG21 = "Der Benutzer Admin kann nicht umbenannt werden!";
AD_FUN.MSG22 = "Der Benutzer Gast kann nicht umbenannt werden!";
AD_FUN.MSG23 = "Benutzername darf nicht leer sein!";
AD_FUN.MSG24 = "Sie m�ssen einen Kontonamen eingeben.";
AD_FUN.MSG25 = "Der Name des Kontos ist bereits vorhanden.";
AD_FUN.MSG26 = "Geben Sie ein Passwort ein.";
AD_FUN.MSG27 = "Die Anzahl der Benutzer �bersteigt das Maximum. Es muss zun�chst einer gel�scht werden.";
AD_FUN.MSG28 = "Benutzerkonto";
AD_FUN.MSG29 = "Der Benutzeradministrator kann nicht entfernt werden! ";
AD_FUN.MSG30 = "Der Benutzer ";
AD_FUN.MSG31 = " kann nicht entfernt werden! ";
AD_FUN.MSG32 = "Das Passwort darf keine Leerzeichen enthalten.";
AD_FUN.MSG33 = " Der Anzeigename darf ausschlie�lich alphanumerische Zeichen und Bindestriche enthalten. ";
AD_FUN.MSG34 = "M�chten Sie den Benutzer \"";
AD_FUN.MSG35 = "\" l�schen?";
AD_FUN.MSG36 = "M�chten Sie die Gruppe \"";
AD_FUN.MSG37 = "\" l�schen?";
AD_FUN.MSG38 = "Der Ger�te-/Servername darf nicht leer sein!";
AD_FUN.MSG39 = "Der Ger�te-/Servername darf ausschlie�lich alphanumerische Zeichen und Bindestriche enthalten!";
AD_FUN.MSG40 = "Der Ger�te-/Servername muss mit einem Buchstaben beginnen!";
AD_FUN.MSG41 = "Der Routername darf nicht leer sein.";
AD_FUN.MSG42 = "Der Routername darf ausschlie�lich alphanumerische Zeichen und Bindestriche enthalten.";
AD_FUN.MSG43 = "Der Routername muss mit einem Buchstaben beginnen.";
AD_FUN.MSG44 = "Der vollst�ndige Benutzername und die Beschreibung d�rfen ausschlie�lich die folgenden Zeichen enthalten: alphanumerische Zeichen, Leerzeichen, Bindestriche und Unterstriche.";
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
MS_FUN.MSG2 = "Die Anzahl der Scanfreigaben �bersteigt das Maximum! Es muss zun�chst einer gel�scht werden.";
MS_FUN.MSG3 = "Das Scannen aller Partitionen kann einige Zeit in Anspruch nehmen. M�chten Sie wirklich fortfahren?";
MS_FUN.MSG4 = "Datentr�ger wird gescannt, bitte warten.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partitionsliste";
SP_FUN.ST = "W�hlen Sie";
SP_FUN.MSG1 = "Freigabeordner erfolgreich hinzugef�gt.";
SP_FUN.MSG2 = "FTP-Freigabeordner erfolgreich hinzugef�gt.";
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
FS_FUN.ALERT1 = "F�r diese Root ist das Erstellen eines neuen Ordners nicht zugelassen.";
FS_FUN.ALERT2 = "Geben Sie einen g�ltigen Ordnernamen ein.";
FS_FUN.ALERT3 = "Geben Sie einen g�ltigen Freigabenamen ein.";
FS_FUN.ALERT4 = "Der Anzeigename ist bereits in der Freigabeliste enthalten.";
FS_FUN.ALERT5 = "Geben Sie einen g�ltigen Freigabespeicherplatz ein.";
FS_FUN.FTPFOLDER = "FTP-Ordner";
FS_FUN.DISPNAME = "Anzeigename";
FS_FUN.UNIQUE = "Muss eindeutig sein.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Speicherort";
FS_FUN.NEWFOLDER = "Neuer Ordner";
FS_FUN.CURRENTFOLD = "Aktueller Ordner:";
FS_FUN.ACCESS = "Zugriff";
FS_FUN.AVAILGROUP =  "Verf�gbare Gruppen";
FS_FUN.GROUPACCESS  = "Gruppen mit Zugriff";
FS_FUN.INTERNET = "Internetzugriff";
FS_FUN.SUMMARY = "FTP-�bersicht";
FS_FUN.ALERT6 = "Sie m�ssen einen FTP-Port angeben! ";
FS_FUN.ALERT7 = "W�hlen Sie einen FTP-Freigabeordner aus";
FS_FUN.UNIQUE = " (muss eindeutig sein). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Datentr�ger beanspruchen";
CD_FUN.DISK = "Datentr�ger";
CD_FUN.MAM =  "Hersteller und Modell";
CD_FUN.PS = "Physische Gr��e";
CD_FUN.NPN = "Neuer Partitionsname:";
CD_FUN.MSG1 = "WARNUNG! Durch die Beanspruchung des Datentr�gers werden s�mtliche Daten auf diesem Datentr�ger gel�scht.\nM�chten Sie fortfahren?";
CD_FUN.MSG2 = "WARNUNG: F�r Partitionsnamen sind Gro�buchstaben erforderlich. \n\nDer Datentr�gername '";
CD_FUN.MSG3 = "' wird in Gro�buchstaben konvertiert. M�chten Sie fortfahren?";
CD_FUN.MSG4 = "Der Partitionsname darf ausschlie�lich alphanumerische Zeichen, Bindestriche und Unterstriche enthalten.";
CD_FUN.MSG5 = "Neue Datentr�gernamen d�rfen nicht leer sein.";
CD_FUN.MSG6 = "WARNUNG: FAT32-Datentr�gernamen d�rfen h�chstens 11�Zeichen lang sein.\n\n Der Datentr�gername '";
CD_FUN.MSG7 = "' wird auf 11�Zeichen gek�rzt. M�chten Sie fortfahren?";
CD_FUN.DISK_MSG = " ist nicht vorhanden.\n";
CD_FUN.NODISKS = "Kein Datentr�ger ausgew�hlt";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Der Benutzername darf ausschlie�lich alphanumerische Zeichen, Bindestriche und Unterstriche enthalten.";
GP_FUN.MSG2 = "Die Anzahl der Gruppen �bersteigt das Maximum! Es muss zun�chst einer gel�scht werden.";
GP_FUN.MSG3 = "Die Gruppe ist bereits vorhanden!";
GP_FUN.MSG4 = "Gruppenname darf nicht leer sein!";
GP_FUN.MSG5 = "Der Gruppenname darf ausschlie�lich alphanumerische Zeichen, Bindestriche und Unterstriche enthalten.";
GP_FUN.GA = "Gruppenkonto";
GP_FUN.GN = "Gruppenname";
GP_FUN.DES = "Beschreibung";
GP_FUN.ACCESS = "Zugriff";
GP_FUN.RNW = "Lese-/Schreibzugriff";
GP_FUN.RO = "Schreibgesch�tzt";
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
UP_FUN.Reconfirm = "Zur Best�tigung erneut eingeben";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Datensicherung";
DB_FUN.SELJOB = "Auftragsnummer ausw�hlen";
DB_FUN.JOBNAME = "Auftragsname";
DB_FUN.BType ="Sicherungsart";
DB_FUN.Direction = "Richtung";
DB_FUN.WRTSL54GS = "Dieser WRTSL54GS";
DB_FUN.RD = "Entferntes Ger�t";
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
CMD.QuickErase = "Schnelles L�schen";
CMD.FullErase = "Vollst�ndiges L�schen";
CMD.EraseDisk = "Formatieren des Datentr�gers";
CMD.Refresh = "Aktualisieren";
CMD.Claim = "Beanspruchen";
CMD.SAVESET = "Einstellungen speichern";
CMD.SafeRemove = "Datentr�ger sicher entfernen";
CMD.CreateShare = "Freigabe erstellen";
CMD.ModifyShare = "Freigabe bearbeiten";
CMD.SELPart = "Partition ausw�hlen";
CMD.Modify = "Bearbeiten";
CMD.Delete = "L�schen";
CMD.RO = ">> Schreibgesch�tzt";
CMD.RW = ">> Lese-/Schreibzugriff";
CMD.RM = "<< Entfernen";
CMD.CANCELCHANGE = "�nderungen verwerfen";
CMD.CT = "Fortfahren";
CMD.CLOSE = "Schlie�en";
CMD.CreateNewUser = "Neuen Benutzer erstellen";
CMD.CreateNewGroup = "Neue Gruppe erstellen";
CMD.CreateNewShare = "Neue Freigabe erstellen";
CMD.JG = ">> Gruppe beitreten ";
CMD.SAP = "Alle scannen ";
CMD.SPS = "Bestimmten Ordner f�r Scanvorgang ausw�hlen";
CMD.UOL = " Eine Ebene nach oben ";
CMD.SP = "Partition ausw�hlen";
CMD.FSA = "Bestimmten Ordner f�r Zugriff ausw�hlen";
CMD.Claim = "Beanspruchen";
CMD.CL = "L�schen";
CMD.CANCEL = "Abbrechen";
CMD.CGroup = "Gruppe erstellen";
CMD.CUser = "Benutzer erstellen";
CMD.MUser = "Benutzer bearbeiten";
CMD.NOPWD = "KEIN PASSWORT";
CMD.DTE = "Diesen Eintrag l�schen";
CMD.ALERT1 = "Datentr�ger wird erneuert. Bitte warten... ";
CMD.CREATE = " Erstellen";
CMD.UPFOLDER = " Zu �bergeordnetem Ordner";
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
OPT.item_opt1 = "Von diesem WRTSL54GS auf ein anderes Ger�t";
OPT.item_opt2 = "Von einem anderen Ger�t auf diesen WRTSL54GS"; 
OPT.item_opt3 = "F�r den Zugriff ist eine Anmeldung erforderlich.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Weitere Informationen";
HELPMSG.DISK1 = "Zeigt Details zum Datentr�ger an, der momentan mit dem Router verbunden ist.";
HELPMSG.DISK2 = "Aktivieren Sie zum L�schen eines Datentr�gers das Kontrollk�stchen neben diesem Datentr�ger.";
HELPMSG.SHARE1 = "Zeigt Details zu den Freigaben an, die Sie zuletzt erstellt haben.";
HELPMSG.SHARE2 = "Klicken Sie auf die Schaltfl�che Neue Freigabe erstellen, um eine neue Freigabe zu erstellen.";
HELPMSG.AD1 = "Der Name dieses Routers.";
HELPMSG.AD2 = "Der Name der Netzwerk-Computer.";
HELPMSG.AD3 = "Die Benutzer werden in der Tabelle angegeben.";
HELPMSG.AD4 = "Klicken Sie zum Erstellen eines neuen Benutzers auf die Schaltfl�che Neuen Benutzer erstellen.";
HELPMSG.AD5 = "Die Gruppen werden in der Tabelle angegeben.";
HELPMSG.AD6 = "Klicken Sie zum Erstellen einer neuen Gruppe auf die Schaltfl�che Neue Gruppe erstellen.";
HELPMSG.AD7 = "Geben Sie den Namen der Gruppe ein. Gruppennamen d�rfen h�chstens 12�Zeichen lang sein.";
HELPMSG.MS1 = "Zeigt den Namen an, der vom Media-Adapter zur Identifizierung des Servers verwendet wird.";
HELPMSG.MS2 = "Klicken Sie auf diese Schaltfl�che, um s�mtliche Partitionen des USB-Datentr�gers zu scannen.";
HELPMSG.MS3 = "Klicken Sie auf diese Schaltfl�che, um einen bestimmten Ordner oder eine bestimmte Partition f�r den Scanvorgang auszuw�hlen.";
HELPMSG.CD1 = "Zur Erstellung einer Partition auf dem leeren Datentr�ger, der als FAT32 formatiert wird.";
HELPMSG.ShareP1 = "Geben Sie den Freigabenamen ein.";
HELPMSG.ShareP2 = "Dies ist der Ordner, den diese Freigabe enthalten wird. Klicken Sie auf Partition ausw�hlen, um aus einer Liste der verf�gbaren Ordner auszuw�hlen.";
HELPMSG.UP1 = "Geben Sie den Benutzernamen ein. Der Benutzername darf h�chstens 20�Zeichen lang sein.";
HELPMSG.UP2 = "Geben Sie das Passwort ein. Das Passwort muss zwischen 4�und 8�Zeichen lang sein.";
HELPMSG.UP3 = "Geben Sie das Passwort zur Best�tigung erneut ein.";
HELPMSG.UP4 = "Gruppe";
HELPMSG.UP5 = "W�hlen Sie die Gruppe aus, zu der dieser Benutzer geh�ren soll.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Datentr�ger";
FUNST.Share="Freigabe";
FUNST.MS="Medien-Server";
FUNST.FTP = "FTP-Server";

var NAS = new Object();
NAS.MSG1 = "Konto-Einstellungen wurden erfolgreich �bernommen. ";
NAS.MSG2 = "Das Konto %s ist bereits vorhanden. ";
NAS.MSG3 = "Einstellungen konnten nicht �bernommen werden. ";
NAS.MSG4 = "Scanfreigaben wurden erfolgreich gel�scht. ";
NAS.MSG5 = "Mediendatenbank konnte nicht aktualisiert werden. ";
NAS.MSG6 = "Mediendatenbank konnte nicht aktualisiert werden. Keine Freigabe vorhanden. ";
NAS.MSG7 = "Mediendatenbank konnte nicht aktualisiert werden. ";
NAS.MSG8 = "Datenbank wurde erfolgreich aktualisiert. ";
NAS.MSG9 = "Mediendatenbank konnte nicht aktualisiert werden. Keine Partition vorhanden. ";
NAS.MSG10 = "Datenbank wurde erfolgreich aktualisiert. ";
NAS.MSG11 = "Scanfreigaben wurden erfolgreich hinzugef�gt. ";
NAS.MSG12 = "Der Freigabename %s ist bereits vergeben. Geben Sie einen anderen Namen ein. ";
NAS.MSG13 = "Freigabe %s wurde erfolgreich ge�ndert. ";
NAS.MSG14 = "Freigabe %s wurde erfolgreich erstellt. ";
NAS.MSG15 = "Fehler beim Zugriff auf Datentr�ger %s: Datentr�ger '%s' existiert nicht. ";
NAS.MSG16 = "Fehler beim Zugriff auf Datentr�ger %s: Sie haben keinen neuen Namen f�r den Datentr�ger angegeben. ";
NAS.MSG17 = "Der angegebene Name des Datentr�ger '%s' ist ung�ltig. ";
NAS.MSG18 = "Auf Datentr�ger konnte erfolgreich zugegriffen werden. ";
NAS.MSG19 = "Fehler beim Zugriff auf Datentr�ger %s: Zugriff ist fehlgeschlagen. ";
NAS.MSG20 = "Fehler beim L�schen der Freigabe %s: Die Freigabe %s ist der Verwendung durch den Primary Domain Controller vorbehalten. Die Freigabe kann nicht separat gel�scht werden. Sie wird jedoch automatisch entfernt, sobald der Primary Domain Controller deaktiviert ist. ";
NAS.MSG21 = "Freigabe %s wurde erfolgreich gel�scht. ";
NAS.MSG23 = "Freigabe %s wurde erfolgreich ge�ndert. ";
NAS.MSG24 = "Freigabe %s wurde erfolgreich erstellt. ";
NAS.MSG25 = "Der Freigabename %s ist bereits vergeben. Geben Sie einen anderen Namen ein. ";
NAS.MSG30 = "Fehler beim L�schen der Datentr�ger: Keine Datentr�ger angegeben. ";
NAS.MSG31 = "Fehler beim L�schen der Datentr�ger: Nicht gen�gend Arbeitsspeicher f�r Vorgang verf�gbar. ";
NAS.MSG32 = "Fehler beim L�schen der Datentr�ger: Datentr�ger '%s' konnte nicht gel�scht werden. ";
NAS.MSG33 = "Fehler beim L�schen der Datentr�ger: Nicht gen�gend Arbeitsspeicher. ";
NAS.MSG34 = "Alle angegebenen Datentr�ger wurden erfolgreich gel�scht. ";
NAS.MSG35 = "Keine Datentr�ger angegeben. Der L�schvorgang konnte nicht ausgef�hrt werden. ";
NAS.MSG36 = "Fehler beim L�schen der Datentr�ger: Nicht gen�gend Arbeitsspeicher f�r Vorgang verf�gbar. ";
NAS.MSG37 = "Fehler beim L�schen der Datentr�ger: Keine Datentr�ger angegeben. ";
NAS.MSG38 = "Alle angegebenen Datentr�ger wurden erfolgreich gel�scht. ";
NAS.MSG39 = "Keine Datentr�ger angegeben. Der L�schvorgang konnte nicht ausgef�hrt werden. ";
NAS.MSG40 = "Datentr�ger '%s' konnte nicht sicher entfernt werden. ";
NAS.MSG41 = "Datentr�ger konnte sicher entfernt werden. ";
NAS.MSG42 = "Zugriffseinstellungen f�r Freigabe %s wurden ge�ndert. ";
NAS.MSG43 = "Konto-Einstellungen konnten nicht �bernommen werden. ";
NAS.MSG44 = "Konto-Einstellungen wurden erfolgreich �bernommen. ";
NAS.MSG45 = "Die von Ihnen eingegebenen Werte sind ung�ltig. Versuchen Sie es erneut. ";
NAS.MSG46 = "Ihre Einstellungen waren erfolgreich. ";
NAS.MSG47 = "Dom�ne %s konnte nicht %s werden (Fehler %s); Dom�ne %s konnte nicht wieder verbunden werden (Fehler %s); PC wieder Mitgliedschaft in Arbeitsgruppe %s zugewiesen. ";
NAS.MSG48 = "Dom�ne %s konnte nicht %s werden (Fehler %s); PC wieder Mitgliedschaft in Dom�ne %s zugewiesen. ";
NAS.MSG49 = "join_workgroup_or_domain_error Dom�ne %s konnte nicht %s werden (Fehler %s); PC wieder Mitgliedschaft in Dom�ne %s zugewiesen. ";
NAS.MSG50 = "Mitglied der Dom�ne %s. ";
NAS.MSG51 = "Mitglied der Arbeitsgruppe %s. ";
NAS.MSG52 = "Einstellungen konnten nicht �bernommen werden. ";
NAS.MSG53 = "FTP-Freigabeordner wurde erfolgreich gel�scht. ";
NAS.MSG54 = "Der Datentr�ger ist ausgelastet!";









