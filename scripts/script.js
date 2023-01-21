const boxTemplate = document.querySelector('#element-template').content;
const elementsBox = document.querySelector('.advantages__container');

function createBox(nameBox, textBox) {
  const newElement = boxTemplate.querySelector('.advantages__box').cloneNode(true);
  newElement.querySelector('.advantages__name').textContent = nameBox;
  newElement.querySelector('.advantages__text').textContent = textBox;
  const textContainer = newElement.querySelector('.advantages__text');
  function openText(textContainer) {
    let TextBoxOpen = document.querySelector('.advantages__text_active');
    let buttonBoxActive = document.querySelector('.advantages__button_active');
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
