var adtopmenu = new Object();
adtopmenu.manage="Gestão";
adtopmenu.log="Registo";
adtopmenu.diag="Diagnósticos";
adtopmenu.facdef="Predefinições de fábrica";
adtopmenu.upgarde="Actualização do firmware";
adtopmenu.lang="Idioma";
adtopmenu.multilang="Vários idiomas";
adtopmenu.selan="Seleccione o idioma";

var adleftmenu = new Object();
adleftmenu.routerpsw="Palavra-passe do router";
adleftmenu.localaccess="Acesso ao router";
adleftmenu.routerpsw="Palavra-passe do router";
adleftmenu.remoteaccess="Acesso de gestão remota";
adleftmenu.ping="Teste de ping";
adleftmenu.pingparam="Parâmetros de ping";
adleftmenu.tracertest="Teste de rastreio de rota";
adleftmenu.tracerparam="Parâmetros de rastreio de rota";
adleftmenu.upgradefw="Actualizar firmware";
adleftmenu.advfeature="Funções avançadas";
adleftmenu.reboot="Reiniciar";

var mgt = new Object();
mgt.reconfirm="Introduza novamente para confirmar";
mgt.remotemgt="Gestão &nbsp;remota";
mgt.webassistant="Assistente da Internet Linksys";
mgt.mgtport="Porta de gestão";
mgt.rmtmgtport="Porta de gestão remota";
mgt.https="Utilizar https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Actualização remota";
mgt.remoteip="Endereço IP remoto permitido";
mgt.anyip="Qualquer endereço IP";
mgt.upnpconfig="Permitir que os utilizadores configurem";
mgt.upnpinternetdis="Permitir que os utilizadores desactivem <BR>&nbsp;o acesso à Internet";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Tabela de registos de recepção";
log.srcip="IP de origem";
log.desportnum="Número da porta de destino";
log.outlogtbl="Tabela de registos de envio";
log.lanip="IP da LAN";
log.desurlip="URL/IP de destino";
log.portnum="Número do serviço/porta";
log.inlog="Registo de recepção";
log.outlog="Registo de envio";
log.seclog="Registo de segurança";
log.dhcplog="Registo de cliente DHCP";
log.type="Tipo";
log.remotelog="Endereço IP do visualizador de registos";
log.msg1="(0 significa desactivado)";
log.lanipaddr="Endereço IP da LAN";
log.dstip="Endereço de URL ou IP de destino";
log.srvport="Número da porta (serviço)";

var ping = new Object();
ping.ipdomain="Endereço IP ou Nome do domínio";
ping.ipurl="Endereço IP ou URL";
ping.times="Número de pings";
ping.unlimited="Ilimitado";
ping.pktsize="Tamanho do pacote";
ping.unreach="Não é possível contactar a rede";
ping.pkttr="Pacotes transmitidos";
ping.pktrx="Pacotes recebidos";
ping.pktloss="Perda de pacotes";
ping.databyte="bytes de dados";
ping.datastat="estatísticas de dados";
ping.roundtrip="tempo de transmissão mín./méd./máx.";
ping.bytefrom="bytes de";
ping.time="Hora";
ping.reqout="O tempo limite do pedido foi excedido";
ping.unknown="Sistema anfitrião desconhecido";

var tracert = new Object();
tracert.unreach="Não é possível contactar a rede";
tracert.traceto="rastreio de rota para";
tracert.hopsmax="máximo de saltos";
tracert.bytepkt="pacotes de bytes";
tracert.reqout="O tempo limite do pedido foi excedido";
tracert.tracecomp="Rastreio concluído";
tracert.unknown="Sistema anfitrião desconhecido";

var facdef = new Object();
facdef.refacdefa="Restaurar predefinições de fábrica";
facdef.refacdefa2="Restaurar predefinições de fábrica";
facdef.helpmsg="Esta funcionalidade permite repor os valores predefinidos de todas as definições de configuração do Router. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Seleccione um ficheiro para actualizar";
fwupgrade.warning="<B>Aviso: </B>A actualização do firmware pode demorar alguns minutos; não desligue <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a alimentação nem prima o botão de reposição.";
fwupgrade.notinterrupted="A actualização NÃO pode ser interrompida!";
fwupgrade.upgradesuccess="Actualização efectuada com êxito.";
fwupgrade.restoresuccess="Restauro efectuado com êxito.";
fwupgrade.reboot="A reiniciar......";
fwupgrade.helpmsg="Transfira o ficheiro de actualização do firmware do router a partir do Web site em <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Clique em <b>Procurar/Seleccionar</b> e seleccione o ficheiro de actualização do firmware. Clique em <b>Iniciar actualização</b>."
fwupgrade.safeupmsg1="Se pretender utilizar a actualização segura, primeiro altere o IP da LAN para \"192.168.1.1\"!";
fwupgrade.safeupmsg2="Tem a certeza de que pretende utilizar o modo seguro para a actualização? ";

var lang = new Object();

lang.en="English";
lang.dk="Dansk";
lang.de="Deutsch";
lang.es="Español";
lang.fr="Français";
lang.frc="Français canadien";
lang.it="Italiano";
lang.nl="Nederlands";
lang.pt="Português";
lang.se="Svenska";
lang.ru="Russo";
lang.pl="Polaco";
lang.ar="Árabe";
lang.tr="Turco";
lang.title="Actualização do pacote de idiomas";
lang.uploadfile="Seleccione um ficheiro de idioma para actualizar";

var adbutton = new Object();
adbutton.inlog="Registo de recepção";
adbutton.outlog="Registo de envio";
adbutton.ping="Ping";
adbutton.tracer="Rastrear rota";
adbutton.safeupgrade="Actualização segura";
adbutton.upgrade="Actualizar";
adbutton.stop="Parar";
adbutton.clearlog="Limpar registo";
adbutton.traceroute="Rastrear rota";
adbutton.starttracer="Iniciar rastreio de rota";
adbutton.startupgrade="Iniciar actualização";
adbutton.startping="Iniciar ping";
adbutton.viewlog="Ver registo";
adbutton.clear="Limpar";
adbutton.savelog="Guardar registo";
adbutton.dhcpres="Reserva DHCP";
adbutton.startrestore="Iniciar restauro";
adbutton.starttest="Iniciar teste";








