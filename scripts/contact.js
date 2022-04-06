function lang_toggle(){
    let current_lang = document.documentElement.lang
    
    if (current_lang === 'en') {
        window.open("./ContactUs_fr.html", "_self")
    } else {
        window.open("./ContactUs.html", "_self")
    }
}