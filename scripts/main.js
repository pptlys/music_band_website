let lang_toggle = document.getElementById("lang-toggle")
let current_lang = document.documentElement.lang

lang_toggle.onclick = function(){
    if (current_lang === 'en') {
        window.open("/index_fr.html", "_self")
    } else {
        window.open("/index.html", "_self")
    }
}