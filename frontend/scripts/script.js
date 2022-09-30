// JavaScript Document
console.log("hi");
var menu_button = document.querySelector('header:first-child')
menu_button.addEventListener("click", menu_button_klik);

function menu_button_klik() {
    let menu_button = document.querySelector('header>ul')
    menu_button.classList.toggle('show')
}
menu_button_klik




