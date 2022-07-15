//Basic Setup
var hsetup = new Object();
hsetup.phase1="O ecr� <i>Configura��o</i> \
		� o primeiro ecr� apresentado quando acede ao Router. A maior parte dos utilizadores  \
		poder� configurar o Router e obter um funcionamento correcto utilizando apenas as  \
		defini��es existentes neste ecr�. Alguns fornecedores de servi�os Internet (ISPs) requerem  \
		a introdu��o de informa��es espec�ficas, tais como o Nome de utilizador, a Palavra-passe, o Endere�o IP,  \
		o Endere�o do gateway predefinido ou o Endere�o IP de DNS. Se for necess�rio, poder� obter  \
		estas informa��es junto do seu ISP.";
hsetup.phase2="Nota: Depois de \
		configurar estas defini��es, deve definir uma nova palavra-passe para o Router  \
		utilizando o ecr� <i>Seguran�a</i>. Esta medida aumenta a seguran�a, protegendo o  \
		Router contra altera��es n�o autorizadas. Todos os utilizadores que tentarem aceder ao utilit�rio baseado na Web do Router \
		ou ao Assistente de configura��o ter�o de introduzir a palavra-passe do Router.";
hsetup.phase3="Seleccione o  \
		fuso hor�rio da sua localiza��o. Se a sua localiza��o utilizar a hora de Ver�o, \
    		mantenha a marca de verifica��o na caixa existente junto de <i>Ajustar automaticamente o rel�gio para \
    		a hora de Ver�o</i>.";
hsetup.phase4="MTU significa  \
    		Unidade m�xima de transmiss�o. Especifica o tamanho m�ximo de pacote permitido \
    		para transmiss�o na Internet. Mantenha a predefini��o, <b>Autom�tico</b>, para que o \
    		Router seleccione a melhor MTU para a sua liga��o � Internet. Para especificar o \
    		tamanho da MTU, seleccione <b>Manual</b> e introduza o valor pretendido (a predefini��o � <b> \
    		1400</b>).&nbsp; Deve introduzir um valor entre 1200 e 1500.";
hsetup.phase5="Esta entrada � requerida por alguns ISPs, podendo ser fornecida pelos mesmos.";
hsetup.phase6="O Router suporta quatro tipos de liga��o:";
hsetup.phase7="Configura��o autom�tica - DHCP";
hsetup.phase8="(Protocolo ponto a ponto sobre Ethernet)";
hsetup.phase9="(Protocolo de t�nel ponto a ponto)";
hsetup.phase10="Estes tipos podem ser seleccionados no menu pendente existente junto de Liga��o � Internet. \
    		As informa��es requeridas e as funcionalidades dispon�veis ir�o variar consoante o \
    		tipo de liga��o seleccionado. Algumas descri��es destas \
    		informa��es s�o fornecidas aqui:";		
hsetup.phase11="Endere�o IP de Internet e M�scara de sub-rede";
hsetup.phase12="Trata-se do Endere�o IP e da M�scara de sub-rede \
    		do Router apresentados aos utilizadores externos na Internet (incluindo o seu \
    		ISP). Se a liga��o � Internet requerer um endere�o IP est�tico, o seu  \
    		ISP ir� fornecer-lhe um Endere�o IP est�tico e uma M�scara de sub-rede.";
hsetup.phase13="O ISP fornece o Endere�o IP do Gateway."
hsetup.phase14="(Servidor de nomes de dom�nio)";
hsetup.phase15="O ISP fornecer�, pelo menos, um endere�o IP de DNS.";
hsetup.phase16="Nome de utilizador e Palavra-passe";
hsetup.phase17="Introduza o <b>Nome de utilizador</b> e a \
				<b>Palavra-passe</b> que utiliza quando inicia sess�o no ISP atrav�s de uma liga��o PPPoE ou \
    		PPTP.";
hsetup.phase18="Ligar mediante pedido";
hsetup.phase19="Pode configurar o Router para \
    		desligar a liga��o � Internet ap�s um per�odo de inactividade especificado \
    		(Tempo m�ximo de inactividade). Se a sua liga��o � Internet tiver sido terminada devido a \
    		inactividade, Lidar mediante pedido permite que o Router restabele�a automaticamente \
   		a liga��o quando tentar aceder novamente \
   		� Internet. Se pretender activar a op��o Ligar mediante pedido, clique no bot�o de op��o. Se \
    		pretender que a liga��o � Internet permane�a sempre activa, introduza <b>0</b> \
    		no campo <i>Tempo m�ximo de inactividade</i>. Caso contr�rio, introduza o n�mero de minutos \
    		que pretende que decorra antes que a liga��o � Internet seja terminada.";
hsetup.phase20="Op��o Manter ligado ";
hsetup.phase21="Esta op��o mant�m a liga��o \
    		� Internet indefinidamente, mesmo quando a liga��o permanece inactiva. Para utilizar \
    		esta op��o, clique no bot�o de op��o junto de <i>Manter ligado</i>. O Per�odo de remarca��o predefinido \
    		� de 30 segundos (ou seja, o Router ir� verificar a \
    		liga��o � Internet a intervalos de 30 segundos).";
hsetup.phase22="Nota: Alguns \
    		fornecedores de cabo requerem um endere�o MAC espec�fico para liga��o � \
    		Internet. Para obter mais informa��es, clique no separador <b>Sistema</b>. Em seguida, clique \
    		no bot�o <b>Ajuda</b> e consulte as informa��es sobre a funcionalidade de Clonagem de MAC.";
hsetup.phase23="LAN";
hsetup.phase24="Endere�o IP e M�scara de sub-rede";
hsetup.phase25="Trata-se do\
    		Endere�o IP e da M�scara de sub-rede do Router apresentados na LAN interna. O \
    		valor predefinido � 192.168.1.1 para o Endere�o IP e 255.255.255.0 para a \
    		M�scara de sub-rede.";
hsetup.phase26="DHCP";
hsetup.phase27="Mantenha a \
    		predefini��o, <b>Activar</b>, para activar a op��o de servidor de DHCP do Router. Se \
    		j� tiver um servidor de DHCP na rede ou se n�o pretender um servidor de DHCP, \
    		seleccione <b>Desactivar</b>.";
hsetup.phase28="Introduza um \
    		valor num�rico para o servidor de DHCP come�ar a emitir endere�os IP. \
    		N�o comece com 192.168.1.1 (o endere�o IP do Router).";
hsetup.phase29="N�mero m�ximo de utilizadores de DHCP";
hsetup.phase30="Introduza o \
    		n�mero m�ximo de computadores ao qual pretende que o servidor de DHCP atribua \
    		endere�os IP. O m�ximo absoluto � 253 (poss�vel, se 192.168.1.2 for o endere�o IP \
    		inicial.";
hsetup.phase31="O Tempo \
    		de concess�o do cliente � o per�odo de tempo que um utilizador da rede pode permanecer ligado \
    		ao Router com o respectivo endere�o IP din�mico actual. Introduza o per�odo de  \
    		tempo, em minutos, durante o qual o utilizador ter� a \"concess�o\" deste endere�o IP din�mico.";
hsetup.phase32="DNS est�tico 1-3 ";
hsetup.phase33="O Sistema \
    		de nomes de dom�nio (DNS) � o modo como a Internet converte nomes de dom�nios ou Web sites \
    		em endere�os ou URLs da Internet. O seu ISP fornecer-lhe-� pelo menos um \
    		Endere�o IP de servidor de DNS. Se pretender utilizar outro, introduza esse Endere�o IP \
    		num destes campos. Pode introduzir um m�ximo de tr�s Endere�os IP de servidor de DNS \
    		aqui. O Router utiliza estes endere�os para proporcionar um acesso mais r�pido aos servidores de DNS  \
    		dispon�veis.";
hsetup.phase34="O Windows Internet Naming Service (WINS) gere a interac��o de cada computador com \
    		a Internet. Se utilizar um servidor de WINS, introduza aqui o Endere�o IP desse servidor. \
    		Caso contr�rio, deixe o campo em branco.";
hsetup.phase35="Verifique todos os \
		valores e clique em <b>Guardar defini��es</b> para guardar as suas defini��es. Clique em <b>Cancelar \
		altera��es</b> para \
		cancelar as altera��es n�o guardadas. Pode testar as defini��es estabelecendo liga��o � \
		Internet. ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="O Router oferece uma funcionalidade de Sistema de nomes de dom�nio din�micos (DDNS). O DDNS permite atribuir um \
		nome de dom�nio e sistema anfitri�o fixo a um endere�o IP de Internet din�mico. � �til se estiver \
		a alojar o seu pr�prio Web site, servidor de FTP ou outro servidor atr�s do Router. Antes de \
		utilizar esta funcionalidade, tem de inscrever-se no servi�o DDNS em <i>www.dyndns.org</i>, \
		um fornecedor de servi�os DDNS.";
helpddns.phase2="Servi�o DDNS";
helpddns.phase3="Para desactivar o Servi�o DDNS, mantenha a predefini��o, <b>Desactivar</b>. Para activar o Servi�o DDNS, \  siga estas instru��es:";
helpddns.phase4="Inscreva-se no servi�o DDNS em <i>www.dyndns.org</i> e tome nota \
		do seu Nome de utilizador,<i> </i>Palavra-passe e<i> </i>Nome do sistema anfitri�o.";
helpddns.phase5="No ecr� <i>DDNS,</i> seleccione <b>Activar.</b>";
helpddns.phase6="Preencha os campos <i> Nome de utilizador</i>,<i> Palavra-passe</i> e<i> Nome do sistema anfitri�o</i>.";
helpddns.phase7="Clique no bot�o <b>Guardar defini��es</b> para guardar as altera��es. Clique no bot�o <b>Cancelar altera��es</b> para \
		cancelar as altera��es n�o guardadas.";
helpddns.phase8="O Endere�o IP de Internet actual do Router � apresentado aqui.";
helpddns.phase9="O estado da liga��o ao servi�o DDNS � apresentado aqui.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonagem de MAC";
helpmac.phase2="O endere�o MAC do Router � um c�digo de 12 d�gitos atribu�do a um componente de  \
    		hardware exclusivo para identifica��o. Alguns ISPs requerem que registe o endere�o MAC \
    		da placa de rede que foi ligada ao modem de cabo \
    		ou DSL durante a instala��o. Se o seu ISP requerer o registo de endere�os MAC, \
    		localize o endere�o MAC da placa seguindo as  \
    		instru��es relativas ao sistema operativo do seu computador.";
helpmac.phase3="Para o Windows 98 e Millennium:";
helpmac.phase4="1.  Clique no bot�o <b>Iniciar</b> e seleccione <b>Executar</b>.";
helpmac.phase5="2.  Escreva <b>winipcfg </b>no campo fornecido e prima <b>OK</b>.";
helpmac.phase6="3.  Seleccione a placa Ethernet que est� a utilizar.";
helpmac.phase7="4.  Clique em <b>Mais informa��es</b>.";
helpmac.phase8="5.  Anote o endere�o MAC da placa.";
helpmac.phase9="1.  Clique no bot�o <b>Iniciar</b> e seleccione <b>Executar</b>.";
helpmac.phase10="2.  Escreva <b>cmd </b>no campo fornecido e prima <b>OK </b>.";
helpmac.phase11="3.  Na linha de comandos, execute <b>ipconfig /all</b> e observe o endere�o f�sico da placa.";
helpmac.phase12="4.  Anote o endere�o MAC da placa.";
helpmac.phase13="Para clonar o endere�o MAC da placa de rede no Router e evitar ter de contactar o  \
    		ISP para alterar o endere�o MAC registado, siga estas instru��es:";
helpmac.phase14="Para o Windows 2000 e XP:";
helpmac.phase15="1.  Seleccione <b>Activar</b>.";
helpmac.phase16="2.  Introduza o endere�o MAC da placa no campo <i>Endere�o MAC</i>.";
helpmac.phase17="3.  Clique no bot�o <b>Guardar defini��es</b>.";
helpmac.phase18="Para desactivar a clonagem de endere�os MAC, mantenha a predefini��o <b>Desactivar</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Encaminhamento";
hrouting.phase2="No ecr� <i>Encaminhamento</i>, pode definir o modo de encaminhamento e as defini��es do Router. \
		 O modo Gateway � recomendado para a maior parte dos utilizadores.";
hrouting.phase3="Seleccione o modo de funcionamento correcto. Mantenha a predefini��o, <b> \
    		 Gateway</b>, se o Router estiver a alojar a liga��o da rede � Internet (o modo Gateway � recomendado para a maior parte dos utilizadores). Seleccione <b> \
    		 Router </b>se existirem outros routers na rede.";
hrouting.phase4="Encaminhamento din�mico (RIP)";
hrouting.phase5="Nota: Esta funcionalidade n�o est� dispon�vel no modo de Gateway.";
hrouting.phase6="O Encaminhamento din�mico permite que o Router se adapte automaticamente �s altera��es f�sicas na \
    		 disposi��o da rede e troque tabelas de encaminhamento com outros routers. O \
    		 Router determina a rota dos pacotes da rede com base no menor n�mero de \
    		 saltos entre a origem e o destino. ";
hrouting.phase7="Para activar a funcionalidade de Encaminhamento din�mico do lado da WAN, seleccione <b>WAN</b>. \
    		 Para activar esta funcionalidade do lado da LAN e da rede sem fios, seleccione <b>LAN &amp; sem fios</b>. \
    		 Para activar a funcionalidade para a WAN e a LAN, seleccione <b> \
    		 Ambos</b>. Para desactivar a funcionalidade de Encaminhamento din�mico para todas as transmiss�es de dados, mantenha a \
    		 predefini��o, <b>Desactivar</b>. ";
hrouting.phase8="Encaminhamento est�tico,&nbsp; Endere�o IP de destino, M�scara de sub-rede, Gateway e Interface";
hrouting.phase9="Para configurar uma rota est�tica entre o Router e outra rede, \
    		 seleccione um n�mero na lista pendente <i>Encaminhamento est�tico</i>. (Uma rota \
    		 est�tica � uma rota predeterminada que as informa��es t�m de percorrer na rede para \
    		 alcan�arem um sistema anfitri�o ou uma rede espec�fica.)";
hrouting.phase10="Introduza os seguintes dados:";
hrouting.phase11="Endere�o IP de destino </b>- \
		  O Endere�o IP de destino � o endere�o da rede ou sistema anfitri�o ao qual pretende atribuir uma rota est�tica.";
hrouting.phase12="M�scara de sub-rede </b>- \
		  A M�scara de sub-rede determina que parte de um endere�o IP corresponde � rede e que \
    		  parte corresponde ao sistema anfitri�o. ";
hrouting.phase13="Gateway </b>- \
		  Trata-se do endere�o IP do dispositivo de gateway que permite o contacto entre o Router e a rede ou sistema anfitri�o.";
hrouting.phase14="Dependendo da localiza��o do Endere�o IP de destino, seleccione  \
    		      		  <b>LAN &amp; sem fios</b> ou <b>WAN</b> no menu pendente <i>Interface</i>.";
hrouting.phase15="Para guardar as altera��es, clique no bot�o <b>Aplicar</b>. Para cancelar as altera��es n�o guardadas, clique no bot�o <b> \
    		  Cancelar</b>.";
hrouting.phase16="Para indicar rotas est�ticas adicionais, repita os passos 1 a 4.";
hrouting.phase17="Eliminar esta entrada";
hrouting.phase18="Para eliminar uma entrada de rota est�tica:";
hrouting.phase19="Na lista pendente <i>Encaminhamento est�tico</i>, seleccione o n�mero da entrada da rota est�tica.";
hrouting.phase20="Clique no bot�o <b>Eliminar esta entrada</b>.";
hrouting.phase21="Para guardar uma elimina��o, clique no bot�o <b>Aplicar</b>. Para cancelar uma elimina��o, clique no bot�o <b> \
    		  Cancelar</b>. ";
hrouting.phase22="Mostrar tabela de encaminhamento";
hrouting.phase23="Clique no bot�o \
    		      		  <b>Mostrar tabela de encaminhamento</b> para ver todas as entradas de rota v�lidas em utiliza��o. O Endere�o IP de destino, a M�scara de sub-rede, \
    		  o Gateway e a Interface ser�o apresentados para cada entrada. Clique no bot�o <b>Actualizar</b> para actualizar os dados apresentados. Clique no bot�o <b> \
    		  Fechar</b> para regressar ao ecr� <i>Encaminhamento</i>.";
hrouting.phase24="Endere�o IP de destino</b> - \
		  O Endere�o IP de destino � o endere�o da rede ou sistema anfitri�o ao qual a rota est�tica est� atribu�da. ";
hrouting.phase25="M�scara de sub-rede</b> - \
		  A M�scara de sub-rede determina que parte de um endere�o IP corresponde � rede e que parte corresponde ao sistema anfitri�o.";
hrouting.phase26="Gateway</b> - Trata-se do endere�o IP do dispositivo de gateway que permite o contacto entre o Router e a rede ou sistema anfitri�o.";
hrouting.phase27="Interface</b> - Esta interface indica se o Endere�o IP de destino se encontra em \
    		      		  <b> LAN &amp; sem fios </b>(nas redes internas com e sem fios), <b>WAN</b> (Internet) ou <b> \
    		  Loopback</b> (uma rede fict�cia na qual um computador age como uma rede - necess�rio para determinados programas de software). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloquear pedido da WAN";
hfirewall.phase2="Activando a funcionalidade Bloquear pedido da WAN, pode impedir que a sua rede \
    		 \"responda a pings\", ou seja detectada, por outros utilizadores da Internet. A funcionalidade Bloquear pedido da WAN \
    		 tamb�m refor�a a seguran�a da rede, ocultando as portas de rede. \
    		 Ambas as fun��es da funcionalidade Bloquear pedido da WAN dificultam \
    		 a entrada de utilizadores externos na sua rede. Esta funcionalidade est� activada \
    		 por predefini��o. Seleccione <b>Desactivar</b> para desactivar esta funcionalidade.";
hfirewall.right="Activar ou desactivar a firewall de SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Passagem VPN";
helpvpn.phase2="A Rede privada virtual (VPN) � normalmente utilizada para funcionamento em rede profissional. Para \
    		t�neis de VPN, o Router suporta Passagem IPSec e Passagem PPTP.";
helpvpn.phase3="<b>IPSec</b> - A Seguran�a do protocolo Internet (IPSec) � um<b> </b>conjunto de protocolos utilizado para implementar \
      		a troca segura de pacotes na camada IP. Para permitir a passagem de t�neis IPSec \
      		atrav�s do Router, a Passagem IPSec est� activada por predefini��o. Para desactivar a \
      		Passagem IPSec, desmarque a caixa existente junto de <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- O Protocolo de t�nel ponto a ponto � o m�todo utilizado para permitir sess�es de VPN \
      		num servidor com o Windows NT 4.0 ou 2000. Para permitir a passagem de t�neis PPTP \
      		atrav�s do Router, a Passagem PPTP est� activada por predefini��o. Para desactivar a \
      		Passagem PPTP, desmarque a caixa existente junto de <i>PPTP</i>.";

helpvpn.right="Pode optar por activar o PPTP, o L2TP da passagem IPSec, para permitir que os \
		dispositivos de rede comuniquem atrav�s da VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtros";
hfilter.phase2="O ecr� <i>Filtros</i> permite-lhe bloquear ou permitir tipos espec�ficos de \
		utiliza��o da Internet. Pode configurar pol�ticas de acesso � Internet para computadores espec�ficos e configurar \
		filtros atrav�s da utiliza��o de n�meros de portas de rede.";
hfilter.phase3="Esta funcionalidade permite-lhe personalizar at� dez Pol�ticas de acesso � Internet diferentes \
    		para computadores espec�ficos, identificados pelo respectivo endere�o IP ou MAC. Para \
    		cada computador com uma pol�tica especificada, durante os dias e os per�odos de tempo especificados.";
hfilter.phase4="Para criar ou editar uma pol�tica, siga estas instru��es:";
hfilter.phase5="Seleccione o n�mero da pol�tica \(1-10\) no menu pendente.";
hfilter.phase6="Introduza um nome no campo <i>Introduza o nome do perfil</i>.";
hfilter.phase7="Clique no bot�o <b>Editar lista de computadores</b>.";
hfilter.phase8="Clique no bot�o <b>Aplicar</b> para guardar as altera��es. Clique no bot�o <b>Cancelar</b> para \
    		cancelar as altera��es n�o guardadas. Clique no bot�o <b>Fechar</b> para regressar ao ecr� \
    		    		<i>Filtros</i>.";
hfilter.phase9="Se pretende impedir que os computadores listados acedam � Internet durante os dias e per�odos \
    		indicados, mantenha a predefini��o, <b>Desactivar acesso � Internet para os computadores \
    		listados</b>. Se pretende que os computadores listados possam aceder � Internet durante \
    		os dias e per�odos indicados, clique no bot�o de op��o existente junto de <i>Activar \
    		acesso � Internet para os computadores listados</i>.";
hfilter.phase10="No ecr� <i>Lista de computadores</i>, especifique os computadores por endere�o IP ou MAC. Introduza os \
    		endere�os IP adequados nos campos <i>IP</i>. Se tiver um intervalo de \
    		endere�os IP para filtrar, preencha os campos <i>Intervalo IP</i> adequados. \
    		Introduza os endere�os MAC adequados nos campos <i>MAC</i>.";
hfilter.phase11="Defina a hora a que o acesso ser� filtrado. Seleccione <b>24 horas</b>,<b> </b>ou seleccione a caixa junto a <i>De</i> \
    		e utilize as caixas pendentes para designar um per�odo de tempo espec�fico. ";
hfilter.phase12="Defina os dias em que o acesso ser� filtrado. Seleccione <b>Todos os dias</b> ou os dias da semana adequados. ";
hfilter.phase13="Clique no bot�o <b>Adicionar � pol�tica</b> para guardar as altera��es e activ�-las.";
hfilter.phase14="Para criar ou editar pol�ticas adicionais, repita os passos 1 a 9.";
hfilter.phase15="Para eliminar uma Pol�tica de acesso � Internet, seleccione o n�mero da pol�tica e, em seguida, clique no bot�o <b>Eliminar</b>.";
hfilter.phase16="Para ver um resumo de todas as pol�ticas, clique no bot�o <b>Resumo</b>. O ecr� <i> \
    		Resumo de pol�ticas da Internet</i> apresenta o n�mero de cada pol�tica, bem como as informa��es de Nome \
    		da pol�tica, Dias e Hora do dia. Para eliminar uma pol�tica, clique na respectiva caixa e, em seguida, \
    		clique no bot�o <b>Eliminar</b>. Clique no bot�o <b>Fechar</b> para regressar ao \
    		ecr� <i>Filtros</i>.";
hfilter.phase17="Intervalo de portas da Internet filtrado";
hfilter.phase18="Para filtrar computadores pelos n�meros das portas de rede, seleccione <b>Ambos</b>, <b>TCP</b> ou <b>UDP</b>, \
    		dependendo dos protocolos que pretende filtrar. Em seguida,<b> </b>introduza os n�meros das portas  \
    		que pretende filtrar nos campos dos n�meros de portas. Os computadores ligados ao  \
    		Router deixar�o de conseguir aceder aos n�meros de portas aqui listados. Para  \
    		desactivar um filtro, seleccione <b>Desactivar</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Verifique todos os valores e clique em <b>Guardar defini��es</b> para guardar as defini��es. Clique no bot�o <b>Cancelar \
		altera��es</b> para cancelar as altera��es n�o guardadas.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="A funcionalidade de alojamento de DMZ permite que um utilizador local seja exposto � Internet para utilizar \
		um servi�o especial, tal como um jogo da Internet ou uma videoconfer�ncia. \
		O alojamento de DMZ reencaminha simultaneamente todas as portas para um computador. A funcionalidade de Reencaminhamento \
    		de portas � mais segura porque s� abre as portas pretendidas, \
    		enquanto que o alojamento de DMZ abre todas as portas de um computador, \
    		expondo-o � Internet. ";    		
helpdmz.phase2="Qualquer computador cujas portas estejam a ser reencaminhadas requer a desactiva��o da fun��o de cliente de DHCP  \
    		e necessita que lhe seja atribu�do um novo endere�o IP est�tico, porque o respectivo endere�o IP  \
    		pode mudar durante a utiliza��o da fun��o de DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Para expor um computador, seleccione ";
helpdmz.phase4="Introduza o endere�o IP do computador no campo <i>Endere�o IP do sistema anfitri�o de DMZ</i>.";



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
 
