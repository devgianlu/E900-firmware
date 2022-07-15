		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.enc)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<SELECT name=wl1_wep_bit size=1 onChange=keyMode_1(this.form.wl1_wep_bit.selectedIndex) > 
		<script>
			var NAME = new Array("64", "128");
			var STRING = new Array(wlansec.tenhex, wlansec.twentysixhex);
			var wl1_wep_bit = '<% nvram_selget("wl1_wep_bit"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl1_wep_bit == NAME[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
		</SELECT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.passphrase)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT maxLength=16 name=wl1_passphrase size=26 >&nbsp;
			<INPUT type=hidden value=Null name=generateButton1>


<script>document.write("<INPUT  type=button onclick=generateKey1(this.form) name=wepGenerate1 value=\"" + wlanbutton.generate + "\">");</script>

          </TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key1)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl1_key1 value='<% get_wep_value("key1", 1); %>'></TD></TR>          
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key2)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl1_key2 value='<% get_wep_value("key2", 1); %>'></TD></TR>          
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key3)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl1_key3 value='<% get_wep_value("key3", 1); %>'></TD></TR>          
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.key4)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<INPUT size=26 name=wl1_key4 value='<% get_wep_value("key4", 1); %>'></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.txkey)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><B>&nbsp;<input type=hidden name=wl1_WEP_key><input type=hidden name=wl1_wep value=restricted><SELECT class=num size=1 name="wl1_key" >
		<script>
			var NAME = new Array("1","2","3","4");
			var STRING = new Array("1","2","3","4");
			var wl1_key = '<% nvram_get("wl1_key"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl1_key == STRING[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
		</SELECT></TD></TR>
