<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=iso-8859-1">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 11">
<meta name=Originator content="Microsoft Word 11">
<link rel=File-List href="Firewall.files/filelist.xml">
<link rel=Edit-Time-Data href="Firewall.files/editdata.mso">
<!--[if !mso]>
<style>
v\:* {behavior:url(#default#VML);}
o\:* {behavior:url(#default#VML);}
w\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]-->
<TITLE>Configura&ccedil;&atilde;o IPv6 </TITLE>
<script defer type="text/javascript" src="Setup/pngfix.js"></script>
<!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>aaa</o:Author>
  <o:LastAuthor>aaa</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>0</o:TotalTime>
  <o:Created>2011-03-18T08:42:00Z</o:Created>
  <o:LastSaved>2011-03-18T08:43:00Z</o:LastSaved>
  <o:Pages>2</o:Pages>
  <o:Words>233</o:Words>
  <o:Characters>1332</o:Characters>
  <o:Company>bbb</o:Company>
  <o:Lines>11</o:Lines>
  <o:Paragraphs>3</o:Paragraphs>
  <o:CharactersWithSpaces>1562</o:CharactersWithSpaces>
  <o:Version>11.9999</o:Version>
 </o:DocumentProperties>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:SpellingState>Clean</w:SpellingState>
  <w:GrammarState>Clean</w:GrammarState>
  <w:FormsDesign/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:Compatibility>
   <w:UseFELayout/>
  </w:Compatibility>
  <w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel>
 </w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" LatentStyleCount="156">
 </w:LatentStyles>
</xml><![endif]-->
<style>
<!--
.A2:link {
	COLOR: white
}
.A2:visited {
	COLOR: white
}
.A2:hover {
	COLOR: blue
}

 /* Font Definitions */
 @font-face
	{font-family:Courier;
	panose-1:2 7 4 9 2 2 5 2 4 4;
	mso-font-charset:0;
	mso-generic-font-family:modern;
	mso-font-format:other;
	mso-font-pitch:fixed;
	mso-font-signature:3 0 0 0 1 0;}
@font-face
	{font-family:SimSun;
	panose-1:2 1 6 0 3 1 1 1 1 1;
	mso-font-alt:SimSun;
	mso-font-charset:134;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:3 135135232 16 0 262145 0;}
@font-face
	{font-family:SimSun;
	panose-1:2 1 6 0 3 1 1 1 1 1;
	mso-font-charset:134;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:3 135135232 16 0 262145 0;}
@font-face
	{font-family:Verdana;
	panose-1:2 11 6 4 3 5 4 4 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:536871559 0 0 0 415 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-parent:"";
	margin:0cm;
	margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;}
h1
	{margin:0cm;
	margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	page-break-after:avoid;
	mso-outline-level:1;
	font-size:14.0pt;
	font-family:Arial;
	font-weight:bold;}
h3
	{mso-margin-top-alt:auto;
	margin-right:0cm;
	mso-margin-bottom-alt:auto;
	margin-left:0cm;
	mso-pagination:widow-orphan;
	mso-outline-level:3;
	font-size:13.0pt;
	font-family:Verdana;
	color:white;
	font-weight:bold;}
p
	{font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;}
p.num, li.num, div.num
	{mso-style-name:num;
	mso-margin-top-alt:auto;
	margin-right:0cm;
	mso-margin-bottom-alt:auto;
	margin-left:0cm;
	mso-pagination:widow-orphan;
	font-size:8.0pt;
	font-family:Courier;
	mso-fareast-font-family:SimSun;
	mso-bidi-font-family:"Times New Roman";
	color:black;}
p.tt, li.tt, div.tt
	{mso-style-name:tt;
	mso-margin-top-alt:auto;
	margin-right:0cm;
	mso-margin-bottom-alt:auto;
	margin-left:0cm;
	mso-pagination:widow-orphan;
	font-size:8.0pt;
	font-family:Courier;
	mso-fareast-font-family:SimSun;
	mso-bidi-font-family:"Times New Roman";
	color:black;}
p.headrow, li.headrow, div.headrow
	{mso-style-name:headrow;
	mso-margin-top-alt:auto;
	margin-right:0cm;
	mso-margin-bottom-alt:auto;
	margin-left:0cm;
	mso-pagination:widow-orphan;
	font-size:8.0pt;
	font-family:Arial;
	mso-fareast-font-family:SimSun;
	color:black;
	font-weight:bold;}
p.a2, li.a2, div.a2
	{mso-style-name:a2;
	mso-margin-top-alt:auto;
	margin-right:0cm;
	mso-margin-bottom-alt:auto;
	margin-left:0cm;
	mso-pagination:widow-orphan;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;
	color:white;}
span.bold
	{mso-style-name:bold;
	mso-style-parent:"";
	font-weight:bold;}
p.body, li.body, div.body
	{mso-style-name:body;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;}
p.heading2, li.heading2, div.heading2
	{mso-style-name:heading2;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;}
p.option, li.option, div.option
	{mso-style-name:option;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;}
p.heading3, li.heading3, div.heading3
	{mso-style-name:heading3;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:SimSun;}
span.SpellE
	{mso-style-name:"";
	mso-spl-e:yes;}
@page Section1
	{size:595.3pt 841.9pt;
	margin:72.0pt 90.0pt 72.0pt 90.0pt;
	mso-header-margin:42.55pt;
	mso-footer-margin:49.6pt;
	mso-paper-source:0;}
div.Section1
	{page:Section1;}
.STYLE1 {color: #2971B9}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:\666E\901A\8868\683C;
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-parent:"";
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin:0cm;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:10.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:"Times New Roman";
	mso-ansi-language:#0400;
	mso-fareast-language:#0400;
	mso-bidi-language:#0400;}
</style>
<![endif]-->
<meta http-equiv=Pragma content=no-cache>
<meta http-equiv=Expires content=-1>

<script language="JavaScript">
</script>
<!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="1026"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body bgcolor=gray lang=ZH-CN link=blue vlink=blue style='tab-interval:21.0pt'>

<div class=Section1>

<form>

<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
style='font-size:8.0pt;font-family:Arial;color:black'><span style='display:
none;mso-hide:all'><INPUT TYPE="hidden" NAME="generateButton" VALUE="Null"></span><o:p></o:p></span></p>

<div align=center>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=462
 style='width:346.5pt;mso-cellspacing:0cm;background:white;mso-padding-alt:
 0cm 0cm 0cm 0cm' height=282>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;
  height:211.5pt'>
  <td width=901 style='width:675.75pt;padding:0cm 0cm 0cm 0cm;height:211.5pt'>
  <div align=center>
  <table class=MsoNormalTable border=0 cellspacing=3 cellpadding=0 width=651
   style='width:488.25pt;mso-cellspacing:2.2pt;background:white' height=37>
   <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;
    height:27.75pt'>
    <td width=884 style='width:663.0pt;padding:.75pt .75pt .75pt .75pt;
    height:27.75pt'>
    <div align=center>
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=448
     style='width:336.0pt;background:white;border-collapse:collapse;mso-padding-alt:
     0cm 0cm 0cm 0cm' height=410>
     <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;
      height:307.5pt'>
      <td width=580 valign=bottom style='width:435.0pt;padding:0cm 0cm 0cm 0cm;
      height:307.5pt'>
      <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
       width=757 style='width:567.75pt;border-collapse:collapse;mso-padding-alt:
       0cm 0cm 0cm 0cm' id=AutoNumber1 height=1>
       <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:12.0pt'>
        <td width=167 style='width:125.25pt;background:#2971B9;padding:0cm 0cm 0cm 0cm;
        height:12.0pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
        <td width=590 colspan=3 style='width:442.5pt;background:#2971B9;
        padding:0cm 0cm 0cm 0cm;height:12.0pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
       </tr>
	   <tr>
	   <td height="1" width="761" colspan="4" bgcolor="#FFFFFF">
	   <p style="margin-top: 0; margin-bottom: 0">
	   </td>
	   </tr>

       <tr style='mso-yfti-irow:2;height:42.75pt'>
        <td width=761 colspan=4 style='width:570.75pt;background:#2971B9;
        padding:0cm 0cm 0cm 0cm;height:42.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'><img width="125"
        style="margin-left: 25; margin-top: 10" id="_x0000_i1026" src="Setup/linksys_logo.png" border=0><o:p></o:p></span></p>
        </td>
       </tr>
       <tr style='mso-yfti-irow:3;height:12.0pt'>
        <td width=167 style='width:125.25pt;background:#2971B9;padding:0cm 0cm 0cm 0cm;
        height:12.0pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
        <td width=590 colspan=3 style='width:442.5pt;background:#2971B9;
        padding:0cm 0cm 0cm 0cm;height:12.0pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
       </tr>
       <tr style='mso-yfti-irow:4;height:11.25pt'>
        <td width=167 style='width:125.25pt;background:#E7E7E7;padding:0cm 0cm 0cm 0cm;
        height:11.25pt'>
        <p class=MsoNormal><span lang=EN-US style='font-size:10.0pt;font-family:
        Arial;color:black'><o:p>&nbsp;</o:p></span></p>
        </td>
        <td width=590 colspan=3 style='width:442.5pt;background:#E7E7E7;
        padding:0cm 0cm 0cm 0cm;height:11.25pt'>
        <p class=MsoNormal><span lang=EN-US style='font-size:10.0pt;font-family:
        Arial;color:black'><o:p>&nbsp;</o:p></span></p>
        </td>
       </tr>
       <tr style='mso-yfti-irow:5;height:5.25pt'>
        <td width=167 style='width:125.25pt;background:#E7E7E7;padding:0cm 0cm 0cm 0cm;
        height:5.25pt'>
        <p class=MsoNormal><span lang=EN-US style='font-size:5.0pt;mso-bidi-font-size:
        10.0pt;font-family:Arial;color:black'><o:p>&nbsp;</o:p></span></p>
        </td>
        <td width=590 colspan=3 style='width:442.5pt;padding:0cm 0cm 0cm 0cm;
        height:5.25pt'>
        <p class=MsoNormal><span lang=EN-US style='font-size:5.0pt;mso-bidi-font-size:
        10.0pt;font-family:Arial;color:black'><o:p>&nbsp;</o:p></span></p>
        </td>
       </tr>
       <tr style='mso-yfti-irow:6;height:18.75pt'>
        <td width=167 style='width:125.25pt;background:#5B5B5B;padding:0cm 0cm 0cm 0cm;
        height:18.75pt'>
        <p align=right style='margin:0cm;margin-bottom:.0001pt;text-align:right'><b><span
        lang=EN-US style='font-size:10.0pt;font-family:Arial;color:white'>Ajuda&nbsp;&nbsp;&nbsp;
        </span></b><span lang=EN-US style='font-size:10.0pt;font-family:Arial;
        color:black'><o:p></o:p></span></p>
        </td>
        <td width=590 colspan=3 style='width:442.5pt;background:white;
        padding:0cm 0cm 0cm 0cm;height:18.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
       </tr>
       <tr style='mso-yfti-irow:7;height:.75pt'>
        <td width=167 style='width:125.25pt;background:#E7E7E7;padding:0cm 0cm 0cm 0cm;
        height:.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
        <td width=13 style='width:9.75pt;background:white;padding:0cm 0cm 0cm 0cm;
        height:.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt;mso-line-height-alt:.75pt'><span
        lang=EN-US style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
        <td width=564 style='width:423.0pt;background:white;padding:0cm 0cm 0cm 0cm;
        height:.75pt'>
        <h1 class="STYLE1">Configura&ccedil;&atilde;o &ndash; Configura&ccedil;&atilde;o IPv6 </h1>
        <p>O  IPv6 &eacute; um novo protocolo de IP que usa cabe&ccedil;alhos de pacotes simplificados e  necessita do IPSec como requisito de interoperabilidade fundamental. Tamb&eacute;m  permitiu melhorar o suporte para dispositivos IP e inform&aacute;tica m&oacute;veis.<br>
          Nota:  ap&oacute;s efectuar as altera&ccedil;&otilde;es, clique em Save Settings (Guardar defini&ccedil;&otilde;es) para aplicar as suas  altera&ccedil;&otilde;es.</p>
        <p><strong>Internet Setup (Configura&ccedil;&atilde;o de  Internet)</strong></p>
        <p>Internet Connection Type (Tipo de  liga&ccedil;&atilde;o &agrave; Internet)</p>
        <p><strong>IPv6 -  Autom&aacute;tico (IPv6 &ndash; Autom&aacute;tico)</strong></p>
        <p>Seleccione <strong>Enabled (Activado)</strong> para utilizar  automaticamente o IPv6 para qualquer endere&ccedil;amento de rede.</p>
        <p><strong>DUID</strong></p>
        <p>Este  &eacute; o valor do IPv6 DUID (DHCP do identificador exclusivo do IPv6) que o router gera  automaticamente.</p>
        <p>Network Setup (Configura&ccedil;&atilde;o da rede)</p>
        <p><strong>T&uacute;nel 6rd</strong></p>
        <p>Para  usar o T&uacute;nel 6rd, deve desactivar a defini&ccedil;&atilde;o <strong>IPv6 &ndash; Automatic (IPv6 &ndash; Autom&aacute;tico)</strong>. Um T&uacute;nel 6rd permitir&aacute; que o  seu router envie endere&ccedil;os IPv6 IP nas redes IPv4. Seleccione <strong>Automatic Configuration (Configura&ccedil;&atilde;o  autom&aacute;tica)</strong> para que o router processe estas defini&ccedil;&otilde;es (tais como prefixos  e endere&ccedil;os de m&aacute;scara) automaticamente. Seleccione <strong>Manual Configuration (Configura&ccedil;&atilde;o manual)</strong> para alterar estas  defini&ccedil;&otilde;es manualmente.</p>
        <p><strong>Prefixo</strong></p>
        <p>Introduza  o endere&ccedil;o do prefixo utilizado para o t&uacute;nel fornecido pelo seu ISP.</p>
        <p><strong>Comprimento  do prefixo</strong></p>
        <p>Introduza  o comprimento do prefixo utilizado para o t&uacute;nel fornecido pelo seu ISP.</p>
        <p><strong>Border  Relay</strong></p>
        <p>Introduza  o endere&ccedil;o de Border Relay utilizado para o t&uacute;nel fornecido pelo seu ISP.</p>
        <p><strong>Endere&ccedil;o da  m&aacute;scara IPv4</strong></p>
        <p>Introduza  o comprimento do endere&ccedil;o da m&aacute;scara IPv4 utilizado para o t&uacute;nel fornecido pelo  seu ISP.</p>
        <p class=option style='mso-line-height-alt:.75pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>Nota: Para obter mais informa&ccedil;&otilde;es, consulte o Manual do utilizador  online em <b><u><a
        href="http://www.linksys.com">www.linksys.com<span style='font-weight:
        normal'>.</span></a></u></b><o:p></o:p></span></p>
        </td>
        <td width=14 style='width:10.5pt;background:white;padding:0cm 0cm 0cm 0cm;
        height:.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt;mso-line-height-alt:.75pt'><span
        lang=EN-US style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
       </tr>
       <tr style='mso-yfti-irow:8;mso-yfti-lastrow:yes;height:33.75pt'>
        <td width=167 style='width:125.25pt;background:#E7E7E7;padding:0cm 0cm 0cm 0cm;
        height:33.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
        <td width=13 style='width:9.75pt;background:white;padding:0cm 0cm 0cm 0cm;
        height:33.75pt'>
        <p style='margin:0cm;margin-bottom:.0001pt'><span lang=EN-US
        style='font-size:10.0pt;font-family:Arial;color:black'>&nbsp;<o:p></o:p></span></p>
        </td>
        <td width=578 colspan=2 style='width:433.5pt;background:white;
        padding:0cm 0cm 0cm 0cm;height:33.75pt'>
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
         width=327 style='width:245.25pt;border-collapse:collapse;mso-padding-alt:
         0cm 0cm 0cm 0cm' id=AutoNumber4 height=19>
         <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:
          yes;height:11.25pt'>
          <td width=103 style='width:77.25pt;background:#8C8E8C;padding:0cm 0cm 0cm 0cm;
          height:11.25pt'>
          <p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
          center'><b><span lang=EN-US style='font-size:8.0pt;font-family:Arial;
          color:white'><a href="javascript:close()"><span style='color:white;
          text-decoration:none;text-underline:none'>Fechar</span></a></span></b><span
          lang=EN-US style='font-size:10.0pt;font-family:Arial;color:black'>
            <o:p></o:p></span></p>
          </td>
          <td width=10 style='width:7.2pt;padding:0cm 0cm 0cm 0cm;height:11.25pt'>
          <p class=MsoNormal><span lang=EN-US style='font-size:9.0pt;
          mso-bidi-font-size:10.0pt;font-family:Arial;color:black'><o:p>&nbsp;</o:p></span></p>
          </td>
          <td width=104 style='width:78.0pt;background:#8C8E8C;padding:0cm 0cm 0cm 0cm;
          height:11.25pt'>
          <p align=center style='margin:0cm;margin-bottom:.0001pt;text-align:
          center'><b><span lang=EN-US style='font-size:8.0pt;font-family:Arial;
          color:white'><a href="javascript:print()"><span style='color:white;
          text-decoration:none;text-underline:none'>Imprimir</span></a></span></b><span
          lang=EN-US style='font-size:10.0pt;font-family:Arial;color:black'><o:p></o:p></span></p>
          </td>
          <td width=10 style='width:7.2pt;padding:0cm 0cm 0cm 0cm;height:11.25pt'>
          <p class=MsoNormal><span lang=EN-US style='font-size:9.0pt;
          mso-bidi-font-size:10.0pt;font-family:Arial;color:black'><o:p>&nbsp;</o:p></span></p>
          </td>
          <td width=104 style='width:78.0pt;background:white;padding:0cm 0cm 0cm 0cm;
          height:11.25pt'>
          <p class=MsoNormal><span lang=EN-US style='font-size:10.0pt;
          font-family:Arial;color:black'><o:p>&nbsp;</o:p></span></p>
          </td>
         </tr>
        </table>
        <p class=MsoNormal><span lang=EN-US style='font-size:10.0pt;font-family:
        Arial;color:black'><o:p></o:p></span></p>
        </td>
       </tr>
      </table>
      <p class=MsoNormal><b><span lang=EN-US style='font-size:10.0pt;
      font-family:Arial;color:white'><o:p></o:p></span></b></p>
      </td>
     </tr>
    </table>
    </div>
    <p class=MsoNormal align=center style='text-align:center'><b><span
    lang=EN-US style='font-size:10.0pt;font-family:Arial;color:white'><o:p></o:p></span></b></p>
    </td>
   </tr>
  </table>
  </div>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  lang=EN-US style='font-size:10.0pt;font-family:Arial;color:white'><o:p></o:p></span></b></p>
  </td>
 </tr>
</table>

</div>

</form>

</div>

</body>

</html>
