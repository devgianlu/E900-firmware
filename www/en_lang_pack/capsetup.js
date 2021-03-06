var topmenu = new Object();
topmenu.basicsetup="Basic Setup";
topmenu.macaddrclone="MAC Address Clone";
topmenu.advrouting="Advanced Routing";
topmenu.gns="Guest Network Setting";
topmenu.ipv6setup="IPv6 Setup"; 

var lefemenu = new Object();
lefemenu.intersetup="Internet Setup";
lefemenu.conntype="Internet Connection Type";
lefemenu.netsetup="Network Setup";
lefemenu.netaddr="Network Address";
lefemenu.dhcpserverset="DHCP Server Setting";
lefemenu.optset="Optional Settings";
lefemenu.requireisp="(required by some Internet Service Providers)";
lefemenu.routerip="Router Address";
lefemenu.timeset="Time Settings";
lefemenu.optset="Optional Settings";
lefemenu.advrouting="Advanced Routing";
lefemenu.staticroute="Static Routing";

var setupcontent = new Object();
setupcontent.dhcp="Automatic Configuration - DHCP";
setupcontent.interipaddr="Internet IP Address";
setupcontent.stadns1="Static DNS 1";
setupcontent.stadns2="Static DNS 2";
setupcontent.mtumanual="Manual";
setupcontent.mtusize="Size";
setupcontent.localipaddr="Local IP Address";
setupcontent.maxdhcpusr="Maximum Number of &nbsp;Users";
setupcontent.dhcprange="IP Address Range";
setupcontent.clileasetimemin="minutes (0 means one day)";
setupcontent.autoadjtime="Automatically adjust clock for daylight saving changes.";
setupcontent.conndemand="Connect on Demand: Max Idle Time";
setupcontent.min="Min.";
setupcontent.minute="Minute";
setupcontent.keepalive="Keep Alive: Redial Period";
setupcontent.sec="Sec.";
setupcontent.second="Second";
setupcontent.srvipaddr="Server IP Address";
setupcontent.pptpdhcp="Obtain an IP Address Automatically";
setupcontent.pptpstaticip="Specify an IP Address";
setupcontent.pptpdns1="DNS 1";
setupcontent.pptpdns2="DNS 2";
setupcontent.pptpdns3="DNS 3";
setupcontent.pptpsip="PPTP Server IP Address";
setupcontent.dhcp_ipv6="Automatic Configuration - Native IPv6"; 
setupcontent.static_ipv6="Static Configuration - Native IPv6"; 
setupcontent.pppoe_ipv6="PPPoE - Native IPv6"; 
setupcontent.pppoe_ipv6tunnel="PPPoE - Native IPv6 and 6rd Tunnel"; 
setupcontent.tunnel="6rd Tunnel"; 
setupcontent.dhcpv6_client="DHCPv6 Client"; 
setupcontent.duid="DUID"; 
setupcontent.msg="If blank, the router will compute the value"; 
setupcontent.dhcpv6_server_settings="DHCPv6 Server Settings"; 
setupcontent.dhcpv6_server="DHCPv6 Server"; 
setupcontent.subnet_prefix_length="Subnet Prefix Length";
setupcontent.prefix_addr="Prefix Address";
setupcontent.auto_config="Automatic Configuration";
setupcontent.manual_config="Manual Configuration";
setupcontent.prefix="Prefix";
setupcontent.prefix_length="Prefix Length";
setupcontent.relay="Border Relay";
setupcontent.ipv4_masklength="IPv4 Address Mask";
setupcontent.ipv6auto = "IPv6 - Automatic";
setupcontent.ipv6autotunnel = "IPv6 - Automatic and 6rd Tunnel";
setupcontent.autoconfig="Automatic Configuration";
setupcontent.aftrinfo="ISP Server (AFTR) Address";

var ddns = new Object();
ddns.srv="DDNS Service";
ddns.disable="Disable";
ddns.dyndns="DynDNS.org";
ddns.tzo="TZO.com";
ddns.emailaddr="Email Address";
ddns.ddns3322="3322.com";
ddns.peanuthull="PeanutHull.com";
ddns.mailexchange="Mail Exchange";
ddns.backupmx="Backup MX";
ddns.wildcard="Wildcard";
ddns.system="System";
ddns.dynamic="Dynamic";
ddns.static1="Static";
ddns.custom="Custom";
ddns.tzokey="TZO Password";
ddns.mailexchangeopt="Mail Exchange (Optional)";

var macclone = new Object();
macclone.usrdef="User Defined Entry";
macclone.clonepcmac="Clone My PC's MAC";

var advroute = new Object();
advroute.dynrouting="Dynamic Routing";
advroute.rip="RIP";
advroute.waninternet="Internet (WAN)";
advroute.selsetnum="Select set number";
advroute.routename="Enter Route Name";
advroute.deslanip="Destination LAN IP";
advroute.showroutetbl="Show Routing Table";
advroute.delentries="Delete This Entry";
advroute.routetbllist="Routing Table Entry List";
advroute.routeentries="Route Entries";
advroute.routetbl="Routing Table";
advroute.dynroutingrip="Dynamic Routing (RIP)";

var dhcp = new Object();
dhcp.select="Select";
dhcp.selectcli="Select Clients from &nbsp;<BR>DHCP Tables";
dhcp.manualadd="Manually Add Client";
dhcp.entercli="Enter Client Name";
dhcp.assignip="Assign IP Address";
dhcp.tomac="To This MAC Address";
dhcp.clires="Clients Already Reserved";

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
