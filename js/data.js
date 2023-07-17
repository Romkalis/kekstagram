import {getRandomPositiveInteger, getRandomArrayElement, getRandomArray} from './utils.js';

// Массив с описанием фото
const DESCRIPTION = [
  "Восход солнца над горами",
  "Цветочное поле весной",
  "Портрет молодой девушки",
  "Закат на пляже",
  "Городская панорама ночью",
  "Лесной пейзаж осенью",
  "Детский смех",
  "Архитектурные детали здания",
  "Макрофотография цветка",
  "Снежный пейзаж зимой"];

  // Массив с именами
const NAMES = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor', 'Frank', 'Grace', 'Hannah', 'Isaac', 'Julia', 'Katherine', 'Liam', 'Mia', 'Nathan', 'Olivia', 'Peter', 'Quinn', 'Rachel', 'Samuel', 'Thomas', 'Ursula', 'Victor', 'Wendy', 'Xavier', 'Yara', 'Zachary'];

// Массив с текстами комментариев
const MESSAGES = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// В каждой графе объекта нужно указывать уникальные данные, переписываю функицю, которая будет генерить данные для каждого вложения

  const createMessage = () => {
    return getRandomArrayElement(MESSAGES)
  }

const getComment = (index) => {
  return {
    id: index,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
}

const createPost = (index) => {
  let post = {
      id: index,
      url: `photos/${index}.jpg`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomPositiveInteger(15, 200),
      comments: [getComment({length: getRandomPositiveInteger(1, 3)})]
    };
    return post;
}





// выдает массив постов
function getPostsArray(number) {
  let postsArray = [];

  for (let i = 0; i < number; i++) {
    let post = createPost(i + 1);

    let numComments = getRandomPositiveInteger(1, 3);
    for (let j = 0; j < numComments; j++) {
      post.comments.push(getComment(j));
    }
    postsArray.push(post);
  }
  return postsArray;
}

const POSTS_COUNT = 25;
const postsArray = getPostsArray(POSTS_COUNT)

export {postsArray};
