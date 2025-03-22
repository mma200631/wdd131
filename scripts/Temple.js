document.addEventListener("DOMContentLoaded" , function(){

    const menuToggle=document.getElementById("menu-toggle");
    const navMenu=document.getElementById("nav-menu");

    menuToggle.addEventListener("click" , function(){
        navMenu.classList.toggle("active");

        if(navMenu.classList.contains("active")){
            menuToggle.innerHTML= "&#10006;"
        }
        else{
            menuToggle.innerHTML= "&#9776;";
        }
    })

    // Footer date updates
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
});
