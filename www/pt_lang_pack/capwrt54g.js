var firewall2 = new Object();
firewall2.natredir="Filtrar redireccionamento de NAT apenas para Internet IPv4";
firewall2.ident="Filtrar IDENT (Porta 113)";
firewall2.multi="Filtrar multicast";
firewall2.internetfilter="Filtro da Internet";
firewall2.webfilter="Filtro Web";

var hupgrade = new Object();
hupgrade.right1="Clique no botão Procurar para seleccionar o ficheiro de firmware a carregar no router.";
hupgrade.right2="Clique no botão Actualizar para iniciar o processo de actualização. A actualização não pode ser interrompida.";
hupgrade.wrimage="O ficheiro de imagem é incorrecto.";

var hfacdef = new Object();
hfacdef.right1="Esta acção irá repor todas as predefinições de fábrica. Todas as definições serão apagadas.";
hfacdef.warning="Aviso! Se clicar em OK, as predefinições de fábrica do dispositivo serão repostas e todas as definições anteriores serão apagadas.";

var hdiag = new Object();
hdiag.right1="Introduza o endereço IP ou nome do domínio ao qual pretende enviar um ping e clique no botão Ping.";
hdiag.right2="Introduza o endereço IP ou nome do domínio que pretende rastrear e, em seguida, clique no botão Rastrear rota";

var hlog = new Object();
hlog.right1="Poderá activar ou desactivar a utilização dos registos de <b>Recepção</b> e <b>Envio</b> seleccionando o botão de opção adequado.";

var manage2 = new Object();
manage2.webacc="Acesso de gestão local";
manage2.accser="Acesso através do servidor";
manage2.wlacc="Acesso sem fios à &nbsp;Web";
manage2.vapass="A palavra-passe de confirmação não corresponde à Palavra-passe introduzida. Introduza novamente a palavra-passe.";
manage2.passnot="A confirmação da palavra-passe não corresponde.";
manage2.selweb="Tem de seleccionar um servidor Web.";
manage2.changpass="O Router está actualmente configurado para a palavra-passe predefinida. Como medida de segurança, tem de alterar a palavra-passe antes de poder activar a funcionalidade de Gestão Remota. Clique no botão OK para alterar a palavra-passe. Clique no botão Cancelar para manter a funcionalidade de Gestão Remota desactivada.";
manage2.webutiacc="Acesso por";
manage2.wlutiacc="Acesso sem fios";

var hmanage2 = new Object();
hmanage2.right1="<b>Acesso local ao router: </b>Pode alterar a palavra-passe do Router a partir daqui. Introduza a nova palavra-passe do Router e, em seguida, introduza-a novamente no campo Introduza novamente para confirmar.<br>";
hmanage2.right2="<b>Acesso à Web: </b>Permite-lhe configurar as opções de acesso ao utilitário baseado na Web do router.";
hmanage2.right3="<b>Acesso remoto ao router: </b>Permite-lhe aceder remotamente ao router. Seleccione a porta que pretende utilizar. Tem de alterar a palavra-passe do router se ainda estiver a utilizar a palavra-passe predefinida.";
hmanage2.right4="<b>UPnP: </b>Utilizado por determinados programas para abrir automaticamente portas para comunicação.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Endereço MAC</b>. Trata-se do endereço MAC do Router apresentado na rede sem fios local.";
hstatwl2.right2="<b>Modo</b>. Conforme seleccionado no separador Sem fios, este campo apresenta o modo sem fios Misto, Só G ou Desactivado utilizado pela rede.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Endereço MAC</b>. Trata-se do endereço MAC do Router apresentado na rede Ethernet local.";
hstatlan2.right2="<b>Endereço IP</b>. Mostra o endereço IP do Router apresentado na rede Ethernet local.";
hstatlan2.right3="<b>Máscara de sub-rede</b>. Quando o Router está a utilizar uma máscara de sub-rede, esta é apresentada aqui.";
hstatlan2.right4="<b>Servidor de DHCP</b>. Se estiver a utilizar o Router como servidor de DHCP, essa informação será apresentada aqui.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Estático";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="A ligar";
hstatrouter2.disconnected="Desligado";
hstatrouter2.disconnect="Desligar";
hstatrouter2.right1="<b>Versão do firmware.  </b>Trata-se do firmware actual do Router.";
hstatrouter2.right2="<b>Hora actual.  </b>Apresenta a hora definida no separador Configuração.";
hstatrouter2.right3="<b>Endereço MAC.  </b>Trata-se do endereço MAC do Router apresentado ao ISP.";
hstatrouter2.right4="<b>Nome do router.  </b>Trata-se do nome específico do Router, definido no separador Configuração.";
hstatrouter2.right5="<b>Tipo de configuração.  </b>Apresenta as informações requeridas pelo ISP para estabelecer ligação à Internet. Estas informações foram introduzidas no separador Configuração. Pode <b>Ligar</b> ou <b>Desligar</b> a ligação clicando no botão.";
hstatrouter2.authfail=" falha na autenticação";
hstatrouter2.noip="Não é possível obter um endereço IP a partir de ";
hstatrouter2.negfail=" falha na negociação";
hstatrouter2.lcpfail=" Falha na negociação de LCP";
hstatrouter2.tcpfail="Não é possível criar uma ligação de TCP a ";
hstatrouter2.noconn="Não é possível ligar a ";
hstatrouter2.server=" servidor";
hstatrouter2.pppoenoip="Não é possível obter um endereço IP a partir de PPPoE";
hstatrouter2.undetermined="Desconhecido";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>A activação desta opção expõe o router à Internet. Todas as portas estarão acessíveis a partir da Internet";

var hforward2 = new Object();
hforward2.right1="<b>Intervalo de reencaminhamento de portas: </b>Determinadas aplicações podem requerer a abertura de portas específicas para funcionarem correctamente. Os exemplos destas aplicações incluem servidores e determinados jogos online. Quando um pedido relativo a uma determinada porta é recebido a partir da Internet, o router encaminha os dados para o computador especificado. Por questões de segurança, poderá pretender limitar o reencaminhamento apenas às portas que está a utilizar e desmarcar a caixa de verificação <b>Activar</b> quando tiver terminado.";

var hfilter2 = new Object();
hfilter2.delpolicy="Eliminar a política?";
hfilter2.right1="<b>Política de acesso à Internet: </b>Pode definir até 10 políticas de acesso. Clique em <b>Eliminar</b> para eliminar uma política ou clique em <b>Resumo</b> para ver um resumo da política.";
hfilter2.right2="<b>Estado: </b>Activar ou desactivar uma política.";
hfilter2.right3="<b>Nome da política: </b>Pode atribuir um nome à política.";
hfilter2.right4="<b>Tipo de política: </b>Escolha entre Acesso à Internet ou Tráfego de entrada.";
hfilter2.right5="<b>Dias: </b>Seleccione o dia da semana em que pretende que a política seja aplicada.";
hfilter2.right6="<b>Horas: </b>Introduza a hora do dia em que pretende aplicar a política.";
hfilter2.right7="<b>Serviços bloqueados: </b>Pode optar por bloquear o acesso a determinados serviços. Clique em <b>Adicionar/editar</b> serviços para modificar estas definições.";
hfilter2.right8="<b>Bloquear Web site por URL: </b>Pode bloquear o acesso a determinados Web sites introduzindo o respectivo URL.";
hfilter2.right9="<b>Bloquear Web site por palavra-chave: </b>Pode bloquear o acesso a determinados Web sites através das palavras-chave contidas nas respectivas páginas Web.";

var hportser2 = new Object();
hportser2.submit="Aplicar";

var hwlad2 = new Object();
hwlad2.authtyp="Tipo de autenticação";
hwlad2.basrate="Velocidade básica";
hwlad2.mbps="Mbps";
hwlad2.def="Predefinição";
hwlad2.all="Todas";
hwlad2.defdef="(Predefinição: Predefinição)";
hwlad2.fburst="Rajada de pacotes";
hwlad2.milli="Milissegundos";
hwlad2.range="Intervalo";
hwlad2.frathrh="Limiar de fragmentação";
hwlad2.apiso="Isolamento do ponto de acesso";
hwlad2.off="Desligado";
hwlad2.on="Ligado";
hwlad2.right1="<b>Tipo de autenticação: </b>Pode seleccionar Automático ou Chave partilhada. A autenticação por chave partilhada é mais segura, mas todos os dispositivos na rede terão de suportar este tipo de autenticação.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Modo de rede sem fios: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster é automaticamente activado no modo <b>Misto</b> e no modo <b>Só G</b>."); %> Se pretender excluir os clientes sem fios G, seleccione o modo <b>Só B</b>. Se pretender desactivar o acesso sem fios, seleccione <b>Desactivar</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA - Chave pré-partilhada";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="Só WPA2 - Chave pré-partilhada";
hwlsec2.wpa2radius="Só WPA2 RADIUS";
hwlsec2.wpa2pskmix="WPA2 - Chave pré-partilhada misto";
hwlsec2.wpa2radiusmix="WPA2 RADIUS misto";
hwlsec2.wpa2personal="WPA2-Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="Modo misto WPA2/WPA";
hwlsec2.enterprisemixed="Modo misto WPA2/WPA Enterprise"
hwlsec2.pskpersonal="PSK Personal";
hwlsec2.pskenterprise="PSK Enterprise";
hwlsec2.psk2personal="PSK2 Personal";
hwlsec2.psk2enterprise="PSK2 Enterprise";

hwlsec2.right1="<b>Modo de segurança: </b>Pode escolher Desactivar, WEP, WPA - Chave pré-partilhada, WPA RADIUS ou RADIUS. Todos os dispositivos na rede têm de utilizar o mesmo modo de segurança para poderem comunicar.";

var hwmac2 = new Object();
hwmac2.right1="<b>Clonar endereço MAC: </b>Alguns ISPs requerem o registo do endereço MAC. Se não pretender registar novamente o seu endereço MAC, poderá fazer com que o router clone o endereço MAC registado no ISP.";

var hddns2 = new Object();
hddns2.right1="<b>Serviço DDNS: </b>O DDNS permite-lhe aceder à rede utilizando nomes de domínio em vez de endereços IP. O serviço gere a alteração dos endereços IP e actualiza automaticamente as informações do domínio. Tem de se inscrever neste serviço através da TZO.com ou da DynDNS.org.";
hddns2.right2="Clique <b><a target=_blank href=http://Linksys.tzo.com>aqui</a></b> para EFECTUAR A INSCRIÇÃO numa <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTA DE TESTE GRATUITA da TZO";
hddns2.right3="Clique <b><a target=_blank href=https://controlpanel.tzo.com>aqui</a></b> para Gerir a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conta da TZO";
hddns2.right4="Clique <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>aqui</a></b> para Adquirir uma <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subscrição de DDNS da TZO";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Suporte/Iniciações</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Modo de funcionamento: </b>Se o router estiver a alojar a sua ligação à Internet, seleccione o modo de <b>Gateway</b>. Se existir outro Router na rede, seleccione o modo de <b>Router</b>.";
hrouting2.right2="<b>Seleccione o número do conjunto: </b>Trata-se do número exclusivo da rota; pode definir até 20 rotas.";
hrouting2.right3="<b>Nome da rota: </b>Introduza o nome que pretende atribuir a esta rota.";
hrouting2.right4="<b>IP da LAN de destino: </b>Trata-se do sistema anfitrião remoto ao qual pretende atribuir a rota estática.";
hrouting2.right5="<b>Máscara de sub-rede: </b>Determina a parte do sistema anfitrião e da rede.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="DNS estático 3";
hindex2.hbs="Servidor heart beat";
hindex2.l2tps="Servidor de L2TP";
hindex2.pptps="Servidor de PPTP";
hindex2.hdhcp="<b>Configuração automática - DHCP: </b>Esta é a definição mais frequentemente utilizada por operadores de Cabo.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Esta é a definição mais frequentemente utilizada por fornecedores de DSL.<br>";
hindex2.hpppoe2="<b>Nome de utilizador: </b>Introduza o nome de utilizador fornecido pelo seu ISP.<br>";
hindex2.hpppoe3="<b>Palavra-passe: </b>Introduza a palavra-passe fornecida pelo ISP.<br>";

hindex2.hstatic1="<b>IP estático: </b>Esta é a definição mais frequentemente utilizada por ISPs de classe empresarial.<br>";
hindex2.hstatic2="<b>Endereço IP de Internet: </b>Introduza o endereço IP fornecido pelo seu ISP.<br>";
hindex2.hstatic3="<b>Máscara de sub-rede: </b>Introduza a máscara de sub-rede<br>";

hindex2.hpptp1="<b>PPTP: </b>Esta é a definição mais frequentemente utilizada por fornecedores de DSL.<br>";
hindex2.hpptp2="<b>Endereço IP de Internet: </b>Introduza o endereço IP fornecido pelo seu ISP.<br>";
hindex2.hpptp3="<b>Máscara de sub-rede: </b>Introduza a máscara de sub-rede<br>";
hindex2.hpptp4="<b>Gateway: </b>Introduza o endereço do gateway do seu ISP<br>";

hindex2.hl2tp1="<b>L2TP: </b>Esta definição é utilizada por alguns ISPs na Europa.<br>";
hindex2.hl2tp2="<b>Nome de utilizador: </b>Introduza o nome de utilizador fornecido pelo seu ISP.<br>";
hindex2.hl2tp3="<b>Palavra-passe: </b>Introduza a palavra-passe fornecida pelo ISP.<br>";

hindex2.hhb1="<b>Telstra Cable: </b>Esta é a definição mais frequentemente utilizada por fornecedores de DSL.<br>";
hindex2.hhb2="<b>Nome de utilizador: </b>Introduza o nome de utilizador fornecido pelo seu ISP.<br>";
hindex2.hhb3="<b>Palavra-passe: </b>Introduza a palavra-passe fornecida pelo ISP.<br>";

hindex2.right1="<b>Nome do sistema anfitrião: </b>Introduza o nome do sistema anfitrião fornecido pelo seu ISP.<br>";
hindex2.right2="<b>Nome do domínio: </b>Introduza o nome do domínio fornecido pelo seu ISP.<br>";
hindex2.right3="<b>Endereço IP local: </b>Trata-se do endereço do router.<br>";
hindex2.right4="<b>Máscara de sub-rede: </b>Trata-se da máscara de sub-rede do router.<br><br><br>";
hindex2.right5="<b>Servidor de DHCP: </b>Permite que o router efectue a gestão dos endereços IP.<br>";
hindex2.right6="<b>Endereço IP inicial: </b>O endereço com que pretende começar.<br>";
hindex2.right7="<b>Definição da hora: </b>Seleccione o fuso horário em que se encontra. O router também pode efectuar automaticamente a transição para a hora de Verão.";
hindex2.hdhcps1="<b>Número máximo de utilizadores de DHCP: </b>Pode limitar o número de endereços fornecido pelo router.<br>";

var errmsg2 = new Object();
errmsg2.err0="O Endereço IP do servidor HeartBeat está incorrecto.";
errmsg2.err1="Eliminar a entrada?";
errmsg2.err2="Tem de introduzir um SSID.";
errmsg2.err3="Introduza uma chave partilhada.";
errmsg2.err4=" tem dígitos hexadecimais ilegais ou mais de 63 caracteres.";
errmsg2.err5="A Chave tem de ter entre 8 e 63 caracteres ASCII ou 64 dígitos hexadecimais.";
errmsg2.err6="Tem de introduzir uma chave.";
errmsg2.err7="O comprimento da chave está incorrecto.";
errmsg2.err8="Introduza uma frase-passe.";
errmsg2.err9="O total de verificações excede 40.";
errmsg2.err10="Não são permitidos espaços.";
errmsg2.err11="Depois de terminar todas as acções, clique no botão Aplicar para guardar as definições.";
errmsg2.err12="Tem de introduzir um nome de serviço.";
errmsg2.err13="O nome do serviço já existe.";
errmsg2.err14="O endereço IP da LAN ou a máscara de sub-rede está incorrecta.";

var trigger2 = new Object();
trigger2.ptrigger="Intervalo de accionamento de portas";
trigger2.qos="QoS";
trigger2.trirange="Intervalo accionado";
trigger2.forrange="Intervalo reencaminhado";
trigger2.trirange1="Intervalo accionado";
trigger2.forrange1="Intervalo reencaminhado";
trigger2.sport="Porta inicial";
trigger2.eport="Porta final";
trigger2.right1="Aplicação - Introduza o nome da aplicação do accionador. <b>Intervalo accionado</b> Para cada aplicação, lista o intervalo de números de portas accionado. Consulte a documentação da aplicação da Internet para obter os números das portas necessários.<b>Porta inicial</b> Introduza o número da porta inicial do Intervalo accionado.<b>Porta final</b> Introduza o número da porta final do Intervalo accionado.   <b>Intervalo reencaminhado</b> Para cada aplicação, lista o intervalo de números de portas reencaminhado. Consulte a documentação da aplicação da Internet para obter os números das portas necessários.   <b>Porta inicial</b> Introduza o número da porta inicial do Intervalo reencaminhado.   <b>Porta final</b> Introduza o número da porta final do Intervalo reencaminhado.";

var bakres2 = new Object();
bakres2.conman="Gestão de configurações";
bakres2.bakconf="Cópia de segurança de configurações";
bakres2.resconf="Restaurar configurações";
bakres2.bakres="Cópia de segurança e restauro";
bakres2.file2res="Seleccione um ficheiro para Restaurar.";
bakres2.bakbutton="Cópia de segurança de configurações";
bakres2.resbutton="Restaurar configurações";
bakres2.right1="Pode efectuar uma cópia de segurança da configuração actual caso necessite de repor as predefinições de fábrica do router.";
bakres2.right2="Pode clicar no botão Cópia de segurança para efectuar uma cópia de segurança da configuração actual.";
bakres2.right3="Clique no botão Procurar para procurar um ficheiro de configuração que esteja actualmente guardado no computador.";
bakres2.right4="Clique em Restaurar para substituir todas as configurações actuais pelas existentes no ficheiro de configuração.";

var qos = new Object();
qos.uband="Largura de banda a montante";
qos.bandwidth="Largura de banda";
qos.dpriority="Prioridade do dispositivo";
qos.priority="Prioridade";
qos.dname="Nome do dispositivo";
qos.low="Baixa";
qos.medium="Média";
qos.high="Alta";
qos.highest="A mais alta";
qos.eppriority="Prioridade da porta Ethernet";
qos.flowctrl="Controlo de fluxo";
qos.appriority="Prioridade da aplicação";
qos.specport="Porta específica";
qos.appname="Nome da aplicação";
qos.alert1="Valor de porta fora do intervalo [0 - 65535]";
qos.alert2="O valor da porta inicial é maior do que o valor da porta final";
qos.confirm1="A definição de vários dispositivos, da porta Ethernet ou da aplicação para alta prioridade pode negar o efeito da QoS.\nTem a certeza de que pretende continuar?";

qos.optgame="Optimizar jogos";
qos.wqos="QoS com fios";
qos.wlqos="WMM   ";
qos.wlqos2="QoS sem fios";
qos.edca_ap="Parâmetros AP de EDCA";
qos.edca_sta="Parâmetros STA de EDCA";
qos.wme="Suporte de WMM";
qos.noack="Sem confirmação";
qos.apsdsupp="Suporte de APSD";
qos.defdis="(Predefinição: Desactivar)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Forçado";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Qualidade do serviço)";
qos.intqccpri="Prioridade de acesso à Internet";
qos.category="Categoria";
qos.mediumrec="Média (Recomendado)";
qos.normal="Normal";
qos.msnmess="MSN Messenger";
qos.skype="Skype";
qos.yahoomess="Yahoo Messenger";
qos.winlivemsg="Windows Live Messenger";
qos.aim="AIM";
qos.winmediaplay="Windows Media Player";
qos.realplayer="RealPlayer";
qos.quicktime="QuickTime";
qos.itunes="iTunes";
qos.yahoomusic="Yahoo Music Jukebox";
qos.rhapsody="Rhapsody";
qos.addapp="Adicionar nova aplicação";
qos.onlinegame="Jogos online";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tourment";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.:Shadow Of Chernobyl";
qos.worldofwar="World Of Warcraft";
qos.suprecomm="Supreme Commander";
qos.thesims2="The Sims 2";
qos.titanquest="Titan Quest: Immortal Throne";
qos.battlefield="Battlefield 2142";
qos.halflife2="Half-Life 2: Episode 1";
qos.heroesofmight="Heroes of Might & Magic V";
qos.theelderscrolls="The Elder Scrolls IV";
qos.guildwarsfactions="Guild Wars Factions I & II";
qos.neverwinternights2="Neverwinter Nights 2";
qos.enemyterritory="Enemy Territory";
qos.worldinconflict="World In Conflict";
qos.callofduty4="Call of Duty 4";
qos.sinofasolarempire="Sins of A Solar Empire";
qos.halflifetob="Half-Life 2:The Orange Box";
qos.crysis="Crysis";
qos.frontlines="Frontlines";
qos.warhanmer4k="Warhammer 40,000:Dawn of War:Soulstorm";
qos.addgame="Adicionar novo jogo";
qos.entername="Introduza um nome";
qos.etherport="Porta Ethernet";
qos.voicedevice="Dispositivo de voz";
qos.voicemac="Endereço MAC do dispositivo de voz";
qos.recommend="Recomendação";
qos.game="Jogo";
qos.mymac="Endereço MAC actual do computador";

qos.right1="Estão disponíveis dois tipos de funcionalidades de Qualidade do serviço, a QoS com fios, que controla os dispositivos ligados ao router através de um cabo Ethernet, e a QoS sem fios, que controla os dispositivos que estão ligados ao router sem fios.";
qos.right2="<b>Prioridade do dispositivo:</b>  Pode especificar a prioridade para todo o tráfego proveniente de um dispositivo da rede atribuindo-lhe um Nome de dispositivo, especificando uma prioridade e introduzindo o respectivo endereço MAC.";
qos.right3="<b>Prioridade da porta Ethernet:</b> Pode controlar a velocidade de transferência da porta LAN física à qual o dispositivo está ligado. Pode atribuir uma prioridade Alta ou Baixa ao tráfego de dados dos dispositivos ligados às portas LAN 1 a 4.";
qos.right4="<b>Prioridade da aplicação:</b> Pode controlar a velocidade de transferência relativa à aplicação que está a consumir largura de banda. Seleccione <b>Optimizar jogos</b> para permitir automaticamente que as portas frequentemente utilizadas pelos jogos tenham uma prioridade mais alta. Pode personalizar até oito aplicações introduzindo o número da porta que estas utilizam.";
qos.right5="A QoS sem fios também é referida como <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> pela Wi-Fi Alliance<sup>TM</sup>. Seleccione Activar para utilizar o WMM se estiver a utilizar outros dispositivos sem fios que suportem o WMM.";
qos.right6="<b>Sem confirmação:</b>  Active esta opção se pretender desactivar a confirmação. Se esta opção estiver activada, o router não reenviará os dados se ocorrer um erro.";
qos.exist = "Esta definição já existe.";

var vpn2 = new Object();
vpn2.right1="Pode optar por activar o PPTP, o L2TP da passagem IPSec, para permitir que os dispositivos de rede comuniquem através da VPN.";

var fail = new Object();
fail.msg="Os valores introduzidos são inválidos. Tente novamente.";

var pactrl = new Object();
pactrl.pactrl ="Controlo parental";
pactrl.accsign ="Inscrição da conta";
pactrl.center1 ="A solução de Controlo parental da Linksys ajuda a proteger a sua família enquanto<br>navega na Internet";
pactrl.center2 ="<li>Fácil de configurar</li><br><li>Proteja todos os computadores de sua casa a partir do Router da Linksys</li><br><li>Os relatórios ajudam-no a monitorizar a utilização da Web, do correio electrónico e do IM</li>";
pactrl.center3 ="** A inscrição neste serviço desactivará as políticas de acesso à Internet incorporadas do router";
pactrl.manageacc ="Gerir conta";
pactrl.center4 ="Gerir a conta do Controlo parental";
pactrl.signparental ="Efectuar a inscrição no serviço de Controlo parental";
pactrl.moreinfo ="Mais informações";
pactrl.isprovision ="o dispositivo está aprovisionado";
pactrl.notprovision ="o dispositivo não está aprovisionado";
pactrl.right1 ="O ecrã Controlo parental permite-lhe inscrever-se e gerir a sua conta de Controlo parental da Linksys. O Serviço de controlo parental da Linksys fornece-lhe ferramentas poderosas para controlar a disponibilização de serviços, acesso e funcionalidades da Internet, personalizáveis para cada membro da família.";

var satusroute = new Object();
satusroute.localtime ="Não disponível";

var succ = new Object();
succ.autoreturn ="Regressará à página anterior após alguns segundos.";
succ.return_desc = "Regressará à página Actualização segura após alguns segundos.";
succ.interrupt_desc = "Nunca interrompa a actualização; aguarde...";
succ.return_index = "Regressará à página Configuração básica após alguns segundos. ";

var gn = new Object();
gn.gnip="IP da rede de convidado";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nome da rede convidado(SSID)";
gn.err1="O endereço IP da rede de convidado não pode ser da mesma sub-rede do endereço LAN.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Duração da conta";
gn.minutes="horas";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
    
gn.title="Acesso de convidados";
gn.tips0="Palavra-passe incorrecta, introduza-a novamente";
gn.tips1="Introduza a palavra-passe para aceder a este Hotspot.";
gn.login=" Iniciar sessão";
gn.err3="O SSID do Wireless 5G é o mesmo que o SSID convidado, por favor altere-o.";
gn.err4="O SSID do Wireless 2,4G é o mesmo que o SSID convidado, por favor altere-o.";
gn.err5="O endereço IP daLAN não pode ser da mesma sub-rede do endereço IP da rede de convidado.";
gn.err6="A rede 192.168.33.0/24  (endereços IP 192.168.33.0 – 255) está reservada para a  Rede Sem Fios de Convidado. Utilize um endereço IP diferente.";
gn.err7="A funcionalidade de Acesso de Convidado está desactivada porque o seu router está a utilizar a rede 192.168.33.0 , que está reservada para esta funcionalidade.";
gn.tips6=" Introduza a palavra-passe de acesso de convidados para aceder à Internet. Caso não saiba a palavra-passe, peça-a ao proprietário. A palavra-passe de acesso de convidados pode ser encontrada usando o Linksys Connect.";
gn.dv="Vista para computador";
gn.mv="Vista para telemóvel";
gn.context="Introduza a palavra-passe de acesso de convidados para aceder à Internet. Caso não saiba a palavra-passe, peça-a ao proprietário. A palavra-passe de acesso de convidados pode ser encontrada usando o Linksys Connect.";
gn.nat="O acesso de convidados não estará disponível se NAT estiver desactivado.  Continuar e guardar as alterações?";






