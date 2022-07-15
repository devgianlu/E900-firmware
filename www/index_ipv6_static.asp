<% web_include_file("copyright.asp"); %>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.interipaddr)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="wan_ipv6_ipaddr" value='<% nvram_get("wan_ipv6_ipaddr"); %>'></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.subnet_prefix_length)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=3 size=3 name="wan_ipv6_prefixlen" value='<% nvram_get("wan_ipv6_prefixlen"); %>'></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(share.defgateway)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="wan_ipv6_gateway" value='<% nvram_get("wan_ipv6_gateway"); %>'></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.prefix_addr)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="wan_ipv6_prefix" value='<% nvram_get("wan_ipv6_prefix"); %>'></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.subnet_prefix_length)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=3 size=3 name="wan_ipv6_prefixlen" value='<% nvram_get("wan_ipv6_prefixlen"); %>'></TD>
</TR>
<TR><script>draw_table(ISHR,"");</script></TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.dhcpv6_client)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT type=radio value=on name=wan_ipv6_dhcp <% nvram_match("wan_ipv6_dhcp","on","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;<INPUT type=radio value=off name=wan_ipv6_dhcp <% nvram_match("wan_ipv6_dhcp","off","checked"); %>><B><script>Capture(share.disabled)</script></B></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.duid)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="wan_ipv6_duid" value='<% nvram_get("wan_ipv6_duid"); %>'></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;</TD>
<TD class=FUNFIELD><font face="Arial" style="font-size: 8pt;"><script>Capture(setupcontent.msg)</script></font></TD>
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
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="lan_ipv6_dns_secondary" value='<% nvram_get("wan_ipv6_dns_secondary"); %>'> (<script>Capture(share.optional)</script>)</TD>
</TR>
-->