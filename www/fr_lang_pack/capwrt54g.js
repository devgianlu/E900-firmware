var firewall2 = new Object();
firewall2.natredir="Filtrage de redirection NAT Internet pour iPv4 - Internet uniquement";
firewall2.ident="Filtrage IDENT (port 113)";
firewall2.multi="Filtrage multidiffusion";
firewall2.internetfilter="Filtre Internet";
firewall2.webfilter="Filtre Web";

var hupgrade = new Object();
hupgrade.right1="Cliquez sur le bouton Parcourir pour sélectionner le fichier du micrologiciel à charger sur le routeur.";
hupgrade.right2="Cliquez sur le bouton Mettre à niveau pour lancer la procédure de mise à niveau. La mise à niveau ne doit pas être interrompue.";
hupgrade.wrimage="Le fichier image est incorrect.";

var hfacdef = new Object();
hfacdef.right1="Cette opération va restaurer tous les paramètres d'usine. Tous vos paramètres seront effacés.";
hfacdef.warning="Avertissement ! Si vous cliquez sur OK, les paramètres d'usine du périphérique seront restaurés et les paramètres précédents seront écrasés.";

var hdiag = new Object();
hdiag.right1="Entrez l'adresse IP ou le nom de domaine pour lequel vous voulez exécuter le ping et cliquez sur le bouton Ping.";
hdiag.right2="Entrez l'adresse IP ou le nom de domaine dont vous voulez effectuer le suivi et cliquez sur le bouton Déterminer l'itinéraire";

var hlog = new Object();
hlog.right1="Vous pouvez activer ou désactiver l'utilisation de fichiers journaux <b>entrants</b> et <b>sortants</b> en sélectionnant le bouton d'option approprié.";

var manage2 = new Object();
manage2.webacc="Accès à la gestion locale";
manage2.accser="Accès au serveur";
manage2.wlacc="Accès &nbsp;Web sans fil";
manage2.vapass="Le mot de passe de confirmation ne correspond pas au mot de passe saisi. Saisissez à nouveau le mot de passe.";
manage2.passnot="Confirmation du mot de passe incorrecte.";
manage2.selweb="Vous devez sélectionnez un serveur Web.";
manage2.changpass="Le mot de passe par défaut est déjà défini pour le routeur. Par mesure de sécurité, vous devez changer le mot de passe avant de pouvoir activer la fonction Gestion distante. Cliquez sur le bouton OK pour changer votre mot de passe. Cliquez sur le bouton Annuler pour maintenir la fonction Gestion distante désactivée.";
manage2.webutiacc="Accès via";
manage2.wlutiacc="Accès sans fil";

var hmanage2 = new Object();
hmanage2.right1="<b>Accès local au routeur : </b>vous pouvez modifier le mot de passe du routeur dans ce champ. Saisissez un nouveau mot de passe, puis saisissez-le à nouveau dans le champ Confirmation du mot de passe pour le confirmer.<br>";
hmanage2.right2="<b>Accès Web : </b> permet de configurer les options d'accès à l'utilitaire Web du routeur.";
hmanage2.right3="<b>Accès distant au routeur :</b> permet d'accéder au routeur à distance. Choisissez le port à utiliser. Vous devez modifier le mot de passe d'accès au routeur s'il utilise toujours son mot de passe par défaut.";
hmanage2.right4="<b>UPnP : </b>utilisé par certains programmes pour l'ouverture automatique de ports pour la communication.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Adresse MAC</b> : il s'agit de l'adresse MAC du routeur telle qu'elle apparaît sur votre réseau local sans fil.";
hstatwl2.right2="<b>Mode</b> : cette option, sélectionnée dans l'onglet Sans fil, affiche le mode sans fil (Mixte, G uniquement ou Désactivé) adopté par le réseau.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Adresse MAC</b> : il s'agit de l'adresse MAC du routeur telle qu'elle apparaît sur votre réseau local Ethernet.";
hstatlan2.right2="<b>Adresse IP</b> : il s'agit de l'adresse IP du routeur telle qu'elle apparaît sur votre réseau local Ethernet.";
hstatlan2.right3="<b>Masque de sous-réseau</b> : lorsque le routeur utilise un masque de sous-réseau, cette information s'affiche sur cette ligne.";
hstatlan2.right4="<b>Serveur DHCP</b> : si vous utilisez le routeur comme serveur DHCP, cette information s'affiche sur cette ligne.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statique";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Câble Telstra";
hstatrouter2.connecting="Connexion";
hstatrouter2.disconnected="Déconnecté ";
hstatrouter2.disconnect="Déconnecter";
hstatrouter2.right1="<b>Version du micrologiciel :  </b>il s'agit du micrologiciel du routeur.";
hstatrouter2.right2="<b>Heure actuelle : </b>cette option affiche l'heure telle que vous l'avez définie dans l'onglet Configuration.";
hstatrouter2.right3="<b>Adresse MAC :  </b>il s'agit de l'adresse MAC du routeur telle qu'elle apparaît à votre fournisseur d'accès Internet (FAI).";
hstatrouter2.right4="<b>Nom du routeur : </b>il s'agit ici du nom spécifique du routeur que vous avez défini dans l'onglet Configuration.";
hstatrouter2.right5="<b>Type de configuration :  </b>ce champ affiche les informations requises par votre FAI pour la connexion à Internet. Ces informations ont été saisies dans l'onglet Configuration. Vous pouvez <b>Connecter</b> ou <b>Déconnecter</b> votre connexion en cliquant sur le bouton disponible dans cette section.";
hstatrouter2.authfail=" Echec de l'authentification";
hstatrouter2.noip="Impossible d'obtenir une adresse IP depuis ";
hstatrouter2.negfail=" Echec de la négociation";
hstatrouter2.lcpfail=" Echec de la négociation LCP";
hstatrouter2.tcpfail="Impossible d'établir une connexion TCP sur ";
hstatrouter2.noconn="Connexion impossible au ";
hstatrouter2.server=" serveur";
hstatrouter2.pppoenoip="Impossible d'obtenir une adresse IP depuis PPPoE";
hstatrouter2.undetermined="Non déterminée";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>lorsque cette option est activée, le routeur est exposé à Internet. Tous les ports sont accessibles depuis Internet";

var hforward2 = new Object();
hforward2.right1="<b>Transfert de connexion : </b>certaines applications peuvent requérir l'ouverture de certains ports pour que le transfert de connexion puisse fonctionner correctement. Ces applications incluent les serveurs et certains jeux en ligne. Lorsque la demande d'un certain port provient d'Internet, le routeur achemine les données vers l'ordinateur indiqué. En raison de problèmes de sécurité, vous pouvez limiter le transfert de connexion aux ports que vous utilisez et désactiver l'option <b>Activer</b> lorsque vous avez terminé.";

var hfilter2 = new Object();
hfilter2.delpolicy="Supprimer la stratégie ?";
hfilter2.right1="<b>Stratégie d'accès à Internet : </b>vous pouvez définir jusqu'à 10 stratégies d'accès. Cliquez sur <b>Supprimer</b> pour supprimer une stratégie ou sur <b>Récapitulatif</b> pour afficher un récapitulatif de la stratégie.";
hfilter2.right2="<b>Etat : </b>activer ou désactiver une stratégie.";
hfilter2.right3="<b>Nom de la stratégie : </b>vous pouvez attribuer un nom à votre stratégie.";
hfilter2.right4="<b>Type de stratégie : </b>choisissez Accès à Internet ou Trafic entrant.";
hfilter2.right5="<b>Jours : </b>choisissez le jour d'application de votre stratégie.";
hfilter2.right6="<b>Heures : </b>entrez l'heure d'application de votre stratégie.";
hfilter2.right7="<b>Services bloqués : </b>vous pouvez choisir de bloquer l'accès à certains services. Cliquez sur <b>Ajouter/Modifier</b> un service pour modifier ces paramètres.";
hfilter2.right8="<b>Blocage du site Web par URL : </b>vous pouvez bloquer l'accès à certains sites Web en entrant leur URL.";
hfilter2.right9="<b>Blocage du site Web par mot-clé : </b>vous pouvez bloquer l'accès à certains sites Web en utilisant les mots-clés présents dans leur page Web.";

var hportser2 = new Object();
hportser2.submit="Appliquer";

var hwlad2 = new Object();
hwlad2.authtyp="Type d'authentification";
hwlad2.basrate="Taux de base";
hwlad2.mbps="Mbit/s";
hwlad2.def="Par défaut";
hwlad2.all="Tous";
hwlad2.defdef="(par défaut : Par défaut)";
hwlad2.fburst="Rafale de trames";
hwlad2.milli="Millisecondes";
hwlad2.range="Plage";
hwlad2.frathrh="Seuil de fragmentation";
hwlad2.apiso="Isolement AP";
hwlad2.off="Désactivé ";
hwlad2.on="Activé ";
hwlad2.right1="<b>Type d'authentification : </b>vous avez le choix entre Auto et Clé partagée. L'authentification Clé partagée est plus sûre mais tous les périphériques du réseau doivent également prendre en charge ce type d'authentification.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Mode réseau sans fil : </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster est activé automatiquement en mode <b>Mixte</b> et <b>G uniquement</b>."); %> Si vous souhaitez exclure les clients sans fil G, choisissez le mode <b>B uniquement</b>. Si vous souhaitez désactiver l'accès sans fil, choisissez <b>Désactiver</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="Clé WPA pré-partagée";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA personnel";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA entreprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="Clé pré-partagée WPA2 uniquement";
hwlsec2.wpa2radius="WPA2 RADIUS uniquement";
hwlsec2.wpa2pskmix="Clé prépartagée WPA2 mixte";
hwlsec2.wpa2radiusmix="WPA2 RADIUS mixte";
hwlsec2.wpa2personal="WPA2 personnel";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2 entreprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="mode mixte WPA2/WPA";
hwlsec2.enterprisemixed="mode mixte WPA2/WPA entreprise";
hwlsec2.newwpa2personal="WPA2 Personal"
hwlsec2.pskpersonal="PSK Personnel";
hwlsec2.pskenterprise="PSK Entreprise";
hwlsec2.psk2personal="PSK2 Personnel";
hwlsec2.psk2enterprise="PSK2 Entreprise";
hwlsec2.right1="<b>Mode de sécurité : </b>vous avez le choix entre Désactiver, WEP, Clé prépartagée WPA, WPA RADIUS et RADIUS. Tous les périphériques du réseau doivent utiliser le même mode de sécurité pour pouvoir communiquer.";

var hwmac2 = new Object();
hwmac2.right1="<b>Adresse MAC dupliquée : </b>certains FAI vous demandent d'enregistrer votre adresse MAC. Si vous ne souhaitez pas enregistrer de nouveau votre adresse MAC, le routeur peut dupliquer l'adresse MAC enregistrée par votre FAI.";

var hddns2 = new Object();
hddns2.right1="<b>Service DDNS : </b>permet d'accéder au réseau à l'aide de noms de domaine au lieu d'adresses IP. Le service gère la modification de l'adresse IP et met à jour de manière dynamique les informations relatives à votre domaine. Vous devez vous connecter au service via TZO.com ou DynDNS.org.";
hddns2.right2="Cliquez <b><a target=_blank href=http://Linksys.tzo.com>ici</a></b> pour SOUSCRIRE à un <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPTE D'ESSAI GRATUIT TZO";
hddns2.right3="Cliquez <b><a target=_blank href=https://controlpanel.tzo.com>ici</a></b> pour gérer votre <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compte TZO";
hddns2.right4="Cliquez <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>ici</a></b> pour souscrire à un abonnement TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Assistance / Didacticiels</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Mode opérationnel : </b>si le routeur héberge votre connexion Internet, sélectionnez le mode <b>Passerelle</b>. Si votre réseau contient un autre routeur, sélectionnez le mode <b>Routeur</b>.";
hrouting2.right2="<b>Sélectionner un numéro d'itinéraire : </b>il s'agit d'un numéro d'itinéraire unique. Vous pouvez définir 20 itinéraires au maximum.";
hrouting2.right3="<b>Nom de l'itinéraire : </b>entrez le nom de cet itinéraire.";
hrouting2.right4="<b>IP LAN de destination : </b>hôte distant auquel vous voulez assigner l'itinéraire statique.";
hrouting2.right5="<b>Masque de sous-réseau : </b>détermine l'hôte et la portion du réseau.";

var hindex2 = new Object();
hindex2.telstra="Câble Telstra";
hindex2.dns3="DNS statique 3";
hindex2.hbs="Serveur Heart Beat";
hindex2.l2tps="Serveur L2TP";
hindex2.pptps="Serveur PPTP";
hindex2.hdhcp="<b>Configuration automatique - DHCP : </b>ce paramètre est généralement utilisé par les opérateurs de réseau câblé.<br><br>";
hindex2.hpppoe1="<b>PPPoE : </b>ce paramètre est le plus utilisé par les fournisseurs de DSL.<br>";
hindex2.hpppoe2="<b>Nom d'utilisateur :</b> saisissez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hpppoe3="<b>Mot de passe : </b>saisissez le mot de passe fourni par votre FAI.<br>";

hindex2.hstatic1="<b>Adresse IP statique : </b>ce paramètre est le plus utilisé par les FAI Business Class.<br>";
hindex2.hstatic2="<b>Adresse IP Internet : </b>saisissez l'adresse IP fournie par votre FAI.<br>";
hindex2.hstatic3="<b>Masque de sous-réseau : </b>saisissez votre masque de sous-réseau<br>";

hindex2.hpptp1="<b>PPTP : </b>ce paramètre est le plus utilisé par les fournisseurs de DSL.<br>";
hindex2.hpptp2="<b>Adresse IP Internet : </b>saisissez l'adresse IP fournie par votre FAI.<br>";
hindex2.hpptp3="<b>Masque de sous-réseau : </b>saisissez votre masque de sous-réseau<br>";
hindex2.hpptp4="<b>Passerelle : </b>saisissez l'adresse de la passerelle du FAI<br>";

hindex2.hl2tp1="<b>L2TP : </b>ce paramètre est utilisé par certains FAI européens.<br>";
hindex2.hl2tp2="<b>Nom d'utilisateur :</b> saisissez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hl2tp3="<b>Mot de passe : </b>saisissez le mot de passe fourni par votre FAI.<br>";

hindex2.hhb1="<b>Câble Telstra : </b>ce paramètre est le plus utilisé par les fournisseurs de DSL.<br>";
hindex2.hhb2="<b>Nom d'utilisateur :</b> saisissez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hhb3="<b>Mot de passe : </b>saisissez le mot de passe fourni par votre FAI.<br>";

hindex2.right1="<b>Nom d'hôte : </b>entrez le nom d'hôte fourni par votre FAI.<br>";
hindex2.right2="<b>Nom de domaine : </b>entrez le nom de domaine fourni par votre FAI.<br>";
hindex2.right3="<b>Adresse IP locale : </b>adresse du routeur.<br>";
hindex2.right4="<b>Masque de sous-réseau : </b>masque de sous-réseau du routeur.<br><br><br>";
hindex2.right5="<b>Serveur DHCP : </b>permet au routeur de gérer vos adresses IP.<br>";
hindex2.right6="<b>Adresse IP de début : </b>adresse servant de référence de départ.<br>";
hindex2.right7="<b>Réglage de l'heure : </b>choisissez votre fuseau horaire. Le routeur peut également se régler automatiquement sur l'heure d'été.";
hindex2.hdhcps1="<b>Nombre maximal d'utilisateurs DHCP : </b>vous pouvez limiter le nombre d'adresses délivrées par votre routeur.<br>";

var errmsg2 = new Object();
errmsg2.err0="Adresse IP de serveur Heart Beat incorrecte.";
errmsg2.err1="Supprimer l'entrée ?";
errmsg2.err2="Vous devez saisir un SSID.";
errmsg2.err3="Entrez une clé partagée.";
errmsg2.err4=" utilise des chiffres hexadécimaux non autorisés ou comporte plus de 63 caractères.";
errmsg2.err5="La clé doit contenir entre 8 et 63 caractères ASCII ou 64 chiffres hexadécimaux.";
errmsg2.err6="Vous devez entrer une clé.";
errmsg2.err7="La longueur de la clé est incorrecte.";
errmsg2.err8="Entrez une phrase de passe.";
errmsg2.err9="Le nombre de vérifications est supérieur à 40.";
errmsg2.err10="Les espaces ne sont pas autorisés.";
errmsg2.err11="Après avoir effectué toutes les opérations, cliquez sur le bouton Appliquer pour enregistrer les paramètres.";
errmsg2.err12="Vous devez saisir un nom de service.";
errmsg2.err13="Le nom de service existe déjà.";
errmsg2.err14="L'adresse IP LAN ou le masque de sous-réseau est incorrect.";

var trigger2 = new Object();
trigger2.ptrigger="Déclenchement de connexion";
trigger2.qos="QS";
trigger2.trirange="Connexion sortante <br>déclenchée";
trigger2.forrange="Connexion entrante <br>transférée";
trigger2.trirange1="Connexion sortante<BR> déclenchée";
trigger2.forrange1="Connexion entrante<BR> transférée";
trigger2.sport="Port de début";
trigger2.eport="Port de fin";
trigger2.right1="Nom de l'application : saisissez le nom de l'application du déclencheur. <b>Connexion sortante déclenchée :</b> pour chaque application, cette option répertorie l'intervalle de numéros de ports déclenchés. Dans la documentation de l'application Internet, vérifiez les numéros de ports nécessaires. <b>Port de début :</b> entrez le numéro de port de départ de la connexion sortante déclenchée. <b>Port de fin :</b> entrez le numéro de port de fin de la connexion sortante déclenchée.   <b>Connexion entrante transférée :</b> pour chaque application, cette option répertorie l'intervalle de numéros de ports transférés. Dans la documentation de l'application Internet, vérifiez le ou les numéros de ports nécessaires.   <b>Port de début :</b> entrez le numéro de port de départ de la connexion entrante transférée.   <b>Port de fin :</b> entrez le numéro de port de fin de la connexion entrante transférée.";

var bakres2 = new Object();
bakres2.conman="Gestion de la configuration";
bakres2.bakconf="Sauvegarder les configurations";
bakres2.resconf="Restaurer les configurations";
bakres2.bakres="Sauvegarde et restauration";
bakres2.file2res="Sélectionnez un fichier à restaurer.";
bakres2.bakbutton="Sauvegarder les configurations";
bakres2.resbutton="Restaurer les configurations";
bakres2.right1="Vous pouvez sauvegarder votre configuration au cas où vous auriez besoin de restaurer les paramètres d'usine du routeur.";
bakres2.right2="Cliquez sur le bouton Sauvegarder pour sauvegarder votre configuration.";
bakres2.right3="Cliquez sur le bouton Parcourir pour chercher un fichier de configuration déjà sauvegardé sur l'ordinateur.";
bakres2.right4="Cliquez sur Restaurer pour remplacer les configurations actuelles par celles du fichier de configuration.";

var qos = new Object();
qos.uband="Bande passante émission";
qos.bandwidth="Bande passante";
qos.dpriority="Priorité du périphérique";
qos.priority="Priorité ";
qos.dname="Nom de périphérique";
qos.low="Faible";
qos.medium="Moyenne";
qos.high="Elevée";
qos.highest="Maximale";
qos.eppriority="Priorité du port Ethernet";
qos.flowctrl="Contrôle de flux";
qos.appriority="Priorité de l'application";
qos.specport="Port spécifique";
qos.appname="Nom de l'application";
qos.alert1="La valeur du port est hors limites [0 - 65535]";
qos.alert2="La valeur du port de début est plus grande que la valeur du port de fin";
qos.confirm1="Paramétrer plusieurs périphériques, un port Ethernet ou une application sur une priorité élevée peut réduire les effets de la QS.\nSouhaitez-vous vraiment effectuer cette opération ?";

qos.optgame="Optimiser les applications de jeu";
qos.wqos="QS câblée";
qos.wlqos="WMM   ";
qos.wlqos2="QS sans fil";
qos.edca_ap="Paramètres des points d'accès EDCA";
qos.edca_sta="Paramètres STA EDCA";
qos.wme="Prise en charge WMM";
qos.noack="Aucune confirmation";
qos.apsdsupp="Prise en charge APSD";
qos.defdis="(par défaut : Désactiver)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP (b)";
qos.txopag="TXOP (a/g)";
qos.admin="Admin";
qos.forced="Forcé ";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QS (Qualité de service)";
qos.intqccpri="Priorité d'accès à Internet";
qos.category="Catégorie";
qos.mediumrec="Moyenne (recommandé)";
qos.normal="Normale";
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
qos.addapp="Ajouter une nouvelle application";
qos.onlinegame="Jeux en ligne";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Half Life";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tourment";
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
qos.addgame="Ajouter un nouveau jeu";
qos.entername="Saisir un nom";
qos.etherport="Port Ethernet";
qos.voicedevice="Périphérique vocal";
qos.voicemac="Adresse MAC de mon périphérique vocal";
qos.recommend="Recommandation";
qos.game="Jeu";
qos.mymac="Adresse MAC de mon ordinateur actuel";

qos.right1="Deux types de fonctionnalités du service QS sont disponibles : la QS câblée qui contrôle les périphériques reliés au routeur par un câble Ethernet et la QS sans fil qui contrôle les périphériques reliés au routeur par une connexion sans fil.";
qos.right2="<b>Priorité du périphérique :</b> pour définir des priorités pour l'ensemble du trafic en provenance d'un périphérique de votre réseau, attribuez-lui un nom de périphérique, spécifiez sa priorité et saisissez son adresse MAC.";
qos.right3="<b>Priorité du port Ethernet :</b> vous pouvez contrôler le taux de transmission selon le port physique LAN auquel votre périphérique est connecté. Vous pouvez attribuer une priorité Elevée ou Faible au trafic de données en provenance des périphériques connectés aux ports LAN numérotés de 1 à 4.";
qos.right4="<b>Priorité de l'application :</b> vous pouvez contrôler le taux de transmission en fonction de la largeur de bande passante utilisée par une application. Activez l'option <b>Optimiser les applications de jeu</b> pour attribuer automatiquement la priorité la plus élevée aux ports d'applications de jeu courantes. Vous pouvez également personnaliser jusqu'à huit applications en spécifiant le numéro de port utilisé par ces dernières.";
qos.right5="La QS sans fil est également appelée <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> par la Wi-Fi Alliance<sup>TM</sup>. Sélectionnez Autoriser l'utilisation de WMM si vous utilisez d'autres périphériques sans fil également certifié WMM.";
qos.right6="<b>Aucune confirmation :</b> activez cette option si vous souhaitez désactiver la confirmation. Si elle est désactivée, le routeur ne renverra pas les données en cas d'erreur.";
qos.exist = "Ce paramètre existe déjà.";

var vpn2 = new Object();
vpn2.right1="Vous pouvez choisir d'activer le Passthrough PPTP, L2TP ou IPSec afin d'autoriser les périphériques de votre réseau à communiquer via VPN.";

var fail = new Object();
fail.msg="Les valeurs indiquées sont incorrectes. Veuillez réessayer.";

var pactrl = new Object();
pactrl.pactrl ="Contrôle parental";
pactrl.accsign ="Se connecter à un compte";
pactrl.center1 ="La solution Contrôle parental de Linksys permet de protéger les membres de votre famille<br>lorsqu'ils surfent sur Internet.";
pactrl.center2 ="<li>Facile à utiliser</li><br><li>Protégez les ordinateurs de votre domicile grâce au routeur Linksys</li><br><li>Des rapports permettent de contrôler l'utilisation du Web, de la messagerie électronique et de la messagerie instantanée</li>";
pactrl.center3 ="** La connexion à ce service désactive les stratégies d'accès à Internet intégrées au routeur";
pactrl.manageacc ="Gérer le compte";
pactrl.center4 ="Gestion de votre compte Contrôle parental";
pactrl.signparental ="Inscription au service de contrôle parental";
pactrl.moreinfo ="Plus d'infos";
pactrl.isprovision ="le périphérique est approvisionné ";
pactrl.notprovision ="le périphérique n'est pas approvisionné ";
pactrl.right1 ="L'écran Contrôle parental permet de vous abonner au compte de contrôle parental Linksys et de le gérer. Le service de contrôle parental de Linksys fournit des outils puissants pour contrôler la disponibilité des services, de l'accès et des fonctions d'Internet, pouvant être personnalisés pour chaque membre de votre famille.";

var satusroute = new Object();
satusroute.localtime ="Non disponible";

var succ = new Object();
succ.autoreturn ="Vous allez revenir à la page précédente dans quelques secondes.";
succ.return_desc = "Vous allez revenir à la page Mise à niveau sécurisée dans quelques secondes.";
succ.interrupt_desc = "N'interrompez pas la mise à niveau, veuillez patienter...";
succ.return_index = "Vous allez revenir à la page Configuration de base dans quelques secondes. ";

var gn = new Object();
gn.gnip="IP réseau invité";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nom du réseau (SSID) invité";
gn.err1="L'IP réseau invité ne peut pas se trouver dans le même sous-réseau que l'adresse LAN.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Durée du compte";
gn.minutes="heures";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title="Accès invité";
gn.tips0="Mot de passe incorrect, veuillez le saisir de nouveau";
gn.tips1="Saisissez le mot de passe pour accéder à ce point de connexion.";
gn.login=" Connexion";
gn.err3="SSID 5 GHz sans fil identique au SSID invité ; veuillez modifier la saisie.";
gn.err4="SSID 2,4 GHz sans fil identique au SSID invité ; veuillez modifier la saisie.";
gn.err5="L'adresse IP LAN ne peut pas se trouver dans le même sous-réseau que l'adresse IP réseau invité.";
gn.err6="Le réseau 192.168.33.0/24 (adresses IP 192.168.33.0 à 255) est réservé pour le réseau invité sans fil. Veuillez utiliser une adresse réseau différente.";
gn.tips6=" Saisissez le mot de passe d'accès invité pour accéder à Internet. Si vous ne connaissez pas ce mot de passe, adressez-vous au propriétaire du point de connexion. Vous pouvez aussi trouver le mot de passe d'accès invité à l'aide de Linksys Connect.";
gn.dv="Affichage Bureau";
gn.mv="Affichage Mobile";
gn.context="Saisissez le mot de passe d'accès invité pour accéder à Internet. Si vous ne connaissez pas ce mot de passe, adressez-vous au propriétaire du point de connexion. Vous pouvez aussi trouver le mot de passe d'accès invité à l'aide de Linksys Connect.";
gn.nat="L'accès invité n'est pas disponible lorsque le paramètre NAT est désactivé.  Souhaitez-vous sauvegarder vos modifications ?";







