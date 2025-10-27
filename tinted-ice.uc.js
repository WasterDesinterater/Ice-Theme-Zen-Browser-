/*This function allows for the stylization of a shadow element within the application menu object. Without it the object would be a stylesheet unchangable, solid color; based on the color of the browser background*/
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
