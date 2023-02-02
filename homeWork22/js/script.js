
/* Задание 1:
  Имеется следующий объект - {a: 1, b: 2, c: 3, d: 4}. Необходимо сделать так, чтобы в переменные a и b записались
  соответствующие значения, а все, что осталось - в объект obj.
*/

let {a, b, ...obj} = {a: 1, b: 2, c: 3, d: 4};


/* Задание 2:
  Запросить у пользователя имя и сохранить его в переменную.
  Создать объект со свойством name, куда записать короткой записью значение имени пользователя, и методом sayHi,который
  будет возвращать строку вида: "Hi, (имя пользователя)!"
  Имя пользователя получать уже из объекта.
  Проверить работу метода. Убедиться в уместном использовании способов задания переменной.
*/


/* Задание 3:
   Написать функцию, которая будет принимать параметры x, y, z.
   При вызове функции передать в нее первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
   X и Y получаем из свойств переданного в функцию объекта a и b. Н У z значение по-умолчанию должно быть 1.
   Функция должна возвращать результат возведения в стерень y числа x, умноженный на z.
   Валидацию опустить.
*/

function func(x, y, z) {

}

func({a: 2, b: 3}, y = 1, z = 1)


/* Задание 4:
  Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра
  name и age и вернуть строку вида:
    "Hello, I'm (имя) and I'm (возраст) years old."
  Не использовать деструктуризацию.
*/

const arr = ['Maks', 25];

function funcTwo(name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old`;
}

//console.log(funcTwo(arr[0], arr[1]));


/* Задание 5:
  Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
  Вывести в консоль числа последовательно.
*/

function numberGet(arr) {

    for (let k of arr) {
        console.log(k);
    }
}

//numberGet([1, 2, 3, 4]);


/* Задание 6:
  Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск
  элемента в массиве.
    function countVowelLetters(text) {
        text = text.toLowerCase().split('');
        var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
            counter = 0;
        for (var i = 0; i < vowelLetters.length; i++) {
            for (var j = 0; j < text.length; j++) {
                vowelLetters[i] === text[j] && counter++;
            }
        }
      return counter;
    }
    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12
*/

function countVowelLetters(text) {
    text = text.toLowerCase().split('');
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let counter = 0;

    text.forEach(item => vowelLetters.includes(item) === true && counter++);
    return counter;

}

//console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку')); // 12

// ------------ ПРАКТИЧЕСКИЕ ЗАДАНИЯ ПО ES6 ------------ //

/*  Задание 7:
    Написать функцию, принимающую массив объектов вида:
      [
          {name: 'Vasya Pupkin', age: 25},
          {name: 'Ivan Petrov', age: 30},
          {name: 'Fedor Ivanov', age: 42}
      ]
    и возвращающую объект вида:
      {
          Пользователи младше 40: [
              {name: 'Vasya Pupkin', age: 25},
              {name: 'Ivan Petrov', age: 30}
          ],
          Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
      }
    Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.
 */

const array = [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30},
    {name: 'Fedor Ivanov', age: 42}
];

function funcFilter(arr, name) {
    arr.reduce((sum, current) => {

        const valueName = current[name];

        if (valueName === 'Ivan Petrov') sum[valueName] = [current];


        return console.log(sum);
    }, {});
}

funcFilter(array, 'name');



