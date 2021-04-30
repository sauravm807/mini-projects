let burger = document.getElementById("burger");
let navBar = document.querySelector(".navBar");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".rightNav");
let line = document.querySelectorAll(".line");

let isActive = false;
burger.addEventListener("click", () => {
    navList.classList.toggle("v-class");
    rightNav.classList.toggle("v-class");
    navBar.classList.toggle("nav-height");
    if (!isActive) {
        line[0].style.transform = "rotate(45deg)";
        line[1].style.opacity = "0";
        line[2].style.transform = "rotate(-45deg)";
        isActive = true;
    } else {
        line[0].style.transform = "rotate(0deg)";
        line[1].style.opacity = "1";
        line[2].style.transform = "rotate(0deg)";
        isActive = false;
    }
})