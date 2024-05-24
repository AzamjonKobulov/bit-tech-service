var swiper = new Swiper('.swiper-services', {
  slidesPerView: 5,
  // slidesPerGroup: 5,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-services-next',
    prevEl: '.swiper-services-prev',
  },
  on: {
    init: function () {
      updateCustomPagination(this);
    },
    slideChange: function () {
      updateCustomPagination(this);
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.5,
    },
    1280: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});

function updateCustomPagination(swiper) {
  const current = swiper.realIndex + 1;
  const total = swiper.slides.length;
  const paginationElement = document.querySelectorAll(
    '.swiper-pagination-custom'
  );
  paginationElement.forEach((pagination) => {
    pagination.textContent = `${current} / ${total}`;
  });
}
