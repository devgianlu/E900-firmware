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
</script>
</head>
<body id="blocked" onload=ie6_fix_png()>
<div id="content">
<div class="h1">
<h1><span><script>Capture(wlsecwarn.setcc);</script>
</span>
</h1>
</div>
<div class="model3">
<img src="../image/layout/CC_icon.png" \> 
</div>
<div class="divider">
<span><img src="../image/layout/Divider.jpg" \> </span>
</div>
<div class="info-text">
<dt><span><script>Capture(wlsecwarn.info17);</script>.</span></dt>
<br><br>
<img src="../image/layout/CD_image.png">
<br><br>
<dt><span><script>Capture(wlsecwarn.win);</script></span></dt>
<div class="info-test3">
<p><span><b>1.</b> <script>Capture(wlsecwarn.info18_<% nvram_get("boot_hw_model"); %>);</script></span></p>
<p><span><b>2.</b> <script>Capture(wlsecwarn.info19);</script>&nbsp;<b><script>Capture(wlsecwarn.info20);</script></b></span></p>
<p><span id=info21_text><font style="font-size: 8pt;">
	<script>
		var lang = "<%nvram_get("detect_lang");%>";
		if((BrowserDetect.browser != "Firefox" && BrowserDetect.browser != "Safari") || lang != "AR")
		{		
			document.getElementById("info21_text").style.fontStyle="italic";
		}
		Capture(wlsecwarn.info21);
	</script></font></span></p>
</div>
<br>
<div class="line">
<img src="../image/layout/line.png" \>
</div>
<br>
<dt><span><script>Capture(wlsecwarn.sfmac);</script></span></dt>
<div class="info-test3">
<p><span><b>1.</b> <script>Capture(wlsecwarn.info18_<% nvram_get("boot_hw_model"); %>);</script></span></p>
<p><span><b>2.</b> <script>Capture(wlsecwarn.info22);</script></span></p>
<p><span><b>3.</b> <script>Capture(wlsecwarn.info23);</script>&nbsp;<b><script>Capture(wlsecwarn.setup);</script></b>&nbsp;<script>Capture(wlsecwarn.icon);</script>.</span></p>
</div>
<br><br>
<div class="alt-view"><p></script><font face="Arial" style="font-size: 8pt" color="#FFFFFF"><script>Capture(wlsecwarn.lostcd);</script> &nbsp;</font><span><script>document.write("<a href='http://www.linksys.com'>" + wlsecwarn.clkhere + "</a>");</script><font face="Arial" style="font-size: 8pt" color="#FFFFFF">&nbsp;&nbsp;<script>Capture(wlsecwarn.info24);</script></font></span></p></div>
</div>
</div>
<!--.formwrapper--> 
<!--content-->
</body>
</html>
