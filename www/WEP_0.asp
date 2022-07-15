<input type=hidden name=wl0_key value=1>
<input type=hidden name=wl0_WEP_key>
<input type=hidden name=wl0_wep value=restricted>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.enc)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<SELECT name=wl0_wep_bit size=1 onChange=keyMode_0(this.form.wl0_wep_bit.selectedIndex) > 
		<script>
			var NAME = new Array("64", "128");
			var STRING = new Array(wlansec.tenhex, wlansec.twentysixhex);
			var wl0_wep_bit = '<% nvram_selget("wl0_wep_bit"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl0_wep_bit == NAME[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
		</SELECT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.passphrase)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT maxLength=16 name=wl0_passphrase size=26 value='<% get_wep_value("passphrase"); %>'>&nbsp;
			<INPUT type=hidden value=Null name=generateButton0>


<script>document.write("<INPUT  type=button onclick=generateKey0(this.form) name=wepGenerate0 value=\"" + wlanbutton.generate + "\">");</script>

          </TD></TR>
	<TR>
	  <script>draw_table(SUBFUN,"");</script>
          <TD class=FUNNAME2>&nbsp;
 		<script>
 		if(document.forms[0].wl0_security_mode.value == "radius")
		{
 			Capture(wlansec.key2);
			document.write(":&nbsp;</TD><TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_key2 value='<% get_wep_value("key2"); %>'></TD>");
		}
 		else
		{
 			Capture(wlansec.key1);
			document.write(":&nbsp;</TD><TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_key1 value='<% get_wep_value("key1"); %>'></TD>");
		}
		</script>
	  </TD>
	</TR>
		<!--TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key1)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_key1 value='<% get_wep_value("key1", 0); %>'></TD></TR>          
	<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key2)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_key2 value='<% get_wep_value("key2", 0); %>'></TD></TR>          
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key3)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_key3 value='<% get_wep_value("key3", 0); %>'></TD></TR>          
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key4)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl0_key4 value='<% get_wep_value("key4", 0); %>'></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.txkey)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><B>&nbsp;<input type=hidden name=wl0_WEP_key><input type=hidden name=wl0_wep value=restricted><SELECT class=num size=1 name="wl0_key" >
		<script>
			var NAME = new Array("1","2","3","4");
			var STRING = new Array("1","2","3","4");
			var wl0_key = '<% nvram_get("wl0_key"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl0_key == STRING[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
		</SELECT></TD></TR-->
