
const modalPicture = document.querySelector('.big-picture');
// modalPicture.classList.remove('hidden');
const pic = document.querySelectorAll('.picture__img');


const bigPicture = document.querySelector('.big-picture__img'); // определяем картинку.
// bigPicture.querySelector('img').src = 'img/logo-background-1.jpg';
// bigPicture.alt = 'какое то описание';

// bigPicture.insertAdjacentHTML("beforebegin", `<div class="big-picture__img"><img src="${url}" alt="Olololod" width="600" height="600"></div>`)

const likesCount = modalPicture.querySelector('.likes-count');
const commentsCount = modalPicture.querySelector('.comments-count');
const socialComments = modalPicture.querySelector('.social__comments');



pic.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(element.src)
  })
})

function getConsoleLog () {
  pic.forEach((element) => {
    element.addEventListener('click', () => {
      console.log(element.src)
    })
  })
}

export { getConsoleLog }



let pict = document.querySelectorAll('.picture__img');

pict.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(element.src)
  })
})

// let getComment = (comment) => {
//   socialComments.insertAdjacentHTML(
//     "beforeend",
//     `
//     <li class="social__comment">
//       <img
//         class="social__picture"
//         src="${comment.avatar}"
//         alt="${comment.name}"
//         width="35" height="35">
//       <p class="social__text">${comment.message}</p>
//     </li>
//     `);
// };

// comments.forEach((comment), () => {
//   getComment(comment)
// });

/* элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:
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
