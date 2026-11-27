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

    let current = 0;

if (slides.length) {

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
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
let startX = 0;

const reviewsSection = document.querySelector('.review-slider');

if (reviewsSection && slides.length) {
    let startX = 0;

    reviewsSection.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
    });

    reviewsSection.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].screenX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {

            slides[current].classList.remove('active');
            dots[current].classList.remove('active');

            if (diff > 0) {
                current = (current + 1) % slides.length;
            } else {
                current = (current - 1 + slides.length) % slides.length;
            }

            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }
    });
}