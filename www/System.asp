
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
<TABLE cellSpacing=0 cellPadding=10 width=436 border=1>
  <TBODY>
	<BR></BR>
  <TR>
    <TD width=412>
      <TABLE height=320 cellSpacing=0 cellPadding=0 border=0>
        <TBODY>
        <TR>
          <TD colSpan=5 height=25 align="center">
            <P align=left><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">Memory Status</SPAN></FONT></B></P>
          </TD>
        </TR>
        <% show_sysinfo("mem_usage"); %>

        <TR><TD colSpan=5 width=412><HR></TD></TR>
        <TR>
          <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">System Uptime</SPAN></FONT></B></TD><TD>&nbsp;</td>
          </TD>
           <TD colSpan=3> <% show_sys_uptime(); %></TD>
        </TR>
        <TR><TD colSpan=5 width=412><HR></TD></TR>

	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">Country</SPAN></FONT></B></TD><TD>&nbsp;</td>
	   <TD colSpan=3> <% nvram_get("sys_country"); %></TD>
	</TR>
	<TR><TD colSpan=5 width=412><HR></TD></TR>
	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">2.4GHz Country Code</SPAN></FONT></B></TD><TD>&nbsp;</td>
	   <TD colSpan=3> <% nvram_get("wl0_country_code"); %></TD>
	</TR>
        <TR><TD colSpan=5 width=412><HR></TD></TR>
        <TR>
          <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">2.4GHz Channel</SPAN></FONT></B></TD><TD>&nbsp;</td>
           <TD colSpan=3> <% wl_cur_channel(0); %></TD>
        </TR>
	<TR><TD colSpan=5 width=412><HR></TD></TR>
	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">5GHz Country Code</SPAN></FONT></B></TD><TD>&nbsp;</td>
	   <TD colSpan=3> <% nvram_get("wl1_country_code"); %></TD>
	</TR>
        <TR><TD colSpan=5 width=412><HR></TD></TR>
        <TR>
          <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">5GHz Channel</SPAN></FONT></B></TD><TD>&nbsp;</td>
           <TD colSpan=3> <% wl_cur_channel(1); %></TD>
        </TR>
	<TR><TD colSpan=5 width=412><HR></TD></TR>
	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">QoS upstream Bandwidth</SPAN></FONT></B></TD><TD>&nbsp;</td>
	   <TD colSpan=3>
		<script>
		var curr_rate = 0;
		if("<% nvram_get("rate_mode");%>" == "1")
		{
			curr_rate = "<%nvram_get("curr_up_bd");%>";
		}
		else
		{
			if("<% nvram_get("upbunit");%>" == "1")
				curr_rate = "<%nvram_get("manual_rate");%>" * 1024;
			else 
				curr_rate = "<%nvram_get("manual_rate");%>";
		}
		document.write(curr_rate);	
		</script>
		&nbsp;Kbps</TD>
	</TR>
          </TBODY></TABLE></TD></TR></TBODY></TABLE>
<p></p>
<table width="896" border="0">
  <tr>
    <td width="128"><div align="center"><a href="CBT_SystemArp.asp">Arp Table</a> </div></td>
    <td width="128"><div align="center"><a href="CBT_SystemCpu.asp">Cpu Usage</a></div></td>
    <td width="128"><div align="center"><a href="CBT_SystemUpnp.asp">Upnp Port</a></div></td>
    <td width="128"><div align="center"><a href="CBT_SystemIPConntrack.asp">ip_conntrack</a></div></td>
    <td width="128"><div align="center"><a href="CBT_SystemIptables.asp">Iptables</a></div></td>
    <td width="128"><div align="center"><a href="CBT_SystemIp6tables.asp">IPv6</a></div></td>
    <td width="128"><div align="center"><a href="CBT_SystemUSB.asp">Usb</a></div></td>
    <td width="128"><div align="center"><a href="CBT_SystemOthers.asp">Others</a></div></td>
  </tr>
</table>
<p></p>
<P> <INPUT type=button value=" Refresh " onClick=window.location.replace("System.asp")></P></CENTER>
</FORM>
</BODY>
</HTML>
