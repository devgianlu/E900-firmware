//Basic Setup
var hsetup = new Object();
hsetup.phase1="La pantalla <i>Configuración</i> \
		es la primera que se muestra al acceder al router. La mayoría de usuarios  \
		podrán configurar el router y conseguir que funcione correctamente utilizando únicamente los \
		parámetros de esta pantalla. Algunos proveedores de servicios de Internet (ISP) requieren  \
		que se introduzca información específica, como nombre de usuario, contraseña, dirección IP,  \
		la dirección de puerta de enlace predeterminada o la dirección IP de DNS. Esta información se puede obtener  \
		del ISP, si es necesario.";
hsetup.phase2="Nota: Después de \
		haber configurado estos parámetros, debe establecer una nueva contraseña para el router  \
		mediante la pantalla <i>Seguridad</i>. De este modo, se incrementará la seguridad al proteger el  \
		router de cambios no autorizados. A todos los usuarios que intenten acceder a la \
		utilidad basada en Web o al asistente de configuración del router se les solicitará la contraseña del mismo.";
hsetup.phase3="Seleccione la \
		zona horaria correspondiente a su ubicación. Si en su ubicación se aplica el horario de verano, \
    		deje activada la casilla de verificación <i>Cambiar la hora automáticamente \
    		según el horario de verano.</i>";
hsetup.phase4="MTU es la  \
    		unidad de transmisión máxima. Especifica el tamaño máximo de paquete permitido \
    		para la transmisión de Internet. Mantenga el valor por defecto, <b>Automática</b>, para que \
    		el router seleccione la MTU óptima para la conexión a Internet. Para especificar un \
    		tamaño de MTU, seleccione <b>Manual</b> e introduzca el valor deseado (el valor por defecto es <b> \
    		1400</b>).&nbsp; Este valor debe estar en el intervalo de 1200 a 1500.";
hsetup.phase5="Esta entrada es necesaria para algunos ISP y ellos pueden proporcionarla.";
hsetup.phase6="El router admite cuatro tipos de conexión:";
hsetup.phase7="Configuración automática - DHCP";
hsetup.phase8="(Protocolo de punto a punto en Ethernet)";
hsetup.phase9="(Protocolo de túnel de punto a punto)";
hsetup.phase10="Estos tipos se pueden seleccionar en el menú desplegable situado junto a la conexión a Internet. \
    		La información requerida y las funciones disponibles son distintas según \
    		el tipo de conexión que seleccione. Aquí se incluyen algunas \
    		descripciones de esta información:";		
hsetup.phase11="Dirección IP de Internet y Máscara de subred";
hsetup.phase12="Se trata de la dirección IP \
    		y la máscara de subred del router tal como las ven los usuarios externos en Internet (incluido el \
    		ISP). Si la conexión a Internet necesita una dirección IP estática, \
    		el ISP le proporcionará una dirección IP estática y una máscara de subred.";
hsetup.phase13="El ISP le proporcionará la dirección IP de la puerta de enlace";
hsetup.phase14="(Servidor de nombres de dominio)";
hsetup.phase15="El ISP le proporcionará al menos una dirección IP de DNS.";
hsetup.phase16="Nombre de usuario y Contraseña";
hsetup.phase17="Introduzca el <b>nombre de usuario</b> y la \
				<b>contraseña</b> que utilice al iniciar sesión en el ISP mediante una conexión PPPoE o \
    		PPTP.";
hsetup.phase18="Conectar cuando se solicite";
hsetup.phase19="Puede configurar el router para que se \
    		desconecte de Internet después de un periodo determinado de inactividad \
    		(tiempo máximo de inactividad). Si la conexión a Internet finaliza debido a la \
    		inactividad, Conectar cuando se solicite permite al router restablecer automáticamente \
   		la conexión si intenta acceder de nuevo a \
   		Internet. Si desea activar Conectar cuando se solicite, haga clic en el botón de radio. Si \
    		desea que la conexión a Internet esté siempre activa, introduzca <b>0</b> \
    		en el campo <i>Tiempo máximo de inactividad</i>. De lo contrario, introduzca el número de minutos \
    		que desea que transcurran para que finalice el acceso a Internet.";
hsetup.phase20="Opción Mantener activo ";
hsetup.phase21="Esta opción mantiene la conexión \
    		a Internet indefinidamente, aunque esté inactiva. Para utilizar \
    		esta opción, haga clic en el botón de radio situado junto a <i>Mantener activo</i>. El periodo por defecto \
    		para la nueva marcación es de 30 segundos (es decir, el router comprobará la \
    		conexión a Internet cada 30 segundos).";
hsetup.phase22="Nota: Algunos \
    		distribuidores de cable requieren una dirección MAC específica para la conexión a \
    		Internet. Para obtener más información al respecto, haga clic en la ficha <b>Sistema</b>. A continuación, haga clic en \
    		el botón <b>Ayuda</b> y consulte la información sobre la función de clonación de direcciones MAC.";
hsetup.phase23="LAN";
hsetup.phase24="Dirección IP y Máscara de subred";
hsetup.phase25="Se trata de\
    		la dirección IP y la máscara de subred del router tal como se ven en la red LAN interna. El \
    		valor por defecto de la dirección IP es 192.168.1.1 y 255.255.255.0 para la máscara \
    		de subred.";
hsetup.phase26="DHCP";
hsetup.phase27="Mantenga el \
    		valor por defecto, <b>Activar</b>, para activar la opción de servidor DHCP del router. Si ya \
    		dispone de un servidor DHCP en la red o si no desea un servidor DHCP, \
    		seleccione <b>Desactivar</b>.";
hsetup.phase28="Introduzca un \
    		valor numérico para el servidor DHCP con el que se empezarán a emitir direcciones IP. \
    		No empiece por 192.168.1.1 (la dirección IP del router).";
hsetup.phase29="Número máximo de usuarios de DHCP";
hsetup.phase30="Introduzca el \
    		número máximo de ordenadores a los que desea que el servidor DHCP asigne direcciones \
    		IP. El máximo absoluto es 253 (es posible si 192.168.1.2 es la dirección IP \
    		estática.";
hsetup.phase31='El tiempo \
    		de concesión del cliente es la cantidad de tiempo que un usuario de la red podrá estar conectado \
    		al router con la dirección IP dinámica actual. Introduzca la cantidad de \
    		tiempo, en minutos, durante la que se \"concederá\" al usuario esta dirección IP d \
		inámica..';

hsetup.phase32="DNS estático 1-3 ";
hsetup.phase33="El sistema de \
    		nombres de dominio (DNS) es el método que se utiliza en Internet para traducir los nombres de dominio o sitio Web \
    		a direcciones de Internet o URL. El ISP le proporcionará al menos una \
    		dirección IP de servidor DNS. Si desea utilizar otra, escriba dicha dirección IP \
    		en uno de estos campos. Puede introducir hasta tres direcciones IP de servidor DNS  \
    		aquí. El router las utilizará para acceder más rápidamente a los servidores DNS  \
    		en funcionamiento.";
hsetup.phase34="El servicio de nombres de Internet de Windows (WINS) administra la interacción de cada ordenador con \
    		Internet. Si va a utilizar un servidor WINS, introduzca aquí la dirección IP del mismo. \
    		De lo contrario, deje los campos en blanco.";
hsetup.phase35="Compruebe todos los \
		valores y haga clic en <b>Guardar parámetros</b> para guardar los parámetros. Haga clic en <b>Cancelar \
		cambios</b> para \
		cancelar los cambios sin guardarlos. Puede probar los parámetros conectándose a  \
		Internet,";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="El router proporciona una función de sistema dinámico de nombres de dominio (DDNS). DDNS permite asignar un nombre \
		de host y de dominio fijo a una dirección IP dinámica de Internet. Esto es útil si \
		aloja su propio sitio Web, servidor FTP u otro servidor que se encuentre detrás del router. Antes de \
		utilizar esta función, debe suscribirse al servicio DDNS en <i>www.dyndns.org</i>, \
		un distribuidor de servicio DDNS.";
helpddns.phase2="Servicio DDNS";
helpddns.phase3="Para desactivar el servicio DDNS, mantenga el parámetro por defecto, <b>Desactivar</b>. Para activar el servicio DDNS, \
		siga estas instrucciones:";
helpddns.phase4="Suscríbase al servicio DDNS en <i>www.dyndns.org</i> y anote \
		la información de Nombre de usuario,<i> </i>Contraseña y<i> </i>Nombre de host.";
helpddns.phase5="En la pantalla <i>DDNS</i>, seleccione <b>Activar.</b>";
helpddns.phase6="Rellene los campos <i>Nombre de usuario</i>, <i>Contraseña</i> y <i>Nombre de host</i>.";
helpddns.phase7="Haga clic en el botón <b>Guardar parámetros</b> para guardar los cambios. Haga clic en el botón <b>Cancelar cambios</b> para \
		cancelar los cambios sin guardarlos.";
helpddns.phase8="Aquí se muestra la dirección IP de Internet actual del router.";
helpddns.phase9="Aquí se muestra el estado de la conexión del servicio DDNS.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonación de direcciones MAC";
helpmac.phase2="La dirección MAC del router es un código de 12 dígitos asignado a un dispositivo \
    		de hardware para su identificación. Algunos ISP requieren que se registre la dirección \
    		MAC de la tarjeta/adaptador de red, que se conectó al módem por cable o \
    		DSL durante la instalación. Si su ISP requiere registro de dirección MAC, \
    		busque la dirección MAC del adaptador siguiendo las \
    		instrucciones del sistema operativo de su ordenador.";
helpmac.phase3="Para Windows 98 y Millennium:";
helpmac.phase4="1.  Haga clic en el botón <b>Inicio</b> y seleccione <b>Ejecutar</b>.";
helpmac.phase5="2.  Escriba <b>winipcfg </b>en el campo mostrado y pulse la tecla <b>Aceptar</b>.";
helpmac.phase6="3.  Seleccione el adaptador de Ethernet que esté utilizando.";
helpmac.phase7="4.  Haga clic en <b>Más información</b>.";
helpmac.phase8="5.  Anote la dirección MAC de su adaptador.";
helpmac.phase9="1.  Haga clic en el botón <b>Inicio</b> y seleccione <b>Ejecutar</b>.";
helpmac.phase10="2.  Escriba <b>winipcfg </b>en el campo mostrado y pulse la tecla <b>Aceptar</b>.";
helpmac.phase11="3.  En el símbolo del sistema, ejecute <b>ipconfig /all</b> y busque la dirección física de su adaptador.";
helpmac.phase12="4.  Anote la dirección MAC de su adaptador.";
helpmac.phase13="Para clonar la dirección MAC de su adaptador de red en el router y evitar tener que llamar al \
    		ISP para cambiar la dirección MAC registrada, siga estas instrucciones:";
helpmac.phase14="Para Windows 2000 y XP:";
helpmac.phase15="1.  Seleccione <b>Activar</b>.";
helpmac.phase16="2.  Introduzca la dirección MAC de su adaptador en el campo <i>Dirección MAC</i>.";
helpmac.phase17="3.  Haga clic en el botón <b>Guardar parámetros</b>.";
helpmac.phase18="Para desactivar la clonación de direcciones MAC, mantenga el parámetro por defecto, <b>Desactivar</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Enrutamiento";
hrouting.phase2="En la pantalla <i>Enrutamiento</i>, puede definir el modo de enrutamiento y los parámetros de router. \
		 Se recomienda el modo Puerta de enlace para la mayoría de los usuarios.";
hrouting.phase3="Seleccione el modo de trabajo correcto. Mantenga el valor por defecto, <b> \
    		 Puerta de enlace</b>, si el router aloja la conexión a Internet de la red (se recomienda el modo Puerta de enlace para la mayoría de los usuarios). Seleccione <b> \
    		 Router </b>si el router existe en una red con otros routers.";
hrouting.phase4="Enrutamiento dinámico (RIP)";
hrouting.phase5="Nota: Esta función no está disponible en modo Puerta de enlace.";
hrouting.phase6="El enrutamiento dinámico permite que el router se ajuste automáticamente a los cambios físicos que se produzcan en \
    		 el diseño de la red e intercambie tablas de enrutamiento con el resto de routers. El \
    		 router determina la ruta de los paquetes de red basándose en el menor número de \
    		 saltos entre el origen y el destino. ";
hrouting.phase7="Para activar la función de enrutamiento dinámico para el lado WAN, seleccione <b>WAN</b>. \
    		 Para activar esta función para el lado LAN e inalámbrico, seleccione <b>Red LAN e inalámbrica</b>. \
    		 Para activar la función para WAN y LAN, seleccione <b> \
    		 Ambos</b>. Para desactivar la función de enrutamiento dinámico para todas las transmisiones de datos, mantenga el \
    		 valor por defecto, <b>Desactivar</b>. ";
hrouting.phase8="Enrutamiento estático,&nbsp; Dirección IP de destino, Máscara de subred, Puerta de enlace e Interfaz";
hrouting.phase9="Para configurar una ruta estática entre el router y otra red, \
    		 seleccione un número en la lista desplegable <i>Enrutamiento estático</i>. (Una ruta estática \
    		 es la ruta predeterminada por la que se desplaza la información de red hasta \
    		 alcanzar un host determinado o una red concreta.)";
hrouting.phase10="Introduzca los datos siguientes:";
hrouting.phase11="Dirección IP de destino </b>- \
		  La dirección IP de destino es la dirección de la red o el host al que desea asignar una ruta estática.";
hrouting.phase12="Máscara de subred </b>- \
		  La máscara de subred determina qué parte de una dirección IP corresponde a la parte de la red y cuál \
    		  a la parte del host. ";
hrouting.phase13="Puerta de enlace </b>- \
		  Se trata de la dirección IP del dispositivo de puerta de enlace que permite el contacto entre el router y la red o el host.";
hrouting.phase14="En función de dónde esté ubicada la dirección IP de destino, seleccione \
    		  <b>Red LAN e inalámbrica </b>o <b>WAN </b>del menú desplegable <i>Interfaz</i>.";
hrouting.phase15="Para guardar los cambios, haga clic en el botón <b>Aplicar</b>. Para cancelar los cambios sin guardarlos, haga clic en el botón <b> \
    		  Cancelar</b>.";
hrouting.phase16="Para obtener rutas estáticas adicionales, repita los pasos 1-4.";
hrouting.phase17="Eliminar esta entrada";
hrouting.phase18="Para eliminar una entrada de ruta estática:";
hrouting.phase19="En la lista desplegable <i>Enrutamiento estático</i>, seleccione el número de entrada de la ruta estática.";
hrouting.phase20="Haga clic en el botón <b>Eliminar esta entrada</b>.";
hrouting.phase21="Para guardar una eliminación, haga clic en el botón <b>Aplicar</b>. Para cancelar una eliminación, haga clic en el botón <b> \
    		  Cancelar</b>. ";
hrouting.phase22="Mostrar tabla de enrutamiento";
hrouting.phase23="Haga clic en el botón \
    		      		  <b>Mostrar tabla de enrutamiento </b>para ver todas las entradas de rutas válidas en uso. Se mostrarán la dirección IP estática, máscara de subred, \
    		  la puerta de enlace y la interfaz de cada entrada. Haga clic en el botón <b>Actualizar </b>para actualizar los datos mostrados. Haga clic en el botón <b> \
    		  Cerrar </b>para volver a la pantalla <i>Enrutamiento</i>.";
hrouting.phase24="Dirección IP de destino</b> - \
		  La dirección IP de destino es la dirección de la red o el host al que está asignada la ruta estática. ";
hrouting.phase25="Máscara de subred</b> - \
		  La máscara de subred determina qué parte de una dirección IP de destino corresponde a la parte de la red y cuál a la parte del host.";
hrouting.phase26="Puerta de enlace</b>: Se trata de la dirección IP del dispositivo de puerta de enlace que permite el contacto entre el router y la red o el host.";
hrouting.phase27="Interfaz</b>: Esta interfaz indica si la dirección IP de destino está en la red \
    		      		  <b> LAN e inalámbrica </b>(redes internas conectadas por cable e inalámbricas), la red <b>WAN</b> (Internet) o <b> \
    		  Retorno de bucle</b> (una red ficticia en la que un ordenador actúa de red y que es necesaria para determinados programas). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloquear solicitudes WAN";
hfirewall.phase2="Si activa la función Bloquear solicitudes WAN, podrá evitar que otros usuarios de Internet \
    		 \"sondeen\" o detecten la red. La función Bloquear solicitudes WAN \
    		 también refuerza la seguridad de la red al ocultar los puertos de red. \
    		 Ambas funciones de la función de bloqueo de solicitudes WAN dificultan a los \
    		 usuarios externos el acceso a la red. Esta función está activada \
    		 por defecto. Seleccione <b>Desactivar</b> para desactivar esta función.";
hfirewall.right="Activar o desactivar el firewall SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Paso a través de VPN";
helpvpn.phase2="La red privada virtual (VPN) se suele utilizar para conexiones a red relacionadas con el trabajo. Para \
    		túneles VPN, el router admite el paso a través IPSec y PPTP.";
helpvpn.phase3="<b>IPSec</b>: La seguridad de protocolo de Internet (IPSec) es una<b> </b>suite de protocolos utilizados para implantar \
      		el intercambio seguro de paquetes en la capa IP. Para permitir que los túneles IPSec pasen \
      		a través del router, el paso a través de IPSec está activado por defecto. Para desactivar \
      		el paso a través de IPSec, desactive la casilla que aparece junto a <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP</b>: El paso a través del protocolo de túnel de punto a punto es el método utilizado para activar sesiones de VPN \
      		en un servidor Windows NT 4.0 o 2000. Para permitir que los túneles PPTP pasen \
      		a través del router, el paso a través de PPTP está activado por defecto. Para desactivar \
      		el paso a través de PPTP, desactive la casilla que aparece junto a <i>PPTP</i>.";

helpvpn.right="Puede optar por activar PPTP, L2TP o Paso a través de IPSec para que los \
		dispositivos de la red se puedan comunicar a través de VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtros";
hfilter.phase2="La pantalla <i>Filtros</i> permite bloquear o aceptar determinados tipos de uso de \
		Internet. Puede configurar directivas de acceso a Internet para ordenadores específicos, así como \
		filtros mediante el uso de números de puertos de red.";
hfilter.phase3="Esta función permite personalizar hasta diez directivas de acceso a Internet diferentes \
    		para ordenadores particulares, que se identifican por sus direcciones IP o MAC. Para \
    		cada ordenador con directiva designada, durante los días y periodos de tiempo especificados.";
hfilter.phase4="Para crear o editar una directiva, siga estas instrucciones:";
hfilter.phase5="Seleccione el número de directiva \(1-10\) en el menú desplegable.";
hfilter.phase6="Introduzca un nombre en el campo <i>Introducir nombre de perfil</i>.";
hfilter.phase7="Haga clic en el botón <b>Editar lista de PC</b>.";
hfilter.phase8="Haga clic en el botón <b>Aplicar</b> para guardar los cambios. Haga clic en el botón <b>Cancelar</b> para \
    		cancelar los cambios sin guardarlos. Haga clic en el botón <b>Cerrar</b> para volver a la pantalla \
    		    		<i>Filtros</i>.";
hfilter.phase9="Si desea bloquear el acceso a Internet para los PC incluidos en la lista durante los días y periodos \
    		de tiempo designados, mantenga el valor por defecto, <b>Desactivar acceso a Internet para PC \
    		enumerados</b>. Si desea que los PC incluidos en la lista puedan acceder a Internet durante \
    		los días y periodo de tiempo designados, haga clic en el botón de radio situado junto a<i> Activar \
    		acceso a Internet para PC enumerados</i>.";
hfilter.phase10="En la pantalla <i>Lista de PC</i>, especifique los PC por dirección IP o dirección MAC. Introduzca las \
    		direcciones IP apropiadas en los campos <i>IP</i>. Si dispone de un intervalo de \
    		direcciones IP para filtrar, complete los campos <i>Intervalo IP</i> adecuados. \
    		Introduzca las direcciones MAC adecuadas en los campos <i>MAC</i>.";
hfilter.phase11="Defina la hora a la que se filtrará el acceso. Seleccione <b>24 horas</b>,<b> </b>o bien active la casilla de verificación situada junto a <i>Desde</i> \
    		y utilice los cuadros desplegables para designar un periodo de tiempo específico. ";
hfilter.phase12="Defina los días en los que se filtrará el acceso. Seleccione <b>Todos los días</b> o los días apropiados de la semana. ";
hfilter.phase13="Haga clic en el botón <b>Agregar a directiva</b> para guardar los cambios y activarla.";
hfilter.phase14="Para crear o editar directivas adicionales, repita los pasos 1-9.";
hfilter.phase15="Para eliminar una directiva de acceso a Internet, seleccione el número de directiva y haga clic en el botón <b>Eliminar</b>.";
hfilter.phase16="Para ver un resumen de todas las directivas, haga clic en el botón <b>Resumen</b>. La pantalla <i> \
    		Resumen de directivas de Internet</i> mostrará cada número de directiva, nombre de \
    		directiva, días y hora del día. Para eliminar una directiva, active su casilla de verificación y, a continuación, \
    		haga clic en el botón <b>Eliminar</b>. Haga clic en el botón <b>Cerrar</b> para volver a \
    		la pantalla <i>Filtros</i>.";
hfilter.phase17="Intervalo de puertos de Internet filtrados";
hfilter.phase18="Para filtrar PC por número de puerto de red, seleccione <b>Ambos</b>, <b>TCP</b> o <b>UDP</b>, \
    		en función de los protocolos que desee filtrar. A continuación,<b> </b>introduzca los números de  \
    		puerto que desea filtrar en los campos de número de puerto. Los PC conectados al  \
    		router ya no podrán acceder a ningún número de puerto enumerado aquí. Para  \
    		desactivar un filtro, seleccione <b>Desactivar</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Compruebe todos los valores y haga clic en <b>Guardar parámetros</b> para guardar los parámetros. Haga clic en el botón <b>Cancelar \
		cambios</b> para cancelar los cambios sin guardarlos.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La función Asignación de DMZ permite exponer a un usuario local a Internet para el uso \
		de un servicio especial, como juegos por Internet o videoconferencias. \
		La asignación de DMZ reenvía todos los puertos a un PC al mismo tiempo. La función de \
    		reenvío de puertos es más segura porque sólo abre los puertos que desee, \
    		mientras que la asignación de DMZ abre todos los puertos de un ordenador, \
    		exponiéndolo a Internet.";    		
helpdmz.phase2="Cualquier ordenador cuyo puerto se reenvíe debe tener la función de cliente DHCP desactivada  \
    		y debe tener asignada una nueva dirección IP estática, ya que su dirección IP  \
    		puede cambiar al utilizar la función DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Para exponer un ordenador, seleccione ";
helpdmz.phase4="Introduzca la dirección IP del ordenador en el campo <i>Dirección IP de asignación de DMZ</i>.";



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
 
