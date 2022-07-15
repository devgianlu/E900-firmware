<HTML><HEAD><TITLE>Redirect</TITLE>
<SCRIPT language=JavaScript>
function init()
{
	var host = '<% nvram_get("hnd_unblock_url"); %>';
	window.location = host;
}
</SCRIPT></HEAD><BODY onload=init()></BODY></HTML>
