const header = document.querySelector('.navbar')

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100){
        header.classList.add('navbarDark')
    }
    else {
        header.classList.remove('navbarDark')
    }
}
const slides = document.querySelectorAll('.carousel-bg img');

if(slides.length === 0){

    console.log('Nenhuma imagem encontrada');
}

const heroText = document.querySelector('.hero-text');

let current = 0;

/* TEMPO TOTAL DO LOOP */
const totalLoopTime = 35000;

/* 3 IMAGENS */
const slideTime = totalLoopTime / slides.length;


function updateSlides(){

    slides.forEach(slide => {

        slide.classList.remove('active');

    });

    slides[current].classList.add('active');
}

/* TROCAR SLIDE */

function nextSlide(){

    

    setTimeout(() => {

        current++;

        if(current >= slides.length){
            current = 0;
        }

        updateSlides();

    }, 800);
}

/* START */

updateSlides();

setInterval(nextSlide, slideTime);

/* =========================================================
   LOADING SCREEN
========================================================= */

window.addEventListener('load', () => {

    const loader = document.getElementById('loader');

    setTimeout(() => {

        loader.classList.add('hidden');

    }, 3200);

});