/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk
        Webpage Name : Disk_Management.asp     
        Notes        : Change in FW    
--------------------------------------------------------------------------------------------------*/
var FS = new Object();
FS.type1="FAT";
FS.type2="NTFS (Só de leitura)";
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
DISK_FUN.Title = "Gestão de discos";
DISK_FUN.Part1 = "Detalhe do disco";
DISK_FUN.Part2 = "Formatar disco";
DISK_FUN.Manufacture = "Disco";
DISK_FUN.Partition = "Partição";
DISK_FUN.FS = "Sistema de ficheiros";
DISK_FUN.TS = "Capacidade";
DISK_FUN.FreeS = "Espaço livre";
DISK_FUN.Shares = "Partilhas";
DISK_FUN.SharesFd = "Pasta das partilhas";
DISK_FUN.CreateShare = "Criar partilha";
DISK_FUN.Remain = "Não atribuído";
DISK_FUN.TotalSize = "Total";
DISK_FUN.Detecting = "Detectar";
DISK_FUN.MSG1 = "O(s) disco(s) seleccionado(s) contém(êm) informações do servidor de impressão.\n Não pode limpar o(s) disco(s)";
DISK_FUN.MSG2 = "Não pode limpar discos sem limpar outros discos que participam no mesmo conjunto de discos";
DISK_FUN.MSG3 = "Não existem discos seleccionados para limpeza";
DISK_FUN.MSG4 = "A apagar o disco; aguarde!";
DISK_FUN.MSG5 = "Não existem discos disponíveis";
DISK_FUN.MSG6 = "O acesso de grupo de administradores não pode ser removido.";
DISK_FUN.MSG7 = "O dispositivo USB ligado não é suportado.";
//DISK_FUN.NoDisk1 = "There are currently no available disks.";
DISK_FUN.NoDisk2 = "Não existem discos disponíveis.";
DISK_FUN.AP = "Todas as partições";
DISK_FUN.ENTERNAME = "Introduza o nome de uma partição:";
DISK_FUN.WARNING = "Aviso:";
DISK_FUN.FORMATWARN1 = "A formatação do disco pode demorar alguns minutos; não desligue";
DISK_FUN.FORMATWARN2 = "a alimentação nem prima o botão de reposição.";
DISK_FUN.FIRMVER = "Versão do firmware";
DISK_FUN.BACKUP = "Cópia de segurança";
DISK_FUN.WARNING1 = "AVISO!! A limpeza dos discos causará a perda irreversível dos dados. Pretende continuar? ";
DISK_FUN.FR = "Pasta";
DISK_FUN.ENTERINTOF= "Entrar na pasta";
DISK_FUN.SELECT = "Seleccionar";
DISK_FUN.MPATH = " Esta localização não existe.";
DISK_FUN.CPATH = "Esta localização da pasta partilhada não existe.";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Management.asp     
        Notes        :   
--------------------------------------------------------------------------------------------------*/
var SHARE_FUN = new Object();
SHARE_FUN.ShareName = "Nome a apresentar";
SHARE_FUN.ShareAccess = "Acesso à partilha";
SHARE_FUN.Title = "Gestão de partilhas";
SHARE_FUN.NOTEXIST ="Não existe!";
SHARE_FUN.MSG1 = "Não existem partilhas definidas.";
SHARE_FUN.MSG2 = "O número de partilhas excede o limite! É necessário eliminar uma primeiro.";
SHARE_FUN.Properties = "Editar";
SHARE_FUN.FF = "Pasta de FTP";
SHARE_FUN.MSF = "Pasta de multimédia";
SHARE_FUN.SF = "Pasta partilhada";
SHARE_FUN.DN = "Nome a apresentar";
SHARE_FUN.patition = "Partição";
SHARE_FUN.location = "Localização";
SHARE_FUN.NF = "Nova pasta";
SHARE_FUN.CF = "Pasta actual";
SHARE_FUN.AF="Pasta de acesso";
SHARE_FUN.AS = "Acesso";
SHARE_FUN.AG = "Grupos disponíveis";
SHARE_FUN.GWA = "Grupos com acesso";
SHARE_FUN.GN = "Nome do grupo";
SHARE_FUN.description = "Descrição";
SHARE_FUN.rw = "leitura e escrita";
SHARE_FUN.ro = "só de leitura";
SHARE_FUN.NAME ="Nome";
SHARE_FUN.FN = "Nome completo";
SHARE_FUN.PW = "Palavra-passe";
SHARE_FUN.CP = "Confirmar palavra-passe";
SHARE_FUN.GM = "Membro do grupo";
SHARE_FUN.AD = "Conta desactivada";
SHARE_FUN.SUMMARY="Resumo das pastas partilhadas";
SHARE_FUN.IP = "Endereço IP do disco partilhado: ";


/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Share
        Webpage Name : Share_Access.asp
        Notes        : Click [Share Access] command of Modify on Share_Management.asp
--------------------------------------------------------------------------------------------------*/
var SA_FUN = new Object();
SA_FUN.GWA = "Grupo com acesso";
SA_FUN.OG = "Outro grupo";
SA_FUN.MSG1 = "O grupo admin não pode ser removido!";
SA_FUN.MSG2 = "O Nome do grupo já existe!";
SA_FUN.FTP_Access ="Acesso ao FTP";
SA_FUN.Entire_Partition ="Partilhar a partição completa";
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
AD_FUN.MD = "&nbsp;Descrição do computador:";
AD_FUN.APS = "&nbsp;Partilha de todas as partições:";
AD_FUN.UserName = "Nome de utilizador";
AD_FUN.FULLNAME = "Nome completo";
AD_FUN.GroupName = "Nome do grupo";
AD_FUN.Basic = "Básica";
AD_FUN.UserM = "Gestão de utilizadores";
AD_FUN.GroupM = "Gestão de grupos";
AD_FUN.AnymsAcess="Acesso anónimo";
AD_FUN.AnymsFTP="Acesso anónimo ao FTP";
AD_FUN.AnymsDisk="Acesso anónimo ao disco";
AD_FUN.readonly="Acesso ao disco só de leitura";
AD_FUN.readwrite="Acesso de leitura e escrita ao disco";
AD_FUN.svrname="Nome do servidor";
AD_FUN.devname="Nome do dispositivo";
AD_FUN.SLIP="Endereço IP da LAN do servidor";
AD_FUN.SWIP="Endereço IP de Internet do servidor";
AD_FUN.MSG1 = "Não existem utilizadores definidos.";
AD_FUN.MSG2 = "O utilizador admin não pode ser eliminado!";
AD_FUN.MSG3 = "Tem a certeza de que pretende eliminar este utilizador?";
AD_FUN.MSG4 = "Tem a certeza de que pretende eliminar este grupo?";
AD_FUN.MSG5 = "Foi atingido o número máximo de utilizadores! Para adicionar outro utilizador, primeiro terá de apagar um utilizador já existente.";
AD_FUN.MSG6 = "Foi atingido o número máximo de grupos! Para adicionar outro grupo, terá de apagar primeiro um grupo existente.";
AD_FUN.MSG7 = "O Nome do grupo de trabalho não pode ficar em branco!!";
AD_FUN.MSG8 = "O nome do grupo de trabalho não pode ter mais de 15 caracteres!!";
AD_FUN.MSG9 = "O Nome do grupo de trabalho só pode conter caracteres alfanuméricos/hífenes";
AD_FUN.MSG10 = "O Nome do grupo de trabalho tem de começar por uma letra";
AD_FUN.MSG11 = "Escolheu alterar o nome do computador. O mapeamento da rede existente terá de ser efectuado novamente. \n Pretende continuar?";
AD_FUN.MSG12 = "O Nome do computador não pode ficar em branco!!";
AD_FUN.MSG13 = "O Nome do computador não pode ter mais de 15 caracteres!!";
AD_FUN.MSG14 = "O Nome do computador só pode conter caracteres alfanuméricos/hífenes";
AD_FUN.MSG15 = "O Nome do computador tem de começar por uma letra"; 
AD_FUN.MSG16 = "O Nome de utilizador já existe!";
AD_FUN.MSG17 = "O nome do utilizador apenas pode conter os seguintes caracteres: alfanuméricos, hífenes ou carácter de sublinhado.";
AD_FUN.MSG18 = "O número de grupos excede o limite! É necessário eliminar um primeiro.";
AD_FUN.MSG19 = "A confirmação da palavra-passe não corresponde.";
AD_FUN.MSG20 = "A palavra-passe é inválida! (deve ter entre 4 e 8 caracteres)";
AD_FUN.MSG21 = "Não é possível mudar o nome do utilizador admin!";
AD_FUN.MSG22 = "Não é possível mudar o nome do utilizador guest!";
AD_FUN.MSG23 = "O nome de utilizador não pode estar vazio!";
AD_FUN.MSG24 = "Tem de introduzir o nome da conta!";
AD_FUN.MSG25 = "O nome da conta já existe!";
AD_FUN.MSG26 = "Tem de introduzir uma palavra-passe!";
AD_FUN.MSG27 = "O número de utilizadores excede o limite! É necessário eliminar um primeiro.";
AD_FUN.MSG28 = "Conta do utilizador";
AD_FUN.MSG29 = "O utilizador admin não pode ser removido! ";
AD_FUN.MSG30 = "O utilizador ";
AD_FUN.MSG31 = " não pode ser removido! ";
AD_FUN.MSG32 = "Não são permitidos espaços na Palavra-passe.";
AD_FUN.MSG33 = " O Nome a apresentar só pode conter caracteres alfanuméricos/hífenes.";
AD_FUN.MSG34 = "Pretende eliminar o utilizador \"";
AD_FUN.MSG35 = "\"?";
AD_FUN.MSG36 = "Pretende eliminar o grupo \"";
AD_FUN.MSG37 = "\"?";
AD_FUN.MSG38 = "O nome do dispositivo/servidor não pode estar em branco.";
AD_FUN.MSG39 = "O nome do dispositivo/servidor apenas pode conter caracteres alfanuméricos/travessões!";
AD_FUN.MSG40 = "O nome do dispositivo/servidor tem de começar por uma letra!";
AD_FUN.MSG41 = "O nome do router não pode estar em branco.";
AD_FUN.MSG42 = "O nome do router apenas pode conter caracteres alfanuméricos e hífenes.";
AD_FUN.MSG43 = "O nome do router tem de começar por uma letra.";
AD_FUN.MSG44 = "O nome completo e descrição do utilizador apenas podem conter os seguintes caracteres: alfanuméricos, espaço, hífenes ou carácter de sublinhado.";
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
MS_FUN.Title = "Servidor multimédia UPnP";
MS_FUN.svrname = "Nome do servidor multimédia";
MS_FUN.Setup = "Configuração";
MS_FUN.DB = "Base de dados";
MS_FUN.ServerName = "Nome do servidor:";
MS_FUN.FR= "Pasta";
MS_FUN.SCAN = "Pesquisar";
MS_FUN.LASTSCAN = "Hora da última pesquisa";
MS_FUN.AUTOSCAN = "Pesquisar automaticamente a cada";
MS_FUN.HOUR="Horas";
MS_FUN.MSG1 = "Não existem partilhas de pesquisa definidas.";
MS_FUN.MSG2 = "O número de partilhas de pesquisa excede o limite! É necessário eliminar uma primeiro.";
MS_FUN.MSG3 = "A pesquisa de todas as partições poderá demorar muito tempo a ser concluída. Tem a certeza de que pretende continuar?";
MS_FUN.MSG4 = "A pesquisar o disco; aguarde!";

/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Media Server 
        Webpage Name : Scan_Partition.asp  
        Notes        : Click [Select Partition to Scan] command on Media_Server.asp 
--------------------------------------------------------------------------------------------------*/
var SP_FUN = new Object();
SP_FUN.PL = "Lista de partições";
SP_FUN.ST = "Seleccionar";
SP_FUN.MSG1 = "Pasta da partilha adicionada com êxito.";
SP_FUN.MSG2 = "Pasta da partilha de FTP adicionada com êxito.";
SP_FUN.MSG3 = "Este caminho já existe na lista de pesquisa! Não pode ser adicionado duas vezes.";
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
FS_FUN.MSG1 = "Actualmente, o acesso ao FTP não está definido.";
FS_FUN.ACCESS = "Acesso";
FS_FUN.PO = "Porta de FTP:";
FS_FUN.FTP_CHARACTERSET = "Codificação:";
FS_FUN.UNICODE="Unicode(UTF-8)";
FS_FUN.GB18030="Chinês Simplificado(GB18030)";
FS_FUN.BIG5="Chinês Tradicional(Big5)";
FS_FUN.CP1258="Vietnamita(CP1258)";
FS_FUN.ISO8859_1="ISO8859_1";
FS_FUN.ALERT1 = "Esta raiz não é permitida para criar a nova pasta!";
FS_FUN.ALERT2 = "Introduza um nome de pasta válido!";
FS_FUN.ALERT3 = "Introduza um nome de partilha válido.";
FS_FUN.ALERT4 = "O nome a apresentar já existe na lista de partilhas!";
FS_FUN.ALERT5 = "Introduza uma localização da partilha válida.";
FS_FUN.FTPFOLDER = "Pasta de FTP";
FS_FUN.DISPNAME = "Nome a apresentar";
FS_FUN.UNIQUE = "Tem de ser exclusivo.";
FS_FUN.PAR = "Partição";
FS_FUN.LOCA = "Localização";
FS_FUN.NEWFOLDER = "Nova pasta";
FS_FUN.CURRENTFOLD = "Pasta actual:";
FS_FUN.ACCESS = "Acesso";
FS_FUN.AVAILGROUP =  "Grupos disponíveis";
FS_FUN.GROUPACCESS  = "Grupos com acesso";
FS_FUN.INTERNET = "Acesso à Internet";
FS_FUN.SUMMARY = "Resumo de FTP";
FS_FUN.ALERT6 = "A porta de FTP não pode estar vazia! ";
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
CD_FUN.PS = "Tamanho físico";
CD_FUN.NPN = "Nome da nova partição:";
CD_FUN.MSG1 = "AVISO!! A opção Reclamar disco destruirá tudo o que existir neste disco.\nPretende continuar?";
CD_FUN.MSG2 = "AVISO: O nome da partição tem de estar em maiúsculas\n\n O nome do Disco '";
CD_FUN.MSG3 = "' será convertido em maiúsculas. Pretende continuar?";
CD_FUN.MSG4 = "O nome da partição só pode conter caracteres alfanuméricos/hífenes/caracteres de sublinhado";
CD_FUN.MSG5 = "O nome do disco novo não pode ficar em branco";
CD_FUN.MSG6 = "AVISO: Os nomes de Discos FAT32 não podem ter mais de 11 caracteres\n\n O nome do Disco '";
CD_FUN.MSG7 = "' será truncado para 11 caracteres. Pretende continuar?";
CD_FUN.DISK_MSG = " não existe.\n";
CD_FUN.NODISKS = "Não existem discos ligados";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : ? 
        Webpage Name : Group_Properties.asp  
        Notes        : ?
--------------------------------------------------------------------------------------------------*/
var GP_FUN = new Object();
GP_FUN.MSG1 = "O nome do utilizador só pode conter caracteres alfanuméricos/hífenes/caracteres de sublinhado";
GP_FUN.MSG2 = "O número de grupos excede o limite! É necessário eliminar um primeiro.";
GP_FUN.MSG3 = "O grupo já existe!";
GP_FUN.MSG4 = "O nome do grupo não pode estar vazio!";
GP_FUN.MSG5 = "O nome do grupo só pode conter caracteres alfanuméricos/hífenes/caracteres de sublinhado";
GP_FUN.GA = "Conta do grupo";
GP_FUN.GN = "Nome do grupo";
GP_FUN.DES = "Descrição";
GP_FUN.ACCESS = "Acesso";
GP_FUN.RNW = "leitura e escrita";
GP_FUN.RO = "só de leitura";
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
DB_FUN.Title = "Cópia de segurança dos dados";
DB_FUN.SELJOB = "Seleccionar número do trabalho";
DB_FUN.JOBNAME = "Nome do trabalho";
DB_FUN.BType ="Tipo de cópia de segurança";
DB_FUN.Direction = "Direcção";
DB_FUN.WRTSL54GS = "Este WRTSL54GS";
DB_FUN.RD = "Dispositivo remoto";
DB_FUN.DAYS = "Dias";
DB_FUN.TIMES = "Horas";
DB_FUN.LOGIN = "Nome de início de sessão";
DB_FUN.sunday = "&nbsp;Dom";
DB_FUN.Mon = "&nbsp;Seg"; 
DB_FUN.Tue = "&nbsp;Ter"; 
DB_FUN.Wed = "&nbsp;Qua";
DB_FUN.Thu = "&nbsp;Qui";
DB_FUN.Fri = "&nbsp;Sex";
DB_FUN.Sat = "&nbsp;Sáb";
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
CMD.QuickErase = "Eliminação rápida";
CMD.FullErase = "Eliminação completa";
CMD.EraseDisk = "Formatar disco";
CMD.Refresh = "Actualizar";
CMD.Claim = "Reclamar";
CMD.SAVESET = "Guardar definições";
CMD.SafeRemove = "Remover disco com segurança";
CMD.CreateShare = "Criar partilha";
CMD.ModifyShare = "Modificar partilha";
CMD.SELPart = "Seleccionar partição";
CMD.Modify = "Modificar";
CMD.Delete = "Eliminar";
CMD.RO = ">> Só de leitura";
CMD.RW = ">> Leitura/escrita";
CMD.RM = "<< Remover";
CMD.CANCELCHANGE = "Cancelar alterações";
CMD.CT = "Continuar";
CMD.CLOSE = "Fechar";
CMD.CreateNewUser = "Criar novo utilizador";
CMD.CreateNewGroup = "Criar novo grupo";
CMD.CreateNewShare = "Criar nova partilha";
CMD.JG = ">> Aderir ao grupo ";
CMD.SAP = "Pesquisar tudo ";
CMD.SPS = "Especificar pasta para pesquisa";
CMD.UOL = " Um nível acima ";
CMD.SP = "Seleccionar partição";
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
CMD.UPFOLDER = "Regressar à pasta superior";
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
OPT.item_ALLP = "Todas as partições";
OPT.item_SF = "Especificar pasta";
OPT.item_Everyday = "Todos os dias";
OPT.item_opt1 = "A partir deste WRTSL54GS para outro dispositivo";
OPT.item_opt2 = "A partir de outro dispositivo para este WRTSL54GS"; 
OPT.item_opt3 = "O acesso requer o início de sessão";
/*--------------------------------------------------------------------------------------------------
        Group Name   : Storage
        SubFun Name  : Disk , Share , Administration , Media Server , FTP Server
        Webpage Name : All *.asp     
        Notes        : Help descript   
--------------------------------------------------------------------------------------------------*/
var HELPMSG = new Object();
HELPMSG.MORE = "Mais...";
HELPMSG.DISK1 = "Apresenta os detalhes do disco actualmente ligado ao router.";
HELPMSG.DISK2 = "Para apagar um disco, clique na caixa de verificação junto ao nome do disco.";
HELPMSG.SHARE1 = "Apresenta detalhes das Partilhas criadas actualmente.";
HELPMSG.SHARE2 = "Clique no botão Criar nova partilha para criar uma nova partilha.";
HELPMSG.AD1 = "O nome deste router.";
HELPMSG.AD2 = "O nome dos computadores da rede.";
HELPMSG.AD3 = "Os utilizadores são listados na tabela.";
HELPMSG.AD4 = "Para criar um novo utilizador, clique no botão Criar novo utilizador.";
HELPMSG.AD5 = "Os grupos são listados na tabela.";
HELPMSG.AD6 = "Para criar um novo grupo, clique no botão Criar novo grupo.";
HELPMSG.AD7 = "Introduza o nome do grupo. O nome do grupo pode ter até 12 caracteres";
HELPMSG.MS1 = "Apresenta o nome que o adaptador multimédia utilizará para identificar o servidor.";
HELPMSG.MS2 = "Clique neste botão para pesquisar todas as partições do disco USB.";
HELPMSG.MS3 = "Clique neste botão para seleccionar uma pasta ou partição específica para pesquisar.";
HELPMSG.CD1 = "Para criar uma partição no disco em branco que será formatado como FAT32.";
HELPMSG.ShareP1 = "Introduza o nome da partilha.";
HELPMSG.ShareP2 = "Esta é a pasta que irá conter a partilha. Clique em Seleccionar partição para escolher a partir de uma lista de pastas disponíveis.";
HELPMSG.UP1 = "Introduza o nome de utilizador. O nome de utilizador pode ter até 20 caracteres.";
HELPMSG.UP2 = "Introduza a palavra-passe. A palavra-passe pode ter entre 4 e 8 caracteres.";
HELPMSG.UP3 = "Introduza novamente a palavra-passe para confirmar.";
HELPMSG.UP4 = "Grupo";
HELPMSG.UP5 = "Seleccione o grupo onde pretende colocar este utilizador.";
//--------------------------------------------------------------------------------------------------
var FUNST = new Object();
FUNST.Disk="Disco";
FUNST.Share="Partilha";
FUNST.MS="Servidor multimédia";
FUNST.FTP = "Servidor de FTP";

var NAS = new Object();
NAS.MSG1 = "As definições da conta foram aplicadas com êxito. ";
NAS.MSG2 = "A conta %s já existe! ";
NAS.MSG3 = "Falha na aplicação das definições! ";
NAS.MSG4 = "A partilha de pesquisa foi eliminada com êxito. ";
NAS.MSG5 = "Falha na actualização da base de dados de multimédia! ";
NAS.MSG6 = "Falha na actualização da base de dados de multimédia! A partilha não existe. ";
NAS.MSG7 = "Falha na actualização da base de dados de multimédia! ";
NAS.MSG8 = "A base de dados foi actualizada com êxito. ";
NAS.MSG9 = "Falha na actualização da base de dados de multimédia. Não existe nenhuma partição! ";
NAS.MSG10 = "A base de dados foi actualizada com êxito. ";
NAS.MSG11 = "A partilha de pesquisa foi adicionada com êxito. ";
NAS.MSG12 = "O nome da partilha %s é reservado. Escolha um nome diferente. ";
NAS.MSG13 = "A partilha %s foi modificada com êxito. ";
NAS.MSG14 = "A partilha %s foi criada com êxito. ";
NAS.MSG15 = "Erro ao reclamar o disco %s: O disco '%s' não existe. ";
NAS.MSG16 = "Erro ao reclamar o disco: Não especificou um novo nome para o disco. ";
NAS.MSG17 = "O nome do disco especificado, '%s', não é válido. ";
NAS.MSG18 = "O disco foi reclamado com êxito. ";
NAS.MSG19 = "Erro ao reclamar o disco %s: A tentativa de reclamação falhou. ";
NAS.MSG20 = "Erro ao eliminar a partilha %s: A partilha %s é uma partilha especial, reservada para ser utilizada pela funcionalidade de Controlador de domínio primário. Não pode ser eliminada separadamente, mas se o Controlador de domínio primário estiver desactivado, será automaticamente removida. ";
NAS.MSG21 = "A partilha %s foi eliminada com êxito. ";
NAS.MSG23 = "A partilha %s foi modificada com êxito. ";
NAS.MSG24 = "A partilha %s foi criada com êxito. ";
NAS.MSG25 = "O nome da partilha %s é reservado. Escolha um nome diferente. ";
NAS.MSG30 = "Erro ao apagar os discos: Não foram especificados discos para apagar. ";
NAS.MSG31 = "Erro ao apagar os discos: Memória esgotada ao tentar apagar os discos. ";
NAS.MSG32 = "Erro ao apagar os discos: Não é possível apagar o disco '%s'. ";
NAS.MSG33 = "Erro ao apagar os discos: Memória esgotada. ";
NAS.MSG34 = "Todos os discos pedidos foram apagados com êxito. ";
NAS.MSG35 = "Não foi pedido que fossem apagados quaisquer discos, por isso, não foi efectuada nenhuma acção. ";
NAS.MSG36 = "Erro ao apagar os discos: Memória esgotada ao tentar apagar os discos. ";
NAS.MSG37 = "Erro ao apagar os discos: Não foram especificados discos para apagar. ";
NAS.MSG38 = "Todos os discos pedidos foram apagados com êxito. ";
NAS.MSG39 = "Não foi pedido que fossem apagados quaisquer discos, por isso, não foi efectuada nenhuma acção. ";
NAS.MSG40 = "Não é possível desligar o disco '%s' com segurança. ";
NAS.MSG41 = "O disco foi desligado com êxito. ";
NAS.MSG42 = "As propriedades de acesso da partilha %s foram alteradas com êxito. ";
NAS.MSG43 = "Falha na aplicação das definições da conta! ";
NAS.MSG44 = "As definições da conta foram aplicadas com êxito. ";
NAS.MSG45 = "Os valores introduzidos são inválidos. Tente novamente. ";
NAS.MSG46 = "As definições tiveram êxito. ";
NAS.MSG47 = "Não foi possível %s o domínio %s (foi obtido o erro %s) e não foi possível aderir novamente ao domínio %s (foi obtido o erro %s); a associação ao grupo de trabalho %s foi revertida. ";
NAS.MSG48 = "Não foi possível %s o domínio %s (foi obtido o erro %s); a associação ao domínio %s foi revertida. ";
NAS.MSG49 = "join_workgroup_or_domain_error Não foi possível %s o domínio %s (foi obtido o erro %s); a associação ao domínio %s foi revertida. ";
NAS.MSG50 = "É agora membro do domínio %s. ";
NAS.MSG51 = "É agora membro do grupo de trabalho %s. ";
NAS.MSG52 = "Falha na aplicação das definições! ";
NAS.MSG53 = "A partilha de FTP foi eliminada com êxito. ";
NAS.MSG54 = "O disco está ocupado!";










