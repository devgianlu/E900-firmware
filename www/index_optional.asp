<TR><script>draw_table(SUBFUN,lefemenu.optset+"<BR>"+lefemenu.requireisp);</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.hostname)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial><INPUT maxLength=39 name="wan_hostname" size="26" value='<% nvram_get("wan_hostname"); %>' onBlur=valid_name(this,"Host%20Name")></FONT></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" 
            face=Arial>&nbsp;<script>Capture(share.domainname)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" 
            face=Arial><INPUT maxLength=63 name="wan_domain" size="26" value='<% nvram_get("wan_domain"); %>' onBlur=valid_name(this,"Domain%20name",SPACE_NO)></FONT></TD></TR>
<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.mtu)</script>:&nbsp;</FONT></TD>
<TD class=FUNFIELD><select name="mtu_enable" onChange=SelMTU(this.form.mtu_enable.selectedIndex,this.form)>
<script>
			var NAME = new Array("0", "1");
			var STRING = new Array(share.auto, share.mtumanual);
			var mtu_enable = '<% nvram_get("mtu_enable"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(mtu_enable == NAME[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
</select>
&nbsp;&nbsp;&nbsp;<FONT style="FONT-SIZE: 8pt" face=Arial><script>Capture(share.mtusize)</script>:</FONT>&nbsp;&nbsp;<INPUT maxLength=4 onBlur=valid_mtu(this) style="width:35" value='<% nvram_get("wan_mtu"); %>' name="wan_mtu"></TD></TR>
<!--TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25></TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD colSpan=3 height=25>&nbsp;</TD>
          <TD width=123 height=25><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(share.speedduplex)</script>:</FONT></TD>
          <TD width=290 height=25><B><select name="wan_speed" >
		<script>
			var NAME = new Array("0", "1", "2", "3", "4");
			var STRING = new Array(share.full10, share.half10, share.full100, share.half100, share.auto);
			var wan_speed = '<% nvram_get("wan_speed"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wan_speed == NAME[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
		</select></TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR-->
<TR><script>draw_table(ISHR,"");</script></TR>
