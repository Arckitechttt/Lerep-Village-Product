function toggleLanguage(language) {

    // Get ID
    let home = document.getElementById("home");
    let abou = document.getElementById("abou");
    let prod = document.getElementById("prod");
    let gall = document.getElementById("gall");
    let cont = document.getElementById("cont");
    let seemore = document.getElementById("seemore");
    let seeproduct = document.getElementById("seeproduct");
    let coff = document.getElementById("coff");
    let dusu = document.getElementById("dusu");
    let descdusu = document.getElementById("descdusu");
    let abou1 = document.getElementById("abou1");
    let cont1 = document.getElementById("cont1");
    let abou2 = document.getElementById("abou2");
    let cont2 = document.getElementById("cont2");
    let abou3 = document.getElementById("abou3");
    let cont3 = document.getElementById("cont3");
    let abou4 = document.getElementById("abou4");
    let cont4 = document.getElementById("cont4");
    let abou5 = document.getElementById("abou5");
    let cont5 = document.getElementById("cont5");
    let cengk = document.getElementById("cengk");
    let milk = document.getElementById("milk");
    let prods = document.getElementById("prods");
    let prods1 = document.getElementById("prods1");
    let prods2 = document.getElementById("prods2");
    let prods3 = document.getElementById("prods3");
    let prods4 = document.getElementById("prods4");
    let detprods1 = document.getElementById("detprods1");
    let detprods2 = document.getElementById("detprods2");
    let detprods3 = document.getElementById("detprods3");
    let detprods4 = document.getElementById("detprods4");
    let details1 = document.getElementById("details1");
    let details2 = document.getElementById("details2");
    let details3 = document.getElementById("details3");
    let details4 = document.getElementById("details4");
    let chosee = document.getElementById("chosee");
    let penj = document.getElementById("penj");
    let client = document.getElementById("client");
    let pres = document.getElementById("pres");
    let contx1 = document.getElementById("contx1");
    let contx2 = document.getElementById("contx2");
    let contx3 = document.getElementById("contx3");
    let location = document.getElementById("location");
    let locatdet = document.getElementById("locatdet");
    let mdpl = document.getElementById("mdpl");
    let say = document.getElementById("say");
    let futerhome = document.getElementById("futerhome");
    let futerabou = document.getElementById("futerabou");
    let futerprod = document.getElementById("futerprod");
    let futergall = document.getElementById("futergall");
    let futercont = document.getElementById("futercont");
    let pages = document.getElementById("pages");
    let aboufut = document.getElementById("aboufut");
    let aboufutdet = document.getElementById("aboufutdet");
    let contfut = document.getElementById("contfut");
    let palm = document.getElementById("palm");
    let descmilk = document.getElementById("descmilk");
    let desccengk = document.getElementById("desccengk");
    let desccoff = document.getElementById("desccoff");
    let descpalm = document.getElementById("descpalm");
    let abou6 = document.getElementById("abou6");
    let deskabou = document.getElementById("deskabou");
    let galprod = document.getElementById("galprod");
    let galkopi = document.getElementById("galkopi");
    let galcengk = document.getElementById("galcengk");
    let galjahe = document.getElementById("galjahe");
    let galaren = document.getElementById("galaren");

    if (language === "ind") {
        home.innerHTML = "Beranda";
        abou.innerHTML = "Tentang Kami";
        prod.innerHTML = "Produk";
        gall.innerHTML = "Galeri";
        cont.innerHTML = "Hubungi Kami";
        dusu.innerHTML = "<img src='images/logokopi.png'> KUB Sekar Wangi";
        seemore.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Galeri";
        seeproduct.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Produk";
        coff.innerHTML = "<img src='images/kopi.png'> Biji Kopi";
        cengk.innerHTML = "<img src='images/cengkeh.png'> Cengkeh";
        milk.innerHTML = "<img src='images/jahebbk.png'> Jahe Bubuk";
        palm.innerHTML = "<img src='images/gulaaren.png'> Gula Aren";
        abou1.innerHTML = "Tentang Kami";
        cont1.innerHTML = "Hubungi Kami";
        abou2.innerHTML = "Tentang Kami";
        cont2.innerHTML = "Hubungi Kami";
        abou3.innerHTML = "Tentang Kami";
        cont3.innerHTML = "Hubungi Kami";
        abou4.innerHTML = "Tentang Kami";
        cont4.innerHTML = "Hubungi Kami";
        abou5.innerHTML = "Tentang Kami";
        cont5.innerHTML = "Hubungi Kami";
        chosee.innerHTML = "Pencapaian Kami";
        penj.innerHTML = "Penjualan";
        client.innerHTML = "Klien Puas";
        pres.innerHTML = "Prestasi";
        contx1.innerHTML = "Hubungi Kami";
        contx2.innerHTML = "Hubungi Kami";
        contx3.innerHTML = "Hubungi Kami";
        location.innerHTML = "Lokasi Kami";
        locatdet.innerHTML = "Dusun indrokilo, Indrakila, Lerep, Kecamatan Ungaran Barat, Kabupaten Semarang, Jawa Tengah 50519, Indonesia";
        mdpl.innerHTML = "Dusun Indrokilo &nbsp;<span style='color: #A47C00'>•</span>&nbsp; ±497 mdpl";
        say.innerHTML = "Apa Kata Mereka?";
        futerhome.innerHTML = "<span style='color: #A47C00'>•></span> Beranda";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> Tentang Kami";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Produk";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galeri";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Hubungi Kami";
        pages.innerHTML = "Halaman";
        aboufut.innerHTML = "Tentang Kami";
        aboufutdet.innerHTML = "KUB Sekar Wangi merupakan Komunitas Usaha Bersama / KUB yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren.";
        contfut.innerHTML = "Hubungi Kami";
        abou6.innerHTML = "Tentang Kami";
        prods.innerHTML = "Produk Kami";
        galprod.innerHTML = "Galeri Produk";
        galkopi.innerHTML = "BIJI KOPI<br>INDROKILO";
        galcengk.innerHTML = "CENGKEH<br>INDROKILO";
        galjahe.innerHTML = "JAHE BUBUK<br>INDROKILO";
        galaren.innerHTML = "GULA AREN<br>INDROKILO";
        prods1.innerHTML = "Biji Kopi<br>Indrokilo";
        prods2.innerHTML = "Cengkeh<br>Indrokilo";
        prods3.innerHTML = "Jahe Bubuk<br>Indrokilo";
        prods4.innerHTML = "Gula Aren<br>Indrokilo";
        details1.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Detail";
        details2.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Detail";
        details3.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Detail";
        details4.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Detail";
        detprods1.innerHTML = "Biji Kopi khas Indrokilo terkenal dengan rasanya yang halus dan seimbang, aroma kopi yang harum, serta pemetikan buah secara manual.";
        detprods2.innerHTML = "Cengkeh khas Indrokilo terkenal dengan aroma bunga yang kuat, kandungan minyak tinggi, kelembapan yang optimal, serta kecacatan rendah.";
        detprods3.innerHTML = "Jahe Bubuk khas Indrokilo terkenal dengan rasanya yang lembut dan halus, kaya akan nutrisi, aroma yang segar, serta standar kebersihan yang ketat.";
        detprods4.innerHTML = "Gula Aren khas Indrokilo terkenal dengan teksturnya yang lembut dan halus, rasa karamel yang sesuai, serta tidak mengandung kontaminan.";
        deskabou.innerHTML = "<b>KUB Sekar Wangi</b> merupakan <b>K</b>omunitas <b>U</b>saha <b>B</b>ersama dari Dusun Indrokilo yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren yang berkualitas tinggi. Produk-produk kami telah berhasil menarik minat banyak konsumen baik dalam skala Nasional maupun Internasional. <b>KUB Sekar Wangi</b> berlokasi di Dusun Indrokilo yang terletak di Desa Lerep, Kecamatan Ungaran Barat, Kabupaten Semarang, Jawa Tengah, Indonesia, tepatnya di area lereng Gunung Ungaran dengan ketinggian ±497 mdpl.";
        descdusu.innerHTML = "<b style='background-color: #A47C00'>&nbsp;KUB Sekar Wangi&nbsp;</b> merupakan <b>K</b>omunitas <b>U</b>saha <b>B</b>ersama yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren berkualitas tinggi.";
        desccoff.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Biji Kopi Indrokilo&nbsp;</b> terkenal dengan rasanya yang halus dan seimbang. Kami menyediakan jenis Kopi Arabika, Robusta, Luwak, Tupai, Excelsa, dan Excelsa Wine.";
        desccengk.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Cengkeh Indrokilo&nbsp;</b> terkenal dengan aroma bunga yang kuat, kelembapan yang optimal, serta kecacatan rendah. Kami menyediakan jenis Cengkeh Zanzibar.";
        descmilk.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Jahe Bubuk Indrokilo&nbsp;</b> terkenal dengan rasanya yang lembut dan segar dan aromanya yang segar. Bahan baku produk kami berasal dari Jahe Emprit.";
        descpalm.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Gula Aren Indrokilo&nbsp;</b> terkenal dengan rasa karamelnya yang sesuai di lidah serta teksturnya yang halus. Bahan baku produk kami berasal dari Pohon Aren.";
    }
    else {
        home.innerHTML = "Home";
        abou.innerHTML = "About Us";
        prod.innerHTML = "Products";
        gall.innerHTML = "Galleries";
        cont.innerHTML = "Contact Us";
        dusu.innerHTML = "<img src='images/logokopi.png'> KUB Sekar Wangi";
        seemore.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Galleries";
        seeproduct.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Products";
        coff.innerHTML = "<img src='images/kopi.png'> Coffee Beans";
        cengk.innerHTML = "<img src='images/cengkeh.png'> Cloves";
        milk.innerHTML = "<img src='images/jahebbk.png'> Powdered Ginger";
        palm.innerHTML = "<img src='images/gulaaren.png'> Palm Sugar";
        abou1.innerHTML = "About Us";
        cont1.innerHTML = "Contact Us";
        abou2.innerHTML = "About Us";
        cont2.innerHTML = "Contact Us";
        abou3.innerHTML = "About Us";
        cont3.innerHTML = "Contact Us";
        abou4.innerHTML = "About Us";
        cont4.innerHTML = "Contact Us";
        abou5.innerHTML = "About Us";
        cont5.innerHTML = "Contact Us";
        chosee.innerHTML = "Our Accomplishments";
        penj.innerHTML = "Sales";
        client.innerHTML = "Satisfied Clients";
        pres.innerHTML = "Achievements";
        contx1.innerHTML = "Contact Us";
        contx2.innerHTML = "Contact Us";
        contx3.innerHTML = "Contact Us";
        location.innerHTML = "Our Location";
        locatdet.innerHTML = "Indrokilo Hamlet, Indrakila, Lerep, West Ungaran Subdistrict, Semarang Regency, Central Java 50519, Indonesia";
        mdpl.innerHTML = "Indrokilo Hamlet &nbsp;<span style='color: #A47C00'>•</span>&nbsp; ±497 masl";
        say.innerHTML = "What They Say?";
        futerhome.innerHTML = "<span style='color: #A47C00'>•></span> Home";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> About Us";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Products";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galleries";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Contact Us";
        pages.innerHTML = "Pages";
        aboufut.innerHTML = "About Us";
        aboufutdet.innerHTML = "KUB Sekar Wangi is a joint business community / KUB that focuses on coffee beans, cloves, powdered ginger, and palm sugar";
        contfut.innerHTML = "Contact Us";
        abou6.innerHTML = "About Us";
        prods.innerHTML = "Our Products";
        galprod.innerHTML = "Products Galleries";
        galkopi.innerHTML = "COFFEE BEANS<br>INDROKILO";
        galcengk.innerHTML = "CLOVES<br>INDROKILO";
        galjahe.innerHTML = "POWDERED GINGER<br>INDROKILO";
        galaren.innerHTML = "PALM SUGAR<br>INDROKILO";
        prods1.innerHTML = "Coffee Beans<br>Indrokilo";
        prods2.innerHTML = "Cloves<br>Indrokilo";
        prods3.innerHTML = "Powdered Ginger<br>Indrokilo";
        prods4.innerHTML = "Palm Sugar<br>Indrokilo";
        details1.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Details";
        details2.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Details";
        details3.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Details";
        details4.innerHTML = "<i class='bi bi-eye-fill'></i> &nbsp;Details";
        detprods1.innerHTML = "Indrokilo's signature coffee beans are renowned for their smooth and well-balanced taste, delightful aroma, and meticulous hand-picking of the fruits.";
        detprods2.innerHTML = "Indrokilo's signature cloves are well-known for their strong floral aroma, high oil content, optimal moisture, and low defect rate.";
        detprods3.innerHTML = "Indrokilo's signature powdered ginger is renowned for its smooth and fine taste, rich in nutrients, fresh aroma, and strict cleanliness standards.";
        detprods4.innerHTML = "Indrokilo's signature palm sugar is famous for its smooth and fine texture, balanced caramel flavor, and free from contaminants.";
        deskabou.innerHTML = "<b>KUB Sekar Wangi</b> is a joint business community from Indrokilo Hamlet that focuses on high-quality coffee beans, cloves, powdered ginger, and palm sugar. Our products have successfully attracted the interest of many customers both Nationally and Internationally. <b>KUB Sekar Wangi</b> is located in Indrokilo Hamlet that is located in Lerep Village, West Ungaran Subdistrict, Semarang Regency, Central Java, Indonesia. It is situated on the slopes of Mount Ungaran, at an altitude of ±497 masl.";
        descdusu.innerHTML = "<b style='background-color: #A47C00'>&nbsp;KUB Sekar Wangi&nbsp;</b> is a Joint Business Community that focuses on high-quality businesses related to coffee beans, cloves, powdered ginger, and palm sugar.";
        desccoff.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Indrokilo Coffee Beans&nbsp;</b> is known for its smooth and well-balanced taste. We offer various types of coffee, such as Arabica, Robusta, Luwak, Tupai, Excelsa, and Excelsa Wine.";
        desccengk.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Indrokilo Cloves&nbsp;</b> is known for its strong floral aroma, optimal moisture, and low defects. We offer one type of Cloves, which is Zanzibar Cloves.";
        descmilk.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Indrokilo Powdered Ginger&nbsp;</b> is known for its smooth and refreshing taste, as well as its fresh aroma. The raw material for our product comes from Emprit Ginger.";
        descpalm.innerHTML = "<b style='background-color: #A47C00'>&nbsp;Indrokilo Palm Sugar&nbsp;</b> is known for its caramel flavor that perfectly suits the palate and its smooth texture. The raw material for our product comes from the Sugar Palm Tree.";
    }
}