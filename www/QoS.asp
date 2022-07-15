<% web_include_file("copyright.asp"); %>
<HTML <% ui_position("dir", ""); %>><HEAD><TITLE>QoS</TITLE>
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
<style type="text/css">

#tdSummary {
FONT-SIZE: 8pt;
FONT-FAMILY: Arial;
TEXT-ALIGN: center;
HEIGHT: 28;
BORDER-LEFT-WIDTH: 1;
BORDER-TOP-STYLE: none;
BORDER-BOTTOM-WIDTH: 1;
border:solid 1px #2971b9
}

#baseF {
FONT-SIZE: 8pt; 
FONT-FAMILY: Arial;
}
</style>
<SCRIPT>
var infor ="none";
var qos_enable = <% nvram_get("QoS"); %>;  
var DegMode = 0 ;
var CurrentTrId = 0;  // row index

//var qos_enable = 1;
var game_name = new Array(
        "New",
        "Neverwinter Nights 2",
        "Enemy Territory",
        "World In Conflict",
        "Call of Duty 4",
        "Sins of A Solar Empire",
        "Half-Life 2:The Orange Box",
        "Crysis",
        "Frontlines",
		"Warhammer 40,000:Dawn of War:Soulstorm",
	"S.T.A.L.K.E.R.:Shadow Of Chernoby",
	"World Of Warcraft",
	"Supreme Commander",
	"Titan Quest: Immortal Throne",
	"Battle field 2142",
	"Half-Life 2: Episode 1",
	"Heroes of Might & Magic V",
	"Guild Wars Factions I & II"
        );

var app_name = new Array(
	"New",
        "MSN Messenger",	
	"Skype",
        "Yahoo Message"	,
	"Windows Live Messenger",
	"AIM",
	"Windows Media Player",
	"RealPlayer",
	"QuickTime",
	"iTunes",
	"Yahoo Music Jukebox",
	"Rhapsody"
	);


var QosList = new Array();
<% qos_init(); %>

function QosEntry(idx,category,selValue,name,priority,infor){
	  this.idx = idx;
	  this.cate = category;
	  this.val = selValue;
	  this.name = name;
	  this.pri = priority;
	  this.infor = infor;
}

var wl_wme_count = 1;
var wl_wme_no_ack_count = 0;
var qos_enable_count=1;
var eth_port_str="";
function SelWME(F,I)
{
	if(I == "on") {
		choose_enable(F.wl_wme_no_ack[0]);
		choose_enable(F.wl_wme_no_ack[1]);
	}
	else {
		choose_disable(F.wl_wme_no_ack[0]);
		choose_disable(F.wl_wme_no_ack[1]);
	}
	wl_wme_count=wl_wme_count + 1;	
}
function ChgVal()
{
	wl_wme_no_ack_count = wl_wme_no_ack_count + 1 ; 
}

function init(){
	
     var lang = "<% nvram_get("detect_lang");%>";

     if(document.QoS.wl_wme)	SelWME(document.QoS,'<% nvram_get("wl_wme"); %>');
     QosDisabled(!qos_enable);
     if( ns4 == true || ns6 == true) {
	//document.forms[0].imgSummaryL.height = "50";	
	//document.forms[0].imgSummaryR.height = "50";	
     }
     checkportrange();
     for(var i=0; i < QosList.length; i++)
	{	
	     addtoSummary(i);
		if(QosList[i].cate== 4 )
			eth_port_str += QosList[i].cate + ";" + QosList[i].val + ";" + QosList[i].name + ";" + QosList[i].pri + ";"; 
	}

	var swmode = '<% nvram_get("switch_mode");%>';
	var protocolWan = '<% nvram_get("wan_proto");%>';
	if( swmode == 1)
		alert(share.brdgmwn);
  	else if( protocolWan == "dslite" ){
 		alert (share.dslitewn);
  	}

     if(lang == "TR")
     {
	document.getElementById("idwlqos").style.width = "81px";
	document.getElementById("idnoack").style.width = "81px";
	document.getElementById("idwlqos2").style.width = "350px";
	document.getElementById("idnoack2").style.width = "350px";
     }

	 var session_key = "<% nvram_get("session_key"); %>";
	 var close_session = "<% get_session_status(); %>";
	 init_form_session_key(document.forms[0], "apply.cgi", session_key, close_session);
}

function to_submit(){
    var str="";
    var eth_port_fin="";
    var F=document.forms[0];
    if (  CHECK_QOS_ENTRY() == false ) return ; 
	if ( F.QoS[0].checked == true )
	{
		if( F.rate_mode.options[F.rate_mode.selectedIndex].value == "0")
		{
			var speed_limit_low = (F.upbunit.options[F.upbunit.selectedIndex].value == "0") ? 128:1;
			var speed_limit_high = (F.upbunit.options[F.upbunit.selectedIndex].value == "0") ? 71680:70;
			var strings =  (F.upbunit.options[F.upbunit.selectedIndex].value == "0") ? "Kbps":"Mbps";
			if( Number(F.manual_rate.value)<speed_limit_low || Number(F.manual_rate.value)>speed_limit_high )
			{
				alert(errmsg.err14 + '['+speed_limit_low+' - ' + speed_limit_high +'] '+strings+'.');
				F.manual_rate.focus();
					return ;	
			}
		}
	}
	 
    F.QoS_cnt.value = QosList.length;
    for(var i=0; i<QosList.length; i++){
         str +=  QosList[i].cate + ";" + QosList[i].val + ";" + QosList[i].name + ";" + QosList[i].pri + ";";
         if(QosList[i].cate == 4)
		eth_port_fin += QosList[i].cate + ";" + QosList[i].val + ";" + QosList[i].name + ";" + QosList[i].pri + ";";
         if ((QosList[i].cate == 1)||(QosList[i].cate == 2))
         {
         	if (QosList[i].val == 0)
         	{ 
         		for (var k=0; k < 9; k++){
         		    if (k == 8)
         			str+= QosList[i].infor[k] + "#";
         		    else
         		        str+= QosList[i].infor[k] + ";";
         		}
         	}
		else
			str+= QosList[i].infor + "#";
         }
         else 
            str+=QosList[i].infor + "#";

    }
    //str += " id=" + QosList[i].cate + " val=" + QosList[i].val + " name=" + QosList[i].name + " pri=" + QosList[i].pri + " infor=" + QosList[i].infor;
     
    //alert(str);    
    F.qos_list.value =  str;

    F.wait_time.value ="5";
	if((wl_wme_count %2)|| (wl_wme_no_ack_count %2)|| (eth_port_str !=eth_port_fin )||((eth_port_str!="")&&(qos_enable_count %2)))
	{
		F.need_action.value ="restart"; 
		F.wait_time.value ="30";
	}
    F.submit_button.value = "QoS";
    F.gui_action.value = "Apply";
    F.submit();	
}

function rate_grey(num,F)
{
	var sw_disabled=(num == F.rate_mode[0].value)?true:false;
	var bgcolor = (num == F.rate_mode[0].value)?"#E7E7E7":"#FFFFFF";
	F.manual_rate.disabled = sw_disabled;
	F.manual_rate.style.backgroundColor = bgcolor;
	F.upbunit.disabled = sw_disabled;
	F.upbunit.style.backgroundColor = bgcolor;
}

function QosDisabled(flag){
	//var bkcolor = "#FFFFFF"
	//if (flag) bkcolor = "#E7E7E7";
//alert(flag);
		  if(flag)
		{
		    document.forms[0].QoS[1].checked = true;
		    rate_grey(document.forms[0].rate_mode[0].value, document.forms[0]);
		    document.forms[0].rate_mode.style.backgroundColor = "#E7E7E7";
		    document.forms[0].Category.style.backgroundColor = "#E7E7E7";
		    document.forms[0].Application.style.backgroundColor = "#E7E7E7";
	 	    document.forms[0].Priority.style.backgroundColor = "#E7E7E7";
	 	    document.forms[0].VoicePri.style.backgroundColor = "#E7E7E7";
		}
		  else
		{
		    document.forms[0].QoS[0].checked = true; 
		    rate_grey(document.forms[0].rate_mode.value, document.forms[0]);
		    document.forms[0].rate_mode.style.backgroundColor = "#FFFFFF";
		    document.forms[0].Category.style.backgroundColor = "#FFFFFF";
		    document.forms[0].Application.style.backgroundColor = "#FFFFFF";
		    document.forms[0].Priority.style.backgroundColor = "#FFFFFF";
		    document.forms[0].VoicePri.style.backgroundColor = "#FFFFFF";
		}
		document.forms[0].rate_mode.disabled = flag;
		document.forms[0].Category.disabled = flag;
		document.forms[0].Application.disabled = flag;
		document.forms[0].Priority.disabled = flag;
   		document.forms[0].Add.disabled = flag;
   		document.forms[0].Games.disabled = flag;
   		document.forms[0].AppName.disabled = flag;
   		document.forms[0].MAC.disabled = flag;
   		document.forms[0].Ethernet.disabled = flag;
   		document.forms[0].VoicePri.disabled = flag;
   		
   	  var tab = document.getElementById("tabSummary");
   	  tab.disabled = flag;

		document.forms[0].Category.value = 1;
   		cateChange("1");
	qos_enable_count=qos_enable_count+1;
   		/*
		  document.forms[0].Category.style.backgroundColor = bkcolor;
		  document.forms[0].Application.style.backgroundColor = bkcolor;
		  document.forms[0].Priority.style.backgroundColor = bkcolor;
		  */
}


function cateChange(category){ 
 
   var imgHeight = new Array("","81","81","106","81","106");
   //document.forms[0].imgLeft.height = imgHeight[category] ;
   //document.forms[0].imgRight.height = imgHeight[category] ;

	// document.getElementById('tdmsg').style.display = "none";  
	 document.getElementById('tdmsg').innerHTML = "";
 	 document.getElementById('trApp').style.display = "none";                                                                                
 	 document.getElementById('trGame').style.display = "none";
 	 document.getElementById('trName').style.display = "none"; 
 	 document.getElementById('trMAC').style.display = "none";  
 	 document.getElementById('trEth').style.display = "none";                                                                               
 	 document.getElementById('trRange1').style.display = "none";
 	 document.getElementById('trRange2').style.display = "none";    
         document.getElementById('trRange3').style.display = "none";
 	 document.getElementById('trPri').style.display = "none";
 	 document.getElementById('trVoicePri').style.display = "none";    
         document.getElementById('trBtn').style.display = "none";
   	 document.forms[0].Priority.value = 2;

   switch(category) {
    case "1":
    	document.forms[0].Application.value = 1;
	document.forms[0].AppName.value="";
	document.forms[0].fport1.value = ""; 	//Add 2010-02-10
	document.forms[0].tport1.value = ""; 	//Add 2010-02-10
	document.forms[0].fport2.value = ""; 	//Add 2010-02-10
	document.forms[0].tport2.value = ""; 	//Add 2010-02-10
	document.forms[0].fport3.value = ""; 	//Add 2010-02-10
	document.forms[0].tport3.value = ""; 	//Add 2010-02-10
	document.forms[0].pro1.value = 0;		//Add 2010-02-10
	document.forms[0].pro2.value = 0;		//Add 2010-02-10
	document.forms[0].pro3.value = 0;		//Add 2010-02-10
    	document.getElementById('trApp').style.display = "";
    	document.getElementById('trPri').style.display = "";
    	break;
    	
    case "2":
	document.forms[0].Games.value = 1;
	document.forms[0].AppName.value="";
	document.forms[0].fport1.value = ""; 	//Add 2010-02-10
	document.forms[0].tport1.value = ""; 	//Add 2010-02-10
	document.forms[0].fport2.value = ""; 	//Add 2010-02-10
	document.forms[0].tport2.value = ""; 	//Add 2010-02-10
	document.forms[0].fport3.value = ""; 	//Add 2010-02-10
	document.forms[0].tport3.value = ""; 	//Add 2010-02-10
	document.forms[0].pro1.value = 0;	//Add 2010-02-10
	document.forms[0].pro2.value = 0;	//Add 2010-02-10
	document.forms[0].pro3.value = 0;	//Add 2010-02-10
    	document.getElementById('trGame').style.display = "";
    	document.getElementById('trPri').style.display = "";
      break;
    case "3":
	document.forms[0].AppName.value="";
	document.forms[0].MAC.value="00:00:00:00:00:00";	//Add 2010-02-04
        document.getElementById('tdmsg').innerHTML = "&nbsp;" + qos.mymac + ": <b><% nvram_get("http_client_mac"); %> </b>";
    	document.getElementById('trName').style.display = "";
    	document.getElementById('trMAC').style.display = "";
    	document.getElementById('trPri').style.display = "";
      break;
    case "4":
      document.forms[0].Ethernet.value =1;
    	document.getElementById('trEth').style.display = "";
    	document.getElementById('trPri').style.display = "";
      break;
    case "5":
	document.forms[0].VoicePri.value =3;
	document.forms[0].AppName.value="";
	document.forms[0].MAC.value="00:00:00:00:00:00";	//Add 2010-02-04
        //document.getElementById('tdmsg').innerHTML = "&nbsp;" + qos.voicemac + ": <b><% nvram_get("wan_hwaddr"); %></b>";
    	document.getElementById('trName').style.display = "";
    	document.getElementById('trMAC').style.display = "";
    	document.getElementById('trVoicePri').style.display = "";
      break;
    default:
      alert("fail");  
  }
  document.getElementById('trBtn').style.display = "";
}

function DisplayNewRow(flag){
	  var tmp = "none";
	  if(flag == 0) {
	  	 tmp = ""; //add new app
      // document.forms[0].imgLeft.height = "180" ;
      // document.forms[0].imgRight.height = "180" ;
		}
	  else {
	  	 //document.forms[0].imgLeft.height = "81" ;
       		 //document.forms[0].imgRight.height = "81" ;
	  }  	
  	document.getElementById('trName').style.display = tmp;
  	document.getElementById('trRange1').style.display = tmp;
        document.getElementById('trRange2').style.display = tmp;    
        document.getElementById('trRange3').style.display = tmp;  
}

function checkValid(category){

        // port number cannot larger than 63355 
        var f = document.forms[0];
        var funreturn = true ; 
        if ( DegMode ) alert(category);        
        
        if ( category == 3 || category == 5 ) 
        {
             if ( f.MAC.value == "00:00:00:00:00:00")
             {
                  alert(errmsg.err17);
                  return false ;
             }
        }
        if ( category == 1 || category == 2 )
        {
  	    if (document.getElementById('trRange1').style.display == "none") return true ; 
            
            if ( IsEmpty(f.fport1) == false )                  
            { 
               if ( valid_range(f.fport1,0,65535,"") == false ) return false ;   
               if ( IsEmpty(f.tport1) == false )
               {
                   if ( valid_range(f.tport1,0,65535,"") == false ) return false ; 
		   /*Jemmy port from Alpha for check to port great than from port 2009.11.16*/
 		   if(parseInt(f.fport1.value) > parseInt(f.tport1.value))
                   {
                        var tmp = f.fport1.value;

                       	f.fport1.value = f.tport1.value;
			f.tport1.value = tmp;
                   }
               } 
               else
               {
                   alert(errmsg.err66);
                   return false ;                                     
               } 
           }
           else
           {
               alert( errmsg.err66 ) ; 
               return false ; 
           } 
           
           if ( IsEmpty(f.fport2) == false ) 
           { 
               if ( valid_range(f.fport2,0,65535,"") == false ) return false ; 
               if ( IsEmpty(f.tport2) == false ) 
               {
                   if ( valid_range(f.tport2,0,65535,"") == false ) return false ; 
		   /*Jemmy port from Alpha for check to port great than from port 2009.11.16*/
                   if(parseInt(f.fport2.value) > parseInt(f.tport2.value))
                   {
                          var tmp = f.fport2.value;

                          f.fport2.value = f.tport2.value;
                          f.tport2.value = tmp;
                   }
               }
               else
               {
                   alert(errmsg.err66);
                   return false ;  
               }
                
           }
           else
           {
               if ( IsEmpty(f.tport2) == false )               
               {  
                   alert( errmsg.err66 ) ; 
                   return false ; 
               }
           }

           if ( IsEmpty(f.fport3) == false )
           {
               if ( valid_range(f.fport3,0,65535,"") == false ) return false ; 
               if ( IsEmpty(f.tport3) == false )     
               {   
                   if ( valid_range(f.tport3,0,65535,"") == false ) return false ; 
		   /*Jemmy port from Alpha for check to port great than from port 2009.11.16*/
                   if(parseInt(f.fport3.value) > parseInt(f.tport3.value))
                   {
                         var tmp = f.fport3.value;

                         f.fport3.value = f.tport3.value;
                         f.tport3.value = tmp;
                    }
               }
               else
               {
                   alert(errmsg.err66);
                   return false ; 
               }

           }
           else
           {
               if ( IsEmpty(f.tport3) == false )               
               {  
                   alert( errmsg.err66 ) ; 
                   return false ; 
               }
           }
         
        }    
        return true ;
}

function value2string(cate,idx){
	  switch(cate){
	     case "1" : flag=0; break; 	
	  	 case "2" : flag=1; break;
	  	 case "4" : flag=2; break;
	  	 default : flag=3; break;
	  } 
	
	  var cateArray = new Array();
	  cateArray[0] = new Array("","MSN Messenger","Skype","Yahoo Message","Windows Live Messenger","AIM","Windows Media Player","RealPlayer","QuickTime","iTunes","Yahoo Music Jukebox","Rhapsody");
      cateArray[1] = new Array("","Neverwinter Nights 2","Enemy Territory","World In Conflict","Call of Duty 4","Sins of A Solar Empire","Half-Life 2:The Orange Box","Crysis","Frontlines","Warhammer 40,000:Dawn of War:Soulstorm","S.T.A.L.K.E.R.:Shadow Of Chernoby","World Of Warcraft","Supreme Commander","Titan Quest: Immortal Throne","Battle field 2142","Half-Life 2: Episode 1","Heroes of Might & Magic V","Guild Wars Factions I & II");
	  cateArray[2] = new Array("","Ethernet Port 1", "Ethernet Port 2","Ethernet Port 3","Ethernet Port 4");
	  /*cateArray[3] = new Array("Low","Normal","Medium","High");*/
	  cateArray[3] = new Array(qos.low, qos.normal, qos.medium, qos.high);
    
	  return (cateArray[flag][idx]); 
}

function checkportrange()
{
   var f = document.forms[0];
   var en_portcheck = false ; 
   if ( (IsEmpty(f.fport1) == false) && (IsEmpty(f.tport1)== false) )
   {
      choose_enable(f.fport2);
      choose_enable(f.tport2);
   }
   else    {
      f.fport2.value="";       
      f.tport2.value="";
      choose_disable(f.fport2);       
      choose_disable(f.tport2);
   }

   if ( (IsEmpty(f.fport2) == false) && (IsEmpty(f.tport2)== false) )
   {
      choose_enable(f.fport3);
      choose_enable(f.tport3);
	en_portcheck = true ;
   }
   else
   {
      f.fport3.value="";
      f.tport3.value="";
      choose_disable(f.fport3);
      choose_disable(f.tport3);
   }
   if ( en_portcheck == true ) 
   {
       r1 = f.fport1.value ; 
       r2 = f.tport1.value ; 
	   p1 = f.pro1.value;  //jiancong add 12/27/2011
       r3 = f.fport2.value ; 
       r4 = f.tport2.value ; 
	   p2 = f.pro2.value;  //jiancong add 12/27/2011
       r5 = f.fport3.value ; 
       r6 = f.tport3.value ; 
	   p3 = f.pro3.value;  //jiancong add 12/27/2011
       if ( IsEmpty(f.fport1) == false && IsEmpty(f.tport1)==false && 
            IsEmpty(f.fport2) == false && IsEmpty(f.tport2)==false )            
       {
           //if ( IsCrossRange(r1,r2,r3,r4) == true ) 
		   if ( IsCrossRange(r1,r2,r3,r4,p1,p2) == true)  //jiancong modify 12/27/2011
           {
               alert( errmsg.err67 );
               f.fport2.value="";       
               f.tport2.value="";
               return ; 
           }
          
       }
       if ( IsEmpty(f.fport3) == false && IsEmpty(f.tport3)==false )
       {
           
           //if ( IsCrossRange(r1,r2,r5,r6) == true ) 
		   if ( IsCrossRange(r1,r2,r5,r6,p1,p3) == true )  //jiancong modify 12/27/2011
           {
               alert( errmsg.err67 );
               f.fport3.value="";       
               f.tport3.value="";
               return ; 
           }
           //if ( IsCrossRange(r3,r4,r5,r6) == true ) 
		   if ( IsCrossRange(r3,r4,r5,r6,p2,p3) == true )  //jiancong modify 12/27/2011
           {
               alert( errmsg.err67 );
               f.fport3.value="";       
               f.tport3.value="";
               return ; 
           }
       }
            
   }

}

function CHECK_QOS_ENTRY(){

          var f = document.forms[0];
	  var appName ="none";
	  var infor = "none";
	  var priority =0;
	  var selValue =0;
	  var i , j ; 
          var category = "none";
          
         for ( i=0; i<QosList.length; i++)
         { 
              category = QosList[i].cate ; 
              selValue = QosList[i].val ;
              infor = QosList[i].infor ; 
              appName = QosList[i].name ;  
              for ( j=i+1; j<QosList.length; j++)
              {
                  if ( (appName.length == QosList[j].name.length) && (appName.indexOf(QosList[j].name)!=-1))
                  {
                     alert( errmsg.err57 ); 
                     return false ;                      
                  }
              	  //if ( QosList[j].cate == category && QosList[j].val == selValue ) 
              	  { 
                      if ( category=="3" && category=="5" ) continue;                          
                      if ( infor.length != QosList[j].infor.length) continue ; 
		      if ( checkinfor(infor,QosList[j].infor,category)==false)
		      {
                          if (category==3 ||category==5){
                                alert( errmsg.err65 ); 
                                return false ; 
                          }
                          if (category==1 || category==2){
                                alert(errmsg.err74);
                                return false;
                          }
                      }
		  }
               }
          }
          return true ; 
}

function checkinfor(src,dst,item)
{
        var i,x,y,sameflg=0;
        if(item==3 || item==5){
                src = src.split(":");
                dst = dst.split(":");
        	for(i=0; i<6; i++)
		{
                	if ( src[i]==dst[i]) sameflg++;
		}
		if ( sameflg == 6 ) return false ; 
                return true ;
        }
        if(item==1 || item==2){
                for(x=0; x<7; x+=3)
                {
                        for( y=0; y<7; y+=3)
                        {
                                if ( IsCrossRange(src[x],src[x+1],dst[y],dst[y+1],src[x+2],dst[y+2]) == true )
                                        return false ;
                        }
                }
                return true ;
        }
}


function modifyQosEntry(category){
	  var f = document.forms[0];
	  var appName ="none";
	  var infor = "none";
	  var priority =0;
	  var selValue =0;
	  var i ; 
          
    	  
    switch(category) {
        case "1":  //App
        case "2":  //Games                        
           if(category == "1") var tmp= f.Application.value;
           else var tmp = f.Games.value; 
//           alert( "f.Application.value= "+ f.Application.value +";f.Games.value="+f.Games.value+";tmp="+tmp);
           if ( tmp == 0){
          	  var rangeArray = new Array("0","0","0","0","0","0","0","0","0");
          	  rangeArray[0]=f.fport1.value; rangeArray[1]=f.tport1.value; rangeArray[2]=f.pro1.value;
          	  if(f.fport2.value){          	  
          	     rangeArray[3]=f.fport2.value; rangeArray[4]=f.tport2.value; rangeArray[5]=f.pro2.value;
          	  }   
          	  if(f.fport3.value){
          	  	 rangeArray[6]=f.fport3.value; rangeArray[7]=f.tport3.value; rangeArray[8]=f.pro3.value;
          	  }	 
          	  infor = rangeArray;
          	  appName = f.AppName.value;
           }
            else {
          	   selValue = tmp;   
                   if ( category == "1")
                       appName = app_name[tmp];
                   else
                       appName = game_name[tmp];             
        	 }
        	 
           //      alert("appName="+appName);
                 
        	 priority = f.Priority.value;
        	 break;       	
             
        case "3":  //MAC
           appName = f.AppName.value;
           infor = f.MAC.value;
        	 priority = f.Priority.value;
           break;	
          
        case "4":  //Ethernet Port          
           selValue = f.Ethernet.value;
           appName = "Ethernet Port "+selValue;
           priority = f.Priority.value;
           break;	 
           
        case "5":  //Voice
           appName = f.AppName.value;
           infor = f.MAC.value;
        	 priority = f.VoicePri.value;
           break;	  
         
        default: alert("fail");  
    }
	 
                                      
         if ( appName == null || appName == "")
         {
             alert(errmsg.err64);
             return false ; 
         } 
         // --The word does exist or not--                 
         var portstr ; 
         if ( selValue == "0" )
         {
             for (i=0; i<app_name.length; i++)        
             {
                  //if ( appName.indexOf(app_name[i])!=-1)
		if ( appName == app_name[i])	//Modified 2010-02-04
                  {
                       //alert(errmsg.err57);
			alert(errmsg.err68);		//errmsg.err68 = "This Application Name has already been reserved. It can't be added twice."
                       return false ;                    
                  }
             }
             for (i=0; i<game_name.length; i++)
             {
                  //if ( appName.indexOf(game_name[i])!=-1)
		if ( appName == game_name[i])		//Modified 2010-02-04
                  { 
                       alert(errmsg.err68);
                       return false ;                    
                  }
             }      
	/*
             for(i=1; i<5; i++)
             {
                portstr = "Ethernet Port "+i;
                if ( appName.indexOf(portstr)!=-1)
                {
                    alert(errmsg.err68);
                    return false ; 
                }
             } 
	*/
         }
         var idx = 0 ;  
	 if (f.Category.disabled == 1 ) 
             idx = CurrentTrId ;
         else                          
	     idx = QosList.length;
	 QosList[idx] = new QosEntry(idx,category,selValue,appName,priority,infor);
         return true ; 
           
}

function showSummary(){
	// <td  bordercolorlight="#2971b9" bordercolordark="#2971b9" height="28" align="center" 
	//style="FONT-SIZE: 8pt; font-family:Arial; border-left-style: solid; border-left-width: 1;  border-top-style: none ; border-bottom-width: 1">
  //alert(selectedCate);
     
    var selectedCate = document.forms[0].Category.value;    
    var f = document.forms[0];
    var data ; 
   var qos_cnt = QosList.length; 
	if(qos_cnt >= 15 && document.forms[0].Category.disabled != 1 ) return;
    if (  checkValid(selectedCate) == false ) return ;     
    if ( modifyQosEntry(selectedCate) == false ) return ;    

    if (document.forms[0].Category.disabled == 1) { //Edit
    	var idx=0;
        //while((idx < QosList.length) && (QosList[idx].name != f.AppName.value)) idx++;
        //alert("idx="+idx+";AppName="+f.AppName.value);
        idx = CurrentTrId ;
        //alert("idx="+idx); 
        var row = document.getElementById( CurrentTrId );
        row.cells[0].innerHTML =  value2string("pri",QosList[idx].pri);
        if (QosList[idx].val == 0)
            data = QosList[idx].name;
        else
            data = value2string(QosList[idx].cate,QosList[idx].val); 
	row.cells[1].innerHTML = string_break(18,data); 
//       alert("idx="+ idx + "; cata="+ QosList[idx].cate + "; name=" + QosList[idx].name + " val=" + QosList[idx].val+ "MAC=" + QosList[idx].infor);          
        if(QosList[idx].cate == "3" || QosList[idx].cate == "5") 
    	  	 str = "MAC " + QosList[idx].infor;
    	  else {
    	  	 str  = "Port <br>" + QosList[idx].infor[0] + " - " + QosList[idx].infor[1];
    	  	 if (QosList[idx].infor[3] >0 ) str += "<br>" + QosList[idx].infor[3] + " - " + QosList[idx].infor[4];
    	  	 if (QosList[idx].infor[6] >0 ) str += "<br>" + QosList[idx].infor[6] + " - " + QosList[idx].infor[7];
    	  }    
    	  row.cells[2].innerHTML = str;  
    	  document.forms[0].AppName.disabled=0;
    	  document.forms[0].Category.disabled=0;
          document.forms[0].Application.disabled=0;
          document.forms[0].Games.disabled=0;

    }
    else
      addtoSummary(QosList.length - 1);  //Add
}

function addtoSummary(idx) {
        var tbody = document.getElementById("tabSummary").getElementsByTagName("TBODY")[0];
        var row = document.createElement("tr");
        var tdArray = new Array();
        var str = "",data;
        //var idx = QosList.length-1;
        
        //create td
        row.setAttribute("id",idx);
        for(i=0; i<5; i++) {
           tdArray[i] = document.createElement("td");
           tdArray[i].setAttribute("id", "tdSummary");
	   tdArray[i].setAttribute("style", "border:solid 1px #2971b9");
        }
        
        //set td innerText
        //Priority
        tdArray[0].innerHTML = value2string("pri",QosList[idx].pri);
        //Name
        if (QosList[idx].val == 0)
             data = QosList[idx].name;
        else                          
             data = value2string(QosList[idx].cate,QosList[idx].val);
	tdArray[1].innerHTML = string_break(18,data) ; 
        //Infor
        if (QosList[idx].infor == "none") //2006/3/20 
            tdArray[2].innerHTML = "---";
        else {
        	  if(QosList[idx].cate == "3" || QosList[idx].cate == "5") 
        	  	 str = "MAC " + QosList[idx].infor;
        	  else {
        	  	 str  = "Port <br>" + QosList[idx].infor[0] + " - " + QosList[idx].infor[1];
        	  	 if (QosList[idx].infor[3] >0 ) str += "<br>" +QosList[idx].infor[3] + " - " + QosList[idx].infor[4];
        	  	 if (QosList[idx].infor[6] >0 ) str += "<br>" +QosList[idx].infor[6] + " - " + QosList[idx].infor[7];
        	  }
        	  tdArray[2].innerHTML = str;
            var btnEdit = document.createElement("input");
           	btnEdit.setAttribute("type", "button");
            //btnEdit.setAttribute("value", " Edit ");
			btnEdit.setAttribute("value", sbutton.edit);
            btnEdit.setAttribute("id", "baseF");
            //alert("EditEntry idx="+idx);
            btnEdit.onclick = function(){ EditEntry(idx)};
            tdArray[4].appendChild(btnEdit);	
        } 
       	var btnDel = document.createElement("input");
       	btnDel.setAttribute("type", "button");
        btnDel.setAttribute("value", sbutton.remove);
        btnDel.setAttribute("id", "baseF");
        btnDel.onclick = function(){ delRow(this.parentNode.parentNode,idx)};
        tdArray[3].appendChild(btnDel);
            
        //obj append to table    
        for(i=0; i<5; i++) row.appendChild(tdArray[i]);
        tbody.appendChild(row);

	if( ns4 == true || ns6 == true) {
	    var baseheight =27;
            if((QosList[idx].cate == "1" || QosList[idx].cate == "2") && QosList[idx].val ==0){
                   if( QosList[idx].infor[3]!="0") baseheight +=12;
                   if( QosList[idx].infor[6]!="0") baseheight +=12;
            }
	    //document.forms[0].imgSummaryL.height += baseheight;
            //document.forms[0].imgSummaryR.height += baseheight;
        }

//td1.setAttribute("bordercolorlight", "#2971b9");
//td1.setAttribute("bordercolordark", "#2971b9");
	//alert("ok");
}

function EditEntry(num){

	CurrentTrId = num; // Save Old TR ID

	
	  var idx=0;
	  //alert(num);
	  while((idx<QosList.length) && (QosList[idx].idx != num)) idx++;
	  
	  var f = document.forms[0];
	  var category = QosList[idx].cate;
	  var selValue = QosList[idx].val;
           	  
	  cateChange(category);
	  if((category == 1 && selValue==0) || (category == 2 && selValue==0))
	     DisplayNewRow(0);
    
    f.Category.value = category;
    f.Priority.value = QosList[idx].pri;	
    //f.AppName.disabled = 1;
    f.Category.disabled = 1;

    //alert("EditEntry cate="+category);		
    switch(category){   
    	  case "1":    
    	   f.Application.disabled = 1; 
           f.Application.value = selValue;
           if(selValue ==0){ 
              f.AppName.value = QosList[idx].name;
              f.fport1.value=QosList[idx].infor[0]; f.tport1.value=QosList[idx].infor[1]; f.pro1.value=QosList[idx].infor[2];
              if ( QosList[idx].infor[3] != 0 )f.fport2.value=QosList[idx].infor[3]; 
              if ( QosList[idx].infor[4] != 0 )f.tport2.value=QosList[idx].infor[4]; 
              f.pro2.value=QosList[idx].infor[5];
              if ( QosList[idx].infor[6] != 0 ) f.fport3.value=QosList[idx].infor[6]; 
              if ( QosList[idx].infor[7] != 0 ) f.tport3.value=QosList[idx].infor[7]; 
              f.pro3.value=QosList[idx].infor[8];
		checkportrange();
           }
           break;
        case "2":
           f.Games.disabled = 1; 
           f.Games.value = selValue;
           if(selValue ==0){ 
       	  f.AppName.value = QosList[idx].name;
              f.fport1.value=QosList[idx].infor[0]; f.tport1.value=QosList[idx].infor[1]; f.pro1.value=QosList[idx].infor[2];
              if ( QosList[idx].infor[3] != 0 )f.fport2.value=QosList[idx].infor[3]; 
              if ( QosList[idx].infor[4] != 0 )f.tport2.value=QosList[idx].infor[4]; 
              f.pro2.value=QosList[idx].infor[5];
              if ( QosList[idx].infor[6] != 0 ) f.fport3.value=QosList[idx].infor[6]; 
              if ( QosList[idx].infor[7] != 0 ) f.tport3.value=QosList[idx].infor[7]; 
              f.pro3.value=QosList[idx].infor[8];
		checkportrange();
           }
           break;
        case "3":  
        case "5": //2006/3/20 
           f.AppName.value = QosList[idx].name;
           f.MAC.value = QosList[idx].infor;
	   f.VoicePri.value = QosList[idx].pri;
	   break;
        default : alert("fail");   
	  }
}

function delRow(obj,idx){
    
    var tbody = document.getElementById("tabSummary").getElementsByTagName("TBODY")[0];
    tbody.removeChild(obj);    
            
    //QosList.splice(idx,1);
    delArrayElement(idx);
/*
    if( ns4 == true || ns6 == true) {
       //document.forms[0].imgSummaryL.height -= 27;
       //document.forms[0].imgSummaryR.height -= 27;
    }
*/
	document.forms[0].Category.disabled = false;	//Add 2010-02-04
	document.forms[0].Application.disabled = false;	//Add 2010-02-09
	document.forms[0].Games.disabled = false;	//Add 2010-02-09
	//document.forms[0].Ethernet.disabled = false;	//Add 2010-02-09
}


function delArrayElement(idx){
	var delId=0;
	while( (delId<QosList.length) && (QosList[delId].idx != idx))
	    delId++;
	for (var i=delId; i<QosList.length-1 ;i++)
	  QosList[i] = QosList[i+1];
	QosList.length = QosList.length-1;
	//alert(QosList.length);
}
</SCRIPT>
</head>

<body onload=init() >
<FORM name=QoS method=<% get_http_method(); %> action=apply.cgi>
<input type="hidden" name=qos_list>
<input type="hidden" name=QoS_cnt>
<input type="hidden" name=enable_game value=0>
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
<TR><script>draw_table(MAINFUN,qos.qos);</script></TR>
<TR><script>draw_table(SUBFUN,bmenu.wireless)</script>
		<TD id="idwlqos" class=FUNNAME2><script>Capture(qos.wlqos)</script>:</font></td>
		<TD id="idwlqos2" class=FUNFIELD>
		<table cellpadding="0" cellspacing="0">
		<tr>
			<td><SPAN class=RADIO><INPUT  type=radio value="on" name=wl_wme <% nvram_selmatch("wl0_wme","on","checked"); %> onClick="SelWME(this.form,'on')"><script>Capture(share.enabled)</script></SPAN></td>
			<td><SPAN class=RADIO><INPUT type=radio value="off" name=wl_wme <% nvram_selmatch("wl0_wme","off","checked"); %> onClick="SelWME(this.form,'off')"><script>Capture(share.disabled)</script></SPAN></td>
			<td><SPAN class=ASPACE1>(<script>Capture(hwlad2.def)</script>: <script>Capture(share.enabled)</script>)</SPAN></td></tr></table>	</TD>	
              </tr>
              <TR><script>draw_table(SUBFUN,"")</script>
				<TD id="idnoack" class=FUNNAME2><script>Capture(qos.noack)</script>:</TD>
				<TD id="idnoack2" class=FUNFIELD>
				<table cellpadding="0" cellspacing="0">
			<tr>
				<td><SPAN class=RADIO><INPUT type=radio value="on" name=wl_wme_no_ack <% nvram_selmatch("wl_wme_no_ack","on","checked"); %> onClick="ChgVal()"><script>Capture(share.enabled)</script></SPAN></td>
				<td><SPAN class=RADIO><INPUT type=radio value="off" name=wl_wme_no_ack <% nvram_selmatch("wl_wme_no_ack","off","checked"); %> onClick="ChgVal()"><script>Capture(share.disabled)</script></SPAN></td>
				<td><SPAN class=ASPACE1>(<script>Capture(hwlad2.def)</script>: <script>Capture(share.disabled)</script>)</SPAN></td></tr></table>		
	</TD>
              </tr>
              
              <TR><script>draw_table(ISHR,"");</script></TR>
              <TR><script>draw_table(SUBFUN,qos.intqccpri)</script>
			  <TD class=FUNNAME1 colspan=2>
			<table cellpadding="0" cellspacing="0">
			<tr>
				<td><SPAN class=RADIO><INPUT onclick=QosDisabled(0); type=radio  value=1 name=QoS><script>Capture(share.enabled)</script></SPAN></td>
				<td><SPAN class=RADIO><INPUT onclick=QosDisabled(1); type=radio  value=0 name=QoS checked ><script>Capture(share.disabled)</script></SPAN></td></tr></table>
	    </TD>
              </tr>
              <TR><script>draw_table(SUBFUN,qos.uband)</script>
		<TD colspan=2 class=FUNNAME1>
      <table border=0 cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="359">
        <tr>
          <td height="25" width="254">
		<SELECT onchange=rate_grey(this.value,this.form) name=rate_mode style="font-family: Arial; font-size: 8pt ;background-color:#E7E7E7">  
		<OPTION value=1 <% nvram_match("rate_mode", "1", "selected"); %>><script>Capture(share.auto)</script></OPTION>
		<OPTION value=0 <% nvram_match("rate_mode", "0", "selected"); %>><script>Capture(share.mtumanual)</script></OPTION>
      </SELECT>&nbsp;&nbsp;&nbsp;&nbsp;     	 
          <INPUT class=num maxlength=6 value="<% nvram_get("manual_rate"); %>" name=manual_rate onblur=isdigit(document.QoS.manual_rate,"") style="width:42px">&nbsp;&nbsp;
		<SELECT name="upbunit" style="font-family: Arial; font-size: 8pt ;background-color:#E7E7E7">  
			<OPTION value="0" <% nvram_match("upbunit", "0", "selected"); %>>Kbps</OPTION> 
			<option value="1" <% nvram_match("upbunit", "1", "selected"); %>>Mbps</option>
	      </SELECT>
	 </td>
          <td height="25" width="105">&nbsp;</td>
        </tr>
      </table>
                </td>
              </tr>

              <TR><script>draw_table(SUBFUN,qos.category)</script>
			<TD colspan=2 class=FUNNAME1>
      		<table border=0 cellpadding="0" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="359">
        <tr>
          <td height="25" width="54">
      <SELECT onchange=cateChange(this.value) name=Category style="font-family: Arial; font-size: 8pt ;background-color:#E7E7E7">  
        <OPTION value=1 selected><script>Capture(bmenu.applications)</script></OPTION> 
        <option value=2><script>Capture(qos.onlinegame)</script></option>
        <OPTION value=3><script>Capture(share.macaddr)</script></OPTION>
        <!--option value=4><script>Capture(qos.etherport)</script></option-->
        <option value=5><script>Capture(qos.voicedevice)</script></option>
      </SELECT></td>
      
          <td id=tdmsg height="25" width="305">&nbsp;</td>
        </tr>
      </table>
                </td>
              </tr>
            
     		<TR><script>draw_table(SUBFUN,"")</script>
		<TD colspan=2 class=FUNNAME1>
<table border=1 cellpadding="0" cellspacing="0" style="border-left:0px solid #2971b9; border-right:0px solid #2971b9; border-top:1px solid #2971b9; border-bottom:0px solid #2971b9; border-collapse: collapse" bordercolor="#00FF00" width="379" id="tabAccess" bordercolordark="#2971b9" bordercolorlight="#2971b9" height="30">
    <tr id=trApp style="display:none">
             <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(bmenu.applications)</script>&nbsp;&nbsp;
                </font></span></td>
             <td  colspan=3  bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
             <SELECT onchange=DisplayNewRow(this.value)   name=Application style="font-family: Arial; font-size: 8pt ;background-color:#E7E7E7" > 
             <option value=1> <script>Capture(qos.msnmess)</script> </option>
             <option value=2> <script>Capture(qos.skype)</script> </option>
             <option value=3> <script>Capture(qos.yahoomess)</script> </option>
	     <option value=4> <script>Capture(qos.winlivemsg)</script></option>
	     <option value=5> <script>Capture(qos.aim)</script> </option>
	     <option value=6> <script>Capture(qos.winmediaplay)</script> </option>
	     <option value=7> <script>Capture(qos.realplayer)</script> </option>
	     <option value=8> <script>Capture(qos.quicktime)</script> </option>
	     <option value=9> <script>Capture(qos.itunes)</script> </option>
	     <option value=10> <script>Capture(qos.yahoomusic)</script> </option>
	     <option value=11> <script>Capture(qos.rhapsody)</script> </option>
             <option value=0> <script>Capture(qos.addapp)</script> </option>
             </SELECT></td>
    </tr>
       
    <tr id=trGame style="display:none">
             <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(qos.game)</script> &nbsp;&nbsp;
                </font></span></td>
             <td  colspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <FONT face=Arial color=blue>
                <SELECT onchange=DisplayNewRow(this.value) name=Games  style="font-family: Arial; font-size: 8pt">
          			<OPTION value=1> <script>Capture(qos.neverwinternights2)</script></OPTION>
          			<OPTION value=2> <script>Capture(qos.enemyterritory)</script></OPTION>
          			<OPTION value=3> <script>Capture(qos.worldinconflict)</script></OPTION>
          			<OPTION value=4> <script>Capture(qos.callofduty4)</script></OPTION>
          			<OPTION value=5> <script>Capture(qos.sinofasolarempire)</script></OPTION>
          			<OPTION value=6> <script>Capture(qos.halflifetob)</script></OPTION>
          			<OPTION value=7> <script>Capture(qos.crysis)</script></OPTION>
          			<OPTION value=8> <script>Capture(qos.frontlines)</script></OPTION>
          			<OPTION value=9> <script>Capture(qos.warhanmer4k)</script></OPTION>
				<OPTION value=10> <script>Capture(qos.shadowofchr)</script></OPTION>
				<OPTION value=11> <script>Capture(qos.worldofwar)</script></OPTION>
				<OPTION value=12> <script>Capture(qos.suprecomm)</script></OPTION>
				<OPTION value=13> <script>Capture(qos.titanquest)</script></OPTION>
				<OPTION value=14> <script>Capture(qos.battlefield)</script></OPTION>
				<OPTION value=15> <script>Capture(qos.halflife2)</script></OPTION>
				<OPTION value=16> <script>Capture(qos.heroesofmight)</script></OPTION>
				<OPTION value=17> <script>Capture(qos.guildwarsfactions)</script></OPTION>
          		  <option value=0> <script>Capture(qos.addgame)</script></option>
          		  </SELECT></td>
    </tr>  
                  
   <tr id=trName style="display:none">
                <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(qos.entername)</script>&nbsp;&nbsp;
                </font></span></td>
                <td  colspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border-left:1px solid #2971b9; border-right:1px solid #2971b9; border-top:1px solid #2971b9; border-bottom-color:#2971b9" bordercolor="#FF0000">
                <font face="Arial" style="font-size: 8pt">
                <INPUT class=num   maxLength=32 size=19 name=AppName style="font-size:8pt; font-family:Arial" onBlur=valid_name1(this)></font></td>
    </tr>
    <tr id=trMAC style="display:none">
                <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt">
                <script>Capture(share.macaddr)</script>&nbsp;&nbsp;
                </font></span></td>
                <td  colspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000" dir="ltr">
                <font face="Arial" style="font-size: 8pt">
                <INPUT maxLength=17 size=15 name=MAC style="font-size:9pt; " value="00:00:00:00:00:00" onBlur=valid_macs_17(this)></font></td>
    </tr>
    
                    
    <tr id=trEth style="display:none">
                <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(qos.etherport)</script> &nbsp;&nbsp;
                </font></span></td>
                <td  colspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <FONT face=Arial color=blue>
                <SELECT size=1   name=Ethernet style="font-family: Arial; font-size: 8pt"> 
                <option value=1><script>Capture(qos.etherport)</script> 1</option>
                <option value=2><script>Capture(qos.etherport)</script> 2</option>
                <option value=3><script>Capture(qos.etherport)</script> 3</option>
                <option value=4><script>Capture(qos.etherport)</script> 4</option>
                </SELECT>
                </FONT></td>         
    </tr>
    
    <tr id=trRange1 style="display:none">
           <td width="96" rowspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="9" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000" >
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(portsrv.portrange)</script>&nbsp;&nbsp;
                </font></span></td>
           <td width="66" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="9" align="right" style="border-left:1px solid #2971b9; border-right:medium none #2971b9; border-top:1px solid #2971b9; border-bottom:medium none #2971b9; " bordercolor="#FF0000">           </td>
                
           <td width="123" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="9" align="left" style="border-left:medium none #2971b9; border-right:medium none #2971b9; border-top:1px solid #2971b9; border-bottom:medium none #2971b9; " bordercolor="#FF0000">
                <p style="margin-top: 0; margin-bottom: 0">
                <font face="Arial" style="font-size: 8pt">&nbsp;
                <INPUT class=num  onblur=checkportrange() maxLength=5 name=fport1 style="font-size:8pt; font-family:Arial; width:40"> 
                <script>Capture(portforward.to)</script> 
                <INPUT class=num  onblur=checkportrange() maxLength=5 name=tport1 style="font-size:8pt; font-family:Arial; width:40"></font></td>

                
           <td width="84" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="9" align="left" style="border-left:medium none #2971b9; border-right:1px solid #2971b9; border-top:1px solid #2971b9; border-bottom:medium none #2971b9; " bordercolor="#FF0000">
                <SELECT size=1  name=pro1 style="font-family: Arial; font-size: 8pt"> 
                <option value=1><script>Capture(share.tcp)</script></option>
                <option value=2><script>Capture(share.udp)</script></option>
                <option value=0 selected><script>Capture(share.both)</script></option>
                </SELECT></td>
    </tr>     
    <tr id=trRange2 style="display:none">
                <td width="66" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="8" align="right" style="border-left:1px solid #2971b9; border-right:medium none #2971b9; border-top:medium none #2971b9; border-bottom:medium none #2971b9; " bordercolor="#FF0000">
                <font face="Arial" style="font-size: 8pt">&nbsp;(<script>Capture(share.optional)</script>)</font></td>
                    <td width="123" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="8" align="left" style="border:medium none #2971b9; " bordercolor="#FF0000">
                <font face="Arial" style="font-size: 8pt">  &nbsp;
                <INPUT class=num  onblur=checkportrange() maxLength=5 name=fport2 style="font-size:8pt; font-family:Arial; width:40"> 
                <script>Capture(portforward.to)</script>
                <INPUT class=num  onblur=checkportrange() maxLength=5 name=tport2 style="font-size:8pt; font-family:Arial; width:40"></font></td>
                <td width="84" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="8" align="left" style="border-left:medium none #2971b9; border-right:1px solid #2971b9; border-top:medium none #2971b9; border-bottom:medium none #2971b9; " bordercolor="#FF0000">
                <SELECT size=1  name=pro2 style="font-family: Arial; font-size: 8pt"> 
                <option value=1><script>Capture(share.tcp)</script></option>
                <option value=2><script>Capture(share.udp)</script></option>
                <option value=0 selected><script>Capture(share.both)</script></option>
                </SELECT></td>
       </tr>
       <tr id=trRange3 style="display:none">
                <td width="66" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="8" align="right" style="border-left:1px solid #2971b9; border-right:medium none #2971b9; border-top:medium none #2971b9; border-bottom:1px solid #2971b9; " bordercolor="#FF0000">
                <font face="Arial" style="font-size: 8pt">&nbsp;(<script>Capture(share.optional)</script>)</font></td>
                <td width="123" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="8" align="left" style="border-left:medium none #2971b9; border-right:medium none #2971b9; border-top:medium none #2971b9; border-bottom:1px solid #2971b9; " bordercolor="#FF0000">
                <font face="Arial" style="font-size: 8pt">    &nbsp;
                <INPUT class=num  onblur=checkportrange() maxLength=5 name=fport3 style="font-size:8pt; font-family:Arial; width:40"> 
                <script>Capture(portforward.to)</script>
                <INPUT class=num  onblur=checkportrange() maxLength=5 name=tport3 style="font-size:8pt; font-family:Arial; width:40"></font></td>
                <td width="84" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="8" align="left" style="border-left:medium none #2971b9; border-right:1px solid #2971b9; border-top:medium none #2971b9; border-bottom:1px solid #2971b9; " bordercolor="#FF0000">
                <SELECT size=1  name=pro3 style="font-family: Arial; font-size: 8pt"> 
                <option value=1><script>Capture(share.tcp)</script></option>
                <option value=2><script>Capture(share.udp)</script></option>
                <option value=0 selected><script>Capture(share.both)</script></option>
                </SELECT></td>
    </tr>          
 <!------------------------------------>
    <tr id=trPri style="display:none">
                <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(qos.priority)</script>&nbsp;&nbsp;
                </font></span></td>
                <td  colspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <FONT face=Arial color=blue>
                <SELECT size=1 name=Priority style="font-family: Arial; font-size: 8pt ;background-color:#E7E7E7" > 
                <option value=3> <script>Capture(qos.high)</script></option>
                <option value=2 selected> <script>Capture(qos.medium)</script> (<script>Capture(qos.recommend)</script>)</option>
                <option value=1> <script>Capture(qos.normal)</script></option>
                <option value=0> <script>Capture(qos.low)</script></option>
                </SELECT></FONT></td>         
    </tr>             
      
    <tr id=trVoicePri style="display:none">
                 <td width="96" bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="right" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <span style="font-weight: 700">
                <font face="Arial" style="font-size: 8pt"><script>Capture(qos.priority)</script>&nbsp;&nbsp;
                </font></span></td>
                <td  colspan=3 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="25" align="center" style="border:1px solid #2971b9; " bordercolor="#FF0000">
                <FONT face=Arial color=blue>
                <SELECT size=1 name=VoicePri style="font-family: Arial; font-size: 8pt ;background-color:#E7E7E7" > 
                <option value=3 selected> <script>Capture(qos.high)</script> (<script>Capture(qos.recommend)</script>)</option>
                <option value=2> <script>Capture(qos.medium)</script></option>
                <option value=1> <script>Capture(qos.normal)</script></option>
                <option value=0> <script>Capture(qos.low)</script></option>
                </SELECT></FONT></td>         
    </tr>         
                  
    <tr id=trBtn style="display:none">
                <td  colspan=4 bordercolorlight="#2971b9" bordercolordark="#2971b9" height="30" align="center" style="border:medium none #2971b9; " bordercolor="#FF0000">
			          <p style="margin-top: 5"> <font face="Arial" color="#5b5b5b" size="2"><b>
                <span style="background-color: #FFFFFF">
                <script>document.write("<INPUT style=\"FONT-SIZE: 8pt; font-family:Arial\" onclick=showSummary() type=button value='"+hportser2.submit+"' name=Add>");</script></span></b></font></td>
    </tr>
    </table></td>
     </tr>
  <!-- ----------------------------  summary   -->   
    <TR><script>draw_table(ISHR,"");</script></TR>
	<TR><script>draw_table(SUBFUN,share.summary)</script>
		<TD colspan=2 class=FUNNAME1>
        <table style="border:solid 1px #2971b9" cellpadding="0" cellspacing="0" bordercolor="#111111" width="100%" id="tabSummary" bordercolordark="#2971b9" bordercolorlight="#2971b9">
         <tbody>
             <tr>
                <td width="11%" height="28" align="center" style=" border: solid 1px #2971b9">
                   <font face="Arial" style="font-size: 8pt; text-decoration:underline"><b> <script>Capture(qos.priority)</script> </b></font></td>
                <td width="29%" height="28" align="center" style="border: solid 1px #2971b9">
                   <font face="Arial" style="font-size: 8pt; text-decoration:underline"><b> <script>Capture(share.name)</script> </b></font></td>
                <td width="23%" height="28" align="center" style="border: solid 1px #2971b9">
                   <font face="Arial" style="font-size: 8pt; text-decoration:underline"><b> <script>Capture(share.information)</script> </b></font></td>
                <td width="16%" height="28" style="border: solid 1px #2971b9">&nbsp;</td>
                <td width="9%" height="28"  style="border: solid 1px #2971b9">&nbsp;</td>
             </tr>
          </tbody>  
        </table>
                </td>
      </tr>
        <TR><script>draw_table(ISBLANK,"");</script></TR>
</TABLE>
</TD>
<script>draw_table(ISHELP,"");</script> 
</TR></TABLE>
<% web_include_file("TAIL.asp"); %>
</FORM></BODY></HTML>
