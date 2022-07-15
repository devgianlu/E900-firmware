<% web_include_file("copyright.asp"); %>

<HTML><HEAD><TITLE>Internet Policy Summary</TITLE>
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
<script src="common.js"></script>  
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/help.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capapp.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<STYLE type=text/css>
a{text-decoration:none}
</STYLE>

<SCRIPT language=javascript>
document.title = share.summary;
function to_delete(num)
{
	var F=document.summary;

	F.submit_button.value="FilterSummary";
	F.change_action.value="gozila_cgi";
	F.submit_type.value="delete_single";
	F.filter_id.value=parseInt(num)+1;
	F.submit();
}
function to_submit(F)
{
	F.gui_action.value = "Apply";
	F.submit_button.value="FilterSummary";
	F.filter_summary.value="1";
	F.submit();
}
function Refresh()
{
	top.opener.window.location.href='Filters.asp';
}
function init()
{
	window.focus();
	<% onload("FilterSummary", "Refresh();"); %>

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);

}
</SCRIPT>

</HEAD>
<BODY bgColor=#808080 onload=init()>
<CENTER>
<FORM method=<% get_http_method(); %> action=apply.cgi name=summary>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name=change_action>
<input type=hidden name=filter_id>
<input type=hidden name=filter_summary>
<input type=hidden name="wait_time" value="3">
<TABLE 
borderColor=#5b5b5b height=282 cellSpacing=0 cellPadding=0 width=447 
bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH width=601 colSpan=2 height=282 bordercolor="#FFFFFF">
      <TABLE height=1 cellSpacing=3 width=632 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=856 height=1>
            <TABLE cellSpacing=0 width=216 bgColor=#ffffff 
              border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH width=580 align=right vAlign=bottom bgColor=#FFFFFF>
                <div align="left">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="797" height="1">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="156"> </td>
                      <td height="16" bgcolor="#2971b9" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF"> </td>
                    </tr>
                    <tr>
			<td height="57" bgcolor="#2971b9" colspan="3">
       <img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="156" bgcolor="#2971b9"> </td>
                      <td height="16" bgcolor="#2971b9" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="156"> </td>
                      <td height="15" bgcolor="#E7E7E7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="156"> </td>
                      <td height="7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="156">
                <p align="right"><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF">
                <script>Capture(summary.policy)</script>&nbsp;&nbsp;&nbsp; </font></b></td>
                      <td height="25" bgcolor="#FFFFFF" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="88" width="156" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black">			</td>
                      <td height="1" width="23" bgcolor="#FFFFFF" style="font-style: normal; font-variant: normal; font-weight: normal; font-size: 10pt; font-family: Arial, Helvetica, sans-serif; color: black">			</td>
                      <td height="1" width="618" bgcolor="#FFFFFF" style="font-style: normal; font-variant: normal; font-weight: normal; font-size: 10pt; font-family: Arial, Helvetica, sans-serif; color: black">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#5b5b5b" id="AutoNumber3" width="600" height="150">
              <tr>
                <td height="25" width="30" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(summary.num)</script></font></span></td>
                <td height="25" width="302" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(summary.policyname)</script></font></span></td>
                <td height="25" width="99" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.access)</script></font></span></td>
                <td height="25" width="433" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(summary.days)</script></font></span></td>
                <td height="25" width="169" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(summary.tmofday)</script></font></span></td>
                <td height="25" width="81" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.enabled)</script></font></span></td>
                <td height="25" width="80" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black" bordercolor="#2971b9">
                </td> 
              </tr>
<script>

var table = new Array();
var access_buf = "";
var day_buf = "";
var time_buf = "";
var tm = new Array();
var week = new Array(filter.sun, filter.mon, filter.tue, filter.wed, filter.thu, filter.fri, filter.sat);

<% filter_summary_show("table"); %>

function AAA(name,access,day,time,enable)
{
	this.name = name;
	this.access = access;
	this.day = day;
	this.time = time;
	this.enable = enable;
}
	for(var i=0 ; i<5 ; i++) {

		if(table[i].access == "allow")		access_buf = filter.allow;
		else if(table[i].access == "deny")	access_buf = filter.deny;
		else 					access_buf = "---";

		if(table[i].time == "all")		time_buf = filter.tfhrs;
		else if(table[i].time == "---")		time_buf = "---";
		else					time_buf = table[i].time;

		if(table[i].day == "all")		day_buf = filter.everyday;
		else if(table[i].day == "---")		day_buf = "---";
		else {
			day_buf = "";
			var c = 0;
			tm = table[i].day.split(' ');
			for(var j=0 ; j<=6 ; j++) {
				if(tm[j] == "1") { 
					if(c > 0) day_buf = day_buf + ", ";
					day_buf = day_buf + week[j]; 
					c++;
				}
			}
		}

		if(table[i].access == "---") {
			var no = eval("document.summary.no"+i);
			var bt = eval("document.summary.bt"+i);
			choose_disable(no);
			choose_disable(bt);
		}

              document.write("<tr>");
              document.write("<td height=\"25\" width=\"30\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+(i+1)+"</font></td>");
              document.write("<td height=\"25\" width=\"302\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<p style=\"margin-top: 0; margin-bottom: 0\">");
              document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].name+"</font></td>");
              document.write("<td height=\"25\" width=\"99\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<p style=\"margin-top: 0; margin-bottom: 0\"><font face=\"Arial\" style=\"font-size: 8pt\">"+access_buf+"</font></p></td>");
              document.write("<td height=\"25\" width=\"433\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<p style=\"margin-top: 0; margin-bottom: 0\"> <font face=\"Arial\" style=\"font-size: 8pt\">"+day_buf+"</font></p> </td>");
              document.write("<td height=\"25\" width=\"169\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<p style=\"margin-top: 0; margin-bottom: 0\"><font face=\"Arial\" style=\"font-size: 8pt\">"+time_buf+"</font></td>");
              document.write("<td height=\"25\" width=\"81\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<p style=\"margin-top: 0; margin-bottom: 0\"><font size=\"1\" face=\"Arial\">");
              document.write("<INPUT type=checkbox value=1 name=no"+i+" "+table[i].enable+"></font></td>");
              document.write("<td height=\"25\" width=\"80\" align=\"center\" style=\"border-style: solid; border-width: 1; font-style:normal; font-variant:normal; font-weight:normal; font-size:10pt; font-family:Arial, Helvetica, sans-serif; color:black\" bordercolor=\"#2971b9\">");
              document.write("<p style=\"margin-top: 0; margin-bottom: 0\"><font face=\"Arial\" color=\"#5b5b5b\" size=\"2\"> <b style=\"font-weight: bold\">");
              document.write("<INPUT onclick=to_delete("+i+") type=button value='" + sbutton.del + "' name=bt"+i+"></b></font></td>");
              document.write("</tr>");
	}
</script>              
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td height="45" width="156" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"> </td>
                      <td height="45" width="23" bgcolor="#FFFFFF"> </td>
                      <td height="45" width="618" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="327" height="19">
              <tr>
                <td height="15" width="103" bgcolor="#8C8E8C">
                <p align="center">
        <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial">
                <A href="javascript:to_submit(document.summary)"><script>Capture(sbutton.save)</script></A></font></td>
                <td height="12" width="8"></td>
                <td height="15" width="104" bgcolor="#8C8E8C">
                <p align="center">
                    <font color="#FFFFFF" style="font-size: 8pt; font-weight: 700" face="Arial">
                <A href="javascript:location.replace('FilterSummary.asp')"><script>Capture(sbutton.cancel)</script></A></font></td>
                <td height="12" width="8"></td>
                <td height="15" width="104" bgcolor="#8C8E8C" align="center">
                <a href="self.close()">
                <font face="Arial" style="font-size: 8pt; font-weight: 700" color="#FFFFFF"> 
                <A href="javascript:window.close()"><script>Capture(sbutton.close)</script></A></td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
