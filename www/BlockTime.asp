<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE></TITLE>
<% no_cache(); %>
<% charset(); %>
<% nvram_match("device_view_type","1","<!--"); %>
  <style type="text/css">/*<![CDATA[*/
	@import "main<% ui_position("match", "_rtl"); %>.css";
    /*]]>*/</style>
  <script type="text/javascript" src="jquery.js"></script>
  <script type="text/javascript" src="main.js"></script>
<% nvram_match("device_view_type","1","-->"); %>
<% nvram_invmatch("device_view_type","1","<!--"); %>
  <style type="text/css">/*<![CDATA[*/
	@import "mobile/styles/main.css";
  /*]]>*/</style>
  <script type="text/javascript" src="mobile/scripts/jquery.js"></script>
  <script type="text/javascript" src="mobile/scripts/main.js"></script>
  <meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
  <% nvram_invmatch("device_view_type","1","-->"); %>
  <script language="javascript" type="text/javascript" src="gn_filelink.js"></script>
<script language=JavaScript>

var device_type = '<% nvram_get("device_view_type"); %>';
document.title = hndmsg.inetblock;
//document.onkeydown = onInputKeydown;
/*
function onInputKeydown(event)
{
	if(typeof event == "undefined")
	{
		return handleKeyDown(window.event);
	}
	else
	{
		return handleKeyDown(event);
	}

}

function handleKeyDown(event)
{
	if(event.keyCode == 13)
	{
		return to_submit(document.login);
	}

	return true;

}
*/
/*function setCookie(value, expiredays)*/
function setCookie()
{
	/*when current login page is in mobile state, and the "alt-view" is "Desktop view,
	device_type should be 1, so when click "Desktop view", set cookie mobile_view_type
	to 2. otherwise set cookie to 1*/
	if (device_type == '1')
		document.cookie = "mobile_view_type=2";
	else
		document.cookie = "mobile_view_type=1";

	if (document.login.HND_block_url.value)
		window.location.replace(document.login.HND_block_url.value);	
	else
		window.location.replace("BlockTime.asp");

}

function to_submit(F)
{
//	F.gui_action.value='Apply';
//	F.submit_button.value = "hndUnBlock";
	F.submit();
}

function valid_name2(I,M,flag)
{
	isascii(I,M);
}

function init()
{
}
</script>
</head>
<body id="blocked" onload=init()>
<div id="content">
<div class="h1">
<h1><span><script>Capture(hndmsg.inetblock)</script>
</span>
</h1>
</div>
<% nvram_match("device_view_type","1","<!--"); %>
<div class="divider">
<span><img src="../image/layout/Divider.jpg" \> </span>
</div>
<% nvram_match("device_view_type","1","-->"); %>
<div class="info-text">
<p><span><script>Capture(hndmsg.timeblock)</script></span></p>
<div class="formwrapper">
<form name=login method=<% get_http_method(); %> action=hndUnblock.cgi autocomplete="off">
<input type=hidden name=submit_button value="hndUnBlock">
<input type=hidden name=change_action>
<input type=hidden name=gui_action value="Apply">
<input type=hidden name=HNDRedirect>
<input type=hidden name=HND_block_url value='<% nvram_get("hnd_block_url"); %>'>
<input type=hidden name=HND_block_mac value='<% nvram_get("hnd_block_mac"); %>'>
<input type=hidden name=HND_block_ip value='<% nvram_get("hnd_block_ip"); %>'>
<input type=hidden name=HND_block_policy value='<% nvram_get("hnd_block_policy"); %>'>
<input type=hidden name=HND_block_viewtype value='<% nvram_get("device_view_type"); %>'>
<input type=hidden name=HND_block_reason value=0 >

<input type=hidden name=wait_time value=19>
<input type=hidden name=submit_type>
  <div class="field"> <label for="password"><script>Capture(share.passwd)</script>:</label> 
  <INPUT type=password maxlength="32"  name="HND_password" onBlur=valid_name2(this,"Password",SPACE_NO)>
</div>
  <div class="error">
<p>
<script>
var deny='<% nvram_get("hnd_password_deny"); %>';
if(deny == '1')
	Capture(hndmsg.errpwd)
else
	document.write("<BR>");
	document.login.HND_password.focus();
</script>
</p>
  </div>
<div class="button"><p></p><script>document.write("<a href='javascript:to_submit(document.forms[0])'>" + hndmsg.unblock + "</a>");</script></div>
</form>
</div>
<% nvram_else_selmatch("device_view_type","1","","<!--"); %>
<div class="alt-view"><p><span><script>document.write("<a href='javascript:setCookie()'>" + 'Desktop view' + "</a>");</script></span></p></div>
<% nvram_else_selmatch("device_view_type","1","","-->"); %>
<% nvram_else_selmatch("device_view_type","2","","<!--"); %>
<div class="alt-view"><p><span><script>document.write("<a href='javascript:setCookie()'>" + 'Mobile view' + "</a>");</script></span></p></div>
<% nvram_else_selmatch("device_view_type","2","","-->"); %>
<!--.formwrapper--> </div>
<!--#content-->
</body>
</html>
