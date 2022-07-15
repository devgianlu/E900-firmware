<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Traceroute</TITLE>
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
<script src="common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capapp.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capadmin.js"></SCRIPT>

<SCRIPT language=javascript>
document.title = adbutton.traceroute;
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";
var timerID = null ; 
var timerRunning = false ; 
var value=0;
var CLOSEFLG = 0 ; 
function sleep(n)   
{   
	var start=new Date().getTime();   
	while(true)
		if(new Date().getTime()-start>n)
			break;   
}

function to_close(F)
{
	to_stop(F);
	sleep(1000);
	self.close();
}

function to_stop(F)
{
	if ( timerRunning ) clearTimeout(timerID);
	timerRunning = false ; 
       	F.submit_button.value = "Traceroute";
	F.submit_type.value = "stop";
       	F.change_action.value = "gozila_cgi";
       	F.submit();
}

function Refresh()
{
	refresh_time = 3000;
	if (value>=1)
	{
		CLOSEFLG = 1 ; 
		if ( close_session == "1" )
		{
			window.location.replace("Traceroute.asp");
		}
		else
		{
			window.location.replace("Traceroute.asp;session_id=<% nvram_get("session_key"); %>");
		}
	}
	value++;
	timerID=setTimeout("Refresh()",refresh_time);
	timerRunning = true ; 
}
function init()
{
	<% onload("Traceroute", "Refresh();"); %>
	window.location.href = "#";

	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
function closeWindow()
{
	var F = document.tracert ; 
	if ( CLOSEFLG!=1 && CLOSEFLG!=0 ) to_stop(F);
}

function initflg(evt)
{
	if ( evt.clientY<=0 && CLOSEFLG!=2 )CLOSEFLG = 2;
}
</SCRIPT>

</HEAD>
<BODY bgColor=#808080 onload="init()" onbeforeunload="closeWindow();" onmousemove="initflg(event)">
<CENTER>
<FORM name=tracert method="<% get_http_method(); %>" action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=change_action>
<input type=hidden name=commit value=0>
      <TABLE height=100 cellSpacing=3 width=542 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=100% height=100%>
            <TABLE cellSpacing=0 width=448 bgColor=#ffffff border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>
                <div align="left" style="width: 651; height: 100%">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="651" height="101">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="165"> &nbsp;</td>
                      <td height="16" bgcolor="#2971b9" width="486" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="651">
                      </td>
                    </tr>
                    <tr>
		<td height="57" bgcolor="#2971b9" width="651" colspan="3">
	<img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#2971b9"> &nbsp;</td>
                      <td height="16" width="486" bgcolor="#2971b9" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="15" width="486" bgcolor="#E7E7E7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="7" width="486" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="165">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(adbutton.traceroute)</script>&nbsp;&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="486" bgcolor="#FFFFFF" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="88" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> &nbsp;</td>
                      <td height="1" width="23" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="1" width="463" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="433">
<script>
var traceroute_string = new Array("Network is unreachable", __T(tracert.unreach),
				  "Destination Unreachable", __T(tracert.unreach),
                                  "traceroute to", __T(tracert.traceto),
                                  "hops max", __T(tracert.hopsmax),
                                  "byte packets", __T(tracert.bytepkt),
                                  "Request timed out", __T(tracert.reqout),
                                  "Trace complete", __T(tracert.tracecomp),
                                  "Unknown host", __T(tracert.unknown));
var i = 0;
var a = new String("");
var b = new String("");

var table = new Array(
<% dump_traceroute_log(); %>
);

for (i = 0; i < table.length; i++) {
     for (j = 0; j < traceroute_string.length; j += 2) {
           RE = new RegExp(traceroute_string[j], "i");
           a = table[i];
           b = a.replace(RE, traceroute_string[j+1]);
           table[i] = b;
     }
}

if(table.length == "0") {
	table[0] = " ";
}

for(var i=0 ; table[i] ; i++) {
              document.write("<tr>");
		if(i == 0) {
		  if(table.length == 1)	// only one entry
              		document.write("<td height=\"25\" width=\"433\" align=\"center\" style=\"border-style: solid; border-width: 1\" bordercolor=\"#2971b9\">");
		  else	// first entry
            	        document.write("<td height=\"25\" width=\"433\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
		}
		else if(i == (table.length-1)) {	// last entry
              		document.write("<td height=\"25\" width=\"433\" align=\"center\" style=\"border-style: solid; border-width: 1; border-top-style: none; border-top-width: medium\" bordercolor=\"#2971b9\">");
		}
		else {	// middle entry
              		document.write("<td height=\"25\" width=\"433\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: none; border-top-width: medium; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
		}
	document.write("<p align=\"<% ui_position("rtl_right", ""); %>\"><font face=\"Arial\" style=\"font-size: 8pt\">"+table[i]+"</font></td></tr>");
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
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:to_close(document.tracert)"><script>Capture(sbutton.close)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="107" bgcolor="#8c8e8c">
		<p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><a href="javascript:to_stop(document.tracert)"><script>Capture(sbutton.stop)</script></A></font></span>
                </td>
                <td height="15" width="14"></td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
