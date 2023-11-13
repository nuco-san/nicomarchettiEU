var menuActivated = false;

function openCloseMenu() {
    if(menuActivated == false){
        menuActivated = true;
        document.getElementById("mobile-main-menu").style.display = "block";
        document.getElementById("mobile-main-menu").classList.add("menu-shown");
        document.getElementById("mobile-main-menu").classList.remove("menu-hidden");
        document.body.style.overflow= "hidden";
    }
    else {
        menuActivated = false;
        document.getElementById("mobile-main-menu").classList.remove("menu-shown");
        document.getElementById("mobile-main-menu").classList.add("menu-hidden");
        document.body.style.overflow= "auto";
    }
}
