<% web_include_file("copyright.asp"); %>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.prefix)</script>:&nbsp;</TD>
<TD class=FUNFIELD>
<INPUT type=hidden name="tunnel_prefix" value='<% nvram_get("tunnel_prefix"); %>'>
<INPUT maxLength=63 size=15 name="tunnel_prefix_show"></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.prefix_length)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=2 size=3 onblur=valid_range2(this,1,64,"prefix_length") name="tunnel_prefix_len" value='<% nvram_get("tunnel_prefix_len"); %>'></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.relay)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=63 size=15 name="tunnel_br" value='<% nvram_get("tunnel_br"); %>' onBlur=valid_name(this,"Domain%20name",SPACE_NO)></TD>
</TR>
<TR><script>draw_table(SUBFUN,"");</script>
<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.ipv4_masklength)</script>:&nbsp;</TD>
<TD class=FUNFIELD><INPUT maxLength=2 size=3 onblur=valid_range(this,0,32,"ipv4_addr_mask") name="ipv4_mask_len" value='<% nvram_get("ipv4_mask_len"); %>'></TD>
</TR>

