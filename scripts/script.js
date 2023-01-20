/*const textBox = accordeonBox.querySelector('.advantages__text');*/
/*const headBox = document.querySelector('.advantages__head');*/

const boxTemplate = document.querySelector('#element-template').content;
const elementsBox = document.querySelector('.advantages__container');
const initialBoxes = [
  {
    name: 'Заработанные средства',
    text: 'За&nbsp;время сущетсования проекта с&nbsp;2016 года социальная предпринимательская модель Everland доказала свою эффективность&nbsp;&mdash; мы&nbsp;действительно умеем давать работу людям с&nbsp;разными видами инвалидности'
  },
  {
    name: 'Заработанные средства',
    text: 'За&nbsp;время сущетсования проекта с&nbsp;2016 года социальная предпринимательская модель Everland доказала свою эффективность&nbsp;&mdash; мы&nbsp;действительно умеем давать работу людям с&nbsp;разными видами инвалидности'
  },
  {
    name: 'Заработанные средства',
    text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Заработанные средства',
    text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Заработанные средства',
    text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Заработанные средства',
    text: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createBox(nameBox, textBox) {
  const newElement = boxTemplate.querySelector('.advantages__box').cloneNode(true);
  newElement.querySelector('.advantages__name').textContent = nameBox;
  newElement.querySelector('.advantages__text').textContent = textBox;
  const textContainer = newElement.querySelector('.advantages__text');
  function openText(textContainer) {
    textContainer.classList.add('advantages__text_active');
    newElement.querySelector('.advantages__button').classList.add('advantages__button_active');
  }
  function closeText(textContainer) {
    textContainer.classList.remove('advantages__text_active');
    newElement.querySelector('.advantages__button').classList.remove('advantages__button_active');
  }
  newElement.addEventListener('click', function () {
    /*const boxesArr = document.querySelectorAll('.advantages__text');
    boxesArr.forEach(function (item) {
      if (item.querySelector('.advantages__text_active')) {
        item.classList.remove('advantages__text_active');
        closeText(textContainer);
      }
      else {
        closeText(textContainer);
      }

    });*/
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
