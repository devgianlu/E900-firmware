<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Port Triggering</TITLE>
<% no_cache(); %>
<% charset(); %>  
<% web_include_file("filelink.asp"); %>
<style fprolloverstyle>
.BLANKSPAN
{
	padding-left:10px;
	padding-right:10px;
	padding-bottom:3px;
	padding-top:3px;
	text-align:center;
	color:#ffffff;
}
</style>
<SCRIPT language=JavaScript>
document.title = trigger2.ptrigger;
function to_submit(F)
{
     for (var i = 0; i < 10;i++)
            for(var j = i+1; j < 10; j++)
        {
                if(((eval("F.i_from"+i+".value") > 0) ||
                (eval("F.i_to"+i+".value") > 0)) &&
                ((eval("F.i_from"+j+".value") > 0) ||
                (eval("F.i_to"+j+".value") > 0)))
                {
                        if(!check_port(parseInt(eval("F.i_from"+i+".value")),
                                parseInt(eval("F.i_to"+i+".value")),
                                parseInt(eval("F.i_from"+j+".value")),
                                parseInt(eval("F.i_to"+j+".value"))))
                        {
                                    alert(errmsg.err74);
                                    return;
                            }
		 }
                if(((eval("F.o_from"+i+".value") > 0) ||
                (eval("F.o_to"+i+".value") > 0)) &&
                ((eval("F.o_from"+j+".value") > 0) ||
                (eval("F.o_to"+j+".value") > 0)))
                {
                        if(!check_port(parseInt(eval("F.o_from"+i+".value")),
                                parseInt(eval("F.o_to"+i+".value")),
                                parseInt(eval("F.o_from"+j+".value")),
                                parseInt(eval("F.o_to"+j+".value"))))
                        {
                                    alert(errmsg.err74);
                                    return;
                            }
                }
	    
		if((parseInt(eval("F.i_from"+i+".value")) > parseInt(eval("F.i_to"+i+".value"))) && eval("F.enable"+i+".checked"))
	    	{ 
			alert(errmsg.err51);
			eval("F.i_from"+i).focus();
			return;
	    	}	
		if((parseInt(eval("F.o_from"+i+".value")) > parseInt(eval("F.o_to"+i+".value"))) && eval("F.enable"+i+".checked"))
	    	{ 
			alert(errmsg.err51);
			eval("F.o_from"+i).focus();
			return;
	    	}	
        }


	F.submit_button.value = "Triggering";
	F.gui_action.value = "Apply";
       	F.submit();
}

function init()
{
	var swmode = '<% nvram_get("switch_mode");%>';
	var protocolWan = '<% nvram_get("wan_proto");%>';
	if( swmode == 1)
		alert(share.brdgmwn);
	else if( protocolWan == "dslite" ){
		alert (share.dslitewn);
	}

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=trigger action=apply.cgi method=<% get_http_method(); %>>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name=port_trigger value="10">
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,trigger2.ptrigger);</script></TR>

       <TR><script>draw_table(SUBFUN,"");</script>
	    <TD class=FUNNAME_CENTER colspan=2>
            <TABLE class=BORDERTABLE1 align="center">
              <TBODY>
              <TR>
                <td width="25%" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style=" border-bottom-style: none; border-bottom-width: medium" bordercolor="#5b5b5b">
		<font face="Arial" style="font-size: 8pt"><B><script>Capture(portforward.appname)</script></B></font></td>
                <td width="26%" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style=" border-bottom-style: none; border-bottom-width: medium" bordercolor="#5b5b5b">
		<font face="Arial" style="font-size: 8pt"><B><script>Capture(trigger2.trirange)</script></B></font></td>
                <td width="26%" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style=" border-bottom-style: none; border-bottom-width: medium" bordercolor="#5b5b5b">
		<font face="Arial" style="font-size: 8pt"><B><script>Capture(trigger2.forrange)</script></B></font></td>
		<td bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style=" border-bottom-style: none; border-bottom-width: medium" bordercolor="#5b5b5b">
		<font face="Arial" style="font-size: 8pt"><B><script>Capture(share.enabled)</script></B></font></td>
              </TR>
            
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name0 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","0"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from0 value='<% port_trigger_table("i_from","0"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to0 value='<% port_trigger_table("i_to","0"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from0 value='<% port_trigger_table("o_from","0"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to0 value='<% port_trigger_table("o_to","0"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable0 value=on <% port_trigger_table("enable","0"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name1 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","1"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from1 value='<% port_trigger_table("i_from","1"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to1 value='<% port_trigger_table("i_to","1"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from1 value='<% port_trigger_table("o_from","1"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to1 value='<% port_trigger_table("o_to","1"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable1 value=on <% port_trigger_table("enable","1"); %>></TD>    
              </TR> 
             
	     	      <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name2 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","2"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from2 value='<% port_trigger_table("i_from","2"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to2 value='<% port_trigger_table("i_to","2"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from2 value='<% port_trigger_table("o_from","2"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to2 value='<% port_trigger_table("o_to","2"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable2 value=on <% port_trigger_table("enable","2"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name3 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","3"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from3 value='<% port_trigger_table("i_from","3"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to3 value='<% port_trigger_table("i_to","3"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from3 value='<% port_trigger_table("o_from","3"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to3 value='<% port_trigger_table("o_to","3"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable3 value=on <% port_trigger_table("enable","3"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name4 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","4"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from4 value='<% port_trigger_table("i_from","4"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to4 value='<% port_trigger_table("i_to","4"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from4 value='<% port_trigger_table("o_from","4"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to4 value='<% port_trigger_table("o_to","4"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable4 value=on <% port_trigger_table("enable","4"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name5 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","5"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from5 value='<% port_trigger_table("i_from","5"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to5 value='<% port_trigger_table("i_to","5"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from5 value='<% port_trigger_table("o_from","5"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to5 value='<% port_trigger_table("o_to","5"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable5 value=on <% port_trigger_table("enable","5"); %>></TD>    
              </TR> 
 							<TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name6 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","6"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from6 value='<% port_trigger_table("i_from","6"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to6 value='<% port_trigger_table("i_to","6"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from6 value='<% port_trigger_table("o_from","6"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to6 value='<% port_trigger_table("o_to","6"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable6 value=on <% port_trigger_table("enable","6"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name7 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","7"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from7 value='<% port_trigger_table("i_from","7"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to7 value='<% port_trigger_table("i_to","7"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from7 value='<% port_trigger_table("o_from","7"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to7 value='<% port_trigger_table("o_to","7"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable7 value=on <% port_trigger_table("enable","7"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name8 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","8"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from8 value='<% port_trigger_table("i_from","8"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to8 value='<% port_trigger_table("i_to","8"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from8 value='<% port_trigger_table("o_from","8"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to8 value='<% port_trigger_table("o_to","8"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable8 value=on <% port_trigger_table("enable","8"); %>></TD>    
              </TR> 
              <TR>
                <TD align=middle width=25% height=25><FONT size=2><INPUT class=num maxLength=20 size=12 name=name9 onBlur=valid_name(this,"Name") value='<% port_trigger_table("name","9"); %>'></FONT></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=i_from9 value='<% port_trigger_table("i_from","9"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=i_to9 value='<% port_trigger_table("i_to","9"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle width=26% height=25><INPUT class=num maxLength=5 style="width:38" name=o_from9 value='<% port_trigger_table("o_from","9"); %>' onBlur=valid_range(this,0,65535,"Port")> <script>Capture(portforward.to)</script>
                                                     <INPUT class=num maxLength=5 style="width:38" name=o_to9 value='<% port_trigger_table("o_to","9"); %>' onBlur=valid_range(this,0,65535,"Port")></TD>
                <TD align=middle height=25> <INPUT type=checkbox name=enable9 value=on <% port_trigger_table("enable","9"); %>></TD>    
              </TR> 


              </TBODY></TABLE></TD></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
