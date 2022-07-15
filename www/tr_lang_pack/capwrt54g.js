var firewall2 = new Object();
firewall2.natredir="İnternet NAT Yeniden Yönlendirmesini Yalnızca IPv4 İçin Filtrele";
firewall2.ident="IDENT Filtresi (Port 113)";
firewall2.multi="Çoklu Yayınları Filtrele";
firewall2.internetfilter="İnternet Filtresi";
firewall2.webfilter="Web Filtresi";

var hupgrade = new Object();
hupgrade.right1="Router'a yüklenecek bellenimi seçmek için gözat düğmesini tıklatın.";
hupgrade.right2="Yükseltme işlemini başlatmak için Yükselt düğmesini tıklatın. Yükseltme yarıda kesilmemelidir!";
hupgrade.wrimage="Resim dosyası hatalı.";

var hfacdef = new Object();
hfacdef.right1="Bu tüm ayarları fabrika varsayılanlarına geri döndürür. Tüm ayarlarınız silinecektir.";
hfacdef.warning="Uyarı! Tamam düğmesini tıklattığınız takdirde, aygıt varsayılan ayarlara sıfırlanır ve tüm eski ayarlar silinir.";

var hdiag = new Object();
hdiag.right1="Ping göndermek istediğiniz IP adresini veya etkialanı adını girin ve Ping düğmesini tıklatın.";
hdiag.right2="İzlemek istediğiniz IP adresini veya etkialanı adını girin ve Yol izleme düğmesini tıklatın.";

var hlog = new Object();
hlog.right1="<b>Gelen</b> ve <b>Giden</b> günlüklerini ilgili düğmeyi seçerek etkinleştirebilir ve devreden çıkarabilirsiniz.";

var manage2 = new Object();
manage2.webacc="Yerel Yönetim Erişimi";
manage2.accser="Erişim Sunucusu";
manage2.wlacc="Kablosuz Erişim &nbsp;Web";
manage2.vapass="Onaylanan parola Girilen Parola ile aynı değil. Lütfen parolayı yeniden girin.";
manage2.passnot="Parola onayı eşleşmedi.";
manage2.selweb="Bir web sunucusu seçmeniz gerekir.";
manage2.changpass="Router halen varsayılan parolaya ayarlı. Bir güvenlik önlemi olarak, Uzaktan Yönetim özelliğini etkinleştirmeden önce parolayı değiştirmeniz gerekir. Parolanızı değiştirmek için Tamam düğmesini tıklatın. Uzaktan Yönetim özelliğini devredışı bırakmak için İptal düğmesini tıklatın.";
manage2.webutiacc="Erişim yolu";
manage2.wlutiacc="Kablosuz Erişim";

var hmanage2 = new Object();
hmanage2.right1="<b>Yerel Router Erişimi : </b>Router'ın parolasını buradan değiştirebilirsiniz. Yeni bir Router parolası girin ve ardından Onaylamak için yeniden gir alanına yeniden girin.<br>";
hmanage2.right2="<b>Web Erişimi : </b>Router'ın web tabanlı yardımcı programına erişim seçeneklerini yapılandırmanızı sağlar.";
hmanage2.right3="<b>Uzaktan Router Erişimi : </b>Router'ınıza uzaktan erişmenizi sağlar. Kullanmak istediğiniz portu seçin. Router'ınız hala varsayılan parolayı kullanıyorsa, router'ınızın parolasını değiştirmeniz gerekir.";
hmanage2.right4="<b>UPnP : </b>Bazı programlar tarafından iletişim için portları otomatik olarak açmak için kullanılır.";

var hstatwl2 = new Object();
hstatwl2.right1="<b>MAC Adresi</b>. Bu Router'ın yerel, kablosuz ağınızda görülen MAC Adresidir.";
hstatwl2.right2="<b>Mod</b>. Kablosuz sekmesinden seçildiğinde, bu ekran ağ tarafından kullanılan kablosuz modunu (Karma, Yalnızca-G veya Devredışı) gösterir.";

var hstatlan2 = new Object();
hstatlan2.right1="<b>MAC Adresi</b>. Bu Router'ın yerel, Ethernet ağınızda görülen MAC Adresidir.";
hstatlan2.right2="<b>IP Adresi</b>. Bu Router'ın yerel, Ethernet ağında gösterilen IP adresidir.";
hstatlan2.right3="<b>Alt-ağ Maskesi</b>. Router bir Alt-ağ Maskesi kullanıyorsa, alt-ağ maskesi burada gösterilir.";
hstatlan2.right4="<b>DHCP Sunucusu</b>. Router'ı bir DHCP sunucusu olarak kullanıyorsanız, bu sunucu burada gösterilir.";

var hstatrouter2 = new Object();
hstatrouter2.wan_static="Statik";
hstatrouter2.l2tp="L2TP";
hstatrouter2.hb="Telstra Kablosu";
hstatrouter2.connecting="Bağlanıyor";
hstatrouter2.disconnected="Bağlantı kesildi";
hstatrouter2.disconnect="Bağlantıyı kes";
hstatrouter2.right1="<b>Bellenim Sürümü. </b>Bu Router'ın geçerli belleğidir.";
hstatrouter2.right2="<b>Geçerli Saat. </b>Bu, Ayarlar Sekmesinde gösterilen saati gösterir.";
hstatrouter2.right3="<b>MAC Adresi. </b>Bu, İSS'nız tarafından görülen MAC Adresidir.";
hstatrouter2.right4="<b>Router Adı. </b>Bu Router'ın Ayarlar Sekmesinde ayarlanan spesifik adını gösterir.";
hstatrouter2.right5="<b>Yapılandırma Türü. </b>Bu İSS'nız tarafından İnternet'e bağlanmak için istenen bilgileri gösterir. Bu bilgiler Ayarlar Sekmesine girilir. Bu düğmeyi tıklatarak <b>Bağlanabilir</b> veya <b>Bağlantınızı kesebilirsiniz</b>.";
hstatrouter2.authfail=" kimlik doğrulama başarısız";
hstatrouter2.noip="Buradan bir IP adresi alınamıyor: ";
hstatrouter2.negfail=" görüşme başarısız oldu";
hstatrouter2.lcpfail=" LCP görüşmesi başarısız oldu";
hstatrouter2.tcpfail="Bu aygıtla TCP bağlantısı kurulamıyor: ";
hstatrouter2.noconn="Buraya bağlanılamıyor: ";
hstatrouter2.server=" sunucu";
hstatrouter2.pppoenoip="PPPoE'den IP adresi alınamıyor";
hstatrouter2.undetermined="Belirsiz";

var hdmz2 = new Object();
hdmz2.right1="<b>DMZ : </b>Bu seçenek etkinleştirildiğinde router'ınız İnternet'e açılır. Tüm portlara İnternet'ten erişilebilir.";

var hforward2 = new Object();
hforward2.right1="<b>Port Aralığı Yönlendirme : </b>Bazı uygulamaların, doğru çalışabilmek için belirli portları açabilmesi gerekir. Bu uygulamaların örnekleri arasında sunucular ve bazı çevrimiçi oyunlar vardır. İnternet'ten belirli bir port için bir istek geldiğinde, router verileri belirttiğiniz bilgisayara yönlendirir. Güvenlik kaygılarınız nedeniyle, port yönlendirmeyi yalnızca kullandığınız portlarla sınırlandırmak isteyebilirsiniz ve bitirdikten sonra <b>Etkinleştir</b> onay kutusunun işaretini kaldırın.";

var hfilter2 = new Object();
hfilter2.delpolicy="İlke Silinsin mi?";
hfilter2.right1="<b>İnternet Erişim İlkesi : </b>10 adede kadar erişim ilkesi tanımlayabilirsiniz. Bir ilkeyi silmek için <b>Sil</b> düğmesini veya ilkenin bir özetini görmek için  <b>Özet</b> düğmesini tıklatın.";
hfilter2.right2="<b>Durum : </b>Bir ilkeyi etkinleştirin veya devreden çıkarın.";
hfilter2.right3="<b>İlke Adı : </b>İlkenize bir ad atayabilirsiniz.";
hfilter2.right4="<b>İlke Türü : </b>İnternet Erişiminden veya Gelen Trafikten seçin.";
hfilter2.right5="<b>Günler : </b>İlkenizin uygulanacağı haftanın gününü seçin.";
hfilter2.right6="<b>Saatler : </b>İlkenin uygulanmasını istediğiniz haftanın gününü girin.";
hfilter2.right7="<b>Engellenen Hizmetler : </b>Belirli hizmetlere erişimi engellemek isteyebilirsiniz. Bu ayarlara değiştirmek için <b>Hizmet Ekle/Düzenle</b> düğmesini tıklatın.";
hfilter2.right8="<b>URL Adresiyle Web Sitesi Kilitleme : </b>Bazı web sitelerine erişimi URL adreslerini girerek engelleyebilirsiniz.";
hfilter2.right9="<b>Anahtar Sözcükle Web Sitesi Kilitleme : </b>Bazı web sitelerine erişimi  web sayfasında bulunan anahtar sözcükleri girerek engelleyebilirsiniz.";

var hportser2 = new Object();
hportser2.submit="Uygula";

var hwlad2 = new Object();
hwlad2.authtyp="Kimlik Doğrulama Türü";
hwlad2.basrate="Temel Hız";
hwlad2.mbps="Mbps";
hwlad2.def="Varsayılan";
hwlad2.all="Tümü";
hwlad2.defdef="(Varsayılan: Varsayılan)";
hwlad2.fburst="Frame Burst";
hwlad2.milli="Milisaniye";
hwlad2.range="Aralığı";
hwlad2.frathrh="Bölümleme Eşiği";
hwlad2.apiso="AP Yalıtımı";
hwlad2.off="Kapalı";
hwlad2.on="Açık";
hwlad2.right1="<b>Kimlik Doğrulama Türü : </b>Otomatik veya Paylaştırılmış Anahtar ayarlarından birini seçebilirsiniz. Paylaştırılmış anahtarla kimlik doğrulama daha güvenlidir, ama ağınızdaki tüm aygıtlar Paylaştırılmış Anahtarla kimlik doğrulamayı desteklemelidir.";

var hwlbas2 = new Object();
hwlbas2.right1="<b>Kablosuz Ağ Modu : </b> Kablosuz-G istemcilerini dışarıda bırakmak için, <b>Yalnızca B</b> Modunu seçin. Kablosuz erişimini devreden çıkarmak istiyorsanız, <b>Devreden çıkar</b> düğmesini tıklatın.";

var hwlsec2 = new Object();
hwlsec2.wpapsk="WPA Ön-Paylaştırılmış Anahtar";
hwlsec2.wparadius="WPA RADIUS";
hwlsec2.wpapersonal="WPA Kişisel";
//hwlsec2.wpapersonal="PSK Personal";
hwlsec2.wpaenterprise="WPA Şirket";
//hwlsec2.wpaenterprise="PSK Enterprise";
hwlsec2.wpa2psk="WPA2 Yalnızca Ön-Paylaştırılmış Anahtar";
hwlsec2.wpa2radius="WPA2 Yalnızca RADIUS";
hwlsec2.wpa2pskmix="WPA2 Karma Ön-Paylaştırılmış Anahtar";
hwlsec2.wpa2radiusmix="WPA2 Karma RADIUS";
hwlsec2.wpa2personal="WPA2 Kişisel";
//hwlsec2.wpa2personal="PSK2 Personal";
hwlsec2.wpa2enterprise="WPA2 Şirket)";
//hwlsec2.wpa2enterprise="PSK2 Enterprise";
hwlsec2.wpa2mixed="WPA2/WPA Karma Modu";
hwlsec2.enterprisemixed="WPA2/WPA Şirket Karma Modu";
hwlsec2.newwpa2personal="WPA2 Kişisel";
hwlsec2.pskpersonal="PSK Kişisel";
hwlsec2.pskenterprise="PSK Şirket";
hwlsec2.psk2personal="PSK2 Kişisel";
hwlsec2.psk2enterprise="PSK2 Şirket";
hwlsec2.right1="<b>Güvenlik Modu : </b>Devreden çıkar, WEP, WPA Ön-Paylaştırılmış Anahtar, WPA RADIUS veya RADIUS seçeneklerinden birini seçin. Ağınızdaki tüm aygıtlar iletişim için aynı güvenlik modunu kullanmalıdır.";

var hwmac2 = new Object();
hwmac2.right1="<b>MAC Adresi Kopyalama : </b>Bazı İSS'ları bir MAC adresi kaydetmenizi isteyebilir. MAC adresinizi yeniden kaydetmek istemiyorsanız, router'ınızın İSS'nızda kayıtlı MAC adresini kopyalamasını sağlayabilirsiniz.";

var hddns2 = new Object();
hddns2.right1="<b>DDNS Hizmeti : </b>DDNS ağınıza IP adresleri yerine etkialanlarını kullanarak erişmenizi sağlar. Bu hizmet IP adreslerinin değiştirilmesini yönetir ve etkialanı bilgilerinizi dinamik olarak günceller. Bu hizmet için TZO.com veya DynDNS.org aracılığıyla abone olmanız gerekir.";
hddns2.right2="TZO ÜCRETSİZ HESABINIZA <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABONE OLMAK İÇİN <b><a target=_blank href=../linksys.tzo.com/default.htm>Buraya</a></b> tıklayın";
hddns2.right3="TZO Hesabınızı <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yönetmek için  <b><a target=_blank href=../https@controlpanel.tzo.com/>Buraya</a></b> tıklayın";
hddns2.right4="Bir TZO <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DDNS Aboneliği satın almak için, <b><a target=_blank href=../https@www.tzo.com/cgi-bin/Orders.cgi@ref=linksys>Buraya</a></b> tıklayın.";
hddns2.right5="TZO DDNS <b><a target=_blank href=../linksys.tzo.com/default.htm>Desteği/Öğreticileri</a></b>";

var hrouting2 = new Object();
hrouting2.right1="<b>Çalışma Modu: </b>Router İnternet bağlantınızı yönetiyorsa, <b>Ağ geçidi</b> modunu seçin. Ağınızda başka bir router varsa, <b>Router</b> modunu seçin.";
hrouting2.right2="<b>Ayarlanan Numarayı Seç : </b>Bu benzersiz yol numarasıdır, 20 yola kadar ayarlayabilirsiniz.";
hrouting2.right3="<b>Yol Adı : </b>Bu yola atamak istediğiniz adı girin.";
hrouting2.right4="<b>Hedef LAN IP Adresi : </b>Bu statik yolu atamak istediğiniz uzak bilgisayar adıdır.";
hrouting2.right5="<b>Alt-ağ Maskesi: </b>Ana makine ve ağ bölümünü belirler.";

var hindex2 = new Object();
hindex2.telstra="Telstra Kablosu";
hindex2.dns3="Statik DNS 3";
hindex2.hbs="Heart Beat Sunucusu";
hindex2.l2tps="L2TP Sunucusu";
hindex2.pptps="PPTP Sunucusu";
hindex2.hdhcp="<b>Otomatik Yapılandırma - DHCP : </b>Bu ayar Kablo operatörleri tarafından an yaygın kullanılan ayardır.<br><br>";
hindex2.hpppoe1="<b>PPPoE : </b>Bu ayar en sık olarak DSL sağlayıcıları tarafından kullanılır.<br>";
hindex2.hpppoe2="<b>Kullanıcı Adı : </b>İSS'nız tarafından verilen kullanıcı adını girin.<br>";
hindex2.hpppoe3="<b>Parola : </b>İSS'nız tarafından verilen parolayı girin.<br>";

hindex2.hstatic1="<b>Statik IP : </b>Bu İş sınıfı İSS tarafından en yaygın kullanılan ayardır.<br>";
hindex2.hstatic2="<b>İnternet IP Adresi : </b>İSS'nızın verdiği IP adresini girin.<br>";
hindex2.hstatic3="<b>Alt-ağ Maskesi : </b>Alt-ağ maskenizi girin<br>";

hindex2.hpptp1="<b>PPTP : </b>Bu ayar en sık olarak DSL sağlayıcıları tarafından kullanılır.<br>";
hindex2.hpptp2="<b>İnternet IP Adresi : </b>İSS'nızın verdiği IP adresini girin.<br>";
hindex2.hpptp3="<b>Alt-ağ Maskesi : </b>Alt-ağ maskenizi girin<br>";
hindex2.hpptp4="<b>Ağ geçidi : </b>İSS'nızın ağ geçidi adresini girin<br>";

hindex2.hl2tp1="<b>L2TP : </b>Bu ayar Avrupa'daki bazı İSS'ları tarafından kullanılır.<br>";
hindex2.hl2tp2="<b>Kullanıcı Adı : </b>İSS'nız tarafından verilen kullanıcı adını girin.<br>";
hindex2.hl2tp3="<b>Parola : </b>İSS'nız tarafından verilen parolayı girin.<br>";

hindex2.hhb1="<b>Telstra Kablosu : </b>Bu ayar en sık olarak DSL sağlayıcıları tarafından kullanılır.<br>";
hindex2.hhb2="<b>Kullanıcı Adı : </b>İSS'nız tarafından verilen kullanıcı adını girin.<br>";
hindex2.hhb3="<b>Parola : </b>İSS'nız tarafından verilen parolayı girin.<br>";

hindex2.right1="<b>Ana Makine Adı : </b>İSS'nız tarafından verilen ana makine adını girin.<br>";
hindex2.right2="<b>Etkialanı Adı : </b>İSS'nız tarafından verilen etkialanı adını girin.<br>";
hindex2.right3="<b>Yerel IP Adresi : </b>Bu router'ın adresidir.<br>";
hindex2.right4="<b>Alt-ağ Maskesi : </b>Bu router'ın alt-ağ maskesidir.<br><br><br>";
hindex2.right5="<b>DHCP Sunucusu : </b>Router'ın IP adreslerini yönetmesini sağlar.<br>";
hindex2.right6="<b>Başlangıç IP Adresi : </b>Başlamak istediğiniz IP adresi.<br>";
hindex2.right7="<b>Saat Ayarı : </b>Bulunduğunuz saat dilimini seçin. Router otomatik olarak yaz saatini de ayarlayabilir.";
hindex2.hdhcps1="<b>Maksimum DHCP Kullanıcı Sayısı : </b>Router'ınızın dağıttığı adres sayısını sınırlayabilirsiniz.<br>";

var errmsg2 = new Object();
errmsg2.err0="HeartBeat Sunucu IP Adresi doğru değil.";
errmsg2.err1="Giriş Silinsin mi?";
errmsg2.err2="Bir SSID girmeniz gerekir.";
errmsg2.err3="Lütfen bir Paylaştırılmış Anahtar girin.";
errmsg2.err4=" izin verilmeyen onaltılık basamakları var veya 63'ten fazla karakter içeriyor.";
errmsg2.err5="Anahtar, 8 ve 63 ASCII karakteri ve 64 onaltılı basamak uzunluğunda olmalıdır.";
errmsg2.err6="Bir anahtar girmeniz gerekir.";
errmsg2.err7="Anahtar uzunluğu doğru değil.";
errmsg2.err8="Lütfen bir Parola girin.";
errmsg2.err9="Toplam kontrol sayısı 40'ı geçti.";
errmsg2.err10="Boşluklara izin verilmez.";
errmsg2.err11="Tüm işlemler bittikten sonra, ayarları kaydetmek için Uygula düğmesini tıklatın.";
errmsg2.err12="Bir Hizmet Adı girmeniz gerekir.";
errmsg2.err13="Hizmet Adı var.";
errmsg2.err14="LAN IP Adresi veya Alt-ağ Maskesi doğru değil.";

var trigger2 = new Object();
trigger2.ptrigger="Port Aralığı Harekete Geçirme";
trigger2.qos="QoS";
trigger2.trirange="Tetiklenen Aralığı";
trigger2.forrange="Yönlendirilen Aralığı";
trigger2.trirange1="Harekete Geçirilen Aralığı";
trigger2.forrange1="Yönlendirilen Aralığı";
trigger2.sport="Başlangıç Portu";
trigger2.eport="Bitiş Portu";
trigger2.right1="Uygulama Tetikleyicinin uygulama adını girin. <b>Tetiklenen Aralık</b> Her uygulama için, tetiklenen port numara aralığını listeleyin. İhtiyaç duyulan port numarası/numaraları için İnternet uygulamasının belgelerini kontrol edin.<b>Başlangıç Portu</b> Tetiklenen Aralığın başlangıç portunun numarasını girin.<b>Bitiş Portu</b> Tetiklenen Aralığın bitiş portunun numarasını girin. <b>Yönlendirme Aralığı</b> Her uygulama için, yönlendirilen port numara aralığını listeleyin. İhtiyaç duyulan port numarası/numaraları için İnternet uygulamasının belgelerini kontrol edin. <b>Başlangıç Portu</b> Yönlendirme Aralığının başlangıç portunun numarasını girin. <b>Bitiş Portu</b> Yönlendirme Aralığının bitiş portunun numarasını girin.";

var bakres2 = new Object();
bakres2.conman="Yapılandırma Yönetimi";
bakres2.bakconf="Yapılandırmayı Yedekle";
bakres2.resconf="Yapılandırmayı Geri Yükle";
bakres2.bakres="Yedekle ve Geri Yükle";
bakres2.file2res="Lütfen yükseltmek için bir dosya seçin";
bakres2.bakbutton="Yapılandırmayı Yedekle";
bakres2.resbutton="Yapılandırmayı Geri Yükle";
bakres2.right1="Router'ınızı fabrika varsayılan ayarlarına geri döndürmeniz gerektiğinde, geçerli yapılandırmanızı yedekleyebilirsiniz.";
bakres2.right2="Geçerli yapılandırmanızı yedeklemek için Yedekle düğmesini tıklatabilirsiniz.";
bakres2.right3="Bilgisayarınızda kayıtlı bir yapılandırma dosyasına göz atmak için Gözat düğmesini tıklatın.";
bakres2.right4="Tüm geçerli yapılandırmaları yapılandırma dosyasındaki ayarlarla değiştirmek için Geri Yükle düğmesini tıklatın.";

var qos = new Object();
qos.uband="Veri Gönderme Bant Genişliği";
qos.bandwidth="Bant genişliği";
qos.dpriority="Aygıt Önceliği";
qos.priority="Öncelik";
qos.dname="Aygıt adı";
qos.low="Düşük";
qos.medium="Orta";
qos.high="Yüksek";
qos.highest="En yüksek";
qos.eppriority="Ethernet Portu Önceliği";
qos.flowctrl="Aktarım Denetimi";
qos.appriority="Uygulama Önceliği";
qos.specport="Spesifik Port";
qos.appname="Uygulama Adı";
qos.alert1="Port değeri aralık dışında [0 - 65535]";
qos.alert2="Başlangıç port değeri bitiş port değerinden büyük";
qos.confirm1="Birden fazla aygıtı, ethernet portunu veya uygulamayı yüksek önceliğe ayarlamak QoS etkisini olumsuz etkileyebilir.\nDevam etmek istiyor musunuz?";

qos.optgame="Oyun Uygulamalarını Optimize Et";
qos.wlqos2="Kablosuz QoS";
qos.wqos="Kablolu QoS";
qos.wlqos="WMM Desteği";
qos.edca_ap="EDCA AP Parametreleri";
qos.edca_sta="EDCA STA Parametreleri";
qos.wme="WMM Desteği";
qos.noack="Bildirim Yok";
qos.apsdsupp="APSD Desteği";
qos.defdis="(Varsayılan : Devreden çıkar)";
qos.cwmin="CWmin";
qos.cwmax="CWmax";
qos.aifsn="AIFSN";
qos.txopb="TXOP(b)";
qos.txopag="TXOP(a/g)";
qos.admin="Admin";
qos.forced="Zorlanmış";
qos.ac_bk="AC_BK";
qos.ac_be="AC_BE";
qos.ac_vi="AC_VI";
qos.ac_vo="AC_VO";

qos.qos="QoS (Quality of Service/Hizmet Kalitesi)";
qos.intqccpri="İnternet Erişim Önceliği";
qos.category="Kategori";
qos.mediumrec="Orta (Önerilen)";
qos.normal="Normal";
qos.msnmess="MSN Messenger";
qos.skype="Skype";
qos.yahoomess="Yahoo Messenger";
qos.winlivemsg="Windows Live Messenger";
qos.aim="AIM";
qos.winmediaplay="Windows Media Player";
qos.realplayer="RealPlayer";
qos.quicktime="QuickTime";
qos.itunes="iTunes";
qos.yahoomusic="Yahoo Music Jukebox";
qos.rhapsody="Rhapsody";
qos.addapp="Yeni Uygulama Ekle";
qos.onlinegame="Çevrimiçi Oyunlar";
qos.counterstrike="Counter Strike";
qos.ageofemp="Age of Empires";
qos.diablo2="Diablo II";
qos.everquest="Everquest";
qos.halflife="Halflife";
qos.quake2="Quake 2";
qos.quake3="Quake 3";
qos.unrealtour="Unreal Tourment";
qos.retcastle="Return to Castle Wolfenstein";
qos.shadowofchr="S.T.A.L.K.E.R.: Shadow of Chernobyl";
qos.worldofwar="World Of Warcraft";
qos.suprecomm="Supreme Commander";
qos.thesims2="The Sims 2";
qos.titanquest="Titan Quest: Immortal Throne";
qos.battlefield="Battlefield 2142";
qos.halflife2="Half-Life 2: Episode One";
qos.heroesofmight="Heroes of Might & Magic V";
qos.theelderscrolls="The Elder Scrolls IV";
qos.guildwarsfactions="Guild Wars Factions 1 and 2";
qos.neverwinternights2="Neverwinter Nights 2";
qos.enemyterritory="Enemy Territory";
qos.worldinconflict="World In Conflict";
qos.callofduty4="Call of Duty 4";
qos.sinofasolarempire="Sins of a Solar Empire";
qos.halflifetob="Half-Life 2: The Orange Box";
qos.crysis="Crysis";
qos.frontlines="Frontlines";
qos.warhanmer4k="Warhammer 40,000: Dawn of War: Soulstorm";
qos.addgame="Yeni Oyun Ekle";
qos.entername="Bir Ad Gir";
qos.etherport="Ethernet Portu";
qos.voicedevice="Ses Aygıtı";
qos.voicemac="Aygıtımın MAC Adresi";
qos.recommend="Önerilen";
qos.game="Oyun";
qos.mymac="Mevcut Bilgisayarımın MAC Adresi";

qos.right1="İki Hizmet Kalitesi türü vardır: Router'a Ethernet kablosuyla bağlanan aygıtları kontrol eden Kablolu QoS ve router'a kablosuz bağlanan aygıtları kontrol eden Kablosuz QoS.";
qos.right2="<b>Aygıt Önceliği :</b>  Ağınızdaki bir aygıttan giden tüm trafiğin önceliğini, aygıta bir Aygıt Adı vererek, önceliğini belirterek ve MAD Adresini girerek belirleyebilirsiniz.";
qos.right3="<b>Ethernet Portu Önceliği :</b> Veri hızınızı aygıtınızın bağlı olduğu fiziksel LAN portuna göre kontrol edebilirsiniz. 1 ile 4 arasındaki LAN portlarına bağlı aygıtlardan gelen veri trafiğine Yüksek veya düşük öncelik atayabilirsiniz.";
qos.right4="<b>Uygulama Önceliği :</b> Bant genişliğini kullanan uygulamaya göre veri hızınızı kontrol edebilirsiniz. Yaygın oyun uygulama portlarına daha yüksek öncelik vermek için <b>Oyun Uygulamalarını Optimize Et</b> seçeneğini işaretleyin. Kullandıkları port numarasını girerek sekiz uygulamaya kadar özelleştirebilirsiniz.";
qos.right5="Kablosuz QoS,  Wi-Fi Alliance<sup>TM</sup> tarafından <b>Wi-Fi MültiMedya<sup>TM</sup> (WMM)</b> olarak da adlandırılmaktadır. Aynı zamanda WMM sertifikalı başka kablosuz aygıtları kullanıyorsanız, VMM kullanmayı etkinleştirin.";
qos.right6="<b>Bildirim Yok :</b>  Bildirimleri devreden çıkarmak istiyorsanız, bu seçeneği etkinleştirin. Bu seçenek etkinleştirildiğinde, router bir hata durumunda verileri yeniden göndermez.";
qos.exist = "Bu ayar zaten var.";

var vpn2 = new Object();
vpn2.right1="Ağ aygıtlarınızın VPN aracılığıyla iletişim kurmak için PPTP, L2TP IPSec geçiş izninizi etkinleştirmeyi seçebilirsiniz.";

var fail = new Object();
fail.msg="Girdiğiniz değerler geçersiz. Lütfen yeniden deneyin.";

var pactrl = new Object();
pactrl.pactrl ="Ebeveyn Denetimi";
pactrl.accsign ="Hesap Oluşturma";
pactrl.center1 ="Linksys Ebeveyn Denetimi çözümü ailenizi İnternet'te sörf yaparken güvenli <br>tutmanızı sağlar.";
pactrl.center2 ="<li>Kurması kolay</li><br><li>Linksys Router'unuz üzerinden evinizdeki her bilgisayarı korur</li><br><li>Raporlar, web, e-posta ve IM kullanımınızı izlemenize yardımcı olur</li>";
pactrl.center3 ="** Bu hizmete abone olmanız router'ınızın yerleşik İnternet Erişim İlkelerini devreden çıkaracaktır.";
pactrl.manageacc ="Hesabı Yönet";
pactrl.center4 ="Ebeveyn Denetimi Hesabınızın Yönetimi";
pactrl.signparental ="Ebeveyn Denetini hizmetine abone olun";
pactrl.moreinfo ="Daha Fazla Bilgi";
pactrl.isprovision ="aygıt yapılandırıldı";
pactrl.notprovision ="aygıt yapılandırılmadı";
pactrl.right1 ="Ebeveyn Denetimi ekranı Linksys Ebeveyn Denetimleri hesabınıza oturum açmanızı ve hesabınızı yönetmenizi sağlar. Linksys Ebeveyn Denetimleri Hizmeti İnternet hizmetlerini, erişimini ve özelliklerini ailenizin her üyesi için özelleştirerek kontrol etmeniz için güçlü araçlar sağlar.";

var satusroute = new Object();
satusroute.localtime ="Yok";

var succ = new Object();
succ.autoreturn ="Birkaç saniye sonra bir önceki sayfaya geri döneceksiniz.";
succ.return_desc = "Birkaç saniye sonra Güvenli Yükseltme sayfasına geri döneceksiniz.";
succ.return_index = "Birkaç saniye sonra Temel Ayarlar sayfasına geri döneceksiniz.";
succ.interrupt_desc = "Asla yarıda kesmeyin, lütfen bekleyin...";

var gn = new Object();
gn.gnip="Konuk Ağı IP Adresi";
gn.maclist="MAC Adresi Listesi";
gn.glist="Kablosuz Konuk Listesi";
gn.gnssid="Konuk Ağ Adı(SSID)";
gn.err1="Konuk Ağ IP Kimliği LAN adresiyle aynı alt-ağ olamaz.";
gn.err2="MAC sayısı limiti aşıyor! Önce birini silmeniz gerekir.";
gn.expire_time="Hesap Süresi";
gn.minutes="saat";
gn.domainname="Konuk Ağı Etki Alanı Adı";
gn.bc="Bant Genişliği Kontrolü";
gn.upstream="Yukarı Yönde";
gn.downstream="Aşağı Yönde";
gn.kbps="kbps";
 
gn.title="Konuk erişimi";
gn.tips0="Yanlış parola, lütfen yeniden girin.";
gn.tips1="Bu kablosuz bağlantı noktasına erişmek için parolayı girin.";
gn.login="OTURUM AÇ";
gn.err3="Kablosuz 5G SSID ile Konuk SSID değerleri aynı, Lütfen Değiştirin.";
gn.err4="Kablosuz 2.4G SSID ile Konuk SSID değerleri aynı, Lütfen Değiştirin.";
gn.err5="LAN IP adresi Konuk Ağı IP adresiyle aynı alt-ağda olamaz.";
gn.err6="192.168.33.0/24 ağı (IP adresleri 192.168.33.0 - 255) Kablosuz Konuk Ağı için ayrılmıştır. Lütfen farklı bir ağ adresi kullanın.";
gn.err7="Konuk Erişimi özelliği, router'ınız bu özellik için ayrılmış olan 192.168.33.0 ağında bulunduğundan devre dışıdır.";
gn.tips6="İnternet'e erişmek için, konuk erişim parolasını girin. Parolayı bilmiyorsanız sahibine sorun. Konuk erişimi parolası Linksys Connect kullanılarak bulunabilir.";
gn.dv="Masaüstü görünümü";
gn.mv="Mobil görünümü";
gn.context="İnternet'e erişmek için, konuk erişim parolasını girin. Parolayı bilmiyorsanız sahibine sorun. Konuk erişimi parolası Linksys Connect kullanılarak bulunabilir.";
gn.nat="NAT devre dışı ise Konuk Erişimi kullanılamaz.  Değişiklikleriniz kaydedilerek devam edilsin mi?";


