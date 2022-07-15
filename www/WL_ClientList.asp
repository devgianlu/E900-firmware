<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Wireless Client List</TITLE>
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
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capstatus.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=javascript>
document.title = wlanbutton.clilist;

function to_add(F)
{
	F.submit_button.value="WL_ClientList";
	F.change_action.value="gozila_cgi";
	F.submit_type.value="add_mac";
	F.submit();
}

function SoryBy(F)
{
	F.submit_button.value="WL_ClientList";
	F.change_action.value="gozila_cgi";
	F.submit();
}
function init()
{
	<% onload("WL_ClientList", "setTimeout('opener.window.location.reload();',500);"); %>
	window.focus();

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function refresh()
{
	if ( close_session == "1" )
	{
		document.location.replace("WL_ClientList.asp");
	}
	else
	{
		document.location.replace("WL_ClientList.asp;session_id=<% nvram_get("session_key"); %>");
	}
}

</SCRIPT>

</HEAD>
<BODY bgColor=#808080 onload=init()>
<CENTER>
<FORM name=wireless method=<% get_http_method(); %> action=apply.cgi>
<TABLE borderColor=#5b5b5b  cellSpacing=0 cellPadding=0 width=733 bgColor=#ffffff border=0>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<TABLE borderColor=#5b5b5b cellSpacing=0 cellPadding=0 width=738 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH colSpan=2 bordercolor="#FFFFFF">
      <TABLE height=1 cellSpacing=3 width=575 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH  height=1>
            <TABLE cellSpacing=0 width=464 bgColor=#ffffff border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH vAlign=bottom align=right bgColor=#FFFFFF>
                <div align="left" style="width: 672; height: 338">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="731" height="79">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="165"> &nbsp;</td>
                      <td height="16" bgcolor="#2971b9" width="566" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="731"> </td>
                    </tr>
                    <tr>
			                      <td height="57" bgcolor="#2971b9" width="731" colspan="3">
		<img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#2971b9"> &nbsp;</td>
                      <td height="16" width="566" bgcolor="#2971b9" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="15" width="566" bgcolor="#E7E7E7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="7" width="566" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="165">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(wlanbutton.clilist)</script>&nbsp;&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="566" bgcolor="#FFFFFF" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="25" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">
			<p align=<% ui_position("rtl_left", ""); %>><span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt"><script>Capture(share.sortby)</script>&nbsp;&nbsp;&nbsp; </font></span></td>
                      <td height="25" width="27" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="25" width="539" bgcolor="#FFFFFF"> <FONT face=Arial color=blue>
    			<SELECT size=1 name=sortby onchange=SoryBy(this.form)> 
			    <option value=ip  <% nvram_selmatch("sortby","ip","selected"); %>><script>Capture(share.ipaddr)</script></option>
			    <option value=mac  <% nvram_selmatch("sortby","mac","selected"); %>><script>Capture(share.macaddr)</script></option>
        	            <option value=status  <% nvram_selmatch("sortby","status","selected"); %>><script>Capture(bmenu.statu)</script></option>
		            <option value=iface  <% nvram_selmatch("sortby","iface","selected"); %>><script>Capture(share.inter_face)</script></option>
			    <option value=name  <% nvram_selmatch("sortby","name","selected"); %>><script>Capture(share.cliname)</script></option>
             	        </SELECT></FONT></td>
                          </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> &nbsp;</td>
                      <td height="16" width="27" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="16" width="539" bgcolor="#FFFFFF"> <HR color="#CCCCCC" size="1"> </td>
                    </tr>
                    <tr>
                      <td height="19" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> &nbsp;</td>
                      <td height="1" width="27" bgcolor="#FFFFFF" rowspan="4"> &nbsp;</td>
                      <td height="1" width="539" bgcolor="#FFFFFF" rowspan="4">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="552">
              <tr>
                <td height="25" width="176" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.cliname)</script></font></span></td>
                <td height="25" width="107" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.inter_face)</script></font></span></td>
                <td height="25" width="112" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.ipaddr)</script></font></span></td>
                <td height="25" width="111" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.macaddr)</script></font></span></td>
                <td height="25" width="87" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(bmenu.statu)</script></font></span></td>
                <td height="25" width="185" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <p style="margin-top: 0; margin-bottom: 0">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(wlanfilter.savetomac)</script> </font></span></td>
              </tr>
<script>
var table = new Array();
var sortby = "<% nvram_selget("sortby"); %>";
var wl_maclist = "<% nvram_get("wl_maclist"); %>";

<% wireless_active_table("all_table"); %>

function AAA(name,ip,mac,iface,status, check)
{
	this.name = name;
	this.ip = ip;
	this.mac = mac;
	this.iface = iface;
	this.status = status;
	this.check = check;
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
function ByStatus(a,b)
{
	if( a.status > b.status ) return 1;
	else if (a.status == b.status ) return 0;
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
else if(sortby == "status") {
	table.sort(ByStatus);
}
else if(sortby == "iface") {
	table.sort(ByIface);
}

var i = 0;
var ip = new Array();
var ret = 0;
var check = "";

var macs = new Array();
macs = wl_maclist.split(' ');

for(i=0;;i++) {
	if(table.length == 0) {
		table[0] = new AAA(wlanadv.none,wlanadv.none,wlanadv.none,wlanadv.none,wlanadv.none,wlanadv.none);
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

	if(table[i].status == "1")
		table[i].status = stacontent.conn;
	else if (table[i].status == "0")
		table[i].status = hstatrouter2.disconnected;

	check = "";
	for(var j=0 ; j<macs.length ; j++) {
		if(macs[j] == table[i].mac) {
			check = "checked";
			break;
		}
	}

        document.write("<tr>");
        document.write("<td height=\"25\" width=\"176\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].name+"</font></td>");
        document.write("<td height=\"25\" width=\"107\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].iface+"</font></td>");
        document.write("<td height=\"25\" width=\"112\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].ip+"</font></td>");
        document.write("<td height=\"25\" width=\"111\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].mac+"</font></td>");
        document.write("<td height=\"25\" width=\"87\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].status+"</font></td>");
        document.write("<td height=\"25\" width=\"185\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" size=\"1\">");
	if(ret == 1)	
        	document.write("</font></td></tr>");
	else
        	document.write("<INPUT type=checkbox value="+table[i].mac+" name=m"+i+" "+check+"></font></td></tr>");

        if(ret == 1)
		break;
}
</script>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td height="19" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">
			&nbsp;</td>
                          </tr>
                    <tr>
                      <td height="19" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">
			&nbsp;</td>
                          </tr>
                    <tr>
                      <td height="18" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">
			&nbsp;</td>
                          </tr>
                    <tr>
                      <td height="45" width="165" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium">
			&nbsp;</td>
                      <td height="45" width="55" bgcolor="#FFFFFF">
			&nbsp;</td>
                      <td height="45" width="511" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="424" height="19">
              <tr>
                <td height="15" width="100" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:to_add(document.wireless)"><script>Capture(portsrv.add)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="100" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:location.replace('WL_ClientList.asp')"><script>Capture(sbutton.refresh)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="100" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:window.close()"><script>Capture(sbutton.close)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="101">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"></font></span></td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
