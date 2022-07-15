<% web_include_file("copyright.asp"); %>
<HTML><HEAD><TITLE>Basic Setup</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>
<SCRIPT language=JavaScript>
function init()
{
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=setup method=<% get_http_method(); %> action=apply.cgi>

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,"");</script></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
		</TD>
		</TR>
		
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2></TD>
		<TD class=FUNFIELD></TD></TR>
		
		<TR><TD bgColor=#5b5b5b height=25><P align=right><B><FONT style="FONT-SIZE: 9pt" face=Arial color=#ffffff><script>Capture(wlansec.lgmenu)</script></FONT></B></P></TD><TD bgColor=#5b5b5b></TD>
		<TD class=FUNNAME2></TD>
        <TD class=FUNFIELD></TD></TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
		
		
		
        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
