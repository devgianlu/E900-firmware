
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
      <TABLE height=80 cellSpacing=0 cellPadding=0 border=0>
        <TBODY>  
	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">IPV6</SPAN></FONT></B></TD><TD>&nbsp;</TD><TD colSpan=3>
	    <INPUT type=radio value=1 name=ipv6_status <% nvram_invmatch("ipv6_mode","0","checked"); %>>Enable&nbsp;
	    <INPUT type=radio value=0 name=ipv6_status <% nvram_match("ipv6_mode","0","checked"); %>>Disable&nbsp;</TD>
	</TR>
	<!--
	<TR><TD colSpan=5 width=412><HR></TD></TR>
	-->
<% support_invmatch("EGHN_SUPPORT", "1", "<!--"); %>
	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">EGHN Status</SPAN></FONT></B></TD><TD>&nbsp;</TD><TD colSpan=3>
	    <INPUT type=radio value=1 name=eghn_status <% nvram_match("eghn_enabled","1","checked"); %>>Enable&nbsp;
	    <INPUT type=radio value=0 name=eghn_status <% nvram_match("eghn_enabled","0","checked"); %>>Disable&nbsp;</TD>
	</TR>
<% support_invmatch("EGHN_SUPPORT", "1", "-->"); %>
<!--
	<TR>
	  <TD height=25 width=160 align="left"><B><FONT color=#0000ff><SPAN STYLE="FONT-SIZE:10pt">Parental Control Status </SPAN></FONT></B></TD><TD>&nbsp;</TD><TD colSpan=3>
	    <INPUT type=radio value=1 name=tmsss_status >Enable&nbsp;
	    <INPUT type=radio value=0 name=tmsss_status >Disable&nbsp;</TD>
	</TR>
-->
          </TBODY></TABLE></TD></TR></TBODY></TABLE>

<P><INPUT type=button value=" Save " onClick=to_submit(this.form)>&nbsp; <INPUT type=reset value=" Cancel " name=cancel></P></CENTER>
</FORM>
</BODY>
</HTML>
