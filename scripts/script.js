//объявление
const boxTemplate = document.querySelector('#element-template').content;
const elementsBox = document.querySelector('.advantages__container');

const popupMenu = document.querySelector('#popup-menu');
const popupMenuSwitch = document.querySelector('#menu-bottom');
const mediaQuery = window.matchMedia('(max-width: 737px)')

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
let descriptionDynamics = document.querySelector(".description__dynamics");

let projectCard = document.querySelector(".project-card").offsetWidth;
let projectCardContainer = document.querySelector(".project-card__container");
let buttonLeft = document.querySelector(".buttons_type_slider-left");
let buttonRight = document.querySelector(".buttons_type_slider-right");

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
    document.querySelector('#menu-bottom').style = 'background-image: url(../images/menu-icon.svg)';
  } else {
  popup.classList.add('popup_opened');
  document.querySelector('#menu-bottom').style = 'background-image: url(../images/Menu.jpg)';
  }
}

function switchPopupMobile(popup) {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
    closeAll(popupProjectVisible);
    closeAll(popupPeopleVisible);
    closeAll(popupServiceVisible);
    closeAll(popupProject);
    closeAll(popupPeople);
    closeAll(popupService);
    document.querySelector('#menu-bottom').style = 'background-image: url(../images/menu-icon-mobile.svg)';
  } else {
  popup.classList.add('popup_opened');
  document.querySelector('#menu-bottom').style = 'background-image: url(../images/Menu-icon-close.jpg)';
  }
}

if (mediaQuery.matches) {
  popupMenuSwitch.addEventListener('click', function () {
    switchPopupMobile(popupMenu);
  })
} else {
  popupMenuSwitch.addEventListener('click', function () {
    switchPopup(popupMenu);
})
}



/*Перелистывание слайдов в блоке description*/

descriptionRight.addEventListener("click", function () {
  if (viewSlide < 5) {
     viewSlide++;
  } else {
    viewSlide = 0;
  }
  descriptionContainer.style.left = -viewSlide * description + "px";
});

descriptionLeft.addEventListener("click", function () {
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 5;
  }
  descriptionContainer.style.left = -viewSlide * description + "px";
});

/*Счетчик перелистывания в блоке description*/

function checkButtons(){
  descriptionRight.disabled = descriptionDynamics.value >= descriptionDynamics.max;
  descriptionLeft.disabled = descriptionDynamics.value <= descriptionDynamics.min;
};

descriptionRight.addEventListener('click', () => {
  descriptionDynamics.stepUp(1);
  checkButtons();
})

descriptionLeft.addEventListener('click', () => {
  descriptionDynamics.stepDown(1);
  checkButtons();
})

/*Перелистывание в блоке projects*/

buttonRight.addEventListener("click", function () {
  if (viewSlide < 2) {
     viewSlide++;
  } else {
    viewSlide = 0;
  }
  projectCardContainer.style.left = -viewSlide * projectCard + "px";
});

buttonLeft.addEventListener("click", function () {
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 2;
  }
  projectCardContainer.style.left = -viewSlide * projectCard + "px";
});






