<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Port Status</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = "Port Status";

var port_speed=[
<%get_port_speed();%>
];

function draw_wan_port_speed()
{
	var result = "";
	result += "<table style='border: 1px solid rgb(41,113,185)' border='1' width='60%'>\n";
	result += "<tr>\n";
	result += "<td style='border: 1px solid rgb(41,113,185)' align='center' width='25%' height = 20></td>\n";
	result += "<td style='border: 1px solid rgb(41,113,185)' align='center' width='25%' height = 20><b>"+ newui.mb +"</b></td>\n";
	result += "</tr>\n";
	result += "<tr>\n";
	result += "<td style='border: 1px solid rgb(41,113,185)' align='center' width='25%' height = 20><b>" + share.internet + "</b></td>\n";
	 if(port_speed[4] == "0")
	{
		result += "<td style='border: 1px solid rgb(41,113,185)' align='center' width='25%' height = 20></td>\n";
	}
	else
	{
		result += "<td style='border: 1px solid rgb(41,113,185)' align='center' width='25%' height = 20><img border='0' src='image/green.gif' width='12' height='8'></td>\n";
	}
	result += "</tr>\n";
	result += "</table>\n";

	return result;	
}

function draw_lan_port_speed()
{
	var result = "";
	var i = 0;
	result += "<table style='border: 1px solid rgb(41,113,185)' border='1' width='60%'>\n";
	result += "<tr>\n";
	result += "<td style='border: solid 1px #2971b9' align='center' width='25%' height = 20></td>\n";
	result += "<td style='border: solid 1px #2971b9' align='center' width='25%' height = 20><b>"+ newui.mb +"</b></td>\n";
	result += "</tr>\n";
	result += "<tr>\n";
	for(i = 1; i< 5 ; i++)
	{
		result += "<td style='border: solid 1px #2971b9' align='center' width='25%' height = 20><b>" + errmsg.err46 + " " + i + "</b></td>\n";
		if(port_speed[i - 1] == "0")
		{
			result += "<td style='border: solid 1px #2971b9' align='center' width='25%' height = 20></td>\n";
		}
		else
		{
			result += "<td style='border: solid 1px #2971b9' align='center' width='25%' height = 20><img border='0' src='image/green.gif' width='12' height='8'></td>\n";
		}
		result += "</tr>\n";
	}
	result += "</table>\n";

	return result;	
}

function to_submit(F)
{
	F.submit_button.value = "Status_Ports";
	F.gui_action.value = "Apply";
	F.submit();
}

function init()
{
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function refresh()
{
    if ( close_session == "1" )
    {
        document.location.replace("Status_Ports.asp");
    }
	else
    {
        document.location.replace("Status_Ports.asp;session_id=" + session_key);
    }
}
</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM name=ports method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,newui.rearportlig);</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><table width="433px"><tr><td><INPUT type=radio value=1 name=turn_leds <% nvram_match("turn_leds","1","checked"); %>>		             <b><script>Capture(newui.on)</script></b>&nbsp;&nbsp;&nbsp;
		  <INPUT type=radio value=0 name=turn_leds <% nvram_match("turn_leds","0","checked"); %>>
			 <b><script>Capture(newui.off)</script></b></td></tr></table></TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(MAINFUN,newui.inetpspeed);</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><script>document.write(draw_wan_port_speed())</script></TD></TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(MAINFUN,newui.localpspeed);</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD colspan=2 class=FUNNAME1><script>document.write(draw_lan_port_speed())</script></TD></TR>

        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(ISTAIL,"");</script></TR>
<TR>
	    <TD class=TITLE1 colspan=2></TD>
	    <TD class=FUNNAME4 colspan=2>
		<TABLE>
			<TR>	
			<TD width=103 bgcolor=#175592 align=center><font color=#FFFFFF style="font-size: 8pt; font-weight: 700" face="Arial"><A href="javascript:window.location.reload()"><script>Capture(CMD.Refresh)</script></A></font></TD>
				<TD width=8></TD>
			<TD width=126 bgcolor=#175592 align=center height=20><font color=#FFFFFF style="font-size: 8pt; font-weight: 700" face="Arial"><A href="javascript:to_submit(document.ports)"><script>Capture(sbutton.save)</script></A></font></TD>
				<TD width=8></TD>
			<TD width=103 bgcolor=#175592 align=center><font color=#FFFFFF style="font-size: 8pt; font-weight: 700" face="Arial"><A href="javascript:refresh()"><script>Capture(sbutton.cancel)</script></A></font></TD>
			<TD width=16></TD>
			</TR>
			  </TABLE>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM>
</BODY></HTML>
