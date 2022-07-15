	<TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1>
		<INPUT type=radio value=1 name="dslite_config" <% nvram_match("dslite_config","1","checked"); %> onclick=dslite_enable_disable(this.form,1)><script>Capture(setupcontent.autoconfig)</script></TD></TR>
	<TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1>
		<INPUT type=radio value=0 name="dslite_config" <% nvram_match("dslite_config","0","checked"); %> onclick=dslite_enable_disable(this.form,0)><script>Capture(setupcontent.aftrinfo)</script>
		<INPUT class=num maxLength=40 size=17 value='<% nvram_get("dslite_info"); %>' name="dslite_info"></TD></TR>
	<!-- 2011-11-17 add MTU (default: 1500) to "ds-liste" mode (G8 spec) -->
	<input type=hidden name="mtu_enable" value=0>
	<input type=hidden name="wan_mtu" value=1500>

