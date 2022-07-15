		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.srvipaddr)</script>:&nbsp;</TD>
		<TD class=FUNFIELD><input type=hidden name="hb_server_ip" value="4">
	  	<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("hb_server_ip","0"); %>' name="hb_server_ip_0" onBlur=valid_range(this,0,223,"IP")> .
	  	<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("hb_server_ip","1"); %>' name="hb_server_ip_1" onBlur=valid_range(this,0,255,"IP")> .
	  	<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("hb_server_ip","2"); %>' name="hb_server_ip_2" onBlur=valid_range(this,0,255,"IP")> .
	  	<INPUT class=num maxLength=3 style="width:35" value='<% get_single_ip("hb_server_ip","3"); %>' name="hb_server_ip_3" onBlur=valid_range(this,0,254,"IP")> 
</TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.usrname1)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=63 size=26 name="ppp_username" value='<% nvram_get("ppp_username"); %>' onBlur=valid_name(this,"User%20Name")></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.passwd)</script>:&nbsp;</TD>
		<TD class=FUNFIELD><INPUT maxLength=63 size=26 name="ppp_passwd" value='<% nvram_invmatch("ppp_passwd","","d6nw5v1x2pc7st9m"); %>' type=password onBlur=valid_name(this,"Password")></TD></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><INPUT type=radio value=1 name="ppp_demand" <% nvram_match("ppp_demand_hb","1","checked"); %> onclick=ppp_enable_disable(this.form,1) ><font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.conndemand)</script>&nbsp;&nbsp;</font>
	<INPUT class=num maxLength=4 style="width:35" value='<% nvram_get("ppp_idletime"); %>' name="ppp_idletime" onBlur=valid_range(this,1,9999,"Idle%20time")>&nbsp;&nbsp;<font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.minute)</script></font></TD></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><INPUT type=radio value=0 name="ppp_demand" <% nvram_match("ppp_demand_hb","0","checked"); %> onclick=ppp_enable_disable(this.form,0)><font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.keepalive)</script>&nbsp;&nbsp;</font>
	<INPUT class=num maxLength=4 style="width:35" value='<% nvram_get("ppp_redialperiod"); %>' name="ppp_redialperiod" onBlur=valid_range(this,20,180,"Redial%20period")>&nbsp;&nbsp;<font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.second)</script></font></TD></TR>
