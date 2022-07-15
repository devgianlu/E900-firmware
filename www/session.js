function init_form_session_key(F, cgi_action, session_key, close_session)
{
	if (close_session == "1")
	{
		F.action = cgi_action;
	}
	else
	{
		F.action = cgi_action + ";session_id=" + session_key;
	}
}
