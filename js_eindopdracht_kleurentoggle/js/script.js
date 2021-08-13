//toggle aanmaken voor uitklappen menu als gebruiker er op klikt
const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham-btn");

const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("menuOpen");
};
const attachEventToToggleMenu = () => {
    const ham = document.querySelector(".ham-btn");
    ham.addEventListener("click", () => toggleMenu());
};

attachEventToToggleMenu();

//menu dichtklappen na klikken op kleur
const menuLinks = document.querySelectorAll("#menu .menuLink");

const menuLinkOnClick = () => {
    menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", toggleMenu);
    });
};

menuLinkOnClick();

//hoveren mouse in en uitklappen
const menuClose = () => {
    menu.classList.remove("menuOpen");   
};
const menuOpen = () => {
    menu.classList.add("menuOpen");  
};

const hamburgerOnHover = () => {
    ham.addEventListener("mouseover", menuOpen);
    ham.addEventListener("mouseout", menuClose);
};
const menuOnHover = () => {
    menu.addEventListener("mouseover", menuOpen);
    menu.addEventListener("mouseout", menuClose);
};

hamburgerOnHover();
menuOnHover();

//achtergrond kleur veranderen en tekstkleur verschijnen, deze manier uiteindelijk gedaan ipv classList.remove(alle classes) en classList.add

const body = document.querySelector(".body");
const text = document.querySelector(".colorText");

//white
const changeBackgroundToWhite = () => {
    document.body.style.backgroundColor = "white";
    text.textContent = "white";
}

const attachEventTochangeBackgroundToWhite = () => {
    const menuItemWhite = document.getElementById("menuItem-white");
    menuItemWhite.addEventListener("click", () => changeBackgroundToWhite());
}
attachEventTochangeBackgroundToWhite();

//red
const changeBackgroundToRed = () => {
    document.body.style.backgroundColor = "red";
    text.textContent = "red";
}

const attachEventTochangeBackgroundToRed = () => {
    const menuItemRed = document.getElementById("menuItem-red");
    menuItemRed.addEventListener("click", () => changeBackgroundToRed());
}
attachEventTochangeBackgroundToRed();

//orange
const changeBackgroundToOrange = () => {
    document.body.style.backgroundColor = "orange";
    text.textContent = "orange";

}

const attachEventTochangeBackgroundToOrange = () => {
    const menuItemOrange = document.getElementById("menuItem-orange");
    menuItemOrange.addEventListener("click", () => changeBackgroundToOrange());
}
attachEventTochangeBackgroundToOrange();

//purple
const changeBackgroundToPurple = () => {
    document.body.style.backgroundColor = "purple";
    text.textContent = "purple";
}

const attachEventTochangeBackgroundToPurple = () => {
    const menuItemPurple = document.getElementById("menuItem-purple");
    menuItemPurple.addEventListener("click", () => changeBackgroundToPurple());
}
attachEventTochangeBackgroundToPurple();

//green
const changeBackgroundToGreen = () => {
    document.body.style.backgroundColor = "green";
    text.textContent = "green";
}

const attachEventTochangeBackgroundToGreen = () => {
    const menuItemGreen = document.getElementById("menuItem-green");
    menuItemGreen.addEventListener("click", () => changeBackgroundToGreen());
}
attachEventTochangeBackgroundToGreen();

//keyboard keyDown om achtergrond te veranderen! white = 0, numpad niet gedaan (met keyCode makkelijker)
//key ipv keyCode = deprecated!!
const checkKeyPressDown = () => {
    document.addEventListener("keydown", function(e) {
        let key = e.key;
        if (e.key === "0") {
            changeBackgroundToWhite();
        } else if (e.key === "1") {
            changeBackgroundToRed();
        } else if (e.key === "2") {
            changeBackgroundToOrange();
        } else if (e.key === "3") {
            changeBackgroundToPurple();
        } else if (e.key === "4") {
            changeBackgroundToGreen();
        }
        menuClose();
    }); 
};

checkKeyPressDown();



















