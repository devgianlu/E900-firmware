<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>Access Policy</TITLE>
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
//document.title = share.policy;
document.title = pactrl.pactrl;
var sel_dev = "";
var MAX_DEV_NUM = 5;
var MAX_URL_NUM = 8;

var dev_infos = [
<% get_dev_info();%>
["",""] ];

var block_dev_info = [
<% get_block_dev(); %>
["",""]];/*policy,mac*/

var block_time_info = [
<% get_block_time();%>
["","","","","",""] /*policy, block_time_status,sc_time_start,sc_time_end,wd_time_start,wd_time_end*/
];

var block_url_info = [
<% get_block_url(); %>
["","","","","","","","",""]	/*policy,url1,url2,url3,url4,url5,url6,url7,url8*/
];

var policy_list= new Array();

function add_policy_info(mac,block_tm_status,sc_tm_st,sc_tm_end,wd_tm_st,wd_tm_end,url0,url1,url2,url3,url4,url5,url6,url7)
{
	this.mac = mac;
	this.block_tm_status = block_tm_status;
	this.sc_tm_st = sc_tm_st;
	this.sc_tm_end = sc_tm_end;
	this.wd_tm_st = wd_tm_st;
	this.wd_tm_end = wd_tm_end;
	this.url0 = url0;
	this.url1 = url1;
	this.url2 = url2;
	this.url3 = url3;
	this.url4 = url4;
	this.url5 = url5;
	this.url6 = url6;
	this.url7 = url7;
}

function init_policy_array()
{
	for(var i = 0; i < 14; i++)
	{
		if(i < block_dev_info.length - 1)
			policy_list[policy_list.length++] = new add_policy_info(block_dev_info[i][1],block_time_info[i][1],block_time_info[i][2],block_time_info[i][3],block_time_info[i][4],block_time_info[i][5],block_url_info[i][1],block_url_info[i][2],block_url_info[i][3],block_url_info[i][4],block_url_info[i][5],block_url_info[i][6],block_url_info[i][7],block_url_info[i][8]); 
		else
			policy_list[policy_list.length++] = new add_policy_info("","0","18","13","24","13","","","","","","","","");
	}
}

function timeblockset(flag)
{
	if(flag == "2")
	{
		document.forms[0].hnd_time_status[2].checked = true;
		document.forms[0].hnd_sc_start_time.disabled = false;
		document.forms[0].hnd_sc_end_time.disabled = false;
		document.forms[0].hnd_wd_start_time.disabled = false;
		document.forms[0].hnd_wd_end_time.disabled = false;		
	}
	else if(flag == "1")
	{
		document.forms[0].hnd_time_status[1].checked = true;
		document.forms[0].hnd_sc_start_time.disabled = true;
		document.forms[0].hnd_sc_end_time.disabled = true;
		document.forms[0].hnd_wd_start_time.disabled = true;
		document.forms[0].hnd_wd_end_time.disabled = true;		
	}
	else
	{
		document.forms[0].hnd_time_status[0].checked = true;
		document.forms[0].hnd_sc_start_time.disabled = true;
		document.forms[0].hnd_sc_end_time.disabled = true;
		document.forms[0].hnd_wd_start_time.disabled = true;
		document.forms[0].hnd_wd_end_time.disabled = true;		
	}
}

function set_block_url(id)
{
	var f = document.forms[0];
	for(var i = 0; i < 8; i++)
			eval("f.url"+i).value = eval("policy_list["+id+"].url"+i);
}

function set_block_time(id)
{
	timeblockset(eval("policy_list["+id+"].block_tm_status"));	
	document.forms[0].hnd_sc_start_time.selectedIndex = eval("policy_list["+id+"].sc_tm_st");
	document.forms[0].hnd_sc_end_time.selectedIndex = eval("policy_list["+id+"].sc_tm_end");
	document.forms[0].hnd_wd_start_time.selectedIndex = eval("policy_list["+id+"].wd_tm_st");
	document.forms[0].hnd_wd_end_time.selectedIndex = eval("policy_list["+id+"].wd_tm_end");
}

function exist_add_dev()//Add by seal 110129 to fix the JIRA P3 E1200-98
{
	var exist = 0;
	for(var i = 0; i <dev_infos.length -1; i++)
	{
		exist = 0;
		for(var j = 0; j< document.forms[0].dev_list.options.length;j++)
		{
			if(dev_infos[i][0] == document.forms[0].dev_list.options[j].value)
				exist = 1;
		}
		if(exist == 0)
			break;
	}	
	return exist;
}

function add_dev()
{
	if ( close_session == "1" )
	{
		self.open('PC_adddev.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=650,height=400').focus();
	}
	else
	{
		self.open('PC_adddev.asp;session_id=<% nvram_get("session_key"); %>','DHCPResTable','alwaysRaised,resizable,scrollbars,width=650,height=400').focus();
	}
}

function set_sel_value()
{
	for(var i = 0; i<policy_list.length; i++)
	{
		if(sel_dev == policy_list[i].mac)
		{
			set_block_url(i);
			set_block_time(i);
			break;
		}
	}
}

function select_dev(I)
{
	if(document.forms[0].dev_list.options.length == 0)
	{
			return;
	}
	sel_dev = I.value;
	document.forms[0].removedev.disabled = false;
	document.forms[0].renamedev.disabled = false;
	set_sel_value();
}

function set_block_value(I,M)
{
	if(M >= 0 && M <= 7)
		valid_name(I,"URL");

	for(var i = 0; i < MAX_DEV_NUM; i++)
	{
		if(sel_dev == policy_list[i].mac)
		{
			switch(M)
			{
				/*block url*/
				case 0:
					policy_list[i].url0 = I.value;
					break;
				case 1:
					policy_list[i].url1 = I.value;
					break;
				case 2:
					policy_list[i].url2 = I.value;
					break;
				case 3:
					policy_list[i].url3 = I.value;
					break;
				case 4:
					policy_list[i].url4 = I.value;
					break;
				case 5:
					policy_list[i].url5 = I.value;
					break;
				case 6:
					policy_list[i].url6 = I.value;
					break;
				case 7:
					policy_list[i].url7 = I.value;
					break;
				/* block time*/
				case 8:
					policy_list[i].sc_tm_st = I.value;
					break;
				case 9:
					policy_list[i].sc_tm_end = I.value;
					break;
				case 10:
					policy_list[i].wd_tm_st = I.value;
					break;
				case 11:
					policy_list[i].wd_tm_end = I.value;
					break;				
				case 12:
					policy_list[i].block_tm_status = I.value;
					if(I.value != 2)
					{
						policy_list[i].sc_tm_st = "18";
						policy_list[i].sc_tm_end = "13";
						policy_list[i].wd_tm_st = "24";
						policy_list[i].wd_tm_end = "13";
					}
					set_block_time(i)
					break;	
			}
			break;
		}
	}
}

function add_option(text,value)
{
	var count = document.forms[0].dev_list.options.length;
	var item = new Option(text,value);
	document.forms[0].dev_list.options[count] = item;
	document.forms[0].dev_list.selectedIndex = count;
	enable_web_ui();


	for(var i = 0; i < MAX_DEV_NUM; i++)
	{
		if(policy_list[i].mac.length == 0)
		{
			policy_list[i].mac = value;
			policy_list[i].block_tm_status = "0";
			policy_list[i].sc_tm_st = "18";
			policy_list[i].sc_tm_end = "13";
			policy_list[i].wd_tm_st = "24";
			policy_list[i].wd_tm_end = "13";	
			policy_list[i].url0 = "";
			policy_list[i].url1 = "";
			policy_list[i].url2 = "";
			policy_list[i].url3 = "";
			policy_list[i].url4 = "";
			policy_list[i].url5 = "";
			policy_list[i].url6 = "";
			policy_list[i].url7 = "";
			break;
		}
	}
	sel_dev = value;
	set_sel_value();
	
	if(document.forms[0].dev_list.options.length >= 5)
	{
		document.forms[0].adddev.disabled = true;
	}

	if(exist_add_dev())	//Add by seal 110129 to fix the JIRA P3 E1200-98
	{
		document.forms[0].adddev.disabled = true;
	}
}

function disable_web_ui()
{
	var f = document.forms[0];
	f.removedev.disabled = true;
	f.renamedev.disabled = true;
	f.url0.disabled = true;
	f.url1.disabled = true;
	f.url2.disabled = true;
	f.url3.disabled = true;
	f.url4.disabled = true;
	f.url5.disabled = true;
	f.url6.disabled = true;
	f.url7.disabled = true;
	f.hnd_time_status[0].checked = true;
	f.hnd_time_status[0].disabled = true;
	f.hnd_time_status[1].disabled = true;
	f.hnd_time_status[2].disabled = true;
	f.hnd_sc_start_time.disabled = true;
	f.hnd_sc_end_time.disabled = true;
	f.hnd_wd_start_time.disabled = true;
	f.hnd_wd_end_time.disabled = true;		
}

function enable_web_ui()
{
	var f = document.forms[0];
	f.removedev.disabled = false;
	f.renamedev.disabled = false;
	f.url0.disabled = false;
	f.url1.disabled = false;
	f.url2.disabled = false;
	f.url3.disabled = false;
	f.url4.disabled = false;
	f.url5.disabled = false;
	f.url6.disabled = false;
	f.url7.disabled = false;
	f.hnd_time_status[0].checked = true;
	f.hnd_time_status[0].disabled = false;
	f.hnd_time_status[1].disabled = false;
	f.hnd_time_status[2].disabled = false;
	f.hnd_sc_start_time.disabled = false;
	f.hnd_sc_end_time.disabled = false;
	f.hnd_wd_start_time.disabled = false;
	f.hnd_wd_end_time.disabled = false;		
}

function remove_dev()
{
	if(sel_dev == "")
	{
		alert(pctrl.seladev);
	}
	else
	{
		var f = document.PC;
		count = f.dev_list.options.length;
		for(var i = 0; i < count; i++)
		{
			if(sel_dev == f.dev_list.options[i].value)
			{
				document.PC.dev_list.remove(i);
				//document.PC.removedev.disabled = true;
				//document.PC.renamedev.disabled = true;
				break;
			}
		}	
		for(var i=0; i< MAX_DEV_NUM;i++)
		{
			if(sel_dev == policy_list[i].mac)
			{
				policy_list[i].mac = "";
				policy_list[i].block_tm_status = "0";
				policy_list[i].sc_tm_st = "18";
				policy_list[i].sc_tm_end = "13";
				policy_list[i].wd_tm_st = "24";
				policy_list[i].wd_tm_end = "13";	
				policy_list[i].url0 = "";
				policy_list[i].url1 = "";
				policy_list[i].url2 = "";
				policy_list[i].url3 = "";
				policy_list[i].url4 = "";
				policy_list[i].url5 = "";
				policy_list[i].url6 = "";
				policy_list[i].url7 = "";
				break;
			}
		}
		if(f.dev_list.options.length == 0)
		{
			disable_web_ui();
		}
		else
		{
			sel_dev = f.dev_list.options[0].value;
			f.dev_list.selectedIndex = 0;
			set_sel_value();
		}

		document.forms[0].adddev.disabled = false;
	}
}

function rename_dev()
{
	if(sel_dev == "")
	{
		alert(pctrl.seladev);
	}
	else
	{
		var f = document.forms[0];
		if ( close_session == "1" )
		{
			self.open('PC_renamedev.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=680,height=350').focus();
		}
		else
		{
			self.open('PC_renamedev.asp;session_id=' + session_key,'DHCPResTable','alwaysRaised,resizable,scrollbars,width=680,height=350').focus();
		}
	}
}

function rename_device(new_name)
{
	var f = document.forms[0];
	f.setdevnameflag.value = "1";
	f.dev_list.options[f.dev_list.selectedIndex].text = new_name;	
}


function sel_pc(flag)
{
	var f = document.forms[0];
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

function to_submit(f)
{
	// get dev list info
	var count = f.dev_list.options.length;

	f.pcblockdev.value = count;

	for(var i = 0; i< count; i++)
	{
		eval("f.dev_mac_"+i).value = f.dev_list.options[i].value;
		eval("f.dev_name_"+i).value = f.dev_list.options[i].text;

		//if(f.pcblockpolicy.value.length == 0 && f.dev_list.options[i].text != pctrl.nwdev)
		eval("f.pcblockpolicy"+i).value = f.dev_list.options[i].text;

	}
	for(var i = 0; i < MAX_DEV_NUM; i++)
	{
		var match  = 0;
		if(i >= count)
		break;

		for(var j = 0; j < MAX_DEV_NUM; j++)
		{
			if(eval("f.dev_mac_"+i).value == eval("policy_list["+j+"].mac"))
			{
				eval("f.hnd_time_status"+i).value = eval("policy_list["+j+"].block_tm_status");				
				eval("f.hnd_sc_start_time"+i).value = eval("policy_list["+j+"].sc_tm_st");				
				eval("f.hnd_sc_end_time"+i).value = eval("policy_list["+j+"].sc_tm_end");				
				eval("f.hnd_wd_start_time"+i).value = eval("policy_list["+j+"].wd_tm_st");				
				eval("f.hnd_wd_end_time"+i).value = eval("policy_list["+j+"].wd_tm_end");				
				var block_url="";
				for(var k = 0; k < MAX_URL_NUM; k++)
				{
					if(eval("policy_list["+j+"].url"+k+".length")>0)
					{
						block_url += eval("policy_list["+j+"].url"+k) + "<&nbsp;>";
					}
				}
				eval("f.pcblockurl_policy"+i).value = block_url;
				match = 1;
				break;
			}	
		}
		if(match != 1)
		{
				eval("f.hnd_time_status"+i).value = "0";				
				eval("f.hnd_sc_start_time"+i).value = "0";				
				eval("f.hnd_sc_end_time"+i).value = "0";				
				eval("f.hnd_wd_start_time"+i).value = "0";				
				eval("f.hnd_wd_end_time"+i).value = "0"				
				eval("f.pcblockurl_policy"+i).value = "";

		}
	}

	var set_passwd = "<% get_pc_passwd_status();%>";
	if(set_passwd == "0")	
		if ( close_session == "1" )
		{
			self.open('PC_set.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=680,height=450').focus();
		}
		else
		{
			self.open('PC_set.asp;session_id=' + session_key,'DHCPResTable','alwaysRaised,resizable,scrollbars,width=680,height=450').focus();
		}
	else
		if ( close_session == "1" )
		{
			self.open('PC_passwd.asp','DHCPResTable','alwaysRaised,resizable,scrollbars,width=660,height=350').focus();
		}
		else
		{
			self.open('PC_passwd.asp;session_id=' + session_key,'DHCPResTable','alwaysRaised,resizable,scrollbars,width=660,height=350').focus();
		}
}

function to_submit_post()
{
	var f = document.PC;
	f.submit_button.value = "PCAR";
	f.gui_action.value = "Apply";
	f.submit();

}

function enable_disable_all(F, I)
{
    var start = '';
    var end = '';
    var total = F.elements.length;
    for(i=0 ; i < total ; i++)
    {
        if(F.elements[i].name == "dev_list")  
            start = i;
        if(F.elements[i].name == "url7")  
            end = i;
    }
    if(start == '' || end == '')    
        return true;

    if(I == "0") 
    {
        for(i = start; i<=end ;i++)
            choose_disable(F.elements[i]);
        choose_disable(F.pcblockdev);   //Sync by seal 101227
        choose_disable(F.pcblockurl);
        choose_disable(F.pcblocktime);
    }
    else 
    {
        for(i = start; i<=end ;i++)
		{
			if (F.elements[i].name == "hnd_sc_start_time" || F.elements[i].name == "hnd_sc_end_time" || F.elements[i].name == "hnd_wd_start_time" || F.elements[i].name == "hnd_wd_end_time")
			{
				if(F.hnd_time_status[0].checked || F.hnd_time_status[1].checked)
					choose_disable(F.elements[i]);
				else
					choose_enable(F.elements[i]);
			}
			else
				choose_enable(F.elements[i]);
		}
        choose_enable(F.pcblockdev);     //Sync by seal 101227
        choose_enable(F.pcblockurl);
        choose_enable(F.pcblocktime);
            
        if(F.dev_list.options.length == 0)
        {
            disable_web_ui();
		}
        if(F.dev_list.options.length == 0)
        {
            disable_web_ui();
        }
        else if(F.dev_list.options.length >= MAX_DEV_NUM) //Sync by seal 101228 to fix E1550-24
        {
            choose_disable(F.adddev);
        }
        else
        {
            if((F.hnd_time_status[0].checked)||(F.hnd_time_status[1].checked))
            {
                choose_disable(F.hnd_sc_start_time);
                choose_disable(F.hnd_sc_end_time);
                choose_disable(F.hnd_wd_start_time);
                choose_disable(F.hnd_wd_end_time);      
            }
        }

        if(exist_add_dev()) //Add by seal 110129 to fix the JIRA P3 E1200-98
        {
            document.forms[0].adddev.disabled = true;
        }
    }
}

function init()
{
	var swmode = '<% nvram_get("switch_mode");%>';
	if( swmode == 1)
		alert(share.brdgmwn);

	var f = document.forms[0];
	//init value
<% for_mask("/*", ""); %>
	f.pc_status[0].checked = true;
<% for_mask("*/", ""); %>

	init_policy_array();

	for(var i = 0; i< block_dev_info.length - 1; i++)
	{
		for(var j = 0; j< dev_infos.length - 1; j++)
		{
			if(dev_infos[j][0] == block_dev_info[i][1])
			{
				if(dev_infos[j][1].length == 0)
					var dev_name = pctrl.nwdev;
				else
					var dev_name = dev_infos[j][1];
				var item = new Option(dev_name,dev_infos[j][0]);
				f.dev_list.options[f.dev_list.options.length] = item;
				break;
			}
		}
		if(exist_add_dev())	//Add by seal 110129 to fix the JIRA P3 E1200-98
		{
			choose_disable(f.adddev);
		}
	}
	//init the dev_mac and dev_name
	for(var i = 0; i <32 ; i++)
	{
		eval("f.dev_mac_"+i).value = "";
		eval("f.dev_name_"+i).value = "";
	}
	//init the block_time and block url
	for(var i = 0; i< MAX_DEV_NUM; i++)
	{
		eval("f.pcblockurl_policy"+i).value = "";
		eval("f.hnd_time_status"+i).value = "";
		eval("f.hnd_sc_start_time"+i).value = "";
		eval("f.hnd_sc_end_time"+i).value = "";
		eval("f.hnd_wd_start_time"+i).value = "";
		eval("f.hnd_wd_end_time"+i).value = "";
	}

	if(f.dev_list.options.length == 0)
		disable_web_ui();
	else
	{
		sel_dev = f.dev_list.options[0].value;
		f.dev_list.selectedIndex = 0;
		set_sel_value();
	}

	if(document.forms[0].dev_list.options.length >= 5)
	{
		document.forms[0].adddev.disabled = true;
	}
	
	set_block_url(0);

<% for_mask("/*", ""); %>
	if ( close_session == "1" )
	{
		Warningwin=dhtmlmodal.open("Warningbox", "iframe", "pc_warning.asp", pctrl.warning, "width=660px,height=310px,resize=1,scrolling=1,center=1", "recal");
	}
	else
	{
		Warningwin=dhtmlmodal.open("Warningbox", "iframe", "pc_warning.asp;session_id=" + session_key, pctrl.warning, "width=660px,height=310px,resize=1,scrolling=1,center=1", "recal");
	}
<% for_mask("*/", ""); %>

	enable_disable_all(document.PC,'<% nvram_get("tmsss_enabled"); %>');

	var session_key = "<% nvram_get("session_key"); %>";
	var close_session = "<% get_session_status(); %>";
	init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

</SCRIPT>
</HEAD>
<BODY onload=init()>
<FORM name=PC method=<% get_http_method(); %> action=apply.cgi>
<input type=hidden name=submit_button>
<input type=hidden name=change_action>
<input type=hidden name=submit_type>
<input type=hidden name=gui_action>
<input type=hidden name=next_page>
<input type=hidden name=pcblockdev>
<input type=hidden name=pcblocktime>
<input type=hidden name=pcblockurl>
<input type=hidden name=pcblockurl_policy0>
<input type=hidden name=pcblockurl_policy1>
<input type=hidden name=pcblockurl_policy2>
<input type=hidden name=pcblockurl_policy3>
<input type=hidden name=pcblockurl_policy4>
<input type=hidden name=pcblockurl_policy5>
<input type=hidden name=pcblockurl_policy6>
<input type=hidden name=pcblockurl_policy7>
<input type=hidden name=pcblockurl_policy8>
<input type=hidden name=pcblockurl_policy9>
<input type=hidden name=pcblockurl_policy10>
<input type=hidden name=pcblockurl_policy11>
<input type=hidden name=pcblockurl_policy12>
<input type=hidden name=pcblockurl_policy13>
<input type=hidden name=pcblockpolicy>
<input type=hidden name=pcblockpolicy0>
<input type=hidden name=pcblockpolicy1>
<input type=hidden name=pcblockpolicy2>
<input type=hidden name=pcblockpolicy3>
<input type=hidden name=pcblockpolicy4>
<input type=hidden name=pcblockpolicy5>
<input type=hidden name=pcblockpolicy6>
<input type=hidden name=pcblockpolicy7>
<input type=hidden name=pcblockpolicy8>
<input type=hidden name=pcblockpolicy9>
<input type=hidden name=pcblockpolicy10>
<input type=hidden name=pcblockpolicy11>
<input type=hidden name=pcblockpolicy12>
<input type=hidden name=pcblockpolicy13>
<input type=hidden name=hnd_time_status0>
<input type=hidden name=hnd_sc_start_time0>
<input type=hidden name=hnd_sc_end_time0>
<input type=hidden name=hnd_wd_start_time0>
<input type=hidden name=hnd_wd_end_time0>
<input type=hidden name=hnd_time_status1>
<input type=hidden name=hnd_sc_start_time1>
<input type=hidden name=hnd_sc_end_time1>
<input type=hidden name=hnd_wd_start_time1>
<input type=hidden name=hnd_wd_end_time1>
<input type=hidden name=hnd_time_status2>
<input type=hidden name=hnd_sc_start_time2>
<input type=hidden name=hnd_sc_end_time2>
<input type=hidden name=hnd_wd_start_time2>
<input type=hidden name=hnd_wd_end_time2>
<input type=hidden name=hnd_time_status3>
<input type=hidden name=hnd_sc_start_time3>
<input type=hidden name=hnd_sc_end_time3>
<input type=hidden name=hnd_wd_start_time3>
<input type=hidden name=hnd_wd_end_time3>
<input type=hidden name=hnd_time_status4>
<input type=hidden name=hnd_sc_start_time4>
<input type=hidden name=hnd_sc_end_time4>
<input type=hidden name=hnd_wd_start_time4>
<input type=hidden name=hnd_wd_end_time4>
<input type=hidden name=hnd_time_status5>
<input type=hidden name=hnd_sc_start_time5>
<input type=hidden name=hnd_sc_end_time5>
<input type=hidden name=hnd_wd_start_time5>
<input type=hidden name=hnd_wd_end_time5>
<input type=hidden name=hnd_time_status6>
<input type=hidden name=hnd_sc_start_time6>
<input type=hidden name=hnd_sc_end_time6>
<input type=hidden name=hnd_wd_start_time6>
<input type=hidden name=hnd_wd_end_time6>
<input type=hidden name=hnd_time_status7>
<input type=hidden name=hnd_sc_start_time7>
<input type=hidden name=hnd_sc_end_time7>
<input type=hidden name=hnd_wd_start_time7>
<input type=hidden name=hnd_wd_end_time7>
<input type=hidden name=hnd_time_status8>
<input type=hidden name=hnd_sc_start_time8>
<input type=hidden name=hnd_sc_end_time8>
<input type=hidden name=hnd_wd_start_time8>
<input type=hidden name=hnd_wd_end_time8>
<input type=hidden name=hnd_time_status9>
<input type=hidden name=hnd_sc_start_time9>
<input type=hidden name=hnd_sc_end_time9>
<input type=hidden name=hnd_wd_start_time9>
<input type=hidden name=hnd_wd_end_time9>
<input type=hidden name=hnd_time_status10>
<input type=hidden name=hnd_sc_start_time10>
<input type=hidden name=hnd_sc_end_time10>
<input type=hidden name=hnd_wd_start_time10>
<input type=hidden name=hnd_wd_end_time10>
<input type=hidden name=hnd_time_status11>
<input type=hidden name=hnd_sc_start_time11>
<input type=hidden name=hnd_sc_end_time11>
<input type=hidden name=hnd_wd_start_time11>
<input type=hidden name=hnd_wd_end_time11>
<input type=hidden name=hnd_time_status12>
<input type=hidden name=hnd_sc_start_time12>
<input type=hidden name=hnd_sc_end_time12>
<input type=hidden name=hnd_wd_start_time12>
<input type=hidden name=hnd_wd_end_time12>
<input type=hidden name=hnd_time_status13>
<input type=hidden name=hnd_sc_start_time13>
<input type=hidden name=hnd_sc_end_time13>
<input type=hidden name=hnd_wd_start_time13>
<input type=hidden name=hnd_wd_end_time13>
<input type=hidden name=setdevnameflag value="0">
<input type=hidden name=dev_mac_0>
<input type=hidden name=dev_mac_1>
<input type=hidden name=dev_mac_2>
<input type=hidden name=dev_mac_3>
<input type=hidden name=dev_mac_4>
<input type=hidden name=dev_mac_5>
<input type=hidden name=dev_mac_6>
<input type=hidden name=dev_mac_7>
<input type=hidden name=dev_mac_8>
<input type=hidden name=dev_mac_9>
<input type=hidden name=dev_mac_10>
<input type=hidden name=dev_mac_11>
<input type=hidden name=dev_mac_12>
<input type=hidden name=dev_mac_13>
<input type=hidden name=dev_mac_14>
<input type=hidden name=dev_mac_15>
<input type=hidden name=dev_mac_16>
<input type=hidden name=dev_mac_17>
<input type=hidden name=dev_mac_18>
<input type=hidden name=dev_mac_19>
<input type=hidden name=dev_mac_20>
<input type=hidden name=dev_mac_21>
<input type=hidden name=dev_mac_22>
<input type=hidden name=dev_mac_23>
<input type=hidden name=dev_mac_24>
<input type=hidden name=dev_mac_25>
<input type=hidden name=dev_mac_26>
<input type=hidden name=dev_mac_27>
<input type=hidden name=dev_mac_28>
<input type=hidden name=dev_mac_29>
<input type=hidden name=dev_mac_30>
<input type=hidden name=dev_mac_31>
<input type=hidden name=dev_name_0>
<input type=hidden name=dev_name_1>
<input type=hidden name=dev_name_2>
<input type=hidden name=dev_name_3>
<input type=hidden name=dev_name_4>
<input type=hidden name=dev_name_5>
<input type=hidden name=dev_name_6>
<input type=hidden name=dev_name_7>
<input type=hidden name=dev_name_8>
<input type=hidden name=dev_name_9>
<input type=hidden name=dev_name_10>
<input type=hidden name=dev_name_11>
<input type=hidden name=dev_name_12>
<input type=hidden name=dev_name_13>
<input type=hidden name=dev_name_14>
<input type=hidden name=dev_name_15>
<input type=hidden name=dev_name_16>
<input type=hidden name=dev_name_17>
<input type=hidden name=dev_name_18>
<input type=hidden name=dev_name_19>
<input type=hidden name=dev_name_20>
<input type=hidden name=dev_name_21>
<input type=hidden name=dev_name_22>
<input type=hidden name=dev_name_23>
<input type=hidden name=dev_name_24>
<input type=hidden name=dev_name_25>
<input type=hidden name=dev_name_26>
<input type=hidden name=dev_name_27>
<input type=hidden name=dev_name_28>
<input type=hidden name=dev_name_29>
<input type=hidden name=dev_name_30>
<input type=hidden name=dev_name_31>
<input type=hidden name=start>
<% web_include_file("Top.asp");%>
<% web_include_file("Fun.asp");%>
<TABLE class=TITLE_MAIN cellspacing=0>
<TR><TD class=NOSPACE>
	<TABLE class=FUNCTION_MAIN cellspacing=0>
	<TR><script>draw_table(MAINFUN,pctrl.pcontrol);</script></TR>
<% for_mask("", "<!--"); %>
	<TR><script>draw_table(SUBFUN,"");</script>
        <TD class=FUNNAME2><script>Capture(pctrl.pcontrol)</script>:</TD>
        <TD class=FUNFIELD>
        <table cellpadding="0" cellspacing="0"><tr>
        <td><INPUT type=radio value=1 name=tmsss_enabled <% nvram_match("tmsss_enabled","1","checked"); %> onClick=enable_disable_all(this.form,'1')><B>&nbsp;<script>Capture(share.enabled)</script></B>&nbsp;&nbsp;</td>
        <td><INPUT type=radio value=0 name=tmsss_enabled <% nvram_match("tmsss_enabled","0","checked"); %> onClick=enable_disable_all(this.form,'0')><B>&nbsp;<script>Capture(share.disabled)</script></B></td>
        </tr></table>
    </TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
<% for_mask("", "-->"); %>
<% for_mask("<!--", ""); %>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME1 colspan="2">
			<table cellpadding="0" cellspacing="0">
			<tr>
			<td>
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
			</td>
			<td>
		<INPUT type=radio value=1 name=pc_status onclick=sel_pc("0")><font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.inetacp)</script>&nbsp;<b>(
		<script>
		if( "<% nvram_get("tmsss_enabled");%>" == "1")
			Capture(share.disabled);
		else
			Capture(share.enabled);
		</script>
		)</b></font>
			</td></tr></table>
		</TD></TR>
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
<% for_mask("-->", ""); %>
     <TR><script>draw_table(SUBFUN,pctrl.tgdev);</script>
		<TD class=FUNNAME1 colspan="2"><script>Capture(pctrl.rsinet)</script></TD></TR>
	 <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME1 colspan="2">
		<table>
            		<tr>
            			<td width="314" height="5" bgcolor="#FFFFFF" colspan=3 ></td>
            		</tr>
            		<tr>
            			<td><SELECT name=dev_list size=7 style='width:200px'  onchange=select_dev(this)> </SELECT>				</td>              
				  	</tr>
				  	<tr>
				  	<td width="250" solspan=2>
					<script>document.write("<input type=button name=adddev value='" +portsrv.add+ "' onClick=add_dev()> &nbsp;")</script>
					<script>document.write("<input type=button name=removedev value= '" + sbutton.remove +"' onClick=remove_dev()> &nbsp;")</script>
					<script>document.write("<input type=button name=renamedev value= '" + pctrl.rename + "' onClick=rename_dev()>")</script>				  	</td>			
				  	</tr>
             	</table></TD></TR>			
     <TR><script>
			draw_table(ISHR,"");
		</script></TR>
     <TR><script>draw_table(SUBFUN,filter.schedule);</script>
		<TD class=FUNNAME1 colspan="2"><script>Capture(pctrl.bkinetac)</script></TD></TR>
     <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME1 colspan="2">
		<table cellpadding="0" cellspacing="0">
			<tr>
			<td><INPUT onclick=set_block_value(this,12) type=radio value=0 name=hnd_time_status  checked><b><font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.nev)</script></font>&nbsp;</b></td>
			<td><INPUT onclick=set_block_value(this,12) type=radio value=1 name=hnd_time_status ><b><font face="Arial" style="font-size: 8pt"><script>Capture(wlanadv.always)</script></font></b>&nbsp;</td>
			<td><INPUT onclick=set_block_value(this,12) type=radio value=2 name=hnd_time_status ><b><font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.sptime)</script></font>
			</b></td></tr></table>
		</TD></TR>
	 <TR><script>draw_table(SUBFUN,"");</script>
		<TD class=FUNNAME1 colspan="2">
		<table>
                <tr>
   				<td width="100">
                <font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.scnig)</script></font></td>
                <td>
                 <select name="hnd_sc_start_time" style="font-family:Arial; font-size:9pt" onchange=set_block_value(this,8)>
		<% hnd_tod_get("sc_start_hour_12pm"); %>
		 </select> &nbsp; </td><td><script>Capture(portforward.to)</script> &nbsp;</td>
                <td><select name="hnd_sc_end_time" style="font-family:Arial; font-size:9pt" onchange=set_block_value(this,9)>
		<% hnd_tod_get("sc_end_hour_12am"); %>
                 </select>               </td>
	      </tr>
				  
		 <tr>
   		<td width="100">
                <font face="Arial" style="font-size: 8pt"><script>Capture(pctrl.wd)</script></font></td>
                <td>
				<select name="hnd_wd_start_time" style="font-family:Arial; font-size:9pt" onchange=set_block_value(this,10)>
              <% hnd_tod_get("wd_start_hour_12pm"); %>
            </select>
				&nbsp; </td><td><script>Capture(portforward.to)</script> &nbsp;</td>
                <td><select name="hnd_wd_end_time" style="font-family:Arial; font-size:9pt" onchange=set_block_value(this,11)>
		<% hnd_tod_get("wd_end_hour_12am"); %>
                 </select>                </td>
		</tr>      
	          </table></TD></TR>
	    <TR><script>
			draw_table(ISHR,"");
		</script></TR>
	 <TR><script>draw_table(SUBFUN,pctrl.bkspsite);</script>
		<TD class=FUNNAME1 colspan="2">
		<table width="300" border="0">
            <tr>
              <td>URL 1:
			  <INPUT class=num size=36 maxlength=39 name=url0 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,0)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 2:
		  <INPUT class=num size=36 maxlength=39 name=url1 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,1)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 3:
		  <INPUT class=num size=36 maxlength=39 name=url2 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,2)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 4:
		  <INPUT class=num size=36 maxlength=39 name=url3 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,3)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 5:
		  <INPUT class=num size=36 maxlength=39 name=url4 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,4)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 6:
		  <INPUT class=num size=36 maxlength=39 name=url5 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,5)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 7:
		  <INPUT class=num size=36 maxlength=39 name=url6 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,6)>&nbsp;</td>
            </tr>
            <tr>
              <td>URL 8:
		  <INPUT class=num size=36 maxlength=39 name=url7 style="FONT-SIZE: 9pt; FONT-FAMILY: Arial <% nvram_else_match("ui_language","de", ";width=110", ""); %>" onBlur=set_block_value(this,7)>&nbsp;</td>
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
				draw_bottom("PCAR.asp",sbutton.cancel);
			}
			else
			{
				draw_bottom("PCAR.asp;session_id=<% nvram_get("session_key"); %>",sbutton.cancel);
			}
		</script>
	    </TD>    
	    <TD class=HELP2></TD>
</TR>
</TABLE>
</TD></TR></TABLE>
</FORM></BODY></HTML>
