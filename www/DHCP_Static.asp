<% web_include_file("copyright.asp"); %>

<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>DHCP Reservation</TITLE>
<% no_cache(); %>
<% charset(); %>
<link rel="stylesheet" type="text/css" href="style.css">
<% ui_position("invmatch", "<!--"); %>
<link rel="stylesheet" type="text/css" href="style_rtl.css">
<% ui_position("invmatch", "-->"); %>
<script src="common.js"></script>
<script defer type="text/javascript" src="session.js"></script>
<script defer type="text/javascript" src="/pngfix.js"></script>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsec.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/share.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/help.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capwrt54g.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capadmin.js"></SCRIPT>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capstatus.js"></SCRIPT>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capsetup.js"></SCRIPT>
<SCRIPT language="Javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/capasg.js"></SCRIPT>
<SCRIPT language="javascript" type="text/javascript" src="<% get_lang(); %>_lang_pack/layout.js"></SCRIPT>

<script language="JavaScript">
document.title = adbutton.dhcpres;
var session_key = "<% nvram_get("session_key"); %>";
var close_session = "<% get_session_status(); %>";
var statics_table = new Array(
		<% dump_dhcp_statics(""); %>
		);

var table = new Array(
		<% dumpleases(""); %>
		);

var static_clients = new Array("");
var static_num = 0;
var MAX_LEASE = 254;
//John
var ns4 = (document.layers)? true:false ;
var ie4 = (document.all)? true:false;
var ie5  = (document.all && document.getElementById);
var ns6 = (!document.all && document.getElementById);
                                                                                                               
var TBLHeader_ClientTBL ="<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" bordercolor=\"#5b5b5b\" id=\"statics_table\" width=\"470\">  \
        <tr> \
        <td height=\"25\" width=\"134\" align=\"center\" style=\"border-style: solid; border-width: 1;\" \
         bordercolor=\"#2971b9\"> \
        <span style=\"font-weight: 700\"><font face=\"Arial\" style=\"font-size: 8pt\">"+share.cliname+"</font></span></td> \
        <td height=\"25\" width=\"135\" align=\"center\" style=\"border-style: solid; border-width: 1; \" \
         bordercolor=\"#2971b9\"><span style=\"font-weight: 700\"><font face=\"Arial\" style=\"font-size: 8pt\">"+dhcp.assignip+"</font></font></span></td> \
        <td height=\"25\" width=\"136\" align=\"center\" style=\"border-style: solid; border-width: 1; \" bordercolor=\"#2971b9\"><span style=\"font-weight: 700\"><font face=\"Arial\" style=\"font-size: 8pt\">"+dhcp.tomac+"</font></font></span></td> \
        <td height=\"25\" width=\"64\" align=\"center\" style=\"border-style:solid; border-width: 1; \" bordercolor=\"#2971b9\"><span style=\"font-weight: 700\"><font face=\"Arial\" style=\"font-size: 8pt\">"+share.macaddr+"</font></span></td> \
        </tr>";
var TBLFooter = "</table>" ;
var TRHeader =  "<tr>" ;
var TRFooter = "</tr>" ;
var TDNameHeader = "<td height=\"25\" width=\"134\"  align=\"center\" style=\"border-style: solid; \
border-width: 1; \" bordercolor=\"#2971b9\">";
var TDIpHeader = "<td height=\"25\" width=\"135\"  align=\"center\" style=\"border-style: solid; \
border-width: 1; \" bordercolor=\"#2971b9\" dir=\"ltr\">";
var TDMacHeader = "<td height=\"25\" width=\"136\"  align=\"center\" style=\"border-style: solid; \
border-width: 1; \" bordercolor=\"#2971b9\" dir=\"ltr\">";
var TDRemoveHeader = "<td height=\"25\" width=\"64\"  align=\"center\" style=\"border-style: solid; \
border-width: 1; \" bordercolor=\"#2971b9\">";
                                                                                                               
var TDFooter = "</font></td>" ;
var TBLHeader_Left = "<table><tr><td class=\"LeftText2\" height=\"25\" bgcolor=\"#E7E7E7\">Select Clients from&nbsp;&nbsp;<br>DHCP Table&nbsp;&nbsp;</tr>" ;
var Left_Space = "<tr><td height=\"25\" bgcolor=\"#E7E7E7\">&nbsp;&nbsp;</td></tr>" ;
var TBLFooter_Left = "</table>" ;

function layerWrite(id,nestref,text) {
                                                                                                               
        if(ns4){
                var lyr = (nestref)? eval('document.'+nestref+'.document.'+id+'.document') : document.layers[id].document ;
                lyr.open();
                lyr.write(text);
                lyr.close();
        }else if (ie4){
                document.all[id].innerHTML = text ;
        }
        else if(ns6){
                document.getElementById(id).innerHTML = text ;
        }
}
function DataShow(type) {
        var list = "" ;
        var w = "";
        var remove = "" ;
        var ip_prefix,ip_value,ip_field,name_value;
        var prefix = '<% prefix_ip_get("lan_ipaddr",2); %>';
        w += TBLHeader_ClientTBL ;
                                                                                                               
        for (var j=0;j<static_num;j++)  {
                if (static_clients[j*3+2] !="")  {
                        //alert('static_clients['+(j*3)+']'+'='+static_clients[j*3]+' static_clients['+(j*3+1)+']'+'='+static_clients[j*3+1]+' static_clients['+(j*3+2)+']'+'='+static_clients[j*3+2]);
                        remove = "<input type=\"button\" value=\""+sbutton.remove+"\" name=\"remove_"+j+"\" onClick=delRow(this.parentNode.parentNode,\""+static_clients[j*3]+"\",\""+static_clients[j*3+1]+"\",\""+static_clients[j*3+2]+"\")>" ;
                        ip_prefix = prefix;
                        ip_value = static_clients[j*3+1];
                        name_value = unescape(static_clients[j*3]);
                        ip_field = "<input value=\""+ip_value+"\" name=\"static_client_ip_"+j+"\" maxlength=3 style=\"width:30px\" onblur=valid_range(this,1,254,\"IP\");check_subnet(this.value)>";
                        name_field = "<input value=\""+name_value+"\" name=\"static_client_name_"+j+"\" maxLength=15 size=16 onblur=valid_name1(this,\"\")>";
                        w += TRHeader + TDNameHeader + name_field + TDFooter +
                                TDIpHeader + ip_prefix + ip_field + TDFooter +
                                TDMacHeader + static_clients[j*3+2] + TDFooter +
                                TDRemoveHeader + remove + TDFooter + TRFooter ;
                }
        }
        w += TBLFooter ;
                                                                                                               
        layerWrite('dhcp_statics_table', null, w);
	dhcp_statics.add1.value =  portsrv.add;
}

function addRow(row_id, name, ip, mac)
{
//John this funtion may be not necessary
}

function valid_macs_all(I)
{
        if(I.value == "")
                return true;
        else if(I.value.length == 12)
                valid_macs_12(I);
        else if(I.value.length == 17)
                valid_macs_17(I);
        else{
                alert(errmsg.err5);
                I.value = I.defaultValue;
        }

}

function delRow(delRowContent, name, ip, mac)
{
	var i, j;
	var y = delRowContent.parentNode;
	var tmp = new Array("");
	var num = new Array();
	var aa;
	
	y.removeChild(delRowContent); 	
		
	for (i = 0, j = 0;  i < static_num; i++) {
		num = ip.split('.');
		if(num[3])	aa = num[3];
		else		aa = ip;
		if ((static_clients[i*3] == name) && (static_clients[(i*3)+1] == aa) && (static_clients[(i*3)+2] == mac) ) 
					continue;
		else {
			tmp[j*3] = static_clients[i*3];
			tmp[(j*3) + 1] = static_clients[(i*3) + 1];
			tmp[(j*3) + 2] = static_clients[(i*3) + 2];
			j++;

		}
	}
	
	static_num = j;
	for (i = 0; i < static_num; i++) {
	        static_clients[i*3] = tmp[i*3];
		static_clients[(i*3) + 1] = tmp[(i*3) + 1]; 
		static_clients[(i*3) + 2] = tmp[(i*3)+2];
	}
	DataShow(2);
}

function select_add()
{
	var i, j;
	var count  = 0;
	
	for (i=0 ; i<MAX_LEASE; i++) {
		if (eval("document.dhcp_statics.dhcp_select_name_"+i) && eval("document.dhcp_statics.dhcp_select_mac_"+i) && eval("document.dhcp_statics.dhcp_select_check_"+i)) {
			eval("document.dhcp_statics.dhcp_select_mac_"+i).value = eval("document.dhcp_statics.dhcp_select_mac_"+i).value.toUpperCase();
			if (eval("document.dhcp_statics.dhcp_select_check_"+i).checked == true) {
				count++;
				for (j = 0;  j < static_num; j++) {
					if (static_clients[(j*3)+2] == eval("document.dhcp_statics.dhcp_select_mac_"+i).value) {
						//alert("This MAC Address("+eval("document.dhcp_statics.dhcp_select_mac_"+i).value+") has already been reserved! It can't be added twice.");
						alert(errmsg.err52);
						eval("document.dhcp_statics.dhcp_select_check_"+i).checked = false;
						//eval("document.dhcp_statics.dhcp_select_check_"+i).disabled = true;
	        	                        return;
                        		}
					if (static_clients[(j*3)+1] == eval("document.dhcp_statics.dhcp_select_ip_"+i).value) {
						//alert("This MAC Address("+eval("document.dhcp_statics.dhcp_select_mac_"+i).value+") has already been reserved! It can't be added twice.");
						alert(errmsg.err55);
						eval("document.dhcp_statics.dhcp_select_check_"+i).checked = false;
						//eval("document.dhcp_statics.dhcp_select_check_"+i).disabled = true;
	        	                        return;
                        		}
		                }
			}
		}
	}

	if (count == 0) {
		//alert("There are no clients selected!");
		alert(errmsg.err53);
		return;
	}

	for (i=0 ; i<MAX_LEASE ; i++) {
		if (eval("document.dhcp_statics.dhcp_select_name_"+i)) {
			if (eval("document.dhcp_statics.dhcp_select_check_"+i).checked == true) {
				var num = new Array();
				//addRow(static_num,eval("document.dhcp_statics.dhcp_select_name_"+i).value,eval("document.dhcp_statics.dhcp_select_ip_"+i).value,eval("document.dhcp_statics.dhcp_select_mac_"+i).value);
				static_clients[static_num*3] = eval("document.dhcp_statics.dhcp_select_name_"+i).value;

				static_clients[(static_num*3)+1] = eval("document.dhcp_statics.dhcp_select_ip_"+i).value;
				num = static_clients[(static_num*3)+1].split('.');
				static_clients[(static_num*3)+1] = num[3];

				static_clients[(static_num*3)+2] = eval("document.dhcp_statics.dhcp_select_mac_"+i).value;

				static_num++;
				//eval("document.dhcp_statics.dhcp_select_check_"+i).disabled = true;
				eval("document.dhcp_statics.dhcp_select_check_"+i).checked = false;
			}
		}	
	}
	DataShow(2);  //John
}

function manual_add()
{
	var i, j;
	var prefix = '<% prefix_ip_get("lan_ipaddr",2); %>';

	document.dhcp_statics.manual_mac.value = document.dhcp_statics.manual_mac.value.toUpperCase();
	if (document.dhcp_statics.manual_name.value == "") {
		//alert("Please enter client name!");
		alert(errmsg.err54);
		document.dhcp_statics.manual_name.focus();
		return;
	}
	if(document.dhcp_statics.manual_ip.value == "0") {
		alert(errmsg.err31);
		document.dhcp_statics.manual_ip.focus();
		return;
	}
	if(is_lanip(IP_LAST,document.dhcp_statics.manual_ip.value)) {
		alert(errmsg.err62);	
		document.dhcp_statics.manual_ip.focus();
		return;
	}
	if(!check_subnet(document.dhcp_statics.manual_ip.value))
	{
		document.dhcp_statics.manual_ip.focus();
		return;
	}
	if(document.dhcp_statics.manual_mac.value == "00:00:00:00:00:00" || document.dhcp_statics.manual_mac.value == "FF:FF:FF:FF:FF:FF") {
		alert(errmsg.err17);
		document.dhcp_statics.manual_mac.focus();
		return;
	}

	for (i = 0;  i < static_num; i++) {
		if (static_clients[(i*3)+2] == document.dhcp_statics.manual_mac.value) {
			//alert("This MAC Address("+document.dhcp_statics.manual_mac.value+") has already been reserved! It can't be added twice");
			alert(errmsg.err52);
			document.dhcp_statics.manual_mac.focus();
                                return;
                }
              //John@2008.05.16
                if (static_clients[(i*3)+1] == document.dhcp_statics.manual_ip.value) {
                        alert(errmsg.err55);
                        document.dhcp_statics.manual_ip.focus();
                                return;
                }

        }

	//addRow(static_num+1,document.dhcp_statics.manual_name.value,prefix+document.dhcp_statics.manual_ip.value,document.dhcp_statics.manual_mac.value);

	static_clients[static_num*3] = document.dhcp_statics.manual_name.value;
	static_clients[(static_num*3)+1] = document.dhcp_statics.manual_ip.value;
	static_clients[(static_num*3)+2] = document.dhcp_statics.manual_mac.value;

	static_num = static_num + 1;
	new_clients = "";
	for (i = 0; i < static_num; i++) {
		new_clients += static_clients[(i*3)+2];
		new_clients += " ";
		new_clients += static_clients[(i*3)+1];
		new_clients +=  " on ";
		new_clients += static_clients[(i*3)+0];
		new_clients += ";";
	}

	document.dhcp_statics.manual_name.value = "";
	document.dhcp_statics.manual_ip.value = "0";
	document.dhcp_statics.manual_mac.value = "00:00:00:00:00:00";	
	
	DataShow(2); //John
}

function check_subnet(ReserIp)
{
	var lanIp = parseInt('<% get_single_ip("lan_ipaddr",3); %>');
	var submask = parseInt('<% get_single_ip("lan_netmask",3); %>');
	var subnet = submask & lanIp;

	if ( submask == 0 )
		return true;

	if ( (parseInt(ReserIp) & submask) != subnet )
	{
		alert(errmsg.err103);
		return false;
	}

	return true;
}

function valid_ip_range(I)
{
	if(I.value != 0)
		valid_range(I,1,254,"IP")
}

function init()
{
	for (i = 0; statics_table[i];) {
		static_clients[i] = statics_table[i];   //name
		static_clients[i+1] = statics_table[i+2]; //ip
		static_clients[i+2] = statics_table[i+1]; //mac
		i += 3;
		static_num = static_num + 1;
	}
	 DataShow(2);

	 init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);

}

function reload()
{
	document.location.href = "DHCP_Static.asp"
}

function toSubmit()
{
	var i;

	new_clients = "";

	/*for (i = 0; i < static_num; i++) {
		new_clients += static_clients[(i*3)+2] + " ";
		new_clients += static_clients[(i*3)+1] + " on ";
		new_clients += static_clients[(i*3)+0] + ";";
	}*/
        for (i = 0; i < static_num; i++) {
		if(is_lanip(IP_LAST,eval("document.dhcp_statics.static_client_ip_"+i).value)) {
			alert(errmsg.err62);	
			return;
		}
		if(!check_subnet(eval("document.dhcp_statics.static_client_ip_"+i).value)) {
			eval("document.dhcp_statics.static_client_ip_"+i).focus();
			return;
		}

		if (eval("document.dhcp_statics.static_client_name_"+i).value == "") {
			alert(errmsg.err54);
			eval("document.dhcp_statics.static_client_name_"+i).focus();
			return;
		}
		var j; 
		for(j = i+1;j<static_num;j++)
		{
			if(eval("document.dhcp_statics.static_client_ip_"+i).value == eval("document.dhcp_statics.static_client_ip_"+ j).value)
			{
                        	alert(errmsg.err55);
				eval("document.dhcp_statics.static_client_ip_"+i).focus();
                                return;
			}
		}
                new_clients += static_clients[(i*3)+2] + " ";
                new_clients += eval("document.dhcp_statics.static_client_ip_"+i).value + " on ";
                //new_clients += eval("document.dhcp_statics.static_client_name_"+i).value + ";";
		new_clients += special_char_trans(eval("document.dhcp_statics.static_client_name_"+i).value) + ";";
        }

	if ( close_session == "1" )
	{
		window.opener.setTimeout("location.replace(\"index.asp\")", 1000);
	}
	else
	{
		window.opener.setTimeout("location.replace(\"index.asp;session_id=<% nvram_get("session_key"); %>\")", 1000);
	}

	document.dhcp_statics.new_clients.value = new_clients;
	document.dhcp_statics.submit_button.value="DHCP_Static";
	document.dhcp_statics.gui_action.value = "Apply";
//	document.dhcp_statics.submit_type.value="save";
//	document.dhcp_statics.change_action.value="gozila_cgi";
	document.dhcp_statics.submit();
}

function cancel_change()
{
	if ( close_session == "1" )
	{
		document.location.href = "DHCP_Static.asp"
	}
	else
	{
		document.location.href = "DHCP_Static.asp;session_id=" + session_key;
	}
}
function refresh()
{
	if ( close_session == "1" )
	{
		document.location.replace("DHCP_Static.asp");
	}
	else
	{
		document.location.replace("DHCP_Static.asp;session_id=" + session_key);
	}
}

</script>

<BODY onload=init() bgColor=#808080>
<CENTER>
<form name=dhcp_statics method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=gui_action value="Apply">
<input type=hidden name=submit_type>
<input type=hidden name=small_screen>
<input type=hidden name=dhcp_reservation>
<input type=hidden name=new_clients value="">
<input type=hidden name="wait_time" value="3">
<!--input type=hidden name=next_page value="DHCP_Static.asp" -->
<CENTER>
<TABLE borderColor=#5b5b5b height=282 cellSpacing=0 cellPadding=0 width=657 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
    <TH colSpan=2 height=282 bordercolor="#FFFFFF">
      <TABLE height=58 cellSpacing=3 width=602 bgColor=#ffffff border=0>
        <TBODY>
        <TR>
          <TH  height=58>
            <TABLE cellSpacing=0 width=450 bgColor=#ffffff 
              border=0 style="border-collapse: collapse" bordercolor="#5b5b5b" cellpadding="0"><TBODY>
              <TR>
                <TH width=602 align=right vAlign=bottom bgColor=#FFFFFF>
                <div align="left">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber1" width="654" height="15">
                    <tr>
                      <td height="16" bgcolor="#2971b9" width="151"> </td>
                      <td height="16" bgcolor="#2971b9" width="503" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="1" colspan="3" bgcolor="#FFFFFF" width="654"> </td>
                    </tr>
                    <tr>
		    <td height="57" bgcolor="#2971b9" width="654" colspan="3">
	<img border="0" src="image/linksys_logo.png" class=LOGO></td>
                    </tr>
                    <tr>
                      <td height="16" width="151" bgcolor="#2971b9"> </td>
                      <td height="16" width="503" bgcolor="#2971b9" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="15" bgcolor="#E7E7E7" width="151"> </td>
                      <td height="15" width="503" bgcolor="#E7E7E7" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="7" bgcolor="#E7E7E7" width="151"> </td>
                      <td height="7" width="503" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="151">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(adbutton.dhcpres)</script>&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="503" bgcolor="#FFFFFF" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="4" width="151" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> </td>
                      <td height="4" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="4" width="493" bgcolor="#FFFFFF"> </td>
                          </tr>
                    <tr>
                      <td height="48" width="151" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium" valign="top">
		<p align=<% ui_position("rtl_left", ""); %> style="margin-top: 0; margin-bottom: 0; margin-left:6px">
            <span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt"><script>Capture(dhcp.selectcli)</script>&nbsp;&nbsp; </font></span></p>
            <p></td>
                      <td height="1" width="13" bgcolor="#FFFFFF">
			</td>
                      <td height="1" width="493" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="table" width="469">
			<TBODY class=incell2>
<tr>
<td height='25' width='179' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><span style='font-weight: 700'><font face='Arial' style='font-size: 8pt'><script>Capture(share.cliname)</script></font></span></td>
<td height='25' width='107' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><span style='font-weight: 700'><font face='Arial' style='font-size: 8pt'><script>Capture(share.inter_face)</script></font></span></td>
<td height='25' width='104' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><span style='font-weight: 700'><font face='Arial' style='font-size: 8pt'><script>Capture(share.ipaddr)</script></font></span></td>
<td height='25' width='117' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><span style='font-weight: 700'><font face='Arial' style='font-size: 8pt'><script>Capture(share.macaddr)</script></font></span></td>
<td height='25' width='82' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><p style='margin-top: 0; margin-bottom: 0'><span style='font-weight: 700'><font face='Arial' style='font-size: 8pt'><script>Capture(dhcp.select)</script></font></span></td>
</tr>
	      <script language=javascript>
		var i = 0;
		var count = 0;
		var flag_for_table_name = 1;
		var statics_table_change;
		var ret;
		for(;;){
			if(!table[i]) {
				if(i == 0) {
					table[i] = wlanadv.none;
					table[i+1] = wlanadv.none;
					table[i+2] = wlanadv.none;
					table[i+3] = wlanadv.none;
					table[i+4] = wlanadv.none;
					ret = 1;		
				}
				else
					break;
			}

			for (var j = 0; statics_table[j] ; j += 3)
			{
				if (table[i + 2] == statics_table[j + 1])
				{
					flag_for_table_name = 0;
					statics_table_change = statics_table[j].toString().replace(/%20/g, "&nbsp;");
				}
			}


			if(table[i+4] == "WL")
				table[i+4] = bmenu.wireless;
			else if(table[i+4] == "G")
				table[i+4] = bmenu.wireless+"-G";
			else if(table[i+4] == "B")
				table[i+4] = bmenu.wireless+"-B";
			else if(table[i+4] == "A")
				table[i+4] = bmenu.wireless+"-A";
			else if(table[i+4] == "N")
				table[i+4] = bmenu.wireless+"-N";
			else if(table[i+4] == "LAN")
				table[i+4] = "LAN";

			document.write("<tr>\n");

			if (flag_for_table_name)
				document.write("<td height='25' width='179' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><font face='Arial' style='font-size: 8pt'><input type=hidden name=dhcp_select_name_"+count+" value="+table[i]+">"+table[i]+"</font></td>\n");
			else
				document.write("<td height='25' width='179' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><font face='Arial' style='font-size: 8pt'><input type=hidden name=dhcp_select_name_"+count+" value="+table[i]+">"+statics_table_change+"</font></td>\n");

			document.write("<td height='25' width='107' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><font face='Arial' style='font-size: 8pt'>"+table[i+4]+"</font></td>\n");
			document.write("<td height='25' width='104' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><font face='Arial' style='font-size: 8pt'><input type=hidden name=dhcp_select_ip_"+count+" value="+table[i+1]+">"+table[i+1]+"</font></td>\n");
			document.write("<td height='25' width='117' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><font face='Arial' style='font-size: 8pt'><input type=hidden name=dhcp_select_mac_"+count+" value="+table[i+2]+">"+table[i+2]+"</font></td>\n");
			if(ret == "1")
				document.write("<td height='25' width='82' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'>&nbsp;</td>\n");
			else
				document.write("<td height='25' width='82' align='center' style='border-style: solid; border-width: 1; ' bordercolor='#2971b9'><font face='Arial' color='#5b5b5b' size='2'><INPUT type=checkbox name=dhcp_select_check_"+count+"></font></td>\n");
			document.write("</tr>\n");
			count++;

			flag_for_table_name = 1;

			if(ret == 1)
				break;		

			i = i + 5;
		}
	      </script>
				</tbody>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td height="10" width="151" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> </td>
                      <td height="10" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="10" width="493" bgcolor="#FFFFFF"> </td>
                          </tr>
                    <tr>
                      <td height="19" width="151" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"> </td>
                      <td height="19" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="19" width="493" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="469" height="19">
              <tr>
                <td height="15" width="339"> </td>
                <td height="12" width="13"></td>
                <td height="15" width="102" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A HREF=javascript:select_add(); ><script>Capture(sbutton.addcli)</script></A></font></span></td>
              </tr>
            </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="16" width="151" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> </td>
                      <td height="16" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="16" width="493" bgcolor="#FFFFFF"> 
						<HR color="#CCCCCC" size="1" width="96%" align=<% ui_position("rtl_right", ""); %>> </td>
                          </tr>
                    <tr>
                      <td height="50" width="151" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium">
			<p align=<% ui_position("rtl_left", ""); %> style="margin-top: 0; margin-bottom: 0">
            <span style="font-weight: 700">
            <font face="Arial" style="font-size: 8pt"><script>Capture(dhcp.manualadd)</script>&nbsp;&nbsp;
            </font></span></p>
            <p></td>
                      <td height="1" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="1" width="493" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="table" width="469">
              <tr>
                <td height="25" width="134" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(dhcp.entercli)</script></font></span></td>
                <td height="25" width="139" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(dhcp.assignip)</script></font></span></td>
                <td height="25" width="137" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(dhcp.tomac)</script></font></span></td>
                <td height="25" width="64" align="center" style="border-left-style: solid; border-left-width: 1; border-right-style: solid; border-right-width: 1; border-top-style: solid; border-top-width: 1; border-bottom-style: none; border-bottom-width: medium" bordercolor="#2971b9">
                <p style="margin-top: 0; margin-bottom: 0"> </td>
              </tr>
              <tr>
                <td height="25" width="134" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9"><font face="Arial" style="font-size: 8pt"><INPUT type=text maxLength=15 size=13 name=manual_name value="" style="font-size:9pt" onblur=valid_name1(this,"")></font></td>
                <td height="25" width="139" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9" dir="ltr"><font face="Arial" style="font-size: 8pt"><% prefix_ip_get("lan_ipaddr",1); %></font><INPUT class=num maxLength=3 size="3" name=manual_ip style="font-size:8pt; font-family:Arial" value="0" onBlur=valid_ip_range(this)>
                </td>
                <td height="25" width="137" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9"><font face="Arial" style="font-size: 8pt" dir="ltr"><INPUT type=text maxLength=17 size=15 name=manual_mac style="font-size:8pt; font-family:Arial" value="00:00:00:00:00:00" onBlur=valid_macs_17(this)></font></td>
                <td height="25" width="64" align="center" style="border-style:solid; border-width:1; " bordercolor="#2971b9"><font face="Arial" color="#5b5b5b" size="2"></font><INPUT onclick=manual_add() type=button name=add1 value=""></td>
                </tr>
                              </table>
                            </td>
                          </tr>
                    <tr>
                      <td height="16" width="151" bgcolor="#E7E7E7" style="border-bottom-style: none; border-bottom-width: medium"> </td>
                      <td height="16" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="16" width="493" bgcolor="#FFFFFF"> 
						<HR color="#CCCCCC" size="1" align=<% ui_position("rtl_right", ""); %> width="96%"> </td>
                          </tr>
                    <tr>
                      <td height="25" bgcolor="#5b5b5b" width="151">
                <p align=<% ui_position("rtl_left", ""); %>><b>
                <font face="Arial" style="font-size: 9pt" color="#FFFFFF"> <script>Capture(dhcp.clires)</script>&nbsp;&nbsp; </font></b></td>
                      <td height="25" width="503" bgcolor="#FFFFFF" colspan="2"> </td>
                    </tr>
                    <tr>
                      <td height="75" bgcolor="#E7E7E7" width="151"> </td>
                      <td height="1" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="1" width="493" bgcolor="#FFFFFF">
		      <DIV id="dhcp_statics_table"></DIV></td> <!--John-->
                       </td>
                          </tr>
                    <tr>
                      <td height="45" width="151" bgcolor="#E7E7E7" style="border-top-style: none; border-top-width: medium"> </td>
                      <td height="45" width="13" bgcolor="#FFFFFF"> </td>
                      <td height="45" width="493" bgcolor="#FFFFFF">
			<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#5b5b5b" id="AutoNumber4" width="431" height="19">
              <tr>
                <td height="15" width="102" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A HREF=javascript:toSubmit(); ><script>Capture(sbutton.save)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="102" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A HREF=javascript:cancel_change()><script>Capture(sbutton.cancel)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="102" bgcolor="#8C8E8C">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A HREF=javascript:refresh()><script>Capture(sbutton.refresh)</script></A></font></span></td>
                <td height="12" width="8"></td>
                <td height="15" width="102" bgcolor="#808080">
                <p align="center"><span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt" color="#FFFFFF"><A HREF=javascript:self.close()><script>Capture(sbutton.close)</script></A></font></span></td>
              </tr>
            </table>
                      </td>
                    </tr>
                  </table>
                </div>
                </TH>
                </TR>
              </TBODY></TABLE></TH></TR></TBODY></TABLE></TR></TBODY></TABLE></FORM></CENTER></BODY></HTML>
