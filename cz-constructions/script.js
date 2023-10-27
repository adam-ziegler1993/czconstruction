
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slider .slide');
    const totalSlides = slides.length;

    const changeSlide = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[currentSlide].classList.add('active');

        currentSlide = (currentSlide + 1) % totalSlides;
    };

    // Slide change every 4 seconds
    setInterval(changeSlide, 4000);
});

//Responsive menu collapse into hamburger menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var icon = this.querySelector('.fa');
    var leftMenu = document.querySelectorAll('nav ul')[0];
    var rightMenu = document.querySelectorAll('nav ul')[1];

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // "X" icon
        leftMenu.style.display = 'block';
        rightMenu.style.display = 'block';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars'); // Hamburger icon
        leftMenu.style.display = 'none';
        rightMenu.style.display = 'none';
    }
});

