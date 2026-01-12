function loadHeader() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);
}
loadHeader();

//Carousel
let counter = 0;

function initCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#prevBtn');

    if(!slide || images.length === 0) return;

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= images.length) counter = 0;
        slide.style.transform = `translateX(${-100 * counter}%)`;
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) counter = images.length - 1;
        slide.style.transform = `translateX(${-100 * counter}%)`;
    });

    setInterval(() => {
        nextBtn.click();
    }, 5000);
}

window.addEventListener('DOMContentLoaded', initCarousel);
