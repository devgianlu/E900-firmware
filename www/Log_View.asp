<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>View Log</TITLE>
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
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capadmin.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=JavaScript type=text/javascript>
document.title = adbutton.viewlog;
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";

function ChangeType(F)
{
	F.submit_button.value="Log_View";
	F.change_action.value="gozila_cgi";
	F.submit_type.value=F.log_type.value;
	F.submit();
}

function to_clear(F)
{
	F.submit_button.value="Log_View";
	F.submit_type.value="clear";
        F.change_action.value="gozila_cgi";
        F.submit();
}
function init()
{
	window.location.href = "#";	
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
var log_type = "<% nvram_selget("log_type"); %>";

function refresh()
{
	if ( close_session == "1" )
	{
		document.location.replace("Log_View.asp");
	}
	else
	{
		document.location.replace("Log_View.asp;session_id=<% nvram_get("session_key"); %>");
	}
}

</SCRIPT>


</HEAD>
<BODY bgColor=#808080 onLoad="init()">
<CENTER>
<FORM name=log method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=change_action>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=log_type>
<TABLE borderColor=#5b5b5b height=282 cellSpacing=0 cellPadding=0 width=462 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH width=901 colSpan=2 height=282 bordercolor="#FFFFFF">
      <TABLE height=92 cellSpacing=3 width=537 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH width=754 height=92>
            <TABLE cellSpacing=0 width=448 bgColor=#ffffff 
              border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0" align="center"><TBODY>
              <TR>
                <TH vAlign=bottom align=right width=580 bgColor=#FFFFFF>
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="708" height="1">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="165"> &nbsp;</td>
                      <td height="16" bgcolor="#2971b9" width="543" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="708"> </td>
                    </tr>
                    <tr>
			<td height="57" bgcolor="#2971b9" width="708" colspan="3">
			<img border="0" src="/image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#2971b9"> &nbsp;</td>
                      <td height="16" width="543" bgcolor="#2971b9" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="15" width="543" bgcolor="#E7E7E7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="165"> </td>
                      <td height="7" width="543" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="165">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(adtopmenu.log)</script>&nbsp;&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="543" bgcolor="#FFFFFF" colspan="2"> &nbsp;</td>
                    </tr>
                    <tr>
                      <td height="25" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium" valign="top">
			<p align=<% ui_position("rtl_left", ""); %> style="margin-top: 6">
            <span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt"><script>Capture(log.type)</script>&nbsp;&nbsp;&nbsp;
            </font></span></td>
                      <td height="25" width="23" bgcolor="#FFFFFF">
			&nbsp;</td>
                      <td height="25" width="520" bgcolor="#FFFFFF">
                <SELECT onChange=ChangeType(this.form) name=log_type> 
			<OPTION value=ilog <% nvram_selmatch("log_type","ilog","selected"); %>><script>Capture(log.inlog)</script></OPTION> 
			<OPTION value=olog <% nvram_selmatch("log_type","olog","selected"); %>><script>Capture(log.outlog)</script></OPTION> 
			<OPTION value=slog <% nvram_selmatch("log_type","slog","selected"); %>><script>Capture(log.seclog)</script></OPTION> 
			<OPTION value=dlog <% nvram_selmatch("log_type","dlog","selected"); %>><script>Capture(log.dhcplog)</script></OPTION> 
                </SELECT></td>
                         </tr>
                    <tr>
                      <td height="16" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium" valign="top"> &nbsp;</td>
                      <td height="1" width="23" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="1" width="520" bgcolor="#FFFFFF"> <HR color="#CCCCCC" size="1"> </td>
                          </tr>
                    <tr>
                      <td height="199" width="165" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium" valign="top">
			<p align=<% ui_position("rtl_left", ""); %> style="margin-top: 6">
            <span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt">
		<script>
			if(log_type == "ilog" || log_type == "")
				document.write(log.inlog);
			else if(log_type == "olog")
				document.write(log.outlog);
			else if(log_type == "slog")
				document.write(log.seclog);
			else if(log_type == "dlog")
				document.write(log.dhcplog);
		</script>
		&nbsp;&nbsp;&nbsp;
            </font></span></p>
            <p>&nbsp;</td>
                      <td height="25" width="23" bgcolor="#FFFFFF"> &nbsp;</td>
                      <td height="25" width="520" bgcolor="#FFFFFF">
<script>
var log_type = "<% nvram_selget("log_type"); %>";
var top_style = "none";
if(log_type == "ilog" || log_type == "") {

	document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" width=\"433\" height=\"199\">");
        document.write("<tr>");
        document.write("<td height=\"25\" width=\"206\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<span style=\"font-weight: 700\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+share.sourceip+"</font></span></td>");
        document.write("<td height=\"25\" width=\"206\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<span style=\"font-weight: 700\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+log.desportnum+"</font></span></td>");
        document.write("</tr>");

	var table = new Array();
        var r=0;  //John add
        var n_st=0;

	function AAA(src,port)
	{
		this.src = src;
		this.port = port;
	}
	<% dumplog("incoming_table","AAA"); %>
       //John@2008.05.23, dut refleshes incomegoing log table,only show 64 entries at most,
        //if the 65st entry is coming, only show the 65st one
        if(table.length<65)
                n_st = 0;
        else{
                r = (table.length) % 64;
                if(r==0)
                        n_st= table.length - 64;
                else
                        n_st= table.length - r;
        }
        //John the starting point is n_st

	for(var i=n_st;i<table.length;i++) {

	
		if(table.length == 0)
			break;
	if(i==0)
	{
		top_style = "solid";
	}
	else
	{
		top_style = "none";
	}

        document.write("<tr>");
        document.write("<td height=\"22\" width=\"217\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: "+top_style+"; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].src+"</font></td>");
        document.write("<td height=\"22\" width=\"217\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: "+top_style+"; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].port+"</font></td>");
        document.write("</tr>");
	}

        document.write("<tr>");
        document.write("<td width=\"217\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: none; border-top-width: medium; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">&nbsp;</td>");
        document.write("<td width=\"217\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: none; border-top-width: medium; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\">&nbsp;</td>");
        document.write("</tr>");
        document.write("</table>");
	
}
else if(log_type == "olog"){
	document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" width=\"484\" height=\"199\">");
        document.write("<tr>");
        document.write("<td height=\"25\" width=\"192\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<span style=\"font-weight: 700\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+log.lanipaddr+"</font></span></td>");
        document.write("<td height=\"25\" width=\"278\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<span style=\"font-weight: 700\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+log.dstip+"</font></span></td>");
        document.write("<td height=\"25\" width=\"235\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: 1\" bordercolor=\"#2971b9\">");
        document.write("<span style=\"font-weight: 700\"> <font face=\"Arial\" style=\"font-size: 8pt\">"+log.srvport+"</font></span></td>");
        document.write("</tr>");

	var table = new Array();
	var _src;
	var _dst;
	var _port;
        var r=0;  //John add
        var n_st=0;
	function BBB(src,dst,port)
	{
		this.src = src;
		this.dst = dst;
		this.port = port;
	}
	<% dumplog("outgoing_table","BBB"); %>
	//John@2008.05.07, dut refleshes outgoing log table,only show 64 entries at most,
        //if the 65st entry is coming, only show the 65st one
        if(table.length<65)
                n_st = 0;
        else{
                r = (table.length) % 64;
                if(r==0)
                        n_st= table.length - 64;
                else
                        n_st= table.length - r;
        }
        //John the starting point is n_st

	for(var i=n_st;i<table.length;i++) {
	
	
	if(table.length == 0) {
		_src = table[0].src;
		_dst = table[0].dst;
		_port = table[0].port;
	}
	else {
		_src = "&nbsp;";
		_dst = "&nbsp;";
		_port = "&nbsp;";
	}

	if(i==0)
	{
		top_style = "solid";
	}
	else
	{
		top_style = "none";
	}
        document.write("<tr>");
        document.write("<td height=\"25\" width=\"203\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: "+top_style+"; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].src+"</font></td>");
        document.write("<td height=\"25\" width=\"268\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: "+top_style+"; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].dst+"</font></td>");
        document.write("<td height=\"25\" width=\"225\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: "+top_style+"; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">");
        document.write("<font face=\"Arial\" style=\"font-size: 8pt\">"+table[i].port+"</font></td>");
        document.write("</tr>");

	if(table.length == 0)
		break;
	}

        document.write("<tr>");
        document.write("<td width=\"203\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: none; border-top-width: medium; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\"> &nbsp;</td>");
        document.write("<td width=\"268\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: none; border-top-width: medium; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\"> &nbsp;</td>");
        document.write("<td width=\"225\" align=\"center\" style=\"border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: none; border-top-width: medium; border-bottom-style: solid; border-bottom-width: 1\" bordercolor=\"#2971b9\"> &nbsp;</td>");
        document.write("</tr>");
	document.write("</table>");

	}
	else if(log_type == "slog"){
	  var table = new Array();
	  function CCC(string)
	  {
		this.string = string;
	  } 
	  <% dumplog("security_table","CCC"); %>
	  		document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" width=\"433\" height=\"199\">");
            document.write("<tr>");
			 document.write("<td height=\"25\" width=\"412\" valign=\"top\" align=\"left\" style=\"border-style:solid; border-width:1;\" bordercolor=\"#2971b9\">");

	  for(var i=0 ; i<table.length ; i++) {
	    document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" width=\"433\" height=\"25\">");
            document.write("<tr>");
                document.write("<td height=\"25\" width=\"412\" align=\"left\" style=\"border-style:none; border-width:1; border-top-style: none; border-top-width: medium; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">"+table[i].string+"</td>");
            document.write("</tr>");
            document.write("</table>");
	}
			document.write("&nbsp;</td></tr>");
            document.write("</table>");
	}
	else if(log_type == "dlog"){
	  var table = new Array();
	  function DDD(string)
	  {
		this.string = string;
	  } 
	  <% dumplog("dhcp_table","DDD"); %>
	  		document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" width=\"433\" height=\"199\">");
            document.write("<tr>");
			 document.write("<td height=\"25\" width=\"412\" valign=\"top\" align=\"left\" style=\"border-style:solid; border-width:1;\" bordercolor=\"#2971b9\">");

	  for(var i=0 ; i<table.length ; i++) {
	    document.write("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" width=\"433\" height=\"25\">");
            document.write("<tr>");
                document.write("<td height=\"25\" width=\"412\" align=\"left\" style=\"border-style:none; border-width:1; border-top-style: none; border-top-width: medium; border-bottom-style: none; border-bottom-width: medium\" bordercolor=\"#2971b9\">"+table[i].string+"</td>");
            document.write("</tr>");
            document.write("</table>");
	}
			document.write("&nbsp;</td></tr>");
            document.write("</table>");
      }
</script>
                            </td>
                          </tr>
                    <tr>
                      <td height="45" width="165" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium">&nbsp;
			</td>
                      <td height="45" width="51" bgcolor="#FFFFFF">&nbsp;
			</td>
                      <td height="45" width="492" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="356" height="19">
              <tr>
                <td height="15" width="104" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF">
<script>
var name;
if(log_type == "ilog")
	name = '<% get_log_name("ilog"); %>';
else if(log_type == "olog")
	name = '<% get_log_name("olog"); %>';
else if(log_type == "slog")
	name = '<% get_log_name("slog"); %>';
else if(log_type == "dlog")
	name = '<% get_log_name("dlog"); %>';

document.write("<A href=\"javascript:window.location.href='"+name+"'\">");
</script>
<script>Capture(adbutton.savelog)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="104" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:refresh()"><script>Capture(sbutton.refresh)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="105" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A href="javascript:to_clear(document.log)"><script>Capture(adbutton.clear)</script></A><a name="#"></a></font></span></td>
                <td height="15" width="34"></td>
              </tr>
            </table>
                      </td>
                    </tr>
                    </table>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
