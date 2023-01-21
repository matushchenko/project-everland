//объявление
const popupMenu = document.querySelector('#popup-menu');
const popupMenuSwitch = document.querySelector('#menu-bottom');
const icon = document.querySelector('.header__button-img');

const popupProject = document.querySelector('#popup-hide-project');
const popupProjectVisible = document.querySelector('#project');

const popupPeople = document.querySelector('#popup-hide-people')
const popupPeopleVisible = document.querySelector('#people')

const popupService = document.querySelector('#popup-hide-service')
const popupServiceVisible = document.querySelector('#service')

let description = document.querySelector(".description").offsetWidth;
let descriptionContainer = document.querySelector(".description__container");
let descriptionLeft = document.querySelector(".description__left");
let descriptionRight = document.querySelector(".description__right");
let descriptionNumbers = document.querySelector(".description__numbers");
let viewSlide = 0;

//фунция для закрытия развернутого в меню
function closeAll(esc) {
  if (esc.classList.contains('popup__icon_reverse')) {
    esc.classList.remove('popup__icon_reverse')
  }
  if (esc.classList.contains('popup__hide_visible')) {
    esc.classList.remove('popup__hide_visible')
  }
}

//функция переворачивания
function buttonReverse(reverse) {
  if (reverse.classList.contains('popup__icon_reverse')) {
  reverse.classList.remove('popup__icon_reverse');
} else {
  reverse.classList.add('popup__icon_reverse');
}
}

// переворачивание
popupProjectVisible.addEventListener('click', function () {
  buttonReverse(popupProjectVisible);
})
popupPeopleVisible.addEventListener('click', function () {
  buttonReverse(popupPeopleVisible);
})
popupServiceVisible.addEventListener('click', function () {
  buttonReverse(popupServiceVisible);
})


//функция разворачивания и сворачивания
function visibleHide(hide) {
  if (hide.classList.contains('popup__hide_visible')) {
  hide.classList.remove('popup__hide_visible');
} else {
  hide.classList.add('popup__hide_visible');
}
}

// разворачивания и сворачивания при нажатии
popupProjectVisible.addEventListener('click', function () {
  visibleHide(popupProject);
})
popupPeopleVisible.addEventListener('click', function () {
  visibleHide(popupPeople);
})
popupServiceVisible.addEventListener('click', function () {
  visibleHide(popupService);
})

//функции открытия/закрытия
function switchPopup(popup) {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
    closeAll(popupProjectVisible);
    closeAll(popupPeopleVisible);
    closeAll(popupServiceVisible);
    closeAll(popupProject);
    closeAll(popupPeople);
    closeAll(popupService);
    icon.src = '../images/menu-icon.svg'
  } else {
  popup.classList.add('popup_opened');
  icon.src = '../images/Menu-icon-close.jpg';
  }
}

// открытие/закрытие попапа на кнопку
popupMenuSwitch.addEventListener('click', function () {
  switchPopup(popupMenu);
})

/*Перелистывание слайдов*/

descriptionRight.addEventListener("click", function () {
  // Условие, если номер слайда меньше четырёх
  if (viewSlide < 5) { // Если верно то
    // Увеличиваем номер слайда на один
     viewSlide++;
  } else { // Иначе
    // Номер слайда равен нулю
    viewSlide = 0;
  }
  descriptionContainer.style.left = -viewSlide * description + "px";
});

descriptionLeft.addEventListener("click", function () {
  // Условие, если номер слайда меньше четырёх
  if (viewSlide > 0) { // Если верно то
    // Увеличиваем номер слайда на один
    viewSlide--;
  } else { // Иначе
    // Номер слайда равен нулю
    viewSlide = 5;
  }
  descriptionContainer.style.left = -viewSlide * description + "px";
});

/*Счетчик перелистывания*/
function reducingNumberToo() {
  let savedIndex = 1;
  function reducingNumber() {
    descriptionNumbers.textContent = `${(savedIndex += 1)}/${6}`;
    if (savedIndex >= 6) {
      savedIndex = 0;
    }
  }
  reducingNumber();
}

descriptionRight.addEventListener("click", function () {
  reducingNumberToo();
});

function increasingNumberToo() {
  function increasingNumber() {
    let savedIndex = 7;
    descriptionNumbers.textContent = `${(savedIndex -= 1)}/${6}`;
    if (savedIndex >= 6) {
      savedIndex = 6;
    } else if (savedIndex <= 1) {
      savedIndex = 7;
    }
  }
  increasingNumber();
}

descriptionLeft.addEventListener("click", function () {
  increasingNumberToo();
});