
/* Задание 1:
    Написать программу, которая проделывает следующие операции:
    запрашивает у пользователя число,
    затем последовательно задает вопросы "Сколько прибавить/отнять/умножить/разделить от предыдущего результата?".
    Сложение и вычитание выполнять в первую очередь.
    По окончании вывести пользователю один alert, содержащий математически Правильную формулу
    и результат вида:
      "Формула: 6 + 10 - 5 и т.д.
      Результат: 11"
*/
      
var writeNumber = prompt('Напишите число:');

var questionAddition = prompt('Сколько прибавить?');    
var sumAddition = (+writeNumber) + (+questionAddition);

var questionSubtract = prompt('Сколько отнять?');
var sumSubtract = sumAddition - questionSubtract;

var questionMultiplication = prompt('Сколько умножить?');
var sumMultiplication = sumSubtract * questionMultiplication;

var questionDivision = prompt('Сколько разделить?');
var sumTotal = sumMultiplication / questionDivision;

alert(
    'Формула: ' + writeNumber + ' + ' + questionAddition + ' - ' + questionSubtract + ' * ' + questionMultiplication + ' / ' + questionDivision + '  Результа: ' + sumTotal,
);


/* Задание 2:
    Написать код, который:
    будет спрашивать логин (prompt),
    если посетитель вводит "Админ", то спрашивать пароль, если нажал отмена – выводить "Вход отменён",
    если вводит что-то другое – "Я вас не знаю".
    Пароль проверять так. Если введён пароль "Чёрный Властелин", то выводить "Добро пожаловать!",
    при отмене – "Вход отменён", иначе – "Пароль неверен".
    Для решения использовать вложенные блоки if.
*/

var login = prompt('Логин:');

if (login == 'Админ') {
    var password = prompt('Пароль:');
} else if (login == null) {
    alert('Вход отменён');
} else {
    alert('Я вас не знаю');
}

if (password == 'Чёрный Властелин') {
    alert('Добро пожаловать!');
} else if (password == null) {
    alert('Вход отменён');
} else {
    alert('Пароль неверен');
}

