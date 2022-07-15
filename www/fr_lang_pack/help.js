//Basic Setup
var hsetup = new Object();
hsetup.phase1="L'�cran <i>Configuration</i> \
		est le premier �cran qui s'affiche lorsque vous acc�dez au routeur. La plupart des utilisateurs \
		peuvent configurer le routeur et le faire fonctionner correctement � l'aide des \
		param�tres affich�s � l'�cran. Certains fournisseurs d'acc�s � Internet (FAI) demandent \
		de saisir des informations sp�cifiques, comme le nom d'utilisateur, le mot de passe, l'adresse IP, \
		l'adresse de la passerelle par d�faut ou l'adresse IP DNS. Vous pouvez obtenir les informations n�cessaires \
		aupr�s de votre fournisseur d'acc�s � Internet, si besoin est.";
hsetup.phase2="Remarque : Apr�s \
		avoir configur� ces param�tres, vous devez d�finir un nouveau mot de passe pour le routeur \
		� l'aide de l'�cran <i>S�curit�</i>. Ceci permet d'am�liorer la s�curit� en prot�geant le \
		routeur contre toute modification non autoris�e. Tous les utilisateurs qui tentent d'acc�der � \
		l'utilitaire Web du routeur ou � l'Assistant de configuration seront invit�s � saisir le mot de passe du routeur.";
hsetup.phase3="S�lectionnez le \
		fuseau horaire correspondant � votre emplacement g�ographique. Si l'heure d'�t� est appliqu�e dans votre pays, \
    		ne d�sactivez pas la case � cocher <i>R�gler automatiquement l'horloge \
    		en fonction des modifications de l'heure d'�t�</i>.";
hsetup.phase4="Cette option d�termine \
    		l'unit� de transmission maximale. Elle sp�cifie la taille de paquet maximale autoris�e \
    		pour la transmission Internet. Conservez le param�tre par d�faut, <b>Auto</b>, pour permettre \
    		au routeur de choisir la meilleure valeur de MTU pour votre connexion Internet. Pour d�finir \
    		une valeur de MTU, s�lectionnez <b>Manuelle</b> et saisissez la valeur souhait�e (par d�faut, <b> \
    		1400</b>).&nbsp;De pr�f�rence, laissez une valeur comprise entre 1200 et 1500.";
hsetup.phase5="Cette information est requise pour certains FAI, qui peuvent la fournir.";
hsetup.phase6="Le routeur prend en charge quatre types de connexion :";
hsetup.phase7="Configuration automatique DHCP";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Ces types de connexion peuvent �tre s�lectionn�s dans le menu d�roulant en regard de Connexion Internet. \
    		Les informations requises et les options disponibles varient selon \
    		le type de connexion s�lectionn�. Ces informations sont en partie \
    		d�crites ici :";		
hsetup.phase11="Adresse IP Internet et masque de sous-r�seau";
hsetup.phase12="Il s'agit de l'adresse IP \
    		et du masque de sous-r�seau du routeur, tels qu'ils apparaissent aux utilisateurs externes sur Internet (y compris � votre \
    		FAI). Si votre connexion Internet requiert une adresse IP statique, \
    		votre fournisseur d'acc�s Internet vous fournira une adresse IP statique et un masque de sous-r�seau.";
hsetup.phase13="Votre fournisseur d'acc�s Internet vous fournira l'adresse IP de la passerelle."; 
hsetup.phase14="(Domain Name Server)";
hsetup.phase15="Votre fournisseur d'acc�s Internet vous fournira au moins une adresse IP DNS.";
hsetup.phase16="Nom d'utilisateur et mot de passe";
hsetup.phase17="Saisissez le <b>nom d'utilisateur</b> et le \
		<b>mot de passe</b> que vous utilisez lors de la connexion � votre FAI via une connexion \
    		PPPoE ou PPTP.";
hsetup.phase18="Connexion � la demande";
hsetup.phase19="Vous pouvez configurer le routeur pour \
    		qu'il d�connecte votre connexion Internet � l'issue d'une p�riode d'inactivit� donn�e \
    		(D�lai d'inactivit� maximal). Si votre connexion Internet a �t� d�sactiv�e suite � \
    		son inactivit�, l'option Connexion � la demande permet au routeur de \
   		r�tablir automatiquement votre connexion d�s que vous tentez d'acc�der \
   		de nouveau � Internet. Si vous souhaitez s�lectionner cette option, cliquez sur le bouton radio Connexion � la demande. Si \
    		vous souhaitez que votre connexion Internet soit active en permanence, saisissez <b>0</b> \
    		dans le champ <i>D�lai d'inactivit� maximal</i>. Sinon, saisissez le nombre de minutes \
    		que vous souhaitez voir s'�couler avant la d�sactivation de votre connexion Internet.";
hsetup.phase20="Option Maintenir la connexion ";
hsetup.phase21="Cette option vous permet de rester connect� \
    		� Internet en permanence, m�me lorsque votre connexion est inactive. Pour la s�lectionner,\
    		cliquez sur le bouton radio en regard de <i>Maintenir la connexion</i>. La dur�e par d�faut \
    		avant rappel est de 30 secondes (en d'autres termes, le routeur v�rifiela connexion toutes les 30 secondes).";
hsetup.phase22="Remarque : Certains \
    		fournisseurs d'acc�s au c�ble requi�rent une adresse MAC sp�cifique pour la connexion � \
    		Internet. Pour en savoir plus, cliquez sur l'onglet <b>Syst�me</b>. Cliquez ensuite sur \
    		le bouton <b>Aide</b> et lisez la documentation sur la fonction de clonage MAC.";
hsetup.phase23="LAN";
hsetup.phase24="Adresse IP et masque de sous-r�seau";
hsetup.phase25="Il s'agit de\
    		l'adresse IP et du masque de sous-r�seau du routeur accessibles sur le r�seau local interne. La \
    		valeur par d�faut est 192.168.1.1 pour l'adresse IP et 255.255.255.0 pour le masque\
    		de sous-r�seau.";
hsetup.phase26="DHCP";
hsetup.phase27="Conservez \
    		la valeur par d�faut, <b>Activer</b>, pour activer l'option de serveur DHCP du routeur. Si vous\
    		avez d�j� un serveur DHCP sur votre r�seau ou si vous ne voulez pas de serveur DHCP, \
    		s�lectionnez <b>D�sactiver</b>.";
hsetup.phase28="Entrez une \
    		valeur num�rique de d�but pour la publication d'adresses IP par le serveur DHCP. \
    		Ne commencez pas par 192.168.1.1 (adresse IP du routeur).";
hsetup.phase29="Nombre maximal d'utilisateurs DHCP";
hsetup.phase30="Saisissez le \
    		nombre maximal d'ordinateurs auxquels le serveur DHCP peut attribuer des adresses IP.\
    		  La valeur maximale est 253, � condition que 192.168.1.2 soit votre adresse IP de \
    		d�but.";
hsetup.phase31="L'option \
    		Dur�e de connexion du client d�termine la p�riode pendant laquelle un utilisateur du r�seau est autoris� � se connecter \
    		au routeur � l'aide de son adresse IP dynamique actuelle. Saisissez \
    		la dur�e (en minutes) pendant laquelle cette adresse IP dynamique est allou�e � l'utilisateur.";
hsetup.phase32="DNS statique 1 - 3 ";
hsetup.phase33="Le syst�me \
    		DNS (Domain Name System) est le service adopt� par Internet pour convertir des noms de domaine ou de site Web \
    		en adresses Internet ou URL. Votre FAI peut vous fournir au moins une \
    		adresse IP de serveur DNS. Si vous souhaitez utiliser une autre adresse, saisissez cette adresse IP \
    		dans l'un des ces champs. Vous pouvez saisir jusqu'� trois adresses IP de serveur DNS.\
    		  Le routeur les utilise pour acc�der plus rapidement aux serveurs DNS \
    		fonctionnels.";
hsetup.phase34="Le syst�me WINS (Windows Internet Naming Service) permet de g�rer l'interaction entre chaque ordinateur et \
    		Internet. Si vous optez pour un serveur WINS, entrez son adresse IP dans ce champ. \
    		Autrement, laissez-le vide.";
hsetup.phase35="V�rifiez toutes les \
		valeurs et cliquez sur <b>Enregistrer les param�tres</b> pour enregistrer vos param�tres. Cliquez sur <b>Annuler \
		les modifications</b> pour \
		annuler les modifications non enregistr�es. Vous pouvez tester les param�tres en vous connectant � \
		Internet. ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Le routeur inclut une fonction DDNS (Dynamic Domain Name System). DDNS vous permet d'attribuer \
		un nom de domaine et d'h�te fixe � une adresse IP Internet dynamique. Ceci peut s'av�rer utile si vous \
		h�bergez votre propre site Web, un serveur FTP ou tout autre type de serveur avec le routeur. Avant \
		d'opter pour cette fonctionnalit�, vous devez souscrire � un service DDNS aupr�s de <i>www.dyndns.org</i>, \
		un fournisseur de services DDNS.";
helpddns.phase2="Service DDNS";
helpddns.phase3="Pour d�sactiver le service DDNS, conservez le param�tre par d�faut <b>D�sactiver</b>. Pour activer le service DDNS \
		proc�dez comme suit :";
helpddns.phase4="Souscrivez � un service DDNS sur le site <i>www.dyndns.org</i>, et indiquez \
		vos nom d'utilisateur,<i> </i>mot de passe et<i> </i>nom d'h�te.";
helpddns.phase5="Dans l'�cran <i>DDNS</i> s�lectionnez <b>Activer.</b>";
helpddns.phase6="Compl�tez les champs <i>Nom d'utilisateur</i>, <i>Mot de passe</i> et<i> Nom d'h�te</i>.";
helpddns.phase7="Cliquez sur le bouton <b>Enregistrer les param�tres</b> pour enregistrer vos modifications. Cliquez sur le bouton <b>Annuler les modifications</b> pour \
		annuler les modifications non enregistr�es.";
helpddns.phase8="L'adresse IP Internet actuelle du routeur est sp�cifi�e dans ce champ.";
helpddns.phase9="L'�tat de la connexion du service DDNS est sp�cifi� dans ce champ.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonage MAC";
helpmac.phase2="Une adresse MAC de routeur d�signe un code � 12 chiffres attribu� � un composant \
    		mat�riel unique en vue de son identification. Certains FAI demandent d'enregistrer l'adresse MAC \
    		de la carte ou de l'adaptateur r�seau connect� au modem c�ble ou \
    		DSL lors de l'installation. Si c'est le cas, \
    		recherchez l'adresse MAC de votre adaptateur en suivant les \
    		instructions du syst�me d'exploitation de votre ordinateur.";
helpmac.phase3="Windows 98 et Millennium :";
helpmac.phase4="1.  Cliquez sur le bouton <b>D�marrer</b> et s�lectionnez <b>Ex�cuter</b>.";
helpmac.phase5="2.  Tapez <b>winipcfg</b> dans le champ Ouvrir et cliquez sur <b>OK</b>.";
helpmac.phase6="3.  S�lectionnez l'adaptateur Ethernet que vous utilisez.";
helpmac.phase7="4.  Cliquez sur <b>Plus d'infos</b>.";
helpmac.phase8="5.  Notez l'adresse MAC de votre adaptateur.";
helpmac.phase9="1.  Cliquez sur le bouton <b>D�marrer</b> et s�lectionnez <b>Ex�cuter</b>.";
helpmac.phase10="2.  Tapez <b>cmd</b> dans le champ Ouvrir et cliquez sur <b>OK</b>.";
helpmac.phase11="3.  A l'invite de commande, ex�cutez <b>ipconfig /all</b>, et recherchez l'adresse physique de votre adaptateur.";
helpmac.phase12="4.  Notez l'adresse MAC de votre adaptateur.";
helpmac.phase13="Pour cloner l'adresse MAC de votre adaptateur r�seau sur le routeur et �viter d'appeler votre \
    		FAI pour qu'il modifie l'adresse MAC enregistr�e, proc�dez comme suit :";
helpmac.phase14="Windows 2000 et XP :";
helpmac.phase15="1.  S�lectionnez <b>Activer</b>.";
helpmac.phase16="2.  Saisissez l'adresse MAC de votre adaptateur dans le champ <i>Adresse MAC</i>.";
helpmac.phase17="3.  Cliquez sur le bouton <b>Enregistrer les param�tres</b>.";
helpmac.phase18="Pour d�sactiver le clonage de l'adresse MAC, conservez le param�tre par d�faut, <b>D�sactiver</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routage";
hrouting.phase2="L'�cran <i>Routage</i> permet de d�finir le mode et les param�tres de routage du routeur. \
		 Le mode Passerelle est recommand� pour la plupart des utilisateurs.";
hrouting.phase3="Choisissez le mode de fonctionnement appropri�. Conservez le param�tre par d�faut, <b> \
    		 Passerelle</b>, si le routeur h�berge votre connexion r�seau � Internet (le mode Passerelle est recommand� pour la plupart des utilisateurs). S�lectionnez <b> \
    		 Routeur </b>si le routeur existe sur un r�seau avec d'autres routeurs.";
hrouting.phase4="Routage dynamique (RIP)";
hrouting.phase5="Remarque : Cette fonction n'est pas disponible en mode Passerelle.";
hrouting.phase6="Le routage dynamique permet au routeur de s'adapter automatiquement aux modifications physiques apport�es � \
    		 la configuration du r�seau et d'�changer les tables de routage avec les autres routeurs. Le \
    		 routeur d�termine l'itin�raire des paquets du r�seau en fonction du plus petit nombre de \
    		 sauts relev�s entre la source et la destination. ";
hrouting.phase7="Pour activer la fonction de routage dynamique c�t� WAN, s�lectionnez <b>WAN</b>. \
    		 Pour activer cette fonction c�t� r�seau local et sans fil, s�lectionnez <b>LAN et sans fil</b>. \
    		 Pour activer la fonction c�t� WAN et r�seau local, s�lectionnez <b> \
    		 Les deux</b>. Pour d�sactiver la fonction de routage dynamique pour toutes les transmissions de donn�es, conservez le \
    		 param�tre par d�faut, <b>D�sactiver</b>. ";
hrouting.phase8="Routage statique, &nbsp;Adresse IP de destination, Masque de sous-r�seau, Passerelle et Interface";
hrouting.phase9="Pour d�finir un itin�raire statique entre le routeur et un autre r�seau, \
    		 choisissez un nombre dans la liste d�roulante <i>Routage statique</i>. (Un itin�raire statique \
    		 est une voie pr�d�finie que les informations du r�seau doivent emprunter pour \
    		 atteindre un h�te ou un r�seau sp�cifique.)";
hrouting.phase10="Saisissez les informations suivantes :";
hrouting.phase11="Adresse IP de destination </b>:\
		  adresse du r�seau ou de l'h�te auquel vous souhaitez attribuer un itin�raire statique.";
hrouting.phase12="Masque de sous-r�seau </b>:\
		  d�termine la portion de l'adresse IP qui correspond au r�seau et \
    		  celle qui correspond � l'h�te. ";
hrouting.phase13="Passerelle </b>: \
		  adresse IP de la passerelle permettant le contact entre le routeur et le r�seau distant ou h�te.";
hrouting.phase14="Selon l'emplacement de l'adresse IP de destination, s�lectionnez \
    		  <b>LAN et sans fil </b>ou <b>WAN </b>dans le menu d�roulant <i>Interface</i>.";
hrouting.phase15="Pour enregistrer vos modifications, cliquez sur le bouton <b>Appliquer</b>. Pour annuler les modifications non enregistr�es, cliquez sur le bouton <b> \
    		  Annuler</b>.";
hrouting.phase16="Pour d�finir des itin�raires statiques suppl�mentaires, r�p�tez les �tapes 1 � 4.";
hrouting.phase17="Supprimer cette\n entr�e";
hrouting.phase18="Pour supprimer un itin�raire statique :";
hrouting.phase19="Dans la liste d�roulante <i>Routage statique</i>, s�lectionnez le num�ro d'entr�e de l'itin�raire statique.";
hrouting.phase20="Cliquez sur le bouton <b>Supprimer cette entr�e</b>.";
hrouting.phase21="Pour sauvegarder une suppression, cliquez sur le bouton <b>Appliquer</b>. Pour annuler une suppression, cliquez sur le bouton <b> \
    		  Annuler</b>. ";
hrouting.phase22="Afficher la table de routage";
hrouting.phase23="Cliquez sur le bouton \
    		  <b>Afficher la table de routage </b>pour afficher toutes les entr�es d'itin�raire valide en cours d'utilisation. L'adresse IP de destination, le masque de sous-r�seau, \
    		  la passerelle et l'interface sont affich�s pour chaque entr�e. Cliquez sur le bouton <b>Actualiser </b>pour rafra�chir les donn�es affich�es. Cliquez sur le bouton <b> \
    		  Fermer</b> pour revenir � l'�cran <i>Routage</i>.";
hrouting.phase24="Adresse IP de destination </b>:\
		  adresse du r�seau ou de l'h�te auquel l'itin�raire statique est attribu�. ";
hrouting.phase25="Masque de sous-r�seau </b>:\
		  d�termine la portion de l'adresse IP qui correspond au r�seau et celle qui correspond � l'h�te.";
hrouting.phase26="Passerelle </b>: adresse IP de la passerelle permettant le contact entre le routeur et le r�seau distant ou h�te.";
hrouting.phase27="Interface </b>: cette option vous indique si l'adresse IP de destination est situ�e sur l'interface <b> LAN et sans fil </b>(r�seaux c�bl�s internes et sans fil), <b>WAN</b> (Internet) ou sur l'interface de <b> bouclage</b>, c'est-�-dire un r�seau factice sur lequel un ordinateur agit en qualit� de r�seau, indispensable pour certains programmes logiciels. ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Blocage des requ�tes WAN";
hfirewall.phase2="En activant la fonctionnalit� de blocage des requ�tes WAN, vous emp�chere d'autres utilisateurs Internet de sonder par test Ping ou d�tecter votre r�seau. Le blocage des requ�tes WANvous permet �galement de renforcer la s�curit� de votre r�seau en masquant les ports de votre r�seau. Ces deux fonctions de la fonctionnalit� de blocage des requ�tes WAN rendent plus d�licat toute tentative d'infiltration de votre r�seau pour des utilisateurs externes. Cette fonctionnalit� est activ  par d�faut. S�lectionnez <b>D�sactiver</b> pour la d�sactiver.";
hfirewall.right="Cette fonctionnalit� permet d'activer ou d�sactiver un pare-feu SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="Passthrough VPN";
helpvpn.phase2="En r�gle g�n�rale, VPN (Virtual Private Networking) est utilis� pour la mise en r�seau associ�e au travail. Pour \
    		les canaux VPN, le routeur prend en charge les options Passthrough IPSec et Passthrough PPTP.";
helpvpn.phase3="<b>IPSec </b>: la technologie IPSec (Internet Protocol Security) d�signe<b> </b>une s�rie de protocoles utilis�s pour la mise en place \
      		d'un �change s�curis� des paquets au niveau de la couche IP. Pour autoriser les canaux IPSec � s'interconnecter \
      		via le routeur, l'option Passthrough IPSec est activ�e par d�faut. Pour d�sactiver \
      		l'Intercommunication IPSec, d�cochez la case en regard de <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP </b>: l'intercommunication PPTP (Point-to-Point Tunneling Protocol) est la m�thode utilis�e pour activer les sessions VPN \
      		dans un serveur Windows NT 4.0 ou 2000. Pour permettre aux tunnels PPTP de traverser \
      		le routeur, l'option Passthrough PPTP est activ�e par d�faut. Pour d�sactiver \
      		l'option Passthrough PPTP, d�cochez la case en regard de <i>PPTP</i>.";

helpvpn.right="Vous pouvez choisir d'activer l'intercommunication PPTP, L2TP ou IPSec afin d'autoriser \
		les p�riph�riques de votre r�seau � communiquer via VPN.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtres";
hfilter.phase2="L'�cran <i>Filtres</i> vous permet de bloquer ou d'autoriser des types sp�cifiques \
		d'utilisation d'Internet. Vous pouvez d�finir vos strat�gies d'acc�s � Internet pour des ordinateurs sp�cifiques et d�finir \
		des filtres en utilisant les num�ros de ports du r�seau.";
hfilter.phase3="Cette fonction vous permet de personnaliser jusqu'� dix strat�gies d'acc�s � Internet \
    		pour des ordinateurs identifi�s par leur adresse IP ou MAC. Pour \
    		chaque strat�gie, des ordinateurs sont d�sign�s pendant les jours et p�riodes indiqu�s.";
hfilter.phase4="Pour cr�er ou modifier une strat�gie, proc�dez comme suit :";
hfilter.phase5="S�lectionnez le num�ro de la strat�gie (1 � 10) dans le menu d�roulant.";
hfilter.phase6="Saisissez un nom dans le champ <i>Entrer le nom du profil</i>.";
hfilter.phase7="Cliquez sur le bouton <b>Modifier la liste des ordinateurs</b>.";
hfilter.phase8="Cliquez sur le bouton <b>Appliquer</b> pour enregistrer vos modifications. Cliquez sur le bouton <b>Annuler</b> pour \
    		annuler les modifications non enregistr�es. Cliquez sur le bouton <b>Fermer</b> pour revenir � l'�cran \
    		<i>Filtres</i>.";
hfilter.phase9="Si vous souhaitez bloquer l'acc�s � Internet des ordinateurs r�pertori�s aux cours des jours et p�riodes indiqu�s, \
    		conservez le param�tre par d�faut, <b>D�sactiver l'acc�s � Internet pour \
    		les ordinateurs r�pertori�s</b>. Si vous souhaitez que les ordinateurs r�pertori�s acc�dent � Internet au cours \
    		des jours et p�riodes indiqu�s, cliquez sur le bouton radio en regard de l'option<i> Activer \
    		l'acc�s � Internet pour les ordinateurs r�pertori�s</i>.";
hfilter.phase10="Dans l'�cran <i>Liste des ordinateurs</i>, indiquez les ordinateurs par adresse IP ou adresse MAC. Saisissez \
    		les adresses IP appropri�es dans les champs <i>IP</i>. Si vous devez filtrer une s�rie \
    		d'adresses IP, compl�tez les champs <i>Plage IP</i> appropri�s. \
    		Saisissez les adresses MAC appropri�es dans les champs <i>MAC</i>.";
hfilter.phase11="D�finissez l'heure de filtrage de l'acc�s. S�lectionnez <b>24 heures</b>,<b> </b> ou cochez la case en regard de <i>De</i> \
    		et utilisez les listes d�roulantes pour d�finir une p�riode sp�cifique. ";
hfilter.phase12="D�finissez les jours o� l'acc�s sera filtr�. S�lectionnez <b>Tous les jours</b> ou les jours appropri�s de la semaine. ";
hfilter.phase13="Cliquez sur le bouton <b>Ajouter � la strat�gie</b> pour enregistrer vos modifications et proc�der � l'activation.";
hfilter.phase14="Pour cr�er ou modifier des strat�gies suppl�mentaires, r�p�tez les �tapes 1 � 9.";
hfilter.phase15="Pour supprimer une strat�gie d'acc�s � Internet, s�lectionnez son num�ro et cliquez sur le bouton <b>Supprimer</b>.";
hfilter.phase16="Pour afficher un r�capitulatif de toutes les strat�gies, cliquez sur le bouton <b>R�capitulatif</b>. L'�cran <i> \
    		R�capitulatif de la strat�gie Internet</i> affiche le num�ro, \
    		le nom, les jours et les heures de chaque strat�gie. Pour supprimer une strat�gie, cochez la case correspondante et \
    		cliquez sur le bouton <b>Supprimer</b>. Cliquez sur le bouton <b>Fermer</b> pour revenir � \
    		l'�cran <i>Filtres</i>.";
hfilter.phase17="Plage de ports Internet filtr�s";
hfilter.phase18="Pour d�finir des filtres en utilisant les num�ros de ports du r�seau, s�lectionnez le protocole <b>TCP</b>, <b>UDP</b>, ou <b>Les deux</b>, \
    		selon le type de protocole que vous souhaitez filtrer. Entrez ensuite<b> </b>les num�ros des ports \
    		que vous souhaitez filtrer dans les champs appropri�s. Les ordinateurs connect�s au \
    		routeur ne pourront plus acc�der aux num�ros de ports r�pertori�s. Pour \
    		d�sactiver un filtre, s�lectionnez <b>D�sactiver</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="V�rifiez toutes les valeurs et cliquez sur <b>Enregistrer les param�tres</b> pour enregistrer vos param�tres. Cliquez sur le bouton <b>Annuler \
		les modifications</b> pour annuler les modifications non enregistr�es.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La fonction d'h�bergement DMZ permet � un utilisateur local d'acc�der � Internet en vue d'utiliser \
		un service � usage sp�cifique, tel que des jeux Internet ou un syst�me de vid�oconf�rence. \
		L'h�bergement DMZ permet de transf�rer tous les ports en m�me temps vers un seul ordinateur. La fonctionnalit� \
    		de transfert de connexion est plus s�curis�e puisqu'elle ouvre uniquement les ports que vous souhaitez \
    		ouvrir, tandis que la fonction d'h�bergement DMZ ouvre tous les ports d'un ordinateur \
    		pour lui permettre d'acc�der � Internet. ";    		
helpdmz.phase2="Tout ordinateur dont le port est transf�r� doit avoir sa fonction de client DHCP d�sactiv�e \
    		et doit disposer d'une nouvelle adresse IP statique puisque son adresse IP \
    		risque de changer lors de l'utilisation de la fonction DHCP.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Pour exposer un ordinateur, s�lectionnez ";
helpdmz.phase4="Saisissez l'adresse IP de cet ordinateur dans le champ <i>Adresse IP de l'h�te DMZ</i>.";



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
 
