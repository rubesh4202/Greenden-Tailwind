var menu = document.getElementById("menu_icon");

var sidenav = document.getElementById("side_nav");

var c = document.getElementById("close");

menu.addEventListener("click", function(){
    sidenav.style.right = 0;
})

c.addEventListener("click", function(){
    sidenav.style.right = "-30%";
})



var search = document.getElementById("input_search");

var product_container = document.getElementById("container");

var product = product_container.querySelectorAll("div");

search.addEventListener("keyup", function(){
    var enteredvalue = this.value.toUpperCase();

for (var count = 0; count < product.length; count++){
    var productname = product[count].querySelector("h2").textContent;

    if(productname.toUpperCase().includes(enteredvalue)){
        product[count].style.display = "block";
    }
    else{
        product[count].style.display = "none";
    }
    
}
})