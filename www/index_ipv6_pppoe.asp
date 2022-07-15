<% web_include_file("copyright.asp"); %>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(share.usrname)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="ppp_ipv6_username" value=''></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(share.passwd)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="ppp_ipv6_passwd" value='' type=password></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(share.srvname)</script> (<script>Capture(share.optional)</script>):&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="ppp_ipv6_service" value=''></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD colspan=2 class=FUNNAME1>
<INPUT type=radio value=1 name="ppp_ipv6_demand" onclick=ppp_enable_disable(this.form,1) ><script>Capture(setupcontent.conndemand)</script>&nbsp;&nbsp;
<INPUT class=num maxLength=4 style="width:35" value='' name="ppp_ipv6_idletime" onBlur=valid_range(this,1,9999,"Idle%20time")>&nbsp;&nbsp;<script>Capture(setupcontent.minute)</script>.</TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD colspan=2 class=FUNNAME1>
<INPUT type=radio value=0 name="ppp_ipv6_demand" onclick=ppp_enable_disable(this.form,0)><script>Capture(setupcontent.keepalive)</script>&nbsp;&nbsp;
<INPUT class=num maxLength=4 style="width:35" value='' name="ppp_ipv6_redialperiod" onBlur=valid_range(this,20,180,"Redial%20period")>&nbsp;&nbsp;<script>Capture(setupcontent.second)</script>.</TD>
</TR>
<!--
<TR><script>draw_table(ISHR,"");</script></TR>
<TR><script>draw_table(SUBFUN,setupcontent.dhcpv6_server_settings);</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.dhcpv6_server)</script>:</TD>
<TD class=FUNFIELD><INPUT type=radio value=on name=lan_ipv6_dhcp <% nvram_match("lan_ipv6_dhcp","on","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;<INPUT type=radio value=off name=lan_ipv6_dhcp <% nvram_match("lan_ipv6_dhcp","off","checked"); %>><B><script>Capture(share.disabled)</script></B></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.stadns1)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="lan_ipv6_dns_primary" value='<% nvram_get("lan_ipv6_dns_primary"); %>'> (<script>Capture(share.optional)</script>)</TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.stadns2)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="lan_ipv6_dns_secondary" value='<% nvram_get("lan_ipv6_dns_secondary"); %>'> (<script>Capture(share.optional)</script>)</TD>
</TR>
-->