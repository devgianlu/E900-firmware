<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Firmware Upgrade</TITLE>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<% web_include_file("filelink.asp"); %>

<SCRIPT language=javascript>
document.title = adtopmenu.upgarde;
var delay_time = 1800;
var num=0;
var width=0;
function progress(){
	var per;

	document.getElementById("left").bgColor="#999999";
	
	if(num == 2){
		clearTimeout(timerID);
                alert(errmsg.err13);
		return false;
	}

	document.getElementById("left").style.width=width;
	document.getElementById("right").style.width=300-width;
	per = (width*100)/300;
	document.getElementById("percent").innerHTML= "&nbsp;&nbsp;" + per + "%";

	if(per >= 94) {
		delay_time = 13000;
	}
	else if(per >=90 )
		delay_time = 10500;
	else if(per >=70 )
		delay_time = 3000;
	else if(per >= 50)
		delay_time = 2300;

	if (per == 98){
		width = 294;
	}
	else {
		width = parseInt(width) + 6;
	}
		
	timerID = setTimeout('progress()', delay_time);
}

function stop(){
	if(ie4)
  		document.all['style0'].style.visibility = 'hidden';
}

function upgrade(F){
	var len = F.file.value.length;
	var ext = new Array('.','b','i','n');
	if (F.file.value == '')	{
                alert(fwupgrade.upgradefile);
		return false;
	}
	var IMAGE = F.file.value.toLowerCase();
	for (i=0; i < 4; i++)	{
		if (ext[i] != IMAGE.charAt(len-4+i)){
                        alert(hupgrade.wrimage);
			return false;
		}
	}

	if(ns4)
		delay_time = 1500;
   		
	choose_disable(F.Upgrade_b);
	//choose_disable(F.file);

	F.submit_button.value = "Upgrade";
   	F.submit();
   	//document.onstop = stop;
   	progress();
}

function safe_upgrade(F){
	var lan_ip = "<% nvram_get("lan_ipaddr"); %>";
	if(lan_ip != "192.168.1.1")
	{
		alert(fwupgrade.safeupmsg1);
		return false;
	}
	if(confirm(fwupgrade.safeupmsg2) == false)
	{
		return false;
	}
	F.submit_button.value = "Upgrade";
	F.gui_action.value = "Apply";
	F.safe_mode_upgrade.value = "on";
	F.submit();
	return true;
}

function init()
{
	document.getElementById("percent").innerHTML="&nbsp;&nbsp; 0%";
	var http_from = "<% nvram_get("http_from"); %>";
	var remote_upgrade = "<% nvram_get("remote_upgrade"); %>";

	if(http_from == "wan" && (remote_upgrade == "0" || remote_upgrade == "")) {
		choose_disable(document.firmware.Upgrade_b);
		choose_disable(document.firmware.file);
	}

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "upgrade.cgi", session_key, close_session);
}
</script>
</HEAD>
<BODY onload=init()>
<FORM name="firmware" method=post action=upgrade.cgi encType=multipart/form-data>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,adtopmenu.upgarde);</script></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>&nbsp;<script>Capture(fwupgrade.upgradefile)</script>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<INPUT type=file name=file size="26" ></TD></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
		<table><tr>
		<td width=164></td>
		<td> <script>document.write("<INPUT  onclick=upgrade(this.form) type=button name=Upgrade_b value=\"" + adbutton.startupgrade + "\">");</script></td>
	<!--	<td> <script>document.write("<INPUT  onclick=safe_upgrade(document.all.safeupgrade) type=button name=Safe_Upgrade_b value=\"" + adbutton.safeupgrade + "\">");</script></td>
	-->
		</tr></table>
	  </TD></TR>
     	<TR><script>draw_table(ISHR,"");</script></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
          <p align=<% ui_position("rtl_right", ""); %>><FONT face=Arial color=#ff0000><script>Capture(fwupgrade.warning)</script></FONT></TD></TR>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
	   <TABLE border=0 width=330 height=25>
		<TD bgcolor=#FFFFFF id=left bordercolor="#999999" style="border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1; border-<% ui_position("rtl_right", ""); %>-style: solid; border-<% ui_position("rtl_right", ""); %>-width: 1; border-<% ui_position("rtl_left", ""); %>-style: none;" width=297></TD>
		<TD bgcolor=#FFFFFF id=right bordercolor="#999999" style="border-top-style: solid; border-top-width: 1; border-bottom-style: solid; border-bottom-width: 1; border-<% ui_position("rtl_left", ""); %>-style: solid; border-<% ui_position("rtl_left", ""); %>-width: 1; border-<% ui_position("rtl_right", ""); %>-style: none;" width=3></TD>
           <TD width=30 id=percent></TD>
           </TABLE>
	  </TD></TR>
        <TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1><B><FONT font face="Arial" style="font-weight: 700" color="#FF0000" size=2>
                 <script>Capture(fwupgrade.notinterrupted)</script></FONT></B>
          </TD></TR>
	
       <TR><script>draw_table(ISBLANK,"");</script></TR>
	   <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<TD class=HELP></TD><TD class=HELP1>
 <p style="margin-top: 0; margin-bottom: 0">
        <span style="font-weight: 700">
        <font face="Arial" style="font-size: 9pt" color="#FFFFFF"><script>Capture(adtopmenu.upgarde)</script></font></span></p>
        <p style="margin-top: 0; margin-bottom: 0">
        <font face="Arial" style="font-size: 9pt" color="#FFFFFF"><script>Capture(fwupgrade.helpmsg)</script></font></p>
</TD>
<!--script>draw_table(ISHELP,"");</script--> 
</TR></TABLE>
<% web_include_file("NOBT_TAIL.asp"); %>
</FORM></BODY></HTML>
