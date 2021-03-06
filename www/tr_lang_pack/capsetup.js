var topmenu = new Object();
topmenu.basicsetup="Temel Ayarlar";
topmenu.macaddrclone="MAC Adresi Kopyalama";
topmenu.advrouting="Gelişmiş Yönlendirme";
topmenu.gns="Konuk Ağı Ayarları";
topmenu.ipv6setup="IPv6 Ayarları"; 

var lefemenu = new Object();
lefemenu.intersetup="İnternet Ayarları";
lefemenu.conntype="Internet Bağlantı Türü";
lefemenu.netsetup="Ağ Ayarları";
lefemenu.netaddr="Ağ Adresi";
lefemenu.dhcpserverset="DHCP Sunucusu Ayarları";
lefemenu.optset="İsteğe Bağlı Ayarlar";
lefemenu.requireisp="(bazı İnternet Servis Sağlayıcıları için gerekir)";
lefemenu.routerip="Router Adresi";
lefemenu.timeset="Zaman Ayarları";
lefemenu.optset="İsteğe Bağlı Ayarlar";
lefemenu.advrouting="Gelişmiş Yönlendirme";
lefemenu.staticroute="Statik Yönlendirme";

var setupcontent = new Object();
setupcontent.dhcp="Otomatik Yapılandırma - DHCP";
setupcontent.interipaddr="Internet IP Adresi";
setupcontent.stadns1="Statik DNS 1";
setupcontent.stadns2="Statik DNS 2";
setupcontent.mtumanual="El ile";
setupcontent.mtusize="Boyut";
setupcontent.localipaddr="Yerel IP Adresi";
setupcontent.maxdhcpusr="Maksimum  &nbsp;Kullanıcı Sayısı";
setupcontent.dhcprange="IP Adresi Aralığı";
setupcontent.clileasetimemin="dakika (0 değeri bir gün demektir)";
setupcontent.autoadjtime="Yaz saatini değişikliklerini otomatik olarak ayarla.";
setupcontent.conndemand="İstendiğinde Bağlan: Maksimum Boşta Kalma Süresi:";
setupcontent.min="Dak.";
setupcontent.minute="Dakika";
setupcontent.keepalive="Bağlı Tut: Yeniden Arama Süresi";
setupcontent.sec="Sn.";
setupcontent.second="Saniye";
setupcontent.srvipaddr="Sunucu IP Adresi";
setupcontent.pptpdhcp="Otomatik Olarak Bir IP Adresi Al";
setupcontent.pptpstaticip="Bir IP Adresi Belirtin";
setupcontent.pptpdns1="DNS 1";
setupcontent.pptpdns2="DNS 2";
setupcontent.pptpdns3="DNS 3";
setupcontent.pptpsip="PPTP Sunucusu IP Adresi";
setupcontent.dhcp_ipv6="Otomatik Yapılandırma - Yerleşik IPv6"; 
setupcontent.static_ipv6="Statik Yapılandırma - Yerleşik IPv6"; 
setupcontent.pppoe_ipv6="PPPoE - Yerleşik IPv6"; 
setupcontent.tunnel="6rd Tüneli"; 
setupcontent.dhcpv6_client="DHCPv6 İstemcisi"; 
setupcontent.duid="DUID"; 
setupcontent.msg="Boşsa, router bu değeri hesaplar"; 
setupcontent.dhcpv6_server_settings="DHCPv6 Sunucusu Ayarları"; 
setupcontent.dhcpv6_server="DHCPv6 Sunucusu"; 
setupcontent.subnet_prefix_length="Alt-ağ Önek Uzunluğu";
setupcontent.prefix_addr="Önek Adresi";
setupcontent.auto_config="Otomatik Yapılandırma";
setupcontent.manual_config="Elle Yapılandırma";
setupcontent.prefix="Önek";
setupcontent.prefix_length="Önek Uzunluğu";
setupcontent.relay="Sınır Rölesi";
setupcontent.ipv4_masklength="IPv4 Adres Maskesi";
setupcontent.ipv6auto = "IPv6 - Otomatik";
setupcontent.ipv6autotunnel = "IPv6 Otomatik ve 6. Tünel";
setupcontent.autoconfig="Otomatik Yapılandırma";
setupcontent.aftrinfo="ISS Sunucusu (AFTR - Adres Ailesi Geçiş Router'ı) Adresi";

var ddns = new Object();
ddns.srv="DDNS Hizmeti";
ddns.disable="Devredışı";
ddns.dyndns="DynDNS.org";
ddns.tzo="TZO.com";
ddns.emailaddr="E-posta Adresi";
ddns.ddns3322="3322.com";
ddns.peanuthull="PeanutHull.com";
ddns.mailexchange="Posta Alışveriş";
ddns.backupmx="MX Yedekle";
ddns.wildcard="Joker karakter";
ddns.system="Sistem";
ddns.dynamic="Dinamik";
ddns.static1="Statik";
ddns.custom="Özel";
ddns.tzokey="TZO Parolası";
ddns.mailexchangeopt="Posta Alışveriş (İsteğe bağlı)";

var macclone = new Object();
macclone.usrdef="Kullanıcı Tanımlı Giriş";
macclone.clonepcmac="Bilgisayarımın MAC Adresini Kopyala";

var advroute = new Object();
advroute.dynrouting="Dinamik Yönlendirme";
advroute.rip="RIP";
advroute.waninternet="İnternet (WAN)";
advroute.selsetnum="Ayarlanan numarayı seç";
advroute.routename="Yol Adını Girin";
advroute.deslanip="Hedef LAN IP Adresi";
advroute.showroutetbl="Yönlendirme Tablosunu Göster";
advroute.delentries="Bu Girişi Sil";
advroute.routetbllist="Yönlendirme Tablosu Giriş Listesi";
advroute.routeentries="Yol Girişleri";
advroute.routetbl="Yönlendirme Tablosu";
advroute.dynroutingrip="Dinamik Yönlendirme (RIP)";

var dhcp = new Object();
dhcp.select="Seç";
dhcp.selectcli="DHCP Tablolarından &nbsp;<BR>İstemcileri Seçin";
dhcp.manualadd="Elle İstemci Ekleyin";
dhcp.entercli="İstemci Adını Girin";
dhcp.assignip="IP Adresi Ata";
dhcp.tomac="Bu MAC Adresine";
dhcp.clires="Ayrılmış İstemciler";

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
