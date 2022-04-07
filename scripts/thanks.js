function lang_toggle(){
    let current_lang = document.documentElement.lang
    
    if (current_lang === 'en') {
        window.open("./thankyou_fr.html", "_self")
    } else {
        window.open("./thankyou_en.html", "_self")
    }
}