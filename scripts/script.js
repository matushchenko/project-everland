const description = document.querySelector('.description');
const descriptionLeft = document.querySelector('.description__left');
const descriptionRight = document.querySelector('.description__right');
let offset = 0;


descriptionRight.addEventListener('click', function () {
  offset = offset + 1360;
  if (offset > 8160) {
      offset = 0;
  }
  description.style.left = -offset + 'px';
});


descriptionLeft.addEventListener('click', function () {
  offset = offset - 1360;
  if (offset < 0) {
      offset = 8160;
  }
  description.style.left = -offset + 'px';
});















/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Функция перелистывания: */
function showSlides(n) {
    let slides = document.getElementsByClassName('description__slider');
     if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (let item of slides) {
    item.style.display = 'none';
  }

  /* Делаем элемент блочным: */
  slides[slideIndex - 1].style.display = 'flex';
  }

descriptionRight.addEventListener('click', function () {
  showSlides(slideIndex += 1);
});
descriptionLeft.addEventListener('click', function () {
  showSlides(slideIndex -= 1);
});

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
  showSlides(slideIndex = n);
}






/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
  showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
  showSlides(slideIndex -= 1);
}

descriptionRight.addEventListener('click', function () {
  showSlides(slideIndex += 1);
});

descriptionLeft.addEventListener('click', function () {
  showSlides(slideIndex -= 1);
});

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
/* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  let slides = document.getElementsByClassName('description__slider');

   /* Проверяем количество слайдов: */
   if (n > slides.length) {
    slideIndex = 1
 }
 if (n < 1) {
    slideIndex = slides.length
 }

 /* Проходим по каждому слайду в цикле for: */
 for (let item of slides) {
  item.style.display = 'none';
}

/* Делаем элемент блочным: */
slides[slideIndex - 1].style.display = 'flex';
}
















