<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>DHCP Client Table</TITLE>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="style_rtl.css">
<% ui_position("invmatch", "-->"); %>
<style fprolloverstyle>
A:hover {color: #00FFFF}
.small A:hover {color: #00FFFF}
</style>
<SCRIPT src="common.js"></SCRIPT>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/help.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capapp.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsetup.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capstatus.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=javascript>
document.title = stabutton.dhcpclitbl;
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";

function to_select(mac)
{
	parent.window.opener.document.dmz.dmz_mac.value = mac ;
	self.close();
}
function SoryBy(F)
{
	F.submit_button.value="DHCP_Table_Select";
	F.change_action.value="gozila_cgi";
	F.submit();
}

function refresh()
{
	if ( close_session == "1" )
	{
		document.location.replace("DHCP_Table_Select.asp");
	}
	else
	{
		document.location.replace("DHCP_Table_Select.asp;session_id=<% nvram_get("session_key"); %>");
	}
}

function init()
{
	window.focus();

	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>

</HEAD>
<BODY bgColor=#808080 onload=init()>
<CENTER>
<form method=<% get_http_method(); %> action=apply.cgi name=dhcp>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=small_screen>
<input type=hidden name=ip>
<TABLE borderColor=#5b5b5b height=282 cellSpacing=0 cellPadding=0 width=690 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH  colSpan=2 height=282 bordercolor="#FFFFFF">
      <TABLE height=1 cellSpacing=3 width=690 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH  height=1>
            <TABLE cellSpacing=0 width=690 bgColor=#ffffff border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>
                <div align="left" style="width: 698; height: 304">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="698" height="79">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="165"> &nbsp;</td>
                      <td height="16" bgcolor="#2971b9" width="533" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="698"> </td>
                    </tr>
                    <tr>
			<td height="57" bgcolor="#2971b9" width="698" colspan="3">
       <img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#2971b9"> &nbsp;</td>
                      <td height="16" width="533" bgcolor="#2971b9" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="15" width="533" bgcolor="#E7E7E7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="7" width="533" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="165">
                <p align="right"><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(stabutton.dhcpclitbl)</script>&nbsp;&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="533" bgcolor="#FFFFFF" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="25" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">
			<p align="right"><span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt"><script>Capture(dhcptbl.tosortby)</script>&nbsp;&nbsp;&nbsp;
            </font></span></td>
                      <td height="25" width="27" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="25" width="506" bgcolor="#FFFFFF">
                <FONT face=Arial color=blue>
	    <SELECT onchange=SoryBy(this.form) name=sortby size=1> 
		    <option value=ip <% nvram_selmatch("sortby","ip","selected"); %>><script>Capture(share.ipaddr)</script></option>
		    <option value=mac <% nvram_selmatch("sortby","mac","selected"); %>><script>Capture(share.macaddr)</script></option>
		    <option value=iface <% nvram_selmatch("sortby","iface","selected"); %>><script>Capture(share.inter_face)</script></option>
		    <option value=name <% nvram_selmatch("sortby","name","selected"); %>><script>Capture(share.cliname)</script></option>
                </SELECT></FONT></td>
                          </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> &nbsp;</td>
                      <td height="16" width="27" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="16" width="506" bgcolor="#FFFFFF"> <HR color="#CCCCCC" size="1"> </td>
                    </tr>
                    <tr>
                      <td height="75" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> &nbsp;</td>
                      <td height="1" width="27" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="1" width="506" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="509">
              <tr>
                <td height="25" width="221" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.cliname)</script></font></span></td>
                <td height="25" width="106" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.inter_face)</script></font></span></td>
                <td height="25" width="110" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.ipaddr)</script></font></span></td>
                <td height="25" width="119" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.macaddr)</script></font></span></td>
                <!--td height="25" width="106" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(dhcptbl.expires)</script></font></span></td-->
                <td height="25" width="73" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                &nbsp;</td>
              </tr>
<script language=javascript>
var table = new Array();
var sortby = "<% nvram_selget("sortby"); %>";

<% dumpleases("table","AAA"); %>

function AAA(name,ip,mac,time,iface)
{
	this.name = name;
	this.ip = ip;
	this.mac = mac;
	this.time = time;
	this.iface = iface;
}

function ByName(a,b)
{
	if( a.name > b.name ) return 1;
	else if (a.name == b.name ) return 0;
	else return -1;
}
function ByMac(a,b)
{
	if( a.mac > b.mac ) return 1;
	else if (a.mac == b.mac ) return 0;
	else return -1;
}
function ByIp(a,b)
{
	if( a.ip > b.ip ) return 1;
	else if (a.ip == b.ip ) return 0;
	else return -1;
}
function ByIface(a,b)
{
	if( a.iface > b.iface ) return 1;
	else if (a.iface == b.iface ) return 0;
	else return -1;
}

if(sortby == "") {
	sortby = "ip";
}

if(sortby == "name") {
	table.sort(ByName);
}
else if(sortby == "mac") {
	table.sort(ByMac);
}
else if(sortby == "ip") {
	table.sort(ByIp);
}
else if(sortby == "iface") {
	table.sort(ByIface);
}

var i = 0;
var ip = new Array();
var ret = 0;

for(i=0;;i++) {
	if(table.length == 0) {
		table[0] = new AAA(wlanadv.none,wlanadv.none,wlanadv.none,wlanadv.none,wlanadv.none);
		ret = 1;
	}
	else if(table.length == i) {
		break;
	}

	if(table[i].iface == "WL")
		table[i].iface = bmenu.wireless;
	else if(table[i].iface == "G")
		table[i].iface = bmenu.wireless+"-G";
	else if(table[i].iface == "B")
		table[i].iface = bmenu.wireless+"-B";
	else if(table[i].iface == "A")
		table[i].iface = bmenu.wireless+"-A";
	else if(table[i].iface == "N")
		table[i].iface = bmenu.wireless+"-N";
	else if(table[i].iface == "LAN")
		table[i].iface = "LAN";

	if(ret != 1) {
		ip = table[i].ip.split('.');
	}

        document.write("<tr>");
        document.write("<td height=\"25\" width=\"221\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].name+"</font></td>");
        document.write("<td height=\"25\" width=\"106\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].iface+"</font></span></td>");
        document.write("<td height=\"25\" width=\"110\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].ip+"</font></span></td>");
        document.write("<td height=\"25\" width=\"119\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].mac+"</font></span></td>");
        document.write("<td height=\"25\" width=\"106\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        //document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].time+"</font></span></td>");
        //document.write("<td height=\"25\" width=\"73\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
	document.write("<font face=\"Arial\" color=\"#5b5b5b\" size=\"2\"><b>");
	if(ret == 1)
		document.write("&nbsp;</b></font></td>");
	else
		document.write("<INPUT  style=\"FONT-SIZE: 8pt; font-family:Arial\" type=button value='"+sbutton.sel+"' onclick=to_select('"+table[i].mac+"')></b></font></td>");
        document.write("</tr>");

	if(ret == 1)
		break;

}
</script>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td height="45" width="165" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"> &nbsp;</td>
                      <td height="45" width="55" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="45" width="478" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="424" height="19">
              <tr>
                <td height="15" width="100" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:refresh()"><script>Capture(sbutton.refresh)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="100" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:window.close()"><script>Capture(sbutton.close)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="100">
                </td>
                <td height="12" width="8"></td>
                <td height="15" width="101">
                </td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
