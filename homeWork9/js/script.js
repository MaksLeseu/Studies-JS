

/*Практическое задание 2:
      Добавить в класс Cat приватное свойство foodAmount, равное 50, и приватный метод formatFoodAmount, который
      будет возвращать это свойство + слово 'гр.'. В методе feed необходимо выводить в консоль информацию вида:
        "Насыпаем в миску (количество гр.) корма."
      "Количество гр." получаем с помощью метода formatFoodAmount.
      Вывести в консоль результат выполнения метода feed. */


function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр';
    }

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску' + ' ' + formatFoodAmount() + ' ' + 'корма');
    }   
}


/* Написать единый геттер-сеттер dailyNorm для установки/получения количества корма (foodAmount).
  Оно не должно быть меньше 50 и больше 500 грамм. В случае некорректного количества возвращать сообщение об ошибке.
  Если функция вызывается как геттер - она должна возвращать уже отформатированное значение foodAmount.
  Протестировать метод dailyNorm с разными значениями параметра и без него. Метод feed должен оперировать актуальной
  информацией (использовать внутри метода вызов геттера). */


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


/* Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
  Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
    "Насыпаем в миску (количество гр.) корма.
    Кот доволен ^_^"
  Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
  Все вызовы, которые работали ранее, должны по-прежнему работать корректно. */

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

/* Добавить публичный метод stroke, который будет выводить в консоль информацию "Гладим кота.".
  Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
  последовательности и сколько угодно раз.
  (Лишние логи можно убрать, делать всё в том же задании). */

