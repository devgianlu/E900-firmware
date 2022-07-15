<% nvram_status_get("hidden1"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stacontent.logsta)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
<script language=javascript>
        var status1 = "<% nvram_status_get("status1"); %>";
        var status2 = "<% nvram_status_get("status2"); %>";
	if(status1 == "Status")         status1 = bmenu.statu;
        if(status2 == "Connecting")     status2 = hstatrouter2.connecting;
        else    if(status2 == "Disconnected")   status2 = hstatrouter2.disconnected;
        else    if(status2 == "Connected")      status2 = stacontent.conn;
	document.write(status2);
	document.write("&nbsp;&nbsp;");

	var but_arg = "<% nvram_status_get("button1"); %>";
        var wan_proto = "<% nvram_get("wan_proto"); %>";
        var but_type = "";
	if(but_arg == "Connect")        but_value = stacontent.connect;
        else if(but_arg == "Disconnect")        but_value = hstatrouter2.disconnect;
        but_type = but_arg +"_" + wan_proto;
	document.write("<INPUT type=button value='"+but_value+"' onClick=Connect(this.form,'"+but_type+"')>");
</script>
</B></FONT></TD></TR>
<% nvram_status_get("hidden2"); %>        
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(setupcontent.interipaddr)</script>:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
	  <script>
		if ("<% nvram_get("wan_proto"); %>" == "dslite")
			document.write("N/A");
		else
			document.write('<% nvram_status_get("wan_ipaddr"); %>');
	  </script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.submask)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
	  <script>
		if ("<% nvram_get("wan_proto"); %>" == "dslite")
			document.write("N/A");
		else	
			document.write('<% nvram_status_get("wan_netmask"); %>');
	  </script></B></FONT></TD>
	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.defgateway)</script>:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
	  <script>
		if ("<% nvram_get("wan_proto"); %>" == "dslite")
			document.write("N/A");
		else	
			document.write('<% nvram_status_get("wan_gateway"); %>');
	  </script></B></FONT></TD>
	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dns)</script>1:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
	  <script>
		if ("<% nvram_get("wan_proto"); %>" == "dslite")
			document.write("N/A");
		else	
			document.write('<% nvram_status_get("wan_dns0"); %>');
	  </script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dns)</script>2:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
	  <script>
		if ("<% nvram_get("wan_proto"); %>" == "dslite")
			document.write("N/A");
		else	
			document.write('<% nvram_status_get("wan_dns1"); %>');
	  </script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dns)</script>3:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
	  <script>
		if ("<% nvram_get("wan_proto"); %>" == "dslite")
			document.write("N/A");
		else	
			document.write('<% nvram_status_get("wan_dns2"); %>');
	  </script></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.mtu)</script>:&nbsp;</FONT></TD>
          <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt"><B>
		<script>
//		if('<% nvram_get("mtu_enable"); %>' == "0")
//			document.write(share.auto);
//		else
		var wan_link = "<% nvram_status_get("wan_link"); %>";
		if(wan_link == "0")
			document.write('<% nvram_get("wan_mtu"); %>');
		else	
			document.write('<% nvram_get("wan_run_mtu"); %>');
		</script>
		</B></FONT></TD></TR>
		<script>
	var display_lease = 1;
<% nvram_invmatch("wan_proto", "dhcp", "display_lease = 0;"); %>
<% nvram_match("switch_mode", "1", "display_lease = 0;"); %>
	if (display_lease)
	{
		document.write("<TR>");
		draw_table(SUBFUN,"");
		document.write("<TD class=FUNNAME2><FONT style=\"FONT-SIZE: 8pt\">");
		Capture(errmsg.err42)
		document.write(":&nbsp;</FONT></TD>");
		document.write("<TD class=FUNFIELD><FONT style=\"FONT-SIZE: 8pt\"><B>");

		var time = <% nvram_get("wan_lease"); %>;
		var day = 0;
		var hour = 0;
		var min = 0;
		var sec = 0;

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
			sec = time%60;
		}

		if(day == 1)
			document.write(day+" "+stacontent.day+" ");
		else if(day > 1)
			document.write(day+" "+stacontent.days+" ");
		if(hour)
			document.write(hour+" "+stacontent.hour+" ");
		if(min)
			document.write(min+" "+stacontent.min+" ");
		if(sec)
			document.write(min+" "+stacontent.sec+" ");

			document.write("</B></FONT></TD></TR>");
		}
		</script>
