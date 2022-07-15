var firewall2 = new Object();
firewall2.natredir="Filtre de redirection NAT Internet pour Internet�IPv4 uniquement";
firewall2.ident="Filtre IDENT (port 113)";
firewall2.multi="Filtre multidiffusion";
firewall2.internetfilter="Filtre Internet";
firewall2.webfilter="Filtre Web";

var hupgrade = new Object();
hupgrade.right1="Cliquez sur le bouton Parcourir pour s�lectionner le fichier de microcode voulu.";
hupgrade.right2="Cliquez sur le bouton Mise � niveau pour commencer le processus. Il ne faut pas interrompre la mise � niveau.";
hupgrade.wrimage="Fichier image incorrect.";

var hfacdef = new Object();
hfacdef.right1="Cette op�ration va restaurer les param�tres par d�faut. Tous vos param�tres seront effac�s.";
hfacdef.warning="Avertissement! Si vous cliquez sur OK, les param�tres par d�faut seront restaur�s et tous les param�tres ant�rieurs seront effac�s.";

var hdiag = new Object();
hdiag.right1="Entrez l'adresse IP ou le nom de domaine pour le test Ping et cliquez sur le bouton Ping.";
hdiag.right2="Entrez l'adresse IP ou le nom de domaine pour le test de d�termination d'itin�raire et cliquez sur le bouton D�termination d'itin�raire.";

var hlog = new Object();
hlog.right1="Vous pouvez activer ou d�sactiver le fichier journal des <b>entr�es</b> et <b>de sorties</b> en appuyant sur le bouton correspondant.";

var manage2 = new Object();
manage2.webacc="Acc�s de gestion local";
manage2.accser="Serveur d'acc�s";
manage2.wlacc="Acc�s Web&nbsp; sans fil";
manage2.vapass="Les mots de passe ne concordent pas. Entrez le mot de passe de nouveau.";
manage2.passnot="La confirmation du mot de passe a �chou�.";
manage2.selweb="Vous devez s�lectionner un serveur Web.";
manage2.changpass="Le mot de passe du routeur est le mot de passe par d�faut. Pour plus de s�curit�, changez de mot de passe avant d'activer la gestion � distance. Cliquez sur OK pour changer de mot de passe. Cliquez sur Annuler pour ne pas activer la gestion � distance.";
manage2.webutiacc="Acc�s par";
manage2.wlutiacc="Acc�s sans�fil";

var hmanage2 = new Object();
hmanage2.right1="<b>Acc�s local au routeur�: </b>Vous pouvez changer le mot de passe du routeur dans cette section. Entrez un nouveau mot de passe, puis entrez-le de nouveau dans le champ Confirmation du mot de passe pour le confirmer.<br>";
hmanage2.right2="<b>Acc�s Web�: </b>Pour la configuration des options d'acc�s � l'utilitaire Web du routeur.";
hmanage2.right3="<b>Acc�s distant au routeur�: </b>Pour acc�der � distance au routeur. S�lectionnez le port � utiliser. Vous devez changer le mot de passe du routeur si c'est encore le mot de passe par d�faut.";
hmanage2.right4="<b>UPnP�: </b>Certains logiciels se servent de cette fonction pour ouvrir automatiquement des ports de communication.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>Adresse�MAC</b>. Adresse MAC du routeur, telle qu'elle appara�t sur votre r�seau sans fil.";
hstatwl2.right2="<b>Mode</b>. Indique le mode de r�seau sans fil s�lectionn� � la page Sans fil (soit Mixte, G uniquement ou D�sactiv�).";

var hstatlan2 = new Object();
hstatlan2.right1="<b>Adresse�MAC</b>. Adresse MAC du routeur, telle qu'elle appara�t sur votre r�seau Ethernet.";
hstatlan2.right2="<b>Adresse�IP</b>. Adresse IP du routeur, telle qu'elle appara�t sur votre r�seau Ethernet.";
hstatlan2.right3="<b>Masque de sous-r�seau</b>. Indique le masque de sous-r�seau qu'emploie le routeur, le cas �ch�ant.";
hstatlan2.right4="<b>Serveur DHCP</b>. Indique si vous utilisez le routeur comme serveur�DHCP.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statique";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="C�ble Telstra";
hstatrouter2.connecting="Connexion...";
hstatrouter2.disconnected="D�connect�";
hstatrouter2.disconnect="D�connecter";
hstatrouter2.right1="<b>Version du microcode.  </b>Le routeur utilise actuellement ce microcode.";
hstatrouter2.right2="<b>Heure actuelle.  </b>Affiche l�heure telle que vous l�avez pr�cis�e dans l�onglet Configuration.";
hstatrouter2.right3="<b>Adresse�MAC.  </b>Adresse MAC du routeur telle qu�elle appara�t chez votre fournisseur.";
hstatrouter2.right4="<b>Nom du routeur.  </b>Nom sp�cifique du routeur que vous avez sp�cifi� dans l�onglet Configuration.";
hstatrouter2.right5="<b>Type de configuration.  </b>Affiche les informations requises par votre fournisseur d'acc�s Internet pour la connexion � Internet. Ces informations ont �t� entr�es dans l�onglet Configuration. Vous pouvez <b>activer (option Connecter) </b> ou <b>d�sactiver (option D�connecter) </b> votre connexion en cliquant sur ce bouton.";
hstatrouter2.authfail=" �chec de l'authentification";
hstatrouter2.noip="Impossible d'obtenir une adresse IP de ";
hstatrouter2.negfail=" �chec de la n�gociation";
hstatrouter2.lcpfail=" �chec de la n�gociation LCP";
hstatrouter2.tcpfail="Impossible d'�tablir une connexion TCP avec ";
hstatrouter2.noconn="Impossible d'�tablir une connexion avec ";
hstatrouter2.server=" le serveur";
hstatrouter2.pppoenoip="Impossible d'obtenir une adresse IP de�PPPoE";
hstatrouter2.undetermined="Non d�termin�";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ�: </b>En activant cette option, vous �tablissez la connexion entre le routeur et Internet. Tous les ports seront accessibles depuis Internet.";

var hforward2 = new Object();
hforward2.right1="<b>Routage de ports�: </b>Certaines applications exigent, pour fonctionner correctement, que des ports sp�cifiques soient ouverts. Les serveurs et certains jeux en ligne en sont des exemples. Quand Internet demande l'ouverture d'un port donn�, le routeur achemine les donn�es vers l'ordinateur que vous aurez d�sign�. Pour plus de s�curit�, vous pouvez limiter les transferts de connexion uniquement aux ports que vous utilisez, puis d�s�lectionner la case <b>Activer</b>.";

var hfilter2 = new Object();
hfilter2.delpolicy="Supprimer la politique?";
hfilter2.right1="<b>Politique d'acc�s Internet�: </b>Vous pouvez �tablir jusqu'� 10�politiques d'acc�s. Cliquez sur <b>Supprimer</b> pour supprimer une politique ou sur <b>Sommaire</b> pour en afficher un r�sum�.";
hfilter2.right2="<b>�tat�: </b>Activer ou d�sactiver une politique";
hfilter2.right3="<b>Nom de la politique�: </b>Vous permet de d�signer le nom d'une politique.";
hfilter2.right4="<b>Type de politique�: </b>Choisissez Acc�s Internet ou Trafic de donn�es entrant.";
hfilter2.right5="<b>Jours�: </b>S�lectionnez le jour de la semaine o� vous d�sirez appliquer cette politique.";
hfilter2.right6="<b>Heures�: </b>Inscrivez les heures de la journ�e pendant lesquelles vous d�sirez que la politique s'applique.";
hfilter2.right7="<b>Services interdits�: </b>Vous pouvez choisir les services auxquels l'acc�s sera bloqu�. Cliquez sur <b>Ajouter/Modifier</b> des services pour modifier ces param�tres.";
hfilter2.right8="<b>Blocage de site Web par adresse Internet�: </b>Entrez l'adresse Internet des sites Web auxquels vous d�sirez interdire l'acc�s.";
hfilter2.right9="<b>Blocage de site Web par mot cl�: </b>Vous pouvez interdire l'acc�s aux sites Web contenant les mots cl�s inscrits ici.";

var hportser2 = new Object();
hportser2.submit="Appliquer";

var hwlad2 = new Object();
hwlad2.authtyp="Type d'authentification";
hwlad2.basrate="D�bit de base";
hwlad2.mbps="Mbit/s";
hwlad2.def="Par d�faut";
hwlad2.all="Tous";
hwlad2.defdef="(Par d�faut�: Par d�faut)";
hwlad2.fburst="Rafale de trames";
hwlad2.milli="Millisecondes";
hwlad2.range="Port�e";
hwlad2.frathrh="Seuil de fragmentation";
hwlad2.apiso="Isolement AP";
hwlad2.off="Marche";
hwlad2.on="Arr�t";
hwlad2.right1="<b>Type d'authentification�: </b>Vous pouvez choisir Auto ou Cl� partag�e. Une authentification � cl� partag�e est plus s�re, mais tous les ordinateurs de votre r�seau doivent poss�der cette fonctionnalit�.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Mode de r�seau sans fil�: </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster est activ� automatiquement sur le mode <b>Mixte</b> et sur le mode <b>Sans fil�G seulement</b>."); %> Pour exclure les p�riph�riques clients sans fil�G, s�lectionnez <b>Sans fil�B seulement</b>. Si votre r�seau ne comporte pas de p�riph�riques sans fil, choisissez <b>D�sactiver</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="Cl� WPA";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA personnel";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA entreprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="Cl� WPA2 seulement";
hwlsec2.wpa2radius="WPA2 RADIUS seulement";
hwlsec2.wpa2pskmix="Cl� WPA2 mixte";
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
hwlsec2.right1="<b>Mode s�curit�: </b>S�lectionnez D�sactiver, WEP, Cl� WPA, WPA RADIUS ou RADIUS. Pour fonctionner correctement, tous les p�riph�riques de votre r�seau doivent utiliser le m�me mode de s�curit� sans fil.";

var hwmac2 = new Object();
hwmac2.right1="<b>Clonage d'adresse MAC�: </b>Certains fournisseurs d'acc�s Internet exigent que vous divulguiez votre adresse MAC. Si vous ne d�sirez pas avoir � r�p�ter cette op�ration, vous pouvez ordonner au routeur de dupliquer l'adresse MAC d�j� inscrite aupr�s du fournisseur.";

var hddns2 = new Object();
hddns2.right1="<b>Service DDNS�: </b>Vous permet d'acc�der � votre r�seau avec des noms de domaine au lieu d'adresses�IP. Le service g�re les changements d'adresse IP et de noms de domaine de mani�re dynamique. Vous devez vous abonner � ce service aupr�s de TZO.com ou de DynDNS.org.";
hddns2.right2="Cliquez <b><a target=_blank href=http://Linksys.tzo.com>ici</a></b> pour un <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABONNEMENT D'ESSAI GRATUIT � TZO";
hddns2.right3="Cliquez <b><a target=_blank href=https://controlpanel.tzo.com>ici</a></b> pour g�rer votre compte <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO";
hddns2.right4="Cliquez <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>ici</a></b> pour vous abonner au service <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS de TZO";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Aide et didacticiels</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Mode op�rationnel�: </b>Si l'h�te de votre connexion Internet est votre routeur, choisissez le mode <b>Passerelle</b>. S'il existe un autre routeur sur votre r�seau, s�lectionnez <b>Routeur</b>.";
hrouting2.right2="<b>Choisir un num�ro de combinaison�: </b>Num�ro distinct pour chaque route; on peut en choisir jusqu'� 20.";
hrouting2.right3="<b>Nom de route�: </b>Inscrivez le nom que vous d�sirez attribuer � cette route.";
hrouting2.right4="<b>Adresse IP du r�seau local de destination�: </b>H�te distant auquel vous d�sirez attribuer la route statique";
hrouting2.right5="<b>Masque de sous-r�seau�: </b>Identifie l'h�te et la partie du r�seau.";

var hindex2 = new Object();
hindex2.telstra="C�ble Telstra";
hindex2.dns3="DNS statique 3";
hindex2.hbs="Serveur Heart Beat";
hindex2.l2tps="Serveur L2TP";
hindex2.pptps="Serveur PPTP";
hindex2.hdhcp="<b>Configuration automatique � DHCP�: </b>Param�tre utilis� le plus souvent par les c�blodistributeurs<br><br>";
hindex2.hpppoe1="<b>PPPoE�: </b>Param�tre utilis� le plus souvent par les fournisseurs DSL<br>";
hindex2.hpppoe2="<b>Nom d'utilisateur�: </b>Entrez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hpppoe3="<b>Mot de passe�: </b>Entrez le mot de passe fourni par votre FAI.<br>";

hindex2.hstatic1="<b>Adresse IP statique�: </b>Param�tre utilis� le plus souvent par des FAI pour entreprises<br>";
hindex2.hstatic2="<b>Adresse IP Internet�: </b>Entrez l'adresse IP fournie par votre FAI.<br>";
hindex2.hstatic3="<b>Masque de sous-r�seau�: </b>Entrez votre masque de sous-r�seau.<br>";

hindex2.hpptp1="<b>PPTP�: </b>Param�tre utilis� le plus souvent par les fournisseurs DSL<br>";
hindex2.hpptp2="<b>Adresse IP Internet�: </b>Entrez l'adresse IP fournie par votre FAI.<br>";
hindex2.hpptp3="<b>Masque de sous-r�seau�: </b>Entrez votre masque de sous-r�seau.<br>";
hindex2.hpptp4="<b>Passerelle�: </b>Entrez l'adresse de la passerelle de votre FAI.<br>";

hindex2.hl2tp1="<b>L2TP�: </b>Param�tre utilis� par certains FAI en Europe.<br>";
hindex2.hl2tp2="<b>Nom d'utilisateur�: </b>Entrez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hl2tp3="<b>Mot de passe�: </b>Entrez le mot de passe fourni par votre FAI.<br>";

hindex2.hhb1="<b>C�ble Telstra�: </b>Param�tre utilis� le plus souvent par les fournisseurs DSL<br>";
hindex2.hhb2="<b>Nom d'utilisateur�: </b>Entrez le nom d'utilisateur fourni par votre FAI.<br>";
hindex2.hhb3="<b>Mot de passe�: </b>Entrez le mot de passe fourni par votre FAI.<br>";

hindex2.right1="<b>Nom d'h�te�: </b>Entrez le nom d'h�te fourni par votre FAI.<br>";
hindex2.right2="<b>Nom de domaine�: </b>Entrez le nom de domaine fourni par votre FAI.<br>";
hindex2.right3="<b>Adresse IP locale�: </b>Adresse du routeur<br>";
hindex2.right4="<b>Masque de sous-r�seau�: </b>Masque de sous-r�seau du routeur<br><br><br>";
hindex2.right5="<b>Serveur DHCP�: </b>Permet au routeur de g�rer vos adresses IP.<br>";
hindex2.right6="<b>Adresse IP de d�but�: </b>Premi�re adresse que vous d�sirez utiliser<br>";
hindex2.right7="<b>R�glage de l'heure�: </b>Pour indiquer dans quel fuseau horaire vous vous trouvez. Vous pouvez m�me r�gler automatiquement votre horloge pour l�heure avanc�e.";
hindex2.hdhcps1="<b>Nombre maximal d�utilisateurs DHCP�: </b>Vous pouvez limiter le nombre d'adresses que votre routeur attribue.<br>";

var errmsg2 = new Object();
errmsg2.err0="L'adresse IP du serveur Heart Beat est incorrecte.";
errmsg2.err1="Supprimer cette entr�e?";
errmsg2.err2="Vous devez entrer un SSID.";
errmsg2.err3="Entrez une cl� partag�e.";
errmsg2.err4=" contient des caract�res hexad�cimaux non valides ou d�passe 63�caract�res.";
errmsg2.err5="La cl� doit compter de 8 � 63�caract�res ASCII ou 64�caract�res hexad�cimaux.";
errmsg2.err6="Vous devez entrer une cl�.";
errmsg2.err7="Longueur de cl� non valide.";
errmsg2.err8="Entrez une phrase de v�rification.";
errmsg2.err9="Le nombre total de v�rifications d�passe�40.";
errmsg2.err10="Les espaces ne sont pas permis.";
errmsg2.err11="Apr�s avoir termin�, cliquez sur Appliquer.";
errmsg2.err12="Entrez un nom de service.";
errmsg2.err13="Le nom de service entr� existe d�j�.";
errmsg2.err14="L'adresse IP du r�seau local ou le masque de sous-r�seau est incorrect.";

var trigger2 = new Object();
trigger2.ptrigger="D�clenchement de ports";
trigger2.qos="QoS";
trigger2.trirange="Port d�clench�";
trigger2.forrange="Port transf�r�";
trigger2.trirange1="Port d�clench�";
trigger2.forrange1="Port transf�r�";
trigger2.sport="Port de d�but";
trigger2.eport="Port de fin";
trigger2.right1="Application�: Entrez le nom d�application du d�clencheur. <b>Ports d�clench�s</b> Pour chaque application, cette option r�pertorie l�intervalle de num�ros de ports d�clench�s. Dans la documentation de l�application Internet, v�rifiez le ou les num�ros de ports n�cessaires.<b>Port de d�part</b> Entrez le num�ro de port de d�but de la connexion sortante d�clench�e.<b>Port de fin</b> Entrez le num�ro de port de fin de la connexion sortante d�clench�e.   <b>Num�ros de ports d�clench�s</b> Pour chaque application, cette option r�pertorie la plage des num�ros de ports d�clench�s. Pour conna�tre les num�ros de port � utiliser, consultez la documentation de l'application Internet.   <b>Port de d�but</b> Entrez le num�ro de port de d�but de la connexion entrante transf�r�e.   <b>Port de fin</b> Entrez le num�ro de port de fin de la connexion entrante transf�r�e.";

var bakres2 = new Object();
bakres2.conman="Gestion de la configuration";
bakres2.bakconf="Sauvegarder les configurations";
bakres2.resconf="Restaurer des configurations";
bakres2.bakres="Sauvegarder et restaurer";
bakres2.file2res="S�lectionnez un fichier � restaurer";
bakres2.bakbutton="Sauvegarder les configurations";
bakres2.resbutton="Restaurer des configurations";
bakres2.right1="Vous pouvez enregistrer vos param�tres actuels au cas o� vous devriez r�tablir les param�tres par d�faut du routeur.";
bakres2.right2="Vous pouvez cliquer sur le bouton Sauvegarder pour enregistrer vos param�tres actuels.";
bakres2.right3="Cliquez sur le bouton Parcourir pour trouver un fichier de configuration actuellement enregistr� sur votre ordinateur.";
bakres2.right4="Cliquez sur Restaurer pour supprimer les param�tres actuels et les remplacer par ceux du fichier de configuration.";

var qos = new Object();
qos.uband="Bande passante en amont";
qos.bandwidth="Bande passante";
qos.dpriority="Priorit� du p�riph�rique";
qos.priority="Priorit�";
qos.dname="Nom du p�riph�rique";
qos.low="Faible";
qos.medium="Moyenne";
qos.high="�lev�e";
qos.highest="Tr�s �lev�e";
qos.eppriority="Priorit� du port Ethernet";
qos.flowctrl="Contr�le de flux";
qos.appriority="Priorit� de l'application";
qos.specport="Port sp�cifique";
qos.appname="Nom de l'application";
qos.alert1="Port non valide [0-65535]";
qos.alert2="La valeur du port de d�part est sup�rieure � celle du port de fin.";
qos.confirm1="Configurer plusieurs ordinateurs, ports Ethernet ou applications � priorit� �lev�e peut d�grader la qualit� de service.\nContinuer quand m�me?";

qos.optgame="Optimisation des jeux";
qos.wqos="QS c�ble";
qos.wlqos="WMM   ";
qos.wlqos2="QoS sans fil";
qos.edca_ap="Param�tres EDCA AP";
qos.edca_sta="Param�tres EDCA STA";
qos.wme="Prise en charge WMM";
qos.noack="Aucune confirmation";
qos.apsdsupp="Soutien APSD";
qos.defdis="(Par d�faut�: D�sactiver)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin.";
qos.forced="forc�";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (qualit� du service)";
qos.intqccpri="Priorit� d'acc�s Internet";
qos.category="Cat�gorie";
qos.mediumrec="Moyenne (recommand�e)";
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
qos.onlinegame="Cat�gorie Jeux en ligne";
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
qos.etherport="Cat�gorie Port Ethernet";
qos.voicedevice="Cat�gorie P�riph�rique vocal";
qos.voicemac="Adresse MAC de mon p�riph�rique vocal";
qos.recommend="Recommander";
qos.game="Jeu";
qos.mymac="Adresse MAC courante de mon ordinateur";

qos.right1="Deux modes de qualit� de service sont offerts, le mode QoS c�ble, qui contr�le les p�riph�riques reli�s au routeur par c�ble Ethernet, et le mode QoS sans fil, pour les p�riph�riques sans fil.";
qos.right2="<b>Priorit� du p�riph�rique�:</b> Vous pouvez d�terminer la priorit� accord�e au trafic provenant d'un p�riph�rique raccord� � votre r�seau en attribuant un nom � ce p�riph�rique, en indiquant la priorit� et en entrant son adresse MAC.";
qos.right3="<b>Priorit� du port Ethernet�:</b> Vous pouvez contr�ler le d�bit d'apr�s le port physique du r�seau auquel est connect� le p�riph�rique. Vous pouvez attribuer un niveau de priorit� (�lev�e ou faible) au trafic de donn�es provenant de p�riph�riques raccord�s aux ports 1 � 4 du r�seau.";
qos.right4="<b>Priorit� de l'application�:</b> Vous pouvez contr�ler le d�bit selon l'application utilisant la bande passante. Cochez la case <b>Optimiser les jeux</b> pour accorder automatiquement une priorit� sup�rieure aux ports consacr�s aux jeux. Cette fonction peut s'appliquer � huit applications au maximum; entrez le num�ro du port utilis�.";
qos.right5="Le mode QoS sans fil s'appelle �galement <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM),</b> provenant de Wi-Fi Alliance<sup>TM</sup>. Choisissez Activer pour utiliser WMM, si vous employez d'autres p�riph�riques sans fil homologu�s WMM.";
qos.right6="<b>Aucune confirmation�:</b> Activez cette option pour d�sactiver la confirmation. Le routeur ne renverra plus les donn�es en cas d'erreur.";
qos.exist = "Ce param�tre existe d�j�.";

var vpn2 = new Object();
vpn2.right1="Vous pouvez activer les modes PPTP, L2TP ou IPSec pour permettre � vos p�riph�riques de communiquer par VPN.";

var fail = new Object();
fail.msg="Valeurs entr�es non valides. Recommencez.";

var pactrl = new Object();
pactrl.pactrl ="Contr�le parental";
pactrl.accsign ="Abonnement";
pactrl.center1 ="Gr�ce � la solution de contr�le parental de Linksys, votre famille est en s�curit�<br>quand elle navigue sur Internet.";
pactrl.center2 ="<li>Facilit� d'installation</li><br><li>Prot�gez tous vos ordinateurs depuis votre routeur Linksys.</li><br><li>Consultez des rapports pour conna�tre l'utilisation du Web, du courriel et de la messagerie instantan�e.</li>";
pactrl.center3 ="**En vous abonnant � ce service, vous d�sactivez les politiques d'acc�s Internet du routeur.";
pactrl.manageacc ="G�rer le compte.";
pactrl.center4 ="G�rer votre compte de Contr�le parental.";
pactrl.signparental ="Abonnez-vous au service Contr�le parental.";
pactrl.moreinfo ="Pour en savoir plus";
pactrl.isprovision ="L'ordinateur est prot�g�.";
pactrl.notprovision ="L'ordinateur n'est pas prot�g�.";
pactrl.right1 ="L'�cran Contr�le parental vous permet de vous abonner au service et de g�rer votre compte. Le Contr�le parental de Linksys est un outil puissant qui permet de contr�ler l'acc�s aux services Internet et � leurs fonctions pour chaque membre de votre famille.";

var satusroute = new Object();
satusroute.localtime ="Non disponible.";

var succ = new Object();
succ.autoreturn ="Vous reviendrez � la page pr�c�dente dans quelques secondes.";
succ.return_desc = "Vous acc�derez � la page de mise � niveau de s�curit� apr�s quelques secondes.";
succ.interrupt_desc = "N'interrompez pas la mise � niveau. Patientez...";
succ.return_index = "Vous acc�derez � la page de mise � niveau standard apr�s quelques secondes. ";

var gn = new Object();
gn.gnip="Adresse IP du r�seau d'invit�";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Nom de r�seau (SSID) d'invit�";
gn.err1="L'adresse IP du r�seau d'invit� ne peut pas correspondre au sous-r�seau de l'adresse du r�seau local.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Dur�e du compte";
gn.minutes="heures";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";


gn.title=" Acc�s d'invit�";
gn.tips0="Mot de passe erron�, veuillez l'entrer de nouveau";
gn.tips1="Veuillez entrer le mot de passe pour acc�der � ce point d'acc�s";
gn.login=" Ouvrir une session";
gn.err3="Nom de r�seau (SSID) 5G identique au SSID d'invit�, veuillez le modifier.";
gn.err4="Nom de r�seau (SSID) 2.4G identique au SSID d'invit�, veuillez le modifier.";
gn.err5="L'adresse IP du r�seau local ne peut pas correspondre au sous-r�seau de l'adresse du r�seau d'invit�.";
gn.err6="Le r�seau 192.168.33.0/24 network (adresse IP 192.168.33.0 � 255) est r�serv� pour le r�seau sans fil des invit�s. Veuillez utiliser une autre adresse de r�seau.";
gn.tips6=" Entrez le mot de passe d'acc�s d'invit� pour acc�der � Internet. Si vous ne connaissez pas le mot de passe, demandez au propri�taire de vous le donner. Vous pouvez trouver le mot de passe d'acc�s d'invit� � l'aide de Linksys Connect.";
gn.dv="Affichage Bureau";
gn.mv="Affichage mobile";
gn.context="Entrez le mot de passe d'acc�s d'invit� pour acc�der � Internet. Si vous ne connaissez pas le mot de passe, demandez au propri�taire de vous le donner. Vous pouvez trouver le mot de passe d'acc�s d'invit� � l'aide de Linksys Connect.";
gn.nat="L'acc�s d'invit� ne sera pas disponible si l'option NAT est d�sactiv�e.  Souhaitez-vous poursuivre et enregistrer vos changements?";






