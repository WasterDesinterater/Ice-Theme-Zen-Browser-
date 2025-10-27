/*This function allows for the stylization of a shadow element within the application menu object. Without it the object would be a stylesheet unchangable, solid color; based on the color of the browser background*/
function appMenu(){
    let appDropdown=document.getElementById("appMenu-popup");
    let appShadow=appDropdown.shadowRoot.children;
    appShadow[0].setAttribute("style", "background:transparent !important; border:none !important; border-radius:20px"); 
}
document.getElementById("appMenu-popup").addEventListener("popupshowing",appMenu)
