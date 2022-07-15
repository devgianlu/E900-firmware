var firewall2 = new Object();
firewall2.natredir="Filtre de redirection NAT Internet pour Internet IPv4 uniquement";
firewall2.ident="Filtre IDENT (port 113)";
firewall2.multi="Filtre multidiffusion";
firewall2.internetfilter="Filtre Internet";
firewall2.webfilter="Filtre Web";

var hupgrade = new Object();
hupgrade.right1="Cliquez sur le bouton Parcourir pour sélectionner le fichier de microcode voulu.";
hupgrade.right2="Cliquez sur le bouton Mise à niveau pour commencer le processus. Il ne faut pas interrompre la mise à niveau.";
hupgrade.wrimage="Fichier image incorrect.";

var hfacdef = new Object();
hfacdef.right1="Cette opération va restaurer les paramètres par défaut. Tous vos paramètres seront effacés.";
hfacdef.warning="Avertissement! Si vous cliquez sur OK, les paramètres par défaut seront restaurés et tous les paramètres antérieurs seront effacés.";

var hdiag = new Object();
hdiag.right1="Entrez l'adresse IP ou le nom de domaine pour le test Ping et cliquez sur le bouton Ping.";
hdiag.right2="Entrez l'adresse IP ou le nom de domaine pour le test de détermination d'itinéraire et cliquez sur le bouton Détermination d'itinéraire.";

var hlog = new Object();
hlog.right1="Vous pouvez activer ou désactiver le fichier journal des <b>entrées</b> et <b>de sorties</b> en appuyant sur le bouton correspondant.";

var manage2 = new Object();
manage2.webacc="Accès de gestion local";
manage2.accser="Serveur d'accès";
manage2.wlacc="Accès Web&nbsp; sans fil";
manage2.vapass="Les mots de passe ne concordent pas. Entrez le mot de passe de nouveau.";
manage2.passnot="La confirmation du mot de passe a échoué.";
manage2.selweb="Vous devez sélectionner un serveur Web.";
manage2.changpass="Le mot de passe du routeur est le mot de passe par défaut. Pour plus de sécurité, changez de mot de passe avant d'activer la gestion à distance. Cliquez sur OK pour changer de mot de passe. Cliquez sur Annuler pour ne pas activer la gestion à distance.";
manage2.webutiacc="Accès par";
manage2.wlutiacc="Accès sans fil";

var hmanage2 = new Object();
hmanage2.right1="<b>Accès local au routeur : </b>Vous pouvez changer le mot de passe du routeur dans cette section. Entrez un nouveau mot de passe, puis entrez-le de nouveau dans le champ Confirmation du mot de passe pour le confirmer.<br>";
hmanage2.right2="<b>Accès Web : </b>Pour la configuration des options d'accès à l'utilitaire Web du routeur.";
hmanage2.right3="<b>Accès distant au routeur : </b>Pour accéder à distance au routeur. Sélectionnez le port à utiliser. Vous devez changer le mot de passe du routeur si c'est encore le mot de passe par défaut.";
hmanage2.right4="<b>UPnP : </b>Certains logiciels se servent de cette fonction pour ouvrir automatiquement des ports de communication.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Adresse MAC</b>. Adresse MAC du routeur, telle qu'elle apparaît sur votre réseau sans fil.";
hstatwl2.right2="<b>Mode</b>. Indique le mode de réseau sans fil sélectionné à la page Sans fil (soit Mixte, G uniquement ou Désactivé).";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Adresse MAC</b>. Adresse MAC du routeur, telle qu'elle apparaît sur votre réseau Ethernet.";
hstatlan2.right2="<b>Adresse IP</b>. Adresse IP du routeur, telle qu'elle apparaît sur votre réseau Ethernet.";
hstatlan2.right3="<b>Masque de sous-réseau</b>. Indique le masque de sous-réseau qu'emploie le routeur, le cas échéant.";
hstatlan2.right4="<b>Serveur DHCP</b>. Indique si vous utilisez le routeur comme serveur DHCP.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statique";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Câble Telstra";
hstatrouter2.connecting="Connexion...";
hstatrouter2.disconnected="Déconnecté";
hstatrouter2.disconnect="Déconnecter";
hstatrouter2.right1="<b>Version du microcode.  </b>Le routeur utilise actuellement ce microcode.";
hstatrouter2.right2="<b>Heure actuelle.  </b>Affiche l’heure telle que vous l’avez précisée dans l’onglet Configuration.";
hstatrouter2.right3="<b>Adresse MAC.  </b>Adresse MAC du routeur telle qu’elle apparaît chez votre fournisseur.";
hstatrouter2.right4="<b>Nom du routeur.  </b>Nom spécifique du routeur que vous avez spécifié dans l’onglet Configuration.";
hstatrouter2.right5="<b>Type de configuration.  </b>Affiche les informations requises par votre fournisseur d'accès Internet pour la connexion à Internet. Ces informations ont été entrées dans l’onglet Configuration. Vous pouvez <b>activer (option Connecter) </b> ou <b>désactiver (option Déconnecter) </b> votre connexion en cliquant sur ce bouton.";
hstatrouter2.authfail=" Échec de l'authentification";
hstatrouter2.noip="Impossible d'obtenir une adresse IP de ";
hstatrouter2.negfail=" Échec de la négociation";
hstatrouter2.lcpfail=" Échec de la négociation LCP";
hstatrouter2.tcpfail="Impossible d'établir une connexion TCP avec ";
hstatrouter2.noconn="Impossible d'établir une connexion avec ";
hstatrouter2.server=" le serveur";
hstatrouter2.pppoenoip="Impossible d'obtenir une adresse IP de PPPoE";
hstatrouter2.undetermined="Non déterminé";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>En activant cette option, vous établissez la connexion entre le routeur et Internet. Tous les ports seront accessibles depuis Internet.";

var hforward2 = new Object();
hforward2.right1="<b>Routage de ports : </b>Certaines applications exigent, pour fonctionner correctement, que des ports spécifiques soient ouverts. Les serveurs et certains jeux en ligne en sont des exemples. Quand Internet demande l'ouverture d'un port donné, le routeur achemine les données vers l'ordinateur que vous aurez désigné. Pour plus de sécurité, vous pouvez limiter les transferts de connexion uniquement aux ports que vous utilisez, puis désélectionner la case <b>Activer</b>.";

var hfilter2 = new Object();
hfilter2.delpolicy="Supprimer la politique?";
hfilter2.right1="<b>Politique d'accès Internet : </b>Vous pouvez établir jusqu'à 10 politiques d'accès. Cliquez sur <b>Supprimer</b> pour supprimer une politique ou sur <b>Sommaire</b> pour en afficher un résumé.";
hfilter2.right2="<b>État : </b>Activer ou désactiver une politique";
hfilter2.right3="<b>Nom de la politique : </b>Vous permet de désigner le nom d'une politique.";
hfilter2.right4="<b>Type de politique : </b>Choisissez Accès Internet ou Trafic de données entrant.";
hfilter2.right5="<b>Jours : </b>Sélectionnez le jour de la semaine où vous désirez appliquer cette politique.";
hfilter2.right6="<b>Heures : </b>Inscrivez les heures de la journée pendant lesquelles vous désirez que la politique s'applique.";
hfilter2.right7="<b>Services interdits : </b>Vous pouvez choisir les services auxquels l'accès sera bloqué. Cliquez sur <b>Ajouter/Modifier</b> des services pour modifier ces paramètres.";
hfilter2.right8="<b>Blocage de site Web par adresse Internet : </b>Entrez l'adresse Internet des sites Web auxquels vous désirez interdire l'accès.";
hfilter2.right9="<b>Blocage de site Web par mot clé : </b>Vous pouvez interdire l'accès aux sites Web contenant les mots clés inscrits ici.";

var hportser2 = new Object();
hportser2.submit="Appliquer";

var hwlad2 = new Object();
hwlad2.authtyp="Type d'authentification";
hwlad2.basrate="Débit de base";
hwlad2.mbps="Mbit/s";
hwlad2.def="Par défaut";
hwlad2.all="Tous";
hwlad2.defdef="(Par défaut : Par défaut)";
hwlad2.fburst="Rafale de trames";
hwlad2.milli="Millisecondes";
hwlad2.range="Portée";
hwlad2.frathrh="Seuil de fragmentation";
hwlad2.apiso="Isolement AP";
hwlad2.off="Marche";
hwlad2.on="Arrêt";
hwlad2.right1="<b>Type d'authentification : </b>Vous pouvez choisir Auto ou Clé partagée. Une authentification à clé partagée est plus sûre, mais tous les ordinateurs de votre réseau doivent posséder cette fonctionnalité.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Mode de réseau sans fil : </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster est activé automatiquement sur le mode <b>Mixte</b> et sur le mode <b>Sans fil G seulement</b>."); %> Pour exclure les périphériques clients sans fil G, sélectionnez <b>Sans fil B seulement</b>. Si votre réseau ne comporte pas de périphériques sans fil, choisissez <b>Désactiver</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="Clé WPA";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA personnel";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA entreprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="Clé WPA2 seulement";
hwlsec2.wpa2radius="WPA2 RADIUS seulement";
hwlsec2.wpa2pskmix="Clé WPA2 mixte";
hwlsec2.wpa2radiusmix="WPA2 RADIUS mixte";
hwlsec2.wpa2personal="WPA2 personnel";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2 entreprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="mode mixte WPA2/WPA";
hwlsec2.enterprisemixed="Mode mixte WPA2/WPA Enterprise";
hwlsec2.pskpersonal="PSK personnel";
hwlsec2.pskenterprise="PSK entreprise";
hwlsec2.psk2personal="PSK2 personnel";
hwlsec2.psk2enterprise="PSK2 entreprise";
hwlsec2.right1="<b>Mode sécurité : </b>Sélectionnez Désactiver, WEP, Clé WPA, WPA RADIUS ou RADIUS. Pour fonctionner correctement, tous les périphériques de votre réseau doivent utiliser le même mode de sécurité sans fil.";

var hwmac2 = new Object();
hwmac2.right1="<b>Clonage d'adresse MAC : </b>Certains fournisseurs d'accès Internet exigent que vous divulguiez votre adresse MAC. Si vous ne désirez pas avoir à répéter cette opération, vous pouvez ordonner au routeur de dupliquer l'adresse MAC déjà inscrite auprès du fournisseur.";

var hddns2 = new Object();
hddns2.right1="<b>Service DDNS : </b>Vous permet d'accéder à votre réseau avec des noms de domaine au lieu d'adresses IP. Le service gère les changements d'adresse IP et de noms de domaine de manière dynamique. Vous devez vous abonner à ce service auprès de TZO.com ou de DynDNS.org.";
hddns2.right2="Cliquez <b><a target=_blank href=http://Linksys.tzo.com>ici</a></b> pour un <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABONNEMENT D'ESSAI GRATUIT à TZO";
hddns2.right3="Cliquez <b><a target=_blank href=https://controlpanel.tzo.com>ici</a></b> pour gérer votre compte <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO";
hddns2.right4="Cliquez <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>ici</a></b> pour vous abonner au service <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS de TZO";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Aide et didacticiels</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Mode opérationnel : </b>Si l'hôte de votre connexion Internet est votre routeur, choisissez le mode <b>Passerelle</b>. S'il existe un autre routeur sur votre réseau, sélectionnez <b>Routeur</b>.";
hrouting2.right2="<b>Choisir un numéro de combinaison : </b>Numéro distinct pour chaque route; on peut en choisir jusqu'à 20.";
hrouting2.right3="<b>Nom de route : </b>Inscrivez le nom que vous désirez attribuer à cette route.";
hrouting2.right4="<b>Adresse IP du réseau local de destination : </b>Hôte distant auquel vous désirez attribuer la route statique";
hrouting2.right5="<b>Masque de sous-réseau : </b>Identifie l'hôte et la partie du réseau.";

var hindex2 = new Object();
hindex2.telstra="Câble Telstra";
hindex2.dns3="DNS statique 3";
hindex2.hbs="Serveur Heart Beat";
hindex2.l2tps="Serveur L2TP";
hindex2.pptps="Serveur PPTP";
hindex2.hdhcp="<b>Configuration automatique – DHCP : </b>Paramètre utilisé le plus souvent par les câblodistributeurs<br><br>";
hindex2.hpppoe1="<b>PPPoE : </b>Paramètre utilisé le plus souvent par les fournisseurs DSL<br>";
hindex2.hpppoe2="<b>Nom d'utilisateur : </b>Entrez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hpppoe3="<b>Mot de passe : </b>Entrez le mot de passe fourni par votre FAI.<br>";

hindex2.hstatic1="<b>Adresse IP statique : </b>Paramètre utilisé le plus souvent par des FAI pour entreprises<br>";
hindex2.hstatic2="<b>Adresse IP Internet : </b>Entrez l'adresse IP fournie par votre FAI.<br>";
hindex2.hstatic3="<b>Masque de sous-réseau : </b>Entrez votre masque de sous-réseau.<br>";

hindex2.hpptp1="<b>PPTP : </b>Paramètre utilisé le plus souvent par les fournisseurs DSL<br>";
hindex2.hpptp2="<b>Adresse IP Internet : </b>Entrez l'adresse IP fournie par votre FAI.<br>";
hindex2.hpptp3="<b>Masque de sous-réseau : </b>Entrez votre masque de sous-réseau.<br>";
hindex2.hpptp4="<b>Passerelle : </b>Entrez l'adresse de la passerelle de votre FAI.<br>";

hindex2.hl2tp1="<b>L2TP : </b>Paramètre utilisé par certains FAI en Europe.<br>";
hindex2.hl2tp2="<b>Nom d'utilisateur : </b>Entrez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hl2tp3="<b>Mot de passe : </b>Entrez le mot de passe fourni par votre FAI.<br>";

hindex2.hhb1="<b>Câble Telstra : </b>Paramètre utilisé le plus souvent par les fournisseurs DSL<br>";
hindex2.hhb2="<b>Nom d'utilisateur : </b>Entrez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hhb3="<b>Mot de passe : </b>Entrez le mot de passe fourni par votre FAI.<br>";

hindex2.right1="<b>Nom d'hôte : </b>Entrez le nom d'hôte fourni par votre FAI.<br>";
hindex2.right2="<b>Nom de domaine : </b>Entrez le nom de domaine fourni par votre FAI.<br>";
hindex2.right3="<b>Adresse IP locale : </b>Adresse du routeur<br>";
hindex2.right4="<b>Masque de sous-réseau : </b>Masque de sous-réseau du routeur<br><br><br>";
hindex2.right5="<b>Serveur DHCP : </b>Permet au routeur de gérer vos adresses IP.<br>";
hindex2.right6="<b>Adresse IP de début : </b>Première adresse que vous désirez utiliser<br>";
hindex2.right7="<b>Réglage de l'heure : </b>Pour indiquer dans quel fuseau horaire vous vous trouvez. Vous pouvez même régler automatiquement votre horloge pour l’heure avancée.";
hindex2.hdhcps1="<b>Nombre maximal d’utilisateurs DHCP : </b>Vous pouvez limiter le nombre d'adresses que votre routeur attribue.<br>";

var errmsg2 = new Object();
errmsg2.err0="L'adresse IP du serveur Heart Beat est incorrecte.";
errmsg2.err1="Supprimer cette entrée?";
errmsg2.err2="Vous devez entrer un SSID.";
errmsg2.err3="Entrez une clé partagée.";
errmsg2.err4=" contient des caractères hexadécimaux non valides ou dépasse 63 caractères.";
errmsg2.err5="La clé doit compter de 8 à 63 caractères ASCII ou 64 caractères hexadécimaux.";
errmsg2.err6="Vous devez entrer une clé.";
errmsg2.err7="Longueur de clé non valide.";
errmsg2.err8="Entrez une phrase de vérification.";
errmsg2.err9="Le nombre total de vérifications dépasse 40.";
errmsg2.err10="Les espaces ne sont pas permis.";
errmsg2.err11="Après avoir terminé, cliquez sur Appliquer.";
errmsg2.err12="Entrez un nom de service.";
errmsg2.err13="Le nom de service entré existe déjà.";
errmsg2.err14="L'adresse IP du réseau local ou le masque de sous-réseau est incorrect.";

var trigger2 = new Object();
trigger2.ptrigger="Déclenchement de ports";
trigger2.qos="QoS";
trigger2.trirange="Port déclenché";
trigger2.forrange="Port transféré";
trigger2.trirange1="Port déclenché";
trigger2.forrange1="Port transféré";
trigger2.sport="Port de début";
trigger2.eport="Port de fin";
trigger2.right1="Application : Entrez le nom d’application du déclencheur. <b>Ports déclenchés</b> Pour chaque application, cette option répertorie l’intervalle de numéros de ports déclenchés. Dans la documentation de l’application Internet, vérifiez le ou les numéros de ports nécessaires.<b>Port de départ</b> Entrez le numéro de port de début de la connexion sortante déclenchée.<b>Port de fin</b> Entrez le numéro de port de fin de la connexion sortante déclenchée.   <b>Numéros de ports déclenchés</b> Pour chaque application, cette option répertorie la plage des numéros de ports déclenchés. Pour connaître les numéros de port à utiliser, consultez la documentation de l'application Internet.   <b>Port de début</b> Entrez le numéro de port de début de la connexion entrante transférée.   <b>Port de fin</b> Entrez le numéro de port de fin de la connexion entrante transférée.";

var bakres2 = new Object();
bakres2.conman="Gestion de la configuration";
bakres2.bakconf="Sauvegarder les configurations";
bakres2.resconf="Restaurer des configurations";
bakres2.bakres="Sauvegarder et restaurer";
bakres2.file2res="Sélectionnez un fichier à restaurer";
bakres2.bakbutton="Sauvegarder les configurations";
bakres2.resbutton="Restaurer des configurations";
bakres2.right1="Vous pouvez enregistrer vos paramètres actuels au cas où vous devriez rétablir les paramètres par défaut du routeur.";
bakres2.right2="Vous pouvez cliquer sur le bouton Sauvegarder pour enregistrer vos paramètres actuels.";
bakres2.right3="Cliquez sur le bouton Parcourir pour trouver un fichier de configuration actuellement enregistré sur votre ordinateur.";
bakres2.right4="Cliquez sur Restaurer pour supprimer les paramètres actuels et les remplacer par ceux du fichier de configuration.";

var qos = new Object();
qos.uband="Bande passante en amont";
qos.bandwidth="Bande passante";
qos.dpriority="Priorité du périphérique";
qos.priority="Priorité";
qos.dname="Nom du périphérique";
qos.low="Faible";
qos.medium="Moyenne";
qos.high="Élevée";
qos.highest="Très élevée";
qos.eppriority="Priorité du port Ethernet";
qos.flowctrl="Contrôle de flux";
qos.appriority="Priorité de l'application";
qos.specport="Port spécifique";
qos.appname="Nom de l'application";
qos.alert1="Port non valide [0-65535]";
qos.alert2="La valeur du port de départ est supérieure à celle du port de fin.";
qos.confirm1="Configurer plusieurs ordinateurs, ports Ethernet ou applications à priorité élevée peut dégrader la qualité de service.\nContinuer quand même?";

qos.optgame="Optimisation des jeux";
qos.wqos="QS câble";
qos.wlqos="WMM   ";
qos.wlqos2="QoS sans fil";
qos.edca_ap="Paramètres EDCA AP";
qos.edca_sta="Paramètres EDCA STA";
qos.wme="Prise en charge WMM";
qos.noack="Aucune confirmation";
qos.apsdsupp="Soutien APSD";
qos.defdis="(Par défaut : Désactiver)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin.";
qos.forced="forcé";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (qualité du service)";
qos.intqccpri="Priorité d'accès Internet";
qos.category="Catégorie";
qos.mediumrec="Moyenne (recommandée)";
qos.normal="Normale";
qos.msnmess="MSN Messenger";
qos.skype="Skype";
qos.yahoomess="Yahoo Messenger";
qos.winlivemsg="Windows Live Messenger";
qos.aim="AIM";
qos.winmediaplay="Lecteur Windows Media";
qos.realplayer="RealPlayer";
qos.quicktime="QuickTime";
qos.itunes="iTunes";
qos.yahoomusic="Yahoo Music Jukebox";
qos.rhapsody="Rhapsody";
qos.addapp="Ajout d'une application";
qos.onlinegame="Catégorie Jeux en ligne";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tournament";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.: Shadow Of Chernobyl";
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
qos.addgame="Ajouter un jeu";
qos.entername="Entrer un nom";
qos.etherport="Catégorie Port Ethernet";
qos.voicedevice="Catégorie Périphérique vocal";
qos.voicemac="Adresse MAC de mon périphérique vocal";
qos.recommend="Recommander";
qos.game="Jeu";
qos.mymac="Adresse MAC courante de mon ordinateur";

qos.right1="Deux modes de qualité de service sont offerts, le mode QoS câble, qui contrôle les périphériques reliés au routeur par câble Ethernet, et le mode QoS sans fil, pour les périphériques sans fil.";
qos.right2="<b>Priorité du périphérique :</b> Vous pouvez déterminer la priorité accordée au trafic provenant d'un périphérique raccordé à votre réseau en attribuant un nom à ce périphérique, en indiquant la priorité et en entrant son adresse MAC.";
qos.right3="<b>Priorité du port Ethernet :</b> Vous pouvez contrôler le débit d'après le port physique du réseau auquel est connecté le périphérique. Vous pouvez attribuer un niveau de priorité (élevée ou faible) au trafic de données provenant de périphériques raccordés aux ports 1 à 4 du réseau.";
qos.right4="<b>Priorité de l'application :</b> Vous pouvez contrôler le débit selon l'application utilisant la bande passante. Cochez la case <b>Optimiser les jeux</b> pour accorder automatiquement une priorité supérieure aux ports consacrés aux jeux. Cette fonction peut s'appliquer à huit applications au maximum; entrez le numéro du port utilisé.";
qos.right5="Le mode QoS sans fil s'appelle également <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM),</b> provenant de Wi-Fi Alliance<sup>TM</sup>. Choisissez Activer pour utiliser WMM, si vous employez d'autres périphériques sans fil homologués WMM.";
qos.right6="<b>Aucune confirmation :</b> Activez cette option pour désactiver la confirmation. Le routeur ne renverra plus les données en cas d'erreur.";
qos.exist = "Ce paramètre existe déjà.";

var vpn2 = new Object();
vpn2.right1="Vous pouvez activer les modes PPTP, L2TP ou IPSec pour permettre à vos périphériques de communiquer par VPN.";

var fail = new Object();
fail.msg="Valeurs entrées non valides. Recommencez.";

var pactrl = new Object();
pactrl.pactrl ="Contrôle parental";
pactrl.accsign ="Abonnement";
pactrl.center1 ="Grâce à la solution de contrôle parental de Linksys, votre famille est en sécurité<br>quand elle navigue sur Internet.";
pactrl.center2 ="<li>Facilité d'installation</li><br><li>Protégez tous vos ordinateurs depuis votre routeur Linksys.</li><br><li>Consultez des rapports pour connaître l'utilisation du Web, du courriel et de la messagerie instantanée.</li>";
pactrl.center3 ="**En vous abonnant à ce service, vous désactivez les politiques d'accès Internet du routeur.";
pactrl.manageacc ="Gérer le compte.";
pactrl.center4 ="Gérer votre compte de Contrôle parental.";
pactrl.signparental ="Abonnez-vous au service Contrôle parental.";
pactrl.moreinfo ="Pour en savoir plus";
pactrl.isprovision ="L'ordinateur est protégé.";
pactrl.notprovision ="L'ordinateur n'est pas protégé.";
pactrl.right1 ="L'écran Contrôle parental vous permet de vous abonner au service et de gérer votre compte. Le Contrôle parental de Linksys est un outil puissant qui permet de contrôler l'accès aux services Internet et à leurs fonctions pour chaque membre de votre famille.";

var satusroute = new Object();
satusroute.localtime ="Non disponible.";

var succ = new Object();
succ.autoreturn ="Vous reviendrez à la page précédente dans quelques secondes.";
succ.return_desc = "Vous accéderez à la page de mise à niveau de sécurité après quelques secondes.";
succ.interrupt_desc = "N'interrompez pas la mise à niveau. Patientez...";
succ.return_index = "Vous accéderez à la page de mise à niveau standard après quelques secondes. ";

var gn = new Object();
gn.gnip="Adresse IP du réseau d'invité";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nom de réseau (SSID) d'invité";
gn.err1="L'adresse IP du réseau d'invité ne peut pas correspondre au sous-réseau de l'adresse du réseau local.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Durée du compte";
gn.minutes="heures";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";


gn.title=" Accès d'invité";
gn.tips0="Mot de passe erroné, veuillez l'entrer de nouveau";
gn.tips1="Veuillez entrer le mot de passe pour accéder à ce point d'accès";
gn.login=" Ouvrir une session";
gn.err3="Nom de réseau (SSID) 5G identique au SSID d'invité, veuillez le modifier.";
gn.err4="Nom de réseau (SSID) 2.4G identique au SSID d'invité, veuillez le modifier.";
gn.err5="L'adresse IP du réseau local ne peut pas correspondre au sous-réseau de l'adresse du réseau d'invité.";
gn.err6="Le réseau 192.168.33.0/24 network (adresse IP 192.168.33.0 – 255) est réservé pour le réseau sans fil des invités. Veuillez utiliser une autre adresse de réseau.";
gn.tips6=" Entrez le mot de passe d'accès d'invité pour accéder à Internet. Si vous ne connaissez pas le mot de passe, demandez au propriétaire de vous le donner. Vous pouvez trouver le mot de passe d'accès d'invité à l'aide de Linksys Connect.";
gn.dv="Affichage Bureau";
gn.mv="Affichage mobile";
gn.context="Entrez le mot de passe d'accès d'invité pour accéder à Internet. Si vous ne connaissez pas le mot de passe, demandez au propriétaire de vous le donner. Vous pouvez trouver le mot de passe d'accès d'invité à l'aide de Linksys Connect.";
gn.nat="L'accès d'invité ne sera pas disponible si l'option NAT est désactivée.  Souhaitez-vous poursuivre et enregistrer vos changements?";






