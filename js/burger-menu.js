let buttonMenu = document.querySelector(".menu-button");
let darkPage = document.querySelector(".dark-page");
let headerList = document.querySelector("#header-ul-menu");
let close = document.querySelector(".close-window");
let body = document.querySelector("body");
let headerListLi = document.querySelectorAll(".header__link");
buttonMenu.addEventListener("click", () => {
    headerListLi.forEach(elem => {
        elem.classList.add("dark-page-list-style");
    });
    headerList.classList.remove("display-none");
    headerList.classList.remove("header__list");
    headerList.classList.add("dark-page-list");
    darkPage.classList.remove("display-none");
    body.classList.add("overflow");
})

close.addEventListener("click", () => {
    headerListLi.forEach(elem => {
        elem.classList.remove("dark-page-list-style");
    });
    headerList.classList.add("header__list");
    headerList.classList.add("ul-display-none");
    darkPage.classList.add("display-none");
    headerList.classList.remove("dark-page-list");
    body.classList.remove("overflow");
})

headerListLi.forEach(elem => {
    elem.addEventListener("click", () => {
        headerListLi.forEach(elem => {
            elem.classList.remove("dark-page-list-style");
        });
        headerList.classList.add("header__list");
        headerList.classList.add("ul-display-none");
        darkPage.classList.add("display-none");
        headerList.classList.remove("dark-page-list");
        body.classList.remove("overflow");
    })
})