function toggleLanguage(language) {

    // Get ID
    let home = document.getElementById("home");
    let abou = document.getElementById("abou");
    let prod = document.getElementById("prod");
    let gall = document.getElementById("gall");
    let cont = document.getElementById("cont");
    let galbijkop = document.getElementById("galbijkop");
    let titlegal = document.getElementById("titlegal");
    let galut = document.getElementById("galut");
    let contus = document.getElementById("contus");
    let futerhome = document.getElementById("futerhome");
    let futerabou = document.getElementById("futerabou");
    let futerprod = document.getElementById("futerprod");
    let futergall = document.getElementById("futergall");
    let futercont = document.getElementById("futercont");
    let pages = document.getElementById("pages");
    let aboufut = document.getElementById("aboufut");
    let aboufutdet = document.getElementById("aboufutdet");
    let contfut = document.getElementById("contfut");

    if (language === "ind") {
        home.innerHTML = "Beranda";
        abou.innerHTML = "Tentang Kami";
        prod.innerHTML = "Produk";
        gall.innerHTML = "Galeri";
        cont.innerHTML = "Hubungi Kami";
        galbijkop.innerHTML = "GULA AREN";
        titlegal.innerHTML = "<i class='bi bi-images' aria-hidden='true'></i> &nbsp;GALERI";
        galut.innerHTML = "<i class='bi bi-caret-left-fill'></i> &nbsp;Kembali";
        contus.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Hubungi Kami";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Beranda";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> Tentang Kami";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Produk";
        futergall.innerHTML = "<span style='color: #A47C00'>•></span> Galeri";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Hubungi Kami";
        pages.innerHTML = "Halaman";
        aboufut.innerHTML = "Tentang Kami";
        aboufutdet.innerHTML = "KUB Sekar Wangi merupakan Komunitas Usaha Bersama / KUB yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren.";
        contfut.innerHTML = "Hubungi Kami";
    }
    else {
        home.innerHTML = "Home";
        abou.innerHTML = "About Us";
        prod.innerHTML = "Products";
        gall.innerHTML = "Galleries";
        cont.innerHTML = "Contact Us";
        galbijkop.innerHTML = "PALM SUGAR";
        titlegal.innerHTML = "<i class='bi bi-images' aria-hidden='true'></i> &nbsp;GALLERY";
        galut.innerHTML = "<i class='bi bi-caret-left-fill'></i> &nbsp;Back";
        contus.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Contact Us";
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Home";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> About Us";
        futerprod.innerHTML = "<span style='color: #D3D3D3'>•></span> Products";
        futergall.innerHTML = "<span style='color: #A47C00'>•></span> Galleries";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Contact Us";
        pages.innerHTML = "Pages";
        aboufut.innerHTML = "About Us";
        aboufutdet.innerHTML = "KUB Sekar Wangi is a joint business community / KUB that focuses on coffee beans, cloves, powdered ginger, and palm sugar";
        contfut.innerHTML = "Contact Us";
    }
}