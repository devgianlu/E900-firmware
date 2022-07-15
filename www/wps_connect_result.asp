<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Basic Wireless Settings</TITLE>
<% no_cache(); %>
<% charset(); %> 
<link rel="stylesheet" type="text/css" href="style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="style_rtl.css">
<% ui_position("invmatch", "-->"); %>

<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<script src="common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language=JavaScript>
re1 = /<br>/gi;
str = wlantopmenu.wsc.replace(re1," ");
document.title = str;
var close_session = "<% get_session_status(); %>";
var wscresult = "<% nvram_get("wsc_result"); %>";
function clickOKButton()
{
	if ( close_session == "1" )
	{
		parent.location.href="Wireless_Basic.asp";
	}
	else
	{
		parent.location.href="Wireless_Basic.asp;session_id=<% nvram_get("session_key"); %>";
	}
}
</SCRIPT>
</HEAD>
<BODY>
<TABLE cellspacing=0>
<TR>
<TD>
<script>
    if( wscresult == "1" )
    	 document.write("<img src=image/wps_success.gif>");
    else if( wscresult == "2" )
         document.write("<img src=image/wps_fail.gif>");
</script>
</TD>
<TD class=wpsfont>
		<script>
			if( wscresult == "1" )
				document.write(wlanwscpopup.success1);
			else if( wscresult == "2" )
				document.write(wlanwscpopup.fail1);
		</script>
</TD>
</TR>
<TR>
<TD></TD>
<TD class=wpsfont>
		<script>
			if( wscresult == "1" )
				document.write(wlanwscpopup.success2);
			else if( wscresult == "2" )
				document.write(wlanwscpopup.fail2);
		</script>
</TD>
</TR>
<TR>
<TD></TD>
<TD class=wpsfont>
		<script>
				document.write("<P>"+wlanwscpopup.result1+"</P><P>"+wlanwscpopup.result2+"</P>");
		</script>
</TD>
</TR>
<TR>
<TD></TD>
<TD class=wpsfont>
<p style='text-align:<% ui_position("rtl_left", ""); %>; padding-bottom:20px; padding-right:8px'>
<script>document.write("<input type=button name=wps_connect_failed class=wpsbutton value="+wlanwscpopup.button+" onclick=clickOKButton()>");</script>
</P>
</TD>
</TR></TABLE>
		<!--
	  </TD>
	</TR>
        <TR>
          <TD class=FUNNAME10 colspan=2>
	  	<script>
			if( wscresult == "1" )
				Capture(wlanwscpopup.success2);
			else if( wscresult == "2" )
				Capture(wlanwscpopup.fail2);
		</script>
	  </TD>
	</TR>
        <TR>
          <TD class=FUNNAME10 colspan=2><script>Capture(wlanwscpopup.result1)</script></TD>
	</TR>
        <TR>
          <TD class=FUNNAME10 colspan=2><script>Capture(wlanwscpopup.result2)</script></TD>
	</TR>
        <TR>
          <TD class=FUNNAME_CENTER colspan=2>
		<script>document.write("<input type=button value="+wlanwscpopup.button+" name=wps_connect_ok onclick=clickOKButton(this.form)>");</script>
	  </TD>
	  
	</TR>
</TABLE>
</TD>
</TR></TABLE>-->
