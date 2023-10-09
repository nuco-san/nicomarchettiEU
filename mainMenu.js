var menuActivated = false;

function openCloseMenu() {
    if(menuActivated == false){
        menuActivated = true;
        document.getElementById("icona-home").src = "/Burger_2.png";
        document.getElementById("main-menu").style.display = "block";
        document.getElementById("main-menu-container").style.display = "block"
        document.getElementById("main-menu-container").style.backgroundColor = "#de4053";
        document.body.style.overflow= "hidden";
    }
    else {
        menuActivated = false;
        document.getElementById("icona-home").src = "/Burger_1.png";
        document.getElementById("main-menu").style.display = "none";
        document.getElementById("main-menu-container").style.display = "none"
        document.getElementById("main-menu-container").style.backgroundColor = "rgba(0,0,0,0)";
        document.body.style.overflow= "auto";
    }
}
