//Basic Setup
var hsetup = new Object();
hsetup.phase1="O ecrã <i>Configuração</i> \
		é o primeiro ecrã apresentado quando acede ao Router. A maior parte dos utilizadores  \
		poderá configurar o Router e obter um funcionamento correcto utilizando apenas as  \
		definições existentes neste ecrã. Alguns fornecedores de serviços Internet (ISPs) requerem  \
		a introdução de informações específicas, tais como o Nome de utilizador, a Palavra-passe, o Endereço IP,  \
		o Endereço do gateway predefinido ou o Endereço IP de DNS. Se for necessário, poderá obter  \
		estas informações junto do seu ISP.";
hsetup.phase2="Nota: Depois de \
		configurar estas definições, deve definir uma nova palavra-passe para o Router  \
		utilizando o ecrã <i>Segurança</i>. Esta medida aumenta a segurança, protegendo o  \
		Router contra alterações não autorizadas. Todos os utilizadores que tentarem aceder ao utilitário baseado na Web do Router \
		ou ao Assistente de configuração terão de introduzir a palavra-passe do Router.";
hsetup.phase3="Seleccione o  \
		fuso horário da sua localização. Se a sua localização utilizar a hora de Verão, \
    		mantenha a marca de verificação na caixa existente junto de <i>Ajustar automaticamente o relógio para \
    		a hora de Verão</i>.";
hsetup.phase4="MTU significa  \
    		Unidade máxima de transmissão. Especifica o tamanho máximo de pacote permitido \
    		para transmissão na Internet. Mantenha a predefinição, <b>Automático</b>, para que o \
    		Router seleccione a melhor MTU para a sua ligação à Internet. Para especificar o \
    		tamanho da MTU, seleccione <b>Manual</b> e introduza o valor pretendido (a predefinição é <b> \
    		1400</b>).&nbsp; Deve introduzir um valor entre 1200 e 1500.";
hsetup.phase5="Esta entrada é requerida por alguns ISPs, podendo ser fornecida pelos mesmos.";
hsetup.phase6="O Router suporta quatro tipos de ligação:";
hsetup.phase7="Configuração automática - DHCP";
hsetup.phase8="(Protocolo ponto a ponto sobre Ethernet)";
hsetup.phase9="(Protocolo de túnel ponto a ponto)";
hsetup.phase10="Estes tipos podem ser seleccionados no menu pendente existente junto de Ligação à Internet. \
    		As informações requeridas e as funcionalidades disponíveis irão variar consoante o \
    		tipo de ligação seleccionado. Algumas descrições destas \
    		informações são fornecidas aqui:";		
hsetup.phase11="Endereço IP de Internet e Máscara de sub-rede";
hsetup.phase12="Trata-se do Endereço IP e da Máscara de sub-rede \
    		do Router apresentados aos utilizadores externos na Internet (incluindo o seu \
    		ISP). Se a ligação à Internet requerer um endereço IP estático, o seu  \
    		ISP irá fornecer-lhe um Endereço IP estático e uma Máscara de sub-rede.";
hsetup.phase13="O ISP fornece o Endereço IP do Gateway."
hsetup.phase14="(Servidor de nomes de domínio)";
hsetup.phase15="O ISP fornecerá, pelo menos, um endereço IP de DNS.";
hsetup.phase16="Nome de utilizador e Palavra-passe";
hsetup.phase17="Introduza o <b>Nome de utilizador</b> e a \
				<b>Palavra-passe</b> que utiliza quando inicia sessão no ISP através de uma ligação PPPoE ou \
    		PPTP.";
hsetup.phase18="Ligar mediante pedido";
hsetup.phase19="Pode configurar o Router para \
    		desligar a ligação à Internet após um período de inactividade especificado \
    		(Tempo máximo de inactividade). Se a sua ligação à Internet tiver sido terminada devido a \
    		inactividade, Lidar mediante pedido permite que o Router restabeleça automaticamente \
   		a ligação quando tentar aceder novamente \
   		à Internet. Se pretender activar a opção Ligar mediante pedido, clique no botão de opção. Se \
    		pretender que a ligação à Internet permaneça sempre activa, introduza <b>0</b> \
    		no campo <i>Tempo máximo de inactividade</i>. Caso contrário, introduza o número de minutos \
    		que pretende que decorra antes que a ligação à Internet seja terminada.";
hsetup.phase20="Opção Manter ligado ";
hsetup.phase21="Esta opção mantém a ligação \
    		à Internet indefinidamente, mesmo quando a ligação permanece inactiva. Para utilizar \
    		esta opção, clique no botão de opção junto de <i>Manter ligado</i>. O Período de remarcação predefinido \
    		é de 30 segundos (ou seja, o Router irá verificar a \
    		ligação à Internet a intervalos de 30 segundos).";
hsetup.phase22="Nota: Alguns \
    		fornecedores de cabo requerem um endereço MAC específico para ligação à \
    		Internet. Para obter mais informações, clique no separador <b>Sistema</b>. Em seguida, clique \
    		no botão <b>Ajuda</b> e consulte as informações sobre a funcionalidade de Clonagem de MAC.";
hsetup.phase23="LAN";
hsetup.phase24="Endereço IP e Máscara de sub-rede";
hsetup.phase25="Trata-se do\
    		Endereço IP e da Máscara de sub-rede do Router apresentados na LAN interna. O \
    		valor predefinido é 192.168.1.1 para o Endereço IP e 255.255.255.0 para a \
    		Máscara de sub-rede.";
hsetup.phase26="DHCP";
hsetup.phase27="Mantenha a \
    		predefinição, <b>Activar</b>, para activar a opção de servidor de DHCP do Router. Se \
    		já tiver um servidor de DHCP na rede ou se não pretender um servidor de DHCP, \
    		seleccione <b>Desactivar</b>.";
hsetup.phase28="Introduza um \
    		valor numérico para o servidor de DHCP começar a emitir endereços IP. \
    		Não comece com 192.168.1.1 (o endereço IP do Router).";
hsetup.phase29="Número máximo de utilizadores de DHCP";
hsetup.phase30="Introduza o \
    		número máximo de computadores ao qual pretende que o servidor de DHCP atribua \
    		endereços IP. O máximo absoluto é 253 (possível, se 192.168.1.2 for o endereço IP \
    		inicial.";
hsetup.phase31="O Tempo \
    		de concessão do cliente é o período de tempo que um utilizador da rede pode permanecer ligado \
    		ao Router com o respectivo endereço IP dinâmico actual. Introduza o período de  \
    		tempo, em minutos, durante o qual o utilizador terá a \"concessão\" deste endereço IP dinâmico.";
hsetup.phase32="DNS estático 1-3 ";
hsetup.phase33="O Sistema \
    		de nomes de domínio (DNS) é o modo como a Internet converte nomes de domínios ou Web sites \
    		em endereços ou URLs da Internet. O seu ISP fornecer-lhe-á pelo menos um \
    		Endereço IP de servidor de DNS. Se pretender utilizar outro, introduza esse Endereço IP \
    		num destes campos. Pode introduzir um máximo de três Endereços IP de servidor de DNS \
    		aqui. O Router utiliza estes endereços para proporcionar um acesso mais rápido aos servidores de DNS  \
    		disponíveis.";
hsetup.phase34="O Windows Internet Naming Service (WINS) gere a interacção de cada computador com \
    		a Internet. Se utilizar um servidor de WINS, introduza aqui o Endereço IP desse servidor. \
    		Caso contrário, deixe o campo em branco.";
hsetup.phase35="Verifique todos os \
		valores e clique em <b>Guardar definições</b> para guardar as suas definições. Clique em <b>Cancelar \
		alterações</b> para \
		cancelar as alterações não guardadas. Pode testar as definições estabelecendo ligação à \
		Internet. ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="O Router oferece uma funcionalidade de Sistema de nomes de domínio dinâmicos (DDNS). O DDNS permite atribuir um \
		nome de domínio e sistema anfitrião fixo a um endereço IP de Internet dinâmico. É útil se estiver \
		a alojar o seu próprio Web site, servidor de FTP ou outro servidor atrás do Router. Antes de \
		utilizar esta funcionalidade, tem de inscrever-se no serviço DDNS em <i>www.dyndns.org</i>, \
		um fornecedor de serviços DDNS.";
helpddns.phase2="Serviço DDNS";
helpddns.phase3="Para desactivar o Serviço DDNS, mantenha a predefinição, <b>Desactivar</b>. Para activar o Serviço DDNS, \  siga estas instruções:";
helpddns.phase4="Inscreva-se no serviço DDNS em <i>www.dyndns.org</i> e tome nota \
		do seu Nome de utilizador,<i> </i>Palavra-passe e<i> </i>Nome do sistema anfitrião.";
helpddns.phase5="No ecrã <i>DDNS,</i> seleccione <b>Activar.</b>";
helpddns.phase6="Preencha os campos <i> Nome de utilizador</i>,<i> Palavra-passe</i> e<i> Nome do sistema anfitrião</i>.";
helpddns.phase7="Clique no botão <b>Guardar definições</b> para guardar as alterações. Clique no botão <b>Cancelar alterações</b> para \
		cancelar as alterações não guardadas.";
helpddns.phase8="O Endereço IP de Internet actual do Router é apresentado aqui.";
helpddns.phase9="O estado da ligação ao serviço DDNS é apresentado aqui.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonagem de MAC";
helpmac.phase2="O endereço MAC do Router é um código de 12 dígitos atribuído a um componente de  \
    		hardware exclusivo para identificação. Alguns ISPs requerem que registe o endereço MAC \
    		da placa de rede que foi ligada ao modem de cabo \
    		ou DSL durante a instalação. Se o seu ISP requerer o registo de endereços MAC, \
    		localize o endereço MAC da placa seguindo as  \
    		instruções relativas ao sistema operativo do seu computador.";
helpmac.phase3="Para o Windows 98 e Millennium:";
helpmac.phase4="1.  Clique no botão <b>Iniciar</b> e seleccione <b>Executar</b>.";
helpmac.phase5="2.  Escreva <b>winipcfg </b>no campo fornecido e prima <b>OK</b>.";
helpmac.phase6="3.  Seleccione a placa Ethernet que está a utilizar.";
helpmac.phase7="4.  Clique em <b>Mais informações</b>.";
helpmac.phase8="5.  Anote o endereço MAC da placa.";
helpmac.phase9="1.  Clique no botão <b>Iniciar</b> e seleccione <b>Executar</b>.";
helpmac.phase10="2.  Escreva <b>cmd </b>no campo fornecido e prima <b>OK </b>.";
helpmac.phase11="3.  Na linha de comandos, execute <b>ipconfig /all</b> e observe o endereço físico da placa.";
helpmac.phase12="4.  Anote o endereço MAC da placa.";
helpmac.phase13="Para clonar o endereço MAC da placa de rede no Router e evitar ter de contactar o  \
    		ISP para alterar o endereço MAC registado, siga estas instruções:";
helpmac.phase14="Para o Windows 2000 e XP:";
helpmac.phase15="1.  Seleccione <b>Activar</b>.";
helpmac.phase16="2.  Introduza o endereço MAC da placa no campo <i>Endereço MAC</i>.";
helpmac.phase17="3.  Clique no botão <b>Guardar definições</b>.";
helpmac.phase18="Para desactivar a clonagem de endereços MAC, mantenha a predefinição <b>Desactivar</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Encaminhamento";
hrouting.phase2="No ecrã <i>Encaminhamento</i>, pode definir o modo de encaminhamento e as definições do Router. \
		 O modo Gateway é recomendado para a maior parte dos utilizadores.";
hrouting.phase3="Seleccione o modo de funcionamento correcto. Mantenha a predefinição, <b> \
    		 Gateway</b>, se o Router estiver a alojar a ligação da rede à Internet (o modo Gateway é recomendado para a maior parte dos utilizadores). Seleccione <b> \
    		 Router </b>se existirem outros routers na rede.";
hrouting.phase4="Encaminhamento dinâmico (RIP)";
hrouting.phase5="Nota: Esta funcionalidade não está disponível no modo de Gateway.";
hrouting.phase6="O Encaminhamento dinâmico permite que o Router se adapte automaticamente às alterações físicas na \
    		 disposição da rede e troque tabelas de encaminhamento com outros routers. O \
    		 Router determina a rota dos pacotes da rede com base no menor número de \
    		 saltos entre a origem e o destino. ";
hrouting.phase7="Para activar a funcionalidade de Encaminhamento dinâmico do lado da WAN, seleccione <b>WAN</b>. \
    		 Para activar esta funcionalidade do lado da LAN e da rede sem fios, seleccione <b>LAN &amp; sem fios</b>. \
    		 Para activar a funcionalidade para a WAN e a LAN, seleccione <b> \
    		 Ambos</b>. Para desactivar a funcionalidade de Encaminhamento dinâmico para todas as transmissões de dados, mantenha a \
    		 predefinição, <b>Desactivar</b>. ";
hrouting.phase8="Encaminhamento estático,&nbsp; Endereço IP de destino, Máscara de sub-rede, Gateway e Interface";
hrouting.phase9="Para configurar uma rota estática entre o Router e outra rede, \
    		 seleccione um número na lista pendente <i>Encaminhamento estático</i>. (Uma rota \
    		 estática é uma rota predeterminada que as informações têm de percorrer na rede para \
    		 alcançarem um sistema anfitrião ou uma rede específica.)";
hrouting.phase10="Introduza os seguintes dados:";
hrouting.phase11="Endereço IP de destino </b>- \
		  O Endereço IP de destino é o endereço da rede ou sistema anfitrião ao qual pretende atribuir uma rota estática.";
hrouting.phase12="Máscara de sub-rede </b>- \
		  A Máscara de sub-rede determina que parte de um endereço IP corresponde à rede e que \
    		  parte corresponde ao sistema anfitrião. ";
hrouting.phase13="Gateway </b>- \
		  Trata-se do endereço IP do dispositivo de gateway que permite o contacto entre o Router e a rede ou sistema anfitrião.";
hrouting.phase14="Dependendo da localização do Endereço IP de destino, seleccione  \
    		      		  <b>LAN &amp; sem fios</b> ou <b>WAN</b> no menu pendente <i>Interface</i>.";
hrouting.phase15="Para guardar as alterações, clique no botão <b>Aplicar</b>. Para cancelar as alterações não guardadas, clique no botão <b> \
    		  Cancelar</b>.";
hrouting.phase16="Para indicar rotas estáticas adicionais, repita os passos 1 a 4.";
hrouting.phase17="Eliminar esta entrada";
hrouting.phase18="Para eliminar uma entrada de rota estática:";
hrouting.phase19="Na lista pendente <i>Encaminhamento estático</i>, seleccione o número da entrada da rota estática.";
hrouting.phase20="Clique no botão <b>Eliminar esta entrada</b>.";
hrouting.phase21="Para guardar uma eliminação, clique no botão <b>Aplicar</b>. Para cancelar uma eliminação, clique no botão <b> \
    		  Cancelar</b>. ";
hrouting.phase22="Mostrar tabela de encaminhamento";
hrouting.phase23="Clique no botão \
    		      		  <b>Mostrar tabela de encaminhamento</b> para ver todas as entradas de rota válidas em utilização. O Endereço IP de destino, a Máscara de sub-rede, \
    		  o Gateway e a Interface serão apresentados para cada entrada. Clique no botão <b>Actualizar</b> para actualizar os dados apresentados. Clique no botão <b> \
    		  Fechar</b> para regressar ao ecrã <i>Encaminhamento</i>.";
hrouting.phase24="Endereço IP de destino</b> - \
		  O Endereço IP de destino é o endereço da rede ou sistema anfitrião ao qual a rota estática está atribuída. ";
hrouting.phase25="Máscara de sub-rede</b> - \
		  A Máscara de sub-rede determina que parte de um endereço IP corresponde à rede e que parte corresponde ao sistema anfitrião.";
hrouting.phase26="Gateway</b> - Trata-se do endereço IP do dispositivo de gateway que permite o contacto entre o Router e a rede ou sistema anfitrião.";
hrouting.phase27="Interface</b> - Esta interface indica se o Endereço IP de destino se encontra em \
    		      		  <b> LAN &amp; sem fios </b>(nas redes internas com e sem fios), <b>WAN</b> (Internet) ou <b> \
    		  Loopback</b> (uma rede fictícia na qual um computador age como uma rede - necessário para determinados programas de software). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloquear pedido da WAN";
hfirewall.phase2="Activando a funcionalidade Bloquear pedido da WAN, pode impedir que a sua rede \
    		 \"responda a pings\", ou seja detectada, por outros utilizadores da Internet. A funcionalidade Bloquear pedido da WAN \
    		 também reforça a segurança da rede, ocultando as portas de rede. \
    		 Ambas as funções da funcionalidade Bloquear pedido da WAN dificultam \
    		 a entrada de utilizadores externos na sua rede. Esta funcionalidade está activada \
    		 por predefinição. Seleccione <b>Desactivar</b> para desactivar esta funcionalidade.";
hfirewall.right="Activar ou desactivar a firewall de SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Passagem VPN";
helpvpn.phase2="A Rede privada virtual (VPN) é normalmente utilizada para funcionamento em rede profissional. Para \
    		túneis de VPN, o Router suporta Passagem IPSec e Passagem PPTP.";
helpvpn.phase3="<b>IPSec</b> - A Segurança do protocolo Internet (IPSec) é um<b> </b>conjunto de protocolos utilizado para implementar \
      		a troca segura de pacotes na camada IP. Para permitir a passagem de túneis IPSec \
      		através do Router, a Passagem IPSec está activada por predefinição. Para desactivar a \
      		Passagem IPSec, desmarque a caixa existente junto de <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- O Protocolo de túnel ponto a ponto é o método utilizado para permitir sessões de VPN \
      		num servidor com o Windows NT 4.0 ou 2000. Para permitir a passagem de túneis PPTP \
      		através do Router, a Passagem PPTP está activada por predefinição. Para desactivar a \
      		Passagem PPTP, desmarque a caixa existente junto de <i>PPTP</i>.";

helpvpn.right="Pode optar por activar o PPTP, o L2TP da passagem IPSec, para permitir que os \
		dispositivos de rede comuniquem através da VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtros";
hfilter.phase2="O ecrã <i>Filtros</i> permite-lhe bloquear ou permitir tipos específicos de \
		utilização da Internet. Pode configurar políticas de acesso à Internet para computadores específicos e configurar \
		filtros através da utilização de números de portas de rede.";
hfilter.phase3="Esta funcionalidade permite-lhe personalizar até dez Políticas de acesso à Internet diferentes \
    		para computadores específicos, identificados pelo respectivo endereço IP ou MAC. Para \
    		cada computador com uma política especificada, durante os dias e os períodos de tempo especificados.";
hfilter.phase4="Para criar ou editar uma política, siga estas instruções:";
hfilter.phase5="Seleccione o número da política \(1-10\) no menu pendente.";
hfilter.phase6="Introduza um nome no campo <i>Introduza o nome do perfil</i>.";
hfilter.phase7="Clique no botão <b>Editar lista de computadores</b>.";
hfilter.phase8="Clique no botão <b>Aplicar</b> para guardar as alterações. Clique no botão <b>Cancelar</b> para \
    		cancelar as alterações não guardadas. Clique no botão <b>Fechar</b> para regressar ao ecrã \
    		    		<i>Filtros</i>.";
hfilter.phase9="Se pretende impedir que os computadores listados acedam à Internet durante os dias e períodos \
    		indicados, mantenha a predefinição, <b>Desactivar acesso à Internet para os computadores \
    		listados</b>. Se pretende que os computadores listados possam aceder à Internet durante \
    		os dias e períodos indicados, clique no botão de opção existente junto de <i>Activar \
    		acesso à Internet para os computadores listados</i>.";
hfilter.phase10="No ecrã <i>Lista de computadores</i>, especifique os computadores por endereço IP ou MAC. Introduza os \
    		endereços IP adequados nos campos <i>IP</i>. Se tiver um intervalo de \
    		endereços IP para filtrar, preencha os campos <i>Intervalo IP</i> adequados. \
    		Introduza os endereços MAC adequados nos campos <i>MAC</i>.";
hfilter.phase11="Defina a hora a que o acesso será filtrado. Seleccione <b>24 horas</b>,<b> </b>ou seleccione a caixa junto a <i>De</i> \
    		e utilize as caixas pendentes para designar um período de tempo específico. ";
hfilter.phase12="Defina os dias em que o acesso será filtrado. Seleccione <b>Todos os dias</b> ou os dias da semana adequados. ";
hfilter.phase13="Clique no botão <b>Adicionar à política</b> para guardar as alterações e activá-las.";
hfilter.phase14="Para criar ou editar políticas adicionais, repita os passos 1 a 9.";
hfilter.phase15="Para eliminar uma Política de acesso à Internet, seleccione o número da política e, em seguida, clique no botão <b>Eliminar</b>.";
hfilter.phase16="Para ver um resumo de todas as políticas, clique no botão <b>Resumo</b>. O ecrã <i> \
    		Resumo de políticas da Internet</i> apresenta o número de cada política, bem como as informações de Nome \
    		da política, Dias e Hora do dia. Para eliminar uma política, clique na respectiva caixa e, em seguida, \
    		clique no botão <b>Eliminar</b>. Clique no botão <b>Fechar</b> para regressar ao \
    		ecrã <i>Filtros</i>.";
hfilter.phase17="Intervalo de portas da Internet filtrado";
hfilter.phase18="Para filtrar computadores pelos números das portas de rede, seleccione <b>Ambos</b>, <b>TCP</b> ou <b>UDP</b>, \
    		dependendo dos protocolos que pretende filtrar. Em seguida,<b> </b>introduza os números das portas  \
    		que pretende filtrar nos campos dos números de portas. Os computadores ligados ao  \
    		Router deixarão de conseguir aceder aos números de portas aqui listados. Para  \
    		desactivar um filtro, seleccione <b>Desactivar</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Verifique todos os valores e clique em <b>Guardar definições</b> para guardar as definições. Clique no botão <b>Cancelar \
		alterações</b> para cancelar as alterações não guardadas.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="A funcionalidade de alojamento de DMZ permite que um utilizador local seja exposto à Internet para utilizar \
		um serviço especial, tal como um jogo da Internet ou uma videoconferência. \
		O alojamento de DMZ reencaminha simultaneamente todas as portas para um computador. A funcionalidade de Reencaminhamento \
    		de portas é mais segura porque só abre as portas pretendidas, \
    		enquanto que o alojamento de DMZ abre todas as portas de um computador, \
    		expondo-o à Internet. ";    		
helpdmz.phase2="Qualquer computador cujas portas estejam a ser reencaminhadas requer a desactivação da função de cliente de DHCP  \
    		e necessita que lhe seja atribuído um novo endereço IP estático, porque o respectivo endereço IP  \
    		pode mudar durante a utilização da função de DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Para expor um computador, seleccione ";
helpdmz.phase4="Introduza o endereço IP do computador no campo <i>Endereço IP do sistema anfitrião de DMZ</i>.";



//help number string
var hnum = new Object();
hnum.one="1.";
hnum.two="2.";
hnum.three="3.";
hnum.four="4.";
hnum.five="5.";
hnum.six="5.";
hnum.seven="6.";
hnum.eight="7.";
hnum.night="8.";
 
