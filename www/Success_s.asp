<% web_include_file("copyright.asp"); %>
<html>
<head>
<% no_cache(); %>
<% charset(); %>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<SCRIPT language=JavaScript>
<% langpack(); %>
var close_session = "<% get_session_status(); %>";
var submit_button = '<% get_web_page_name(); %>';
var wait_time = '<% webs_get("wait_time"); %>';
var t1 = new Date().getTime();
function to_submit()
{
	if(submit_button == "")
		history.go(-1);
	else if(submit_button == 'WL_WEPTable.asp')
		self.close();
	else if(submit_button == 'Register_ok.asp'){
		if ( close_session == "1" )
		{
			    document.location.href =  "HotSpot_Admin.asp";
		}
		else
		{
			    document.location.href =  "HotSpot_Admin.asp" + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
	}
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
function auto_return()
{
	var t2 = new Date().getTime();
	//delay(wait_time*1000 - (t2-t1));
	DelayTime = wait_time * 1000 - (t2-t1);
	//choose_disable(document.success.action);
	if(DelayTime < 0)
		DelayTime = 0;
	setTimeout('returnpage()',DelayTime);
}

function returnpage()
{
//	document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
	if ( close_session == "1" )
	{
		    document.location.href = submit_button;
	}
	else
	{
		    document.location.href = submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
	}

}
function init()
{
	if(wait_time != "0" && wait_time != "" && auto_return == "1") {
		DelayTime = wait_time * 1000 ;
		setTimeout('returnpage()', DelayTime);		
	}
}
</SCRIPT>
</head>
<body bgcolor="white" onload=init()>
<form name=success>
<br><br><br><br>
<center>
<tr BGCOLOR="white">
<th><font face="Verdana" size=4  color="black"><script>Capture(other.setsuc)</script></font>
<p><p>
<script>
        if(wait_time != "0" && wait_time != "" && auto_return == "1") {
                document.write("<p><font face=Verdana size=2 color=black>" + succ.autoreturn);
        }
        else {
		document.write("<input type=button name=action" + " value=" + sbutton.continue1 + " onClick=to_submit()>");
	}
</script>

</th>
</tr></center>
</form>
</body>


