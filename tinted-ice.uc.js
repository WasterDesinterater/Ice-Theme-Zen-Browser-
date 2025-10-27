function appMenu(){
    async function Stylist(appShadow,appDropdown){
        appShadow[0].setAttribute("style", "background:transparent !important; border:none !important;"); 
    }
    var appDropdown
    var appShadow
    appDropdown=document.getElementById("appMenu-popup");
    appShadow=appDropdown.shadowRoot.children;
    Stylist(appShadow,appDropdown);
}

document.getElementById("appMenu-popup").addEventListener("popupshowing",appMenu)
