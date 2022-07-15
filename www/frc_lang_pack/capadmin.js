var adtopmenu = new Object();
adtopmenu.manage="Gestion";
adtopmenu.log="Journal";
adtopmenu.diag="Diagnostics";
adtopmenu.facdef="Param�tres par d�faut";
adtopmenu.upgarde="Mise � niveau du microcode";
adtopmenu.lang="Langue";
adtopmenu.multilang="Langues multiples";
adtopmenu.selan="S�lectionnez votre langue";

var adleftmenu = new Object();
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.localaccess="Acc�s au routeur";
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.remoteaccess="Acc�s pour gestion � distance";
adleftmenu.ping="Test Ping";
adleftmenu.pingparam="Param�tres du test Ping";
adleftmenu.tracertest="Test Traceroute";
adleftmenu.tracerparam="Param�tres du test Traceroute";
adleftmenu.upgradefw="Mise � niveau du microcode";
adleftmenu.advfeature="Fonctions avanc�es";
adleftmenu.reboot="Red�marrage";

var mgt = new Object();
mgt.reconfirm="Retapez-le pour confirmer";
mgt.remotemgt="Gestion &nbsp;� distance";
mgt.webassistant="Assistant Web Linksys";
mgt.mgtport="Port de gestion";
mgt.rmtmgtport="Port de gestion � distance";
mgt.https="Utiliser HTTPS";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Mise � niveau � distance";
mgt.remoteip="Adresse IP distante autoris�e";
mgt.anyip="Toute adresse IP";
mgt.upnpconfig="Configuration par utilisateurs autoris�e";
mgt.upnpinternetdis="Autoriser les utilisateurs � interdire l'<BR>&nbsp;acc�s Internet";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Tableau du fichier journal des entr�es";
log.srcip="Adresse IP source";
log.desportnum="Num�ro de port de destination";
log.outlogtbl="Tableau du fichier journal des sorties";
log.lanip="Adresse IP du r�seau local";
log.desurlip="Adresses Internet ou IP de destination";
log.portnum="Service ou num�ro de port";
log.inlog="Fichier journal des entr�es";
log.outlog="Fichier journal des sorties";
log.seclog="Fichier journal de s�curit�";
log.dhcplog="Fichier journal de client DHCP";
log.type="Type";
log.remotelog="Adresse�IP de Logviewer";
log.msg1="(0 = inactif)";
log.lanipaddr="Adresse�IP du r�seau local";
log.dstip="URL ou adresse�IP de destination";
log.srvport="Num�ro de port (service)";

var ping = new Object();
ping.ipdomain="Adresse IP ou nom de domaine";
ping.ipurl="Adresse Internet ou IP";
ping.times="Nombre de Pings";
ping.unlimited="Sans limite";
ping.pktsize="Taille de paquet";
ping.unreach="R�seau introuvable";
ping.pkttr="Paquets envoy�s ";
ping.pktrx="Paquets re�us ";
ping.pktloss="Paquets perdus ";
ping.databyte="Octets de donn�es";
ping.datastat="Statistiques Ping";
ping.roundtrip="Dur�e des boucles - Min/Moy/Max";
ping.bytefrom="octets de";
ping.time="Temps";
ping.reqout="D�lai d'attente de la demande d�pass�";
ping.unknown="H�te inconnu ";

var tracert = new Object();
tracert.unreach="R�seau introuvable";
tracert.traceto="D�termination d'itin�raire vers";
tracert.hopsmax="Nbre max. sauts";
tracert.bytepkt="octets par paquet";
tracert.reqout="D�lai d'attente de la demande d�pass�";
tracert.tracecomp="D�termination d'itin�raire termin�e";
tracert.unknown="H�te inconnu ";

var facdef = new Object();
facdef.refacdefa="R�tablir les param�tres par d�faut";
facdef.refacdefa2="R�tablir les param�tres par d�faut";
facdef.helpmsg="Cette option permet de restaurer les param�tres par d�faut du routeur. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="S�lectionner un fichier pour la mise � niveau";
fwupgrade.warning="<B>Attention! </B>La mise � niveau peut durer quelques minutes; n'�teignez pas l'appareil <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;et n'appuyez pas sur le bouton de r�initialisation.";
fwupgrade.notinterrupted="Il NE faut PAS interrompre la mise � niveau!";
fwupgrade.upgradesuccess="Mise � niveau r�ussie";
fwupgrade.restoresuccess="Restauration r�ussie";
fwupgrade.reboot="Red�marrage...";
fwupgrade.helpmsg="T�l�chargez le fichier du nouveau microcode du routeur � partir du site Web <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Cliquez sur <b>Parcourir/Choisir</b> fichier et s�lectionnez le fichier du nouveau microcode. Cliquez ensuite sur <b>D�marrer la mise � niveau</b>."

fwupgrade.safeupmsg1="Pour utiliser la mise � niveau de s�curit�, vous devez d'abord remplacer l'adresse�IP de votre r�seau par \"192.168.1.1\". ";

fwupgrade.safeupmsg2="Voulez-vous vraiment utiliser la mise � niveau de s�curit�? ";

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
lang.ru="Russe";
lang.pl="Polonais";
lang.ar="Arabe";
lang.tr="Turque";
lang.title="Mise � niveau de langue";
lang.uploadfile="S�lectionner un fichier de langue pour la mise � niveau�:";

var adbutton = new Object();
adbutton.inlog="Fichier journal des entr�es";
adbutton.outlog="Fichier journal des sorties";
adbutton.ping="Ping";
adbutton.tracer="Test Traceroute";
adbutton.safeupgrade="Mise � niveau de s�curit�";
adbutton.upgrade="Mise � niveau";
adbutton.stop="Arr�ter";
adbutton.clearlog="Effacer le contenu du fichier journal";
adbutton.traceroute="Test Traceroute";
adbutton.starttracer="D�marrer le test Traceroute";
adbutton.startupgrade="D�marrer la mise � niveau";
adbutton.startping="D�marrer le test Ping";
adbutton.viewlog="Afficher le journal";
adbutton.clear="Effacer";
adbutton.savelog="Enregistrer le fichier journal";
adbutton.dhcpres="R�servation DHCP";
adbutton.startrestore="D�marrage de la restauration";
adbutton.starttest="D�marrer le test";









