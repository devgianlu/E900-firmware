<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Basic Wireless Settings</TITLE>
<% no_cache(); %>
<% charset(); %> 
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
re1 = /<br>/gi;
str = wlantopmenu.wsc.replace(re1," ");
document.title = str;
var iTimerID = null;
var closeTimer = false ; 
var nwkey="<% nvram_get("wsc_nwkey"); %>";
var wscresult="<% nvram_get("wsc_result"); %>";
var width=0;

function nextpage()
{
	F = document.wireless ;
	all_obj(F,false,true);
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value ="wsc_method1";
	F.change_action.value = "gozila_cgi";
	F.next_page.value = "Wireless_Basic.asp";
	F.wsc_result.value = "3";
	F.submit();	
}

function PushButton(F,I)
{
	if(document.wireless.wsc_mode[1].checked) return;
	F.img_gif.style.visibility = "hidden" ;
	nextpage();
}

function EnterPIN(F)
{
	var pin_tmp = document.wireless.wsc_enrpin.value;
	
	if(document.wireless.wsc_mode[1].checked) return;

	ch = pin_tmp.charAt(4);	
	if((ch == '-' || ch == ' ')&& pin_tmp.length == 9 )
	{
		pin_tmp= pin_tmp.substring(0,4)+pin_tmp.substring(5);
		document.wireless.wsc_enrpin.value = pin_tmp;
	}

	closeTimer = true ; 
	if ( !isascii(document.wireless.wsc_enrpin,document.wireless.wsc_enrpin.value)) 
	{
	        closeTimer = false ; 
	        return false ; 
	}
	if ( !check_space(document.wireless.wsc_enrpin,"PIN value")) 
	{
		closeTimer = false ; 
		return false ; 
	}
	if (F.wsc_enrpin.value. length != 4) {
		if ( !validChecksum(F.wsc_enrpin.value) || F.wsc_enrpin.value.length<8 || F.wsc_enrpin.value.length>8)
		{
			closeTimer = false ; 
			alert(errmsg.err69);
			return false ; 
		}
 	}
	all_obj(F,true,true);
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value ="wsc_method2";
        F.change_action.value = "gozila_cgi";
	F.wsc_enr_pin.value = F.wsc_enrpin.value;
	F.next_page.value = "Wireless_Basic.asp";
	F.commit.value = "0";
        F.submit();
	
}

function AcceptConfig(F)
{
	all_obj(F,false,true);
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value ="wsc_method3";
        F.change_action.value = "gozila_cgi";
	F.commit.value = "0";
        F.submit();
}

function all_obj(F,I,DIS)
{
	var flg ; 
	if ( DIS==true && I==true )
		flg = "hidden";
	else
		flg = "visible";
//	F.cmdreset.disabled = DIS ; 
	F.img_gif.disabled = DIS ; 
	F.cmdreg.disabled = DIS ; 
	F.wsc_enrpin.disabled = DIS; 
	
}

function reset_security(F)
{
	all_obj(F,true,true);
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value ="wsc_reset";
        F.change_action.value = "gozila_cgi";
	F.commit.value="0";
        F.submit();
}
function ChangeWpsMode(F)
{
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value = "WPS_Config";
        F.change_action.value = "gozila_cgi";
	F.next_page.value = "Wireless_Basic.asp";
	F.wsc_security_mode.value = "1" ; 
	F.submit();	
}

function init()
{
   var aprole , cmethod, wps_status ; 
   aprole = "<% nvram_get("wsc_ap_role"); %>";
   cmethod = "<% nvram_get("wsc_config_method"); %>";
   wps_status = "<% nvram_get("wps_mode"); %>";
   document.wireless.pbutton.value = "0";
   if ( wscresult == "4" ) 
   {
	if ( cmethod == "pbc" && aprole == "withReg")
	{
		all_obj(document.wireless,false,true);
	}
	else
		all_obj(document.wireless,true,true);
	document.wireless.img_gif.style.visibility = "hidden" ;
   }
   else
   {
	all_obj(document.wireless,true,false);
	document.wireless.img_gif.style.visibility = "visible" ;
   }
   if(wps_status == "enabled")
   {
	document.wireless.wsc_mode[0].checked = true;
	document.wireless.wsc_mode[1].checked = false;
	document.getElementById("wpswarning").style.display="none";
   }else{
	document.wireless.wsc_mode[0].checked = false;
	document.wireless.wsc_mode[1].checked = true;
	choose_disable(document.wireless.img_gif);
	choose_disable(document.wireless.cmdreg);
	choose_disable(document.wireless.wsc_enrpin);
	document.getElementById("content_1").style.color = "#d7d6df";
	document.getElementById("content_2").style.color = "#d7d6df";
	document.getElementById("content_3").style.color = "#d7d6df";
	document.getElementById("content_4").style.color = "#d7d6df";
	document.getElementById("content_5").style.color = "#d7d6df";
	document.getElementById("content_6").style.color = "#d7d6df";
	document.getElementById("content_7").style.color = "#d7d6df";
	document.getElementById("content_8").style.color = "#d7d6df";
	document.getElementById("content_9").style.color = "#d7d6df";
	document.getElementById("content_10").style.color = "#d7d6df";
	document.getElementById("content_11").style.color = "#d7d6df";
	document.getElementById("content_20").style.color = "#d7d6df";
	<% nvram_match("security_mode_0","disabled","//"); %> document.getElementById("content_12").style.color = "#d7d6df";
	<% nvram_match("security_mode_0","disabled","//"); %> document.getElementById("content_13").style.color = "#d7d6df";
   }
//   if ( wscresult != "3" && wscresult != "4" ) 
//	   iTimerID = window.setTimeout(wn_reload,10*1000);
   WPS_STATUS_SHOW(wscresult);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
 }
 
function wn_reload()
{
    window.clearTimeout(iTimerID);
    window.location.replace("Wireless_Basic.asp");
}

function generatePIN(F) 
{
        F.submit_button.value = "Wireless_WSC";
        F.change_action.value = "gozila_cgi";
	F.submit_type.value = "gen_ap_pin"; 
        F.submit();
}


function SelMode(F)
{
	if ( F.wsc_smode[1].checked == true ) return ; 
	closeTimer = true ; 
	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value = "Wireless_Config";
        F.change_action.value = "gozila_cgi";
	F.next_page.value = "Wireless_Basic.asp";
	F.wsc_security_mode.value = "0" ; 
	F.commit.value = "0" ; 
	choose_disable(F.wsc_smode[1]);
	choose_disable(F.wsc_smode[0]);
	F.submit();	
}

function validChecksum(PIN)
{
        var accum = 0;
        accum += 3 * (parseInt(PIN / 10000000) % 10);
        accum += 1 * (parseInt(PIN / 1000000) % 10);
        accum += 3 * (parseInt(PIN / 100000) % 10);
        accum += 1 * (parseInt(PIN / 10000) % 10);
        accum += 3 * (parseInt(PIN / 1000) % 10);
        accum += 1 * (parseInt(PIN / 100) % 10);
        accum += 3 * (parseInt(PIN / 10) % 10);
        accum += 1 * (parseInt(PIN / 1) % 10);
    return (0 == (accum % 10));
}

function WPS_STATUS_SHOW(ws)
{
        if ( ws == "3" || ws == "4" )
        {
			if ( close_session == "1" )
			{
				    document.getElementById("loadstatus").src = "wps_search_device.asp" ;
			}
			else
			{
				    document.getElementById("loadstatus").src = "wps_search_device.asp;session_id=" + session_key;
			}

                document.getElementById("layer1").style.display = "block";
                document.getElementById("layer2").style.display = "block";
        }
        else
        {
                document.getElementById("layer1").style.display = "none";
                document.getElementById("layer2").style.display = "none";
        }

}
document.onkeydown = onInputKeydown;
function onInputKeydown(event)
{
	if(typeof event == "undefined")
	{
		return handleKeyDown(window.event);
	}
	else 
	{
		return handleKeyDown(event);
	}
}
function handleKeyDown(event)
{
	if(event.keyCode == 13)
	{
		return EnterPIN(document.wireless);
	}
	return true;
}
</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM name=wireless  method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button >
<input type=hidden name=gui_action >
<input type=hidden name=commit >
<input type=hidden name=pbutton >
<input type=hidden name=submit_type >
<input type=hidden name=wsc_security_mode >
<input type=hidden name=wsc_enr_pin >
<input type=hidden name=change_action >
<input type=hidden name=next_page >
<input type=hidden name=wsc_result >
<input type=hidden name=wsc_guiresult >
<input type=hidden name=wsc_barwidth >

<div class=DISABLE_FORM id=layer1></div>
<div id=layer2 class=STATUSFORM>
<iframe id=loadstatus width=100% height=100% scrolling=no frameborder=0></iframe>
</div>

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,wlansetup.wifi);</script></TR>
    <TR><script>draw_table(SUBFUN,"");</script>
	  <!-- begin wuzh modify 2008-4-11 -->
          <!--TD width=156 height=25>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.wconfig)</script>:&nbsp;</font></TD-->
	   <TD colspan=2 class=FUNNAME1><TABLE><TBODY>
	<TR>
          <TD width=376 height=25>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=0 name="wsc_smode" onclick=SelMode(this.form)><script>Capture(share.mtumanual)</script>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=1 name="wsc_smode" checked onclick=SelMode(this.form)><script>Capture(wlansetup.wifi)</script></td>
		<td></td>
		</tr>
		</table>
	  </TD>
          <TD width=57 height=25>&nbsp;</TD>
	  </TR>
	<TR>
          <TD width=376 height=25>
		<table cellpadding="0" cellspacing="0"><tr>
		<td width=40>&nbsp;&nbsp;WPS:&nbsp;&nbsp;</td><td><INPUT type=radio value=0 name="wsc_mode" onclick=ChangeWpsMode(this.form)><script>Capture(share.enabled)</script>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=1 name="wsc_mode" onclick=ChangeWpsMode(this.form)><script>Capture(share.disabled)</script></td></tr>
		</tr>
		</table>
	  </TD>
          <TD width=57 height=25>&nbsp;</TD>
	  </TR>
	<TR id=wpswarning>
          <TD width=423 height=25>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td width=45></td><td colspan=2><script>Capture(share.wpswarning)</script></td></tr>
		</table>
	  </TD>
          <TD width=10 height=25>&nbsp;</TD>
	  </TR>
	</TBODY></TABLE></TD>
	  <!-- end wuzh modify 2008-4-11 --></TR>
           <TR><script>
			draw_table(ISHR,"");
		</script></TR>        
        <TR id=content_1><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1><font face="Arial" style="font-size:12pt"><b><script>Capture(wlansetup.wifi)</script></b></font></TD></TR>
        <TR id=content_2><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1><font face="Arial" style="font-size:8pt"><script>Capture(wlanwsc.msg)</script>:</font></TD></TR>
		<TR><script>draw_table(ISBLANK,"");</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1>
	  <table><tr><font face="Arial" size="font-size:8pt"><td width=210><p id=content_3> 
	  1. <script>Capture(wlanwsc.pushbutton)</script></p>
	  </td><td width=110>&nbsp;&nbsp;&nbsp;
	  <script>
		var aprole , cmethod , wscresult ; 
		wscresult = "<% nvram_get("wsc_result"); %>";
		aprole = "<% nvram_get("wsc_ap_role"); %>";
		cmethod = "<% nvram_get("wsc_config_method"); %>";
   		wps_status = "<% nvram_get("wps_mode"); %>";
		if ((wps_status == "enabled") && ((aprole=="withReg" && cmethod =="pbc") || wscresult!="4"))
		{
			document.write("<img name=\"img_gif\" border=0 src=image/WFA_WPS_Mark_Solo.gif onMouseOver=\"this.src='image/WFA_WPS_Mark_Solo1.gif'\" onMouseOut=\"this.src='image/WFA_WPS_Mark_Solo.gif'\" style=\"cursor:pointer;\" onclick=PushButton(document.wireless,this)>");
		}
		else
		{
	  		document.write("<img name=\"img_gif\" border=0 src=image/WFA_WPS_Mark_Solo.gif style=\"filter:Alpha(Style=2)\">"); 
		}
	  </script> 
	  </TD><td width=100 valign="bottom"><p id=content_20>

	  <script>
		var wscresult = "<% nvram_get("wsc_result"); %>" ; 
		if ( wscresult == "1" ) Capture(other.success);
		else if ( wscresult =="2") Capture(other.fail);
		else if ( wscresult =="3") Capture(other.search+"...");
		else if ( wscresult =="4") Capture(other.connect+"...");
	  </script></p>
	  </td>	
	  </font>
	  </tr></table></TD></TR>
      <TR><script>draw_table(SUBFUN,"");</script>
      <TD colspan=2 class=FUNNAME1><p align="center" id=content_4><font size=2><b><script>Capture(other.or)</script></b></font></p></TD></TR>
      <TR><script>draw_table(SUBFUN,"");</script>
      <TD colspan=2 class=FUNNAME1>
	  <table><tr> 
	  <font face="Arial" size="font-size:8pt"><td><p id=content_5>2. <script>Capture(wlanwsc.enterPIN)</script>
	  <input type="text" name="wsc_enrpin" size=11><script>Capture(wlanwsc.enterPIN2)</script>
	  <script>document.write("<input type=button value="+wlanwsc.register+" name=cmdreg onclick=EnterPIN(this.form)>");</script></p>
	  </td></font></tr></table></TD></TR>
      <TR><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1><p align="center" id=content_6><font size=2><b><script>Capture(other.or)</script></b></font></p></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
        <TD colspan=2 class=FUNNAME1>
	  <table><tr>
<% support_match("CONFIG_WSCCMD", "y", "<!--"); %>
	  <font face="Arial" size="font-size:8pt"><td><p id=content_7>3. <script>Capture(wlanwsc.msg_PIN)</script><b>
                <% nvram_get("wsc_device_pin"); %> 
	  </b><script>Capture(wlanwsc.msg_PIN2)</script>
<% support_match("CONFIG_WSCCMD", "y", "-->"); %>

<% support_match("CONFIG_WPS", "y", "<!--"); %>
	  <font face="Arial" size="font-size:8pt"><td><p id=content_7>3. <script>Capture(wlanwsc.msg_PIN)</script><b>
                <% nvram_get("wps_device_pin"); %> 
	  </b><script>Capture(wlanwsc.msg_PIN2)</script>
<% support_match("CONFIG_WPS", "y", "-->"); %>

<% support_invmatch("WSC_WIFI_SUPPORT", "1", "<!--"); %>
	  <script>document.write("<input type=button value=\""+wlanwsc.gconfig+"\" name=cmdconfig onclick=AcceptConfig(this.form)>");</script>
<% support_invmatch("WSC_WIFI_SUPPORT", "1", "-->"); %>	</p></td></font></tr></table></TD></TR>
<!--
        <TR>
          <TD align=right width=155 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD height=25 width=21>&nbsp;</TD>
          <TD height=25 colspan=2></TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
        <TR>
          <TD align=right width=155 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD height=25 width=21>&nbsp;</TD>
          <TD height=25 colspan=2></TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
-->
     	<TR><script>
			draw_table(ISHR,"");
		</script></TR>    
<!--
        <TR>
          <TD align=right width=156 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD height=25 width=21>&nbsp;</TD>
          <TD height=25 colspan=2 width=420>
	  <table><tr> 
	  <font face="Arial" size="font-size:8pt"><td width=210><script>Capture(wlanwsc.wifistatus)</script>:
	   </td><td width=210><b>
	   <script>
		//var wsc_state = "<% nvram_get("wsc_config"); %>"; 
		//var wsc_state = "<% nvram_get("wsc_config_state"); %>"; 
<% support_match("CONFIG_WSCCMD", "y", "/*"); %>
                var wsc_state = "<% nvram_get("wsc_config_state"); %>"; 
<% support_match("CONFIG_WSCCMD", "y", "*/"); %>
<% support_match("CONFIG_WPS", "y", "/*"); %>
                var wsc_state = "<% nvram_get("wl_wps_config_state"); %>"; 
<% support_match("CONFIG_WPS", "y", "*/"); %>
		if ( wsc_state == "1") Capture(wlanwsc.config);
		else Capture(wlanwsc.unconfig);
	   </script></b></TD>	
	   </font>
	  </tr></table>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
-->
	<!-- 2.4GHZ Wireless Settings -->
		<TR><script>draw_table(SUBFUN,wlansetup.lgmenu);</script>
          <TD colspan=2 class=FUNNAME1>
	  <table><tr> 
	  <font face="Arial" size="font-size:8pt"><td width=210><p id=content_8><script>Capture(wlansetup.ssid)</script>:</p>
	   </td><td width=210><p id=content_9><b>
	   <% nvram_get("wl0_ssid"); %>
	   </b></p></td>
	   </font>
	  </tr></table></TD></TR>
       <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
	  <table><tr>
	  <font face="Arial" size="font-size:8pt"><td width=210><p id=content_10><script>Capture(bmenu.security)</script>:</p>
	   </td><td width=210><p id=content_11><b>
	   <script>
		var nwkey = "<% nvram_get("security_mode_0"); %>" ; 
		if ( nwkey == "disabled" ) Capture(share.disabled)
		else if ( nwkey == "wep" ) Capture(wlansec.wep)
		else if ( nwkey == "psk") Capture(hwlsec2.wpapersonal)
		else if ( nwkey == "psk psk2") Capture(hwlsec2.wpa2mixed)
		else if ( nwkey == "psk2") Capture(hwlsec2.wpa2personal)
		else if ( nwkey == "wpa") Capture(hwlsec2.wpaenterprise)
		else if ( nwkey == "wpa wpa2") Capture(hwlsec2.wpa2enterprise)
		else if ( nwkey == "wpa2") Capture(hwlsec2.wpa2enterprise)
		else if ( nwkey == "radius") Capture(wlansec.radius)
	  </script>
	  </b></p></td>
	  </font>
	  </tr></table></TD></TR>
	<% nvram_match("security_mode_0","disabled","<!--"); %>
      <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
	  <table><tr> 
	  <font face="Arial" size="font-size:8pt"><td width=210><p id=content_12><% nvram_match("security_mode_0","wep","WEP <script>Capture(wlansec.key)</script>"); %> <% nvram_invmatch("security_mode_0","wep","<script>Capture(wlansec.passphrase)</script>"); %>:</p>
	   </td><td width=210><p id=content_13><b>
	   <script>
		var wlkey , nwkey , wlkey_value , line;
		var index, ch_index; 
		var wlkey_tmp = "";
		nwkey = "<% nvram_get("security_mode_0"); %>" ; 
		if ( nwkey == "wep" || nwkey == "radius") 
		{
			wlkey = "<% nvram_get("wl0_key"); %>";
			if ( wlkey == "1") wlkey_value = "<% nvram_get("wl0_key1"); %>";
			else if ( wlkey == "2") wlkey_value = "<% nvram_get("wl0_key2"); %>";
			else if ( wlkey == "3") wlkey_value = "<% nvram_get("wl0_key3"); %>";
			else if ( wlkey == "4") wlkey_value = "<% nvram_get("wl0_key4"); %>";
		}
		else if ( nwkey == "psk" || nwkey == "psk psk2" || nwkey == "psk2" || nwkey == "wpa" || nwkey == "wpa wpa2" || nwkey == "wpa2")
			wlkey_value = "<% nvram_get("wl0_wpa_psk"); %>";		

//add by willsun at 20120229
		index = 0;
		ch_index = 0;

		if (wlkey_value.length <= 24) {
			Capture(wlkey_value);
		} else {
			while (wlkey_value.length > 24) {
//The char '&' is translated to "&#XX;".Single char '&' wouldn't be exist.
				if (wlkey_value.charAt(index) == '&') {
					if (wlkey_value.charAt(index+4) != ';') {	//some chars are "&#XX;" and the some chars are "&#XXX;"	
						index += 6;
					} else {
						index += 5;
					}
				} else {
					index++;
				}

				ch_index++;

				if (ch_index == 24 || index == wlkey_value.length) {
					wlkey_tmp += wlkey_value.substring(0, index) + "<br/>";
					wlkey_value = wlkey_value.substring(index, wlkey_value.length);	
					index = 0;
					ch_index = 0;
				}
			}

			wlkey_tmp += wlkey_value;
			Capture(wlkey_tmp);
		}
//end by willsun at 20120229

//		line = wlkey_value.length/20;
//		Capture(wlkey_value);
	   </script>
	   </b></p><td>
	   </font>
	  </tr></table></TD></TR>
	<% nvram_match("security_mode_0","disabled","-->"); %>
	<TR><script>draw_table(ISBLANK,"");</script></TR>                                              
<!--
        <TR>
          <TD align=right width=155 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD height=25 width=21>&nbsp;</TD>
          <TD height=25 colspan=2 width=420 align=center>
	  <script>document.write("<input type=button value=\""+wlanwsc.secreset+"\" name=cmdreset onclick=reset_security(this.form)>");</script>
	  </TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
-->

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("NOBT_TAIL.asp"); %>
</FORM></BODY></HTML>
