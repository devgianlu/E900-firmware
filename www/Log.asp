<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Log</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = adtopmenu.log;
var EN_DIS = '<% nvram_get("log_enable"); %>'
function to_submit(F)
{
	
	if(F.log_enable[0].checked)
		F.log_level.value = "3";
	else
		F.log_level.value = "0";
/*
	if(F.log_ipaddr.value == <% get_single_ip("lan_ipaddr","3"); %>)
	{
		alert(errmsg.err72);
		return;
	}
*/
	F.submit_button.value = "Log";
	F.gui_action.value='Apply';
	F.submit();
	return true;
	
}
function SelLog(num,F)
{
	log_enable_disable(F,num);
}
function log_enable_disable(F,I)
{
        EN_DIS = I;
        if ( I == "0" ){
                choose_disable(F.view_log);
		//choose_disable(F.log_ipaddr);
        }
        else{
                choose_enable(F.view_log);
		//choose_enable(F.log_ipaddr);
        }
}
function ViewLog()
{
	if ( close_session == "1" )
	{
		self.open('Log_View.asp','inLogTable','alwaysRaised,resizable,scrollbars,width=800,height=480').focus();
	}
	else
	{
		self.open('Log_View.asp;session_id=<% nvram_get("session_key"); %>','inLogTable','alwaysRaised,resizable,scrollbars,width=800,height=480').focus();
	}
}
function init() 
{               
        log_enable_disable(document.log,'<% nvram_get("log_enable"); %>');
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
<FORM name=log method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=log_level>
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,adtopmenu.log);</script></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=log_enable <% nvram_match("log_enable", "1", "checked"); %> OnClick=SelLog(1,this.form)><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=log_enable <% nvram_match("log_enable", "0", "checked"); %> OnClick=SelLog(0,this.form)><B><script>Capture(share.disabled)</script></B></td></tr></table>
		</TD></TR>
        <TR><script>draw_table(ISHR,"");</script></TR>
<!--
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1>&nbsp;&nbsp;<script>Capture(log.remotelog)</script>: &nbsp;&nbsp;
         &nbsp;&nbsp; <% get_single_ip("lan_ipaddr","0"); %>&nbsp;.&nbsp;<% get_single_ip("lan_ipaddr","1"); %>&nbsp;.&nbsp;<% get_single_ip("lan_ipaddr","2"); %>&nbsp;.&nbsp;<INPUT class=num maxLength=3 name=log_ipaddr onBlur=valid_range(this,0,254,"IP") style="width:35" value="<% nvram_get("log_ipaddr"); %>"><script>Capture(log.msg1)</script></TD></TR>
-->
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>&nbsp;&nbsp;<script>document.write("<input type=button name=view_log value='" + adbutton.viewlog + "' onclick=ViewLog()>");</script></TD></TR>
         <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
