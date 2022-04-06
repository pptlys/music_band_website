function lang_toggle(){
    let current_lang = document.documentElement.lang
    
    if (current_lang === 'en') {
        window.open("./gallery_fr.html", "_self")
    } else {
        window.open("./gallery_en.html", "_self")
    }
}