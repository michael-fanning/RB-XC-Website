function loadHeader() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);
}
loadHeader();

// Carousel Logic
let counter = 0;
let slideInterval;

function initCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#prevBtn');
  const dots = document.querySelectorAll('.dot'); // ADD THIS

    if(!slide || images.length === 0) return;

    function updateSlide() {
        slide.style.transform = `translateX(${-100 * counter}%)`;
        
        dots.forEach((dot, index) => {
            if(index === counter) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            counter = index;
            updateSlide();
            startTimer();
        });
    });

    function startTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextBtn.click();
        }, 5000);
    }

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= images.length) counter = 0;
        updateSlide();
        startTimer();
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) counter = images.length - 1;
        updateSlide();
        startTimer();
    });
    startTimer();
}

window.addEventListener('DOMContentLoaded', initCarousel);
