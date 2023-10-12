var menuActivated = false;

function openCloseMenu() {
    if(menuActivated == false){
        menuActivated = true;
        document.getElementById("icona-home").src = "/Burger_2.png";
        document.getElementById("main-menu").style.display = "block";
        document.getElementById("main-menu-container").classList.add("menu-shown");
        document.getElementById("main-menu-container").classList.remove("menu-hidden");
        document.body.style.overflow= "hidden";
    }
    else {
        menuActivated = false;
        document.getElementById("icona-home").src = "/Burger_1.png";
        document.getElementById("main-menu").style.display = "none";
        document.getElementById("main-menu-container").classList.add("menu-hidden");
        document.getElementById("main-menu-container").classList.remove("menu-shown");
        document.body.style.overflow= "auto";
    }
}
