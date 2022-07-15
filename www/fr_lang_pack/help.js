//Basic Setup
var hsetup = new Object();
hsetup.phase1="L'écran <i>Configuration</i> \
		est le premier écran qui s'affiche lorsque vous accédez au routeur. La plupart des utilisateurs \
		peuvent configurer le routeur et le faire fonctionner correctement à l'aide des \
		paramètres affichés à l'écran. Certains fournisseurs d'accès à Internet (FAI) demandent \
		de saisir des informations spécifiques, comme le nom d'utilisateur, le mot de passe, l'adresse IP, \
		l'adresse de la passerelle par défaut ou l'adresse IP DNS. Vous pouvez obtenir les informations nécessaires \
		auprès de votre fournisseur d'accès à Internet, si besoin est.";
hsetup.phase2="Remarque : Après \
		avoir configuré ces paramètres, vous devez définir un nouveau mot de passe pour le routeur \
		à l'aide de l'écran <i>Sécurité</i>. Ceci permet d'améliorer la sécurité en protégeant le \
		routeur contre toute modification non autorisée. Tous les utilisateurs qui tentent d'accéder à \
		l'utilitaire Web du routeur ou à l'Assistant de configuration seront invités à saisir le mot de passe du routeur.";
hsetup.phase3="Sélectionnez le \
		fuseau horaire correspondant à votre emplacement géographique. Si l'heure d'été est appliquée dans votre pays, \
    		ne désactivez pas la case à cocher <i>Régler automatiquement l'horloge \
    		en fonction des modifications de l'heure d'été</i>.";
hsetup.phase4="Cette option détermine \
    		l'unité de transmission maximale. Elle spécifie la taille de paquet maximale autorisée \
    		pour la transmission Internet. Conservez le paramètre par défaut, <b>Auto</b>, pour permettre \
    		au routeur de choisir la meilleure valeur de MTU pour votre connexion Internet. Pour définir \
    		une valeur de MTU, sélectionnez <b>Manuelle</b> et saisissez la valeur souhaitée (par défaut, <b> \
    		1400</b>).&nbsp;De préférence, laissez une valeur comprise entre 1200 et 1500.";
hsetup.phase5="Cette information est requise pour certains FAI, qui peuvent la fournir.";
hsetup.phase6="Le routeur prend en charge quatre types de connexion :";
hsetup.phase7="Configuration automatique DHCP";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Ces types de connexion peuvent être sélectionnés dans le menu déroulant en regard de Connexion Internet. \
    		Les informations requises et les options disponibles varient selon \
    		le type de connexion sélectionné. Ces informations sont en partie \
    		décrites ici :";		
hsetup.phase11="Adresse IP Internet et masque de sous-réseau";
hsetup.phase12="Il s'agit de l'adresse IP \
    		et du masque de sous-réseau du routeur, tels qu'ils apparaissent aux utilisateurs externes sur Internet (y compris à votre \
    		FAI). Si votre connexion Internet requiert une adresse IP statique, \
    		votre fournisseur d'accès Internet vous fournira une adresse IP statique et un masque de sous-réseau.";
hsetup.phase13="Votre fournisseur d'accès Internet vous fournira l'adresse IP de la passerelle."; 
hsetup.phase14="(Domain Name Server)";
hsetup.phase15="Votre fournisseur d'accès Internet vous fournira au moins une adresse IP DNS.";
hsetup.phase16="Nom d'utilisateur et mot de passe";
hsetup.phase17="Saisissez le <b>nom d'utilisateur</b> et le \
		<b>mot de passe</b> que vous utilisez lors de la connexion à votre FAI via une connexion \
    		PPPoE ou PPTP.";
hsetup.phase18="Connexion à la demande";
hsetup.phase19="Vous pouvez configurer le routeur pour \
    		qu'il déconnecte votre connexion Internet à l'issue d'une période d'inactivité donnée \
    		(Délai d'inactivité maximal). Si votre connexion Internet a été désactivée suite à \
    		son inactivité, l'option Connexion à la demande permet au routeur de \
   		rétablir automatiquement votre connexion dès que vous tentez d'accéder \
   		de nouveau à Internet. Si vous souhaitez sélectionner cette option, cliquez sur le bouton radio Connexion à la demande. Si \
    		vous souhaitez que votre connexion Internet soit active en permanence, saisissez <b>0</b> \
    		dans le champ <i>Délai d'inactivité maximal</i>. Sinon, saisissez le nombre de minutes \
    		que vous souhaitez voir s'écouler avant la désactivation de votre connexion Internet.";
hsetup.phase20="Option Maintenir la connexion ";
hsetup.phase21="Cette option vous permet de rester connecté \
    		à Internet en permanence, même lorsque votre connexion est inactive. Pour la sélectionner,\
    		cliquez sur le bouton radio en regard de <i>Maintenir la connexion</i>. La durée par défaut \
    		avant rappel est de 30 secondes (en d'autres termes, le routeur vérifiela connexion toutes les 30 secondes).";
hsetup.phase22="Remarque : Certains \
    		fournisseurs d'accès au câble requièrent une adresse MAC spécifique pour la connexion à \
    		Internet. Pour en savoir plus, cliquez sur l'onglet <b>Système</b>. Cliquez ensuite sur \
    		le bouton <b>Aide</b> et lisez la documentation sur la fonction de clonage MAC.";
hsetup.phase23="LAN";
hsetup.phase24="Adresse IP et masque de sous-réseau";
hsetup.phase25="Il s'agit de\
    		l'adresse IP et du masque de sous-réseau du routeur accessibles sur le réseau local interne. La \
    		valeur par défaut est 192.168.1.1 pour l'adresse IP et 255.255.255.0 pour le masque\
    		de sous-réseau.";
hsetup.phase26="DHCP";
hsetup.phase27="Conservez \
    		la valeur par défaut, <b>Activer</b>, pour activer l'option de serveur DHCP du routeur. Si vous\
    		avez déjà un serveur DHCP sur votre réseau ou si vous ne voulez pas de serveur DHCP, \
    		sélectionnez <b>Désactiver</b>.";
hsetup.phase28="Entrez une \
    		valeur numérique de début pour la publication d'adresses IP par le serveur DHCP. \
    		Ne commencez pas par 192.168.1.1 (adresse IP du routeur).";
hsetup.phase29="Nombre maximal d'utilisateurs DHCP";
hsetup.phase30="Saisissez le \
    		nombre maximal d'ordinateurs auxquels le serveur DHCP peut attribuer des adresses IP.\
    		  La valeur maximale est 253, à condition que 192.168.1.2 soit votre adresse IP de \
    		début.";
hsetup.phase31="L'option \
    		Durée de connexion du client détermine la période pendant laquelle un utilisateur du réseau est autorisé à se connecter \
    		au routeur à l'aide de son adresse IP dynamique actuelle. Saisissez \
    		la durée (en minutes) pendant laquelle cette adresse IP dynamique est allouée à l'utilisateur.";
hsetup.phase32="DNS statique 1 - 3 ";
hsetup.phase33="Le système \
    		DNS (Domain Name System) est le service adopté par Internet pour convertir des noms de domaine ou de site Web \
    		en adresses Internet ou URL. Votre FAI peut vous fournir au moins une \
    		adresse IP de serveur DNS. Si vous souhaitez utiliser une autre adresse, saisissez cette adresse IP \
    		dans l'un des ces champs. Vous pouvez saisir jusqu'à trois adresses IP de serveur DNS.\
    		  Le routeur les utilise pour accéder plus rapidement aux serveurs DNS \
    		fonctionnels.";
hsetup.phase34="Le système WINS (Windows Internet Naming Service) permet de gérer l'interaction entre chaque ordinateur et \
    		Internet. Si vous optez pour un serveur WINS, entrez son adresse IP dans ce champ. \
    		Autrement, laissez-le vide.";
hsetup.phase35="Vérifiez toutes les \
		valeurs et cliquez sur <b>Enregistrer les paramètres</b> pour enregistrer vos paramètres. Cliquez sur <b>Annuler \
		les modifications</b> pour \
		annuler les modifications non enregistrées. Vous pouvez tester les paramètres en vous connectant à \
		Internet. ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Le routeur inclut une fonction DDNS (Dynamic Domain Name System). DDNS vous permet d'attribuer \
		un nom de domaine et d'hôte fixe à une adresse IP Internet dynamique. Ceci peut s'avérer utile si vous \
		hébergez votre propre site Web, un serveur FTP ou tout autre type de serveur avec le routeur. Avant \
		d'opter pour cette fonctionnalité, vous devez souscrire à un service DDNS auprès de <i>www.dyndns.org</i>, \
		un fournisseur de services DDNS.";
helpddns.phase2="Service DDNS";
helpddns.phase3="Pour désactiver le service DDNS, conservez le paramètre par défaut <b>Désactiver</b>. Pour activer le service DDNS \
		procédez comme suit :";
helpddns.phase4="Souscrivez à un service DDNS sur le site <i>www.dyndns.org</i>, et indiquez \
		vos nom d'utilisateur,<i> </i>mot de passe et<i> </i>nom d'hôte.";
helpddns.phase5="Dans l'écran <i>DDNS</i> sélectionnez <b>Activer.</b>";
helpddns.phase6="Complétez les champs <i>Nom d'utilisateur</i>, <i>Mot de passe</i> et<i> Nom d'hôte</i>.";
helpddns.phase7="Cliquez sur le bouton <b>Enregistrer les paramètres</b> pour enregistrer vos modifications. Cliquez sur le bouton <b>Annuler les modifications</b> pour \
		annuler les modifications non enregistrées.";
helpddns.phase8="L'adresse IP Internet actuelle du routeur est spécifiée dans ce champ.";
helpddns.phase9="L'état de la connexion du service DDNS est spécifié dans ce champ.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonage MAC";
helpmac.phase2="Une adresse MAC de routeur désigne un code à 12 chiffres attribué à un composant \
    		matériel unique en vue de son identification. Certains FAI demandent d'enregistrer l'adresse MAC \
    		de la carte ou de l'adaptateur réseau connecté au modem câble ou \
    		DSL lors de l'installation. Si c'est le cas, \
    		recherchez l'adresse MAC de votre adaptateur en suivant les \
    		instructions du système d'exploitation de votre ordinateur.";
helpmac.phase3="Windows 98 et Millennium :";
helpmac.phase4="1.  Cliquez sur le bouton <b>Démarrer</b> et sélectionnez <b>Exécuter</b>.";
helpmac.phase5="2.  Tapez <b>winipcfg</b> dans le champ Ouvrir et cliquez sur <b>OK</b>.";
helpmac.phase6="3.  Sélectionnez l'adaptateur Ethernet que vous utilisez.";
helpmac.phase7="4.  Cliquez sur <b>Plus d'infos</b>.";
helpmac.phase8="5.  Notez l'adresse MAC de votre adaptateur.";
helpmac.phase9="1.  Cliquez sur le bouton <b>Démarrer</b> et sélectionnez <b>Exécuter</b>.";
helpmac.phase10="2.  Tapez <b>cmd</b> dans le champ Ouvrir et cliquez sur <b>OK</b>.";
helpmac.phase11="3.  A l'invite de commande, exécutez <b>ipconfig /all</b>, et recherchez l'adresse physique de votre adaptateur.";
helpmac.phase12="4.  Notez l'adresse MAC de votre adaptateur.";
helpmac.phase13="Pour cloner l'adresse MAC de votre adaptateur réseau sur le routeur et éviter d'appeler votre \
    		FAI pour qu'il modifie l'adresse MAC enregistrée, procédez comme suit :";
helpmac.phase14="Windows 2000 et XP :";
helpmac.phase15="1.  Sélectionnez <b>Activer</b>.";
helpmac.phase16="2.  Saisissez l'adresse MAC de votre adaptateur dans le champ <i>Adresse MAC</i>.";
helpmac.phase17="3.  Cliquez sur le bouton <b>Enregistrer les paramètres</b>.";
helpmac.phase18="Pour désactiver le clonage de l'adresse MAC, conservez le paramètre par défaut, <b>Désactiver</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routage";
hrouting.phase2="L'écran <i>Routage</i> permet de définir le mode et les paramètres de routage du routeur. \
		 Le mode Passerelle est recommandé pour la plupart des utilisateurs.";
hrouting.phase3="Choisissez le mode de fonctionnement approprié. Conservez le paramètre par défaut, <b> \
    		 Passerelle</b>, si le routeur héberge votre connexion réseau à Internet (le mode Passerelle est recommandé pour la plupart des utilisateurs). Sélectionnez <b> \
    		 Routeur </b>si le routeur existe sur un réseau avec d'autres routeurs.";
hrouting.phase4="Routage dynamique (RIP)";
hrouting.phase5="Remarque : Cette fonction n'est pas disponible en mode Passerelle.";
hrouting.phase6="Le routage dynamique permet au routeur de s'adapter automatiquement aux modifications physiques apportées à \
    		 la configuration du réseau et d'échanger les tables de routage avec les autres routeurs. Le \
    		 routeur détermine l'itinéraire des paquets du réseau en fonction du plus petit nombre de \
    		 sauts relevés entre la source et la destination. ";
hrouting.phase7="Pour activer la fonction de routage dynamique côté WAN, sélectionnez <b>WAN</b>. \
    		 Pour activer cette fonction côté réseau local et sans fil, sélectionnez <b>LAN et sans fil</b>. \
    		 Pour activer la fonction côté WAN et réseau local, sélectionnez <b> \
    		 Les deux</b>. Pour désactiver la fonction de routage dynamique pour toutes les transmissions de données, conservez le \
    		 paramètre par défaut, <b>Désactiver</b>. ";
hrouting.phase8="Routage statique, &nbsp;Adresse IP de destination, Masque de sous-réseau, Passerelle et Interface";
hrouting.phase9="Pour définir un itinéraire statique entre le routeur et un autre réseau, \
    		 choisissez un nombre dans la liste déroulante <i>Routage statique</i>. (Un itinéraire statique \
    		 est une voie prédéfinie que les informations du réseau doivent emprunter pour \
    		 atteindre un hôte ou un réseau spécifique.)";
hrouting.phase10="Saisissez les informations suivantes :";
hrouting.phase11="Adresse IP de destination </b>:\
		  adresse du réseau ou de l'hôte auquel vous souhaitez attribuer un itinéraire statique.";
hrouting.phase12="Masque de sous-réseau </b>:\
		  détermine la portion de l'adresse IP qui correspond au réseau et \
    		  celle qui correspond à l'hôte. ";
hrouting.phase13="Passerelle </b>: \
		  adresse IP de la passerelle permettant le contact entre le routeur et le réseau distant ou hôte.";
hrouting.phase14="Selon l'emplacement de l'adresse IP de destination, sélectionnez \
    		  <b>LAN et sans fil </b>ou <b>WAN </b>dans le menu déroulant <i>Interface</i>.";
hrouting.phase15="Pour enregistrer vos modifications, cliquez sur le bouton <b>Appliquer</b>. Pour annuler les modifications non enregistrées, cliquez sur le bouton <b> \
    		  Annuler</b>.";
hrouting.phase16="Pour définir des itinéraires statiques supplémentaires, répétez les étapes 1 à 4.";
hrouting.phase17="Supprimer cette\n entrée";
hrouting.phase18="Pour supprimer un itinéraire statique :";
hrouting.phase19="Dans la liste déroulante <i>Routage statique</i>, sélectionnez le numéro d'entrée de l'itinéraire statique.";
hrouting.phase20="Cliquez sur le bouton <b>Supprimer cette entrée</b>.";
hrouting.phase21="Pour sauvegarder une suppression, cliquez sur le bouton <b>Appliquer</b>. Pour annuler une suppression, cliquez sur le bouton <b> \
    		  Annuler</b>. ";
hrouting.phase22="Afficher la table de routage";
hrouting.phase23="Cliquez sur le bouton \
    		  <b>Afficher la table de routage </b>pour afficher toutes les entrées d'itinéraire valide en cours d'utilisation. L'adresse IP de destination, le masque de sous-réseau, \
    		  la passerelle et l'interface sont affichés pour chaque entrée. Cliquez sur le bouton <b>Actualiser </b>pour rafraîchir les données affichées. Cliquez sur le bouton <b> \
    		  Fermer</b> pour revenir à l'écran <i>Routage</i>.";
hrouting.phase24="Adresse IP de destination </b>:\
		  adresse du réseau ou de l'hôte auquel l'itinéraire statique est attribué. ";
hrouting.phase25="Masque de sous-réseau </b>:\
		  détermine la portion de l'adresse IP qui correspond au réseau et celle qui correspond à l'hôte.";
hrouting.phase26="Passerelle </b>: adresse IP de la passerelle permettant le contact entre le routeur et le réseau distant ou hôte.";
hrouting.phase27="Interface </b>: cette option vous indique si l'adresse IP de destination est située sur l'interface <b> LAN et sans fil </b>(réseaux câblés internes et sans fil), <b>WAN</b> (Internet) ou sur l'interface de <b> bouclage</b>, c'est-à-dire un réseau factice sur lequel un ordinateur agit en qualité de réseau, indispensable pour certains programmes logiciels. ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Blocage des requêtes WAN";
hfirewall.phase2="En activant la fonctionnalité de blocage des requêtes WAN, vous empêchere d'autres utilisateurs Internet de sonder par test Ping ou détecter votre réseau. Le blocage des requêtes WANvous permet également de renforcer la sécurité de votre réseau en masquant les ports de votre réseau. Ces deux fonctions de la fonctionnalité de blocage des requêtes WAN rendent plus délicat toute tentative d'infiltration de votre réseau pour des utilisateurs externes. Cette fonctionnalité est activ  par défaut. Sélectionnez <b>Désactiver</b> pour la désactiver.";
hfirewall.right="Cette fonctionnalité permet d'activer ou désactiver un pare-feu SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Passthrough VPN";
helpvpn.phase2="En règle générale, VPN (Virtual Private Networking) est utilisé pour la mise en réseau associée au travail. Pour \
    		les canaux VPN, le routeur prend en charge les options Passthrough IPSec et Passthrough PPTP.";
helpvpn.phase3="<b>IPSec </b>: la technologie IPSec (Internet Protocol Security) désigne<b> </b>une série de protocoles utilisés pour la mise en place \
      		d'un échange sécurisé des paquets au niveau de la couche IP. Pour autoriser les canaux IPSec à s'interconnecter \
      		via le routeur, l'option Passthrough IPSec est activée par défaut. Pour désactiver \
      		l'Intercommunication IPSec, décochez la case en regard de <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>: l'intercommunication PPTP (Point-to-Point Tunneling Protocol) est la méthode utilisée pour activer les sessions VPN \
      		dans un serveur Windows NT 4.0 ou 2000. Pour permettre aux tunnels PPTP de traverser \
      		le routeur, l'option Passthrough PPTP est activée par défaut. Pour désactiver \
      		l'option Passthrough PPTP, décochez la case en regard de <i>PPTP</i>.";

helpvpn.right="Vous pouvez choisir d'activer l'intercommunication PPTP, L2TP ou IPSec afin d'autoriser \
		les périphériques de votre réseau à communiquer via VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtres";
hfilter.phase2="L'écran <i>Filtres</i> vous permet de bloquer ou d'autoriser des types spécifiques \
		d'utilisation d'Internet. Vous pouvez définir vos stratégies d'accès à Internet pour des ordinateurs spécifiques et définir \
		des filtres en utilisant les numéros de ports du réseau.";
hfilter.phase3="Cette fonction vous permet de personnaliser jusqu'à dix stratégies d'accès à Internet \
    		pour des ordinateurs identifiés par leur adresse IP ou MAC. Pour \
    		chaque stratégie, des ordinateurs sont désignés pendant les jours et périodes indiqués.";
hfilter.phase4="Pour créer ou modifier une stratégie, procédez comme suit :";
hfilter.phase5="Sélectionnez le numéro de la stratégie (1 à 10) dans le menu déroulant.";
hfilter.phase6="Saisissez un nom dans le champ <i>Entrer le nom du profil</i>.";
hfilter.phase7="Cliquez sur le bouton <b>Modifier la liste des ordinateurs</b>.";
hfilter.phase8="Cliquez sur le bouton <b>Appliquer</b> pour enregistrer vos modifications. Cliquez sur le bouton <b>Annuler</b> pour \
    		annuler les modifications non enregistrées. Cliquez sur le bouton <b>Fermer</b> pour revenir à l'écran \
    		<i>Filtres</i>.";
hfilter.phase9="Si vous souhaitez bloquer l'accès à Internet des ordinateurs répertoriés aux cours des jours et périodes indiqués, \
    		conservez le paramètre par défaut, <b>Désactiver l'accès à Internet pour \
    		les ordinateurs répertoriés</b>. Si vous souhaitez que les ordinateurs répertoriés accèdent à Internet au cours \
    		des jours et périodes indiqués, cliquez sur le bouton radio en regard de l'option<i> Activer \
    		l'accès à Internet pour les ordinateurs répertoriés</i>.";
hfilter.phase10="Dans l'écran <i>Liste des ordinateurs</i>, indiquez les ordinateurs par adresse IP ou adresse MAC. Saisissez \
    		les adresses IP appropriées dans les champs <i>IP</i>. Si vous devez filtrer une série \
    		d'adresses IP, complétez les champs <i>Plage IP</i> appropriés. \
    		Saisissez les adresses MAC appropriées dans les champs <i>MAC</i>.";
hfilter.phase11="Définissez l'heure de filtrage de l'accès. Sélectionnez <b>24 heures</b>,<b> </b> ou cochez la case en regard de <i>De</i> \
    		et utilisez les listes déroulantes pour définir une période spécifique. ";
hfilter.phase12="Définissez les jours où l'accès sera filtré. Sélectionnez <b>Tous les jours</b> ou les jours appropriés de la semaine. ";
hfilter.phase13="Cliquez sur le bouton <b>Ajouter à la stratégie</b> pour enregistrer vos modifications et procéder à l'activation.";
hfilter.phase14="Pour créer ou modifier des stratégies supplémentaires, répétez les étapes 1 à 9.";
hfilter.phase15="Pour supprimer une stratégie d'accès à Internet, sélectionnez son numéro et cliquez sur le bouton <b>Supprimer</b>.";
hfilter.phase16="Pour afficher un récapitulatif de toutes les stratégies, cliquez sur le bouton <b>Récapitulatif</b>. L'écran <i> \
    		Récapitulatif de la stratégie Internet</i> affiche le numéro, \
    		le nom, les jours et les heures de chaque stratégie. Pour supprimer une stratégie, cochez la case correspondante et \
    		cliquez sur le bouton <b>Supprimer</b>. Cliquez sur le bouton <b>Fermer</b> pour revenir à \
    		l'écran <i>Filtres</i>.";
hfilter.phase17="Plage de ports Internet filtrés";
hfilter.phase18="Pour définir des filtres en utilisant les numéros de ports du réseau, sélectionnez le protocole <b>TCP</b>, <b>UDP</b>, ou <b>Les deux</b>, \
    		selon le type de protocole que vous souhaitez filtrer. Entrez ensuite<b> </b>les numéros des ports \
    		que vous souhaitez filtrer dans les champs appropriés. Les ordinateurs connectés au \
    		routeur ne pourront plus accéder aux numéros de ports répertoriés. Pour \
    		désactiver un filtre, sélectionnez <b>Désactiver</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Vérifiez toutes les valeurs et cliquez sur <b>Enregistrer les paramètres</b> pour enregistrer vos paramètres. Cliquez sur le bouton <b>Annuler \
		les modifications</b> pour annuler les modifications non enregistrées.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La fonction d'hébergement DMZ permet à un utilisateur local d'accéder à Internet en vue d'utiliser \
		un service à usage spécifique, tel que des jeux Internet ou un système de vidéoconférence. \
		L'hébergement DMZ permet de transférer tous les ports en même temps vers un seul ordinateur. La fonctionnalité \
    		de transfert de connexion est plus sécurisée puisqu'elle ouvre uniquement les ports que vous souhaitez \
    		ouvrir, tandis que la fonction d'hébergement DMZ ouvre tous les ports d'un ordinateur \
    		pour lui permettre d'accéder à Internet. ";    		
helpdmz.phase2="Tout ordinateur dont le port est transféré doit avoir sa fonction de client DHCP désactivée \
    		et doit disposer d'une nouvelle adresse IP statique puisque son adresse IP \
    		risque de changer lors de l'utilisation de la fonction DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Pour exposer un ordinateur, sélectionnez ";
helpdmz.phase4="Saisissez l'adresse IP de cet ordinateur dans le champ <i>Adresse IP de l'hôte DMZ</i>.";



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
 
