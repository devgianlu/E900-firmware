<% web_include_file("copyright.asp"); %>

<% show_status("init"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Router Status</TITLE>
<% no_cache(); %>
<meta name = "format-detection" content = "telephone=no">
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = share.router;
function DHCPAction(F,I)
{
	F.submit_type.value = I;
	F.submit_button.value = "Status_Router";
	F.change_action.value = "gozila_cgi";
	//F.ipv6_mode = 0;
	F.submit();
}
function Connect(F,I)
{
	F.submit_type.value = I;
	F.submit_button.value = "Status_Router";
	F.change_action.value = "gozila_cgi";
	//F.ipv6_mode = 0;
	F.submit();
}
function init()
{	
	<% show_status("onload");%>

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
function IPv6_DHCPAction(F,I)
{
       	F.submit_type.value = I;
       	F.submit_button.value = "Status_Router";
       	F.change_action.value = "gozila_cgi";
       	//F.ipv6_mode = 1;
       	F.submit();
}

function ShowAlert(M)
{
	var str = "";
	var mode = "";
	var wan_ip = "<% nvram_status_get("wan_ipaddr"); %>";
	var wan_proto = "<% nvram_get("wan_proto"); %>";
	var ac_name = "<% nvram_get("ppp_get_ac"); %>";
	var srv_name = "<% nvram_get("ppp_get_srv"); %>";

	if(document.status.wan_proto.value == "pppoe")
		mode = "PPPoE";
	else if(document.status.wan_proto.value == "l2tp")
		mode = "L2TP";
	else if(document.status.wan_proto.value == "heartbeat")
		mode = "HBS";
	else
		mode = "PPTP";

	if(M == "AUTH_FAIL" || M == "PAP_AUTH_FAIL" || M == "CHAP_AUTH_FAIL")
                str = mode + hstatrouter2.authfail;
//              str = mode + " authentication fail";
	else if(M == "IP_FAIL" || (M == "TIMEOUT" && wan_ip == "0.0.0.0")) {
		if(mode == "PPPoE") {
			if(hstatrouter2.pppoenoip)	// For DE
				str = hstatrouter2.pppoenoip;
			else
				str = hstatrouter2.noip + mode + hstatrouter2.server;
		}
		else
                	str = hstatrouter2.noip + mode + hstatrouter2.server;
	}
//              str = "Can not get a IP address from " + mode + " server";
        else if(M == "NEG_FAIL")
                str = mode + hstatrouter2.negfail;
//              str = mode + " negotication fail";
        else if(M == "LCP_FAIL")
                str = mode + hstatrouter2.lcpfail;
//              str = mode + " LCP negotication fail";
        else if(M == "TCP_FAIL" || (M == "TIMEOUT" && wan_ip != "0.0.0.0" && wan_proto == "heartbeat"))
                str = hstatrouter2.tcpfail + mode + hstatrouter2.server;
//              str = "Can not build a TCP connection to " + mode + " server";
	else 
                str = hstatrouter2.noconn + mode + hstatrouter2.server;
//              str = "Can not connect to " + mode + " server";

	alert(str);

	Refresh();
}
var value=0;
function Refresh()
{
	var refresh_time = "<% show_status("refresh_time"); %>";
	if(refresh_time == "")	refresh_time = 60000;
	if (value>=1)
	{
		if ( close_session == "1" )
		{
			window.location.replace("Status_Router.asp");
		}
		else
		{
			window.location.replace("Status_Router.asp;session_id=<% nvram_get("session_key"); %>");
		}
	}
	value++;
	timerID=setTimeout("Refresh()",refresh_time);
}
function ViewDHCP()
{
	dhcp_win = self.open('DHCPTable.asp','inLogTable','alwaysRaised,resizable,scrollbars,width=720,height=450');
	dhcp_win.focus();
}
function localtime()
{
	var mdata="",wdata;
	var index1=-1,index2=-1;
	var date1="",tmp="";
	var dlen;
        date1 = "<% localtime(); %>";
        if( date1 == "Not Available")
                document.write(satusroute.localtime);
        else
	{
        	if ((index1=  date1.indexOf("Mon")) != -1 ) wdata = (bweek.mon);
        	else if ((index1= date1.indexOf("Tue")) != -1) wdata = (bweek.tue);
       		else if ((index1= date1.indexOf("Wed")) != -1) wdata = (bweek.wed);
        	else if ((index1= date1.indexOf("Thu")) != -1) wdata = (bweek.thu);
       		else if ((index1= date1.indexOf("Fri")) != -1) wdata = (bweek.fri);
        	else if ((index1= date1.indexOf("Sat")) != -1) wdata = (bweek.sat);
        	else if ((index1= date1.indexOf("Sun")) != -1) wdata = (bweek.sun);

                if ((index2=  date1.indexOf("Jan")) != -1 ) mdata = (bmonth.jan);
                else if ((index2= date1.indexOf("Feb")) != -1) mdata = (bmonth.feb);
                else if ((index2= date1.indexOf("Mar")) != -1) mdata = (bmonth.mar);
                else if ((index2= date1.indexOf("Apr")) != -1) mdata = (bmonth.apr);
                else if ((index2= date1.indexOf("May")) != -1) mdata = (bmonth.may);
                else if ((index2= date1.indexOf("Jun")) != -1) mdata = (bmonth.jun);
                else if ((index2= date1.indexOf("Jul")) != -1) mdata = (bmonth.jul);
                else if ((index2= date1.indexOf("Aug")) != -1) mdata = (bmonth.aug);
                else if ((index2= date1.indexOf("Sep")) != -1) mdata = (bmonth.sep);
                else if ((index2= date1.indexOf("Oct")) != -1) mdata = (bmonth.oct);
                else if ((index2= date1.indexOf("Nov")) != -1) mdata = (bmonth.nov);
                else if ((index2= date1.indexOf("Dec")) != -1) mdata = (bmonth.dec);
		dlen=date1.length;
		if(index1!=-1)
			tmp=wdata+date1.substring(3,dlen);
		else	
                	tmp=date1;
		date1=tmp;
		if(index2!=-1)
			tmp=date1.substring(0,index2-index1)+mdata+date1.substring(index2+3,dlen);
		document.write(tmp);
	}
}
function replace_date(date1)
{
        var flg , mdata="";
        var dlen = date1.length;
        var date2 ;
        if (  date1.indexOf("Jan") != -1 ) mdata = (bmonth.jan);
        else if ( date1.indexOf("Feb") != -1) mdata = (bmonth.feb);
        else if ( date1.indexOf("Mar") != -1) mdata = (bmonth.mar);
        else if ( date1.indexOf("Apr") != -1) mdata = (bmonth.apr);
        else if ( date1.indexOf("May") != -1) mdata = (bmonth.may);
        else if ( date1.indexOf("Jun") != -1) mdata = (bmonth.jun);
        else if ( date1.indexOf("Jul") != -1) mdata = (bmonth.jul);
        else if ( date1.indexOf("Aug") != -1) mdata = (bmonth.aug);
        else if ( date1.indexOf("Sep") != -1) mdata = (bmonth.sep);
        else if ( date1.indexOf("Oct") != -1) mdata = (bmonth.oct);
        else if ( date1.indexOf("Nov") != -1) mdata = (bmonth.nov);
        else if ( date1.indexOf("Dec") != -1) mdata = (bmonth.dec);
        if ( mdata !="")
                date2 = mdata + date1.substring(4,dlen);
        else
                date2 = date1;

        document.write(date2);
}

function tunnel_reconnect(F,I)
{
	document.getElementById("tunnel_status").innerHTML = "<B>"+hstatrouter2.connecting+"</B>";
	F.submit_type.value = I;
	F.submit_button.value = "Status_Router";
	F.change_action.value = "gozila_cgi";
	F.submit();
}
</SCRIPT>

<BODY onload=init()>
<FORM name=status method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=change_action>
<input type=hidden name=wan_proto value='<% nvram_get("wan_proto"); %>'>

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,staleftmenu.routerinfo);</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.firmwarever)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><B><% get_linksys_firmware_version(); %>&nbsp;<script>replace_date("<% compile_date(); %>");</script></B></TD></TR>
	
	<!-- begin wuzh add 2008-4-11 -->
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.firmwareverification)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><B><% nvram_get("fw_md5sum"); %></B></TD></TR>
	<!-- end wuzh add 2008-4-11 -->

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(stacontent.curtime)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><b><script>localtime();</script></b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.intmacaddr)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><b><% nvram_get("wan_hwaddr"); %></b></TD></TR>

	<!-- add the Server name by michael at 20080418 -->
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(AD_FUN.devname)</script>&nbsp;</TD>
        <TD class=FUNFIELD><b><% nvram_get("machine_name"); %>&nbsp;</b></TD></TR>
	<!-- end by michael -->

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.hostname)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><b><% nvram_get_len("wan_hostname","30"); %>&nbsp;</b></TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.domainname)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><b>
<script language=javascript>
if("<% nvram_get("wan_domain"); %>" != "") {
	document.write("<% nvram_get_len("wan_domain", "30"); %>");
}
else {
	document.write("<% nvram_get_len("wan_get_domain", "30"); %>");
}
</script>
</b></TD></TR>
        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(MAINFUN,share.internetconn);</script></TR>
		<TR><script>draw_table(SUBFUN,"IPv4")</script>
		<TD class=FUNNAME2><span><script>Capture(stacontent.conntype)</script></span>:&nbsp;</TD>
        <TD class=FUNFIELD><b>
		<script language=javascript>
			var switch_mode = "<% nvram_get("switch_mode");%>";
			if(switch_mode == "1")
				document.write(share.bridge);
			else
			{
				var wan_ptl = "<% nvram_get("wan_proto");%>";
				if(wan_ptl == "dhcp")
					document.write(setupcontent.dhcp);
				else if(wan_ptl == "static")
					document.write(hstatrouter2.wan_static);
				else if(wan_ptl == "pppoe")
					document.write(share.pppoe);
				else if(wan_ptl == "pptp")
					document.write(share.pptp);
				else if(wan_ptl == "l2tp")
					document.write(hstatrouter2.l2tp);
				else if(wan_ptl == "heartbeat")
					document.write(hstatrouter2.hb);
				else if(wan_ptl == "dslite")
					document.write( share.dslite );
			}
		</script>
	</b></TD></TR>
<% show_status_setting(); %>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
<script language=javascript>
	var display_DHCPAction = 1;
	<% nvram_invmatch("wan_proto", "dhcp", "display_DHCPAction = 0;"); %>
	<% nvram_match("switch_mode", "1", "display_DHCPAction = 0;"); %>
	if (display_DHCPAction)
	{
		document.write("<INPUT  style=\"width:170\" onclick=DHCPAction(this.form,\'release\') type=button name=dhcp_release value=\"" + stabutton.dhcprelease + "\">&nbsp;&nbsp;");
		document.write("<INPUT  style=\"width:170\" onclick=DHCPAction(this.form,\'renew\') type=button name=dhcp_renew value=\"" + stabutton.dhcprenew + "\">");
	}
</script>

    &nbsp;</TD></TR>   
   	
	<TR><script>draw_table(ISHR,"");</script></TR>
               <TR><script>draw_table(SUBFUN,"IPv6")</script>
               <TD class=FUNNAME2><span><script>Capture(stacontent.conntype)</script></span>:&nbsp;</TD>
       <TD class=FUNFIELD><b>
        <% nvram_match("wan_ipv6_proto","dhcp","<script>Capture(setupcontent.ipv6auto)</script>"); %>
        <% nvram_match("wan_ipv6_proto","dhcp-tunnel","<script>Capture(setupcontent.ipv6autotunnel)</script>"); %>
        <% nvram_match("wan_ipv6_proto","static","<script>Capture(setupcontent.static_ipv6)</script>"); %>
        <%nvram_match("wan_ipv6_proto","pppoe","<script>Capture(setupcontent.pppoe_ipv6)</script>"); %>
        <%nvram_match("wan_ipv6_proto","pppoe-tunnel","<script>Capture(setupcontent.pppoe_ipv6tunnel)</script>"); %>
        <% nvram_match("wan_ipv6_proto","tunnel","<script>Capture(setupcontent.tunnel)</script>"); %>
        <% nvram_match("wan_ipv6_proto","disabled","<script>Capture(share.na)</script>"); %>
	</b>
<% show_status_ipv6_setting(); %>

                <TR><script>draw_table(SUBFUN,"")</script>
               <TD colspan=2 class=FUNNAME1>

<script>
	if (<% nvram_get("switch_mode"); %> != "1" && "<% nvram_get("wan_ipv6_proto"); %>" == "dhcp") {
			document.write("<INPUT  style=\"width:170\" onclick=IPv6_DHCPAction(this.form,\'release6\') type=button name=dhcp_release value=\"" + stabutton.dhcprelease + "\">");
	}
</script>&nbsp;&nbsp;

<script>
	if (<% nvram_get("switch_mode"); %> != "1" && "<% nvram_get("wan_ipv6_proto"); %>" == "dhcp") {
		document.write("<INPUT  style=\"width:170\" onclick=IPv6_DHCPAction(this.form,\'renew6\') type=button name=dhcp_renew value=\"" + stabutton.dhcprenew + "\">");
	}
</script>
    &nbsp;</TD></TR>  

</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(ISTAIL,"");</script></TR>
<TR>
	    <TD class=TITLE1 colspan=2></TD>
	    <TD class=FUNNAME4 colspan=2>
		<script>
			if ( close_session == "1" )
			{
				draw_bottom("Status_Router.asp",sbutton.refresh);
			}
			else
			{
				draw_bottom("Status_Router.asp;session_id=<% nvram_get("session_key"); %>",sbutton.refresh);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
