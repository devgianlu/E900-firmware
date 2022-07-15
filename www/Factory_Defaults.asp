<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Factory Defaults</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
re1 = /&nbsp;/gi
str = adtopmenu.facdef.replace(re1,"");
document.title = str;
function to_restore(F)
{
	if(!confirm(hfacdef.warning))
		return false;

	F.gui_action.value='Restore';
	F.submit_button.value = "Factory_Defaults";
	F.submit();

	return true;
}
function reset_security(F)
{
	F.submit_button.value = "Factory_Defaults";
	F.gui_action.value ="Apply";
	F.submit_type.value="wsc_reset";
        //F.change_action.value = "gozila_cgi";
        //F.commit.value = "0";
        F.submit();
	
	return true;
}

function init()
{
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=default method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=wait_time value=80>
<input type=hidden name=FactoryDefaults>
<input type=hidden name=submit_type>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,adtopmenu.facdef);</script></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><script>document.write("<INPUT  onclick=to_restore(this.form) type=button name=restore_b value=\"" + facdef.refacdefa2 + "\">");</script></TD></TR>
<!--
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD width=14 height=25>&nbsp;</TD>
          <TD width=17 height=25>&nbsp;</TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=151 height=25>&nbsp;</TD>
          <TD width=246 height=25>&nbsp;</TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD width=31 height=25 colspan=2></TD>
          <TD width=410 height=25 colspan=3><script>document.write("<input type=button value=\""+wlanwsc.secreset+"\" name=cmdreset onclick=reset_security(this.form)>");</script></TD>
          <TD width=13 height=25></TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
-->
        <TR><script>draw_table(ISBLANK,"");</script></TR>
	<TR><script>draw_table(ISBLANK,"");</script></TR>
	<TR><script>draw_table(ISBLANK,"");</script></TR>
	<TR><script>draw_table(ISBLANK,"");</script></TR>
	<TR><script>draw_table(ISBLANK,"");</script></TR>
	<TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<TD class=HELP></TD><TD class=HELP1><p style="margin-top: 0; margin-bottom: 0">
		    <span style="font-weight: 700">
		    <font face="Arial" style="font-size: 9pt" color="#FFFFFF"><script>Capture(adtopmenu.facdef)</script></font></span></p>
		    <p style="margin-top: 0; margin-bottom: 0">
		    <font face="Arial" style="font-size: 9pt" color="#FFFFFF"><script>Capture(facdef.helpmsg)</script></font></p></TD>
</TR></TABLE>
<% web_include_file("NOBT_TAIL.asp"); %>
</FORM></BODY></HTML>
