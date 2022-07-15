<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>MAC Address Clone</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = topmenu.macaddrclone;
function to_submit(F)
{	
	if(valid_macs_00(F))
        {
		F.submit_button.value = "WanMAC";
		F.gui_action.value = "Apply";
	       	F.submit();
	}
}
function CloneMAC(F)
{
/*
       	F.submit_button.value = "WanMAC";
      	F.change_action.value = "gozila_cgi";
	F.submit_type.value = "clone_mac";
       	F.gui_action.value = "Apply";
       	F.submit();
*/
	var http_client_mac = '<% nvram_get("http_client_mac"); %>'
	F.def_hwaddr_0.value = http_client_mac.substr(0, 2);
	F.def_hwaddr_1.value = http_client_mac.substr(3, 2);
	F.def_hwaddr_2.value = http_client_mac.substr(6, 2);
	F.def_hwaddr_3.value = http_client_mac.substr(9, 2);
	F.def_hwaddr_4.value = http_client_mac.substr(12, 2);
	F.def_hwaddr_5.value = http_client_mac.substr(15, 2);
}
function SelMac(num,F)
{
        mac_enable_disable(F,num);
}
function mac_enable_disable(F,I)
{
	var http_from = '<% nvram_get("http_from"); %>';
        EN_DIS3 = I;
        if ( I == "0" ){
                choose_disable(F.def_hwaddr);
                choose_disable(F.def_hwaddr_0);
                choose_disable(F.def_hwaddr_1);
                choose_disable(F.def_hwaddr_2);
                choose_disable(F.def_hwaddr_3);
                choose_disable(F.def_hwaddr_4);
                choose_disable(F.def_hwaddr_5);
                choose_disable(F.clone_b);
        }
        else{
                choose_enable(F.def_hwaddr);
                choose_enable(F.def_hwaddr_0);
                choose_enable(F.def_hwaddr_1);
                choose_enable(F.def_hwaddr_2);
                choose_enable(F.def_hwaddr_3);
                choose_enable(F.def_hwaddr_4);
                choose_enable(F.def_hwaddr_5);
		if(http_from=="lan")
	                choose_enable(F.clone_b);
		else
			choose_disable(F.clone_b);
        }
}

function init() 
{               
	var swmode = '<% nvram_get("switch_mode");%>';
	if( swmode == 1)
		alert(share.brdgmwn);

        mac_enable_disable(document.mac,'<% nvram_get("mac_clone_enable"); %>');
	<% onload("MACClone", "document.mac.mac_clone_enable[0].checked = true; mac_enable_disable(document.mac,1);"); %>	
	/*Jemmy Fix bug 21475:LAN clone PC's MAC address is not accessable from remote control 2009.12.30*/
        if("<% nvram_get("http_from"); %>" == "wan") {
                DISABLE_ALL(true,document.mac);
        }

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function valid_macs_00(F)
{
//        M1 = "The MAC Address is not correct!!";
        M1 = errmsg.err17;
        if(F.def_hwaddr_0.value == 00 && F.def_hwaddr_1.value == 00 && F.def_hwaddr_2.value == 00 &&  F.def_hwaddr_3.value == 00 && F.def_hwaddr_4.value == 00 && F.def_hwaddr_5.value == 00)
        {
                F.def_hwaddr_0.value = F.def_hwaddr_0.defaultValue;
                F.def_hwaddr_1.value = F.def_hwaddr_1.defaultValue;
                F.def_hwaddr_2.value = F.def_hwaddr_2.defaultValue;
                F.def_hwaddr_3.value = F.def_hwaddr_3.defaultValue;
                F.def_hwaddr_4.value = F.def_hwaddr_4.defaultValue;
                F.def_hwaddr_5.value = F.def_hwaddr_5.defaultValue;
                alert(M1);
                return false;
        }
        else
        {
                return true;
        }
}
</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM name=mac method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,topmenu.macaddrclone);</script></TR>      
  		  <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1>
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT type=radio value=1 name=mac_clone_enable <% nvram_match("mac_clone_enable", "1", "checked"); %> OnClick=SelMac(1,this.form)><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name=mac_clone_enable <% nvram_match("mac_clone_enable", "0", "checked"); %> OnClick=SelMac(0,this.form)><B><script>Capture(share.disabled)</script></B></td></tr></table></TD></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
            <TABLE>
              <TBODY>
              <TR>
		<TD width=4>&nbsp;</TD>
                <TD width=430> <HR color=#b5b5e6 SIZE=1> </TD>
              </TR>
              </TBODY>
            </TABLE>
          </TD></TR>

		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>

<table cellpadding="0" cellspacing="0">
		<tr>
		<td>&nbsp;&nbsp;<script>Capture(share.macaddr)</script>:&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td dir="ltr"><input type=hidden name="def_hwaddr"  value="6">
                                  <input type=hidden name="def_hwaddr"  value="6">
                                  <input name="def_hwaddr_0" value='<% get_clone_mac("0"); %>' style="width:35" maxlength=2 onBlur=valid_mac(this,0) class=num> :
                                  <input name="def_hwaddr_1" value='<% get_clone_mac("1"); %>' style="width:35" maxlength=2 onBlur=valid_mac(this,1) class=num> :
                                  <input name="def_hwaddr_2" value='<% get_clone_mac("2"); %>' style="width:35" maxlength=2 onBlur=valid_mac(this,1) class=num> :
                                  <input name="def_hwaddr_3" value='<% get_clone_mac("3"); %>' style="width:35" maxlength=2 onBlur=valid_mac(this,1) class=num> :
                                  <input name="def_hwaddr_4" value='<% get_clone_mac("4"); %>' style="width:35" maxlength=2 onBlur=valid_mac(this,1) class=num> :
				<input name="def_hwaddr_5" value='<% get_clone_mac("5"); %>' style="width:35" maxlength=2 onBlur=valid_mac(this,1) class=num>&nbsp;&nbsp;&nbsp;</td></tr></table></TD></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
           <TABLE>
              <TBODY>
              <TR>
                <TD width=93></TD>
                <TD align=left>
			<script>document.write("<INPUT onclick=CloneMAC(this.form) type=button name=clone_b value=\"" + macclone.clonepcmac + "\">");</script>
                </TD>
              </TR>
              </TBODY>
            </TABLE>
           </TD></TR>

			<TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
