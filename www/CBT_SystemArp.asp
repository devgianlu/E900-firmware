
<!--
*********************************************************
*   Copyright 2003, CyberTAN  Inc.  All Rights Reserved *
*********************************************************

This is UNPUBLISHED PROPRIETARY SOURCE CODE of CyberTAN Inc.
the contents of this file may not be disclosed to third parties,
copied or duplicated in any form without the prior written
permission of CyberTAN Inc.

This software should be used as a reference only, and it not
intended for production use!


THIS SOFTWARE IS OFFERED "AS IS", AND CYBERTAN GRANTS NO WARRANTIES OF ANY
KIND, EXPRESS OR IMPLIED, BY STATUTE, COMMUNICATION OR OTHERWISE.  CYBERTAN
SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A SPECIFIC PURPOSE OR NONINFRINGEMENT CONCERNING THIS SOFTWARE
-->

<html><title>System</title>
<script src="common.js"></script>
<SCRIPT language=JavaScript>
function init()
{
/*
	var tmp ="<% nvram_get("tmsss_enabled"); %>";
//	var tmp ="<% nvram_get("TMSSS_enable"); %>";

//	var ch1 = tmp.charAt(0);
//	var ch2 = tmp.charAt(2);

//	if(ch1 == '1' && ch2 == '1')
	if(tmp == '1')
	{
		document.sysinfo2.tmsss_status[0].checked = true;
		document.sysinfo2.tmsss_status[1].checked = false;		
	}
	else
	{
		document.sysinfo2.tmsss_status[0].checked = false;
		document.sysinfo2.tmsss_status[1].checked = true;		
	}
*/
}

function to_submit(F)
{
        F.submit_button.value = "System";
        F.change_action.value = "gozila_cgi";
	if(F.ipv6_status[0].checked == true) F.ipv6_button.value = "1";
	else F.ipv6_button.value = "0";
<% support_invmatch("EGHN_SUPPORT", "1", "/*"); %>
	if(F.eghn_status[0].checked == true) F.eghn_button.value = "1";
	else F.eghn_button.value = "0";
<% support_invmatch("EGHN_SUPPORT", "1", "*/"); %>
/*
	if(F.tmsss_status[0].checked == true) F.tmsss_button.value = "1";
	else F.tmsss_button.value = "0";
*/
	F.submit_type.value = "system_set";
        F.submit();
}

function special_char_trans(I)
{
	var bbb = I; 
	var ccc = bbb.replace(/\s/g,"&nbsp;");
	return ccc; 
}

</SCRIPT>
<body bgcolor=white onload=init()>
<form name=sysinfo2 method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=ipv6_button>
<input type=hidden name=eghn_button>
<input type=hidden name=tmsss_button>
<input type=hidden name=action>
<CENTER>
<TABLE height=100 cellSpacing=1 width=673 border=0>
  <TBODY>
  <TR>
    <TD width=343 colSpan=2 height=30><B><FONT face=Arial color=#0000ff><SPAN STYLE="FONT-SIZE:14pt">ARP Table Entry List</SPAN></FONT></B></TD>
  <TR align=middle bgColor=#b3b3b3>
    <TH height=30><FONT face=Arial><SPAN STYLE="FONT-SIZE: 10pt">IP Address</SPAN></FONT></TH>
    <TH height=30><FONT face=Arial><SPAN STYLE="FONT-SIZE: 10pt">Hardware Address</SPAN></FONT></TH>
    <TH height=30><FONT face=Arial><SPAN STYLE="FONT-SIZE: 10pt">Interface</SPAN></FONT></TH>
<script language=javascript>
var table = new Array(
<% dump_arp_table(""); %>
);
var i = 0;
for(;;){
	if(!table[i]){
		if(i == 0){
			document.write("<tr bgcolor=cccccc align=middle>");
			document.write("<td><SPAN STYLE=\"FONT-SIZE: 10pt\">None</td>");
			document.write("<td><SPAN STYLE=\"FONT-SIZE: 10pt\">None</td>");
			document.write("<td><SPAN STYLE=\"FONT-SIZE: 10pt\">None</td></tr>");
		}
		break;
	}
	if(table[i+2] == "br0" || table[i+2] == "eth2")	table[i+2] = "LAN";
	else table[i+2] = "WAN";

	document.write("<tr bgcolor=#cccccc align=middle>");
	document.write("<td><SPAN STYLE=\"FONT-SIZE: 10pt\">"+table[i]+"</td>");
	document.write("<td><SPAN STYLE=\"FONT-SIZE: 10pt\">"+table[i+1]+"</td>");
	document.write("<td><SPAN STYLE=\"FONT-SIZE: 10pt\">"+table[i+2]+"</td></tr>");
	i = i + 3;
}
</script>
	</TBODY></TABLE> 
<p></p>
<P> <INPUT type=button value=" Refresh " onClick=window.location.replace("CBT_SystemArp.asp")></P></CENTER>
</FORM>
</BODY>
</HTML>
