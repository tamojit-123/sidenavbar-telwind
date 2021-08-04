const sideBar = document.getElementById("mobile-nav");
const toggler = document.getElementById("mobile-toggler");
sideBar.style.transform = "translateX(-260px)";
let moved = true;
function sidebarHandler() {
    if (moved) {
        sideBar.style.transform = "translateX(0px)";
        moved = false;
    } else {
        sideBar.style.transform = "translateX(-260px)";
        moved = true;
    }
}
