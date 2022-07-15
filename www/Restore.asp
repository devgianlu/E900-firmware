<html <% ui_position("dir", ""); %>><head><title>Restore Configuration</title>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<SCRIPT src="common.js"></SCRIPT>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capadmin.js"></SCRIPT>
</head>
<SCRIPT language=JavaScript>
document.title = bakres2.resconf;

function to_restore(F)
{
	var len = F.restore.value.length;
	var ext = new Array('.','c','f','g');
	if (F.restore.value == '')	{
//              alert('Please Select a File to Restore !');
                alert(bakres2.file2res);
		return false;
	}
	var IMAGE = F.restore.value.toLowerCase();
	for (i=0; i < 4; i++)	{
		if (ext[i] != IMAGE.charAt(len-4+i)){
//                      alert('Incorrect image file!');
                        alert(hupgrade.wrimage);
			return false;
		}
	}

	F.submit_button.value = "Restore";
        F.submit();
	
}

function init()
{
	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "restore.cgi", session_key, close_session);
}
</SCRIPT>
<FORM name=res method=post action=restore.cgi encType=multipart/form-data>
<input type=hidden name=submit_button>
<input type=hidden name=small_screen>
<input type=hidden name="wait_time" value="21">

<body onload=init()>
<center>
<BR><BR><BR><BR><BR><BR><BR>
<font face="Arial" style="font-size: 8pt"><script>Capture(bakres2.file2res)</script>:</font>&nbsp;&nbsp;&nbsp;<INPUT type=file name=restore size="20"><BR>
<script>document.write("<input  type=button name=restore_b value='" + adbutton.startrestore + "' onclick=to_restore(this.form)>");</script>
</center>
</body>
</html>
