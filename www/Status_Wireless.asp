<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Wireless Network</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>function ViewDHCP(){self.open('DHCPTable.asp', 'DHCP', 'alwaysRaised,resizable,scrollbars,width=560,height=400');}</SCRIPT>
<script>
document.title = bmenu.wirelessnet;

var wl0_net_mode = "<% nvram_get("wl0_net_mode"); %>";

var wl0_nbw = "<% nvram_get("wl0_nbw"); %>";
var wl0_channel = '<% nvram_get("wl0_channel"); %>';
var wl0_nctrlsb = "<% nvram_get("wl0_nctrlsb"); %>";

var cur_nctrlsb = '<% wl_cur_nctrlsb(); %>';
var cur_channel = '<% wl_cur_channel(); %>';
var cur_nbw = '<% wl_cur_nbw(); %>';

var wl_40m_disable = "<% nvram_get("wl_40m_disable"); %>";

var cur_nctrlsb_0 = '<% wl_cur_nctrlsb(0); %>';
var cur_channel_0 = '<% wl_cur_channel(0); %>';
var cur_nbw_0 = '<% wl_cur_nbw(0); %>';
var wl0_security_mode = "<% nvram_get("wl0_security_mode"); %>";
var wl0_crypto = "<% nvram_get("wl0_crypto"); %>";

</script>

</HEAD>
<BODY>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,wlanleftmenu.lgstatus);</script></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
<!--
	<TR><TD bgColor=#5b5b5b height=25><P align=right><B><FONT style="FONT-SIZE: 9pt" face=Arial color=#ffffff><script>Capture(wlanleftmenu.lgstatus)</script></FONT></B></P></TD><TD bgColor=#5b5b5b></TD>
-->
        <TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><span>&nbsp;<script>Capture(share.macaddr)</script>:&nbsp;</span></FONT></TD>
        <TD class=FUNFIELD>&nbsp;<FONT style="FONT-SIZE: 8pt"><B><% nvram_get("wl0_hwaddr"); %></B></FONT></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><span>&nbsp;<script>Capture(stawlan.mode)</script>:&nbsp;</span></FONT></TD>
		<TD class=FUNFIELD><b>&nbsp;<% nvram_match("wl0_net_mode", "mixed", "<script>Capture(wlansetup.mixed)</script>"); %><% nvram_match("wl0_net_mode", "b-only", "<script>Capture(wlansetup.bonly)</script>"); %><% nvram_match("wl0_net_mode", "g-only", "<script>Capture(wlansetup.gonly)</script>"); %><% nvram_match("wl0_net_mode", "disabled", "<script>Capture(share.disabled)</script>"); %><% nvram_match("wl0_net_mode", "n-only", "<script>Capture(wlansetup.nonly)</script>"); %><% nvram_match("wl0_net_mode", "bg-mixed", "<script>Capture(wlansetup.bgmixed)</script>"); %>&nbsp;</b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><span>&nbsp;<script>Capture(wlansetup.ssid)</script>:&nbsp;</span></FONT></TD>
        <TD class=FUNFIELD><b>&nbsp;<% nvram_get_len("wl0_ssid","25"); %>&nbsp;</b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><span>&nbsp;<script>Capture(wlansetup.radioband)</script>:&nbsp;</span></FONT></TD>
         <TD class=FUNFIELD><b>&nbsp;<script>
		if(wl0_net_mode == "disabled" || cur_channel_0 == "")
			document.write(share.na);
		/*
		else if(wl_40m_disable == "1" || cur_nbw_0 == "20MHz" || cur_nbw_0 == "20")
			document.write(wlansetup.standard20);
		else
			document.write(wlansetup.wideauto);
			//document.write(wlansetup.wide40);
		*/
		else
			document.write(cur_nbw_0);
	</script>
	</b></TD></TR>
<!--
<% support_match("DISABLE_11N_40M_SUPPORT", "1", "<!--"); %>
        <TR>
          <TD width=156 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD width=22 height=25>&nbsp;</TD>
          <TD width=125 height=25><font style="font-size: 8pt">&nbsp;<script>Capture(wlansetup.widechannel)</script>:&nbsp;</font></TD>
          <TD width=294 height=25><b>&nbsp;<script>
		if(wl0_net_mode == "disabled" || cur_channel_0 == "")
			document.write(share.na);
		else if(wl_40m_disable == "1" || cur_nbw_0 == "20MHz" || cur_nbw_0 == "20")
			document.write(share.na);
		else
			document.write(parseInt(cur_channel_0));
		</script>
		</b></TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
<% support_match("DISABLE_11N_40M_SUPPORT", "1", "-->"); %>
-->
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><font style="font-size: 8pt">&nbsp;<script>Capture(wlansetup.channel)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD><b>&nbsp;<script>
		if(wl0_net_mode == "disabled" || cur_channel_0 == "")
			document.write(share.na);
		else if(wl_40m_disable == "1" || cur_nbw_0 == "20MHz" || cur_nbw_0 == "20")
			document.write(cur_channel_0);		
		else {	// 40
			if(cur_nctrlsb_0 == "upper") {
				document.write(parseInt(cur_channel_0)+2);
			}
			else {
				document.write(parseInt(cur_channel_0)-2);
			}
		}
		</script>
		</b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><font style="font-size: 8pt">&nbsp;<script>Capture(bmenu.security)</script>:&nbsp;</font></TD>
         <TD class=FUNFIELD><b>&nbsp;<script>
			if (wl0_security_mode == 'disabled')
				Capture(share.disabled);
			else if (wl0_security_mode == 'wep')
				Capture(wlansec.wep);
			else if (wl0_security_mode == 'wpa_personal')
				Capture(hwlsec2.wpapersonal);
			else if (wl0_security_mode == 'wpa2_personal' || wl0_security_mode == 'wpa_wpa2_mixed')
			{
				if (wl0_crypto == 'aes')
					Capture(hwlsec2.wpa2personal);
				else
					Capture(hwlsec2.wpa2mixed);
			}			
			else if (wl0_security_mode == 'wpa_enterprise')
				Capture(hwlsec2.wpaenterprise);
			else if (wl0_security_mode == 'wpa2_enterprise')
				Capture(hwlsec2.wpa2enterprise);
			else if (wl0_security_mode == 'radius')
				Capture(wlansec.radius);
			else if (wl0_security_mode == 'wpa_wpa2_enterprise')
				Capture(hwlsec2.enterprisemixed);
		</script>
			&nbsp;</b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><font style="font-size: 8pt">&nbsp;<script>Capture(wlansetup.ssidbroadcast)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD><b>&nbsp;<% nvram_else_match("wl0_closed", "0", "<script>Capture(share.enabled)</script>", "<script>Capture(share.disabled)</script>"); %>&nbsp;</b>
          </TD></TR>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("NOBT_TAIL.asp"); %>
</BODY></HTML>
