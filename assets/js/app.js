"use strict"

let slides = document.querySelectorAll('.imgCarroussel');
let index = 0;

function changeSlide() {
    if(index < 0){
        index = slides.length - 1;
    }else if(index>=slides.length){
        index=0;
    }

    slides.forEach( slide =>{
        slide.classList.remove('active');
    })

    slides[index].classList.add('active');
    index++;

}
setInterval(changeSlide, 4000)