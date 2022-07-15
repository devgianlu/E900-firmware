var firewall2 = new Object();
firewall2.natredir="Filtrar redirección NAT de Internet sólo para IPv4 de Internet";
firewall2.ident="Filtrar IDENT (Puerto 113)";
firewall2.multi="Filtrar multidifusión";
firewall2.internetfilter="Filtro de Internet";
firewall2.webfilter="Filtro Web";

var hupgrade = new Object();
hupgrade.right1="Haga clic en el botón Examinar para seleccionar el archivo de firmware que se va a cargar en el router.";
hupgrade.right2="Haga clic en el botón Actualizar para comenzar el proceso de actualización. No se debe interrumpir el proceso de actualización.";
hupgrade.wrimage="El archivo de imagen es incorrecto.";

var hfacdef = new Object();
hfacdef.right1="Esta acción restablecerá todos los parámetros predeterminados de fábrica. Se borrarán todos sus parámetros.";
hfacdef.warning="Advertencia. Si hace clic en Aceptar, se restablecerán los parámetros predeterminados de fábrica del dispositivo y los parámetros existentes se borrarán.";

var hdiag = new Object();
hdiag.right1="Introduzca la dirección IP o el nombre de dominio al que desea realizar un ping y haga clic en el botón Ping.";
hdiag.right2="Introduzca la dirección IP o el nombre de dominio al que desea realizar un seguimiento y haga clic en el botón Traceroute.";

var hlog = new Object();
hlog.right1="Puede activar o desactivar el uso de registros de <b>entrada</b> y <b>salida</b> seleccionando el botón de radio adecuado.";

var manage2 = new Object();
manage2.webacc="Acceso a administración local";
manage2.accser="Servidor de acceso";
manage2.wlacc="Web de acceso &nbsp;inalámbrico";
manage2.vapass="La contraseña confirmada no coincide con la contraseña introducida. Vuelva a introducir la contraseña.";
manage2.passnot="La confirmación de contraseña no coincide.";
manage2.selweb="Debe seleccionar un servidor Web.";
manage2.changpass="Actualmente el router tiene establecida la contraseña predeterminada. Como medida de seguridad, debe cambiar la contraseña para poder activar la función de administración remota. Haga clic en el botón Aceptar para cambiar la contraseña. Haga clic en el botón Cancelar para dejar desactivada la función de administración remota.";
manage2.webutiacc="Acceso mediante";
manage2.wlutiacc="Acceso de forma inalámbrica";

var hmanage2 = new Object();
hmanage2.right1="<b>Acceso al router local: </b>Aquí puede cambiar la contraseña del router. Introduzca una nueva contraseña del router y, a continuación, vuelva a escribirla en el campo Confirmar contraseña para confirmarla.<br>";
hmanage2.right2="<b>Acceso Web: </b>Permite configurar opciones de acceso para la utilidad basada en Web del router.";
hmanage2.right3="<b>Acceso remoto al router: </b>Permite acceder al router de forma remota. Seleccione el puerto que desea utilizar. Debe cambiar la contraseña del router si aún continúa utilizando la contraseña predeterminada.";
hmanage2.right4="<b>UPnP: </b>La utilizan determinados programas para abrir automáticamente puertos de comunicación.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Dirección MAC</b>. Se trata de la dirección MAC del router tal como se ve en la red inalámbrica local.";
hstatwl2.right2="<b>Modo</b>. Según la configuración de la ficha Inalámbrico, se mostrará el modo inalámbrico (Mixto, Sólo G o Desactivado) que utiliza la red.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Dirección MAC</b>. Se trata de la dirección MAC del router tal como se ve en la red Ethernet local.";
hstatlan2.right2="<b>Dirección IP</b>. Muestra la dirección IP del router tal como aparece en la red Ethernet local.";
hstatlan2.right3="<b>Máscara de subred</b>. Cuando el router utiliza una máscara de subred, se muestra aquí.";
hstatlan2.right4="<b>Servidor DHCP</b>. Si utiliza el router como servidor DHCP, se indicará aquí.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Estático";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="Conectando";
hstatrouter2.disconnected="Desconectado";
hstatrouter2.disconnect="Desconectar";
hstatrouter2.right1="<b>Versión del firmware.  </b>Se trata del firmware actual del router.";
hstatrouter2.right2="<b>Hora actual. </b>Muestra la hora que se haya establecido en la ficha Configuración.";
hstatrouter2.right3="<b>Dirección MAC.  </b>Se trata de la dirección MAC del router tal como la ve el ISP.";
hstatrouter2.right4="<b>Nombre de router. </b>Nombre específico del router que se haya establecido en la ficha Configuración.";
hstatrouter2.right5="<b>Tipo de configuración.  </b>Muestra la información que necesita el ISP para la conexión a Internet. Esta información se ha introducido en la ficha Configuración. Aquí puede <b>conectar</b> o <b>desconectar</b> la conexión haciendo clic en el botón correspondiente.";
hstatrouter2.authfail=" fallo de autenticación";
hstatrouter2.noip="No se puede obtener una dirección IP de ";
hstatrouter2.negfail=" fallo de negociación";
hstatrouter2.lcpfail=" fallo de negociación LCP";
hstatrouter2.tcpfail="No se puede establecer una conexión TCP con ";
hstatrouter2.noconn="No se puede conectar a ";
hstatrouter2.server=" servidor";
hstatrouter2.pppoenoip="No se puede obtener una dirección IP de PPPoE";
hstatrouter2.undetermined="Sin determinar";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ: </b>Si activa esta opción, el router quedará expuesto a Internet. Se podrá acceder a todos los puertos desde Internet.";

var hforward2 = new Object();
hforward2.right1="<b>Reenvío de intervalos de puertos: </b>Para que algunas aplicaciones funcionen correctamente puede ser necesario abrir determinados puertos. Algunos ejemplos de estas aplicaciones son los servidores y ciertos juegos en línea. Cuando llegue a través de Internet la solicitud de un determinado puerto, el router dirigirá los datos al ordenador que especifique. Por motivos de seguridad, se recomienda limitar el reenvío de puertos a aquéllos que estén en uso y desactivar la casilla de verificación <b>Activar</b> cuando se termine.";

var hfilter2 = new Object();
hfilter2.delpolicy="¿Desea eliminar la directiva?";
hfilter2.right1="<b>Directiva de acceso a Internet: </b> Puede definir hasta 10 directivas de acceso. Haga clic en <b>Eliminar</b> para eliminar una directiva o en <b>Resumen</b> para ver un resumen de la directiva.";
hfilter2.right2="<b>Estado: </b>Activar o desactivar una directiva.";
hfilter2.right3="<b>Nombre de directiva: </b>Puede asignar un nombre a la directiva.";
hfilter2.right4="<b>Tipo de directiva: </b>Elija entre Acceso a Internet o Tráfico entrante.";
hfilter2.right5="<b>Días: </b>Elija el día de la semana en el que desee aplicar la directiva.";
hfilter2.right6="<b>Hora: </b>Introduzca la hora del día en la que desea aplicar la directiva.";
hfilter2.right7="<b>Servicios bloqueados: </b>Puede bloquear el acceso a determinados servicios. Haga clic en <b>Agregar/Editar</b> servicios para modificar estos parámetros.";
hfilter2.right8="<b>Bloqueo de sitios Web por dirección URL: </b>Puede bloquear el acceso a determinados sitios Web introduciendo su URL.";
hfilter2.right9="<b>Bloqueo de sitios Web por palabra clave</b>: Puede bloquear el acceso a determinados sitios Web con las palabras clave contenidas en su página Web.";

var hportser2 = new Object();
hportser2.submit="Aplicar";

var hwlad2 = new Object();
hwlad2.authtyp="Tipo de autenticación";
hwlad2.basrate="Velocidad básica";
hwlad2.mbps="Mbps";
hwlad2.def="Predeterminada";
hwlad2.all="Todas";
hwlad2.defdef="(Predeterminada: Predeterminada)";
hwlad2.fburst="Ráfaga de tramas";
hwlad2.milli="Milisegundos";
hwlad2.range="Intervalo";
hwlad2.frathrh="Umbral de fragmentación";
hwlad2.apiso="Aislamiento de PA";
hwlad2.off="Desactivado";
hwlad2.on="Activado";
hwlad2.right1="<b>Tipo de autenticación: </b>Puede elegir entre Automático o Clave compartida. La autenticación de clave compartida es más segura, pero todos los dispositivos de la red deben admitir también dicha función.";

var hwlbas2 = new Object();
hwlbas2.right1='<b>Modo de red inalámbrica: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster activado automáticamente en <b>modo</b> Mixto y modo <b>Sólo G</b>."); %> Si desea excluir clientes Wireless-G, seleccione el modo <b>Sólo-B</b>. Si desea desactivar el acceso inalámbrico, seleccione <b>Desactivar</b>.';

var hwlsec2 = new Object();
hwlsec2.wpapsk="Clave precompartida WPA";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA-Personal";
hwlsec2.wpaenterprise="WPA-Enterprise";
hwlsec2.wpa2psk="Sólo clave precompartida WPA2";
hwlsec2.wpa2radius="Sólo WPA2 RADIUS";
hwlsec2.wpa2pskmix="Clave precompartida WPA2 mixta";
hwlsec2.wpa2radiusmix="WPA2 RADIUS mixto";
hwlsec2.wpa2personal="WPA2-Personal";
hwlsec2.wpa2enterprise="WPA2-Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA mixto";
hwlsec2.enterprisemixed="WPA2/WPA Enterprise mixto";

hwlsec2.pskpersonal="PSK Personal";
hwlsec2.pskenterprise="PSK Enterprise";
hwlsec2.psk2personal="PSK2 Personal";
hwlsec2.psk2enterprise="PSK2 Enterprise";
hwlsec2.right1="<b>Modo de seguridad: </b>Puede elegir entre Desactivar, WEP, Clave precompartida WPA, WPA RADIUS o RADIUS. Todos los dispositivos de la red deben utilizar el mismo modo de seguridad para establecer comunicación.";

var hwmac2 = new Object();
hwmac2.right1="<b>Clonación de direcciones MAC: </b>Algunos ISP requieren que se registre una dirección MAC. Si no desea volver a registrar la dirección MAC, puede hacer que el router clone la dirección MAC que tiene registrada con el ISP.";

var hddns2 = new Object();
hddns2.right1="<b>Servicio DDNS: </b>DDNS permite acceder a la red utilizando nombres de dominio en lugar de direcciones IP. El servicio administra el cambio de dirección IP y actualiza la información del dominio de forma dinámica. Debe suscribirse al servicio a través de TZO.com o DynDNS.org.";
hddns2.right2="Haga clic  <b><a target=_blank href=http://Linksys.tzo.com>aquí</a></b> para INSCRIBIRSE con una <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CUENTA DE PRUEBA GRATUITA TZO.";
hddns2.right3="Haga clic <b><a target=_blank href=https://controlpanel.tzo.com>aquí</a></b> para administrar su <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cuenta TZO.";
hddns2.right4="Haga clic  <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>aquí</a></b> para adquirir una suscripción <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS TZO.";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Asistencia/Tutoriales</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Modo de funcionamiento: </b>Si el router aloja la conexión a Internet, seleccione el modo <b>Puerta de enlace</b>. Si existe otro router en la red, seleccione el modo <b>Router</b>.";
hrouting2.right2="<b>Seleccionar número de conjunto: </b>Se trata de un número de ruta único; se pueden definir hasta 20 rutas.";
hrouting2.right3="<b>Nombre de ruta: </b>Introduzca el nombre que desea asignar a esta ruta.";
hrouting2.right4="<b>IP de red LAN de destino: </b>Se trata del host remoto al que desea asignar la ruta estática.";
hrouting2.right5="<b>Máscara de subred: </b>Determina la parte del host y de la red.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="DNS estático 3";
hindex2.hbs="Servidor de Heart Beat";
hindex2.l2tps="Servidor L2TP";
hindex2.pptps="Servidor PPTP";
hindex2.hdhcp="<b>Configuración automática - DHCP: </b>Este parámetro lo utilizan habitualmente los operadores de cable.<br><br>";
hindex2.hpppoe1="<b>PPPoE: </b>Este parámetro lo utilizan habitualmente los proveedores de DSL.<br>";
hindex2.hpppoe2="<b>Nombre de usuario: </b>Introduzca el nombre de usuario proporcionado por el ISP.<br>";
hindex2.hpppoe3="<b>Contraseña: </b>Introduzca la contraseña proporcionada por el ISP.<br>";

hindex2.hstatic1="<b>IP estática: </b>Este parámetro lo utilizan habitualmente los ISP de clase empresarial.<br>";
hindex2.hstatic2="<b>Dirección IP de Internet: </b>Introduzca la dirección IP proporcionada por el ISP.<br>";
hindex2.hstatic3="<b>Máscara de subred: </b>Introduzca la máscara de subred.<br>";

hindex2.hpptp1="<b>PPTP: </b>Este parámetro lo utilizan habitualmente los proveedores de DSL.<br>";
hindex2.hpptp2="<b>Dirección IP de Internet: </b>Introduzca la dirección IP proporcionada por el ISP.<br>";
hindex2.hpptp3="<b>Máscara de subred: </b>Introduzca la máscara de subred.<br>";
hindex2.hpptp4="<b>Puerta de enlace: </b>Introduzca la dirección de la puerta de enlace del ISP.<br>";

hindex2.hl2tp1="<b>L2TP: </b>Este parámetro lo utilizan algunos ISP en Europa.<br>";
hindex2.hl2tp2="<b>Nombre de usuario: </b>Introduzca el nombre de usuario proporcionado por el ISP.<br>";
hindex2.hl2tp3="<b>Contraseña: </b>Introduzca la contraseña proporcionada por el ISP.<br>";

hindex2.hhb1="<b>Telstra Cable: </b>Este parámetro lo utilizan habitualmente los proveedores de DSL.<br>";
hindex2.hhb2="<b>Nombre de usuario: </b>Introduzca el nombre de usuario proporcionado por el ISP.<br>";
hindex2.hhb3="<b>Contraseña: </b>Introduzca la contraseña proporcionada por el ISP.<br>";

hindex2.right1="<b>Nombre de host: </b>Introduzca el nombre de host proporcionado por el ISP.<br>";
hindex2.right2="<b>Nombre de dominio: </b>Introduzca el nombre de dominio proporcionado por el ISP.<br>";
hindex2.right3="<b>Dirección IP local: </b>Se trata de la dirección del router.<br>";
hindex2.right4="<b>Máscara de subred: </b>Se trata de la máscara de subred del router.<br><br><br>";
hindex2.right5="<b>Servidor DHCP: </b>Permite al router administrar sus direcciones IP.<br>";
hindex2.right6="<b>Dirección IP inicial: </b>Dirección con la que desea empezar.<br>";
hindex2.right7="<b>Parámetro de hora: </b>Seleccione la zona horaria en la que se encuentra. El router puede ajustarse automáticamente para el horario de verano.";
hindex2.hdhcps1="<b>Número máximo de usuarios de DHCP: </b>Puede limitar el número de direcciones que distribuye el router.<br>";

var errmsg2 = new Object();
errmsg2.err0="La dirección IP del servidor de HeartBeat no es válida.";
errmsg2.err1="¿Desea eliminar la entrada?";
errmsg2.err2="Debe introducir un SSID.";
errmsg2.err3="Introduzca una clave compartida.";
errmsg2.err4=" tiene dígitos hexadecimales no válidos o más de 63 caracteres.";
errmsg2.err5="La clave debe tener entre 8 y 63 caracteres ASCII o 64 dígitos hexadecimales.";
errmsg2.err6="Debe introducir una clave.";
errmsg2.err7="La longitud de clave es incorrecta.";
errmsg2.err8="Introduzca una frase de paso.";
errmsg2.err9="Las comprobaciones totales superan 40 recuentos.";
errmsg2.err10="No se permiten espacios.";
errmsg2.err11="Al finalizar todas las acciones, haga clic en el botón Aplicar para guardar los parámetros.";
errmsg2.err12="Debe introducir un nombre de servicio.";
errmsg2.err13="El nombre de servicio ya existe.";
errmsg2.err14="La dirección IP de LAN o la máscara de subred es incorrecta.";

var trigger2 = new Object();
trigger2.ptrigger="Desencadenado de intervalos de puertos";
trigger2.qos="QoS";
trigger2.trirange="Intervalo desencadenado";
trigger2.forrange="Intervalo reenviado";
trigger2.trirange1="Intervalo desencadenado";
trigger2.forrange1="Intervalo reenviado";
trigger2.sport="Puerto inicial";
trigger2.eport="Puerto final";
trigger2.right1="Aplicación. Introduzca el nombre de aplicación del desencadenador. <b>Intervalo desencadenado</b> Introduzca para cada aplicación el intervalo de números de puertos desencadenados. Consulte en la documentación de la aplicación de Internet los números de puerto necesarios.<b>Puerto inicial</b> Introduzca el número de puerto inicial del intervalo desencadenado.<b>Puerto final</b> Introduzca el número de puerto final del intervalo desencadenado. <b>Intervalo reenviado</b> Introduzca para cada aplicación el intervalo de números de puertos reenviados. Consulte en la documentación de la aplicación de Internet los números de puerto necesarios. <b>Puerto inicial</b> Introduzca el número de puerto inicial del intervalo reenviado.   <b>Puerto final</b> Introduzca el número de puerto final del intervalo reenviado.";

var bakres2 = new Object();
bakres2.conman="Administración de la configuración";
bakres2.bakconf="Copia de seguridad de la configuración";
bakres2.resconf="Restauración de la configuración";
bakres2.bakres="Copia de seguridad y restauración";
bakres2.file2res="Seleccione un archivo que restaurar.";
bakres2.bakbutton="Copia de seguridad de la configuración";
bakres2.resbutton="Restauración de la configuración";
bakres2.right1="Puede realizar una copia de seguridad de su configuración actual por si necesita restaurar los parámetros predeterminados de fábrica del router.";
bakres2.right2="Puede hacer clic en el botón Copia de seguridad para realizar una copia de seguridad de la configuración actual.";
bakres2.right3="Haga clic en el botón Examinar para buscar un archivo de configuración guardado actualmente en el PC.";
bakres2.right4="Haga clic en Restaurar para sobrescribir todas las configuraciones actuales con las del archivo de configuración.";

var qos = new Object();
qos.uband="Ancho de banda de flujo ascendente";
qos.bandwidth="Ancho de banda";
qos.dpriority="Prioridad de dispositivos";
qos.priority="Prioridad";
qos.dname="Nombre de dispositivo";
qos.low="Baja";
qos.medium="Media";
qos.high="Alta";
qos.highest="Máxima";
qos.eppriority="Prioridad de puertos Ethernet";
qos.flowctrl="Control de flujo";
qos.appriority="Prioridad de aplicaciones";
qos.specport="Puerto específico";
qos.appname="Nombre de aplicación";
qos.alert1="El valor del puerto está fuera del intervalo [0 - 65535]";
qos.alert2="El valor del puerto inicial es superior al del puerto final";
qos.confirm1="La configuración de varios dispositivos, puertos Ethernet o aplicaciones con alta prioridad puede anular el efecto de QoS.\n¿Seguro que desea continuar?";

qos.optgame="Optimizar juegos";
qos.wqos="QoS con cables";
qos.wlqos="WMM   ";
qos.wlqos2="QoS inalámbrica";
qos.edca_ap="Parámetros AP EDCA";
qos.edca_sta="Parámetros STA EDCA";
qos.wme="Compatibilidad con WMM";
qos.noack="Sin confirmación";
qos.apsdsupp="Compatibilidad con APSD";
qos.defdis="(Valor predeterminado: Desactivar)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Administrador";
qos.forced="Forzado";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (calidad de servicio)";
qos.intqccpri="Prioridad de acceso a Internet";
qos.category="Categoría";
qos.mediumrec="Media (recomendada)";
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
qos.addapp="Agregar una nueva aplicación";
qos.onlinegame="Juegos en línea";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Half-Life";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tournament";
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
qos.addgame="Agregar un nuevo juego";
qos.entername="Introducir un nombre";
qos.etherport="Puerto Ethernet";
qos.voicedevice="Dispositivo de voz";
qos.voicemac="Dirección MAC de mi dispositivo de voz";
qos.recommend="Recomendación";
qos.game="Juego";
qos.mymac="Dirección MAC de mi PC actual";

qos.right1="Hay dos tipos de funciones de calidad de servicio (QoS) disponibles: QoS con cables, que controla los dispositivos conectados al router con un cable Ethernet y, QoS inalámbrica, que controla los dispositivos conectados de forma inalámbrica al router.";
qos.right2="<b>Prioridad de dispositivos </b>Puede especificar la prioridad de todo el tráfico procedente de un dispositivo de la red si proporciona el nombre del dispositivo, especifica la prioridad e introduce la dirección MAC del mismo.";
qos.right3="<b>Prioridad de puertos Ethernet: </b>Puede controlar la velocidad de datos según el puerto LAN al que esté conectado el dispositivo. Puede asignar una prioridad alta o baja al tráfico de datos procedente de los dispositivos conectados a los puertos LAN de 1 a 4.";
qos.right4="<b>Prioridad de aplicaciones:</b> Puede controlar la velocidad de datos según la aplicación que esté consumiendo ancho de banda. Active la casilla de verificación <b>Optimizar juegos</b> para permitir automáticamente que los puertos de aplicaciones de juegos tengan una prioridad superior. Puede personalizar hasta ocho aplicaciones introduciendo el número de puerto que utilizan.";
qos.right5="La QoS inalámbrica también es conocida como <b>Wi-Fi Multimedia<sup>TM</sup> (WMM)</b> por Wi-Fi Alliance<sup>TM</sup>. Seleccione Activar para emplear WMM si utiliza otros dispositivos inalámbricos que también tengan la certificación WMM.";
qos.right6="<b>Sin confirmación:</b> Active esta opción si desea desactivar la confirmación. Si esta opción está activada, el router no volverá a enviar los datos en caso de error.";
qos.exist = "Este parámetro ya existe.";

var vpn2 = new Object();
vpn2.right1="Puede optar por activar PPTP, L2TP o Paso a través de IPSec para que los dispositivos de la red se puedan comunicar a través de VPN.";

var fail = new Object();
fail.msg="Los valores introducidos no son válidos. Vuelva a intentarlo.";

var pactrl = new Object();
pactrl.pactrl ="Control parental";
pactrl.accsign ="Suscripción de cuenta";
pactrl.center1 ="La solución de control parental de Linksys ayuda a proteger a los miembros de su familia<br>cuando utilizan Internet.";
pactrl.center2 ="<li>Configuración sencilla</li><br><li>Proteja todos los ordenadores del hogar desde el router de Linksys.</li><br><li>Los informes le ayudan a controlar el uso de la Web, del correo electrónico y de la mensajería instantánea.</li>";
pactrl.center3 ="** Si se suscribe a este servicio, se desactivarán las directivas de acceso a Internet incorporadas en el router.";
pactrl.manageacc ="Administración de cuenta";
pactrl.center4 ="Administración de su cuenta de control parental";
pactrl.signparental ="Suscribirse al servicio de control parental";
pactrl.moreinfo ="Más información";
pactrl.isprovision ="suministrado en el dispositivo";
pactrl.notprovision ="no suministrado en el dispositivo";
pactrl.right1 ="La pantalla Control parental permite suscribirse y administrar la cuenta de control parental de Linksys. El servicio de control parental de Linksys le ofrece herramientas eficaces para controlar la disponibilidad de los servicios, accesos y características de Internet y puede personalizarse para cada miembro de la familia.";

var satusroute = new Object();
satusroute.localtime ="No disponible";

var succ = new Object();
succ.autoreturn ="Tras unos segundos volverá a la página anterior.";
succ.return_desc = "Tras unos segundos volverá a la página de actualización segura.";
succ.interrupt_desc = "No interrumpa nunca la actualización, espere...";
succ.return_index = "Tras unos segundos volverá a la página de actualización básica. ";

var gn = new Object();
gn.gnip="IP de red para invitado ";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nombre de red para invitado (SSID)";
gn.err1="La direcci¨®n IP de red para invitado no puede estar en la misma subred que la direcci¨®n LAN.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Duraci¨®n de la cuenta ";
gn.minutes="horas";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title=" Acceso de invitado";
gn.tips0="Contrase?a incorrecta. Vuelva a introducirla ";
gn.tips1="Introduzca la contrase?a para acceder a este punto de conexi¨®n ";
gn.login=" Iniciar sesión";
gn.err3="El SSID 5G inalámbrico debe coincidir con el SSID de invitado. Modifíquelo.";
gn.err4="El SSID 2,4G inalámbrico debe coincidir con el SSID de invitado. Modifíquelo.";
gn.err5="La direcci¨®n IP LAN no puede estar en la misma subred que la direcci¨®n IP de red para invitado.";
gn.err6="La red 192.168.33.0/24 (direcciones IP 192.168.33.0 – 255) está reservada para la red inalámbrica para invitados. Utilice una dirección de red diferente.";
gn.tips6=" Introduzca la contraseña de acceso de invitado para acceder a Internet. Pídasela al propietario si no sabe cuál es. Puede encontrar la contraseña de acceso de invitado a través de Linksys Connect.";
gn.dv="Vista de escritorio";
gn.mv="Vista de móvil";
gn.context="Introduzca la contraseña de acceso de invitado para acceder a Internet. Pídasela al propietario si no sabe cuál es. Puede encontrar la contraseña de acceso de invitado a través de Linksys Connect.";
gn.nat="El acceso de invitado no estará disponible si NAT está desactivada.  ¿Guardar los cambios?";






