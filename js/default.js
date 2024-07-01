console.log('DOSTUPNE METODY:');
console.log('- initHeroCarousel ()');
console.log('- initReferenceCarousel ()');
console.log('- destroyHeroCarousel ()');
console.log('- destroyReferenceCarousel ()');

let carousels = {};
let heroCarouselParams = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    slidesPerGroup: 1, 
    spaceBetween: 24,
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            slidesPerGroup: 2          
        },
        1280: {
            slidesPerView: 3.5,
            slidesPerGroup: 3     
        },       
        1536: {
            slidesPerView: 4.5,
            slidesPerGroup: 4
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    pagination: false
};
let referenceCarouselParams = {
    direction: 'horizontal',
    slidesPerView: 1.5,
    slidesPerGroup: 1, 
    spaceBetween: 24,
    breakpoints: {
        1280: {
            slidesPerView: 2.5,
            slidesPerGroup: 2          
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    pagination: false
};


document.addEventListener("DOMContentLoaded", function() 
{ // ON LOAD

    initHeroCarousel();
    initReferenceCarousel();

    // some efects
    counter();
    smoothAnchorScroll();
    scrollSpy();

});




let scrollspy_offset = 80;

/**
 * ScrollSpy
 */
function scrollSpy()
{
    const sections = document.querySelectorAll('section, header, footer');
    const navLi = document.querySelectorAll('#menu nav ul li');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            let scrollspy_offset2 = scrollspy_offset; 

            if (section.getAttribute("id")) {
                scrollspy_offset2 = document.querySelector('#menu a[href="#'+section.getAttribute("id")+'"]').getAttribute("data-offset")  ?? scrollspy_offset;
            }

            if (pageYOffset >= sectionTop - scrollspy_offset2) {
                current = section.getAttribute('id');
            }
        });

        if (pageYOffset == 0 || current == "hero") {
            current = "domu";
        } 

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });
}

/** Scrollovani mezi kotvami */
function smoothAnchorScroll ()
{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let targetId = this.getAttribute('href');
            let offsetPosition = 0;
            let scrollspy_offset2 = this.getAttribute('data-offset') ? this.getAttribute('data-offset') : scrollspy_offset;

            if(targetId !== "#domu") { // osetreni kvuli fixni hlavicky
                let targetElement = document.querySelector(targetId);
                let offset = scrollspy_offset2 - 5;
                let elementPosition = targetElement.getBoundingClientRect().top;
                    offsetPosition = elementPosition + window.pageYOffset - offset;
            }

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            document.getElementById('mobile-nav-open').checked = false;

        });
    });
}

 



/**
 * Inicializuje hlavni carousel
 */
function initHeroCarousel () {
    initCarousel('.carousel-1', heroCarouselParams); 
}
/**
 * Znici hlavni carousel
 */
function destroyHeroCarousel () {
    destroyCarousel('.carousel-1'); 
}
/**
 * Inicializuje carousel v referencich
 */
function initReferenceCarousel () {
    initCarousel('.carousel-2', referenceCarouselParams); 
}
/**
 * Znici hlavni carousel
 */
function destroyReferenceCarousel () {
    destroyCarousel('.carousel-2'); 
}

/**
 * Inicializuje vybrany carousel a aplikuje parametry
 * @param containerSelector 
 * @param params 
 */
function initCarousel(containerSelector, params) {
    destroyCarousel(containerSelector);
    const swiper = new Swiper(containerSelector, params);
    carousels[containerSelector] = swiper;
}
/**
 * Znici carousel
 * @param containerSelector 
 */
function destroyCarousel(containerSelector) {
    if (carousels[containerSelector]) {
        carousels[containerSelector].destroy(true, true);
        delete carousels[containerSelector];
    }
}
  

/**
 * Spusti animovane countery, jakmile se dostanou do viewportu
 */
function counter() {
    const counters = document.querySelectorAll('.counter-box');

    const countUp = (element, end, duration) => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            element.innerText = Math.floor(progress * end);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.dataset.target ? parseInt(counter.dataset.target) : 100;
                const placeholder = counter.querySelector('.placeholder');
                const duration = counter.dataset.duration ? parseInt(counter.dataset.duration) : 2000;
                countUp(placeholder, target, duration);
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

