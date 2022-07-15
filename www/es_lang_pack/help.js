//Basic Setup
var hsetup = new Object();
hsetup.phase1="La pantalla <i>Configuraci�n</i> \
		es la primera que se muestra al acceder al router. La mayor�a de usuarios  \
		podr�n configurar el router y conseguir que funcione correctamente utilizando �nicamente los \
		par�metros de esta pantalla. Algunos proveedores de servicios de Internet (ISP) requieren  \
		que se introduzca informaci�n espec�fica, como nombre de usuario, contrase�a, direcci�n IP,  \
		la direcci�n de puerta de enlace predeterminada o la direcci�n IP de DNS. Esta informaci�n se puede obtener  \
		del ISP, si es necesario.";
hsetup.phase2="Nota: Despu�s de \
		haber configurado estos par�metros, debe establecer una nueva contrase�a para el router  \
		mediante la pantalla <i>Seguridad</i>. De este modo, se incrementar� la seguridad al proteger el  \
		router de cambios no autorizados. A todos los usuarios que intenten acceder a la \
		utilidad basada en Web o al asistente de configuraci�n del router se les solicitar� la contrase�a del mismo.";
hsetup.phase3="Seleccione la \
		zona horaria correspondiente a su ubicaci�n. Si en su ubicaci�n se aplica el horario de verano, \
    		deje activada la casilla de verificaci�n <i>Cambiar la hora autom�ticamente \
    		seg�n el horario de verano.</i>";
hsetup.phase4="MTU es la  \
    		unidad de transmisi�n m�xima. Especifica el tama�o m�ximo de paquete permitido \
    		para la transmisi�n de Internet. Mantenga el valor por defecto, <b>Autom�tica</b>, para que \
    		el router seleccione la MTU �ptima para la conexi�n a Internet. Para especificar un \
    		tama�o de MTU, seleccione <b>Manual</b> e introduzca el valor deseado (el valor por defecto es <b> \
    		1400</b>).&nbsp; Este valor debe estar en el intervalo de 1200 a 1500.";
hsetup.phase5="Esta entrada es necesaria para algunos ISP y ellos pueden proporcionarla.";
hsetup.phase6="El router admite cuatro tipos de conexi�n:";
hsetup.phase7="Configuraci�n autom�tica - DHCP";
hsetup.phase8="(Protocolo de punto a punto en Ethernet)";
hsetup.phase9="(Protocolo de t�nel de punto a punto)";
hsetup.phase10="Estos tipos se pueden seleccionar en el men� desplegable situado junto a la conexi�n a Internet. \
    		La informaci�n requerida y las funciones disponibles son distintas seg�n \
    		el tipo de conexi�n que seleccione. Aqu� se incluyen algunas \
    		descripciones de esta informaci�n:";		
hsetup.phase11="Direcci�n IP de Internet y M�scara de subred";
hsetup.phase12="Se trata de la direcci�n IP \
    		y la m�scara de subred del router tal como las ven los usuarios externos en Internet (incluido el \
    		ISP). Si la conexi�n a Internet necesita una direcci�n IP est�tica, \
    		el ISP le proporcionar� una direcci�n IP est�tica y una m�scara de subred.";
hsetup.phase13="El ISP le proporcionar� la direcci�n IP de la puerta de enlace";
hsetup.phase14="(Servidor de nombres de dominio)";
hsetup.phase15="El ISP le proporcionar� al menos una direcci�n IP de DNS.";
hsetup.phase16="Nombre de usuario y Contrase�a";
hsetup.phase17="Introduzca el <b>nombre de usuario</b> y la \
				<b>contrase�a</b> que utilice al iniciar sesi�n en el ISP mediante una conexi�n PPPoE o \
    		PPTP.";
hsetup.phase18="Conectar cuando se solicite";
hsetup.phase19="Puede configurar el router para que se \
    		desconecte de Internet despu�s de un periodo determinado de inactividad \
    		(tiempo m�ximo de inactividad). Si la conexi�n a Internet finaliza debido a la \
    		inactividad, Conectar cuando se solicite permite al router restablecer autom�ticamente \
   		la conexi�n si intenta acceder de nuevo a \
   		Internet. Si desea activar Conectar cuando se solicite, haga clic en el bot�n de radio. Si \
    		desea que la conexi�n a Internet est� siempre activa, introduzca <b>0</b> \
    		en el campo <i>Tiempo m�ximo de inactividad</i>. De lo contrario, introduzca el n�mero de minutos \
    		que desea que transcurran para que finalice el acceso a Internet.";
hsetup.phase20="Opci�n Mantener activo ";
hsetup.phase21="Esta opci�n mantiene la conexi�n \
    		a Internet indefinidamente, aunque est� inactiva. Para utilizar \
    		esta opci�n, haga clic en el bot�n de radio situado junto a <i>Mantener activo</i>. El periodo por defecto \
    		para la nueva marcaci�n es de 30 segundos (es decir, el router comprobar� la \
    		conexi�n a Internet cada 30 segundos).";
hsetup.phase22="Nota: Algunos \
    		distribuidores de cable requieren una direcci�n MAC espec�fica para la conexi�n a \
    		Internet. Para obtener m�s informaci�n al respecto, haga clic en la ficha <b>Sistema</b>. A continuaci�n, haga clic en \
    		el bot�n <b>Ayuda</b> y consulte la informaci�n sobre la funci�n de clonaci�n de direcciones MAC.";
hsetup.phase23="LAN";
hsetup.phase24="Direcci�n IP y M�scara de subred";
hsetup.phase25="Se trata de\
    		la direcci�n IP y la m�scara de subred del router tal como se ven en la red LAN interna. El \
    		valor por defecto de la direcci�n IP es 192.168.1.1 y 255.255.255.0 para la m�scara \
    		de subred.";
hsetup.phase26="DHCP";
hsetup.phase27="Mantenga el \
    		valor por defecto, <b>Activar</b>, para activar la opci�n de servidor DHCP del router. Si ya \
    		dispone de un servidor DHCP en la red o si no desea un servidor DHCP, \
    		seleccione <b>Desactivar</b>.";
hsetup.phase28="Introduzca un \
    		valor num�rico para el servidor DHCP con el que se empezar�n a emitir direcciones IP. \
    		No empiece por 192.168.1.1 (la direcci�n IP del router).";
hsetup.phase29="N�mero m�ximo de usuarios de DHCP";
hsetup.phase30="Introduzca el \
    		n�mero m�ximo de ordenadores a los que desea que el servidor DHCP asigne direcciones \
    		IP. El m�ximo absoluto es 253 (es posible si 192.168.1.2 es la direcci�n IP \
    		est�tica.";
hsetup.phase31='El tiempo \
    		de concesi�n del cliente es la cantidad de tiempo que un usuario de la red podr� estar conectado \
    		al router con la direcci�n IP din�mica actual. Introduzca la cantidad de \
    		tiempo, en minutos, durante la que se \"conceder�\" al usuario esta direcci�n IP d \
		in�mica..';

hsetup.phase32="DNS est�tico 1-3 ";
hsetup.phase33="El sistema de \
    		nombres de dominio (DNS) es el m�todo que se utiliza en Internet para traducir los nombres de dominio o sitio Web \
    		a direcciones de Internet o URL. El ISP le proporcionar� al menos una \
    		direcci�n IP de servidor DNS. Si desea utilizar otra, escriba dicha direcci�n IP \
    		en uno de estos campos. Puede introducir hasta tres direcciones IP de servidor DNS  \
    		aqu�. El router las utilizar� para acceder m�s r�pidamente a los servidores DNS  \
    		en funcionamiento.";
hsetup.phase34="El servicio de nombres de Internet de Windows (WINS) administra la interacci�n de cada ordenador con \
    		Internet. Si va a utilizar un servidor WINS, introduzca aqu� la direcci�n IP del mismo. \
    		De lo contrario, deje los campos en blanco.";
hsetup.phase35="Compruebe todos los \
		valores y haga clic en <b>Guardar par�metros</b> para guardar los par�metros. Haga clic en <b>Cancelar \
		cambios</b> para \
		cancelar los cambios sin guardarlos. Puede probar los par�metros conect�ndose a  \
		Internet,";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="El router proporciona una funci�n de sistema din�mico de nombres de dominio (DDNS). DDNS permite asignar un nombre \
		de host y de dominio fijo a una direcci�n IP din�mica de Internet. Esto es �til si \
		aloja su propio sitio Web, servidor FTP u otro servidor que se encuentre detr�s del router. Antes de \
		utilizar esta funci�n, debe suscribirse al servicio DDNS en <i>www.dyndns.org</i>, \
		un distribuidor de servicio DDNS.";
helpddns.phase2="Servicio DDNS";
helpddns.phase3="Para desactivar el servicio DDNS, mantenga el par�metro por defecto, <b>Desactivar</b>. Para activar el servicio DDNS, \
		siga estas instrucciones:";
helpddns.phase4="Suscr�base al servicio DDNS en <i>www.dyndns.org</i> y anote \
		la informaci�n de Nombre de usuario,<i> </i>Contrase�a y<i> </i>Nombre de host.";
helpddns.phase5="En la pantalla <i>DDNS</i>, seleccione <b>Activar.</b>";
helpddns.phase6="Rellene los campos <i>Nombre de usuario</i>, <i>Contrase�a</i> y <i>Nombre de host</i>.";
helpddns.phase7="Haga clic en el bot�n <b>Guardar par�metros</b> para guardar los cambios. Haga clic en el bot�n <b>Cancelar cambios</b> para \
		cancelar los cambios sin guardarlos.";
helpddns.phase8="Aqu� se muestra la direcci�n IP de Internet actual del router.";
helpddns.phase9="Aqu� se muestra el estado de la conexi�n del servicio DDNS.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonaci�n de direcciones MAC";
helpmac.phase2="La direcci�n MAC del router es un c�digo de 12 d�gitos asignado a un dispositivo \
    		de hardware para su identificaci�n. Algunos ISP requieren que se registre la direcci�n \
    		MAC de la tarjeta/adaptador de red, que se conect� al m�dem por cable o \
    		DSL durante la instalaci�n. Si su ISP requiere registro de direcci�n MAC, \
    		busque la direcci�n MAC del adaptador siguiendo las \
    		instrucciones del sistema operativo de su ordenador.";
helpmac.phase3="Para Windows 98 y Millennium:";
helpmac.phase4="1.  Haga clic en el bot�n <b>Inicio</b> y seleccione <b>Ejecutar</b>.";
helpmac.phase5="2.  Escriba <b>winipcfg </b>en el campo mostrado y pulse la tecla <b>Aceptar</b>.";
helpmac.phase6="3.  Seleccione el adaptador de Ethernet que est� utilizando.";
helpmac.phase7="4.  Haga clic en <b>M�s informaci�n</b>.";
helpmac.phase8="5.  Anote la direcci�n MAC de su adaptador.";
helpmac.phase9="1.  Haga clic en el bot�n <b>Inicio</b> y seleccione <b>Ejecutar</b>.";
helpmac.phase10="2.  Escriba <b>winipcfg </b>en el campo mostrado y pulse la tecla <b>Aceptar</b>.";
helpmac.phase11="3.  En el s�mbolo del sistema, ejecute <b>ipconfig /all</b> y busque la direcci�n f�sica de su adaptador.";
helpmac.phase12="4.  Anote la direcci�n MAC de su adaptador.";
helpmac.phase13="Para clonar la direcci�n MAC de su adaptador de red en el router y evitar tener que llamar al \
    		ISP para cambiar la direcci�n MAC registrada, siga estas instrucciones:";
helpmac.phase14="Para Windows 2000 y XP:";
helpmac.phase15="1.  Seleccione <b>Activar</b>.";
helpmac.phase16="2.  Introduzca la direcci�n MAC de su adaptador en el campo <i>Direcci�n MAC</i>.";
helpmac.phase17="3.  Haga clic en el bot�n <b>Guardar par�metros</b>.";
helpmac.phase18="Para desactivar la clonaci�n de direcciones MAC, mantenga el par�metro por defecto, <b>Desactivar</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Enrutamiento";
hrouting.phase2="En la pantalla <i>Enrutamiento</i>, puede definir el modo de enrutamiento y los par�metros de router. \
		 Se recomienda el modo Puerta de enlace para la mayor�a de los usuarios.";
hrouting.phase3="Seleccione el modo de trabajo correcto. Mantenga el valor por defecto, <b> \
    		 Puerta de enlace</b>, si el router aloja la conexi�n a Internet de la red (se recomienda el modo Puerta de enlace para la mayor�a de los usuarios). Seleccione <b> \
    		 Router </b>si el router existe en una red con otros routers.";
hrouting.phase4="Enrutamiento din�mico (RIP)";
hrouting.phase5="Nota: Esta funci�n no est� disponible en modo Puerta de enlace.";
hrouting.phase6="El enrutamiento din�mico permite que el router se ajuste autom�ticamente a los cambios f�sicos que se produzcan en \
    		 el dise�o de la red e intercambie tablas de enrutamiento con el resto de routers. El \
    		 router determina la ruta de los paquetes de red bas�ndose en el menor n�mero de \
    		 saltos entre el origen y el destino. ";
hrouting.phase7="Para activar la funci�n de enrutamiento din�mico para el lado WAN, seleccione <b>WAN</b>. \
    		 Para activar esta funci�n para el lado LAN e inal�mbrico, seleccione <b>Red LAN e inal�mbrica</b>. \
    		 Para activar la funci�n para WAN y LAN, seleccione <b> \
    		 Ambos</b>. Para desactivar la funci�n de enrutamiento din�mico para todas las transmisiones de datos, mantenga el \
    		 valor por defecto, <b>Desactivar</b>. ";
hrouting.phase8="Enrutamiento est�tico,&nbsp; Direcci�n IP de destino, M�scara de subred, Puerta de enlace e Interfaz";
hrouting.phase9="Para configurar una ruta est�tica entre el router y otra red, \
    		 seleccione un n�mero en la lista desplegable <i>Enrutamiento est�tico</i>. (Una ruta est�tica \
    		 es la ruta predeterminada por la que se desplaza la informaci�n de red hasta \
    		 alcanzar un host determinado o una red concreta.)";
hrouting.phase10="Introduzca los datos siguientes:";
hrouting.phase11="Direcci�n IP de destino </b>- \
		  La direcci�n IP de destino es la direcci�n de la red o el host al que desea asignar una ruta est�tica.";
hrouting.phase12="M�scara de subred </b>- \
		  La m�scara de subred determina qu� parte de una direcci�n IP corresponde a la parte de la red y cu�l \
    		  a la parte del host. ";
hrouting.phase13="Puerta de enlace </b>- \
		  Se trata de la direcci�n IP del dispositivo de puerta de enlace que permite el contacto entre el router y la red o el host.";
hrouting.phase14="En funci�n de d�nde est� ubicada la direcci�n IP de destino, seleccione \
    		  <b>Red LAN e inal�mbrica </b>o <b>WAN </b>del men� desplegable <i>Interfaz</i>.";
hrouting.phase15="Para guardar los cambios, haga clic en el bot�n <b>Aplicar</b>. Para cancelar los cambios sin guardarlos, haga clic en el bot�n <b> \
    		  Cancelar</b>.";
hrouting.phase16="Para obtener rutas est�ticas adicionales, repita los pasos 1-4.";
hrouting.phase17="Eliminar esta entrada";
hrouting.phase18="Para eliminar una entrada de ruta est�tica:";
hrouting.phase19="En la lista desplegable <i>Enrutamiento est�tico</i>, seleccione el n�mero de entrada de la ruta est�tica.";
hrouting.phase20="Haga clic en el bot�n <b>Eliminar esta entrada</b>.";
hrouting.phase21="Para guardar una eliminaci�n, haga clic en el bot�n <b>Aplicar</b>. Para cancelar una eliminaci�n, haga clic en el bot�n <b> \
    		  Cancelar</b>. ";
hrouting.phase22="Mostrar tabla de enrutamiento";
hrouting.phase23="Haga clic en el bot�n \
    		      		  <b>Mostrar tabla de enrutamiento </b>para ver todas las entradas de rutas v�lidas en uso. Se mostrar�n la direcci�n IP est�tica, m�scara de subred, \
    		  la puerta de enlace y la interfaz de cada entrada. Haga clic en el bot�n <b>Actualizar </b>para actualizar los datos mostrados. Haga clic en el bot�n <b> \
    		  Cerrar </b>para volver a la pantalla <i>Enrutamiento</i>.";
hrouting.phase24="Direcci�n IP de destino</b> - \
		  La direcci�n IP de destino es la direcci�n de la red o el host al que est� asignada la ruta est�tica. ";
hrouting.phase25="M�scara de subred</b> - \
		  La m�scara de subred determina qu� parte de una direcci�n IP de destino corresponde a la parte de la red y cu�l a la parte del host.";
hrouting.phase26="Puerta de enlace</b>: Se trata de la direcci�n IP del dispositivo de puerta de enlace que permite el contacto entre el router y la red o el host.";
hrouting.phase27="Interfaz</b>: Esta interfaz indica si la direcci�n IP de destino est� en la red \
    		      		  <b> LAN e inal�mbrica </b>(redes internas conectadas por cable e inal�mbricas), la red <b>WAN</b> (Internet) o <b> \
    		  Retorno de bucle</b> (una red ficticia en la que un ordenador act�a de red y que es necesaria para determinados programas). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloquear solicitudes WAN";
hfirewall.phase2="Si activa la funci�n Bloquear solicitudes WAN, podr� evitar que otros usuarios de Internet \
    		 \"sondeen\" o detecten la red. La funci�n Bloquear solicitudes WAN \
    		 tambi�n refuerza la seguridad de la red al ocultar los puertos de red. \
    		 Ambas funciones de la funci�n de bloqueo de solicitudes WAN dificultan a los \
    		 usuarios externos el acceso a la red. Esta funci�n est� activada \
    		 por defecto. Seleccione <b>Desactivar</b> para desactivar esta funci�n.";
hfirewall.right="Activar o desactivar el firewall SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Paso a trav�s de VPN";
helpvpn.phase2="La red privada virtual (VPN) se suele utilizar para conexiones a red relacionadas con el trabajo. Para \
    		t�neles VPN, el router admite el paso a trav�s IPSec y PPTP.";
helpvpn.phase3="<b>IPSec</b>: La seguridad de protocolo de Internet (IPSec) es una<b> </b>suite de protocolos utilizados para implantar \
      		el intercambio seguro de paquetes en la capa IP. Para permitir que los t�neles IPSec pasen \
      		a trav�s del router, el paso a trav�s de IPSec est� activado por defecto. Para desactivar \
      		el paso a trav�s de IPSec, desactive la casilla que aparece junto a <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP</b>: El paso a trav�s del protocolo de t�nel de punto a punto es el m�todo utilizado para activar sesiones de VPN \
      		en un servidor Windows NT 4.0 o 2000. Para permitir que los t�neles PPTP pasen \
      		a trav�s del router, el paso a trav�s de PPTP est� activado por defecto. Para desactivar \
      		el paso a trav�s de PPTP, desactive la casilla que aparece junto a <i>PPTP</i>.";

helpvpn.right="Puede optar por activar PPTP, L2TP o Paso a trav�s de IPSec para que los \
		dispositivos de la red se puedan comunicar a trav�s de VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtros";
hfilter.phase2="La pantalla <i>Filtros</i> permite bloquear o aceptar determinados tipos de uso de \
		Internet. Puede configurar directivas de acceso a Internet para ordenadores espec�ficos, as� como \
		filtros mediante el uso de n�meros de puertos de red.";
hfilter.phase3="Esta funci�n permite personalizar hasta diez directivas de acceso a Internet diferentes \
    		para ordenadores particulares, que se identifican por sus direcciones IP o MAC. Para \
    		cada ordenador con directiva designada, durante los d�as y periodos de tiempo especificados.";
hfilter.phase4="Para crear o editar una directiva, siga estas instrucciones:";
hfilter.phase5="Seleccione el n�mero de directiva \(1-10\) en el men� desplegable.";
hfilter.phase6="Introduzca un nombre en el campo <i>Introducir nombre de perfil</i>.";
hfilter.phase7="Haga clic en el bot�n <b>Editar lista de PC</b>.";
hfilter.phase8="Haga clic en el bot�n <b>Aplicar</b> para guardar los cambios. Haga clic en el bot�n <b>Cancelar</b> para \
    		cancelar los cambios sin guardarlos. Haga clic en el bot�n <b>Cerrar</b> para volver a la pantalla \
    		    		<i>Filtros</i>.";
hfilter.phase9="Si desea bloquear el acceso a Internet para los PC incluidos en la lista durante los d�as y periodos \
    		de tiempo designados, mantenga el valor por defecto, <b>Desactivar acceso a Internet para PC \
    		enumerados</b>. Si desea que los PC incluidos en la lista puedan acceder a Internet durante \
    		los d�as y periodo de tiempo designados, haga clic en el bot�n de radio situado junto a<i> Activar \
    		acceso a Internet para PC enumerados</i>.";
hfilter.phase10="En la pantalla <i>Lista de PC</i>, especifique los PC por direcci�n IP o direcci�n MAC. Introduzca las \
    		direcciones IP apropiadas en los campos <i>IP</i>. Si dispone de un intervalo de \
    		direcciones IP para filtrar, complete los campos <i>Intervalo IP</i> adecuados. \
    		Introduzca las direcciones MAC adecuadas en los campos <i>MAC</i>.";
hfilter.phase11="Defina la hora a la que se filtrar� el acceso. Seleccione <b>24 horas</b>,<b> </b>o bien active la casilla de verificaci�n situada junto a <i>Desde</i> \
    		y utilice los cuadros desplegables para designar un periodo de tiempo espec�fico. ";
hfilter.phase12="Defina los d�as en los que se filtrar� el acceso. Seleccione <b>Todos los d�as</b> o los d�as apropiados de la semana. ";
hfilter.phase13="Haga clic en el bot�n <b>Agregar a directiva</b> para guardar los cambios y activarla.";
hfilter.phase14="Para crear o editar directivas adicionales, repita los pasos 1-9.";
hfilter.phase15="Para eliminar una directiva de acceso a Internet, seleccione el n�mero de directiva y haga clic en el bot�n <b>Eliminar</b>.";
hfilter.phase16="Para ver un resumen de todas las directivas, haga clic en el bot�n <b>Resumen</b>. La pantalla <i> \
    		Resumen de directivas de Internet</i> mostrar� cada n�mero de directiva, nombre de \
    		directiva, d�as y hora del d�a. Para eliminar una directiva, active su casilla de verificaci�n y, a continuaci�n, \
    		haga clic en el bot�n <b>Eliminar</b>. Haga clic en el bot�n <b>Cerrar</b> para volver a \
    		la pantalla <i>Filtros</i>.";
hfilter.phase17="Intervalo de puertos de Internet filtrados";
hfilter.phase18="Para filtrar PC por n�mero de puerto de red, seleccione <b>Ambos</b>, <b>TCP</b> o <b>UDP</b>, \
    		en funci�n de los protocolos que desee filtrar. A continuaci�n,<b> </b>introduzca los n�meros de  \
    		puerto que desea filtrar en los campos de n�mero de puerto. Los PC conectados al  \
    		router ya no podr�n acceder a ning�n n�mero de puerto enumerado aqu�. Para  \
    		desactivar un filtro, seleccione <b>Desactivar</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Compruebe todos los valores y haga clic en <b>Guardar par�metros</b> para guardar los par�metros. Haga clic en el bot�n <b>Cancelar \
		cambios</b> para cancelar los cambios sin guardarlos.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La funci�n Asignaci�n de DMZ permite exponer a un usuario local a Internet para el uso \
		de un servicio especial, como juegos por Internet o videoconferencias. \
		La asignaci�n de DMZ reenv�a todos los puertos a un PC al mismo tiempo. La funci�n de \
    		reenv�o de puertos es m�s segura porque s�lo abre los puertos que desee, \
    		mientras que la asignaci�n de DMZ abre todos los puertos de un ordenador, \
    		exponi�ndolo a Internet.";    		
helpdmz.phase2="Cualquier ordenador cuyo puerto se reenv�e debe tener la funci�n de cliente DHCP desactivada  \
    		y debe tener asignada una nueva direcci�n IP est�tica, ya que su direcci�n IP  \
    		puede cambiar al utilizar la funci�n DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Para exponer un ordenador, seleccione ";
helpdmz.phase4="Introduzca la direcci�n IP del ordenador en el campo <i>Direcci�n IP de asignaci�n de DMZ</i>.";



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
 
