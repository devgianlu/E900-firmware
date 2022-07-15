<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Internet Access Policy</TITLE>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>
<link rel="stylesheet" href="dhtmlwindow<% ui_position("match", "_rtl"); %>.css" type="text/css" />

<script type="text/javascript" src="dhtmlwindow.js">

/***********************************************
* DHTML Window Widget- ?Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

</script>

<link rel="stylesheet" href="modal.css" type="text/css" />
<script type="text/javascript" src="modal.js"></script>


<SCRIPT language=JavaScript>
document.title = share.policy;

<% filter_init(); %>
var summary_win = null;
var ipmac_win = null;
var ping_slected = false;
function dayall(F){
	if(F.day_all.checked == false)
		I = 1;
	else
		I = 0;
	day_enable_disable(F,I);
}
function day_enable_disable(F,I){
        if(I == 1){
		choose_enable(F.week0);
		choose_enable(F.week1);
		choose_enable(F.week2);
		choose_enable(F.week3);
		choose_enable(F.week4);
		choose_enable(F.week5);
		choose_enable(F.week6);
	}
	else if(I == 0){
		choose_disable(F.week0);
		choose_disable(F.week1);
		choose_disable(F.week2);
		choose_disable(F.week3);
		choose_disable(F.week4);
		choose_disable(F.week5);
		choose_disable(F.week6);
	}
}
function timeall(F,I){
	time_enable_disable(F,I);
}
function time_enable_disable(F,I){
	if(I == 1){
		choose_enable(F.start_hour);
		choose_enable(F.start_min);
		//if(F.start_time) choose_enable(F.start_time);
		choose_enable(F.end_hour);
		choose_enable(F.end_min);
		//choose_enable(F.end_time);
	}
	else if(I == 0){
		choose_disable(F.start_hour);
		choose_disable(F.start_min);
		//if(F.start_time) choose_disable(F.start_time);
		choose_disable(F.end_hour);
		choose_disable(F.end_min);
		//choose_disable(F.end_time);
	}
}
function ViewSummary(){
	if ( close_session == "1" )
	{
		summary_win = self.open('FilterSummary.asp','FilterSummary','alwaysRaised,resizable,scrollbars,width=850,height=370');
	}
	else
	{
		summary_win = self.open('FilterSummary.asp;session_id=<% nvram_get("session_key"); %>','FilterSummary','alwaysRaised,resizable,scrollbars,width=850,height=370');
	}
	summary_win.focus();
}
function ViewFilter(){
	if ( close_session == "1" )
	{
		ipmac_win = self.open('FilterIPMAC.asp','FilterTable','alwaysRaised,resizable,scrollbars,width=670,height=520');
	}
	else
	{
		ipmac_win = self.open('FilterIPMAC.asp;session_id=<% nvram_get("session_key"); %>','FilterTable','alwaysRaised,resizable,scrollbars,width=670,height=520');
	}
	ipmac_win.focus();
}
function create_service(F){
 	for(var i=0 ; i<AppList.length ; i++){
 		F.services_array.value += AppList[i].fport+":";
 		F.services_array.value += AppList[i].tport+":";
 		F.services_array.value += AppList[i].pro+":";
 		F.services_array.value += AppList[i].aname.replace(/ /, "&nbsp;")+"(&nbsp;)";
 	}
 	for(var i=0 ; i<BlkList.length ; i++){
 		F.services_array.value += BlkList[i].fport+":";
 		F.services_array.value += BlkList[i].tport+":";
 		F.services_array.value += BlkList[i].pro+":";
 		F.services_array.value += BlkList[i].aname.replace(/ /, "&nbsp;")+"(&nbsp;)";
 	}
 	F.services_length.value = AppList.length;

	if(BlkList.length > 0)	F.blocked_service0.value = BlkList[0].aname.replace(/ /, "&nbsp;");
	if(BlkList.length > 1)	F.blocked_service1.value = BlkList[1].aname.replace(/ /, "&nbsp;");
	if(BlkList.length > 2)	F.blocked_service2.value = BlkList[2].aname.replace(/ /, "&nbsp;");
	if(BlkList.length > 3)  F.blocked_service3.value = BlkList[3].aname.replace(/ /, "&nbsp;");
        if(BlkList.length > 4)  F.blocked_service4.value = BlkList[4].aname.replace(/ /, "&nbsp;");
        if(BlkList.length > 5)  F.blocked_service5.value = BlkList[5].aname.replace(/ /, "&nbsp;");
	if(BlkList.length > 6)  F.blocked_service6.value = BlkList[6].aname.replace(/ /, "&nbsp;");
        if(BlkList.length > 7)  F.blocked_service7.value = BlkList[7].aname.replace(/ /, "&nbsp;");
        if(BlkList.length > 8)  F.blocked_service8.value = BlkList[8].aname.replace(/ /, "&nbsp;");
	if(BlkList.length > 9)  F.blocked_service9.value = BlkList[9].aname.replace(/ /, "&nbsp;");
}
//add by michael to add the white list filter
function check_white_list(F)
{
	var i,j;
	var white_list = new Array(".ciscomediahub.com",".ciscomediahub.net",".ciscomediatv.com",".ciscofeedback.vovici.com",".cisco.vovici.com",".cisco.com",".belkin.com",".linksyscam.com",".linksyscam.net",".linksys-cam.com",".linksysnet.com",".linksysstorage.com",".linksyshomemonitor.com",".linksysremotecam.com",".linksysremoteview.com",".linksys.eu",".linksysrma.moduslink.com",".linksyssupport.webex.com",".linksysdata.com",".linksysbycisco.com",".linksys.com",".mylinksysrouter.com",".mylinksysrouter.net",".mylinksysfiles.com",".mylinksysmedia.com",".mylinksysmedia.net",".mylinksysstuff.com",".mynas200.com",".mynas200.net",".mynas200stuff.com",".mylinksyscam.com",".mylinksyscamera.com",".mylinksyshome.com",".mylinksysview.com",".myhomeserver.com",".myciscocommunity.com",".tzo.net",".tzo.org",".tzo.com",".sipura.com",".kiss-technology.com",".nohold.net",".ourlinksys.com",".efm.cisco.vovici.com",".shoplinksys.com",".web-rebates.com",".networkmagic.com",".purenetworks.com",".ookla.com",".speedtest.net",".custhelp.com",".rightnow.com",".trialpay.com");
	for(i = 0; i < 4; i++)
	{
		var url_tmp = eval("F.host"+i+".value.toLowerCase()");
		
		for(j=0 ; j < white_list.length ; j++)
		{
			var len_begin = url_tmp.length - white_list[j].length
			if(len_begin < -1)
				continue;

			if(len_begin == -1)
				var url_tmp2 = "." + url_tmp;
			else						
				var url_tmp2 = url_tmp.substring(len_begin);

			if(url_tmp2 == white_list[j])
				return true;	
		}
	}
	return false;
}
//end by michael
function to_submit_post()
{
	var F = document.filters;
	F.submit_type.value = "save";
  	F.submit_button.value = "Filters";
       	F.gui_action.value = "Apply";
       	F.submit();
}
function to_submit(F)
{
	var act = '<% hnd_activate(); %>';
	act = "0";
	var pc_enable = '<%nvram_get("tmsss_enabled");%>';
	if (act == "0")
	{
		if(check_white_list(F) == true)
		{
			if(confirm(errmsg.whitelist))
			{
				if(valid(F) == true){
		
					create_service(F);
					if(pc_enable == "0")
						to_submit_post();
					else
					{
						if ( close_session == "1" )
						{
							self.open('PC_passwd.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=660,height=350').focus();
						}
						else
						{
							self.open('PC_passwd.asp;session_id=<% nvram_get("session_key"); %>','DHCPResTable','alwaysRaised,resizable,scrollbars,width=660,height=350').focus();
						}
					}
				}
			}			
		}
		else
		{
			if(valid(F) == true){
	
				create_service(F);
				if(pc_enable == "0")
					to_submit_post();
				else
				{
					if ( close_session == "1" )
					{
						self.open('PC_passwd.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=660,height=350').focus();
					}
					else
					{
						self.open('PC_passwd.asp;session_id=<% nvram_get("session_key"); %>','DHCPResTable','alwaysRaised,resizable,scrollbars,width=660,height=350').focus();
					}
				}
	
			}
		}
	}
}
function to_save(F)
{
	if(valid(F) == true){
      	 	F.submit_button.value = "Filters";
       		F.change_action.value = "gozila_cgi";
		F.next_page.value = "Filters.asp";	
		F.submit_type.value = "save";
       		F.gui_action.value = "Apply";
       		F.submit();
	}
}
function to_delete(F)
{
//      if(confirm("Delete the Policy?")){
        if(confirm(hfilter2.delpolicy)){
	   	F.submit_button.value = "Filters";
     		F.change_action.value = "gozila_cgi";
		F.submit_type.value = "delete";
		F.next_page.value = "Filters.asp";	
	       	F.gui_action.value = "Apply";
       		F.submit();
	}
}
function valid(F)
{
	if(F.day_all.checked == false && F.week0.checked == false && F.week1.checked == false && F.week2.checked == false && F.week3.checked == false && F.week4.checked == false && F.week5.checked == false && F.week6.checked == false){
//              alert("You must at least select a day.");
                alert(errmsg.err3);
		return false;
	}
	//if(F.time_all[1].checked == true && F.start_time && F.end_time){
	if(F.time_all[1].checked == true){
		//start = (parseInt(F.start_time.value, 10)*12 + parseInt(F.start_hour.value, 10)) * 60 + parseInt(F.start_min.value, 10);
		start = parseInt(F.start_hour.value, 10) * 60 + parseInt(F.start_min.value, 10);
		//end = (parseInt(F.end_time.value, 10)*12 + parseInt(F.end_hour.value, 10)) * 60 + parseInt(F.end_min.value, 10);
		end = parseInt(F.end_hour.value, 10) * 60 + parseInt(F.end_min.value, 10);
		if(end <= start){
//                      alert("The end time must be bigger than start time!");
                        alert(errmsg.err4);
			return false;
		}
	}
	if(F.f_status1[1].checked == true)	// Disable
		F.f_status.value = "0";
	else {					// Enable
		if(F.f_status2[1].checked == true)	// Allow
			F.f_status.value = "2";
		else					// deny
			F.f_status.value = "1";
	}
	return true;
}
function isascii1(I,M)
{
	for(i=0 ; i<I.value.length; i++){
		ch = I.value.charAt(i);
		if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch == '-' || ch == '_'){
			//
		}
		else {
			alert(errmsg.err14+" [A - Z , a - z , 0 - 9 , - , _ ]");
			I.value = I.defaultValue;
			return false;
		}
	}
	return true;
}
function valid_name1(I,M,flag)
{
	isascii1(I,M);

	var bbb = I.value.replace(/^\s*/,"");
        var ccc = bbb.replace(/\s*$/,"");

        I.value = ccc;

	if(flag & SPACE_NO){
		check_space(I,M);
	}

}
function SelFilter(num,F)
{
        F.submit_button.value = "Filters";
        F.change_action.value = "gozila_cgi";
        F.f_id.value=F.f_id.options[num].value;
		F.next_page.value = "Filters.asp";	
        F.submit();
}
function exit()
{
	//closeWin(summary_win);
	closeWin(ipmac_win);
}

function DisFilters(F)
{
	var start = '';
	var end = '';
 	var total = F.elements.length;
	for(i=0 ; i < total ; i++){
		if(F.elements[i].name == "start")	start = i;
		if(F.elements[i].name == "end")		end = i;
	}
	if(start == '' || end == '')	return true;

		for(i = start; i<=end ;i++)
			choose_disable(F.elements[i]);
}

function init()
{
	var swmode = '<% nvram_get("switch_mode");%>';
	if( swmode == 1)
		alert(share.brdgmwn);

	var act = '<% hnd_activate(); %>';
<% support_invmatch("CES_PARENTAL_CONTROL", "1", "/*"); %>
	document.filters.pc_status[1].checked = true;
<% support_invmatch("CES_PARENTAL_CONTROL", "1", "*/"); %>
	act = "0";
	if(act == "0")
	{
		day_enable_disable(document.filters,'<% filter_tod_get("day_all_init"); %>');
		time_enable_disable(document.filters,'<% filter_tod_get("time_all_init"); %>');
	//	setBlockedServicesValue();
		Status(document.filters, '<% filter_policy_get("f_status","onload_status"); %>');
		choose_disable(document.filters.port0_start);
		choose_disable(document.filters.port0_end);
		choose_disable(document.filters.port1_start);
		choose_disable(document.filters.port1_end);
	}
	else	
	{	
		DisFilters(document.filters);
		alert(errmsg.hnd1);
	}
<% support_invmatch("CES_PARENTAL_CONTROL", "1", "/*"); %>
	if (close_session == "1")
	{
		Warningwin=dhtmlmodal.open("Warningbox", "iframe", "inetar_warning.asp", pctrl.warning, "width=660px,height=310px,resize=1,scrolling=1,center=1", "recal");
	}
	else
	{
		Warningwin=dhtmlmodal.open("Warningbox", "iframe", "inetar_warning.asp;session_id=<% nvram_get("session_key"); %>", pctrl.warning, "width=660px,height=310px,resize=1,scrolling=1,center=1", "recal");
	}
<% support_invmatch("CES_PARENTAL_CONTROL", "1", "*/"); %>

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);

}

function service(id, name, port_start, port_end, protocol){
	this.id = id;
	this.name = name;
	this.start = port_start;
	this.end = port_end;
	this.protocol = protocol;
	this.deleted = false;
	this.modified = false;
}

//services=new Array();
//services_length=0;
/* Init. services data structure */
//<% filter_port_services_get("all_list..........", "0"); %>

//servport_name0 = "<% filter_port_services_get("service", "0"); %>";
//servport_name1 = "<% filter_port_services_get("service", "1"); %>";
//servport_name1 = "<% filter_port_services_get("service", "2"); %>";
//servport_name0 = "tcp";
//servport_name1 = "utp";
function search_service_index(name){
 var i;
        for(i=0 ; i<services_length ; i++){
                if(name == services[i].name){
                        return i;
                }
        }
        return -1;
}
function setBlockedServicesValue(){
var index;
	/* for service port 0 */
	index = search_service_index(servport_name0);
	if(index!=-1){
		document.filters.port0_start.value = services[index].start;
		document.filters.port0_end.value = services[index].end;
		document.filters.blocked_service0.selectedIndex = index+1; /* first will be none */
	}

	/* for service port 1 */
	index = search_service_index(servport_name1);
	if(index!=-1){
		document.filters.port1_start.value = services[index].start;
		document.filters.port1_end.value = services[index].end;
		document.filters.blocked_service1.selectedIndex = index+1; /* first will be none */
	}
}

function onChange_blockedServices(index, start, end){
	index--
	if(index == -1){
		start.value = '';
		end.value = '';
	}
	else{
		start.value = services[index].start;
		end.value = services[index].end;
	}
}
function Status(F,I){
	var start = '';
        var end = '';
        var total = F.elements.length;
        for(i=0 ; i < total ; i++){
                if(F.elements[i].name == "host0")  start = i;
                if(F.elements[i].name == "delete")  end = i;
        }
        if(start == '' || end == '')    return true;

        if(I == "deny" ) {
                for(i = start; i<=end ;i++)
                        choose_disable(F.elements[i]);
        }
        else {
                for(i = start; i<=end ;i++)
                {
			if(F.elements[i].name == "Add_Service_Name"
			&& ping_slected
			&& F.elements[i].value == "Ping"
	  	        && F.elements[i+1].value == 0
	  	        && F.elements[i+2].value == 0)
			{
				i += 5;
				continue;
			}
			else
				choose_enable(F.elements[i]);
		}
	}


}

function move(blocked)
{
	  var fbox = document.filters.app_list;
	  var tbox = document.filters.blk_list;
    if(blocked == 0) {
    	 fbox = document.filters.blk_list;
       tbox = document.filters.app_list;
    }

    var fcount = fbox.options.length;
    var tcount = tbox.options.length;

    for(i=0; i<fcount; i++) {
        if(fbox.options[i].selected)
        {
        	  if(blocked == 0){
            	 AppList[tcount] = BlkList[i];
               BlkList.splice(i,1);
            }
            else {
            	 if (tcount < MAX_BLOCKED_CONUT) {    
                  BlkList[tcount] = AppList[i];
                  AppList.splice(i,1);
               }
              else {
            	    //alert("Only three applications can be blocked."); 
		    alert(errmsg.err56);
            	    return;
            	}      
            }
            var tmp = new Option(fbox.options[i].text, fbox.options[i].text, false, false);
        	  tbox.options[tcount++] = tmp;
            fbox.remove(i);
            break;
        }
    }
}

var oldList = "";
var AppList = new Array();
var BlkList = new Array();
var MAX_BLOCKED_CONUT = 10;

function blockedService(aname,fport,tport,pro){
    this.aname = aname;
    this.fport = fport;
    this.tport = tport;
    this.pro = pro;
}

function changeSelected(obj){
	  var idx = obj.options.selectedIndex;
	  var f = document.filters;
	  var tmpList = new Array();
	  //alert(idx);

	  if(idx > -1){
	  	  if( (oldList != "") && (obj != oldList) ) oldList.options.selectedIndex = -1;
	  	  if( obj == f.app_list){
	  	      f.Add_Service_Name.value = AppList[idx].aname;
	  	      f.Add_Service_Port_S.value = AppList[idx].fport;
	  	      f.Add_Service_Port_E.value = AppList[idx].tport;
	  	      // not Ping(0-0)
	  	      if( !(f.Add_Service_Name.value == "Ping"
	  	         && f.Add_Service_Port_S.value == 0
	  	         && f.Add_Service_Port_E.value == 0) ) {
	  	          f.Add_Service_Protocol.value = AppList[idx].pro;
		      }
	  	  }
	  	  else {
		      f.Add_Service_Name.value = BlkList[idx].aname;
	  	      f.Add_Service_Port_S.value = BlkList[idx].fport;
	  	      f.Add_Service_Port_E.value = BlkList[idx].tport;
	  	      // not Ping(0-0)
	  	      if( !(f.Add_Service_Name.value == "Ping"
	  	         && f.Add_Service_Port_S.value == 0
	  	         && f.Add_Service_Port_E.value == 0) ) {
	  	          f.Add_Service_Protocol.value = BlkList[idx].pro;
		      }
	  	  }
		  // not allow to edit application "Ping"
		  if(f.Add_Service_Name.value == "Ping"
	  	     && f.Add_Service_Port_S.value == 0
	  	     && f.Add_Service_Port_E.value == 0) {
			choose_disable(f.Add_Service_Name);
			choose_disable(f.Add_Service_Port_S);
			choose_disable(f.Add_Service_Port_E);
			choose_disable(f.Add_Service_Protocol);
			choose_disable(f.add_app);
			choose_disable(f.edit_app);
			ping_slected = true;
		  }
		  else {
			choose_enable(f.Add_Service_Name);
			choose_enable(f.Add_Service_Port_S);
			choose_enable(f.Add_Service_Port_E);
			choose_enable(f.Add_Service_Protocol);
			choose_enable(f.add_app);
			choose_enable(f.edit_app);
			ping_slected = false;
		  }

	      oldList = obj;
	  }
}

function addRow(i,flag){
	 if(flag == "app") {
      var txt = AppList[i].aname + "    (" + AppList[i].fport + " - " + AppList[i].tport + ")";
      document.filters.app_list.options[i] = new Option(txt,i);
   }
   else {
   	  var txt = BlkList[i].aname + "    (" + BlkList[i].fport + " - " + BlkList[i].tport + ")";
      document.filters.blk_list.options[i] = new Option(txt,i);
   }
}

function listRow(flag){
	var count = 0;
	if(flag == "app") count = AppList.length;
  else count = BlkList.length;
  for(var i= 0; i<count; i++) addRow(i,flag);
}

function addApp() {
    var f = document.filters;
    var idx = AppList.length;
    var flg=false ; 
    
    if(f.Add_Service_Name.value == ""){
        alert(errmsg2.err12);
        f.Add_Service_Name.focus();
        return false;
    }


    if (valid_range(f.Add_Service_Port_S,0,65535,"") == false) { f.Add_Service_Port_S.focus(); return false; }
    if (valid_range(f.Add_Service_Port_E,0,65535,"") == false) { f.Add_Service_Port_E.focus(); return false; }

    for(var i=0 ; i<idx ; i++){
	if ( BlkList.length>=i && BlkList.length-i>0 ) 
	{
		if(f.Add_Service_Name.value == BlkList[i].aname) flg = true ; 
	}
	if(f.Add_Service_Name.value == AppList[i].aname) flg = true ; 
	if ( flg ) 
	{
	    alert(errmsg.err57);
	    var oServName = document.getElementById("Add_Service_Name");
	    if ( oServName.disabled == false )
	        oServName.focus();
	    return false;
	}
   }

//    if((f.Add_Service_Port_S.value == "") || (f.Add_Service_Port_E.value == "")) {
  //  	alert(errmsg2.err12);
  //      f.Add_Service_Port_S.focus();
  //      return false;
  //  }

    if(parseInt(f.Add_Service_Port_S.value) > parseInt(f.Add_Service_Port_E.value)){
	var tmp = f.Add_Service_Port_S.value;
	f.Add_Service_Port_S.value = f.Add_Service_Port_E.value;
	f.Add_Service_Port_E.value = tmp;
    }
	  
    AppList[idx] = new blockedService(f.Add_Service_Name.value,f.Add_Service_Port_S.value,f.Add_Service_Port_E.value,f.Add_Service_Protocol.value);
    addRow(idx,"app");
}


function editApp(){
	if(parseInt(document.filters.Add_Service_Port_S.value) > parseInt(document.filters.Add_Service_Port_E.value))
	{
		var tmp = document.filters.Add_Service_Port_S.value;
		document.filters.Add_Service_Port_S.value = document.filters.Add_Service_Port_E.value;
		document.filters.Add_Service_Port_E.value = tmp;
	}
    if(oldList){
        var idx = oldList.options.selectedIndex;
        if ( idx != -1 ){
            var f = document.filters;
            var flg = false;
            // check if exist in application list
            for(var i=0 ; i<AppList.length ; i++){
                if ( i == idx )
                    continue;
                if ( BlkList.length>=i && BlkList.length-i>0 ) 
                {
                    if(f.Add_Service_Name.value == BlkList[i].aname) flg = true ; 
                }
                if(f.Add_Service_Name.value == AppList[i].aname) flg = true ; 
                if ( flg ) 
                {
                    alert(errmsg.err57);
                    var oServName = document.getElementById("Add_Service_Name");
                    if ( oServName.disabled == false )
                        oServName.focus();
                    return false;
                }
            }
            
            if (valid_range(f.Add_Service_Port_S,0,65535,"") == false) { f.Add_Service_Port_S.focus(); return false; }
            if (valid_range(f.Add_Service_Port_E,0,65535,"") == false) { f.Add_Service_Port_E.focus(); return false; }
            var tmp = new blockedService(f.Add_Service_Name.value,f.Add_Service_Port_S.value,f.Add_Service_Port_E.value,f.Add_Service_Protocol.value);
            if( oldList == document.filters.app_list) {
                AppList[idx] = tmp;
                addRow(idx,"app");
            }
            else  {
                BlkList[idx] = tmp;
                addRow(idx,"blk");
            }
       } //if idx
    }
}

function delApp(){
	  if(oldList) {
	     var idx = oldList.options.selectedIndex;
	     if ( idx != -1 ){
          if( oldList == document.filters.app_list) AppList.splice(idx,1);
          else  BlkList.splice(idx,1);
          oldList.remove(idx);
       }
    }
    var f = document.filters;
    f.Add_Service_Name.value ="";
    f.Add_Service_Port_S.value="";
		f.Add_Service_Port_E.value="";
		f.Add_Service_Protocol.value="";
}

function sel_pc(flag)
{
	var f = document.filters;
	f.submit_button.value = "PC_settings";
	f.change_action.value = "gozila_cgi";
	if(flag == "1")
	{
		//self.open('pc_warning.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=720,height=610').focus();	
		f.next_page.value = "PCAR.asp";	
	}
	else
	{
		//self.open('inetar_warning.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=720,height=610').focus();	
		f.next_page.value = "Filters.asp";	
	}
	f.submit();	
}
</SCRIPT>
</HEAD>
<BODY onload=init()>
<form name=filters method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=next_page>
<input type=hidden name=gui_action>
<input type=hidden name=blocked_service>
<input type=hidden name=filter_web>
<input type=hidden name=filter_policy>
<input type=hidden name=f_status>
<input type=hidden name=services_array>
<input type=hidden name=services_length>
<input type=hidden name=service_applist>
<input type=hidden name=blocked_service0>
<input type=hidden name=blocked_service1>
<input type=hidden name=blocked_service2>
<input type=hidden name=blocked_service3>
<input type=hidden name=blocked_service4>
<input type=hidden name=blocked_service5>
<input type=hidden name=blocked_service6>
<input type=hidden name=blocked_service7>
<input type=hidden name=blocked_service8>
<input type=hidden name=blocked_service9>
<input type=hidden name="wait_time" value="3">
<input type=hidden name=start>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,share.policy);</script></TR>
<% support_invmatch("CES_PARENTAL_CONTROL_SUPPORT", "1", "<!--"); %>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME1 colspan="2">
		<INPUT type=radio value=0 name=pc_status onclick=sel_pc("1")><font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.pcontrol)</script>&nbsp;
		<b>(
		<script>
		if( "<% nvram_get("tmsss_enabled");%>" == "1")
			Capture(share.enabled);
		else
			Capture(share.disabled);
		</script>
		)</b>
		</font>&nbsp;
		<INPUT type=radio value=1 name=pc_status onclick=sel_pc("0")><font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.inetacp)</script> &nbsp;<b>(
		<script>
		if( "<% nvram_get("tmsss_enabled");%>" == "1")
			Capture(share.disabled);
		else
			Capture(share.enabled);
		</script>
		)</b></font>
		</TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
<% support_invmatch("CES_PARENTAL_CONTROL_SUPPORT", "1", "-->"); %>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(share.accpolicy)</script>:&nbsp;</TD>
		<TD class=FUNFIELD>
		<SELECT name=f_id onChange=SelFilter(this.form.f_id.selectedIndex,this.form)>
             <% filter_policy_select(); %>
            </SELECT>
			<script>document.write("<input type=button name=delete_button" + " value=\"" + hrouting.phase17 + "\" onClick=to_delete(this.form)>");</script>&nbsp;
<script>document.write("<input type=button name=summary_button" + " value=\"" + share.summary + "\" onClick=ViewSummary()>");</script>			
		</TD>
		</TR>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(filter.policyname)</script>:</TD>
		<TD class=FUNFIELD><INPUT maxLength=30 size=26 name=f_name value='<% filter_policy_get("f_name",""); %>' onBlur=valid_name1(this,"")></TD>
		</TR>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME2><script>Capture(bmenu.statu)</script>:&nbsp;</TD>
		<TD class=FUNFIELD><INPUT type=radio value=enable name=f_status1 <% filter_policy_get("f_status","enable"); %>><B><script>Capture(share.enabled)</script></B>&nbsp;
		  <INPUT type=radio value=disable name=f_status1 <% filter_policy_get("f_status","disable"); %>><B><script>Capture(share.disabled)</script></B></TD>
		</TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
     <TR><script>draw_table(SUBFUN,filter.appliedpc);</script>
		<TD class=FUNNAME1 colspan="2"><script>document.write("<input type=button name=vfilter_button" + " value=\"" + secbutton.editlist + "\" onClick=ViewFilter() style=\"font-family: Arial; font-size: 8pt\">");</script>
             <font face="Arial" style="font-size: 8pt; font-weight:700">&nbsp;<B><script>Capture(filter.thispolicy);</script></B></font></TD>
		</TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
     <TR><script>draw_table(SUBFUN,wlanfilter.accrest);</script>
		<TD class=FUNNAME1 colspan="2">
		<table>
				<tr>
				<td>
				<input type=radio <% filter_policy_get("f_status","deny"); %> name=f_status2 value=deny OnClick=Status(this.form,"deny")><B><script>Capture(filter.deny)</script></B><br>
                <input type=radio <% filter_policy_get("f_status","allow"); %> name=f_status2 value=allow OnClick=Status(this.form,"allow")><B><script>Capture(filter.allow)</script></B>				</td>
				<td>
				<script>Capture(filter.dayandhr)</script>				</td>
				</tr>
				</table>
		</TD>
		</TR>
		<TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,filter.schedule)</script>
				<TD colspan=2 class=FUNNAME1>
                <b><font face="Arial" style="font-size: 8pt"><script>Capture(filter.days)</script>:</font></b>
                <input type=checkbox value=1 name=day_all <% filter_tod_get("day_all"); %> onClick=dayall(this.form)>
                <span style="font-size: 8pt"><script>Capture(filter.everyday)</script>
                <INPUT type=checkbox value=1 name=week0 <% filter_tod_get("week0"); %>><script>Capture(filter.sun)</script>
                <INPUT type=checkbox value=1 name=week1 <% filter_tod_get("week1"); %>><script>Capture(filter.mon)</script>
                <INPUT type=checkbox value=1 name=week2 <% filter_tod_get("week2"); %>><script>Capture(filter.tue)</script>
                <INPUT type=checkbox value=1 name=week3 <% filter_tod_get("week3"); %>><script>Capture(filter.wed)</script>
                <INPUT type=checkbox value=1 name=week4 <% filter_tod_get("week4"); %>><script>Capture(filter.thu)</script>
                <INPUT type=checkbox value=1 name=week5 <% filter_tod_get("week5"); %>><script>Capture(filter.fri)</script>
                <INPUT type=checkbox value=1 name=week6 <% filter_tod_get("week6"); %>><script>Capture(filter.sat)</script>
                </td>
              </tr>
				<TR><script>draw_table(SUBFUN,"")</script>
				<TD colspan=2 class=FUNNAME1>
                <b><font face="Arial" style="font-size: 8pt"><script>Capture(filter.times)</script>:</font></b>
                 <input type=radio value=1 name=time_all <% filter_tod_get("time_all_en"); %> onClick=timeall(this.form,'0')>
                 <span style="font-size: 8pt"><script>Capture(filter.tfhrs)</script></span><font style="font-size: 8pt"></font>
                 <INPUT type=radio value=0 name=time_all <% filter_tod_get("time_all_dis"); %> onClick=timeall(this.form,'1')>

                <select name="start_hour" style="font-family:Arial; font-size:9pt">
								<% filter_tod_get("start_hour_24ampm"); %>
                </select> :
                <select name="start_min" style="font-family:Arial; font-size:9pt">
                <% filter_tod_get("start_min_5"); %>
                </select> to

                <select name="end_hour" style="font-family:Arial; font-size:9pt">
                <% filter_tod_get("end_hour_24ampm"); %>
                </select>  :
                 <select name="end_min" style="font-family:Arial; font-size:9pt">
                <% filter_tod_get("end_min_5"); %>
                </select></td>
              </tr>
		<TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,filter.websiteblock)</script>
		<TD colspan=2 class=FUNNAME1>
		URL 1:
		<INPUT class=num  size=24 maxlength=32 name=host0 value='<% filter_web_get("host","0"); %>' onBlur=valid_name(this,"URL")>
		URL 3:
		<INPUT class=num  size=24 maxlength=32 name=host1 value='<% filter_web_get("host","1"); %>' onBlur=valid_name(this,"URL")>		</TD></TR>
		<TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
		URL 2:		
		    <input class=num  size=24 maxlength=32 name=host2 value='<% filter_web_get("host","2"); %>' onBlur=valid_name(this,"URL")>
		URL 4:
		    <INPUT class=num  size=24 maxlength=32 name=host3 value='<% filter_web_get("host","3"); %>' onBlur=valid_name(this,"URL")></TD></TR>

        <TR><script>draw_table(ISHR,"");</script></TR>
		<TR><script>draw_table(SUBFUN,filter.blockedapp)</script>
			<TD colspan=2 class=FUNNAME1>
                <script>Capture(filter.threeapp);</script>
                </td>
           </tr>
			<TR><script>draw_table(SUBFUN,"")</script>
			<TD colspan=2 class=FUNNAME1>
            <table border="1" cellpadding="0" cellspacing="0" style="border:1px solid #2971b9; border-collapse: collapse; " bordercolor="#00FF00" width="329" id="AutoNumber19" bordercolordark="#2971b9" bordercolorlight="#2971b9" height="93">
                  <tr>
                    <td width="145" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(bmenu.applications);</script></font></span></td>
                    <td width="27" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">&nbsp;                    </td>
                    <td width="145" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                    <span style="font-weight: 700">
                    <font face="Arial" style="font-size: 8pt"><script>Capture(filter.blockedlist);</script></font></span></td>
                    </tr>
                  <tr>
                    <td width="145" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="67" align="center" style="border:1px solid #2971b9; " valign="top" bordercolor="#FF0000">

        <SELECT name=app_list size=7 style='width:125px' onchange=changeSelected(this)>  </SELECT>
        <script>
		<% filter_port_services_get("all_list_table","0"); %> 
                 listRow("app");
        </script>                    </td>
                    <td width="27" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="67" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                    <p style="margin-top: 0; margin-bottom: 0">			<input type=button value= ' &gt;&gt; ' onClick=move(1)></p>
                    <p style="margin-top: 8; margin-bottom: 0">			<input type=button value= ' &lt;&lt; ' onClick=move(0)></td>
                    <td width="145" bordercolorlight="#2971b9" bordercolordark="#2971b9" align="center" style="border:1px solid #2971b9; " valign="top" bordercolor="#FF0000">

        <select name=blk_list size=7 style='width:125px' onchange=changeSelected(this)> </SELECT>
        <script>
		<% filter_port_services_get("blk_list_table","0"); %> 
                 listRow("blk");
        </script>                    </td>
                  </tr>
                </table>

                </td></tr>
			<TR><script>draw_table(ISBLANK,"");</script></TR>
		<TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
			<table border="1" cellpadding="0" cellspacing="0" style="border-left:0px solid #2971b9; border-right:0px solid #2971b9; border-top:1px solid #2971b9; border-bottom:0px solid #2971b9; border-collapse: collapse" bordercolor="#00FF00" width="244" id="AutoNumber19" bordercolordark="#2971b9" bordercolorlight="#2971b9" height="42">
                  <tr>
                    <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(qos.appname)</script></font></span></td>
                    <td width="142" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                     <font face="Arial" style="font-size: 8pt">
			<INPUT class=num maxLength=12 size=12 name=Add_Service_Name id=Add_Service_Name style="font-size:9pt" onBlur=valid_name1(this,"Service%20Name")>                    </tr>
                  <tr>
                    <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(portsrv.portrange)</script></font></span></td>
                    <td width="142" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <font face="Arial" style="font-size: 8pt">
                    <INPUT class=num  maxLength=5 size=5 name=Add_Service_Port_S onBlur='valid_range(this,0,65535,"Port%20number")' value=0 >&nbsp;   <script>Capture(portforward.to)</script>
                    <INPUT class=num  maxLength=5 size=5 name=Add_Service_Port_E onBlur='valid_range(this,0,65535,"Port%20number")' value=0 ></font></td>
                  </tr>
                  <tr>
                    <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(share.protocol)</script></font></span></td>
                    <td width="142" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <SELECT size=1 name=Add_Service_Protocol style="font-family: Arial; font-size: 8pt">
               <option value=6><script>Capture(share.tcp)</script></option>
	             <option value=17><script>Capture(share.udp)</script></option>
                <option value=23 selected><script>Capture(share.both)</script></option>
                </SELECT></td>
                  </tr>
                  <tr>
                    <td bordercolorlight="#2971b9" bordercolordark="#2971b9" height="42" align="center" style="border:medium none #2971b9; " bordercolor="#FF0000" colspan="2">
			<script>document.write("<input type=button name=add_app value= \"" + portsrv.add + "\" onClick=addApp()>")</script> &nbsp;
			<script>document.write("<input type=button name=edit_app value= \"" + portsrv.modify + "\" onClick=editApp()>")</script> &nbsp;
			<script>document.write("<input type=button value= \"" + sbutton.del + "\" onClick=delApp() name=delete>")</script> </td>
                  </tr>
                </table>
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
				draw_bottom("Filters.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("Filters.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
