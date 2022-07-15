/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (lecture seule)";
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
DISK_FUN.Title = "Gestion des disques";
DISK_FUN.Part1 = "D�tails du disque";
DISK_FUN.Part2 = "Formater le disque";
DISK_FUN.Manufacture = "Disque";
DISK_FUN.Partition = "Partition";
DISK_FUN.FS = "Syst�me de fichiers";
DISK_FUN.TS = "Capacit�";
DISK_FUN.FreeS = "Espace libre";
DISK_FUN.Shares = "Partages";
DISK_FUN.SharesFd = "Dossier de partages";
DISK_FUN.CreateShare = "Cr�er un partage";
DISK_FUN.Remain = "Non allou�";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "D�tection";
DISK_FUN.MSG1 = "Le ou les disques s�lectionn�s contiennent de l'information sur le serveur d'impression.\n Vous ne pouvez pas nettoyer ces disques";
DISK_FUN.MSG2 = "Vous ne pouvez pas nettoyer les disques sans nettoyer aussi les autres disques du m�me groupe";
DISK_FUN.MSG3 = "Aucun disque s�lectionn� pour le nettoyage";
DISK_FUN.MSG4 = "Effacement du disque, veuillez patienter...";
DISK_FUN.MSG5 = "Aucun disque disponible";
DISK_FUN.MSG6 = "Le groupe Admin ne peut pas �tre supprim�.";
DISK_FUN.MSG7 = "Le p�riph�rique USB connect� n'est pas pris en charge.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Aucun disque n'est disponible.";
DISK_FUN.AP = "Toutes les partitions";
DISK_FUN.ENTERNAME = "Entrer le nom d'une partition�:";
DISK_FUN.WARNING = "Avertissement�:";
DISK_FUN.FORMATWARN1 = "Le formatage du disque peut durer quelques minutes; n'�teignez pas";
DISK_FUN.FORMATWARN2 = "l'appareil et n'appuyez pas sur le bouton R�initialiser.";
DISK_FUN.FIRMVER = "Version du microcode";
DISK_FUN.BACKUP = "Sauvegarder";
DISK_FUN.WARNING1 = "AVERTISSEMENT! Le nettoyage des disques supprimera des donn�es. Continuer? ";
DISK_FUN.FR = "Dossier";
DISK_FUN.ENTERINTOF= "Ouvrir le dossier. ";
DISK_FUN.MPATH = " Cet emplacement n'existe pas.";
DISK_FUN.CPATH = "L'emplacement de ce dossier partag� n'existe pas.";
DISK_FUN.SELECT = "S�lectionner"
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nom d'affichage";
SHARE_FUN.ShareAccess = "Acc�s au partage";
SHARE_FUN.Title = "Gestion d'un partage";
SHARE_FUN.NOTEXIST ="Inexistant(e)!";
SHARE_FUN.MSG1 = "Aucun partage n'est actuellement d�fini.";
SHARE_FUN.MSG2 = "Le nombre de partages d�passe la limite! Supprimez-en un d'abord.";
SHARE_FUN.Properties = "Modifier";
SHARE_FUN.FF = "Chargeur de microcode�FTP";
SHARE_FUN.MSF = "Dossier multim�dia";
SHARE_FUN.SF = "Dossier partag�";
SHARE_FUN.DN = "Nom d'affichage";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Emplacement";
SHARE_FUN.NF = "Nouveau dossier";
SHARE_FUN.CF = "Dossier actuel";
SHARE_FUN.AF="Dossier d'acc�s";
SHARE_FUN.AS = "Acc�s";
SHARE_FUN.AG = "Groupes disponibles";
SHARE_FUN.GWA = "Groupes avec acc�s";
SHARE_FUN.GN = "Nom du groupe";
SHARE_FUN.description = "Description";
SHARE_FUN.rw = "lecture et �criture";
SHARE_FUN.ro = "lecture seule";
SHARE_FUN.NAME ="Nom";
SHARE_FUN.FN = "Nom complet";
SHARE_FUN.PW = "Mot de passe";
SHARE_FUN.CP = "Confirmer le mot de passe";
SHARE_FUN.GM = "Membre du groupe";
SHARE_FUN.AD = "Compte d�sactiv�";
SHARE_FUN.SUMMARY="Sommaire des dossiers partag�s";
SHARE_FUN.IP = "Adresse�IP du disque partag�: ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Groupe avec acc�s";
SA_FUN.OG = "Autre groupe";
SA_FUN.MSG1 = "Impossible de supprimer le groupe admin!";
SA_FUN.MSG2 = "Le nom de groupe existe d�j�!";
SA_FUN.FTP_Access ="Acc�s�FTP";
SA_FUN.Entire_Partition ="Partager toute la partition";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "invit�";
AD_FUN.MN = "&nbsp;Nom de la machine�:";
AD_FUN.WN = "&nbsp;Nom du groupe de travail�:";
AD_FUN.MD = "&nbsp;Description de la machine�:";
AD_FUN.APS = "&nbsp;Partage de toutes les partitions�:";
AD_FUN.UserName = "Nom d'utilisateur";
AD_FUN.FULLNAME = "Nom complet";
AD_FUN.GroupName = "Nom du groupe";
AD_FUN.Basic = "Param�tres de base";
AD_FUN.UserM = "Gestion des utilisateurs";
AD_FUN.GroupM = "Gestion des groupes";
AD_FUN.AnymsAcess="Acc�s anonyme";
AD_FUN.AnymsFTP="FTP anonyme";
AD_FUN.AnymsDisk="Acc�s au disque anonyme";
AD_FUN.readonly="acc�s au disque en lecture seule";
AD_FUN.readwrite="acc�s au disque en lecture-�criture";
AD_FUN.svrname="Nom du serveur";
AD_FUN.devname="Nom du p�riph�rique";
AD_FUN.SLIP="Adresse�IP de r�seau du serveur";
AD_FUN.SWIP="Adresse�IP Internet du serveur";
AD_FUN.MSG1 = "Aucun utilisateur n'est actuellement d�fini.";
AD_FUN.MSG2 = "Impossible de supprimer l'utilisateur admin!";
AD_FUN.MSG3 = "Supprimer cet utilisateur?";
AD_FUN.MSG4 = "Supprimer ce groupe?";
AD_FUN.MSG5 = "Nombre maximum d'utilisateurs atteint! Pour pouvoir ajouter un utilisateur, vous devez d'abord en supprimer un.";
AD_FUN.MSG6 = "Nombre maximum de groupes atteint! Pour pouvoir ajouter un groupe, vous devez d'abord en supprimer un.";
AD_FUN.MSG7 = "Le champ Nom du groupe de travail ne peut �tre vide!";
AD_FUN.MSG8 = "Le champ Nom du groupe de travail ne peut comporter plus de 15�caract�res!";
AD_FUN.MSG9 = "Le champ Nom du groupe de travail ne peut contenir que des caract�res alphanum�riques ou des tirets";
AD_FUN.MSG10 = "Le nom du groupe de travail doit commencer par une lettre";
AD_FUN.MSG11 = "Vous avez choisi de changer le nom de la machine. Le mappage de r�seau devra �tre reconstitu�. \n Voulez-vous continuer?";
AD_FUN.MSG12 = "Le champ Nom de la machine ne peut �tre vide!";
AD_FUN.MSG13 = "Le champ Nom de la machine ne peut comporter plus de 15�caract�res!";
AD_FUN.MSG14 = "Le champ Nom de la machine ne peut contenir que des caract�res alphanum�riques ou des tirets";
AD_FUN.MSG15 = "Le nom de la machine doit commencer par une lettre"; 
AD_FUN.MSG16 = "Le nom d'utilisateur existe d�j�!";
AD_FUN.MSG17 = "Le nom de l'utilisateur ne peut contenir que les caract�res suivants�: caract�res alphanum�riques, tirets ou traits de soulignement.";
AD_FUN.MSG18 = "Le nombre de groupes d�passe la limite! Supprimez-en un d'abord.";
AD_FUN.MSG19 = "La confirmation du mot de passe a �chou�.";
AD_FUN.MSG20 = "Le mot de passe n'est pas valide! (minimum de 4�caract�res et maximum de�8)";
AD_FUN.MSG21 = "Impossible de renommer l'utilisateur admin!";
AD_FUN.MSG22 = "Impossible de renommer l'utilisateur invit�!";
AD_FUN.MSG23 = "Le nom d'utilisateur ne peut �tre vide!";
AD_FUN.MSG24 = "Vous devez entrer un nom de compte!";
AD_FUN.MSG25 = "Ce nom de compte existe d�j�.";
AD_FUN.MSG26 = "Vous devez entrer un mot de passe!";
AD_FUN.MSG27 = "Le nombre d'utilisateurs d�passe la limite! Supprimez-en un d'abord.";
AD_FUN.MSG28 = "Compte d'utilisateur";
AD_FUN.MSG29 = "Impossible de supprimer le compte admin! ";
AD_FUN.MSG30 = "Le compte utilisateur ";
AD_FUN.MSG31 = " ne peut �tre supprim�! ";
AD_FUN.MSG32="Le mot de passe ne peut pas contenir d'espace.";
AD_FUN.MSG33 = " Le champ nom d'affichage ne peut contenir que des caract�res alphanum�riques ou des tirets. ";
AD_FUN.MSG34 = "Voulez-vous supprimer l'utilisateur \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Voulez-vous supprimer le groupe \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Le nom du p�riph�rique ou du serveur ne peut pas �tre vide!";
AD_FUN.MSG39 = "Le nom du p�riph�rique ou du serveur ne peut contenir que des caract�res alphanum�riques ou des tirets!";
AD_FUN.MSG40 = "Le nom du p�riph�rique ou du serveur doit commencer par une lettre!";
AD_FUN.MSG41 = "Le nom du routeur ne peut pas �tre vide.";
AD_FUN.MSG42 = "Le nom du routeur ne peut contenir que des caract�res alphanum�riques et des tirets.";
AD_FUN.MSG43 = "Le nom du routeur doit commencer par une lettre.";
AD_FUN.MSG44 = "Le nom complet de l'utilisateur et la description ne peuvent contenir que les caract�res suivants�: caract�res alphanum�riques, espaces, tirets ou traits de soulignement.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Propri�t�s du groupe";
GA_FUN.OU = "Autres utilisateurs";
GA_FUN.UIG = "Utilisateurs dans le groupe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "Serveur multim�dia�UPnP";
MS_FUN.svrname = "Nom du serveur multim�dia";
MS_FUN.Setup = "Configuration";
MS_FUN.DB = "Base de donn�es";
MS_FUN.ServerName = "Nom du serveur�:";
MS_FUN.FR= "Dossier";
MS_FUN.SCAN = "Analyser";
MS_FUN.LASTSCAN = "Derni�re analyse";
MS_FUN.AUTOSCAN = "Analyse automatique toutes les";
MS_FUN.HOUR="Heures";
MS_FUN.MSG1 = "Aucun partage d'analyse n'est actuellement d�fini.";
MS_FUN.MSG2 = "Le nombre de partages d'analyse d�passe la limite! Supprimez-en un d'abord.";
MS_FUN.MSG3 = "L'analyse de toutes les partitions peut prendre beaucoup de temps. Voulez-vous vraiment continuer?";
MS_FUN.MSG4 = "Analyse du disque, veuillez patienter...";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Liste des partitions";
SP_FUN.ST = "S�lectionner";
SP_FUN.MSG1 = "Dossier partag� ajout�.";
SP_FUN.MSG2 = "Dossier partag�FTP ajout�.";
SP_FUN.MSG3 = "Ce chemin existe d�j� dans la liste d'analyse! Il ne peut �tre ajout� de nouveau.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "Serveur FTP";
FS_FUN.svrname = "Nom du serveur FTP";
FS_FUN.Share = "Partage";
FS_FUN.EDIT = "Modifier";
FS_FUN.MSG1 = "Aucun acc�s�FTP n'est actuellement d�fini.";
FS_FUN.ACCESS = "Acc�s";
FS_FUN.PO = "Port FTP�:";
FS_FUN.FTP_CHARACTERSET = "Encodage:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chinois simplifi�(GB18030)"; 
FS_FUN.BIG5="Chinois traditionnel(Big5)";
FS_FUN.CP1258="Vietnamien(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Cette racine ne permet pas de cr�er des dossiers!";
FS_FUN.ALERT2 = "Entrez un nom de dossier valide!";
FS_FUN.ALERT3 = "Entrez un nom de partage valide!";
FS_FUN.ALERT4 = "Ce nom d'affichage existe d�j� dans la liste partag�e!";
FS_FUN.ALERT5 = "Entrez un emplacement de partage valide!";
FS_FUN.FTPFOLDER = "Dossier�FTP";
FS_FUN.DISPNAME = "Nom d'affichage";
FS_FUN.UNIQUE = "Doit �tre unique.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Emplacement";
FS_FUN.NEWFOLDER = "Nouveau dossier";
FS_FUN.CURRENTFOLD = "Dossier actuel�:";
FS_FUN.ACCESS = "Acc�s";
FS_FUN.AVAILGROUP = "Groupes disponibles";
FS_FUN.GROUPACCESS  = "Groupes avec acc�s";
FS_FUN.INTERNET = "Acc�s Internet";
FS_FUN.SUMMARY = "Sommaire�FTP";
FS_FUN.ALERT6 = "Le port�FTP doit �tre indiqu�! ";
FS_FUN.ALERT7 = "Vous devez s�lectionner un dossier partag� FTP! ";
FS_FUN.UNIQUE = " (il doit �tre unique). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Revendiquer le disque";
CD_FUN.DISK = "Disque";
CD_FUN.MAM = "Marque et mod�le";
CD_FUN.PS = "Capacit�";
CD_FUN.NPN = "Nom de la nouvelle partition�:";
CD_FUN.MSG1 = "AVERTISSEMENT! La revendication du disque d�truira tout le contenu du disque.\n Voulez-vous continuer?";
CD_FUN.MSG2 = "AVERTISSEMENT�: le nom de la partition doit �tre en majuscules\n\n Le nom du disque ��";
CD_FUN.MSG3 = "�� sera converti en majuscules. Voulez-vous continuer?";
CD_FUN.MSG4 = "Le nom de partition ne peut contenir que des caract�res alphanum�riques, des tirets ou des traits de soulignement";
CD_FUN.MSG5 = "Le nom du nouveau disque ne peut �tre vide";
CD_FUN.MSG6 = "AVERTISSEMENT�: Les noms de disque�FAT32 ne peuvent comporter plus de 11�caract�res\n\n Le nom du disque ��";
CD_FUN.MSG7 = "�� sera ramen� � 11�caract�res. Voulez-vous continuer?";
CD_FUN.DISK_MSG = " n'existe pas.\n";
CD_FUN.NODISKS = "Aucun disque d�tect�";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Le champ Nom d'utilisateur ne peut contenir que des caract�res alphanum�riques, des tirets ou des traits de soulignement";
GP_FUN.MSG2 = "Le nombre de groupes d�passe la limite! Supprimez-en un d'abord.";
GP_FUN.MSG3 = "Le groupe existe d�j�!";
GP_FUN.MSG4 = "Le nom de groupe ne peut �tre vide!";
GP_FUN.MSG5 = "Le nom de groupe ne peut contenir que des caract�res alphanum�riques, des tirets ou des traits de soulignement";
GP_FUN.GA = "Compte de groupe";
GP_FUN.GN = "Nom du groupe";
GP_FUN.DES = "Description";
GP_FUN.ACCESS = "Acc�s";
GP_FUN.RNW = "lecture et �criture";
GP_FUN.RO = "lecture seule";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Propri�t�s du partage";
ShareP_FUN.SF = "Dossier de partage";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Propri�t�s de l'utilisateur";
UP_FUN.FName = "Nom";
UP_FUN.PWD = "Mot de passe";
UP_FUN.Reconfirm = "Valider le nouveau mot de passe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Sauvegarde de donn�es";
DB_FUN.SELJOB = "S�lectionner un num�ro de t�che";
DB_FUN.JOBNAME = "Nom de la t�che";
DB_FUN.BType ="Type de sauvegarde";
DB_FUN.Direction = "Sens";
DB_FUN.WRTSL54GS = "Ce WRTSL54GS";
DB_FUN.RD = "P�riph�rique distant";
DB_FUN.DAYS = "Jours";
DB_FUN.TIMES = "Heures";
DB_FUN.LOGIN = "Nom d'utilisateur";
DB_FUN.sunday = "&nbsp;Dim";
DB_FUN.Mon = "&nbsp;Lun"; 
DB_FUN.Tue = "&nbsp;Mar"; 
DB_FUN.Wed = "&nbsp;Mer";
DB_FUN.Thu = "&nbsp;Jeu";
DB_FUN.Fri = "&nbsp;Ven";
DB_FUN.Sat = "&nbsp;Sam";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Liste des dossiers";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Effacement rapide";
CMD.FullErase = "Effacement complet";
CMD.EraseDisk = "Formater le disque";
CMD.Refresh = "Actualiser";
CMD.Claim = "Revendiquer";
CMD.SAVESET = "Enregistrer les param�tres";
CMD.SafeRemove = "Retirer le disque en toute s�curit�";
CMD.CreateShare = "Cr�er un partage";
CMD.ModifyShare = "Modifier le partage";
CMD.SELPart = "S�lectionner la partition";
CMD.Modify = "Modifier";
CMD.Delete = "Supprimer";
CMD.RO = ">> Lecture seule";
CMD.RW = ">> Lecture/�criture";
CMD.RM = "<< Supprimer";
CMD.CANCELCHANGE = "Annuler les changements";
CMD.CT = "Continuer";
CMD.CLOSE = "Fermer";
CMD.CreateNewUser = "Cr�er un utilisateur";
CMD.CreateNewGroup = "Cr�er un groupe";
CMD.CreateNewShare = "Cr�er un partage";
CMD.JG = ">> Joindre au groupe ";
CMD.SAP = "Analyser tout ";
CMD.SPS = "Sp�cifier le dossier � analyser";
CMD.UOL = " Remonter d'un niveau ";
CMD.SP = "S�lectionner la partition";
CMD.FSA = "Sp�cifier le dossier � acc�der";
CMD.Claim = "Revendiquer";
CMD.CL = "Effacer";
CMD.CANCEL = "Annuler";
CMD.CGroup = "Cr�er un groupe";
CMD.CUser = "Cr�er un utilisateur";
CMD.MUser = "Modifier l'utilisateur";
CMD.NOPWD = "AUCUN MOT DE PASSE";
CMD.DTE = "Supprimer cette entr�e";
CMD.ALERT1 = "Analyse du disque, patientez... ";
CMD.CREATE = "Cr�er";
CMD.UPFOLDER = "Retour au dossier sup�rieur";
CMD.ALLFOLDER ="Tous les dossiers";
CMD.FORMAT = "Formater";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Activer";
OPT.item_Disable = "D�sactiver";
OPT.item_ALLP = "Toutes les partitions";
OPT.item_SF = "Sp�cifier le dossier";
OPT.item_Everyday = "Chaque jour";
OPT.item_opt1 = "De ce WRTSL54GS vers un autre appareil";
OPT.item_opt2 = "D'un autre appareil vers ce WRTSL54GS"; 
OPT.item_opt3 = "Connexion requise pour l'acc�s";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Plus...";
HELPMSG.DISK1 = "Affiche les d�tails du disque actuellement connect� au routeur.";
HELPMSG.DISK2 = "Pour effacer le contenu d'un disque, cochez la case � c�t� de son nom.";
HELPMSG.SHARE1 = "Affiche les d�tails des partages que vous avez cr��s.";
HELPMSG.SHARE2 = "Pour ajouter un nouveau partage, cliquez sur le bouton Cr�er un partage.";
HELPMSG.AD1 = "Le nom de ce routeur.";
HELPMSG.AD2 = "Le nom des ordinateurs de votre r�seau.";
HELPMSG.AD3 = "Les utilisateurs sont �num�r�s dans la table.";
HELPMSG.AD4 = "Pour ajouter un nouvel utilisateur, cliquez sur le bouton Cr�er un utilisateur.";
HELPMSG.AD5 = "Les groupes sont �num�r�s dans la table.";
HELPMSG.AD6 = "Pour ajouter un nouveau groupe, cliquez sur le bouton Cr�er un groupe.";
HELPMSG.AD7 = "Entrez le nom du groupe (maximum de 12�caract�res)";
HELPMSG.MS1 = "Affiche le nom que l'adaptateur multim�dia utilisera pour identifier le serveur.";
HELPMSG.MS2 = "Cliquez sur ce bouton pour analyser toutes les partitions du disque�USB.";
HELPMSG.MS3 = "Cliquez sur ce bouton pour s�lectionner le dossier ou la partition sp�cifique � analyser.";
HELPMSG.CD1 = "Pour cr�er une partition sur le disque vierge qui sera format�e avec le syst�me de fichiers�FAT32.";
HELPMSG.ShareP1 = "Entrez le nom du partage.";
HELPMSG.ShareP2 = "Il s'agit du dossier qui fera partie de ce partage. Cliquez sur S�lectionner la partition pour choisir une valeur dans la liste de dossiers disponibles.";
HELPMSG.UP1 = "Entrez le nom d'utilisateur. Le nom d'utilisateur peut compter jusqu'� 20�caract�res.";
HELPMSG.UP2 = "Entrez le mot de passe. Le mot de passe doit compter de 4��8�caract�res.";
HELPMSG.UP3 = "Entrez une autre fois le mot de passe pour le confirmer.";
HELPMSG.UP4 = "Groupe";
HELPMSG.UP5 = "S�lectionnez le groupe dans lequel vous souhaitez placer cet utilisateur.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disque";
FUNST.Share="Partage";
FUNST.MS="Serveur multim�dia";
FUNST.FTP = "Serveur FTP";

var NAS = new Object();
NAS.MSG1 = "Les param�tres de compte ont �t� appliqu�s. ";
NAS.MSG2 = "Le compte�%s existe d�j�! ";
NAS.MSG3 = "L'application des param�tres a �chou�! ";
NAS.MSG4 = "L'analyse du lecteur partag� a �t� annul�. ";
NAS.MSG5 = "�chec de mise � jour de base de donn�es multim�dia! ";
NAS.MSG6 = "�chec de mise � jour de base de donn�es multim�dia! Lecteur partag� introuvable. ";
NAS.MSG7 = "�chec de mise � jour de base de donn�es multim�dia! ";
NAS.MSG8 = "La base de donn�es a �t� mise � jour. ";
NAS.MSG9 = "�chec de mise � jour de base de donn�es multim�dia! Aucune partition d�tect�e! ";
NAS.MSG10 = "La base de donn�es a �t� mises � jour. ";
NAS.MSG11 = "L'analyse du lecteur partag� a �t� ajout�e. ";
NAS.MSG12 = "Le nom de lecteur�%s est r�serv�. Choisissez un autre nom. ";
NAS.MSG13 = "Le lecteur partag�%s a �t� modifi�. ";
NAS.MSG14 = "Le lecteur partag�%s a �t� cr��. ";
NAS.MSG15 = "Erreur d'acc�s�: le disque�%s est introuvable. ";
NAS.MSG16 = "Erreur d'acc�s�: vous n'avez pas indiqu� le nouveau nom du disque. ";
NAS.MSG17 = "Le nom de disque�%s n'est pas valide. ";
NAS.MSG18 = "Le disque a �t� obtenu. ";
NAS.MSG19 = "Erreur�: la demande d'acc�s au disque�%s a �chou�. ";
NAS.MSG20 = "Erreur �: le lecteur partag�sp�cial %s ne peut �tre supprim� car il est utilis� par le contr�leur de domaine principal. Il ne peut �tre supprim� manuellement mais le sera automatiquement si le contr�leur de domaine principal est retir�. ";
NAS.MSG21 = "Le lecteur partag�%s a �t� supprim�. ";
NAS.MSG23 = "Le lecteur partag�%s a �t� modifi�. ";
NAS.MSG24 = "Le lecteur partag�%s a �t� cr��. ";
NAS.MSG25 = "Le nom de lecteur�%s est r�serv�. Choisissez un autre nom. ";
NAS.MSG30 = "Erreur�: aucun disque � effacer n'a �t� sp�cifi�. ";
NAS.MSG31 = "Erreur�: m�moire insuffisante pour effacer les disques. ";
NAS.MSG32 = "Erreur�: impossible d'effacer le disque�%s. ";
NAS.MSG33 = "Erreur�: m�moire insuffisante pour effacer les disques. ";
NAS.MSG34 = "Tous les disques sp�cifi�s ont �t� effac�s. ";
NAS.MSG35 = "Op�ration annul�e car aucun disque � effacer n'a �t� sp�cifi�. ";
NAS.MSG36 = "Erreur�: m�moire insuffisante pour effacer les disques. ";
NAS.MSG37 = "Erreur�: aucun disque � effacer n'a �t� sp�cifi�. ";
NAS.MSG38 = "Tous les disques sp�cifi�s ont �a� effac�s. ";
NAS.MSG39 = "Op�ration annul�e car aucun disque � effacer n'a �t� sp�cifi�. ";
NAS.MSG40 = "Impossible de d�connecter le disque�%s de fa�on s�re. ";
NAS.MSG41 = "Le disque a �t� d�connect�. ";
NAS.MSG42 = "Les propri�t�s d'acc�s au lecteur partag�%s ont �t� chang�es. ";
NAS.MSG43 = "L'application des param�tres de compte a �chou�! ";
NAS.MSG44 = "Les param�tres de compte ont �t� appliqu�s. ";
NAS.MSG45 = "Valeurs entr�es non valides. Recommencez. ";
NAS.MSG46 = "Les param�tres sont valides. ";
NAS.MSG47 = "Impossible de�%s domaine�%s (erreur�%s) et d'adh�rer au domaine�%s (erreur�%s); appartenance au groupe de travail�%s r�tablie. ";
NAS.MSG48 = "Impossible de�%s domaine�%s (erreur�%s); appartenance au domaine�%s r�tablie. ";
NAS.MSG49 = "join_workgroup_or_domain_error Impossible de�%s domaine�%s (erreur�%s); appartenance au domaine�%s r�tablie. ";
NAS.MSG50 = "N'est pas membre du domaine�%s. ";
NAS.MSG51 = "Est maintenant membre d'un groupe de travail %s. "
NAS.MSG52 = "L'application des param�tres a �chou�! ";
NAS.MSG53 = "Le lecteur partag�FTP a �t� supprim�. ";
NAS.MSG54 = "Le disque est occup�.";










