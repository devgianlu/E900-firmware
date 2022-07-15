<% web_include_file("copyright.asp"); %>
<html>
<head>
<% no_cache(); %>
<% charset(); %>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>

<SCRIPT language=JavaScript>
<% langpack(); %>
var close_session = "<% get_session_status(); %>";
var submit_button = '<% get_web_page_name(); %>';
var wait_time = '<% webs_get("wait_time"); %>';
var continue_button = 1;
var t1 = new Date().getTime();
function to_submit()
{
	var t2 = new Date().getTime();

	if(submit_button == "")
		history.go(-1);
	else if(submit_button == "WL_WEPTable.asp")
		self.close();
//IR-B0010060 start: Router should redirect to the webpage blocked by HND after performing "admin unlock"
    else if(submit_button == "tmPCBlock.asp") {
		if ( close_session == "1" )
		{
			document.location.href = "<% nvram_get("TM_block_url"); %>";
		}
		else
		{
			document.location.href = "<% nvram_get("TM_block_url"); %>" + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
        document.location.href = '<% nvram_get("TM_block_url"); %>';
    }
//IR-B0010060 end
	else {
		if(wait_time != "0" && wait_time != "") {
			//delay(wait_time*1000 - (t2-t1));
			DelayTime = wait_time * 1000 - (t2-t1);
			choose_disable(document.success.action);
			if(DelayTime < 0)
				DelayTime = 0;
			setTimeout('returnpage()',DelayTime);
		}
		else {
		    var bridge_mode = "<% nvram_get("switch_mode");%>";
		    if(bridge_mode == "1")			
			{
				if ( close_session == "1" )
				{
					    document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
				}
				else
				{
					document.location.href =  "<% get_http_prefix(""); %>"+submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
				}
			}
		    else
		    {
			var found=false;
			var ii;
			for(ii=0; ii<submit_button.length; ii++){
			    if(submit_button.substr(ii,1)=="/"){
					if ( close_session == "1" )
					{
						document.location.href = submit_button.substr(ii+1);
					}
					else
					{
						document.location.href = submit_button.substr(ii+1) + ";session_id=" + "<% nvram_get("session_key"); %>";
					}

					found = true;
					break;
			    }
			}
			if(!found)
			{
				if ( close_session == "1" )
				{
					document.location.href = submit_button;
				}
				else
				{
					document.location.href = submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
				}

			}
		    }
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
    var bridge_mode = "<% nvram_get("switch_mode");%>";
    if(bridge_mode == "1")			
	{
		if ( close_session == "1" )
		{
			    document.location.href =  "<% get_http_prefix(""); %>"+submit_button;
		}
		else
		{
			document.location.href =  "<% get_http_prefix(""); %>"+submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
		}
	}
    else
    {
	var found=false;
	var ii;
	for(ii=0; ii<submit_button.length; ii++){
	    if(submit_button.substr(ii,1)=="/"){
			if ( close_session == "1" )
			{
				    document.location.href = submit_button.substr(ii+1);
			}
			else
			{
				    document.location.href = submit_button.substr(ii+1) + ";session_id=" + "<% nvram_get("session_key"); %>";
			}

			break;
	    }
	}
	if(!found)
	{
		if ( close_session == "1" )
		{
			    document.location.href = submit_button;
		}
		else
		{
			    document.location.href = submit_button + ";session_id=" + "<% nvram_get("session_key"); %>";
		}

	}
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
<body bgcolor="black" onload=init()>
<form name=success>
<center><table BORDER=0 CELLSPACING=0 CELLPADDING=0 WIDTH=657 >
<tr BGCOLOR="white">
<th HEIGHT=400><font face="Verdana" size=4 color="black">
<script> 
	Capture(other.needrb);
</script>	
</font>
<script>
	if(wait_time != "0" && wait_time != "" && auto_return == "1") {
		document.write("<p><font face=Verdana size=2 color=black>" + succ.autoreturn);
	}
	else {
		document.write("<p><p><input type=button name=action" + " value=" + sbutton.continue1 + " onClick=to_submit()>");
	}
</script>
</th>
</tr>
</table></center>
</form>
</body>

