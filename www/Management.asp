<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Management</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = adtopmenu.manage;
var EN_DIS1 = '<% nvram_get("remote_management"); %>'	
var wan_proto = '<% nvram_get("wan_proto"); %>'
var snmp_confirm = 0
function PasswdLen(F)
{
	var sLen = F.snmpv3_passwd.value;
	if( sLen.length < 8 )
	{
		F.snmpv3_passwd.value = F.snmpv3_passwd.defaultValue;
		alert(errmsg.err90);
	}
	if( F.snmpv3_passwd.value != F.SnmpPasswdConfirm.value )
	{
		snmp_confirm = 1;
	}
	else 
	{
		snmp_confirm = 0;
	}
}
function ConfirmPasswd(F)
{
	if( F.snmpv3_passwd.value != F.SnmpPasswdConfirm.value )
	{
		snmp_confirm = 1;
	}
}

function SelRmt(num,F)
{
	var http_from = "<% nvram_get("http_from"); %>";

	if(num == 1) {
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
		if(F.PasswdModify.value == 1)
			if(ChangePasswd(F) == false)
				return;
<% support_match("E900TE_SUPPORT", "1", "*/"); %>
		
		choose_enable(F._remote_mgt_https[0]);
		choose_enable(F._remote_mgt_https[1]);
		if(http_from == "wan") {
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
			choose_disable(F.remote_upgrade[0]);
			choose_disable(F.remote_upgrade[1]);
<% support_match("E900TE_SUPPORT", "1", "*/"); %>
		}else{
			choose_enable(F.remote_upgrade[0]);
			choose_enable(F.remote_upgrade[1]);
		}
		choose_enable(F.remote_ip_any[0]);
		choose_enable(F.remote_ip_any[1]);
		if(F.remote_ip_any[0].checked == true)
			SelIP(0,F);
		else
			SelIP(1,F);
		choose_enable(F.http_wanport);
	}
	else {
		choose_disable(F._remote_mgt_https[0]);
		choose_disable(F._remote_mgt_https[1]);
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
		choose_disable(F.remote_upgrade[0]);
		choose_disable(F.remote_upgrade[1]);
<% support_match("E900TE_SUPPORT", "1", "*/"); %>
		choose_disable(F.remote_ip_any[0]);
		choose_disable(F.remote_ip_any[1]);
		SelIP(0,F);
		choose_disable(F.http_wanport);
	}
}

function SelIP(num,F)
{
	if(num == 1) {
		choose_enable(F.remote_ip_0);
		choose_enable(F.remote_ip_1);
		choose_enable(F.remote_ip_2);
		choose_enable(F.remote_ip_3);
		choose_enable(F.remote_ip_4);
	}
	else {
		choose_disable(F.remote_ip_0);
		choose_disable(F.remote_ip_1);
		choose_disable(F.remote_ip_2);
		choose_disable(F.remote_ip_3);
		choose_disable(F.remote_ip_4);
	}
}

function SelUPNP(num,F)
{
	if(num == 1) {
		choose_enable(F.upnp_config[0]);
		choose_enable(F.upnp_config[1]);
		choose_enable(F.upnp_internet_dis[0]);
		choose_enable(F.upnp_internet_dis[1]);
	}
	else {
		choose_disable(F.upnp_config[0]);
		choose_disable(F.upnp_config[1]);
		choose_disable(F.upnp_internet_dis[0]);
		choose_disable(F.upnp_internet_dis[1]);
	}
}

function ChangePasswd(F)
{
<% nvram_match("boot_hw_model", "E1200SW", "/*"); %>
	if((F.PasswdModify.value==1 && F.http_passwd.value == "d6nw5v1x2pc7st9m") || F.http_passwd.value == "admin")
	{
                if(confirm(manage2.changpass))
		{
			F.http_passwd.focus();
			F.remote_management[1].checked = true;
			return false;
		}
		else {
			F.remote_management[1].checked = true;
			return false;
		}
	}
	else 
<% nvram_match("boot_hw_model", "E1200SW", "*/"); %>
		return true;
}
function valid_password(F)
{
	if (F.http_passwd.value != F.http_passwdConfirm.value)
	{	
//              alert("Confirmed password did not match Entered Password.  Please re-enter password");
                alert(manage2.vapass);
		F.http_passwdConfirm.focus();
		F.http_passwdConfirm.select();
		return false;
	}
	return true;
}
function valid_value(F)
{
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
	if( F.http_passwd.value != F.http_passwdConfirm.value )
		{
//              alert('Password confirmation is not matched.');
                alert(manage2.passnot);
		return false;
		}
	else if( snmp_confirm == 1 )
<% support_match("E900TE_SUPPORT", "1", "*/"); %>
<% support_invmatch("E900TE_SUPPORT", "1", "/*"); %>
	if( snmp_confirm == 1 )
<% support_invmatch("E900TE_SUPPORT", "1", "*/"); %>
	{	
		alert(errmsg.err91);
//		alert(snmp_confirm);
		snmp_confirm = 0;
		return false;
	}
	else
		F.gui_action.value='Apply';
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
	if (F.http_passwd.value == "")
	{
		alert(hndmsg.errpwd);
		F.http_passwd.focus();
		F.http_passwd.select();
		return false;
	}

	valid_password(F);
<% support_match("E900TE_SUPPORT", "1", "*/"); %>

<% nvram_match("boot_hw_model", "E1200SW", "/*"); %>
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
	if(F.remote_management[0].checked == true){
		if(!ChangePasswd(F))
			return false;
	}
<% support_match("E900TE_SUPPORT", "1", "*/"); %>
<% nvram_match("boot_hw_model", "E1200SW", "*/"); %>

	if(F._http_enable.checked == false && F._https_enable.checked == false)
	{
//              alert("You must at least select a web server!");
                alert(manage2.selweb);
		return false;
	}

	if(F.remote_ip_any[1].checked == true){
		if(F.remote_ip_0.value == "0" && F.remote_ip_1.value == "0" && F.remote_ip_2.value == "0" && F.remote_ip_3.value == "0" ) {
                       	alert(errmsg.err31);
			return false;
		}
		if(parseInt(F.remote_ip_3.value) > parseInt(F.remote_ip_4.value)) {
			alert(errmsg.err51);
			F.remote_ip_4.focus();
			return false;
		}
	}

<% nvram_match("boot_hw_model", "E1200SW", "/*"); %>
	if(F.remote_management[0].checked == true){
<% nvram_match("boot_hw_model", "E1200SW", "*/"); %>
		if(F._remote_mgt_https[0].checked == true && F._http_enable.checked == false) {
			alert(errmsg.err60);
			return false;		
		}
		if(F._remote_mgt_https[1].checked == true && F._https_enable.checked == false) {
			alert(errmsg.err61);
			return false;		
		}
<% nvram_match("boot_hw_model", "E1200SW", "/*"); %>
	}
<% nvram_match("boot_hw_model", "E1200SW", "*/"); %>
	
	return true;
}
function to_submit(F)
{
	//var ctf='<% nvram_get("ctf_disable"); %>';

	if(valid_value(F)) {

		if(F._http_enable.checked == true)	F.http_enable.value = 1;
		else					F.http_enable.value = 0;

		if(F._https_enable.checked == true)	F.https_enable.value = 1;
		else					F.https_enable.value = 0;
		
		if(F._remote_mgt_https[1].checked == true)	F.remote_mgt_https.value = 1;
		else					F.remote_mgt_https.value = 0;

<% support_invmatch("CUSTOM404_SUPPORT", "1", "/*"); %>
		if(F._ctm404_enable[0].checked == true)	F.ctm404_enable.value = 1;
		else					F.ctm404_enable.value = 0;
<% support_invmatch("CUSTOM404_SUPPORT", "1", "*/"); %>

/*
		if(F._tmsss_enable[0].checked == true)	F.tmsss_enabled.value = 1;
		else					F.tmsss_enabled.value = 0;
*/
		/*Jemmy add CTF 2010.9.07*/
		/* if ((F.ctf_disable[0].checked == true && ctf == '1')
		   ||(F.ctf_disable[1].checked == true && ctf == '0'))
		{
			F.need_reboot.value = "1";
			F.wait_time.value = "80";
		} */
		F.submit_button.value = "Management";
		F.submit();
	}
}
function to_restore(F)
{
	if ( close_session == "1" )
	{
		self.open('Restore.asp','Restore','alwaysRaised,resizable,scrollbars,width=600,height=440').focus();
	}
	else
	{
		self.open('Restore.asp;session_id=<% nvram_get("session_key"); %>','Restore','alwaysRaised,resizable,scrollbars,width=600,height=440').focus();
	}

}
function handle_http(F)
{
	return ;

	if(F._http_enable.checked == false && F._https_enable.checked == true) {
		F._remote_mgt_https[0].checked = false;
		F._remote_mgt_https[1].checked = true;
	}
}
function handle_https(F)
{
	return ;

	if(F._http_enable.checked == true && F._https_enable.checked == false) {
		F._remote_mgt_https[0].checked = true;
		F._remote_mgt_https[1].checked = false;
	}
}
function handle_http_rmt(F)
{
	if(F._remote_mgt_https[1].checked == true)	F.remote_mgt_https.value = 1;
	else					F.remote_mgt_https.value = 0;
}
function init() 
{    
	SelRmt('<% nvram_get("remote_management"); %>',document.password);
	SelUPNP('<% nvram_get("upnp_enable"); %>',document.password)
	
	var http_from = "<% nvram_get("http_from"); %>";

	if(http_from == "wan") {
		//choose_disable(document.password.restore_b);
		//choose_disable(document.password.backup_b);
<% support_match("E900TE_SUPPORT", "1", "/*"); %>
		choose_disable(document.password.remote_upgrade[0]);
		choose_disable(document.password.remote_upgrade[1]);
<% support_match("E900TE_SUPPORT", "1", "*/"); %>
	}

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
	
</SCRIPT>

</HEAD>
<BODY vLink=#b5b5e6 aLink=#ffffff link=#b5b5e6 onload=init()>
<FORM name=password method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<% support_match("E900TE_SUPPORT", "1", "<!--"); %>
<INPUT type=hidden name=PasswdModify value='<% nvram_else_match("http_passwd", "admin", "1", "0"); %>'> 
<% support_match("E900TE_SUPPORT", "1", "-->"); %>
<input type=hidden name=http_enable>
<input type=hidden name=https_enable>
<input type=hidden name=ctm404_enable>
<!--input type=hidden name=tmsss_enabled-->
<input type=hidden name=remote_mgt_https>
<input type=hidden name=wait_time value=4>
<input type=hidden name=need_reboot value=0>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,adtopmenu.manage);</script></TR>
        <!--TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25><P align=right><FONT style="FONT-WEIGHT: 700">Local Router Access</FONT></P></TD>
          <TD width=8 background=image/UI_04.gif height=25></TD>
          <TD colSpan=3 height=25 width="22">&nbsp;</TD>
          <TD width=146 height=25><FONT style="FONT-SIZE: 8pt"><span >User Name</span>:&nbsp;&nbsp; </FONT></TD>
          <TD width=273 height=25><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><FONT style="FONT-SIZE: 8pt" face=Arial><% nvram_get("http_username"); %></FONT></TD>
          <TD width=13 height=25>&nbsp;</TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR-->
        
<% support_invmatch("DDM_SUPPORT", "1", "<!--"); %>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Router Account:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("http_username"); %>' name=http_username onBlur=valid_name(this,"Account",SPACE_NO)></TD></TR>
<% support_invmatch("DDM_SUPPORT", "1", "-->"); %>

<% support_match("E900TE_SUPPORT", "1", "<!--"); %>
	<TR><script>draw_table(SUBFUN,<% support_invmatch("DDM_SUPPORT", "1", adleftmenu.localaccess); %>);</script>
	<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;<script>Capture(adleftmenu.routerpsw)</script>:&nbsp;</FONT></TD>
     <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=password maxLength=63 size=21 value="d6nw5v1x2pc7st9m" name="http_passwd" onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.reconfirm)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=password maxLength=63 size=21 value="d6nw5v1x2pc7st9m" name=http_passwdConfirm onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>

		<TR><script>draw_table(ISHR,"");</script></TR>      
<% support_match("E900TE_SUPPORT", "1", "-->"); %>
        <TR><script>draw_table(SUBFUN,manage2.webacc);</script>
        <TD class=FUNNAME2>&nbsp;<script>Capture(manage2.webutiacc)</script>:&nbsp;</TD>
	<TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
			<td><INPUT type=checkbox value=1 name=_http_enable <% nvram_match("http_enable","1","checked"); %> onClick=handle_http(this.form)><b>HTTP</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=checkbox value=1 name=_https_enable <% nvram_match("https_enable","1","checked"); %> onClick=handle_https(this.form)><b>HTTPS</b></td></tr></table>
	</TD></TR>
<% support_invmatch("WIRELESS_SUPPORT", "1", "<!--"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(manage2.wlutiacc)</script>:&nbsp;</TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=0 name=web_wl_filter <% nvram_match("web_wl_filter","0","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=1 name=web_wl_filter <% nvram_match("web_wl_filter","1","checked"); %>><b><script>Capture(share.disabled)</script></b></td></tr></table>
		</TD></TR>
<% support_invmatch("WIRELESS_SUPPORT", "1", "-->"); %>
        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,adleftmenu.remoteaccess);</script>
		<% nvram_match("boot_hw_model", "E1200SW", "<!--"); %>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.remotemgt)</script>:</SPAN></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=remote_management <% nvram_match("remote_management","1","checked"); %> OnClick=SelRmt(1,this.form)><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=remote_management <% nvram_match("remote_management","0","checked"); %> OnClick=SelRmt(0,this.form)><b><script>Capture(share.disabled)</script></b></td></tr></table>
		</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<% nvram_match("boot_hw_model", "E1200SW", "-->"); %>
		<TD class=FUNNAME2>&nbsp;<script>Capture(manage2.webutiacc)</script>:</TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=_remote_mgt_https <% nvram_match("remote_mgt_https","0","checked"); %> OnClick=handle_http_rmt(this.form)><b>HTTP</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=1 name=_remote_mgt_https <% nvram_match("remote_mgt_https","1","checked"); %> OnClick=handle_http_rmt(this.form)><b>HTTPS</b></td></tr></table>
		</TD></TR>		
		</TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(mgt.remoteupgrade)</script>:</TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=remote_upgrade <% nvram_match("remote_upgrade","1","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=remote_upgrade <% nvram_match("remote_upgrade","0","checked"); %>><b><script>Capture(share.disabled)</script></b></td></tr></table>
		</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(mgt.remoteip)</script>:</TD>
          <TD class=FUNFIELD><INPUT type=radio value=1 name=remote_ip_any <% nvram_match("remote_ip_any","1","checked"); %> OnClick=SelIP(0,this.form)><script>Capture(mgt.anyip)</script></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2></TD>
        <TD class=FUNFIELD>
	<table cellpadding="0" cellspacing="0">
	<tr>
	<td><INPUT type=radio value=0 name=remote_ip_any <% nvram_invmatch("remote_ip_any","1","checked"); %> OnClick=SelIP(1,this.form)></td>
	<td dir="ltr">
	    <INPUT class=num maxLength=3 onBlur=valid_range(this,1,223,"IP") style="width:30" value='<% get_single_ip("remote_ip","0"); %>' name="remote_ip_0"> .
            <INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") style="width:30" value='<% get_single_ip("remote_ip","1"); %>' name="remote_ip_1"> .
            <INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") style="width:30" value='<% get_single_ip("remote_ip","2"); %>' name="remote_ip_2"> .
            <INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") style="width:30" value='<% get_single_ip("remote_ip","3"); %>' name="remote_ip_3">&nbsp;
	</td>
	<td>&nbsp;<script>Capture(portforward.to)</script>&nbsp;</td>
            <td><INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") style="width:30" value='<% nvram_list("remote_ip", "1"); %>' name="remote_ip_4"></td>	
	</tr></table>
	  </TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.rmtmgtport)</script>:&nbsp;</SPAN></TD>
          <TD class=FUNFIELD>&nbsp;&nbsp;<INPUT class=num maxLength=5 style="width:35" value='<% nvram_get("http_wanport"); %>' onBlur='valid_range(this,1,65535,"Port%20number")' name="http_wanport"></TD></TR>
<% support_invmatch("SNMP_SUPPORT", "1", "<!--"); %>
        
        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,"Identification");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Contact:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("snmp_contact"); %>' name="snmp_contact" onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Device Name:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("router_name"); %>' name=router_name onBlur=valid_name(this,"router_name")></TD></TR> 
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Location:&nbsp;&nbsp; </FONT></TD>
          <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("snmp_location"); %>' name=snmp_location onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>
        <TR><script>draw_table(ISHR,"");</script></TR>      
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Get Community:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("snmp_getcom"); %>' name="snmp_getcom" onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Set Community:&nbsp;&nbsp; </FONT></TD>
          <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("snmp_setcom"); %>' name=snmp_setcom onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>   
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;SNMP Trusted Host:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("snmp_trust"); %>' name=snmp_trust onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;SNMP Trap - Community:&nbsp;&nbsp; </FONT></TD>
          <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("trap_com"); %>' name=trap_com onBlur=valid_name(this,"Password",SPACE_NO)></TD></TR> 
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;SNMP Trap - Destination:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;<b><% prefix_ip_get("lan_ipaddr",1); %></b></SPAN><INPUT type=num maxLength=3 size=1 value='<% nvram_get("trap_dst"); %>' name=trap_dst onBlur=valid_range(this,1,254,"IP")></TD></TR>


        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;SNMPv3 UserName:&nbsp;&nbsp; </FONT></TD>
          <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=text maxLength=63 size=20 value='<% nvram_get("snmpv3_username"); %>' name=snmpv3_username ></TD></TR> 


        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;SNMPv3 Password:&nbsp;&nbsp; </FONT></TD>
        <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=password maxLength=63 size=20 value="d6nw5v1x2pc7st9m" name=snmpv3_passwd onBlur=PasswdLen(this.form)></TD></TR> 


        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt">&nbsp;Re-enter to confirm:&nbsp;&nbsp; </FONT></TD>
          <TD class=FUNFIELD><SPAN  style="FONT-SIZE: 8pt">&nbsp;</SPAN><INPUT type=password maxLength=63 size=20 value="d6nw5v1x2pc7st9m" name=SnmpPasswdConfirm onBlur=PasswdLen(this.form)></TD></TR> 



<% support_invmatch("SNMP_SUPPORT", "1", "-->"); %>

        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,adleftmenu.advfeature);</script>
		
<% support_invmatch("CUSTOM404_SUPPORT", "1", "<!--"); %>
          <TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.webassistant)</script>:</SPAN></TD>
          <TD class=FUNFIELD><INPUT type=radio value=1 name=_ctm404_enable <% nvram_match("ctm404_enable","1","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;<INPUT type=radio value=0 name=_ctm404_enable <% nvram_match("ctm404_enable","0","checked"); %>><b><script>Capture(share.disabled)</script></b></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
<% support_invmatch("CUSTOM404_SUPPORT", "1", "-->"); %>
<% support_invmatch("ALG_MODULE_SUPPORT", "1", "<!--"); %>
          <TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.sipalg)</script>:</SPAN></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=nf_alg_sip <% nvram_match("nf_alg_sip","1","checked"); %> ><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=nf_alg_sip <% nvram_match("nf_alg_sip","0","checked"); %> ><b><script>Capture(share.disabled)</script></b></td></tr></table>
			</TD></TR>
<% support_invmatch("ALG_MODULE_SUPPORT", "1", "-->"); %>
	<!--
        <TR>
          <TD width=156 bgColor=#e7e7e7 colSpan=3 height=25></TD>
          <TD width=8 background=image/UI_04.gif height=25></TD>
          <TD colSpan=3 height=25 width="22"></TD>
          <TD width=146 height=25><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(common.hnd)</script>:</SPAN></TD>
          <TD width=273 height=25><INPUT type=radio value=1 name=_tmsss_enable <% nvram_match("tmsss_enabled","1","checked"); %> ><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;<INPUT type=radio value=0 name=_tmsss_enable <% nvram_match("tmsss_enabled","0","checked"); %> ><b><script>Capture(share.disabled)</script></b></TD>
          <TD width=13 height=25></TD>
          <TD width=15 background=image/UI_05.gif height=25></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.ctf)</script>:</SPAN></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=0 name=ctf_disable <% nvram_match("ctf_disable","0","checked"); %> ><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=1 name=ctf_disable <% nvram_match("ctf_disable","1","checked"); %> ><b><script>Capture(share.disabled)</script></b></td></tr></table>
			</TD></TR>
	-->
        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,mgt.upnp);</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.upnp)</script>:</SPAN></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=upnp_enable <% nvram_match("upnp_enable","1","checked"); %> onclick=SelUPNP(1,this.form)><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=upnp_enable <% nvram_match("upnp_enable","0","checked"); %> onclick=SelUPNP(0,this.form)><b><script>Capture(share.disabled)</script></b></td></tr></table>
			</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.upnpconfig)</script>:</SPAN></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=upnp_config <% nvram_match("upnp_config","1","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=upnp_config <% nvram_match("upnp_config","0","checked"); %>><b><script>Capture(share.disabled)</script></b></td></tr></table>
			</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><SPAN  style="FONT-SIZE: 8pt">&nbsp;<script>Capture(mgt.upnpinternetdis)</script>:</SPAN></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=upnp_internet_dis <% nvram_match("upnp_internet_dis","1","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=upnp_internet_dis <% nvram_match("upnp_internet_dis","0","checked"); %>><b><script>Capture(share.disabled)</script></b></td></tr></table>
		</TD></TR>
        <TR><script>draw_table(ISHR,"");</script></TR>
<% support_invmatch("BACKUP_RESTORE_SUPPORT","1","<!--"); %>
        <TR><script>draw_table(SUBFUN,bakres2.bakres);</script>
          <TD class=FUNNAME1 colspan=2>
	    <script>
	      if ( close_session == "1" )
	      {
                document.write("<INPUT  onclick=window.location.href=\"<% get_backup_name(""); %>\" type=button name=backup_b value=\"" + bakres2.bakbutton + "\">");
	      }  
	      else
	     { 
                document.write("<INPUT  onclick=window.location.href=\"<% get_backup_name(""); %>;session_id=<% nvram_get("session_key"); %>\" type=button name=backup_b value=\"" + bakres2.bakbutton + "\">");
	     }
	    </script> &nbsp;&nbsp;<script>
	      document.write("<INPUT  onclick=to_restore(this.form) type=button name=restore_b value=\"" + bakres2.resbutton + "\">");</script>
	      </TD></TR>
<% support_invmatch("BACKUP_RESTORE_SUPPORT","1","-->"); %>

        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
