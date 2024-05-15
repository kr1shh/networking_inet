document.addEventListener("DOMContentLoaded",()=>{
    const ham_icon = document.querySelector(".nav_container .ham_menu");
    const ham_els = document.querySelectorAll(".nav_container .ham_menu div");
    const nav_container = document.querySelector(".nav_container");
    const mob_menu = document.querySelector(".nav_container .mob_menu");

    ham_icon.addEventListener("click",()=>{
        ham_els.forEach(el=>{
            el.classList.toggle("open");
        })
        nav_container.classList.toggle("open");
        mob_menu.classList.toggle("open");
    })
})