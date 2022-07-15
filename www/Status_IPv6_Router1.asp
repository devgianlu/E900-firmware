<!--
<% nvram_status_ipv6_get("hidden1"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stacontent.logsta)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
<script language=javascript>
        var status1 = "<% nvram_status_ipv6_get("status1"); %>";
        var status2 = "<% nvram_status_ipv6_get("status2"); %>";
	if(status1 == "Status")         status1 = bmenu.statu;
        if(status2 == "Connecting")     status2 = hstatrouter2.connecting;
        else    if(status2 == "Disconnected")   status2 = hstatrouter2.disconnected;
        else    if(status2 == "Connected")      status2 = stacontent.conn;
	document.write(status2);
	document.write("&nbsp;&nbsp;");

	var but_arg = "<% nvram_status_ipv6_get("button1"); %>";
        var wan_proto = "<% nvram_get("wan_ipv6_proto"); %>";
        var but_type = "";
	if(but_arg == "Connect")        but_value = stacontent.connect;
        else if(but_arg == "Disconnect")        but_value = hstatrouter2.disconnect;
        but_type = but_arg +"_" + wan_proto;
	document.write("<INPUT type=button value='"+but_value+"' onClick=Connect(this.form,'"+but_type+"')>");
</script>
</B></FONT></TD></TR>
<% nvram_status_ipv6_get("hidden2"); %>  
-->
<% nvram_match("wan_ipv6_proto", "tunnel", "<!--"); %> 
        <TR><script>draw_table(SUBFUN,"");</script>
                <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(setupcontent.interipaddr)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
          	<script>
			var wan_proto = "<% nvram_get("wan_ipv6_proto"); %>";
          		var ipv6_info_buf = "<% get_ipv6_info("wan_ipv6_info"); %>";
          		var wan_ipv6_info = ipv6_info_buf.split("/");
			if(wan_proto == "disabled")
              			Capture(share.na)
			else if(ipv6_info_buf=="" || wan_ipv6_info[0]=="" || wan_ipv6_info[0]=="::")
				document.write("0:0:0:0:0:0:0:0");
			else
               			document.write(wan_ipv6_info[0]);
          	</script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.defgateway)</script>:&nbsp;</FONT></TD>
          	<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
          	<script>
			if(wan_proto == "disabled")
               			Capture(share.na)
			else if(ipv6_info_buf=="" || wan_ipv6_info[1]=="" || wan_ipv6_info[1]=="::")
				document.write("0:0:0:0:0:0:0:0");
          		else
               			document.write(wan_ipv6_info[1]);
         	</script></B></FONT></TD></TR>
        <script>
        var ipv6_dns = '<% nvram_get("wan_ipv6_dns"); %>';
        
        var tmp = ipv6_dns.split(" ");
        if(tmp[0])      var dns1 = tmp[0];
        else    var dns1 = '';
        if(tmp[1])      var dns2 = tmp[1];
        else    var dns2 = '';
        if(tmp[2])      var dns3 = tmp[2];
        else    var dns3 = '';
        </script>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dns)</script>1:&nbsp;</FONT></TD>
        	<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
        	<script>
			if(wan_proto == "disabled")
               			Capture(share.na)
          		else
               			document.write(dns1);
         	</script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dns)</script>2:&nbsp;</FONT></TD>
          	<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
          	<script>
			if(wan_proto == "disabled")
               			Capture(share.na)
          		else
               			document.write(dns2);
          	</script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dns)</script>3:&nbsp;</FONT></TD>
        	<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
        	<script>
			if(wan_proto == "disabled")
               			Capture(share.na)
          		else
               			document.write(dns3);
          	</script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(errmsg.err42)</script>:&nbsp;</FONT></TD>
         <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
		<script>
		var time = <% nvram_get("wan_ipv6_lease"); %>;
		var day = 0;
		var hour = 0;
		var min = 0;
		var sec = 0;

		if(wan_proto == "disabled"){
                       Capture(share.na);
		}
		else if(time==" "){
			document.write(" ");
		}
		/* IR-B0017355, DUT should show DHCP lease time to 'infinity' not '49710days 6hours 28min 28sec' */
		else if (time == 4294967295 /*0xFFFFFFFF*/)
			document.write("infinity");
		else
		{
			if(time > (24*60*60)) {
				day = Math.floor(time/(24*60*60));
				time = time%(24*60*60);
			}
			if(time > (60*60)) {
				hour = Math.floor(time/(60*60));
				time = time%(60*60);
			}
			if(time > 60) {
				min = Math.floor(time/60);
				time = time%60;
			}
			/* IR-B0017192, P3, DUT doesn't show DHCP Lease Time of IPv6 */
			if(time != 0) { sec = time; }

			if(day == 1)
				document.write(day+" "+stacontent.day+" ");
			else if(day > 1)
				document.write(day+" "+stacontent.days+" ");
			if(hour)
				document.write(hour+" "+stacontent.hour+" ");
			if(min)
				document.write(min+" "+stacontent.min+" ");
			if(sec)
				document.write(sec+" "+stacontent.sec+" ");
		}
		</script>
		</B></FONT></TD></TR>        
<% nvram_match("wan_ipv6_proto", "tunnel", "-->"); %> 
<% nvram_invmatch("wan_ipv6_proto", "dhcp-tunnel", "<!--"); %>
 <TR><script>draw_table(SUBFUN,"")</script>
               <TD colspan=2 class=FUNNAME1>
<script>document.write("<INPUT  style=\"width:170\" onclick=IPv6_DHCPAction(this.form,\'release6\') type=button name=dhcp_release value=\"" + stabutton.dhcprelease + "\">");</script>&nbsp;&nbsp;
<script>document.write("<INPUT  style=\"width:170\" onclick=IPv6_DHCPAction(this.form,\'renew6\') type=button name=dhcp_renew value=\"" + stabutton.dhcprenew + "\">");</script>
		  &nbsp;</TD></TR>  
 <TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stacontent.tunnel_status)</script>:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt">
          <table>
          <tr>
          <TD id="tunnel_status" width="55%"><FONT style="FONT-SIZE: 8pt"><B>
          <script>
		var s = "<% nvram_get("tunnel_status"); %>";
	
		if(s == "connected"){
			document.write(stacontent.conn);
		}else if(s == "disconnected"){
			document.write(hstatrouter2.disconnected);
		}else if(s == "connecting"){
			document.write(hstatrouter2.connecting);
		}else if(s == "undetermined"){
			document.write(hstatrouter2.undetermined);
		}
          </script>
          </B></FONT></td>
          <td>
         <script>
          document.write("<input type=button onclick=\"tunnel_reconnect(this.form,\'reconnect\')\" name=reconnect value=\""+stabutton.reconnect+"\">");
          </script>
          </td>
          </tr>
          </table>
          </FONT></TD></TR>
<% nvram_invmatch("wan_ipv6_proto", "dhcp-tunnel", "-->"); %> 
<% nvram_invmatch("wan_ipv6_proto", "pppoe-tunnel", "<!--"); %>
 <TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stacontent.tunnel_status)</script>:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt">
          <table>
          <tr>
          <TD id="tunnel_status" width="55%"><FONT style="FONT-SIZE: 8pt"><B>
          <script>
		var s = "<% nvram_get("tunnel_status"); %>";
	
		if(s == "connected"){
			document.write(stacontent.conn);
		}else if(s == "disconnected"){
			document.write(hstatrouter2.disconnected);
		}else if(s == "connecting"){
			document.write(hstatrouter2.connecting);
		}else if(s == "undetermined"){
			document.write(hstatrouter2.undetermined);
		}
          </script>
          </B></FONT></td>
          <td>
         <script>
          document.write("<input type=button onclick=\"tunnel_reconnect(this.form,\'reconnect\')\" name=reconnect value=\""+stabutton.reconnect+"\">");
          </script>
          </td>
          </tr>
          </table>
          </FONT></TD></TR>
<% nvram_invmatch("wan_ipv6_proto", "pppoe-tunnel", "-->"); %> 
<% nvram_invmatch("wan_ipv6_proto", "tunnel", "<!--"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stacontent.tunnel_status)</script>:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt">
          <table>
          <tr>
          <TD id="tunnel_status" width="55%"><FONT style="FONT-SIZE: 8pt"><B>
          <script>
		var s = "<% nvram_get("tunnel_status"); %>";
	
		if(s == "connected"){
			document.write(stacontent.conn);
		}else if(s == "disconnected"){
			document.write(hstatrouter2.disconnected);
		}else if(s == "connecting"){
			document.write(hstatrouter2.connecting);
		}else if(s == "undetermined"){
			document.write(hstatrouter2.undetermined);
		}
          </script>
          </B></FONT></td>
          <td>
         <script>
          document.write("<input type=button onclick=\"tunnel_reconnect(this.form,\'reconnect\')\" name=reconnect value=\""+stabutton.reconnect+"\">");
          </script>
          </td>
          </tr>
          </table>
          </FONT></TD></TR>
<% nvram_invmatch("wan_ipv6_proto", "tunnel", "-->"); %> 
