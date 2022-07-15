<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Wireless Security</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=javascript>
re1 = /<br>/gi;
re2 = /&nbsp;/gi
str = wlantopmenu.security.replace(re1," ");
str1 = str.replace(re2, "");
document.title = str1;
var security_mode2;
var b_stopwsc = false;

function SelMode(num,F){
	var net_mode = "<% nvram_get("wl0_net_mode"); %>";
	var wps_version2 = "<% nvram_get("wps_version2"); %>";

	if(wps_version2 == "enabled" && F.wl0_security_mode.value == "wpa_personal")
	{
		if(confirm(wlanwscpopup.disable)==false)
		{
			F.wl0_security_mode.value = "<% nvram_get("wl0_security_mode"); %>";
			F.submit_button.value = "WL_WPATable";
			F.change_action.value = "gozila_cgi";
			F.submit();

			return;

		}
	}
	if(wps_version2 == "enabled" && F.wl0_security_mode.value == "wep")
	{
		if(confirm(wlanwscpopup.disable)==false)
		{
			F.wl0_security_mode.value = "<% nvram_get("wl0_security_mode"); %>";
			F.submit_button.value = "WL_WPATable";
			F.change_action.value = "gozila_cgi";
			F.submit();

			return;

		}
	}
	if(wps_version2 == "enabled" && F.wl0_security_mode.value == "disabled")
	{
		if(confirm(wlanwscpopup.unsec)==false)
		{
			F.wl0_security_mode.value = "<% nvram_get("wl0_security_mode"); %>";
			F.submit_button.value = "WL_WPATable";
			F.change_action.value = "gozila_cgi";
			F.submit();

			return;

		}
	}

	if (net_mode == "mixed")
	{
		if (F.wl0_security_mode.value == "wep" || F.wl0_security_mode.value == "wpa_personal" || F.wl0_security_mode.value == "wpa_enterprise")
		{
			if (confirm(errmsg.mixedmodesecurity) == false)
			{
				F.wl0_security_mode.value = "<% nvram_get("wl0_security_mode"); %>";
		        	F.submit_button.value = "WL_WPATable";
			        F.change_action.value = "gozila_cgi";
			        F.submit();

				return;
			}
		}
	}	

	if (net_mode == "n-only")
	{
		if (num == '0' || num == '1')
			F.wl0_crypto.value = "aes"
/*
		else if (F.wl0_security_mode.selectedIndex == '2')
			F.wl0_crypto.value = "aes"
*/
		else 
			F.wl0_crypto.value =  '<% nvram_get("wl0_crypto"); %>';
	}else{
		if (num == '0' || num == '3')
			F.wl0_crypto.value = "tkip+aes";
		else if (num == '1' || num == '4')
			F.wl0_crypto.value = "aes";
		else if (num == '2' || num == '5')
			F.wl0_crypto.value = "tkip";
/*
		else if (F.wl0_security_mode.selectedIndex == '3')
			F.wl0_crypto.value = "aes";
		else if (F.wl0_security_mode.selectedIndex == '4')
			F.wl0_crypto.value = "tkip";
*/
		else 
			F.wl0_crypto.value =  '<% nvram_get("wl0_crypto"); %>';
	}

	F.submit_button.value = "WL_WPATable";
       	F.change_action.value = "gozila_cgi";
       	/*F.wl0_security_mode.value=F.wl0_security_mode.options[num].value;*/
       	F.submit();
      	
}
function to_submit(F)
{
	/*Jemmy modify issue: not check 5G settings 2008.5.20 */
	if(valid_value(F))
	{
		/*Jemmy fix alerting two same warn message when page switch ftom Manual to WSC 2010.6.21*/
		var smode = "<% nvram_get("wl0_security_mode"); %>";
		var security_mode = "<% nvram_get("wsc_security_auto"); %>";

		if ( (security_mode == "1") && 
			( smode == "wpa_enterprise" || smode == "wpa2_enterprise" || smode == "radius" || smode == "wpa_wpa2_enterprise"))
		{
			alert(errmsg.err70);
			F.wsc_security_auto.value = "0";
		}

/*
		if(b_stopwsc)
		{
		    F.wl_wsc_mode.value = "disabled";
		    F.wsc_security_auto.value = "0";
		}
		else
		{
		    F.wl_wsc_mode.value = "<% nvram_get("wl_wsc_mode"); %>";
		    F.wsc_security_auto.value = "<% nvram_get("wsc_security_auto"); %>";
		}
*/
		F.submit_button.value = "WL_WPATable";
		F.gui_action.value = "Apply";
		//F.security_mode_last.value = F.security_mode.value;
		//F.wl_wep_last.value = F.wl_wep.value;
        	F.submit();
	}
}

function valid_value(F)
{

	if(F.wl0_security_mode.value == "disabled")	return true;
	
	if(!valid_wpa_psk_0(F) || !valid_wep_0(F) || !valid_radius_0(F))	return false;
	else	return true;
}

function valid_radius_0(F)
{
	if(F.wl0_security_mode.value == "radius" || F.wl0_security_mode.value == "wpa_enterprise" || F.wl0_security_mode.value == "wpa2_enterprise" || F.wl0_security_mode.value == "wpa_wpa2_enterprise"){
		if(F.wl0_radius_key.value == ""){
                        alert(errmsg2.err3);
			F.wl0_radius_key.focus();
			return false;
		}
		if(!valid_ip(F,"F.wl0_radius_ipaddr","Radius%20Server%20Address",ZERO_NO|MASK_NO))
			return false;
		F.wsc_nwkey0.value = F.wl0_radius_key.value;
	}
	return true;
}

function isxdigit1(I,M)
{
	for(i=0 ; i<I.value.length; i++){
		ch = I.value.charAt(i).toLowerCase();
		if(ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'f'){}
		else{
                        alert(M + errmsg2.err4);
			I.value = I.defaultValue;	
			return false;
		}
	}
	return true;
}
function valid_wpa_psk_0(F)
{
	if(F.wl0_security_mode.value == "wpa_personal" || F.wl0_security_mode.value == "wpa2_personal" || F.wl0_security_mode.value == "wpa_wpa2_mixed"){
		if(F.wl0_wpa_psk.value.length == 64){
			if(!isxdigit1(F.wl0_wpa_psk, F.wl0_wpa_psk.value)) return false;
		}	
		else if(F.wl0_wpa_psk.value.length >=8 && F.wl0_wpa_psk.value.length <= 63 ){
			if(!isascii(F.wl0_wpa_psk,F.wl0_wpa_psk.value)) return false;
		}
		else{
                        alert(errmsg2.err5);
			return false;
		}
		F.wsc_nwkey0.value = F.wl0_wpa_psk.value;
	}
/*
	if(F.wl0_security_mode.value == "wpa_enterprise" || F.wl0_security_mode.value == "wpa2_enterprise")
	{
		F.wl0_crypto.value = F.wl_crypto_0.value;
	}
*/
	return true;	
}

function valid_wep_0(F)
{
	if(document.forms[0].wl0_security_mode.value == "wpa_personal" || document.forms[0].wl0_security_mode.value == "wpa_enterprise" || document.forms[0].wl0_security_mode.value == "wpa2_personal" || document.forms[0].wl0_security_mode.value == "wpa2_enterprise" || document.forms[0].wl0_security_mode.value == "wpa_wpa2_mixed" || document.forms[0].wl0_security_mode.value == "wpa_wpa2_enterprise")	return true;

	if(document.forms[0].wl0_security_mode.value == "wep")
		selected_key = F.wl0_key1;
	else // radius mode
		selected_key = F.wl0_key2;

	if(selected_key.value == ""){
		alert(__T(errmsg2.err6));
		return false;
	}

	if (ValidateKey(selected_key, F.wl0_wep_bit.options[F.wl0_wep_bit.selectedIndex].value, 1) == false)
		return false;  


    F.wsc_nwkey0.value = selected_key.value;
    return true;
}

function ValidateKey(key, bit, index)
{
	if(bit == 64){
		switch(key.value.length){
			case 0: break;
			case 10: if(!isxdigit(key,key.value)) return false; break;
                        default: alert(errmsg2.err7); return false;

		}
	}
	else{
		switch(key.value.length){
			case 0: break;
			case 26: if(!isxdigit(key,key.value)) return false; break;
                        default: alert(errmsg2.err7); return false;

		}
	}
	return true;
}

function keyMode_0(num)
{
	var keylength;
/*
	var key1='';
	var key2='';
	var key3='';
	var key4='';
*/
	var selected_key;

	if(num == 0 || num == 64)
		keylength = 40 /4;
	else
		keylength = 104 /4;

	if(document.forms[0].wl0_security_mode.value == "wep")
		selected_key = document.forms[0].wl0_key1;
	else // radius mode
		selected_key = document.forms[0].wl0_key2;

	selected_key.maxLength = keylength;
	selected_key.value = selected_key.value.substring(0,keylength);
	/*
	document.forms[0].wl0_key1.maxLength = keylength;
	document.forms[0].wl0_key2.maxLength = keylength;
	document.forms[0].wl0_key3.maxLength = keylength;
	document.forms[0].wl0_key4.maxLength = keylength;

	for (var i=0; i<keylength; i++)
	{
    		key1 +=  document.forms[0].wl0_key1.value.charAt(i);
	    	key2 +=  document.forms[0].wl0_key2.value.charAt(i);
    		key3 +=  document.forms[0].wl0_key3.value.charAt(i);
    		key4 +=  document.forms[0].wl0_key4.value.charAt(i);
	}
	document.forms[0].wl0_key1.value = key1;
	document.forms[0].wl0_key2.value = key2;
	document.forms[0].wl0_key3.value = key3;
	document.forms[0].wl0_key4.value = key4;
	*/
}

function generateKey0(F)
{		
	if (F.wl0_passphrase.value == "")
	{
                alert(errmsg2.err8);
		F.wl0_passphrase.focus();
		return false;
	}
	F.submit_button.value = "WL_WPATable";
        F.change_action.value = "gozila_cgi";
	if(F.wl0_wep_bit.value == 64)
		F.submit_type.value = "key_64_0";
	else
		F.submit_type.value = "key_128_0";
        F.submit();
}

function init(){
/*
        var security_mode = "<% nvram_selget("wl0_security_mode"); %>";
        var wsc_mode = "<% nvram_get("wsc_security_auto"); %>";
        if ( (wsc_mode == "1") && ( security_mode == "wpa_enterprise" || security_mode == "wpa2_enterprise"))
        {
		b_stopwsc = true;
                if(!confirm(errmsg.err71))
                {
                        var F = document.forms[0];
                        F.submit_button.value = "WL_WPATable";
                        F.change_action.value = "gozila_cgi";
                        F.security_mode2.value= "<% nvram_get("security_mode2"); %>";
                        F.submit();
                }
        }
*/


	//init_security_mode0 = document.forms[0].security_mode0.selectedIndex;
	
	if(document.forms[0].wl0_security_mode.value == "wep" || document.forms[0].wl0_security_mode.value == "radius")
        	//keyMode(<% nvram_gozila_get("wl_wep_bit"); %>);
        	keyMode_0(document.wpa.wl0_wep_bit.value);
        	

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM name=wpa method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name=security_mode_last>
<input type=hidden name=wl_wep_last>
<input type=hidden name="wait_time" value="3">
<input type=hidden name=wsc_nwkey0>
<input type=hidden name=wl0_crypto value='<% nvram_gozila_get("wl0_crypto"); %>'>
<input type=hidden name=wsc_security_auto value='<% nvram_get("wsc_security_auto"); %>' >

<!--
<input type=hidden name=wl_wsc_mode>
<input type=hidden name=wsc_security_auto >
-->
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
    <!-- 2.4G wireless setting over -->      

    	<!--TR><script>draw_table(ISBLANK,"");</script></TR-->
		
		<TR><script>draw_table(MAINFUN,wlansec.lgmenu);</script>
<% nvram_invmatch("wl0_net_mode", "n-only", "<!--"); %>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.secmode)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<SELECT onChange=SelMode(this.form.wl0_security_mode.selectedIndex,this.form) name=wl0_security_mode > 				<script>
			//var NAME = new Array("wpa2_personal", "wpa2_personal", "wpa2_enterprise", "disabled");
			//var STRING = new Array(hwlsec2.wpa2mixed, hwlsec2.wpa2personal, hwlsec2.wpa2enterprise, share.disabled);	
			//var NAME = new Array("wpa2_personal", "disabled");
			//var STRING = new Array(hwlsec2.wpa2personal, share.disabled);
			var NAME = new Array("wpa2_personal", "wpa2_enterprise", "disabled");
			var STRING = new Array(hwlsec2.wpa2personal, hwlsec2.wpa2enterprise, share.disabled);	

			var security_mode = '<% nvram_selget("wl0_security_mode"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(security_mode == NAME[i]) 
				{
					selected = "selected";
				}
				else
					selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}

		</script>
                </SELECT></TD></TR>
<% nvram_invmatch("wl0_net_mode", "n-only", "-->"); %>
   
<% nvram_match("wl0_net_mode", "n-only", "<!--"); %>
		<TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>&nbsp;<script>Capture(wlansec.secmode)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<SELECT onChange=SelMode(this.form.wl0_security_mode.selectedIndex,this.form) name=wl0_security_mode > 				<script>	
			//var NAME = new Array("wpa2_personal", "wpa2_personal", "wpa_personal", "wpa2_enterprise", "wpa_enterprise", "wep","radius","disabled");
			//var STRING = new Array(hwlsec2.wpa2mixed, hwlsec2.wpa2personal, hwlsec2.wpapersonal, hwlsec2.wpa2enterprise, hwlsec2.wpaenterprise, wlansec.wep, wlansec.radius, share.disabled);
			//var NAME = new Array("wpa2_personal", "wpa2_personal", "wpa_personal", "wep","radius","disabled");
			//var STRING = new Array(hwlsec2.wpa2mixed, hwlsec2.wpa2personal, hwlsec2.wpapersonal, wlansec.wep, wlansec.radius, share.disabled);
			var NAME = new Array("wpa_wpa2_mixed", "wpa2_personal", "wpa_personal", "wpa_wpa2_enterprise", "wpa2_enterprise", "wpa_enterprise", "wep","radius","disabled");
			var STRING = new Array(hwlsec2.wpa2mixed, hwlsec2.wpa2personal, hwlsec2.wpapersonal, hwlsec2.enterprisemixed, hwlsec2.wpa2enterprise, hwlsec2.wpaenterprise, wlansec.wep, wlansec.radius, share.disabled);	

			var security_mode = '<% nvram_selget("wl0_security_mode"); %>';
			var enc = '<% nvram_gozila_get("wl0_crypto"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(security_mode == NAME[i]) 
				{
					if(security_mode == "wpa2_personal" || security_mode == "wpa_wpa2_mixed")
					{
						if(((enc == "tkip+aes") && (i == 0))|| ((enc == "aes") && (i == 1)))
						{
							selected = "selected";
						}
						else
						{
							selected = "";
						}
					}else if(security_mode == "wpa2_enterprise" || security_mode == "wpa_wpa2_enterprise")
					{
						if(((enc == "tkip+aes") && (i == 3))|| ((enc == "aes") && (i == 4)))
						{
							selected = "selected";
						}
						else
						{
							selected = "";
						}
					}
					else
					{
						selected = "selected";
					}
				}
				else
					selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}

		</script>
                </SELECT></TD></TR>
<% nvram_match("wl0_net_mode", "n-only", "-->"); %>

     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
                    
        <% show_wpa_setting2(0); %>   
 
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
				draw_bottom("WL_WPATable.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("WL_WPATable.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
