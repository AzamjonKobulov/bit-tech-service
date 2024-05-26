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
