(function () {
    const slides = [
        '<img src="products/red_guitar_telecaster-min.png" alt="Гітара Telecaster">',
        '<img src="products/black_guitar_stratocaster-min.png" alt="Гітара Startocaster">',
        '<img src="products/black_guitar_les_paul-min.png" alt="Чорний Les Paul">',
        '<img src="products/acoustic_guitar-min.png" alt="Акустична гітара">',
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(".newproducts_container");
        let html = '';
        html = slides[currentSlide];
        const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
        html += slides[nextSlide];
        const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
        html += slides[next2Slide];
        const next3Slide = next2Slide + 1 < slides.length ? next2Slide + 1 : 0;
        html += slides[next3Slide];
        slideContainer.innerHTML = html;
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    const btnNext = document.querySelector(".slide-next"); //document.getElementById("slide-next");   
    btnNext.addEventListener("click", nextSlide);

    const btnPrev = document.querySelector(".slide-prev"); //document.getElementById("slide-prev"); 
    btnPrev.addEventListener("click", prevSlide);
})();