const description = document.querySelector(".description");
const descriptionContainer = document.querySelector(".description__container");
const descriptionSlider = description.querySelectorAll(".description__slider");
const descriptionLeft = document.querySelector(".description__left");
const descriptionRight = document.querySelector(".description__right");
const descriptionNumbers = document.querySelector(".description__numbers");
let offset = 0;

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