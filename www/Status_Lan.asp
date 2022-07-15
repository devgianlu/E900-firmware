<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Local Network Status</TITLE>
<% no_cache(); %>
<meta name = "format-detection" content = "telephone=no">
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = statopmenu.localnet;
var dhcp_win = null;
function ViewDHCP()
{
	if ( close_session == "1" )
	{
		dhcp_win = self.open('DHCPTable.asp','inLogTable','alwaysRaised,resizable,scrollbars,width=920,height=600');
	}
	else
	{
		dhcp_win = self.open('DHCPTable.asp;session_id=<% nvram_get("session_key"); %>','inLogTable','alwaysRaised,resizable,scrollbars,width=920,height=600');
	}
	dhcp_win.focus();
}
function exit()
{
        closeWin(dhcp_win);
}
</SCRIPT>

</HEAD>
<BODY onunload=exit()>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,statopmenu.localnet);</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><span ><script>Capture(share.locmacaddr)</script>:&nbsp;</span></FONT></TD>
        <TD class=FUNFIELD>&nbsp;<FONT style="FONT-SIZE: 8pt"><B><% nvram_get("lan_hwaddr"); %></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.routeripaddr)</script>:&nbsp;</FONT></TD>
		<script language=javascript>
		var switch_mode = "<% nvram_get("switch_mode");%>";
		var lanip;
		if(switch_mode == "1")
			lanip = "<% nvram_get("switch_ipaddr"); %>";
		else
			lanip = "<% nvram_get("lan_ipaddr"); %>";
        	document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+lanip+"</B></FONT></TD>");
		</script>
	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.submask)</script>:&nbsp;</FONT></TD>
	    	<script language=javascript>
		var switch_mode = "<% nvram_get("switch_mode");%>";
		var lanip;
		if(switch_mode == "1")
			lannk = "<% nvram_get("switch_netmask"); %>";
		else
			lannk = "<% nvram_get("lan_netmask"); %>";
        	document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+lannk+"</B></FONT></TD>");
		</script>
	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stalan.ipv6localaddr)</script>:&nbsp;</FONT></TD>
        	<script>
		var switch_mode = "<% nvram_get("switch_mode");%>";
		if(switch_mode != "1")
		{
		       	var addr = '<% get_ipv6_linklocal_addr(); %>';
					if (addr == '')
				//2011-06-07, both IPv6 & 6rd tunnel are disabled... IPv6 Link-Local Address: N/A
				document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.na+"</B></FONT></TD>");
				else
				{
		        	var tmp = addr.split(" ");
		        	document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+tmp[1]+"</B></FONT></TD>");
				}
		}
		else
			document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.na+"</B></FONT></TD>");
        	</script>
        </TR> 
       	<TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(setupcontent.prefix_addr)</script>:&nbsp;</FONT></TD>
        	<script>
	var switch_mode = "<% nvram_get("switch_mode");%>";
	if(switch_mode != "1")
	{
		var wan_ipv6_proto = "<% nvram_get("wan_ipv6_proto"); %>";
        	var ipv6_prefix_addr = "<% nvram_get("ipv6_delegate_prefix"); %>";
		var ipv6_prefix_length = "<% nvram_get("ipv6_delegate_prefixlen"); %>";
               	if (wan_ipv6_proto == "dhcp" || wan_ipv6_proto == "tunnel" || wan_ipv6_proto == "pppoe" || wan_ipv6_proto == "pppoe-tunnel" || wan_ipv6_proto == "dhcp-tunnel"  ) {
                	if (ipv6_prefix_addr=="")
                        	document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B></B></FONT></TD>");
                       	else
                         	document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+ipv6_prefix_addr+"/"+ipv6_prefix_length+"</B></FONT></TD>");
		} else
			document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.na+"</B></FONT></TD>");
	}
	else
		document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.na+"</B></FONT></TD>");
		
        	</script>
        </TR>

	<TR><script>draw_table(ISHR,"");</script></TR>
	<TR><script>draw_table(MAINFUN,share.dhcpsrv);</script></TR>
	<TR><script>draw_table(SUBFUN,"IPv4");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dhcpsrv)</script>:&nbsp;</FONT></TD>
		<script language=javascript>
			var switch_mode = "<%nvram_get("switch_mode");%>";
			if(switch_mode == "1")
        			document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.disabled+"</B></FONT></TD>");
			else
			{
				var lan_ptl = "<%nvram_get("lan_proto");%>"; 
				if(lan_ptl == "dhcp")
	       				document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.enabled+"</B></FONT></TD>");
				else
       					document.write("<TD class=FUNFIELD>&nbsp;<FONT style='FONT-SIZE: 8pt'><B>"+share.disabled+"</B></FONT></TD>");
					
			}
		</script>
	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><span ><script>Capture(stalan.startip)</script>:&nbsp;</span></FONT></TD>
        <TD class=FUNFIELD><b>&nbsp;<% prefix_ip_get("lan_ipaddr",2); %><% nvram_get("dhcp_start"); %>&nbsp;</b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><span ><script>Capture(stalan.endip)</script>:&nbsp;</span></TD>
        <TD class=FUNFIELD>&nbsp;<b><script language=javascript>
	var prefix = "<% prefix_ip_get("lan_ipaddr",2); %>";
	var lanip = <% get_single_ip("lan_ipaddr",3); %>;
	var start = <% nvram_get("dhcp_start"); %>;
	var num = <% nvram_get("dhcp_num"); %>;
	document.write(prefix);
	if(lanip<start || lanip>start+num-1)
		document.write(start+num-1);
	else
		document.write(start+num);
          </script>
&nbsp;</b></TD></TR>
<!--
	<TR><script>draw_table(ISHR,"");</script></TR>
	<TR><script>draw_table(SUBFUN,"IPv6");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.dhcpsrv)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD>&nbsp;<FONT style="FONT-SIZE: 8pt"><B><% nvram_match("lan_ipv6_dhcp", "on", "<script>Capture(share.enabled)</script>"); %><% nvram_match("lan_ipv6_dhcp", "off", "<script>Capture(share.disabled)</script>"); %></B></FONT></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stalan.lan_prefixaddr)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD>&nbsp;<FONT style="FONT-SIZE: 8pt"><B><% nvram_get("lan_ipv6_prefix"); %></B></FONT></TD></TR>  
        <TR><script>draw_table(SUBFUN,"");</script>
               <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(stalan.lan_prefixlen)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD>&nbsp;<FONT style="FONT-SIZE: 8pt"><B><% nvram_get("lan_ipv6_prefixlen"); %></B></FONT></TD></TR> 
--> 
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>

<script>document.write("<INPUT  id=button1 onclick=ViewDHCP() type=button name=dhcp_table value=\"" + stabutton.dhcpclitbl + "\">");</script>

          </TD></TR>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("NOBT_TAIL.asp"); %>
</BODY></HTML>
