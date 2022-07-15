
<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>IPV6 Setup</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
document.title = topmenu.ipv6setup;
var wan_proto = '<% nvram_get("wan_proto"); %>';

function isdigit_without_alert(I,M)
{
    for(i=0 ; i<I.value.length; i++){
        ch = I.value.charAt(i);
        if(ch < '0' || ch > '9'){
            I.value = I.defaultValue;
            return false;
        }
    }
    return true;
}

function valid_range2(I,start,end,M)
{
    M1 = unescape(M);

    if (isdigit_without_alert(I,M1))
    {
        ;
    }
    else
    {
        alert(errmsg.err14 + '['+ start + ' - ' + end +'].');
        I.value = I.defaultValue;
        return false;
    }

    d = parseInt(I.value, 10);
    if ( !(d<=end && d>=start) )
    {
        alert(errmsg.err14 + '['+ start + ' - ' + end +'].');
        I.value = I.defaultValue;
        return false;
    }
    else
        I.value = d;    // strip 0

}

function init()
{
	var wan_ipv6_dhcp = "<% nvram_selget("wan_ipv6_dhcp"); %>";
	var F = document.setup_ipv6;
	if(wan_ipv6_dhcp=="on")
		F._wan_ipv6_dhcp[0].checked=true;
	else
		F._wan_ipv6_dhcp[1].checked=true;
	Seltunnel(wan_ipv6_dhcp,F);
	if(F.select_tunnel_mode.value==2){
		var tunnel_prefix=F.tunnel_prefix.value.match(/::$/);
		var tunnel_prefix_show;
		if(tunnel_prefix=="::"){
			tunnel_prefix_show=F.tunnel_prefix.value.split("::");
			F.tunnel_prefix_show.value=tunnel_prefix_show[0];
		}
		else
			F.tunnel_prefix_show.value=F.tunnel_prefix.value;
	}
	var swmode = '<% nvram_get("switch_mode");%>';
	if( swmode == 1)
		alert(share.brdgmwn);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function SelWAN(num,F)
{
        F.submit_button.value = "index_ipv6";
        F.change_action.value = "gozila_cgi";
<% support_match("IPV6_6RD_EN_SUPPORT", "1", "/*"); %>
        F.wan_ipv6_dhcp.value = "off";
<% support_match("IPV6_6RD_EN_SUPPORT", "1", "*/"); %>
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "/*"); %>
        //F.wan_ipv6_dhcp.value = F._wan_ipv6_dhcp.value;
	if(F._wan_ipv6_dhcp[0].checked==true) {
       F.wan_ipv6_dhcp.value = "on";
	 }
		if(wan_proto=="pppoe" )
		{
       		F.wan_ipv6_dhcp.value = "off";
		}
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "*/"); %>
        F.tunnel_mode.value=F.select_tunnel_mode.options[num].value;
        F.submit();
}

function ppp_enable_disable(F,I)
{
	if( I == "0"){
		choose_disable(F.ipv6_ppp_idletime);
		choose_enable(F.ipv6_ppp_redialperiod);
	}
	else{
		choose_enable(F.ipv6_ppp_idletime);
		choose_disable(F.ipv6_ppp_redialperiod);
	}
}

function Seltunnel(num,F)
{
	if(wan_proto=="pptp" || wan_proto=="l2tp"){
		choose_disable(F._wan_ipv6_dhcp[0]);
		choose_disable(F._wan_ipv6_dhcp[1]);
		choose_enable(F.select_tunnel_mode);
		if(F.select_tunnel_mode.value==2){
				choose_enable(F.tunnel_prefix_show);
				choose_enable(F.tunnel_prefix);
				choose_enable(F.tunnel_prefix_len);
				choose_enable(F.tunnel_br);
				choose_enable(F.ipv4_mask_len);
			}
	}
<% support_match("IPV6_6RD_EN_SUPPORT", "1", "/*"); %>
	else{
		if(num=="on"){
			choose_disable(F.select_tunnel_mode);
			if(F.select_tunnel_mode.value==2){
				choose_disable(F.tunnel_prefix_show);
				choose_disable(F.tunnel_prefix);
				choose_disable(F.tunnel_prefix_len);
				choose_disable(F.tunnel_br);
				choose_disable(F.ipv4_mask_len);
			}
		}
		else{
			choose_enable(F.select_tunnel_mode);
			if(F.select_tunnel_mode.value==2){
				choose_enable(F.tunnel_prefix_show);
				choose_enable(F.tunnel_prefix);
				choose_enable(F.tunnel_prefix_len);
				choose_enable(F.tunnel_br);
				choose_enable(F.ipv4_mask_len);
			}
		}
	}
<% support_match("IPV6_6RD_EN_SUPPORT", "1", "*/"); %>
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "/*"); %>
	else{
		if(num=="on" && wan_proto=="pppoe" ){
			choose_disable(F.select_tunnel_mode);
			if(F.select_tunnel_mode.value==2){
				choose_disable(F.tunnel_prefix_show);
				choose_disable(F.tunnel_prefix);
				choose_disable(F.tunnel_prefix_len);
				choose_disable(F.tunnel_br);
				choose_disable(F.ipv4_mask_len);
			}
		}
		else
		if(wan_proto=="pppoe" )
			{
			choose_enable(F.select_tunnel_mode);
			if(F.select_tunnel_mode.value==2){
				choose_enable(F.tunnel_prefix_show);
				choose_enable(F.tunnel_prefix);
				choose_enable(F.tunnel_prefix_len);
				choose_enable(F.tunnel_br);
				choose_enable(F.ipv4_mask_len);
			}
		}
	}
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "*/"); %>

}

function valid_BorderRelay(F)
{
	var br = F.tunnel_br.value.split(".");
	if(br[br.length-1]=="")
	{
		alert(ddnsm.tzo_notfqdn);
		return false;
	}
	if(isNaN(br[br.length-1]))
	{
		
		if(br.length==1)
		{
			alert(ddnsm.tzo_notfqdn);
		return false;
		}
		for(i=0;i<br.length;i++)
		{
			if(br[i]=="")
			{
				alert(ddnsm.tzo_notfqdn);
				return false;
			}
		}
	}
	else
	{
		if(br.length!="4" || br[0]<1||br[0]>223||br[1]<0||br[1]>255||br[2]<0||br[2]>255||br[3]<1||br[3]>254||br[0]==""||br[1]==""||br[2]==""||br[3]==""||isNaN(br[0])||isNaN(br[1])||isNaN(br[2])||isNaN(br[3]))
		{
			alert(ddnsm.tzo_notip);
			return false;
		}
	}
}

function to_submit()
{
	var F = document.forms[0];
	if(wan_proto=="pptp" || wan_proto=="l2tp")
		F._wan_ipv6_dhcp[1].checked=true;
	if(F._wan_ipv6_dhcp[0].checked==true) {
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "/*"); %>
		if(F.select_tunnel_mode.value!=0) {
			if(wan_proto=="pppoe")
			{
			F.wan_ipv6_proto.value="pppoe";
			 F.lan_ipv6_dhcp.value="on";
        	/* 2011-Mar-17, Set tunnel_mode to disable(0) when IPv6-Automatic was enabled.
         	* So that the content of IPv6 Setup UI won't confuse user.
         	*/
        	F.wan_ipv6_dhcp.value="on";
        	F.tunnel_mode.value="0";
        	F.tunnel_status.disabled='true';
			}
		else
		{
		if(F.select_tunnel_mode.value==2) {
				var tunnel_prefix_show=F.tunnel_prefix_show.value.split(":");
				var illegal=0;
				for(i=0;i<tunnel_prefix_show.length;i++){
					if(tunnel_prefix_show[i]==0 || tunnel_prefix_show[i]=="")
						illegal++;
					if(i==tunnel_prefix_show.length-1 && illegal==tunnel_prefix_show.length){
						alert(errmsg.err100);
						return;
					}
				}
				if(tunnel_prefix_show[0]=="" || tunnel_prefix_show[0]=="0" ){
					alert(errmsg.err100);
					return;
				}

				if(tunnel_prefix_show.length==3 && tunnel_prefix_show[0]=="" && tunnel_prefix_show[1]=="" && tunnel_prefix_show[2]==""){
					alert(errmsg.err100);
					return;
				}
/*
				if(tunnel_prefix_show.length==2 && tunnel_prefix_show[0].match(/ffff/i) && tunnel_prefix_show[1].match(/ffff/i) ){
					alert(errmsg.err100);
					return;
				}
				if(tunnel_prefix_show.length==3 && tunnel_prefix_show[0].match(/ffff/i) && tunnel_prefix_show[1]=="" && tunnel_prefix_show[2].match(/ffff/i) ){
					alert(errmsg.err100);
					return;
				}
				if(tunnel_prefix_show.length==5 && tunnel_prefix_show[0].match(/ffff/i) && tunnel_prefix_show[1].match(/ffff/i) && tunnel_prefix_show[2].match(/ffff/i) && tunnel_prefix_show[3].match(/ffff/i) && tunnel_prefix_show[4].match(/ffff/i) ){
					alert(errmsg.err100);
					return;
				}
*/
				for(i=0;i<tunnel_prefix_show.length;i++)
				{
					
					if(!(tunnel_prefix_show[i]=="" || tunnel_prefix_show[i].match(/ffff/i)))
					{
						break;
					}
					if(i+1==tunnel_prefix_show.length)
					{
							alert(errmsg.err100);
							return;
					}

				}
				

				if(!(F.tunnel_prefix_show.value.match(/::/))){
					if(tunnel_prefix_show.length==8){
						for(i=0;i<8;i++){
							if(tunnel_prefix_show[i].length!=4 || tunnel_prefix_show[i].match(/ffff/i)==null)
								break;
							if(i==7){
								alert(errmsg.err100);
								return;
							}
						}
					}
						
					if(tunnel_prefix_show.length!=8)
						F.tunnel_prefix.value=F.tunnel_prefix_show.value+"::";
					else
						F.tunnel_prefix.value=F.tunnel_prefix_show.value;
				}
				else
					F.tunnel_prefix.value=F.tunnel_prefix_show.value;
					
				if(valid_BorderRelay(F)==false)
				{
					F.tunnel_br.value = F.tunnel_br.defaultValue;
					return;
 				}

				if(32-eval(F.ipv4_mask_len.value)+eval(F.tunnel_prefix_len.value) > 64){
					alert(errmsg.err101);
					return;
				}
				
				if(F.tunnel_prefix_len.value ==0 ){
					alert(errmsg.err101);
					return;

				}
				/*If Prefix is 2002, Prefix Length should be 16, Border Relay should be 192.88.99.1, and IPv4 Address Mask should be 0.*/
				var error=0;
				if(tunnel_prefix_show[0]=="2002"){
					for(i=1;i<tunnel_prefix_show.length;i++){
						if(tunnel_prefix_show[i]!=0)
							error++;
					}
					if(error){
						alert(errmsg.err101);
						return;
					}
					if(!error){
						if(F.tunnel_prefix_len.value!=16 || F.tunnel_br.value!="192.88.99.1" || F.ipv4_mask_len.value!=0){
							alert(errmsg.err101);
							return;
						}
					}
				}
			}

			F.wan_ipv6_proto.value="dhcp-tunnel";
			F.lan_ipv6_dhcp.value="on";
			F.wan_ipv6_dhcp.value="on";
			F.tunnel_status.value="connecting";
			F.tunnel_mode.value=F.select_tunnel_mode.value;
			}
		}
		else
		{
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "*/"); %>
		//IPv6-Automatic (Enable)
		if(wan_proto=="pppoe")
			F.wan_ipv6_proto.value="pppoe";
		else
			F.wan_ipv6_proto.value="dhcp";
		F.lan_ipv6_dhcp.value="on";
		/* 2011-Mar-17, Set tunnel_mode to disable(0) when IPv6-Automatic was enabled.
		 * So that the content of IPv6 Setup UI won't confuse user.
		 */
		F.wan_ipv6_dhcp.value="on";
		F.tunnel_mode.value="0";
		F.tunnel_status.disabled='true';
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "/*"); %>
		}
<% support_invmatch("IPV6_6RD_EN_SUPPORT", "1", "*/"); %>
		}
	else{
		if(F.select_tunnel_mode.value==0) {
			//6rd Tunnel (Disabled)
			F.wan_ipv6_proto.value="disabled";
			F.tunnel_status.disabled='true';
		} 
		else {
			var i;
			//6rd Tunnel (Automatic or Manual)
			F.wan_ipv6_proto.value="tunnel";
			F.tunnel_status.value="connecting";
			if(F.select_tunnel_mode.value==2) {
				var tunnel_prefix_show=F.tunnel_prefix_show.value.split(":");
				var illegal=0;
				for(i=0;i<tunnel_prefix_show.length;i++){
					if(tunnel_prefix_show[i]==0 || tunnel_prefix_show[i]=="")
						illegal++;
					if(i==tunnel_prefix_show.length-1 && illegal==tunnel_prefix_show.length){
						alert(errmsg.err100);
						return;
					}
				}
				if(tunnel_prefix_show[0]=="" || tunnel_prefix_show[0]=="0" ){
					alert(errmsg.err100);
					return;
				}

				if(tunnel_prefix_show.length==3 && tunnel_prefix_show[0]=="" && tunnel_prefix_show[1]=="" && tunnel_prefix_show[2]==""){
					alert(errmsg.err100);
					return;
				}

/*
				if(tunnel_prefix_show.length==2 && tunnel_prefix_show[0].match(/ffff/i) && tunnel_prefix_show[1].match(/ffff/i) ){
					alert(errmsg.err100);
					return;
				}
				if(tunnel_prefix_show.length==3 && tunnel_prefix_show[0].match(/ffff/i) && tunnel_prefix_show[1]=="" && tunnel_prefix_show[2].match(/ffff/i) ){
					alert(errmsg.err100);
					return;
				}
				if(tunnel_prefix_show.length==5 && tunnel_prefix_show[0].match(/ffff/i) && tunnel_prefix_show[1].match(/ffff/i) && tunnel_prefix_show[2].match(/ffff/i) && tunnel_prefix_show[3].match(/ffff/i) && tunnel_prefix_show[4].match(/ffff/i) ){
					alert(errmsg.err100);
					return;
				}
*/
				for(i=0;i<tunnel_prefix_show.length;i++)
				{
					if(!(tunnel_prefix_show[i]=="" || tunnel_prefix_show[i].match(/ffff/i)))
					{
						break;
					}
					if(i+1==tunnel_prefix_show.length)
					{
							alert(errmsg.err100);
							return;
					}

				}
				

				if(!(F.tunnel_prefix_show.value.match(/::/))){
					if(tunnel_prefix_show.length==8){
						for(i=0;i<8;i++){
							if(tunnel_prefix_show[i].length!=4 || tunnel_prefix_show[i].match(/ffff/i)==null)
								break;
							if(i==7){
								alert(errmsg.err100);
								return;
							}
						}
					}
						
					if(tunnel_prefix_show.length!=8)
						F.tunnel_prefix.value=F.tunnel_prefix_show.value+"::";
					else
						F.tunnel_prefix.value=F.tunnel_prefix_show.value;
				}
				else
					F.tunnel_prefix.value=F.tunnel_prefix_show.value;
					
				if(valid_BorderRelay(F)==false)
				{
					F.tunnel_br.value = F.tunnel_br.defaultValue;
					return;
 				}

				if(32-eval(F.ipv4_mask_len.value)+eval(F.tunnel_prefix_len.value) > 64){
					alert(errmsg.err101);
					return;
				}
				if(F.tunnel_prefix_len.value ==0 ){
					alert(errmsg.err101);
					return;

				}

				/*If Prefix is 2002, Prefix Length should be 16, Border Relay should be 192.88.99.1, and IPv4 Address Mask should be 0.*/
				var error=0;
				if(tunnel_prefix_show[0]=="2002"){
					for(i=1;i<tunnel_prefix_show.length;i++){
						if(tunnel_prefix_show[i]!=0)
							error++;
					}
					if(error){
						alert(errmsg.err101);
						return;
					}
					if(!error){
						if(F.tunnel_prefix_len.value!=16 || F.tunnel_br.value!="192.88.99.1" || F.ipv4_mask_len.value!=0){
							alert(errmsg.err101);
							return;
						}
					}
				}
			}
		}
		F.lan_ipv6_dhcp.value="off";
		F.wan_ipv6_dhcp.value="off";
		F.tunnel_mode.value=F.select_tunnel_mode.value;
	}
	F.submit_button.value = "index_ipv6";
	F.gui_action.value = "Apply";
	F.submit();
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=setup_ipv6 method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name="wait_time" value="0">
<input type=hidden name="need_reboot" value="0">
<input type=hidden name="wan_ipv6_proto">
<input type=hidden name="lan_ipv6_dhcp" value="on">
<input type=hidden name="tunnel_mode">
<input type=hidden name="wan_ipv6_dhcp">
<input type=hidden name="tunnel_status">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
		<TR><script>draw_table(MAINFUN,lefemenu.intersetup);</script></TR>
		<TR><script>draw_table(SUBFUN,lefemenu.conntype)</script>
<!--		
		<TD colspan=2 class=FUNNAME1><SELECT name="wan_ipv6_proto" onChange=SelWAN(this.form.wan_ipv6_proto.selectedIndex,this.form) >
<script>
/*
			var NAME = new Array("dhcp", "static", "pppoe", "tunnel", "disabled");
			var STRING = new Array(setupcontent.dhcp_ipv6, setupcontent.static_ipv6, setupcontent.pppoe_ipv6, setupcontent.tunnel, share.disabled);
*/
	var NAME = new Array("dhcp", "static", "tunnel", "disabled");
	var STRING = new Array(setupcontent.dhcp_ipv6, setupcontent.static_ipv6, setupcontent.tunnel, share.disabled);
			var wan_proto = '<% nvram_selget("wan_ipv6_proto"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wan_proto == NAME[i]) selected = "selected";
				else 			   selected = "";
				if(NAME[i] == "")	continue;
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
</SELECT></TD>
</TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
            <TABLE>
              <TBODY>
              <TR>
		<TD width=4>&nbsp;</TD>
                <TD width=430> <HR color=#b5b5e6 SIZE=1> </TD>
              </TR>
              </TBODY>
            </TABLE>
          </TD></TR>
-->
	<TD class=FUNNAME2><FONT style="FONT-SIZE: 8pt" face=Arial>&nbsp;<script>Capture(setupcontent.ipv6auto)</script>:&nbsp;</FONT></TD>
	<TD class=FUNFIELD>
	<INPUT type=radio value=on name=_wan_ipv6_dhcp onclick=Seltunnel('on',this.form)><B><script>Capture(share.enabled)</script></B>&nbsp;
	<INPUT type=radio value=off name=_wan_ipv6_dhcp onclick=Seltunnel('off',this.form)><B><script>Capture(share.disabled)</script></B></TD></TR>
<TR><script>draw_table(ISHR,"");</script></TR>
<TR><script>draw_table(SUBFUN,"");</script>
	<TD class=FUNNAME2>&nbsp;<script>Capture(setupcontent.duid)</script>:&nbsp;</TD>
	<!-- <TD class=FUNFIELD><INPUT maxLength=63 size=15 name="wan_ipv6_duid" value='<% nvram_get("wan_ipv6_duid"); %>'></TD> -->
	<TD class=FUNFIELD><FONT style="FONT-SIZE: 8pt" face=Arial><% nvram_get("wan_ipv6_duid"); %></FONT></TD>
</TR>
<!-- <TR><script>draw_table(SUBFUN,"");</script>
	<TD>&nbsp;</TD>
	<TD><font face="Arial" style="font-size: 8pt;"><script>Capture(setupcontent.msg)</script></font></TD>
</TR> -->
<TR><script>draw_table(ISHR,"");</script></TR>
<TR><script>draw_table(MAINFUN,lefemenu.netsetup);</script></TR>
<TR><script>draw_table(SUBFUN,setupcontent.tunnel)</script>
<TD colspan=2 class=FUNNAME1><SELECT name="select_tunnel_mode" onChange=SelWAN(this.form.select_tunnel_mode.selectedIndex,this.form) >
<script>
var dhcp_NAME = new Array("0", "1", "2");
var dhcp_STRING = new Array(share.disabled, setupcontent.auto_config, setupcontent.manual_config);
var static_NAME = new Array("0", "2");
var static_STRING = new Array(share.disabled, setupcontent.manual_config);
var tunnel_mode = '<% nvram_selget("tunnel_mode"); %>';
var wan_proto = '<% nvram_get("wan_proto"); %>';
var sel_pptp_dhcp = '<% nvram_get("sel_pptp_dhcp"); %>';
			var selected;
		if(wan_proto=="dhcp" || wan_proto=="pppoe"|| (wan_proto=="pptp" && sel_pptp_dhcp=="1") || wan_proto=="l2tp" || wan_proto=="heartbeat"){
			for(i=0;i<dhcp_NAME.length;i++) {
				if(tunnel_mode == dhcp_NAME[i]) selected = "selected";
				else 			   selected = "";
				if(dhcp_NAME[i] == "")	continue;
				document.write("<OPTION value="+dhcp_NAME[i]+" "+selected+">"+dhcp_STRING[i]+"</OPTION>");
			}
		}
		else if(wan_proto=="static" || (wan_proto=="pptp" && sel_pptp_dhcp=="0")){
			for(i=0;i<static_NAME.length;i++) {
				if(tunnel_mode == static_NAME[i]) selected = "selected";
				else 			   selected = "";
				if(static_NAME[i] == "")	continue;
				document.write("<OPTION value="+static_NAME[i]+" "+selected+">"+static_STRING[i]+"</OPTION>");
			}
		}
		else{
			for(i=0;i<dhcp_NAME.length;i++) {
				if(tunnel_mode == dhcp_NAME[i]) selected = "selected";
				else 			   selected = "";
				if(dhcp_NAME[i] == "")	continue;
				document.write("<OPTION value="+dhcp_NAME[i]+" "+selected+">"+dhcp_STRING[i]+"</OPTION>");
			}
		}
		</script>
<TR><script>draw_table(ISHR,"");</script></TR>
<% show_index_ipv6_setting(); %>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR>
	<TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
		<TR><script>draw_table(ISTAIL,"");</script></TR>
		<TR>
			<TD class=TITLE1 colspan=2></TD>
			<TD class=FUNNAME4 colspan=2>
				<script>
				    draw_bottom("",sbutton.save);
					if ( close_session == "1" )
					{
						draw_bottom("index_ipv6.asp",sbutton.cancel);
					}
					else
					{
						draw_bottom("index_ipv6.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
					}
				</script></TD>
			<TD class=HELP2></TD>
		</TR>
	</TABLE></TD>
</TR>
</TABLE>
</FORM></BODY></HTML>
