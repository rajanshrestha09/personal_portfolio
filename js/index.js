const navbar = document.querySelector(".navbar");

function hamburgerClick(){
   if(navbar.style.display === "block") {
    navbar.style.display = "none"
   }else{
    navbar.style.display = "block"
   }
}