let currentIndex = 0;

function moveSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-images img').length;

    currentIndex += direction;

    // Loop back if at the start or end
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
}
