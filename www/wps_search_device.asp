<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Basic Wireless Settings</TITLE>
<% no_cache(); %>
<% charset(); %> 
<link rel="stylesheet" type="text/css" href="style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="style_rtl.css">
<% ui_position("invmatch", "-->"); %>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<script src="common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
</HEAD>
<script language=javascript>
var close_session = "<% get_session_status(); %>";
var wscresult = "<% nvram_get("wsc_result"); %>"; 
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";
function clickCencelButton()
{
	F = document.wireless ; 
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value ="wsc_cancel";
	F.change_action.value = "gozila_cgi";
	F.next_page.value = "wps_connect_result.asp";
	F.submit();
} 

</script>
<BODY>
<script>
	if ( close_session == "1" )
	{
		document.write("<iframe id=loadstatus height=0% width=0% src=\"getstatus.asp\" name=iframe1 frameborder=0 scrolling=no></iframe>");
		document.write("<FORM name=wireless method=\"<% get_http_method(); %>\" action=apply.cgi >");
	}
	else
	{
		document.write("<iframe id=loadstatus height=0% width=0% src=\"getstatus.asp;session_id=<% nvram_get("session_key"); %>\" name=iframe1 frameborder=0 scrolling=no></iframe>");	
		document.write("<FORM name=wireless method=\"<% get_http_method(); %>\" action=apply.cgi;session_id=<% nvram_get("session_key"); %> >");
	}
</script>
<input type="hidden" name=wscresult value="<% nvram_get("wsc_result"); %>">
<input type=hidden name=submit_button >
<input type=hidden name=submit_type >
<input type=hidden name=change_action >
<input type=hidden name=next_page >
<TABLE cellspacing=0>
<TR><TD class=wpsfont style="padding-top:30px" id="txt1">
	  	<script>Capture(wlanwscpopup.search1);</script>
</TD></TR>
<TR><TD class=wpsfont style="padding-top:10px"><script>Capture(wlanwscpopup.search2)</script></TD></TR>
<TR><TD class=wpsfont style="padding-top:10px" id="txt2">
<% support_match("CONFIG_WSCCMD", "y", "<!--"); %>
<script>
	if(!("<% nvram_get("wsc_sta_pin"); %>" != "0" || "<% nvram_get("wsc_webpage_method"); %>" == "pin" 
			|| "<% nvram_get("action_service"); %>" == "wsc_enterpin" || "<% nvram_get("wsc_enr_pin"); %>" != ""))
document.write(wlanwscpopup.search3+wlanwscpopup.search4);
</script>
<% support_match("CONFIG_WSCCMD", "y", "-->"); %>
<% support_match("CONFIG_WPS", "y", "<!--"); %>
<script>
	if(!("<% nvram_get("wps_sta_pin"); %>" != "00000000" || "<% nvram_get("wsc_webpage_method"); %>" == "pin" 
			|| "<% nvram_get("action_service"); %>" == "wsc_enterpin" || "<% nvram_get("wsc_enr_pin"); %>" != ""))
document.write(wlanwscpopup.search3+wlanwscpopup.search4);
</script>
<% support_match("CONFIG_WPS", "y", "-->"); %>

</TD></TR>
<TR><TD class=wpsfont style="padding-top:30px">
                <TABLE>
                    <TR>
                        <TD id=left class=PROC_STATUS></TD>
                        <TD id=right class=PROC_STATUS1></TD>
                        <TD id=percent></TD>
                    </TR>
                </TABLE>
</TD></TR>
<TR height="10"><TD> </TD></TR>
<TR>
<TD class=wpsfont>
<p style='text-align:<% ui_position("rtl_left", ""); %>; padding-bottom:20px; padding-right:8px'>
<script>document.write("<input type=button name=wps_connect_cancel class=wpsbutton value="+wlanwscpopup.btncancel+" onclick=clickCencelButton() disabled>");</script>
</P>
</TD>
</TR>
</TABLE>
</FORM>
</BODY></HTML>
