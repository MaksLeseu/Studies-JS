

/* Практическое задание 1: Переписать Класс из функционального стиля в прототипный. */

// ------ Функциональный стиль ------ //

function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };
} 

// ------ Прототипный стиль ------ //

function CoffeeMachine(power) {  
    this._power = power;
    this._waterAmount = 0;
    this._WATER_HEAT_CAPACITY = 4200;
}

CoffeeMachine.prototype._getTimeToBoil = function() {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        alert( 'Кофе готов!' );
    }, console.log(this._getTimeToBoil()));
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};
/*
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run(); */


/* Задание 1:
    Переписать предыдущий пример с кошками на прототипный стиль ООП. 

function Cat(name) {
  var foodAmount = 50;

  function formatFoodAmount() {
    return foodAmount + 'гр';
  }  

  this.dailyNorm = function(amount) {
    if (arguments.length == 0) return formatFoodAmount();

    if (amount < 50 || amount > 500) {
      return console.log('Mistake!');
    }

    foodAmount = amount;
  }

  this.name = name;

  var self = this;

  this.feed = function() {
    console.log('Насыпаем в миску' + ' ' + self.dailyNorm() + ' ' + 'корма');
  } 
}

// ----------------------------- Наследование класса ----------------------------- //

function Animal() {
  Cat.call(this);

  var animalFeed = this.feed;
  
  this.feed = function() {
    animalFeed();
    
    console.log('Кот доволен ^_^');
    return this;
  }

  this.stroke = function() {
    console.log('Гладим кота.');

    return this;
  }
}

var animal = new Animal();
animal.feed().stroke();    
*/


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
/*
var animal = new Animal();

animal.feed().stroke();



/* 
  Задание 2:
    Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
    (+ массивы и функции), а также любого уровня вложенности. Метод isArray использовать можно.

    1. Написать проверку на объект или массив
    2. От проверки должна вызываться рекурсия, которая должна копировать значения. 
    3. Написать цикл, который будет копирывать все значения в новый объект?
    Какие инструменты у меня есть: 
    - Нужно написать цикл, выявить ключи со значениями.

    Протестировать работу функции можно на таком примере:
      var initialObj = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };

      var clonedObj = deepClone(initialObj);

      clonedObj.object.object2.array2[1].name = 'Vasya';
      clonedObj.array.push(2);

      console.log(initialObj);
      console.log(clonedObj); 
*/

var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
      string2: 'Petrov',
      object2: {
          array2: [{}, {}]
      },
      object3: {}
  },
  method: function() {
      alert('Hello');
  }
};


function deepClone(x) {
  var sum = {};
  var array;

    for (var k in x) {
      if (typeof x[k] == "object" && x[k] !== null) {
        
        array = x[k];
        sum[k] = array;

        x[k] = deepClone(x[k]);
      } else { 
        sum[k] = x[k];
      }
    }
  return sum;
}


var clonedObj = deepClone(initialObj);


/*
clonedObj.boolean = false;
clonedObj.string = 'Maks super';
clonedObj.array.push('This'); 
clonedObj.object.string2 = 'Maks klasss';

console.log(initialObj);
console.log(clonedObj);

/* 
  Задание 3:
    Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
    (+ массивы и функции), а также любого уровня вложенности. Для определения длины объектов разрешается использовать
    метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания). */


var initialObjTwo = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
      string2: 'Petrov',
      object2: {
          array2: [{}, {}]
      },
      object3: {}
  },
  method: function() {
      alert('Hello');
  }
};


function globalComparison(x, y) {
  var arrOne = [];
  var arrTwo = [];

  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }

  for (var k in x && y) {
    arrOne.push(x[k]);
    arrTwo.push(y[k]);
  } 

  for (var i = 0; i < arrOne.length && arrTwo.length; i++) {

    if (typeof arrOne[i] == "object" && arrOne[i] !== null ||
    typeof arrTwo[i] == "object" && arrTwo[i] !== null) {

      if (Object.keys(arrOne[i]).length !== Object.keys(arrTwo[i]).length ||
      !globalComparison(arrOne[i], arrTwo[i])) {
        return false;
      } 

    } else if(typeof arrOne[i] == "function") {
   
      if (String(arrOne[i]) !== String(arrTwo[i])) {
        return false;
      }

    } else {

      if (arrOne[i] !== arrTwo[i]) {
        return false;
      } 

    }
  }
  return true;
}

var func = globalComparison(initialObj, initialObjTwo);

console.log(func);






