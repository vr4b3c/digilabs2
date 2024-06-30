

document.addEventListener("DOMContentLoaded", function() 
{ // ON LOAD

    initSwiper('.carousel-1', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 24,
        breakpoints: {
            648: {
                    slidesPerView: 2.5,
                    slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3.5,
                slidesPerGroup: 3,
            },
            1536: {
                slidesPerView: 4.5,
                slidesPerGroup: 4,
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


}); 


window.addEventListener("resize", function () 
{ // ON RESIZE



});


let swiperInstances = {};

function initSwiper(containerSelector, params) {
  destroySwiper(containerSelector);

  const swiper = new Swiper(containerSelector, params);

  swiperInstances[containerSelector] = swiper;
}

function destroySwiper(containerSelector) {
  if (swiperInstances[containerSelector]) {
    swiperInstances[containerSelector].destroy(true, true);

    delete swiperInstances[containerSelector];
  }
}
  


/*
initSwiper('.carousel-2', {
    direction: 'horizontal',
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 24,
    breakpoints: {
        1024: {
            slidesPerView: 1.5,
        },
        1536: {
            slidesPerView: 2.5,
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
*/