const tombol = document.querySelector('.menu-hamburger input');
const menuhamburger = document.querySelector('.nav-menu');
tombol.addEventListener('click', function () {
    menuhamburger.classList.toggle('slide');
});