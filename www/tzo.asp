		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(ddns.emailaddr)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input name="ddns_username_2" size=26 maxlength=32 value='<% nvram_get("ddns_username_2"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"E-mail%20Address")>

          </FONT></TD></TR>    
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(ddns.tzokey)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input type=password name="ddns_passwd_2" size=26 maxlength=16 value='<% nvram_invmatch("ddns_passwd_2","","X012345678900001"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"Password")>

          </FONT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.domainname)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input name="ddns_hostname_2" size=26 maxlength=48 value='<% nvram_get("ddns_hostname_2"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"Domain%20Name")></b>

          </FONT></TD></TR>
