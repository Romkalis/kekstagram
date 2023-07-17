const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

                            //сразу можем деструктурируем объект comments, description, likes, url, тогда надо будет убрать picture в поиске селекторов.
const createPicture = (picture) => {
  const newPhoto = pictureTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').setAttribute('data-picture-counter', picture.id);
  newPhoto.querySelector('.picture__img').src = picture.url;
  newPhoto.querySelector('.picture__img').alt = picture.description;
  newPhoto.querySelector('.picture__comments').textContent = picture.comments.length;
  newPhoto.querySelector('.picture__likes').textContent = picture.likes;

  return newPhoto;
};

const renderPictures = (pictures) => {

  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  })

  container.appendChild(fragment);
};

export { renderPictures };
