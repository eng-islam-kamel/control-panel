var nav = document.querySelector(".nav"),
    home = document.querySelector(".home"),
    list = document.querySelector(".list");

    list.onclick = function (){

    nav.classList.toggle("active");
    home.classList.toggle("active");

    }