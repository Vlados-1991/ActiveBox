// $(function() {

//     let header = $("#header");
//     let intro = $("#intro");
//     let introH = intro.innerHeight();
//     let scrollPos = $(window).scrollTop();

//     $(window).on("scroll load resize", function(){
//         intro.innerHeight();
//         scrollPos = $(this).scrollTop();

//         if( scrollPos > introH) {
//             header.addClass("fixed");
//         } else {
//             header.removeClass("fixed");
//         }

//     })

    
// });

const header = document.querySelector("header");
const intro = document.querySelector("#intro");

function eventHandler() {
    const scrollPos = window.scrollY;
    const introH = intro.getBoundingClientRect().height;
    
    if (scrollPos > introH) {
        header.classList.add("fixed");

        return;
    }

    header.classList.remove("fixed");
}

window.addEventListener("scroll", eventHandler);
window.addEventListener("load", eventHandler);
window.addEventListener("resize", eventHandler);