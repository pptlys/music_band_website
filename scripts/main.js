const banner_list = 
[
    {
        "url" : "/images/banner_img_01.jpg",
        "description_en" : 
        "Founded in 1971 and located on 100 beautiful acres in rural New Hampshire, Apple Hill is recognized worldwide as a center for the teaching and performance of chamber music at the highest level.",
        "description_fr" :
        "Fondé en 1971 et situé sur 100 acres magnifiques dans le New Hampshire rural, Apple Hill est reconnu dans le monde entier comme un centre d'enseignement et d'interprétation de la musique de chambre au plus haut niveau."
    },
    {
        "url" : "/images/banner_img_02.jpg",
        "description_en" : 
        "Apple Hill celebrated our 50th year in 2021. Click the image to give today and support our next 50 years of music and community.",
        "description_fr" :
        "Apple Hill a célébré son 50e anniversaire en 2021. Cliquez sur l'image pour donner aujourd'hui et soutenir nos 50 prochaines années de musique et de communauté."
    },
    {
        "url" :"/images/banner_img_03.jpg",
        "description_en":
        "The Apple Hill String Quartet performs live and in-person this season. Click the image for info.",
        "description_fr":
        "Le Apple Hill String Quartet se produit en direct et en personne cette saison. Cliquez sur l'image pour plus d'informations."
    },
    {
        "url":"/images/banner_img_04.jpg",
        "description_en":
        "Apple Hill's resident musicians, based on our campus in New Hampshire, rehearse, perform, and teach chamber music year-round.",

        "description_fr":
        "Les musiciens résidents d'Apple Hill, basés sur notre campus dans le New Hampshire, répètent, jouent et enseignent la musique de chambre toute l'année."
    },
    {
        "url":"/images/banner_img_05.jpg",
        "description_en":
        "The Louise Shonk Kelley Concert Barn has been home to hundreds of Apple Hill concerts over the past 50 years. In 2020, we've shifted our concerts online.",
        "description_fr":
        "Le Louise Shonk Kelley Concert Barn a accueilli des centaines de concerts Apple Hill au cours des 50 dernières années. En 2020, nous avons déplacé nos concerts en ligne."
    }
]

let counter = 0
let pause = false


function lang_toggle(){
    let current_lang = document.documentElement.lang
    
    if (current_lang === 'en') {
        window.open("/index_fr.html", "_self")
    } else {
        window.open("/index.html", "_self")
    }
}

function rotate_banner(){

    document.getElementById("rotate-banner").addEventListener("mouseenter",
    function (event) {
        pause = true
    })

    document.getElementById("rotate-banner").addEventListener("mouseleave",
    function(event){
        pause = false
    })
    if (!pause){
        counter++;
         if (counter == banner_list.length) {
            counter = 0;
         }
         document.getElementById("rotate-img").src = banner_list[counter].url;
         if (document.documentElement.lang == "en"){
             document.getElementById("caption-text").innerHTML = banner_list[counter].description_en;
         } else {
            document.getElementById("caption-text").innerHTML = banner_list[counter].description_fr;
         }
    }

    setTimeout(rotate_banner, 5 * 1000);
    }




