<% web_include_file("copyright.asp"); %>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.interipaddr)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="wan_ipaddr" value=4>
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_ipaddr","0"); %>' name="wan_ipaddr_0" onBlur=valid_range(this,1,223,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_ipaddr","1"); %>' name="wan_ipaddr_1" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_ipaddr","2"); %>' name="wan_ipaddr_2" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_ipaddr","3"); %>' name="wan_ipaddr_3" onBlur=valid_range(this,1,254,"IP")>
	  </FONT></TD>
		</TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.submask)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="wan_netmask" value=4>
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_netmask","0"); %>' name="wan_netmask_0" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_netmask","1"); %>' name="wan_netmask_1" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_netmask","2"); %>' name="wan_netmask_2" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_netmask","3"); %>' name="wan_netmask_3" onBlur=valid_range(this,0,255,"netmask")>
	  </FONT></TD>
		</TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.defgateway)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="wan_gateway" value=4>
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_gateway","0"); %>' name="wan_gateway_0" onBlur=valid_range(this,1,223,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_gateway","1"); %>' name="wan_gateway_1" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_gateway","2"); %>' name="wan_gateway_2" onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("wan_gateway","3"); %>' name="wan_gateway_3" onBlur=valid_range(this,1,254,"IP")>
	  </FONT></TD>
        </TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.dns)</script> 1:&nbsp;</FONT></TD>
        <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="wan_dns" value="3">
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","0","0"); %>' name="wan_dns0_0" id=static_dns00 onBlur=valid_range(this,0,223,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","0","1"); %>' name="wan_dns0_1" id=static_dns01 onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","0","2"); %>' name="wan_dns0_2" id=static_dns02 onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","0","3"); %>' name="wan_dns0_3" id=static_dns03 onBlur=valid_range(this,0,254,"IP")>
	  </FONT></TD>
       	</TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.dns)</script> 2 (<script>Capture(share.optional)</script>):&nbsp;</FONT></TD>
        <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial>
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","1","0"); %>' name="wan_dns1_0" id=static_dns10 onBlur=valid_range(this,0,223,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","1","1"); %>' name="wan_dns1_1" id=static_dns11 onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","1","2"); %>' name="wan_dns1_2" id=static_dns12 onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","1","3"); %>' name="wan_dns1_3" id=static_dns13 onBlur=valid_range(this,0,254,"IP")>
	  </FONT></TD>
	  </TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.dns)</script> 3 (<script>Capture(share.optional)</script>):&nbsp;</FONT></TD>
        <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial>
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","2","0"); %>' name="wan_dns2_0" id=static_dns20 onBlur=valid_range(this,0,223,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","2","1"); %>' name="wan_dns2_1" id=static_dns21 onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","2","2"); %>' name="wan_dns2_2" id=static_dns22 onBlur=valid_range(this,0,255,"IP")> .
		<INPUT class=num maxLength=3 style="width:35" value='<% get_dns_ip("wan_dns","2","3"); %>' name="wan_dns2_3" id=static_dns23 onBlur=valid_range(this,0,254,"IP")>
	  </FONT></TD>
      </TR>
