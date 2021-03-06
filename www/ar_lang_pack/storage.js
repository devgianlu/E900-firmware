/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (للقراءة فقط)";
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
DISK_FUN.Title ="إدارة القرص";
DISK_FUN.Part1 ="تفاصيل القرص";
DISK_FUN.Part2 ="تنسيق القرص";
DISK_FUN.Manufacture ="القرص";
DISK_FUN.Partition ="القسم";
DISK_FUN.FS ="نظام الملفات";
DISK_FUN.TS ="السعة";
DISK_FUN.FreeS ="المساحة الخالية";
DISK_FUN.Shares ="المشاركات";
DISK_FUN.SharesFd ="مجلد المشاركات";
DISK_FUN.CreateShare ="إنشاء مشاركة";
DISK_FUN.Remain ="غير مخصص";
DISK_FUN.TotalSize ="المجموع";
DISK_FUN.Detecting ="يتم الآن الكشف عن";
DISK_FUN.MSG1 ="يحتوي القرص (الأقراص) المحدد على معلومات خادم الطباعة.\n لا يمكنك مسح القرص (الأقراص)";
DISK_FUN.MSG2 ="لا يمكنك مسح أقراص من دون مسح أقراص أخرى مشارِكة في مجموعة الأقراص نفسها";
DISK_FUN.MSG3 ="لم يتم تحديد أي أقراص للمسح";
DISK_FUN.MSG4 ="يتم الآن محو القرص، يرجى الانتظار!";
DISK_FUN.MSG5 ="لا توجد أقراص متوفرة";
DISK_FUN.MSG6 ="لا يمكن إزالة وصول مجموعة المسؤولين.";
DISK_FUN.MSG7 ="جهاز USB المرفق غير معتمد.";
//DISK_FUN.NoDisk1 ="There are currently no available disks.";
DISK_FUN.NoDisk2 ="لا توجد أقراص متوفرة.";
DISK_FUN.AP ="كافة_الأقسام";
DISK_FUN.ENTERNAME ="أدخل اسم قسم:";
DISK_FUN.WARNING ="تحذير:";
DISK_FUN.FORMATWARN1 ="قد يستغرق تنسيق القرص بضع دقائق؛ يرجى عدم إيقاف تشغيل";
DISK_FUN.FORMATWARN2 ="الطاقة أو الضغط على زر إعادة التعيين.";
DISK_FUN.FIRMVER ="إصدار البرنامج الثابت";
DISK_FUN.BACKUP ="النسخ الاحتياطي";
DISK_FUN.WARNING1 ="تحذير!! سيؤدي مسح الأقراص إلى فقد البيانات بشكل غير قابل للرجوع عنه. هل تريد المتابعة؟";
DISK_FUN.FR ="المجلد";
DISK_FUN.ENTERINTOF= "الدخول في المجلد";
DISK_FUN.SELECT ="تحديد";
DISK_FUN.MPATH =" هذا الموقع غير موجود.";
DISK_FUN.CPATH ="موقع المجلد المشترك هذا غير موجود.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName ="اسم العرض";
SHARE_FUN.ShareAccess ="الوصول إلى المشاركة";
SHARE_FUN.Title ="إدارة المشاركة";
SHARE_FUN.NOTEXIST ="غير موجود!";
SHARE_FUN.MSG1 ="لا توجد مشاركات محددة حالياً.";
SHARE_FUN.MSG2 ="يتجاوز عدد المشاركات الحد! يجب حذف إحداها أولاً.";
SHARE_FUN.Properties ="تحرير";
SHARE_FUN.FF ="مجلد FTP";
SHARE_FUN.MSF ="مجلد الوسائط";
SHARE_FUN.AF="مجلد الوصول";
SHARE_FUN.SF ="مجلد مشترك";
SHARE_FUN.DN ="اسم العرض";
SHARE_FUN.patition ="القسم";
SHARE_FUN.location ="الموقع";
SHARE_FUN.NF ="مجلد جديد";
SHARE_FUN.CF ="المجلد الحالي";
SHARE_FUN.AS ="الوصول";
SHARE_FUN.AG ="المجموعات المتاحة";
SHARE_FUN.GWA ="المجموعات ذات حق الوصول";
SHARE_FUN.GN ="اسم المجموعة";
SHARE_FUN.description ="الوصف";
SHARE_FUN.rw ="للقراءة والكتابة";
SHARE_FUN.ro ="للقراءة فقط";
SHARE_FUN.NAME ="الاسم";
SHARE_FUN.FN ="الاسم الكامل";
SHARE_FUN.PW ="كلمة المرور";
SHARE_FUN.CP ="تأكيد كلمة المرور";
SHARE_FUN.GM ="عضو المجموعة";
SHARE_FUN.AD ="تعطيل الحساب";
SHARE_FUN.SUMMARY="ملخص المجلدات المشتركة";
SHARE_FUN.IP ="عنوان IP للقرص المشترك:";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA ="المجموعة ذات حق الوصول";
SA_FUN.OG ="مجموعة أخرى";
SA_FUN.MSG1 ="لا يمكن إزالة مجموعة المسؤولين!";
SA_FUN.MSG2 ="اسم المجموعة موجود بالفعل!";
SA_FUN.FTP_Access ="الوصول إلى FTP";
SA_FUN.Entire_Partition ="مشاركة القسم بالكامل";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin ="مسؤول";
AD_FUN.guest ="ضيف";
AD_FUN.svrname="اسم الخادم";
AD_FUN.devname="اسم الجهاز";
AD_FUN.SLIP="عنوان IP الشبكة المحلية للخادم:";
AD_FUN.SWIP="عنوان IP الخادم على إنترنت:";
AD_FUN.MN ="اسم الجهاز:";
AD_FUN.WN ="اسم مجموعة العمل:";
AD_FUN.MD ="وصف الجهاز:";
AD_FUN.APS ="مشاركة كافة الأقسام:";
AD_FUN.UserName ="اسم المستخدم";
AD_FUN.FULLNAME ="الاسم الكامل";
AD_FUN.GroupName ="اسم المجموعة";
AD_FUN.Basic ="أساسي";
AD_FUN.UserM ="إدارة المستخدمين";
AD_FUN.GroupM ="إدارة المجموعات";
AD_FUN.AnymsAcess="الوصول المجهول";
AD_FUN.AnymsFTP="FTP مجهول";
AD_FUN.AnymsDisk="الوصول إلى القرص المجهول";
AD_FUN.readonly="الوصول إلى القرص للقراءة فقط";
AD_FUN.readwrite="الوصول إلى القرص للقراءة والكتابة";
AD_FUN.MSG1 ="لا يوجد مستخدمون محددون حالياً.";
AD_FUN.MSG2 ="لا يمكن حذف مسؤول المستخدمين!";
AD_FUN.MSG3 ="هل تريد بالتأكيد حذف هذا المستخدم؟";
AD_FUN.MSG4 ="هل تريد بالتأكيد حذف هذه المجموعة؟";
AD_FUN.MSG5 ="تم بلوغ العدد الأقصى للمستخدمين! لإضافة مستخدم آخر، ستحتاج إلى حذف مستخدم أولاً.";
AD_FUN.MSG6 =" تم بلوغ العدد الأقصى للمجموعات! لإضافة مجموعة أخرى، ستحتاج إلى حذف مجموعة أولاً.";
AD_FUN.MSG7 ="لا يمكن أن يكون اسم مجموعة العمل فارغاً!!";
AD_FUN.MSG8 ="لا يمكن أن يكون اسم مجموعة العمل أكثر من 15 حرفاً!!";
AD_FUN.MSG9 ="يمكن أن يحتوي اسم مجموعة العمل على أحرف أبجدية رقمية/شُرط فقط";
AD_FUN.MSG10 ="يجب أن يبدأ اسم مجموعة العمل بحرف";
AD_FUN.MSG11 ="لقد اخترت تغيير اسم الجهاز. يجب إعادة تعيين الشبكة الموجودة. \n هل تريد المتابعة؟";
AD_FUN.MSG12 ="لا يمكن أن يكون اسم الجهاز فارغاً!!";
AD_FUN.MSG13 ="لا يمكن أن يكون اسم الجهاز أكثر من 15 حرفاً!!";
AD_FUN.MSG14 ="يمكن أن يحتوي اسم الجهاز على أحرف أبجدية رقمية/شُرط فقط";
AD_FUN.MSG15 ="يجب أن يبدأ اسم الجهاز بحرف"; 
AD_FUN.MSG16 ="اسم المستخدم موجود بالفعل!";
AD_FUN.MSG17 ="يمكن أن يحتوي اسم المستخدم على الأحرف التالية فقط: أحرف أبجدية رقمية أو شُرط أو علامات تسطير سفلي.";
AD_FUN.MSG18 ="يتجاوز عدد المجموعات الحد! يجب حذف إحداها أولاً.";
AD_FUN.MSG19 ="تأكيد كلمة المرور غير مطابق.";
AD_FUN.MSG20 ="كلمة المرور غير صالحة! (4 أحرف كحد أدنى، 63 حرفاً كحد أقصى)";
AD_FUN.MSG21 ="لا يمكن إعادة تسمية مسؤول المستخدمين!";
AD_FUN.MSG22 ="لا يمكن إعادة تسمية الضيف المستخدم!";
AD_FUN.MSG23 ="لا يمكن أن يكون اسم المستخدم فارغاً!";
AD_FUN.MSG24 ="يجب إدخال اسم حساب!";
AD_FUN.MSG25 ="اسم الحساب موجود بالفعل!";
AD_FUN.MSG26 ="يجب إدخال كلمة مرور!";
AD_FUN.MSG27 ="يتجاوز عدد المستخدمين الحد! يجب حذف أحدهم أولاً.";
AD_FUN.MSG28 ="حساب المستخدم";
AD_FUN.MSG29 ="لا يمكن إزالة مسؤول المستخدمين!";
AD_FUN.MSG30 ="لا يمكن ";
AD_FUN.MSG31 =" إزالة المستخدم!";
AD_FUN.MSG32 ="غير مسموح بالمسافات أو الشرطة المائلة للخلف في كلمة المرور.";
AD_FUN.MSG33 ="يمكن أن يحتوي اسم العرض على أحرف أبجدية رقمية/شُرط فقط";
AD_FUN.MSG34 ="هل تريد حذف المستخدم \"";
AD_FUN.MSG35 ="\"?";
AD_FUN.MSG36 ="هل تريد حذف المجموعة \"";
AD_FUN.MSG37 ="\"?";
AD_FUN.MSG38 ="يجب ألا يكون اسم الجهاز/الخادم فارغاً!";
AD_FUN.MSG39 ="يمكن أن يحتوي اسم الجهاز/الخادم على أحرف أبجدية رقمية/شُرط فقط!";
AD_FUN.MSG40 ="يجب أن يبدأ اسم الجهاز/الخادم بحرف!";
AD_FUN.MSG41 ="لا يمكن أن يكون اسم الموجّه فارغاً.";
AD_FUN.MSG42 ="يمكن أن يحتوي اسم الموجّه على أحرف أبجدية رقمية وشُرط فقط.";
AD_FUN.MSG43 ="يجب أن يبدأ اسم الموجّه بحرف.";
AD_FUN.MSG44 ="يمكن أن يحتوي الاسم الكامل للمستخدم ووصفه على الأحرف التالية فقط: أحرف أبجدية رقمية أو مسافات أو شُرط أو علامات تسطير سفلي.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties ="خصائص المجموعة";
GA_FUN.OU ="مستخدمون آخرون";
GA_FUN.UIG ="المستخدمون في المجموعة";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title ="خادم وسائط UPnP";
MS_FUN.svrname ="اسم خادم الوسائط";
MS_FUN.Setup ="الإعداد";
MS_FUN.DB ="قاعدة البيانات";
MS_FUN.ServerName ="اسم الخادم:";
MS_FUN.FR= "المجلد";
MS_FUN.SCAN ="مسح";
MS_FUN.LASTSCAN ="آخر وقت للمسح";
MS_FUN.AUTOSCAN ="مسح تلقائي كل";
MS_FUN.HOUR="ساعات";
MS_FUN.MSG1 ="لا توجد حالياً مشاركات محددة يتم مسحها.";
MS_FUN.MSG2 ="يتجاوز عدد المشاركات التي يتم مسحها الحد! يجب حذف إحداها أولاً.";
MS_FUN.MSG3 ="قد يستغرق مسح كافة الأقسام وقتاً طويلاً حتى يكتمل. هل تريد المتابعة بالتأكيد؟";
MS_FUN.MSG4 ="يتم الآن مسح القرص، يرجى الانتظار!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL ="قائمة الأقسام";
SP_FUN.ST ="تحديد";
SP_FUN.MSG1 ="تمت إضافة مجلد مشاركة بنجاح.";
SP_FUN.MSG2 ="تمت إضافة مجلد مشاركة FTP بنجاح.";
SP_FUN.MSG3 ="هذا المسار موجود بالفعل في قائمة المسح! لا يمكن إضافته مرتين.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS ="خادم FTP";
FS_FUN.svrname ="اسم خادم FTP";
FS_FUN.Share ="مشاركة";
FS_FUN.EDIT ="تحرير";
FS_FUN.MSG1 ="لا يوجد وصول إلى FTP محدد حالياً.";
FS_FUN.ACCESS ="الوصول";
FS_FUN.PO ="منفذ FTP:";
FS_FUN.FTP_CHARACTERSET ="التشفير:";
FS_FUN.UNICODE="Unicode ‏(UTF-8)";
FS_FUN.GB18030="الصينية المبسطة (GB18030)";
FS_FUN.BIG5="الصينية التقليدية (Big5)";
FS_FUN.CP1258="الفيتنامية (CP1258)";
FS_FUN.ISO8859_1="ISO 8859-1";
FS_FUN.ALERT1 ="غير مسموح لهذا الجذر بإنشاء مجلد جديد!";
FS_FUN.ALERT2 ="يرجى إدخال اسم مجلد صالح!";
FS_FUN.ALERT3 ="يرجى إدخال اسم مشاركة صالح.";
FS_FUN.ALERT4 ="اسم العرض موجود في قائمة المشاركات بالفعل!";
FS_FUN.ALERT5 ="يرجى إدخال موقع مشاركة صالح.";
FS_FUN.ALERT6 ="لا يمكن أن يكون منفذ FTP فارغاً!";
FS_FUN.ALERT7 ="يرجى تحديد مجلد مشاركة ftp!";
FS_FUN.FTPFOLDER ="مجلد FTP";
FS_FUN.DISPNAME ="اسم العرض";
FS_FUN.UNIQUE ="(يجب أن يكون فريداً.)";
FS_FUN.PAR ="القسم";
FS_FUN.LOCA ="الموقع";
FS_FUN.NEWFOLDER ="مجلد جديد";
FS_FUN.CURRENTFOLD ="المجلد الحالي:";
FS_FUN.ACCESS ="الوصول";
FS_FUN.AVAILGROUP =  "المجموعات المتاحة";
FS_FUN.GROUPACCESS  ="المجموعات ذات حق الوصول";
FS_FUN.INTERNET ="الوصول إلى إنترنت";
FS_FUN.SUMMARY ="ملخص FTP";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title ="طلب القرص";
CD_FUN.DISK ="القرص";
CD_FUN.MAM =  "التصنيع والطراز";
CD_FUN.PS ="الحجم الفعلي";
CD_FUN.NPN ="اسم القسم الجديد:";
CD_FUN.MSG1 ="تحذير!! سيؤدي طلب القرص إلى إتلاف كل ما على هذا القرص.\nهل تريد المتابعة؟";
CD_FUN.MSG2 ="تحذير: يجب أن يكون اسم القسم مكتوباً بأحرف كبيرة\n\n سيتم تحويل اسم القرص الخاص بك '";
CD_FUN.MSG3 ="' إلى أحرف كبيرة. هل تريد المتابعة؟";
CD_FUN.MSG4 ="يمكن أن يحتوي اسم القسم على أحرف أبجدية رقمية/شُرط/علامات تسطير سفلي فقط";
CD_FUN.MSG5 ="لا يمكن أن يكون اسم القرص الجديد فارغاً";
CD_FUN.MSG6 ="تحذير: لا يمكن أن تتجاوز أسماء قرص FAT32‏ 11 حرفاً\n\n سيتم اقتطاع اسم القرص الخاص بك '";
CD_FUN.MSG7 ="' إلى 11 حرفاً. هل تريد المتابعة؟";
CD_FUN.DISK_MSG =" غير موجود.\n";
CD_FUN.NODISKS ="لا توجد أقراص مرفقة";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 ="يمكن أن يحتوي اسم المستخدم على أحرف أبجدية رقمية/شُرط/علامات تسطير سفلي فقط";
GP_FUN.MSG2 ="يتجاوز عدد المجموعات الحد! يجب حذف إحداها أولاً.";
GP_FUN.MSG3 ="المجموعة موجودة بالفعل!";
GP_FUN.MSG4 ="لا يمكن أن يكون اسم المجموعة فارغاً!";
GP_FUN.MSG5 ="يمكن أن يحتوي اسم المجموعة على أحرف أبجدية رقمية/شُرط/علامات تسطير سفلي فقط";
GP_FUN.GA ="حساب مجموعة";
GP_FUN.GN ="اسم المجموعة";
GP_FUN.DES ="الوصف";
GP_FUN.ACCESS ="الوصول";
GP_FUN.RNW ="للقراءة وللكتابة";
GP_FUN.RO ="للقراءة فقط";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title ="خصائص المشاركة";
ShareP_FUN.SF ="مجلد المشاركة";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title ="خصائص المستخدم";
UP_FUN.FName ="الاسم";
UP_FUN.PWD ="كلمة المرور"
UP_FUN.Reconfirm ="إعادة الإدخال للتأكيد";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title ="النسخ الاحتياطي للبيانات";
DB_FUN.SELJOB ="تحديد رقم المهمة";
DB_FUN.JOBNAME ="اسم المهمة";
DB_FUN.BType ="نوع النسخة الاحتياطية";
DB_FUN.Direction ="الاتجاه";
DB_FUN.WRTSL54GS ="WRTSL54GS هذا";
DB_FUN.RD ="الجهاز البعيد";
DB_FUN.DAYS ="الأيام";
DB_FUN.TIMES ="الأوقات";
DB_FUN.LOGIN ="اسم تسجيل الدخول";
DB_FUN.sunday ="&nbsp;الأحد";
DB_FUN.Mon ="&nbsp;الاثنين"; 
DB_FUN.Tue ="&nbsp;الثلاثاء"; 
DB_FUN.Wed ="&nbsp;الأربعاء";
DB_FUN.Thu ="&nbsp;الخميس";
DB_FUN.Fri ="&nbsp;الجمعة";
DB_FUN.Sat ="&nbsp;السبت";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL ="قائمة المجلدات";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase ="محو سريع";
CMD.FullErase ="محو كامل";
CMD.EraseDisk ="تنسيق القرص";
CMD.Refresh ="تحديث";
CMD.Claim ="طلب";
CMD.SAVESET ="حفظ الإعدادات";
CMD.SafeRemove ="إزالة القرص بأمان";
CMD.CreateShare ="إنشاء مشاركة";
CMD.ModifyShare ="تعديل المشاركة";
CMD.SELPart ="تحديد قسم";
CMD.Modify ="تعديل";
CMD.Delete ="حذف";
CMD.RO =">> للقراءة فقط";
CMD.RW =">> للقراءة/للكتابة";
CMD.RM ="<< إزالة";
CMD.CANCELCHANGE ="إلغاء التغييرات";
CMD.CT ="متابعة";
CMD.CLOSE ="إغلاق";
CMD.CreateNewUser ="إنشاء مستخدم جديد";
CMD.CreateNewGroup ="إنشاء مجموعة جديدة";
CMD.CreateNewShare ="إنشاء مشاركة جديدة";
CMD.JG =">> الانضمام إلى المجموعة ";
CMD.SAP ="مسح الكل ";
CMD.SPS ="تحديد مجلد لمسحه";
CMD.UOL =" مستوى واحد للأعلى ";
CMD.SP ="تحديد قسم";
CMD.FSA ="تحديد مجلد للوصول إليه";
CMD.Claim ="طلب";
CMD.CL ="مسح";
CMD.CANCEL ="إلغاء";
CMD.CGroup ="إنشاء مجموعة";
CMD.CUser ="إنشاء مستخدم";
CMD.MUser ="تعديل المستخدم";
CMD.NOPWD ="لا توجد كلمة مرور";
CMD.DTE ="حذف هذا الإدخال";
CMD.ALERT1 ="يتم الآن تجديد القرص، يرجى الانتظار!";
CMD.CREATE ="إنشاء";
CMD.UPFOLDER ="الرجوع للمجلد العلوي";
CMD.ALLFOLDER ="كل المجلدات";
CMD.FORMAT ="تنسيق";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable ="ممكَّن";
OPT.item_Disable ="معطّل";
OPT.item_ALLP ="كافة الأقسام";
OPT.item_SF ="تحديد مجلد";
OPT.item_Everyday ="كل يوم";
OPT.item_opt1 ="من WRTSL54GS هذا إلى جهاز آخر";
OPT.item_opt2 ="من جهاز آخر إلى WRTSL54GS هذا" 
OPT.item_opt3 ="يتطلب الوصول تسجيل الدخول";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE ="المزيد...";
HELPMSG.DISK1 ="عرض تفاصيل القرص المتصل حالياً بالموجّه.";
HELPMSG.DISK2 ="لمحو قرص، انقر فوق خانة الاختيار بجوار اسم القرص.";
HELPMSG.SHARE1 ="عرض تفاصيل المشاركات التي قمت بإنشائها حالياً.";
HELPMSG.SHARE2 ="انقر فوق الزر إنشاء مشاركة جديدة لإنشاء مشاركة جديدة.";
HELPMSG.AD1 ="اسم هذا الموجّه.";
HELPMSG.AD2 ="اسم أجهزة الكمبيوتر المتصلة بالشبكة.";
HELPMSG.AD3 ="المستخدمون مدرجون في الجدول.";
HELPMSG.AD4 ="لإنشاء مستخدم جديد، انقر فوق الزر إنشاء مستخدم جديد.";
HELPMSG.AD5 ="المجموعات مدرجة في الجدول.";
HELPMSG.AD6 ="لإنشاء مجموعة جديدة، انقر فوق الزر إنشاء مجموعة جديدة.";
HELPMSG.AD7 ="أدخل اسم المجموعة. يمكن أن يصل طول اسم المجموعة إلى 12 حرفاً";
HELPMSG.MS1 ="عرض الاسم الذي سيستخدمه محوّل الوسائط للتعرف على الخادم.";
HELPMSG.MS2 ="انقر فوق هذا الزر لمسح كافة أقسام قرص USB.";
HELPMSG.MS3 ="انقر فوق هذا الزر لتحديد مجلد أو قسم معين تريد مسحه.";
HELPMSG.CD1 ="لإنشاء قسم على القرص الفارغ الذي سيتم تنسيقه بتنسيق FAT32.";
HELPMSG.ShareP1 ="أدخل اسم المشاركة.";
HELPMSG.ShareP2 ="هذا هو المجلد الذي ستتضمنه هذه المشاركة. انقر فوق تحديد قسم للاختيار من قائمة المجلد المتوفر.";
HELPMSG.UP1 ="أدخل اسم المستخدم. يمكن أن يصل طول اسم المستخدم إلى 20 حرفاً.";
HELPMSG.UP2 ="أدخل كلمة المرور. يمكن أن تتألف كلمة المرور من 4 أحرف كحد أدنى، و8 أحرف كحد أقصى.";
HELPMSG.UP3 ="أدخل كلمة المرور مجدداً للتأكيد.";
HELPMSG.UP4 ="المجموعة";
HELPMSG.UP5 ="حدد من المجموعة التي تريد وضع هذا المستخدم بها.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="القرص";
FUNST.Share="مشاركة";
FUNST.MS="خادم الوسائط";
FUNST.FTP ="خادم FTP";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : NAS output in CGI
--------------------------------------------------------------------------------------------------*/
var NAS = new Object();
NAS.MSG1 ="تم تطبيق إعدادات الحساب بنجاح.";
NAS.MSG2 ="الحساب %s موجود بالفعل!";
NAS.MSG3 ="فشل تطبيق الإعدادات!";
NAS.MSG4 ="تم حذف المشاركة التي يتم مسحها بنجاح.";
NAS.MSG5 ="فشل تحديث قاعدة بيانات الوسائط!";
NAS.MSG6 ="فشل تحديث قاعدة بيانات الوسائط! المشاركة غير موجودة.";
NAS.MSG7 ="فشل تحديث قاعدة بيانات الوسائط!";
NAS.MSG8 ="تم تحديث قاعدة البيانات بنجاح.";
NAS.MSG9 ="فشل تحديث قاعدة بيانات الوسائط. لا يوجد أي قسم!";
NAS.MSG10 ="تم تحديث قاعدة البيانات بنجاح.";
NAS.MSG11 ="تمت إضافة مشاركة يتم مسحها بنجاح.";
NAS.MSG12 ="اسم المشاركة %s محجوز. يرجى اختيار اسم مختلف.";
NAS.MSG13 ="تم تعديل المشاركة %s بنجاح.";
NAS.MSG14 ="تم إنشاء المشاركة %s بنجاح.";
NAS.MSG15 ="حدث خطأ أثناء طلب القرص %s: القرص `%s' غير موجود.";
NAS.MSG16 ="حدث خطأ أثناء طلب القرص: لم تقم بتحديد اسم جديد للقرص.";
NAS.MSG17 ="اسم القرص المحدد، `%s'، غير صالح.";
NAS.MSG18 ="تم طلب القرص بنجاح.";
NAS.MSG19 ="حدث خطأ أثناء طلب القرص %s: فشل محاولة الطلب.";
NAS.MSG20 ="حدث خطأ أثناء حذف المشاركة %s: المشاركة %s هي مشاركة خاصة محجوزة للاستخدام بواسطة وظيفة وحدة التحكّم بالنطاق الأساسي. لا يمكن حذفها بشكل منفصل، لكن إذا تم إيقاف تشغيل وحدة التحكّم بالنطاق الأساسي، فستتم إزالتها تلقائياً.";
NAS.MSG21 ="تم حذف المشاركة %s بنجاح";
NAS.MSG23 ="تم تعديل المشاركة %s بنجاح.";
NAS.MSG24 ="تم إنشاء المشاركة %s بنجاح.";
NAS.MSG25 ="اسم المشاركة %s محجوز. يرجى اختيار اسم مختلف.";
NAS.MSG30 ="حدث خطأ أثناء محو الأقراص: لم يتم تحديد أقراص للمحو.";
NAS.MSG31 ="حدث خطأ أثناء محو الأقراص: نفدت الذاكرة أثناء محاولة محو الأقراص.";
NAS.MSG32 ="حدث خطأ أثناء محو الأقراص: يتعذّر محو القرص `%s'.";
NAS.MSG33 ="حدث خطأ أثناء محو الأقراص: نفدت الذاكرة.";
NAS.MSG34 ="تم محو كافة الأقراص المطلوبة بنجاح.";
NAS.MSG35 ="لم يتم طلب أي أقراص ليتم محوها، لذا لم يتم اتخاذ أي إجراء.";
NAS.MSG36 ="حدث خطأ أثناء محو الأقراص: نفدت الذاكرة أثناء محاولة محو الأقراص.";
NAS.MSG37 ="حدث خطأ أثناء محو الأقراص: لم يتم تحديد أقراص للمحو.";
NAS.MSG38 ="تم محو كافة الأقراص المطلوبة بنجاح.";
NAS.MSG39 ="لم يتم طلب أي أقراص ليتم محوها، لذا لم يتم اتخاذ أي إجراء.";
NAS.MSG30 ="يتعذّر قطع اتصال القرص `%s' بأمان.";
NAS.MSG40 ="يتعذّر قطع اتصال القرص `%s' بأمان.";
NAS.MSG41 ="تم قطع اتصال القرص بنجاح.";
NAS.MSG42 ="تم تغيير خصائص الوصول للمشاركة %s بنجاح.";
NAS.MSG43 ="فشل تطبيق إعدادات الحساب!";
NAS.MSG44 ="تم تطبيق إعدادات الحساب بنجاح.";
NAS.MSG45 ="القيم التي أدخلتها غير صالحة. يرجى المحاولة من جديد.";
NAS.MSG46 ="تمت الإعدادات بنجاح.";
NAS.MSG47 ="تعذّر %s النطاق %s (حدث الخطأ %s) وتعذّرت إعادة الانضمام للنطاق %s (حدث الخطأ %s)، وتم الإرجاع للعضوية في مجموعة العمل %s.";
NAS.MSG48 ="تعذّر %s النطاق %s (حدث الخطأ %s) وتم الإرجاع للعضوية في النطاق %s.";
NAS.MSG49 ="join_workgroup_or_domain_error تعذّر %s النطاق %s (حدث الخطأ %s) وتم الإرجاع للعضوية في النطاق %s.";
NAS.MSG50 ="الآن عضو في النطاق %s.";
NAS.MSG51 ="الآن عضو في مجموعة العمل %s.";
NAS.MSG52 ="فشل تطبيق الإعدادات!";
NAS.MSG53 ="تم حذف مشاركة FTP بنجاح.";
NAS.MSG54 ="القرص مشغول!";



