//объявление
const popupMenu = document.querySelector('#popup-menu');
const popupMenuOpen = document.querySelector('#open');
const popupMenuClose = document.querySelector('#close');

const popupProject = document.querySelector('#popup-hide-project');
const popupProjectVisible = document.querySelector('#project');

const popupPeople = document.querySelector('#popup-hide-people')
const popupPeopleVisible = document.querySelector('#people')

const popupService = document.querySelector('#popup-hide-service')
const popupServiceVisible = document.querySelector('#service')

const description = document.querySelector(".description");
const descriptionContainer = document.querySelector(".description__container");
const descriptionSlider = description.querySelectorAll(".description__slider");
const descriptionLeft = document.querySelector(".description__left");
const descriptionRight = document.querySelector(".description__right");
const descriptionNumbers = document.querySelector(".description__numbers");
let offset = 0;

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



//функции открытия и закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// открытие попапа на кнопку
popupMenuOpen.addEventListener('click', function () {
  openPopup(popupMenu);
})
popupMenuClose.addEventListener('click', function () {
  closePopup(popupMenu);
  closeAll(popupProjectVisible);
  closeAll(popupPeopleVisible);
  closeAll(popupServiceVisible);
  closeAll(popupProject);
  closeAll(popupPeople);
  closeAll(popupService);
})

/*Перелистывание слайдов*/

descriptionRight.addEventListener("click", function () {
  offset = offset + 1440;
  if (offset > 7200) {
    offset = 0;
  }
  descriptionContainer.style.left = -offset + "px";
  return offset;
});

descriptionLeft.addEventListener("click", function () {
  offset = offset - 1440;
  if (offset < 0) {
    offset = 7200;
  }
  descriptionContainer.style.left = -offset + "px";
  return offset;
});

/*Счетчик перелистывания*/

let savedIndex = 1;

function reducingNumber() {
  descriptionNumbers.textContent = `${(savedIndex += 1)}/${6}`;
  if (savedIndex >= 6) {
    savedIndex = 0;
  }
}

descriptionRight.addEventListener("click", function () {
  reducingNumber();
});

function increasingNumber() {
  descriptionNumbers.textContent = `${(savedIndex -= 1)}/${6}`;
  if (savedIndex >= 6) {
    savedIndex = 6;
  } else if (savedIndex <= 1) {
    savedIndex = 7;
  }
}

descriptionLeft.addEventListener("click", function () {
  increasingNumber();
});