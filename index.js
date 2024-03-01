var menu = document.getElementById("menu_icon");

var sidenav = document.getElementById("side_nav");

var c = document.getElementById("close");

menu.addEventListener("click", function(){
    sidenav.style.right = 0;
})

c.addEventListener("click", function(){
    sidenav.style.right = "-30%";
})