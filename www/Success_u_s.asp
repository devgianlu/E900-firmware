<!--
# Copyright (C) 2009, CyberTAN Corporation
# All Rights Reserved.
# 
# THIS SOFTWARE IS OFFERED "AS IS", AND CYBERTAN GRANTS NO WARRANTIES OF ANY
# KIND, EXPRESS OR IMPLIED, BY STATUTE, COMMUNICATION OR OTHERWISE. CYBERTAN
# SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A SPECIFIC PURPOSE OR NONINFRINGEMENT CONCERNING THIS SOFTWARE.
-->

<html>
<head>
<% no_cache(); %>
<% charset(); %>
<!-- SCRIPT language="javascript" type="text/javascript" src="lang_pack/layout.js"></SCRIPT -->

<SCRIPT language=JavaScript>
<% langpack(); %>
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";

var submit_button = '<% get_web_page_name(); %>';
var wait_time = '<% webs_get("wait_time"); %>';
var t1 = new Date().getTime();
function to_submit()
{
	var t2 = new Date().getTime();

	if(submit_button == "")
		history.go(-1);
	else if(submit_button == "WL_WEPTable.asp" || submit_button == "Restore.asp")
		self.close();
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
//			document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
			var found=false;
			var ii;
			for(ii=0; ii<submit_button.length; ii++){
			    if(submit_button.substr(ii,1)=="/"){
					if ( close_session == "1" )
					{
						document.location.href = submit_button.substr(ii+1);
					}
					else
					{
						document.location.href = submit_button.substr(ii+1) + ";session_id=" + "<% nvram_get("session_key"); %>";
					}

					found = true;
					break;
			    }
			}
			if(!found)
			{
				if ( close_session == "1" )
				{
					document.location.href = submit_button;
				}
				else
				{
					document.location.href = submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
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
	var found=false;
	var ii;
	for(ii=0; ii<submit_button.length; ii++){
	    if(submit_button.substr(ii,1)=="/"){
			if ( close_session == "1" )
			{
				document.location.href = submit_button.substr(ii+1);
			}
			else
			{
				document.location.href = submit_button.substr(ii+1) + ";session_id=" + "<% nvram_get("session_key"); %>";
			}

			found = true;
			break;
	    }
	}
	if(!found)
	{
		if ( close_session == "1" )
		{
			document.location.href = submit_button;
		}
		else
		{
			document.location.href = submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
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
if(submit_button == "Restore.asp")
	document.write(other.restore + "<br>" + other.needrb);
else
	Capture(other.needrb);
</script></font>
<p><p>
<script>
        if(wait_time != "0" && wait_time != "" && auto_return == "1") {
                document.write("<p><font face=Verdana size=2 color=black>" + succ.autoreturn);
        }
        else {
		document.write("<input type=button name=action" + " value=" + sbutton.continue1 + " onClick=to_submit()>");
	}
</script>
</th>
</tr>
</table></center>
</form>
</body>

