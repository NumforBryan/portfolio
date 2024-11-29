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

function moveSlide(direction) {
    const carouselImages2 = document.querySelector('.carousel-images2');
    const totalSlides = document.querySelectorAll('.carousel-images2 img').length;
    const indicators = document.querySelectorAll('.indicator');

    currentIndex += direction;

    // Loop back if at the start or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100;
    carouselImages2.style.transform = `translateX(${translateX}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}