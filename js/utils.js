// Функция для генерации случайного целого числа в диапазоне
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция для получения случайного элемента из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Функция для генерации массива произвольных неповторяющихся чисел в заданном диапазоне
function getRandomArray(a, b) {
  let array = [];
  while (array.length <= b - a) {
    let number = getRandomPositiveInteger(a, b);
    if (!array.includes(number)) {
      array.push(number);
    }
  }
  return array;
}

// Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

export {getRandomPositiveInteger};
export {getRandomArrayElement};
export {getRandomArray};
export {checkStringLength};
