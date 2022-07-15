<% web_include_file("copyright.asp"); %>
<html>
<head>
<% no_cache(); %>
<% charset(); %>
<script src="common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=JavaScript>
var submit_button = '<% get_web_page_name(); %>';
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";

function to_submit()
{
	if(submit_button == "")
		history.go(-1);
	else if(submit_button == "WL_WEPTable.asp")
		self.close();
	else
	{
		if ( close_session == "1" )
		{
	        document.location.href =  submit_button;
	    }
		else
	    {
			document.location.href =  submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
	}
}
</SCRIPT>
</head>
<body bgcolor="black">
<form>
<center><table BORDER=0 CELLSPACING=0 CELLPADDING=0 WIDTH=557 >
<tr BGCOLOR="white">
<th HEIGHT=400><font face="Verdana" size=4 color="red"><script>Capture(fail.msg)</script></font>
<p><p>

<script>document.write("<input type=button name=action OnClick=to_submit() value=\"" + sbutton.continue1 + "\">");</script>

</th>
</tr>
</table></center>
</form>
</body>

