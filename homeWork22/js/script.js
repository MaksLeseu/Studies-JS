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
function funcWrapper() {
    const name = prompt();

    const newObject = {
        name,
        sayHi(name) {
            alert(`Hi ${name}`);
        }
    };

    return newObject.sayHi(name);
}

//funcWrapper();


/* Задание 3:
   Написать функцию, которая будет принимать параметры x, y, z.
   При вызове функции передать в нее первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
   X и Y получаем из свойств переданного в функцию объекта a и b. Н У z значение по-умолчанию должно быть 1.
   Функция должна возвращать результат возведения в стерень y числа x, умноженный на z.
   Валидацию опустить.
*/

function func({a, b}, y, z) {
    let sum = (a ** b) * z;

    return sum;
}

//console.log(func(x = {a: 2, b: 3}, 1, z = 1));


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
    let err = [];
    return arr.reduce((sum, current) => {

        if (current.name === name) sum[`Пользователь с именем Федор`] = [current];

        if (current.age < 40) {
            sum[`Пользователи младше 40:`] = err;
            err.push(current);
        }

        return sum;
    }, {});
}

//console.log(funcFilter(array, 'Fedor Ivanov'));


/* Задание 8:
    Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
      [
          {Пользователь 1: 'Вася'},
          {Пользователь 2: 'Петя'}
      ]
 */

function arrName(arr) {
    return arr.reduce((sum, current, id) => {
        const obj = {};

        obj[`Пользователь ${++id}`] = current;
        sum.push(obj);

        return sum;
    }, []);
}

//console.log(arrName(['Maks', 'Artes', 'Fil', 'Vera', 'Vital']));


/* Задание 9:
    Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
      [
          {name: 'Vasya'},
          {name: 'Piotr', age: 25},
          {salary: '2000$'}
      ]
    необходимо преобразовать в
      {
          name: 'Piotr',
          age: 25,
          salary: '2000$'
      }
    Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.
*/

function unionNewObj(arr) {
    return arr.reduce((sum, current) => {

        Object.assign(sum, current);

        return sum;
    }, {});
}

/*console.log(unionNewObj([
    {name: 'Vasya'},
    {name: 'Piotr', age: 25},
    {salary: '2000$'}
]));

/* Задание 10:
    Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.

function Cat(name) {
  this._foodAmount = 50;
  this.name = name;

  this._self = this;
}

Cat.prototype._formatFoodAmount = function() {
  return this._self._foodAmount + 'гр';
};

Cat.prototype.dailyNorm = function(amount) {
  if (arguments.length == 0) return this._self._formatFoodAmount();

  if (amount < 50 || amount > 500) {
    return console.log('Mistake!');
  }

  this._foodAmount = amount;
};

Cat.prototype.feed = function() {
  console.log('Насыпаем в миску' + ' ' + this._self.dailyNorm() + ' ' + 'корма');
};

// ----------------------------- Наследование класса ----------------------------- //


function Animal() {
  Cat.call(this);
}

Animal.prototype = Object.create(Cat.prototype);
Animal.prototype.constructor = Animal;

Animal.prototype.feed = function() {
  Cat.prototype.feed.call(this);

  console.log('Кот доволен ^_^');
  return this;
};

Animal.prototype.stroke = function() {
  console.log('Гладим кота.');
  return this;
};
 */


class Cat {
    constructor(name) {
        this._foodAmount = 50;
        this.name = name;

        this._self = this;
    }
    _formatFoodAmount() {
        return `${this._self._foodAmount} гр`;
    }
    dailyNorm(amount) {
        if (arguments.length == 0) return this._self._formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return console.log('Mistake!');
        }

        this._foodAmount = amount;
    }
    feed() {
        console.log(`Насыпаем в миску ${this._self.dailyNorm()} корма`);
    }
}
/*
let cat = new Cat();

cat._formatFoodAmount();
cat.dailyNorm(50);
cat.feed(); */

// ----------------------------- Наследование класса ----------------------------- //

class Animal extends Cat {
    constructor() {
        super();
    }
    feed() {
        super.feed();
        console.log('Кот доволен ^_^');
    }
    stroke() {
        console.log('Гладим кота.');
    }
}
/*
let animal = new Animal();

animal.feed();
animal.stroke(); */

/* Задание 11:
    Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
    каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
    Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
    В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.
*/

function createFirstPromise(number1, number2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Промис запущен');

            if(Number.isInteger(number1) === true && Number.isInteger(number2) === true) {
                console.log('Промис решен');

                let timerId = setInterval(() =>{
                    console.log(number1);
                    number1++;
                    if (number1 > number2)  clearInterval(timerId);
                }, 1000)

                resolve(number1, number2);
            }

            reject('не целое число');
        }, 1000)
    });
}

createFirstPromise(5, 10)
    //.then((number1, number2))
    .catch(erorr => console.log(`Ошибка промиса: ${erorr}`))
    .finally(() => console.log('Промис завершил работу!'));





