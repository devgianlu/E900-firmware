﻿var adtopmenu = new Object();
adtopmenu.manage="إدارة";
adtopmenu.log="السجل";
adtopmenu.diag="التشخيص";
adtopmenu.facdef="الإعدادات الافتراضية للشركة المصنّعة";
adtopmenu.upgarde="ترقية البرنامج الثابت";
adtopmenu.lang="اللغة";
adtopmenu.selan="تحديد اللغة";
adtopmenu.multilang="لغات متعددة";
var adleftmenu = new Object();
adleftmenu.routerpsw="كلمة مرور الموجّه";
adleftmenu.localaccess="الوصول إلى الموجّه";
adleftmenu.routerpsw="كلمة مرور الموجّه";
adleftmenu.remoteaccess="الوصول للإدارة عن بُعد";
adleftmenu.ping="اختبار Ping";
adleftmenu.pingparam="معايير Ping";
adleftmenu.tracertest="اختبار Traceroute";
adleftmenu.tracerparam="معايير Traceroute";
adleftmenu.upgradefw="ترقية البرنامج الثابت";
adleftmenu.advfeature="الميزات المتقدّمة";
adleftmenu.reboot="إعادة التمهيد";

var mgt = new Object();
mgt.reconfirm="إعادة الإدخال &nbsp;للتأكيد";
mgt.remotemgt="الإدارة &nbsp;عن بُعد";
mgt.webassistant="Linksys Web Assistant";
mgt.mgtport="منفذ الإدارة";
mgt.rmtmgtport="منفذ الإدارة عن بُعد";
mgt.https="استخدام https";
mgt.upnp="UPnP";
mgt.igmp="IGMP";
mgt.remoteupgrade="ترقية عن بعد";
mgt.remoteip="عنوان IP عن بُعد المسموح به";
mgt.anyip="أي عنوان IP";
mgt.upnpconfig="السماح للمستخدمين بالتكوين";
mgt.upnpinternetdis="السماح للمستخدمين بتعطيل <BR>‏&nbsp;الوصول إلى إنترنت";
mgt.sipalg="SIP ALG";
mgt.ctf="CTF";

var log = new Object();
log.inlogtbl="جدول سجل الوارد";
log.srcip="IP المصدر";
log.desportnum="رقم منفذ الوجهة";
log.outlogtbl="جدول سجل الصادر";
log.lanip="IP الشبكة المحلية";
log.desurlip="URL/IP الوجهة";
log.portnum="رقم الخدمة/المنفذ";
log.inlog="سجل الوارد";
log.outlog="سجل الصادر";
log.seclog="سجل الأمان";
log.dhcplog="سجل عميل DHCP";
log.type="النوع";
log.remotelog="عنوان IP لبرنامج Logviewer";
log.msg1="(0 يعني معطّلاً)"; 
log.lanipaddr="عنوان IP للشبكة المحلية";
log.dstip="عنوان URL أو IP للوجهة";
log.srvport="رقم المنفذ (الخدمة)";

var ping = new Object();
ping.ipdomain="عنوان IP أو اسم النطاق";
ping.ipurl="عنوان IP أو URL";
ping.times="عدد مرات اختبار Ping";
ping.unlimited="غير محدود";
ping.pktsize="حجم الحزمة";
ping.unreach="لا يمكن الوصول إلى الشبكة";
ping.pkttr="حزم مرسلة";
ping.pktrx="حزم متلقاة";
ping.pktloss="خسارة الحزمة";
ping.databyte="بايتات البيانات";
ping.datastat="إحصاءات البيانات";
ping.roundtrip="رحلة ذهاباً وإياباً الحد الأدنى/المتوسط/الأقصى";
ping.bytefrom="بايتات من";
ping.time="الوقت";
ping.reqout="انتهت مهلة الطلب";
ping.unknown="مضيف غير معروف";

var tracert = new Object();
tracert.unreach="لا يمكن الوصول إلى الشبكة";
tracert.traceto="اختبار traceroute إلى";
tracert.hopsmax="وثبات بحد أقصى";
tracert.bytepkt="حزم بايت";
tracert.reqout="انتهت مهلة الطلب";
tracert.tracecomp="اكتمال التتبع";
tracert.unknown="مضيف غير معروف";

var facdef = new Object();
facdef.refacdefa="استعادة الإعدادات الافتراضية للشركة المصنّعة";
facdef.refacdefa2="استعادة الإعدادات الافتراضية للشركة المصنّعة";
facdef.helpmsg="تسمح لك هذه الميزة بإعادة تعيين كافة إعدادات تكوين الموجّه إلى قيمها الافتراضية.";

var fwupgrade = new Object();
fwupgrade.upgradefile="يرجى تحديد ملف لترقيته";
fwupgrade.warning="<B>تحذير: </B>قد تستغرق ترقية البرنامج الثابت بضع دقائق؛ يرجى عدم إيقاف تشغيل <BR>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;الطاقة أو الضغط على زر إعادة التعيين.";
fwupgrade.notinterrupted="يجب عدم مقاطعة الترقية!!";
fwupgrade.upgradesuccess="تمت الترقية بنجاح.";
fwupgrade.restoresuccess="تمت الاستعادة بنجاح.";
fwupgrade.reboot="تتم الآن إعادة التمهيد......";
fwupgrade.helpmsg="قم بتنزيل ملف ترقية البرنامج الثابت الخاص بالموجّه من موقع ويب على العنوان <b><u><a href='http://www.linksys.com/'>www.linksys.com</a></u></b>. انقر فوق <b>استعراض</b>وحدد ملف ترقية البرنامج الثابت. ثم انقر فوق <b>بدء الترقية</b>."
fwupgrade.safeupmsg1="إذا أردت استخدام ترقية آمنة، فيرجى تغيير عنوان IP الشبكة المحلية الخاص بك إلى \"192.168.1.1\" أولاً!";
fwupgrade.safeupmsg2="هل تريد بالتأكيد استخدام الوضع الآمن للترقية؟";

var lang = new Object();
lang.ch="Chinese";
lang.de="Deutsch";
lang.dk="Dansk";
lang.en="English";
lang.es="Español";
lang.fr="Français";
lang.frc="Français canadien";
lang.it="Italiano";
lang.nl="Nederlands";
lang.pt="Português";
lang.ru="Русский";
lang.se="Svenska";
lang.title="ترقية حزمة اللغات";
lang.pl=" البولندية";
lang.ar=" العربية";
lang.tr=" التركية";
lang.uploadfile="يرجى تحديد ملف لغة لترقيته";


var adbutton = new Object();
adbutton.inlog="سجل الوارد";
adbutton.outlog="سجل الصادر";
adbutton.ping="Ping";
adbutton.tracer="Traceroute";
adbutton.upgrade="ترقية";
adbutton.safeupgrade="ترقية آمنة";
adbutton.stop="إيقاف";
adbutton.clearlog="مسح السجل";
adbutton.traceroute="Traceroute";
adbutton.starttracer="بدء اختبار Traceroute";
adbutton.startupgrade="بدء الترقية";
adbutton.startping="بدء اختبار Ping";
adbutton.starttest="بدء الاختبار";
adbutton.viewlog="عرض السجل";
adbutton.clear="مسح";
adbutton.savelog="حفظ السجل";
adbutton.dhcpres="حجز DHCP";
adbutton.startrestore="بدء الاستعادة";