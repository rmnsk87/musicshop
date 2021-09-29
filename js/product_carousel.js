(function () {
    const slides = [
        '<div><img src="products/red_guitar_telecaster-min.png" alt="Гітара Telecaster"><h3 class="article">Гітара модель 1</h3><p class="newproducts_price">8000 грн.</p><p class="newproducts_btn"><button type="button" class="btn btn-default" data-toggle="modal" data-target="#ModalWindowBasketcase">В кошик</button></p></div>',
        '<div><img src="products/black_guitar_stratocaster-min.png" alt="Гітара Startocaster"><h3 class="article">Гітара модель 2</h3><p class="newproducts_price">6 000 грн.</p><p class="newproducts_btn"><button type="button" class="btn btn-default" data-toggle="modal" data-target="#ModalWindowBasketcase">В кошик</button></p></div>',
        '<div><img src="products/black_guitar_les_paul-min.png" alt="Чорний Les Paul"><h3 class="article">Гітара модель 4</h3><p class="newproducts_price">10 000 грн.</p><p class="newproducts_btn"><button type="button" class="btn btn-default" data-toggle="modal" data-target="#ModalWindowBasketcase">В кошик</button></p></div>',
        '<div><img src="products/acoustic_guitar-min.png" alt="Акустична гітара"><h3 class="article">Гітара модель 3</h3><p class="newproducts_price">4 200 грн.</p><p class="newproducts_btn"><button type="button" class="btn btn-default" data-toggle="modal" data-target="#ModalWindowBasketcase">В кошик</button></p></div>',
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(".newproducts_container");
        let html = '';

        if ((window.innerWidth < 607)) {

            html = slides[currentSlide];
            const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
            html += slides[nextSlide];
            slideContainer.innerHTML = html;

        } else {
            html = slides[currentSlide];
            const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
            html += slides[nextSlide];
            const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
            html += slides[next2Slide];
            const next3Slide = next2Slide + 1 < slides.length ? next2Slide + 1 : 0;
            html += slides[next3Slide];
            slideContainer.innerHTML = html;
        }
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

    const btnNext = document.getElementById("slide-next");
    btnNext.addEventListener("click", nextSlide);

    const btnPrev = document.getElementById("slide-prev");
    btnPrev.addEventListener("click", prevSlide);
})();
