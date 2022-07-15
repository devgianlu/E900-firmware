var adtopmenu = new Object();
adtopmenu.manage="Administraci�n";
adtopmenu.log="Registro";
adtopmenu.diag="Diagn�stico";
adtopmenu.facdef="Par�metros predeterminados de f�brica";
adtopmenu.upgarde="Actualizaci�n del firmware";
adtopmenu.lang="Idioma";
adtopmenu.multilang="Varios idiomas";
adtopmenu.selan="Seleccione su idioma";

var adleftmenu = new Object();
adleftmenu.routerpsw="Contrase�a del router";
adleftmenu.localaccess="Acceso al router";
adleftmenu.routerpsw="Contrase�a del router";
adleftmenu.remoteaccess="Acceso a administraci�n remota";
adleftmenu.ping="Prueba de ping";
adleftmenu.pingparam="Par�metros de ping";
adleftmenu.tracertest="Prueba de Traceroute";
adleftmenu.tracerparam="Par�metros de Traceroute";
adleftmenu.upgradefw="Actualizar el firmware";
adleftmenu.advfeature="Funciones avanzadas";
adleftmenu.reboot="Reinicio";

var mgt = new Object();
mgt.reconfirm="Confirmar contrase�a";
mgt.remotemgt="Administraci�n &nbsp;remota";
mgt.webassistant="Asistente web de Linksys";
mgt.mgtport="Puerto de administraci�n";
mgt.rmtmgtport="Puerto de administraci�n remota";
mgt.https="Usar https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Actualizaci�n remota";
mgt.remoteip="Direcci�n IP remota permitida";
mgt.anyip="Cualquier direcci�n IP";
mgt.upnpconfig="Permitir a los usuarios la configuraci�n";
mgt.upnpinternetdis="Permitir que los usuarios desactiven <BR>&nbsp;el acceso a Internet.";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Tabla de registro de entrada";
log.srcip="IP de origen";
log.desportnum="N�mero de puerto de destino";
log.outlogtbl="Tabla de registro de salida";
log.lanip="IP de LAN";
log.desurlip="URL/IP de destino";
log.portnum="N�mero de puerto/servicio";
log.inlog="Registro de entrada";
log.outlog="Registro de salida";
log.seclog="Registro de seguridad";
log.dhcplog="Registro de clientes DHCP";
log.type="Tipo";
log.remotelog="Direcci�n IP de Logviewer";
log.msg1="(0 significa desactivado)";
log.lanipaddr="Direcci�n IP de LAN";
log.dstip="URL de destino o direcci�n IP";
log.srvport="N�mero de puerto (servicio)";

var ping = new Object();
ping.ipdomain="Direcci�n IP o nombre de dominio";
ping.ipurl="Direcci�n IP o URL";
ping.times="N�mero de pings";
ping.unlimited="Ilimitado";
ping.pktsize="Tama�o de paquete";
ping.unreach="No se puede acceder a la red";
ping.pkttr="Paquetes transmitidos";
ping.pktrx="Paquetes recibidos";
ping.pktloss="P�rdida de paquetes";
ping.databyte="bytes de datos";
ping.datastat="datos estad�sticos";
ping.roundtrip="ida y vuelta m�n./med./m�x.";
ping.bytefrom="bytes desde";
ping.time="Hora";
ping.reqout="Agotado tiempo de espera de solicitud";
ping.unknown="Host desconocido";

var tracert = new Object();
tracert.unreach="No se puede acceder a la red";
tracert.traceto="traceroute a";
tracert.hopsmax="saltos m�x.";
tracert.bytepkt="paquetes de bytes";
tracert.reqout="Agotado tiempo de espera de solicitud";
tracert.tracecomp="Seguimiento completado";
tracert.unknown="Host desconocido";

var facdef = new Object();
facdef.refacdefa="Restaurar par�metros predeterminados de f�brica";
facdef.refacdefa2="Restaurar a los par�metros predeterminados de f�brica";
facdef.helpmsg="Esta funci�n le permite restablecer todos los par�metros de configuraci�n del router en sus valores predeterminados. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Seleccione un archivo para actualizarlo.";
fwupgrade.warning="<B>Advertencia: </B>La actualizaci�n del firmware puede tardar varios minutos; no <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apague el dispositivo ni pulse el bot�n de reinicio.";
fwupgrade.notinterrupted="NO se debe interrumpir la actualizaci�n.";
fwupgrade.upgradesuccess="Actualizaci�n correcta.";
fwupgrade.restoresuccess="Restauraci�n correcta.";
fwupgrade.reboot="Reiniciando...";
fwupgrade.helpmsg="Descargue el archivo de actualizaci�n del firmware del router del sitio web <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Haga clic en <b>Examinar/Seleccionar</b> y seleccione archivo de actualizaci�n del firmware. A continuaci�n, haga clic en <b>Iniciar actualizaci�n</b>."
fwupgrade.safeupmsg1="Si quiere usar una actualizaci�n segura, primero cambie su IP de LAN a \"192.168.1.1\". ";
fwupgrade.safeupmsg2="�Seguro que desea utilizar el modo seguro para la actualizaci�n? ";

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
lang.ru="Ruso";
lang.pl="Polaco";
lang.ar="�rabe";
lang.tr="Turco";
lang.title="Actualizaci�n del paquete de idioma";
lang.uploadfile="Seleccione un archivo de idioma para actualizarlo.";

var adbutton = new Object();
adbutton.inlog="Registro de entrada";
adbutton.outlog="Registro de salida";
adbutton.ping="Ping";
adbutton.tracer="Traceroute";
adbutton.safeupgrade="Actualizaci�n segura";
adbutton.upgrade="Actualizar";
adbutton.stop="Detener";
adbutton.clearlog="Borrar registro";
adbutton.traceroute="Traceroute";
adbutton.starttracer="Iniciar Traceroute";
adbutton.startupgrade="Iniciar actualizaci�n";
adbutton.startping="Iniciar ping";
adbutton.viewlog="Ver registro";
adbutton.clear="Borrar";
adbutton.savelog="Guardar registro";
adbutton.dhcpres="Reserva DHCP";
adbutton.startrestore="Iniciar restauraci�n";
adbutton.starttest="Iniciar prueba";









