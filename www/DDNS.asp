<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>DDNS</TITLE>
<% no_cache(); %>
<% charset(); %>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/ddns.js></SCRIPT>
<% web_include_file("filelink.asp"); %>


<SCRIPT language=JavaScript>
document.title = share.ddns;

function ddns_check(F,T)
{
	var re ; 

	////////////////////////////////////////////////////////////////////////


	if(F.ddns_enable.value == 0)
		return true;
	else if(F.ddns_enable.value == 1){
		username = eval("F.ddns_username");
		passwd = eval("F.ddns_passwd");
		hostname = eval("F.ddns_hostname");
	}
	else {
		username = eval("F.ddns_username_"+F.ddns_enable.value);
		passwd = eval("F.ddns_passwd_"+F.ddns_enable.value);
		hostname = eval("F.ddns_hostname_"+F.ddns_enable.value);
	}
	if(F.ddns_enable.value == 2){	// tzo
		if(valid_email(F.ddns_username_2) == false)
			return false;
		re = new RegExp("^[a-zA-Z][0-9]{15}","gi");
	        if ( (!re.test( F.ddns_passwd_2.value )) || F.ddns_passwd_2.value.length<16 ) 
		{
			alert(errmsg.err93);
			F.ddns_passwd_2.focus();
			return false; 
		}
		if( F.ddns_hostname_2.value.indexOf("@")!=-1 ) 
		{
			alert(errmsg.err31);
			F.ddns_hostname_2.focus();
			return false ; 
		}
	}

	if(username.value == ""){
//              alert("You must input a username!");
                alert(errmsg.err0);
		username.focus();
		return false;
	}
	if(passwd.value == ""){
//              alert("You must input a passwd!");
                alert(errmsg.err6);
		passwd.focus();
		return false;
	}
	if(F.ddns_enable.value != 4){
		if(hostname.value == ""){
//              	alert("You must input a hostname!");
                	alert(errmsg.err7);
			hostname.focus();
			return false;
		}
	}
	return true;
}
function to_update(F)
{
	if(ddns_check(F,"update") == true){
		F.change_action.value = "gozila_cgi";
		F.submit_button.value = "DDNS";
		F.submit_type.value = "update";
       		F.gui_action.value = "Apply";
       		F.submit();
	}
}
function ddns_update(F)
{
	var tmp = <% nvram_get("ddns_enable"); %>;
	var backmx = "NO" ;
	var wildcard = "OFF";
	F.ddns_changed.value = 0 ; 
	if ( F.ddns_enable.options[F.ddns_enable.selectedIndex].value != tmp ) 
	{
		F.ddns_changed.value = 1 ; 
		return ; 
	}
	if ( tmp == 1 ) 
	{
		if ( F.ddns_backmx[0].checked ) backmx = "YES";
		if ( F.ddns_wildcard[0].checked ) wildcard = "ON";
		if ( ( F.ddns_username.value != "<% nvram_get("ddns_username"); %>" ) || 
		     ( F.ddns_passwd.value != "<% nvram_invmatch("ddns_passwd","","X012345678900001"); %>" ) || 
		     ( F.ddns_hostname.value != "<% nvram_get("ddns_hostname"); %>" ) || 
		     ( F.ddns_service.options[F.ddns_service.selectedIndex].value != "<% nvram_get("ddns_service"); %>" ) || 
		     ( F.ddns_mx.value != "<% nvram_get("ddns_mx"); %>" ) || 
		     ( backmx != "<% nvram_get("ddns_backmx"); %>" ) || 
		     ( wildcard != "<% nvram_get("ddns_wildcard"); %>" ))
		{
			F.ddns_changed.value = 1 ; 
			return;
		}
		
	}
	else if ( tmp == 2 ) 
	{
		if ( ( F.ddns_username_2.value != "<% nvram_get("ddns_username_2"); %>"	) ||
		     ( F.ddns_passwd_2.value != "<% nvram_invmatch("ddns_passwd_2","","X012345678900001"); %>" ) ||
		     ( F.ddns_hostname_2.value != "<% nvram_get("ddns_hostname_2"); %>" ))
		{
			F.ddns_changed.value = 1 ; 
			return;
		}
	}
}
function to_submit(F)
{
	ddns_update(F);
	if(ddns_check(F,"save") == true){
		F.submit_button.value = "DDNS";
      		F.gui_action.value = "Apply";
		F.submit();
	}
}
function SelDDNS(num,F)
{
        F.submit_button.value = "DDNS";
        F.change_action.value = "gozila_cgi";
        F.ddns_enable.value=F.ddns_enable.options[num].value;
        F.submit();
}
function show_status()
{
        var RetMsg="<% show_ddns_status(); %>";
        if( RetMsg=="  " || RetMsg.length < 2)
                return;
        else
                Capture(<% show_ddns_status(); %>);
}

function init()
{
	var swmode = '<% nvram_get("switch_mode");%>';
	var protocolWan = '<% nvram_get("wan_proto");%>';
	if( swmode == 1)
		alert(share.brdgmwn);
	else if( protocolWan == "dslite" ){
		alert (share.dslitewn);
	}
	
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

</SCRIPT>
</HEAD>
<BODY onload=init()>
<DIV align=center>
<FORM name=ddns method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=gui_action>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=ddns_changed>
<input type=hidden name=wait_time value=6>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,share.ddns);</script></TR>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><B><script>Capture(ddns.srv)</script></B></TD>
        <TD class=FUNFIELD><SELECT onChange=SelDDNS(this.form.ddns_enable.selectedIndex,this.form) name="ddns_enable" > 
	<script>
		var flag;
		var lang = '<% nvram_get("language"); %>';
		var ddns_enable = '<% nvram_selget("ddns_enable"); %>';
		var ddns3322 = '0';
		var peanuthull = '0';
<% support_invmatch("DDNS3322_SUPPORT", "1", "//"); %> ddns3322 = '1';
<% support_invmatch("PEANUTHULL_SUPPORT", "1", "//"); %> peanuthull = '1';

		if(ddns_enable == '0')
			flag = '0';
		if (ddns3322 == '1' && peanuthull == '1') {
			if(lang == "EN" || lang == "SC") {
				flag = "34";
			}
			else {
				flag = "12";
			}
		}
		else
			flag = "12";

		
		if(flag == "12") {
			if(ddns_enable == '1')
				document.write("<OPTION value=1 selected>"+ddns.dyndns+"<b></b></OPTION>");
			else
				document.write("<OPTION value=1>"+ddns.dyndns+"<b></b></OPTION>");
			if(ddns_enable == '2')
				document.write("<OPTION value=2 selected>"+ddns.tzo+"<b></b></OPTION>");
			else
				document.write("<OPTION value=2>"+ddns.tzo+"<b></b></OPTION>");
		}
		else if(flag == "34") {
			if(ddns_enable == '3')
				document.write("<OPTION value=3 selected>"+ddns.ddns3322+"<b></b></OPTION>");
			else
				document.write("<OPTION value=3>"+ddns.ddns3322+"<b></b></OPTION>");
			if(ddns_enable == '4')
				document.write("<OPTION value=4 selected>"+ddns.peanuthull+"<b></b></OPTION>");
			else
				document.write("<OPTION value=4>"+ddns.peanuthull+"<b></b></OPTION>");
		}

		if(ddns_enable == "0") {
			document.write("<OPTION value=0 selected>"+share.disabled+"<b></b></OPTION>");
		}
		else
			document.write("<OPTION value=0>"+share.disabled+"<b></b></OPTION>");

	</script>

	</SELECT>&nbsp;</TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>

        <% show_ddns_setting(); %>               

<% nvram_else_selmatch("ddns_enable","0","","<!--"); %>

        <TR><script>draw_table(ISBLANK,"");</script></TR>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
		<TR><script>draw_table(ISBLANK,"");</script></TR>
    	<TR><script>draw_table(ISBLANK,"");</script></TR>
  
<% nvram_else_selmatch("ddns_enable","0","","-->"); %>
          
        <% nvram_selmatch("ddns_enable","0","<!--"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.interipaddr)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial><% show_ddns_ip(); %></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(bmenu.statu)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT color=red><script>show_status();</script></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><script>document.write("<input type=button name=update" + " value='" + sbutton.update + "' onclick=to_update(this.form)>");</script></TD></TR>
        <% nvram_selmatch("ddns_enable","0","-->"); %>

        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(ISTAIL,"");</script></TR>
<TR>
	    <TD class=TITLE1 colspan=2></TD>
		 <TD class=FUNNAME4 colspan=2>
		<script>
			draw_bottom("",sbutton.save);
			if ( close_session == "1" )
			{
				draw_bottom("DDNS.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("DDNS.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
