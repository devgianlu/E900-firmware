<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Guest Access</TITLE>
<% no_cache(); %>
<% charset(); %>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/ddns.js></SCRIPT>
<% web_include_file("filelink.asp"); %>


<SCRIPT language=JavaScript>
document.title = newui.gacs;
var win_options = 'alwaysRaised,resizable,scrollbars,width=660,height=460' ;
var active_win = null;
var wl_filter_win = null;
var EN_DIS =  '<% nvram_get("gn_enable"); %>';
var Bcast_Status =  '<% nvram_get("wl0.1_closed"); %>';
function closeWin(win_var)
{
        if ( ((win_var != null) && (win_var.close)) || ((win_var != null) && (win_var.closed==false)) )
                win_var.close();
}

function to_submit(F)
{
	var switch_mode = "<% nvram_get("switch_mode");%>";
	if(switch_mode == "1" && F.gn_enable.value == 1)
	{
		var match = "<% nvram_n_else_match("switch_ipaddr","192.168.33.","11","1","0");%>";
		if(match == "1")
		{
			if(confirm(gn.err7))
			{
				F.yes.checked = false;
				F.no.checked = true;
				F.gn_enable.value = 0;
				F.gn_wanip_conflict.value = 1;
			}
			else
			{
				return;
			}
		}
	}
        F.submit_button.value = "Guest_Access";
        F.gui_action.value = "Apply";
        F.submit();
}

function SelGuestStatus(num,F)
{
	if(num==1)
	{
		F.yes.checked=true;
		F.no.checked=false;
		F.gn_enable.value=1;
	}
	else
	{
		F.yes.checked=false;
		F.no.checked=true;
		F.gn_enable.value=0;
	}
}
function SelBroadcast(num,F)
{
	if(num==1)
	{
		F.bEnable.checked=false;
		F.bDisable.checked=true;
		//document.getElementsByName("wl0.1_closed").value=1;
		document.getElementById("gnbcast").value = 1;
	}
	else
	{
		F.bEnable.checked=true;
		F.bDisable.checked=false;
		//document.getElementsByName("wl0.1_closed").value=0;
		document.getElementById("gnbcast").value = 0;
	}
}
function SelTotalGuest(num,F)
{
	document.wireless.gn_max_account.value =document.wireless.GuestTotal.value;
}

function exit()
{
        closeWin(active_win);
}

function EditPassword(){
	if ( close_session == "1" )
	{
		ipmac_win = self.open('GuestpasswordInput.asp','GuestpasswordInput','alwaysRaised,resizable,scrollbars,width=700,height=300,top=50,left=50');
	}
	else
	{
		ipmac_win = self.open('GuestpasswordInput.asp;session_id=<% nvram_get("session_key"); %>','GuestpasswordInput','alwaysRaised,resizable,scrollbars,width=700,height=300,top=50,left=50');
	}
	ipmac_win.focus();
}

function Change_gn_password(password)
{
	document.getElementById("gn_password").innerHTML = password;
	document.wireless.gn_account_password.value = password;
}

function init()
{
	SelGuestStatus(EN_DIS,document.wireless);
	SelBroadcast(Bcast_Status,document.wireless);
	document.wireless.GuestTotal.value='<% nvram_get("gn_max_account"); %>';
	document.getElementById("gn_password").innerHTML = '<% nvram_get("gn_account_password"); %>';
	document.wireless.gn_account_password.value = '<% nvram_get("gn_account_password"); %>';
	document.wireless.gn_max_account.value =document.wireless.GuestTotal.value;

 	var switch_mode = "<% nvram_get("switch_mode");%>";
 	if(switch_mode == "1")
 	{
 		var match = "<% nvram_n_else_match("switch_ipaddr","192.168.33.","11","1","0");%>";
 		if(match == "1" && '<%nvram_get("gn_wanip_conflict");%>' == '1')
 		{
 			choose_disable(document.wireless.yes);
 			choose_disable(document.wireless.no);
			choose_disable(document.wireless.GuestTotal);
            choose_disable(document.wireless.bEnable);
            choose_disable(document.wireless.bDisable);
 		}
 	} else if('<% nvram_get("wk_mode"); %>' == "router")
	{
		choose_disable(document.wireless.yes);
		choose_disable(document.wireless.no);
		choose_disable(document.wireless.GuestTotal);
		choose_disable(document.wireless.bEnable);
		choose_disable(document.wireless.bDisable);
	}

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

</SCRIPT>
</HEAD>
<BODY onunload=exit() onload=init()>
<FORM method=<% get_http_method(); %> name=wireless action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=gn_max_account>
<input type=hidden name=gn_enable>
<input type=hidden name=gn_wanip_conflict value='<%nvram_get("gn_wanip_conflict");%>'>
<input type=hidden name=gn_account_password>
<input type=hidden name="wl0.1_closed" id="gnbcast">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,newui.gacs);</script></TR>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><B><script>Capture(newui.gninfo1)</script></B></TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(newui.alwga)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><input onClick=SelGuestStatus(1,this.form) type=radio value=1 name="yes"><b><script>Capture(newui.yes)</script></B>&nbsp;&nbsp;</td>
			<td><input onClick=SelGuestStatus(0,this.form) type=radio value=0 name="no"><b><script>Capture(newui.no)</script></B></td></tr></table>
		</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(newui.gnname)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<% nvram_get("wl0.1_ssid"); %></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(newui.gusetpwd)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD>
		<table>
		<tr>
		<td width="196">
		&nbsp;&nbsp;<b><FONT face=Arial><span id="gn_password"></span></FONT></b>&nbsp;&nbsp;&nbsp;</td>
		<td align="right">
		<script>document.write("<input type=button onClick=EditPassword() name=change_button value=\"" + newui.chg + "\">");
		if('<% nvram_get("wk_mode"); %>' == "router")
		{
			choose_disable(document.wireless.change_button);
		}
		</script></td>
		</tr></table>
		</TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(newui.totalga)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD>&nbsp;<label>
		      <select onChange=SelTotalGuest(this.form.GuestTotal.selectedIndex,this.form) name="GuestTotal" id="GuestTotal">
		        <option value=1>1</option>
		        <option value=2>2</option>
		        <option value=3>3</option>
		        <option value=4>4</option>
		        <option value=5>5</option>
		        <option value=6>6</option>
		        <option value=7>7</option>
		        <option value=8>8</option>
		        <option value=9>9</option>
		        <option value=10>10</option>
		      </select>
		     </label></TD></TR>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(wlansetup.ssidbroadcast)</script>:&nbsp;</FONT></TD>
		<TD class=FUNFIELD>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><input onClick=SelBroadcast(0,this.form) type=radio value=0 name="bEnable"><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
			<td><input onClick=SelBroadcast(1,this.form) type=radio value=1 name="bDisable"><B><script>Capture(share.disabled)</script></B></td></tr></table>
		</TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>		
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><B><script>Capture(newui.gninfo2)</script></B></TD></TR>
        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
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
			draw_bottom("",sbutton.save);
			if ( close_session == "1" )
			{
				draw_bottom("Guest_Access.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("Guest_Access.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
