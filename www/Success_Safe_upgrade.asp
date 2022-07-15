<html>
<head>
<% no_cache(); %>
<% charset(); %>
<SCRIPT language=JavaScript>
<% langpack(); %>
function returnpage()
{
	var close_session = "<% get_session_status(); %>";
	if ( close_session == "1" )
	{
		        document.location.href = "Upgrade.asp";
	}
	else
	{
		        document.location.href = "Upgrade.asp;session_id=<% nvram_get("session_key"); %>";
	}
}
function init()
{
 var wait_time = 10;
       if(wait_time != "0" && wait_time != "") {
                DelayTime = wait_time * 1000 ;
                setTimeout('returnpage()', DelayTime);          
        }
}
</SCRIPT>
</head>
<body bgcolor="black" onload=init()>
<form name=success>
<center><table BORDER=0 CELLSPACING=0 CELLPADDING=0 WIDTH=557 >
<tr BGCOLOR="white">
<th HEIGHT=400><font face="Verdana" size=4 color="red"><script>document.write(succ.interrupt_desc);</script></font>
<p><font face="Verdana" size="2" color="black">
<script>
document.write(succ.return_desc);
</script>
</font>
</th>
</tr>
</table></center>
</body>
</form>
