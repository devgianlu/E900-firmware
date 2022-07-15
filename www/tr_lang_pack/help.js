//Basic Setup
var hsetup = new Object();
hsetup.phase1="<i>Ayarlar</i> ekranı Router'ınıza erişirken göreceğiniz ilk ekrandır. Çoğu kullanıcı bu ekrandaki ayarları kullanarak Router'ı yapılandırabilir ve doğru yapılandırmasını sağlayabilir. Bazı İnternet Servis Sağlayıcıları (ISP'ler) Kullanıcı Adı, Parola, IP Adresi, Varsayılan Ağ Geçidi Adresi veya DNS IP Adresi gibi gibi belirli bilgileri girmenizi sağlar. Gerekiyorsa, bu bilgiyiİSS'nızdan edinebilirsiniz.";
hsetup.phase2="Not: Bu ayarları yapılandırdıktan sonra, Router için <i>Güvenlik</i> ekranını kullanarak yeni bir parola atamanız gerekiyor. Bu güvenliği arttırır ve Router'ı yetkisiz erişimlerden korur. Router'ın web tabanlı yardımcı programına veya Kurma Sihirbazına erişmeyi deneyen tüm kullanıcılardan Router'ın parolasını girmesi istenir.";
hsetup.phase3="Bulunduğunuz yerin saat dilimini seçin. Bulunduğunuz yerde yaz saati tasarrufu uygulanıyorsa,<i>Yaz saatini değişikliklerini otomatik olarak ayarla</i> onay kutusunu işaretleyin.";
hsetup.phase4="MTU,Maximum Transmission Unit'in (Maksimum Aktarım Birimi) kısaltmasıdır . İnternet aktarımında izin verilen en büyük paket boyutunu belirtir. Router'ın İnternet bağlantınız için en iyi MTU değerini seçmesi için, varsayılan <b>Otomatik</b> ayarını koruyun. Bir MTU boyutu belirtmek için, <b>El ile</b> ayarını seçin ve istediğiniz değeri girin (varsayılan değer <b>1400</b>).&nbsp; Bu değeri 1200 - 1500 aralığında bırakmanız gerekir.";
hsetup.phase5="Bu girdi bazı İSS sağlayıcıları için gereklidir ve bu İSS'ları tarafından sağlanabilir.";
hsetup.phase6="Bu Router dört bağlantı türünü destekler:";
hsetup.phase7="Otomatik Yapılandırma DHCP";
hsetup.phase8="(Point-to-Point Protocol over Ethernet)";
hsetup.phase9="(Point-to-Point Tunneling Protocol)";
hsetup.phase10="Bu bağlantı türleri İnternet Bağlantısının yanındaki aşağı açılır menüden seçilebilir.İstenen bilgiler ve kullanılabilir özellikler seçtiğiniz bağlantı türüne göre değişecektir. Bu bilgilerin bazı açıklamalarınıburada bulabilirsiniz:";		
hsetup.phase11="İnternet IP Adresi ve Alt-Ağ Maskesi";
hsetup.phase12="Bu, Router'ın (İSS'nız dahil) İnternet'teki harici kullanıcılar tarafından görülen IP Adresi ve Alt-ağ Maskesidir. İnternet bağlantınız statik bir IP adresi gerektiriyorsa,İSS'nız size bir Statik IP Adresi ve Alt-Ağ Maskesi verecektir.";
hsetup.phase13="İSS'nız size Ağ Geçidi IP Adresini verecektir."
hsetup.phase14="(Etkialanı Adı Sunucusu)";
hsetup.phase15="İSS'nız size en az bir DNS IP Adresi verecektir.";
hsetup.phase16="Kullanıcı adı ve Parola";
hsetup.phase17="<b>Kullanıcı Adı</b> ve <b>Parola</b> ile, bir PPPoE veya PPTP bağlantısı aracılığıyla İSS'nıza oturum açabilirsiniz.";
hsetup.phase18="İstendiğinde Bağlan";
hsetup.phase19="Router'ınızı belirtilen bir boşta kalma süresinin sonunda İnternet bağlantısını kesecek şekilde yapılandırabilirsiniz (Maksimum Boşta Kalma Süresi) İnternet bağlantınız işlem yapılmadığı için kesildiği takdirde,İstendiğinde Bağlan özelliği Router'ın,İnternet'e yeniden girmeyi denediğinizde bağlantınızı otomatik olarak yeniden kurmasını sağlar. İstendiğinde Bağlan'ı etkinleştirmek istiyorsanız, düğmeyi tıklatın. Eğer İnternet bağlantınızın her zaman aktif kalmasını istiyorsanız, <i>Maksimum Boşta Kalma Süresi</i> alanına  <b>0</b> değerini girin. İstemiyorsanız, İnternet bağlantınız sona ermeden geçecek süreyi dakika cinsinden girin.";
hsetup.phase20="Bağlı Tut Seçeneği ";
hsetup.phase21="Bu seçenek, işlem yapmadığınızda bile,İnternet'e sürekli bağlı kalmanızı sağlar. Bu seçeneği kullanmak için, <i>Bağlı Tut</i> düğmesini tıklatın. Varsayılan Yeniden Arama Süresi 30 saniyedir (başka bir deyişle, Router İnternet bağlantısını her 30 saniyede bir kontrol edin).";
hsetup.phase22="Not: Bazı kablolu bağlantı sağlayıcıları İnternet'e bağlanmak için belirli bir MAC adresi ister. Bunun hakkında daha fazla şey öğrenmek için, <b>Sistem</b> sekmesini tıklatın. Ardından <b>Yardım</b> düğmesini tıklatın ve MAC Kopyalama özelliği hakkında okuyun.";
hsetup.phase23="LAN";
hsetup.phase24="IP Adresi ve Alt-Ağ Maskesi";
hsetup.phase25="Bu dahili LAN'da görülen Router IP Adresi ve Alt-ağ Maskesidir. Varsayılan değer IP Adresi için 192.168.1.1 ve Alt-ağ Maskesi için 255.255.255.0 olarak girilmiştir.";
hsetup.phase26="DHCP";
hsetup.phase27="Router'ın DHCP sunucusu seçeneğini etkinleştirmek için, <b>Etkinleştir</b> düğmesini tıklatın. Ağınızda zaten bir DHCP sunucunuz varsa veya bir DHCP sunucusu istemiyorsanız, <b>Devredışı</b> ayarını seçin.";
hsetup.phase28="Ardından, DHCP sunucusunun IP adreslerini üretirken başlayacağı bir değer girin. 192.168.1.1 (Router'ın IP adresi) başlamayın.";
hsetup.phase29="Maksimum DHCP Kullanıcı Sayısı";
hsetup.phase30="DHCP sunucusunun IP adresleri atamasını istediğiniz maksimum bilgisayar sayısını girin. Aşılamayacak en yüksek değer 253'tür--bu, başlangıç IP adresiniz 192.168.1.2 ise mümkündür.";
hsetup.phase31="İstemci Kira Süresi bir ağ kullanıcısının geçerli dinamik IP adresiyle Router'a bağlanmasına izin verilen süredir. Bu dinamik IP adresinin kullanıcıya \"kiralanacağı\" süreyi dakika cinsinden girin.";
hsetup.phase32="Statik DNS 1-3 ";
hsetup.phase33="Etkialanı Adı Sistemi (DNS) İnternet'in etkialanı veya web sitesi adlarını İnternet adreslerine veya URL'lere çevirme biçimidir. İSS'nız size en az bir  DNS Sunucusu IP Adresi verecektir. Başka bir adres kullanmak istiyorsanız, bu IP Adresini bu alanlardan birine girin. Buraya en fazla üç DNS Sunucusu IP Adresi girebilirsiniz. Router bunları çalışan DNS sunucularına hızlı erişim için kullanır.";
hsetup.phase34="Windows İnternet Adlandırma Hizmeti (Windows Internet Naming Service / WINS) her bilgisayarın İnternet'le etkileşimini yönetir. Bir WINS sunucusu kullanıyorsanız, sunucunun IP Adresini buraya girin. Kullanmıyorsanız, bu alanı boş bırakın.";
hsetup.phase35="Tüm değerleri kontrol edin ve ayarlarınızı kaydetmek için <b>Ayarları Kaydet</b> düğmesini tıklatın. Kaydedilmemiş değişikliklerinizi kaydetmek için <b>Değişiklikleri İptal Et</b> düğmesini tıklatın. Ayarları İnternet'e bağlanarak test edebilirsiniz. ";    		    		    		

//DDNS
var helpddns = new Object();
helpddns.phase1="Bu Router bir Dinamik Etkialanı Adı Sistemi (Dynamic Domain Name System  / DDNS) özelliği sunar. DDNS dinamik İnternet IP adresine sabit bir ana makine ve etkialanı adı atamanızı sağlar. Router'ın arkasında kendi web sitenizi, FTP sunucunuzu veya başka bir sunucu barındırıyorsanız yararlıdır. Bu özelliği kullanmaya başlamadan önce, <i>www.dyndns.org</i> adresinde, bir DDNS servis sağlayıcısında DDNS hizmetine abone olmanız gerekir.";
helpddns.phase2="DDNS Hizmeti";
helpddns.phase3="DDNS Hizmetini devreden çıkarmak için, varsayılan <b>Devredışı</b> ayarını değiştirmeyin. DDNS hizmetini etkinleştirmek için, bu yönergeleri uygulayın:";
helpddns.phase4="<i>www.dyndns.org</i> adresinde DDNS hizmetine abone olun ve Kullanıcı Adınızı,<i> </i>Parolanızı ve<i> </i>Ana Makine Adı bilgilerini bir yere not edin.";
helpddns.phase5="<i>DDNS</i> ekranında, <b>Etkinleştir</b> düğmesini seçin.";
helpddns.phase6="<i> Kullanıcı Adı</i>,<i> Parola</i> ve<i> Ana Makine</i> alanlarını doldurun.";
helpddns.phase7="Değişikliklerinizi kaydetmek için <b>Ayarları Kaydet</b> düğmesini tıklatın. Kaydedilmemiş değişikliklerinizi kaydetmek için <b>Değişiklikleri Kaydet</b> düğmesini tıklatın.";
helpddns.phase8="Router'ın geçerli İnternet IP Adresi burada görüntülenir.";
helpddns.phase9="DDNS hizmeti bağlantısının durumu burada görüntülenir.";
		
//MAC Address Clone
var helpmac =  new Object();
helpmac.phase1="MAC Kopyalama,";
helpmac.phase2="Router'ın MAC adresi tanımlama amacıyla bir donanım parçasına atanan 12 basamaklı bir koddur. Bazı İSS'ları kurulum sırasında kablo veya DSL modeme bağlı ağ kartınızın/adaptörünüzün MAC adresini kaydetmenizi ister. İSS'nız MAC adresinin kaydedilmesini gerektiriyorsa, adaptörünüzün MAC adresini bilgisayarınızın işletim sistemi için verilen yönergeleri kullanarak bulun.";
helpmac.phase3="Windows 98 ve Millennium için:";
helpmac.phase4="1.  <b>Başlat</b> düğmesini tıklatın ve <b>Çalıştır</b>'ı seçin.";
helpmac.phase5="2.  Açılan alana <b>winipcfg </b>yazın ve <b>Tamam </b>tuşuna basın.";
helpmac.phase6="3.  Kullandığınız Ethernet adaptörünü seçin.";
helpmac.phase7="4.  <b>Daha Fazla Bilgi</b> düğmesini tıklatın.";
helpmac.phase8="5.  Adaptörünüzün MAC adresini bir yere not edin.";
helpmac.phase9="1.  <b>Başlat</b> düğmesini tıklatın ve <b>Çalıştır</b>'ı seçin.";
helpmac.phase10="2.  Açılan alana <b>cmd </b>yazın ve <b>Tamam </b>tuşuna basın.";
helpmac.phase11="3.  Komut isteminde <b>ipconfig /all</b> komutunu çalıştırın ve adaptörünüzün fiziksel adresine bakın.";
helpmac.phase12="4.  Adaptörünüzün MAC adresini bir yere not edin.";
helpmac.phase13="Ağ adaptörünüzün MAC adresini Router'a kopyalamak ve kayıtlı MAC adresini değiştirmek için İSS'nızı aramak zorunda kalmamak için, şu yönergeleri uygulayın:";
helpmac.phase14="Windows 2000 ve XP için:";
helpmac.phase15="1.  <b>Etkinleştir</b>'i seçin.";
helpmac.phase16="2.  <i>MAC Adresi</i> alanına adaptörünüzün MAC adresini girin.";
helpmac.phase17="3.  <b>Ayarları Kaydet </b>düğmesini tıklatın.";
helpmac.phase18="MAC adresi klonlamayı devreden çıkarmak için, varsayılan <b>Devredışı</b> ayarını değiştirmeyin.";

//Advance Routing
var hrouting = new Object();
hrouting.phase1="Yönlendirme";
hrouting.phase2="<i>Yönlendirme</i> ekranında, Router'ın yönlendirme modunu ve ayarlarını değiştirebilirsiniz. Çoğu kullanıcı için ağ geçidi modu önerilir.";
hrouting.phase3="Doğru çalışma modunu seçin. Ağınızın İnternet bağlantısı Router'ınızdan geçiyorsa, varsayılan <b> Ağ Geçidi</b> ayarını koruyun (Çoğu kullanıcı için ağ geçidi modu önerilir). Router ağda başka router'larla çalışıyorsa <b> Router </b>ayarını seçin.";
hrouting.phase4="Dinamik Yönlendirme (RIP)";
hrouting.phase5="Not: Bu özellik Ağ geçidi modunda kullanılamaz.";
hrouting.phase6="Dinamik Yönlendirme Router'ın ağ yapısındaki fiziksel değişiklikleri otomatik olarak ayarlamasını ve diğer router'larla yönlendirme tabloları alıp vermesini sağlar. Varsayılan Router, kaynak ve hedef arasındaki en düşük atlama sayısına bağlı olarak ağ paketlerinin yolunu belirler. ";
hrouting.phase7="Dinamik Yönlendirme özelliğini WAN tarafında etkinleştirmek için, <b>WAN</b> seçeneğini seçin. Bu özelliği LAN ve kablosuz tarafında etkinleştirmek için, <b>LAN ve Kablosuz</b> seçeneğini seçin.. Bu özelliği hem WAN hem LAN için etkinleştirmek istiyorsanız, <b> Her İkisi</b> seçeneğini seçin. Dinamik Yönlendirme özelliğini tüm veri aktarımları için etkinleştirmek istiyorsanız, varsayılan <b>Devren çıkar</b> ayarını seçin. ";
hrouting.phase8="Statik Yönlendirme,&nbsp; Hedef IP Adresi, Alt-ağ Maskesi, Ağ Geçidi ve Arabirim";
hrouting.phase9="Router ve başka bir ağ arasında statik bir oluşturmak için, <i>Statik Yönlendirme</i> aşağı açılır listesinden bir numara seçin. (Bir statik ağ bilgilerinin belirli bir ana makine veya ağa ulaşmak için izlemesi gereken önceden belirlenmiş bir yoldur.)";
hrouting.phase10="Aşağıdaki verileri girin:";
hrouting.phase11="Hedef IP Adresi </b>- Hedef IP Adresi statik bir yol atamak istediğiniz ağın veya ana makinenin adresidir.";
hrouting.phase12="Alt-ağ Maskesi </b>- Alt-ağ Maskesi bir IP adresinin hangi bölümünün ağ bölümü, hangi bölümünün ana makine bölümü olduğunu belirtir. ";
hrouting.phase13="Ağ Geçidi </b>- Router ve ağ veya ana makine arasındaki teması sağlayan ağ geçidi aygıtının IP adresidir.";
hrouting.phase14="Hedef IP Adresinin nerede olduğuna bağlı olaraki <i>Arabirim</i> aşağı açılır menüsünden <b>LAN &amp; Kablosuz </b>veya <b>WAN </b>ayarını seçin.";
hrouting.phase15="Değişikliklerinizi kaydetmek için, <b>Uygula </b>düğmesini tıklatın. Kaydedilmiş değişikliklerinizi kaydetmek için, <b> İptal </b>düğmesini tıklatın.";
hrouting.phase16="Yeni statik yollar girmek için, 1. - 4. adımları tekrarlayın.";
hrouting.phase17="Bu Girişi Sil";
hrouting.phase18="Bir statik yolu silmek için:";
hrouting.phase19="<i>Statik Yönlendirme</i> aşağı açılır listesinden, statik yolun giriş numarasını seçin.";
hrouting.phase20="<b>Bu Girişi Sil </b>düğmesini tıklatın.";
hrouting.phase21="Bir silme işlemini kaydetmek için, <b>Uygula </b>düğmesini tıklatın. Bir silme işlemini iptal etmek için, <b> İptal </b>düğmesini tıklatın. ";
hrouting.phase22="Yönlendirme Tablosunu Göster";
hrouting.phase23="Kullanılan tüm geçerli yol girişlerini görmek için <b>Yönlendirme Tablosunu Göster </b>düğmesini tıklatın. Her girdi için Hedef IP adresi, Alt-ağ Maskesi, Ağ geçidi ve Arabirim görüntülenir. Görüntülenen verileri yenilemek için <b>Yenile </b>düğmesini tıklatın. <b> Yönlendirme</b> ekranına dönmek için <i>Kapat</i> düğmesini tıklatın.";
hrouting.phase24="Hedef IP Adresi</b> - Hedef IP Adresi statik yolun atandığı ağın veya ana makinenin adresidir. ";
hrouting.phase25="Alt-ağ Maskesi</b> - Alt-ağ Maskesi bir IP adresinin hangi bölümünün ağ bölümü ve hangi bölümünün ana makine bölümü olduğunu belirler.";
hrouting.phase26="Ağ geçidi</b> - Router ve ağ veya ana makine arasındaki teması sağlayan ağ geçidi aygıtının IP adresidir.";
hrouting.phase27="Arabirim</b> - Bu arabirim Hedef IP Adresinin  <b> LAN ve Kablosuz </b>(dahili kablolu ve kablosuz ağlar), <b>WAN</b> (İnternet) veya <b> Döngü</b> (bir bilgisayarın bazı programlar için gerekli olan bir ağ gibi davrandığı sahte bir ağ) üzerinde olup olmadığını belirtir. ";

//Firewall
var hfirewall = new Object();
hfirewall.phase1="WAN İsteklerini Engelle";
hfirewall.phase2="WAN İsteklerini Engelle özelliğini etkinleştirerek, ağınızın başka İnternet kullanıcıları \"pinglenmesini,\" engelleyebilirsiniz. WAN İsteklerini Engelle özelliği ağ portlarınızı gizleyerek ağ güvenliğinizi de güçlendirir. WAN İsteklerini Engelleme özelliğinin her iki fonksiyonu da  dışarıdakilerin ağınıza girmelerini zorlaştırır. Bu özellik varsayılan olarak etkindir. Bu özelliği devreden çıkarmak için <b>Devreden çıkar</b> ayarını seçin.";
hfirewall.right="SPI güvenlik duvarını etkinleştirin veya devreden çıkarın.";

//VPN
var helpvpn = new Object();
helpvpn.phase1="VPN Geçiş İzni";
helpvpn.phase2="Virtual Private Networking (VPN) tipik olarak işle bağlantılı ağlar için kullanılır. VPN tünelleri için, Router IPSec Geçiş İzni ve PPTP Geçiş İznini destekler.";
helpvpn.phase3="<b>IPSec</b> - Internet Protocol Security (IPSec) <b> </b>IP katmanında güvenli paket alışverişi uygulamak için kullanılan bir protokoller dizisidir. IPSec tünellerinin Router'dan geçmesine izin vermek için, IPSec Geçiş İzni varsayılan olarak etkindir. IPSec  Geçiş İznini devreden çıkarmak için, <i>IPSec</i> onay kutusunun işaretini kaldırın.";
helpvpn.phase4="<b>PPTP </b>- Point-to-Point Tunneling Protokolü bir Windows NT 4.0 veya 2000 sunucusunda VPN oturumlarını etkinleştirmek için kullanılan bir yöntemdir. PPTP tünellerinin Router'dan geçmesine izin vermek için, PPTP Geçiş İzni varsayılan olarak etkindir. PPTP Geçiş İznini devreden çıkarmak için, <i>PPTP</i> onay kutusunun işaretini kaldırın.";

helpvpn.right="Ağınızın VPN aracılığıyla iletişim kurmasına izin vermek için IPSec PPTP, L2TP geçiş izinlerinden birini seçebilirsiniz.";
//Internet Access
var hfilter = new Object();
hfilter.phase1="Filtreler";
hfilter.phase2="<i>Filtreler</i> ekranı belirli İnternet kullanım türlerine izin vermenizi veya engellemenizi sağlar. Belirli bilgisayarlar için İnternet erişim ilkeleri ayarlayabilirsiniz ve ağ port numaralarını kullanmak için filtreler oluşturabilirsiniz.";
hfilter.phase3="Bu özellik, IP veya MAC adreslerine göre tanımlanan belirli bilgisayarlar için on farklı İnternet Erişim İlkesi özelleştirmenizi sağlar. Her ilke belirtilen bilgisayarlara, belirtilen günler ve süreler boyunca uygulanır.";
hfilter.phase4="Bir ilke oluşturmak veya düzenlemek için, bu yönergeleri uygulayın:";
hfilter.phase5="Aşağı açılır menüden ilke numarasını \(1-10\) seçin.";
hfilter.phase6="<i>Profil Adı Gir</i> alanına bir ad girin.";
hfilter.phase7="<b>Bilgisayar Listesini Düzenle</b> düğmesini tıklatın.";
hfilter.phase8="Değişikliklerinizi kaydetmek için <b>Uygula</b> düğmesini tıklatın. Kaydedilmemiş değişikliklerinizi iptal etmek için <b>İptal</b> düğmesini tıklatın. <b>Filtreler</b> ekranına dönmek için <i>Kapat</i> düğmesini tıklatın.";
hfilter.phase9="Listedeki bilgisayarların İnternet erişimini belirtilen günlerde ve saatlerde engellemek istiyorsanız, varsayılan <b>Listelenen Bilgisayarlar İçin İnternet Erişimini Devreden Çıkar</b> ayarını koruyun. Listelenen bilgisayarların belirtilen günlerde ve saatlerde İnternet'e erişmesine izin vermek istiyorsanız, <i> Listelenen Bilgisayarlar İçin İnternet Erişimini Etkinleştir</i> düğmesini tıklatın.";
hfilter.phase10="<i>Bilgisayar Listesi</i> ekranında, bilgisayarları IP adresine veya MAC adresine göre belirtin. <i>IP</i> alanlarına ilgili IP adreslerini girin. Filtrelenecek bir IP adresleri grubunuz varsa, ilgili <i>IP Aralığı</i> alanlarını doldurun. İlgili MAC adreslerini <i>MAC</i> alanlarına girin.";
hfilter.phase11="Erişimin filtreleneceği zamanı girin. <b>24 Saat</b> seçeneğini seçin <b> </b>veya <i>Başlangıç</i> onay kutusunu işaretleyin ve aşağı açılır kutuları kullanarak belirli bir zaman aralığını belirtin. ";
hfilter.phase12="Erişimin filtreleneceği günleri girin. <b>Her gün</b> ayarını veya ilgili günleri seçin. ";
hfilter.phase13="Değişikliklerinizi kaydetmek ve aktifleştirmek için <b>İlkeye Ekle</b> düğmesini tıklatın.";
hfilter.phase14="Yeni ilkeler oluşturmak veya düzenlemek için, 1. - 9. adımları tekrarlayın.";
hfilter.phase15="Bir İnternet Erişim İlkesini silmek için, ilke numarasını seçin ve <b>Sil</b> düğmesini tıklatın.";
hfilter.phase16="Tüm ilkelerin bir özetini görmek için, <b>Özet</b> düğmesini tıklatın . <i> İnternet İlkesi Özet</i> ekranında her ilke numarası, İlke Adı, Günler ve Saat gösterilir. Bir ilkeyi silmek için, kutusunu tıklatın ve ardından <b>Sil</b> düğmesini tıklatın. <b>Filtreler</b> ekranına dönmek için <i>Kapat</i> düğmesini tıklatın.";
hfilter.phase17="Filtrelenen Port Aralığı";
hfilter.phase18="Bilgisayarları ağ port numarasına göre filtrelemek için, filtrelemek istediğiniz protokollere bağlı olarak, <b>Her ikisi</b>, <b>TCP</b> veya <b>UDP</b> ayarını seçin. Ardından<b> </b>port numarası alanlarına  filtrelemek istediğiniz port alanlarını girin. Router'a bağlı  bilgisayarlar artık burada listelenen hiçbir porta erişemezler. Bir filtreyi devreden çıkarmak için, <b>Devreden çıkar</b> düğmesini seçin.";

//share of help string
var hshare = new Object();
hshare.phase1="Tüm değerleri kontrol edin ve ayarlarınızı kaydetmek için <b>Ayarları Kaydet</b> düğmesini tıklatın. Kaydedilmemiş değişikliklerinizi kaydetmek için <b>Değişiklikleri İptal Et</b> düğmesini tıklatın.";


//DMZ
var helpdmz = new Object();
helpdmz.phase1="DMZ hosting özelliği bir yerel kullanıcının, İnternet'te oyun oynamak veya video konferans görüşmesi yapmak gibi özel bir amaçla İnternet'e açılmasını sağlar. DMZ hosting özelliği tüm portları aynı zamanda bir PC'ye yönlendirir. Port Yönlendirme özelliği daha güvenlidir, çünkü sadece açılmasını istediğiniz portları açar, DMZ ise bir bilgisayarın tüm portlarını açarak bilgisayarın İnternet'ten görünmesini sağlar. ";    		
helpdmz.phase2="Portu yönlendirilen bir bilgisayarın DHCP istemci fonksiyonunun devreden çıkarılmış ve DHCP fonksiyonu kullanılırken IP adresi değişebileceği için yeni bir statik IP adresinin olması gerekir.";
/***To expose one PC, select enable.***/
helpdmz.phase3="Bir bilgisayarı açmak için,  ";
helpdmz.phase4="<i>DMZ Host IP Adresi</i> alanına bilgisayarın IP adresini girin.";



//help number string
var hnum = new Object();
hnum.one="1."
hnum.two="2."
hnum.three="3."
hnum.four="4."
hnum.five="5."
hnum.six="5."
hnum.seven="6."
hnum.eight="7."
hnum.night="8."
 

