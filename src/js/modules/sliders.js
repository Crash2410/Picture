const slider = ({
    slidesSelector,
    dir,
    prevArrow,
    nextArrow,
    time
}) => {
    const slides = document.querySelectorAll(slidesSelector);


    let slideIndex = 1,
        paused = false;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prev = document.querySelector(prevArrow),
            next = document.querySelector(nextArrow);


        next.addEventListener('click', () => {
            plusSlides(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });

        prev.addEventListener('click', () => {
            plusSlides(-1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
        });


    } catch (error) {}

    function autoPlaySliders(time) {
        if (dir == 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.add('fadeInUp');
            }, time);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, time);
        }
    }
    autoPlaySliders(time);

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slides[0].parentNode.addEventListener('mouseleave', () => {
        autoPlaySliders(time);
    });


};

export default slider;