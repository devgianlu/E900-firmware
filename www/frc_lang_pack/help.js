//Basic Setup
var hsetup = new Object();
hsetup.phase1="<i>Configuration</i> \
		est la première page qui s'affiche lorsque vous accédez au routeur. La plupart des utilisateurs  \
		pourront configurer le routeur et le faire fonctionner correctement à partir des \
		paramètres de cette page. Certains fournisseurs d'accès Internet (FAI) peuvent vous demander  \
		d'entrer des renseignements précis, notamment le nom d'utilisateur, le mot de passe, l'adresse IP,  \
		l'adresse de passerelle par défaut ou l'adresse IP DNS. Vous pouvez obtenir ces informations  \
		auprès de votre FAI.";
hsetup.phase2="Remarque : Après \
		avoir configuré ces paramètres, il est recommandé de changer le mot de passe du routeur  \
		à partir de la page <i>Sécurité</i>. Cette mesure contribuera à améliorer la sécurité du réseau en protégeant le  \
		routeur contre les modifications non autorisées. Ainsi, tous les utilisateurs qui tentent d'accéder à l'utilitaire Web \
		ou à l'assistant d'installation du routeur seront invités à entrer le mot de passe du routeur.";
hsetup.phase3="Sélectionnez votre \
		fuseau horaire local. Si l'heure est avancée pendant l'été dans votre région, \
    		ne décochez pas la case de l'option <i>Réglage automatique de l’horloge pour \
    		l’heure avancée</i>.";
hsetup.phase4="MTU indique  \
    		l'unité de transmission maximale. Cette option permet de préciser la taille maximale de paquet de données \
    		pour transmission sur Internet. Conservez le paramètre par défaut, <b>Auto</b>, pour que \
    		le routeur utilise la meilleure valeur MTU pour votre connexion Internet. Pour spécifier une \
    		valeur MTU, sélectionnez <b>Manuel</b>, puis entrez la valeur désirée (la valeur par défaut est <b> \
    		1400</b>).&nbsp; Utilisez une valeur comprise entre 1200 et 1500.";
hsetup.phase5="Cette valeur est nécessaire pour certains FAI (qui peuvent d'ailleurs vous la fournir).";
hsetup.phase6="Le routeur accepte quatre types de connexion :";
hsetup.phase7="Configuration automatique – DHCP";
hsetup.phase8="Protocole Point-to-Point Protocol over Ethernet";
hsetup.phase9="Protocole Point-to-Point Tunneling Protocol";
hsetup.phase10="Ces types sont proposés dans le menu déroulant à côté de Connexion Internet. \
    		Les renseignements requis et les fonctions proposées varient selon le \
    		type de connexion sélectionné. Certains de ces renseignements \
    		sont décrits ci-après :";		
hsetup.phase11="Adresse IP Internet et masque de sous-réseau";
hsetup.phase12="Ces champs indiquent l'adresse IP et le masque de sous-réseau du routeur, \
    		tels que vus par les utilisateurs externes depuis Internet (incluant votre \
    		FAI). Si votre connexion Internet nécessite une adresse IP statique, votre FAI \
    		vous fournira les valeurs à entrer dans ces champs.";
hsetup.phase13="L'adresse IP de la passerelle doit vous être communiquée par votre FAI.";
hsetup.phase14="(Serveur de noms de domaine)";
hsetup.phase15="Votre FAI vous fournira au moins une adresse IP DNS.";
hsetup.phase16="Nom d'utilisateur et mot de passe";
hsetup.phase17="Entrez le <b>nom d'utilisateur</b> et le \
				<b>mot de passe</b> que vous utilisez pour vous connecter à votre FAI par l'entremise d'une connexion PPPoE ou PPTP \
    		.";
hsetup.phase18="Connexion sur demande";
hsetup.phase19="Vous pouvez configurer le routeur de façon à \
    		interrompre la connexion Internet si elle demeure inactive pendant une durée spécifiée \
    		(Durée d'inactivité maximale). Si la connexion est interrompue pour cette raison, \
    		l'option Connexion sur demande permet de la rétablir automatiquement \
   		dès que vous tentez d'accéder à Internet \
   		de nouveau. Pour utiliser la connexion sur demande, cliquez sur la case d'option correspondante. Pour \
    		que la connexion Internet soit maintenue sans interruption, entrez <b>0</b> \
    		dans le champ <i>Durée d'inactivité maximale</i>. Sinon, entrez le nombre de minutes d'inactivité \
    		qui doivent s'écouler avant l'interruption de la connexion Internet.";
hsetup.phase20="Option Maintenir la connexion ";
hsetup.phase21="Sélectionnez cette option pour que la connexion \
    		Internet soit maintenue même si elle est inactive. Pour utiliser \
    		cette option, cliquez dans la case d'option à côté de <i>Maintenir la connexion</i>. Par défaut, \
    		le délai de reconnexion est fixé à 30 secondes (le routeur vérifiera la \
    		connexion Internet toutes les 30 secondes).";
hsetup.phase22="Remarque : certains \
    		câblodistributeurs exigent l'enregistrement d'une adresse MAC pour autoriser l'accès à \
    		Internet. Cliquez sur l'onglet <b>Système</b> pour en savoir plus. Cliquez ensuite sur \
    		le bouton <b>Aide</b> pour obtenir de l'information sur la fonction de clonage d'adresse MAC du routeur.";
hsetup.phase23="Réseau local";
hsetup.phase24="Adresse IP et Masque de sous-réseau";
hsetup.phase25="Ces champs\
    		indiquent l'adresse IP et le masque de sous-réseau du routeur, tels que vus sur le réseau local interne. Le \
    		valeur par défaut est 192.168.1.1 pour l'adresse IP et 255.255.255.0 pour le masque de \
    		sous-réseau.";
hsetup.phase26="DHCP";
hsetup.phase27="Conservez la sélection \
    		par défaut, soit <b>Activer</b>, pour appliquer l'option de serveur DHCP du routeur. Si votre \
    		réseau est déjà doté d'un serveur DHCP, ou si vous ne voulez pas de ce serveur, \
    		sélectionnez <b>Désactiver</b>.";
hsetup.phase28="Entrez la \
    		première adresse IP pouvant être attribuée par le serveur DHCP. \
    		Ne commencez pas par l'adresse 192.168.1.1 (qui est l'adresse IP du routeur).";
hsetup.phase29="Nombre maximal d'utilisateurs DHCP";
hsetup.phase30="Entrez le \
    		nombre maximal d'ordinateurs auxquels le serveur DHCP peut attribuer des adresses IP \
    		. Le maximum absolu est 253 (valeur possible si votre adresse IP de départ est 192.168.1.2 \
    		.";
hsetup.phase31="La durée \
    		de validité client détermine la période pendant laquelle un ordinateur est autorisé à se connecter \
    		au routeur avec son adresse IP dynamique actuelle. Entrez le nombre de \
    		minutes pendant lesquelles l'adresse IP dynamique est valide.";
hsetup.phase32="DNS statiques 1-3 ";
hsetup.phase33="Le système Domain \
    		Name System (DNS) désigne la façon dont Internet traduit les noms de domaine ou de sites Web \
    		en adresses Internet ou URL. Votre FAI vous fournira au moins une adresse IP \
    		de serveur DNS. Si vous désirez en utiliser une autre, entrez cette adresse IP \
    		dans l'un de ces champs. Vous pouvez entrer ici jusqu'à trois adresses IP  \
    		de serveur DNS. Ces adresses seront utilisées par le routeur pour accélérer l'accès aux serveurs DNS\
    		en fonction.";
hsetup.phase34="Le service WINS (Windows Internet Naming Service) gère l'interaction de chaque ordinateur \
    		avec Internet. Si vous utilisez un serveur WINS, entrez son adresse IP ici. \
    		Sinon, laissez ce champ vide.";
hsetup.phase35="Vérifiez tous les \
		paramètres et cliquez sur <b>Enregistrer les paramètres</b> pour sauvegarder vos changements. Cliquez sur <b>Annuler \
		les changements</b> pour \
		annuler vos modifications non sauvegardées. Vous pouvez tester les paramètres en vous connectant à  \
		Internet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Le routeur est doté d'une fonction DDNS (Dynamic Domain Name System) qui permet d'attribuer un nom d'hôte et un nom de domaine statiques \
		à une adresse IP Internet dynamique. Cette fonction peut être utile pour \
		héberger votre site Web, un serveur FTP ou un autre serveur situé après le routeur. Pour pouvoir \
		utiliser cette fonction, vous devez d'abord vous abonner au service DDNS à l'adresse <i>www.dyndns.org</i>, \
		(adresse d'un fournisseur de service DDNS).";
helpddns.phase2="Service DDNS";
helpddns.phase3="Pour désactiver le service DDNS, conservez le paramètre par défaut, soit <b>Désactiver</b>. Pour activer le service DDNS, \
		procédez comme suit :";
helpddns.phase4="Abonnez-vous au service DDNS à l'adresse <i>www.dyndns.org</i>, puis prenez en note \
		votre nom d'utilisateur,<i> votre </i>mot de passe et<i> </i>le nom d'hôte.";
helpddns.phase5="Dans la fenêtre <i>DDNS</i>, sélectionnez <b>Activer.</b>";
helpddns.phase6="Remplissez les champs <i> Nom d'utilisateur</i>,<i> Mot de passe</i> et<i> Nom de l'hôte</i>.";
helpddns.phase7="Cliquez sur le bouton <b>Enregistrer les paramètres</b> pour sauvegarder vos modifications. Cliquez sur le bouton <b>Annuler les changements</b> pour \
		annuler les modifications non sauvegardées.";
helpddns.phase8="Indique l'adresse IP Internet actuelle du routeur.";
helpddns.phase9="Indique l'état de la connexion DDNS.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonage d'adresse MAC";
helpmac.phase2="L'adresse MAC du routeur est un code de 12 chiffres identifiant un composant \
    		matériel unique. Certains FAI exigent l'enregistrement de l'adresse MAC \
    		de la carte réseau qui a été connectée à votre modem câble ou \
    		DSL au cours de l'installation. Si votre FAI exige l'enregistrement de votre adresse MAC, \
    		trouvez cette adresse en suivant les \
    		instructions applicables au système d'exploitation de votre ordinateur.";
helpmac.phase3="Windows 98 et ME :";
helpmac.phase4="1.  Cliquez sur le bouton <b>Démarrer</b> puis sélectionnez <b>Exécuter</b>.";
helpmac.phase5="2.  Tapez <b>winipcfg</b> dans le champ, puis cliquez sur <b>OK</b>.";
helpmac.phase6="3.  Sélectionnez la carte réseau Ethernet que vous utilisez.";
helpmac.phase7="4.  Cliquez sur <b>Pour en savoir plus</b>.";
helpmac.phase8="5.  Prenez en note cette adresse MAC.";
helpmac.phase9="1.  Cliquez sur le bouton <b>Démarrer</b> puis sélectionnez <b>Exécuter</b>.";
helpmac.phase10="2.  Tapez <b>cmd</b> dans le champ, puis cliquez sur <b>OK</b>.";
helpmac.phase11="3.  À l'invite, exécutez la commande <b>ipconfig /all</b>. Le système affiche l'adresse physique de votre carte réseau.";
helpmac.phase12="4.  Prenez en note cette adresse MAC.";
helpmac.phase13="Pour cloner l'adresse MAC de votre carte réseau sur le routeur, et éviter ainsi d'avoir à communiquer avec votre \
    		FAI pour faire changer l'adresse qui a été enregistrée, procédez comme suit :";
helpmac.phase14="Windows 2000 et XP :";
helpmac.phase15="1.  Sélectionnez <b>Activer</b>.";
helpmac.phase16="2.  Entrez l'adresse MAC de la carte réseau dans le champ <i>Adresse MAC</i>.";
helpmac.phase17="3.  Cliquez sur le bouton <b>Enregistrer les paramètres</b>.";
helpmac.phase18="Pour désactiver le clonage d'adresse MAC, conservez le paramètre par défaut, soit <b>Désactiver</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routage";
hrouting.phase2="Dans la fenêtre <i>Routage</i>, vous pouvez définir le mode de routage et les paramètres du routeur. \
		 Le mode Passerelle est recommandé pour la plupart des utilisateurs.";
hrouting.phase3="Sélectionnez le mode de fonctionnement approprié. Conservez le paramètre par défaut, soit <b> \
    		 Passerelle</b>, si le routeur gère la connexion Internet de votre réseau (le mode Passerelle est recommandé pour la plupart des utilisateurs). Sélectionnez <b> \
    		 Routeur</b> s'il existe d'autres routeurs sur votre réseau.";
hrouting.phase4="Routage dynamique (RIP)";
hrouting.phase5="Remarque : cette fonction n'est pas disponible en mode Passerelle.";
hrouting.phase6="La fonction Routage dynamique permet au routeur de s'adapter automatiquement aux modifications physiques de topologie \
    		 du réseau et d'échanger des tables de routage avec d'autres routeurs. Le \
    		 routeur sélectionne le chemin des paquets de données qui nécessite le moins \
    		 d'étapes entre la source et la destination. ";
hrouting.phase7="Si vous désirez activer la fonction de routage dynamique pour le réseau étendu, sélectionnez <b>Réseau étendu</b>. \
    		 Si vous désirez activer cette fonction côté réseau local et sans fil, sélectionnez <b>Réseau local et sans fil</b>. \
    		 Si vous désirez activer la fonction pour le réseau étendu et pour le réseau local, sélectionnez <b> \
    		 Les deux</b>. Pour désactiver la fonction de routage dynamique pour toutes les transmissions de données, conservez la \
    		 valeur par défaut, soit <b>Désactiver</b>. ";
hrouting.phase8="Routage statique,&nbsp; Adresse IP du réseau cible, Masque de sous-réseau, Passerelle et Interface";
hrouting.phase9="Pour configurer une route statique entre le routeur et un autre réseau, \
    		 sélectionnez un nombre dans la liste déroulante <i>Routage statique</i>. Une route statique \
    		 est un chemin préétabli que doivent emprunter les données réseau pour \
    		 atteindre un hôte ou un réseau spécifique.)";
hrouting.phase10="Entrez les informations suivantes :";
hrouting.phase11="Adresse IP du réseau cible </b>- \
		  Adresse IP du réseau ou de l'hôte cible auquel vous désirez attribuer une route statique.";
hrouting.phase12="Masque de sous-réseau </b>- \
		  Le masque de sous-réseau est utilisé pour distinguer la partie réseau et la partie \
    		  hôte de l'adresse IP. ";
hrouting.phase13="Passerelle </b>- \
		  Adresse IP de la passerelle située entre le routeur et le réseau ou l'hôte.";
hrouting.phase14="Selon l'adresse IP du réseau cible, sélectionnez \
    		      		  <b>Réseau local et sans fil </b>ou <b>Réseau étendu </b>dans le menu déroulant <i>Interface</i>.";
hrouting.phase15="Pour enregistrer vos modifications, cliquez sur le bouton <b>Appliquer</b>. Pour annuler vos modifications non sauvegardées, cliquez sur <b> \
    		  Annuler</b>.";
hrouting.phase16="Répétez les étapes 1 à 4 pour chaque route statique supplémentaire.";
hrouting.phase17="Supprimer cette\n entrée";
hrouting.phase18="Pour supprimer une route statique :";
hrouting.phase19="Sélectionnez le numéro d'entrée de la route statique visée dans la liste déroulante <i>Routage statique</i>.";
hrouting.phase20="Cliquez sur le bouton <b>Supprimer cette entrée</b>.";
hrouting.phase21="Pour enregistrer une suppression, cliquez sur le bouton <b>Appliquer</b>. Pour annuler une suppression, cliquez sur le bouton <b> \
    		  Annuler</b>. ";
hrouting.phase22="Afficher la table de routage";
hrouting.phase23="Cliquez sur le bouton \
    		      		  <b>Afficher la table de routage</b> pour visualiser les routes statiques valides. L'adresse IP du réseau cible, le masque de sous-réseau, \
    		  la passerelle et l'interface sont affichés pour chaque entrée. Cliquez sur le bouton <b>Actualiser</b> pour actualiser les données affichées. Cliquez sur le bouton <b> \
    		  Fermer</b> pour retourner à la page <i>Routage</i>.";
hrouting.phase24="Adresse IP du réseau cible </b>- \
		  Adresse IP du réseau ou de l'hôte auquel la route statique est attribuée. ";
hrouting.phase25="Masque de sous-réseau </b>- \
		  Le masque de sous-réseau est utilisé pour distinguer la partie réseau et la partie hôte de l'adresse IP.";
hrouting.phase26="Passerelle</b> - Adresse IP de la passerelle située entre le routeur et le réseau ou l'hôte.";
hrouting.phase27="Interface</b> - Cette interface vous indique si l'adresse IP du réseau cible se trouve sur le \
    		      		  <b> réseau local et sans fil </b>(réseau interne filaire et sans fil) ou sur le <b>réseau étendu Internet</b>, ou s'il s'agit d'une<b> \
    		  adresse de boucle</b> (réseau factice où un ordinateur se comporte comme un réseau pour exécuter certains programmes). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloquer les demandes de réseau étendu";
hfirewall.phase2="Lorsqu'elle est activée, cette fonction empêche la \
    		 détection et l'interrogation (Ping) de votre réseau par d'autres utilisateurs Internet. Elle renforce aussi \
    		 la sécurité du réseau en masquant ses ports. \
    		 Les deux fonctions de l'option Bloquer les demandes de réseau étendu compliquent la tâche des \
    		 intrus qui cherchent à accéder à votre réseau. Cette fonction est activée \
    		 par défaut. Sélectionnez <b>Désactiver</b> si vous ne voulez pas l'appliquer.";
hfirewall.right="Activez ou désactivez le pare-feu SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="RPV direct";
helpvpn.phase2="Un réseau privé virtuel (RPV) est habituellement employé pour les utilisateurs distants qui doivent communiquer avec le réseau de leur entreprise. Pour \
    		tunnels RPV, le routeur prend en charge les connexions IPSec et PPTP directes.";
helpvpn.phase3="<b>Le protocole IPSec</b> - (Internet Protocol Security) est <b> </b>utilisé pour \
      		sécuriser l'échange de paquets IP au niveau de la couche IP. Pour autoriser la création de tunnels IPSec \
      		au routeur, le protocole IPSec est activé par défaut. Pour désactiver \
      		IPSec, décochez la case <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>- Le protocole Point-to-Point Tunneling Protocol est utilisé pour activer des sessions RPV \
      		sur un serveur Windows NT 4.0 ou 2000. Pour autoriser la création de tunnels PPTP \
      		au routeur, le protocole PPTP est activé par défaut. Pour désactiver \
      		PPTP, décochez la case <i>PPTP</i>.";

helpvpn.right="Vous pouvez activer les modes PPTP, L2TP ou IPSec pour permettre à vos périphériques \
		de communiquer par RPV.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtres";
hfilter.phase2="La fenêtre <i>Filtres</i> vous permet de bloquer ou d'autoriser certaines utilisations \
		d'Internet. Vous pouvez définir des politiques d'accès Internet pour des ordinateurs spécifiques ainsi que des \
		filtres en utilisant des numéros de port réseau.";
hfilter.phase3="Cette fonction vous permet de personnaliser jusqu'à 10 politiques d'accès Internet différentes \
    		pour des ordinateurs particuliers qui sont identifiés au moyen de leur adresse IP ou MAC. Pour \
    		chaque ordinateur associé à une politique, vous pouvez définir les jours et les périodes applicables.";
hfilter.phase4="Pour créer ou modifier une politique, procédez comme suit :";
hfilter.phase5="sélectionnez son numéro \(1-10\) dans le menu déroulant.";
hfilter.phase6="Entrez un nom dans le champ <i>Entrer le nom du profil</i>.";
hfilter.phase7="Cliquez sur le bouton <b>Modifier liste des ordinateurs</b>.";
hfilter.phase8="Cliquez sur <b>Appliquer</b> pour enregistrer vos modifications. Cliquez sur le bouton <b>Annuler</b> pour \
    		annuler vos modifications non sauvegardées. Cliquez sur le bouton <b>Fermer</b> pour revenir à la page \
    		    		<i>Filtres</i>.";
hfilter.phase9="Si vous voulez bloquer l'accès Internet aux ordinateurs qui figurent dans la liste pour les jours et \
    		périodes spécifiés, conservez la valeur par défaut, soit <b>Désactiver l'accès Internet pour les ordinateurs qui figurent dans la \
    		liste</b>. Si vous voulez permettre l'accès Internet aux ordinateurs qui figurent dans la liste pour \
    		les jours et périodes spécifiés, cliquez dans la case d'option <i> Activer \
    		l'accès Internet pour les ordinateurs qui figurent dans la liste</i>.";
hfilter.phase10="Dans la fenêtre <i>Liste des ordinateurs</i>, désignez les ordinateurs voulus par leur adresse IP ou MAC. Entrez les \
    		adresses IP appropriées dans les champs d'adresse <i>IP</i>. Si vous avez une plage \
    		d'adresses IP à filtrer, remplissez les champs de <i>plage d'adresses IP</i> appropriés. \
    		Entrez les adresses MAC appropriées dans les champs <i>MAC</i>.";
hfilter.phase11="Entrez la période au cours de laquelle l'accès sera filtré. Sélectionnez <b>24 heures</b> ou<b> </b>cochez la case <i>Du</i> \
    		et servez-vous des listes déroulantes pour définir une période spécifique. ";
hfilter.phase12="Entrez les jours où l'accès sera filtré. Choisissez <b>Chaque jour</b> ou sélectionnez les jours de semaine voulus. ";
hfilter.phase13="Cliquez sur le bouton <b>Ajouter à la politique</b> pour enregistrer vos modifications et activer la politique.";
hfilter.phase14="Pour créer ou modifier des politiques supplémentaires, répétez les étapes 1 à 9.";
hfilter.phase15="Pour supprimer une politique d'accès Internet, sélectionnez son numéro puis cliquez sur le bouton <b>Supprimer</b>.";
hfilter.phase16="Pour afficher un sommaire de toutes les politiques, cliquez sur le bouton <b>Sommaire</b>. La fenêtre <i> \
    		Sommaire de la politique Internet</i> présente chaque numéro de politique, le nom de \
    		la politique, les jours et l'heure du jour. Pour supprimer une politique, cliquez dans sa case puis \
    		cliquez sur le bouton <b>Supprimer</b>. Cliquez sur le bouton <b>Fermer</b> pour revenir à la fenêtre \
    		<i>Filtres</i>.";
hfilter.phase17="Plage de ports Internet filtrés";
hfilter.phase18="Pour filtrer des ordinateurs par numéro de port réseau, sélectionnez <b>Les deux</b>, <b>TCP</b> ou <b>UDP</b>, \
    		selon les protocoles que vous désirez filtrer. Entrez les numéros de<b> </b>port  \
    		à filtrer dans les champs de numéro de port. Les ordinateurs connectés au  \
    		routeur ne pourront plus accéder aux numéros de ports correspondants. Pour  \
    		désactiver un filtre, sélectionnez <b>Désactiver</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="Vérifiez tous les paramètres et cliquez sur <b>Enregistrer les paramètres</b> pour sauvegarder vos données. Cliquez sur le bouton <b>Annuler les \
		changements</b> pour annuler les modifications non sauvegardées.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La fonction d'hébergement DMZ permet d'accorder un accès Internet à un utilisateur local pour \
		un service spécial, par exemple pour accéder à un jeu en ligne ou à des vidéoconférences. \
		L'hébergement DMZ réachemine tous les ports simultanément vers un PC. La fonction de routage \
    		de port est plus sure car elle ouvre uniquement les ports voulus, \
    		tandis que l'hébergement DMZ ouvre tous les ports d'un ordinateur, \
    		ce qui le rend accessible depuis Internet.";    		
helpdmz.phase2="Sur les ordinateurs dont les ports sont réacheminés, le client DHCP doit être désactivé  \
    		et une nouvelle adresse IP statique doit être attribuée car leur adresse IP  \
    		peut être changée lorsque la fonction DHCP est utilisée.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Pour exposer un ordinateur sur Internet, sélectionnez ";
helpdmz.phase4="Entrez l'adresse IP de l'ordinateur dans le champ <i>Adresse IP de l'hôte DMZ</i>.";



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
 
