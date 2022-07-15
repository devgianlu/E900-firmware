<html>
	<body>
		<script type="text/javascript">
			var close_session = "<% get_session_status(); %>";
			var tmp_web_page = "<% nvram_get("tmp_web_page"); %>"
			if ( close_session == "1" )
			{
				document.location.href = "index.asp";	
			}
			else
			{
			//	if (tmp_web_page != "")
			//	{
			//		document.location.href = tmp_web_page + ";session_id=<% nvram_get("session_key"); %>";
			//	}
			//	else
			//	{
				document.location.href = "index.asp;session_id=<% nvram_get("session_key"); %>";
			//	}
			}
		</script>
	</body>
</html>
