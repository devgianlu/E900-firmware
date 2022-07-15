<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD>
<% no_cache(); %>
<% charset(); %>
<!--[if lt IE 7]>
	<script type="text/javascript" src="unitpngfix.js"></script>
<![endif]--> 
  <style type="text/css">/*<![CDATA[*/
        @import "main1<% ui_position("match", "_rtl"); %>.css";
    /*]]>*/</style>
  <script type="text/javascript" src="jquery.js"></script>
  <script type="text/javascript" src="main1.js"></script>
  <script language="javascript" type="text/javascript" src="/<% get_lang(); %>_lang_pack/filelink.js"></script>
<SCRIPT language=JavaScript>
document.title = share.welcomelinksys_<% nvram_get("boot_hw_model"); %>;


function to_close(F)
{
	window.opener = null;
	window.open('','_self');
	window.close();
}

function to_submit(F)
{
	F.submit();
}
function mouseover_install()
{
	document.getElementById("install_button").style.display = "none";
	document.getElementById("install_button_hover").style.display = "";
}
function mouseout_install()
{
	document.getElementById("install_button").style.display = "";
	document.getElementById("install_button_hover").style.display = "none";
}
function ie6_fix_png()
{
	if(navigator.appName == "Microsoft Internet Explorer")
	{
		var b_version=navigator.appVersion;
		var version=b_version.split(";");
		var trim_Version=version[1].replace(/[ ]/g,"");
		if(trim_Version=="MSIE6.0")
			pngfix();
	}
}
function init()
{
	var lang = "<%nvram_get("detect_lang");%>";

	if(lang == "EN" || lang == "AR")
	{
		document.getElementById( "info-text1-1" ).style.height = 70;
		document.getElementById( "info-text1-2" ).style.height = 70;
		if(lang == "AR" && BrowserDetect.browser == "Explorer" )
		{
			document.getElementById("install_image_text").style.marginRight = "0px";
			document.getElementById("install_image_text_hover").style.marginRight = "0px";
		}
	}
	else if(lang == "RU")
	{
		document.getElementById( "info-text1-1" ).style.height = 110;
		document.getElementById( "info-text1-2" ).style.height = 110;
		document.getElementById("install_image_text").style.font = "bold 9pt Arial";
		document.getElementById("install_image_text_hover").style.font = "bold 9pt Arial";
	}
	else if(lang == "SP" || lang == "PT" || lang == "IT" || lang == "DE" || lang == "NL" || lang == "PL")
	{
		document.getElementById( "info-text1-1" ).style.height = 90;
		document.getElementById( "info-text1-2" ).style.height = 90;
		if(lang == "DE"){
			document.getElementById("install_image_text").style.font = "bold 10pt Arial";
			document.getElementById("install_image_text_hover").style.font = "bold 10pt Arial";
		}
		else if (lang == "PL")
		{
			document.getElementById("install_image_text").style.font = "bold 9pt Arial";
			document.getElementById("install_image_text_hover").style.font = "bold 9pt Arial";
		}
	}
	else if(lang == "SW" || lang == "FR" || lang=="CA" || lang == "TR")
	{
		document.getElementById( "info-text1-1" ).style.height = 80;
		document.getElementById( "info-text1-2" ).style.height = 80;
	}
	ie6_fix_png();
}

</script>
</head>
<body id="blocked" onload=init()>
<div id="content">
<div class="h1">
<h1><span><script>Capture(wlsecwarn.welcto_<% nvram_get("boot_hw_model"); %>);</script>
</span>
</h1>
</div>
<div class="model1_<% nvram_get("boot_hw_model"); %>">
<br>
<img src="../image/layout/<% nvram_get("boot_hw_model"); %>_image.png"\> 
</div>
<div class="divider">
<span><img src="../image/layout/Divider.jpg" \> </span>
</div>
<div class="info-text">
<p><script>Capture(wlsecwarn.info7_<% nvram_get("boot_hw_model"); %>);</script></p>
<p><script>Capture(wlsecwarn.info8_<% nvram_get("boot_hw_model"); %>);</script></p>
<br>
<div class="info-text1" id="info-text1-1">
<div class="dt1">
<dt1><span><script>Capture(wlsecwarn.qaes);</script></span></dt1>
<div class="dt2">
<span><script>Capture(wlsecwarn.info9);</script></span>
</div>
</div>
<div class="dt1">
<dt1><span><script>Capture(wlsecwarn.wlmgt);</script></span></dt1>
<div class="dt2">
<span><script>Capture(wlsecwarn.info10);</script></span>
</div>
</div>
<% support_invmatch("GUEST_NETWORK_SUPPORT", "1", "<!--"); %>
<div class="dt1">
<dt1><span><script>Capture(newui.gacs);</script></span></dt1>
<div class="dt2">
<span><script>Capture(wlsecwarn.info11);</script></span>
</div>
</div>
<% support_invmatch("GUEST_NETWORK_SUPPORT", "1", "-->"); %>
</div>

<div class="info-text1" id="info-text1-2">
<% support_invmatch("CES_PARENTAL_CONTROL_SUPPORT", "1", "<!--"); %>
<div class="dt1">
<dt1><span><script>Capture(pctrl.pcontrol);</script></span></dt1>
<div class="dt2">
<span><script>Capture(wlsecwarn.info12);</script></span>
</div>
</div>
<% support_invmatch("CES_PARENTAL_CONTROL_SUPPORT", "1", "-->"); %>
<div class="dt1">
<dt1><span><script>Capture(wlsecwarn.netconn);</script></span></dt1>
<div class="dt2">
<span><script>Capture(wlsecwarn.info13);</script></span>
</div>
</div>
</div>
<div class="formwrapper">
<form name=Unsecured method=<% get_http_method(); %> action=Unsecured.cgi>
<input type=hidden name=submit_button value="Unsecured">
<input type=hidden name=change_action>
<input type=hidden name=gui_action value="Apply">
<input type=hidden name=next_url value="<% nvram_get("wl_warn_url"); %>">
<div class="install_button" id="install_button"></div>
<div class="install_button_hover" id="install_button_hover" style="display:none"></div>
</form>
</div>
<div class="alt-view"><p><span><script>document.write("<a href='javascript:to_submit(document.forms[0])'>" + wlsecwarn.info15 + "</a>");</script><font face="Arial" style="font-size: 8pt" color="#FFFFFF">&nbsp;&nbsp;(<script>Capture(wlsecwarn.info16);</script>)</font></span></p></div>
<br><br>
<div class="alt-view"><p></script><font face="Arial" style="font-size: 8pt" color="#FFFFFF">&nbsp;<script>Capture(wlsecwarn.lostcd);</script> &nbsp;</font><span><script>document.write("<a href='http://www.linksys.com'>" + wlsecwarn.clkhere + "</a>");</script><font face="Arial" style="font-size: 8pt" color="#FFFFFF">&nbsp;&nbsp;<script>Capture(wlsecwarn.info24);</script></font></span></p></div>
</div>
</div>
<!--.formwrapper--> 
<!--content-->
</body>
</html>
