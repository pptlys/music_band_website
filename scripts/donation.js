function lang_toggle(){
    let current_lang = document.documentElement.lang;
    
    if (current_lang === 'en') {
        window.open("./donation_fr.html", "_self");
    } else {
        window.open("./donation_en.html", "_self");
    }
}

document.getElementById("firstname").addEventListener("change", function(event){
    let firstName = document.getElementById("firstname").value;
    localStorage.setItem("firstName", firstName);
})

document.getElementById("lastname").addEventListener("change", function(event){
    let firstName = document.getElementById("lastname").value;
    localStorage.setItem("lastName", firstName);
})

function loadCache(){
    if(localStorage.getItem("firstName")){
        let firstName = localStorage.getItem("firstName");
        document.getElementById("firstname").value = firstName;
    }

    if(localStorage.getItem("lastName")){
        let lastName = localStorage.getItem("lastName");
        document.getElementById("lastname").value = lastName;
    }

}

