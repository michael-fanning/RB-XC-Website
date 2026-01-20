function loadHeader() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);
}
loadHeader();

function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
}
loadFooter();;



let counter = 0;
let slideInterval;

function initCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#prevBtn');
  const dots = document.querySelectorAll('.dot');

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

function handleDropdown(selectElement) {
    const url = selectElement.value;
    if (url === "none") {
        alert("No meet was held in 2020.");
        selectElement.selectedIndex = 0;
    } else if (url) {
        window.open(url, '_blank');
        selectElement.selectedIndex = 0;
    }
}

window.addEventListener('DOMContentLoaded', initCarousel);
