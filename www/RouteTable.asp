<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Routing Table</TITLE>
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
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=javascript>
document.title = advroute.routetbl;
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";

function refresh()
{
	if ( close_session == "1" )
	{
		document.location.replace("RouteTable.asp");
	}
	else
	{
		document.location.replace("RouteTable.asp;session_id=<% nvram_get("session_key"); %>");
	}
}
</SCRIPT>

</HEAD>
<BODY bgColor=#808080>
<CENTER>
<FORM>
<TABLE borderColor=#5b5b5b height=282 cellSpacing=0 cellPadding=0 width=462 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH width=901 colSpan=2 height=282 bordercolor="#FFFFFF">
      <TABLE height=1 cellSpacing=3 width=542 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=751 height=1>
            <TABLE cellSpacing=0 width=448 bgColor=#ffffff border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0" align="center"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="651" height="101">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="165"> &nbsp;</td>
                      <td height="16" bgcolor="#2971b9" width="486" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="651"> </td>
                    </tr>
                    <tr>
		                      <td height="57" bgcolor="#2971b9" width="651" colspan="3">
	<img border="0" src="/image/linksys_logo.png"  class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#2971b9"> &nbsp;</td>
                      <td height="16" width="486" bgcolor="#2971b9" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="15" width="486" bgcolor="#E7E7E7" colspan="2"> </td> </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="7" width="486" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="165">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(advroute.routetbl)</script>&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="486" bgcolor="#FFFFFF" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="88" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> &nbsp;</td>
                      <td height="1" width="23" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="1" width="463" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="433">
              <tr>
                <td height="25" width="132" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(advroute.deslanip)</script></font></span></td>
                <td height="25" width="100" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.submask)</script></font></span></td>
                <td height="25" width="100" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.gateway)</script></font></span></td>
                <td height="25" width="101" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
		<!--John@200.04.12-->
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.hop)</script></font></span></td>
                <td height="25" width="100" align="center" style="border-left-style: solid; border-left-width:
1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.inter_face)</script></font></span></td>
              </tr>
<script language=javascript>
var table = new Array(
<% dump_route_table(""); %>
);
var i = 0;
var ret;
for(;;){
	if(!table[i]) {
		if(i == 0) {
			table[i] = wlanadv.none;
			table[i+1] = wlanadv.none;
			table[i+2] = wlanadv.none;
			table[i+3] = wlanadv.none;
			table[i+4] = wlanadv.none;
			ret = 1;		
		}
		else
			break;
	}
	else {
		if(table[i+4] == "LAN")	table[i+4] = share.lanwireless;
		else if(table[i+4] == "WAN") table[i+4] = advroute.waninternet;
	}
        if(parseInt(Number(table[i+3]))>15){
                i = i + 5;
                continue;
        }
	document.write("<tr>");
	document.write("<td height=\"25\" width=\"132\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i]+"</font></td>");
	document.write("<td height=\"25\" width=\"132\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i+1]+"</font></td>");
	document.write("<td height=\"25\" width=\"132\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i+2]+"</font></td>");
	document.write("<td height=\"25\" width=\"132\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
	document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+parseInt(Number(table[i+3])+1)+"</font></td>");
        document.write("<td height=\"25\" width=\"132\" align=\"center\" style=\"border-style:solid; border-width:1; \" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i+4]+"</font></td>");
	document.write("</tr>");

	if(ret == 1)
		break;
	
	i = i + 5;
}
</script>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td height="45" width="165" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"> &nbsp;</td>
                      <td height="45" width="51" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="45" width="435" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="234" height="19">
              <tr>
                <td height="15" width="106" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:refresh()"><script>Capture(sbutton.refresh)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="107" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:window.close()"><script>Capture(sbutton.close)</script></A></font></span></td>
                <td height="15" width="14"></td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
