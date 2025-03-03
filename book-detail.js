// Kitap detay sayfasını dinamikleştirme
document.addEventListener('DOMContentLoaded', function () {
    // URL'den kitap parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const kitapId = urlParams.get('id');
    const kitapAdi = urlParams.get('ad');

    // Eğer bir kitap parametresi varsa, ona göre sayfayı güncelle
    if (kitapId || kitapAdi) {
        updateBookDetails(kitapId, kitapAdi);
    }
});

// Kitap verilerini tutan obje
const kitaplar = {
    "gece-yarisi-kutuphanesi": {
        id: "gece-yarisi-kutuphanesi",
        baslik: "Gece Yarısı Kütüphanesi",
        yazar: "Zeynep Kaya",
        resim: "img/books/gece-yarisi-kutuphanesi-13654995-55-B.jpg",
        puan: 4,
        degerlendirmeSayisi: 426,
        aciklama: "Gece Yarısı Kütüphanesi, hayatın seçimlerini sorgulayan ve pişmanlıkları ele alan felsefi bir yolculuk hikayesidir. Ana karakter Nora, yaşam ve ölüm arasında asılı kaldığı gizemli bir kütüphanede, yaşayabileceği farklı hayatları deneyimleme fırsatı bulur.",
        ozet: "Gece Yarısı Kütüphanesi, çağdaş kurgu türünün en etkileyici örneklerinden biridir. Hayatında pişmanlıkları olan ana karakter Nora Seed, intihar teşebbüsünde bulunur ve kendini Gece Yarısı Kütüphanesi adında gizemli bir yerde bulur.<br><br>Bu kütüphane, sonsuz sayıda kitapla doludur ve her kitap Nora'nın farklı seçimler yaptığı alternatif bir hayatını içerir. Nora, kütüphaneci Bay Elm'in rehberliğinde farklı hayat versiyonlarını deneyimlemeye başlar.<br><br>Roman, pişmanlık, seçimler, mutluluk ve hayatın anlamı gibi derin felsefi konuları ele alırken, okuyucuya 'Ya şöyle olsaydı?' sorusunu düşündürtür. Nora'nın yolculuğu, hayattaki küçük mutlulukların ve mevcut olanı takdir etmenin önemini vurgular.<br><br>Zeynep Kaya'nın akıcı anlatımı ve duygusal derinliği ile Gece Yarısı Kütüphanesi, okuyucuları hem düşündüren hem de derinden etkileyen bir eser olarak öne çıkıyor.",
        kategori: "Kurgu, Felsefe",
        sayfa: 328,
        sure: "8s 42dk",
        tarih: "15 Mart 2025",
        dil: "Türkçe",
        seslendiren: "Demet Evgar",
        yayinevi: "Hikaye Yayınları",
        isbn: "978-605-XXX-XXX-X",
        fiyat: 39.90,
        benzerKitaplar: ["zaman-yolcusu", "unutulmus-dunyalar", "sonsuz-kapilar", "yasam-kutuphanesi"]
    },
    "sifirdan-zirveye": {
        id: "sifirdan-zirveye",
        baslik: "Sıfırdan Zirveye",
        yazar: "Kemal Şahin",
        resim: "img/books/sıfırdanzirveye.jpeg",
        puan: 4.5,
        degerlendirmeSayisi: 325,
        aciklama: "Sıfırdan Zirveye, başarılı bir girişimcinin kendi deneyimlerinden yola çıkarak, iş hayatında karşılaşılan zorlukları ve bu zorlukların nasıl aşılacağını anlattığı bir kişisel gelişim kitabıdır.",
        ozet: "Sıfırdan Zirveye, Kemal Şahin'in girişimcilik yolculuğunda edindiği tecrübeleri paylaştığı bir kişisel gelişim kitabıdır.<br><br>Kitap, başarısızlıkların nasıl birer öğrenme fırsatına dönüştürülebileceğini, doğru düşünce kalıplarının nasıl oluşturulacağını ve hedefe giden yolda kararlılığın önemini vurguluyor.<br><br>Yazar, kendi hayatından örneklerle teorik bilgileri desteklerken, okuyuculara pratik tavsiyeler sunuyor. İş dünyasında kendine yer edinmek isteyen herkesin okuması gereken bir rehber niteliğindedir.",
        kategori: "Kişisel Gelişim, Girişimcilik",
        sayfa: 264,
        sure: "6s 15dk",
        tarih: "10 Ocak 2025",
        dil: "Türkçe",
        seslendiren: "Ali Poyrazoğlu",
        yayinevi: "İş Bankası Kültür Yayınları",
        isbn: "978-605-XXX-XXX-Y",
        fiyat: 44.90,
        benzerKitaplar: ["basari-rehberi", "girisimci-zihin", "is-dunyasinda-basari", "liderlik-sanati"]
    },
    "karanligin-icinden": {
        id: "karanligin-icinden",
        baslik: "Karanlığın İçinden",
        yazar: "Alexandra Bracken",
        resim: "img/books/karanlığıniçinden.jpeg",
        puan: 4.2,
        degerlendirmeSayisi: 318,
        aciklama: "Karanlığın İçinden, gizemli ve doğaüstü yeteneklere sahip karakterlerin, distopik bir dünyada hayatta kalma mücadelesini anlatan sürükleyici bir macera romanıdır.",
        ozet: "Karanlığın İçinden, distopik bir gelecekte geçen, genç yetişkin bilim kurgu romanıdır.<br><br>Dünya çapında bir salgından sonra, hayatta kalan çocukların bir kısmı doğaüstü yetenekler kazanır. Bu çocuklar, hükümet tarafından tehlikeli kabul edilir ve kamplara gönderilir.<br><br>Ana karakter Ruby, 16 yaşına geldiğinde, kendisinin en tehlikeli yeteneklere sahip olduğunu keşfeder ve kaçmak zorunda kalır. Yolda karşılaştığı diğer yetenekli çocuklarla birlikte, hem kendi güçlerini kontrol etmeyi öğrenmek hem de özgürlükleri için savaşmak zorundadır.<br><br>Kitap, dostluk, kendini kabul etme ve özgürlük temaları etrafında dönüyor.",
        kategori: "Bilim Kurgu, Genç Yetişkin",
        sayfa: 410,
        sure: "9s 25dk",
        tarih: "5 Şubat 2025",
        dil: "Türkçe",
        seslendiren: "Ezgi Mola",
        yayinevi: "Pegasus Yayınları",
        isbn: "978-605-XXX-XXX-Z",
        fiyat: 47.50,
        benzerKitaplar: ["gelecek", "sonsuz-kapilar", "zaman-tuneli", "yasam-kutuphanesi"]
    },
    "zaman-tuneli": {
        id: "zaman-tuneli",
        baslik: "Zaman Tüneli",
        yazar: "John Fowles",
        resim: "img/books/zaman tüneli.jpeg",
        puan: 4.6,
        degerlendirmeSayisi: 289,
        aciklama: "Zaman Tüneli, zaman yolculuğu temasını işleyen, tarihin farklı dönemlerinde geçen olayları birbirine bağlayan, düşündürücü bir bilim kurgu romanıdır.",
        ozet: "Zaman Tüneli, John Fowles'in en çarpıcı eserlerinden biridir. Kitapta, 21. yüzyıldan bir bilim insanının, icat ettiği zaman makinesiyle geçmişe yolculuk yapması anlatılıyor.<br><br>Ana karakter Peter, Viktorya dönemine giderek o dönemin toplumsal yapısını ve yaşam tarzını birinci elden deneyimler. Ancak geçmişte yaptığı değişiklikler, kendi zamanında beklenmedik sonuçlara yol açar.<br><br>Roman, determinizm, özgür irade ve tarihin değiştirilebilirliği gibi derin felsefi konuları ele alırken, iki farklı dönemin sosyal normları arasındaki çarpıcı karşıtlıkları ustaca resmediyor.<br><br>Fowles'in kendine has üslubu, tarihi detayları ve psikolojik derinliği, Zaman Tüneli'ni sıradan bir bilim kurgu romanından çok daha fazlası haline getiriyor.",
        kategori: "Bilim Kurgu",
        sayfa: 392,
        sure: "9s 10dk",
        tarih: "20 Kasım 2024",
        dil: "Türkçe",
        seslendiren: "Halit Ergenç",
        yayinevi: "Can Yayınları",
        isbn: "978-605-XXX-XXX-T",
        fiyat: 52.75,
        benzerKitaplar: ["zaman-yolcusu", "gelecek", "sonsuz-kapilar", "gece-yarisi-kutuphanesi"]
    },
    "yapay-zeka-cagi": {
        id: "yapay-zeka-cagi",
        baslik: "Yapay Zeka Çağı",
        yazar: "Byron Reese",
        resim: "img/books/yapayzekaçağı.jpg",
        puan: 4.3,
        degerlendirmeSayisi: 215,
        aciklama: "Yapay Zeka Çağı, yapay zekanın günümüzde ve gelecekte topluma, ekonomiye ve insan yaşamına etkilerini inceleyen, düşündürücü bir teknoloji kitabıdır.",
        ozet: "Yapay Zeka Çağı, Byron Reese'in yapay zeka teknolojilerinin geleceğimizi nasıl şekillendireceğine dair kapsamlı bir incelemesidir.<br><br>Kitap, yapay zekanın tarihsel gelişimini, mevcut durumunu ve potansiyel geleceğini ele alırken, bu teknolojinin iş dünyası, sağlık, eğitim ve günlük yaşam üzerindeki etkilerini analiz ediyor.<br><br>Reese, yapay zeka ile ilgili yaygın endişeleri ele alırken, bu teknolojinin insanlığa sunduğu fırsatları da dengeli bir şekilde değerlendiriyor. Kitap, teknik jargondan uzak, anlaşılır bir dille yazılmış olması nedeniyle, konuya ilgi duyan herkes için erişilebilir bir kaynak sunuyor.<br><br>Yapay zekanın etik boyutları, işsizlik riski, refah artışı potansiyeli ve insan-makine işbirliği gibi konular, kitabın öne çıkan temaları arasında yer alıyor.",
        kategori: "Bilim, Teknoloji",
        sayfa: 328,
        sure: "7s 45dk",
        tarih: "8 Mart 2025",
        dil: "Türkçe",
        seslendiren: "Mert Fırat",
        yayinevi: "Alfa Yayınları",
        isbn: "978-605-XXX-XXX-U",
        fiyat: 59.90,
        benzerKitaplar: ["gelecek", "is-dunyasinda-basari", "girisimci-zihin", "sifirdan-zirveye"]
    },
    "sessiz-ciglik": {
        id: "sessiz-ciglik",
        baslik: "Sessiz Çığlık",
        yazar: "Lisa Gardner",
        resim: "img/books/sessizcıglık.jpg",
        puan: 4.4,
        degerlendirmeSayisi: 277,
        aciklama: "Sessiz Çığlık, kayıp bir kızın hikayesini takip eden, psikolojik gerilim unsurlarıyla dolu, sürükleyici bir polisiye romandır.",
        ozet: "Sessiz Çığlık, usta polisiye yazarı Lisa Gardner'ın en çarpıcı eserlerinden biridir.<br><br>Roman, Boston'da küçük bir kızın kaçırılması ve Dedektif D.D. Warren'ın bu gizemli vakayı çözme çabasını konu alıyor. Soruşturma derinleştikçe, dedektif kendini aile sırları, karanlık geçmişler ve beklenmedik bağlantılardan oluşan karmaşık bir ağın içinde buluyor.<br><br>Gardner, polisiye türünün klasik unsurlarını ustaca kullanırken, karakterlerin psikolojik derinliklerini de başarıyla işliyor. Kitap, sadece bir suç hikayesi değil, aynı zamanda aile ilişkileri, travma ve iyileşme üzerine düşündürücü bir inceleme sunuyor.<br><br>Beklenmedik plot twistleri ve gerilimli atmosferiyle Sessiz Çığlık, okuyucuyu son sayfaya kadar koltuğunun ucunda tutuyor.",
        kategori: "Polisiye, Gerilim",
        sayfa: 352,
        sure: "8s 20dk",
        tarih: "12 Şubat 2025",
        dil: "Türkçe",
        seslendiren: "Ece Dizdar",
        yayinevi: "Martı Yayınları",
        isbn: "978-605-XXX-XXX-V",
        fiyat: 42.50,
        benzerKitaplar: ["karanligin-icinden", "zaman-yolcusu", "gece-yarisi-kutuphanesi", "gelecek"]
    },
   "kurk-mantolu-madonna": {
    id: "kurk-mantolu-madonna",
    baslik: "Kürk Mantolu Madonna",
    yazar: "Sabahattin Ali",
    resim: "img/books/page1-330px-Kürk_Mantolu_Madonna.djvu.jpg",
    puan: 4.7,
    degerlendirmeSayisi: 312,
    aciklama: "Kürk Mantolu Madonna, Sabahattin Ali'nin kaleme aldığı, ilk olarak 1943 yılında yayımlanan ve Türk edebiyatının klasikleri arasında yer alan bir romandır.",
    ozet: "Kürk Mantolu Madonna, geçmişinde derin izler bırakan bir aşk hikâyesini kimseye anlatamayan Raif Efendi'nin, ölmeden kısa bir süre önce bir deftere yazdığı anılarını konu alır.<br><br>Romanın ana karakteri Raif Efendi, gençliğinde Almanya'ya resim öğrenimine gönderilmiştir. Berlin'de bir gün bir resim sergisinde kendi portresine benzeyen \"Kürk Mantolu Madonna\" adlı bir tablo görür ve tablonun sahibi ressam Maria Puder'e âşık olur. İkili arasındaki ilişki, kimlik, yabancılaşma, sevgi ve aldanma temaları etrafında gelişir.<br><br>Sabahattin Ali'nin ustalıkla işlediği bu aşk hikâyesi, insanın iç dünyasına dair derin çözümlemeleriyle dikkat çeker. Raif Efendi'nin yaşadığı duygusal yoğunluk ve sonrasında içine kapanarak geçirdiği yıllar, okuru derinden etkiler.<br><br>Roman, insan ilişkilerindeki yanlış anlamaların, iletişimsizliğin ve bunun sonucunda yaşanan pişmanlıkların yanı sıra, aşkın insanı değiştiren gücünü de gözler önüne serer.",
    kategori: "Roman, Klasik",
    sayfa: 160,
    sure: "6s 12dk",
    tarih: "1943 (İlk basım)",
    dil: "Türkçe",
    seslendiren: "Alper Sancar",
    yayinevi: "YKY (Yapı Kredi Yayınları)",
    isbn: "9789750802959",
    fiyat: 42.90,
    benzerKitaplar: ["icimizdeki-seytan", "yabanci", "serenad", "tutunamayanlar"]
},
    "hayat-bir-kullanim-kilavuzu": {
        id: "hayat-bir-kullanim-kilavuzu",
        baslik: "Hayat Bir Kullanım Kılavuzu",
        yazar: "Antonia Macaro",
        resim: "img/books/HayatKılavuzu.jpg",
        puan: 4.7,
        degerlendirmeSayisi: 192,
        aciklama: "Hayat Bir Kullanım Kılavuzu, büyük filozofların öğretilerinden yola çıkarak günlük hayatımızda uygulayabileceğimiz pratik bilgelik önerilerini sunan bir felsefe kitabıdır.",
        ozet: "Hayat Bir Kullanım Kılavuzu, felsefe ve psikoloji uzmanı Antonia Macaro'nun, büyük düşünürlerin hayata dair görüşlerini günlük yaşamda uygulanabilir hale getirdiği etkileyici bir çalışmadır.<br><br>Kitap, Stoacılık, Epikurosçuluk, Budizm gibi farklı felsefi ekollerin mutluluk, huzur ve anlamlı bir yaşam üzerine öğretilerini modern bir perspektifle ele alıyor. Yazar, bu kadim bilgelik kaynaklarını günümüz insanının karşılaştığı stres, kaygı ve anlam arayışı gibi sorunlara çözüm üretecek şekilde yorumluyor.<br><br>Her bölümde farklı bir filozofun yaklaşımını inceleyen eser, okuyucuya kendi felsefesini oluşturması için ilham veriyor ve somut uygulamalar sunuyor. Kitap, akademik bir metin olmaktan ziyade, herkesin anlayabileceği sade bir dil kullanıyor.<br><br>Hayat Bir Kullanım Kılavuzu, felsefenin günlük hayatta nasıl uygulanabileceğini göstermesiyle, sadece entelektüel bir okuma değil, aynı zamanda pratik bir yaşam rehberi sunuyor.",
        kategori: "Felsefe, Kişisel Gelişim",
        sayfa: 276,
        sure: "6s 30dk",
        tarih: "25 Ocak 2025",
        dil: "Türkçe",
        seslendiren: "Tilbe Saran",
        yayinevi: "Metis Yayınları",
        isbn: "978-605-XXX-XXX-W",
        fiyat: 38.75,
        benzerKitaplar: ["mutluluk-recetesi", "gece-yarisi-kutuphanesi", "sifirdan-zirveye", "yasam-kutuphanesi"]
    },
    "denizler-altinda-yirmi-bin-fersah": {
        id: "denizler-altinda-yirmi-bin-fersah",
        baslik: "Denizler Altında Yirmi Bin Fersah",
        yazar: "Jules Verne",
        resim: "img/books/denizin-alttında.jpg",
        puan: 4.8,
        degerlendirmeSayisi: 405,
        aciklama: "Denizler Altında Yirmi Bin Fersah, denizlerin derinliklerinde geçen, bilim ve macera dolu klasik bir Jules Verne eseridir.",
        ozet: "Denizler Altında Yirmi Bin Fersah, bilim kurgu türünün öncülerinden Jules Verne'in en ünlü eserlerinden biridir.<br><br>Roman, 1866 yılında dünya denizlerinde görülen gizemli bir deniz canavarının peşine düşen bir grup bilim insanının hikayesini anlatır. Profesör Aronnax, yardımcısı Conseil ve balina avcısı Ned Land, bu canavarı aramak için çıktıkları yolculukta, aslında bir canavar değil, Kaptan Nemo'nun komutasındaki gelişmiş bir denizaltı olan Nautilus ile karşılaşırlar.<br><br>Kaptan Nemo'nun rehberliğinde okyanusun derinliklerine inen ekip, deniz altındaki muhteşem manzaraları, egzotik canlıları ve batık hazineleri keşfederken, bir yandan da Nemo'nun karanlık geçmişi ve intikam hırsıyla yüzleşmek zorunda kalır.<br><br>Verne'in detaylı bilimsel açıklamaları ve zengin hayal gücüyle bezediği eser, hem bir macera romanı hem de gelecekteki teknolojik gelişmeleri öngören, vizyoner bir bilim kurgu klasiğidir.",
        kategori: "Klasikler, Macera",
        sayfa: 384,
        sure: "8s 50dk",
        tarih: "10 Aralık 2024",
        dil: "Türkçe",
        seslendiren: "Haluk Bilginer",
        yayinevi: "İş Bankası Kültür Yayınları",
        isbn: "978-605-XXX-XXX-X",
        fiyat: 35.50,
        benzerKitaplar: ["zaman-tuneli", "zaman-yolcusu", "sonsuz-kapilar", "gelecek"]
    },
    "mutluluk-recetesi": {
        id: "mutluluk-recetesi",
        baslik: "Mutluluk Reçetesi",
        yazar: "Özenay Özdinç",
        resim: "img/books/mutlulukreçetesi.jpg",
        puan: 4.1,
        degerlendirmeSayisi: 168,
        aciklama: "Mutluluk Reçetesi, pozitif psikoloji alanındaki güncel araştırmalara dayanarak, kalıcı mutluluğa ulaşmanın yollarını anlatan pratik bir kişisel gelişim kitabıdır.",
        ozet: "Mutluluk Reçetesi, psikolog ve yazar Özenay Özdinç'in pozitif psikoloji alanındaki deneyimlerini paylaştığı, mutluluğa giden yolda pratik adımlar sunan bir kişisel gelişim kitabıdır.<br><br>Kitap, mutluluğun genetik faktörler, yaşam koşulları ve bilinçli faaliyetler gibi farklı bileşenlerini bilimsel verilerle açıklarken, okuyucunun kontrol edebileceği faktörlere odaklanıyor. Yazar, minnettarlık, akış deneyimi, güçlü ilişkiler kurma, anlamlı hedefler belirleme gibi mutluluğu artıran uygulamaları günlük hayata nasıl entegre edebileceğimizi somut örneklerle anlatıyor.<br><br>Her bölümün sonunda yer alan alıştırmalar ve günlük pratikler, teorik bilgileri eyleme dönüştürmeye yardımcı oluyor. Kitap, mutluluğun geçici bir duygu değil, geliştirilebilir bir yaşam becerisi olduğu fikrini merkeze alıyor.<br><br>Özdinç'in samimi ve içten üslubu, karmaşık psikolojik kavramları herkesin anlayabileceği şekilde aktarmasını sağlarken, kitabı sadece bilgilendirici değil, aynı zamanda motive edici bir rehbere dönüştürüyor.",
        kategori: "Kişisel Gelişim, Psikoloji",
        sayfa: 248,
        sure: "5s 55dk",
        tarih: "5 Mart 2025",
        dil: "Türkçe",
        seslendiren: "Özge Özpirinçci",
        yayinevi: "Doğan Kitap",
        isbn: "978-605-XXX-XXX-Y",
        fiyat: 41.25,
        benzerKitaplar: ["hayat-bir-kullanim-kilavuzu", "sifirdan-zirveye", "yasam-kutuphanesi", "gece-yarisi-kutuphanesi"]
    },
    "gelecek": {
        id: "gelecek",
        baslik: "Gelecek",
        yazar: "Dmitry Glukhovsky",
        resim: "img/books/gelecek.jpg",
        puan: 4.5,
        degerlendirmeSayisi: 203,
        aciklama: "Gelecek, distopik bir dünyada geçen, totaliter bir rejime karşı direniş hareketini konu alan, sürükleyici bir bilim kurgu romanıdır.",
        ozet: "Gelecek, Dmitry Glukhovsky'nin Metro 2033 serisinin yazarı olarak tanınan Rus yazarın, yakın gelecekte geçen distopik romanıdır.<br><br>Kitap, teknolojik gelişmelerin ve politik kutuplaşmanın sonucunda ortaya çıkan totaliter bir rejim altında ezilen bir toplumu konu alıyor. Ana karakter Andrei, sistemin içinde yüksek bir konumda çalışırken, gizli bir direniş hareketine katılmak zorunda kalır ve gerçekle yalanın, sadakat ile ihanetin sınırlarında tehlikeli bir oyuna girişir.<br><br>Glukhovsky, gözetim toplumu, yapay zeka, dijital diktatörlük ve insan özgürlüğü gibi güncel temaları ustaca işlerken, karakterlerin içsel çatışmalarını ve ahlaki ikilemlerini derinlemesine inceliyor.<br><br>Gerilim dolu anlatımı, çarpıcı gelecek vizyonu ve düşündürücü felsefi sorgulamalarıyla Gelecek, sadece bir bilim kurgu romanı değil, aynı zamanda günümüz toplumuna tutulan bir ayna niteliğindedir.",
        kategori: "Bilim Kurgu, Distopya",
        sayfa: 368,
        sure: "8s 15dk",
        tarih: "18 Ocak 2025",
        dil: "Türkçe",
        seslendiren: "Erkan Kolçak Köstendil",
        yayinevi: "İthaki Yayınları",
        isbn: "978-605-XXX-XXX-Z",
        fiyat: 54.90,
        benzerKitaplar: ["karanligin-icinden", "zaman-tuneli", "yapay-zeka-cagi", "sessiz-ciglik"]
    },
    
    }

// Sayfayı kitap bilgilerine göre güncelleme
function updateBookDetails(id, ad) {
    
    let kitap = null;
    
    if (id && kitaplar[id]) {
        kitap = kitaplar[id];
    } else if (ad) {
        // Ad ile arama yapıyoruz
        const normalized = ad.toLowerCase().replace(/\s+/g, '-');
        Object.values(kitaplar).forEach(k => {
            if (k.baslik.toLowerCase().replace(/\s+/g, '-') === normalized) {
                kitap = k;
            }
        });
    }
    
    // Eğer kitap bulunamadıysa, varsayılan olarak gece-yarisi-kutuphanesi'ni göster
    if (!kitap) {
        console.warn('Kitap bulunamadı, varsayılan kitap gösteriliyor');
        kitap = kitaplar["gece-yarisi-kutuphanesi"];
       
        if (!kitap) {
            console.error('Varsayılan kitap da bulunamadı');
            return;
        }
    }
    
    // Başlık güncelleme
    document.title = `${kitap.baslik} - Hikayelet`;
    document.querySelector('.book-title').textContent = kitap.baslik;
    
    // Yazarı güncelleme
    document.querySelector('.book-author').textContent = `Yazan: ${kitap.yazar}`;
    
    // Resmi güncelleme
    if (document.querySelector('.book-cover img')) {
        document.querySelector('.book-cover img').src = kitap.resim;
        document.querySelector('.book-cover img').alt = kitap.baslik;
    }
    
    // Puanı güncelleme
    const starsElement = document.querySelector('.stars');
    if (starsElement) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(kitap.puan)) {
                starsHTML += '★';
            } else if (i - 0.5 <= kitap.puan) {
                starsHTML += '★';
            } else {
                starsHTML += '☆';
            }
        }
        starsElement.innerHTML = starsHTML;
    }
    
    // Değerlendirme sayısını güncelleme
    const ratingCountElement = document.querySelector('.rating-count');
    if (ratingCountElement) {
        ratingCountElement.textContent = `(${kitap.degerlendirmeSayisi} değerlendirme)`;
    }
    
    // Açıklamayı güncelleme
    const descriptionElement = document.querySelector('.book-description');
    if (descriptionElement) {
        descriptionElement.textContent = kitap.aciklama;
    }
    
    // Özeti güncelleme
    const summaryContent = document.querySelector('#summary');
    if (summaryContent) {
        const summaryTitle = summaryContent.querySelector('h3');
        if (summaryTitle) {
            summaryContent.innerHTML = `<h3>${summaryTitle.textContent}</h3>${kitap.ozet}`;
        }
    }
    
    // Meta bilgileri güncelleme
    const metaItems = document.querySelectorAll('.meta-item');
    if (metaItems.length > 0) {
        
        if (metaItems[0].querySelector('.meta-value')) {
            metaItems[0].querySelector('.meta-value').textContent = kitap.sure;
        }
        
        
        if (metaItems[1].querySelector('.meta-value')) {
            metaItems[1].querySelector('.meta-value').textContent = kitap.tarih;
        }
        
       
        if (metaItems[2].querySelector('.meta-value')) {
            metaItems[2].querySelector('.meta-value').textContent = kitap.dil;
        }
    }
    
    // Tab içeriğini güncelleme - Detaylar
    const detailsContent = document.querySelector('#details');
    if (detailsContent) {
        const detailsMeta = detailsContent.querySelector('.book-meta');
        if (detailsMeta) {
            const metaItems = detailsMeta.querySelectorAll('.meta-item');
            if (metaItems.length >= 8) {
                
                metaItems[0].querySelector('.meta-value').textContent = kitap.yazar;
                
                
                metaItems[4].querySelector('.meta-value').textContent = kitap.kategori;
                
                
                metaItems[3].querySelector('.meta-value').textContent = kitap.sayfa.toString();
                
                
                metaItems[5].querySelector('.meta-value').textContent = kitap.tarih;
                
                
                metaItems[7].querySelector('.meta-value').textContent = kitap.dil;
            }
        }
    }
    
    
    const bookActions = document.querySelector('.book-actions');
    if (bookActions) {
        // Önce mevcut fiyat bilgisini kontrol et ve varsa kaldır
        const existingPrice = document.querySelector('.book-price');
        if (existingPrice) {
            existingPrice.remove();
        }
        
        // Yeni fiyat bilgisini ekle
        const priceElement = document.createElement('div');
        priceElement.className = 'book-price';
        priceElement.innerHTML = `<span class="price-label">Fiyat: </span><span class="price-value">₺${kitap.fiyat.toFixed(2)}</span>`;
        priceElement.style.fontSize = '1.2rem';
        priceElement.style.fontWeight = 'bold';
        priceElement.style.marginBottom = '15px';
        priceElement.style.color = '#ff6600';
        
        // Book actions'dan önce ekle
        bookActions.parentNode.insertBefore(priceElement, bookActions);
    }
    
    
    updateSimilarBooks(kitap.benzerKitaplar);
    
   
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        const currentElement = breadcrumb.querySelector('.current');
        if (currentElement) {
            currentElement.textContent = kitap.baslik;
        }
    }
}

// Benzer kitapları güncelleme
function updateSimilarBooks(benzerKitapIdleri) {
    const relatedBooks = document.querySelector('.related-books .book-cards');
    if (relatedBooks && benzerKitapIdleri && benzerKitapIdleri.length > 0) {
        // Mevcut benzer kitapları temizle
        relatedBooks.innerHTML = '';
        
        // Yeni benzer kitapları ekle
        benzerKitapIdleri.forEach(id => {
            if (kitaplar[id]) {
                const kitap = kitaplar[id];
                const bookCard = document.createElement('div');
                bookCard.className = 'book-card';
                bookCard.innerHTML = `
                    <div class="book-img" style="background-image: url('${kitap.resim}')"></div>
                    <div class="book-info">
                        <h3>${kitap.baslik}</h3>
                        <p>${kitap.yazar}</p>
                        <p class="book-card-price">₺${kitap.fiyat.toFixed(2)}</p>
                        <a href="book-detail.html?id=${kitap.id}" class="btn btn-sm btn-primary">İncele</a>
                    </div>
                `;
                relatedBooks.appendChild(bookCard);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Tab sistemi için fonksiyon
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Tüm butonlardan active sınıfını kaldır
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Tüm içeriklerden active sınıfını kaldır
            tabContents.forEach(content => content.classList.remove('active'));

            // Tıklanan butona active sınıfını ekle
            this.classList.add('active');
            // İlgili içeriğe active sınıfını ekle
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Sesli örnek oynatıcı
    const playBtn = document.querySelector('.play-btn');
    const progressBar = document.querySelector('.progress');
    const timeDisplay = document.querySelector('.time');

    if (playBtn) {
        let isPlaying = false;

        playBtn.addEventListener('click', function() {
            if (isPlaying) {
                // Durdurma
                this.textContent = '►';
                isPlaying = false;
            } else {
                // Başlatma
                this.textContent = '❚❚';
                isPlaying = true;
                
                // Basit bir oynatma simülasyonu
                simulatePlayback();
            }
        });

        function simulatePlayback() {
            let progress = 30; // Başlangıç yüzdesi
            let currentTime = 88; // Başlangıç zamanı (saniye)
            const totalTime = 300; // Toplam süre (saniye)
            
            updateProgress(progress, currentTime, totalTime);
            
            if (isPlaying) {
                const interval = setInterval(() => {
                    if (!isPlaying) {
                        clearInterval(interval);
                        return;
                    }
                    
                    progress += 0.1;
                    currentTime += 0.3;
                    
                    if (progress >= 100 || currentTime >= totalTime) {
                        clearInterval(interval);
                        playBtn.textContent = '►';
                        isPlaying = false;
                        progress = 0;
                        currentTime = 0;
                    }
                    
                    updateProgress(progress, currentTime, totalTime);
                }, 300);
            }
        }

        function updateProgress(percent, current, total) {
            progressBar.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
        }
    }
});