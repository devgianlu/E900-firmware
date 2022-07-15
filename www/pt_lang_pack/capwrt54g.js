var firewall2 = new Object();
firewall2.natredir="Filtrar redireccionamento de NAT apenas para Internet IPv4";
firewall2.ident="Filtrar IDENT (Porta 113)";
firewall2.multi="Filtrar multicast";
firewall2.internetfilter="Filtro da Internet";
firewall2.webfilter="Filtro Web";

var hupgrade = new Object();
hupgrade.right1="Clique no bot�o Procurar para seleccionar o ficheiro de firmware a carregar no router.";
hupgrade.right2="Clique no bot�o Actualizar para iniciar o processo de actualiza��o. A actualiza��o n�o pode ser interrompida.";
hupgrade.wrimage="O ficheiro de imagem � incorrecto.";

var hfacdef = new Object();
hfacdef.right1="Esta ac��o ir� repor todas as predefini��es de f�brica. Todas as defini��es ser�o apagadas.";
hfacdef.warning="Aviso! Se clicar em OK, as predefini��es de f�brica do dispositivo ser�o repostas e todas as defini��es anteriores ser�o apagadas.";

var hdiag = new Object();
hdiag.right1="Introduza o endere�o IP ou nome do dom�nio ao qual pretende enviar um ping e clique no bot�o Ping.";
hdiag.right2="Introduza o endere�o IP ou nome do dom�nio que pretende rastrear e, em seguida, clique no bot�o Rastrear rota";

var hlog = new Object();
hlog.right1="Poder� activar ou desactivar a utiliza��o dos registos de <b>Recep��o</b> e <b>Envio</b> seleccionando o bot�o de op��o adequado.";

var manage2 = new Object();
manage2.webacc="Acesso de gest�o local";
manage2.accser="Acesso atrav�s do servidor";
manage2.wlacc="Acesso sem fios � &nbsp;Web";
manage2.vapass="A palavra-passe de confirma��o n�o corresponde � Palavra-passe introduzida. Introduza novamente a palavra-passe.";
manage2.passnot="A confirma��o da palavra-passe n�o corresponde.";
manage2.selweb="Tem de seleccionar um servidor Web.";
manage2.changpass="O Router est� actualmente configurado para a palavra-passe predefinida. Como medida de seguran�a, tem de alterar a palavra-passe antes de poder activar a funcionalidade de Gest�o Remota. Clique no bot�o OK para alterar a palavra-passe. Clique no bot�o Cancelar para manter a funcionalidade de Gest�o Remota desactivada.";
manage2.webutiacc="Acesso por";
manage2.wlutiacc="Acesso sem fios";

var hmanage2 = new Object();
hmanage2.right1="<b>Acesso local ao router: </b>Pode alterar a palavra-passe do Router a partir daqui. Introduza a nova palavra-passe do Router e, em seguida, introduza-a novamente no campo Introduza novamente para confirmar.<br>";
hmanage2.right2="<b>Acesso � Web: </b>Permite-lhe configurar as op��es de acesso ao utilit�rio baseado na Web do router.";
hmanage2.right3="<b>Acesso remoto ao router: </b>Permite-lhe aceder remotamente ao router. Seleccione a porta que pretende utilizar. Tem de alterar a palavra-passe do router se ainda estiver a utilizar a palavra-passe predefinida.";
hmanage2.right4="<b>UPnP: </b>Utilizado por determinados programas para abrir automaticamente portas para comunica��o.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Endere�o MAC</b>. Trata-se do endere�o MAC do Router apresentado na rede sem fios local.";
hstatwl2.right2="<b>Modo</b>. Conforme seleccionado no separador Sem fios, este campo apresenta o modo sem fios Misto, S� G ou Desactivado utilizado pela rede.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Endere�o MAC</b>. Trata-se do endere�o MAC do Router apresentado na rede Ethernet local.";
hstatlan2.right2="<b>Endere�o IP</b>. Mostra o endere�o IP do Router apresentado na rede Ethernet local.";
hstatlan2.right3="<b>M�scara de sub-rede</b>. Quando o Router est� a utilizar uma m�scara de sub-rede, esta � apresentada aqui.";
hstatlan2.right4="<b>Servidor de DHCP</b>. Se estiver a utilizar o Router como servidor de DHCP, essa informa��o ser� apresentada aqui.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Est�tico";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="A ligar";
hstatrouter2.disconnected="Desligado";
hstatrouter2.disconnect="Desligar";
hstatrouter2.right1="<b>Vers�o do firmware.  </b>Trata-se do firmware actual do Router.";
hstatrouter2.right2="<b>Hora actual.  </b>Apresenta a hora definida no separador Configura��o.";
hstatrouter2.right3="<b>Endere�o MAC.  </b>Trata-se do endere�o MAC do Router apresentado ao ISP.";
hstatrouter2.right4="<b>Nome do router.  </b>Trata-se do nome espec�fico do Router, definido no separador Configura��o.";
hstatrouter2.right5="<b>Tipo de configura��o.  </b>Apresenta as informa��es requeridas pelo ISP para estabelecer liga��o � Internet. Estas informa��es foram introduzidas no separador Configura��o. Pode <b>Ligar</b> ou <b>Desligar</b> a liga��o clicando no bot�o.";
hstatrouter2.authfail=" falha na autentica��o";
hstatrouter2.noip="N�o � poss�vel obter um endere�o IP a partir de ";
hstatrouter2.negfail=" falha na negocia��o";
hstatrouter2.lcpfail=" Falha na negocia��o de LCP";
hstatrouter2.tcpfail="N�o � poss�vel criar uma liga��o de TCP a ";
hstatrouter2.noconn="N�o � poss�vel ligar a ";
hstatrouter2.server=" servidor";
hstatrouter2.pppoenoip="N�o � poss�vel obter um endere�o IP a partir de PPPoE";
hstatrouter2.undetermined="Desconhecido";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>A activa��o desta op��o exp�e o router � Internet. Todas as portas estar�o acess�veis a partir da Internet";

var hforward2 = new Object();
hforward2.right1="<b>Intervalo de reencaminhamento de portas: </b>Determinadas aplica��es podem requerer a abertura de portas espec�ficas para funcionarem correctamente. Os exemplos destas aplica��es incluem servidores e determinados jogos online. Quando um pedido relativo a uma determinada porta � recebido a partir da Internet, o router encaminha os dados para o computador especificado. Por quest�es de seguran�a, poder� pretender limitar o reencaminhamento apenas �s portas que est� a utilizar e desmarcar a caixa de verifica��o <b>Activar</b> quando tiver terminado.";

var hfilter2 = new Object();
hfilter2.delpolicy="Eliminar a pol�tica?";
hfilter2.right1="<b>Pol�tica de acesso � Internet: </b>Pode definir at� 10 pol�ticas de acesso. Clique em <b>Eliminar</b> para eliminar uma pol�tica ou clique em <b>Resumo</b> para ver um resumo da pol�tica.";
hfilter2.right2="<b>Estado: </b>Activar ou desactivar uma pol�tica.";
hfilter2.right3="<b>Nome da pol�tica: </b>Pode atribuir um nome � pol�tica.";
hfilter2.right4="<b>Tipo de pol�tica: </b>Escolha entre Acesso � Internet ou Tr�fego de entrada.";
hfilter2.right5="<b>Dias: </b>Seleccione o dia da semana em que pretende que a pol�tica seja aplicada.";
hfilter2.right6="<b>Horas: </b>Introduza a hora do dia em que pretende aplicar a pol�tica.";
hfilter2.right7="<b>Servi�os bloqueados: </b>Pode optar por bloquear o acesso a determinados servi�os. Clique em <b>Adicionar/editar</b> servi�os para modificar estas defini��es.";
hfilter2.right8="<b>Bloquear Web site por URL: </b>Pode bloquear o acesso a determinados Web sites introduzindo o respectivo URL.";
hfilter2.right9="<b>Bloquear Web site por palavra-chave: </b>Pode bloquear o acesso a determinados Web sites atrav�s das palavras-chave contidas nas respectivas p�ginas Web.";

var hportser2 = new Object();
hportser2.submit="Aplicar";

var hwlad2 = new Object();
hwlad2.authtyp="Tipo de autentica��o";
hwlad2.basrate="Velocidade b�sica";
hwlad2.mbps="Mbps";
hwlad2.def="Predefini��o";
hwlad2.all="Todas";
hwlad2.defdef="(Predefini��o: Predefini��o)";
hwlad2.fburst="Rajada de pacotes";
hwlad2.milli="Milissegundos";
hwlad2.range="Intervalo";
hwlad2.frathrh="Limiar de fragmenta��o";
hwlad2.apiso="Isolamento do ponto de acesso";
hwlad2.off="Desligado";
hwlad2.on="Ligado";
hwlad2.right1="<b>Tipo de autentica��o: </b>Pode seleccionar Autom�tico ou Chave partilhada. A autentica��o por chave partilhada � mais segura, mas todos os dispositivos na rede ter�o de suportar este tipo de autentica��o.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Modo de rede sem fios: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster � automaticamente activado no modo <b>Misto</b> e no modo <b>S� G</b>."); %> Se pretender excluir os clientes sem fios G, seleccione o modo <b>S� B</b>. Se pretender desactivar o acesso sem fios, seleccione <b>Desactivar</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA - Chave pr�-partilhada";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="S� WPA2 - Chave pr�-partilhada";
hwlsec2.wpa2radius="S� WPA2 RADIUS";
hwlsec2.wpa2pskmix="WPA2 - Chave pr�-partilhada misto";
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

hwlsec2.right1="<b>Modo de seguran�a: </b>Pode escolher Desactivar, WEP, WPA - Chave pr�-partilhada, WPA RADIUS ou RADIUS. Todos os dispositivos na rede t�m de utilizar o mesmo modo de seguran�a para poderem comunicar.";

var hwmac2 = new Object();
hwmac2.right1="<b>Clonar endere�o MAC: </b>Alguns ISPs requerem o registo do endere�o MAC. Se n�o pretender registar novamente o seu endere�o MAC, poder� fazer com que o router clone o endere�o MAC registado no ISP.";

var hddns2 = new Object();
hddns2.right1="<b>Servi�o DDNS: </b>O DDNS permite-lhe aceder � rede utilizando nomes de dom�nio em vez de endere�os IP. O servi�o gere a altera��o dos endere�os IP e actualiza automaticamente as informa��es do dom�nio. Tem de se inscrever neste servi�o atrav�s da TZO.com ou da DynDNS.org.";
hddns2.right2="Clique <b><a target=_blank href=http://Linksys.tzo.com>aqui</a></b> para EFECTUAR A INSCRI��O numa <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTA DE TESTE GRATUITA da TZO";
hddns2.right3="Clique <b><a target=_blank href=https://controlpanel.tzo.com>aqui</a></b> para Gerir a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conta da TZO";
hddns2.right4="Clique <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>aqui</a></b> para Adquirir uma <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subscri��o de DDNS da TZO";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Suporte/Inicia��es</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Modo de funcionamento: </b>Se o router estiver a alojar a sua liga��o � Internet, seleccione o modo de <b>Gateway</b>. Se existir outro Router na rede, seleccione o modo de <b>Router</b>.";
hrouting2.right2="<b>Seleccione o n�mero do conjunto: </b>Trata-se do n�mero exclusivo da rota; pode definir at� 20 rotas.";
hrouting2.right3="<b>Nome da rota: </b>Introduza o nome que pretende atribuir a esta rota.";
hrouting2.right4="<b>IP da LAN de destino: </b>Trata-se do sistema anfitri�o remoto ao qual pretende atribuir a rota est�tica.";
hrouting2.right5="<b>M�scara de sub-rede: </b>Determina a parte do sistema anfitri�o e da rede.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="DNS est�tico 3";
hindex2.hbs="Servidor heart beat";
hindex2.l2tps="Servidor de L2TP";
hindex2.pptps="Servidor de PPTP";
hindex2.hdhcp="<b>Configura��o autom�tica - DHCP: </b>Esta � a defini��o mais frequentemente utilizada por operadores de Cabo.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Esta � a defini��o mais frequentemente utilizada por fornecedores de DSL.<br>";
hindex2.hpppoe2="<b>Nome de utilizador: </b>Introduza o nome de utilizador fornecido pelo seu ISP.<br>";
hindex2.hpppoe3="<b>Palavra-passe: </b>Introduza a palavra-passe fornecida pelo ISP.<br>";

hindex2.hstatic1="<b>IP est�tico: </b>Esta � a defini��o mais frequentemente utilizada por ISPs de classe empresarial.<br>";
hindex2.hstatic2="<b>Endere�o IP de Internet: </b>Introduza o endere�o IP fornecido pelo seu ISP.<br>";
hindex2.hstatic3="<b>M�scara de sub-rede: </b>Introduza a m�scara de sub-rede<br>";

hindex2.hpptp1="<b>PPTP: </b>Esta � a defini��o mais frequentemente utilizada por fornecedores de DSL.<br>";
hindex2.hpptp2="<b>Endere�o IP de Internet: </b>Introduza o endere�o IP fornecido pelo seu ISP.<br>";
hindex2.hpptp3="<b>M�scara de sub-rede: </b>Introduza a m�scara de sub-rede<br>";
hindex2.hpptp4="<b>Gateway: </b>Introduza o endere�o do gateway do seu ISP<br>";

hindex2.hl2tp1="<b>L2TP: </b>Esta defini��o � utilizada por alguns ISPs na Europa.<br>";
hindex2.hl2tp2="<b>Nome de utilizador: </b>Introduza o nome de utilizador fornecido pelo seu ISP.<br>";
hindex2.hl2tp3="<b>Palavra-passe: </b>Introduza a palavra-passe fornecida pelo ISP.<br>";

hindex2.hhb1="<b>Telstra Cable: </b>Esta � a defini��o mais frequentemente utilizada por fornecedores de DSL.<br>";
hindex2.hhb2="<b>Nome de utilizador: </b>Introduza o nome de utilizador fornecido pelo seu ISP.<br>";
hindex2.hhb3="<b>Palavra-passe: </b>Introduza a palavra-passe fornecida pelo ISP.<br>";

hindex2.right1="<b>Nome do sistema anfitri�o: </b>Introduza o nome do sistema anfitri�o fornecido pelo seu ISP.<br>";
hindex2.right2="<b>Nome do dom�nio: </b>Introduza o nome do dom�nio fornecido pelo seu ISP.<br>";
hindex2.right3="<b>Endere�o IP local: </b>Trata-se do endere�o do router.<br>";
hindex2.right4="<b>M�scara de sub-rede: </b>Trata-se da m�scara de sub-rede do router.<br><br><br>";
hindex2.right5="<b>Servidor de DHCP: </b>Permite que o router efectue a gest�o dos endere�os IP.<br>";
hindex2.right6="<b>Endere�o IP inicial: </b>O endere�o com que pretende come�ar.<br>";
hindex2.right7="<b>Defini��o da hora: </b>Seleccione o fuso hor�rio em que se encontra. O router tamb�m pode efectuar automaticamente a transi��o para a hora de Ver�o.";
hindex2.hdhcps1="<b>N�mero m�ximo de utilizadores de DHCP: </b>Pode limitar o n�mero de endere�os fornecido pelo router.<br>";

var errmsg2 = new Object();
errmsg2.err0="O Endere�o IP do servidor HeartBeat est� incorrecto.";
errmsg2.err1="Eliminar a entrada?";
errmsg2.err2="Tem de introduzir um SSID.";
errmsg2.err3="Introduza uma chave partilhada.";
errmsg2.err4=" tem d�gitos hexadecimais ilegais ou mais de 63 caracteres.";
errmsg2.err5="A Chave tem de ter entre 8 e 63 caracteres ASCII ou 64 d�gitos hexadecimais.";
errmsg2.err6="Tem de introduzir uma chave.";
errmsg2.err7="O comprimento da chave est� incorrecto.";
errmsg2.err8="Introduza uma frase-passe.";
errmsg2.err9="O total de verifica��es excede 40.";
errmsg2.err10="N�o s�o permitidos espa�os.";
errmsg2.err11="Depois de terminar todas as ac��es, clique no bot�o Aplicar para guardar as defini��es.";
errmsg2.err12="Tem de introduzir um nome de servi�o.";
errmsg2.err13="O nome do servi�o j� existe.";
errmsg2.err14="O endere�o IP da LAN ou a m�scara de sub-rede est� incorrecta.";

var trigger2 = new Object();
trigger2.ptrigger="Intervalo de accionamento de portas";
trigger2.qos="QoS";
trigger2.trirange="Intervalo accionado";
trigger2.forrange="Intervalo reencaminhado";
trigger2.trirange1="Intervalo accionado";
trigger2.forrange1="Intervalo reencaminhado";
trigger2.sport="Porta inicial";
trigger2.eport="Porta final";
trigger2.right1="Aplica��o - Introduza o nome da aplica��o do accionador. <b>Intervalo accionado</b> Para cada aplica��o, lista o intervalo de n�meros de portas accionado. Consulte a documenta��o da aplica��o da Internet para obter os n�meros das portas necess�rios.<b>Porta inicial</b> Introduza o n�mero da porta inicial do Intervalo accionado.<b>Porta final</b> Introduza o n�mero da porta final do Intervalo accionado.   <b>Intervalo reencaminhado</b> Para cada aplica��o, lista o intervalo de n�meros de portas reencaminhado. Consulte a documenta��o da aplica��o da Internet para obter os n�meros das portas necess�rios.   <b>Porta inicial</b> Introduza o n�mero da porta inicial do Intervalo reencaminhado.   <b>Porta final</b> Introduza o n�mero da porta final do Intervalo reencaminhado.";

var bakres2 = new Object();
bakres2.conman="Gest�o de configura��es";
bakres2.bakconf="C�pia de seguran�a de configura��es";
bakres2.resconf="Restaurar configura��es";
bakres2.bakres="C�pia de seguran�a e restauro";
bakres2.file2res="Seleccione um ficheiro para Restaurar.";
bakres2.bakbutton="C�pia de seguran�a de configura��es";
bakres2.resbutton="Restaurar configura��es";
bakres2.right1="Pode efectuar uma c�pia de seguran�a da configura��o actual caso necessite de repor as predefini��es de f�brica do router.";
bakres2.right2="Pode clicar no bot�o C�pia de seguran�a para efectuar uma c�pia de seguran�a da configura��o actual.";
bakres2.right3="Clique no bot�o Procurar para procurar um ficheiro de configura��o que esteja actualmente guardado no computador.";
bakres2.right4="Clique em Restaurar para substituir todas as configura��es actuais pelas existentes no ficheiro de configura��o.";

var qos = new Object();
qos.uband="Largura de banda a montante";
qos.bandwidth="Largura de banda";
qos.dpriority="Prioridade do dispositivo";
qos.priority="Prioridade";
qos.dname="Nome do dispositivo";
qos.low="Baixa";
qos.medium="M�dia";
qos.high="Alta";
qos.highest="A mais alta";
qos.eppriority="Prioridade da porta Ethernet";
qos.flowctrl="Controlo de fluxo";
qos.appriority="Prioridade da aplica��o";
qos.specport="Porta espec�fica";
qos.appname="Nome da aplica��o";
qos.alert1="Valor de porta fora do intervalo [0 - 65535]";
qos.alert2="O valor da porta inicial � maior do que o valor da porta final";
qos.confirm1="A defini��o de v�rios dispositivos, da porta Ethernet ou da aplica��o para alta prioridade pode negar o efeito da QoS.\nTem a certeza de que pretende continuar?";

qos.optgame="Optimizar jogos";
qos.wqos="QoS com fios";
qos.wlqos="WMM   ";
qos.wlqos2="QoS sem fios";
qos.edca_ap="Par�metros AP de EDCA";
qos.edca_sta="Par�metros STA de EDCA";
qos.wme="Suporte de WMM";
qos.noack="Sem confirma��o";
qos.apsdsupp="Suporte de APSD";
qos.defdis="(Predefini��o: Desactivar)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="For�ado";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Qualidade do servi�o)";
qos.intqccpri="Prioridade de acesso � Internet";
qos.category="Categoria";
qos.mediumrec="M�dia (Recomendado)";
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
qos.addapp="Adicionar nova aplica��o";
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
qos.voicemac="Endere�o MAC do dispositivo de voz";
qos.recommend="Recomenda��o";
qos.game="Jogo";
qos.mymac="Endere�o MAC actual do computador";

qos.right1="Est�o dispon�veis dois tipos de funcionalidades de Qualidade do servi�o, a QoS com fios, que controla os dispositivos ligados ao router atrav�s de um cabo Ethernet, e a QoS sem fios, que controla os dispositivos que est�o ligados ao router sem fios.";
qos.right2="<b>Prioridade do dispositivo:</b>  Pode especificar a prioridade para todo o tr�fego proveniente de um dispositivo da rede atribuindo-lhe um Nome de dispositivo, especificando uma prioridade e introduzindo o respectivo endere�o MAC.";
qos.right3="<b>Prioridade da porta Ethernet:</b> Pode controlar a velocidade de transfer�ncia da porta LAN f�sica � qual o dispositivo est� ligado. Pode atribuir uma prioridade Alta ou Baixa ao tr�fego de dados dos dispositivos ligados �s portas LAN 1 a 4.";
qos.right4="<b>Prioridade da aplica��o:</b> Pode controlar a velocidade de transfer�ncia relativa � aplica��o que est� a consumir largura de banda. Seleccione <b>Optimizar jogos</b> para permitir automaticamente que as portas frequentemente utilizadas pelos jogos tenham uma prioridade mais alta. Pode personalizar at� oito aplica��es introduzindo o n�mero da porta que estas utilizam.";
qos.right5="A QoS sem fios tamb�m � referida como <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> pela Wi-Fi Alliance<sup>TM</sup>. Seleccione Activar para utilizar o WMM se estiver a utilizar outros dispositivos sem fios que suportem o WMM.";
qos.right6="<b>Sem confirma��o:</b>  Active esta op��o se pretender desactivar a confirma��o. Se esta op��o estiver activada, o router n�o reenviar� os dados se ocorrer um erro.";
qos.exist = "Esta defini��o j� existe.";

var vpn2 = new Object();
vpn2.right1="Pode optar por activar o PPTP, o L2TP da passagem IPSec, para permitir que os dispositivos de rede comuniquem atrav�s da VPN.";

var fail = new Object();
fail.msg="Os valores introduzidos s�o inv�lidos. Tente novamente.";

var pactrl = new Object();
pactrl.pactrl ="Controlo parental";
pactrl.accsign ="Inscri��o da conta";
pactrl.center1 ="A solu��o de Controlo parental da Linksys ajuda a proteger a sua fam�lia enquanto<br>navega na Internet";
pactrl.center2 ="<li>F�cil de configurar</li><br><li>Proteja todos os computadores de sua casa a partir do Router da Linksys</li><br><li>Os relat�rios ajudam-no a monitorizar a utiliza��o da Web, do correio electr�nico e do IM</li>";
pactrl.center3 ="** A inscri��o neste servi�o desactivar� as pol�ticas de acesso � Internet incorporadas do router";
pactrl.manageacc ="Gerir conta";
pactrl.center4 ="Gerir a conta do Controlo parental";
pactrl.signparental ="Efectuar a inscri��o no servi�o de Controlo parental";
pactrl.moreinfo ="Mais informa��es";
pactrl.isprovision ="o dispositivo est� aprovisionado";
pactrl.notprovision ="o dispositivo n�o est� aprovisionado";
pactrl.right1 ="O ecr� Controlo parental permite-lhe inscrever-se e gerir a sua conta de Controlo parental da Linksys. O Servi�o de controlo parental da Linksys fornece-lhe ferramentas poderosas para controlar a disponibiliza��o de servi�os, acesso e funcionalidades da Internet, personaliz�veis para cada membro da fam�lia.";

var satusroute = new Object();
satusroute.localtime ="N�o dispon�vel";

var succ = new Object();
succ.autoreturn ="Regressar� � p�gina anterior ap�s alguns segundos.";
succ.return_desc = "Regressar� � p�gina Actualiza��o segura ap�s alguns segundos.";
succ.interrupt_desc = "Nunca interrompa a actualiza��o; aguarde...";
succ.return_index = "Regressar� � p�gina Configura��o b�sica ap�s alguns segundos. ";

var gn = new Object();
gn.gnip="IP da rede de convidado";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nome da rede convidado(SSID)";
gn.err1="O endere�o IP da rede de convidado n�o pode ser da mesma sub-rede do endere�o LAN.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Dura��o da conta";
gn.minutes="horas";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
    
gn.title="Acesso de convidados";
gn.tips0="Palavra-passe incorrecta, introduza-a novamente";
gn.tips1="Introduza a palavra-passe para aceder a este Hotspot.";
gn.login=" Iniciar sess�o";
gn.err3="O SSID do Wireless 5G � o mesmo que o SSID convidado, por favor altere-o.";
gn.err4="O SSID do Wireless 2,4G � o mesmo que o SSID convidado, por favor altere-o.";
gn.err5="O endere�o IP daLAN n�o pode ser da mesma sub-rede do endere�o IP da rede de convidado.";
gn.err6="A rede 192.168.33.0/24  (endere�os IP 192.168.33.0 � 255) est� reservada para a  Rede Sem Fios de Convidado. Utilize um endere�o IP diferente.";
gn.err7="A funcionalidade de Acesso de Convidado est� desactivada porque o seu router est� a utilizar a rede 192.168.33.0 , que est� reservada para esta funcionalidade.";
gn.tips6=" Introduza a palavra-passe de acesso de convidados para aceder � Internet. Caso n�o saiba a palavra-passe, pe�a-a ao propriet�rio. A palavra-passe de acesso de convidados pode ser encontrada usando o Linksys Connect.";
gn.dv="Vista para computador";
gn.mv="Vista para telem�vel";
gn.context="Introduza a palavra-passe de acesso de convidados para aceder � Internet. Caso n�o saiba a palavra-passe, pe�a-a ao propriet�rio. A palavra-passe de acesso de convidados pode ser encontrada usando o Linksys Connect.";
gn.nat="O acesso de convidados n�o estar� dispon�vel se NAT estiver desactivado.  Continuar e guardar as altera��es?";






