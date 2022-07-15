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
DISK_FUN.Part1 = "Détails du disque";
DISK_FUN.Part2 = "Formater le disque";
DISK_FUN.Manufacture = "Disque";
DISK_FUN.Partition = "Partition";
DISK_FUN.FS = "Système de fichiers";
DISK_FUN.TS = "Capacité";
DISK_FUN.FreeS = "Espace libre";
DISK_FUN.Shares = "Partages";
DISK_FUN.SharesFd = "Dossier de partages";
DISK_FUN.CreateShare = "Créer un partage";
DISK_FUN.Remain = "Non alloué";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "Détection";
DISK_FUN.MSG1 = "Le ou les disques sélectionnés contiennent de l'information sur le serveur d'impression.\n Vous ne pouvez pas nettoyer ces disques";
DISK_FUN.MSG2 = "Vous ne pouvez pas nettoyer les disques sans nettoyer aussi les autres disques du même groupe";
DISK_FUN.MSG3 = "Aucun disque sélectionné pour le nettoyage";
DISK_FUN.MSG4 = "Effacement du disque, veuillez patienter...";
DISK_FUN.MSG5 = "Aucun disque disponible";
DISK_FUN.MSG6 = "Le groupe Admin ne peut pas être supprimé.";
DISK_FUN.MSG7 = "Le périphérique USB connecté n'est pas pris en charge.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Aucun disque n'est disponible.";
DISK_FUN.AP = "Toutes les partitions";
DISK_FUN.ENTERNAME = "Entrer le nom d'une partition :";
DISK_FUN.WARNING = "Avertissement :";
DISK_FUN.FORMATWARN1 = "Le formatage du disque peut durer quelques minutes; n'éteignez pas";
DISK_FUN.FORMATWARN2 = "l'appareil et n'appuyez pas sur le bouton Réinitialiser.";
DISK_FUN.FIRMVER = "Version du microcode";
DISK_FUN.BACKUP = "Sauvegarder";
DISK_FUN.WARNING1 = "AVERTISSEMENT! Le nettoyage des disques supprimera des données. Continuer? ";
DISK_FUN.FR = "Dossier";
DISK_FUN.ENTERINTOF= "Ouvrir le dossier. ";
DISK_FUN.MPATH = " Cet emplacement n'existe pas.";
DISK_FUN.CPATH = "L'emplacement de ce dossier partagé n'existe pas.";
DISK_FUN.SELECT = "Sélectionner"
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nom d'affichage";
SHARE_FUN.ShareAccess = "Accès au partage";
SHARE_FUN.Title = "Gestion d'un partage";
SHARE_FUN.NOTEXIST ="Inexistant(e)!";
SHARE_FUN.MSG1 = "Aucun partage n'est actuellement défini.";
SHARE_FUN.MSG2 = "Le nombre de partages dépasse la limite! Supprimez-en un d'abord.";
SHARE_FUN.Properties = "Modifier";
SHARE_FUN.FF = "Chargeur de microcode FTP";
SHARE_FUN.MSF = "Dossier multimédia";
SHARE_FUN.SF = "Dossier partagé";
SHARE_FUN.DN = "Nom d'affichage";
SHARE_FUN.patition = "Partition";
SHARE_FUN.location = "Emplacement";
SHARE_FUN.NF = "Nouveau dossier";
SHARE_FUN.CF = "Dossier actuel";
SHARE_FUN.AF="Dossier d'accès";
SHARE_FUN.AS = "Accès";
SHARE_FUN.AG = "Groupes disponibles";
SHARE_FUN.GWA = "Groupes avec accès";
SHARE_FUN.GN = "Nom du groupe";
SHARE_FUN.description = "Description";
SHARE_FUN.rw = "lecture et écriture";
SHARE_FUN.ro = "lecture seule";
SHARE_FUN.NAME ="Nom";
SHARE_FUN.FN = "Nom complet";
SHARE_FUN.PW = "Mot de passe";
SHARE_FUN.CP = "Confirmer le mot de passe";
SHARE_FUN.GM = "Membre du groupe";
SHARE_FUN.AD = "Compte désactivé";
SHARE_FUN.SUMMARY="Sommaire des dossiers partagés";
SHARE_FUN.IP = "Adresse IP du disque partagé : ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Groupe avec accès";
SA_FUN.OG = "Autre groupe";
SA_FUN.MSG1 = "Impossible de supprimer le groupe admin!";
SA_FUN.MSG2 = "Le nom de groupe existe déjà!";
SA_FUN.FTP_Access ="Accès FTP";
SA_FUN.Entire_Partition ="Partager toute la partition";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "invité";
AD_FUN.MN = "&nbsp;Nom de la machine :";
AD_FUN.WN = "&nbsp;Nom du groupe de travail :";
AD_FUN.MD = "&nbsp;Description de la machine :";
AD_FUN.APS = "&nbsp;Partage de toutes les partitions :";
AD_FUN.UserName = "Nom d'utilisateur";
AD_FUN.FULLNAME = "Nom complet";
AD_FUN.GroupName = "Nom du groupe";
AD_FUN.Basic = "Paramètres de base";
AD_FUN.UserM = "Gestion des utilisateurs";
AD_FUN.GroupM = "Gestion des groupes";
AD_FUN.AnymsAcess="Accès anonyme";
AD_FUN.AnymsFTP="FTP anonyme";
AD_FUN.AnymsDisk="Accès au disque anonyme";
AD_FUN.readonly="accès au disque en lecture seule";
AD_FUN.readwrite="accès au disque en lecture-écriture";
AD_FUN.svrname="Nom du serveur";
AD_FUN.devname="Nom du périphérique";
AD_FUN.SLIP="Adresse IP de réseau du serveur";
AD_FUN.SWIP="Adresse IP Internet du serveur";
AD_FUN.MSG1 = "Aucun utilisateur n'est actuellement défini.";
AD_FUN.MSG2 = "Impossible de supprimer l'utilisateur admin!";
AD_FUN.MSG3 = "Supprimer cet utilisateur?";
AD_FUN.MSG4 = "Supprimer ce groupe?";
AD_FUN.MSG5 = "Nombre maximum d'utilisateurs atteint! Pour pouvoir ajouter un utilisateur, vous devez d'abord en supprimer un.";
AD_FUN.MSG6 = "Nombre maximum de groupes atteint! Pour pouvoir ajouter un groupe, vous devez d'abord en supprimer un.";
AD_FUN.MSG7 = "Le champ Nom du groupe de travail ne peut être vide!";
AD_FUN.MSG8 = "Le champ Nom du groupe de travail ne peut comporter plus de 15 caractères!";
AD_FUN.MSG9 = "Le champ Nom du groupe de travail ne peut contenir que des caractères alphanumériques ou des tirets";
AD_FUN.MSG10 = "Le nom du groupe de travail doit commencer par une lettre";
AD_FUN.MSG11 = "Vous avez choisi de changer le nom de la machine. Le mappage de réseau devra être reconstitué. \n Voulez-vous continuer?";
AD_FUN.MSG12 = "Le champ Nom de la machine ne peut être vide!";
AD_FUN.MSG13 = "Le champ Nom de la machine ne peut comporter plus de 15 caractères!";
AD_FUN.MSG14 = "Le champ Nom de la machine ne peut contenir que des caractères alphanumériques ou des tirets";
AD_FUN.MSG15 = "Le nom de la machine doit commencer par une lettre"; 
AD_FUN.MSG16 = "Le nom d'utilisateur existe déjà!";
AD_FUN.MSG17 = "Le nom de l'utilisateur ne peut contenir que les caractères suivants : caractères alphanumériques, tirets ou traits de soulignement.";
AD_FUN.MSG18 = "Le nombre de groupes dépasse la limite! Supprimez-en un d'abord.";
AD_FUN.MSG19 = "La confirmation du mot de passe a échoué.";
AD_FUN.MSG20 = "Le mot de passe n'est pas valide! (minimum de 4 caractères et maximum de 8)";
AD_FUN.MSG21 = "Impossible de renommer l'utilisateur admin!";
AD_FUN.MSG22 = "Impossible de renommer l'utilisateur invité!";
AD_FUN.MSG23 = "Le nom d'utilisateur ne peut être vide!";
AD_FUN.MSG24 = "Vous devez entrer un nom de compte!";
AD_FUN.MSG25 = "Ce nom de compte existe déjà.";
AD_FUN.MSG26 = "Vous devez entrer un mot de passe!";
AD_FUN.MSG27 = "Le nombre d'utilisateurs dépasse la limite! Supprimez-en un d'abord.";
AD_FUN.MSG28 = "Compte d'utilisateur";
AD_FUN.MSG29 = "Impossible de supprimer le compte admin! ";
AD_FUN.MSG30 = "Le compte utilisateur ";
AD_FUN.MSG31 = " ne peut être supprimé! ";
AD_FUN.MSG32="Le mot de passe ne peut pas contenir d'espace.";
AD_FUN.MSG33 = " Le champ nom d'affichage ne peut contenir que des caractères alphanumériques ou des tirets. ";
AD_FUN.MSG34 = "Voulez-vous supprimer l'utilisateur \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Voulez-vous supprimer le groupe \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Le nom du périphérique ou du serveur ne peut pas être vide!";
AD_FUN.MSG39 = "Le nom du périphérique ou du serveur ne peut contenir que des caractères alphanumériques ou des tirets!";
AD_FUN.MSG40 = "Le nom du périphérique ou du serveur doit commencer par une lettre!";
AD_FUN.MSG41 = "Le nom du routeur ne peut pas être vide.";
AD_FUN.MSG42 = "Le nom du routeur ne peut contenir que des caractères alphanumériques et des tirets.";
AD_FUN.MSG43 = "Le nom du routeur doit commencer par une lettre.";
AD_FUN.MSG44 = "Le nom complet de l'utilisateur et la description ne peuvent contenir que les caractères suivants : caractères alphanumériques, espaces, tirets ou traits de soulignement.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Propriétés du groupe";
GA_FUN.OU = "Autres utilisateurs";
GA_FUN.UIG = "Utilisateurs dans le groupe";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "Serveur multimédia UPnP";
MS_FUN.svrname = "Nom du serveur multimédia";
MS_FUN.Setup = "Configuration";
MS_FUN.DB = "Base de données";
MS_FUN.ServerName = "Nom du serveur :";
MS_FUN.FR= "Dossier";
MS_FUN.SCAN = "Analyser";
MS_FUN.LASTSCAN = "Dernière analyse";
MS_FUN.AUTOSCAN = "Analyse automatique toutes les";
MS_FUN.HOUR="Heures";
MS_FUN.MSG1 = "Aucun partage d'analyse n'est actuellement défini.";
MS_FUN.MSG2 = "Le nombre de partages d'analyse dépasse la limite! Supprimez-en un d'abord.";
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
SP_FUN.ST = "Sélectionner";
SP_FUN.MSG1 = "Dossier partagé ajouté.";
SP_FUN.MSG2 = "Dossier partagé FTP ajouté.";
SP_FUN.MSG3 = "Ce chemin existe déjà dans la liste d'analyse! Il ne peut être ajouté de nouveau.";
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
FS_FUN.MSG1 = "Aucun accès FTP n'est actuellement défini.";
FS_FUN.ACCESS = "Accès";
FS_FUN.PO = "Port FTP :";
FS_FUN.FTP_CHARACTERSET = "Encodage:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chinois simplifié(GB18030)"; 
FS_FUN.BIG5="Chinois traditionnel(Big5)";
FS_FUN.CP1258="Vietnamien(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Cette racine ne permet pas de créer des dossiers!";
FS_FUN.ALERT2 = "Entrez un nom de dossier valide!";
FS_FUN.ALERT3 = "Entrez un nom de partage valide!";
FS_FUN.ALERT4 = "Ce nom d'affichage existe déjà dans la liste partagée!";
FS_FUN.ALERT5 = "Entrez un emplacement de partage valide!";
FS_FUN.FTPFOLDER = "Dossier FTP";
FS_FUN.DISPNAME = "Nom d'affichage";
FS_FUN.UNIQUE = "Doit être unique.";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Emplacement";
FS_FUN.NEWFOLDER = "Nouveau dossier";
FS_FUN.CURRENTFOLD = "Dossier actuel :";
FS_FUN.ACCESS = "Accès";
FS_FUN.AVAILGROUP = "Groupes disponibles";
FS_FUN.GROUPACCESS  = "Groupes avec accès";
FS_FUN.INTERNET = "Accès Internet";
FS_FUN.SUMMARY = "Sommaire FTP";
FS_FUN.ALERT6 = "Le port FTP doit être indiqué! ";
FS_FUN.ALERT7 = "Vous devez sélectionner un dossier partagé FTP! ";
FS_FUN.UNIQUE = " (il doit être unique). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Revendiquer le disque";
CD_FUN.DISK = "Disque";
CD_FUN.MAM = "Marque et modèle";
CD_FUN.PS = "Capacité";
CD_FUN.NPN = "Nom de la nouvelle partition :";
CD_FUN.MSG1 = "AVERTISSEMENT! La revendication du disque détruira tout le contenu du disque.\n Voulez-vous continuer?";
CD_FUN.MSG2 = "AVERTISSEMENT : le nom de la partition doit être en majuscules\n\n Le nom du disque « ";
CD_FUN.MSG3 = " » sera converti en majuscules. Voulez-vous continuer?";
CD_FUN.MSG4 = "Le nom de partition ne peut contenir que des caractères alphanumériques, des tirets ou des traits de soulignement";
CD_FUN.MSG5 = "Le nom du nouveau disque ne peut être vide";
CD_FUN.MSG6 = "AVERTISSEMENT : Les noms de disque FAT32 ne peuvent comporter plus de 11 caractères\n\n Le nom du disque « ";
CD_FUN.MSG7 = " » sera ramené à 11 caractères. Voulez-vous continuer?";
CD_FUN.DISK_MSG = " n'existe pas.\n";
CD_FUN.NODISKS = "Aucun disque détecté";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "Le champ Nom d'utilisateur ne peut contenir que des caractères alphanumériques, des tirets ou des traits de soulignement";
GP_FUN.MSG2 = "Le nombre de groupes dépasse la limite! Supprimez-en un d'abord.";
GP_FUN.MSG3 = "Le groupe existe déjà!";
GP_FUN.MSG4 = "Le nom de groupe ne peut être vide!";
GP_FUN.MSG5 = "Le nom de groupe ne peut contenir que des caractères alphanumériques, des tirets ou des traits de soulignement";
GP_FUN.GA = "Compte de groupe";
GP_FUN.GN = "Nom du groupe";
GP_FUN.DES = "Description";
GP_FUN.ACCESS = "Accès";
GP_FUN.RNW = "lecture et écriture";
GP_FUN.RO = "lecture seule";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Propriétés du partage";
ShareP_FUN.SF = "Dossier de partage";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Propriétés de l'utilisateur";
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
DB_FUN.Title = "Sauvegarde de données";
DB_FUN.SELJOB = "Sélectionner un numéro de tâche";
DB_FUN.JOBNAME = "Nom de la tâche";
DB_FUN.BType ="Type de sauvegarde";
DB_FUN.Direction = "Sens";
DB_FUN.WRTSL54GS = "Ce WRTSL54GS";
DB_FUN.RD = "Périphérique distant";
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
CMD.SAVESET = "Enregistrer les paramètres";
CMD.SafeRemove = "Retirer le disque en toute sécurité";
CMD.CreateShare = "Créer un partage";
CMD.ModifyShare = "Modifier le partage";
CMD.SELPart = "Sélectionner la partition";
CMD.Modify = "Modifier";
CMD.Delete = "Supprimer";
CMD.RO = ">> Lecture seule";
CMD.RW = ">> Lecture/Écriture";
CMD.RM = "<< Supprimer";
CMD.CANCELCHANGE = "Annuler les changements";
CMD.CT = "Continuer";
CMD.CLOSE = "Fermer";
CMD.CreateNewUser = "Créer un utilisateur";
CMD.CreateNewGroup = "Créer un groupe";
CMD.CreateNewShare = "Créer un partage";
CMD.JG = ">> Joindre au groupe ";
CMD.SAP = "Analyser tout ";
CMD.SPS = "Spécifier le dossier à analyser";
CMD.UOL = " Remonter d'un niveau ";
CMD.SP = "Sélectionner la partition";
CMD.FSA = "Spécifier le dossier à accéder";
CMD.Claim = "Revendiquer";
CMD.CL = "Effacer";
CMD.CANCEL = "Annuler";
CMD.CGroup = "Créer un groupe";
CMD.CUser = "Créer un utilisateur";
CMD.MUser = "Modifier l'utilisateur";
CMD.NOPWD = "AUCUN MOT DE PASSE";
CMD.DTE = "Supprimer cette entrée";
CMD.ALERT1 = "Analyse du disque, patientez... ";
CMD.CREATE = "Créer";
CMD.UPFOLDER = "Retour au dossier supérieur";
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
OPT.item_Disable = "Désactiver";
OPT.item_ALLP = "Toutes les partitions";
OPT.item_SF = "Spécifier le dossier";
OPT.item_Everyday = "Chaque jour";
OPT.item_opt1 = "De ce WRTSL54GS vers un autre appareil";
OPT.item_opt2 = "D'un autre appareil vers ce WRTSL54GS"; 
OPT.item_opt3 = "Connexion requise pour l'accès";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Plus...";
HELPMSG.DISK1 = "Affiche les détails du disque actuellement connecté au routeur.";
HELPMSG.DISK2 = "Pour effacer le contenu d'un disque, cochez la case à côté de son nom.";
HELPMSG.SHARE1 = "Affiche les détails des partages que vous avez créés.";
HELPMSG.SHARE2 = "Pour ajouter un nouveau partage, cliquez sur le bouton Créer un partage.";
HELPMSG.AD1 = "Le nom de ce routeur.";
HELPMSG.AD2 = "Le nom des ordinateurs de votre réseau.";
HELPMSG.AD3 = "Les utilisateurs sont énumérés dans la table.";
HELPMSG.AD4 = "Pour ajouter un nouvel utilisateur, cliquez sur le bouton Créer un utilisateur.";
HELPMSG.AD5 = "Les groupes sont énumérés dans la table.";
HELPMSG.AD6 = "Pour ajouter un nouveau groupe, cliquez sur le bouton Créer un groupe.";
HELPMSG.AD7 = "Entrez le nom du groupe (maximum de 12 caractères)";
HELPMSG.MS1 = "Affiche le nom que l'adaptateur multimédia utilisera pour identifier le serveur.";
HELPMSG.MS2 = "Cliquez sur ce bouton pour analyser toutes les partitions du disque USB.";
HELPMSG.MS3 = "Cliquez sur ce bouton pour sélectionner le dossier ou la partition spécifique à analyser.";
HELPMSG.CD1 = "Pour créer une partition sur le disque vierge qui sera formatée avec le système de fichiers FAT32.";
HELPMSG.ShareP1 = "Entrez le nom du partage.";
HELPMSG.ShareP2 = "Il s'agit du dossier qui fera partie de ce partage. Cliquez sur Sélectionner la partition pour choisir une valeur dans la liste de dossiers disponibles.";
HELPMSG.UP1 = "Entrez le nom d'utilisateur. Le nom d'utilisateur peut compter jusqu'à 20 caractères.";
HELPMSG.UP2 = "Entrez le mot de passe. Le mot de passe doit compter de 4 à 8 caractères.";
HELPMSG.UP3 = "Entrez une autre fois le mot de passe pour le confirmer.";
HELPMSG.UP4 = "Groupe";
HELPMSG.UP5 = "Sélectionnez le groupe dans lequel vous souhaitez placer cet utilisateur.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disque";
FUNST.Share="Partage";
FUNST.MS="Serveur multimédia";
FUNST.FTP = "Serveur FTP";

var NAS = new Object();
NAS.MSG1 = "Les paramètres de compte ont été appliqués. ";
NAS.MSG2 = "Le compte %s existe déjà! ";
NAS.MSG3 = "L'application des paramètres a échoué! ";
NAS.MSG4 = "L'analyse du lecteur partagé a été annulé. ";
NAS.MSG5 = "Échec de mise à jour de base de données multimédia! ";
NAS.MSG6 = "Échec de mise à jour de base de données multimédia! Lecteur partagé introuvable. ";
NAS.MSG7 = "Échec de mise à jour de base de données multimédia! ";
NAS.MSG8 = "La base de données a été mise à jour. ";
NAS.MSG9 = "Échec de mise à jour de base de données multimédia! Aucune partition détectée! ";
NAS.MSG10 = "La base de données a été mises à jour. ";
NAS.MSG11 = "L'analyse du lecteur partagé a été ajoutée. ";
NAS.MSG12 = "Le nom de lecteur %s est réservé. Choisissez un autre nom. ";
NAS.MSG13 = "Le lecteur partagé %s a été modifié. ";
NAS.MSG14 = "Le lecteur partagé %s a été créé. ";
NAS.MSG15 = "Erreur d'accès : le disque %s est introuvable. ";
NAS.MSG16 = "Erreur d'accès : vous n'avez pas indiqué le nouveau nom du disque. ";
NAS.MSG17 = "Le nom de disque %s n'est pas valide. ";
NAS.MSG18 = "Le disque a été obtenu. ";
NAS.MSG19 = "Erreur : la demande d'accès au disque %s a échoué. ";
NAS.MSG20 = "Erreur  : le lecteur partagé spécial %s ne peut être supprimé car il est utilisé par le contrôleur de domaine principal. Il ne peut être supprimé manuellement mais le sera automatiquement si le contrôleur de domaine principal est retiré. ";
NAS.MSG21 = "Le lecteur partagé %s a été supprimé. ";
NAS.MSG23 = "Le lecteur partagé %s a été modifié. ";
NAS.MSG24 = "Le lecteur partagé %s a été créé. ";
NAS.MSG25 = "Le nom de lecteur %s est réservé. Choisissez un autre nom. ";
NAS.MSG30 = "Erreur : aucun disque à effacer n'a été spécifié. ";
NAS.MSG31 = "Erreur : mémoire insuffisante pour effacer les disques. ";
NAS.MSG32 = "Erreur : impossible d'effacer le disque %s. ";
NAS.MSG33 = "Erreur : mémoire insuffisante pour effacer les disques. ";
NAS.MSG34 = "Tous les disques spécifiés ont été effacés. ";
NAS.MSG35 = "Opération annulée car aucun disque à effacer n'a été spécifié. ";
NAS.MSG36 = "Erreur : mémoire insuffisante pour effacer les disques. ";
NAS.MSG37 = "Erreur : aucun disque à effacer n'a été spécifié. ";
NAS.MSG38 = "Tous les disques spécifiés ont éaé effacés. ";
NAS.MSG39 = "Opération annulée car aucun disque à effacer n'a été spécifié. ";
NAS.MSG40 = "Impossible de déconnecter le disque %s de façon sûre. ";
NAS.MSG41 = "Le disque a été déconnecté. ";
NAS.MSG42 = "Les propriétés d'accès au lecteur partagé %s ont été changées. ";
NAS.MSG43 = "L'application des paramètres de compte a échoué! ";
NAS.MSG44 = "Les paramètres de compte ont été appliqués. ";
NAS.MSG45 = "Valeurs entrées non valides. Recommencez. ";
NAS.MSG46 = "Les paramètres sont valides. ";
NAS.MSG47 = "Impossible de %s domaine %s (erreur %s) et d'adhérer au domaine %s (erreur %s); appartenance au groupe de travail %s rétablie. ";
NAS.MSG48 = "Impossible de %s domaine %s (erreur %s); appartenance au domaine %s rétablie. ";
NAS.MSG49 = "join_workgroup_or_domain_error Impossible de %s domaine %s (erreur %s); appartenance au domaine %s rétablie. ";
NAS.MSG50 = "N'est pas membre du domaine %s. ";
NAS.MSG51 = "Est maintenant membre d'un groupe de travail %s. "
NAS.MSG52 = "L'application des paramètres a échoué! ";
NAS.MSG53 = "Le lecteur partagé FTP a été supprimé. ";
NAS.MSG54 = "Le disque est occupé.";










