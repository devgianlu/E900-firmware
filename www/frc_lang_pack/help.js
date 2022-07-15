//Basic Setup
var hsetup = new Object();
hsetup.phase1="<i>Configuration</i> \
		est la premi�re page qui s'affiche lorsque vous acc�dez au routeur. La plupart des utilisateurs  \
		pourront configurer le routeur et le faire fonctionner correctement � partir des \
		param�tres de cette page. Certains fournisseurs d'acc�s Internet (FAI) peuvent vous demander  \
		d'entrer des renseignements pr�cis, notamment le nom d'utilisateur, le mot de passe, l'adresse�IP,  \
		l'adresse de passerelle par d�faut ou l'adresse�IP DNS. Vous pouvez obtenir ces informations  \
		aupr�s de votre FAI.";
hsetup.phase2="Remarque�: Apr�s \
		avoir configur� ces param�tres, il est recommand� de changer le mot de passe du routeur  \
		� partir de la page <i>S�curit�</i>. Cette mesure contribuera � am�liorer la s�curit� du r�seau en prot�geant le  \
		routeur contre les modifications non autoris�es. Ainsi, tous les utilisateurs qui tentent d'acc�der � l'utilitaire Web \
		ou � l'assistant d'installation du routeur seront invit�s � entrer le mot de passe du routeur.";
hsetup.phase3="S�lectionnez votre \
		fuseau horaire local. Si l'heure est avanc�e pendant l'�t� dans votre r�gion, \
    		ne d�cochez pas la case de l'option <i>R�glage automatique de l�horloge pour \
    		l�heure avanc�e</i>.";
hsetup.phase4="MTU indique  \
    		l'unit� de transmission maximale. Cette option permet de pr�ciser la taille maximale de paquet de donn�es \
    		pour transmission sur Internet. Conservez le param�tre par d�faut, <b>Auto</b>, pour que \
    		le routeur utilise la meilleure valeur�MTU pour votre connexion Internet. Pour sp�cifier une \
    		valeur�MTU, s�lectionnez <b>Manuel</b>, puis entrez la valeur d�sir�e (la valeur par d�faut est <b> \
    		1400</b>).&nbsp; Utilisez une valeur comprise entre 1200 et 1500.";
hsetup.phase5="Cette valeur est n�cessaire pour certains FAI (qui peuvent d'ailleurs vous la fournir).";
hsetup.phase6="Le routeur accepte quatre types de connexion�:";
hsetup.phase7="Configuration automatique���DHCP";
hsetup.phase8="Protocole Point-to-Point Protocol over Ethernet";
hsetup.phase9="Protocole Point-to-Point Tunneling Protocol";
hsetup.phase10="Ces types sont propos�s dans le menu d�roulant � c�t� de Connexion Internet. \
    		Les renseignements requis et les fonctions propos�es varient selon le \
    		type de connexion s�lectionn�. Certains de ces renseignements \
    		sont d�crits ci-apr�s�:";		
hsetup.phase11="Adresse�IP Internet et masque de sous-r�seau";
hsetup.phase12="Ces champs indiquent l'adresse�IP et le masque de sous-r�seau du routeur, \
    		tels que vus par les utilisateurs externes depuis Internet (incluant votre \
    		FAI). Si votre connexion Internet n�cessite une adresse�IP statique, votre FAI \
    		vous fournira les valeurs � entrer dans ces champs.";
hsetup.phase13="L'adresse�IP de la passerelle doit vous �tre communiqu�e par votre FAI.";
hsetup.phase14="(Serveur de noms de domaine)";
hsetup.phase15="Votre FAI vous fournira au moins une adresse�IP DNS.";
hsetup.phase16="Nom d'utilisateur et mot de passe";
hsetup.phase17="Entrez le <b>nom d'utilisateur</b> et le \
				<b>mot de passe</b> que vous utilisez pour vous connecter � votre FAI par l'entremise d'une connexion PPPoE ou PPTP \
    		.";
hsetup.phase18="Connexion sur demande";
hsetup.phase19="Vous pouvez configurer le routeur de fa�on � \
    		interrompre la connexion Internet si elle demeure inactive pendant une dur�e sp�cifi�e \
    		(Dur�e d'inactivit� maximale). Si la connexion est interrompue pour cette raison, \
    		l'option Connexion sur demande permet de la r�tablir automatiquement \
   		d�s que vous tentez d'acc�der � Internet \
   		de nouveau. Pour utiliser la connexion sur demande, cliquez sur la case d'option correspondante. Pour \
    		que la connexion Internet soit maintenue sans interruption, entrez <b>0</b> \
    		dans le champ <i>Dur�e d'inactivit� maximale</i>. Sinon, entrez le nombre de minutes d'inactivit� \
    		qui doivent s'�couler avant l'interruption de la connexion Internet.";
hsetup.phase20="Option Maintenir la connexion ";
hsetup.phase21="S�lectionnez cette option pour que la connexion \
    		Internet soit maintenue m�me si elle est inactive. Pour utiliser \
    		cette option, cliquez dans la case d'option � c�t� de <i>Maintenir la connexion</i>. Par d�faut, \
    		le d�lai de reconnexion est fix� � 30�secondes (le routeur v�rifiera la \
    		connexion Internet toutes les 30�secondes).";
hsetup.phase22="Remarque�: certains \
    		c�blodistributeurs exigent l'enregistrement d'une adresse�MAC pour autoriser l'acc�s � \
    		Internet. Cliquez sur l'onglet <b>Syst�me</b> pour en savoir plus. Cliquez ensuite sur \
    		le bouton <b>Aide</b> pour obtenir de l'information sur la fonction de clonage d'adresse�MAC du routeur.";
hsetup.phase23="R�seau local";
hsetup.phase24="Adresse�IP et Masque de sous-r�seau";
hsetup.phase25="Ces champs\
    		indiquent l'adresse�IP et le masque de sous-r�seau du routeur, tels que vus sur le r�seau local interne. Le \
    		valeur par d�faut est 192.168.1.1 pour l'adresse�IP et 255.255.255.0 pour le masque de \
    		sous-r�seau.";
hsetup.phase26="DHCP";
hsetup.phase27="Conservez la s�lection \
    		par d�faut, soit <b>Activer</b>, pour appliquer l'option de serveur DHCP du routeur. Si votre \
    		r�seau est d�j� dot� d'un serveur DHCP, ou si vous ne voulez pas de ce serveur, \
    		s�lectionnez <b>D�sactiver</b>.";
hsetup.phase28="Entrez la \
    		premi�re adresse�IP pouvant �tre attribu�e par le serveur�DHCP. \
    		Ne commencez pas par l'adresse 192.168.1.1 (qui est l'adresse�IP du routeur).";
hsetup.phase29="Nombre maximal d'utilisateurs DHCP";
hsetup.phase30="Entrez le \
    		nombre maximal d'ordinateurs auxquels le serveur�DHCP peut attribuer des adresses�IP \
    		. Le maximum absolu est�253 (valeur possible si votre adresse�IP de d�part est 192.168.1.2 \
    		.";
hsetup.phase31="La dur�e \
    		de validit� client d�termine la p�riode pendant laquelle un ordinateur est autoris� � se connecter \
    		au routeur avec son adresse�IP dynamique actuelle. Entrez le nombre de \
    		minutes pendant lesquelles l'adresse�IP dynamique est valide.";
hsetup.phase32="DNS statiques 1-3 ";
hsetup.phase33="Le syst�me Domain \
    		Name System (DNS) d�signe la fa�on dont Internet traduit les noms de domaine ou de sites�Web \
    		en adresses Internet ou�URL. Votre FAI vous fournira au moins une adresse�IP \
    		de serveur�DNS. Si vous d�sirez en utiliser une autre, entrez cette adresse�IP \
    		dans l'un de ces champs. Vous pouvez entrer ici jusqu'� trois�adresses�IP  \
    		de serveur�DNS. Ces adresses seront utilis�es par le routeur pour acc�l�rer l'acc�s aux serveurs�DNS\
    		en fonction.";
hsetup.phase34="Le service�WINS (Windows Internet Naming Service) g�re l'interaction de chaque ordinateur \
    		avec Internet. Si vous utilisez un serveur�WINS, entrez son adresse�IP ici. \
    		Sinon, laissez ce champ vide.";
hsetup.phase35="V�rifiez tous les \
		param�tres et cliquez sur <b>Enregistrer les param�tres</b> pour sauvegarder vos changements. Cliquez sur <b>Annuler \
		les changements</b> pour \
		annuler vos modifications non sauvegard�es. Vous pouvez tester les param�tres en vous connectant �  \
		Internet.";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Le routeur est dot� d'une fonction DDNS (Dynamic Domain Name System) qui permet d'attribuer un nom d'h�te et un nom de domaine statiques \
		� une adresse�IP Internet dynamique. Cette fonction peut �tre utile pour \
		h�berger votre site�Web, un serveur FTP ou un autre serveur situ� apr�s le routeur. Pour pouvoir \
		utiliser cette fonction, vous devez d'abord vous abonner au service DDNS � l'adresse <i>www.dyndns.org</i>, \
		(adresse d'un fournisseur de service DDNS).";
helpddns.phase2="Service�DDNS";
helpddns.phase3="Pour d�sactiver le service DDNS, conservez le param�tre par d�faut, soit <b>D�sactiver</b>. Pour activer le service DDNS, \
		proc�dez comme suit�:";
helpddns.phase4="Abonnez-vous au service DDNS � l'adresse <i>www.dyndns.org</i>, puis prenez en note \
		votre nom d'utilisateur,<i> votre </i>mot de passe et<i> </i>le nom d'h�te.";
helpddns.phase5="Dans la fen�tre <i>DDNS</i>, s�lectionnez <b>Activer.</b>";
helpddns.phase6="Remplissez les champs <i> Nom d'utilisateur</i>,<i> Mot de passe</i> et<i> Nom de l'h�te</i>.";
helpddns.phase7="Cliquez sur le bouton <b>Enregistrer les param�tres</b> pour sauvegarder vos modifications. Cliquez sur le bouton <b>Annuler les changements</b> pour \
		annuler les modifications non sauvegard�es.";
helpddns.phase8="Indique l'adresse�IP Internet actuelle du routeur.";
helpddns.phase9="Indique l'�tat de la connexion�DDNS.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="Clonage d'adresse MAC";
helpmac.phase2="L'adresse MAC du routeur est un code de 12�chiffres identifiant un composant \
    		mat�riel unique. Certains FAI exigent l'enregistrement de l'adresse MAC \
    		de la carte r�seau qui a �t� connect�e � votre modem c�ble ou \
    		DSL au cours de l'installation. Si votre FAI exige l'enregistrement de votre adresse MAC, \
    		trouvez cette adresse en suivant les \
    		instructions applicables au syst�me d'exploitation de votre ordinateur.";
helpmac.phase3="Windows 98 et ME�:";
helpmac.phase4="1.  Cliquez sur le bouton <b>D�marrer</b> puis s�lectionnez <b>Ex�cuter</b>.";
helpmac.phase5="2.  Tapez <b>winipcfg</b> dans le champ, puis cliquez sur <b>OK</b>.";
helpmac.phase6="3.  S�lectionnez la carte r�seau Ethernet que vous utilisez.";
helpmac.phase7="4.  Cliquez sur <b>Pour en savoir plus</b>.";
helpmac.phase8="5.  Prenez en note cette adresse�MAC.";
helpmac.phase9="1.  Cliquez sur le bouton <b>D�marrer</b> puis s�lectionnez <b>Ex�cuter</b>.";
helpmac.phase10="2.  Tapez <b>cmd</b> dans le champ, puis cliquez sur <b>OK</b>.";
helpmac.phase11="3.  � l'invite, ex�cutez la commande <b>ipconfig /all</b>. Le syst�me affiche l'adresse physique de votre carte r�seau.";
helpmac.phase12="4.  Prenez en note cette adresse�MAC.";
helpmac.phase13="Pour cloner l'adresse MAC de votre carte r�seau sur le routeur, et �viter ainsi d'avoir � communiquer avec votre \
    		FAI pour faire changer l'adresse qui a �t� enregistr�e, proc�dez comme suit�:";
helpmac.phase14="Windows�2000 et XP�:";
helpmac.phase15="1.  S�lectionnez <b>Activer</b>.";
helpmac.phase16="2.  Entrez l'adresse MAC de la carte r�seau dans le champ <i>Adresse MAC</i>.";
helpmac.phase17="3.  Cliquez sur le bouton <b>Enregistrer les param�tres</b>.";
helpmac.phase18="Pour d�sactiver le clonage d'adresse MAC, conservez le param�tre par d�faut, soit <b>D�sactiver</b>.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Routage";
hrouting.phase2="Dans la fen�tre <i>Routage</i>, vous pouvez d�finir le mode de routage et les param�tres du routeur. \
		 Le mode Passerelle est recommand� pour la plupart des utilisateurs.";
hrouting.phase3="S�lectionnez le mode de fonctionnement appropri�. Conservez le param�tre par d�faut, soit <b> \
    		 Passerelle</b>, si le routeur g�re la connexion Internet de votre r�seau (le mode Passerelle est recommand� pour la plupart des utilisateurs). S�lectionnez <b> \
    		 Routeur</b> s'il existe d'autres routeurs sur votre r�seau.";
hrouting.phase4="Routage dynamique (RIP)";
hrouting.phase5="Remarque�: cette fonction n'est pas disponible en mode Passerelle.";
hrouting.phase6="La fonction Routage dynamique permet au routeur de s'adapter automatiquement aux modifications physiques de topologie \
    		 du r�seau et d'�changer des tables de routage avec d'autres routeurs. Le \
    		 routeur s�lectionne le chemin des paquets de donn�es qui n�cessite le moins \
    		 d'�tapes entre la source et la destination. ";
hrouting.phase7="Si vous d�sirez activer la fonction de routage dynamique pour le r�seau �tendu, s�lectionnez <b>R�seau �tendu</b>. \
    		 Si vous d�sirez activer cette fonction c�t� r�seau local et sans fil, s�lectionnez <b>R�seau local et sans�fil</b>. \
    		 Si vous d�sirez activer la fonction pour le r�seau �tendu et pour le r�seau local, s�lectionnez <b> \
    		 Les deux</b>. Pour d�sactiver la fonction de routage dynamique pour toutes les transmissions de donn�es, conservez la \
    		 valeur par d�faut, soit <b>D�sactiver</b>. ";
hrouting.phase8="Routage statique,&nbsp; Adresse IP du r�seau cible, Masque de sous-r�seau, Passerelle et Interface";
hrouting.phase9="Pour configurer une route statique entre le routeur et un autre r�seau, \
    		 s�lectionnez un nombre dans la liste d�roulante <i>Routage statique</i>. Une route statique \
    		 est un chemin pr��tabli que doivent emprunter les donn�es r�seau pour \
    		 atteindre un h�te ou un r�seau sp�cifique.)";
hrouting.phase10="Entrez les informations suivantes�:";
hrouting.phase11="Adresse�IP du r�seau cible�</b>- \
		  Adresse IP du r�seau ou de l'h�te cible auquel vous d�sirez attribuer une route statique.";
hrouting.phase12="Masque de sous-r�seau�</b>- \
		  Le masque de sous-r�seau est utilis� pour distinguer la partie r�seau et la partie \
    		  h�te de l'adresse�IP. ";
hrouting.phase13="Passerelle�</b>- \
		  Adresse�IP de la passerelle situ�e entre le routeur et le r�seau ou l'h�te.";
hrouting.phase14="Selon l'adresse�IP du r�seau cible, s�lectionnez \
    		      		  <b>R�seau local et sans�fil </b>ou <b>R�seau �tendu </b>dans le menu d�roulant <i>Interface</i>.";
hrouting.phase15="Pour enregistrer vos modifications, cliquez sur le bouton <b>Appliquer</b>. Pour annuler vos modifications non sauvegard�es, cliquez sur <b> \
    		  Annuler</b>.";
hrouting.phase16="R�p�tez les �tapes 1 �4 pour chaque route statique suppl�mentaire.";
hrouting.phase17="Supprimer cette\n entr�e";
hrouting.phase18="Pour supprimer une route statique�:";
hrouting.phase19="S�lectionnez le num�ro d'entr�e de la route statique vis�e dans la liste d�roulante <i>Routage statique</i>.";
hrouting.phase20="Cliquez sur le bouton <b>Supprimer cette entr�e</b>.";
hrouting.phase21="Pour enregistrer une suppression, cliquez sur le bouton <b>Appliquer</b>. Pour annuler une suppression, cliquez sur le bouton <b> \
    		  Annuler</b>. ";
hrouting.phase22="Afficher la table de routage";
hrouting.phase23="Cliquez sur le bouton \
    		      		  <b>Afficher la table de routage</b> pour visualiser les routes statiques valides. L'adresse�IP du r�seau cible, le masque de sous-r�seau, \
    		  la passerelle et l'interface sont affich�s pour chaque entr�e. Cliquez sur le bouton <b>Actualiser</b> pour actualiser les donn�es affich�es. Cliquez sur le bouton <b> \
    		  Fermer</b> pour retourner � la page <i>Routage</i>.";
hrouting.phase24="Adresse�IP du r�seau cible�</b>- \
		  Adresse�IP du r�seau ou de l'h�te auquel la route statique est attribu�e. ";
hrouting.phase25="Masque de sous-r�seau�</b>- \
		  Le masque de sous-r�seau est utilis� pour distinguer la partie r�seau et la partie h�te de l'adresse�IP.";
hrouting.phase26="Passerelle</b>�- Adresse�IP de la passerelle situ�e entre le routeur et le r�seau ou l'h�te.";
hrouting.phase27="Interface</b>�- Cette interface vous indique si l'adresse�IP du r�seau cible se trouve sur le \
    		      		  <b> r�seau local et sans fil </b>(r�seau interne filaire et sans fil) ou sur le <b>r�seau �tendu Internet</b>, ou s'il s'agit d'une<b> \
    		  adresse de boucle</b> (r�seau factice o� un ordinateur se comporte comme un r�seau pour ex�cuter certains programmes). ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="Bloquer les demandes de r�seau �tendu";
hfirewall.phase2="Lorsqu'elle est activ�e, cette fonction emp�che la \
    		 d�tection et l'interrogation (Ping) de votre r�seau par d'autres utilisateurs Internet. Elle renforce aussi \
    		 la s�curit� du r�seau en masquant ses ports. \
    		 Les deux fonctions de l'option Bloquer les demandes de r�seau �tendu compliquent la t�che des \
    		 intrus qui cherchent � acc�der � votre r�seau. Cette fonction est activ�e \
    		 par d�faut. S�lectionnez <b>D�sactiver</b> si vous ne voulez pas l'appliquer.";
hfirewall.right="Activez ou d�sactivez le pare-feu�SPI.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="RPV direct";
helpvpn.phase2="Un r�seau priv� virtuel (RPV) est habituellement employ� pour les utilisateurs distants qui doivent communiquer avec le r�seau de leur entreprise. Pour \
    		tunnels RPV, le routeur prend en charge les connexions IPSec et PPTP directes.";
helpvpn.phase3="<b>Le protocole IPSec</b>�- (Internet Protocol Security) est <b> </b>utilis� pour \
      		s�curiser l'�change de paquets�IP au niveau de la couche�IP. Pour autoriser la cr�ation de tunnels IPSec \
      		au routeur, le protocole�IPSec est activ� par d�faut. Pour d�sactiver \
      		IPSec, d�cochez la case <i>IPSec</i>.";
helpvpn.phase4="<b>PPTP�</b>- Le protocole Point-to-Point Tunneling Protocol est utilis� pour activer des sessions RPV \
      		sur un serveur Windows NT 4.0 ou 2000. Pour autoriser la cr�ation de tunnels PPTP \
      		au routeur, le protocole PPTP est activ� par d�faut. Pour d�sactiver \
      		PPTP, d�cochez la case <i>PPTP</i>.";

helpvpn.right="Vous pouvez activer les modes PPTP, L2TP ou IPSec pour permettre � vos p�riph�riques \
		de communiquer par RPV.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtres";
hfilter.phase2="La fen�tre <i>Filtres</i> vous permet de bloquer ou d'autoriser certaines utilisations \
		d'Internet. Vous pouvez d�finir des politiques d'acc�s Internet pour des ordinateurs sp�cifiques ainsi que des \
		filtres en utilisant des num�ros de port r�seau.";
hfilter.phase3="Cette fonction vous permet de personnaliser jusqu'� 10�politiques d'acc�s Internet diff�rentes \
    		pour des ordinateurs particuliers qui sont identifi�s au moyen de leur adresse�IP ou MAC. Pour \
    		chaque ordinateur associ� � une politique, vous pouvez d�finir les jours et les p�riodes applicables.";
hfilter.phase4="Pour cr�er ou modifier une politique, proc�dez comme suit�:";
hfilter.phase5="s�lectionnez son num�ro \(1-10\) dans le menu d�roulant.";
hfilter.phase6="Entrez un nom dans le champ <i>Entrer le nom du profil</i>.";
hfilter.phase7="Cliquez sur le bouton <b>Modifier liste des ordinateurs</b>.";
hfilter.phase8="Cliquez sur <b>Appliquer</b> pour enregistrer vos modifications. Cliquez sur le bouton <b>Annuler</b> pour \
    		annuler vos modifications non sauvegard�es. Cliquez sur le bouton <b>Fermer</b> pour revenir � la page \
    		    		<i>Filtres</i>.";
hfilter.phase9="Si vous voulez bloquer l'acc�s Internet aux ordinateurs qui figurent dans la liste pour les jours et \
    		p�riodes sp�cifi�s, conservez la valeur par d�faut, soit <b>D�sactiver l'acc�s Internet pour les ordinateurs qui figurent dans la \
    		liste</b>. Si vous voulez permettre l'acc�s Internet aux ordinateurs qui figurent dans la liste pour \
    		les jours et p�riodes sp�cifi�s, cliquez dans la case d'option <i> Activer \
    		l'acc�s Internet pour les ordinateurs qui figurent dans la liste</i>.";
hfilter.phase10="Dans la fen�tre <i>Liste des ordinateurs</i>, d�signez les ordinateurs voulus par leur adresse�IP ou MAC. Entrez les \
    		adresses�IP appropri�es dans les champs d'adresse <i>IP</i>. Si vous avez une plage \
    		d'adresses�IP � filtrer, remplissez les champs de <i>plage d'adresses�IP</i> appropri�s. \
    		Entrez les adresses MAC appropri�es dans les champs <i>MAC</i>.";
hfilter.phase11="Entrez la p�riode au cours de laquelle l'acc�s sera filtr�. S�lectionnez <b>24�heures</b> ou<b> </b>cochez la case <i>Du</i> \
    		et servez-vous des listes d�roulantes pour d�finir une p�riode sp�cifique. ";
hfilter.phase12="Entrez les jours o� l'acc�s sera filtr�. Choisissez <b>Chaque jour</b> ou s�lectionnez les jours de semaine voulus. ";
hfilter.phase13="Cliquez sur le bouton <b>Ajouter � la politique</b> pour enregistrer vos modifications et activer la politique.";
hfilter.phase14="Pour cr�er ou modifier des politiques suppl�mentaires, r�p�tez les �tapes�1 �9.";
hfilter.phase15="Pour supprimer une politique d'acc�s Internet, s�lectionnez son num�ro puis cliquez sur le bouton <b>Supprimer</b>.";
hfilter.phase16="Pour afficher un sommaire de toutes les politiques, cliquez sur le bouton <b>Sommaire</b>. La fen�tre <i> \
    		Sommaire de la politique Internet</i> pr�sente chaque num�ro de politique, le nom de \
    		la politique, les jours et l'heure du jour. Pour supprimer une politique, cliquez dans sa case puis \
    		cliquez sur le bouton <b>Supprimer</b>. Cliquez sur le bouton <b>Fermer</b> pour revenir � la fen�tre \
    		<i>Filtres</i>.";
hfilter.phase17="Plage de ports Internet filtr�s";
hfilter.phase18="Pour filtrer des ordinateurs par num�ro de port r�seau, s�lectionnez <b>Les deux</b>, <b>TCP</b> ou <b>UDP</b>, \
    		selon les protocoles que vous d�sirez filtrer. Entrez les num�ros de<b> </b>port  \
    		� filtrer dans les champs de num�ro de port. Les ordinateurs connect�s au  \
    		routeur ne pourront plus acc�der aux num�ros de ports correspondants. Pour  \
    		d�sactiver un filtre, s�lectionnez <b>D�sactiver</b>.";

//share of help string
var hshare = new Object();
hshare.phase1="V�rifiez tous les param�tres et cliquez sur <b>Enregistrer les param�tres</b> pour sauvegarder vos donn�es. Cliquez sur le bouton <b>Annuler les \
		changements</b> pour annuler les modifications non sauvegard�es.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="La fonction d'h�bergement DMZ permet d'accorder un acc�s Internet � un utilisateur local pour \
		un service sp�cial, par exemple pour acc�der � un jeu en ligne ou � des vid�oconf�rences. \
		L'h�bergement DMZ r�achemine tous les ports simultan�ment vers un PC. La fonction de routage \
    		de port est plus sure car elle ouvre uniquement les ports voulus, \
    		tandis que l'h�bergement DMZ ouvre tous les ports d'un ordinateur, \
    		ce qui le rend accessible depuis Internet.";    		
helpdmz.phase2="Sur les ordinateurs dont les ports sont r�achemin�s, le client DHCP doit �tre d�sactiv�  \
    		et une nouvelle adresse�IP statique doit �tre attribu�e car leur adresse�IP  \
    		peut �tre chang�e lorsque la fonction DHCP est utilis�e.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Pour exposer un ordinateur sur Internet, s�lectionnez ";
helpdmz.phase4="Entrez l'adresse�IP de l'ordinateur dans le champ <i>Adresse�IP de l'h�te DMZ</i>.";



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
 
