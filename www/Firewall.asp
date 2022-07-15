<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Firewall</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = share.firewall;
function wan_enable_disable(F)
{
	if(F._block_wan.checked == true) 
		choose_enable(F._ident_pass);	
	else {
		choose_disable(F._ident_pass);	
	}
}

function to_submit(F)
{
	F.submit_button.value = "Firewall";
	if(F._block_wan.checked == true) 
		F.block_wan.value = 1;
	else {
		F.block_wan.value = 0;
	}
	if(F._block_loopback){
		if(F._block_loopback.checked == true) F.block_loopback.value = 1;
		else 				 F.block_loopback.value = 0;
	}
	if(F._block_cookie){
		if(F._block_cookie.checked == true) F.block_cookie.value = 1;
		else 				 F.block_cookie.value = 0;
	}
	if(F._block_java){
		if(F._block_java.checked == true) F.block_java.value = 1;
		else 				 F.block_java.value = 0;
	}
	if(F._block_proxy){
		if(F._block_proxy.checked == true) F.block_proxy.value = 1;
		else 				 F.block_proxy.value = 0;
	}
	if(F._block_activex){
		if(F._block_activex.checked == true) F.block_activex.value = 1;
		else 				 F.block_activex.value = 0;
	}
	if(F._ident_pass){
		if(F._ident_pass.checked == true) F.ident_pass.value = 0;
		else 				 F.ident_pass.value = 1;
	}

	if(F._block_multicast){
		if(F._block_multicast.checked == true){
			F.multicast_pass.value = 0;
		}else{
			F.multicast_pass.value = 1;
		}
		<% support_invmatch("IPV6_SUPPORT", "1", "/*"); %>
		F.ipv6_multicast_pass.value = F.multicast_pass.value;
		<% support_invmatch("IPV6_SUPPORT", "1", "*/"); %>
	}

	F.gui_action.value = "Apply";
        F.submit();
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

	if(document.firewall._block_wan.checked == true) 
                choose_enable(document.firewall._ident_pass);   
        else {
                choose_disable(document.firewall._ident_pass);  
        }

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM name=firewall method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=block_wan>
<input type=hidden name=block_loopback>
<input type=hidden name=multicast_pass value=0>
<% support_invmatch("IPV6_SUPPORT", "1", "<!--"); %>
<input type=hidden name=ipv6_multicast_pass value=0>
<% support_invmatch("IPV6_SUPPORT", "1", "-->"); %>
<input type=hidden name=ident_pass>
<input type=hidden name=block_cookie value=0>
<input type=hidden name=block_java value=0>
<input type=hidden name=block_proxy value=0>
<input type=hidden name=block_activex value=0>
<input type=hidden name="wait_time" value="3">

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,share.firewall);</script></TR>
<% support_invmatch("IPV6_SUPPORT", "1", "<!--"); %>
       	<TR><script>draw_table(SUBFUN,"");</script>
               	<TD class=FUNNAME11><script>Capture(firewall.ipv6spifirewallpro)</script>:</TD>
	<TD class=FUNFIELD1>
	<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=on name=ipv6_filter <% nvram_match("ipv6_filter","on","checked"); %>><B>&nbsp;<script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=off name=ipv6_filter <% nvram_match("ipv6_filter","off","checked"); %>><B>&nbsp;<script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>
<% support_invmatch("IPV6_SUPPORT", "1", "-->"); %>
    	<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME11><script>Capture(firewall.spifirewallpro)</script>:</TD>
	<TD class=FUNFIELD1>
	<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=on name=filter <% nvram_match("filter","on","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=off name=filter <% nvram_match("filter","off","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
		<TR><script>draw_table(MAINFUN,firewall2.internetfilter);</script></TR>

          <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><table border="0" cellpadding="0" cellspacing="0" width="300">
                  <tr>
                    <td height="25" width="20"><input type=checkbox value=1 name=_block_wan <% nvram_match("block_wan","1","checked"); %> onclick=wan_enable_disable(this.form)></td>
                    <td height="25" width="247"> <script>Capture(firewall.blockinterreq)</script>&nbsp; </td>
                  </tr>
                </table>
</TD></TR>               
<% support_invmatch("MULTICAST_SUPPORT", "1", "<!--"); %>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><table border="0" cellpadding="0" cellspacing="0" width="300">
                  <tr>
                    <td height="25" width="20"><input type=checkbox value=0 name=_block_multicast <% nvram_match("multicast_pass","0","checked"); %>></td>
                    <td height="25" width="247"> <script>Capture(firewall2.multi)</script>&nbsp; </td>
                  </tr>
                </table>
</TD></TR>               
<% support_invmatch("MULTICAST_SUPPORT", "1", "-->"); %>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><table border="0" cellpadding="0" cellspacing="0" width="300">
                  <tr>
                    <td height="25" width="20"><input type=checkbox value=0 name=_block_loopback <% nvram_match("block_loopback","1","checked"); %>></td>
                    <td height="25" width="260"> <script>Capture(firewall2.natredir)</script>&nbsp; </td>
                  </tr>
                </table>
</TD></TR>               
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><table border="0" cellpadding="0" cellspacing="0" width="300">
                  <tr>
                    <td height="25" width="20"><input type=checkbox value=1 name=_ident_pass <% nvram_match("ident_pass","0","checked"); %>></td>
                    <td height="25" width="247"> <script>Capture(firewall2.ident)</script>&nbsp; </td>
                  </tr>
                </table>
</TD></TR>               
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
		<TR><script>draw_table(MAINFUN,firewall2.webfilter);</script></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
	<TD colspan=2 class=FUNNAME1>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=checkbox value=1 name="_block_proxy" <% nvram_match("block_proxy","1","checked"); %>>&nbsp;<script>Capture(firewall.filterproxy)</script>&nbsp;&nbsp;</td>
		<td><INPUT type=checkbox value=1 name="_block_java" <% nvram_match("block_java","1","checked"); %>>&nbsp;<script>Capture(firewall.javaapplets)</script>&nbsp;&nbsp;</td>
		<td><INPUT type=checkbox value=1 name="_block_activex" <% nvram_match("block_activex","1","checked"); %>>&nbsp;<script>Capture(firewall.activex)</script>&nbsp;&nbsp;</td>
		<td><INPUT type=checkbox value=1 name="_block_cookie" <% nvram_match("block_cookie","1","checked"); %>>&nbsp;<script>Capture(firewall.cookies)</script>&nbsp;&nbsp;</td></tr></table>	
	</TD></TR>

        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
