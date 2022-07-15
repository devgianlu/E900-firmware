<% web_include_file("copyright.asp"); %>
<HTML><HEAD><TITLE>Advanced Wireless Settings</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>

<SCRIPT language=JavaScript>
re1 = /<br>/gi;
str = wlantopmenu.advwireless.replace(re1, " ");
document.title = str;
var win_options = 'alwaysRaised,resizable,scrollbars,width=660,height=460' ;

var wl_filter_win = null;
var EN_DIS_0 =  '<% nvram_get("wl0_macmode"); %>'
var wl0_phytype = '<% nvram_get("wl0_phytype"); %>';
var wl0_net_mode = '<% nvram_get("wl0_net_mode"); %>';

var EN_DIS_1 =  '<% nvram_get("wl1_macmode"); %>'
var wl1_phytype = '<% nvram_get("wl1_phytype"); %>';
var wl1_net_mode = '<% nvram_get("wl1_net_mode"); %>';

function to_submit(F)
{
/*
	var flg ; 
	if ( wl_net_mode == "mixed" && F.wl_nmcsidx.selectedIndex != 0 ) 
	{
		flg = confirm(errmsg.err89);
		if ( !flg ) return ; 
	}
*/
	F.wl1_nmode_protection.value = F.wl1_gmode_protection.value;
	F.wl0_nmode_protection.value = F.wl0_gmode_protection.value;
        F.submit_button.value = "Wireless_Advanced";
        F.gui_action.value = "Apply";
        F.submit();
}
function SelWME(num,F)
{
	wme_enable_disable(F,num);
}
function wme_enable_disable(F,I)
{
	var start = '';
	var end = '';
	var total = F.elements.length;
	for(i=0 ; i < total ; i++){
                if(F.elements[i].name == "wl_wme_no_ack")  start = i;
                if(F.elements[i].name == "wl_wme_sta_vo5")  end = i;
        }
        if(start == '' || end == '')    return true;

	if( I == "0" || I == "off") {
		EN_DIS = 0;
		for(i = start; i<=end ;i++)
                        choose_disable(F.elements[i]);
	}
	else {
		EN_DIS = 1;
                for(i = start; i<=end ;i++)
                        choose_enable(F.elements[i]);
	}
}

function auth_enable_disable1(F,I)
{
	if(I == "wep" || I == "radius") 
                        choose_enable(F.wl1_auth_type);
	else
                        choose_disable(F.wl1_auth_type);
}
function auth_enable_disable0(F,I)
{
	if(I == "wep" || I == "radius") 
                        choose_enable(F.wl0_auth_type);
	else
                        choose_disable(F.wl0_auth_type);
}

function create_nrate1(num,F)
{
	var bw20 = new Array("6.5", "13", "19.5", "26", "39", "52", "58.5", "65", "13", "26", "39", "52", "78", "104", "117", "130");		
	var bw40 = new Array("13.5", "27", "40.5", "54", "81", "108", "121.5", "135", "27", "54", "81", "108", "162", "216", "243", "270");
	var index = '<% nvram_get("wl1_nmcsidx"); %>';
	var security_mode = '<% nvram_get("security_mode_1"); %>';
	
	//F.wl_nmcsidx[0] = new Option("Use Legacy Rate");
	//F.wl_nmcsidx[0].value = "-2";

	F.wl1_nmcsidx[0] = new Option(share.auto);
	F.wl1_nmcsidx[0].value = "-1";

        /* Jemmy nrate issue when channel width is "AUTO" 2009.12.22*/
        /*if(num == 0 || num == 20) {*/
        if(num == 20) {
	    for(i=0;i<bw20.length;i++) {
/*
                if(i<8)
                {
                        F.wl1_nmcsidx[i+1] = new Option(i+" - Mandatory "+bw20[i]+hwlad2.mbps+" ");
                }
                else
                {
                        F.wl1_nmcsidx[i+1] = new Option(i+" - Two Spatial "+bw20[i]+hwlad2.mbps+" ");
                }
*/
		F.wl1_nmcsidx[i+1] = new Option("mcs"+i+": "+bw20[i]+hwlad2.mbps+" ");
		F.wl1_nmcsidx[i+1].value = i;
	    }
	}
	else {
	    for(i=0;i<bw40.length;i++) {
/*
                if(i<8)
                {
                        F.wl1_nmcsidx[i+1] = new Option(i+" - Mandatory "+bw40[i]+hwlad2.mbps+" ");
                }
                else
                {
                        F.wl1_nmcsidx[i+1] = new Option(i+" - Two Spatial "+bw40[i]+hwlad2.mbps+" ");
                }
*/
		F.wl1_nmcsidx[i+1] = new Option("mcs"+i+": "+bw40[i]+hwlad2.mbps+" ");
		F.wl1_nmcsidx[i+1].value = i;
	    }
	}

	if(index == "-2" &&  
	   (wl1_net_mode == "a-only" || (wl1_net_mode == 'mixed' && (security_mode == 'psk' || security_mode == 'wep')))) {
		F.wl1_nmcsidx[0].selected = true;
		choose_disable(F.wl1_nmcsidx);
	}
	else
		F.wl1_nmcsidx[parseInt(index)+1].selected = true;
}
function create_nrate0(num,F)
{
	var bw20 = new Array("6.5", "13", "19.5", "26", "39", "52", "58.5", "65", "13", "26", "39", "52", "78", "104", "117", "130");		
	var bw40 = new Array("13.5", "27", "40.5", "54", "81", "108", "121.5", "135", "27", "54", "81", "108", "162", "216", "243", "270");
	var index = '<% nvram_get("wl0_nmcsidx"); %>';
	var security_mode = '<% nvram_get("security_mode_0"); %>';
	
	//F.wl_nmcsidx[0] = new Option("Use Legacy Rate");
	//F.wl_nmcsidx[0].value = "-2";

	F.wl0_nmcsidx[0] = new Option(share.auto);
	F.wl0_nmcsidx[0].value = "-1";

        /* Jemmy nrate issue when channel width is "AUTO" 2009.12.22*/
        /*if(num == 0 || num == 20) {*/
        if(num == 20) {
	    for(i=0;i<bw20.length;i++) {
/*
                if(i<8)
                {
                        F.wl0_nmcsidx[i+1] = new Option(i+" - Mandatory "+bw20[i]+hwlad2.mbps+" ");
                }
                else
                {
                        F.wl0_nmcsidx[i+1] = new Option(i+" - Two Spatial "+bw20[i]+hwlad2.mbps+" ");
                }
*/
		F.wl0_nmcsidx[i+1] = new Option("mcs"+i+": "+bw20[i]+hwlad2.mbps+" ");
		F.wl0_nmcsidx[i+1].value = i;
	    }
	}
	else {
	    for(i=0;i<bw40.length;i++) {
/*
                if(i<8)
                {
                        F.wl0_nmcsidx[i+1] = new Option(i+" - Mandatory "+bw40[i]+hwlad2.mbps+" ");
                }
                else
                {
                        F.wl0_nmcsidx[i+1] = new Option(i+" - Two Spatial "+bw40[i]+hwlad2.mbps+" ");
                }
*/
		F.wl0_nmcsidx[i+1] = new Option("mcs"+i+": "+bw40[i]+hwlad2.mbps+" ");
		F.wl0_nmcsidx[i+1].value = i;
	    }
	}

	if(index == "-2" &&  
	   (wl0_net_mode == "g-only" || wl0_net_mode == "b-only" || wl0_net_mode == "bg-mixed" ||
	    (wl0_net_mode == 'mixed' && (security_mode == 'psk' || security_mode == 'wep')))) {
		F.wl0_nmcsidx[0].selected = true;
		choose_disable(F.wl0_nmcsidx);
	}
	else
		F.wl0_nmcsidx[parseInt(index)+1].selected = true;
}
function init()
{
	//init 5G wireless
	//if (wl1_net_mode == "mixed" ) 
	//	choose_disable(document.wireless.wl1_rate);	
	//if(wl1_phytype == "g") 
	//	choose_disable(document.wireless.wl1_nmcsidx);
	//if(wl1_net_mode == "n-only")
	//	choose_disable(document.wireless.wl1_rate);
	//if(wl1_net_mode == "g-only" || wl1_net_mode == "b-only" || wl1_net_mode == "bg-mixed") 
	//	choose_disable(document.wireless.wl1_nmcsidx);
	//wme_enable_disable(document.wireless, '<% nvram_get("wl1_wme"); %>');
	auth_enable_disable1(document.wireless, '<% nvram_get("wl1_security_mode"); %>');
	//choose_disable(document.wireless.wl1_txpwr);
	if(document.wireless.wl1_nmcsidx) create_nrate1('<% nvram_get("wl1_nbw"); %>',document.wireless);
	
	//init 2.4g wireless
	//if ( wl0_net_mode == "mixed" ) 
	//	choose_disable(document.wireless.wl0_rate);	
	//if(wl0_phytype == "g") 
	//	choose_disable(document.wireless.wl0_nmcsidx);
	//if(wl0_net_mode == "n-only")
	//	choose_disable(document.wireless.wl0_rate);
	//if(wl0_net_mode == "g-only" || wl0_net_mode == "b-only" || wl0_net_mode == "bg-mixed") 
	//	choose_disable(document.wireless.wl0_nmcsidx);
	//wme_enable_disable(document.wireless, '<% nvram_get("wl0_wme"); %>');
	auth_enable_disable0(document.wireless, '<% nvram_get("wl0_security_mode"); %>');
	//choose_disable(document.wireless.wl0_txpwr);
	if(document.wireless.wl0_nmcsidx) create_nrate0('<% nvram_get("wl0_nbw"); %>',document.wireless);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

</SCRIPT>

</HEAD>
<BODY onload=init()>
<FORM method=<% get_http_method(); %> name=wireless action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action>
<input type=hidden name=wl0_nmode_protection>
<input type=hidden name=wl1_nmode_protection>
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
        
	<!-- start setting 5G wireless -->
	<TR><script>draw_table(MAINFUN,wlanadv.hgmenu);</script></TR>		
          
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
	   <TABLE>
	   <TD width=120><script>Capture(hwlad2.apiso)</script>:&nbsp;</TD>
           <TD width=299 height=25><INPUT type=radio value=1 name=wl1_ap_isolate <% nvram_match("wl1_ap_isolate","1","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;<INPUT type=radio value=0 name=wl1_ap_isolate <% nvram_match("wl1_ap_isolate","0","checked"); %>><b><script>Capture(share.disabled)</script></b>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.disabled)</script>)</TD>
	   </TABLE></TD></TR>
         <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
	   <TABLE>
	   <TD width=120><script>Capture(hwlad2.fburst)</script>:&nbsp;</TD>
           <TD width=299 height=25><INPUT type=radio value=on name=wl1_frameburst <% nvram_match("wl1_frameburst","on","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;<INPUT type=radio value=off name=wl1_frameburst <% nvram_match("wl1_frameburst","off","checked"); %>><b><script>Capture(share.disabled)</script></b>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.enabled)</script>)</TD>
	   </TABLE></TD></TR>
       <TR><script>
			draw_table(ISHR,"");
		</script></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(hwlad2.authtyp)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><SELECT name="wl1_auth_type" > 
		<script>
			var NAME = new Array("0", "1", "2");
			var STRING = new Array(share.auto, wlansec.opensys+"&nbsp;", wlansec.sharekey);
			var wl_auth = '<% nvram_get("wl1_auth_type"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_auth == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;<script>Capture(wlanadv.deftransrate)</script></TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(hwlad2.basrate)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><SELECT  name="wl1_rateset" > 
		<script>
			var NAME = new Array("12", "default", "all");
			var STRING = new Array("1-2 Mbps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", hwlad2.def, hwlad2.all);
			var wl_rateset = '<% nvram_get("wl1_rateset"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_rateset == NAME[i]) selected = "selected";
				else 			  selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    		</SELECT>&nbsp;&nbsp;<script>Capture(hwlad2.defdef)</script></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.transrate)</script>:&nbsp; </font></TD>
        <TD class=FUNFIELD>
      <SELECT name="wl1_rate" > 
        <OPTION value="0" <% nvram_selmatch("wl1_rate", "0", "selected"); %>><script>Capture(share.auto)</script>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OPTION>
        <OPTION value="6000000" <% nvram_selmatch("wl1_rate", "6000000", "selected"); %>>6 Mbps</OPTION>
        <OPTION value="9000000" <% nvram_selmatch("wl1_rate", "9000000", "selected"); %>>9 Mbps</OPTION>
        <OPTION value="12000000" <% nvram_selmatch("wl1_rate", "12000000", "selected"); %>>12 Mbps</OPTION>
        <OPTION value="18000000" <% nvram_selmatch("wl1_rate", "18000000", "selected"); %>>18 Mbps</OPTION>
        <OPTION value="24000000" <% nvram_selmatch("wl1_rate", "24000000", "selected"); %>>24 Mbps</OPTION>
        <OPTION value="36000000" <% nvram_selmatch("wl1_rate", "36000000", "selected"); %>>36 Mbps</OPTION>
        <OPTION value="48000000" <% nvram_selmatch("wl1_rate", "48000000", "selected"); %>>48 Mbps</OPTION>
	<OPTION value="54000000" <% nvram_selmatch("wl1_rate", "54000000", "selected"); %>>54 Mbps</OPTION>
    </SELECT>&nbsp;&nbsp;<script>Capture(wlanadv.deftransrate)</script></TD></TR>
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>N <script>Capture(wlanadv.transrate)</script>:&nbsp; </font></TD>
          <TD class=FUNFIELD>
      <SELECT name="wl1_nmcsidx" > 
	<!-- Create from javascript -->
    </SELECT>&nbsp;&nbsp;<script>Capture(wlanadv.deftransrate)</script></TD></TR>
          
          
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.transpower)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>
          <SELECT name="wl1_txpwr" > 
		<script>
			var NAME = new Array("100", "75", "50");
			var STRING = new Array(qos.high+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", qos.medium, qos.low);
			var wl_txpwr = '<% nvram_get("wl1_txpwr"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_txpwr == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(qos.high)</script>)</TD></TR>   
          
          
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.protectmode)</script>:&nbsp;</TD>
          <TD class=FUNFIELD>
          <SELECT name="wl1_gmode_protection" > 
		<script>
			var NAME = new Array("off", "auto");
			var STRING = new Array(share.disabled+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", share.auto);
			var wl_gmode_protection = '<% nvram_get("wl1_gmode_protection"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_gmode_protection == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.auto)</script>)</TD></TR>   
          
<% support_invmatch("SES_SUPPORT", "1", "<!--"); %>
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><span ><script>Capture(ses.ses)</script></span>:&nbsp;</span></TD>
          <TD class=FUNFIELD>
          <SELECT name="ses_enable" > 
		<script>
			var NAME = new Array("0", "1");
			var STRING = new Array(share.disabled+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", share.enabled);
			var ses_enable = '<% nvram_get("ses_enable"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(ses_enable == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.enabled)</script>)</TD></TR>
<% support_invmatch("SES_SUPPORT", "1", "-->"); %>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.beacon)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=5 onBlur=valid_range(this,20,65535,"Beacon%20Interval") style="width:35" value='<% nvram_selget("wl1_bcn"); %>' name="wl1_bcn">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;100, <script>Capture(hwlad2.milli)</script>, <script>Capture(hwlad2.range)</script>:&nbsp;20 - 65535)</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.dtim)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><INPUT maxLength=3 onBlur=valid_range(this,1,255,"DTIM%20Interval") style="width:35" value='<% nvram_selget("wl1_dtim"); %>' name="wl1_dtim">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<% get_wl_value("default_dtim"); %>, <script>Capture(hwlad2.range)</script>:&nbsp;1 - 255)</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(hwlad2.frathrh)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=4 onBlur=valid_range(this,256,2346,"Fragmentation%20Threshold") style="width:35" value='<% nvram_selget("wl1_frag"); %>' name="wl1_frag">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;2346, <script>Capture(hwlad2.range)</script>:&nbsp;256 - 2346)</TD></TR>       
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.rts)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><INPUT maxLength=4 onBlur=valid_range(this,0,2347,"RTS%20Threshold") style="width:35" value='<% nvram_selget("wl1_rts"); %>' name="wl1_rts">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;2347, <script>Capture(hwlad2.range)</script>:&nbsp;0 - 2347)</TD></TR>    

         
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
          
          
	<!-- 5G wireless setting over and start 2.4G setting -->
		<TR><TD bgColor=#5b5b5b height=25><P align=right><B><FONT style="FONT-SIZE: 9pt" face=Arial color=#ffffff><script>Capture(wlanadv.lgmenu)</script></FONT></B></P></TD><TD bgColor=#5b5b5b></TD>
		<TD class=FUNNAME1 colspan="2">
	   <TABLE>
	   <TD width=120><script>Capture(hwlad2.apiso)</script>:&nbsp;</TD>
           <TD width=299 height=25><INPUT type=radio value=1 name=wl0_ap_isolate <% nvram_match("wl0_ap_isolate","1","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;<INPUT type=radio value=0 name=wl0_ap_isolate <% nvram_match("wl0_ap_isolate","0","checked"); %>><b><script>Capture(share.disabled)</script></b>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.disabled)</script>)</TD>
	   </TABLE></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
	   <TABLE>
	   <TD width=120><script>Capture(hwlad2.fburst)</script>:&nbsp;</TD>
           <TD width=299 height=25><INPUT type=radio value=on name=wl0_frameburst <% nvram_match("wl0_frameburst","on","checked"); %>><b><script>Capture(share.enabled)</script></b>&nbsp;&nbsp;&nbsp;<INPUT type=radio value=off name=wl0_frameburst <% nvram_match("wl0_frameburst","off","checked"); %>><b><script>Capture(share.disabled)</script></b>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.enabled)</script>)</TD>
	   </TABLE></TD></TR>
        <TR><script>
			draw_table(ISHR,"");
		</script></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(hwlad2.authtyp)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><SELECT name="wl0_auth_type" > 
		<script>
			var NAME = new Array("0", "1", "2");
			var STRING = new Array(share.auto, wlansec.opensys+"&nbsp;", wlansec.sharekey);
			var wl_auth = '<% nvram_get("wl0_auth_type"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_auth == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;<script>Capture(wlanadv.deftransrate)</script></TD></TR>

        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(hwlad2.basrate)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><SELECT  name="wl0_rateset" > 
		<script>
			var NAME = new Array("12", "default", "all");
			var STRING = new Array("1-2 Mbps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", hwlad2.def, hwlad2.all);
			var wl_rateset = '<% nvram_get("wl0_rateset"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_rateset == NAME[i]) selected = "selected";
				else 			  selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    		</SELECT>&nbsp;&nbsp;<script>Capture(hwlad2.defdef)</script></TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.transrate)</script>:&nbsp; </font></TD>
        <TD class=FUNFIELD>
      <SELECT name="wl0_rate" > 
        <OPTION value="0" <% nvram_selmatch("wl0_rate", "0", "selected"); %>><script>Capture(share.auto)</script>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OPTION>
      	<OPTION value="1000000" <% nvram_selmatch("wl0_rate", "1000000", "selected"); %>>1 Mbps</OPTION> 
	<OPTION value="2000000" <% nvram_selmatch("wl0_rate", "2000000", "selected"); %>>2 Mbps</OPTION> 
	<OPTION value="5500000" <% nvram_selmatch("wl0_rate", "5500000", "selected"); %>><% nvram_else_match("language","DE","5,5", "5.5"); %> Mbps</OPTION> 
<% nvram_match("wl_net_mode", "b-only", "<!--"); %>
        <OPTION value="6000000" <% nvram_selmatch("wl0_rate", "6000000", "selected"); %>>6 Mbps</OPTION>
        <OPTION value="9000000" <% nvram_selmatch("wl0_rate", "9000000", "selected"); %>>9 Mbps</OPTION>
<% nvram_match("wl_net_mode", "b-only", "-->"); %>
        <OPTION value="11000000" <% nvram_selmatch("wl0_rate", "11000000", "selected"); %>>11 Mbps</OPTION>
<% nvram_match("wl_net_mode", "b-only", "<!--"); %>
        <OPTION value="12000000" <% nvram_selmatch("wl0_rate", "12000000", "selected"); %>>12 Mbps</OPTION>
        <OPTION value="18000000" <% nvram_selmatch("wl0_rate", "18000000", "selected"); %>>18 Mbps</OPTION>
        <OPTION value="24000000" <% nvram_selmatch("wl0_rate", "24000000", "selected"); %>>24 Mbps</OPTION>
        <OPTION value="36000000" <% nvram_selmatch("wl0_rate", "36000000", "selected"); %>>36 Mbps</OPTION>
        <OPTION value="48000000" <% nvram_selmatch("wl0_rate", "48000000", "selected"); %>>48 Mbps</OPTION>
	<OPTION value="54000000" <% nvram_selmatch("wl0_rate", "54000000", "selected"); %>>54 Mbps</OPTION>
<% nvram_match("wl_net_mode", "b-only", "-->"); %>
    </SELECT>&nbsp;&nbsp;<script>Capture(wlanadv.deftransrate)</script></TD></TR>
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2>N <script>Capture(wlanadv.transrate)</script>:&nbsp; </font></TD>
          <TD class=FUNFIELD>
      <SELECT name="wl0_nmcsidx" > 
	<!-- Create from javascript -->
    </SELECT>&nbsp;&nbsp;<script>Capture(wlanadv.deftransrate)</script></TD></TR>
         
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.transpower)</script>:&nbsp;</TD>
        <TD class=FUNFIELD>
          <SELECT name="wl0_txpwr" > 
		<script>
			var NAME = new Array("100", "75", "50");
			var STRING = new Array(qos.high+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", qos.medium, qos.low);
			var wl_txpwr = '<% nvram_get("wl0_txpwr"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_txpwr == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(qos.high)</script>)</TD></TR>  
          
           
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.protectmode)</script>:&nbsp;</TD>
         <TD class=FUNFIELD>
          <SELECT name="wl0_gmode_protection" > 
		<script>
			var NAME = new Array("off", "auto");
			var STRING = new Array(share.disabled+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", share.auto);
			var wl_gmode_protection = '<% nvram_get("wl0_gmode_protection"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(wl_gmode_protection == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.auto)</script>)</TD></TR>   
<% support_invmatch("SES_SUPPORT", "1", "<!--"); %>
         <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><span ><script>Capture(ses.ses)</script></span>:&nbsp;</span></TD>
        <TD class=FUNFIELD>
          <SELECT name="ses_enable" > 
		<script>
			var NAME = new Array("0", "1");
			var STRING = new Array(share.disabled+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", share.enabled);
			var ses_enable = '<% nvram_get("ses_enable"); %>';
			var selected;
			for(i=0;i<NAME.length;i++) {
				if(ses_enable == NAME[i]) selected = "selected";
				else 		       selected = "";
				document.write("<OPTION value="+NAME[i]+" "+selected+">"+STRING[i]+"</OPTION>");
			}
		</script>
    </SELECT>&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<script>Capture(share.enabled)</script>)</TD></TR>
<% support_invmatch("SES_SUPPORT", "1", "-->"); %>
             <TR><script>
			draw_table(ISHR,"");
		</script></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.beacon)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=5 onBlur=valid_range(this,20,65535,"Beacon%20Interval") style="width:35" value='<% nvram_selget("wl0_bcn"); %>' name="wl0_bcn">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;100, <script>Capture(hwlad2.milli)</script>, <script>Capture(hwlad2.range)</script>:&nbsp;20 - 65535)</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.dtim)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><INPUT maxLength=3 onBlur=valid_range(this,1,255,"DTIM%20Interval") style="width:35" value='<% nvram_selget("wl0_dtim"); %>' name="wl0_dtim">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;<% get_wl_value("default_dtim"); %>, <script>Capture(hwlad2.range)</script>:&nbsp;1 - 255)</TD></TR>
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(hwlad2.frathrh)</script>:&nbsp;</TD>
        <TD class=FUNFIELD><INPUT maxLength=4 onBlur=valid_range(this,256,2346,"Fragmentation%20Threshold") style="width:35" value='<% nvram_selget("wl0_frag"); %>' name="wl0_frag">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;2346, <script>Capture(hwlad2.range)</script>:&nbsp;256 - 2346)</TD></TR>       
        <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(wlanadv.rts)</script>:&nbsp;</TD>
          <TD class=FUNFIELD><INPUT maxLength=4 onBlur=valid_range(this,0,2347,"RTS%20Threshold") style="width:35" value='<% nvram_selget("wl0_rts"); %>' name="wl0_rts">&nbsp;&nbsp;(<script>Capture(hwlad2.def)</script>:&nbsp;2347, <script>Capture(hwlad2.range)</script>:&nbsp;0 - 2347)</TD></TR>    

        <TR><script>draw_table(ISBLANK,"");</script></TR>

	</TBODY></TABLE></TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
