var adtopmenu = new Object();
adtopmenu.manage="Gestion";
adtopmenu.log="Fichier journal";
adtopmenu.diag="Diagnostics";
adtopmenu.facdef="Param�tres d'usine";
adtopmenu.upgarde="Mise � niveau du micrologiciel";
adtopmenu.lang="Langue";
adtopmenu.multilang="Plusieurs langues";
adtopmenu.selan="S�lectionnez la langue de votre choix";

var adleftmenu = new Object();
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.localaccess="Acc�s au routeur";
adleftmenu.routerpsw="Mot de passe du routeur";
adleftmenu.remoteaccess="Acc�s � la gestion distante";
adleftmenu.ping="Test Ping";
adleftmenu.pingparam="Param�tres Ping";
adleftmenu.tracertest="Test de d�termination d'itin�raire";
adleftmenu.tracerparam="Param�tres de d�termination d'itin�raire";
adleftmenu.upgradefw="Mettre � niveau le micrologiciel";
adleftmenu.advfeature="Fonctionnalit�s avanc�es";
adleftmenu.reboot="Red�marrage";

var mgt = new Object();
mgt.reconfirm="Confirmation du mot de passe";
mgt.remotemgt="Gestion &nbsp;distante";
mgt.webassistant="Assistant Web Linksys";
mgt.mgtport="Port de gestion";
mgt.rmtmgtport="Port de gestion distante";
mgt.https="Utiliser https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="Mise � niveau � distance";
mgt.remoteip="Adresse IP distante autoris�e";
mgt.anyip="Toutes les adresses IP";
mgt.upnpconfig="Autoriser les utilisateurs � configurer";
mgt.upnpinternetdis="Autoriser les utilisateurs � d�sactiver l'<BR>&nbsp;acc�s � Internet";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="Table Journal entrant";
log.srcip="IP source";
log.desportnum="Num�ro du port de destination";
log.outlogtbl="Table Journal sortant";
log.lanip="IP LAN";
log.desurlip="URL/IP de destination";
log.portnum="Service/Num�ro de port";
log.inlog="Fichier journal des entr�es";
log.outlog="Fichier journal des sorties";
log.seclog="Fichier journal de s�curit� ";
log.dhcplog="Fichier journal du client DHCP";
log.type="Type";
log.remotelog="Adresse IP de r�ception des fichiers journaux";
log.msg1="(0 signifie d�sactiv�)";
log.lanipaddr="Adresse IP LAN";
log.dstip="URL ou adresse IP de destination";
log.srvport="Num�ro de port (service)";

var ping = new Object();
ping.ipdomain="Adresse IP ou nom de domaine";
ping.ipurl="Adresse IP ou URL";
ping.times="Nombre de Pings";
ping.unlimited="Illimit� ";
ping.pktsize="Taille du paquet";
ping.unreach="R�seau inaccessible";
ping.pkttr="Paquets transmis";
ping.pktrx="Paquets re�us";
ping.pktloss="Perte de paquet";
ping.databyte="octets de donn�es";
ping.datastat="statistiques des donn�es";
ping.roundtrip="aller-retour min/moy/max";
ping.bytefrom="octets de";
ping.time="Heure";
ping.reqout="D�passement du d�lai de la demande";
ping.unknown="H�te inconnu";

var tracert = new Object();
tracert.unreach="R�seau inaccessible";
tracert.traceto="d�termination d'itin�raire �";
tracert.hopsmax="sauts max";
tracert.bytepkt="octets de paquets";
tracert.reqout="D�passement du d�lai de la demande";
tracert.tracecomp="Trace termin�e";
tracert.unknown="H�te inconnu";

var facdef = new Object();
facdef.refacdefa="Restaurer les param�tres d'usine";
facdef.refacdefa2="Restaurer les param�tres d'usine";
facdef.helpmsg="Cette fonction vous permet de r�tablir les valeurs par d�faut de tous les param�tres de configuration du routeur. ";

var fwupgrade = new Object();
fwupgrade.upgradefile="S�lectionnez un fichier � mettre � niveau";
fwupgrade.warning="<B>Avertissement�:</B> La mise � niveau du micrologiciel peut prendre quelques minutes, ne<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coupez pas l'alimentation et n'appuyez pas sur le bouton de r�initialisation.";
fwupgrade.notinterrupted="La mise � niveau NE DOIT PAS �tre interrompue.";
fwupgrade.upgradesuccess="Mise � niveau r�ussie.";
fwupgrade.restoresuccess="Restauration r�ussie.";
fwupgrade.reboot="Red�marrage en cours...";
fwupgrade.helpmsg="T�l�chargez le fichier de mise � niveau du micrologiciel sur le site Web <b><u><a href='http://www.linksys.com'>www.linksys.com</a></u></b>. Cliquez sur <b> Browse/Choose</b> File (Parcourir/S�lectionner un fichier) et s�lectionnez le fichier de mise � niveau du micrologiciel. Cliquez ensuite sur <b>Lancer la mise � niveau</b>."
fwupgrade.safeupmsg1="Si vous souhaitez utiliser une mise � niveau s�curis�e, commencez par modifier votre adresse IP LAN en \"192.168.1.1\". ";
fwupgrade.safeupmsg2="Souhaitez-vous utiliser le mode s�curis� pour la mise � niveau ? ";

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
lang.pl="Polnisch";
lang.ar="Arabisch";
lang.tr="T�rkisch";
lang.title="Mise � niveau de la version linguistique";
lang.uploadfile="S�lectionnez un fichier de langue � mettre � niveau";

var adbutton = new Object();
adbutton.inlog="Fichier journal des entr�es";
adbutton.outlog="Fichier journal des sorties";
adbutton.ping="Ping";
adbutton.tracer="D�termination d'itin�raire";
adbutton.safeupgrade="Mise � niveau s�curis�e";
adbutton.upgrade="Mise � niveau";
adbutton.stop="Arr�ter";
adbutton.clearlog="Effacer le fichier journal";
adbutton.traceroute="D�termination d'itin�raire";
adbutton.starttracer="D�marrer le test de d�termination d'itin�raire";
adbutton.startupgrade="Lancer la mise � niveau";
adbutton.startping="D�marrer le test Ping";
adbutton.viewlog="Afficher le fichier journal";
adbutton.clear="Effacer";
adbutton.savelog="Enregistrer le fichier journal";
adbutton.dhcpres="R�servation DHCP";
adbutton.startrestore="Commencer la restauration";
adbutton.starttest="D�marrer le test";









