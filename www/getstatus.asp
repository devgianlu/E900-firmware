<HTML><HEAD><TITLE>GET WSC STATUS</TITLE>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<script src="common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
</HEAD>
<script language=javascript>
re1 = /<br>/gi;
str = wlantopmenu.wsc.replace(re1," ");
document.title = str;
var close_session = "<% get_session_status(); %>";
var session_key = "<% nvram_get("session_key"); %>";
var delay_time = 1300;
var tmp_width=0;
var wscresult = "<% nvram_get("wsc_result"); %>";
function progress(){
        var per;

<% support_match("CONFIG_WSCCMD", "y", "/*"); %>
	if("<% nvram_get("wsc_method"); %>" == "2" || "<% nvram_get("wsc_sta_pin"); %>" != "0")
	{
		parent.document.wireless.wps_connect_cancel.disabled = false;
	}
<% support_match("CONFIG_WSCCMD", "y", "*/"); %>
<% support_match("CONFIG_WPS", "y", "/*"); %>
	if("<% nvram_get("wps_method"); %>" == "2" || "<% nvram_get("wps_sta_pin"); %>" != "00000000")
	{
		parent.document.wireless.wps_connect_cancel.disabled = false;
	}
<% support_match("CONFIG_WPS", "y", "*/"); %>

	if ( parent.document.wireless.wscresult.value != wscresult && wscresult == "4") 
	{
		parent.document.getElementById("txt1").innerHTML = wlanwscpopup.connect ;
		parent.document.getElementById("txt2").innerHTML = "" ; 
		 
	}
        parent.document.getElementById("left").bgColor="#66CC66";
        
        if ( wscresult == "3" )
                tmp_width=parseInt("<% nvram_get("wsc_barwidth"); %>");
        else if ( wscresult == "4" ) 
                tmp_width=parseInt((parseInt("<% nvram_get("wsc_steps"); %>")+1)*30);
        
	if(wscresult == "1" || wscresult == "2")
        {
               	tmp_width=parseInt("<% nvram_get("wsc_barwidth"); %>")+300;
                if(tmp_width > 300) tmp_width = 300;
                parent.document.getElementById("left").style.width=tmp_width;
                parent.document.getElementById("right").style.width=300-tmp_width;
        	parent.document.getElementById("percent").innerHTML= "&nbsp;&nbsp;99%";
                if(tmp_width == 300)
				{
					if ( close_session == "1" )
					{
						setTimeout("parent.location.href='wps_connect_result.asp';",3000);
					}
					else
					{
						setTimeout("parent.location.href='wps_connect_result.asp;session_id=<% nvram_get("session_key"); %>';",3000);
					}
				}
		else
                	setTimeout(wn_reload,500);
        }
	else
	{
		if(tmp_width >= 300) tmp_width = 299;
        	//document.getElementById("left").style.width=tmp_width;
	        //document.getElementById("right").style.width=300-tmp_width;
        	parent.document.getElementById("left").style.width=tmp_width;
	        parent.document.getElementById("right").style.width=300-tmp_width;
		var tmp = (tmp_width*100)/300;
	        per = parseInt(tmp);
        	//document.getElementById("percent").innerHTML= "&nbsp;&nbsp;" + per + "%";
	        parent.document.getElementById("percent").innerHTML= "&nbsp;&nbsp;" + per + "%";

        	if(per >= 94)delay_time = 3000;

	        if (per == 98)
                	tmp_width = 294;
        	else
	        {
        	        if(wscresult == "3")
                	        tmp_width = parseInt(tmp_width) + 5;
	        }	
        	if(wscresult == "4")
                	iTimerID = window.setTimeout(wn_reload,500);
		else
        	        iTimerID = window.setTimeout(wn_reload,2000);
	}

	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function wn_reload()
{
	document.form1.wsc_barwidth.value = tmp_width ; 
	document.form1.submit_button.value="getstatus";
	document.form1.submit_type.value="wsc_search";
	document.form1.change_action.value = "gozila_cgi";
	document.form1.next_page.value="getstatus.asp";
	document.form1.submit();
	
}
</script>
<BODY onload="progress()">
<FORM name=form1 method="<% get_http_method(); %>" action=apply.cgi >
<input type=hidden name=submit_button value="wps_search_device">
<input type=hidden name=gui_action value="Apply">
<input type=hidden name=submit_type >
<input type=hidden name=change_action >
<input type=hidden name=next_page >
<input type=hidden name=wsc_barwidth>
<TABLE cellspacing=0>
<!--TR><TD class=wpsfont style='padding-top:20px'>
                <TABLE>
                    <TR>
                        <TD id=left class=PROC_STATUS></TD>
                        <TD id=right class=PROC_STATUS1></TD>
                        <TD id=percent></TD>
                    </TR>
                </TABLE>
</TD></TR-->
</TABLE>
</FORM>
</BODY>
</HTML>
