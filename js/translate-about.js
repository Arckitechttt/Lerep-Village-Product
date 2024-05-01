function toggleLanguage(language) {

    // Get ID
    let home = document.getElementById("home");
    let abou = document.getElementById("abou");
    let prod = document.getElementById("prod");
    let gall = document.getElementById("gall");
    let cont = document.getElementById("cont");
    let abou6 = document.getElementById("abou6");
    let cultures = document.getElementById("cultures");
    let deskabou = document.getElementById("deskabou");
    let futerhome = document.getElementById("futerhome");
    let futerabou = document.getElementById("futerabou");
    let futerprod = document.getElementById("futerprod");
    let futergall = document.getElementById("futergall");
    let futercont = document.getElementById("futercont");
    let pages = document.getElementById("pages");
    let aboufut = document.getElementById("aboufut");
    let aboufutdet = document.getElementById("aboufutdet");
    let contfut = document.getElementById("contfut");
    let culttitle = document.getElementById("culttitle");
    let desccult = document.getElementById("desccult");

    if (language === "ind") {
        home.innerHTML = "Beranda";
        abou.innerHTML = "Tentang Kami";
        prod.innerHTML = "Produk";
        gall.innerHTML = "Galeri";
        cont.innerHTML = "Hubungi Kami";
        abou6.innerHTML = "Tentang Kami";
        cultures.innerHTML = "Budaya Indrokilo";
        deskabou.innerHTML = "<b>KUB Sekar Wangi</b> merupakan Komunitas Usaha Bersama / <b>KUB</b> yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren yang berkualitas tinggi. Produk-produk kami telah berhasil menarik minat banyak konsumen baik dalam skala Nasional maupun Internasional. <b>KUB Sekar Wangi</b> berlokasi di Dusun Indrokilo yang terletak di Desa Lerep, Kecamatan Ungaran Barat, Kabupaten Semarang, Jawa Tengah, Indonesia, tepatnya di area lereng Gunung Ungaran dengan ketinggian ±497 mdpl.";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Beranda";
        futerabou.innerHTML = "<span style='color: #A47C00'>•></span> Tentang Kami";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Produk";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galeri";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Hubungi Kami";
        pages.innerHTML = "Halaman";
        aboufut.innerHTML = "Tentang Kami";
        aboufutdet.innerHTML = "KUB Sekar Wangi merupakan Komunitas Usaha Bersama / KUB yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren.";
        contfut.innerHTML = "Hubungi Kami";
        culttitle.innerHTML = "Kebudayaan Lokal<br>Indrokilo<br><span style='font-weight: lighter; font-size: 16px; font-style: italic; color: #808080'><span style='color: black; font-weight: bolder'>-</span> <b>BOOKLET</b> <span style='color: black; font-weight: bolder'>-</span>";
        desccult.innerHTML = "Selain kekayaan alam, Dusun Indrokilo juga memiliki kekayaan budaya. Simak <span style='font-style: italic;'>booklet</span> berikut ini untuk mengetahui lebih lanjut.";
    }
    else {
        home.innerHTML = "Home";
        abou.innerHTML = "About Us";
        prod.innerHTML = "Products";
        gall.innerHTML = "Galleries";
        cont.innerHTML = "Contact Us";
        abou6.innerHTML = "About Us";
        cultures.innerHTML = "Indrokilo Cultures";
        deskabou.innerHTML = "<b>KUB Sekar Wangi</b> is a Joint Business Community / <b>KUB</b> that focuses on high-quality coffee beans, cloves, powdered ginger, and palm sugar. Our products have successfully attracted the interest of many customers both Nationally and Internationally. <b>KUB Sekar Wangi</b> is located in Indrokilo Hamlet that is located in Lerep Village, West Ungaran Subdistrict, Semarang Regency, Central Java, Indonesia. It is situated on the slopes of Mount Ungaran, at an altitude of ±497 masl.";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Home";
        futerabou.innerHTML = "<span style='color: #A47C00'>•></span> About Us";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Products";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galleries";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Contact Us";
        pages.innerHTML = "Pages";
        aboufut.innerHTML = "About Us";
        aboufutdet.innerHTML = "KUB Sekar Wangi is a joint business community / KUB that focuses on coffee beans, cloves, powdered ginger, and palm sugar";
        contfut.innerHTML = "Contact Us";
        culttitle.innerHTML = "Local Cultures<br>Indrokilo<br><span style='font-weight: lighter; font-size: 16px; font-style: italic; color: #808080'><span style='color: black; font-weight: bolder'>-</span> <b>BOOKLET</b> <span style='color: black; font-weight: bolder'>-</span>";
        desccult.innerHTML = "In addition to its natural resources, Dusun Indrokilo also boasts a rich cultural heritage. Please refer to the following <span style='font-style: italic;'>booklet</span> to learn more.";
    }
}