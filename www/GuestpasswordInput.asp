<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Guest Password</TITLE>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="style_rtl.css">
<% ui_position("invmatch", "-->"); %>

<style fprolloverstyle>
A:hover {color: #00FFFF}
.small A:hover {color: #00FFFF}
</style>
<SCRIPT src="common.js"></SCRIPT>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/help.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capapp.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsetup.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=javascript>
document.title = newui.chggnpwd;
document.onkeydown = onInputKeydown;
function onInputKeydown(event)
{
        if(typeof event == "undefined")
        {
                return handleKeyDown(window.event);
        }
        else 
        {
                return handleKeyDown(event);
        }

}

function handleKeyDown(event)
{
		if(event.keyCode == 13) 
                return false;
        else
                return true;
}
function check_gn_passwd()
{
	var re = new RegExp("[^a-zA-Z0-9]+","gi");
	if(re.test(document.forms[0].gn_account_password.value)) 
	{
		document.getElementById("errmsg1").innerHTML = "<font color=red face='Arial' style='font-size: 8pt'>" +pctrl.pwderrmsg1 + "</font>";
		return 1;
	}

	if (document.forms[0].gn_account_password.value.length < 4)
	{
		document.getElementById("errmsg1").innerHTML = "<font color=red face='Arial' style='font-size: 8pt'>" +pctrl.pwderrmsg4 + "</font>";
		return 1;
	}

	return 0;
}
function to_submit(F)
{
		if(check_gn_passwd() == 1)
			return;
        //F.submit_button.value = "Guest_Access";
        //F.change_action.value = "gozila_cgi";
        //F.submit_type.value ="guest_access";
		//F.gn_account_password.value=F.textfield.value;
				setTimeout("window.opener.location.reload()", 1000);
        //F.submit();
        //setTimeout("window.close()", 2000);
		window.opener.Change_gn_password(F.gn_account_password.value);
		window.close()
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
<CENTER>
<FORM method=<% get_http_method(); %> name=GuestpasswordInput action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<TABLE borderColor=#5b5b5b height=262 cellSpacing=0 cellPadding=0 width=462 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH width=901 colSpan=2 height=262 bordercolor="#FFFFFF">
      <TABLE height=1 cellSpacing=3 width=542 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=751 height=1>
            <TABLE cellSpacing=0 width=448 bgColor=#ffffff border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>
                <div align="left" style="width: 651; height: 255">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="651" height="101">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="157">&nbsp; </td>
                      <td height="16" bgcolor="#2971b9" colspan="2">&nbsp; </td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF"> </td>
                    </tr>
                    <tr>
		                      <td height="57" bgcolor="#2971b9" colspan="3">
		<img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="157" bgcolor="#2971b9">&nbsp; </td>
                      <td height="16" bgcolor="#2971b9" colspan="2">&nbsp; </td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="157"> </td>
                      <td height="15" bgcolor="#E7E7E7" colspan="2"> </td> 
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="157"> </td>
                      <td height="7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="157">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(newui.chggnpwd)</script>&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="25" bgcolor="#FFFFFF">&nbsp; </td>
                      <td height="25" width="469" bgcolor="#FFFFFF"><b>
                        <script>Capture(newui.engnpwd)</script></b></td>
                    </tr>
                    <tr>
                      <td height="25" width="157" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">&nbsp; </td>
                      <td height="1" width="25" bgcolor="#FFFFFF">&nbsp; </td>
                      <td height="1" width="469" bgcolor="#FFFFFF"><input name="gn_account_password" maxlength=32 size=32 type="text" value="" /></td>
                          </tr>
                    <tr>
                      <td height="25" width="157" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">&nbsp; </td>
                      <td height="1" width="25" bgcolor="#FFFFFF">&nbsp; </td>
                      <td height="1" width="469" bgcolor="#FFFFFF"><FONT face=Arial>
                        <script>Capture(pctrl.rngchar)</script></FONT></td>
                          </tr>
                    <tr>
                      <td height="25" width="157" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">&nbsp; </td>
                      <td height="1" width="25" bgcolor="#FFFFFF">&nbsp; </td>
                      <td height="1" width="469" bgcolor="#FFFFFF"><span id="errmsg1"></span></td>
                          </tr>						  
                    <tr>
                      <td height="45" width="157" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium">&nbsp; </td>
                      <td height="45" width="25" bgcolor="#FFFFFF">&nbsp; </td>
                      <td height="45" width="469" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="234" height="19">
              <tr>
                <td height="15" width="106" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:to_submit(document.forms[0])"><script>Capture(newui.chg)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="107" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:window.close()"><script>Capture(wlanwscpopup.btncancel)</script></A></font></span></td>
                <td height="15" width="14"></td>
              </tr>
            </table>                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
