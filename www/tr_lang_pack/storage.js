/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (Yalnızca Okunur)";
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
DISK_FUN.Title ="Disk Yönetimi";
DISK_FUN.Part1 ="Disk Bilgileri";
DISK_FUN.Part2 ="Diski Biçimle";
DISK_FUN.Manufacture ="Disk";
DISK_FUN.Partition ="Bölüm";
DISK_FUN.FS ="Dosya Sistemi";
DISK_FUN.TS ="Kapasite";
DISK_FUN.FreeS ="Boş Alan";
DISK_FUN.Shares ="Paylaştırır";
DISK_FUN.SharesFd ="Klasör Paylaştırır";
DISK_FUN.CreateShare ="Paylaşım Oluştur";
DISK_FUN.Remain ="Atanmamış";
DISK_FUN.TotalSize ="Toplam";
DISK_FUN.Detecting ="Algılama";
DISK_FUN.MSG1 ="Seçtiğiniz diskte/disklerde yazıcı sunucu bilgileri bulunur.\n Disk(ler)i silemezsiniz";
DISK_FUN.MSG2 ="Diskleri, aynı disk havuzuna katılan diğer diskleri silmeden silemezsiniz";
DISK_FUN.MSG3 ="Silmek için disk seçilmedi";
DISK_FUN.MSG4 ="Disk Siliniyor, Lütfen bekleyin!";
DISK_FUN.MSG5 ="Disk yok";
DISK_FUN.MSG6 ="Admin grubu erişimi kaldırılamaz.";
DISK_FUN.MSG7 ="Takılı USB aygıtı desteklenmiyor.";
//DISK_FUN.NoDisk1 ="There are currently no available disks.";
DISK_FUN.NoDisk2 ="Disk yok.";
DISK_FUN.AP ="Tüm_Bölümler";
DISK_FUN.ENTERNAME ="Bir bölümün adını girin:";
DISK_FUN.WARNING ="Uyarı:";
DISK_FUN.FORMATWARN1 ="Disk Biçimlendirme birkaç dakika sürebilir; lütfen gücü kapatmayın veya";
DISK_FUN.FORMATWARN2 ="Sıfırla düğmesine basmayın.";
DISK_FUN.FIRMVER ="Bellenim Sürümü";
DISK_FUN.BACKUP ="Yedekle";
DISK_FUN.WARNING1 ="UYARI!! Disklerin silinmesi geri dönüşsüz veri kaybına neden olabilir. Devam etmek istiyor musunuz?";
DISK_FUN.FR ="Klasör";
DISK_FUN.ENTERINTOF= "Klasöre Gir";
DISK_FUN.SELECT ="Seç";
DISK_FUN.MPATH =" Bu konum yok.";
DISK_FUN.CPATH ="Paylaşılan klasör konumu yok.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName ="Ekran Adı";
SHARE_FUN.ShareAccess ="Paylaşım Erişimi";
SHARE_FUN.Title ="Paylaşım Yönetimi";
SHARE_FUN.NOTEXIST ="Yok!";
SHARE_FUN.MSG1 ="Tanımlanmış paylaşım yok.";
SHARE_FUN.MSG2 ="Paylaşım sayısı limiti aşıyor! Önce birini silmeniz gerekir.";
SHARE_FUN.Properties ="Düzenle";
SHARE_FUN.FF ="FTP Yükleyici";
SHARE_FUN.MSF ="Ortam Klasörü";
SHARE_FUN.AF="Erişim Klasörü";
SHARE_FUN.SF ="Paylaşılan Klasör";
SHARE_FUN.DN ="Ekran Adı";
SHARE_FUN.patition ="Bölüm";
SHARE_FUN.location ="Konum";
SHARE_FUN.NF ="Yeni Klasör";
SHARE_FUN.CF ="Geçerli Klasör";
SHARE_FUN.AS ="Erişim";
SHARE_FUN.AG ="Kullanılabilir Gruplar";
SHARE_FUN.GWA ="Erişimi Olan Gruplar";
SHARE_FUN.GN ="Grup Adı";
SHARE_FUN.description ="Açıklama";
SHARE_FUN.rw ="okuma ve yazma";
SHARE_FUN.ro ="salt okunur";
SHARE_FUN.NAME ="Ad";
SHARE_FUN.FN ="Tam Ad";
SHARE_FUN.PW ="Parola";
SHARE_FUN.CP ="Parolayı Onaylayın";
SHARE_FUN.GM ="Grup Üyesi";
SHARE_FUN.AD ="Hesap Devredışı";
SHARE_FUN.SUMMARY="Paylaşılan Klasör Özet";
SHARE_FUN.IP ="Paylaşılan Disk IP Adresi:";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA ="Erişimi olan Grup";
SA_FUN.OG ="Diğer Grup";
SA_FUN.MSG1 ="Admin grubu kaldırılamaz!";
SA_FUN.MSG2 ="Grup Adı zaten var! ";
SA_FUN.FTP_Access ="FTP'ye Erişim";
SA_FUN.Entire_Partition ="Tüm Bölümü Paylaştır";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin ="admin";
AD_FUN.guest ="konuk";
AD_FUN.svrname="Sunucu Adı";
AD_FUN.devname="Aygıt Adı";
AD_FUN.SLIP="Sunucu LAN IP Adresi:";
AD_FUN.SWIP="Sunucu İnternet IP Adresi:";
AD_FUN.MN ="Makine Adı:";
AD_FUN.WN ="Çalışma Grubu Adı:";
AD_FUN.MD ="Makine Tanımı:";
AD_FUN.APS ="Tüm Bölümleri Paylaştır:";
AD_FUN.UserName ="Kullanıcı Adı";
AD_FUN.FULLNAME ="Tam Ad";
AD_FUN.GroupName ="Grup Adı";
AD_FUN.Basic ="Temel";
AD_FUN.UserM ="Kullanıcı Yönetimi";
AD_FUN.GroupM ="Grup Yönetimi";
AD_FUN.AnymsAcess="Anonim Erişim";
AD_FUN.AnymsFTP="Anonim FTP";
AD_FUN.AnymsDisk="Anonim Disk Erişimi";
AD_FUN.readonly="Salt okunur disk erişimi";
AD_FUN.readwrite="Okuma yazma disk erişimi";
AD_FUN.MSG1 ="Tanımlanmış kullanıcı yok.";
AD_FUN.MSG2 ="admin kullanıcısı silinemez!";
AD_FUN.MSG3 ="Bu kullanıcıyı silmek istediğinizden emin misiniz?";
AD_FUN.MSG4 ="Bu grubu silmek istediğinizden emin misiniz?";
AD_FUN.MSG5 ="Maksimum kullanıcı sayısına erişildi. Başka bir kullanıcı eklemek için, önce bir kullanıcı silmeniz gerekir.";
AD_FUN.MSG6 =" Maksimum grup sayısına erişildi. Başka bir grup eklemek için, önce bir grup silmeniz gerekir.";
AD_FUN.MSG7 ="Çalışma Grubu Adı boş olamaz!!";
AD_FUN.MSG8 ="Çalışma Grubu adı 15 karakterden uzun olamaz!!";
AD_FUN.MSG9 ="Çalışma Grubu adında yalnızca AlfaSayısal karakterler ve kesme işaretleri bulunur.";
AD_FUN.MSG10 ="Çalışma Grubu Adı bir Harfle başlamalıdır.";
AD_FUN.MSG11 ="Makine adını değiştirmeyi seçtiniz. Mevcut ağ eşleştirmesinin yeniden eşleştirilmesi gerekir. \nDevam etmek istiyor musunuz?";
AD_FUN.MSG12 ="Makine Adı boş olamaz!!";
AD_FUN.MSG13 ="Makine Adı 15 karakterden uzun olamaz!!";
AD_FUN.MSG14 ="Makine Adında yalnızca Alfaayısal karakterler ve kesme işaretleri bulunur.";
AD_FUN.MSG15 ="Makine Adı bir Harfle başlamalıdır" ; 
AD_FUN.MSG16 ="Kullanıcı Adı zaten var! ";
AD_FUN.MSG17 ="Kullanıcı adında yalnızca şu karakterler bulunabilir: alfasayısal, kesme işaretleri ve alt çizgiler.";
AD_FUN.MSG18 ="Grup sayısı limiti aşıyor! Önce birini silmeniz gerekir.";
AD_FUN.MSG19 ="Parola onayı eşleşmedi.";
AD_FUN.MSG20 ="Parola geçersiz! (minimum 4, maksimum 63 karakter)";
AD_FUN.MSG21 ="admin kullanıcısının adı değiştirilemez!";
AD_FUN.MSG22 ="konuk kullanıcının adı değiştirilemez!";
AD_FUN.MSG23 ="Kullanıcı adı boş olamaz!";
AD_FUN.MSG24 ="Bir hesap adı girmeniz gerekir!";
AD_FUN.MSG25 ="Bu hesap adı zaten var!";
AD_FUN.MSG26 ="Bir parola girmeniz zorunludur!";
AD_FUN.MSG27 ="Kullanıcı sayısı limiti aşıyor! Önce birini silmeniz gerekir.";
AD_FUN.MSG28 ="Kullanıcı Hesabı";
AD_FUN.MSG29 ="admin kulanıcısı kaldırılamaz!";
AD_FUN.MSG30 ="Kullanıcı ";
AD_FUN.MSG31 =" kaldırılamaz!";
AD_FUN.MSG32 ="Parolada boşluklar ve ters kesme işaretleri kullanılamaz.";
AD_FUN.MSG33 ="Makine Adında yalnızca AlfaSayısal karakterler ve kesme işaretleri bulunur.";
AD_FUN.MSG34 ="Bu kullanıcıyı silmek istiyor musunuz \"";
AD_FUN.MSG35 ="\"?";
AD_FUN.MSG36 ="Bu grubu silmek istiyor musunuz \"";
AD_FUN.MSG37 ="\"?";
AD_FUN.MSG38 ="Aygıt/Sunucu Adı boş olamaz!";
AD_FUN.MSG39 ="Aygıt/Sunucu Adında yalnızca AlfaSayısal karakterler ve kesme işaretleri bulunur !";
AD_FUN.MSG40 ="Aygıt/Sunucu Adı bir Harfle başlamalıdır!";
AD_FUN.MSG41 ="Router adı boş olamaz.";
AD_FUN.MSG42 ="Router adında yalnızca alfasayısal karakterler ve kesme işaretleri bulunabilir.";
AD_FUN.MSG43 ="Router adı bir harfle başlamalıdır.";
AD_FUN.MSG44 ="Kullanıcının tam adı ve açıklamasında yalnızca bu karakterler bulunabilir: Alfasayısal karakterler, boşluk, kesme işaretleri veya alt çizgiler.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties ="Grup Özellikleri";
GA_FUN.OU ="Diğer Kullanıcılar";
GA_FUN.UIG ="Gruptaki Kullanıcılar";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title ="UPnP Ortam Sunucusu";
MS_FUN.svrname ="Ortam Sunucusu Adı";
MS_FUN.Setup ="Ayarlar";
MS_FUN.DB ="Veritabanı";
MS_FUN.ServerName ="Sunucu Adı:";
MS_FUN.FR= "Klasör";
MS_FUN.SCAN ="Tara";
MS_FUN.LASTSCAN ="Son tarama zamanı";
MS_FUN.AUTOSCAN ="___ aralıklarla otomatik tara";
MS_FUN.HOUR="Saat";
MS_FUN.MSG1 ="Halen tanımlanmış tarama paylaşımı yok.";
MS_FUN.MSG2 ="Tarama paylaşım sayısı limiti aşıyor! Önce birini silmeniz gerekir.";
MS_FUN.MSG3 ="Tüm bölümlerin taranması çok uzun sürebilir. Devam etmek istediğinizden emin misiniz?";
MS_FUN.MSG4 ="Disk Siliniyor, Lütfen bekleyin!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL ="Bölüm Listesi";
SP_FUN.ST ="Seç";
SP_FUN.MSG1 ="Paylaşım klasörüne başarıyla eklendi.";
SP_FUN.MSG2 ="FTP paylaşım klasörüne başarıyla eklendi.";
SP_FUN.MSG3 ="Bu yol tarama listesinde zaten var! İki kere eklenemez.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS ="FTP Sunucusu";
FS_FUN.svrname ="FTP Sunucu Adı";
FS_FUN.Share ="Paylaştır";
FS_FUN.EDIT ="Düzenle";
FS_FUN.MSG1 ="Halen tanımlanmış FTP erişimi yok.";
FS_FUN.ACCESS ="Erişim";
FS_FUN.PO ="FTP Portu:";
FS_FUN.FTP_CHARACTERSET ="Kodlama:";
FS_FUN.UNICODE="Unicode (UTF-8)";
FS_FUN.GB18030="Chinese Simplified (GB18030)";
FS_FUN.BIG5="Chinese Traditional (Big5)";
FS_FUN.CP1258="Vietnamese (CP1258)";
FS_FUN.ISO8859_1="ISO 8859-1";
FS_FUN.ALERT1 ="Bu kökün yeni klasör oluşturmasına izin verilmiyor!";
FS_FUN.ALERT2 ="Lütfen geçerli bir Klasör Adı girin!";
FS_FUN.ALERT3 ="Lütfen geçerli bir paylaşım adı girin.";
FS_FUN.ALERT4 ="Ekran adı zaten paylaşım listesinde!";
FS_FUN.ALERT5 ="Lütfen geçerli bir paylaşım konumu girin.";
FS_FUN.ALERT6 ="FTP portu boş olamaz!";
FS_FUN.ALERT7 ="Lütfen ftp paylaşım klasörünü seçin!";
FS_FUN.FTPFOLDER ="FTP Klasörü";
FS_FUN.DISPNAME ="Ekran Adı";
FS_FUN.UNIQUE ="(Benzersiz olmalıdır)";
FS_FUN.PAR ="Bölüm";
FS_FUN.LOCA ="Konum";
FS_FUN.NEWFOLDER ="Yeni Klasör";
FS_FUN.CURRENTFOLD ="Geçerli Klasör:";
FS_FUN.ACCESS ="Erişim";
FS_FUN.AVAILGROUP = "Kullanılabilir Gruplar";
FS_FUN.GROUPACCESS  ="Erişimi Olan Gruplar";
FS_FUN.INTERNET ="İnternet Erişimi";
FS_FUN.SUMMARY ="FTP Özeti";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title ="Diski İste";
CD_FUN.DISK ="Disk";
CD_FUN.MAM =  "Marka ve Model";
CD_FUN.PS ="Fiziksel Boyut";
CD_FUN.NPN ="Yeni Partisyon Adı:";
CD_FUN.MSG1 ="UYARI!! Diski İste komutu bu diskteki her şeyi yok edece.\nDevam etmek istiyor musunuz?";
CD_FUN.MSG2 ="UYARI: Bölüm adı Büyük harf olmalıdır\n\n Diskinizin adı '";
CD_FUN.MSG3 ="' büyük harfe dönüştürülecek. Devam etmek istiyor musunuz?";
CD_FUN.MSG4 ="Bölüm adında yalnızca alfasayısal karakterler/kesme işaretleri/alt çizgiler bulunur";
CD_FUN.MSG5 ="Yeni disk adı boş olamaz";
CD_FUN.MSG6 ="UYARI: FAT32 Disk adları 11 karakterden uzun olamaz\n\n Diskinizin adı '";
CD_FUN.MSG7 ="' 11 karaktere kısaltılır. Devam etmek istiyor musunuz?";
CD_FUN.DISK_MSG =" yok.\n";
CD_FUN.NODISKS ="Takılı Disk yok";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 ="Kullanıcı adında yalnızca alfasayısal karakterler/kesme işaretleri/alt çizgiler bulunur";
GP_FUN.MSG2 ="Grup sayısı limiti aşıyor! Önce birini silmeniz gerekir.";
GP_FUN.MSG3 ="Bu grup zaten var! ";
GP_FUN.MSG4 ="Grup adı boş olamaz!";
GP_FUN.MSG5 ="Grup adında yalnızca alfasayısal karakterler/kesme işaretleri/alt çizgiler bulunur";
GP_FUN.GA ="Grup Hesabı";
GP_FUN.GN ="Grup Adı";
GP_FUN.DES ="Açıklama";
GP_FUN.ACCESS ="Erişim";
GP_FUN.RNW ="okuma ve yazma";
GP_FUN.RO ="salt okunur";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title ="Paylaşım Özellikleri" ;
ShareP_FUN.SF ="Paylaşım Klasörü";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title ="Kullanıcı Özellikleri";
UP_FUN.FName ="Ad";
UP_FUN.PWD ="Parola"
UP_FUN.Reconfirm ="Onaylamak için yeniden girin";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title ="Veri Yedekleme";
DB_FUN.SELJOB ="İş numarasını seçin";
DB_FUN.JOBNAME ="İş Adı";
DB_FUN.BType ="Yedekleme Türü";
DB_FUN.Direction ="Yönlendirme";
DB_FUN.WRTSL54GS ="Bu WRTSL54GS";
DB_FUN.RD ="Uzak Aygıt";
DB_FUN.DAYS ="Günler";
DB_FUN.TIMES ="Saatler";
DB_FUN.LOGIN ="Kullanıcı Adı";
DB_FUN.sunday ="&nbsp;Paz";
DB_FUN.Mon ="&nbsp;Pzt"; 
DB_FUN.Tue ="&nbsp;Sal"; 
DB_FUN.Wed ="&nbsp;Çar";
DB_FUN.Thu ="&nbsp;Per";
DB_FUN.Fri ="&nbsp;Cum";
DB_FUN.Sat ="&nbsp;Cts";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL ="Klasör Listesi";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase ="Hızlı Sil";
CMD.FullErase ="Tam Sil";
CMD.EraseDisk ="Diski Biçimle";
CMD.Refresh ="Yenile";
CMD.Claim ="İste";
CMD.SAVESET ="Ayarları Kaydet";
CMD.SafeRemove ="Diski Güvenle Kaldır";
CMD.CreateShare ="Paylaşım Oluştur";
CMD.ModifyShare ="Paylaşımı Değiştir";
CMD.SELPart ="Bölüm Seç";
CMD.Modify ="Değiştir";
CMD.Delete ="Sil";
CMD.RO =">> Salt Okunur";
CMD.RW =">> Okuma/Yazma";
CMD.RM ="<< Kaldır";
CMD.CANCELCHANGE ="Değişiklikleri İptal Et";
CMD.CT ="Sürdür";
CMD.CLOSE ="Kapat";
CMD.CreateNewUser ="Yeni Kullanıcı Oluştur";
CMD.CreateNewGroup ="Yeni Grup Oluştur";
CMD.CreateNewShare ="Yeni Paylaşım Oluştur";
CMD.JG =">> Gruba Katıl ";
CMD.SAP ="Tümünü Tara ";
CMD.SPS ="Taranacak Klasörü Belirt";
CMD.UOL =" Bir Düzey Yukarı ";
CMD.SP ="Bölüm Seç";
CMD.FSA ="Erişilecek Klasörü Belirtin";
CMD.Claim ="İste";
CMD.CL ="Temizle";
CMD.CANCEL ="İptal";
CMD.CGroup ="Grup Oluştur";
CMD.CUser ="Kullanıcı Oluştur";
CMD.MUser ="Kullanıcı Değiştir";
CMD.NOPWD ="PAROLA YOK";
CMD.DTE ="Bu Girişi Sil";
CMD.ALERT1 ="Disk Yenileniyor, Lütfen bekleyin!";
CMD.CREATE ="Oluştur";
CMD.UPFOLDER ="Üst Klasöre Dön";
CMD.ALLFOLDER ="Tüm Klasörler";
CMD.FORMAT ="Biçimle";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable ="Etkin";
OPT.item_Disable ="Devre Dışı";
OPT.item_ALLP ="Tüm Bölümler";
OPT.item_SF ="Klasör Belirtme";
OPT.item_Everyday ="Her gün";
OPT.item_opt1 ="Bu WRTSL54GS'den bu aygıta";
OPT.item_opt2 ="Başka bir aygıttan bu WRTSL54GS'e" 
OPT.item_opt3 ="Erişim için oturum açmak gerekir";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE ="Daha fazla...";
HELPMSG.DISK1 ="Router'a bağlı diskin bilgilerini gösterir.";
HELPMSG.DISK2 ="Bir diski silmek için, diskin adının yanındaki onay kutusunu tıklatın.";
HELPMSG.SHARE1 ="Yeni oluşturduğunuz Paylaşımların ayrıntılarını gösterir.";
HELPMSG.SHARE2 ="Yeni bir paylaşım oluşturmak için Yeni Paylaşım Oluştur düğmesini tıklatın.";
HELPMSG.AD1 ="Bu router'ın adı.";
HELPMSG.AD2 ="Ağa bağlı bilgisayarlarınızın adı.";
HELPMSG.AD3 ="Tabloda listelenen kullanıcılar.";
HELPMSG.AD4 ="Yeni bir kullanıcı oluşturmak için, Yeni Kullanıcı Oluştur düğmesini tıklatın.";
HELPMSG.AD5 ="Tabloda listelenen gruplar.";
HELPMSG.AD6 ="Yeni bir grup oluşturmak için, Yeni Grup Oluştur düğmesini tıklatın.";
HELPMSG.AD7 ="Grup adını girin. Grup adı en fazla 12 karakter uzunluğunda olabilir.";
HELPMSG.MS1 ="Ortam bağdaştırıcısının sunucuyu tanımlamak için kullandığı adı gösterir.";
HELPMSG.MS2 ="USB diskinin tüm bölümlerini taramak için bu düğmeyi tıklatın.";
HELPMSG.MS3 ="Taramak istediğiniz klasörü veya bölümü seçmek için bu düğmeyi tıklatın.";
HELPMSG.CD1 ="FAT32 olarak formatlanan boş bir diskte bir bölüm oluşturmak için.";
HELPMSG.ShareP1 ="Paylaşımın adını girin.";
HELPMSG.ShareP2 ="Bu paylaşımın saklanacağı klasördür. Bir kullanılabilir klasör listesinden seçmek için Bölüm Seç düğmesini tıklatın.";
HELPMSG.UP1 ="Kullanıcı adını girin. Kullanıcı adı 20 karakter uzunluğunda olabilir.";
HELPMSG.UP2 ="Parola girin. Parola en az 4, en fazla 8 karakter uzunluğunda olabilir.";
HELPMSG.UP3 ="Onaylamak için yeniden parolayı girin.";
HELPMSG.UP4 ="Grup";
HELPMSG.UP5 ="Bu kullanıcıyı yerleştirmek istediğiniz gruptan seçin.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disk";
FUNST.Share="Paylaştır";
FUNST.MS="Ortam Sunucusu";
FUNST.FTP ="FTP Sunucusu";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : NAS output in CGI
--------------------------------------------------------------------------------------------------*/
var NAS = new Object();
NAS.MSG1 ="Hesap ayarları başarıyla uygulandı.";
NAS.MSG2 ="Hesap %s zaten var!";
NAS.MSG3 ="Ayarlar uygulanamadı!";
NAS.MSG4 ="Tarama paylaşımı başarıyla silindi.";
NAS.MSG5 ="Ortam Veritabanı güncellenemedi!";
NAS.MSG6 ="Ortam Veritabanı güncellenemedi! Paylaşım yok.";
NAS.MSG7 ="Ortam Veritabanı güncellenemedi!";
NAS.MSG8 ="Veritabanı başarıyla güncellendi.";
NAS.MSG9 ="Ortam Veritabanı güncellenemedi. Bölüm yok!";
NAS.MSG10 ="Veritabanı başarıyla güncellendi.";
NAS.MSG11 ="Tarama paylaşımı başarıyla eklendi.";
NAS.MSG12 ="Paylaşım adı %s ayrıldı. Lütfen farklı bir ad seçin.";
NAS.MSG13 ="Paylaşım %s başarıyla değiştirildi.";
NAS.MSG14 ="Paylaşım %s başarıyla oluşturuldu.";
NAS.MSG15 ="Disk %s istenirken bir hata oluştu: Disk `%s' yok.";
NAS.MSG16 ="Disk istenirken bir hata oluştu: Disk için bir ad belirtmediniz.";
NAS.MSG17 ="Belirtilen disk adı `%s' geçerli değil.";
NAS.MSG18 ="Disk başarıyla istendi.";
NAS.MSG19 ="Disk istenirken hata oluştu %s: İsteme denemesi başarısız oldu.";
NAS.MSG20 ="Paylaşım %s silinirken hata oluştu: Paylaşım %s Birincil Etkialanı Denetleyici işlevleri tarafından kullanım için ayrılmış özel bir paylaşımdır. Ayrıca silinemez, ama Birincil Etkialanı Denetleyicisi kapalıysa, otomatik olarak kaldırılır.";
NAS.MSG21 ="Paylaşım %s başarıyla silindi";
NAS.MSG23 ="Paylaşım %s başarıyla değiştirildi.";
NAS.MSG24 ="Paylaşım %s başarıyla oluşturuldu.";
NAS.MSG25 ="Paylaşım adı %s ayrıldı. Lütfen farklı bir ad seçin.";
NAS.MSG30 ="Diskler silinirken hata oluştu: Silme için disk belirtilmedi.";
NAS.MSG31 ="Diskler silinirken hata oluştu: Diskler silinmeye çalışılırken bellek yetersiz kaldı.";
NAS.MSG32 ="Diskler silinirken hata oluştu: Disk `%s' silinemiyor.";
NAS.MSG33 ="Diskler silinirken hata oluştu: Bellek yetersiz.";
NAS.MSG34 ="İstenen tüm diskler başarıyla silindi.";
NAS.MSG35 ="Silinmesi istenen disk yok, bu nedenle hiçbir işlem yapılmadı.";
NAS.MSG36 ="Diskler silinirken hata oluştu: Diskler silinmeye çalışılırken bellek yetersiz kaldı.";
NAS.MSG37 ="Diskler silinirken hata oluştu: Silme için disk belirtilmedi.";
NAS.MSG38 ="İstenen tüm diskler başarıyla silindi.";
NAS.MSG39 ="Silinmesi istenen disk yok, bu nedenle hiçbir işlem yapılmadı.";
NAS.MSG30 ="Disk `%s' güvenli bir şekilde ayrılamıyor.";
NAS.MSG40 ="Disk `%s' güvenli bir şekilde ayrılamıyor.";
NAS.MSG41 ="Disk başarıyla ayrıldı.";
NAS.MSG42 ="%s paylaşımı için erişim özellikleri başarıyla değiştirildi.";
NAS.MSG43 ="Hesap ayarları uygulanamadı!";
NAS.MSG44 ="Hesap ayarları başarıyla uygulandı.";
NAS.MSG45 ="Girdiğiniz değerler geçersiz. Lütfen yeniden deneyin.";
NAS.MSG46 ="Ayarlar başarılı.";
NAS.MSG47 ="%s domain %s (got error %s) bağlanamadı ve %s (got error %s) etki alanına yeniden katılamadı, %s çalışma grubu üyeliğine geri döndü.";
NAS.MSG48 =" %s etkialanında %s domain %s (got error %s) üyeliğe geri dönemedi.";
NAS.MSG49 ="join_workgroup_or_domain_error %s etkialanında %s domain %s (got error %s) üyeliğe geri dönemedi.";
NAS.MSG50 ="Şimdi %s etkialanına üye.";
NAS.MSG51 ="Şimdi %s çalışma grubuna üye.";
NAS.MSG52 ="Ayarlar uygulanamadı!";
NAS.MSG53 ="FTP paylaşımı başarıyla silindi.";
NAS.MSG54 ="Disk meşgul!";




