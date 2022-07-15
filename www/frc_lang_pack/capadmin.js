var adtopmenu = new Object();
adtopmenu.manage="Gestion";
adtopmenu.log="Journal";
adtopmenu.diag="Diagnostics";
adtopmenu.facdef="Paramètres par défaut";
adtopmenu.upgarde="Mise à niveau du microcode";
adtopmenu.lang="Langue";
adtopmenu.multilang="Langues multiples";
adtopmenu.selan="Sélectionnez votre langue";

var adleftmenu = new Object();
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.localaccess="Accès au routeur";
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.remoteaccess="Accès pour gestion à distance";
adleftmenu.ping="Test Ping";
adleftmenu.pingparam="Paramètres du test Ping";
adleftmenu.tracertest="Test Traceroute";
adleftmenu.tracerparam="Paramètres du test Traceroute";
adleftmenu.upgradefw="Mise à niveau du microcode";
adleftmenu.advfeature="Fonctions avancées";
adleftmenu.reboot="Redémarrage";

var mgt = new Object();
mgt.reconfirm="Retapez-le pour confirmer";
mgt.remotemgt="Gestion &nbsp;à distance";
mgt.webassistant="Assistant Web Linksys";
mgt.mgtport="Port de gestion";
mgt.rmtmgtport="Port de gestion à distance";
mgt.https="Utiliser HTTPS";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Mise à niveau à distance";
mgt.remoteip="Adresse IP distante autorisée";
mgt.anyip="Toute adresse IP";
mgt.upnpconfig="Configuration par utilisateurs autorisée";
mgt.upnpinternetdis="Autoriser les utilisateurs à interdire l'<BR>&nbsp;accès Internet";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Tableau du fichier journal des entrées";
log.srcip="Adresse IP source";
log.desportnum="Numéro de port de destination";
log.outlogtbl="Tableau du fichier journal des sorties";
log.lanip="Adresse IP du réseau local";
log.desurlip="Adresses Internet ou IP de destination";
log.portnum="Service ou numéro de port";
log.inlog="Fichier journal des entrées";
log.outlog="Fichier journal des sorties";
log.seclog="Fichier journal de sécurité";
log.dhcplog="Fichier journal de client DHCP";
log.type="Type";
log.remotelog="Adresse IP de Logviewer";
log.msg1="(0 = inactif)";
log.lanipaddr="Adresse IP du réseau local";
log.dstip="URL ou adresse IP de destination";
log.srvport="Numéro de port (service)";

var ping = new Object();
ping.ipdomain="Adresse IP ou nom de domaine";
ping.ipurl="Adresse Internet ou IP";
ping.times="Nombre de Pings";
ping.unlimited="Sans limite";
ping.pktsize="Taille de paquet";
ping.unreach="Réseau introuvable";
ping.pkttr="Paquets envoyés ";
ping.pktrx="Paquets reçus ";
ping.pktloss="Paquets perdus ";
ping.databyte="Octets de données";
ping.datastat="Statistiques Ping";
ping.roundtrip="Durée des boucles - Min/Moy/Max";
ping.bytefrom="octets de";
ping.time="Temps";
ping.reqout="Délai d'attente de la demande dépassé";
ping.unknown="Hôte inconnu ";

var tracert = new Object();
tracert.unreach="Réseau introuvable";
tracert.traceto="Détermination d'itinéraire vers";
tracert.hopsmax="Nbre max. sauts";
tracert.bytepkt="octets par paquet";
tracert.reqout="Délai d'attente de la demande dépassé";
tracert.tracecomp="Détermination d'itinéraire terminée";
tracert.unknown="Hôte inconnu ";

var facdef = new Object();
facdef.refacdefa="Rétablir les paramètres par défaut";
facdef.refacdefa2="Rétablir les paramètres par défaut";
facdef.helpmsg="Cette option permet de restaurer les paramètres par défaut du routeur. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Sélectionner un fichier pour la mise à niveau";
fwupgrade.warning="<B>Attention! </B>La mise à niveau peut durer quelques minutes; n'éteignez pas l'appareil <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;et n'appuyez pas sur le bouton de réinitialisation.";
fwupgrade.notinterrupted="Il NE faut PAS interrompre la mise à niveau!";
fwupgrade.upgradesuccess="Mise à niveau réussie";
fwupgrade.restoresuccess="Restauration réussie";
fwupgrade.reboot="Redémarrage...";
fwupgrade.helpmsg="Téléchargez le fichier du nouveau microcode du routeur à partir du site Web <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Cliquez sur <b>Parcourir/Choisir</b> fichier et sélectionnez le fichier du nouveau microcode. Cliquez ensuite sur <b>Démarrer la mise à niveau</b>."

fwupgrade.safeupmsg1="Pour utiliser la mise à niveau de sécurité, vous devez d'abord remplacer l'adresse IP de votre réseau par \"192.168.1.1\". ";

fwupgrade.safeupmsg2="Voulez-vous vraiment utiliser la mise à niveau de sécurité? ";

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
lang.ru="Russe";
lang.pl="Polonais";
lang.ar="Arabe";
lang.tr="Turque";
lang.title="Mise à niveau de langue";
lang.uploadfile="Sélectionner un fichier de langue pour la mise à niveau :";

var adbutton = new Object();
adbutton.inlog="Fichier journal des entrées";
adbutton.outlog="Fichier journal des sorties";
adbutton.ping="Ping";
adbutton.tracer="Test Traceroute";
adbutton.safeupgrade="Mise à niveau de sécurité";
adbutton.upgrade="Mise à niveau";
adbutton.stop="Arrêter";
adbutton.clearlog="Effacer le contenu du fichier journal";
adbutton.traceroute="Test Traceroute";
adbutton.starttracer="Démarrer le test Traceroute";
adbutton.startupgrade="Démarrer la mise à niveau";
adbutton.startping="Démarrer le test Ping";
adbutton.viewlog="Afficher le journal";
adbutton.clear="Effacer";
adbutton.savelog="Enregistrer le fichier journal";
adbutton.dhcpres="Réservation DHCP";
adbutton.startrestore="Démarrage de la restauration";
adbutton.starttest="Démarrer le test";









