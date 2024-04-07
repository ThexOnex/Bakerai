
document.addEventListener("DOMContentLoaded", function(){
    let menu = document.getElementById("navbarMenu");
    let toggler = document.getElementById("nav-toggle");

    let open = document.querySelector(".nav__menu");
    let close = document.querySelector(".nav__close");

    toggler.addEventListener("click", function() {
        if (menu.style.opacity == 1){
            menu.style.opacity = 0;
            close.style.opacity = 0;
            open.style.opacity = 1;
        } else {
            menu.style.opacity = 1;
            close.style.opacity = 1;
            open.style.opacity = 0;
        }
    })

    let hovering = document.getElementById("navbarMenu");
    hovering.addEventListener("mouseover", function() {
        hovering.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    })
    hovering.addEventListener("mouseout", function() {
        hovering.style.backgroundColor = "rgba(0, 0, 0, 0)";
    })
})
let score = 0;
let view = document.getElementById("view");
function change_font(select) {
    let btn = document.querySelector("."+select);
    if (btn.innerHTML == "Add"){
        btn.innerHTML = '<i class="ri-check-double-line"></i>';
        score++;
        view.innerHTML = `view (${score})`;
    } else {
        btn.innerHTML = "Add"
        score--;
        view.innerHTML = `view (${score})`;

    }
}

let cols = document.querySelectorAll(".column");
window.addEventListener("scroll", scrolled);

// scrolled();

// var nav_bgs = document.querySelectorAll(".nav__bar");
// console.log(nav_bgs);

// var body = document.querySelector("body");

// function scrolled() {
//     const trigger = window.innerHeight / 5 * 4;

//     cols.forEach(box => {
//         const boxtop = box.getBoundingClientRect().top;

//         if (boxtop < trigger) {
//             body.style.opacity = 0;
//         } else {
//             body.style.opacity = 1;
//         }
//     });
// }

