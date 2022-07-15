<% web_include_file("copyright.asp"); %>
		<TR><script>draw_table(SUBFUN,"");</script>
<% support_match("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
         <TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.interipaddr)</script>:&nbsp;</TD>
<% support_match("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
          <TD colspan=2 class=FUNNAME1>
		  <table><tr>
		  <td width="20"><input type="radio" name="sel_pptp_dhcp" value="1" onclick="selpptpmode(this.value)" <% nvram_match("sel_pptp_dhcp","1","checked"); %> /></td>
		  <td>&nbsp;<script>Capture(setupcontent.pptpdhcp)</script>&nbsp;</td>
		  </tr></table>
		  </TD>
		  </TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
		  <table><tr>
		  <td width="20"><input type="radio" name="sel_pptp_dhcp" value="0" onclick="selpptpmode(this.value)" <% nvram_invmatch("sel_pptp_dhcp","1","checked"); %> /></td>
		  <td>&nbsp;<script>Capture(setupcontent.pptpstaticip)</script>&nbsp;</td>
		  </tr></table>
		  </TD>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
		  </TR>

		 <TR><script>draw_table(SUBFUN,"");</script>
		 <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.interipaddr)</script>:&nbsp;</FONT></TD>
         <TD class=FUNFIELD dir="ltr"><input type=hidden name="wan_ipaddr" value="4">
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_ipaddr","0"); %>' name="wan_ipaddr_0" onBlur=valid_range(this,0,223,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_ipaddr","1"); %>' name="wan_ipaddr_1" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_ipaddr","2"); %>' name="wan_ipaddr_2" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_ipaddr","3"); %>' name="wan_ipaddr_3" onBlur=valid_range(this,1,254,"IP")>
          </TD>
		</TR>
		<TR><script>draw_table(SUBFUN,"");</script>
<% support_match("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
         <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial><script>Capture(share.submask)</script>:&nbsp;</FONT></TD>
<% support_match("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
          <TD class=FUNNAME2>
		  <table><tr>
		  <!--<td width="20"> </td>-->
		  <td><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.submask)</script>:&nbsp;</FONT></td>
		  </tr></table>
		  </TD>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
          <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="wan_netmask" value="4">
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_netmask","0"); %>' name="wan_netmask_0" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_netmask","1"); %>' name="wan_netmask_1" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_netmask","2"); %>' name="wan_netmask_2" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_netmask","3"); %>' name="wan_netmask_3" onBlur=valid_range(this,0,255,"netmask")>
	  </FONT></TD>
     	</TR>
		<TR><script>draw_table(SUBFUN,"");</script>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
          <TD class=FUNNAME2>
		  <table><tr>
		  <!--<td width="20"> </td>-->
		  <td><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.defgateway)</script>:&nbsp;</FONT></td>
		  </tr></table>
		  </TD>
         <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="wan_pptp_gateway" value="4">
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_pptp_gateway","0"); %>' name="wan_pptp_gateway_0" onBlur=valid_range(this,0,223,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_pptp_gateway","1"); %>' name="wan_pptp_gateway_1" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_pptp_gateway","2"); %>' name="wan_pptp_gateway_2" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wan_pptp_gateway","3"); %>' name="wan_pptp_gateway_3" onBlur=valid_range(this,1,254,"IP")>
	  </FONT></TD>
       	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
        <TD class=FUNNAME2>
		  <table><tr>
		  <!--<td width="20"> </td>-->
		  <td><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(setupcontent.pptpdns1)</script>&nbsp;(<script>Capture(share.optional)</script>):&nbsp;</FONT></td>
		  </tr></table>
		  </TD>
          <TD class=FUNFIELD dir="ltr"><input type=hidden name=wan_pptp_dns value=4><INPUT maxLength=3 onBlur=valid_range(this,0,223,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","0"); %>' name="wan_pptp_dns0_0" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","1"); %>' name="wan_pptp_dns0_1" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","2"); %>' name="wan_pptp_dns0_2" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,254,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","3"); %>' name="wan_pptp_dns0_3" class=num></TD>
         </TR>
        <TR><script>draw_table(SUBFUN,"");</script>
        <TD class=FUNNAME2>
		  <table><tr>
		  <!--<td width="20"> </td>-->
		  <td><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(setupcontent.pptpdns2)</script>&nbsp;(<script>Capture(share.optional)</script>):&nbsp;</FONT></td>
		  </tr></table>
		  </TD>
          <TD class=FUNFIELD dir="ltr"><INPUT maxLength=3 onBlur=valid_range(this,0,223,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","0"); %>' name="wan_pptp_dns1_0" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","1"); %>' name="wan_pptp_dns1_1" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","2"); %>' name="wan_pptp_dns1_2" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,254,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","3"); %>' name="wan_pptp_dns1_3" class=num></TD>
        </TR>
        <TR><script>draw_table(SUBFUN,"");</script>
        <TD class=FUNNAME2>
		  <table><tr>
		  <!--<td width="20"> </td>-->
		  <td><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(setupcontent.pptpdns3)</script>&nbsp;(<script>Capture(share.optional)</script>):&nbsp;</FONT></td>
		  </tr></table>
		  </TD>
          <TD class=FUNFIELD dir="ltr"><INPUT maxLength=3 onBlur=valid_range(this,0,223,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","0"); %>' name="wan_pptp_dns2_0" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","1"); %>' name="wan_pptp_dns2_1" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","2"); %>' name="wan_pptp_dns2_2" class=num> . 
            <INPUT maxLength=3 onBlur=valid_range(this,0,254,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","3"); %>' name="wan_pptp_dns2_3" class=num></TD>
          </TR>
		<TR><script>
			draw_table(ISHR,"");
		</script></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
<% support_match("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
        <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial><script>Capture(setupcontent.gateway)</script>:&nbsp;</FONT></TD>
<% support_match("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "<!--"); %>
          <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(setupcontent.srvipaddr)</script>:&nbsp;</FONT></TD>
<% support_invmatch("PPTP_DHCPC_SUPPORT", "1", "-->"); %>
          <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="pptp_server_ip" value="4">
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("pptp_server_ip","0"); %>' name="pptp_server_ip_0" onBlur=valid_range(this,0,223,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("pptp_server_ip","1"); %>' name="pptp_server_ip_1" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("pptp_server_ip","2"); %>' name="pptp_server_ip_2" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("pptp_server_ip","3"); %>' name="pptp_server_ip_3" onBlur=valid_range(this,1,254,"IP")>
	  </FONT></TD>
    	</TR>
		<TR><script>draw_table(SUBFUN,"");</script>
        <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.usrname1)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" 
            face=Arial><INPUT maxLength=63 size=26 name="ppp_username" value='<% nvram_get("ppp_username"); %>' onBlur=valid_name(this,"User%20Name")></FONT></TD>
        </TR>
		<TR><script>draw_table(SUBFUN,"");</script>
        <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.passwd)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" 
            face=Arial><INPUT maxLength=63 size=26 name="ppp_passwd" value='<% nvram_invmatch("ppp_passwd","","d6nw5v1x2pc7st9m"); %>' type=password onBlur=valid_name(this,"Password")></FONT></TD>
        </TR>
		<TR><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1><FONT style="FONT-SIZE: 8pt" 
            face=Arial></FONT><INPUT type=radio value=1 name="ppp_demand" <% nvram_match("ppp_demand_pptp","1","checked"); %> onclick=ppp_enable_disable(this.form,1)><font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.conndemand)</script>&nbsp;&nbsp;</font>
	<INPUT class=num maxLength=4 style="width:35" value='<% nvram_get("ppp_idletime"); %>' name="ppp_idletime" onBlur=valid_range(this,1,9999,"Idle%20time")>&nbsp;&nbsp;<font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.minute)</script>.</font></TD>
          </TD>
          </TR>
		<TR><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1><FONT style="FONT-SIZE: 8pt" 
            face=Arial></FONT><INPUT type=radio value=0 name="ppp_demand" <% nvram_match("ppp_demand_pptp","0","checked"); %> onclick=ppp_enable_disable(this.form,0)><font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.keepalive)</script>&nbsp;&nbsp;</font>
	<INPUT class=num maxLength=4 style="width:35" value='<% nvram_get("ppp_redialperiod"); %>' name="ppp_redialperiod" onBlur=valid_range(this,20,180,"Redial%20period")>&nbsp;&nbsp;<font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.second)</script>.</font></TD>
         </TR>
