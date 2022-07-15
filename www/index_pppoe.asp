<% web_include_file("copyright.asp"); %>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.usrname1)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=63 size=26 name="ppp_username" value='<% nvram_get("ppp_username"); %>' onBlur=valid_name(this,"User%20Name")></TD>
		</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.passwd)</script>:&nbsp;</TD>
	  	<TD class=FUNFIELD><INPUT maxLength=63 size=26 name="ppp_passwd" value='<% nvram_invmatch("ppp_passwd","","d6nw5v1x2pc7st9m"); %>' type=password onBlur=valid_name(this,"Password")></TD>
	  	</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(share.srvname)</script> (<script>Capture(share.optional)</script>):</TD>
	  	<TD class=FUNFIELD><INPUT maxLength=63 size=26 name="ppp_service" value='<% nvram_get("ppp_service"); %>' onBlur=valid_name(this,"")></TD>
		</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><INPUT type=radio value=1 name="ppp_demand" <% nvram_match("ppp_demand_pppoe","1","checked"); %> onclick=ppp_enable_disable(this.form,1) ><font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.conndemand)</script>&nbsp;&nbsp;</font>
	<INPUT class=num maxLength=4 style="width:35" value='<% nvram_get("ppp_idletime"); %>' name="ppp_idletime" onBlur=valid_range(this,1,9999,"Idle%20time")>&nbsp;&nbsp;<font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.minute)</script>.</font></TD>
		</TR>
       	<TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><INPUT type=radio value=0 name="ppp_demand" <% nvram_match("ppp_demand_pppoe","0","checked"); %> onclick=ppp_enable_disable(this.form,0)><font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.keepalive)</script>&nbsp;&nbsp;</font>
	<INPUT class=num maxLength=4 style="width:35" value='<% nvram_get("ppp_redialperiod"); %>' name="ppp_redialperiod" onBlur=valid_range(this,20,180,"Redial%20period")>&nbsp;&nbsp;<font color=<% nvram_else_match("aol_block_traffic1","1","gray","black"); %>><script>Capture(setupcontent.second)</script>.</font></TD>
          </TR>
