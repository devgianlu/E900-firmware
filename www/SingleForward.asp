<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Single Port Forwarding</TITLE>
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
document.title = apptopmenu.singleport;
var lan_ip = '<% nvram_get("lan_ipaddr"); %>';

function Port_Range_Forward_Info(id,Start_Port, End_Port, Protocol,To_Ip,Enable){
        this.id = id;
	this.Start_Port=Start_Port;
        this.End_Port=End_Port;
	this.Protocol=Protocol;
        this.To_Ip=To_Ip;
	this.Enable=Enable;
}
                                                                                                                             
Port_Range_Forward_Infos = new Array();
Port_Range_Forward_Infos_length = 0;
<% Get_Port_Range_Forward_Info("all_list","0"); %>
function chk_multi_port_range(F,count,starti,xfrom,xto,xip,xpro,xenable)
{
        var i=0,j=0,m=0;
        var flg = true ;
	var errmsgs;
        var NAME = new Array("FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
        var PORT = new Array( "21","23","25","53","69","79","80","110","119","161","1723");
	var tport;
        for(i=0; i<count; i++)
        {
		if(i>4)
		{
			//alert(eval(xfrom+parseInt(starti+i)+".value"));
			if ( eval(xfrom+parseInt(starti+i)+".value") == 0  || eval(xto+parseInt(starti+i)+".value") == 0 )
                        	continue;
			for(j=0;j<Port_Range_Forward_Infos_length;j++)
			{
				if(Port_Range_Forward_Infos[j].Start_Port=="" || Port_Range_Forward_Infos[j].End_Port=="")
					continue;
				if( parseInt(eval(xfrom+parseInt(starti+i)+".value"))>=parseInt(Port_Range_Forward_Infos[j].Start_Port) &&
				parseInt(eval(xfrom+parseInt(starti+i)+".value"))<=parseInt(Port_Range_Forward_Infos[j].End_Port) &&
				eval(xenable+parseInt(starti+i)+".value")=="on" && Port_Range_Forward_Infos[j].Enable=="on" &&
				(eval(xpro+parseInt(starti+i)+".value")=="both"||Port_Range_Forward_Infos[j].Protocol=="both"||
				eval(xpro+parseInt(starti+i)+".value")==Port_Range_Forward_Infos[j].Protocol)&&
				eval(xip+parseInt(starti+i)+".value")!=Port_Range_Forward_Infos[j].To_Ip)
				{
					errmsgs = "The " + eval(xfrom+parseInt(starti+i)+".value") + " External Port is conflict!";
					alert(errmsgs);
					flg=false;
					break;
				}			
			
			}
		}
		else
		{
			if ( eval("F.name"+i+".value") == "None" ) continue;
			tport=0;
                	for(m=0; m<NAME.length; m++)
                	{
                        	if ( eval("F.name"+i+".value") == NAME[m] )
				{
					tport=PORT[m];
					break;
				}
			}
			if(tport>0)
			{
                        for(j=0;j<Port_Range_Forward_Infos_length;j++)
                        {
                                if(Port_Range_Forward_Infos[j].Start_Port=="" || Port_Range_Forward_Infos[j].End_Port=="")
                                        continue;
                                if( tport>=parseInt(Port_Range_Forward_Infos[j].Start_Port) &&
                                tport<=parseInt(Port_Range_Forward_Infos[j].End_Port) &&
                                eval(xenable+parseInt(starti+i)+".value")=="on" && Port_Range_Forward_Infos[j].Enable=="on" &&
                                (Port_Range_Forward_Infos[j].Protocol=="both"||Port_Range_Forward_Infos[j].Protocol=="tcp")&&
                                eval(xip+parseInt(starti+i)+".value")!=Port_Range_Forward_Infos[j].To_Ip)
                                {
                                        errmsgs = "The " + tport + " External Port is conflict!";
                                        alert(errmsgs);
                                        flg=false;
                                        break;
                                }                                                                                                     
                        }
			} 
		}
		if(flg==false) break;
 	}
	return flg;
}

function chk_multi_port_and_ip(F,count,starti,xfrom,xto,xip,xpro,xenable)
{
        var i=0,j=0,m=0;
        var tport;
        for(i=0; i<count; i++)
        {
                if(i>4)
                {
			if(eval(xip+parseInt(starti+i)+".value")!=0)
			{
                        	if ( eval(xfrom+parseInt(starti+i)+".value") == 0  || eval(xto+parseInt(starti+i)+".value") == 0 )
				{
					alert(errmsg.err14 + '['+ 1 + ' - ' + 65535 +'].');
					return false;
				}	
			}
		}
	}
	return true;
}

function to_submit(F)
{
	var i = 0;
	var ip = "";
	var ip_prefix = "";

	for (i = 0; i < 20; i++) {
		ip_prefix = '<% prefix_ip_get("lan_ipaddr",2); %>';
		ip = ip_prefix + eval("F.ip"+i).value;
		if (ip == lan_ip || ip == (ip_prefix + "255")) {	
			alert(errmsg.err72);
			eval("F.ip"+i).focus();
			return;
		}
	}
	if ( chk_default_port(F) == false ) return ; 
        if ( chk_multi_port(F,15,5,"F.from","F.to","F.pro") == false ) return;
	if ( chk_multi_port_and_ip(F,15,0,"F.from","F.to","F.ip","F.pro","F.enable")==false) return;
	if ( chk_multi_port_range(F,15,0,"F.from","F.to","F.ip","F.pro","F.enable")==false) return;
        F.submit_button.value = "SingleForward";
        F.gui_action.value = "Apply";
        F.submit();
}

function chk_default_port(F)
{
        var i,j,k,dport=-1,dip=0;
        var NAME = new Array("FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
        var PORT = new Array( "21","23","25","53","69","79","80","110","119","161","1723");
	var PROTO = new Array( "TCP","TCP","TCP","UDP","UDP","TCP","TCP","TCP","TCP","UDP","TCP");
        for (i=0; i<5; i++)
        {
                if ( eval("F.name"+i+".value") == "None" ) continue;

		for(k=i+1;k<5;k++)
		{
                	if ( eval("F.name"+i+".value") == eval("F.name"+k+".value") )
			{
				alert( errmsg.err74);
				return false;
			}
		}

                for(j=0; j<NAME.length; j++)
                {
                        if ( eval("F.name"+i+".value") == NAME[j] )
                        {
                                //**Default ports can't be equal.**/
                                if ( dport == j && ( eval("F.ip"+i+".value") == eval("F.ip"+dip+".value") ) )
                                {
                                        alert ( errmsg.err74 ) ;
                                        return false ;
                                }
                                //********************************//
                                dport = j ;
                                dip = i ;
                                break;
 			}
                }
                for(k=0; k<15; k++)
                {
                        if ( eval("F.from"+parseInt(5+k)+".value") == PORT[dport])
                        {
				if(eval("F.pro"+parseInt(5+k)+".value") == PROTO[dport].toLowerCase() 
					|| eval("F.pro"+parseInt(5+k)+".value") == "both")
				{
                                alert ( errmsg.err74 ) ;
                                return false ;
				}
                        }
                }
        }
        return true ;
	
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

function display_app_info(N)
{
        var NAME = new Array("None","FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
        var PORT = new Array( "---","21","23","25","53","69","79","80","110","119","161","1723");
	var PROT = new Array( "---","TCP","TCP","TCP","UDP","UDP","TCP","TCP","TCP","TCP","UDP","TCP");
	var expt_id = "app_export" + N
	var inpt_id = "app_inport" + N;
	var prot_id = "app_prot" + N;
	document.getElementById(expt_id).innerHTML = PORT[eval("document.forms[0].name"+N).selectedIndex];
	document.getElementById(inpt_id).innerHTML = PORT[eval("document.forms[0].name"+N).selectedIndex];
	document.getElementById(prot_id).innerHTML = PROT[eval("document.forms[0].name"+N).selectedIndex];
}

function init()
{
	var i;
	var swmode = '<% nvram_get("switch_mode");%>';
	var protocolWan = '<% nvram_get("wan_proto");%>';
	if( swmode == 1)
		alert(share.brdgmwn);
	else if( protocolWan == "dslite" ){
		alert (share.dslitewn);
	}

	for(i = 0; i< 5; i++)
		display_app_info(i);

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}
</SCRIPT></HEAD>
<BODY onload=init()>
<FORM name=portRange method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=gui_action>
<input type=hidden name="forward_single" value="15">
<input type=hidden name="wait_time" value="3">

<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
<TR><script>draw_table(MAINFUN,apptopmenu.singleport);</script></TR>
<TD class=TITLE2>
		  <center>
	      <TABLE class=BORDERTABLE_LEFT>
		  <TR><TD height=30 align=right>
         <B><script>Capture(portforward.appname)</script></B>
        </TD></TR>
       <TR><TD height=30 align=right>
        <SELECT size=1 name=name0 onchange=display_app_info("0")>
		<script>
		var NAME = new Array("None","FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
		var name = "<% single_forward_table("name","0"); %>";
		var selected;

		if(name == "") { name = "None"; }

		for(i=0;i<NAME.length;i++) {
			if(name == NAME[i])	selected = "selected";
			else			selected = "";
			
		if(i == 0)	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+share.none+"</OPTION>");
		else	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+NAME[i]+"</OPTION>");
		}
		</script>
	</SELECT> </TD></TR> 
		
			<TR><TD height=30 align=right>
        <SELECT size=1 name=name1 onchange=display_app_info("1")>
		<script>
		var NAME = new Array("None","FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
		var name = "<% single_forward_table("name","1"); %>";
		var selected;

		if(name == "") { name = "None"; }

		for(i=0;i<NAME.length;i++) {
			if(name == NAME[i])	selected = "selected";
			else			selected = "";
			
		if(i == 0)	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+share.none+"</OPTION>");
		else	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+NAME[i]+"</OPTION>");
		}
		</script>
	</SELECT> </TD></TR> 
			
			<TR><TD height=30 align=right>
        <SELECT size=1 name=name2 onchange=display_app_info("2")>
		<script>
		var NAME = new Array("None","FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
		var name = "<% single_forward_table("name","2"); %>";
		var selected;

		if(name == "") { name = "None"; }

		for(i=0;i<NAME.length;i++) {
			if(name == NAME[i])	selected = "selected";
			else			selected = "";
			
		if(i == 0)	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+share.none+"</OPTION>");
		else	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+NAME[i]+"</OPTION>");
		}
		</script>
	</SELECT> </TD></TR> 
			
			<TR><TD height=30 align=right>
        <SELECT size=1 name=name3 onchange=display_app_info("3")>
		<script>
		var NAME = new Array("None","FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
		var name = "<% single_forward_table("name","3"); %>";
		var selected;

		if(name == "") { name = "None"; }

		for(i=0;i<NAME.length;i++) {
			if(name == NAME[i])	selected = "selected";
			else			selected = "";
			
		if(i == 0)	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+share.none+"</OPTION>");
		else	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+NAME[i]+"</OPTION>");
		}
		</script>
	</SELECT> 
	</TD></TR> 
			
			<TR><TD height=30 align=right>
        <SELECT size=1 name=name4 onchange=display_app_info("4")>
		<script>
		var NAME = new Array("None","FTP","Telnet","SMTP","DNS","TFTP","Finger","HTTP","POP3","NNTP","SNMP","PPTP");
		var name = "<% single_forward_table("name","4"); %>";
		var selected;

		if(name == "") { name = "None"; }

		for(i=0;i<NAME.length;i++) {
			if(name == NAME[i])	selected = "selected";
			else			selected = "";
			
		if(i == 0)	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+share.none+"</OPTION>");
		else	
			document.write("<OPTION value="+NAME[i]+" "+selected+">"+NAME[i]+"</OPTION>");
		}
		</script>
	</SELECT> </TD></TR> 
			
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name5 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","5"); %>' class=num></FONT>
 			 </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name6 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","6"); %>' class=num></FONT>
       </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name7 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","7"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name8 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","8"); %>' class=num></FONT>
 			 </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name9 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","9"); %>' class=num></FONT>
       </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name10 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","10"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name11 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","11"); %>' class=num></FONT>
 			 </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name12 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","12"); %>' class=num></FONT>
       </TD></TR>
       <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name13 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","13"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name14 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","14"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name15 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","15"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name16 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","16"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name17 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","17"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name18 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","18"); %>' class=num></FONT>
        </TD></TR>
        <TR><TD height=30 align=right>
           <FONT size=2><INPUT  maxLength=20 size=19 name=name19 onBlur=valid_name(this,"Name") value='<% single_forward_table("name","19"); %>' class=num></FONT>
        </TD></TR>
	
		  </TABLE></center></TD>
	      <TD class=TITLE_IMG></TD>
	      <TD class=FUNNAME_CENTER>
		  <center>
		<TABLE class=BORDERTABLE1>
		<TR>
              <td width=77 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.extport)</script></B></td>
               <td width=77 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.intport)</script></B></td>
               <td width=60 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.protocol)</script></B></td>
               <td width=127 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.toipaddr)</script></B></td>
               <td width=51 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border-bottom-style: none; border-bottom-width: medium">
               <B><script>Capture(share.enabled)</script></B></td>
               </TR>

              <TR align=middle>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_export0></SPAN></font></TD>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_inport0></SPAN></font></TD>
                <TD align=middle width=60 height=30>	<font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_prot0></SPAN></font></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","0"); %>' name=ip0 onBlur=valid_range_ex2(this,1,254,"IP",0) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable0 <% single_forward_table("enable","0"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_export1></SPAN></font></TD>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_inport1></SPAN></font></TD>
                <TD align=middle width=60 height=30>	<font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_prot1></SPAN></font></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","1"); %>' name=ip1 onBlur=valid_range_ex2(this,1,254,"IP",1) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable1 <% single_forward_table("enable","1"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_export2></SPAN></font></TD>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_inport2></SPAN></font></TD>
                <TD align=middle width=60 height=30>	<font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_prot2></SPAN></font></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","2"); %>' name=ip2 onBlur=valid_range_ex2(this,1,254,"IP",2) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable2 <% single_forward_table("enable","2"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_export3></SPAN></font></TD>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_inport3></SPAN></font></TD>
                <TD align=middle width=60 height=30>	<font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_prot3></SPAN></font></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","3"); %>' name=ip3 onBlur=valid_range_ex2(this,1,254,"IP",3) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable3 <% single_forward_table("enable","3"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_export4></SPAN></font></TD>
                <TD width=77 height=30> <font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_inport4></SPAN></font></TD>
                <TD align=middle width=60 height=30>	<font face="Arial" style="font-size: 8pt"> &nbsp;<SPAN id=app_prot4></SPAN></font></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","4"); %>' name=ip4 onBlur=valid_range_ex2(this,1,254,"IP",4) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable4 <% single_forward_table("enable","4"); %>></TD></TR>

              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","5"); %>' name=from5 onBlur=valid_range2(this,1,65535,"Port",5) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","5"); %>' name=to5 onBlur=valid_range2(this,1,65535,"Port",5) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro5 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","5"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","5"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","5"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","5"); %>' name=ip5 onBlur=valid_range_ex2(this,1,254,"IP",5) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable5 <% single_forward_table("enable","5"); %>></TD></TR>

              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","6"); %>' name=from6 onBlur=valid_range2(this,1,65535,"Port",6) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","6"); %>' name=to6 onBlur=valid_range2(this,1,65535,"Port",6) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro6 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","6"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","6"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","6"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","6"); %>' name=ip6 onBlur=valid_range_ex2(this,1,254,"IP",6) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable6 <% single_forward_table("enable","6"); %>></TD></TR>
       <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","7"); %>' name=from7 onBlur=valid_range2(this,1,65535,"Port",7) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","7"); %>' name=to7 onBlur=valid_range2(this,1,65535,"Port",7) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro7 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","7"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","7"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","7"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","7"); %>' name=ip7 onBlur=valid_range_ex2(this,1,254,"IP",7) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable7 <% single_forward_table("enable","7"); %>></TD></TR>

              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","8"); %>' name=from8 onBlur=valid_range2(this,1,65535,"Port",8) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","8"); %>' name=to8 onBlur=valid_range2(this,1,65535,"Port",8) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro8 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","8"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","8"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","8"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","8"); %>' name=ip8 onBlur=valid_range_ex2(this,1,254,"IP",8) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable8 <% single_forward_table("enable","8"); %>></TD></TR>
       <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","9"); %>' name=from9 onBlur=valid_range2(this,1,65535,"Port",9) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","9"); %>' name=to9 onBlur=valid_range2(this,1,65535,"Port",9) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro9 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","9"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","9"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","9"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","9"); %>' name=ip9 onBlur=valid_range_ex2(this,1,254,"IP",9) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable9 <% single_forward_table("enable","9"); %>></TD></TR>

              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","10"); %>' name=from10 onBlur=valid_range2(this,1,65535,"Port",10) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","10"); %>' name=to10 onBlur=valid_range2(this,1,65535,"Port",10) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro10 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","10"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","10"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","10"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","10"); %>' name=ip10 onBlur=valid_range_ex2(this,1,254,"IP",10) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable10 <% single_forward_table("enable","10"); %>></TD></TR>

       <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","11"); %>' name=from11 onBlur=valid_range2(this,1,65535,"Port",11) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","11"); %>' name=to11 onBlur=valid_range2(this,1,65535,"Port",11) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro11 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","11"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","11"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","11"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","11"); %>' name=ip11 onBlur=valid_range_ex2(this,1,254,"IP",11) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable11 <% single_forward_table("enable","11"); %>></TD></TR>

              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","12"); %>' name=from12 onBlur=valid_range2(this,1,65535,"Port",12) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","12"); %>' name=to12 onBlur=valid_range2(this,1,65535,"Port",12) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro12 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","12"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","12"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","12"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","12"); %>' name=ip12 onBlur=valid_range_ex2(this,1,254,"IP",12) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable12 <% single_forward_table("enable","12"); %>></TD></TR>

       <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","13"); %>' name=from13 onBlur=valid_range2(this,1,65535,"Port",13) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5 value='<% single_forward_table("to","13"); %>' name=to13 onBlur=valid_range2(this,1,65535,"Port",13) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro13 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","13"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","13"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","13"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","13"); %>' name=ip13 onBlur=valid_range_ex2(this,1,254,"IP",13) class=num></FONT></TD>
                <TD height=30><INPUT type=checkbox value=on name=enable13 <% single_forward_table("enable","13"); %>></TD></TR>

              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","14"); %>' name=from14 onBlur=valid_range2(this,0,65535,"Port",14) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","14"); %>' name=to14 onBlur=valid_range2(this,1,65535,"Port",14) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro14 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","14"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","14"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","14"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","14"); %>' name=ip14 onBlur=valid_range_ex2(this,1,254,"IP",14) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable14 <% single_forward_table("enable","14"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","15"); %>' name=from15 onBlur=valid_range2(this,1,65535,"Port",15) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","15"); %>' name=to15 onBlur=valid_range2(this,1,65535,"Port",15) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro15 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","15"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","15"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","15"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","15"); %>' name=ip15 onBlur=valid_range_ex2(this,1,254,"IP",15) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable15 <% single_forward_table("enable","15"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","16"); %>' name=from16 onBlur=valid_range2(this,1,65535,"Port",16) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","16"); %>' name=to16 onBlur=valid_range2(this,1,65535,"Port",16) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro16 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","16"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","16"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","16"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","16"); %>' name=ip16 onBlur=valid_range_ex2(this,1,254,"IP",16) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable16 <% single_forward_table("enable","16"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","17"); %>' name=from17 onBlur=valid_range2(this,1,65535,"Port",17) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","17"); %>' name=to17 onBlur=valid_range2(this,1,65535,"Port",17) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro17 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","17"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","17"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","17"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","17"); %>' name=ip17 onBlur=valid_range_ex2(this,1,254,"IP",17) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable17 <% single_forward_table("enable","17"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","18"); %>' name=from18 onBlur=valid_range2(this,1,65535,"Port",18) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","18"); %>' name=to18 onBlur=valid_range2(this,1,65535,"Port",18) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro18 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","18"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","18"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","18"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","18"); %>' name=ip18 onBlur=valid_range_ex2(this,1,254,"IP",18) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable18 <% single_forward_table("enable","18"); %>></TD></TR>
              <TR align=middle>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("from","19"); %>' name=from19 onBlur=valid_range2(this,1,65535,"Port",19) class=num> </TD>
                <TD width=77 height=30><INPUT style="font-size:8pt; font-family:Arial; width:40" maxLength=5  value='<% single_forward_table("to","19"); %>' name=to19 onBlur=valid_range2(this,1,65535,"Port",19) class=num> </TD>
                <TD align=middle width=60 height=30>
			<SELECT size=1 name=pro19 style="font-family: Arial; font-size: 8pt">
				<OPTION value=tcp <% single_forward_table("sel_tcp","19"); %>><script>Capture(share.tcp)</script></OPTION>
				<OPTION value=udp <% single_forward_table("sel_udp","19"); %>><script>Capture(share.udp)</script></OPTION>
				<script>document.write("<OPTION value=both <% single_forward_table("sel_both","19"); %>>"+share.both+"</OPTION>");</script>
			</SELECT></TD>
                <TD width=127 height=30 dir="ltr"><FONT style="FONT-SIZE: 8pt" face=Arial><% prefix_ip_get("lan_ipaddr",1); %>&nbsp;<INPUT  maxLength=3 style="width:30" value='<% single_forward_table("ip","19"); %>' name=ip19 onBlur=valid_range_ex2(this,1,254,"IP",19) class=num></FONT></TD>
                <TD  height=30><INPUT type=checkbox value=on name=enable19 <% single_forward_table("enable","19"); %>></TD></TR>
		</TABLE></center>
		</TD>
	  </TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
