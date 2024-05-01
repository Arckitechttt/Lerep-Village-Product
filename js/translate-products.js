function toggleLanguage(language) {

    // Get ID
    let home = document.getElementById("home");
    let abou = document.getElementById("abou");
    let prod = document.getElementById("prod");
    let gall = document.getElementById("gall");
    let cont = document.getElementById("cont");
    let cont1 = document.getElementById("cont1");
    let cont2 = document.getElementById("cont2");
    let cont3 = document.getElementById("cont3");
    let cont4 = document.getElementById("cont4");
    let prods = document.getElementById("prods");
    let coff = document.getElementById("coff");
    let ceng = document.getElementById("ceng");
    let jahe = document.getElementById("jahe");
    let aren = document.getElementById("aren");
    let taste = document.getElementById("taste");
    let textu = document.getElementById("textu");
    let varia = document.getElementById("varia");
    let dense = document.getElementById("dense");
    let humid = document.getElementById("humid");
    let method = document.getElementById("method");
    let taste1 = document.getElementById("taste1");
    let textu1 = document.getElementById("textu1");
    let varia1 = document.getElementById("varia1");
    let dense1 = document.getElementById("dense1");
    let humid1 = document.getElementById("humid1");
    let method1 = document.getElementById("method1");
    let taste2 = document.getElementById("taste2");
    let textu2 = document.getElementById("textu2");
    let varia2 = document.getElementById("varia2");
    let dense2 = document.getElementById("dense2");
    let humid2 = document.getElementById("humid2");
    let method2 = document.getElementById("method2");
    let tasteo = document.getElementById("tasteo");
    let textu3 = document.getElementById("textu3");
    let varia3 = document.getElementById("varia3");
    let dense3 = document.getElementById("dense3");
    let humid3 = document.getElementById("humid3");
    let method3 = document.getElementById("method3");
    let galcoff = document.getElementById("galcoff");
    let galceng = document.getElementById("galceng");
    let galjahe = document.getElementById("galjahe");
    let galaren = document.getElementById("galaren");
    let deskcoff = document.getElementById("deskcoff");
    let deskceng = document.getElementById("deskceng");
    let deskjahe = document.getElementById("deskjahe");
    let deskaren = document.getElementById("deskaren");
    let desccoff = document.getElementById("desccoff");
    let descceng = document.getElementById("descceng");
    let descjahe = document.getElementById("descjahe");
    let descaren = document.getElementById("descaren");
    let rasacoff = document.getElementById("rasacoff");
    let tekscoff = document.getElementById("tekscoff");
    let varicoff = document.getElementById("varicoff");
    let denscoff = document.getElementById("denscoff");
    let humicoff = document.getElementById("humicoff");
    let methcoff = document.getElementById("methcoff");
    let rasaceng = document.getElementById("rasaceng");
    let teksceng = document.getElementById("teksceng");
    let variceng = document.getElementById("variceng");
    let densceng = document.getElementById("densceng");
    let humiceng = document.getElementById("humiceng");
    let methceng = document.getElementById("methceng");
    let rasajahe = document.getElementById("rasajahe");
    let teksjahe = document.getElementById("teksjahe");
    let varijahe = document.getElementById("varijahe");
    let densjahe = document.getElementById("densjahe");
    let humijahe = document.getElementById("humijahe");
    let methjahe = document.getElementById("methjahe");
    let rasaaren = document.getElementById("rasaaren");
    let teksaren = document.getElementById("teksaren");
    let variaren = document.getElementById("variaren");
    let densaren = document.getElementById("densaren");
    let humiaren = document.getElementById("humiaren");
    let metharen = document.getElementById("metharen");
    let futerhome = document.getElementById("futerhome");
    let futerabou = document.getElementById("futerabou");
    let futerprod = document.getElementById("futerprod");
    let futergall = document.getElementById("futergall");
    let futercont = document.getElementById("futercont");
    let pages = document.getElementById("pages");
    let aboufut = document.getElementById("aboufut");
    let aboufutdet = document.getElementById("aboufutdet");
    let contfut = document.getElementById("contfut");
    let shopee1 = document.getElementById("shopee1");
    let shopee2 = document.getElementById("shopee2");
    let shopee3 = document.getElementById("shopee3");
    let shopee4 = document.getElementById("shopee4");

    if (language === "ind") {
        // Header
        home.innerHTML = "Beranda";
        abou.innerHTML = "Tentang Kami";
        prod.innerHTML = "Produk";
        gall.innerHTML = "Galeri";
        cont.innerHTML = "Hubungi Kami";
        prods.innerHTML = "Produk Kami";
        // End Header
        
        // Deskripsi Produk
        coff.innerHTML = "BIJI KOPI";
        ceng.innerHTML = "CENGKEH";
        jahe.innerHTML = "JAHE BUBUK";
        aren.innerHTML = "GULA AREN";
        deskcoff.innerHTML = "Deskripsi";
        deskceng.innerHTML = "Deskripsi";
        deskjahe.innerHTML = "Deskripsi";
        deskaren.innerHTML = "Deskripsi";
        desccoff.innerHTML = "Kami menghasilkan berbagai macam jenis Biji Kopi, seperti misalnya Arabika, Robusta, Excelsa, Excelsa Wine, dan lain sebagainya. Biji Kopi khas Indrokilo diproduksi dan diolah di area dataran tinggi pada ketinggian ±497 mdpl. Biji Kopi kami terkenal dengan kualitasnya yang tinggi dengan ciri-ciri aroma kopi yang harum, rasa yang halus dan seimbang, standar kebersihan dan keamanan yang tinggi, pemetikan buah secara manual / tradisional, pengeringan alami / tradisional, proses pemilahan produk yang sangat hati-hati, serta minim kecacatan produk. Kunjungi <a href='https://shopee.co.id' target='_blank' style='color: #67B7D1; font-weight: bolder;'><u>Toko Shopee</u></a> kami untuk melihat seluruh produk Biji Kopi kami.";
        descceng.innerHTML = "Cengkeh yang biasa kami hasilkan merupakan Cengkeh Zanzibar. Cengkeh khas Indrokilo diproduksi di area dataran tinggi pada ketinggian ±497 mdpl. Cengkeh kami terkenal dengan kualitasnya yang tinggi dengan ciri-ciri aroma bunga yang kuat dan harum, kandungan minyak yang tinggi, kelembapan yang optimal, serta minim kecacatan produk. Produk cengkeh kami merupakan produk bahan baku sehingga cocok untuk pabrik-pabrik yang membutuhkan bahan baku cengkeh sebagai komposisi produknya.";
        descjahe.innerHTML = "Jahe Bubuk yang biasa kami hasilkan berbahan dasar Jahe Gajah yang kemudian diolah hingga menjadi bubuk. Sebagai bahan dasar produk, Jahe Gajah diperoleh di area dataran tinggi pada ketinggian ±497 mdpl. Jahe Bubuk kami terkenal dengan kualitasnya yang tinggi dengan ciri-ciri aroma rempah-rempah yang kuat dan harum, rasa pedas, manis, dan hangat yang optimal, serta kemudahan konsumsinya.";
        descaren.innerHTML = "Gula Aren yang biasa kami hasilkan berbahan dasar Nira yang diambil dari Pohon Aren dengan cara menyadap batang dan bunganya untuk diambil Niranya. Gula Aren khas Indrokilo diproduksi di area dataran tinggi pada ketinggian ±497 mdpl. Gula Aren kami terkenal dengan kualitasnya yang tinggi dengan ciri-ciri teksturnya yang lembut dan halus, rasa karamel yang sesuai di lidah, tidak mengandung kontaminan, serta minim kecacatan produk.";
        galcoff.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galeri";
        galceng.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galeri";
        galjahe.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galeri";
        galaren.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galeri";
        shopee1.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Katalog Produk";
        shopee2.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Katalog Produk";
        shopee3.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Katalog Produk";
        shopee4.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Katalog Produk";
        cont1.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Hubungi Kami";
        cont2.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Hubungi Kami";
        cont3.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Hubungi Kami";
        cont4.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Hubungi Kami";
        // End Deskripsi Produk

        // Rincian Produk
        taste.innerHTML = "Rasa & Aroma";
        textu.innerHTML = "Tekstur";
        varia.innerHTML = "Varietas";
        dense.innerHTML = "Kepadatan";
        humid.innerHTML = "Kelembapan";
        method.innerHTML = "Pengolahan";
        taste1.innerHTML = "Rasa & Aroma";
        textu1.innerHTML = "Tekstur";
        varia1.innerHTML = "Varietas";
        dense1.innerHTML = "Kepadatan";
        humid1.innerHTML = "Kelembapan";
        method1.innerHTML = "Pengolahan";
        taste2.innerHTML = "Rasa & Aroma";
        textu2.innerHTML = "Tekstur";
        varia2.innerHTML = "Varietas";
        dense2.innerHTML = "Kepadatan";
        humid2.innerHTML = "Kelembapan";
        method2.innerHTML = "Pengolahan";
        tasteo.innerHTML = "Rasa";
        textu3.innerHTML = "Tekstur";
        varia3.innerHTML = "Varietas";
        dense3.innerHTML = "Kepadatan";
        humid3.innerHTML = "Kelembapan";
        method3.innerHTML = "Pengolahan";
        rasacoff.innerHTML = "Biji Kopi khas Indrokilo memiliki variasi rasa dan aroma yang beragam dan seimbang. Setiap biji kopi menghadirkan rasa dan aroma yang unik. Rasa yang terasa mencakup keasaman, alkohol <i>wine</i>, manis karamel, dan kehadiran rasa pahit. Sementara itu, aroma yang terdapat meliputi rempah-rempah, aroma <i>wine</i>, serta aroma kopi yang kuat dan harum.";
        tekscoff.innerHTML = "Biji Kopi khas Indrokilo memiliki tingkat kematangan yang baik dengan warna merah kecoklatan sampai coklat kehitaman. Selain itu, tekstur dari biji kopi tersebut memiliki kecacatan fisik dan retakan di bawah 5%, permukaan yang halus, serta relatif terasa keras dan tebal.";
        varicoff.innerHTML = "Terdapat banyak variasi dari jenis Biji Kopi yang dihasilkan dari proses pengolahan di Dusun Indrokilo, seperti misalnya Biji Kopi Arabika, Robusta, Luwak, Tupai, Excelsa, dan Excelsa Wine. Selain itu, untuk jenis Buah Kopi yang belum diolah terdapat Buah Kopi Arabika dan Robusta.";
        denscoff.innerHTML = "Biji Kopi khas Indrokilo memiliki kepadatan yang optimal sehingga biji kopi terasa tebal dan padat ketika digenggam serta memiliki ukuran yang optimal, yaitu sekitar 7 - 12 mm dalam ukuran panjangnya. Selain itu, biji kopi kami memiliki berat sekitar 12 - 27 gram per 100 bijinya.";
        humicoff.innerHTML = "Biji Kopi khas Indrokilo memiliki tingkat kelembapan / kadar air sekitar 9,5% hingga 11%. Dengan tingkat kelembapan tersebut, biji kopi kami tidak akan mudah busuk, berjamur, ataupun rapuh sehingga kualitasnya akan tetap terjaga untuk waktu yang lama.";
        methcoff.innerHTML = "Pengolahan biji kopi kami dilakukan dengan berbagai metode dengan tetap memperhatikan standar kebersihan dan tingkat kelembapan sehingga kualitas biji kopi kami tetap terjaga. Sebagian besar dari metode yang kami terapkan merupakan metode-metode alamiah tanpa campur tangan mesin.";
        rasaceng.innerHTML = "Cengkeh khas Indrokilo memiliki variasi rasa dan aroma yang beragam dan seimbang. Rasa yang terasa mencakup pedas, manis, dan hangat sehingga ketika digigit atau dikunyah, cengkeh tersebut akan memberikan sensasi panas dan manis yang khas di lidah. Sementara itu, aroma yang dikeluarkan berupa aroma bunga dan rempah-rempah.";
        teksceng.innerHTML = "Cengkeh khas Indrokilo memiliki tingkat kematangan yang baik dengan warna merah kecoklatan yang merata di seluruh permukaannya. Selain itu, tekstur dari cengkeh tersebut memiliki kecacatan fisik dan retakan di bawah 5%, permukaan yang halus, serta relatif terasa keras dan tebal.";
        variceng.innerHTML = "Hanya Terdapat satu variasi dari jenis Cengkeh yang diproduksi, yaitu Cengkeh Zanzibar yang merupakan jenis cengkeh dengan kualitas dan mutu terbaik.";
        densceng.innerHTML = "Cengkeh khas Indrokilo memiliki kepadatan yang optimal sehingga cengkeh terasa tebal, berat, dan padat ketika digenggam serta memiliki ukuran yang optimal, yaitu sekitar 1,7 - 2.8 cm dalam ukuran panjangnya. Selain itu, cengkeh kami memiliki massa jenis sekitar 0,4 - 0,9 g/cm³. Dengan demikian, kualitas minyak atsiri yang dihasilkan tentunya semakin baik.";
        humiceng.innerHTML = "Cengkeh khas Indrokilo memiliki tingkat kelembapan / kadar air sekitar 9,5% hingga 11%. Dengan tingkat kelembapan tersebut, cengkeh kami tidak akan mudah busuk, berjamur, ataupun rapuh sehingga kualitasnya akan tetap terjaga untuk waktu yang lama.";
        methceng.innerHTML = "Pengolahan cengkeh kami dilakukan dengan berbagai metode dengan tetap memperhatikan standar kebersihan dan tingkat kelembapan sehingga kualitas cengkeh kami tetap terjaga. Seluruh metode yang kami terapkan merupakan metode-metode alamiah tanpa campur tangan mesin dengan tetap memperhatikan berbagai faktor.";
        rasajahe.innerHTML = "Jahe Bubuk khas Indrokilo memiliki variasi rasa dan aroma yang beragam dan seimbang. Rasa yang terasa mencakup rasa pedas, manis, dan hangat yang sangat optimal. Sementara itu, aroma yang dikeluarkan berupa aroma rempah-rempah dan pedas.";
        teksjahe.innerHTML = "Jahe Bubuk khas Indrokilo memiliki permukaan yang halus dan lembut, ukuran butiran-butiran tidak terlalu besar, serta tidak ada gumpalan. Dengan demikian, produk Jahe Bubuk kami menjadi lebih mudah larut di dalam air.";
        varijahe.innerHTML = "Hanya terdapat satu variasi dari jenis Jahe Bubuk yang dihasilkan dari proses pengolahan di Dusun Indrokilo, yaitu Jahe Bubuk dengan bahan dasar Jahe Gajah.";
        densjahe.innerHTML = "Produk Jahe Bubuk kami memiliki tingkat kepadatan yang tinggi sehingga jumlah jahe yang dapat diisi dalam volume tertentu menjadi lebih banyak. Selain itu, dengan tingkat kepadatannya yang tinggi, produk kami mengandung lebih banyak serbuk / butiran-butiran jahe dan sedikit ruang kosong.";
        humijahe.innerHTML = "Produk Jahe Bubuk kami telah dikeringkan dengan baik dan seakurat mungkin sehingga kadar air di dalamnya cukup rendah. Dengan tingkat kelembapan yang rendah, produk kami menjadi tidak mudah ditumbuhi jamur ataupun mikroorganisme, memiliki masa simpan yang lebih panjang, serta tidak adanya butiran-butiran yang menggumpal.";
        methjahe.innerHTML = "Pengolahan Jahe Bubuk kami dilakukan dengan metode-metode alamiah tanpa campur tangan mesin sehingga kualitas alami dari produk Jahe Bubuk kami dapat tetap terjaga. Selain itu, dalam masa pengolahan, kami tetap memperhatikan standar-standar kebersihan dan keamanan sehingga kualitas produk menjadi lebih terjamin.";
        rasaaren.innerHTML = "Gula Aren khas Indrokilo memiliki variasi rasa alami yang kaya dan manis. Rasa manis yang dihasilkan lebih lembut dan alami dibandingkan dengan gula putih rafinasi. Produk kami memiliki konsistensi rasa yang seimbang yang berarti bahwa rasanya tidak terlalu manis ataupun terlalu pahit.";
        teksaren.innerHTML = "Gula Aren khas Indrokilo memiliki butiran yang halus dan lembut saat disentuh. Butirannya terasa halus di antara jari dan mudah larut saat digunakan dalam minuman atau makanan. Ketika disimpan dengan baik, gula aren tetap terpisah satu sama lain dan tidak membentuk gumpalan yang sulit dipecahkan.";
        variaren.innerHTML = "Hanya terdapat satu variasi dari jenis Gula Aren yang dihasilkan dari proses pengolahan di Dusun Indrokilo, yaitu Gula Aren dengan bahan dasar Nira Pohon Aren.";
        densaren.innerHTML = "Gula Aren khas Indrokilo memiliki kepadatan yang cukup tinggi sehingga tidak terlalu lembut atau rapuh. Hal tersebut berarti bahwa produk gula aren kami dapat dengan mudah dipegang, disimpan, dan digunakan tanpa risiko pecah atau hancur. Kepadatan yang tepat memberikan kestabilan struktur pada gula aren.";
        humiaren.innerHTML = "Gula Aren khas Indrokilo cenderung memiliki tekstur yang kering dan tidak lengket. Ketika dipegang, produk gula aren kami terasa kering dan tidak menggumpal. Kandungan air yang rendah dalam produk gula aren kami memastikan bahwa gula aren tetap dalam keadaan kering dan mudah diolah.";
        metharen.innerHTML = "Pengolahan produk gula aren kami dilakukan dengan berbagai metode dengan tetap memperhatikan standar kebersihan dan tingkat kelembapan sehingga kualitas gula aren kami tetap terjaga. Sebagian besar dari metode yang kami terapkan merupakan metode-metode alamiah tanpa campur tangan mesin dengan tetap memperhatikan berbagai faktor.";
        // End Rincian Produk
        
        // Footer
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Beranda";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> Tentang Kami";
        futerprod.innerHTML = "<span style='color: #A47C00'>•></span> Produk";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galeri";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Hubungi Kami";
        pages.innerHTML = "Halaman";
        aboufut.innerHTML = "Tentang Kami";
        aboufutdet.innerHTML = "KUB Sekar Wangi merupakan Komunitas Usaha Bersama / KUB yang berfokus terhadap usaha biji kopi, cengkeh, jahe bubuk, dan gula aren.";
        contfut.innerHTML = "Hubungi Kami";
        // End Footer
    }
    else {
        // Header
        home.innerHTML = "Home";
        abou.innerHTML = "About Us";
        prod.innerHTML = "Products";
        gall.innerHTML = "Galleries";
        cont.innerHTML = "Contact Us";
        prods.innerHTML = "Our Products";
        // End Header

        // Deskripsi Produk
        coff.innerHTML = "COFFEE BEANS";
        ceng.innerHTML = "CLOVES";
        jahe.innerHTML = "POWDERED GINGER";
        aren.innerHTML = "PALM SUGAR";
        deskcoff.innerHTML = "Description";
        deskceng.innerHTML = "Description";
        deskjahe.innerHTML = "Description";
        deskaren.innerHTML = "Description";
        desccoff.innerHTML = "We produce various types of Coffee Beans, such as Arabica, Robusta, Excelsa, Excelsa Wine, and others. Indrokilo's signature Coffee Beans are produced and processed in the highland area at an altitude of ±497 meters above sea level. Our Coffee Beans are famous for their high quality, characterized by a delightful coffee aroma, smooth and well-balanced taste, high cleanliness and safety standards, manual/traditional fruit picking, natural/traditional drying process, meticulous product sorting, and minimal defects. Visit our <a href='https://shopee.co.id' target='_blank' style='color: #67B7D1; font-weight: bolder;'><u>Shopee Store</u></a> to see our entire range of Coffee Bean products.";
        descceng.innerHTML = "The cloves we produce are Zanzibar cloves. Indrokilo's signature cloves are grown in highland areas at an altitude of approximately ±497 meters above sea level. Our cloves are known for their high quality, characterized by a strong and delightful floral aroma, high oil content, optimal moisture level, and minimal product defects. Our cloves are raw materials, making them suitable for factories that require cloves as an ingredient in their products.";
        descjahe.innerHTML = "The powdered ginger we produce is made from Elephant Ginger, which is then processed into powder form. As a raw material, Elephant Ginger is obtained from highland areas at an altitude of approximately ±497 meters above sea level. Our powdered ginger is known for its high quality, characterized by a strong and delightful spicy aroma, optimal spicy, sweet, and warm taste, and ease of consumption.";
        descaren.innerHTML = "The palm sugar we produce is made from the sap extracted from the Aren Tree by tapping its trunk and flowers to collect the sap. Indrokilo's palm sugar is produced in highland areas at an altitude of approximately ±497 meters above sea level. Our palm sugar is known for its high quality, characterized by a soft and smooth texture, a delightful caramel taste on the palate, free from contaminants, and minimal product defects.";
        galcoff.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galleries";
        galceng.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galleries";
        galjahe.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galleries";
        galaren.innerHTML = "<i class='bi bi-images'></i> &nbsp;Galleries";
        shopee1.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Catalogue";
        shopee2.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Catalogue";
        shopee3.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Catalogue";
        shopee4.innerHTML = "<img src='images/logoshopee.png'> &nbsp;Catalogue";
        cont1.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Contact Us";
        cont2.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Contact Us";
        cont3.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Contact Us";
        cont4.innerHTML = "<i class='fa fa-phone'></i> &nbsp;Contact Us";
        // End Deskripsi Produk

        // Rincian Produk
        taste.innerHTML = "Taste & Aroma";
        textu.innerHTML = "Texture";
        varia.innerHTML = "Variety";
        dense.innerHTML = "Density";
        humid.innerHTML = "Humidity";
        method.innerHTML = "Processing Methods";
        taste1.innerHTML = "Taste & Aroma";
        textu1.innerHTML = "Texture";
        varia1.innerHTML = "Variety";
        dense1.innerHTML = "Density";
        humid1.innerHTML = "Humidity";
        method1.innerHTML = "Processing Methods";
        taste2.innerHTML = "Taste & Aroma";
        textu2.innerHTML = "Texture";
        varia2.innerHTML = "Variety";
        dense2.innerHTML = "Density";
        humid2.innerHTML = "Humidity";
        method2.innerHTML = "Processing Methods";
        tasteo.innerHTML = "Taste";
        textu3.innerHTML = "Texture";
        varia3.innerHTML = "Variety";
        dense3.innerHTML = "Density";
        humid3.innerHTML = "Humidity";
        method3.innerHTML = "Processing Methods";
        rasacoff.innerHTML = "Indrokilo's signature coffee beans offer a diverse and well-balanced range of flavors and aromas. Each coffee bean presents a unique taste and aroma profile. The flavors that can be experienced include acidity, <i>wine</i>-like alcohol, sweet caramel, and a hint of bitterness. Meanwhile, the aromas encompass spices, <i>wine</i> notes, as well as a strong and fragrant coffee aroma.";
        tekscoff.innerHTML = "Indrokilo's signature coffee beans exhibit a desirable level of maturity with a color ranging from reddish-brown to dark brown. Furthermore, the texture of these coffee beans is characterized by a physical defect rate and cracks below 5%, a smooth surface, and a relatively firm and thick feel.";
        varicoff.innerHTML = "There are various types of coffee beans produced through the processing in Indrokilo Village, such as Arabica, Robusta, Civet, Squirrel, Excelsa, and Excelsa Wine coffee beans. Additionally, for unprocessed coffee fruit, there are Arabica and Robusta coffee fruits.";
        denscoff.innerHTML = "The coffee beans from Indrokilo Village have an optimal density, giving them a thick and compact feel when held. They also have an optimal size, ranging from approximately 7 to 12 mm in length. Additionally, our coffee beans have a weight of around 12 to 27 grams per 100 beans.";
        humicoff.innerHTML = "The signature coffee beans from Indrokilo Village have a moisture content ranging from approximately 9.5% to 11%. With this moisture level, our coffee beans are resistant to spoilage, mold, and brittleness, ensuring that their quality is preserved for a long period of time.";
        methcoff.innerHTML = "Our coffee beans are processed using various methods while adhering to cleanliness standards and maintaining the appropriate moisture level to ensure the quality of our coffee beans is preserved. The majority of the methods we employ are natural processes without the use of machines.";
        rasaceng.innerHTML = "Indrokilo's distinctive cloves offer a diverse and balanced range of flavors and aromas. The taste profile encompasses spiciness, sweetness, and warmth, delivering a unique sensation of heat and sweetness when bitten or chewed. As for the aroma, it exudes floral and spicy notes, creating an enticing olfactory experience.";
        teksceng.innerHTML = "Indrokilo's signature cloves exhibit a good level of maturity with a uniform reddish-brown color across their entire surface. Furthermore, the texture of these cloves is characterized by minimal physical defects and cracks, accounting for less than 5% of the total cloves. They have a smooth surface and a relatively firm and thick feel.";
        variceng.innerHTML = "There is only one variation of cloves produced, which is Zanzibar Clove, known for its highest quality and excellence.";
        densceng.innerHTML = "Indrokilo's distinctive cloves have an optimal density, resulting in a thick, heavy, and compact texture when held. They have an ideal size, typically ranging from 1.7 to 2.8 cm in length. Additionally, our cloves have a specific gravity or mass density of around 0.4 to 0.9 g/cm³. This indicates the production of high-quality essential oil with excellent properties.";
        humiceng.innerHTML = "Indrokilo's signature cloves have a moisture content ranging from 9.5% to 11%. With this moisture level, our cloves are resistant to spoilage, mold growth, and brittleness, ensuring that their quality is preserved for an extended period.";
        methceng.innerHTML = "Our cloves are processed using various methods while adhering to cleanliness standards and moisture levels to ensure the quality of our cloves is maintained. All of the methods we employ are natural, without any machine intervention, while considering various factors to achieve the desired results.";
        rasajahe.innerHTML = "Indrokilo's signature Ginger Powder offers a wide range of flavors and a well-balanced aroma. The taste profile includes a perfect blend of spiciness, sweetness, and warmth. It emits a spicy and aromatic fragrance, reminiscent of various spices.";
        teksjahe.innerHTML = "Indrokilo's Ginger Powder has a smooth and velvety texture, with grain size that is not too large and no clumps. This ensures easy solubility in water.";
        varijahe.innerHTML = "There is only one variation of Ginger Powder produced through the processing in Indrokilo, which is Ginger Powder made from Elephant Ginger.";
        densjahe.innerHTML = "Our Ginger Powder product has a high density, allowing a greater amount of ginger to be packed in a given volume. With its high density, our product contains more ginger powder grains and minimal empty space.";
        humijahe.innerHTML = "Our Ginger Powder product is thoroughly and carefully dried, resulting in a low moisture content. With low moisture content, our product is resistant to mold and microorganisms, has a longer shelf life, and avoids the formation of clumps.";
        methjahe.innerHTML = "The processing of our Ginger Powder is carried out using natural methods without machine intervention, ensuring the preservation of the product's natural quality. Throughout the processing, we adhere to hygiene and safety standards, guaranteeing the quality of our products.";
        rasaaren.innerHTML = "Indrokilo's signature Palm Sugar offers a variety of rich and natural flavors. The sweetness it provides is softer and more natural compared to refined white sugar. Our product maintains a balanced taste profile, ensuring it is not overly sweet or bitter.";
        teksaren.innerHTML = "Indrokilo's Palm Sugar has fine and smooth granules that feel soft to the touch. They easily dissolve when used in beverages or food preparations. When stored properly, our palm sugar remains separate and does not form clumps that are difficult to break apart.";
        variaren.innerHTML = "There is only one variation of Palm Sugar produced through the processing in Indrokilo, which is Palm Sugar made from the sap of the Aren Tree.";
        densaren.innerHTML = "Indrokilo's Palm Sugar has a sufficiently high density, making it neither too soft nor brittle. This means our palm sugar can be easily handled, stored, and used without the risk of breaking or crumbling. The appropriate density provides stability to the structure of the palm sugar.";
        humiaren.innerHTML = "Indrokilo's Palm Sugar tends to have a dry and non-sticky texture. When held, our palm sugar feels dry and does not clump together. The low moisture content in our palm sugar ensures that it remains dry and easy to handle.";
        metharen.innerHTML = "The processing of our palm sugar product is carried out using various methods while adhering to hygiene standards and controlling moisture levels to preserve the quality of our palm sugar. The majority of the methods we employ are natural methods without machine intervention, taking into account various factors.";
        // End Rincian Produk
        
        // Footer
        futerhome.innerHTML = "<span style='color: #D3D3D3'>•></span> Home";
        futerabou.innerHTML = "<span style='color: #D3D3D3'>•></span> About Us";
        futerprod.innerHTML = "<span style='color: #A47C00'>•></span> Products";
        futergall.innerHTML = "<span style='color: #D3D3D3'>•></span> Galleries";
        futercont.innerHTML = "<span style='color: #D3D3D3'>•></span> Contact Us";
        pages.innerHTML = "Pages";
        aboufut.innerHTML = "About Us";
        aboufutdet.innerHTML = "KUB Sekar Wangi is a joint business community / KUB that focuses on coffee beans, cloves, powdered ginger, and palm sugar";
        contfut.innerHTML = "Contact Us";
        // End Footer
    }
}