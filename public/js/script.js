// Navbar Function
const bottomNav = document.querySelector('.bottom-nav');
const topNav = document.querySelector('.top-nav');

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      bottomNav.classList.add('lg:-translate-y-[300%]');
      bottomNav.classList.remove('translate-y-0');
      topNav.classList.add('lg:h-[4.25rem]', 'shadow');
      servicesModal.classList.add('hidden');
      messageModal.classList.add('hidden');
      searchHistoryContainer.classList.add('hidden');
    } else {
      bottomNav.classList.remove('lg:-translate-y-[300%]');
      bottomNav.classList.add('translate-y-0');
      topNav.classList.remove('lg:h-[4.25rem]', 'shadow');
    }
  });
});

// Mobile Menu
const mobileMenuBtns = document.querySelectorAll('#mobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('translate-x-full');
  document.body.classList.toggle('overflow-hidden');
};

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener('click', toggleMobileMenu);
});

document.querySelectorAll('#mobileMenu ul a').forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// Modals
const servicesBtn = document.querySelector('#servicesButton');
const servicesModal = document.querySelector('#servicesModal');
const messageBtn = document.querySelector('#messageButton');
const messageModal = document.querySelector('#messageModal');

// Function to handle click outside the modal
function handleOutsideClickServices(event, modal) {
  if (!modal.contains(event.target) && !servicesBtn.contains(event.target)) {
    modal.classList.add('hidden');
    modal.classList.remove('fade-in');
    document.removeEventListener('click', handleOutsideClickServices);
  }
}

// Services Modal Funcitons
servicesBtn.addEventListener('click', () => {
  const isHidden = servicesModal.classList.contains('hidden');

  if (isHidden) {
    servicesModal.classList.remove('hidden');

    // Add smooth transition effect
    setTimeout(() => {
      servicesModal.classList.add('fade-in');
    }, 10);

    // Add click event listener for outside clicks
    document.addEventListener('click', (event) =>
      handleOutsideClickServices(event, servicesModal)
    );
  } else {
    servicesModal.classList.remove('fade-in');
    setTimeout(() => {
      servicesModal.classList.add('hidden');
    }, 300); // Match this duration to the CSS transition duration
  }

  // Add click event listeners for buttons inside the modal
  document.querySelectorAll('#servicesModal button').forEach((button) => {
    button.addEventListener('click', () => {
      servicesModal.classList.remove('fade-in');
      setTimeout(() => {
        servicesModal.classList.add('hidden');
      }, 300); // Match this duration to the CSS transition duration
      document.removeEventListener('click', handleOutsideClick);
    });
  });
});

// Message Modal Funcitons

// Function to handle click outside the modal
function handleOutsideClickMessage(event, modal) {
  if (!modal.contains(event.target) && !messageBtn.contains(event.target)) {
    modal.classList.add('hidden');
    modal.classList.remove('fade-in');
    document.removeEventListener('click', handleOutsideClickMessage);
  }
}

messageBtn.addEventListener('click', () => {
  const isHidden = messageModal.classList.contains('hidden');

  if (isHidden) {
    messageModal.classList.remove('hidden');

    // Add smooth transition effect
    setTimeout(() => {
      messageModal.classList.add('fade-in');
    }, 10);

    // Add click event listener for outside clicks
    document.addEventListener('click', (event) =>
      handleOutsideClickMessage(event, messageModal)
    );
  } else {
    messageModal.classList.remove('fade-in');
    setTimeout(() => {
      messageModal.classList.add('hidden');
    }, 10); // Match this duration to the CSS transition duration
  }

  // Add click event listeners for buttons inside the modal
  document.querySelectorAll('#messageModal button').forEach((button) => {
    button.addEventListener('click', () => {
      messageModal.classList.remove('fade-in');
      setTimeout(() => {
        messageModal.classList.add('hidden');
      }, 300); // Match this duration to the CSS transition duration
      document.removeEventListener('click', handleOutsideClick);
    });
  });
});

// Swiper Services Section
var swiperServices = new Swiper('.swiper-services', {
  slidesPerView: 5,
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
      updateCustomPagination(this, 'services');
    },
    slideChange: function () {
      updateCustomPagination(this, 'services');
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

// Swiper Why Choose Us
var swiperChooseUs = new Swiper('.swiper-why-choose-us', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-choose-next',
    prevEl: '.swiper-choose-prev',
  },
  on: {
    init: function () {
      updateCustomPagination(this, 'choose-us');
    },
    slideChange: function () {
      updateCustomPagination(this, 'choose-us');
    },
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    480: {
      spaceBetween: 20,
      slidesPerView: 1.2,
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

// Swiper Reviews
var swiperReviews = new Swiper('.swiper-reviews', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
  on: {
    init: function () {
      updateCustomPagination(this, 'reviews');
    },
    slideChange: function () {
      updateCustomPagination(this, 'reviews');
    },
  },
  breakpoints: {
    0: {
      spaceBetween: 12,
      slidesPerView: 1.2,
    },
    768: {
      spaceBetween: 16,
      slidesPerView: 1.5,
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 2.2,
    },
    1280: {
      spaceBetween: 20,
      slidesPerView: 2.5,
    },
    1920: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
});

// Function to update custom pagination
function updateCustomPagination(swiper, type) {
  const totalSlides = swiper.slides.length;
  const slidesPerView = Math.ceil(swiper.params.slidesPerView);
  const currentIndex = swiper.realIndex;
  const currentPage = Math.min(currentIndex + slidesPerView, totalSlides);

  // Update the custom pagination for the relevant swiper
  document
    .querySelectorAll(`.swiper-pagination-custom.${type}`)
    .forEach((pagination) => {
      pagination.textContent = `${currentPage} / ${totalSlides}`;
    });
}

// Update pagination on window resize
function updatePaginationOnResize() {
  swiperServices.update();
  swiperChooseUs.update();
  swiperReviews.update();
}

window.addEventListener('resize', updatePaginationOnResize);

window.addEventListener('resize', updatePaginationOnResize);

document.addEventListener('DOMContentLoaded', () => {
  const cases = document.querySelectorAll('.useful-case-item');
  const casesTexts = document.querySelectorAll('.useful-case-texts');
  const imageWrappers = document.querySelectorAll(
    '.useful-case-item .image-wrapper'
  );

  function setInitialState() {
    cases.forEach((item, i) => {
      if (i === 0) {
        item.classList.add('flex-1');
        casesTexts[i].classList.remove('hidden');
        imageWrappers[i].classList.remove('col-span-5');
        imageWrappers[i].classList.add('col-span-2');
        imageWrappers[i].classList.add('h-80');
      } else {
        item.classList.remove('flex-1');
        casesTexts[i].classList.add('hidden');
        imageWrappers[i].classList.add('col-span-5');
        imageWrappers[i].classList.remove('col-span-2');
        imageWrappers[i].classList.remove('h-80');
      }
    });
  }

  function handleCaseClick(caseItem, index) {
    if (window.innerWidth <= 1024) {
      // Toggle behavior for mobile: allow all to be opened
      caseItem.classList.toggle('flex-1');
      casesTexts[index].classList.toggle('hidden');
      imageWrappers[index].classList.toggle('col-span-5');
      imageWrappers[index].classList.toggle('col-span-2');
      imageWrappers[index].classList.toggle('h-80');
    } else {
      // Ensure only one is active for desktop
      closeAllCases();
      caseItem.classList.add('flex-1');
      casesTexts[index].classList.remove('hidden');
      imageWrappers[index].classList.remove('col-span-5');
      imageWrappers[index].classList.add('col-span-2');
      imageWrappers[index].classList.add('h-80');
    }
  }

  function closeAllCases() {
    cases.forEach((item, i) => {
      item.classList.remove('flex-1');
      casesTexts[i].classList.add('hidden');
      imageWrappers[i].classList.add('col-span-5');
      imageWrappers[i].classList.remove('col-span-2');
      imageWrappers[i].classList.remove('h-80');
    });
  }

  setInitialState();

  // Event listeners for case items
  cases.forEach((caseItem, index) => {
    caseItem.addEventListener('click', () => handleCaseClick(caseItem, index));
  });

  // Reapply initial state on window resize
  window.addEventListener('resize', setInitialState);
  // Update pagination on window resize
  window.addEventListener('resize', updatePaginationOnResize);
});

document.querySelectorAll('.tab-button').forEach((button) => {
  button.addEventListener('click', function () {
    const tabIdx = this.dataset.tab;

    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach((btn) => {
      btn.classList.remove('bg-brand-dark', 'text-white');
    });

    // Add active class to the clicked button
    this.classList.add('bg-brand-dark', 'text-white');

    // Hide all tabs content
    document.querySelectorAll('.tabs-content').forEach((content) => {
      content.classList.add('hidden');
    });

    // Show the selected tab content
    document
      .getElementById(`tabs-content-${tabIdx}`)
      .classList.remove('hidden');

    // Render the tabs content
    renderTabsContent(tabIdx, tabsData[tabIdx - 1]);
  });
});

// Initialize the first tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab-button').click();
});

// Tabs Scrolling Func
document.getElementById('scroll-tabs-left').addEventListener('click', () => {
  document.getElementById('tabs-buttons-container').scrollBy({
    top: 0,
    left: -100,
    behavior: 'smooth',
  });
});

document.getElementById('scroll-tabs-right').addEventListener('click', () => {
  document.getElementById('tabs-buttons-container').scrollBy({
    top: 0,
    left: 100,
    behavior: 'smooth',
  });
});

// Function to initialize the search bar
function initializeSearchBar(
  searchInputId,
  searchHistoryContainerId,
  searchIconPathId
) {
  const searchInput = document.getElementById(searchInputId);
  const searchIconPath = document.getElementById(searchIconPathId);
  const clearButton = searchInput.nextElementSibling;
  const searchHistoryContainer = document.getElementById(
    searchHistoryContainerId
  );

  clearButton.classList.add('hidden');

  searchInput.addEventListener('focus', function () {
    searchIconPath.setAttribute('stroke', '#0060FE');
    displaySearchHistory(searchHistoryContainer);
  });

  searchInput.addEventListener('blur', function () {
    if (!searchInput.value) {
      searchIconPath.setAttribute('stroke', '#D1D1D9');
    }
    setTimeout(() => {
      searchHistoryContainer.classList.add('hidden');
    }, 100); // Delay to allow click event to register on history items
  });

  searchInput.addEventListener('input', function () {
    if (searchInput.value) {
      clearButton.classList.remove('hidden');
    } else {
      clearButton.classList.add('hidden');
    }
  });

  clearButton.addEventListener('click', function () {
    searchInput.value = '';
    clearButton.classList.add('hidden');
    searchIconPath.setAttribute('stroke', '#D1D1D9'); // Reset stroke color
    searchInput.focus();
  });

  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        storeSearch(searchQuery);
        searchInput.value = '';
        displaySearchHistory(searchHistoryContainer);
      }
    }
  });

  searchHistoryContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      const searchQuery = event.target.textContent;
      searchInput.value = searchQuery;
      storeSearch(searchQuery);
    }
  });
}

// Function to display the modal with search history results
function displaySearchHistory(searchHistoryContainer) {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];

  if (history.length > 0) {
    searchHistoryContainer.innerHTML = '';

    history.forEach((item) => {
      const button = document.createElement('button');
      button.textContent = item;
      button.classList.add(
        'block',
        'hover:text-brand-blue',
        'transition-all',
        'duration-300'
      );
      searchHistoryContainer.appendChild(button);
    });

    searchHistoryContainer.classList.remove('hidden');
  } else {
    searchHistoryContainer.classList.add('hidden');
  }
}

// Function to handle storing search in local storage
function storeSearch(searchQuery) {
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  const existingIndex = searchHistory.indexOf(searchQuery);
  if (existingIndex !== -1) {
    searchHistory.splice(existingIndex, 1);
  }

  searchHistory.unshift(searchQuery);

  if (searchHistory.length > 5) {
    searchHistory = searchHistory.slice(0, 5);
  }

  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize each search bar with unique IDs
  initializeSearchBar('search1', 'searchHistory1', 'search-icon-path1');
  initializeSearchBar('search2', 'searchHistory2', 'search-icon-path2');
  initializeSearchBar('search3', 'searchHistory3', 'search-icon-path3');
});
