function closeDescription(evt) {
  const currentAccordion = evt.target.closest('.accordion');
  const clickedButton = currentAccordion.querySelector('.accordion__button');
  const descriptionElement = currentAccordion.querySelector(
    '.accordion__text'
  );

  if (
    descriptionElement &&
    !descriptionElement.classList.contains('accordion__text_close')
  ) {
    descriptionElement.classList.add('accordion__text_close');
    clickedButton.classList.remove('accordion__button_close');
    currentAccordion.classList.remove('accordion_close');
  } else if (
    descriptionElement &&
    descriptionElement.classList.contains('accordion__text_close')
  ) {
    descriptionElement.classList.remove('accordion__text_close');
    clickedButton.classList.add('accordion__button_close');
    currentAccordion.classList.add('accordion_close');
  }
}

document.querySelectorAll('.accordion__button').forEach((button) => {
  button.addEventListener('click', (evt) => closeDescription(evt));
});





