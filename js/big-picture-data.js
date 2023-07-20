// на данный момент модалка работает как задумывалось, но, видимо, надо разобраться с удалением обработкчика, после ее закрытия, т.к. приоткрытии popup загрузки изображения, при клике в свободную область экрана появляется попап из bigPic. Пока не разобрался в чем дело, в хроме этот обработчик почем то не виден.





import { postsArray } from "./data.js";

const modalPicture = document.querySelector(".big-picture");
const picturesPreview = document.querySelector(".pictures");
const bigPicture = document.querySelector(".big-picture__img"); // определяем картинку.
const commentsList = document.querySelector(".social__comments");
const closeModalButton =  document.querySelector(".big-picture__cancel");
const pictureDescription = document.querySelector('.social__header');



/*------------------    PICTURE MODAL UTILS     ----------------------*/

function clearModalMarkupPicture () {
  commentsList.innerHTML = '';
  bigPicture.innerHTML = '';
  pictureDescription.innerHTML = '';
}


/*  Переменные, используемые в обработчиках
(нужны для того, чтобы передать значения по ссылке, чтобы потом можно было удалить обработчик) */
const onpictureModalEscapeKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    modalPicture.classList.add('hidden');
    clearModalMarkupPicture ();
  };
}

const generateMarkupBigPic = (evt) => {
  modalPicture.classList.remove('hidden');
  // получаем id из сгенерированного массива, и ищем нужный эл-т.
  let object = postsArray[evt.target.dataset.pictureCounter - 1];
  getPictureInfo(object);
  getComment(object);
  /* используем обработчик события при нажатии клавиши ESC на всем окне, чтобы срабатывало на всем окне */
  document.addEventListener('keydown', onpictureModalEscapeKeydown);
}

const closeModalWindow = () => {
  clearModalMarkupPicture();
  modalPicture.classList.add('hidden');
  picturesPreview.removeEventListener('click', generateMarkupBigPic);
  // УДАЛение обработчка()

}


/* --------   ФУНКЦИИ ОБРАБОТКИ ДАННЫХ ДЛЯ ФОРМИРОВАНИЯ РАЗМЕТКИ    ---------*/
function getPictureInfo(object) {
  bigPicture.insertAdjacentHTML(
    "afterbegin",
    `<img src="photos/${object.id}.jpg" alt="${object.description}" width="600" height="600">`
  );
  pictureDescription.insertAdjacentHTML('afterbegin',
  `
  <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
  <p class="social__caption">${object.description}</p>
  <p class="social__likes">Нравится <span class="likes-count">${object.likes}</span></p>
  `
  )
}

function getComment(object) {
  object.comments.forEach((comment) => {
    commentsList.insertAdjacentHTML(
      "afterbegin",
      `<li class="social__comment">
    <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
    <p class="social__text">${comment.message}</p>
  </li>`
    );
  });
}


/*------       ОБРАБОТЧИКИ       -------*/
picturesPreview.addEventListener('click', generateMarkupBigPic);

closeModalButton.addEventListener('click', closeModalWindow)
























/*
Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.
Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:
<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
Описание фотографии description вставьте строкой в блок .social__caption.
После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
Подключите модуль в проект.
Как связать модули миниатюр и полноразмерного режима?
Задача не имеет одного верного решения, поэтому будет правильным как использование третьего модуля для связки двух других, так и импорт модуля полноразмерных изображений в модуль миниатюр и дальнейшая работа с интерфейсом этого модуля, addEventListener и замыканиями. Последнее решение похоже на демонстрацию по учебному проекту. А первое — с третьим модулем — более сложное из-за отсутствия примера, но самостоятельное. В качестве третьего модуля можно выбрать точку входа, а можно завести отдельный модуль, например «Галерея». Решение за вами.
*/
