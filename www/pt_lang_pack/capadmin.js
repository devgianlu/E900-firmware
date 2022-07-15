var adtopmenu = new Object();
adtopmenu.manage="Gest�o";
adtopmenu.log="Registo";
adtopmenu.diag="Diagn�sticos";
adtopmenu.facdef="Predefini��es de f�brica";
adtopmenu.upgarde="Actualiza��o do firmware";
adtopmenu.lang="Idioma";
adtopmenu.multilang="V�rios idiomas";
adtopmenu.selan="Seleccione o idioma";

var adleftmenu = new Object();
adleftmenu.routerpsw="Palavra-passe do router";
adleftmenu.localaccess="Acesso ao router";
adleftmenu.routerpsw="Palavra-passe do router";
adleftmenu.remoteaccess="Acesso de gest�o remota";
adleftmenu.ping="Teste de ping";
adleftmenu.pingparam="Par�metros de ping";
adleftmenu.tracertest="Teste de rastreio de rota";
adleftmenu.tracerparam="Par�metros de rastreio de rota";
adleftmenu.upgradefw="Actualizar firmware";
adleftmenu.advfeature="Fun��es avan�adas";
adleftmenu.reboot="Reiniciar";

var mgt = new Object();
mgt.reconfirm="Introduza novamente para confirmar";
mgt.remotemgt="Gest�o &nbsp;remota";
mgt.webassistant="Assistente da Internet Linksys";
mgt.mgtport="Porta de gest�o";
mgt.rmtmgtport="Porta de gest�o remota";
mgt.https="Utilizar https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Actualiza��o remota";
mgt.remoteip="Endere�o IP remoto permitido";
mgt.anyip="Qualquer endere�o IP";
mgt.upnpconfig="Permitir que os utilizadores configurem";
mgt.upnpinternetdis="Permitir que os utilizadores desactivem <BR>&nbsp;o acesso � Internet";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Tabela de registos de recep��o";
log.srcip="IP de origem";
log.desportnum="N�mero da porta de destino";
log.outlogtbl="Tabela de registos de envio";
log.lanip="IP da LAN";
log.desurlip="URL/IP de destino";
log.portnum="N�mero do servi�o/porta";
log.inlog="Registo de recep��o";
log.outlog="Registo de envio";
log.seclog="Registo de seguran�a";
log.dhcplog="Registo de cliente DHCP";
log.type="Tipo";
log.remotelog="Endere�o IP do visualizador de registos";
log.msg1="(0 significa desactivado)";
log.lanipaddr="Endere�o IP da LAN";
log.dstip="Endere�o de URL ou IP de destino";
log.srvport="N�mero da porta (servi�o)";

var ping = new Object();
ping.ipdomain="Endere�o IP ou Nome do dom�nio";
ping.ipurl="Endere�o IP ou URL";
ping.times="N�mero de pings";
ping.unlimited="Ilimitado";
ping.pktsize="Tamanho do pacote";
ping.unreach="N�o � poss�vel contactar a rede";
ping.pkttr="Pacotes transmitidos";
ping.pktrx="Pacotes recebidos";
ping.pktloss="Perda de pacotes";
ping.databyte="bytes de dados";
ping.datastat="estat�sticas de dados";
ping.roundtrip="tempo de transmiss�o m�n./m�d./m�x.";
ping.bytefrom="bytes de";
ping.time="Hora";
ping.reqout="O tempo limite do pedido foi excedido";
ping.unknown="Sistema anfitri�o desconhecido";

var tracert = new Object();
tracert.unreach="N�o � poss�vel contactar a rede";
tracert.traceto="rastreio de rota para";
tracert.hopsmax="m�ximo de saltos";
tracert.bytepkt="pacotes de bytes";
tracert.reqout="O tempo limite do pedido foi excedido";
tracert.tracecomp="Rastreio conclu�do";
tracert.unknown="Sistema anfitri�o desconhecido";

var facdef = new Object();
facdef.refacdefa="Restaurar predefini��es de f�brica";
facdef.refacdefa2="Restaurar predefini��es de f�brica";
facdef.helpmsg="Esta funcionalidade permite repor os valores predefinidos de todas as defini��es de configura��o do Router. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Seleccione um ficheiro para actualizar";
fwupgrade.warning="<B>Aviso: </B>A actualiza��o do firmware pode demorar alguns minutos; n�o desligue <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a alimenta��o nem prima o bot�o de reposi��o.";
fwupgrade.notinterrupted="A actualiza��o N�O pode ser interrompida!";
fwupgrade.upgradesuccess="Actualiza��o efectuada com �xito.";
fwupgrade.restoresuccess="Restauro efectuado com �xito.";
fwupgrade.reboot="A reiniciar......";
fwupgrade.helpmsg="Transfira o ficheiro de actualiza��o do firmware do router a partir do Web site em <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Clique em <b>Procurar/Seleccionar</b> e seleccione o ficheiro de actualiza��o do firmware. Clique em <b>Iniciar actualiza��o</b>."
fwupgrade.safeupmsg1="Se pretender utilizar a actualiza��o segura, primeiro altere o IP da LAN para \"192.168.1.1\"!";
fwupgrade.safeupmsg2="Tem a certeza de que pretende utilizar o modo seguro para a actualiza��o? ";

var lang = new Object();

lang.en="English";
lang.dk="Dansk";
lang.de="Deutsch";
lang.es="Espa�ol";
lang.fr="Fran�ais";
lang.frc="Fran�ais canadien";
lang.it="Italiano";
lang.nl="Nederlands";
lang.pt="Portugu�s";
lang.se="Svenska";
lang.ru="Russo";
lang.pl="Polaco";
lang.ar="�rabe";
lang.tr="Turco";
lang.title="Actualiza��o do pacote de idiomas";
lang.uploadfile="Seleccione um ficheiro de idioma para actualizar";

var adbutton = new Object();
adbutton.inlog="Registo de recep��o";
adbutton.outlog="Registo de envio";
adbutton.ping="Ping";
adbutton.tracer="Rastrear rota";
adbutton.safeupgrade="Actualiza��o segura";
adbutton.upgrade="Actualizar";
adbutton.stop="Parar";
adbutton.clearlog="Limpar registo";
adbutton.traceroute="Rastrear rota";
adbutton.starttracer="Iniciar rastreio de rota";
adbutton.startupgrade="Iniciar actualiza��o";
adbutton.startping="Iniciar ping";
adbutton.viewlog="Ver registo";
adbutton.clear="Limpar";
adbutton.savelog="Guardar registo";
adbutton.dhcpres="Reserva DHCP";
adbutton.startrestore="Iniciar restauro";
adbutton.starttest="Iniciar teste";








