/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (s�lo lectura)";
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
DISK_FUN.Title = "Administraci�n de discos";
DISK_FUN.Part1 = "Detalle de disco";
DISK_FUN.Part2 = "Formatear disco";
DISK_FUN.Manufacture = "Disco";
DISK_FUN.Partition = "Partici�n";
DISK_FUN.FS = "Sistema de archivos";
DISK_FUN.TS = "Capacidad";
DISK_FUN.FreeS = "Espacio libre";
DISK_FUN.Shares = "Recursos compartidos";
DISK_FUN.SharesFd = "Carpeta de recursos compartidos";
DISK_FUN.CreateShare = "Crear recurso compartido";
DISK_FUN.Remain = "No asignado";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "Detectando";
DISK_FUN.MSG1 = "Los discos seleccionados contienen informaci�n del servidor de impresi�n.\n No puede borrar los discos.";
DISK_FUN.MSG2 = "No puede borrar los discos sin borrar otros discos del mismo grupo.";
DISK_FUN.MSG3 = "No se ha seleccionado ning�n disco para borrar.";
DISK_FUN.MSG4 = "Borrando el disco; espere.";
DISK_FUN.MSG5 = "No hay discos disponibles.";
DISK_FUN.MSG6 = "No se puede eliminar el acceso al grupo de administradores.";
DISK_FUN.MSG7 = "El dispositivo USB adjunto no es compatible.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "No hay discos disponibles.";
DISK_FUN.AP = "Todas las particiones";
DISK_FUN.ENTERNAME = "Introduzca un nombre de partici�n:";
DISK_FUN.WARNING = "Advertencia:";
DISK_FUN.FORMATWARN1 = "El formateo de un disco puede tardar unos minutos. No apague el";
DISK_FUN.FORMATWARN2 = "equipo ni pulse el bot�n Reinicio.";
DISK_FUN.FIRMVER = "Versi�n del firmware";
DISK_FUN.BACKUP = "Copia de seguridad";
DISK_FUN.WARNING1 = "ADVERTENCIA: Al borrar los discos se producir� una p�rdida de datos irreversible. �Desea continuar? ";
DISK_FUN.FR = "Carpeta";
DISK_FUN.ENTERINTOF= "Entrar en carpeta";
DISK_FUN.SELECT = "Seleccionar";
DISK_FUN.MPATH = " Esta ubicaci�n no existe.";
DISK_FUN.CPATH = "Esta ubicaci�n de carpeta compartida no existe.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nombre mostrado";
SHARE_FUN.ShareAccess = "Acceso compartido";
SHARE_FUN.Title = "Administraci�n de recursos compartidos";
SHARE_FUN.NOTEXIST ="No existe.";
SHARE_FUN.MSG1 = "No hay ning�n recurso compartido definido actualmente.";
SHARE_FUN.MSG2 = "El n�mero de recursos compartidos supera el l�mite. Debe suprimir uno primero.";
SHARE_FUN.Properties = "Editar";
SHARE_FUN.FF = "FTP Floader";
SHARE_FUN.MSF = "Carpeta de medios";
SHARE_FUN.SF = "Carpeta compartida";
SHARE_FUN.DN = "Nombre mostrado";
SHARE_FUN.patition = "Partici�n";
SHARE_FUN.location = "Ubicaci�n";
SHARE_FUN.NF = "Nueva carpeta";
SHARE_FUN.CF = "Carpeta actual";
SHARE_FUN.AF="Carpeta de acceso";
SHARE_FUN.AS = "Acceso";
SHARE_FUN.AG = "Grupos disponibles";
SHARE_FUN.GWA = "Grupos con acceso";
SHARE_FUN.GN = "Nombre del grupo";
SHARE_FUN.description = "Descripci�n";
SHARE_FUN.rw = "Lectura y escritura";
SHARE_FUN.ro = "S�lo lectura";
SHARE_FUN.NAME ="Nombre";
SHARE_FUN.FN = "Nombre completo";
SHARE_FUN.PW = "Contrase�a";
SHARE_FUN.CP = "Confirmar contrase�a";
SHARE_FUN.GM = "Miembro de grupo";
SHARE_FUN.AD = "Cuenta desactivada";
SHARE_FUN.SUMMARY="Resumen de carpetas compartidas";
SHARE_FUN.IP = "Direcci�n IP de disco compartido: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Grupo con acceso";
SA_FUN.OG = "Otro grupo";
SA_FUN.MSG1 = "No se puede eliminar el grupo de administradores.";
SA_FUN.MSG2 = "El nombre de grupo ya existe.";
SA_FUN.FTP_Access ="Acceso a FTP";
SA_FUN.Entire_Partition ="Compartir partici�n completa";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "administrador";
AD_FUN.guest = "invitado";
AD_FUN.MN = "&nbsp;Nombre del equipo:";
AD_FUN.WN = "&nbsp;Nombre del grupo de trabajo:";
AD_FUN.MD = "&nbsp;Descripci�n del equipo:";
AD_FUN.APS = "&nbsp;Todos los recursos compartidos de particiones:";
AD_FUN.UserName = "Nombre de usuario";
AD_FUN.FULLNAME = "Nombre completo";
AD_FUN.GroupName = "Nombre del grupo";
AD_FUN.Basic = "B�sica";
AD_FUN.UserM = "Administraci�n de usuarios";
AD_FUN.GroupM = "Administraci�n de grupos";
AD_FUN.AnymsAcess="Acceso an�nimo";
AD_FUN.AnymsFTP="FTP an�nimo";
AD_FUN.AnymsDisk="Acceso de disco an�nimo";
AD_FUN.readonly="Leer s�lo acceso de disco";
AD_FUN.readwrite="Leer y escribir acceso de disco";
AD_FUN.svrname="Nombre de servidor";
AD_FUN.devname="Nombre del dispositivo";
AD_FUN.SLIP="Direcci�n IP de LAN del servidor";
AD_FUN.SWIP="Direcci�n IP de Internet del servidor";
AD_FUN.MSG1 = "No hay ning�n usuario definido actualmente.";
AD_FUN.MSG2 = "El usuario administrador no se puede eliminar.";
AD_FUN.MSG3 = "�Seguro que desea eliminar este usuario?";
AD_FUN.MSG4 = "�Seguro que desea eliminar este grupo?";
AD_FUN.MSG5 = "Se ha alcanzado el m�ximo permitido de usuarios. Para agregar un nuevo usuario, antes deber� eliminar uno.";
AD_FUN.MSG6 = "Se ha alcanzado el m�ximo permitido de grupos. Para agregar un nuevo grupo, antes deber� eliminar uno.";
AD_FUN.MSG7 = "El nombre de grupo de trabajo no puede estar en blanco.";
AD_FUN.MSG8 = "El nombre de grupo de trabajo no puede tener m�s de 15 caracteres.";
AD_FUN.MSG9 = "El nombre de grupo de trabajo s�lo puede contener caracteres alfanum�ricos/guiones.";
AD_FUN.MSG10 = "El nombre de grupo de trabajo debe empezar por una letra.";
AD_FUN.MSG11 = "Ha elegido cambiar el nombre de equipo. La asignaci�n de red existente se debe volver a asignar. \n �Desea continuar?";
AD_FUN.MSG12 = "El nombre de equipo no puede estar en blanco.";
AD_FUN.MSG13 = "El nombre de equipo no puede tener m�s de 15 caracteres.";
AD_FUN.MSG14 = "El nombre de equipo s�lo puede contener caracteres alfanum�ricos/guiones.";
AD_FUN.MSG15 = "El nombre de equipo debe empezar por una letra."; 
AD_FUN.MSG16 = "El nombre de usuario ya existe.";
AD_FUN.MSG17 = "El nombre completo s�lo puede contener los siguientes caracteres: caracteres alfanum�ricos, guiones o subrayado.";
AD_FUN.MSG18 = "El n�mero de grupos supera el l�mite. Debe suprimir uno primero.";
AD_FUN.MSG19 = "La confirmaci�n de contrase�a no coincide.";
AD_FUN.MSG20 = "La contrase�a no es v�lida (4 caracteres como m�nimo, 8 como m�ximo).";
AD_FUN.MSG21 = "No se puede cambiar el nombre del usuario administrador.";
AD_FUN.MSG22 = "No se puede cambiar el nombre del usuario invitado.";
AD_FUN.MSG23 = "El nombre de usuario no puede estar vac�o.";
AD_FUN.MSG24 = "Debe introducir un nombre de cuenta.";
AD_FUN.MSG25 = "El nombre de cuenta ya existe.";
AD_FUN.MSG26 = "Debe introducir una contrase�a.";
AD_FUN.MSG27 = "El n�mero de usuarios supera el l�mite. Debe suprimir uno primero.";
AD_FUN.MSG28 = "Cuenta de usuario";
AD_FUN.MSG29 = "No se puede eliminar el usuario administrador. ";
AD_FUN.MSG30 = "El usuario ";
AD_FUN.MSG31 = " no se puede eliminar. ";
AD_FUN.MSG32 = "No se permiten espacios en la contrase�a.";
AD_FUN.MSG33 = " El Nombre mostrado s�lo puede contener caracteres alfanum�ricos/guiones.";
AD_FUN.MSG34 = "�Desea eliminar al usuario \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "�Desea eliminar el grupo \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "El nombre de servidor/dispositivo no puede estar en blanco.";
AD_FUN.MSG39 = "El nombre de servidor/dispositivo s�lo puede contener caracteres alfanum�ricos/guiones.";
AD_FUN.MSG40 = "El nombre de servidor/dispositivo debe comenzar con una letra.";
AD_FUN.MSG41 = "El nombre de router no puede estar en blanco.";
AD_FUN.MSG42 = "El nombre de router s�lo puede contener caracteres alfanum�ricos y guiones.";
AD_FUN.MSG43 = "El nombre de router debe empezar por una letra.";
AD_FUN.MSG44 = "El nombre completo y la descripci�n s�lo pueden contener los siguientes caracteres: caracteres alfanum�ricos, espacio, guiones o subrayado.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Propiedades de grupo";
GA_FUN.OU = "Otros usuarios";
GA_FUN.UIG = "Usuarios del grupo";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "UPnP Media Server";
MS_FUN.svrname = "Nombre de servidor de medios";
MS_FUN.Setup = "Configuraci�n";
MS_FUN.DB = "Base de datos";
MS_FUN.ServerName = "Nombre de servidor:";
MS_FUN.FR= "Carpeta";
MS_FUN.SCAN = "Examinar";
MS_FUN.LASTSCAN = "Hora de la �ltima exploraci�n";
MS_FUN.AUTOSCAN = "Examen autom�tico cada";
MS_FUN.HOUR="Horas";
MS_FUN.MSG1 = "No hay ning�n recurso compartido de exploraci�n definido actualmente.";
MS_FUN.MSG2 = "El n�mero de recursos compartidos de exploraci�n supera el l�mite. Debe suprimir uno primero.";
MS_FUN.MSG3 = "La exploraci�n de todos los recursos compartidos puede tardar bastante. �Seguro de que desea continuar?";
MS_FUN.MSG4 = "Examinando el disco; espere.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Lista de particiones";
SP_FUN.ST = "Seleccionar";
SP_FUN.MSG1 = "La carpeta de recursos compartidos se ha agregado correctamente.";
SP_FUN.MSG2 = "La carpeta de recursos compartidos de FTP se ha agregado correctamente.";
SP_FUN.MSG3 = "Esta ruta ya existe en la lista de exploraci�n. No puede agregarse dos veces.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "Servidor FTP";
FS_FUN.svrname = "Nombre de servidor FTP";
FS_FUN.Share = "Recurso compartido";
FS_FUN.EDIT = "Editar";
FS_FUN.MSG1 = "No hay ning�n acceso de FTP definido actualmente.";
FS_FUN.ACCESS = "Acceso";
FS_FUN.PO = "Puerto FTP:";
FS_FUN.FTP_CHARACTERSET = "Codificaci�n:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chino simplificado(GB18030)";
FS_FUN.BIG5="Chino Tradicional(Big5)";
FS_FUN.CP1258="Vietnamita(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Esta ra�z no puede crear carpetas nuevas.";
FS_FUN.ALERT2 = "Introduzca un nombre de carpeta v�lido.";
FS_FUN.ALERT3 = "Introduzca un nombre de recurso compartido v�lido.";
FS_FUN.ALERT4 = "El nombre mostrado ya est� en la lista de recursos compartidos.";
FS_FUN.ALERT5 = "Introduzca una ubicaci�n de recurso compartido v�lida.";
FS_FUN.FTPFOLDER = "Carpeta de FTP";
FS_FUN.DISPNAME = "Nombre mostrado";
FS_FUN.UNIQUE = "Tiene que ser exclusivo.";
FS_FUN.PAR = "Partici�n";
FS_FUN.LOCA = "Ubicaci�n";
FS_FUN.NEWFOLDER = "Nueva carpeta";
FS_FUN.CURRENTFOLD = "Carpeta actual";
FS_FUN.ACCESS = "Acceso";
FS_FUN.AVAILGROUP =  "Grupos disponibles";
FS_FUN.GROUPACCESS  = "Grupos con acceso";
FS_FUN.INTERNET = "Acceso a Internet";
FS_FUN.SUMMARY = "Resumen de FTP";
FS_FUN.ALERT6 = "El puerto FTP no puede estar vac�o";
FS_FUN.ALERT7 = "Seleccione la carpeta de recursos compartidos de FTP";
FS_FUN.UNIQUE = " (Tiene que ser exclusivo). ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Reclamar disco";
CD_FUN.DISK = "Disco";
CD_FUN.MAM =  "Marca y modelo";
CD_FUN.PS = "Tama�o f�sico";
CD_FUN.NPN = "Nombre de la nueva partici�n:";
CD_FUN.MSG1 = "ADVERTENCIA. Al reclamar el disco se destruir� todo su contenido.\n�Desea continuar?";
CD_FUN.MSG2 = "ADVERTENCIA: El nombre de la partici�n debe estar en may�sculas.\n\nEl nombre de disco '";
CD_FUN.MSG3 = "' se convertir� a may�sculas. �Desea continuar?";
CD_FUN.MSG4 = "El nombre de partici�n s�lo puede contener caracteres alfanum�ricos/guiones/subrayado.";
CD_FUN.MSG5 = "El nombre del nuevo disco no puede estar en blanco.";
CD_FUN.MSG6 = "ADVERTENCIA: Los nombres de disco FAT32 no pueden tener m�s de 11 caracteres.\n\n El nombre de disco '";
CD_FUN.MSG7 = "' se truncar� a 11 caracteres. �Desea continuar?";
CD_FUN.DISK_MSG = " no existe.\n";
CD_FUN.NODISKS = "No hay discos conectados";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "El nombre de usuario s�lo puede contener caracteres alfanum�ricos/guiones/subrayado.";
GP_FUN.MSG2 = "El n�mero de grupos supera el l�mite. Debe suprimir uno primero.";
GP_FUN.MSG3 = "El grupo ya existe.";
GP_FUN.MSG4 = "El nombre de grupo no puede estar vac�o.";
GP_FUN.MSG5 = "El nombre de grupo s�lo puede contener caracteres alfanum�ricos/guiones/subrayado.";
GP_FUN.GA = "Cuenta de grupo";
GP_FUN.GN = "Nombre del grupo";
GP_FUN.DES = "Descripci�n";
GP_FUN.ACCESS = "Acceso";
GP_FUN.RNW = "Lectura y escritura";
GP_FUN.RO = "S�lo lectura";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Propiedades de recurso compartido";
ShareP_FUN.SF = "Carpeta de recursos compartidos";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Propiedades de usuario";
UP_FUN.FName = "Nombre";
UP_FUN.PWD = "Contrase�a";
UP_FUN.Reconfirm = "Confirmar contrase�a";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "Copia de seguridad de datos";
DB_FUN.SELJOB = "Seleccionar n�mero de trabajo";
DB_FUN.JOBNAME = "Nombre del trabajo";
DB_FUN.BType ="Tipo de copia de seguridad";
DB_FUN.Direction = "Direcci�n";
DB_FUN.WRTSL54GS = "Este WRTSL54GS";
DB_FUN.RD = "Dispositivo remoto";
DB_FUN.DAYS = "D�as";
DB_FUN.TIMES = "Horas";
DB_FUN.LOGIN = "Nombre de inicio de sesi�n";
DB_FUN.sunday = "&nbsp;Dom";
DB_FUN.Mon = "&nbsp;Lun"; 
DB_FUN.Tue = "&nbsp;Mar"; 
DB_FUN.Wed = "&nbsp;Mi� ";
DB_FUN.Thu = "&nbsp;Jue";
DB_FUN.Fri = "&nbsp;Vie";
DB_FUN.Sat = "&nbsp;S�b";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Lista de carpetas";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Borrado r�pido";
CMD.FullErase = "Borrado completo";
CMD.EraseDisk = "Formatear disco";
CMD.Refresh = "Actualizar";
CMD.Claim = "Reclamar";
CMD.SAVESET = "Guardar par�metros";
CMD.SafeRemove = "Extracci�n segura de disco";
CMD.CreateShare = "Crear recurso compartido";
CMD.ModifyShare = "Modificar recurso compartido";
CMD.SELPart = "Seleccionar partici�n";
CMD.Modify = "Modificar";
CMD.Delete = "Eliminar";
CMD.RO = ">> S�lo lectura";
CMD.RW = ">> Lectura/escritura";
CMD.RM = "<< Eliminar";
CMD.CANCELCHANGE = "Cancelar cambios";
CMD.CT = "Continuar";
CMD.CLOSE = "Cerrar";
CMD.CreateNewUser = "Crear nuevo usuario";
CMD.CreateNewGroup = "Crear nuevo grupo";
CMD.CreateNewShare = "Crear nuevo recurso compartido";
CMD.JG = ">> Unirse al grupo ";
CMD.SAP = "Examinar todos ";
CMD.SPS = "Especificar la carpeta que desea examinar";
CMD.UOL = " Subir un nivel ";
CMD.SP = "Seleccionar partici�n";
CMD.FSA = "Especificar la carpeta a la que desea acceder";
CMD.Claim = "Reclamar";
CMD.CL = "Borrar";
CMD.CANCEL = "Cancelar";
CMD.CGroup = "Crear grupo";
CMD.CUser = "Crear usuario";
CMD.MUser = "Modificar usuario";
CMD.NOPWD = "SIN CONTRASE�A";
CMD.DTE = "Eliminar esta entrada";
CMD.ALERT1 = "Renovando el disco, espere. ";
CMD.CREATE = " Crear";
CMD.UPFOLDER = "Volver a carpeta superior";
CMD.ALLFOLDER = "Todas las carpetas";
CMD.FORMAT = "Formato";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Activar";
OPT.item_Disable = "Desactivar";
OPT.item_ALLP = "Todas las particiones";
OPT.item_SF = "Especificar carpeta";
OPT.item_Everyday = "Todos los d�as";
OPT.item_opt1 = "De este WRTSL54GS a otro dispositivo";
OPT.item_opt2 = "De otro dispositivo a este WRTSL54GS"; 
OPT.item_opt3 = "El acceso requiere inicio de sesi�n.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "M�s...";
HELPMSG.DISK1 = "Muestra los detalles del disco conectado actualmente al router.";
HELPMSG.DISK2 = "Para borrar un disco, active la casilla de verificaci�n junto al nombre del disco.";
HELPMSG.SHARE1 = "Muestra detalles de los recursos compartidos ya creados.";
HELPMSG.SHARE2 = "Haga clic en el bot�n Crear nuevo recurso compartido para crear un nuevo recurso compartido.";
HELPMSG.AD1 = "Nombre de este router.";
HELPMSG.AD2 = "Nombre de los ordenadores en red.";
HELPMSG.AD3 = "Los usuarios se muestran en la tabla.";
HELPMSG.AD4 = "Para crear un nuevo usuario, haga clic en el bot�n Crear nuevo usuario.";
HELPMSG.AD5 = "Los grupos se muestran en la tabla.";
HELPMSG.AD6 = "Para crear un nuevo grupo, haga clic en el bot�n Crear nuevo grupo.";
HELPMSG.AD7 = "Introduzca el nombre del grupo. Puede tener una longitud m�xima de 12 caracteres.";
HELPMSG.MS1 = "Muestra el nombre que el adaptador de medios utilizar� para identificar el servidor.";
HELPMSG.MS2 = "Haga clic en este bot�n para examinar todas las particiones del disco USB.";
HELPMSG.MS3 = "Haga clic en este bot�n para seleccionar la carpeta o partici�n concreta que desea examinar.";
HELPMSG.CD1 = "Para crear una partici�n en el disco en blanco que se formatear� como FAT32.";
HELPMSG.ShareP1 = "Introduzca el nombre del recurso compartido.";
HELPMSG.ShareP2 = "Es la carpeta que contendr� este recurso compartido. Haga clic en Seleccionar partici�n para realizar una selecci�n de una lista de carpetas disponibles.";
HELPMSG.UP1 = "Introduzca el nombre de usuario. El nombre de usuario puede tener una longitud m�xima de 20 caracteres.";
HELPMSG.UP2 = "Introduzca la contrase�a. La contrase�a puede tener una longitud m�nima de 4 caracteres y m�xima de 8.";
HELPMSG.UP3 = "Vuelva a introducir la contrase�a para confirmarla.";
HELPMSG.UP4 = "Grupo";
HELPMSG.UP5 = "Seleccione el grupo en el que desea incluir a este usuario.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disco";
FUNST.Share="Recurso compartido";
FUNST.MS="Media Server";
FUNST.FTP = "Servidor FTP";

var NAS = new Object();
NAS.MSG1 = "Los par�metros de la cuenta se han aplicado correctamente. ";
NAS.MSG2 = "La cuenta %s ya existe. ";
NAS.MSG3 = "Error al aplicar los par�metros. ";
NAS.MSG4 = "El recurso compartido de exploraci�n se ha eliminado correctamente. ";
NAS.MSG5 = "Error al actualizar la base de datos de medios. ";
NAS.MSG6 = "Error al actualizar la base de datos de medios. No existe el recurso compartido. ";
NAS.MSG7 = "Error al actualizar la base de datos de medios. ";
NAS.MSG8 = "Base de datos actualizada correctamente. ";
NAS.MSG9 = "Error al actualizar la base de datos de medios. No existe partici�n. ";
NAS.MSG10 = "Base de datos actualizada correctamente. ";
NAS.MSG11 = "El recurso compartido de exploraci�n se ha a�adido correctamente. ";
NAS.MSG12 = "El nombre del recurso compartido %s est� reservado. Elija un nombre diferente. ";
NAS.MSG13 = "El recurso compartido %s se ha modificado correctamente. ";
NAS.MSG14 = "El recurso compartido %s se ha creado correctamente. ";
NAS.MSG15 = "Error al reclamar el disco %s: El disco '%s' no existe. ";
NAS.MSG16 = "Error al reclamar el disco: No ha especificado un nombre nuevo para el disco. ";
NAS.MSG17 = "El nombre de disco especificado, '%s', no es v�lido. ";
NAS.MSG18 = "El disco se ha reclamado correctamente. ";
NAS.MSG19 = "Error al reclamar el disco %s. Fallo en el intento de reclamaci�n. ";
NAS.MSG20 = "Error al eliminar el recurso compartido %s. El recurso compartido %s es un recurso compartido especial reservado para el uso por parte de la funcionalidad del controlador de dominio principal. No se puede eliminar por separado, pero si el controlador de dominio principal est� desactivado, se eliminar� autom�ticamente. ";
NAS.MSG21 = "El recurso compartido %s se ha eliminado correctamente. ";
NAS.MSG23 = "El recurso compartido %s se ha modificado correctamente. ";
NAS.MSG24 = "El recurso compartido %s se ha creado correctamente. ";
NAS.MSG25 = "El nombre del recurso compartido %s est� reservado. Elija un nombre diferente. ";
NAS.MSG30 = "Error al borrar discos: no se han especificado discos para borrarse. ";
NAS.MSG31 = "Error al borrar discos: sin memoria al intentar borrar discos. ";
NAS.MSG32 = "Error al borrar discos: no se puede borrar el disco '%s'. ";
NAS.MSG33 = "Error al borrar discos: sin memoria. ";
NAS.MSG34 = "Los discos solicitados se han borrado correctamente. ";
NAS.MSG35 = "No se han solicitado discos para borrarse, no se ha llevado a cabo ninguna acci�n. ";
NAS.MSG36 = "Error al borrar discos: sin memoria al intentar borrar discos. ";
NAS.MSG37 = "Error al borrar discos: no se han especificado discos para borrarse. ";
NAS.MSG38 = "Los discos solicitados se han borrado correctamente. ";
NAS.MSG39 = "No se han solicitado discos para borrarse, no se ha llevado a cabo ninguna acci�n. ";
NAS.MSG40 = "No se puede desconectar el disco '%s' de forma segura. ";
NAS.MSG41 = "El disco se ha desconectado correctamente. ";
NAS.MSG42 = "Las propiedades de acceso para el recurso compartido %s se han cambiado correctamente. ";
NAS.MSG43 = "Error al aplicar los par�metros de la cuenta. ";
NAS.MSG44 = "Los par�metros de la cuenta se han aplicado correctamente. ";
NAS.MSG45 = "Los valores introducidos no son v�lidos. Vuelva a intentarlo. ";
NAS.MSG46 = "Par�metros correctos. ";
NAS.MSG47 = "No se puede %s el dominio %s (error %s) y no se puede volver a unir al dominio %s (error %s), vuelve a pertenecer al grupo de trabajo %s. ";
NAS.MSG48 = "No se puede %s el dominio %s (error %s),  vuelve a pertenecer al dominio %s. ";
NAS.MSG49 = "join_workgroup_or_domain_error No se puede %s el dominio %s (error %s), vuelve a pertenecer al dominio %s. ";
NAS.MSG50 = "Ahora un miembro del dominio %s. ";
NAS.MSG51 = "Ahora un miembro del grupo de trabajo %s. ";
NAS.MSG52 = "Error al aplicar los par�metros. ";
NAS.MSG53 = "Uso compartido de FTP eliminado correctamente. ";
NAS.MSG54 = "El disco est� ocupado";










