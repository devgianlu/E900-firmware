<% web_include_file("copyright.asp"); %>
<html><head><title>Internet Access Policy</title>
<% no_cache(); %>
<% charset(); %>
<% web_include_file("filelink.asp"); %>
<Script Language="JavaScript">
document.title = share.policy;

<% filter_init(); %>
var summary_win = null;
var ipmac_win = null;
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
		if(F.start_time) choose_enable(F.start_time);
		choose_enable(F.end_hour);
		choose_enable(F.end_min);
		choose_enable(F.end_time);
	}
	else if(I == 0){
		choose_disable(F.start_hour);
		choose_disable(F.start_min);
		if(F.start_time) choose_disable(F.start_time);
		choose_disable(F.end_hour);
		choose_disable(F.end_min);
		choose_disable(F.end_time);
	}
}
function ViewSummary(){
	summary_win = self.open('FilterSummary.asp','FilterSummary','alwaysRaised,resizable,scrollbars,width=770,height=520');
	summary_win.focus();
}
function ViewFilter(){
	ipmac_win = self.open('FilterIPMAC.asp','FilterTable','alwaysRaised,resizable,scrollbars,width=670,height=520');
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
}
function to_submit(F)
{
	if(valid(F) == true){

//		create_service(F);

		F.submit_type.value = "save";
  	     	F.submit_button.value = "Filters";
       		F.gui_action.value = "Apply";
       		F.submit();
	}
}
function to_save(F)
{
	if(valid(F) == true){
      	 	F.submit_button.value = "Filters";
       		F.change_action.value = "gozila_cgi";
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
	if(F.time_all[1].checked == true){
		start = (parseInt(F.start_hour.value, 10)) * 60 + parseInt(F.start_min.value, 10);
		end = (parseInt(F.end_hour.value, 10)) * 60 + parseInt(F.end_min.value, 10);
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

function SelFilter(num,F)
{
        F.submit_button.value = "TMSSS_Filters";
        F.change_action.value = "gozila_cgi";
        F.f_id.value=F.f_id.options[num].value;
        F.submit();
}
function exit()
{
	//closeWin(summary_win);
	closeWin(ipmac_win);
}
function init()
{
	var wk_mode = "<% nvram_get("wk_mode"); %>";
	var filter_mode = "<% nvram_get("filter"); %>";
	var wscresult="<% nvram_get("wsc_result"); %>";
	WPS_STATUS_SHOW(wscresult);
	
	// NAT or Firewall disable
	if ( wk_mode == "router") DISABLE_ALL(true,document.filters);
	else if ( filter_mode == "off" ) DISABLE_ALL(true,document.filters);
	else DISABLE_ALL(false,document.filters);
	
	day_enable_disable(document.filters,'<% filter_tod_get("day_all_init"); %>');
	time_enable_disable(document.filters,'<% filter_tod_get("time_all_init"); %>');

//	setBlockedServicesValue();
	Status(document.filters, '<% filter_policy_get("f_status","onload_status"); %>');
	choose_disable(document.filters.port0_start);
	choose_disable(document.filters.port0_end);
	choose_disable(document.filters.port1_start);
	choose_disable(document.filters.port1_end);
	
	disable_app();

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
                        choose_enable(F.elements[i]);
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
var MAX_BLOCKED_CONUT = 3;

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
		      if(f.Add_Service_Name.value == "Ping") {
			choose_disable(f.Add_Service_Protocol);
		      }
		      else {
	  	      f.Add_Service_Protocol.value = AppList[idx].pro;
		 	choose_enable(f.Add_Service_Protocol);
		      }
	  	  }
	  	  else {
	  	  	  f.Add_Service_Name.value = BlkList[idx].aname;
	  	      f.Add_Service_Port_S.value = BlkList[idx].fport;
	  	      f.Add_Service_Port_E.value = BlkList[idx].tport;
		      if(f.Add_Service_Name.value == "Ping") {
			choose_disable(f.Add_Service_Protocol);
		      }
		      else {
	  	      f.Add_Service_Protocol.value = BlkList[idx].pro;
		 	choose_enable(f.Add_Service_Protocol);
		      }
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
	    f.Add_Service_Name.focus();
	    return false;
	}
   }

//    if((f.Add_Service_Port_S.value == "") || (f.Add_Service_Port_E.value == "")) {
  //  	alert(errmsg2.err12);
  //      f.Add_Service_Port_S.focus();
  //      return false;
  //  }

    if(f.Add_Service_Port_S.value > f.Add_Service_Port_E.value){
	var tmp = f.Add_Service_Port_S.value;
	f.Add_Service_Port_S.value = f.Add_Service_Port_E.value;
	f.Add_Service_Port_E.value = tmp;
    }
	  
    AppList[idx] = new blockedService(f.Add_Service_Name.value,f.Add_Service_Port_S.value,f.Add_Service_Port_E.value,f.Add_Service_Protocol.value);
    addRow(idx,"app");
}


function editApp(){
	  if(oldList){
       var idx = oldList.options.selectedIndex;
	     if ( idx != -1 ){
	     	   var f = document.filters;
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

function disable_app(){
    var obj = document.getElementById("move1");
    obj.disabled = "true";
    obj = document.getElementById("move2");
    obj.disabled = "true";
    obj = document.getElementById("app_list");
    obj.disabled = "true";
    obj = document.getElementById("app_name");
    obj.disabled = "true";
    obj = document.getElementById("app_blk_list");
    obj.disabled = "true";
    obj = document.getElementById("app_port_s");
    obj.disabled = "true";
    obj = document.getElementById("app_port_e");
    obj.disabled = "true";
    obj = document.getElementById("app_service_protocol");
    obj.disabled = "true";
    obj = document.getElementById("app_add");
    obj.disabled = "true";
    obj = document.getElementById("app_mod");
    obj.disabled = "true";
    obj = document.getElementById("app_del");
    obj.disabled = "true";
}

</script>
</head>
<BODY onunload=exit() onload=init()>
<form name=filters method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name=blocked_service>
<input type=hidden name=filter_web>
<input type=hidden name=filter_policy>
<input type=hidden name=f_status>
<!-- <input type=hidden name=services_array>
<input type=hidden name=services_length>
<input type=hidden name=service_applist>
<input type=hidden name=blocked_service0>
<input type=hidden name=blocked_service1>
<input type=hidden name=blocked_service2>-->
<input type=hidden name="wait_time" value="3">
<% web_include_file("Top.asp"); %>
<% web_include_file("Fun.asp"); %>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,share.policy);</script></TR>
	<TR><script>draw_table(SUBFUN,"");</script>
	    <TD class=FUNNAME2><script>Capture(share.accpolicy)</script>:</TD>
	    <TD class=FUNFIELD>
	      	    <SELECT name=f_id onChange=SelFilter(this.form.f_id.selectedIndex,this.form)>
        	     <% filter_policy_select(); %>
	            </SELECT>
<SPAN class=ASPACE><script>document.write("<input type=button name=delete_button" + " value=\"" + advroute.delentries + "\" onClick=to_delete(this.form)>");</script></SPAN><SPAN class=ASPACE>
<script>document.write("<input type=button name=summary_button" + " value=\"" + share.summary + "\" onClick=ViewSummary()>");</script></SPAN>
	    </TD>
	</TR>
	<TR><script>
		draw_table(ISHR,"");
	</script></TR>
	<TR><script>draw_table(SUBFUN,"");</script>
	    <TD class=FUNNAME2><script>Capture(filter.policyname)</script>:</TD>
	    <TD class=FUNFIELD><INPUT maxLength=30 size=26 name=f_name value='<% filter_policy_get("f_name",""); %>' onBlur=valid_name1(this,"")></td>
	</TR>
	<TR><script>draw_table(SUBFUN,"");</script>
            <TD class=FUNNAME2><script>Capture(bmenu.statu)</script>:</TD>
	    <TD class=FUNFIELD>
		<SPAN class=RADIO><INPUT type=radio value=enable name=f_status1 <% filter_policy_get("f_status","enable"); %>><script>Capture(share.enabled)</script></SPAN>
		<SPAN class=RADIO><INPUT type=radio value=disable name=f_status1 <% filter_policy_get("f_status","disable"); %>><script>Capture(share.disabled)</script></SPAN>
	    </TD>
	</TR>
	<TR><script>
		draw_table(ISHRS,"");
	</script></TR>
	<TR><script>draw_table(SUBFUN,filter.appliedpc);</script>
	    <TD class=FUNNAME1 colspan=2>
             <script>document.write("<input type=button name=vfilter_button" + " value=\"" + secbutton.editlist + "\" onClick=ViewFilter() style=\"font-family: Arial; font-size: 8pt\">");
             </script>
             <SPAN class=RADIO><script>Capture(filter.thispolicy);</script></SPAN>
	    </TD>
	</TR>
	<TR><script>
		draw_table(ISHRS,"");
	</script></TR>
	<TR><script>draw_table(SUBFUN,wlanfilter.accrest);</script>
	    <TD class=FUNNAME2>
		<SPAN class=RADIO><input type=radio <% filter_policy_get("f_status","deny"); %> name=f_status2 value=deny OnClick=Status(this.form,"deny")><script>Capture(filter.deny)</script></SPAN><br>
                <SPAN class=RADIO><input type=radio <% filter_policy_get("f_status","allow"); %> name=f_status2 value=allow OnClick=Status(this.form,"allow")><script>Capture(filter.allow)</script></SPAN>
	    </TD>
	    <TD class=FUNFIELD><script>Capture(filter.dayandhr)</script></TD>
	</TR>
	<TR><script>
		draw_table(ISHRS,"");
	</script></TR>
	<TR><script>draw_table(SUBFUN,filter.schedule);</script>
	    	<TD class=FUNNAME1 colspan=2>
		<SPAN class=RADIO><script>Capture(filter.days)</script>:</SPAN><BR>
                <input type=checkbox value=1 name=day_all <% filter_tod_get("day_all"); %> onClick=dayall(this.form)>
                <script>Capture(filter.everyday)</script>
                <INPUT type=checkbox value=1 name=week0 <% filter_tod_get("week0"); %>><script>Capture(filter.sun)</script>
                <INPUT type=checkbox value=1 name=week1 <% filter_tod_get("week1"); %>><script>Capture(filter.mon)</script>
                <INPUT type=checkbox value=1 name=week2 <% filter_tod_get("week2"); %>><script>Capture(filter.tue)</script>
                <INPUT type=checkbox value=1 name=week3 <% filter_tod_get("week3"); %>><script>Capture(filter.wed)</script>
                <INPUT type=checkbox value=1 name=week4 <% filter_tod_get("week4"); %>><script>Capture(filter.thu)</script>
                <INPUT type=checkbox value=1 name=week5 <% filter_tod_get("week5"); %>><script>Capture(filter.fri)</script>
                <INPUT type=checkbox value=1 name=week6 <% filter_tod_get("week6"); %>><script>Capture(filter.sat)</script>
	     </TD>
	</TR>
	<TR><script>draw_table(SUBFUN,"");</script>
	    <TD class=FUNNAME1 colspan=2><SPAN class=RADIO><script>Capture(filter.times)</script>:</SPAN><BR>
                <input type=radio value=1 name=time_all <% filter_tod_get("time_all_en"); %> onClick=timeall(this.form,'0')>
                <script>Capture(filter.tfhrs)</script>
                <INPUT type=radio value=0 name=time_all <% filter_tod_get("time_all_dis"); %> onClick=timeall(this.form,'1')>
		<select name="start_hour" style="font-family:Arial; font-size:9pt">
		<% filter_tod_get("start_hour_24ampm"); %>
                </select> :
                <select name="start_min" style="font-family:Arial; font-size:9pt">
                <% filter_tod_get("start_min_5"); %>
                </select> to
                <select name="end_hour" style="font-family:Arial; font-size:9pt">
                <% filter_tod_get("end_hour_24ampm"); %>
                </select> :
                 <select name="end_min" style="font-family:Arial; font-size:9pt">
                <% filter_tod_get("end_min_5"); %>
                </select></SPAN></TD>
            </tr>
	      <TR><script>
			draw_table(ISHRS,"");
	      </script></TR>
	      <TR><script>draw_table(SUBFUN,filter.websiteblock);</script>
	          <TD class=FUNNAME1 colspan=2>
		URL 1:
		<SPAN class=ASPACE><INPUT class=num size=20 maxlength=22 name=host0 value='<% filter_web_get("host","0"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"URL")></SPAN>
		URL 3:
		<SPAN class=ASPACE><INPUT class=num size=20 maxlength=22 name=host2 value='<% filter_web_get("host","2"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"URL")></SPAN><BR>
		URL 2:
		<SPAN class=ASPACE><INPUT class=num size=20 maxlength=22 name=host1 value='<% filter_web_get("host","1"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"URL")></SPAN>
		URL 4:
		<SPAN class=ASPACE><INPUT class=num size=20 maxlength=22 name=host3 value='<% filter_web_get("host","3"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"URL")></SPAN>
	        </TD>
        </TR>
        <TR><script>
		draw_table(ISHRS,"");
	</script></TR>
	<TR><script>draw_table(SUBFUN,filter.blockkeyword);</script>
	    <TD class=FUNNAME1 colspan=2>
		<script>Capture(filter.keyword)</script> 1:
		<SPAN class=ASPACE><INPUT class=num size=18 maxlength=79 name=url0 value='<% filter_web_get("url","0"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"Keyword")></SPAN>
		<script>Capture(filter.keyword)</script> 3:
		<SPAN class=ASPACE><INPUT class=num size=18 maxlength=79 name=url2 value='<% filter_web_get("url","2"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"Keyword")></SPAN><BR>
		<script>Capture(filter.keyword)</script> 2:
		<SPAN class=ASPACE><INPUT class=num size=18 maxlength=79 name=url1 value='<% filter_web_get("url","1"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"Keyword")></SPAN>
		<script>Capture(filter.keyword)</script> 4:		
		<SPAN class=ASPACE><INPUT class=num size=18 maxlength=79 name=url3 value='<% filter_web_get("url","3"); %>' style="FONT-SIZE: 9pt; FONT-FAMILY: Arial" onBlur=valid_name(this,"Keyword")></SPAN>
	   </TD>
        </TR>
        <TR><script>
		draw_table(ISHRS,"");
	</script></TR>
	<TR><script>draw_table(SUBFUN,filter.blockedapp);</script>
	    <TD class=FUNNAME1 colspan=2><script>Capture(filter.threeapp);</script></TD>
	</TR>
	<TR><script>draw_table(SUBFUN,"");</script>
	    <TD class=FUNNAME1 colspan=2> 
                <table name ="table" class=BORDERTABLE>
                  <TR><TD><SPAN class=RADIO><script>Capture(bmenu.applications);</script></SPAN></TD>
		      <TD>&nbsp;</TD>
		      <TD><SPAN class=RADIO><script>Capture(filter.blockedlist);</script></SPAN></TD>
                  </TR>
                  <TR>
		      <TD>
        		<SELECT id="app_list" name="app_list" size="7" onchange="changeSelected(this)"></SELECT>
		        <script>
				<% filter_port_services_get("all_list_table","0"); %> 
		                 listRow("app");
		        </script>
	   	      </TD>
	              <TD>            
                    <p><input id="move1" type="button" value= " &gt;&gt; " onClick="move(1)"></p>
                    <p><input id="move2" type="button" value= " &lt;&lt; " onClick="move(0)"></p>
		          </TD>
		      <TD>
		        <select id="app_blk_list" name="blk_list" size="7" onchange="changeSelected(this)"> </SELECT>
		        <script>
				<% filter_port_services_get("blk_list_table","0"); %> 
		                 listRow("blk");
		        </script>
		      </TD>
		  </TR>
                </table>
	     </TD>
          </TR>
	  <TR><script>draw_table(SUBFUN,"");</script>
	      <TD colspan=2 class=FUNNAME1><BR>
		    <TABLE class=BORDERTABLE>
			<TR><TD><SPAN class=RADIO><script>Capture(qos.appname)</script></SPAN></TD>
		            <TD><INPUT id="app_name" class=num maxLength=12 size=12 name=Add_Service_Name style="font-size:9pt" onBlur=valid_name1(this,"Service%20Name")></TD>
			</TR>
			<TR><TD><SPAN class=RADIO><script>Capture(portsrv.portrange)</script></SPAN></TD>
			    <TD><INPUT id="app_port_s" class=num  maxLength=5 size=5 name=Add_Service_Port_S style="font-size:8pt; font-family:Arial")><SPAN class=ASPACE><script>Capture(portforward.to)</script></SPAN>
                    <INPUT id="app_port_e" class=num  maxLength=5 size=5 name=Add_Service_Port_E style="font-size:8pt; font-family:Arial")>
			    </TD>
			</TR>
			<TR><TD><SPAN class=RADIO><script>Capture(share.protocol)</script></SPAN></TD>
                	    <TD><SELECT id="app_service_protocol" size=1 name=Add_Service_Protocol style="font-family: Arial; font-size: 8pt">
		                <option value=6><script>Capture(share.tcp)</script></option>
	         		<option value=17><script>Capture(share.udp)</script></option>
			        <option value=23 selected><script>Capture(share.both)</script></option>
		                </SELECT>
			    </TD>
			</TR>
		</TABLE>
		<BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<script>document.write("<input id='app_add' value='"+portsrv.add+"' onclick=\"addApp()\" type=\"button\" disabled=\"true\"><SPAN class=ASPACE>");
                document.write("<input id='app_mod' type=button value= '"+portsrv.modify+"' onClick=editApp() disabled=\"true\"></SPAN><SPAN class=ASPACE>");
                document.write("<input id='app_del' type=button value= '"+sbutton.del+"' onClick=delApp() name=delete disabled=\"true\"></SPAN>");</script>
		</TD>
	</TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script>
</TR>
</TABLE>
<% web_include_file("TAIL.asp"); %>
