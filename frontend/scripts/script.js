// JavaScript Document
var menu_button = document.querySelector('header:first-child')
menu_button.addEventListener("click", menu_button_klik);

function menu_button_klik() {
    let menu_button = document.querySelector('header>ul')
    menu_button.classList.toggle('show')
}
menu_button_klik







var austringer_button = document.querySelector('.austringer')
austringer_button.addEventListener("click", austringer_stuf);

function austringer_stuf() {
    let austringer_button = document.querySelector('section>:nth-child(n+4)>li>section>section')
    austringer_button.classList.toggle('visable')
}

austringer_stuf


