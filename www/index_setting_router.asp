		<TD class=FUNNAME2>&nbsp;<script>Capture(share.ipaddr)</script>:&nbsp;</TD>
<TD class=FUNFIELD dir="ltr"><INPUT class=num maxLength=3 onBlur=valid_range(this,1,223,"IP") size=3 value='<% get_single_ip("lan_ipaddr","0"); %>' name="lan_ipaddr_0"> . 
<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") size=3 value='<% get_single_ip("lan_ipaddr","1"); %>' name="lan_ipaddr_1"> . 
<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") size=3 value='<% get_single_ip("lan_ipaddr","2"); %>' name="lan_ipaddr_2"> . 
<INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") size=3 value='<% get_single_ip("lan_ipaddr","3"); %>' name="lan_ipaddr_3" onchange=Sel_SubMask(this.form.lan_netmask,this.form,1) ></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.submask)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD><SELECT onchange=Sel_SubMask(this.form.lan_netmask,this.form,0) size=1 name="lan_netmask" >
<script>
var NAME = new Array("255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248", "255.255.255.252");
var lan_netmask = '<% nvram_get("lan_netmask"); %>';
var selected;
for(i=0;i<NAME.length;i++) {
				if(lan_netmask == NAME[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+NAME[i]+"</OPTION>");
			}
		</script>
</SELECT></TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.routename)</script> :&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial><INPUT maxLength=15 size=17 name="machine_name" value='<% nvram_get("machine_name"); %>'></FONT></TD>
        </TR>

<!--
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25></TD>
          <TD width =8 background=image/UI_04.gif height=25></TD>
          <TD colSpan=3 height=25></TD>
          <TD width=101 height=25><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.urladdr)</script> :&nbsp;</FONT></TD>
          <TD width=296 height=25><FONT style="FONT-SIZE: 8pt" face=Arial><INPUT maxLength=39 size="20" name="router_url_address" value='<% nvram_get("router_url_address"); %>' onBlur=valid_url(this)></FONT></TD>
          <TD height=25></TD>
          <TD width=15 background=image/UI_05.gif height=25></TD>
        </TR>
-->
<TR><script>draw_table(ISHR,"");</script></TR>
<TR><script>draw_table(SUBFUN,lefemenu.dhcpserverset);</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.dhcpsrv)</script>:&nbsp;</TD>
		<TD class=FUNFIELD><input type="radio" name="lan_proto" value="dhcp" <% nvram_selmatch("lan_proto", "dhcp", "checked"); %> onClick="SelDHCP('dhcp',this.form)"><B><script>Capture(share.enabled)</script></B>&nbsp;
		<input type="radio" name="lan_proto" value="static" <% nvram_selmatch("lan_proto", "static", "checked"); %> onClick="SelDHCP('static',this.form)"><B><script>Capture(share.disabled)</script></B>&nbsp;&nbsp;<script>document.write("<input  type=button name=dhcp_res value='" + adbutton.dhcpres + "' onclick=DHCP_Res()>");</script></TD></TR>	
<input type=hidden name=dhcp_check>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.startipaddr)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD dir="ltr">&nbsp;<% prefix_ip_get("lan_ipaddr",1); %><B>&nbsp;<INPUT maxLength=3 onBlur=Sel_SubMask_onblur(this.form.lan_netmask,this.form,"dhcp_start") size=3 value='<% nvram_get("dhcp_start");%>' name="dhcp_start_tmp" class=num></B></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(setupcontent.maxdhcpusr)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD>&nbsp;<INPUT maxLength=3 onBlur=Sel_SubMask_onblur(this.form.lan_netmask,this.form,"dhcp_num") size=3 value='<% nvram_get("dhcp_num"); %>' name="dhcp_num" class=num></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(setupcontent.dhcprange)</script>:&nbsp;</FONT></TD>
<!--
<TD width=290 height=25>&nbsp;
<script>
		var start = '<% nvram_get("dhcp_start"); %>';
		var num = '<% nvram_get("dhcp_num"); %>';
		var end = parseInt(start)+parseInt(num-1);
		document.write("<% prefix_ip_get("lan_ipaddr",2); %>"+start+" ~ "+end);
		</script></TD>
-->
<TD class=FUNFIELD dir="ltr"><SPAN id=DymRange></SPAN></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.clileasetime)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD>&nbsp;<INPUT maxLength=4 onBlur=valid_range(this,0,9999,"DHCP%20Lease%20Time") size=4 value='<% nvram_get("dhcp_lease"); %>' name="dhcp_lease" class=num>&nbsp;<script>Capture(setupcontent.clileasetimemin)</script></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(setupcontent.stadns1)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD dir="ltr">&nbsp;<input type=hidden name=wan_dns value=4><INPUT maxLength=3 onBlur=valid_range(this,0,223,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","0"); %>' name="wan_dns0_0" class=num id=dns00> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","1"); %>' name="wan_dns0_1" class=num id=dns01> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","2"); %>' name="wan_dns0_2" class=num id=dns02> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,254,"DNS") size=3 value='<% get_dns_ip("wan_dns","0","3"); %>' name="wan_dns0_3" class=num id=dns03></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(setupcontent.stadns2)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD dir="ltr">&nbsp;<INPUT maxLength=3 onBlur=valid_range(this,0,223,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","0"); %>' name="wan_dns1_0" class=num id=dns10> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","1"); %>' name="wan_dns1_1" class=num id=dns11> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","2"); %>' name="wan_dns1_2" class=num id=dns12> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,254,"DNS") size=3 value='<% get_dns_ip("wan_dns","1","3"); %>' name="wan_dns1_3" class=num id=dns13></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(hindex2.dns3)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD dir="ltr">&nbsp;<INPUT maxLength=3 onBlur=valid_range(this,0,223,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","0"); %>' name="wan_dns2_0" class=num id=dns20> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","1"); %>' name="wan_dns2_1" class=num id=dns21> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","2"); %>' name="wan_dns2_2" class=num id=dns22> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,254,"DNS") size=3 value='<% get_dns_ip("wan_dns","2","3"); %>' name="wan_dns2_3" class=num id=dns23></B></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.wins)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD dir="ltr">&nbsp;<input type=hidden name=wan_wins value=4><INPUT maxLength=3 onBlur=valid_range(this,0,223,"WINS") size=3 value='<% get_single_ip("wan_wins","0"); %>' name="wan_wins_0" class=num> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"WINS") size=3 value='<% get_single_ip("wan_wins","1"); %>' name="wan_wins_1" class=num> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,255,"WINS") size=3 value='<% get_single_ip("wan_wins","2"); %>' name="wan_wins_2" class=num> . 
<INPUT maxLength=3 onBlur=valid_range(this,0,254,"WINS") size=3 value='<% get_single_ip("wan_wins","3"); %>' name="wan_wins_3" class=num></TD></TR>
<TR><script>draw_table(ISHR,"");</script></TR>
<!--TR>
          <TD align=right width=156 bgColor=#e7e7e7 colSpan=3 height=25><B>Time Setting</B></TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD colSpan=3 height=25>&nbsp;</TD>
          <TD width=123 height=25><input type=radio name=time_mode>Manually</TD>
          <TD width=290 height=25>&nbsp;</TD>  
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25></TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD colSpan=3 height=25>&nbsp;</TD>
          <TD width=123 height=25><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;Date:</FONT></TD>
          <TD width=290 height=25>&nbsp;<font face="Arial" style="font-size: 8pt">
                	<INPUT class=num maxLength=4 size=4 name="year" value="<% show_time_setting("year","0"); %>" style="font-family:Courier; font-size:10pt">&nbsp;-&nbsp;
                	<INPUT class=num maxLength=3 size=3 name="mon" value="<% show_time_setting("mon","0"); %>" style="font-family:Courier; font-size:10pt">&nbsp;-&nbsp;
                	<INPUT class=num maxLength=3 size=3 name="mday" value="<% show_time_setting("mday","0"); %>" style="font-family:Courier; font-size:10pt">&nbsp;
                	(yyyy-mm-dd)</font></TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25></TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD colSpan=3 height=25>&nbsp;</TD>
          <TD width=123 height=25><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;Time:</FONT></TD>
          <TD width=290 height=25>&nbsp;<font face="Arial" style="font-size: 8pt">
                	<INPUT class=num maxLength=3 size=3 name="hour" value="<% show_time_setting("hour","0"); %>" style="font-family:Courier; font-size:10pt">:&nbsp;
                	<INPUT class=num maxLength=3 size=3 name="min" value="<% show_time_setting("min","0"); %>" style="font-family:Courier; font-size:10pt">:&nbsp;
                	<INPUT class=num maxLength=3 size=3 name="sec" value="<% show_time_setting("sec","0"); %>" style="font-family:Courier; font-size:10pt">&nbsp;(hh-mm-ss)	</font></TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=1>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=1>&nbsp;</TD>
          <TD colSpan=6>
            <TABLE>
              <TBODY>
              <TR>
                <TD width=16 height=1>&nbsp;</TD>
                <TD width=13 height=1>&nbsp;</TD>
                <TD width=410 colSpan=3 height=1>
                  <HR color=#b5b5e6 SIZE=1>
                </TD>
                <TD width=15 height=1>&nbsp;</TD></TR></TBODY></TABLE></TD>
          <TD width=15 background=image/UI_05.gif height=1>&nbsp;</TD></TR>
        <TR>
          <TD align=right width=156 bgColor=#e7e7e7 colSpan=3 height=25><B>Time Setting</B></TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD colSpan=3 height=25>&nbsp;</TD>
          <TD width=123 height=25><input type=radio name=time_mode checked value="1">Automatically</TD>
          <TD width=290 height=25>&nbsp;</TD>  
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR-->
