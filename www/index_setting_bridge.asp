		<TD colspan=2 class=FUNNAME1><SELECT name="bridge_mode_sel" onChange=SelBridgeDhcp(this.form.bridge_mode_sel.selectedIndex,this.form) >
		<script>
			var NAME = new Array("0", "1");
			var STRING = new Array(share.bridge_autoip,share.bridge_specifyip);
			var switch_mode_dhcp1 = '<% nvram_get("switch_mode_dhcp"); %>';
			if(switch_mode_dhcp1==''||switch_mode_dhcp1>1)
			{
				switch_mode_dhcp=1;
				switch_mode_dhcp1=1;
			}
			if(switch_mode_dhcp1==1)
			{
				document.write("<OPTION value="+NAME[0]+" selected>"+STRING[0]+"</OPTION>");
				document.write("<OPTION value="+NAME[1]+">"+STRING[1]+"</OPTION>");
			}
			else
			{
				document.write("<OPTION value="+NAME[0]+">"+STRING[0]+"</OPTION>");
				document.write("<OPTION value="+NAME[1]+" selected>"+STRING[1]+"</OPTION>");
			}
		</script>
		</SELECT></TD>
    <TR><script>draw_table(SUBFUN,"");</script>
    	
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.ipaddr)</script>:&nbsp;</TD>
		<TD class=FUNFIELD dir="ltr"><INPUT class=num maxLength=3 onBlur=valid_range(this,1,223,"IP") size=3 value='<% get_single_ip("switch_ipaddr","0"); %>' name="switch_ipaddr_0"> . 
		<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") size=3 value='<% get_single_ip("switch_ipaddr","1"); %>' name="switch_ipaddr_1"> . 
		<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") size=3 value='<% get_single_ip("switch_ipaddr","2"); %>' name="switch_ipaddr_2"> . 
		<INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") size=3 value='<% get_single_ip("switch_ipaddr","3"); %>' name="switch_ipaddr_3" ></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
			
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.submask)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type=hidden name="switch_netmask" value=4>
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("switch_netmask","0"); %>' name="switch_netmask_0" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("switch_netmask","1"); %>' name="switch_netmask_1" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("switch_netmask","2"); %>' name="switch_netmask_2" onBlur=valid_range(this,0,255,"netmask")> .
		<INPUT class=num maxLength=3 size=3 value='<% get_single_ip("switch_netmask","3"); %>' name="switch_netmask_3" onBlur=valid_range(this,0,255,"netmask")>
	  </FONT></TD>
		</TR>
    <TR><script>draw_table(SUBFUN,"");</script>
    	
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.defgateway)</script>:&nbsp;</TD>
		<TD class=FUNFIELD dir="ltr"><INPUT class=num maxLength=3 onBlur=valid_range(this,1,223,"IP") size=3 value='<% get_single_ip("switch_gateway","0"); %>' name="switch_gateway_0"> . 
		<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") size=3 value='<% get_single_ip("switch_gateway","1"); %>' name="switch_gateway_1"> . 
		<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") size=3 value='<% get_single_ip("switch_gateway","2"); %>' name="switch_gateway_2"> . 
		<INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") size=3 value='<% get_single_ip("switch_gateway","3"); %>' name="switch_gateway_3" ></TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.routename)</script> :&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial><INPUT maxLength=15 size=17 name="machine_name" value='<% nvram_get("machine_name"); %>'></FONT></TD>
        </TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
