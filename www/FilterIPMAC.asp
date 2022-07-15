<% web_include_file("copyright.asp"); %>
<HTML><HEAD><TITLE>List of PCs</TITLE>
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
document.title = filterpc.listpc;
function to_submit(F)
{
        F.submit_button.value = "FilterIPMAC";
        F.gui_action.value = "Apply";
        F.submit();
}
function valid_macs_all(I)
{
	if(I.value == "")
		return true;
	else if(I.value.length == 12)
		valid_macs_12(I);
	else if(I.value.length == 17)
		valid_macs_17(I);
	else{
//              alert('The MAC Address length is not correct!!');
                alert(errmsg.err5);
		I.value = I.defaultValue;
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
<FORM name=ipfilter action=apply.cgi method=<% get_http_method(); %>>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=small_screen>
<input type=hidden name=gui_action>
<input type=hidden name=filter_ip_value>
<input type=hidden name=filter_mac_value>
<input type=hidden name="wait_time" value="3">
<CENTER>
<TABLE borderColor=#5b5b5b height=282 cellSpacing=0 cellPadding=0 width=462 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH width=901 colSpan=2 height=282 bordercolor="#FFFFFF">
      <TABLE height=1 cellSpacing=3 width=610 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=834 height=1>
            <TABLE cellSpacing=0 width=448 bgColor=#ffffff 
              border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0" align="center"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>   
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="602" height="1">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="165">                      &nbsp;</td>
                      <td height="16" bgcolor="#2971b9" width="437" colspan="2">          &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="602">
                      </td>
                    </tr>
                    <tr>
			<td height="57" bgcolor="#2971b9" width="602" colspan="3">
       <img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#2971b9">			&nbsp;</td>
                      <td height="16" width="437" bgcolor="#2971b9" colspan="2">			&nbsp;</td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="165">               </td>
                      <td height="15" width="437" bgcolor="#E7E7E7" colspan="2">			</td>         
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="165">          </td>
                      <td height="7" width="437" colspan="2">			</td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="165">
                <p align="right"><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF">
                <script>Capture(filterpc.listpc)</script> &nbsp;&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="437" bgcolor="#FFFFFF" colspan="2">			&nbsp;</td>
                    </tr>
                    <tr>
                      <td  width="165" class=field2>
			<p align="right"><span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt">&nbsp; <script>Capture(share.macaddr)</script>&nbsp;&nbsp;&nbsp;
            </font></span></td>
                      <td height="1" width="23" bgcolor="#FFFFFF" rowspan="5">			&nbsp;</td>
                      <td height="1" width="414" bgcolor="#FFFFFF" rowspan="5">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="378">
              <tr>
                <td width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">01</font></td>
                <td width="168" align="center" Id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac0 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(0); %>"></font></td>
                <td width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">06</font></td>
                <td width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac5 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(5); %>"></font></td>
                </tr>
                <tr>
                  <td width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">02</font></td>
                  <td width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac1 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(1); %>"></font></td>
                  <td width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">07</font></td>
                  <td width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac6 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(6); %>"></font></td>
                  </tr>
                  <tr>
                    <td width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">03</font></td>
                    <td width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac2 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(2); %>"></font></td>
                    <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">08</font></td>
                    <td   width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac7 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(7); %>"></font></td>
                    </tr>
                    <tr>
                      <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">04</font></td>
                      <td   width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac3 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(3); %>"></font></td>
                      <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">09</font></td>
                      <td  width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac8 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(8); %>"></font></td>
                      </tr>
                    <tr>
                      <td height="25" width="20" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">05</font></td>
                      <td height="25" width="168" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac4 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(4); %>"></font></td>
                      <td height="25" width="20" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">10</font></td>
                      <td height="25" width="168" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num onBlur=valid_macs_all(this) maxLength=17 size=14 name=mac9 style="font-size:8pt; font-family:Arial" value="<% filter_mac_get(9); %>"></font></td>
                      </tr>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td   width="165" class=field2>			&nbsp;</td>
                      </tr>
                    <tr>
                      <td   width="165" class=field2>			&nbsp;</td>
                      </tr>
                    <tr>
                      <td   width="165" class=field2>			&nbsp;</td>
                      </tr>
                    <tr>
                      <td   width="165" class=field2>			&nbsp;</td>
                      </tr>
                    <tr>
                      <td height="16" width="165" class=field2>			&nbsp;</td>
                      <td height="1" width="23" bgcolor="#FFFFFF">			&nbsp;</td>
                      <td height="1" width="414" bgcolor="#FFFFFF">      <HR color="#CCCCCC" size="1">
                            </td>
                          </tr>
                    <tr>
                      <td   width="165" class=field2>
			<p align="right"><span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt">&nbsp; <script>Capture(share.ipaddr)</script>&nbsp;&nbsp;&nbsp;
            </font></span></td>
                      <td height="1" width="23" bgcolor="#FFFFFF" rowspan="3">			&nbsp;</td>
                      <td height="1" width="414" bgcolor="#FFFFFF" rowspan="3">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="378">
                      <tr>
                        <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">01</font></td>
                        <td   width="167" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip0 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip",0); %>">&nbsp; </font>
                        </td>
                        <td   width="21" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">04</font></td>
                        <td   width="167" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip3 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip",3); %>">&nbsp; </font>
                        </td>
                        </tr>
                        <tr>
                          <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">02</font></td>
                          <td   width="167" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                          <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip1 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip",1); %>">&nbsp; </font>
                          </td>
                          <td   width="21" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">05</font></td>
                          <td   width="167" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                          <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip4 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip",4); %>">&nbsp; </font>
                          </td>
                          </tr>
                          <tr>
                            <td height="25" width="20" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">03</font></td>
                            <td height="25" width="167" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                            <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip2 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip",2); %>">&nbsp; </font>
                            </td>
                            <td height="25" width="21" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">06</font></td>
                            <td height="25" width="167" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                            <INPUT class=num  onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip5 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip",5); %>">&nbsp; </font>
                            </td>
                            </tr>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td   width="165" class=field2>			&nbsp;</td>
                      </tr>
                    <tr>
                      <td   width="165" class=field2>			&nbsp;</td>
                      </tr>
                    <tr>
                      <td height="16" width="165" class=field2>			&nbsp;</td>
                      <td height="1" width="23" bgcolor="#FFFFFF">	&nbsp;</td>
                      <td height="1" width="414" bgcolor="#FFFFFF">    <HR color="#CCCCCC" size="1">     </td>
                          </tr>
                    <tr>
                      <td   width="165" class=field2>
			<p align="right"><span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt"><script>Capture(setupcontent.dhcprange)</script>&nbsp;&nbsp;&nbsp;
            </font></span></td>
                      <td height="1" width="23" bgcolor="#FFFFFF" rowspan="2">			&nbsp;</td>
                      <td height="1" width="414" bgcolor="#FFFFFF" rowspan="2">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber3" width="378">
                              <tr>
                                <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">01</font></td>
                                <td   width="167" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range0_0 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range0_0",6); %>"> 
                to
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range0_1 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range0_1",6); %>"></font></td>
                                <td   width="20" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt">03</font></td>
                                <td   width="168" align="center" id=field1>
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range2_0 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range2_0",8); %>"> 
                to
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range2_1 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range2_1",8); %>"></font></td>
                                </tr>
                                <tr>
                                  <td height="25" width="20" align="center" style="border-style: solid; border-width: 1" bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">02</font></td>
                                  <td height="25" width="167" align="center" style="border-style: solid; border-width: 1" bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range1_0 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range1_0",7); %>"> 
                to
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range1_1 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range1_1",7); %>"></font></td>
                                  <td height="25" width="20" align="center" style="border-style: solid; border-width: 1" bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt">04</font></td>
                                  <td height="25" width="168" align="center" style="border-style: solid; border-width: 1" bordercolor="#2971b9">
                <font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %>
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range3_0 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range3_0",9); %>"> 
                to
                        <INPUT class=num onBlur=valid_range(this,0,254,"IP") maxLength=3 style="width:30px" name=ip_range3_1 style="font-size:8pt; font-family:Arial" value="<% filter_ip_get("ip_range3_1",9); %>"></font></td>
                                  </tr>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td   width="165" class=field2>&nbsp;</td>
                          </tr>
                    <tr>
                      <td height="45" width="165" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"> &nbsp;</td>
                      <td height="45" width="51" bgcolor="#FFFFFF">&nbsp;</td>
                      <td height="45" width="386" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="327" height="19">
              <tr>
                <td height="15" width="103" bgcolor="#8C8E8C">
                <p align="center">
        <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial"> <A href="javascript:to_submit(document.ipfilter)"><script>Capture(sbutton.save)</script></A></font></td>
                <td height="12" width="8"></td>
                <td height="15" width="104" bgcolor="#8C8E8C">
                <p align="center">
                    <span lang="zh-tw">
                    <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial"> <A href="javascript:location.replace('FilterIPMAC.asp')"><script>Capture(sbutton.cancel)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="104" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:window.close()"><script>Capture(sbutton.close)</script></A></font></span></td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TH></TR></TBODY></TABLE></CENTER></FORM></BODY></HTML>
