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

// Swipers

// Swiper Services Section
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

// Swiper Why Choose Us
var swiper = new Swiper('.swiper-why-choose-us', {
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
      updateCustomPagination(this);
    },
    slideChange: function () {
      updateCustomPagination(this);
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

// Function to update custom pagination
function updateCustomPagination(swiper) {
  const totalSlides = swiper.slides.length;
  const visibleSlides = swiper.params.slidesPerView || 1; // Default to 1 if not defined
  let currentPage = swiper.realIndex + visibleSlides;

  // Ensure currentPage doesn't exceed totalSlides
  currentPage = Math.min(currentPage, totalSlides);

  document
    .querySelectorAll('.swiper-pagination-custom')
    .forEach((pagination) => {
      pagination.textContent = `${Math.floor(currentPage)} / ${totalSlides}`;
    });
}

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
});

// Swiper Revies
var swiper = new Swiper('.swiper-reviews', {
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
      updateCustomPagination(this);
    },
    slideChange: function () {
      updateCustomPagination(this);
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

// Tabs of Prices section
const tabsData = [
  [
    {
      text: 'Сложный ремонт (замена компрессора, испарителя, конденсатора и т.д.). Все бренды',
      cost: '505',
    },
    {
      text: 'Особо сложный ремонт (устранение утечки в запененной части, замена шкафа). Все бренды',
      cost: '605',
    },
    { text: 'Диагностика. Все бренды', cost: '705' },
    {
      text: 'Средний ремонт (замена термостата, датчиков, модуля и т.д.). Все бренды',
      cost: '805',
    },
    {
      text: 'Особо сложный ремонт (устранение утечки в запененной части, замена шкафа). Все бренды',
      cost: '905',
    },
  ],
  [
    { text: 'Замена двигателя. Все бренды', cost: '505' },
    { text: 'Замена ремня. Все бренды', cost: '605' },
    { text: 'Диагностика. Все бренды', cost: '705' },
    { text: 'Ремонт электроники. Все бренды', cost: '805' },
    { text: 'Замена подшипников. Все бренды', cost: '905' },
  ],
  [
    { text: 'Замена насоса. Все бренды', cost: '505' },
    { text: 'Замена уплотнителя. Все бренды', cost: '605' },
    { text: 'Диагностика. Все бренды', cost: '705' },
    { text: 'Ремонт панели управления. Все бренды', cost: '805' },
    { text: 'Замена фильтра. Все бренды', cost: '905' },
  ],
  [
    { text: 'Замена тэна. Все бренды', cost: '505' },
    { text: 'Ремонт дверцы. Все бренды', cost: '605' },
    { text: 'Диагностика. Все бренды', cost: '705' },
    { text: 'Замена стекла. Все бренды', cost: '805' },
    { text: 'Ремонт системы управления. Все бренды', cost: '905' },
  ],
  [
    { text: 'Замена бойлера. Все бренды', cost: '505' },
    { text: 'Ремонт насоса. Все бренды', cost: '605' },
    { text: 'Диагностика. Все бренды', cost: '705' },
    { text: 'Замена фильтра. Все бренды', cost: '805' },
    { text: 'Ремонт электроники. Все бренды', cost: '905' },
  ],
];

function renderTabsContent(tabIdx, tabsData) {
  const tabsContent = document.getElementById(`tabs-content-${tabIdx}`);
  tabsContent.innerHTML = '';

  tabsData.forEach((tab, idx) => {
    const li = document.createElement('li');
    li.className = 'option';
    li.innerHTML = `
        <input
        type="radio"
        id="fridge${tabIdx}${idx}"
        name="option${tabIdx}"
        class="hidden"
        ${idx === 0 ? 'checked' : ''}
      />
      <label
        for="fridge${tabIdx}${idx}"
        class="h-16 xs:h-20 flex items-center justify-between gap-4 rounded-xl lg:rounded-3xl cursor-pointer p-3 xs:p-5"
      >
        <!-- Check & Texts -->
        <div class="flex items-center gap-4">
          <div
            class="w-4 h-4 xs:w-6 xs:h-6 shrink-0 border border-brand-dark/10 rounded-full"
          >
            <div
              class="toggle-target w-4 h-4 xs:w-6 xs:h-6 shrink-0 hidden items-center justify-center bg-brand-blue rounded-full"
            >
              <span
                class="w-1.5 h-1.5 xs:w-3 xs:h-3 shrink-0 bg-white rounded-full"
              ></span>
            </div>
          </div>
          <p
            class="max-w-2xl text-brand-dark/80 text-xs sm:text-sm lg:text-base xl:pr-16 leading-3 sm:leading-4 lg:leading-5"
          >
            ${tab.text}
          </p>
        </div>
        <!-- Cost -->
        <p
          class="text-sm sm:text-base font-semibold text-brand-dark whitespace-nowrap"
        >
          от ${tab.cost} ₽
        </p>
      </label>
    `;

    tabsContent.appendChild(li);
  });
}

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

// Search input Functions
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const searchIconPath = document.getElementById('search-icon-path');
  const clearButton = searchInput.nextElementSibling;
  const searchHistoryContainer = document.getElementById('searchHistory'); // Renamed to avoid conflict

  clearButton.classList.add('hidden');

  searchInput.addEventListener('focus', function () {
    searchIconPath.setAttribute('stroke', '#0060FE');
    displaySearchHistory(); // Display search history when input is focused
  });

  searchInput.addEventListener('blur', function () {
    if (!searchInput.value) {
      searchIconPath.setAttribute('stroke', '#D1D1D9');
      searchHistoryContainer.classList.add('hidden'); // Hide search history when input is blurred and empty
    }
  });

  searchInput.addEventListener('click', function () {
    searchInput.value = ''; // Clear input value when it's clicked
    searchIconPath.setAttribute('stroke', '#0060FE');
    displaySearchHistory(); // Display search history when input is clicked
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

  // Function to display the modal with search history results
  function displaySearchHistory() {
    // Retrieve search history from local storage
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Check if search history is not empty
    if (history.length > 0) {
      // Clear existing buttons in the modal
      searchHistoryContainer.innerHTML = '';

      // Create and append buttons for each search history item
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

      // Show the modal
      searchHistoryContainer.classList.remove('hidden');
    } else {
      // If search history is empty, hide the modal
      searchHistoryContainer.classList.add('hidden');
    }
  }

  // Function to handle storing search in local storage
  function storeSearch(searchQuery) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Check if the search query already exists in the history
    const existingIndex = searchHistory.indexOf(searchQuery);
    if (existingIndex !== -1) {
      // Remove existing entry to prevent duplication
      searchHistory.splice(existingIndex, 1);
    }

    // Add the new search query to the beginning of the history
    searchHistory.unshift(searchQuery);

    // Limit search history to, for example, 10 items
    if (searchHistory.length > 10) {
      searchHistory = searchHistory.slice(0, 10);
    }

    // Update local storage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }

  // Event listener for the search input
  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        // Store the search query in local storage
        storeSearch(searchQuery);
        // Clear the input value
        searchInput.value = '';
        // Display the last searched word
        displaySearchHistory();
        // Do any other necessary action, like initiating search or redirecting
      }
    }
  });

  // Event delegation for dynamically created buttons in the modal
  searchHistoryContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      // Retrieve the text content of the clicked button (search history item)
      const searchQuery = event.target.textContent;
      // Do something with the selected search query, like initiating search or filling the input
      // For example, you can fill the input with the selected search query:
      searchInput.value = searchQuery;
      // Store the search in local storage
      storeSearch(searchQuery);
    }
  });
});
