const form  = document.querySelector('.img-upload__form');

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      console.log('все окай')
    } else {
      console.log('все NOT окай')
    }

})
