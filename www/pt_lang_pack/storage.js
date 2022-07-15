/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (S� de leitura)";
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
DISK_FUN.Title = "Gest�o de discos";
DISK_FUN.Part1 = "Detalhe do disco";
DISK_FUN.Part2 = "Formatar disco";
DISK_FUN.Manufacture = "Disco";
DISK_FUN.Partition = "Parti��o";
DISK_FUN.FS = "Sistema de ficheiros";
DISK_FUN.TS = "Capacidade";
DISK_FUN.FreeS = "Espa�o livre";
DISK_FUN.Shares = "Partilhas";
DISK_FUN.SharesFd = "Pasta das partilhas";
DISK_FUN.CreateShare = "Criar partilha";
DISK_FUN.Remain = "N�o atribu�do";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "Detectar";
DISK_FUN.MSG1 = "O(s) disco(s) seleccionado(s) cont�m(�m) informa��es do servidor de impress�o.\n N�o pode limpar o(s) disco(s)";
DISK_FUN.MSG2 = "N�o pode limpar discos sem limpar outros discos que participam no mesmo conjunto de discos";
DISK_FUN.MSG3 = "N�o existem discos seleccionados para limpeza";
DISK_FUN.MSG4 = "A apagar o disco; aguarde!";
DISK_FUN.MSG5 = "N�o existem discos dispon�veis";
DISK_FUN.MSG6 = "O acesso de grupo de administradores n�o pode ser removido.";
DISK_FUN.MSG7 = "O dispositivo USB ligado n�o � suportado.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "N�o existem discos dispon�veis.";
DISK_FUN.AP = "Todas as parti��es";
DISK_FUN.ENTERNAME = "Introduza o nome de uma parti��o:";
DISK_FUN.WARNING = "Aviso:";
DISK_FUN.FORMATWARN1 = "A formata��o do disco pode demorar alguns minutos; n�o desligue";
DISK_FUN.FORMATWARN2 = "a alimenta��o nem prima o bot�o de reposi��o.";
DISK_FUN.FIRMVER = "Vers�o do firmware";
DISK_FUN.BACKUP = "C�pia de seguran�a";
DISK_FUN.WARNING1 = "AVISO!! A limpeza dos discos causar� a perda irrevers�vel dos dados. Pretende continuar? ";
DISK_FUN.FR = "Pasta";
DISK_FUN.ENTERINTOF= "Entrar na pasta";
DISK_FUN.SELECT = "Seleccionar";
DISK_FUN.MPATH = " Esta localiza��o n�o existe.";
DISK_FUN.CPATH = "Esta localiza��o da pasta partilhada n�o existe.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nome a apresentar";
SHARE_FUN.ShareAccess = "Acesso � partilha";
SHARE_FUN.Title = "Gest�o de partilhas";
SHARE_FUN.NOTEXIST ="N�o existe!";
SHARE_FUN.MSG1 = "N�o existem partilhas definidas.";
SHARE_FUN.MSG2 = "O n�mero de partilhas excede o limite! � necess�rio eliminar uma primeiro.";
SHARE_FUN.Properties = "Editar";
SHARE_FUN.FF = "Pasta de FTP";
SHARE_FUN.MSF = "Pasta de multim�dia";
SHARE_FUN.SF = "Pasta partilhada";
SHARE_FUN.DN = "Nome a apresentar";
SHARE_FUN.patition = "Parti��o";
SHARE_FUN.location = "Localiza��o";
SHARE_FUN.NF = "Nova pasta";
SHARE_FUN.CF = "Pasta actual";
SHARE_FUN.AF="Pasta de acesso";
SHARE_FUN.AS = "Acesso";
SHARE_FUN.AG = "Grupos dispon�veis";
SHARE_FUN.GWA = "Grupos com acesso";
SHARE_FUN.GN = "Nome do grupo";
SHARE_FUN.description = "Descri��o";
SHARE_FUN.rw = "leitura e escrita";
SHARE_FUN.ro = "s� de leitura";
SHARE_FUN.NAME ="Nome";
SHARE_FUN.FN = "Nome completo";
SHARE_FUN.PW = "Palavra-passe";
SHARE_FUN.CP = "Confirmar palavra-passe";
SHARE_FUN.GM = "Membro do grupo";
SHARE_FUN.AD = "Conta desactivada";
SHARE_FUN.SUMMARY="Resumo das pastas partilhadas";
SHARE_FUN.IP = "Endere�o IP do disco partilhado: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Grupo com acesso";
SA_FUN.OG = "Outro grupo";
SA_FUN.MSG1 = "O grupo admin n�o pode ser removido!";
SA_FUN.MSG2 = "O Nome do grupo j� existe!";
SA_FUN.FTP_Access ="Acesso ao FTP";
SA_FUN.Entire_Partition ="Partilhar a parti��o completa";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : NAS_Administration.asp  
        Notes        :  
--------------------------------------------------------------------------------------------------*/
var AD_FUN = new Object();
AD_FUN.admin = "admin";
AD_FUN.guest = "guest";
AD_FUN.MN = "&nbsp;Nome do computador:";
AD_FUN.WN = "&nbsp;Nome do grupo de trabalho:";
AD_FUN.MD = "&nbsp;Descri��o do computador:";
AD_FUN.APS = "&nbsp;Partilha de todas as parti��es:";
AD_FUN.UserName = "Nome de utilizador";
AD_FUN.FULLNAME = "Nome completo";
AD_FUN.GroupName = "Nome do grupo";
AD_FUN.Basic = "B�sica";
AD_FUN.UserM = "Gest�o de utilizadores";
AD_FUN.GroupM = "Gest�o de grupos";
AD_FUN.AnymsAcess="Acesso an�nimo";
AD_FUN.AnymsFTP="Acesso an�nimo ao FTP";
AD_FUN.AnymsDisk="Acesso an�nimo ao disco";
AD_FUN.readonly="Acesso ao disco s� de leitura";
AD_FUN.readwrite="Acesso de leitura e escrita ao disco";
AD_FUN.svrname="Nome do servidor";
AD_FUN.devname="Nome do dispositivo";
AD_FUN.SLIP="Endere�o IP da LAN do servidor";
AD_FUN.SWIP="Endere�o IP de Internet do servidor";
AD_FUN.MSG1 = "N�o existem utilizadores definidos.";
AD_FUN.MSG2 = "O utilizador admin n�o pode ser eliminado!";
AD_FUN.MSG3 = "Tem a certeza de que pretende eliminar este utilizador?";
AD_FUN.MSG4 = "Tem a certeza de que pretende eliminar este grupo?";
AD_FUN.MSG5 = "Foi atingido o n�mero m�ximo de utilizadores! Para adicionar outro utilizador, primeiro ter� de apagar um utilizador j� existente.";
AD_FUN.MSG6 = "Foi atingido o n�mero m�ximo de grupos! Para adicionar outro grupo, ter� de apagar primeiro um grupo existente.";
AD_FUN.MSG7 = "O Nome do grupo de trabalho n�o pode ficar em branco!!";
AD_FUN.MSG8 = "O nome do grupo de trabalho n�o pode ter mais de 15 caracteres!!";
AD_FUN.MSG9 = "O Nome do grupo de trabalho s� pode conter caracteres alfanum�ricos/h�fenes";
AD_FUN.MSG10 = "O Nome do grupo de trabalho tem de come�ar por uma letra";
AD_FUN.MSG11 = "Escolheu alterar o nome do computador. O mapeamento da rede existente ter� de ser efectuado novamente. \n Pretende continuar?";
AD_FUN.MSG12 = "O Nome do computador n�o pode ficar em branco!!";
AD_FUN.MSG13 = "O Nome do computador n�o pode ter mais de 15 caracteres!!";
AD_FUN.MSG14 = "O Nome do computador s� pode conter caracteres alfanum�ricos/h�fenes";
AD_FUN.MSG15 = "O Nome do computador tem de come�ar por uma letra"; 
AD_FUN.MSG16 = "O Nome de utilizador j� existe!";
AD_FUN.MSG17 = "O nome do utilizador apenas pode conter os seguintes caracteres: alfanum�ricos, h�fenes ou car�cter de sublinhado.";
AD_FUN.MSG18 = "O n�mero de grupos excede o limite! � necess�rio eliminar um primeiro.";
AD_FUN.MSG19 = "A confirma��o da palavra-passe n�o corresponde.";
AD_FUN.MSG20 = "A palavra-passe � inv�lida! (deve ter entre 4 e 8 caracteres)";
AD_FUN.MSG21 = "N�o � poss�vel mudar o nome do utilizador admin!";
AD_FUN.MSG22 = "N�o � poss�vel mudar o nome do utilizador guest!";
AD_FUN.MSG23 = "O nome de utilizador n�o pode estar vazio!";
AD_FUN.MSG24 = "Tem de introduzir o nome da conta!";
AD_FUN.MSG25 = "O nome da conta j� existe!";
AD_FUN.MSG26 = "Tem de introduzir uma palavra-passe!";
AD_FUN.MSG27 = "O n�mero de utilizadores excede o limite! � necess�rio eliminar um primeiro.";
AD_FUN.MSG28 = "Conta do utilizador";
AD_FUN.MSG29 = "O utilizador admin n�o pode ser removido! ";
AD_FUN.MSG30 = "O utilizador ";
AD_FUN.MSG31 = " n�o pode ser removido! ";
AD_FUN.MSG32 = "N�o s�o permitidos espa�os na Palavra-passe.";
AD_FUN.MSG33 = " O Nome a apresentar s� pode conter caracteres alfanum�ricos/h�fenes.";
AD_FUN.MSG34 = "Pretende eliminar o utilizador \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Pretende eliminar o grupo \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "O nome do dispositivo/servidor n�o pode estar em branco.";
AD_FUN.MSG39 = "O nome do dispositivo/servidor apenas pode conter caracteres alfanum�ricos/travess�es!";
AD_FUN.MSG40 = "O nome do dispositivo/servidor tem de come�ar por uma letra!";
AD_FUN.MSG41 = "O nome do router n�o pode estar em branco.";
AD_FUN.MSG42 = "O nome do router apenas pode conter caracteres alfanum�ricos e h�fenes.";
AD_FUN.MSG43 = "O nome do router tem de come�ar por uma letra.";
AD_FUN.MSG44 = "O nome completo e descri��o do utilizador apenas podem conter os seguintes caracteres: alfanum�ricos, espa�o, h�fenes ou car�cter de sublinhado.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : Group_Access.asp  
        Notes        : Click [Modify] command of Group Name 's properties on NAS_Administration.asp 
--------------------------------------------------------------------------------------------------*/
var GA_FUN = new Object();
GA_FUN.GroupProperties = "Propriedades do grupo";
GA_FUN.OU = "Outros utilizadores";
GA_FUN.UIG = "Utilizadores no grupo";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Media_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var MS_FUN = new Object();
MS_FUN.Title = "Servidor multim�dia UPnP";
MS_FUN.svrname = "Nome do servidor multim�dia";
MS_FUN.Setup = "Configura��o";
MS_FUN.DB = "Base de dados";
MS_FUN.ServerName = "Nome do servidor:";
MS_FUN.FR= "Pasta";
MS_FUN.SCAN = "Pesquisar";
MS_FUN.LASTSCAN = "Hora da �ltima pesquisa";
MS_FUN.AUTOSCAN = "Pesquisar automaticamente a cada";
MS_FUN.HOUR="Horas";
MS_FUN.MSG1 = "N�o existem partilhas de pesquisa definidas.";
MS_FUN.MSG2 = "O n�mero de partilhas de pesquisa excede o limite! � necess�rio eliminar uma primeiro.";
MS_FUN.MSG3 = "A pesquisa de todas as parti��es poder� demorar muito tempo a ser conclu�da. Tem a certeza de que pretende continuar?";
MS_FUN.MSG4 = "A pesquisar o disco; aguarde!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Lista de parti��es";
SP_FUN.ST = "Seleccionar";
SP_FUN.MSG1 = "Pasta da partilha adicionada com �xito.";
SP_FUN.MSG2 = "Pasta da partilha de FTP adicionada com �xito.";
SP_FUN.MSG3 = "Este caminho j� existe na lista de pesquisa! N�o pode ser adicionado duas vezes.";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : FTP Server 
        Webpage Name : FTP_Server.asp  
        Notes        : 
--------------------------------------------------------------------------------------------------*/
var FS_FUN = new Object();
FS_FUN.FS = "Servidor de FTP";
FS_FUN.svrname = "Nome do servidor de FTP";
FS_FUN.Share = "Partilha";
FS_FUN.EDIT = "Editar";
FS_FUN.MSG1 = "Actualmente, o acesso ao FTP n�o est� definido.";
FS_FUN.ACCESS = "Acesso";
FS_FUN.PO = "Porta de FTP:";
FS_FUN.FTP_CHARACTERSET = "Codifica��o:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chin�s Simplificado(GB18030)";
FS_FUN.BIG5="Chin�s Tradicional(Big5)";
FS_FUN.CP1258="Vietnamita(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Esta raiz n�o � permitida para criar a nova pasta!";
FS_FUN.ALERT2 = "Introduza um nome de pasta v�lido!";
FS_FUN.ALERT3 = "Introduza um nome de partilha v�lido.";
FS_FUN.ALERT4 = "O nome a apresentar j� existe na lista de partilhas!";
FS_FUN.ALERT5 = "Introduza uma localiza��o da partilha v�lida.";
FS_FUN.FTPFOLDER = "Pasta de FTP";
FS_FUN.DISPNAME = "Nome a apresentar";
FS_FUN.UNIQUE = "Tem de ser exclusivo.";
FS_FUN.PAR = "Parti��o";
FS_FUN.LOCA = "Localiza��o";
FS_FUN.NEWFOLDER = "Nova pasta";
FS_FUN.CURRENTFOLD = "Pasta actual:";
FS_FUN.ACCESS = "Acesso";
FS_FUN.AVAILGROUP =  "Grupos dispon�veis";
FS_FUN.GROUPACCESS  = "Grupos com acesso";
FS_FUN.INTERNET = "Acesso � Internet";
FS_FUN.SUMMARY = "Resumo de FTP";
FS_FUN.ALERT6 = "A porta de FTP n�o pode estar vazia! ";
FS_FUN.ALERT7 = "Seleccione a pasta da partilha de FTP! ";
FS_FUN.UNIQUE = " (Tem de ser exclusivo.) ";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Claim_Disk.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var CD_FUN = new Object();
CD_FUN.Title = "Reclamar disco";
CD_FUN.DISK = "Disco";
CD_FUN.MAM =  "Marca e modelo";
CD_FUN.PS = "Tamanho f�sico";
CD_FUN.NPN = "Nome da nova parti��o:";
CD_FUN.MSG1 = "AVISO!! A op��o Reclamar disco destruir� tudo o que existir neste disco.\nPretende continuar?";
CD_FUN.MSG2 = "AVISO: O nome da parti��o tem de estar em mai�sculas\n\n O nome do Disco '";
CD_FUN.MSG3 = "' ser� convertido em mai�sculas. Pretende continuar?";
CD_FUN.MSG4 = "O nome da parti��o s� pode conter caracteres alfanum�ricos/h�fenes/caracteres de sublinhado";
CD_FUN.MSG5 = "O nome do disco novo n�o pode ficar em branco";
CD_FUN.MSG6 = "AVISO: Os nomes de Discos FAT32 n�o podem ter mais de 11 caracteres\n\n O nome do Disco '";
CD_FUN.MSG7 = "' ser� truncado para 11 caracteres. Pretende continuar?";
CD_FUN.DISK_MSG = " n�o existe.\n";
CD_FUN.NODISKS = "N�o existem discos ligados";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "O nome do utilizador s� pode conter caracteres alfanum�ricos/h�fenes/caracteres de sublinhado";
GP_FUN.MSG2 = "O n�mero de grupos excede o limite! � necess�rio eliminar um primeiro.";
GP_FUN.MSG3 = "O grupo j� existe!";
GP_FUN.MSG4 = "O nome do grupo n�o pode estar vazio!";
GP_FUN.MSG5 = "O nome do grupo s� pode conter caracteres alfanum�ricos/h�fenes/caracteres de sublinhado";
GP_FUN.GA = "Conta do grupo";
GP_FUN.GN = "Nome do grupo";
GP_FUN.DES = "Descri��o";
GP_FUN.ACCESS = "Acesso";
GP_FUN.RNW = "leitura e escrita";
GP_FUN.RO = "s� de leitura";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share 
        Webpage Name : Share_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var ShareP_FUN = new Object();
ShareP_FUN.Title = "Propriedades da partilha";
ShareP_FUN.SF = "Pasta da partilha";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Administration 
        Webpage Name : User_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var UP_FUN = new Object();
UP_FUN.Title = "Propriedades do utilizador";
UP_FUN.FName = "Nome";
UP_FUN.PWD = "Palavra-passe";
UP_FUN.Reconfirm = "Introduza novamente para confirmar";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Backup 
        Webpage Name : Data_Backup.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var DB_FUN = new Object();
DB_FUN.Title = "C�pia de seguran�a dos dados";
DB_FUN.SELJOB = "Seleccionar n�mero do trabalho";
DB_FUN.JOBNAME = "Nome do trabalho";
DB_FUN.BType ="Tipo de c�pia de seguran�a";
DB_FUN.Direction = "Direc��o";
DB_FUN.WRTSL54GS = "Este WRTSL54GS";
DB_FUN.RD = "Dispositivo remoto";
DB_FUN.DAYS = "Dias";
DB_FUN.TIMES = "Horas";
DB_FUN.LOGIN = "Nome de in�cio de sess�o";
DB_FUN.sunday = "&nbsp;Dom";
DB_FUN.Mon = "&nbsp;Seg"; 
DB_FUN.Tue = "&nbsp;Ter"; 
DB_FUN.Wed = "&nbsp;Qua";
DB_FUN.Thu = "&nbsp;Qui";
DB_FUN.Fri = "&nbsp;Sex";
DB_FUN.Sat = "&nbsp;S�b";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ?
        Webpage Name : Scan_Folder.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var SF_FUN = new Object();
SF_FUN.FL = "Lista de pastas";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : command value   
--------------------------------------------------------------------------------------------------*/
var CMD = new Object();
CMD.QuickErase = "Elimina��o r�pida";
CMD.FullErase = "Elimina��o completa";
CMD.EraseDisk = "Formatar disco";
CMD.Refresh = "Actualizar";
CMD.Claim = "Reclamar";
CMD.SAVESET = "Guardar defini��es";
CMD.SafeRemove = "Remover disco com seguran�a";
CMD.CreateShare = "Criar partilha";
CMD.ModifyShare = "Modificar partilha";
CMD.SELPart = "Seleccionar parti��o";
CMD.Modify = "Modificar";
CMD.Delete = "Eliminar";
CMD.RO = ">> S� de leitura";
CMD.RW = ">> Leitura/escrita";
CMD.RM = "<< Remover";
CMD.CANCELCHANGE = "Cancelar altera��es";
CMD.CT = "Continuar";
CMD.CLOSE = "Fechar";
CMD.CreateNewUser = "Criar novo utilizador";
CMD.CreateNewGroup = "Criar novo grupo";
CMD.CreateNewShare = "Criar nova partilha";
CMD.JG = ">> Aderir ao grupo ";
CMD.SAP = "Pesquisar tudo ";
CMD.SPS = "Especificar pasta para pesquisa";
CMD.UOL = " Um n�vel acima ";
CMD.SP = "Seleccionar parti��o";
CMD.FSA = "Especificar pasta para acesso";
CMD.Claim = "Reclamar";
CMD.CL = "Limpar";
CMD.CANCEL = "Cancelar";
CMD.CGroup = "Criar grupo";
CMD.CUser = "Criar utilizador";
CMD.MUser = "Modificar utilizador";
CMD.NOPWD = "Nenhuma palavra-passe";
CMD.DTE = "Eliminar esta entrada";
CMD.ALERT1 = "A renovar o disco; aguarde! ";
CMD.CREATE = "Criar";
CMD.UPFOLDER = "Regressar � pasta superior";
CMD.ALLFOLDER = "Todas as pastas";
CMD.FORMAT = "Formatar";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Option value   
--------------------------------------------------------------------------------------------------*/
var OPT = new Object();
OPT.item_Enable = "Activar";
OPT.item_Disable = "Desactivar";
OPT.item_ALLP = "Todas as parti��es";
OPT.item_SF = "Especificar pasta";
OPT.item_Everyday = "Todos os dias";
OPT.item_opt1 = "A partir deste WRTSL54GS para outro dispositivo";
OPT.item_opt2 = "A partir de outro dispositivo para este WRTSL54GS"; 
OPT.item_opt3 = "O acesso requer o in�cio de sess�o";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Mais...";
HELPMSG.DISK1 = "Apresenta os detalhes do disco actualmente ligado ao router.";
HELPMSG.DISK2 = "Para apagar um disco, clique na caixa de verifica��o junto ao nome do disco.";
HELPMSG.SHARE1 = "Apresenta detalhes das Partilhas criadas actualmente.";
HELPMSG.SHARE2 = "Clique no bot�o Criar nova partilha para criar uma nova partilha.";
HELPMSG.AD1 = "O nome deste router.";
HELPMSG.AD2 = "O nome dos computadores da rede.";
HELPMSG.AD3 = "Os utilizadores s�o listados na tabela.";
HELPMSG.AD4 = "Para criar um novo utilizador, clique no bot�o Criar novo utilizador.";
HELPMSG.AD5 = "Os grupos s�o listados na tabela.";
HELPMSG.AD6 = "Para criar um novo grupo, clique no bot�o Criar novo grupo.";
HELPMSG.AD7 = "Introduza o nome do grupo. O nome do grupo pode ter at� 12 caracteres";
HELPMSG.MS1 = "Apresenta o nome que o adaptador multim�dia utilizar� para identificar o servidor.";
HELPMSG.MS2 = "Clique neste bot�o para pesquisar todas as parti��es do disco USB.";
HELPMSG.MS3 = "Clique neste bot�o para seleccionar uma pasta ou parti��o espec�fica para pesquisar.";
HELPMSG.CD1 = "Para criar uma parti��o no disco em branco que ser� formatado como FAT32.";
HELPMSG.ShareP1 = "Introduza o nome da partilha.";
HELPMSG.ShareP2 = "Esta � a pasta que ir� conter a partilha. Clique em Seleccionar parti��o para escolher a partir de uma lista de pastas dispon�veis.";
HELPMSG.UP1 = "Introduza o nome de utilizador. O nome de utilizador pode ter at� 20 caracteres.";
HELPMSG.UP2 = "Introduza a palavra-passe. A palavra-passe pode ter entre 4 e 8 caracteres.";
HELPMSG.UP3 = "Introduza novamente a palavra-passe para confirmar.";
HELPMSG.UP4 = "Grupo";
HELPMSG.UP5 = "Seleccione o grupo onde pretende colocar este utilizador.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disco";
FUNST.Share="Partilha";
FUNST.MS="Servidor multim�dia";
FUNST.FTP = "Servidor de FTP";

var NAS = new Object();
NAS.MSG1 = "As defini��es da conta foram aplicadas com �xito. ";
NAS.MSG2 = "A conta %s j� existe! ";
NAS.MSG3 = "Falha na aplica��o das defini��es! ";
NAS.MSG4 = "A partilha de pesquisa foi eliminada com �xito. ";
NAS.MSG5 = "Falha na actualiza��o da base de dados de multim�dia! ";
NAS.MSG6 = "Falha na actualiza��o da base de dados de multim�dia! A partilha n�o existe. ";
NAS.MSG7 = "Falha na actualiza��o da base de dados de multim�dia! ";
NAS.MSG8 = "A base de dados foi actualizada com �xito. ";
NAS.MSG9 = "Falha na actualiza��o da base de dados de multim�dia. N�o existe nenhuma parti��o! ";
NAS.MSG10 = "A base de dados foi actualizada com �xito. ";
NAS.MSG11 = "A partilha de pesquisa foi adicionada com �xito. ";
NAS.MSG12 = "O nome da partilha %s � reservado. Escolha um nome diferente. ";
NAS.MSG13 = "A partilha %s foi modificada com �xito. ";
NAS.MSG14 = "A partilha %s foi criada com �xito. ";
NAS.MSG15 = "Erro ao reclamar o disco %s: O disco '%s' n�o existe. ";
NAS.MSG16 = "Erro ao reclamar o disco: N�o especificou um novo nome para o disco. ";
NAS.MSG17 = "O nome do disco especificado, '%s', n�o � v�lido. ";
NAS.MSG18 = "O disco foi reclamado com �xito. ";
NAS.MSG19 = "Erro ao reclamar o disco %s: A tentativa de reclama��o falhou. ";
NAS.MSG20 = "Erro ao eliminar a partilha %s: A partilha %s � uma partilha especial, reservada para ser utilizada pela funcionalidade de Controlador de dom�nio prim�rio. N�o pode ser eliminada separadamente, mas se o Controlador de dom�nio prim�rio estiver desactivado, ser� automaticamente removida. ";
NAS.MSG21 = "A partilha %s foi eliminada com �xito. ";
NAS.MSG23 = "A partilha %s foi modificada com �xito. ";
NAS.MSG24 = "A partilha %s foi criada com �xito. ";
NAS.MSG25 = "O nome da partilha %s � reservado. Escolha um nome diferente. ";
NAS.MSG30 = "Erro ao apagar os discos: N�o foram especificados discos para apagar. ";
NAS.MSG31 = "Erro ao apagar os discos: Mem�ria esgotada ao tentar apagar os discos. ";
NAS.MSG32 = "Erro ao apagar os discos: N�o � poss�vel apagar o disco '%s'. ";
NAS.MSG33 = "Erro ao apagar os discos: Mem�ria esgotada. ";
NAS.MSG34 = "Todos os discos pedidos foram apagados com �xito. ";
NAS.MSG35 = "N�o foi pedido que fossem apagados quaisquer discos, por isso, n�o foi efectuada nenhuma ac��o. ";
NAS.MSG36 = "Erro ao apagar os discos: Mem�ria esgotada ao tentar apagar os discos. ";
NAS.MSG37 = "Erro ao apagar os discos: N�o foram especificados discos para apagar. ";
NAS.MSG38 = "Todos os discos pedidos foram apagados com �xito. ";
NAS.MSG39 = "N�o foi pedido que fossem apagados quaisquer discos, por isso, n�o foi efectuada nenhuma ac��o. ";
NAS.MSG40 = "N�o � poss�vel desligar o disco '%s' com seguran�a. ";
NAS.MSG41 = "O disco foi desligado com �xito. ";
NAS.MSG42 = "As propriedades de acesso da partilha %s foram alteradas com �xito. ";
NAS.MSG43 = "Falha na aplica��o das defini��es da conta! ";
NAS.MSG44 = "As defini��es da conta foram aplicadas com �xito. ";
NAS.MSG45 = "Os valores introduzidos s�o inv�lidos. Tente novamente. ";
NAS.MSG46 = "As defini��es tiveram �xito. ";
NAS.MSG47 = "N�o foi poss�vel %s o dom�nio %s (foi obtido o erro %s) e n�o foi poss�vel aderir novamente ao dom�nio %s (foi obtido o erro %s); a associa��o ao grupo de trabalho %s foi revertida. ";
NAS.MSG48 = "N�o foi poss�vel %s o dom�nio %s (foi obtido o erro %s); a associa��o ao dom�nio %s foi revertida. ";
NAS.MSG49 = "join_workgroup_or_domain_error N�o foi poss�vel %s o dom�nio %s (foi obtido o erro %s); a associa��o ao dom�nio %s foi revertida. ";
NAS.MSG50 = "� agora membro do dom�nio %s. ";
NAS.MSG51 = "� agora membro do grupo de trabalho %s. ";
NAS.MSG52 = "Falha na aplica��o das defini��es! ";
NAS.MSG53 = "A partilha de FTP foi eliminada com �xito. ";
NAS.MSG54 = "O disco est� ocupado!";










