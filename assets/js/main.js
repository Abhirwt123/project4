const menuIcon =document.querySelector(".fa-bars");
const menuItems =document.querySelector(".mobile_menu_items ");
const closeMenu =document.querySelector(".fa-x");
// open menu
menuIcon.addEventListener("click",()=>{
    menuItems.style.display="block" ;
    menuItems.style.left="0rem";
})

// close menu

closeMenu.addEventListener("click",()=>{
    menuItems.style.display="none" ;
    enableScroll()
})

let count=0;
menuIcon.addEventListener("click", () => {
    count++;
    if (count == 1) {
        disableScroll();
    } else {
        enableScroll();
        count = 0;
    }
});
// when the menu open then the scroll will be disable
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
        // if any scroll is attempted, set this to the previous value
        (window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        });
}
// when menu close scroll will be enable
function enableScroll() {
    window.onscroll = function () { };
}