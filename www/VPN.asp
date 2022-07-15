<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>VPN Passthrough</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = secleftmenu.vpnpass;
function to_submit(F)
{
	F.submit_button.value = "VPN";
	F.gui_action.value = "Apply";
	F.submit();
}

function init()
{
	var swmode = '<% nvram_get("switch_mode");%>';
	if( swmode == 1)
		alert(share.brdgmwn);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM name=vpn action=apply.cgi method=<% get_http_method(); %>>
<input type=hidden name=submit_button>
<input type=hidden name=gui_action>
<input type=hidden name="wait_time" value="3">

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,secleftmenu.vpnpass);</script></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN style="FONT-SIZE: 8pt"><script>Capture(vpn.ipsecpass)</script>:&nbsp;</SPAN></TD>
        <TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=1 name=ipsec_pass <% nvram_match("ipsec_pass","1","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=0 name=ipsec_pass <% nvram_match("ipsec_pass","0","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt"><script>Capture(vpn.pptppass)</script>:&nbsp;</SPAN></TD>
          <TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=1 name=pptp_pass <% nvram_match("pptp_pass","1","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=0 name=pptp_pass <% nvram_match("pptp_pass","0","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt"><script>Capture(vpn.l2tppass)</script>:&nbsp;</SPAN></TD>
        <TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=1 name=l2tp_pass <% nvram_match("l2tp_pass","1","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=0 name=l2tp_pass <% nvram_match("l2tp_pass","0","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>

        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
