// Setting Text Bergerak 
const text = document.querySelector(".sec-text");

const textload = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Front End";
    }, 4000);
    setTimeout(() => {
        text.textContent = "UI/UX Desain";
    }, 8000);
}
textload();
setInterval(textload, 12000);




//Setting Menu Hamburger nav 
const checkmenu = document.getElementById('menu-check');

checkmenu.addEventListener('click', function () {
    let menuutama = document.querySelector('nav .menu');
    let pencarianutama = document.querySelector('nav .pencarian');
    menuutama.classList.toggle('active');
    pencarianutama.classList.toggle('active');
})


//Setting Menu Hamburger Media Social
const checkmenumedia = document.getElementById('check-media')
function menumedia() {
    const limedia = document.querySelectorAll('.head .images .mediasocial ul li');
    for (let i = 0; i < limedia.length; i++) {
        limedia[i].classList.toggle('ukurantutupmenumedia');
    }
}
checkmenumedia.addEventListener('click', menumedia);
