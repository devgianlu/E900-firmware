		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.radiussrv)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT type=hidden name=wl0_radius_ipaddr value=4>&nbsp;<INPUT style="width:30px" maxlength=3 name=wl0_radius_ipaddr_0 value='<% get_single_ip("wl0_radius_ipaddr","0"); %>' onBlur=valid_range(this,1,223,"IP") class=num> .
                  <INPUT style="width:30px" maxlength=3 name=wl0_radius_ipaddr_1 value='<% get_single_ip("wl0_radius_ipaddr","1"); %>' onBlur=valid_range(this,0,255,"IP") class=num> .
                  <INPUT style="width:30px" maxlength=3 name=wl0_radius_ipaddr_2 value='<% get_single_ip("wl0_radius_ipaddr","2"); %>' onBlur=valid_range(this,0,255,"IP") class=num> .
                  <INPUT style="width:30px" maxlength=3 name=wl0_radius_ipaddr_3 value='<% get_single_ip("wl0_radius_ipaddr","3"); %>' onBlur=valid_range(this,1,254,"IP") class=num></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.radiusport)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT style="width:40px" name=wl0_radius_port value='<% get_web_valueex("wl0_radius_port"); %>' maxlength=5 onBlur=valid_range(this,1,65535,"Port")>
</TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.sharekey)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_radius_key value='<% get_web_valueex("wl0_radius_key"); %>' maxlength=79>
</TD></TR>
