<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Port Range Forward</TITLE>
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
document.title = apptopmenu.portrange;
var lan_ip = '<% nvram_get("lan_ipaddr"); %>';
function Port_Single_Forward_Info(id,Ex_Port, In_Port, Protocol,To_Ip,Enable){
        this.id = id;
        this.Ex_Port=Ex_Port;
        this.In_Port=In_Port;
        this.Protocol=Protocol;
        this.To_Ip=To_Ip;
        this.Enable=Enable;
}
                                                                                                                             
Port_Single_Forward_Infos = new Array();
Port_Single_Forward_Infos_length = 0;
<% Get_Port_Single_Forward_Info("all_list","0"); %>

function chk_multi_port_single(F,count,starti,xfrom,xto,xip,xpro,xenable)
{
        var i=0,j=0;
        var flg = true ;
        var errmsgs;
        for(i=0; i<count; i++)
        {
                if ( eval(xfrom+parseInt(starti+i)+".value") == 0  || eval(xto+parseInt(starti+i)+".value") == 0 )
                {
					if(eval(xenable+parseInt(starti+i)+".checked") == true)
					{
						alert(errmsg.err14 + '[1 - 65535].');
						//eval(xfrom+parseInt(starti+i)).focus();
						flg=false;
						break;
					}
					else
						continue;
				}
                for(j=0;j<Port_Single_Forward_Infos_length;j++)
                {
			if(Port_Single_Forward_Infos[j].Ex_Port=="" || Port_Single_Forward_Infos[j].In_Port=="")
				continue;
                        if( parseInt(eval(xfrom+parseInt(starti+i)+".value"))<=parseInt(Port_Single_Forward_Infos[j].Ex_Port) &&
                        parseInt(eval(xto+parseInt(starti+i)+".value"))>=parseInt(Port_Single_Forward_Infos[j].Ex_Port) &&
                        eval(xenable+parseInt(starti+i)+".value")=="on" && Port_Single_Forward_Infos[j].Enable=="on" &&
                        (eval(xpro+parseInt(starti+i)+".value")=="both"||Port_Single_Forward_Infos[j].Protocol=="both"||
                        eval(xpro+parseInt(starti+i)+".value")==Port_Single_Forward_Infos[j].Protocol)&&
                        eval(xip+parseInt(starti+i)+".value")!=Port_Single_Forward_Infos[j].To_Ip)
                        {
                                errmsgs = "The " + eval(xfrom+parseInt(starti+i)+".value") +"-"+eval(xto+parseInt(starti+i)+".value") + " External Port is conflict!";
                                alert(errmsgs);
                                flg=false;
                                break;
                        }
                                                                                                                             
                }
                if(flg==false) break;
        }
        return flg;
}
	
function to_submit(F)
{
	var i,j;
	var ip = "";
	var ip_prefix = "";
        var tip;
        i = lan_ip.lastIndexOf('.');
        tip=lan_ip.substring(i+1);
	
	var e = collect_alldata_Fordward();
        if (e == false)return;
  	for (var i = 0; i < 15;i++)
	{
            if(tip==eval("F.ip"+i+".value"))
            {
            	alert(errmsg.err80);
		return;
            }

   	    for(var j = i+1; j < 15; j++)
	    {
                if(((eval("F.from"+i+".value") > 0) ||
                (eval("F.to"+i+".value") > 0)) &&
                ((eval("F.from"+j+".value") > 0) ||
                (eval("F.to"+j+".value") > 0)))
            	{
                        if(!check_port(parseInt(eval("F.from"+i+".value")),
                                parseInt(eval("F.to"+i+".value")),
                                parseInt(eval("F.from"+j+".value")),
                                parseInt(eval("F.to"+j+".value"))))
                        {
                            if((eval("F.pro"+i+".value") == eval("F.pro"+j+".value")) ||
                                (eval("F.pro"+i+".value") == "both") ||
                                (eval("F.pro"+j+".value") == "both"))
                            	{
                                        alert(errmsg.err74);
                                        return;
                                }
                        }
            	}
	    }
	    if((parseInt(eval("F.from"+i+".value")) > parseInt(eval("F.to"+i+".value"))) && eval("F.enable"+i+".checked"))
	    { 
		alert(errmsg.err51);
		eval("F.from"+i).focus();
		return;
	    }	
        }
	if(chk_multi_port_single(F,15,0,"F.from","F.to","F.ip","F.pro","F.enable")==false) return;
        F.submit_button.value = "Forward";
       	F.gui_action.value = "Apply";
        F.submit();
}

function collect_alldata_Fordward() //ita add 06/10/20 check addr
{
        var i=0;
        var txtportform,txtto,txtport,txtip,b;
        var time=15;
        data = new Array();
        all_data = new String();
        for(i ; i < time ; i++)
        {
                txtportform =eval("document.portRange.from"+i).value;
                txtto = eval("document.portRange.to"+i).value;
                txtport = eval("document.portRange.pro"+i).value;
                txtip = eval("document.portRange.ip"+i).value;

                data[i] = txtportform +"," + txtto +"," + txtport+","+txtip;
                all_data = all_data+data[i];
                if(i!=15) all_data=all_data+" ";
        }
        b=check_addr(all_data);
        if( b == false) return false;
}

function valid_range2(I,start,end,M, idx)
{
        if (M=="Port")
        {
                var bCheckBoxEnable = eval("document.portRange.enable"+idx).checked;
                if (!bCheckBoxEnable)
                        if (I.value == "0" || I.value == "")
                                return true;
        }
        return valid_range(I,start,end,M);
}

function valid_range_ex2(I,start,end,M, idx)
{
        if (M=="IP")
        {
                var bCheckBoxEnable = eval("document.portRange.enable"+idx).checked;
                if (!bCheckBoxEnable)
                        if (I.value == "0" || I.value == "")
                                return true;
        }
        return valid_range_ex(I,start,end,M);
}

function valid_range_ex(I,start,end,M)
{
        var i;
        var tip;
        i = lan_ip.lastIndexOf('.');
        tip=lan_ip.substring(i+1);
                                                                                                               
        if(tip==I.value)
        {
            alert(errmsg.err80);
        I.value = I.defaultValue;
                return false;
        }
    return valid_range(I,start,end,M);
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
</SCRIPT></HEAD>
<BODY onload=init()>
<FORM name=portRange method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=gui_action>
<input type=hidden name="forward_port" value="15">
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,apptopmenu.portrange);</script></TR>
		<TR><TD class=TITLE2><TABLE class=BORDERTABLE_LEFT>
		<TR><TD height=30 align=<% ui_position("rtl_left", ""); %>>
         <B><script>Capture(portforward.appname)</script></B>
        </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name0 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","0"); %>' class=num></FONT>
 			 </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name1 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","1"); %>' class=num></FONT>
       </TD></TR>
       <TR><TD height=30 align=right> 
           <FONT size=2><INPUT  maxLength=20 size=19 name=name2 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","2"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name3 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","3"); %>' class=num></FONT>
 			 </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name4 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","4"); %>' class=num></FONT>
       </TD></TR>
       <TR><TD height=30 align=right> 
           <FONT size=2><INPUT  maxLength=20 size=19 name=name5 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","5"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name6 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","6"); %>' class=num></FONT>
 			 </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name7 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","7"); %>' class=num></FONT>
       </TD></TR>
       <TR><TD height=30 align=right> 
           <FONT size=2><INPUT  maxLength=20 size=19 name=name8 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","8"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right> 
           <FONT size=2><INPUT  maxLength=20 size=19 name=name9 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","9"); %>' class=num></FONT>
        </TD></TR>
	<TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name10 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","10"); %>' class=num></FONT>
        </TD></TR>
	<TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name11 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","11"); %>' class=num></FONT>
        </TD></TR>
	<TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name12 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","12"); %>' class=num></FONT>
        </TD></TR>
	<TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name13 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","13"); %>' class=num></FONT>
        </TD></TR>
	<TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name14 onBlur=valid_name(this,"Name") value='<% port_forward_table("name","14"); %>' class=num></FONT>
        </TD></TR>
		
		</TABLE></TD><TD class=TITLE_IMG></TD>
	<TD class=FUNNAME_CENTER><center><TABLE class=BORDERTABLE1>
	<TR>
              <td width=30% bordercolorlight="#2971b9" bordercolordark="#2971b9" height="30" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(portforward.start2end)</script></B></td>
               <td width=19% bordercolorlight="#2971b9" bordercolordark="#2971b9" height="30" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.protocol)</script></B></td>
               <td width=34% bordercolorlight="#2971b9" bordercolordark="#2971b9" height="30" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.toipaddr)</script></B></td>
               <td  bordercolorlight="#2971b9" bordercolordark="#2971b9" height="30" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.enabled)</script></B></td>
               </TR>
               
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","0"); %>' name=from0 onBlur=valid_range2(this,1,65535,"Port",0) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","0"); %>' name=to0 onBlur=valid_range2(this,1,65535,"Port",0) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro0>
				<OPTION value=tcp <% port_forward_table("sel_tcp","0"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","0"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","0"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				<TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","0"); %>' name=ip0 onBlur=valid_range_ex2(this,1,254,"IP",0) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable0 <% port_forward_table("enable","0"); %>></TD></TR>

              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","1"); %>' name=from1 onBlur=valid_range2(this,1,65535,"Port",1) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","1"); %>' name=to1 onBlur=valid_range2(this,1,65535,"Port",1) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro1>
				<OPTION value=tcp <% port_forward_table("sel_tcp","1"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","1"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","1"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				 <TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","1"); %>' name=ip1 onBlur=valid_range_ex2(this,1,254,"IP",1) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable1 <% port_forward_table("enable","1"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","2"); %>' name=from2 onBlur=valid_range2(this,1,65535,"Port",2) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                       <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","2"); %>' name=to2 onBlur=valid_range2(this,1,65535,"Port",2) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro2>
				<OPTION value=tcp <% port_forward_table("sel_tcp","2"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","2"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","2"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				<TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","2"); %>' name=ip2 onBlur=valid_range_ex2(this,1,254,"IP",2) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable2 <% port_forward_table("enable","2"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","3"); %>' name=from3 onBlur=valid_range2(this,1,65535,"Port",3) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","3"); %>' name=to3 onBlur=valid_range2(this,1,65535,"Port",3) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro3>
				<OPTION value=tcp <% port_forward_table("sel_tcp","3"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","3"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","3"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				<TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","3"); %>' name=ip3 onBlur=valid_range_ex2(this,1,254,"IP",3) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable3 <% port_forward_table("enable","3"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","4"); %>' name=from4 onBlur=valid_range2(this,1,65535,"Port",4) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","4"); %>' name=to4 onBlur=valid_range2(this,1,65535,"Port",4) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro4>
				<OPTION value=tcp <% port_forward_table("sel_tcp","4"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","4"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","4"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				<TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","4"); %>' name=ip4 onBlur=valid_range_ex2(this,1,254,"IP",4) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable4 <% port_forward_table("enable","4"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","5"); %>' name=from5 onBlur=valid_range2(this,1,65535,"Port",5) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","5"); %>' name=to5 onBlur=valid_range2(this,1,65535,"Port",5) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro5>
				<OPTION value=tcp <% port_forward_table("sel_tcp","5"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","5"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","5"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				  <TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","5"); %>' name=ip5 onBlur=valid_range_ex2(this,1,254,"IP",5) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable5 <% port_forward_table("enable","5"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","6"); %>' name=from6 onBlur=valid_range2(this,1,65535,"Port",6) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","6"); %>' name=to6 onBlur=valid_range2(this,1,65535,"Port",6) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro6>
				<OPTION value=tcp <% port_forward_table("sel_tcp","6"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","6"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","6"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				<TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","6"); %>' name=ip6 onBlur=valid_range_ex2(this,1,254,"IP",6) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable6 <% port_forward_table("enable","6"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","7"); %>' name=from7 onBlur=valid_range2(this,1,65535,"Port",7) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                       <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","7"); %>' name=to7 onBlur=valid_range2(this,1,65535,"Port",7) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro7>
				<OPTION value=tcp <% port_forward_table("sel_tcp","7"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","7"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","7"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				<TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","7"); %>' name=ip7 onBlur=valid_range_ex2(this,1,254,"IP",7) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable7 <% port_forward_table("enable","7"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","8"); %>' name=from8 onBlur=valid_range2(this,1,65535,"Port",8) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","8"); %>' name=to8 onBlur=valid_range2(this,1,65535,"Port",8) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro8>
				<OPTION value=tcp <% port_forward_table("sel_tcp","8"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","8"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","8"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				 <TD width=34% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","8"); %>' name=ip8 onBlur=valid_range_ex2(this,1,254,"IP",8) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable8 <% port_forward_table("enable","8"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","9"); %>' name=from9 onBlur=valid_range2(this,1,65535,"Port",9) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","9"); %>' name=to9 onBlur=valid_range2(this,1,65535,"Port",9) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
			<SELECT size=1 name=pro9>
				<OPTION value=tcp <% port_forward_table("sel_tcp","9"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% port_forward_table("sel_udp","9"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% port_forward_table("sel_both","9"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></FONT></TD>
				 <TD width=30% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","9"); %>' name=ip9 onBlur=valid_range_ex2(this,1,254,"IP",9) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable9 <% port_forward_table("enable","9"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","10"); %>' name=from10 onBlur=valid_range2(this,1,65535,"Port",10) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","10"); %>' name=to10 onBlur=valid_range2(this,1,65535,"Port",10) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
                        <SELECT size=1 name=pro10>
                                <OPTION value=tcp <% port_forward_table("sel_tcp","10"); %>><script>Capture(share.tcp)</script></OPTION>

                                <OPTION value=udp <% port_forward_table("sel_udp","10"); %>><script>Capture(share.udp)</script></OPTION>
                                <script>document.write("<OPTION value=both <% port_forward_table("sel_both","10"); %>>"+share.both+"</OPTION>");</script>
                        </SELECT></FONT></TD>
				<TD width=30% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","10"); %>' name=ip10 onBlur=valid_range_ex2(this,1,254,"IP",10) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable10 <% port_forward_table("enable","10"); %>></TD></TR>
              <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","11"); %>' name=from11 onBlur=valid_range2(this,1,65535,"Port",11) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","11"); %>' name=to11 onBlur=valid_range2(this,1,65535,"Port",11) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
                        <SELECT size=1 name=pro11>
                                <OPTION value=tcp <% port_forward_table("sel_tcp","11"); %>><script>Capture(share.tcp)</script></OPTION>
                                <OPTION value=udp <% port_forward_table("sel_udp","11"); %>><script>Capture(share.udp)</script></OPTION>
                                <script>document.write("<OPTION value=both <% port_forward_table("sel_both","11"); %>>"+share.both+"</OPTION>");</script>
                        </SELECT></FONT></TD>
				<TD width=30% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","11"); %>' name=ip11 onBlur=valid_range_ex2(this,1,254,"IP",11) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable11 <% port_forward_table("enable","11"); %>></TD></TR>
	    <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","12"); %>' name=from12 onBlur=valid_range2(this,1,65535,"Port",12) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","12"); %>' name=to12 onBlur=valid_range2(this,1,65535,"Port",12) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
                        <SELECT size=1 name=pro12>
                                <OPTION value=tcp <% port_forward_table("sel_tcp","12"); %>><script>Capture(share.tcp)</script></OPTION>
                                <OPTION value=udp <% port_forward_table("sel_udp","12"); %>><script>Capture(share.udp)</script></OPTION>
                                <script>document.write("<OPTION value=both <% port_forward_table("sel_both","12"); %>>"+share.both+"</OPTION>");</script>
                        </SELECT></FONT></TD>
				 <TD width=30% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","12"); %>' name=ip12 onBlur=valid_range_ex2(this,1,254,"IP",12) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable12 <% port_forward_table("enable","12"); %>></TD></TR>
            <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","13"); %>' name=from13 onBlur=valid_range2(this,1,65535,"Port",13) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","13"); %>' name=to13 onBlur=valid_range2(this,1,65535,"Port",13) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
                        <SELECT size=1 name=pro13>
                                <OPTION value=tcp <% port_forward_table("sel_tcp","13"); %>><script>Capture(share.tcp)</script></OPTION>
                                <OPTION value=udp <% port_forward_table("sel_udp","13"); %>><script>Capture(share.udp)</script></OPTION>
                                <script>document.write("<OPTION value=both <% port_forward_table("sel_both","13"); %>>"+share.both+"</OPTION>");</script>
                        </SELECT></FONT></TD>
				<TD width=30% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","13"); %>' name=ip13 onBlur=valid_range_ex2(this,1,254,"IP",13) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable13 <% port_forward_table("enable","13"); %>></TD></TR>
            <TR align=middle>
                <TD width=30% height=30><FONT face="Arial, Helvetica, sans-serif"><INPUT  maxLength=5 style="width:40" value='<% port_forward_table("from","14"); %>' name=from14 onBlur=valid_range2(this,1,65535,"Port",14) class=num><span >&nbsp; <script>Capture(portforward.to)</script></span>
                                        <INPUT  maxLength=5 style="width:40" value='<% port_forward_table("to","14"); %>' name=to14 onBlur=valid_range2(this,1,65535,"Port",14) class=num> </FONT></TD>
                <TD align=middle width=19% height=30><FONT face=Arial color=blue>
                        <SELECT size=1 name=pro14>
                                <OPTION value=tcp <% port_forward_table("sel_tcp","14"); %>><script>Capture(share.tcp)</script></OPTION>
                                <OPTION value=udp <% port_forward_table("sel_udp","14"); %>><script>Capture(share.udp)</script></OPTION>
                                <script>document.write("<OPTION value=both <% port_forward_table("sel_both","14"); %>>"+share.both+"</OPTION>");</script>
                        </SELECT></FONT></TD>
				<TD width=30% height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% port_forward_table("ip","14"); %>' name=ip14 onBlur=valid_range_ex2(this,1,254,"IP",14) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable14 <% port_forward_table("enable","14"); %>></TD></TR>
	</TABLE></center></TD>
	</TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
