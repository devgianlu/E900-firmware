
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

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>List of PCs</TITLE>
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

<SCRIPT language=javascript>
document.title = "PC Q and A";
function to_submit(F)
{
        F.submit_button.value = "pc_QandA";
	F.submit_type.value = "pc_question";
	F.change_action.value = "gozila_cgi";
        F.submit();
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
<FORM name=PC_QandA action=apply.cgi onSubmit="return false;" method=<% get_http_method(); %>>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
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
              border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH vAlign=bottom align=right bgColor=#FFFFFF>
                <div align="left">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="610">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="145"></td>
                      <td height="16" bgcolor="#2971b9" width="457" colspan="4"></td>
                    </tr>
                    <tr>
                      <td height="1" colspan="5" bgcolor="#FFFFFF" width="602">                      </td>
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
                <script>Capture(pctrl.pcontrol)</script> &nbsp;&nbsp;&nbsp; </font></b></td>
                	  <td height="25",width="23" bgcolor="#FFFFFF"></td>
                      <td height="25" width="420" bgcolor="#FFFFFF" colspan="2"></td>
                      	<td height="25" width="14" bgcolor="#FFFFFF"></td>
                    </tr>
                                        <tr>
                      <td height="20" bgcolor="#E7E7E7"></td>
                      <td height="20" ></td>
                      <td height="20" colspan="2"><font face="Arial" style="font-size: 8pt"><B><script>Capture(pctrl.aswsq)</script>:</b></font> </td>
                      <td height="20" bgcolor="#FFFFFF"></td>
                    </tr>
                    <tr>
                    	<td   width="145" height="10" bgcolor="#E7E7E7"></td>
                      <td   width="457" height="10" colspan="4"></td>
                    </tr>
                    <tr>
                    	<td   width="145" height="20" bgcolor="#E7E7E7"></td>
                    	<td   width="23" height="20" ></td>
                      	<td   width="420" height="20" colspan="2"><font face="Arial" style="font-size: 8pt">
			<%nvram_get_sp("hnd_question");%>
			</font></td>
                      	<td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                    <tr>
                    	<td   width="145" height="10" bgcolor="#E7E7E7"></td>
                      <td   width="457" height="10" colspan="4"></td>
                    </tr>
                      
                    <tr>
                      <td   width="145" height="20" bgcolor="#E7E7E7"></td>
                      <td   width="23" height="20" ></td>
                      <td   width="420" height="20" ><font face="Arial" style="font-size: 8pt">
			<input maxlength="32" style="width:240" name="_hnd_answer">
                      </font></td>
                      <td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      
                    <tr>
                    	<td   width="145" height="20" bgcolor="#E7E7E7"></td>
                    	<td   width="23" height="20" ></td>
                      	<td   width="420" height="20" colspan="2"><font face="Arial" color=red style="font-size: 8pt">
			<script>
			var deny = "<%nvram_get("pc_passwd_deny");%>";
			if(deny == "1")
				document.write(pctrl.qaerrmsg3)
			</script>
			</font></td>
                      	<td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      
                      <tr>
                    	<td   width="145" height="20" bgcolor="#E7E7E7"></td>
                    	<td   width="23" height="20" ></td>
                      	<td   width="420" height="1" colspan="2"><HR color="#CCCCCC" size="1"></td>
                      	<td height="20" width="14" bgcolor="#FFFFFF"></td>
                      </tr>
                      
                    <tr>
                      <td height="45" width="145" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"></td>
                      <td height="45" width="23" bgcolor="#FFFFFF"></td>
                      <td height="45" width="434" bgcolor="#FFFFFF" colspan="3">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="335" height="19">
              <tr>
                <td height="15" width="153" bgcolor="#8C8E8C">
                <p align="center">
        <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial"> <A href="javascript:to_submit(document.PC_QandA)"><script>Capture(wlanwscpopup.button)</script></A></font></td>
                <td height="12" width="28"></td>
                <td height="15" width="154" bgcolor="#8C8E8C">
                <p align="center">
                    <span lang="zh-tw">
                    <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial"> <A href="javascript:close()"><script>Capture(wlanwscpopup.btncancel)</script></A></font></span></td>
                        </tr>
            </table>                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></BODY></HTML>
