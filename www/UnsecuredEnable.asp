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
document.title = share.wlwarning5_<% nvram_get("boot_hw_model"); %>;
agree_box = 0;
function to_submit(F)
{
	if(agree_box)
		F.submit();
}
function enable_disable_checkbox(F)
{
	if(agree_box)
	{
		//unchecked
		agree_box = 0;
		document.getElementById("checked").style.display = "none";
		document.getElementById("unchecked").style.display = "";
		//disabled
		document.getElementById("enableDIV").style.display = "none";
		document.getElementById("disableDIV").style.display = "";
	}
	else
	{
		//checked
		agree_box = 1;
		document.getElementById("checked").style.display = "";
		document.getElementById("unchecked").style.display = "none";
		//enable
		document.getElementById("enableDIV").style.display = "";
		document.getElementById("disableDIV").style.display = "none";
	}
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
function mouseover_continue()
{
	if(agree_box)
	{
		document.getElementById("enableDIV").style.display = "none";
		document.getElementById("enableDIV_hover").style.display = "";
	}
}
function mouseout_continue()
{
	if(agree_box)
	{
		document.getElementById("enableDIV").style.display = "";
		document.getElementById("enableDIV_hover").style.display = "none";
	}
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
	var lang = "<% nvram_get("detect_lang");%>";
	if(lang == "DE"){
			document.getElementById("install_image_text").style.font = "bold 10pt Arial";
			document.getElementById("install_image_text_hover").style.font = "bold 10pt Arial";
	}
	else if(lang == "RU" || lang == "PL")
	{
			document.getElementById("install_image_text").style.font = "bold 9pt Arial";
			document.getElementById("install_image_text_hover").style.font = "bold 9pt Arial";
	}
	else if(lang == "AR" && BrowserDetect.browser == "Explorer" )
	{
		document.getElementById("install_image_text").style.marginRight = "0px";
		document.getElementById("install_image_text_hover").style.marginRight = "0px";
	}
	ie6_fix_png()	
}


</SCRIPT>
</head>
<body id="blocked" onload=init()>
<div id="content">
<div class="h1">
<h1><span><script>Capture(wlsecwarn.netnotsec);</script>
</span>
</h1>
</div>
<div class="model2_<% nvram_get("boot_hw_model"); %>">
<img src="../image/layout/Unsecured_<% nvram_get("boot_hw_model"); %>_image.png"\> 
</div>
<div class="divider">
<span><img src="../image/layout/Divider.jpg" \> </span>
</div>
<div class="info-text">
<div class="icon">
<img src="../image/layout/Warning_icon.png" \>
</div>
<div class="info-test0">
<p><span><script>Capture(wlsecwarn.info25);</script></span></p>
</div>
<br><br>
<br><br>
<br>
<p><script>Capture(wlsecwarn.info26_<% nvram_get("boot_hw_model"); %>);Capture(wlsecwarn.featu_<% nvram_get("boot_hw_model"); %>);</script>.</p>
<br><br>
<div class="formwrapper">
<form name=UnsecuredEnable method=<% get_http_method(); %> action=UnsecuredEnable.cgi>
<input type=hidden name=submit_button value="UnsecuredEnable">
<input type=hidden name=change_action>
<input type=hidden name=gui_action value="Apply">
<input type=hidden name=next_url value="<% nvram_get("wl_warnenable_url"); %>">
<input type=hidden name=wait_time value=19>
<input type=hidden name=submit_type>
<div class="install_button" id="install_button"></div>
<div class="install_button_hover" id="install_button_hover" style="display:none"></div>
<br><br>
<div class="checkbox_over" id="checked" style="display:none"><script>document.write("<a href='javascript:enable_disable_checkbox(this.form)' ></a>");</script></a></div>
<div class="checkbox" id="unchecked" ><script>document.write("<a href='javascript:enable_disable_checkbox(this.form)'></a>");</script></a></div>
<div class="info-test2" >
<p><span><script>Capture(wlsecwarn.info27);</script>&nbsp;<b><script>Capture(wlsecwarn.info28);</script></b>.</span><br><script>Capture(wlsecwarn.info29);</script></p>
</div>
<br><br>
<br><br>
<div class="button" id="enableDIV" style="display:none"><script>document.write("<a href='javascript:to_submit(document.forms[0])'>" + sbutton.continue1 + "</a>");</script></div>
<div class="button_hover" id="enableDIV_hover" style="display:none"><script>document.write("<a href='javascript:to_submit(document.forms[0])'>" + sbutton.continue1 + "</a>");</script></div>
<div class="disabled_button" id="disableDIV"><script>document.write("<a><font color='#CCCCCC'>" + sbutton.continue1+"</font></a>")</script></div>
</form>
</div>
<br><br>
<div class="alt-view"><p></script><font face="Arial" style="font-size: 8pt" color="#FFFFFF">&nbsp;<script>Capture(wlsecwarn.lostcd);</script> &nbsp;</font><span><script>document.write("<a href='http://www.linksys.com'>" + wlsecwarn.clkhere + "</a>");</script><font face="Arial" style="font-size: 8pt" color="#FFFFFF">&nbsp;&nbsp;<script>Capture(wlsecwarn.info24);</script></font></span></p></div>
</div>
</div>
<!--.formwrapper--> 
<!--content-->
</body>
</html>
