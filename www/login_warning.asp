
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

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE></TITLE>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="style_rtl.css">
<% ui_position("invmatch", "-->"); %>

<SCRIPT src="common.js"></SCRIPT>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/help.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capapp.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsetup.js"></SCRIPT>

<STYLE type=text/css>
a{text-decoration:none}

#field1{
BORDER-LEFT-STYLE: solid; 
BORDER-LEFT-WIDTH: 1; 
BORDER-RIGHT-STYLE: solid; 
BORDER-RIGHT-WIDTH: 1; 
BORDER-TOP-STYLE: solid; 
BORDER-TOP-WIDTH: 1; 
BORDER-BOTTOM-STYLE: none; 
BORDER-BOTTOM-WIDTH: medium;
BORDER-COLOR: #2971b9;
HEIGHT: 25px
}

.field2{
BORDER-BOTTOM-STYLE: none;
BORDER-BOTTOM-WIDTH: medium;
BACKGROUND-COLOR: #E7E7E7;
HEIGHT: 25px
}

</STYLE>
<link rel="stylesheet" href="dhtmlwindow.css" type="text/css" />
 
<script type="text/javascript" src="dhtmlwindow.js">

/***********************************************
* DHTML Window Widget- ?Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

</script>

<SCRIPT language=javascript>
document.title = pctrl.warning;
function to_submit(F)
{
	F.submit_button.value = "login_warning";
	F.change_action.value = "gozila_cgi";
	F.submit_type.value = "login_check";
	if(F._login_checked.checked == false)
		parent.Warningwin.hide();
	else
	{
		F.login_checked.value = 1;
		//setTimeout("window.close()", 10);
		F.next_page.value = "dhtml_close.asp";
		F.submit();
		//setTimeout("window.close()", 300);
	}
	
}

function init()
{
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>
</HEAD>
<BODY bgColor=#808080 onload=init()>
<FORM name=login_warning action=apply.cgi method=<% get_http_method(); %>>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=login_checked>
<input type=hidden name=next_page>
<input type=hidden name="wait_time" value="3">
<CENTER>
<TABLE borderColor=#5b5b5b cellSpacing=0 cellPadding=0 width=462 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH width=901 colSpan=2 bordercolor="#FFFFFF">
      <TABLE cellSpacing=3 width=610 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=834>
            <TABLE cellSpacing=0 width=448 bgColor=#ffffff 
              border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0" height="358"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>
                <div align="left">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="610">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="145"></td>
                      <td height="16" bgcolor="#2971b9" width="457" colspan="4"></td>
                    </tr>
                    <tr>
                      <td height="1" colspan="5" bgcolor="#FFFFFF" width="602">
                      </td>
                    </tr>
                    <tr>
			<td height="57" bgcolor="#2971b9" width="602" colspan="5">
	<img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="145" bgcolor="#2971b9"></td>
                      <td height="16" width="457" bgcolor="#2971b9" colspan="4"></td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="145">               </td>
                      <td height="15" width="457" bgcolor="#E7E7E7" colspan="4">			</td>         
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="145">          </td>
                      <td height="7" width="457" colspan="4">			</td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="145">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF">
                <script>Capture(pctrl.warning)</script>&nbsp;&nbsp;&nbsp; </font></b></td>
                	  <td height="25",width="43" bgcolor="#FFFFFF"></td>
                      <td height="25" width="400" bgcolor="#FFFFFF" colspan="2"></td>
                      	<td height="25" width="14" bgcolor="#FFFFFF"></td>
                    </tr>
                      
                    <tr>
                      <td   width="145" height="20" bgcolor="#E7E7E7"></td>
                      <td   width="43" height="20" >
			<table>
			  <tr>
				<td width = "5" height="20"><td>
				<td width = "38" height="20"><img border="0" src="image/alert_minor.gif"></td>
			  </tr>
			</table>
			</td>
                      <td   width="400" height="20"><font face="Arial" style="font-size: 8pt"><b><script>Capture(pctrl.ccinfo3)</script></b></font></td>
                      <td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      
                      <tr>
                    	<td   width="145" height="15" bgcolor="#E7E7E7"></td>
                      	<td   width="457" height="15" colspan="4"></td>
                      </tr>
                    <tr>
                      <td   width="145" height="20" bgcolor="#E7E7E7"></td>
                      <td   width="43" height="20" ></td>
                      <td   width="400" height="20"><font face="Arial" style="font-size: 8pt"><b><script>Capture(pctrl.ccinfo4)</script></b></font></td>
                      <td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      
                      <tr>
                    	<td   width="145" height="15" bgcolor="#E7E7E7"></td>
                      	<td   width="457" height="15" colspan="4"></td>
                      </tr>

                    <tr>
                      <td   width="145" height="20" bgcolor="#E7E7E7"></td>
                      <td   width="43" height="20" ></td>
                      <td   width="400" height="20"><font face="Arial" style="font-size: 8pt"><b><script>Capture(pctrl.ccinfo2)</script></b></font></td>
                      <td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      <tr>
                    	<td   width="145" height="20" bgcolor="#E7E7E7"></td>
                      <td   width="457" height="20" colspan="3"></td>
                      </tr>
                      
                    <tr>
                      <td   width="145" height="20" bgcolor="#E7E7E7"></td>
                      <td   width="43" height="20" ></td>
                      <td   width="400" height="20">
			<input name="_login_checked" type=checkbox value="1"><font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.notsw)</script></font>
			</td>
                      <td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      
                    <tr>
                      <td height="70" width="145" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"></td>
                      <td height="70" width="43" bgcolor="#FFFFFF"></td>
                      <td height="70" width="414" bgcolor="#FFFFFF" colspan="3">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="335" height="19">
              <tr>
                <td height="15" width="143" bgcolor="#8C8E8C">
                <p align="center">
        <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial"> <A href="javascript:to_submit(document.login_warning)"><script>Capture(wlanwscpopup.button)</script></A></font></td>
                <td height="12" width="28"></td>
                <td height="15" width="144" bgcolor="#FFFFFF">
		</td>
                        </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></BODY></HTML>
