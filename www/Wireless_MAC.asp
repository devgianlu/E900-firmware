<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Wireless MAC Filter</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>
<SCRIPT language=JavaScript>
document.title = wlantopmenu.macfilter;
var win_options = 'alwaysRaised,resizable,scrollbars,width=660,height=460' ;
var active_win = null;
var wl_filter_win = null;
var EN_DIS =  '<% nvram_get("wl_macmode"); %>'
function closeWin(win_var)
{
        if ( ((win_var != null) && (win_var.close)) || ((win_var != null) && (win_var.closed==false)) )
                win_var.close();
}
function ViewClient()
{
	if ( close_session == "1" )
	{
		active_win = self.open('WL_ClientList.asp','ClientTable','alwaysRaised,resizable,scrollbars,width=780,height=370');
	}
	else
	{
		active_win = self.open('WL_ClientList.asp;session_id=<% nvram_get("session_key"); %>','ClientTable','alwaysRaised,resizable,scrollbars,width=780,height=370');
	}

	active_win.focus();
}
function to_submit(F)
{
	if(F.wl_mac_filter[0].checked == true) {
		if(F.wl_macmode1[0].checked == true)
			F.wl_macmode.value = "deny";
		else
			F.wl_macmode.value = "allow";
	}
	else
		F.wl_macmode.value = "disabled";
        F.submit_button.value = "Wireless_MAC";
        F.gui_action.value = "Apply";
        F.submit();
}

function SelMac(num,F)
{
	var start = '';
	var end = '';
 	var total = F.elements.length;
	for(i=0 ; i < total ; i++){
		if(F.elements[i].name == "start")	start = i;
		if(F.elements[i].name == "end")		end = i;
	}
	if(start == '' || end == '')	return true;

	if(num == "1") {
		if ("<% nvram_get("wl_macmode"); %>" == "disabled") 
			alert(wlanwscpopup.disable);
		for(i = start; i<=end ;i++)
			choose_enable(F.elements[i]);
	}
	else {
		for(i = start; i<=end ;i++)
			choose_disable(F.elements[i]);
	}
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
function exit()
{
        closeWin(active_win);
}

function init()
{
	if('<% nvram_get("wl_active_add_mac"); %>' == '1') {
		document.wireless.wl_mac_filter[0].checked = true;
		SelMac('1',document.wireless);
	}
	else
		SelMac('<% nvram_get("wl_mac_filter"); %>',document.wireless);

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
<input type=hidden name=wl_macmode>
<input type=hidden name=wl_maclist value=32>
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,wlantopmenu.macfilter);</script></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT onClick=SelMac(1,this.form) type=radio value=1 name=wl_mac_filter <% nvram_match("wl_mac_filter","1","checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
			<td><INPUT onClick=SelMac(0,this.form) type=radio value=0 name=wl_mac_filter <% nvram_match("wl_mac_filter","0","checked"); %>><B><script>Capture(share.disabled)</script></B></td></tr></table>
          </TD></TR>
      <TR><script>
			draw_table(ISHR,"");
		</script></TR>
         <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><input type=hidden name=start><INPUT type=radio value="deny" name="wl_macmode1" <% nvram_invmatch("wl_macmode","allow","checked"); %>><b><script>Capture(wlanfilter.prevent)</script></b> <script>Capture(wlanfilter.pclistbl)</script></TD></TR>
         <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><INPUT type=radio value="allow" name="wl_macmode1" <% nvram_match("wl_macmode","allow","checked"); %>><b><script>Capture(wlanfilter.permitonly)</script></b> <script>Capture(wlanfilter.pclisttoaccbl)</script></TD></TR>
      <TR><script>
			draw_table(ISHR,"");
		</script></TR>
		<TR><script>draw_table(SUBFUN,wlanfilter.macfilterlist);</script>
          <TD colspan=2 class=FUNNAME1><script>document.write("<INPUT  type=button onclick=ViewClient() name=list_button value='&nbsp;" + wlanbutton.clilist + "'>");</script></TD></TR>
         <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
		<table cellpadding="0" cellspacing="0">
		<script>
		var i;
		var num1;
		var num2;
		var wl_maclist = "<% nvram_get("wl_maclist"); %>";
		var wl_activelist = "<% nvram_get("wl_active_mac"); %>";
		var wl_active_add_mac = '<% nvram_get("wl_active_add_mac"); %>';
		var mac1;
		var mac2;
		if(wl_active_add_mac == "1")
			var MAC = wl_activelist.split(' ');
		else
			var MAC = wl_maclist.split(' ');
		for(i=1;i<=16;i++) {
			num1 = i;
			num2 = parseInt(i)+16;

			if(!MAC[(num1-1)])
				mac1 = "00:00:00:00:00:00";
			else
				mac1 = MAC[(num1-1)];
			
			if(!MAC[(num2-1)])
				mac2 = "00:00:00:00:00:00";
			else
				mac2 = MAC[(num2-1)];

			if(num1 < 10) { num1 = "0"+num1 };
			document.write("<tr>");
			document.write("<td>MAC "+num1+":&nbsp;&nbsp;&nbsp;</td>");
			document.write("<td dir=\"ltr\"><INPUT class=num maxLength=17 onBlur=valid_macs_all(this) size=15 value="+mac1+" name=m"+(num1-1)+">&nbsp;&nbsp;&nbsp;&nbsp;</td>");
			document.write("<td>MAC "+num2+":&nbsp;&nbsp;&nbsp;</td>");
			document.write("<td dir=\"ltr\"><INPUT class=num maxLength=17 onBlur=valid_macs_all(this) size=15 value="+mac2+" name=m"+(num2-1)+"></td></tr>");
			
		}
<% wireless_init("reset_active_add_mac"); %>
		</script>
		</table>
		<input type=hidden name=end>
	  </TD></TR>

        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
