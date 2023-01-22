//объявление
const boxTemplate = document.querySelector('#element-template').content;
const elementsBox = document.querySelector('.advantages__container');

const popupMenu = document.querySelector('#popup-menu');
const popupMenuSwitch = document.querySelector('#menu-bottom');
const icon = document.querySelector('.header__button-img');

const popupProject = document.querySelector('#popup-hide-project');
const popupProjectVisible = document.querySelector('#project');

const popupPeople = document.querySelector('#popup-hide-people')
const popupPeopleVisible = document.querySelector('#people')

const popupService = document.querySelector('#popup-hide-service')
const popupServiceVisible = document.querySelector('#service')

function createBox(nameBox, textBox) {
  const newElement = boxTemplate.querySelector('.advantages__box').cloneNode(true);
  newElement.querySelector('.advantages__name').textContent = nameBox;
  newElement.querySelector('.advantages__text').textContent = textBox;
  const textContainer = newElement.querySelector('.advantages__text');
  function openText(textContainer) {
    const TextBoxOpen = document.querySelector('.advantages__text_active');
    const buttonBoxActive = document.querySelector('.advantages__button_active');
    if (document.querySelector('.advantages__text_active')) {
      TextBoxOpen.classList.remove('advantages__text_active');
      buttonBoxActive.classList.remove('advantages__button_active');
    }
    textContainer.classList.add('advantages__text_active');
    newElement.querySelector('.advantages__button').classList.add('advantages__button_active');
  }
  function closeText(textContainer) {
    textContainer.classList.remove('advantages__text_active');
    newElement.querySelector('.advantages__button').classList.remove('advantages__button_active');
  }
  newElement.addEventListener('click', function () {
    if (!newElement.querySelector('.advantages__text_active')) {
      openText(textContainer);
    }
    else {
      closeText(textContainer);
    }
  });
  return newElement;
}

initialBoxes.forEach(function (item) {
  elementsBox.append(createBox(item.name, item.text));
});


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
