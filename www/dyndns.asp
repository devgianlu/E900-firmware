		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.usrname1)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input name="ddns_username" size=26 maxlength=32 value='<% nvram_get("ddns_username"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"User%20Name")>
	  </FONT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.passwd)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input type=password name="ddns_passwd" size=26 maxlength=32 value='<% nvram_invmatch("ddns_passwd","","X012345678900001"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"Password")>
	  </FONT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.hostname)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input name="ddns_hostname" size=26 maxlength=128 value='<% nvram_get("ddns_hostname"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"Host%20Name")></b>

          </FONT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(ddns.system)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><SELECT name="ddns_service"> 
		<OPTION value=dyndns <% nvram_selmatch("ddns_service", "dyndns", "selected"); %> selected><b><script>Capture(ddns.dynamic)</script></b></OPTION> 
      		<OPTION value=dyndns-static <% nvram_selmatch("ddns_service", "dyndns-static", "selected"); %>><b><script>Capture(ddns.static1)</script></b></OPTION>
      		<OPTION value=dyndns-custom <% nvram_selmatch("ddns_service", "dyndns-custom", "selected"); %>><b><script>Capture(ddns.custom)</script></b></OPTION>
	</SELECT>&nbsp;</TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(ddns.mailexchange)</script> (<script>Capture(share.optional)</script>):</FONT></TD>
        <TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial>

<input name="ddns_mx" size=26 maxlength=63 value='<% nvram_get("ddns_mx"); %>' onFocus="check_action(this,0)" onBlur=valid_name(this,"Mail%20Exchange")></b>

          </FONT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(ddns.backupmx)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=YES name=ddns_backmx <% nvram_match("ddns_backmx","YES","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=NO name=ddns_backmx <% nvram_match("ddns_backmx","NO","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(ddns.wildcard)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=ON name=ddns_wildcard <% nvram_match("ddns_wildcard","ON","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=OFF name=ddns_wildcard <% nvram_match("ddns_wildcard","OFF","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
	</TD></TR>
