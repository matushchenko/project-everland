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