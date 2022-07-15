
<% web_include_file("copyright.asp"); %>
<HTML><HEAD><TITLE>IPv6 DUID Setup</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = "IPv6 DUID Setup";

function init() 
{
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function to_submit()
{
	var F = document.forms[0];
        F.submit_button.value = "index_ipv6";
        F.gui_action.value = "Apply";
        F.submit();
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=setup_ipv6 method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name="wait_time" value="0">
<input type=hidden name="need_reboot" value="0">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
		<TR><script>draw_table(MAINFUN,lefemenu.intersetup);</script></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
			<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.duid)</script>:&nbsp;</TD>
			<TD class=FUNFIELD><INPUT maxLength=63 size=31 name="wan_ipv6_duid" value='<% nvram_get("wan_ipv6_duid"); %>'></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
			<TD>&nbsp;</TD>
			<TD><font face="Arial" style="font-size: 8pt;"><script>Capture(setupcontent.msg)</script></font></TD></TR>
	</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script>
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM>
</BODY>
</HTML>
