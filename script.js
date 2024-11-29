
document.getElementById('profile-toggle').addEventListener('click', function() {
    const menu = document.getElementById('profile');

    
    // Toggle the display property
    if (profile.style.display === 'none' || profile.style.display === '') {
        profile.style.display = 'contents'; // Show the menu
    } else {
        profile.style.display = 'none'; // Hide the menu
        
    }
});
document.getElementById('profile2-toggle').addEventListener('click', function() {
    const menu = document.getElementById('profile2');

    
    // Toggle the display property
    if (profile2.style.display === 'none' || profile2.style.display === '') {
        profile2.style.display = 'contents'; // Show the menu
    } else {
        profile2.style.display = 'none'; // Hide the menu
        
    }
});



let currentIndex = 0;
let autoSlideInterval;

const carouselImages = document.querySelector('.carousel-images');
const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function moveSlide(direction) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => moveSlide(1), 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialize carousel
updateCarousel();
startAutoSlide();

// Stop auto-slide when the user interacts with the carousel
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel').addEventListener('mouseleave', startAutoSlide);



