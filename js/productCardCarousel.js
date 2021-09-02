const imageContainer = document.getElementById('imageContainer');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const width = 1202;
let currentIndex = 0;
const lastIndex = -1;
previous.setAttribute('disabled', 'disabled');
previous.addEventListener('click', scrollToPrevious);
next.addEventListener('click', scrollToNext);

function scrollToNext() {
    previous.removeAttribute('disabled');
    currentIndex--;
    scrollCarousel();
}

function scrollToPrevious() {
    next.removeAttribute('disabled');
    currentIndex++;
    scrollCarousel();
}

function scrollCarousel() {
    imageContainer.style.transform = `translateX(${currentIndex * width}px)`
    if (currentIndex === lastIndex) {
        next.setAttribute('disabled', 'disabled');
    }
    if (currentIndex === 0) {
        previous.setAttribute('disabled', 'disabled');
    }
}