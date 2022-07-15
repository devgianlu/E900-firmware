/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (Read-Only)";
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
DISK_FUN.Title = "Disk Management";
DISK_FUN.Part1 = "Disk Detail";
DISK_FUN.Part2 = "Format Disk";
DISK_FUN.Manufacture = "Disk";
DISK_FUN.Partition = "Partition";
DISK_FUN.FS = "File System";
DISK_FUN.TS = "Capacity";
DISK_FUN.FreeS = "Free Space";
DISK_FUN.Shares = "Shares";
DISK_FUN.SharesFd = "Shares Folder";
DISK_FUN.CreateShare = "Create Share";
DISK_FUN.Remain = "Unallocated";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "Detecting";
DISK_FUN.MSG1 = "The disk(s) selected contain print server information.\n You cannot wipe the disk(s)";
DISK_FUN.MSG2 = "You cannot wipe disks without wiping other disks that participate in the same disk pool";
DISK_FUN.MSG3 = "No disks selected for wiping";
DISK_FUN.MSG4 = "Erasing the Disk, Please wait!";
DISK_FUN.MSG5 = "No disks are available";
DISK_FUN.MSG6 = "The admin group access can not be removed.";
DISK_FUN.MSG7 = "The attached USB device is not supported.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "No disks are available.";
DISK_FUN.AP = "All_Partitions";
DISK_FUN.ENTERNAME = "Enter a partition's name:";
DISK_FUN.WARNING = "Warning:";
DISK_FUN.FORMATWARN1 = "Formatting Disk may take a few minutes; please don't turn off the";
DISK_FUN.FORMATWARN2 = "power or press the Reset button.";
DISK_FUN.FIRMVER = "Firmware Version";
DISK_FUN.BACKUP = "Backup";
DISK_FUN.WARNING1 = "WARNING!!  Wiping Disks will lead to irreversible data loss.Do you want to Continue?";
DISK_FUN.FR = "Folder";
DISK_FUN.ENTERINTOF= "Enter into Folder";
DISK_FUN.SELECT = "Select";
DISK_FUN.MPATH = " This location does not exist.";
DISK_FUN.CPATH = "This shared folder location does not exist.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Display Name";
SHARE_FUN.ShareAccess = "Share Access";
SHARE_FUN.Title = "Share Management";
SHARE_FUN.NOTEXIST ="Not Exist!";
SHARE_FUN.MSG1 = "There are currently no shares defined.";
SHARE_FUN.MSG2 = "The number of shares exceeds the limit! You need to delete one first.";
SHARE_FUN.Properties = "Edit";
SHARE_FUN.FF = "FTP Floader";
SHARE_FUN.MSF = "Media Folder";
SHARE_FUN.AF="Access Folder";
SHARE_FUN.SF = "Shared Folder";
SHARE_FUN.DN = "Display Name";
SHARE_FUN.patition = "Patition";
SHARE_FUN.location = "Loaction";
SHARE_FUN.NF = "New Folder";
SHARE_FUN.CF = "Current Folder";
SHARE_FUN.AS = "Access";
SHARE_FUN.AG = "Available Groups";
SHARE_FUN.GWA = "Groups with Access";
SHARE_FUN.GN = "Group Name";
SHARE_FUN.description = "Description";
SHARE_FUN.rw = "read and write";
SHARE_FUN.ro = "read only";
SHARE_FUN.NAME ="Name";
SHARE_FUN.FN = "Full Name";
SHARE_FUN.PW = "Password";
SHARE_FUN.CP = "Confirm Password";
SHARE_FUN.GM = "Group Member";
SHARE_FUN.AD = "Account Disabled";
SHARE_FUN.SUMMARY="Shared Folders Summary";
SHARE_FUN.IP = "Shared Disk IP Address:";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Group With Access";
SA_FUN.OG = "Other Group";
SA_FUN.MSG1 = "The admin group can not be removed!";
SA_FUN.MSG2 = "The Group Name already exists!";
SA_FUN.FTP_Access ="FTP Access";
SA_FUN.Entire_Partition ="Share Entire Partition";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "guest";
AD_FUN.svrname="Server Name";
AD_FUN.devname="Device Name";
AD_FUN.SLIP="Server LAN IP Address:";
AD_FUN.SWIP="Server Internet IP Address:";
AD_FUN.MN = "Machine Name:";
AD_FUN.WN = "Workgroup Name:";
AD_FUN.MD = "Machine Description:";
AD_FUN.APS = "All Partitions Share:";
AD_FUN.UserName = "User Name";
AD_FUN.FULLNAME = "Full Name";
AD_FUN.GroupName = "Group Name";
AD_FUN.Basic = "Basic";
AD_FUN.UserM = "User Management";
AD_FUN.GroupM = "Group Management";
AD_FUN.AnymsAcess="Anonymous Access";
AD_FUN.AnymsFTP="Anonymous FTP";
AD_FUN.AnymsDisk="Anonymous Disk Access";
AD_FUN.readonly="Read-only disk access";
AD_FUN.readwrite="Read-and-write disk access";
AD_FUN.MSG1 = "There are currently no users defined.";
AD_FUN.MSG2 = "The user admin can't be deleted!";
AD_FUN.MSG3 = "Are you sure to delete this user?";
AD_FUN.MSG4 = "Are you sure to delete this group?";
AD_FUN.MSG5 = "The maximum number of users has been reached! To add another user you will need to delete one first.";
AD_FUN.MSG6 = " The maximum number of groups has been reached! To add another group you will need to delete one first.";
AD_FUN.MSG7 = "Workgroup Name cannot be blanks!!";
AD_FUN.MSG8 = "Workgroup name cannot be greater than 15 characters!!";
AD_FUN.MSG9 = "Workgroup Name can contain only AlphaNumeric/dashes";
AD_FUN.MSG10 = "Workgroup Name has to start with a Letter";
AD_FUN.MSG11 = "You have chosen to change the machine name. Existing network mapping will have to be re-mapped. \n Do you want to continue?";
AD_FUN.MSG12 = "Machine Name cannot be blanks!!";
AD_FUN.MSG13 = "Machine Name cannot be greater than 15 characters!!";
AD_FUN.MSG14 = "Machine Name can contain only AlphaNumeric/dashes";
AD_FUN.MSG15 = "Machine Name has to start with a Letter" ; 
AD_FUN.MSG16 = "The User Name already exists!";
AD_FUN.MSG17 = "The username can only contain the following characters: alphanumeric, dashes or underscores.";
AD_FUN.MSG18 = "The number of groups exceed the limit! You need to delete one first.";
AD_FUN.MSG19 = "Password confirmation is not matched.";
AD_FUN.MSG20 = "Password is invalid! (minimum of 4, maximum of 63 characters)";
AD_FUN.MSG21 = "The user admin can't be renamed!";
AD_FUN.MSG22 = "The user guest can't be renamed!";
AD_FUN.MSG23 = "User name can't be empty!";
AD_FUN.MSG24 = "You must input a account name!";
AD_FUN.MSG25 = "The account name already exist!";
AD_FUN.MSG26 = "You must input a password!";
AD_FUN.MSG27 = "The number of users exceed the limit! You need to delete one first.";
AD_FUN.MSG28 = "User Account";
AD_FUN.MSG29 = "The user admin can not be removed!";
AD_FUN.MSG30 = "The user ";
AD_FUN.MSG31 = " can not be removed!";
AD_FUN.MSG32 = "Spaces or backslash are not allowed in Password.";
AD_FUN.MSG33 = "Display name can contain only AlphaNumeric/dashes";
AD_FUN.MSG34 = "Do you want to delete the user \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Do you want to delete the group \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "Device/Server/Domain Name should not be blank!";
AD_FUN.MSG39 = "Device/Server/Domain Name can contain only AlphaNumeric/dashes !";
AD_FUN.MSG40 = "Device/Server/Domain Name has to start with a Letter!";
AD_FUN.MSG41 = "The router name cannot be blank.";
AD_FUN.MSG42 = "The router name can only contain alphanumeric characters and dashes.";
AD_FUN.MSG43 = "The router name must start with a letter.";
AD_FUN.MSG44 = "The user full name and description can only contain the following characters : AlphaNumeric, space, dashes or underscores.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Group Properties";
GA_FUN.OU = "Other Users";
GA_FUN.UIG = "Users In Group";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP Media Server";
MS_FUN.svrname = "Media Server Name";
MS_FUN.Setup = "Setup";
MS_FUN.DB = "Database";
MS_FUN.ServerName = "Server Name :";
MS_FUN.FR= "Folder";
MS_FUN.SCAN = "Scan";
MS_FUN.LASTSCAN = "Last scanning time";
MS_FUN.AUTOSCAN = "Auto-scan every";
MS_FUN.HOUR="Hours";
MS_FUN.MSG1 = "There are currently no scanning shares defined.";
MS_FUN.MSG2 = "Number of scanning shares exceeds the limit! You need to delete one first.";
MS_FUN.MSG3 = "Scanning all partitions may take a long time to complete. Are you sure you want to continue?";
MS_FUN.MSG4 = "Scanning the Disk, Please wait!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Partition List";
SP_FUN.ST = "Select";
SP_FUN.MSG1 = "Successfully added share folder.";
SP_FUN.MSG2 = "Successfully added FTP share folder.";
SP_FUN.MSG3 = "This path already exists in scanning list! It can't be added twice.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "FTP Server";
FS_FUN.svrname = "FTP Server Name";
FS_FUN.Share = "Share";
FS_FUN.EDIT = "Edit";
FS_FUN.MSG1 = "There are currently no FTP access defined.";
FS_FUN.ACCESS = "Access";
FS_FUN.PO = "FTP Port :";
FS_FUN.FTP_CHARACTERSET = "Encoding:";
FS_FUN.UNICODE="Unicode (UTF-8)";
FS_FUN.GB18030="Chinese Simplified (GB18030)";
FS_FUN.BIG5="Chinese Traditional (Big5)";
FS_FUN.CP1258="Vietnamese (CP1258)";
FS_FUN.ISO8859_1="ISO 8859-1";
FS_FUN.ALERT1 = "This root is not allowed to create new folder!";
FS_FUN.ALERT2 = "Please enter a valid Folder Name!";
FS_FUN.ALERT3 = "Please enter a valid share name.";
FS_FUN.ALERT4 = "The display name is already on the share list!";
FS_FUN.ALERT5 = "Please enter a valid share location.";
FS_FUN.ALERT6 = "FTP port can't be empty!";
FS_FUN.ALERT7 = "Please select ftp share folder!";
FS_FUN.FTPFOLDER = "FTP Folder";
FS_FUN.DISPNAME = "Display Name";
FS_FUN.UNIQUE = "(Has to be unique.)";
FS_FUN.PAR = "Partition";
FS_FUN.LOCA = "Location";
FS_FUN.NEWFOLDER = "New Folder";
FS_FUN.CURRENTFOLD = "Current Folder:";
FS_FUN.ACCESS = "Access";
FS_FUN.AVAILGROUP =  "Available Groups";
FS_FUN.GROUPACCESS  = "Groups with Access";
FS_FUN.INTERNET = "Internet Access";
FS_FUN.SUMMARY = "FTP Summary";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Claim Disk";
CD_FUN.DISK = "Disk";
CD_FUN.MAM =  "Make and Model";
CD_FUN.PS = "Physical Size";
CD_FUN.NPN = "New Partition Name:";
CD_FUN.MSG1 = "WARNING!!  Claim Disk will destroy everything on this disk.\nDo you want to Continue?";
CD_FUN.MSG2 = "WARNING: Partition name has to be in Upper case\n\n Your Disk name '";
CD_FUN.MSG3 = "' will be converted to upper case. Do you want to continue?";
CD_FUN.MSG4 = "Partition name can contain only alphaNumeric/dashes/underscores";
CD_FUN.MSG5 = "New disk name cannot be blanks";
CD_FUN.MSG6 = "WARNING: FAT32 Disk names cannot be greater than 11 characters\n\n Your Disk name '";
CD_FUN.MSG7 = "' will be truncated to 11 characters. Do you want to continue?";
CD_FUN.DISK_MSG = " does not exist.\n";
CD_FUN.NODISKS = "No Disks attached";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "User name can contain only alphaNumeric/dashes/underscores";
GP_FUN.MSG2 = "The number of groups exceed the limit! You need to delete one first.";
GP_FUN.MSG3 = "The group already exists!";
GP_FUN.MSG4 = "Group name can't be empty!";
GP_FUN.MSG5 = "Group name can contain only alphaNumeric/dashes/underscores";
GP_FUN.GA = "Group Account";
GP_FUN.GN = "Group Name";
GP_FUN.DES = "Description";
GP_FUN.ACCESS = "Access";
GP_FUN.RNW = "read-and-write";
GP_FUN.RO = "read-only";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Share Properties" ;
ShareP_FUN.SF = "Share Folder";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "User Properties";
UP_FUN.FName = "Name";
UP_FUN.PWD = "Password"
UP_FUN.Reconfirm = "Re-enter to confirm";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Data Backup";
DB_FUN.SELJOB = "Select Job number";
DB_FUN.JOBNAME = "Job Name";
DB_FUN.BType ="Backup Type";
DB_FUN.Direction = "Direction";
DB_FUN.WRTSL54GS = "This WRTSL54GS";
DB_FUN.RD = "Remote Device";
DB_FUN.DAYS = "Days";
DB_FUN.TIMES = "Times";
DB_FUN.LOGIN = "Login Name";
DB_FUN.sunday = "&nbsp;Sun";
DB_FUN.Mon = "&nbsp;Mon"; 
DB_FUN.Tue = "&nbsp;Tue"; 
DB_FUN.Wed = "&nbsp;Wed";
DB_FUN.Thu = "&nbsp;Thu";
DB_FUN.Fri = "&nbsp;Fri";
DB_FUN.Sat = "&nbsp;Sat";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Folder List";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Quick Erase";
CMD.FullErase = "Full Erase";
CMD.EraseDisk = "Format Disk";
CMD.Refresh = "Refresh";
CMD.Claim = "Claim";
CMD.SAVESET = "Save Settings";
CMD.SafeRemove = "Safely Remove Disk";
CMD.CreateShare = "Create Share";
CMD.ModifyShare = "Modify Share";
CMD.SELPart = "Select Partition";
CMD.Modify = "Modify";
CMD.Delete = "Delete";
CMD.RO = ">> Read Only";
CMD.RW = ">> Read/Write";
CMD.RM = "<< Remove";
CMD.CANCELCHANGE = "Cancel Changes";
CMD.CT = "Continue";
CMD.CLOSE = "Close";
CMD.CreateNewUser = "Create New User";
CMD.CreateNewGroup = "Create New Group";
CMD.CreateNewShare = "Create New Share";
CMD.JG = ">> Join Group ";
CMD.SAP = "Scan All ";
CMD.SPS = "Specify Folder to Scan";
CMD.UOL = " Up One Level ";
CMD.SP = "Select Partition";
CMD.FSA = "Specify Folder to Access";
CMD.Claim = "Claim";
CMD.CL = "Clear";
CMD.CANCEL = "Cancel";
CMD.CGroup = "Create Group";
CMD.CUser = "Create User";
CMD.MUser = "Modify User";
CMD.NOPWD = "NO PASSWORD";
CMD.DTE = "Delete This Entry";
CMD.ALERT1 = "Renewing the Disk, Please wait!";
CMD.CREATE = "Create";
CMD.UPFOLDER = "Return to Upper Folder";
CMD.ALLFOLDER = "All Folders";
CMD.FORMAT = "Format";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Enabled";
OPT.item_Disable = "Disabled";
OPT.item_ALLP = "All Partitions";
OPT.item_SF = "Specify Folder";
OPT.item_Everyday = "Everyday";
OPT.item_opt1 = "From this WRTSL54GS to another device";
OPT.item_opt2 = "From another device to this WRTSL54GS" 
OPT.item_opt3 = "Access requires login";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "More...";
HELPMSG.DISK1 = "Displays the details of the disk that is currently connected to the router.";
HELPMSG.DISK2 = "To erase a disk, click the checkbox next to the name of the disk.";
HELPMSG.SHARE1 = "Displays details of the Shares that you have currently created.";
HELPMSG.SHARE2 = "Click Create New Share button to create a new share.";
HELPMSG.AD1 = "The name of this router.";
HELPMSG.AD2 = "The name of your networked computers.";
HELPMSG.AD3 = "The users are listed in the table.";
HELPMSG.AD4 = "To create a new user, click the Create New User button.";
HELPMSG.AD5 = "The groups are listed in the table.";
HELPMSG.AD6 = "To create a new group, click the Create New Group button.";
HELPMSG.AD7 = "Enter the group name.The group name can be up to 12 characters in length";
HELPMSG.MS1 = "Displays the name that the media adapter will use to identify the server.";
HELPMSG.MS2 = "Click this button to scan all partitions of the USB disk.";
HELPMSG.MS3 = "Click this button to select specific folder or partition you would like to scan.";
HELPMSG.CD1 = "To create a partition on the blank disk that will be formatted as FAT32.";
HELPMSG.ShareP1 = "Enter the name of the share.";
HELPMSG.ShareP2 = "This is the folder that this share will contain. Click Select Partition to choose from a list of available folder.";
HELPMSG.UP1 = "Enter the user name. The user name can be up to 20 characters in length.";
HELPMSG.UP2 = "Enter the password.  The password can be minimum of 4, maximum of 8 characters in length.";
HELPMSG.UP3 = "Enter the password again to confirm.";
HELPMSG.UP4 = "Group";
HELPMSG.UP5 = "Select from the group you would like to place this user in.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disk";
FUNST.Share="Share";
FUNST.MS="Media Server";
FUNST.FTP = "FTP Server";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : NAS output in CGI
--------------------------------------------------------------------------------------------------*/
var NAS = new Object();
NAS.MSG1 = "Successfully applied Account settings.";
NAS.MSG2 = "The Account %s already exists!";
NAS.MSG3 = "Fail to apply settings!";
NAS.MSG4 = "Successfully deleted scanning share.";
NAS.MSG5 = "Fail to update Media Database!";
NAS.MSG6 = "Fail to update Media Database! Share does not exist.";
NAS.MSG7 = "Fail to update Media Database!";
NAS.MSG8 = "Successfully updated database.";
NAS.MSG9 = "Fail to update Media Database. No partition exists!";
NAS.MSG10 = "Successfully updated database.";
NAS.MSG11 = "Successfully added scanning share.";
NAS.MSG12 = "Share name %s is reserved.  Please choose a different name.";
NAS.MSG13 = "Successfully modified share %s.";
NAS.MSG14 = "Successfully created share %s.";
NAS.MSG15 = "Error while claiming disk %s: Disk `%s' does not exist.";
NAS.MSG16 = "Error while claiming disk: You did not specify a new name for the disk.";
NAS.MSG17 = "The specified disk name, `%s', is not valid.";
NAS.MSG18 = "The disk has successfully been claimed.";
NAS.MSG19 = "Error while claiming disk %s: The attempted claim failed.";
NAS.MSG20 = "Error while deleting share %s: Share %s is a special share reserved for use by the Primary Domain Controller functionality. It cannot be deleted separately, but if the Primary Domain Controller is turned off, it will automatically be removed.";
NAS.MSG21 = "Successfully deleted share %s";
NAS.MSG23 = "Successfully modified share %s.";
NAS.MSG24 = "Successfully created share %s.";
NAS.MSG25 = "Share name %s is reserved.  Please choose a different name.";
NAS.MSG30 = "Error while erasing disks: No disks were specified for erasing.";
NAS.MSG31 = "Error while erasing disks: Out of memory while trying to erase disks.";
NAS.MSG32 = "Error while erasing disks: Unable to erase disk `%s'.";
NAS.MSG33 = "Error while erasing disks: Out of memory.";
NAS.MSG34 = "All requested disks have been successfully erased.";
NAS.MSG35 = "No disks were requested to be erased, so no action was taken.";
NAS.MSG36 = "Error while erasing disks: Out of memory while trying to erase disks.";
NAS.MSG37 = "Error while erasing disks: No disks were specified for erasing.";
NAS.MSG38 = "All requested disks have been successfully erased.";
NAS.MSG39 = "No disks were requested to be erased, so no action was taken.";
NAS.MSG30 = "Unable to safely disconnect disk `%s'.";
NAS.MSG40 = "Unable to safely disconnect disk `%s'.";
NAS.MSG41 = "Successfully disconnected disk.";
NAS.MSG42 = "Successfully change the access properties for share %s.";
NAS.MSG43 = "Fail to apply Account settings!";
NAS.MSG44 = "Successfully applied Account settings.";
NAS.MSG45 = "The values you entered are invalid. Please try again.";
NAS.MSG46 = "Settings are successful.";
NAS.MSG47 = "Could not %s domain %s (got error %s) and could not rejoin domain %s (got error %s), reverted to membership in workgroup %s.";
NAS.MSG48 = "Could not %s domain %s (got error %s) reverted to membership in domain %s.";
NAS.MSG49 = "join_workgroup_or_domain_error Could not %s domain %s (got error %s) reverted to membership in domain %s.";
NAS.MSG50 = "Now a member of domain %s.";
NAS.MSG51 = "Now a member of workgroup %s.";
NAS.MSG52 = "Fail to apply settings!";
NAS.MSG53 = "Successfully deleted FTP share.";
NAS.MSG54 = "The disk is busy!";


