var firewall2 = new Object();
firewall2.natredir="Filter Internet NAT Redirection for IPv4 Internet Only";
firewall2.ident="Filter IDENT (Port 113)";
firewall2.multi="Filter Multicast";
firewall2.internetfilter="Internet Filter";
firewall2.webfilter="Web Filter";

var hupgrade = new Object();
hupgrade.right1="Click on the browse button to select the firmware file to be uploaded to the router.";
hupgrade.right2="Click the Upgrade button to begin the upgrade process.  Upgrade must not be interrupted.";
hupgrade.wrimage="The image file is incorrect.";

var hfacdef = new Object();
hfacdef.right1="This will reset all settings back to factory defaults.  All of your settings will be erased.";
hfacdef.warning="Warning! If you click OK, the device will reset to factory default and all previous settings will be erased.";

var hdiag = new Object();
hdiag.right1="Enter the IP address or domain name you would like to ping and click the Ping button.";
hdiag.right2="Enter the IP address or domain name you would like to trace, then click the Traceroute button";

var hlog = new Object();
hlog.right1="You may enable or disable the use of <b>Incoming</b> and <b>Outgoing</b> logs by selecting the appropriate radio button.";

var manage2 = new Object();
manage2.webacc="Local Management Access";
manage2.accser="Access Server";
manage2.wlacc="Wireless Access &nbsp;Web";
manage2.vapass="Confirmed password does not match Entered Password.  Please re-enter password.";
manage2.passnot="Password confirmation is not matched.";
manage2.selweb="You must select a web server.";
manage2.changpass="The Router is currently set to its default password. As a security measure, you must change the password before the Remote Management feature can be enabled. Click the OK button to change your password.  Click the Cancel button to leave the Remote Management feature disabled.";
manage2.webutiacc="Access via";
manage2.wlutiacc="Access via Wireless";

var hmanage2 = new Object();
hmanage2.right1="<b>Local Router Access : </b>You can change the Router's password from here. Enter a new Router password and then type it again in the Re-enter to confirm field to confirm.<br>";
hmanage2.right2="<b>Web Access : </b>Allows you to configure access options to the router's web utility.";
hmanage2.right3="<b>Remote Router Access : </b>Allows you to access your router remotely.  Choose the port you would like to use.  You must change the password to the router if it is still using its default password.";
hmanage2.right4="<b>UPnP : </b>Used by certain programs to automatically open ports for communication.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC Address</b>. This is the Router's MAC Address, as seen on your local, wireless network.";
hstatwl2.right2="<b>Mode</b>. As selected from the Wireless tab, this will display the wireless mode (Mixed, G-Only, or Disabled) used by the network.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC Address</b>. This is the Router's MAC Address, as seen on your local, Ethernet network.";
hstatlan2.right2="<b>IP Address</b>. This shows the Router's IP Address, as it appears on your local, Ethernet network.";
hstatlan2.right3="<b>Subnet Mask</b>. When the Router is using a Subnet Mask, it is shown here.";
hstatlan2.right4="<b>DHCP Server</b>. If you are using the Router as a DHCP server, that will be displayed here.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Static";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Cable";
hstatrouter2.connecting="Connecting";
hstatrouter2.disconnected="Disconnected";
hstatrouter2.disconnect="Disconnect";
hstatrouter2.right1="<b>Firmware Version. </b>This is the Router's current firmware.";
hstatrouter2.right2="<b>Current Time. </b>This shows the time, as you set on the Setup Tab.";
hstatrouter2.right3="<b>MAC Address. </b>This is the Router's MAC Address, as seen by your ISP.";
hstatrouter2.right4="<b>Router Name. </b>This is the specific name for the Router, which you set on the Setup Tab.";
hstatrouter2.right5="<b>Configuration Type. </b>This shows the information required by your ISP for connection to the Internet. This information was entered on the Setup Tab. You can <b>Connect</b> or <b>Disconnect</b> your connection here by clicking on that button.";
hstatrouter2.authfail=" authentication fail";
hstatrouter2.noip="Can not get a IP address from ";
hstatrouter2.negfail=" negotication fail";
hstatrouter2.lcpfail=" LCP negotication fail";
hstatrouter2.tcpfail="Can not build a TCP connection to ";
hstatrouter2.noconn="Can not connect to ";
hstatrouter2.server=" server";
hstatrouter2.pppoenoip="Can not get an IP address from PPPoE";
hstatrouter2.undetermined="Undetermined";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>Enabling this option will expose your router to the Internet.  All ports will be accessible from the Internet";

var hforward2 = new Object();
hforward2.right1="<b>Port Range Forwarding : </b>Certain applications may require to open specific ports in order for it to function correctly.  Examples of these applications include servers and certain online games.  When a request for a certain port comes in from the Internet, the router will route the data to the computer you specify.  Due to security concerns, you may want to limit port forwarding to only those ports you are using, and uncheck the <b>Enable</b> checkbox after you are finished.";

var hfilter2 = new Object();
hfilter2.delpolicy="Delete the Policy?";
hfilter2.right1="<b>Internet Access Policy : </b>You may define up to 10 access policies.  Click <b>Delete</b> to delete a policy or <b>Summary</b> to see a summary of the policy.";
hfilter2.right2="<b>Status : </b>Enable or disable a policy.";
hfilter2.right3="<b>Policy Name : </b>You may assign a name to your policy.";
hfilter2.right4="<b>Policy Type : </b>Choose from Internet Access or Inbound Traffic.";
hfilter2.right5="<b>Days : </b>Choose the day of the week you would like your policy to be applied.";
hfilter2.right6="<b>Times : </b>Enter the time of the day you would like your policy to apply.";
hfilter2.right7="<b>Blocked Services : </b>You may choose to block access to certain services.  Click <b>Add/Edit</b> Services to modify these settings.";
hfilter2.right8="<b>Website Blocking by URL : </b>You can block access to certain websites by entering their URL.";
hfilter2.right9="<b>Website Blocking by Keyword : </b>You can block access to certain website by the keywords contained in their webpage.";

var hportser2 = new Object();
hportser2.submit="Apply";

var hwlad2 = new Object();
hwlad2.authtyp="Authentication Type";
hwlad2.basrate="Basic Rate";
hwlad2.mbps="Mbps";
hwlad2.def="Default";
hwlad2.all="All";
hwlad2.defdef="(Default: Default)";
hwlad2.fburst="Frame Burst";
hwlad2.milli="Milliseconds";
hwlad2.range="Range";
hwlad2.frathrh="Fragmentation Threshold";
hwlad2.apiso="AP Isolation";
hwlad2.off="Off";
hwlad2.on="On";
hwlad2.right1="<b>Authentication Type : </b>You may choose from Auto or Shared Key.  Shared key authentication is more secure, but all devices on your network must also support Shared Key authentication.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Wireless Network Mode : </b><% support_match("SPEED_BOOSTER_SUPPORT", "1", "SpeedBooster is enabled automatically on <b>Mixed</b> Mode and <b>G-Only</b> mode."); %> If you wish to exclude Wireless-G clients, choose <b>B-Only</b> Mode.  If you would like to disable wireless access, choose <b>Disable</b>.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA Pre-Shared Key";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA Personal";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA Enterprise";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="WPA2 Pre-Shared Key Only";
hwlsec2.wpa2radius="WPA2 RADIUS Only";
hwlsec2.wpa2pskmix="WPA2 Pre-Shared Key Mixed";
hwlsec2.wpa2radiusmix="WPA2 RADIUS Mixed";
hwlsec2.wpa2personal="WPA2 Personal";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2 Enterprise";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA Mixed Mode";
hwlsec2.enterprisemixed="WPA2/WPA Enterprise Mixed Mode";
hwlsec2.newwpa2personal="WPA2 Personal"
hwlsec2.pskpersonal="PSK Personal";
hwlsec2.pskenterprise="PSK Enterprise";
hwlsec2.psk2personal="PSK2 Personal";
hwlsec2.psk2enterprise="PSK2 Enterprise";
hwlsec2.right1="<b>Security Mode : </b>You may choose from Disable, WEP, WPA Pre-Shared Key, WPA RADIUS, or RADIUS.  All devices on your network must use the same security mode in order to communicate.";

var hwmac2 = new Object();
hwmac2.right1="<b>MAC Address Clone : </b>Some ISP will require you to register your MAC address.  If you do not wish to re-register your MAC address, you can have the router clone the MAC address that is registered with your ISP.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS Service : </b>DDNS allows you to access your network using domain names instead of IP addresses.  The service manages changing IP address and updates your domain information dynamically.  You must sign up for service through TZO.com or DynDNS.org.";
hddns2.right2="Click <b><a target=_blank href=http://Linksys.tzo.com>Here</a></b> to SIGNUP with a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO FREE TRIAL ACCOUNT";
hddns2.right3="Click <b><a target=_blank href=https://controlpanel.tzo.com>Here</a></b> to Manage your <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TZO Account";
hddns2.right4="Click <b><a target=_blank href=https://www.tzo.com/cgi-bin/Orders.cgi?ref=linksys>Here</a></b> to Purchase a TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS Subscription";
hddns2.right5="TZO DDNS <b><a target=_blank href=http://Linksys.tzo.com>Support/Tutorials</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Operating Mode : </b>If the router is hosting your Internet connection, select <b>Gateway</b> mode.  If another router exists on your network, select <b>Router</b> mode.";
hrouting2.right2="<b>Select Set Number : </b>This is the unique route number, you may set up to 20 routes.";
hrouting2.right3="<b>Route Name : </b>Enter the name you would like to assign to this route.";
hrouting2.right4="<b>Destination LAN IP : </b>This is the remote host to which you would like to assign the static route.";
hrouting2.right5="<b>Subnet Mask : </b>Determines the host and the network portion.";

var hindex2 = new Object();
hindex2.telstra="Telstra Cable";
hindex2.dns3="Static DNS 3";
hindex2.hbs="Heart Beat Server";
hindex2.l2tps="L2TP Server";
hindex2.pptps="PPTP Server";
hindex2.hdhcp="<b>Automatic Configuration - DHCP : </b>This setting is most commonly used by Cable operators.<br><br>";
hindex2.hpppoe1="<b>PPPoE : </b>This setting is most commonly used by DSL providers.<br>";
hindex2.hpppoe2="<b>User Name : </b>Enter the user name provided by your ISP.<br>";
hindex2.hpppoe3="<b>Password : </b>Enter the password provided by your ISP.<br>";

hindex2.hstatic1="<b>Static IP : </b>This setting is most commonly used by Business class ISP.<br>";
hindex2.hstatic2="<b>Internet IP Address : </b>Enter the IP address provided by your ISP.<br>";
hindex2.hstatic3="<b>Subnet Mask : </b>Enter your subnet mask<br>";

hindex2.hpptp1="<b>PPTP : </b>This setting is most commonly used by DSL providers.<br>";
hindex2.hpptp2="<b>Internet IP Address : </b>Enter the IP address provided by your ISP.<br>";
hindex2.hpptp3="<b>Subnet Mask : </b>Enter your subnet mask<br>";
hindex2.hpptp4="<b>Gateway : </b>Enter your ISP's gateway address<br>";

hindex2.hl2tp1="<b>L2TP : </b>This setting is used by some ISP's in Europe.<br>";
hindex2.hl2tp2="<b>User Name : </b>Enter the user name provided by your ISP.<br>";
hindex2.hl2tp3="<b>Password : </b>Enter the password provided by your ISP.<br>";

hindex2.hhb1="<b>Telstra Cable : </b>This setting is most commonly used by DSL providers.<br>";
hindex2.hhb2="<b>User Name : </b>Enter the user name provided by your ISP.<br>";
hindex2.hhb3="<b>Password : </b>Enter the password provided by your ISP.<br>";

hindex2.right1="<b>Host Name : </b>Enter the host name provided by your ISP.<br>";
hindex2.right2="<b>Domain Name : </b>Enter the domain name provided by your ISP.<br>";
hindex2.right3="<b>Local IP Address : </b>This is the address of the router.<br>";
hindex2.right4="<b>Subnet Mask : </b>This is the subnet mask of the router.<br><br><br>";
hindex2.right5="<b>DHCP Server : </b>Allows the router to manage your IP addresses.<br>";
hindex2.right6="<b>Starting IP Address : </b>The address you would like to start with.<br>";
hindex2.right7="<b>Time Setting : </b>Choose the time zone you are in.  The router can also adjust automatically for daylight savings time.";
hindex2.hdhcps1="<b>Maximum number of DHCP Users : </b>You may limit the number of addresses your router hands out.<br>";

var errmsg2 = new Object();
errmsg2.err0="The HeartBeat Server IP Address is incorrect.";
errmsg2.err1="Delete the Entry?";
errmsg2.err2="You must input an SSID.";
errmsg2.err3="Please enter a Shared Key.";
errmsg2.err4=" has illegal hexadecimal digits or over 63 characters.";
errmsg2.err5="The Key must be between 8 and 63 ASCII characters or 64 hexadecimal digits.";
errmsg2.err6="You must enter a key.";
errmsg2.err7="The key length is incorrect.";
errmsg2.err8="Please enter a Passphase.";
errmsg2.err9="The total checks exceed 40 counts.";
errmsg2.err10="Spaces are not allowed.";
errmsg2.err11="After finished all actions, click the Apply button to save the settings.";
errmsg2.err12="You must input a Service Name.";
errmsg2.err13="The Service Name have exist.";
errmsg2.err14="The LAN IP Address or Subnet Mask is incorrect.";

var trigger2 = new Object();
trigger2.ptrigger="Port Range Triggering";
trigger2.qos="QoS";
trigger2.trirange="Triggered Range";
trigger2.forrange="Forwarded Range";
trigger2.trirange1="Triggered Range";
trigger2.forrange1="Forwarded Range";
trigger2.sport="Start Port";
trigger2.eport="End Port";
trigger2.right1="Application Enter the application name of the trigger. <b>Triggered Range</b> For each application, list the triggered port number range.  Check with the Internet application documentation for the port number(s) needed.<b>Start Port</b> Enter the starting port number of the Triggered Range.<b>End Port</b> Enter the ending port number of the Triggered Range.  <b>Forwarded Range</b> For each application, list the forwarded port number range.  Check with the Internet application documentation for the port number(s) needed.  <b>Start Port</b> Enter the starting port number of the Forwarded Range.  <b>End Port</b> Enter the ending port number of the Forwarded Range.";

var bakres2 = new Object();
bakres2.conman="Config Management";
bakres2.bakconf="Back Up Configuration";
bakres2.resconf="Restore Configuration";
bakres2.bakres="Back Up and Restore";
bakres2.file2res="Please select a file to restore.";
bakres2.bakbutton="Back Up Configuration";
bakres2.resbutton="Restore Configuration";
bakres2.right1="You may backup your current configuration in case you need to reset the router back to its factory default settings.";
bakres2.right2="You may click the Back up button to backup your current configuration.";
bakres2.right3="Click the Browse button to browse for a configuration file that is currently saved on your PC.";
bakres2.right4="Click Restore to overwrite all current configurations with the ones in the configuration file.";

var qos = new Object();
qos.uband="Upstream Bandwidth";
qos.bandwidth="Bandwidth";
qos.dpriority="Device Priority";
qos.priority="Priority";
qos.dname="Device name";
qos.low="Low";
qos.medium="Medium";
qos.high="High";
qos.highest="Highest";
qos.eppriority="Ethernet Port Priority";
qos.flowctrl="Flow Control";
qos.appriority="Application Priority";
qos.specport="Specific Port";
qos.appname="Application Name";
qos.alert1="Port value is out of range [0 - 65535]";
qos.alert2="Start port value is larger than end port value";
qos.confirm1="Setting multiple devices, ethernet port or application to high priority may negate the effect of QoS.\nAre you sure you want to proceed?";

qos.optgame="Optimize Gaming Applications";
qos.wlqos2="Wireless QoS";
qos.wqos="Wired QoS";
qos.wlqos="WMM Support";
qos.edca_ap="EDCA AP Parameters";
qos.edca_sta="EDCA STA Parameters";
qos.wme="WMM Support";
qos.noack="No Acknowledgement";
qos.apsdsupp="APSD Support";
qos.defdis="(Default : Disable)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Forced";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service)";
qos.intqccpri="Internet Access Priority";
qos.category="Category";
qos.mediumrec="Medium (Recommended)";
qos.normal="Normal";
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
qos.addapp="Add a New Application";
qos.onlinegame="Online Games";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tourment";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.: Shadow of Chernobyl";
qos.worldofwar="World Of Warcraft";
qos.suprecomm="Supreme Commander";
qos.thesims2="The Sims 2";
qos.titanquest="Titan Quest: Immortal Throne";
qos.battlefield="Battlefield 2142";
qos.halflife2="Half-Life 2: Episode One";
qos.heroesofmight="Heroes of Might & Magic V";
qos.theelderscrolls="The Elder Scrolls IV";
qos.guildwarsfactions="Guild Wars Factions 1 and 2";
qos.neverwinternights2="Neverwinter Nights 2";
qos.enemyterritory="Enemy Territory";
qos.worldinconflict="World In Conflict";
qos.callofduty4="Call of Duty 4";
qos.sinofasolarempire="Sins of a Solar Empire";
qos.halflifetob="Half-Life 2: The Orange Box";
qos.crysis="Crysis";
qos.frontlines="Frontlines";
qos.warhanmer4k="Warhammer 40,000: Dawn of War: Soulstorm";
qos.addgame="Add a New Game";
qos.entername="Enter a Name";
qos.etherport="Ethernet Port";
qos.voicedevice="Voice Device";
qos.voicemac="My Voice Device's MAC Address";
qos.recommend="Recommended";
qos.game="Game";
qos.mymac="My Current PC's MAC Address";

qos.right1="Two types of Quality of Service features are available, Wired QoS which controls devices plugged in to the router with a Ethernet cable, and Wireless QoS, which control devices that are wirelessly connected to the router."
qos.right2="<b>Device Priority :</b>  You may specify priority for all traffic from a device on your network by giving the device a Device Name, specifying priority and entering its MAC address."
qos.right3="<b>Ethernet Port Priority :</b> You may control your data rate according to which physical LAN port your device is plugged into. You may assign High or Low priority to data traffic from devices connected on LAN ports 1 through 4."
qos.right4="<b>Application Priority :</b> You may control your data rate with respect to the application that is consuming bandwidth. Check <b>Optimize Gaming Applications</b> to automatically allow common game application ports to have a higher priority.  You may customize up to eight applications by entering the port number they use."
qos.right5="Wireless QoS is also referred to as <b>Wi-Fi MultiMedia<sup>TM</sup> (WMM)</b> by the Wi-Fi Alliance<sup>TM</sup>.  Select Enable to utilize WMM if you are using other wireless devices that are also WMM certified."
qos.right6="<b>No Acknowledgement :</b>  Enable this option if you would like to disable acknowledgement.  If this option is enabled, the router will not re-send data if an error occurs."
qos.exist = "This setting already exists.";

var vpn2 = new Object();
vpn2.right1="You may choose to enable PPTP, L2TP of IPSec passthrough to allow your network devices to communicate via VPN.";

var fail = new Object();
fail.msg="The values you entered are invalid. Please try again.";

var pactrl = new Object();
pactrl.pactrl ="Parental Control";
pactrl.accsign ="Account Sign-Up";
pactrl.center1 ="The Linksys Parental Control solution helps keep your family safe while<br>they surf the internet";
pactrl.center2 ="<li>Easy to set-up</li><br><li>Protect every computer in your home from your Linksys Router</li><br><li>Reports help you monitor web, e-mail and IM usage</li>";
pactrl.center3 ="** Signing up for this service will disable your router's built-in Internet Access Policies";
pactrl.manageacc ="Manage Account";
pactrl.center4 ="Managing your Parental Control Account";
pactrl.signparental ="Sign up for Parental Control service";
pactrl.moreinfo ="More Info";
pactrl.isprovision ="device is provisioned";
pactrl.notprovision ="device not provisioned";
pactrl.right1 ="The Parental Control screen allows you to sign up and manage your Linksys Parental Controls account. The Linksys Parental Control Service gives you powerful tools to control the availability of Internet services, access, and features, customizable for each member of your family.";

var satusroute = new Object();
satusroute.localtime ="Not Available";

var succ = new Object();
succ.autoreturn ="You will be returned to the previous page after several seconds.";
succ.return_desc = "You will turn to the Safe Upgrade page after several seconds.";
succ.return_index = "You will turn to the Basic Setup page after several seconds.";
succ.interrupt_desc = "Never interrupt, please wait...";

var gn = new Object();
gn.gnip="Guest Network IP";
gn.maclist="MAC Address List";
gn.glist="Wireless Guest List";
gn.gnssid="Guset Network Name(SSID)";
gn.err1="The Guest Network IP  address cannot be the same subnet as the LAN address.";
gn.err2="The number of MAC exceeds the limit! You need to delete one first.";
gn.expire_time="Account Duration";
gn.minutes="hours";
gn.domainname="Guest Network Domain Name";
gn.bc="Bandwidth Control";
gn.upstream="Up Stream";
gn.downstream="Down Stream";
gn.kbps="kbps";
 
gn.title="Guest access";
gn.tips0="Incorrect password, please re-enter";
gn.tips1="Enter the password to access this Hotspot.";
gn.login="Login";
gn.err3="Wireless 5G SSID same as Guest SSID, Please Change.";
gn.err4="Wireless 2.4G SSID same as Guest SSID, Please Change.";
gn.err5="The LAN IP address cannot be the same subnet as the Guest Network IP address.";
gn.err6="The 192.168.33.0/24 network (IP addresses 192.168.33.0 - 255) is reserved for the Wireless Guest Network. Please use a different network address.";
gn.err7="The Guest Access feature is disabled because your router resides on the 192.168.33.0 network, which is reserved for that feature.";
gn.tips6="Enter the guest access password to access the Internet. Ask the owner if you don't know the password. The guest access password can be found using Linksys Connect.";
gn.dv="Desktop view";
gn.mv="Mobile view";
gn.context="Enter the guest access password to access the Internet. Ask the owner if you don't know the password. The guest access password can be found using Linksys Connect.";
gn.nat="Guest Access will not be available if NAT is disabled.  Proceed with saving your changes?";
