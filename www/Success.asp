<% web_include_file("copyright.asp"); %>
<html>
<head>
<% no_cache(); %>
<% charset(); %>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>

<SCRIPT language=JavaScript>
<% langpack(); %>
var submit_button = '<% get_web_page_name(); %>';
var wait_time = '<% webs_get("wait_time"); %>';
var continue_button = 1;
var t1 = new Date().getTime();
var close_session = "<% get_session_status(); %>";
var session_key = "<% nvram_get("session_key"); %>";

function to_submit()
{
	var t2 = new Date().getTime();

	if(submit_button == "")
		history.go(-1);
	else if(submit_button == "WL_WEPTable.asp")
		self.close();
//IR-B0010060 start: Router should redirect to the webpage blocked by HND after performing "admin unlock"
    else if(submit_button == "tmPCBlock.asp") {
		if ( close_session == "1" )
		{
			document.location.href = "<% nvram_get("TM_block_url"); %>";
		}
		else
		{
			document.location.href = "<% nvram_get("TM_block_url"); %>" + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
    }
//IR-B0010060 end
	else {
		if(wait_time != "0" && wait_time != "") {
			//delay(wait_time*1000 - (t2-t1));
			DelayTime = wait_time * 1000 - (t2-t1);
			choose_disable(document.success.action);
			if(DelayTime < 0)
				DelayTime = 0;
			setTimeout('returnpage()',DelayTime);
		}
		else {
		    var bridge_mode = "<% nvram_get("switch_mode");%>";
		    if(bridge_mode == "1")			
			{
				if ( close_session == "1" )
				{
					document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
				}
				else
				{
					document.location.href =  "<% get_http_prefix(""); %>"+submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
				}
			}
		    else
		    {
			var found=false;
			var ii;
			var host=top.window.location.host;
			var re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
			var return_url = submit_button;
	
			if (re.test(host))	// check if IPv4 address
			{
				if ( close_session == "1" )
				{
			        document.location.href = "<% get_http_prefix(""); %>"+return_url;
			    }
			    else
			    {
					document.location.href = "<% get_http_prefix(""); %>"+return_url + ";session_id=" + "<% nvram_get("session_key"); %>";
				}
			}
			else
			{
				for(ii=0; ii<submit_button.length; ii++){
					if(submit_button.substr(ii,1)=="/"){
						return_url = submit_button.substr(ii+1);
						break;
					}
				}

				if ( close_session == "1" )
				{
					    document.location.href = return_url;
				}
				else
				{
					    document.location.href = return_url + ";session_id=" + "<% nvram_get("session_key"); %>";
				}
			}
		    }
		}
	}
}

function auto_return()
{
	var t2 = new Date().getTime();
	//delay(wait_time*1000 - (t2-t1));
	DelayTime = wait_time * 1000 - (t2-t1);
	//choose_disable(document.success.action);
	if(DelayTime < 0)
		DelayTime = 0;
	setTimeout('returnpage()',DelayTime);
}

function returnpage()
{
//	document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
    var bridge_mode = "<% nvram_get("switch_mode");%>";
    if(bridge_mode == "1")			
	{
		if ( close_session == "1" )
		{
			    document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
		}
		else
		{
			document.location.href =  "<% get_http_prefix(""); %>"+submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
	}
    else
    {
	var found=false;
	var ii;
	var host=top.window.location.host;
	var re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
	var return_url = submit_button;
	
	if (re.test(host))	// check if IPv4 address
	{
		if ( close_session == "1" )
		{
			document.location.href = "<% get_http_prefix(""); %>"+return_url;
		}
		else
		{
			document.location.href = "<% get_http_prefix(""); %>"+return_url + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
	}
	else
	{
		for(ii=0; ii<submit_button.length; ii++){
			if(submit_button.substr(ii,1)=="/"){
				return_url = submit_button.substr(ii+1);
				break;
			}
		}

		if ( close_session == "1" )
		{
			    document.location.href = return_url;
		}
		else
		{
			    document.location.href = return_url + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
	}
    }
}

function init()
{
	if(wait_time != "0" && wait_time != "" && auto_return == "1") {
		DelayTime = wait_time * 1000 ;
		setTimeout('returnpage()', DelayTime);		
	}
}
</SCRIPT>
</head>
<body bgcolor="black" onload=init()>
<form name=success>
<center><table BORDER=0 CELLSPACING=0 CELLPADDING=0 WIDTH=657 >
<tr BGCOLOR="white">
<th HEIGHT=400><font face="Verdana" size=4 color="black">
<script> 
var wsc_enabled = "<% nvram_get("wsc_mode"); %>";
var wsc_phybtn = "<% nvram_get("wsc_phy_button"); %>"; 
var wsc_reconfig = "<% nvram_get("wsc_reconfig"); %>"; 
var wsc_role_changed = "<% nvram_get("wsc_role_changed"); %>"; 
if(submit_button == "Wireless_WSC.asp" && wsc_enabled == "1" && wsc_role_changed != "1"){
	if(wsc_phybtn == "1") Capture(other.setwscphy); 
	else if (wsc_reconfig == "1") Capture(other.setwscrun);
	else Capture(other.setsuc);
}
else if("<% nvram_get(fadef_flag);%>" == "1")
Capture(other.fadef);
else Capture(other.setsuc);</script>
<br>
<script>
	if("<%nvram_get("reboot_flag");%>" == "1")
		Capture(other.needrb);
</script>	
</font>
<script>
	if(wait_time != "0" && wait_time != "" && auto_return == "1") {
		document.write("<p><font face=Verdana size=2 color=black>" + succ.autoreturn + "</p>");
	}
	else {
		document.write("<p><p><input type=button name=action" + " value=" + sbutton.continue1 + " onClick=to_submit()></p></p>");
	}
</script>
</th>
</tr>
</table></center>
</form>
</body>

