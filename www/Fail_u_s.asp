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
<script src=/common.js></script>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/share.js></SCRIPT>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/capasg.js></SCRIPT>
<SCRIPT language=JavaScript>
<% langpack(); %>
var submit_button = '<% get_web_page_name(); %>';
var LackMemory = '<% nvram_get("LackMemory"); %>';
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";

function to_submit()
{
	if(submit_button == "")
		history.go(-1);
	else
	{
	    if ( close_session == "1" )
	    {
	        document.location.href =  submit_button;
	    }
	    else
	    {
	        document.location.href =  submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
	    }
	}
}
</SCRIPT>
</head>
<body bgcolor="black">
<form>
<center><table BORDER=0 CELLSPACING=0 CELLPADDING=0 WIDTH=557 >
<tr BGCOLOR="white">
<th HEIGHT=400><font face="Verdana" size=4 color="red">
<script>
if(submit_button == "Restore.asp")
	Capture(errmsg.err85);
else
{
    if(LackMemory == 1)
        Capture(errmsg.memlack);
    else
        Capture(errmsg.err13);
}
</script></font>
<p><p>
<script>
if(LackMemory == 1)
    document.write("<input type=button name=action OnClick=to_submit() value=\"" + wlanwscpopup.button + "\">");
else
    document.write("<input type=button name=action OnClick=to_submit() value=\"" + sbutton.continue1 + "\">");
</script>
</th>
</tr>
</table></center>
</form>
</body>

