<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Diagnostics</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = adtopmenu.diag;
function ViewPing()
{
	if ( close_session == "1" )
	{
		self.open('Ping.asp','PingTable','alwaysRaised,resizable,scrollbars,width=730,height=450').focus();
	}
	else
	{
		self.open('Ping.asp;session_id=<% nvram_get("session_key"); %>','PingTable','alwaysRaised,resizable,scrollbars,width=730,height=450').focus();
	}
}
function ViewTraceroute()
{
	if ( close_session == "1" )
	{
		self.open('Traceroute.asp','TracerouteTable','alwaysRaised,resizable,scrollbars,width=730,height=450').focus();
	}
	else
	{
		self.open('Traceroute.asp;session_id=<% nvram_get("session_key"); %>','TracerouteTable','alwaysRaised,resizable,scrollbars,width=730,height=450').focus();
	}
}
function to_submit(F,I)
{
	if(valid(F,I)){
		F.submit_type.value = I ; 
		F.submit_button.value = "Diagnostics";
		F.change_action.value = "gozila_cgi";
		F.submit();
	}
}
function valid(F,I)
{
	if(I == "start_ping" && F.ping_ip.value == ""){
		//alert("You must input an IP Address or Domain Name!");
		alert(errmsg.err8);
		F.ping_ip.focus();
		return false;
	}
	if(I == "start_traceroute" && F.traceroute_ip.value == ""){
		//alert("You must input an IP Address or Domain Name!");
		alert(errmsg.err8);
		F.traceroute_ip.focus();
		return false;
	}
	return true;
}
function init()
{
	if('<% nvram_selget("submit_type"); %>' == "start_ping") {
		ViewPing();
	}
	if('<% nvram_selget("submit_type"); %>' == "start_traceroute") {
		ViewTraceroute();
	}

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>
</HEAD>
<BODY vLink=#b5b5e6 aLink=#ffffff link=#b5b5e6 onload=init()>
<FORM name=diag method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name=commit value=0>

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,adtopmenu.diag);</script></TR>
		<TR><script>draw_table(SUBFUN,adleftmenu.ping);</script>
		<TD class=FUNNAME2><script>Capture(ping.ipurl)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=39 name=ping_ip size="26" value='<% nvram_selget("ping_ip"); %>' onBlur=valid_name(this,"IP")></TD></TR>                
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(ping.pktsize)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><INPUT maxLength=5 name=ping_size style="width:40" value='<% nvram_selget("ping_size"); %>' onBlur=valid_range(this,32,65500,"")>&nbsp;<script>Capture(share.bytes)</script> (32 - 65500)</TD></TR>                
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(ping.times)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>
	<SELECT name=ping_times> 
        	<OPTION value=5 <% nvram_selmatch("ping_times","5","selected"); %>>5</OPTION> 
        	<OPTION value=10 <% nvram_selmatch("ping_times","10","selected"); %>>10</OPTION>
        	<OPTION value=15 <% nvram_selmatch("ping_times","15","selected"); %>>15</OPTION>
        	<OPTION value=0 <% nvram_selmatch("ping_times","0","selected"); %>><script>Capture(ping.unlimited)</script></OPTIONS>
    	</SELECT></TD></TR>                
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;</TD>
          <TD class=FUNFIELD><script>document.write("<INPUT  onclick=to_submit(this.form,\'start_ping\'); type=button name=ping_button value=\"" + adbutton.startping + "\">");</script></TD></TR>                
        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,adleftmenu.tracertest);</script>
		<TD class=FUNNAME2><script>Capture(ping.ipurl)</script>:&nbsp;</TD>
         <TD class=FUNFIELD><INPUT maxLength=39 name=traceroute_ip size="26" value="<% nvram_selget("traceroute_ip"); %>" onBlur=valid_name(this,"IP")></TD></TR>                
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;</TD>
        <TD class=FUNFIELD>
	<% nvram_match("detect_lang","FR","<!--"); %>
	<script>document.write("<INPUT  onclick=to_submit(this.form,\'start_traceroute\'); type=button name=troute_button value=\"" + adbutton.starttracer + "\">");</script></TD>
	<% nvram_match("detect_lang","FR","-->"); %>
	<% nvram_invmatch("detect_lang","FR","<!--"); %>
	<script>document.write("<INPUT  style=\"width:250\" onclick=to_submit(this.form,\'start_traceroute\'); type=button name=troute_button value=\"" + adbutton.starttracer + "\">");</script></TD>
	<% nvram_invmatch("detect_lang","FR","-->"); %>
	</TR>                
 </TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("NOBT_TAIL.asp"); %>
</FORM></BODY></HTML>
