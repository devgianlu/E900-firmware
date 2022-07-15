<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Basic Wireless Settings</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
re1 = /<br>/gi;
str = wlantopmenu.basicset.replace(re1," ");
document.title = str;
var EN_DIS = '<% nvram_else_match("wl_net_mode","disabled","0","1"); %>';
var init_gmode;

var wl0_nbw = '<% nvram_get("wl_nbw"); %>';
//var wl1_nbw = '<% nvram_get("wl1_nbw"); %>';
var wl_40m_disable = '<% nvram_get("wl_40m_disable"); %>';

var set40M = parseInt('<% nvram_get("test_channel"); %>');

function ses_enable_disable(F,I)
{
        EN_DIS = I;
        if( I == "0"){
                choose_disable(F.B1);
                choose_disable(F.B2);
        }
        else{
                choose_enable(F.B1);
                choose_enable(F.B2);
        }
}



var ses = '<% get_ses_status(); %>';
                                                                                                   
function ses_status()
{
        return ses;
}
                                                                                                   
function Reset_SES(F)
{
        F.submit_button.value = "Wireless_Basic";
        F.submit_type.value = "Reset_SES";
        F.change_action.value = "gozila_cgi";
        F.submit();
}
                                                                                                   
function Set_SES_Short_Push(F)
{
        var wl_net_mode = '<% nvram_get("wl_net_mode"); %>';
	var ses_enable = '<% nvram_get("ses_enable"); %>';

	if(wl_net_mode == "disabled" || ses_enable == "0")
		return ;
                                                                                                   
        if (confirm(SW_SES_BTN.MSG2)) {
                F.submit_button.value = "Wireless_Basic";
                F.submit_type.value = "Set_SES_Short_Push";
                F.change_action.value = "gozila_cgi";
                F.next_page.value = "SES_Status.asp";
                F.submit();
        }
}

function Set_SES_Long_Push(F)
{
        if (confirm(SW_SES_BTN.MSG3)) {
                F.submit_button.value = "Wireless_Basic";
                F.submit_type.value = "Set_SES_Long_Push";
                F.change_action.value = "gozila_cgi";
                F.next_page.value = "Wireless_Basic.asp";
                F.submit();
        }
}

function SelMode(F)
{
	var smode = "<% nvram_get("wl0_security_mode"); %>";

	if ("<% nvram_get("wl_macmode"); %>" == "deny") {
		alert(wlanwscpopup.invalid);
	} else if ("<% nvram_get("wl0_security_mode"); %>" == "wep") {
		//alert(wlanwscpopup.invalid2);
		alert(wlanwscpopup.invalid4);
	} else if ("<% nvram_get("wl0_security_mode"); %>" == "wpa_personal") {
		alert(wlanwscpopup.invalid3);
	}

	if ( F.wsc_smode[0].checked == true ) return ; 

	/*Jemmy fix alerting two same warn message when page switch ftom Manual to WSC 2010.6.21*/
	if (( smode == "wpa_enterprise" || smode == "wpa2_enterprise" || smode == "radius" || smode == "wpa_wpa2_enterprise"))
	{
		//alert(errmsg.err70);
		alert(errmsg.err70_01);
	}
	else
		F.wsc_security_mode.value = "1";

	F.submit_button.value = "Wireless_Basic";
	F.submit_type.value="Wireless_Config";
	F.change_action.value = "gozila_cgi";
	F.next_page.value = "Wireless_Basic.asp";
	F.wsc_security_mode.value = "1";
	choose_disable(F.wsc_smode[0]);
	choose_disable(F.wsc_smode[1]);
	F.commit.value="0";
	F.submit();	
}

function DisableBroadcast(F)
{
	var wps_version2 = "<% nvram_get("wps_version2"); %>";

	if (wps_version2 == "enabled" && F.closed_24g[1].checked == true)
	{
		if(confirm(wlanwscpopup.disable)==false)
		{
			F.closed_24g[0].checked = true;
			F.closed_24g[1].checked = false;
		}
	}
}

function valid_ssid(I,M)
{
/*
	var wps_version2 = "<% nvram_get("wps_version2"); %>";
	var security_mode = "<% nvram_get("wl0_security_mode"); %>";

	if (wps_version2 == "enabled" && security_mode == "disabled")
	{
		if(confirm(wlanwscpopup.unsec)==false)
		{
			I.form.ssid_24g.value = "";
			I.form.ssid_24g.focus();
			return;
		}
	}
*/
	valid_name(I,M);
}

function createChannel0(F)
{
	var max_channel = '<% get_wl_max_channel(); %>';
	var start = 0;
	var len = 0;

	start = 0;
	len = parseInt(max_channel)+1;
	
	F._wl0_channel.length = len;	

	for(i=0;i<len;i++) 
	{
		if (i == 0)
		{
			F._wl0_channel[0] = new Option(share.auto);
			F._wl0_channel[0].value = 0;
		}else
		{	
			var ch = start + i;
			var CH = eval("wlansetup.ch"+i);
		
			F._wl0_channel[i] = new Option(ch+" - "+CH);
			F._wl0_channel[i].value = ch;	
		}
	}
}


function UnableCheck(passForm)
{
	if(passForm.net_mode_24g.selectedIndex != '5') //Not disabled
	{
		passForm.ssid_24g.disabled = false;
		passForm._wl0_nbw.disabled = false;
		//passForm._wl0_widechannel.disabled = false;
		passForm._wl0_channel.disabled = false;
		passForm.closed_24g[0].disabled = false;
		passForm.closed_24g[1].disabled = false;
	}

	if (passForm.net_mode_24g.selectedIndex == '0' || passForm.net_mode_24g.selectedIndex == '4')	{	//Mixed & N-only
		passForm._wl0_nbw.disabled = false;
	}
	else {	// B-only & G-only & Disabled
		passForm._wl0_nbw.disabled = true;
	}
	if(passForm.net_mode_24g.selectedIndex == '5') //Disabled
	{
		passForm.ssid_24g.disabled = true;
		passForm._wl0_nbw.disabled = true;
		//passForm._wl0_widechannel.disabled = true;
		passForm._wl0_channel.disabled = true;
		passForm.closed_24g[0].disabled = true;
		passForm.closed_24g[1].disabled = true;
	}
}

function ModeChange(passForm)
{
	var security = "<% nvram_get("wl0_security_mode"); %>";
	var security_0 = "<% nvram_get("security_mode_0"); %>";
	var old_net_mode = "<% nvram_get("net_mode_24g"); %>";
	
	/*Jemmy add warn message for swicth to mixed mode when security select wep/wpa_personal/wpa_enterprise 2009.8.12*/
	if ((passForm.net_mode_24g.value == "mixed") && (security == "wep" || security == "wpa_personal" || security == "wpa_enterprise"))
	{
       		if (confirm(errmsg.mixedmodesecurity) == false)
		{
			passForm.net_mode_24g.value = "<% nvram_get("net_mode_24g"); %>";
		}
	}

	/*Jemmy add warn message when wireless switch from other modes to n-only if security mode is not disabled/wpa2-personal 2009.12.10*/
	if ((passForm.net_mode_24g.value == "n-only") && (old_net_mode != "n-only"))
	{
		if (security_0 != "disabled" && security_0 != "psk2" && security_0 != "wpa2")
		{
	       		if (confirm(errmsg.nonly) == false)
			{
				passForm.net_mode_24g.value = old_net_mode;
			}		
		}		
	}

	if(passForm.net_mode_24g.selectedIndex != '5') //Not disabled
	{
		passForm.ssid_24g.disabled = false;
		passForm._wl0_nbw.disabled = false;
		//passForm._wl0_widechannel.disabled = false;
		passForm._wl0_channel.disabled = false;
		passForm.closed_24g[0].disabled = false;
		passForm.closed_24g[1].disabled = false;
	}

	if (passForm.net_mode_24g.selectedIndex == '0' || passForm.net_mode_24g.selectedIndex == '4')	{	//Mixed & N-only
		passForm._wl0_nbw.disabled = false;
	}
	else {	// B-only & G-only & Disabled
		passForm._wl0_nbw.disabled = true;
		passForm._wl0_nbw.selectedIndex = '1'; 	
	}
	BandWidthChange(passForm);
	
	if(passForm.net_mode_24g.selectedIndex == '5') //Disabled
	{
		passForm.ssid_24g.disabled = true;
		passForm._wl0_nbw.disabled = true;
		//passForm._wl0_widechannel.disabled = true;
		passForm._wl0_channel.disabled = true;
		passForm.closed_24g[0].disabled = true;
		passForm.closed_24g[1].disabled = true;
	}
}

function BandWidthChange(passForm)
{
	//passForm._wl0_widechannel.selectedIndex = 0;
	createChannel0(passForm);
	passForm._wl0_channel.disabled = false;
	/*createChannel0(passForm._wl0_widechannel.selectedIndex, passForm);*/
/*
	if (passForm._wl0_nbw.selectedIndex =='0')	{
		//passForm._wl0_widechannel.disabled = true;
		passForm._wl0_channel.disabled = false;
	}
	else if (passForm._wl0_nbw.selectedIndex =='1')	{
		//passForm._wl0_widechannel.disabled = true;
		passForm._wl0_channel.disabled = false;
	}

	else	{
		//passForm._wl0_widechannel.disabled = false;
		passForm._wl0_channel.disabled = true;
	}
*/
}

function InitValue(passForm)
{

	createChannel0(passForm);
						
	var ctrlsb = '<%nvram_get("wl_nctrlsb");%>';
	var ch = '<%nvram_get("wl_channel");%>';
	
	passForm._wl0_channel.selectedIndex = ch;
	
	UnableCheck(passForm);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function to_submit(F)
{
	var gn_enable = '<% nvram_get("gn_enable"); %>';

	var wps_version2 = "<% nvram_get("wps_version2"); %>";	/* chen */
	var security_mode = "<% nvram_get("wl0_security_mode"); %>";

	if (wps_version2 == "enabled" && security_mode == "disabled")
	{
		if(confirm(wlanwscpopup.unsec)==false)
		{
			I.form.ssid_24g.value = "";
			I.form.ssid_24g.focus();
			return;
		}
	}

        if(F.ssid_24g.value == ""){
                alert(errmsg2.err2);
                F.ssid_24g.focus();
                return;
        }
        
	if((gn_enable == '1') &&  (F.ssid_24g.value == F.guest_ssid.value)){
                alert(gn.err4);
                F.ssid_24g.focus();
                return;
        }

	//F.wl0_widechannel.value = F._wl0_widechannel.value;
	F.channel_24g.value = F._wl0_channel.value;
	F.nbw_24g.value	= F._wl0_nbw.value;   

/*	   
	if (F._wl0_channel.selectedIndex == '0')
	{	
		if (F._wl0_widechannel.selectedIndex == '0')
			F.wl0_nctrlsb.value = 'none';
		else
			F.wl0_nctrlsb.value = 'lower';
	}
	else
		F.wl0_nctrlsb.value = 'upper';
	
	if (F._wl1_channel.selectedIndex == '0')
	{	
		if (F._wl1_widechannel.selectedIndex == '0')
			F.wl1_nctrlsb.value = 'none';
		else
			F.wl1_nctrlsb.value = 'lower';
	}
	else
		F.wl1_nctrlsb.value = 'upper';
*/
	/*channel 1,2,3,4,7 is lower, channel 5,6,8,9,10,11,12,13 is upper*/
	if (F._wl0_channel.selectedIndex == '0')
		F.wl0_nctrlsb.value = 'none';
	else if (F._wl0_channel.selectedIndex > '4' && F._wl0_channel.selectedIndex != '7')
		F.wl0_nctrlsb.value = 'upper';
	else
		F.wl0_nctrlsb.value = 'lower';

	F.submit_button.value = "Wireless_Basic";
	F.gui_action.value = "Apply";
	F.commit.value="1";
	F.submit();
}

</SCRIPT>

</HEAD>
<BODY onload=InitValue(document.wireless)>
<FORM name=wireless onSubmit="return false;" method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button value="Wireless_Basic">
<input type=hidden name=gui_action value="Apply">
<input type=hidden name=submit_type >
<input type=hidden name=change_action >
<input type=hidden name=next_page >
<input type=hidden name=commit >
<input type=hidden name=wl0_nctrlsb >
<input type=hidden name=channel_24g >
<input type=hidden name=nbw_24g >
<input type=hidden name="wait_time" value="3">
<input type=hidden name="guest_ssid" value='<% nvram_get("wl0.1_ssid"); %>'>
<input type=hidden name=wsc_security_mode >

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,wlansetup.wconfig);</script></TR>
	<TR><script>draw_table(SUBFUN,"");</script>
	  <!-- begin wuzh modify 2008-4-11 -->
          <!--TD width=156 height=25>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.wconfig)</script>:&nbsp;</font></TD-->
	      <TD colspan=2 class=FUNNAME1><TABLE><TBODY><TR>
          <TD width=376 height=25>
		<table cellpadding="0" cellspacing="0">
			<td><INPUT type=radio value=1 name="wsc_smode" checked onclick=SelMode(this.form)><script>Capture(share.mtumanual)</script>&nbsp;&nbsp;</td>
			<td><INPUT type=radio value=0 name="wsc_smode" onclick=SelMode(this.form)><script>Capture(wlansetup.wifi)</script></td></tr></table>	
	  </TD>
          <TD width=57 height=25>&nbsp;</TD>
	  </TR></TBODY></TABLE></TD>
	  <!-- end wuzh modify 2008-4-11 -->
	  </TR>
           <TR><script>
			draw_table(ISHR,"");
		</script></TR>
        
        <!-- 2.4G wireless setting -->  
		<TR><script>draw_table(SUBFUN,wlansetup.lgmenu);</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.networkmode)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<font face=verdana size=2><b><select name="net_mode_24g" onChange=ModeChange(this.form) >
		<script>
			var NAME = new Array("mixed", "bg-mixed", "b-only", "g-only", "n-only", "disabled");
			var STRING = new Array(wlansetup.mixed, wlansetup.bgmixed, wlansetup.bonly, wlansetup.gonly, wlansetup.nonly, share.disabled);
			var wl_net_mode = '<% nvram_get("net_mode_24g"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_net_mode == NAME[i]) selected = "selected";
				else 			   selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
		</select></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.ssid)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<INPUT maxLength=32 value='<% nvram_get("ssid_24g"); %>' name="ssid_24g" size="17"  onBlur=valid_ssid(this,"SSID")></font></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.radioband)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<font face=verdana size=2><b><select name="_wl0_nbw" onChange=BandWidthChange(this.form) >
		<script>
			var NAME, STRING;
			if (set40M)
			{
				var NAME = new Array("0", "20", "40");
				var STRING = new Array(wlansetup.wideauto, wlansetup.standard20, wlansetup.wide40);

			}
			else {
				var NAME = new Array("0", "20");
				var STRING = new Array(wlansetup.wideauto, wlansetup.standard20);
			}
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl0_nbw == NAME[i])	selected = "selected";
				else				selected = "";
				//if(wl1_phytype == 'g' && (NAME[i] == '0' || NAME[i] == '40'))		continue;	// This is a 11g card
				if(wl_40m_disable == '1' && (NAME[i] == '0' || NAME[i] == '40'))	continue;	// Doesn't support 40MHz
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}

		</script>
		</select></TD></TR>
<!--
        <TR>
          <TD align=right width=156 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD height=25 width=21>&nbsp;</TD>
          <TD width=156 height=25>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.widechannel)</script>:&nbsp;</font></TD>
          <TD width=277 height=25>&nbsp;&nbsp;<font face=verdana size=2><b><select name="_wl0_widechannel" style="font-size:8pt;font-family:Arial" 
						  	onChange="ChChange(document.forms[0]);">
						  	<option value="0">Auto</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<script>
									var wl0_country_code = '<%nvram_get("wl0_country_code");%>';
									if(wl0_country_code == "EU") {
										var str = '<option value="10">10</option>' + '<option value="11">11</option>';
										document.write(str);
									}
								</script>
		  				</select></TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
-->
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.channel)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<font face=verdana size=2><b><select name="_wl0_channel" ></select></TD></TD></TR>


        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlansetup.ssidbroadcast)</script>:&nbsp;</font></TD>
        <TD class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
		<td><INPUT type=radio value=0 name=closed_24g <% nvram_match("closed_24g","0","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;</td>
		<td><INPUT type=radio value=1 name=closed_24g <% nvram_match("closed_24g","1","checked"); %> onclick=DisableBroadcast(this.form)><b><script>Capture(share.disabled)</script></B></td></tr></table>
                </TD></TR>    
    
                                                    
<% support_invmatch("WL_STA_SUPPORT", "1", "<!--"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt">SSID of associating AP:</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<INPUT maxLength=32 value='<% nvram_get("wl_ap_ssid"); %>' name="wl_ap_ssid" size="20"  onBlur=valid_name(this,"SSID")></TD></TR>                                              
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt">Default IP of associating AP:</font></TD>
        <TD class=FUNFIELD>&nbsp;<input type=hidden name="wl_ap_ip" value=4>
                <INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wl_ap_ip","0"); %>' name="wl_ap_ip_0" onBlur=valid_range(this,0,255,"IP")> .
                <INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wl_ap_ip","1"); %>' name="wl_ap_ip_1" onBlur=valid_range(this,0,255,"IP")> .
                <INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wl_ap_ip","2"); %>' name="wl_ap_ip_2" onBlur=valid_range(this,0,255,"IP")> .
                <INPUT class=num maxLength=3 size=3 value='<% get_single_ip("wl_ap_ip","3"); %>' name="wl_ap_ip_3" onBlur=valid_range(this,0,254,"IP")></TD></TR>                                              
<% support_invmatch("WL_STA_SUPPORT", "1", "-->"); %>
<% support_invmatch("WL_WDS_SUPPORT", "1", "<!--"); %>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt">Mode:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<font face=verdana size=2><b><select name="wl_mode">
	  		<option value="ap" <% nvram_match("wl_mode", "ap", "selected"); %>>Access Point</option>
			<option value="wds" <% nvram_match("wl_mode", "wds", "selected"); %>>Wireless Bridge</option>
		</select></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt">Bridge Restrict:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<font face=verdana size=2><b><select name="wl_lazywds">
	  		<option value="0" <% nvram_match("wl_lazywds", "0", "selected"); %>>Enabled</option>
			<option value="1" <% nvram_match("wl_lazywds", "1", "selected"); %>>Disabled</option>
		</select></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<font face="Arial" style="font-size: 8pt">Remote Bridges:&nbsp;</font></TD>
        <TD class=FUNFIELD>&nbsp;&nbsp;<input type="hidden" name="wl_wds" value="4"><INPUT maxLength=17 size=17 name=wl_wds0  value='<% nvram_list("wl_wds", 0); %>' onblur=valid_macs_17(this)><br>&nbsp;<INPUT maxLength=17 size=17 name=wl_wds1  value='<% nvram_list("wl_wds", 1); %>' onblur=valid_macs_17(this)><br>&nbsp;<INPUT maxLength=17 size=17 name=wl_wds2  value='<% nvram_list("wl_wds", 2); %>' onblur=valid_macs_17(this)><br>&nbsp;<INPUT maxLength=17 size=17 name=wl_wds3  value='<% nvram_list("wl_wds", 3); %>' onblur=valid_macs_17(this)></TD></TR>

<% support_invmatch("WL_WDS_SUPPORT", "1", "-->"); %>

<% support_invmatch("SES_BUTTON_SUPPORT", "1", "<!--"); %>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
                <p align="center">
                <input type='image' name='B2' src="image/SES-button-color.gif" onclick='Set_SES_Short_Push(this.form)' width="50" height="50"><br>
                <font face="Arial" style="font-size: 8pt"><b><script>Capture(bmenu.statu)</script>: </b><script>document.write(SW_SES_BTN.<% get_ses_status(); %>)</script></font></TD></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1><p align="center">

	 
 <script>document.write("<input type=button name=B1 +  value=\"" + SW_SES_BTN.RESET + "\" onClick='Set_SES_Long_Push(this.form)'>");</script> 

	</TD></TR>
<% support_invmatch("SES_BUTTON_SUPPORT", "1", "-->"); %>
                                      
<!--
        <TR>
          <TD align=right width=155 bgColor=#e7e7e7 height=25>&nbsp;</TD>
          <TD width=8 background=image/UI_04.gif height=25>&nbsp;</TD>
          <TD height=25 width=21>&nbsp;</TD>
          <TD width=156 height=25>&nbsp;<font face="Arial" style="font-size: 8pt"><script>Capture(wlanwsc.pin)</script>: <% nvram_get("wsc_device_pin"); %></font></TD>
          <TD width=276 height=25>&nbsp;</select></TD>
          <TD width=15 background=image/UI_05.gif height=25>&nbsp;</TD></TR>
-->
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
				draw_bottom("Wireless_Basic.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("Wireless_Basic.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);			
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
