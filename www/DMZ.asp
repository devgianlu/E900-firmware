<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>DMZ</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>
<style fprolloverstyle>
.BLANKSPAN
{
	padding-left:10px;
	padding-right:10px;
	padding-bottom:3px;
	padding-top:3px;
	text-align:center;
	color:#ffffff;
}
</style>
<SCRIPT language=JavaScript>
document.title = share.dmz;
var EN_DIS = '<% nvram_get("dmz_enable"); %>';
var lan_ip = '<% nvram_get("lan_ipaddr"); %>';
var dhcp_win = null;
function ViewDHCP()
{
	if ( close_session == "1" )
	{
		dhcp_win = self.open('DHCP_Table_Select.asp','inLogTable','alwaysRaised,resizable,scrollbars,width=720,height=600');
	}
	else
	{
		dhcp_win = self.open('DHCP_Table_Select.asp;session_id=<% nvram_get("session_key"); %>','inLogTable','alwaysRaised,resizable,scrollbars,width=720,height=600');
	}
	dhcp_win.focus();
}
function exit()
{
        closeWin(dhcp_win);
}
function valid_value(F)
{
        var i;
        var tip;
		var netid;
		var brcastip;
		var mask;
		var lan_mask = '<% nvram_get("lan_netmask"); %>';
			
        i = lan_ip.lastIndexOf('.');
        tip=lan_ip.substring(i+1);
		
		i = lan_mask.lastIndexOf('.');
		mask = lan_mask.substring(i+1);
		
		netid=eval(tip&mask);
		brcastip=eval(netid+255-mask);
				
	if(F.dmz_enable[0].checked == true){
		if(F.dmz_src_any[1].checked == true){
			if(F.dmz_src_ip_0.value == "0" && F.dmz_src_ip_1.value == "0" && F.dmz_src_ip_2.value == "0" && F.dmz_src_ip_3.value == "0" ) {
                        	alert(errmsg.err48);
				return false;
			}
			if(parseInt(F.dmz_src_ip_3.value) > parseInt(F.dmz_src_ip_4.value)) {
				alert(errmsg.err51);
				F.dmz_src_ip_4.focus();
				return false;
			}
		}
		if(F.dmz_dst_ip[0].checked == true){
			if(F.dmz_ipaddr.value == "0") {
                        	alert(errmsg.err49);
				F.dmz_ipaddr.focus();
				return false;
			}
                        if(tip==F.dmz_ipaddr.value || brcastip==F.dmz_ipaddr.value || netid==F.dmz_ipaddr.value)
                        {
                                alert(errmsg.err80);
                                F.dmz_ipaddr.focus();
                                return false;
                        }
									
						if(parseInt(F.dmz_ipaddr.value) < parseInt(netid) 
							|| parseInt(F.dmz_ipaddr.value) > parseInt(brcastip)) 
						{
                        	alert(errmsg.err49);
							F.dmz_ipaddr.focus();
							return false;
						}
		}
		else {
			if(F.dmz_mac.value == "00:00:00:00:00:00" || F.dmz_mac.value == "FF:FF:FF:FF:FF:FF") {
                        	alert(errmsg.err50);
				F.dmz_mac.focus();
				return false;
			}
		}
	}
	return true;

}
function to_submit(F)
{
	if(valid_value(F)) {
		F.submit_button.value = "DMZ";
		F.gui_action.value = "Apply";
		F.submit();
	}
}
function dmz_enable_disable(F,I)
{
	EN_DIS1 = I;
	if ( I == "0" ){
		choose_disable(F.dmz_src_any[0]);
		choose_disable(F.dmz_src_any[1]);
		SelSrc(F,1);
		choose_disable(F.dmz_dst_ip[0]);
		choose_disable(F.dmz_dst_ip[1]);
		choose_disable(F.dmz_ipaddr);
		choose_disable(F.dmz_mac);
		choose_disable(F.dhcp_table);
	}
	else{
		choose_enable(F.dmz_src_any[0]);
		choose_enable(F.dmz_src_any[1]);
		if(F.dmz_src_any[0].checked == true)
			SelSrc(F,1);
		else
			SelSrc(F,0);
		choose_enable(F.dmz_dst_ip[0]);
		choose_enable(F.dmz_dst_ip[1]);
		if(F.dmz_dst_ip[0].checked == true)
			SelDst(F,1);
		else
			SelDst(F,0);
		if(F.dmz_dst_ip[1].checked == true)
			choose_enable(F.dhcp_table);
		else
			choose_disable(F.dhcp_table);
	}
}
function SelSrc(F,num)
{
	if(num == 1) {
		choose_disable(F.dmz_src_ip_0);
		choose_disable(F.dmz_src_ip_1);
		choose_disable(F.dmz_src_ip_2);
		choose_disable(F.dmz_src_ip_3);
		choose_disable(F.dmz_src_ip_4);
	}
	else {
		choose_enable(F.dmz_src_ip_0);
		choose_enable(F.dmz_src_ip_1);
		choose_enable(F.dmz_src_ip_2);
		choose_enable(F.dmz_src_ip_3);
		choose_enable(F.dmz_src_ip_4);
	}
}
function SelDst(F,num)
{
	if(num == 1) {
		choose_disable(F.dmz_mac);
		choose_enable(F.dmz_ipaddr);
		choose_disable(F.dhcp_table);
	}
	else {
		choose_enable(F.dmz_mac);
		choose_disable(F.dmz_ipaddr);
		choose_enable(F.dhcp_table);
	}
}
function SelDMZ(F,num)
{
	dmz_enable_disable(F,num);
}
function valid_macs_all(I)
{
	if(I.value == "")
		return true;
	else if(I.value.length == 12)
		valid_macs_12(I);
	else if(I.value.length == 17)
		valid_macs_17(I);
	else{
                alert(errmsg.err5);
		I.value = I.defaultValue;
        }
}
function init() 
{               
	dmz_enable_disable(document.dmz,'<% nvram_get("dmz_enable"); %>');
	var swmode = '<% nvram_get("switch_mode");%>';
	var protocolWan = '<% nvram_get("wan_proto");%>';
	if( swmode == 1)
		alert(share.brdgmwn);
	else if( protocolWan == "dslite" ){
		alert (share.dslitewn);
	}

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=dmz method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button value="DMZ">
<input type=hidden name=change_action>
<input type=hidden name=gui_action value="Apply">
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,share.dmz);</script></TR>
     
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME12>
		<TABLE>	
		<TD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=dmz_enable <% nvram_match("dmz_enable","1","checked"); %> onClick=SelDMZ(this.form,1)><B><script>Capture(share.enabled)</script></B>&nbsp;</td>
			<td><INPUT type=radio value=0 name=dmz_enable <% nvram_match("dmz_enable","0","checked"); %> onClick=SelDMZ(this.form,0)><B><script>Capture(share.disabled)</script></B></td></tr></table>
		</TD>
		</TABLE></TD></TR>
	<TR><script>draw_table(ISHR,"");</script></TR>
	<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.sourceip)</script>:</TD>
        	<TD class=FUNFIELD><INPUT type=radio value=1 name=dmz_src_any onClick=SelSrc(this.form,1) <% nvram_match("dmz_src_any", "1", "checked"); %>><script>Capture(mgt.anyip)</script>
		</TD>
	</TR>
	<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2></TD>
		<TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td><INPUT type=radio value=0 name=dmz_src_any onClick=SelSrc(this.form,0) <% nvram_match("dmz_src_any", "0", "checked"); %>></td> 
					<td dir="ltr">
						<INPUT class=num maxLength=3 onBlur=valid_range(this,1,223,"IP") style="width:35" value='<% get_single_ip("dmz_src_ip","0"); %>' name="dmz_src_ip_0"> .
            					<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") style="width:35" value='<% get_single_ip("dmz_src_ip","1"); %>' name="dmz_src_ip_1"> .
            					<INPUT class=num maxLength=3 onBlur=valid_range(this,0,255,"IP") style="width:35" value='<% get_single_ip("dmz_src_ip","2"); %>' name="dmz_src_ip_2"> .
            					<INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") style="width:35" value='<% get_single_ip("dmz_src_ip","3"); %>' name="dmz_src_ip_3">
					</td>
					<td>&nbsp;<script>Capture(portforward.to)</script></td>
            				<td><INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") style="width:35" value='<% nvram_list("dmz_src_ip", "1"); %>' name="dmz_src_ip_4"></td>
				</TR>
			</tbody>
		</table>
		</TD>
	</TR>
       	<TR><script>draw_table(ISHR,"");</script></TR>
       <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.destination)</script>:</TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=dmz_dst_ip onClick=SelDst(this.form,1) <% nvram_match("dmz_dst_ip", "1", "checked"); %> ><script>Capture(share.ipaddr)</script>:&nbsp;&nbsp;</td>
			<td dir="ltr"><% prefix_ip_get("lan_ipaddr",1); %><INPUT class=num maxLength=3 onBlur=valid_range(this,1,254,"IP") style="width:35" value='<% nvram_get("dmz_ipaddr"); %>' name="dmz_ipaddr"></td>
			</tr></table>
		</TD></TR>
       <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2></TD>
	<TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=0 name=dmz_dst_ip onClick=SelDst(this.form,0) <% nvram_match("dmz_dst_ip", "0", "checked"); %> ><script>Capture(share.macaddr)</script>:&nbsp;&nbsp;</td>
		<td dir="ltr"><INPUT class=num maxLength=17 onBlur=valid_macs_17(this) size=15 value='<% nvram_get("dmz_mac"); %>' name="dmz_mac"></td></tr></table>
	</TD></TR>
       <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<script>document.write("<INPUT dir=\"ltr\" id=button1 onclick=ViewDHCP() type=button name=dhcp_table value=\"" + stabutton.dhcpclitbl + "\">");</script></TD></TR>
         <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
