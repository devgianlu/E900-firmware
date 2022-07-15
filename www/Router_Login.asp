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

<!--script language="javascript" type="text/javascript" src="gn_filelink.js"></script-->
<script src=/common.js></script>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/share.js></SCRIPT>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/capsetup.js></SCRIPT>
<SCRIPT language=javascript type=text/javascript src=/<% get_lang(); %>_lang_pack/capwrt54g.js></SCRIPT>

<SCRIPT language=JavaScript>
document.title = session.title;	

<% web_include_file("md5_2.js"); %>

function en_value(data)
{
	var pseed2 = "";
	var buffer1 = data;
	var md5Str2 = "";
	var Length2 = data.length;

	if (Length2 < 10 )
	{
		buffer1 += "0";
		buffer1 += Length2;
	}
	else
	{
		buffer1 += Length2;
	}
	Length2 = Length2 + 2;
		
	for(var p = 0; p < 64; p++) {
		var tempCount = p % Length2;
		pseed2 += buffer1.substring(tempCount, tempCount + 1);
	}
	md5Str2 = hex_md5(pseed2);
		
	return md5Str2;
}

function to_submit(F)
{
	var en_pwd = en_value(F.http_passwd.value);
	F.http_passwd.value = en_pwd;
	F.submit();
}

function chk_keypress(e)
{
	var keycode = (window.event)? event.keyCode:e.which;
	var F = document.login;
	
	if ( keycode == 13 ) 
	{
	    to_submit(F);                                          //click the 'continue' button
	    
		if ( window.event )
		{
			window.event.returnValue = null;
			event.keyCode=0;
		}
		else
			e.preventDefault();
		return false;
	}
}

function valid_name2(I,M,flag)
{
	isascii(I,M);
}

function init()
{	
	if (window.opener != null)
	{
		window.opener.location.replace("/Router_Login.asp");
		window.close();
		return;
	}

	document.login.http_username.focus();
}

</SCRIPT>
</head>
<body id="blocked" onLoad="init()">
<div id="content">
<div class="h1">
<h1>
<span>
<script>Capture(session.title);</script>
</span>
</h1>
</div>
<div class="divider" style="margin-left:30px;margin-right:30px">
<span><img src="../image/layout/Divider.jpg" \> </span>
</div>
<div class="info-text">
<div class="formwrapper">
<form name=login method=<% get_http_method(); %> action="login.cgi" onKeyDown=chk_keypress(event) autocomplete="off">
<input type=hidden name=submit_button value="login">
<input type=hidden name=change_action>
<input type=hidden name=action value="Apply">
<input type=hidden name=wait_time value=19>
<input type=hidden name=submit_type>
  <div class="field"> <label for="password"><script>Capture(share.usrname1)</script>:</label> 
  <INPUT type=text maxlength="32" name="http_username" onBlur=valid_name2(this,"Password",SPACE_NO)></div>
  <div class="field"> <label for="password"><script>Capture(share.passwd)</script>:</label> 
  <INPUT type=password maxlength="64" name="http_passwd" onBlur=valid_name2(this,"Password",SPACE_NO)></div>
  <div class="error">
  <p>
  <script>
      var session_status = "<% nvram_get("session_status"); %>";
	  if (session_status == "4")
	  {
        Capture(pctrl.pwderrmsg2);
		document.write("<BR>");	
		Capture(session.loginagain);
	    document.login.http_passwd.focus();
	  }
	  if (session_status == "3")
	  {
        Capture(session.invlidlogin);
		document.write("<BR>");	
		Capture(session.tryagain);
	    document.login.http_passwd.focus();
	  }
	  else if(session_status == "2")
	  {
        Capture(session.timeout);
		document.write("<BR>");	
		Capture(session.loginagain);
	  }
      else if (session_status == "1")
	  {
        Capture(session.logout);
		document.write("<BR>");	
		Capture(session.loginagain);
	  }
	  else
	  {
		document.write("<BR>");	
	  }
   </script>
  </p>
  </div>
  <div class="button"><script>document.write("<a href='javascript:to_submit(document.forms[0])'>" + gn.login + "</a>");</script></div>
</form>
</div>
</div>
</div>
<!--.formwrapper--> 
<!--content-->
</body>
</html>
