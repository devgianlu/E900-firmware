<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Advanced Routing</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=javascript>
document.title = topmenu.advrouting;
var route_win = null;
var del_route = new Array("0","0","0","0","0","0","0","0","0","0",
                          "0","0","0","0","0","0","0","0","0","0");	//Sync form e2500-108 by seal
var route_names = [ <% static_route_setting("all_name","");%> ];
var route_infos = [ <% static_route_setting("all_route","");%> ];

function ViewRoute()
{
	if ( close_session == "1" )
	{
		route_win = self.open('RouteTable.asp', 'Route', 'alwaysRaised,resizable,scrollbars,width=700,height=360');
	}
	else
	{
		route_win = self.open('RouteTable.asp;session_id=<% nvram_get("session_key"); %>', 'Route', 'alwaysRaised,resizable,scrollbars,width=700,height=360');
	}

	route_win.focus();
}
function DeleteEntry(F)
{
//      if(confirm("Delete the Entry?")){
        //if(confirm(errmsg2.err1)){
/*
		F.submit_button.value = "Routing";
		F.change_action.value = "gozila_cgi";
		F.submit_type.value = 'del';
		F.submit();
*/
		//Patch for IR-B0014311
	var selected = F.route_page.selectedIndex;
	del_route[selected] = "1";
	route_names[selected] = "";
	route_infos[selected] = "0.0.0.0:0.0.0.0:0.0.0.0:0:br0";
		F.route_page.options[F.route_page.selectedIndex].text = (F.route_page.selectedIndex+1) + " ( )";
		F.route_name.value = "";
		F.route_ipaddr_0.value = 0;
		F.route_ipaddr_1.value = 0;
		F.route_ipaddr_2.value = 0;
		F.route_ipaddr_3.value = 0;
		F.route_netmask_0.value = 0;
		F.route_netmask_1.value = 0;
		F.route_netmask_2.value = 0;
		F.route_netmask_3.value = 0;
		F.route_gateway_0.value = 0;
		F.route_gateway_1.value = 0;
		F.route_gateway_2.value = 0;
		F.route_gateway_3.value = 0;
		F.route_ifname.selectedIndex = 0;
	//}
}
function SelNAT(num,F)
{
	if(num == "gateway") {
		choose_disable(F.dr_setting[0]);
		choose_disable(F.dr_setting[1]);
	}
	else {
		choose_enable(F.dr_setting[0]);
		choose_enable(F.dr_setting[1]);
	}
}

function valid_gateway(F)
{
	var wan_ip = "<% nvram_get("wan_ipaddr"); %>";
	var lan_ip = "<% nvram_get("lan_ipaddr"); %>";
	var lan_mask = "<% nvram_get("lan_netmask"); %>";
	var wan_mask = "<% nvram_get("wan_netmask"); %>";
	
	var lan_ip1 = new Array(4); 
	lan_ip1 = lan_ip.split('.');
	var wan_ip1 = new Array(4); 
	wan_ip1 = wan_ip.split('.');
	var lan_mask1 = new Array(4); 
	lan_mask1 = lan_mask.split('.');
	var wan_mask1 = new Array(4); 
	wan_mask1 = wan_mask.split('.');
	
	var gateway_ip = F.route_gateway_0.value + "." + F.route_gateway_1.value+ "." + F.route_gateway_2.value+ "." + F.route_gateway_3.value;
	var dest_ip = F.route_ipaddr_0.value + "." + F.route_ipaddr_1.value+ "." + F.route_ipaddr_2.value+ "." + F.route_ipaddr_3.value;
	var dest_mask = F.route_netmask_0.value + "." + F.route_netmask_1.value+ "." + F.route_netmask_2.value+ "." + F.route_netmask_3.value;
	if(dest_ip == "0.0.0.0") 
	{
		if((dest_mask == "0.0.0.0") 
			&& (gateway_ip == "0.0.0.0"))
		{
			return true;
		}
		else
		{
			alert(errmsg.err76);	
			return false;
		}
	}
	
	if((wan_ip == "0.0.0.0") 
		&& (F.route_ifname.options[F.route_ifname.selectedIndex].value == "wan"))
	{
		alert(errmsg.err76);	
		return false;
	}
	
	if(((lan_ip1[0] & lan_mask1[0]) == (F.route_ipaddr_0.value & lan_mask1[0])) 
		&& ((lan_ip1[1] & lan_mask1[1]) == (F.route_ipaddr_1.value & lan_mask1[1]))
		&& ((lan_ip1[2] & lan_mask1[2]) == (F.route_ipaddr_2.value & lan_mask1[2]))
		&& ((lan_ip1[3] & lan_mask1[3]) == (F.route_ipaddr_3.value & lan_mask1[3])))
	{
		alert(errmsg.err76);	
		return false;
	}
	
	if(((lan_ip1[0] & F.route_netmask_0.value) == (F.route_ipaddr_0.value & F.route_netmask_0.value)) 
		&& ((lan_ip1[1] & F.route_netmask_1.value) == (F.route_ipaddr_1.value & F.route_netmask_1.value))
		&& ((lan_ip1[2] & F.route_netmask_2.value) == (F.route_ipaddr_2.value & F.route_netmask_2.value))
		&& ((lan_ip1[3] & F.route_netmask_3.value) == (F.route_ipaddr_3.value & F.route_netmask_3.value)))
	{
		alert(errmsg.err76);	
		return false;
	}
	
	if(wan_ip != "0.0.0.0")
	{
		if(((wan_ip1[0] & wan_mask1[0]) == (F.route_ipaddr_0.value & wan_mask1[0])) 
			&& ((wan_ip1[1] & wan_mask1[1]) == (F.route_ipaddr_1.value & wan_mask1[1]))
			&& ((wan_ip1[2] & wan_mask1[2]) == (F.route_ipaddr_2.value & wan_mask1[2]))
			&& ((wan_ip1[3] & wan_mask1[3]) == (F.route_ipaddr_3.value & wan_mask1[3])))
		{
			alert(errmsg.err76);	
			return false;
		}
	
		if(((wan_ip1[0] & F.route_netmask_0.value) == (F.route_ipaddr_0.value & F.route_netmask_0.value)) 
			&& ((wan_ip1[1] & F.route_netmask_1.value) == (F.route_ipaddr_1.value & F.route_netmask_1.value))
			&& ((wan_ip1[2] & F.route_netmask_2.value) == (F.route_ipaddr_2.value & F.route_netmask_2.value))
			&& ((wan_ip1[3] & F.route_netmask_3.value) == (F.route_ipaddr_3.value & F.route_netmask_3.value)))
		{
			alert(errmsg.err76);		
			return false;
		}
	}
	
	if(F.route_ifname.options[F.route_ifname.selectedIndex].value == "lan")
	{
		if(gateway_ip == lan_ip)
		{
			alert(errmsg.err76);	
			return false;
		}
		
		if(((lan_ip1[0] & lan_mask1[0]) != (F.route_gateway_0.value & lan_mask1[0])) 
			|| ((lan_ip1[1] & lan_mask1[1]) != (F.route_gateway_1.value & lan_mask1[1]))
			|| ((lan_ip1[2] & lan_mask1[2]) != (F.route_gateway_2.value & lan_mask1[2]))
			|| ((lan_ip1[3] & lan_mask1[3]) != (F.route_gateway_3.value & lan_mask1[3])))
		{
			alert(errmsg.err76);	
			return false;
		}
	}
	else 
	{
		if(gateway_ip == wan_ip)
		{
			alert(errmsg.err76);	
			return false;
		}
		
		if(((wan_ip1[0] & wan_mask1[0]) != (F.route_gateway_0.value & wan_mask1[0])) 
			|| ((wan_ip1[1] & wan_mask1[1]) != (F.route_gateway_1.value & wan_mask1[1]))
			|| ((wan_ip1[2] & wan_mask1[2]) != (F.route_gateway_2.value & wan_mask1[2]))
			|| ((wan_ip1[3] & wan_mask1[3]) != (F.route_gateway_3.value & wan_mask1[3])))
		{
			alert(errmsg.err76);	
			return false;
		}
	}
	
	return true;
}

function to_submit(F)
{
    if(!chk_static_entry(F)) return;
	if(valid_value(F) && valid_gateway(F)){
		if( (F.wk_mode[0].checked == true && '<% nvram_get("wk_mode"); %>' == "router") || F.wk_mode[1].checked == true && '<% nvram_get("wk_mode"); %>' == "gateway") {
			F.need_reboot.value = "1";
			F.wait_time.value = "10";

<% support_invmatch("GUEST_NETWORK_SUPPORT", "1", "/*"); %>
			if(F.wk_mode[1].checked == true && !confirm(gn.nat))
			{
				if ( close_session == "1" )
				{
      				document.location.reload("Routing.asp");
				}
				else
				{
      				document.location.reload("Routing.asp;session_id=<% nvram_get("session_key"); %>");
				}
				return false;
			}
<% support_invmatch("GUEST_NETWORK_SUPPORT", "1", "*/"); %>
		}
		F.submit_button.value = "Routing";
		F.gui_action.value = "Apply";
		F.delete_route.value = del_route.toString();
		F.submit();
	}
}

function valid_route_name(F, name)
{
	var i = 0;
	var rt_page = F.route_page.selectedIndex ;
	var static_route_name = "<% nvram_get("static_route_name"); %>";
	var cur_route_name = eval(name).value;
	var temp_route_name = "$NAME:" + cur_route_name + "$$";
	var rt_name = new Array();
	rt_name = static_route_name.split(" ");

	for(i = 0; i < rt_name.length; i++){
		if((rt_name[i] == temp_route_name) && (rt_page != i))
		{
			alert(errmsg.err76);
			return false;
		}
	}
	return true;
}

function valid_value(F)
{
       	//John make the route_name distinguish.
       	if(!valid_route_name(F,"F.route_name"))
               	return false;
	if(!valid_ip(F,"F.route_ipaddr","IP",0))
		return false;
	if(!valid_mask(F,"F.route_netmask",ZERO_OK))
		return false;
	if(!valid_ip(F,"F.route_gateway","Gateway",MASK_NO))
		return false;

	//if(F.route_ipaddr_3.value != "0" && F.route_netmask_3.value == "0") {
	//	if(errmsg2.err14) {
	//		alert(errmsg2.err14);	
	//		return false;
	//	}
	//}

	//if(F.route_ifname.selectedIndex == 0 &&
	//   !valid_ip_gw(F,"F.route_ipaddr","F.route_netmask","F.route_gateway"))
	//	return false;
	return true;
}
function SelRoute(num,F)
{
	var route_info = route_infos[num].split(":");
	var ipaddr = route_info[0].split(".");
	var netmask = route_info[1].split(".");
	var gateway = route_info[2].split(".");
	var lan_str = "<% nvram_get("lan_ifname"); %>";

	F.route_name.value = route_names[num];
	F.route_ipaddr_0.value = ipaddr[0];
	F.route_ipaddr_1.value = ipaddr[1];
	F.route_ipaddr_2.value = ipaddr[2];
	F.route_ipaddr_3.value = ipaddr[3];
	F.route_netmask_0.value = netmask[0];
	F.route_netmask_1.value = netmask[1];
	F.route_netmask_2.value = netmask[2];
	F.route_netmask_3.value = netmask[3];
	F.route_gateway_0.value = gateway[0];
	F.route_gateway_1.value = gateway[1];
	F.route_gateway_2.value = gateway[2];
	F.route_gateway_3.value = gateway[3];
	if ( route_info[4] == lan_str )
		F.route_ifname.value = "lan";
	else
		F.route_ifname.value = "wan";
//	F.submit_button.value = "Routing";
//	F.change_action.value = "gozila_cgi";
	F.route_page.value=F.route_page.options[num].value;
//	F.submit();
}

function exit()
{
	closeWin(route_win);
}

function chk_ip_gw(lanip,wanip,lanmask,wanmask,data)
{
	var sip = data[0].split(".");
	var mask = data[1].split(".");
	var gw = data[2].split(".");
	var i,lanflg=0; 
	var wdip = wanip.split(".");
	var wdmask = wanmask.split(".");
	var ldip = lanip.split(".");
	var ldmask = lanmask.split(".");

	/*add by michael to fix IR-B0015237 dst ip can be 0.1.1.0*/
	if(sip[0] == 0 && (sip[1]!= 0 || sip[2]!=0 || sip[3]!= 0))
		return true;

	for(i=0; i<4; i++)
	{
		//if( sip[i] == ldip[i] ) lanflg+=1;
		//John zhu
		if((sip[i]&ldmask[i])==ldip[i]) lanflg+=1;
		if( lanflg == 3 ) return true ;  // Dest IP Address cannot the same as LAN subnet
		if( sip[i] != (mask[i] & sip[i])) return true ; 
		if ( data[3] == "wan" ) //John zhu@2008.04.09,fix the bug:cannot save wan routes
		{
			if ( (gw[i] & wdmask[i]) != ( wdmask[i] & wdip[i] ) ) return true ; 
		}
		else 
			if ( (gw[i] & ldmask[i]) != ( ldmask[i] & ldip[i] ) ) return true ; 
	}
	return false ; 
}

function i_data(F,data,k,isend,item)
{
        var i , idata="";
        if ( item == 0 )
        {
                idata = eval(data).value ;
                return idata ;
        }
        for(i=0; i<k; i++)
        {
                idata = idata + eval(data+i).value ;
                if ( i == k-1 )
                {
                    if ( !isend )idata = idata + ":";
                }
                else
                    idata = idata + ".";
        }
        return idata ;
}

function chk_static_entry(F)
{
        var data = new Array();
        var sdata = new Array();
        var ddata = new Array();
        var i,j,k,idata="",returnvalue = "";
        var lanip = "<% nvram_get("lan_ipaddr"); %>";
        var wanip = "<% nvram_get("wan_ipaddr"); %>";
	var lanmask = "<% nvram_get("lan_netmask"); %>";
	var wanmask = "<% nvram_get("wan_netmask"); %>";
        data = "<% nvram_get("static_route"); %>".split(" ");
        idata = idata + i_data(F,"F.route_ipaddr_",4,0,1);
        idata = idata + i_data(F,"F.route_netmask_",4,0,1);
        idata = idata + i_data(F,"F.route_gateway_",4,0,1);
        idata = idata + i_data(F,"F.route_ifname",1,1,0);

	if(F.route_ipaddr_0.value == "0" && F.route_ipaddr_1.value == "0" && F.route_ipaddr_2.value == "0" && F.route_ipaddr_3.value == "0" && F.route_netmask_0.value == "0" && F.route_netmask_1.value == "0" && F.route_netmask_2.value == "0" && F.route_netmask_3.value == "0" && F.route_gateway_0.value == "0" && F.route_gateway_1.value == "0" && F.route_gateway_2.value == "0" && F.route_gateway_3.value == "0") {                 return true;         } 

        for(i=0; i<data.length; i++)
        {
                sdata = data[i].split(":");
                ddata = idata.split(":");
                k=0;
                returnvalue = chk_ip_gw(lanip,wanip,lanmask,wanmask,ddata);
                if ( (ddata[3]=="lan" && ddata[2] == lanip) || (ddata[3]=="wan" && ddata[2] == wanip) || returnvalue == true)
                {
                        alert(errmsg.err76);
                        return false ;
                }
                if( F.route_page.selectedIndex != i )
                {
                        for(j=0; j<2; j++)
                        {
                                if ( sdata[j] == ddata[j] )
                                        k++;
                        }
                        if ( k==2 )
                        {
                                alert(errmsg.err76);
                                return false ;
                        }
                }
        }
        return true ;
}

function init()
{
	var swmode = '<% nvram_get("switch_mode");%>';
	var protocolWan = '<% nvram_get("wan_proto");%>';

	if( swmode == 1)
		alert(share.brdgmwn);
	else if( protocolWan == "dslite" )
		alert (share.dslitewn);

	SelNAT('<% nvram_get("wk_mode"); %>',document.route_static);
	SelRoute(0, document.route_static);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT>

</HEAD>
<BODY onunload=exit() onload=init()>
<DIV align=center>
<FORM name=route_static action=apply.cgi method=<% get_http_method(); %>>
<input type=hidden name=submit_button>
<input type=hidden name=submit_type>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=static_route>
<input type=hidden name=delete_route>
<input type=hidden name=need_reboot value=0>
<input type=hidden name=wait_time value=2>

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,topmenu.advrouting);</script></TR>
	<TR><script>draw_table(SUBFUN,share.nat);</script>
    <TD colspan=2 class=FUNNAME1>
	<table cellpadding="0" cellspacing="0">
	<tr>
		<td><input type="radio" name="wk_mode" value="gateway" <% nvram_match("wk_mode", "gateway", "checked"); %> onClick="SelNAT('gateway',this.form)"><B><span><script>Capture(share.enabled)</script></span></B>&nbsp;&nbsp;</td>
		<td><input type="radio" name="wk_mode" value="router" <% nvram_match("wk_mode", "router", "checked"); %> onClick="SelNAT('router',this.form)"><B><span><script>Capture(share.disabled)</script></span></B></td></tr></table>
	</TD></TR>
     	<TR><script>
			draw_table(ISHR,"");
		</script></TR>
		<TR><script>draw_table(SUBFUN,hrouting.phase4);</script>
    	<TD colspan=2 class=FUNNAME1>
		<input type="radio" name="dr_setting" value="3" <% nvram_match("dr_setting", "3", "checked"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;&nbsp;<input type="radio" name="dr_setting" value="0" <% nvram_match("dr_setting", "0", "checked"); %>><B><script>Capture(share.disabled)</script></B></TD></TR>
     	<TR><script>
			draw_table(ISHR,"");
		</script></TR>
		<TR><script>draw_table(SUBFUN,lefemenu.staticroute);</script>
    	<TD class=FUNNAME2><script>Capture(advroute.routeentries)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>&nbsp;<SELECT size=1 name="route_page" onChange=SelRoute(this.form.route_page.selectedIndex,this.form) >
	<% static_route_table("select"); %></SELECT>&nbsp;&nbsp;&nbsp;&nbsp;

<script>document.write("<INPUT onclick=DeleteEntry(this.form) type=button name=delentry value=\"" + advroute.delentries + "\">");</script>

                </TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(advroute.routename)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><input name="route_name" size="26" maxlength="20" onBlur=valid_name1(this,"Route%20Name") class=num> </TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(advroute.deslanip)</script>:&nbsp;</FONT></TD>
        <TD class=FUNFIELD dir="ltr"><FONT style="FONT-SIZE: 8pt" 
            face=Arial><input type="hidden" name="route_ipaddr" value="4"><input name="route_ipaddr_0" size="3" maxlength="3" onBlur=valid_range(this,1,223,"IP") class=num> .
	<input name="route_ipaddr_1" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_ipaddr_2" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_ipaddr_3" size="3" maxlength="3" onBlur=valid_range(this,0,254,"IP") class=num>
</SPAN></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><SPAN><script>Capture(share.submask)</script>:&nbsp;</SPAN></FONT></TD>
        <TD class=FUNFIELD dir="ltr"><input type="hidden" name="route_netmask" value="4"><input name="route_netmask_0" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_netmask_1" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_netmask_2" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_netmask_3" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num>
</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><SPAN><script>Capture(share.gateway)</script>:&nbsp;</SPAN></FONT></TD>
        <TD class=FUNFIELD dir="ltr"><input type="hidden" name="route_gateway" value="4"><input name="route_gateway_0" size="3" maxlength="3" onBlur=valid_range(this,1,223,"IP") class=num> .
	<input name="route_gateway_1" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_gateway_2" size="3" maxlength="3" onBlur=valid_range(this,0,255,"IP") class=num> .
	<input name="route_gateway_3" size="3" maxlength="3" onBlur=valid_range(this,0,254,"IP") class=num>
</TD></TR>
        
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt"><script>Capture(share.inter_face)</script>:&nbsp; </FONT></TD>
        <TD class=FUNFIELD>&nbsp;<select name="route_ifname" >
		<script>
			var NAME = new Array("lan", "wan");
			var STRING = new Array(share.lanwireless, advroute.waninternet);
			for(i=0;i<NAME.length;i++) {
				document.write("<OPTION value="+NAME[i]+">"+STRING[i]+"</OPTION>");
			}
		</script>
        	</select></TD></TR>
          <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
<script>document.write("<INPUT type=button name=button2  value=\"" + advroute.showroutetbl + "\" onclick=ViewRoute()>");</script>
                </TD></TR>


        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(ISTAIL,"");</script></TR>
<TR>
	    <TD class=TITLE1 colspan=2></TD>
		<TD class=FUNNAME4 colspan=2>
		<script>
			draw_bottom("",sbutton.save);
			if ( close_session == "1" )
			{
				draw_bottom("Routing.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("Routing.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></DIV></HTML>
