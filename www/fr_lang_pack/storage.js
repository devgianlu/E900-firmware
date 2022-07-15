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
DISK_FUN.TS = "Capacit� ";
DISK_FUN.FreeS = "Espace disque libre";
DISK_FUN.Shares = "Partages";
DISK_FUN.SharesFd = "Dossier Partages";
DISK_FUN.CreateShare = "Cr�er un partage";
DISK_FUN.Remain = "Non attribu� ";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "D�tection";
DISK_FUN.MSG1 = "Les disques s�lectionn�s contiennent des informations sur le serveur d'impression.\n Vous ne pouvez pas effacer les disques";
DISK_FUN.MSG2 = "Vous ne pouvez pas effacer les disques sans effacer les autres disques appartenant � la m�me plage de disques";
DISK_FUN.MSG3 = "Aucun disque n'est s�lectionn� pour l'effacement";
DISK_FUN.MSG4 = "Effacement du disque, veuillez patienter !";
DISK_FUN.MSG5 = "Aucun disque disponible";
DISK_FUN.MSG6 = " Le groupe Admin ne peut pas �tre supprim�.";
DISK_FUN.MSG7 = " Le p�riph�rique USB reli� n'est pas pris en charge.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Aucun disque disponible.";
DISK_FUN.AP = "All_Partitions";
DISK_FUN.ENTERNAME = "Saisissez un nom de partition :";
DISK_FUN.WARNING = "Avertissement :";
DISK_FUN.FORMATWARN1 = "Le formatage du disque peut prendre quelques minutes. Ne coupez pas l'alimentation";
DISK_FUN.FORMATWARN2 = "et n'appuyez pas sur le bouton de r�initialisation.";
DISK_FUN.FIRMVER = "Version du micrologiciel";
DISK_FUN.BACKUP = "Sauvegarder";
DISK_FUN.WARNING1 = "AVERTISSEMENT ! L'effacement des disques m�nera � une perte irr�versible des donn�es. Voulez-vous continuer ? ";
DISK_FUN.FR = "Dossier";
DISK_FUN.ENTERINTOF= "Entrez dans le dossier";
DISK_FUN.SELECT = "S�lectionnez";
DISK_FUN.MPATH = " Cet emplacement n'existe pas.";
DISK_FUN.CPATH = "Cet emplacement de dossier partag� n'existe pas.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nom";
SHARE_FUN.ShareAccess = "Partager l'acc�s";
SHARE_FUN.Title = "Partager la gestion";
SHARE_FUN.NOTEXIST ="Inexistant !";
SHARE_FUN.MSG1 = "Aucun partage n'est d�fini pour le moment.";
SHARE_FUN.MSG2 = "Le nombre de partages d�passe la limite ! Commencez par en supprimer un.";
SHARE_FUN.Properties = "Modifier";
SHARE_FUN.FF = "Dossier FTP";
SHARE_FUN.MSF = "Dossier multim�dia";
SHARE_FUN.SF = "Dossier partag� ";
SHARE_FUN.DN = "Nom";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Emplacement";
SHARE_FUN.NF = "Nouveau dossier";
SHARE_FUN.CF = "Dossier actuel";
SHARE_FUN.AF="Acc�der au dossier";
SHARE_FUN.AS = "Acc�s";
SHARE_FUN.AG = "Groupes disponibles";
SHARE_FUN.GWA = "Groupes ayant acc�s";
SHARE_FUN.GN = "Nom du groupe";
SHARE_FUN.description = "Description";
SHARE_FUN.rw = "Lecture/�criture";
SHARE_FUN.ro = "Lecture seule";
SHARE_FUN.NAME ="Nom";
SHARE_FUN.FN = "Nom complet";
SHARE_FUN.PW = "Mot de passe";
SHARE_FUN.CP = "Confirmer le mot de passe";
SHARE_FUN.GM = "Membre du groupe";
SHARE_FUN.AD = "Compte d�sactiv� ";
SHARE_FUN.SUMMARY="R�capitulatif des dossiers partag�s";
SHARE_FUN.IP = "Adresse IP du disque partag� : ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Groupe ayant acc�s";
SA_FUN.OG = "Autre groupe";
SA_FUN.MSG1 = "Le groupe admin ne peut pas �tre supprim� !";
SA_FUN.MSG2 = "Ce nom de groupe existe d�j� !";
SA_FUN.FTP_Access ="Acc�s FTP";
SA_FUN.Entire_Partition ="Partager toute la partition";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "invit� ";
AD_FUN.MN = "&nbsp;Nom de la machine :";
AD_FUN.WN = "&nbsp;Nom du groupe de travail :";
AD_FUN.MD = "&nbsp;Description de la machine :";
AD_FUN.APS = "&nbsp;Partage de toutes les partitions :";
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
AD_FUN.readwrite="acc�s au disque en lecture et �criture";
AD_FUN.svrname="Nom du serveur";
AD_FUN.devname="Nom du p�riph�rique";
AD_FUN.SLIP="Adresse IP LAN du serveur";
AD_FUN.SWIP="Adresse IP Internet du serveur";
AD_FUN.MSG1 = "Aucun utilisateur n'est d�fini pour le moment.";
AD_FUN.MSG2 = "L'utilisateur Admin ne peut pas �tre supprim� !";
AD_FUN.MSG3 = "Souhaitez-vous vraiment supprimer cet utilisateur ?";
AD_FUN.MSG4 = "Souhaitez-vous vraiment supprimer ce groupe ?";
AD_FUN.MSG5 = "Le nombre maximal d'utilisateurs a �t� atteint. Pour ajouter un nouvel utilisateur, commencez par en supprimer un.";
AD_FUN.MSG6 = " Le nombre maximal de groupes a �t� atteint. Pour ajouter un nouveau groupe, commencez par en supprimer un.";
AD_FUN.MSG7 = "Le nom du groupe de travail ne peut pas rester vierge !";
AD_FUN.MSG8 = "Le nom du groupe de travail ne peut pas �tre sup�rieur � 15 caract�res.";
AD_FUN.MSG9 = "Le nom du groupe de travail peut uniquement contenir des caract�res alphanum�riques / des tirets";
AD_FUN.MSG10 = "Le nom du groupe de travail doit commencer par une lettre";
AD_FUN.MSG11 = "Vous avez choisi de modifier le nom de la machine. Le mappage r�seau existant doit �tre re-mapp�. \n Voulez-vous continuer ?";
AD_FUN.MSG12 = "Le nom de la machine ne peut pas rester vierge !";
AD_FUN.MSG13 = "Le nom de la machine ne peut pas �tre sup�rieur � 15 caract�res.";
AD_FUN.MSG14 = "Le nom de la machine peut uniquement contenir des caract�res alphanum�riques / des tirets";
AD_FUN.MSG15 = "Le nom de la machine doit commencer par une lettre"; 
AD_FUN.MSG16 = "Ce nom d'utilisateur existe d�j� !";
AD_FUN.MSG17 = "Le nom d'utilisateur doit contenir uniquement des caract�res alphanum�riques, des tirets ou des traits de soulignement.";
AD_FUN.MSG18 = "Le nombre de groupes d�passe la limite ! Commencez par en supprimer un.";
AD_FUN.MSG19 = "Confirmation du mot de passe incorrecte.";
AD_FUN.MSG20 = "Mot de passe incorrect ! (Il doit comprendre entre 4 et 8 caract�res)";
AD_FUN.MSG21 = "L'utilisateur Admin ne peut pas �tre renomm� !";
AD_FUN.MSG22 = "L'utilisateur Invit� ne peut pas �tre renomm� !";
AD_FUN.MSG23 = "Le nom d'utilisateur ne peut pas rester vierge !";
AD_FUN.MSG24 = "Vous devez saisir un nom de compte !";
AD_FUN.MSG25 = "Le nom de compte existe d�j� !";
AD_FUN.MSG26 = "Vous devez saisir un mot de passe !";
AD_FUN.MSG27 = "Le nombre d'utilisateurs d�passe la limite ! Commencez par en supprimer un.";
AD_FUN.MSG28 = "Compte utilisateur";
AD_FUN.MSG29 = "L'utilisateur Admin ne peut pas �tre supprim� ! ";
AD_FUN.MSG30 = "L'utilisateur";
AD_FUN.MSG31 = " ne peut pas �tre supprim� ! ";
AD_FUN.MSG32 = "Les espaces ne sont pas autoris�s dans les mots de passe.";
AD_FUN.MSG33 = " Le nom peut uniquement contenir des caract�res alphanum�riques / des tirets. ";
AD_FUN.MSG34 = "Souhaitez-vous supprimer l'utilisateur \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Souhaitez-vous supprimer le groupe \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Le champ Nom du p�riph�rique/serveur ne peut �tre vierge�!";
AD_FUN.MSG39 = "Le champ Nom du p�riph�rique/serveur doit contenir uniquement des caract�res alphanum�riques/des tirets�!";
AD_FUN.MSG40 = "Le nom du p�riph�rique/serveur doit commencer par une lettre�!";
AD_FUN.MSG41 = "Le nom du routeur ne peut pas �tre vierge.";
AD_FUN.MSG42 = "Le nom du routeur doit contenir uniquement des caract�res alphanum�riques et des tirets.";
AD_FUN.MSG43 = "Le nom du routeur doit commencer par une lettre.";
AD_FUN.MSG44 = "Le nom complet et la description de l'utilisateur doivent contenir uniquement des caract�res alphanum�riques, des espaces, des tirets ou des traits de soulignement.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Propri�t�s du groupe";
GA_FUN.OU = "Autres utilisateurs";
GA_FUN.UIG = "Utilisateurs du groupe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "Media Server UPnP";
MS_FUN.svrname = "Nom du serveur multim�dia";
MS_FUN.Setup = "Configuration";
MS_FUN.DB = "Base de donn�es";
MS_FUN.ServerName = "Nom du serveur :";
MS_FUN.FR= "Dossier";
MS_FUN.SCAN = "Analyser";
MS_FUN.LASTSCAN = "Heure de la derni�re analyse";
MS_FUN.AUTOSCAN = "Analyser automatiquement toutes les";
MS_FUN.HOUR="Heure(s)";
MS_FUN.MSG1 = "Aucun partage d'analyse n'est d�fini pour le moment.";
MS_FUN.MSG2 = "Le nombre de partages d'analyse d�passe la limite ! Commencez par en supprimer un.";
MS_FUN.MSG3 = "L'analyse de l'ensemble des partitions peut �tre longue. Souhaitez-vous vraiment continuer ?";
MS_FUN.MSG4 = "Analyse du disque, veuillez patienter !";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Liste des partitions";
SP_FUN.ST = "S�lectionner";
SP_FUN.MSG1 = "Le dossier de partage a �t� ajout� avec succ�s.";
SP_FUN.MSG2 = "Le dossier de partage FTP a �t� ajout� avec succ�s.";
SP_FUN.MSG3 = "Ce chemin existe d�j� dans la liste des analyses ! Il ne peut pas �tre � nouveau ajout�.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "Serveur FTP";
FS_FUN.svrname = "Nom du serveur FTP";
FS_FUN.Share = "Partager";
FS_FUN.EDIT = "Modifier";
FS_FUN.MSG1 = "Aucun acc�s FTP n'est d�fini pour le moment.";
FS_FUN.ACCESS = "Acc�s";
FS_FUN.PO = "Port FTP :";
FS_FUN.FTP_CHARACTERSET = "Encodage:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chinois simplifi�(GB18030)"; 
FS_FUN.BIG5="Chinois traditionnel(Big5)";
FS_FUN.CP1258="Vietnamien(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Ce chemin n'est pas autoris� pour la cr�ation d'un nouveau dossier !";
FS_FUN.ALERT2 = "Veuillez saisir un nom de dossier valide.";
FS_FUN.ALERT3 = "Veuillez saisir un nom de partage valide.";
FS_FUN.ALERT4 = " Le nom figure d�j� dans la liste de partage!";
FS_FUN.ALERT5 = "Veuillez saisir un emplacement de partage valide.";
FS_FUN.FTPFOLDER = "Dossier FTP";
FS_FUN.DISPNAME = "Nom";
FS_FUN.UNIQUE = "doit �tre unique.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Emplacement";
FS_FUN.NEWFOLDER = "Nouveau dossier";
FS_FUN.CURRENTFOLD = "Dossier actuel :";
FS_FUN.ACCESS = "Acc�s";
FS_FUN.AVAILGROUP = "Groupes disponibles";
FS_FUN.GROUPACCESS  = "Groupes ayant acc�s";
FS_FUN.INTERNET = "Acc�s Internet";
FS_FUN.SUMMARY = "R�capitulatif FTP";
FS_FUN.ALERT6 = "Le port FTP ne peut pas �tre vide ! ";
FS_FUN.ALERT7 = "S�lectionnez le dossier de partage FTP ! ";
FS_FUN.UNIQUE = " (Doit �tre unique.) ";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Claim Disk";
CD_FUN.DISK = "Disque";
CD_FUN.MAM =  "Marque et mod�le";
CD_FUN.PS = "Taille physique";
CD_FUN.NPN = "Nouveau nom de la partition :";
CD_FUN.MSG1 = "AVERTISSEMENT ! Claim Disk va effacer tout le contenu de ce disque.\nVoulez-vous continuer ?";
CD_FUN.MSG2 = "AVERTISSEMENT ! Le nom de la partition doit �tre �crit en majuscules\n\n Le nom de votre disque '";
CD_FUN.MSG3 = "' sera converti en majuscules. Voulez-vous continuer ?";
CD_FUN.MSG4 = "Le nom de la partition peut uniquement contenir des caract�res alphanum�riques / des tirets / des traits de soulignement";
CD_FUN.MSG5 = "Le nouveau nom du disque ne peut pas rester vierge";
CD_FUN.MSG6 = "AVERTISSEMENT : Le nom du disque FAT32 ne peut pas �tre sup�rieur � 11 caract�res\n\n Le nom de votre disque '";
CD_FUN.MSG7 = "' sera tronqu� � 11 caract�res. Voulez-vous continuer ?";
CD_FUN.DISK_MSG = " n'existe pas.\n";
CD_FUN.NODISKS = "Aucun disque connect�";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Le nom d'utilisateur peut uniquement contenir des caract�res alphanum�riques / des tirets / des traits de soulignement";
GP_FUN.MSG2 = "Le nombre de groupes d�passe la limite ! Commencez par en supprimer un.";
GP_FUN.MSG3 = "Ce groupe existe d�j� !";
GP_FUN.MSG4 = "Le nom de groupe ne peut pas rester vierge !";
GP_FUN.MSG5 = "Le nom de groupe peut uniquement contenir des caract�res alphanum�riques / des tirets / des traits de soulignement";
GP_FUN.GA = "Compte du groupe";
GP_FUN.GN = "Nom du groupe";
GP_FUN.DES = "Description";
GP_FUN.ACCESS = "Acc�s";
GP_FUN.RNW = "Lecture/�criture";
GP_FUN.RO = "Lecture seule";
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
UP_FUN.Title = "Propri�t�s des utilisateurs";
UP_FUN.FName = "Nom";
UP_FUN.PWD = "Mot de passe";
UP_FUN.Reconfirm = "Confirmation du mot de passe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Sauvegarde des donn�es";
DB_FUN.SELJOB = "S�lectionner le num�ro de la t�che";
DB_FUN.JOBNAME = "Nom de la t�che";
DB_FUN.BType ="Type de sauvegarde";
DB_FUN.Direction = "Direction";
DB_FUN.WRTSL54GS = "Ce WRTSL54GS";
DB_FUN.RD = "P�riph�rique distant";
DB_FUN.DAYS = "Jours";
DB_FUN.TIMES = "Heures";
DB_FUN.LOGIN = "Nom de connexion";
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
CMD.Claim = "Demander";
CMD.SAVESET = "Enregistrer les param�tres";
CMD.SafeRemove = "Retirer le disque en toute s�curit� ";
CMD.CreateShare = "Cr�er un partage";
CMD.ModifyShare = "Modifier le partage";
CMD.SELPart = "S�lectionner la partition";
CMD.Modify = "Modifier";
CMD.Delete = "Supprimer";
CMD.RO = ">> Lecture seule";
CMD.RW = ">> Lecture/�criture";
CMD.RM = "<< Supprimer";
CMD.CANCELCHANGE = "Annuler les modifications";
CMD.CT = "Continuer";
CMD.CLOSE = "Fermer";
CMD.CreateNewUser = "Cr�er un nouvel utilisateur";
CMD.CreateNewGroup = "Cr�er un nouveau groupe";
CMD.CreateNewShare = "Cr�er un nouveau partage";
CMD.JG = ">> Rejoindre un groupe ";
CMD.SAP = "Tout analyser ";
CMD.SPS = "Sp�cifier le dossier � analyser";
CMD.UOL = " Vers le niveau sup�rieur ";
CMD.SP = "S�lectionner la partition";
CMD.FSA = "Sp�cifier le dossier auquel acc�der";
CMD.Claim = "Demander";
CMD.CL = "Effacer";
CMD.CANCEL = "Annuler";
CMD.CGroup = "Cr�er un groupe";
CMD.CUser = "Cr�er un utilisateur";
CMD.MUser = "Modifier un utilisateur";
CMD.NOPWD = "AUCUN MOT DE PASSE";
CMD.DTE = "Supprimer cette entr�e";
CMD.ALERT1 = "Renouvellement du disque, veuillez patienter ! ";
CMD.CREATE = "Cr�er";
CMD.UPFOLDER = "Revenir au dossier sup�rieur";
CMD.ALLFOLDER = "Tous les dossiers";
CMD.FORMAT = "Format";

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
OPT.item_Everyday = "Tous les jours";
OPT.item_opt1 = "De ce WRTSL54GS � un autre p�riph�rique";
OPT.item_opt2 = "D'un autre p�riph�rique � ce WRTSL54GS"; 
OPT.item_opt3 = "L'acc�s n�cessite une connexion";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "En savoir plus";
HELPMSG.DISK1 = "Afficher les d�tails du disque actuellement connect� au routeur.";
HELPMSG.DISK2 = "Pour effacer un disque, activez la case � cocher en regard du nom du disque.";
HELPMSG.SHARE1 = "Affiche des d�tails sur les partages que vous avez cr��s.";
HELPMSG.SHARE2 = "Cliquez sur le bouton Cr�er un nouveau partage pour cr�er un nouveau partage.";
HELPMSG.AD1 = "Le nom de ce routeur.";
HELPMSG.AD2 = "Le nom de vos ordinateurs en r�seau.";
HELPMSG.AD3 = "Les utilisateurs sont r�pertori�s dans le tableau.";
HELPMSG.AD4 = "Pour cr�er un nouvel utilisateur, cliquez sur le bouton Cr�er un nouvel utilisateur.";
HELPMSG.AD5 = "Les groupes sont r�pertori�s dans le tableau.";
HELPMSG.AD6 = "Pour cr�er un nouveau groupe, cliquez sur le bouton Cr�er un nouveau groupe.";
HELPMSG.AD7 = "Saisissez le nom du groupe. Il peut contenir jusqu'� 12 caract�res";
HELPMSG.MS1 = "Affiche le nom que l'adaptateur de support utilisera pour identifier le serveur.";
HELPMSG.MS2 = "Cliquez sur ce bouton pour analyser toutes les partitions du disque USB.";
HELPMSG.MS3 = "Cliquez sur ce bouton pour s�lectionner un dossier ou une partition sp�cifique que vous souhaiteriez analyser.";
HELPMSG.CD1 = "Permet de cr�er une partition sur le disque vierge, qui sera format�e avec le syst�me de fichiers FAT32.";
HELPMSG.ShareP1 = "Saisissez le nom du partage.";
HELPMSG.ShareP2 = "Il s'agit du dossier que contiendra ce partage. Cliquez sur S�lectionner la partition pour faire votre choix parmi une liste de dossiers disponibles.";
HELPMSG.UP1 = "Saisissez le nom d'utilisateur. Le nom d'utilisateur peut contenir jusqu'� 20 caract�res.";
HELPMSG.UP2 = "Saisissez le mot de passe. Le mot de passe doit comprendre entre 4 et 8 caract�res.";
HELPMSG.UP3 = "Saisissez � nouveau le mot de passe afin de le confirmer.";
HELPMSG.UP4 = "Groupe";
HELPMSG.UP5 = "S�lectionnez le groupe dans lequel vous souhaitez placer cet utilisateur.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disque";
FUNST.Share="Partager";
FUNST.MS="Serveur multim�dia";
FUNST.FTP = "Serveur FTP";

var NAS = new Object();
NAS.MSG1 = "Les param�tres de compte ont bien �t� appliqu�s. ";
NAS.MSG2 = "Le compte %s existe d�j� ! ";
NAS.MSG3 = "Echec d'application des param�tres ! ";
NAS.MSG4 = "Le partage d'analyse a bien �t� supprim�. ";
NAS.MSG5 = "Echec de mise � jour de la base de donn�es multim�dia ! ";
NAS.MSG6 = "Echec de mise � jour de la base de donn�es multim�dia ! Le partage n'existe pas. ";
NAS.MSG7 = "Echec de mise � jour de la base de donn�es multim�dia ! ";
NAS.MSG8 = "La base de donn�es a bien �t� mise � jour. ";
NAS.MSG9 = "Echec de mise � jour de la base de donn�es multim�dia. Aucune partition existante ! ";
NAS.MSG10 = "La base de donn�es a bien �t� mise � jour. ";
NAS.MSG11 = "Le partage d'analyse a bien �t� ajout�. ";
NAS.MSG12 = "Le nom de partage %s est r�serv�. Choisissez un autre nom. ";
NAS.MSG13 = "Le partage %s a bien �t� modifi�. ";
NAS.MSG14 = "Le partage %s a bien �t� cr��. ";
NAS.MSG15 = "Une erreur s'est produite lors de la demande du disque %s : le disque � %s � n'existe pas. ";
NAS.MSG16 = "Une erreur s'est produite lors de la demande de disque : aucun nouveau nom sp�cifi� pour le disque. ";
NAS.MSG17 = "Le nom du disque sp�cifi�, � %s �, n'est pas valide. ";
NAS.MSG18 = "Le disque a bien �t� demand�. ";
NAS.MSG19 = "Une erreur s'est produite lors de la demande du disque %s : la tentative de demande a �chou�. ";
NAS.MSG20 = "Une erreur s'est produite lors de la suppression du partage %s : %s est un partage sp�cial r�serv� � une utilisation par la fonction Primary Domain Controller. Il ne peut pas �tre supprim� s�par�ment, mais si le Primary Domain Controller est d�sactiv�, il sera automatiquement supprim�. ";
NAS.MSG21 = "Le partage %s a bien �t� supprim�";
NAS.MSG23 = "Le partage %s a bien �t� modifi�. ";
NAS.MSG24 = "Le partage %s a bien �t� cr��. ";
NAS.MSG25 = "Le nom de partage %s est r�serv�. Choisissez un autre nom. ";
NAS.MSG30 = "Une erreur s'est produite lors de l'effacement des disques : aucun disque sp�cifi� pour l'effacement. ";
NAS.MSG31 = "Une erreur s'est produite lors de l'effacement des disques : m�moire insuffisante lors de la tentative d'effacement des disques. ";
NAS.MSG32 = "Une erreur s'est produite lors de l'effacement des disques : impossible d'effacer le disque � %s �. ";
NAS.MSG33 = "Une erreur s'est produite lors de l'effacement des disques : m�moire insuffisante. ";
NAS.MSG34 = "Tous les disques sp�cifi�s ont �t� effac�s. ";
NAS.MSG35 = "Aucun disque n'a �t� sp�cifi� pour l'effacement, aucune action n'a �t� effectu�e. ";
NAS.MSG36 = "Une erreur s'est produite lors de l'effacement des disques : m�moire insuffisante lors de la tentative d'effacement des disques. ";
NAS.MSG37 = "Une erreur s'est produite lors de l'effacement des disques : aucun disque sp�cifi� pour l'effacement. ";
NAS.MSG38 = "Tous les disques sp�cifi�s ont �t� effac�s. ";
NAS.MSG39 = "Aucun disque n'a �t� sp�cifi� pour l'effacement, aucune action n'a �t� effectu�e. ";
NAS.MSG40 = "Impossible de d�connecter le disque � %s � en toute s�curit�. ";
NAS.MSG41 = "Le disque a bien �t� d�connect�. ";
NAS.MSG42 = "Les propri�t�s d'acc�s au partage %s ont bien �t� modifi�es. ";
NAS.MSG43 = "Echec d'application des param�tres de compte ! ";
NAS.MSG44 = "Les param�tres de compte ont bien �t� appliqu�s. ";
NAS.MSG45 = "Les valeurs indiqu�es sont incorrectes. Veuillez r�essayer. ";
NAS.MSG46 = "Les param�tres sont corrects. ";
NAS.MSG47 = "Impossible de %s le domaine %s (erreur %s) et de rejoindre le domaine %s (erreur %s), retour � l'appartenance au groupe de travail %s. ";
NAS.MSG48 = "Impossible de %s le domaine %s (erreur %s), retour � l'appartenance au domaine %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error Impossible de %s le domaine %s (erreur %s), retour � l'appartenance au domaine %s. ";
NAS.MSG50 = "Vous �tes d�sormais membre du domaine %s. ";
NAS.MSG51 = "Vous �tes d�sormais membre du groupe de travail . %s ";
NAS.MSG52 = "Echec d'application des param�tres ! ";
NAS.MSG53 = "Le partage FTP a bien �t� supprim�. ";
NAS.MSG54 = "Le disque est occup�.";









