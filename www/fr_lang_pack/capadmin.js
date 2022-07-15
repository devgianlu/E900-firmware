var adtopmenu = new Object();
adtopmenu.manage="Gestion";
adtopmenu.log="Fichier journal";
adtopmenu.diag="Diagnostics";
adtopmenu.facdef="Paramètres d'usine";
adtopmenu.upgarde="Mise à niveau du micrologiciel";
adtopmenu.lang="Langue";
adtopmenu.multilang="Plusieurs langues";
adtopmenu.selan="Sélectionnez la langue de votre choix";

var adleftmenu = new Object();
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.localaccess="Accès au routeur";
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.remoteaccess="Accès à la gestion distante";
adleftmenu.ping="Test Ping";
adleftmenu.pingparam="Paramètres Ping";
adleftmenu.tracertest="Test de détermination d'itinéraire";
adleftmenu.tracerparam="Paramètres de détermination d'itinéraire";
adleftmenu.upgradefw="Mettre à niveau le micrologiciel";
adleftmenu.advfeature="Fonctionnalités avancées";
adleftmenu.reboot="Redémarrage";

var mgt = new Object();
mgt.reconfirm="Confirmation du mot de passe";
mgt.remotemgt="Gestion &nbsp;distante";
mgt.webassistant="Assistant Web Linksys";
mgt.mgtport="Port de gestion";
mgt.rmtmgtport="Port de gestion distante";
mgt.https="Utiliser https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Mise à niveau à distance";
mgt.remoteip="Adresse IP distante autorisée";
mgt.anyip="Toutes les adresses IP";
mgt.upnpconfig="Autoriser les utilisateurs à configurer";
mgt.upnpinternetdis="Autoriser les utilisateurs à désactiver l'<BR>&nbsp;accès à Internet";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Table Journal entrant";
log.srcip="IP source";
log.desportnum="Numéro du port de destination";
log.outlogtbl="Table Journal sortant";
log.lanip="IP LAN";
log.desurlip="URL/IP de destination";
log.portnum="Service/Numéro de port";
log.inlog="Fichier journal des entrées";
log.outlog="Fichier journal des sorties";
log.seclog="Fichier journal de sécurité ";
log.dhcplog="Fichier journal du client DHCP";
log.type="Type";
log.remotelog="Adresse IP de réception des fichiers journaux";
log.msg1="(0 signifie désactivé)";
log.lanipaddr="Adresse IP LAN";
log.dstip="URL ou adresse IP de destination";
log.srvport="Numéro de port (service)";

var ping = new Object();
ping.ipdomain="Adresse IP ou nom de domaine";
ping.ipurl="Adresse IP ou URL";
ping.times="Nombre de Pings";
ping.unlimited="Illimité ";
ping.pktsize="Taille du paquet";
ping.unreach="Réseau inaccessible";
ping.pkttr="Paquets transmis";
ping.pktrx="Paquets reçus";
ping.pktloss="Perte de paquet";
ping.databyte="octets de données";
ping.datastat="statistiques des données";
ping.roundtrip="aller-retour min/moy/max";
ping.bytefrom="octets de";
ping.time="Heure";
ping.reqout="Dépassement du délai de la demande";
ping.unknown="Hôte inconnu";

var tracert = new Object();
tracert.unreach="Réseau inaccessible";
tracert.traceto="détermination d'itinéraire à";
tracert.hopsmax="sauts max";
tracert.bytepkt="octets de paquets";
tracert.reqout="Dépassement du délai de la demande";
tracert.tracecomp="Trace terminée";
tracert.unknown="Hôte inconnu";

var facdef = new Object();
facdef.refacdefa="Restaurer les paramètres d'usine";
facdef.refacdefa2="Restaurer les paramètres d'usine";
facdef.helpmsg="Cette fonction vous permet de rétablir les valeurs par défaut de tous les paramètres de configuration du routeur. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="Sélectionnez un fichier à mettre à niveau";
fwupgrade.warning="<B>Avertissement :</B> La mise à niveau du micrologiciel peut prendre quelques minutes, ne<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coupez pas l'alimentation et n'appuyez pas sur le bouton de réinitialisation.";
fwupgrade.notinterrupted="La mise à niveau NE DOIT PAS être interrompue.";
fwupgrade.upgradesuccess="Mise à niveau réussie.";
fwupgrade.restoresuccess="Restauration réussie.";
fwupgrade.reboot="Redémarrage en cours...";
fwupgrade.helpmsg="Téléchargez le fichier de mise à niveau du micrologiciel sur le site Web <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Cliquez sur <b> Browse/Choose</b> File (Parcourir/Sélectionner un fichier) et sélectionnez le fichier de mise à niveau du micrologiciel. Cliquez ensuite sur <b>Lancer la mise à niveau</b>."
fwupgrade.safeupmsg1="Si vous souhaitez utiliser une mise à niveau sécurisée, commencez par modifier votre adresse IP LAN en \"192.168.1.1\". ";
fwupgrade.safeupmsg2="Souhaitez-vous utiliser le mode sécurisé pour la mise à niveau ? ";

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
lang.pl="Polnisch";
lang.ar="Arabisch";
lang.tr="Türkisch";
lang.title="Mise à niveau de la version linguistique";
lang.uploadfile="Sélectionnez un fichier de langue à mettre à niveau";

var adbutton = new Object();
adbutton.inlog="Fichier journal des entrées";
adbutton.outlog="Fichier journal des sorties";
adbutton.ping="Ping";
adbutton.tracer="Détermination d'itinéraire";
adbutton.safeupgrade="Mise à niveau sécurisée";
adbutton.upgrade="Mise à niveau";
adbutton.stop="Arrêter";
adbutton.clearlog="Effacer le fichier journal";
adbutton.traceroute="Détermination d'itinéraire";
adbutton.starttracer="Démarrer le test de détermination d'itinéraire";
adbutton.startupgrade="Lancer la mise à niveau";
adbutton.startping="Démarrer le test Ping";
adbutton.viewlog="Afficher le fichier journal";
adbutton.clear="Effacer";
adbutton.savelog="Enregistrer le fichier journal";
adbutton.dhcpres="Réservation DHCP";
adbutton.startrestore="Commencer la restauration";
adbutton.starttest="Démarrer le test";









