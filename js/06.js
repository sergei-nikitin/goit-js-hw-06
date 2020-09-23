// Задача 6-6
// filter, map и создание анонимных объектов
// Получи массив из объектов,
// которые состоят только из свойств name и email
// тех пользователей, которые попадают в
// возрастную категорию от min до max лет(значение свойства age).

// Сравнение, пример

// const x = 13;

// // num больше 10 ?
// const larger = num > 10; // true

// // num меньше 100 ?
// const smaller = 100 > num; // true

// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true
// Создание анонимных объектов:

// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
// Используй только перебирающие методы массива
// которые не изменяют(не мутируют) исходный массив.
//  Т.е.нельзя использовать for, splice,
// push и т.п.мутирующие методы.

const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age >= min && age <= max)
    .map(({ name, email }) => ({ name, email }));
