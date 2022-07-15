<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>IPv6 Firewall</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>
<style type="text/css">
#baseF {
FONT-SIZE: 8pt; 
FONT-FAMILY: Arial;
}
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
<SCRIPT>
document.title = apptopmenu.ipv6_firewall;
var ipv6_clitbl = null;
var Firewall_List = new Array();
var CurrentTrId = 0;
var editEntry = 0;
/*Firewall_List[0] = new Firewall_List_Entry('description','ipv6 address','TCP/UDP','Port From','Port To', 'TCP/UDP', 'Port From', 'Port To');*/
/*filter_ipv6_cnt=2
filter_ipv6_list=123;345;tcp;234;234;tcp;234;234/456;567;tcp;67;78;tcp;67;89/ */
var Filter_ipv6_list = "<% nvram_get("filter_ipv6_list"); %>";
var Filter_cnt = <% nvram_get("filter_ipv6_cnt"); %>;

function string_break2(len, src)
{
	var i; 
	var j;
	var num = 1; 
	var c = 0;
	var dst = "";

	if (src.length < len) {
		return src;
	}

	for (i = 0; i < src.length; i = i + 1 + c, num++) {
		c = 0;
		if (src.charAt(i) == '&') {
			if (src.charAt(i + 1) == 'a') {
				c = 4;  
			} else if (src.charAt(i + 1) == 'l') {
				c = 3;
			}
		}
		dst = dst + src.charAt(i);
		for (j = 1; j < c + 1; j++) {
			dst = dst + src.charAt(i + j);
		}
		if (num == len) {
			dst = dst + "<br>";
			num = 0;
		}
	}

	return dst;
}

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

function Viewtbl()
{
	ipv6_clitbl = self.open('IPv6_Client_Table.asp','ipv6_clitbl','alwaysRaised,resizable,scrollbars,width=920,height=400');
	ipv6_clitbl.focus();
}

function exit()
{
        closeWin(ipv6_clitbl);
}

function Firewall_List_Entry(desc,addr,pro0,from0,to0,pro1,from1,to1){
	  this.desc = desc;
	  this.addr = addr;
	  this.pro0 = pro0;
	  this.from0 = from0;
	  this.to0 = to0;
	  this.pro1 = pro1;
	  this.from1 = from1;
	  this.to1 = to1;
}

function init(){
	var j =0;
	var list;
	var lang = "<% nvram_get("detect_lang");%>";

	list = Filter_ipv6_list.replace(/&#34;/g, "\"");
	list = list.replace(/&#38;/g, "&");
	list = list.replace(/&#39;/g, "\'");
	list = list.replace(/&#60;/g, "<");
	list = list.replace(/&#62;/g, ">");
	list = list.replace(/&#92;/g, "\\");

	while (Filter_cnt != 0)
	{
		//var filter_list = Filter_ipv6_list.split("/");
		var filter_list = list.split("/");
		var n = Filter_cnt -1;
		var list_value = filter_list[Filter_cnt -1].split(";");
		Firewall_List[j] = new Firewall_List_Entry(list_value[0],list_value[1],list_value[2],list_value[3],list_value[4],list_value[5],list_value[6],list_value[7]);
	j++;
	Filter_cnt--;
	}
     for(var i=0; i < Firewall_List.length; i++)
     {
     	addList(i);
     }
	var swmode = '<% nvram_get("switch_mode");%>';
	if( swmode == 1)
		alert(share.brdgmwn);

     if(lang == "AR")
     {
	document.getElementById("IdDescription").style.textAlign = "right";
	document.getElementById("Ipv6Addr").style.textAlign = "right";
	document.getElementById("Ipv6Pro").style.textAlign = "right";
     }else
     {
	     document.getElementById("IdDescription").style.textAlign = "left";
	     document.getElementById("Ipv6Addr").style.textAlign = "left";
	     document.getElementById("Ipv6Pro").style.textAlign = "left";
     }

	 var session_key = "<% nvram_get("session_key"); %>";
	 var close_session = "<% get_session_status(); %>";
	 init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

//add by willsun to fix the bug E900-53 at 2012/02/27
function IsCrossRange(n1,n2,n3,n4,p1,p2)
{
    // 1:TCP , 2:UDP , 0:BOTH
    var a,b,c,d ;
    a = parseInt(n1,10);
    b = parseInt(n2,10);
    c = parseInt(n3,10);
    d = parseInt(n4,10);
    if ( a==0 && b==0 && c==0 && d==0 ) return false ;
    if ( p1!=p2 && p1!=0 && p2!=0 ) return false ;
    if ( a<=c && b>=c && ((p1==0 || p2==0) || (p1==p2))) return true ;
    if ( a<=d && b>=d && ((p1==0 || p2==0) || (p1==p2))) return true ;
    if ( a>=c && b<=d && ((p1==0 || p2==0) || (p1==p2))) return true ;
    return false ;
}

function CHECK_IPV6_FIREWALL_ENTRY() {
	var f = document.forms[0];
	var desc = "none";
	var ipv6_addr;
	var pro0, from0, to0;
	var pro1, from1, to1;
	var i, j, c;
	
	for (i = 0; i < Firewall_List.length; i++) {
		desc = Firewall_List[i].desc;
		ipv6_addr = Firewall_List[i].addr;
		pro0 = Firewall_List[i].pro0;
		from0 = Firewall_List[i].from0;
		to0 = Firewall_List[i].to0;
		pro1 = Firewall_List[i].pro1;
		from1 = Firewall_List[i].from1;
		to1 = Firewall_List[i].to1;

		for (c = 0; c < desc.length; c++) {
			if (desc.charAt(c) == ";" || desc.charAt(c) == "/") {
				alert( errmsg.err104 );
				return false;
			}
		}

		if (parseInt(from0,10) > parseInt(to0,10) || parseInt(from1,10) > parseInt(to1,10))
		{
				alert(errmsg.err51);
				return false;
		}

		for (j = i + 1; j < Firewall_List.length; j++) {

			if ((desc.length == Firewall_List[j].desc.length) 
				&& (desc.indexOf(Firewall_List[j].desc) != -1)) 
			{
				alert( errmsg.err57 );
				return false;
			}
			
			if (ipv6_addr == Firewall_List[j].addr)
			{
				if (IsCrossRange(from0,to0,Firewall_List[j].from0,Firewall_List[j].to0,pro0,Firewall_List[j].pro0) == true||
					IsCrossRange(from0,to0,Firewall_List[j].from1,Firewall_List[j].to1,pro0,Firewall_List[j].pro1) == true||
					IsCrossRange(from1,to1,Firewall_List[j].from0,Firewall_List[j].to0,pro1,Firewall_List[j].pro0) == true||
					IsCrossRange(from1,to1,Firewall_List[j].from1,Firewall_List[j].to1,pro1,Firewall_List[j].pro1) == true) 
				{
					alert( errmsg.err74);	
					return false;
				}	
			}
		}
	}
}
//end by willsun at 2012/02/27

function to_submit(){
    var str="";
    var F=document.forms[0];

//add by willsun to fix the bug E900-53 at 2012/02/27
	if ( CHECK_IPV6_FIREWALL_ENTRY() == false ) return ;
//end by willsun at 2012/02/27
	 
    F.filter_ipv6_cnt.value = Firewall_List.length;
    for(var i=0; i<Firewall_List.length; i++){
	str += Firewall_List[i].desc + ";";
	str += Firewall_List[i].addr + ";";
	str += Firewall_List[i].pro0 + ";";
	str += Firewall_List[i].from0 + ";";
	str += Firewall_List[i].to0 + ";";
	str += Firewall_List[i].pro1 + ";";
	str += Firewall_List[i].from1 + ";";
	str += Firewall_List[i].to1 + "/";
    }
     
    F.filter_ipv6_list.value =  str;

    F.submit_button.value = "IPv6_Firewall";
    F.gui_action.value = "Apply";
    F.submit();	
}

function apply_tbl(F)
{
	if((F.ipv6_from0.value=="" && F.ipv6_to0.value=="")){
		F.ipv6_from0.value=F.ipv6_from1.value;
		F.ipv6_to0.value=F.ipv6_to1.value;
		F.ipv6_from1.value="";
		F.ipv6_to1.value="";
	}
	
	if(valid_range2(F.ipv6_from0,1,65535,"Port")==false)	return false;
	if(valid_range2(F.ipv6_to0,1,65535,"Port")==false)	return false;
	
	if(F.ipv6_from1.value!="" || F.ipv6_to1.value!=""){
		if(valid_range2(F.ipv6_from1,1,65535,"Port")==false)	return false;
		if(valid_range2(F.ipv6_to1,1,65535,"Port")==false)	return false;
	}

/*IPv6 address check*/
	var regExp="^([0-9a-fA-F\:])";
	var ip6addr_tmp=F.ipv6_addr.value;
	var buff1=ip6addr_tmp.split(":");
	var buff2=ip6addr_tmp.split(/::/);
	
	for(i = 0; i < ip6addr_tmp.length; i++)
	{
		ch = ip6addr_tmp.charAt(i);
		if(ch.search(regExp) == -1){
			alert(errmsg.err100);
			return false;
		}
		if(i>1){
			if (ch==":" && ip6addr_tmp.charAt(i-1)==":" && ip6addr_tmp.charAt(i-2)==":"){
				alert(errmsg.err100);
				return false;
			}
		}
	}
	
	for(i=0;i<buff1.length;i++){
		if(buff1[i].length>4){
			alert(errmsg.err100);
			return false;
		}
	}
	
	if(buff2.length==1){
		if(buff1.length!=8 || buff1[0]=="" || buff1[buff1.length-1]==""){
			alert(errmsg.err100);
			return false;
		}
	}
	else{
		if(ip6addr_tmp.charAt(0)==":" && ip6addr_tmp.charAt(1)==":"){
			if(buff1.length>9){
				alert(errmsg.err100);
				return false;
			}
		}
		else if(ip6addr_tmp.charAt(ip6addr_tmp.length)==":" && ip6addr_tmp.charAt(ip6addr_tmp.length-1)==":"){
			if(buff1.length>9){
				alert(errmsg.err100);
				return false;
			}
		}
		else{
			if(buff1.length>8){
				alert(errmsg.err100);
				return false;
			}
		}
	}
	
	if(buff2.length==2){
		if(buff2[0]=="" && buff2[1]==""){
			alert(errmsg.err100);
			return false;
		}
	}
	
	if(buff2.length>2){
		alert(errmsg.err100);
		return false;
	}
	
	if(buff1.length==8 && buff1[0].match(/ffff/i) && buff1[1].match(/ffff/i) && buff1[2].match(/ffff/i) && buff1[3].match(/ffff/i) && buff1[4].match(/ffff/i) && buff1[5].match(/ffff/i) && buff1[6].match(/ffff/i) && buff1[7].match(/ffff/i)){
		alert(errmsg.err100);
		return false;
	}
	 if(buff1[0].match(/fe80/i))
   {
       alert(errmsg.err100);
       return false;
   }
   
   if(buff1[0].match(/^ff/i))
	{
	   alert(errmsg.err100);
       return false;

	}
	var illegal=0;
	for(i=0;i<buff1.length;i++){
		if(buff1[i]==0 || buff1[i]=="")
			illegal++;
		if(i==buff1.length-1 && illegal==buff1.length){
			alert(errmsg.err100);
			return false;
		}
	}
/*IPv6 address check*/
	
	var idx = 0;
	var desc = F.desc.value;
	var addr = F.ipv6_addr.value;
	var pro0 = F.ipv6_pro0.value;
	var from0 = F.ipv6_from0.value;
	var to0 = F.ipv6_to0.value;
	var pro1 = F.ipv6_pro1.value;
	var from1 = F.ipv6_from1.value;
	var to1 = F.ipv6_to1.value;
	var str;

	if(editEntry==0){
		if(Firewall_List.length>=15){
			alert(errmsg.exceptions);
			return;
		}
		Firewall_List[Firewall_List.length] = new Firewall_List_Entry(desc,addr,pro0,from0,to0,pro1,from1,to1);
		addList(Firewall_List.length - 1);
	}
	else{
		Firewall_List[CurrentTrId] = new Firewall_List_Entry(desc,addr,pro0,from0,to0,pro1,from1,to1);
		idx = CurrentTrId ;
		var row = document.getElementById( idx );
		var desc_row = document.getElementById( "tr_desc"+idx );
		var desc_tmp = Firewall_List[idx].desc.replace(/&/g, "&amp;");
		var desc_tmp = desc_tmp.replace(/</g, "&lt;");
	//	desc_row.cells[0].innerHTML = string_break(18,Firewall_List[idx].desc);
		desc_row.cells[0].innerHTML = string_break2(18, desc_tmp);
		str="<b>"+ipv6firewall.addr+":</b> "+Firewall_List[idx].addr+"<br><b>"+value2string(Firewall_List[idx].pro0)+":</b> "+Firewall_List[idx].from0+"~"+Firewall_List[idx].to0;
        	if(Firewall_List[idx].from1!="")
        		str=str+"<br><b>"+value2string(Firewall_List[idx].pro1apply_tbl)+":</b> "+Firewall_List[idx].from1+"~"+Firewall_List[idx].to1;
		row.cells[1].innerHTML =  str;
		editEntry=0;
	}
	
}

function addList(idx)
{
	var tbody = document.getElementById("tabSummary").getElementsByTagName("TBODY")[0];
	var row = document.createElement("tr");
        var tdArray = new Array();
        var str = "";
	var desc_tmp = "";
        
        row.setAttribute("id",idx);
        for(i=0; i<2; i++) {
           tdArray[i] = document.createElement("td");
           tdArray[i].setAttribute("id", "tdSummary");
	   if(i%2==0){
		tdArray[i].style.cssText = "border: solid 1px #6666cc;text-align:center;height:28;width:30%";
	   }
	   else{
		tdArray[i].style.cssText = "border: solid 1px #6666cc;padding-left:3px;";
	   }
	   	
        }
        var table1 = document.createElement("table");
	var tbody1 = document.createElement("tbody");
	var tr1 = document.createElement("tr");
	var tr2 = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

	desc_tmp = Firewall_List[idx].desc.replace(/&/g, "&amp;");
	desc_tmp = desc_tmp.replace(/</g, "&lt;");

        table1.setAttribute("style", "height:50px; width:100%; text-align:center;");
	table1.style.cssText = "height:50px; width:100%; text-align:center;";
        tr1.setAttribute("id", "tr_desc"+idx);
        td2.setAttribute("style", "border-top: solid 1px #6666cc;height:20px");
	td2.style.cssText = "border-top: solid 1px #6666cc;height:20p";
//        td1.innerHTML = string_break(18,Firewall_List[idx].desc);
        td1.innerHTML = string_break2(18, desc_tmp); 
        var edit =  document.createElement("input");
        edit.setAttribute("type", "button");
        edit.setAttribute("value", SHARE_FUN.Properties);
        edit.setAttribute("id", "baseF");
        edit.onclick = function(){ EditEntry(idx)};
        var remove =  document.createElement("input");
        remove.setAttribute("type", "button");
        remove.setAttribute("value", sbutton.remove);
        remove.setAttribute("id", "baseF");
	remove.onclick = function(){ delRow(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,idx)};
        td2.appendChild(edit);
        td2.appendChild(remove);
        tr1.appendChild(td1);
        tr2.appendChild(td2);
	tbody1.appendChild(tr1);
	tbody1.appendChild(tr2);
	table1.appendChild(tbody1);

        tdArray[0].appendChild(table1);
        str="<b>"+ipv6firewall.addr+":</b> "+Firewall_List[idx].addr+"<br><b>"+value2string(Firewall_List[idx].pro0
        )+":</b> "+Firewall_List[idx].from0+"~"+Firewall_List[idx].to0;
        if(Firewall_List[idx].from1!="")
        	str=str+"<br><b>"+value2string(Firewall_List[idx].pro1
        )+":</b> "+Firewall_List[idx].from1+"~"+Firewall_List[idx].to1;
	tdArray[1].innerHTML = 	str;
	for(i=0; i<2; i++) row.appendChild(tdArray[i]);
        tbody.appendChild(row);
}

function delRow(obj,idx){
    
	var tbody = document.getElementById("tabSummary").getElementsByTagName("tbody")[0]; 
	var Trs = tbody.getElementsByTagName("tr"); 
	var len = Trs.length/3;
	
	for (var j=0;j<len;j++) //remove all rows 
	{ 
		tbody.removeChild(Trs[0]); 
	} 
            
    	delArrayElement(idx);

	for(var i=0; i < Firewall_List.length; i++)	//rebuild the new table
	{
		addList(i);
	}
	editEntry = 0;
}

function delArrayElement(idx){
	for (var i=idx; i<Firewall_List.length-1 ;i++)
	  Firewall_List[i] = Firewall_List[i+1];
	Firewall_List.length = Firewall_List.length-1;
}

function EditEntry(num)
{
	CurrentTrId = num; // Save Old TR ID
	var F = document.forms[0];
	F.desc.value = Firewall_List[num].desc;
	F.ipv6_addr.value = Firewall_List[num].addr;
	F.ipv6_pro0.value = Firewall_List[num].pro0;
	F.ipv6_from0.value = Firewall_List[num].from0;
	F.ipv6_to0.value = Firewall_List[num].to0;
	F.ipv6_pro1.value = Firewall_List[num].pro1;
	F.ipv6_from1.value = Firewall_List[num].from1;
	F.ipv6_to1.value = Firewall_List[num].to1;
	editEntry = 1;  
}

function value2string(val)
{
	var pro;
	if(val=="tcp")
		pro=share.tcp;
	else if(val=="udp")
		pro=share.udp;
	else
		pro=share.both;
	return pro;
}

function cancel_tbl(F)
{
	F.desc.value="";
	F.ipv6_addr.value="";
	F.ipv6_pro0.selectedIndex=0;
	F.ipv6_from0.value="";
	F.ipv6_to0.value="";
	F.ipv6_pro1.selectedIndex=0;
	F.ipv6_from1.value="";
	F.ipv6_to1.value="";
}
</SCRIPT>
</head>

<body onload=init() onunload=exit()>
<FORM name=IPv6_Firewall method=<% get_http_method(); %> action=apply.cgi>
<input type="hidden" name=filter_ipv6_list>
<input type="hidden" name=filter_ipv6_cnt>
<input type="hidden" name=submit_button>
<input type="hidden" name=change_action>
<input type="hidden" name=gui_action>
<input type="hidden" name=need_action value=0>
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,ipv6firewall.settings);</script></TR>
	<TR><script>draw_table(SUBFUN,"")</script>
	<TD colspan=2 class=FUNNAME1>
	<table class=BORDERTABLE1 width=90%>
	<tr><td width=25%><b><script>Capture(SHARE_FUN.description)</script></b></td>
	<td id="IdDescription"><INPUT maxLength=63 size=20 name="desc" value=''></td></tr>
	<tr><td><b><script>Capture(ipv6firewall.ipv6addr)</script></b></td>
	<td id="Ipv6Addr"><INPUT maxLength=63 size=20 name="ipv6_addr" value='0:0:0:0:0:0:0:0'><br>
	<!-- <script>document.write("<INPUT type=button name=ipv6_clitbl onclick=Viewtbl() value=\""+ipv6firewall.ipv6clitbl+"\">");</script> --></td></tr>
	<tr><td><b><script>Capture(filter.allow)</script></b></td>
	<td id="Ipv6Pro">
	<select size=1 name=ipv6_pro0 style="font-family: Arial; font-size: 8pt">
	<OPTION value=tcp><script>Capture(share.tcp)</script></OPTION>
	<OPTION value=udp><script>Capture(share.udp)</script></OPTION>
	<OPTION value=both><script>Capture(share.both)</script></OPTION>
	</select>
	&nbsp;<INPUT maxLength=5 size=5 name="ipv6_from0" value=''>
	&nbsp;<script>Capture(portforward.to)</script>
	&nbsp;<INPUT maxLength=5 size=5 name="ipv6_to0" value=''><br>
	<select size=1 name=ipv6_pro1 style="font-family: Arial; font-size: 8pt">
	<OPTION value=tcp><script>Capture(share.tcp)</script></OPTION>
	<OPTION value=udp><script>Capture(share.udp)</script></OPTION>
	<OPTION value=both><script>Capture(share.both)</script></OPTION>
	</select>
	&nbsp;<INPUT maxLength=5 size=5 name="ipv6_from1" value=''>
	&nbsp;<script>Capture(portforward.to)</script>
	&nbsp;<INPUT maxLength=5 size=5 name="ipv6_to1" value=''>&nbsp;(<script>Capture(share.optional)</script>)
	</td></tr>
	</table>
	</TD>
	</TR>
	<TR><script>draw_table(SUBFUN,"")</script>
	<TD colspan=2 class=FUNNAME1 style="text-align:center">	
	<script>document.write("<INPUT type=button name=apply onclick=apply_tbl(this.form) value=\""+hportser2.submit+"\">");</script>
	<script>document.write("<INPUT type=button name=cancel onclick=cancel_tbl(this.form) value=\""+wlanwscpopup.btncancel+"\">");</script>
	</TD></TR>
	<TR><script>draw_table(SUBFUN,"");</script>
	<TD colspan=2 class=FUNNAME1>&nbsp;</TD></TR>
  		  <TR><script>draw_table(SUBFUN,"");</script>
          <TD colspan=2 class=FUNNAME1>
            <TABLE>
              <TBODY>
              <TR>
		<TD width=436 colspan=2><HR color=#b5b5e6 SIZE=1></TD>
              </TR>
              </TBODY>
            </TABLE>
          </TD></TR>
	<TR><script>draw_table(SUBFUN,ipv6firewall.exceptions)</script>
	<TD colspan=2 class=FUNNAME1>
	<table style="border:solid 1px #6666cc" cellpadding="0" cellspacing="0" bordercolor="#111111" width="100%" id="tabSummary" bordercolordark="#6666cc" bordercolorlight="#6666cc">
	<tbody>
          </tbody>  
        </table></td></tr>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
