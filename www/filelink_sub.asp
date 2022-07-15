<link rel="stylesheet" type="text/css" href="../style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="../style_rtl.css">
<% ui_position("invmatch", "-->"); %>
<style fprolloverstyle>
A:hover {color: #00FFFF}
.small A:hover {color: #00FFFF}
</style>
<script src="../common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/help.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capapp.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capsetup.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capstatus.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/capadmin.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/timezone.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="../<% get_lang(); %>_lang_pack/storage.js"></SCRIPT>
<script language="javascript">
/*********1*********2*********3*********4*********5
**************************************************/
var MAINFUN 	= 0; 
var SUBFUN 	= 1;
var ISHR 	= 2; 
var ISHRS 	= 3; 
var ISBLANK 	= 4; 
var ISTAIL 	= 5;
var ISHELP_TAIL = 6; 
var ISHELP_LINK = 7;
var ISHELP      = 8;
var ISHELP2      = 9;
var SelectItemIdx = 0;
var SelectSubItem = 0;
var DNAME = 0; 
var DLINK = 1; 
var DHELP = 2; 
var DMAIN = 3;
var WFUN = 645; // fun width
var SFUN = 400;
	
var Menu = new Array(
		new Array(
			new Array(topmenu.basicsetup,  "../index.asp",  "<% get_lang(); %>_help/Basic_Setup.asp",bmenu.setup),
			new Array(share.ddns,	       "DDNS.asp",   "<% get_lang(); %>_help/DDNS.asp"),
			new Array(topmenu.macaddrclone,"WanMAC.asp", "<% get_lang(); %>_help/MAC_Address_Clone.asp" ),
			new Array(topmenu.advrouting,  "Routing.asp","<% get_lang(); %>_help/Advanced_Routing.asp" )
<% support_invmatch("HSIAB_SUPPORT", "1", "/*"); %>
			,
			new Array("Hot Spot",	       "HotSpot_Admin.asp" , "")
<% support_invmatch("HSIAB_SUPPORT", "1", "*/"); %>
		),
		new Array(
			new Array(wlantopmenu.basicset,   "../Wireless_Basic.asp",   "<% get_lang(); %>_help/Basic_Wireless_Settings.asp",bmenu.wireless),
			new Array(wlantopmenu.security,   "WL_WPATable.asp",      "<% get_lang(); %>_help/Wireless_Security.asp"),
			new Array(newui.gacs,"Guest_Access.asp","<% get_lang(); %>_help/Guest_Access.asp"),
			new Array(wlantopmenu.macfilter,  "Wireless_MAC.asp",     "<% get_lang(); %>_help/Wireless_MAC_Filter.asp")
			//new Array(wlantopmenu.advwireless,"Wireless_Advanced.asp","<% get_lang(); %>_help/Advanced_Wireless_Settings.asp")
		),
		new Array
		(
	        new Array(share.firewall ,     "../Firewall.asp" ,"<% get_lang(); %>_help/Firewall.asp" ,bmenu.security),
			new Array(secleftmenu.vpnpass ,"VPN.asp"      ,"<% get_lang(); %>_help/VPN.asp")
		),
<% support_invmatch("STORAGE_SUPPORT", "1", "/*"); %>
 		new Array(
			new Array(FUNST.Disk,   "Disk_Management.asp",   "../<% get_lang(); %>_help/Disk.asp",bmenu.storage),
			<% support_invmatch("MEDIA_SERVER_SUPPORT", "1", "//"); %>new Array(FUNST.MS,   "Media_Server.asp",      "../<% get_lang(); %>_help/Media_Server.asp"),
			new Array(FUNST.FTP,  "FTP_Server.asp",     "../<% get_lang(); %>_help/FTP_Server.asp"),
			new Array(bmenu.admin,"NAS_Administration.asp","../<% get_lang(); %>_help/Storage_Administration.asp")
		),
<% support_invmatch("STORAGE_SUPPORT", "1", "*/"); %>
		new Array
		(
                        new Array(pctrl.pcar,"../PC_Filter.asp","<% get_lang(); %>_help/Internet_Access_Policy.asp",bmenu.accrestriction)
		),
		new Array
		(
				
<% support_invmatch("SINGLE_FORWARD_SUPPORT", "1", "/*"); %>
			new Array(apptopmenu.singleport,"../SingleForward.asp","<% get_lang(); %>_help/Single_Port_Forwarding.asp", bmenu.applications+"  & "+bmenu.gaming),
<% support_invmatch("SINGLE_FORWARD_SUPPORT", "1", "*/"); %>
			new Array(apptopmenu.portrange, "Forward.asp",	    "<% get_lang(); %>_help/Port_Range_Forwarding.asp")
<% support_elsematch("PORT_TRIGGER_SUPPORT", "1", ",","/*"); %>
			new Array(trigger2.ptrigger,	"Triggering.asp",   "<% get_lang(); %>_help/Port_Range_Triggering.asp")
<% support_invmatch("PORT_TRIGGER_SUPPORT", "1", "*/"); %>
<% support_elsematch("UPNP_FORWARD_SUPPORT", "1",",","/*"); %>
		        new Array("UPnP Forward",       "Forward_UPnP.asp", "")
<% support_invmatch("UPNP_FORWARD_SUPPORT", "1", "*/"); %>
			,
			new Array(share.dmz,		"DMZ.asp",	    "<% get_lang(); %>_help/DMZ.asp")
<% support_elsematch("HW_QOS_SUPPORT", "1",",", "/*"); %>
			new Array(trigger2.qos,		"QoS.asp",	    "<% get_lang(); %>_help/QoS.asp")
<% support_invmatch("HW_QOS_SUPPORT", "1", "*/"); %>
		),
		new Array(
			new Array(adtopmenu.manage,	"../Management.asp",      "<% get_lang(); %>_help/Management.asp", bmenu.admin),
			new Array(adtopmenu.log,	"Log.asp",	       "<% get_lang(); %>_help/Log.asp"),
			new Array(adtopmenu.diag,	"Diagnostics.asp",     "<% get_lang(); %>_help/Diagnostics.asp"),
			new Array(adtopmenu.facdef,	"Factory_Defaults.asp",""),
			new Array(adtopmenu.upgarde,	"Upgrade.asp"	      ,"")
		),
		new Array(
			new Array(share.router,        "../Status_Router.asp",     "<% get_lang(); %>_help/Status_Router.asp", bmenu.statu),
			new Array(statopmenu.localnet, "Status_Lan.asp",        "<% get_lang(); %>_help/Status_Local_Network.asp"),
			new Array(bmenu.wirelessnet,   "Status_Wireless.asp",   "<% get_lang(); %>_help/Status_Wireless_Network.asp"),
			new Array(newui.ports,   "Status_Ports.asp",   "<% get_lang(); %>_help/Status_Ports.asp")
<% support_invmatch("PERFORMANCE_SUPPORT", "1", "/*"); %>
			,
			new Array("System Performance","Status_Performance.asp","")
<% support_invmatch("PERFORMANCE_SUPPORT", "1", "*/"); %>
		)
	);
function getpos(surl)
{
   var i,j;
	<% support_invmatch("STORAGE_SUPPORT", "1", "/*"); %>
	if(surl.indexOf("storage/")!= -1)
	{
		surl = surl.substring(8);
	}
	if(surl == "Claim_Disk.asp")
	{
		surl = "Disk_Management.asp";
	}
	<% support_invmatch("STORAGE_SUPPORT", "1", "*/"); %>
	
   for(i=0; i<Menu.length; i++)
   {
        for (j=0; j<Menu[i].length; j++)
        {
            if ( surl == Menu[i][j][DLINK] )
            {
                      SelectItemIdx = i ;
                      SelectSubItem = j ;
                      break;
            }
        }	
   }
   if ( SelectItemIdx == -1 &&  surl == "/" )
   {
        SelectItemIdx = 0 ;
        SelectSubItem = 0 ;
   }
}
</script>
