/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (tylko odczyt)";
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
DISK_FUN.Title ="Zarządzanie dyskami";
DISK_FUN.Part1 ="Szczegóły dysku";
DISK_FUN.Part2 ="Formatuj dysk";
DISK_FUN.Manufacture ="Dysk";
DISK_FUN.Partition ="Partycja";
DISK_FUN.FS ="System plików";
DISK_FUN.TS ="Pojemność";
DISK_FUN.FreeS ="Wolne miejsce";
DISK_FUN.Shares ="Udostępnione elementy";
DISK_FUN.SharesFd ="Folder udostępnionych elementów";
DISK_FUN.CreateShare ="Utwórz udostępniony element";
DISK_FUN.Remain ="Nieprzydzielone";
DISK_FUN.TotalSize ="Łącznie";
DISK_FUN.Detecting ="Wykrywanie";
DISK_FUN.MSG1 ="Wybrane dyski zawierają informacje serwera druku.\nNie można wymazać dysków";
DISK_FUN.MSG2 ="Nie można wymazać dysków bez wymazania innych dysków znajdujących się w tej samej puli dysków";
DISK_FUN.MSG3 ="Nie wybrano żadnych dysków do wymazania";
DISK_FUN.MSG4 ="Wymazywanie dysku, czekaj!";
DISK_FUN.MSG5 ="Brak dostępnych dysków";
DISK_FUN.MSG6 ="Nie można usunąć dostępu do grupy administratorów.";
DISK_FUN.MSG7 ="Podłączone urządzenie USB nie jest obsługiwane.";
//DISK_FUN.NoDisk1 ="There are currently no available disks.";
DISK_FUN.NoDisk2 ="Brak dostępnych dysków.";
DISK_FUN.AP ="Wszystkie_partycje";
DISK_FUN.ENTERNAME ="Wprowadź nazwę partycji:";
DISK_FUN.WARNING ="Ostrzeżenie:";
DISK_FUN.FORMATWARN1 ="Formatowanie dysku może zająć kilka minut; w tym czasie nie wyłączaj";
DISK_FUN.FORMATWARN2 ="zasilania ani nie naciskaj przycisku resetowania.";
DISK_FUN.FIRMVER ="Wersja oprogramowania sprzętowego";
DISK_FUN.BACKUP ="Kopia zapasowa";
DISK_FUN.WARNING1 ="OSTRZEŻENIE! Wymazanie dysków spowoduje nieodwracalną utratę danych. Czy chcesz kontynuować?";
DISK_FUN.FR ="Folder";
DISK_FUN.ENTERINTOF= "Wejdź do folderu";
DISK_FUN.SELECT ="Wybierz";
DISK_FUN.MPATH =" Ta lokalizacja nie istnieje.";
DISK_FUN.CPATH ="Ta lokalizacja folderu udostępnianego nie istnieje.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName ="Nazwa wyświetlana";
SHARE_FUN.ShareAccess ="Dostęp do udostępnionego elementu";
SHARE_FUN.Title ="Zarządzanie udostępnionymi elementami";
SHARE_FUN.NOTEXIST ="Nie istnieje!";
SHARE_FUN.MSG1 ="Obecnie nie ma żadnych zdefiniowanych udostępnionych elementów.";
SHARE_FUN.MSG2 ="Liczba udostępnionych elementów przekracza limit! Musisz usunąć pierwszy.";
SHARE_FUN.Properties ="Edytuj";
SHARE_FUN.FF ="Folder FTP";
SHARE_FUN.MSF ="Folder multimediów";
SHARE_FUN.AF="Dostęp do folderu";
SHARE_FUN.SF ="Udostępniony folder";
SHARE_FUN.DN ="Nazwa wyświetlana";
SHARE_FUN.patition ="Partycja";
SHARE_FUN.location ="Lokalizacja";
SHARE_FUN.NF ="Nowy folder";
SHARE_FUN.CF ="Bieżący folder";
SHARE_FUN.AS ="Dostęp";
SHARE_FUN.AG ="Dostępne grupy";
SHARE_FUN.GWA ="Grupy z dostępem";
SHARE_FUN.GN ="Nazwa grupy";
SHARE_FUN.description ="Opis";
SHARE_FUN.rw ="odczyt i zapis";
SHARE_FUN.ro ="tylko odczyt";
SHARE_FUN.NAME ="Nazwa";
SHARE_FUN.FN ="Imię i nazwisko";
SHARE_FUN.PW ="Hasło";
SHARE_FUN.CP ="Potwierdź hasło";
SHARE_FUN.GM ="Członek grupy";
SHARE_FUN.AD ="Konto wyłączone";
SHARE_FUN.SUMMARY="Foldery udostępnione — podsumowanie";
SHARE_FUN.IP ="Adres IP dysku udostępnionego:";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA ="Grupa z dostępem";
SA_FUN.OG ="Inna grupa";
SA_FUN.MSG1 ="Nie można usunąć grupy administratorów!";
SA_FUN.MSG2 ="Nazwa grupy już istnieje!";
SA_FUN.FTP_Access ="Dostęp do FTP";
SA_FUN.Entire_Partition ="Udostępnij całą partycję";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin ="administrator";
AD_FUN.guest ="gość";
AD_FUN.svrname="Nazwa serwera";
AD_FUN.devname="Nazwa urządzenia";
AD_FUN.SLIP="Adres IP sieci LAN serwera:";
AD_FUN.SWIP="Internetowy adres IP serwera:";
AD_FUN.MN ="Nazwa komputera:";
AD_FUN.WN ="Nazwa grupy roboczej:";
AD_FUN.MD ="Opis komputera:";
AD_FUN.APS ="Udostępnianie wszystkich partycji:";
AD_FUN.UserName ="Nazwa użytkownika";
AD_FUN.FULLNAME ="Imię i nazwisko";
AD_FUN.GroupName ="Nazwa grupy";
AD_FUN.Basic ="Podstawowa";
AD_FUN.UserM ="Zarządzanie użytkownikami";
AD_FUN.GroupM ="Zarządzanie grupami";
AD_FUN.AnymsAcess="Dostęp anonimowy";
AD_FUN.AnymsFTP="Anonimowy dostęp do FTP";
AD_FUN.AnymsDisk="Anonimowy dostęp do dysku";
AD_FUN.readonly="Dostęp do dysku z prawami tylko odczytu";
AD_FUN.readwrite="Dostęp do dysku z prawami odczytu i zapisu";
AD_FUN.MSG1 ="Obecnie nie ma żadnych zdefiniowanych udostępnionych użytkowników.";
AD_FUN.MSG2 ="Nie można usunąć administratora!";
AD_FUN.MSG3 ="Czy na pewno chcesz usunąć tego użytkownika?";
AD_FUN.MSG4 ="Czy na pewno chcesz usunąć tę grupę?";
AD_FUN.MSG5 ="Osiągnięto maksymalną liczbę użytkowników! Aby dodać innego użytkownika, należy najpierw usunąć jednego użytkownika.";
AD_FUN.MSG6 =" Osiągnięto maksymalną liczbę grup! Aby dodać inną grupę, należy najpierw usunąć jedną grupę.";
AD_FUN.MSG7 ="Nazwa grupy roboczej nie może być pusta!";
AD_FUN.MSG8 ="Nazwa grupy roboczej nie może być dłuższa niż 15 znaków!";
AD_FUN.MSG9 ="Nazwa grupy roboczej może zawierać tylko znaki alfanumeryczne i kreski";
AD_FUN.MSG10 ="Nazwa grupy roboczej musi zaczynać się literą";
AD_FUN.MSG11 ="Wybrano opcję zmiany nazwy komputera. Konieczne jest ponowne zmapowanie istniejącego mapowania sieci. \nCzy chcesz kontynuować?";
AD_FUN.MSG12 ="Nazwa komputera nie może być pusta!";
AD_FUN.MSG13 ="Nazwa komputera nie może być dłuższa niż 15 znaków!";
AD_FUN.MSG14 ="Nazwa komputera może zawierać tylko znaki alfanumeryczne i kreski";
AD_FUN.MSG15 ="Nazwa komputera musi zaczynać się literą" ; 
AD_FUN.MSG16 ="Nazwa użytkownika już istnieje!";
AD_FUN.MSG17 ="Nazwa użytkownika może zawierać tylko znaki alfanumeryczne, kreski i podkreślenia.";
AD_FUN.MSG18 ="Liczba grup przekracza limit! Musisz usunąć pierwszy.";
AD_FUN.MSG19 ="Niezgodne potwierdzenie hasła.";
AD_FUN.MSG20 ="Hasło jest nieprawidłowe! (minimum 4, maksymalnie 63 znaki)";
AD_FUN.MSG21 ="Nie można zmienić nazwy administratora!";
AD_FUN.MSG22 ="Nie można zmienić nazwy użytkownika gościa!";
AD_FUN.MSG23 ="Nazwa użytkownika nie może być pusta!";
AD_FUN.MSG24 ="Należy wprowadzić nazwę konta!";
AD_FUN.MSG25 ="Nazwa konta już istnieje!";
AD_FUN.MSG26 ="Należy wprowadzić hasło!";
AD_FUN.MSG27 ="Liczba użytkowników przekracza limit! Musisz usunąć pierwszy.";
AD_FUN.MSG28 ="Konto użytkownika";
AD_FUN.MSG29 ="Nie można usunąć administratora!";
AD_FUN.MSG30 ="Nie można usunąć ";
AD_FUN.MSG31 =" użytkownika!";
AD_FUN.MSG32 ="Spacje i ukośniki odwrotne są niedozwolone w haśle.";
AD_FUN.MSG33 ="Nazwa wyświetlana może zawierać tylko znaki alfanumeryczne i kreski";
AD_FUN.MSG34 ="Czy chcesz usunąć użytkownika \"";
AD_FUN.MSG35 ="\"?";
AD_FUN.MSG36 ="Czy chcesz usunąć grupę \"";
AD_FUN.MSG37 ="\"?";
AD_FUN.MSG38 ="Nazwa urządzenia/serwera nie może być pusta!";
AD_FUN.MSG39 ="Nazwa urządzenia/serwera może zawierać tylko znaki alfanumeryczne i kreski";
AD_FUN.MSG40 ="Nazwa urządzenia/serwera musi zaczynać się literą";
AD_FUN.MSG41 ="Nazwa routera nie może być pusta.";
AD_FUN.MSG42 ="Nazwa routera może zawierać tylko znaki alfanumeryczne i kreski.";
AD_FUN.MSG43 ="Nazwa routera musi rozpoczynać się od litery.";
AD_FUN.MSG44 ="Pełna nazwa i opis użytkownika mogą zawierać tylko znaki alfanumeryczne, spacje, kreski i podkreślenia.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties ="Właściwości grupy";
GA_FUN.OU ="Inni użytkownicy";
GA_FUN.UIG ="Użytkownicy w grupie";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title ="Serwer multimediów UPnP";
MS_FUN.svrname ="Nazwa serwera multimediów";
MS_FUN.Setup ="Konfiguracja";
MS_FUN.DB ="Baza danych";
MS_FUN.ServerName ="Nazwa serwera:";
MS_FUN.FR= "Folder";
MS_FUN.SCAN ="Skanowanie";
MS_FUN.LASTSCAN ="Czas ostatniego skanowania";
MS_FUN.AUTOSCAN ="Automatyczne skanowanie co";
MS_FUN.HOUR="Godziny";
MS_FUN.MSG1 ="Obecnie nie ma żadnych zdefiniowanych udostępnionych elementów skanowania.";
MS_FUN.MSG2 ="Liczba udostępnionych elementów skanowania przekracza limit! Musisz usunąć pierwszy.";
MS_FUN.MSG3 ="Skanowanie wszystkich partycji może zająć bardzo dużo czasu. Czy na pewno chcesz kontynuować?";
MS_FUN.MSG4 ="Skanowanie dysku, czekaj!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL ="Lista partycji";
SP_FUN.ST ="Wybierz";
SP_FUN.MSG1 ="Folder udostępnionych elementów został dodany.";
SP_FUN.MSG2 ="Folder udostępnionych elementów FTP został dodany.";
SP_FUN.MSG3 ="Ta ścieżka już istnieje na liście skanowania! Dwukrotne dodanie jest niemożliwe.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS ="Serwer FTP";
FS_FUN.svrname ="Nazwa serwera FTP";
FS_FUN.Share ="Udostępnianie";
FS_FUN.EDIT ="Edytuj";
FS_FUN.MSG1 ="Obecnie nie ma zdefiniowanego dostępu do FTP.";
FS_FUN.ACCESS ="Dostęp";
FS_FUN.PO ="Port FTP:";
FS_FUN.FTP_CHARACTERSET ="Kodowanie:";
FS_FUN.UNICODE="Unicode (UTF-8)";
FS_FUN.GB18030="Chiński uproszczony (GB18030)";
FS_FUN.BIG5="Chiński tradycyjny (Big5)";
FS_FUN.CP1258="Wietnamski (CP1258)";
FS_FUN.ISO8859_1="ISO 8859-1";
FS_FUN.ALERT1 ="W tym folderze głównym nie można tworzyć nowych folderów!";
FS_FUN.ALERT2 ="Wprowadź prawidłową nazwę folderu!";
FS_FUN.ALERT3 ="Wprowadź prawidłową nazwę udostępnionego elementu.";
FS_FUN.ALERT4 ="Nazwa wyświetlana już znajduje się na liście udostępnionych elementów!";
FS_FUN.ALERT5 ="Wprowadź prawidłową lokalizację udostępnionego elementu.";
FS_FUN.ALERT6 ="Port FTP nie może być pusty!";
FS_FUN.ALERT7 ="Wybierz folder FTP udostępnionych elementów!";
FS_FUN.FTPFOLDER ="Folder FTP";
FS_FUN.DISPNAME ="Nazwa wyświetlana";
FS_FUN.UNIQUE ="(Musi być unikatowa).";
FS_FUN.PAR ="Partycja";
FS_FUN.LOCA ="Lokalizacja";
FS_FUN.NEWFOLDER ="Nowy folder";
FS_FUN.CURRENTFOLD ="Bieżący folder:";
FS_FUN.ACCESS ="Dostęp";
FS_FUN.AVAILGROUP =  "Dostępne grupy";
FS_FUN.GROUPACCESS  ="Grupy z dostępem";
FS_FUN.INTERNET ="Dostęp do Internetu";
FS_FUN.SUMMARY ="FTP — podsumowanie";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title ="Czyszczenie dysku";
CD_FUN.DISK ="Dysk";
CD_FUN.MAM =  "Producent i model";
CD_FUN.PS ="Rozmiar fizyczny";
CD_FUN.NPN ="Nowa nazwa partycji";
CD_FUN.MSG1 ="OSTRZEŻENIE! Czyszczenie dysku spowoduje usunięcie wszystkich danych z dysku.\nCzy chcesz kontynuować?";
CD_FUN.MSG2 ="OSTRZEŻENIE: Nazwa partycji musi zawierać wielkie litery\n\nNazwa dysku „";
CD_FUN.MSG3 ="” zostanie przekonwertowana na wielkie litery. Czy chcesz kontynuować?";
CD_FUN.MSG4 ="Nazwa partycji może zawierać tylko znaki alfanumeryczne, kreski i znaki podkreślenia";
CD_FUN.MSG5 ="Nowa nazwa dysku nie może być pusta!";
CD_FUN.MSG6 ="OSTRZEŻENIE: Nazwy dysków FAT32 nie mogą być dłuższe niż 11 znaków\n\nNazwa dysku „";
CD_FUN.MSG7 ="” zostanie obcięta do 11 znaków. Czy chcesz kontynuować?";
CD_FUN.DISK_MSG =" nie istnieje.\n";
CD_FUN.NODISKS ="Brak podłączonych dysków";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 ="Nazwa użytkownika może zawierać tylko znaki alfanumeryczne, kreski i znaki podkreślenia";
GP_FUN.MSG2 ="Liczba grup przekracza limit! Musisz usunąć pierwszy.";
GP_FUN.MSG3 ="Grupa już istnieje!";
GP_FUN.MSG4 ="Nazwa grupy nie może być pusta!";
GP_FUN.MSG5 ="Nazwa grupy może zawierać tylko znaki alfanumeryczne, kreski i znaki podkreślenia";
GP_FUN.GA ="Konto grupy";
GP_FUN.GN ="Nazwa grupy";
GP_FUN.DES ="Opis";
GP_FUN.ACCESS ="Dostęp";
GP_FUN.RNW ="odczyt i zapis";
GP_FUN.RO ="tylko odczyt";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title ="Właściwości udostępnionego elementu" ;
ShareP_FUN.SF ="Folder udostępnionych elementów";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title ="Właściwości użytkownika";
UP_FUN.FName ="Nazwa";
UP_FUN.PWD ="Hasło"
UP_FUN.Reconfirm ="Wprowadź ponownie, aby potwierdzić";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title ="Kopia zapasowa danych";
DB_FUN.SELJOB ="Wybierz numer zadania";
DB_FUN.JOBNAME ="Nazwa zadania";
DB_FUN.BType ="Typ kopii zapasowej";
DB_FUN.Direction ="Kierunek";
DB_FUN.WRTSL54GS ="Ten router WRTSL54GS";
DB_FUN.RD ="Urządzenie zdalne";
DB_FUN.DAYS ="Dni";
DB_FUN.TIMES ="Godziny";
DB_FUN.LOGIN ="Nazwa logowania";
DB_FUN.sunday ="&nbsp;Nie";
DB_FUN.Mon ="&nbsp;Pon"; 
DB_FUN.Tue ="&nbsp;Wt"; 
DB_FUN.Wed ="&nbsp;Śr";
DB_FUN.Thu ="&nbsp;Czw";
DB_FUN.Fri ="&nbsp;Pt";
DB_FUN.Sat ="&nbsp;Sob";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL ="Lista folderów";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase ="Szybkie kasowanie";
CMD.FullErase ="Pełne wymazywanie";
CMD.EraseDisk ="Formatuj dysk";
CMD.Refresh ="Odśwież";
CMD.Claim ="Wyczyść";
CMD.SAVESET ="Zapisz ustawienia";
CMD.SafeRemove ="Bezpiecznie odłącz dysk";
CMD.CreateShare ="Utwórz udostępniony element";
CMD.ModifyShare ="Modyfikuj udostępniony element";
CMD.SELPart ="Wybierz partycję";
CMD.Modify ="Modyfikuj";
CMD.Delete ="Usuń";
CMD.RO =">> Tylko odczyt";
CMD.RW =">> Odczyt/zapis";
CMD.RM ="<< Usuń";
CMD.CANCELCHANGE ="Anuluj zmiany";
CMD.CT ="Kontynuuj";
CMD.CLOSE ="Zamknij";
CMD.CreateNewUser ="Utwórz nowego użytkownika";
CMD.CreateNewGroup ="Utwórz nową grupę";
CMD.CreateNewShare ="Utwórz nowy udostępniony element";
CMD.JG =">> Dołącz do grupy ";
CMD.SAP ="Skanuj wszystkie ";
CMD.SPS ="Określ folder do przeskanowania";
CMD.UOL =" W górę o jeden poziom ";
CMD.SP ="Wybierz partycję";
CMD.FSA ="Określ folder w celu dostępu";
CMD.Claim ="Wyczyść";
CMD.CL ="Wyczyść";
CMD.CANCEL ="Anuluj";
CMD.CGroup ="Utwórz grupę";
CMD.CUser ="Utwórz użytkownika";
CMD.MUser ="Modyfikuj użytkownika";
CMD.NOPWD ="BRAK HASŁA";
CMD.DTE ="Usuń ten wpis";
CMD.ALERT1 ="Odnawianie dysku, czekaj!";
CMD.CREATE ="Utwórz";
CMD.UPFOLDER ="Powrót do folderu nadrzędnego";
CMD.ALLFOLDER ="Wszystkie foldery";
CMD.FORMAT ="Formatuj";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable ="Włączony";
OPT.item_Disable ="Wyłączony";
OPT.item_ALLP ="Wszystkie partycje";
OPT.item_SF ="Określ folder";
OPT.item_Everyday ="Codziennie";
OPT.item_opt1 ="Z tego routera WRTSL54GS na inne urządzenie";
OPT.item_opt2 ="Z innego urządzenia na ten router WRTSL54GS" 
OPT.item_opt3 ="Dostęp wymaga zalogowania się";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE ="Więcej...";
HELPMSG.DISK1 ="Wyświetla szczegóły dysku podłączonego do routera.";
HELPMSG.DISK2 ="Aby wymazać dysk, kliknij pole wyboru obok nazwy dysku.";
HELPMSG.SHARE1 ="Wyświetla szczegóły udostępnionych elementów, które są aktualnie utworzone.";
HELPMSG.SHARE2 ="Kliknij przycisk Utwórz nowy udostępniony element, aby utworzyć nowy udostępniony element.";
HELPMSG.AD1 ="Nazwa tego routera.";
HELPMSG.AD2 ="Nazwy komputerów połączonych w sieć.";
HELPMSG.AD3 ="Użytkownicy są wyświetlani w tabeli.";
HELPMSG.AD4 ="Aby utworzyć nowego użytkownika, kliknij przycisk Utwórz nowego użytkownika.";
HELPMSG.AD5 ="Grupy są wyświetlane w tabeli.";
HELPMSG.AD6 ="Aby utworzyć nową grupę, kliknij przycisk Utwórz nową grupę.";
HELPMSG.AD7 ="Wprowadź nazwę grupy. Nazwa grupy może składać się z maksymalnie 12 znaków.";
HELPMSG.MS1 ="Wyświetla nazwę, która będzie używana przez adapter multimedialny do identyfikacji serwera.";
HELPMSG.MS2 ="Kliknij ten przycisk, aby przeskanować wszystkie partycje dysku USB.";
HELPMSG.MS3 ="Kliknij ten przycisk, aby wybrać określony folder lub partycję do przeskanowania.";
HELPMSG.CD1 ="Aby utworzyć partycję na pustym dysku, który zostanie sformatowany jako FAT32.";
HELPMSG.ShareP1 ="Wprowadź nazwę udostępnionego elementu.";
HELPMSG.ShareP2 ="Jest to folder, który będzie zawierać ten udostępniony element. Kliknij przycisk Wybierz partycję, aby dokonać wyboru z listy dostępnych folderów.";
HELPMSG.UP1 ="Wprowadź nazwę użytkownika. Nazwa użytkownika może składać się z maksymalnie 20 znaków.";
HELPMSG.UP2 ="Wprowadź hasło. Hasło może zawierać od 4 do 8 znaków.";
HELPMSG.UP3 ="Wprowadź ponownie hasło, aby potwierdzić.";
HELPMSG.UP4 ="Grupa";
HELPMSG.UP5 ="Wybierz grupę, w której chcesz umieścić tego użytkownika.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Dysk";
FUNST.Share="Udostępnianie";
FUNST.MS="Serwer multimediów";
FUNST.FTP ="Serwer FTP";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : NAS output in CGI
--------------------------------------------------------------------------------------------------*/
var NAS = new Object();
NAS.MSG1 ="Ustawienia konta zostały zastosowane.";
NAS.MSG2 ="Konto %s już istnieje!";
NAS.MSG3 ="Stosowanie ustawień nie powiodło się!";
NAS.MSG4 ="Udostępniony element skanowania został usunięty.";
NAS.MSG5 ="Uaktualnianie bazy danych multimediów nie powiodło się!";
NAS.MSG6 ="Uaktualnianie bazy danych multimediów nie powiodło się! Udostępniony element nie istnieje.";
NAS.MSG7 ="Uaktualnianie bazy danych multimediów nie powiodło się!";
NAS.MSG8 ="Baza danych została uaktualniona.";
NAS.MSG9 ="Uaktualnianie bazy danych multimediów nie powiodło się. Nie ma żadnych partycji!";
NAS.MSG10 ="Baza danych została uaktualniona.";
NAS.MSG11 ="Udostępniony element skanowania został dodany.";
NAS.MSG12 ="Nazwa udostępnionego elementu %s jest zarezerwowana. Wybierz inną nazwę.";
NAS.MSG13 ="Udostępniony element %s został zmodyfikowany.";
NAS.MSG14 ="Udostępniony element %s został utworzony.";
NAS.MSG15 ="Błąd podczas czyszczenia dysku %s: dysk „%s” nie istnieje.";
NAS.MSG16 ="Błąd podczas czyszczenia dysku: nie określono nowej nazwy dysku.";
NAS.MSG17 ="Określona nazwa dysku „%s” jest nieprawidłowa.";
NAS.MSG18 ="Dysk został wyczyszczony.";
NAS.MSG19 ="Błąd podczas czyszczenia dysku %s: podjęta próba czyszczenia nie powiodła się.";
NAS.MSG20 ="Błąd podczas usuwania udostępnionego elementu %s: udostępniony element %s jest specjalnym udostępnionym elementem, który został zarezerwowany do użytku przez funkcje podstawowego kontrolera domeny. Nie można usunąć tego elementu, ale po wyłączeniu podstawowego kontrolera domeny zostanie on usunięty automatycznie.";
NAS.MSG21 ="Udostępniony element %s został usunięty.";
NAS.MSG23 ="Udostępniony element %s został zmodyfikowany.";
NAS.MSG24 ="Udostępniony element %s został utworzony.";
NAS.MSG25 ="Nazwa udostępnionego elementu %s jest zarezerwowana. Wybierz inną nazwę.";
NAS.MSG30 ="Błąd podczas wymazywania dysków: nie określono żadnych dysków do wymazania.";
NAS.MSG31 ="Błąd podczas wymazywania dysków: podczas próby wymazania dysków zabrakło pamięci.";
NAS.MSG32 ="Błąd podczas wymazywania dysków: nie można wymazać dysku „%s”.";
NAS.MSG33 ="Błąd podczas wymazywania dysków: brak pamięci.";
NAS.MSG34 ="Wszystkie żądane dyski zostały pomyślnie wymazane.";
NAS.MSG35 ="Nie żądano wymazania żadnych dysków, dlatego nie wykonano żadnej czynności.";
NAS.MSG36 ="Błąd podczas wymazywania dysków: podczas próby wymazania dysków zabrakło pamięci.";
NAS.MSG37 ="Błąd podczas wymazywania dysków: nie określono żadnych dysków do wymazania.";
NAS.MSG38 ="Wszystkie żądane dyski zostały pomyślnie wymazane.";
NAS.MSG39 ="Nie żądano wymazania żadnych dysków, dlatego nie wykonano żadnej czynności.";
NAS.MSG30 ="Nie można bezpiecznie odłączyć dysku „%s”.";
NAS.MSG40 ="Nie można bezpiecznie odłączyć dysku „%s”.";
NAS.MSG41 ="Dysk został odłączony.";
NAS.MSG42 ="Właściwości dostępu dla udostępnionego elementu %s zostały zmienione.";
NAS.MSG43 ="Stosowanie ustawień konta nie powiodło się!";
NAS.MSG44 ="Ustawienia konta zostały zastosowane.";
NAS.MSG45 ="Wprowadzone wartości są nieprawidłowe. Spróbuj ponownie.";
NAS.MSG46 ="Określanie ustawień powiodło się.";
NAS.MSG47 ="Nie można %s domeny %s (błąd %s) i nie można ponownie przyłączyć się do domeny %s (błąd %s), przywrócono członkostwo w grupie roboczej %s.";
NAS.MSG48 ="Nie można %s domeny %s (błąd %s), przywrócono członkostwo w domenie %s.";
NAS.MSG49 ="join_workgroup_or_domain_error Nie można %s domeny %s (błąd %s), przywrócono członkostwo w domenie %s.";
NAS.MSG50 ="Teraz jest członkiem domeny %s.";
NAS.MSG51 ="Teraz jest członkiem grupy roboczej %s.";
NAS.MSG52 ="Stosowanie ustawień nie powiodło się!";
NAS.MSG53 ="Udostępniony element FTP został usunięty.";
NAS.MSG54 ="Dysk jest zajęty!";



