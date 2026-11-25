window.addEventListener('scroll', ()=>{

let scroll = window.pageYOffset;

document.querySelector('.h1').style.transform =
`translateY(${scroll*0.3}px)`;

document.querySelector('.h2').style.transform =
`translateY(${scroll*0.5}px)`;

document.querySelector('.h3').style.transform =
`translateY(${scroll*0.7}px)`;

});

const slides = document.querySelectorAll('.review-slide');
const dots = document.querySelectorAll('.dot');

if (slides.length) {

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove('active');
        dots[current].classList.remove('active');

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add('active');
        dots[current].classList.add('active');

    }, 5000);

}