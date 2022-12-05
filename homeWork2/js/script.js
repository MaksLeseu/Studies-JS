
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
   
var number = prompt('Напишите число:');

var numberAddition = prompt('Сколько прибавить?');    
var sumAddition = (+number) + (+numberAddition);

var numberSubtract = prompt('Сколько отнять?');
var sumSubtract = sumAddition - numberSubtract;

var numberMultiplication = prompt('Сколько умножить?');
var sumMultiplication = sumSubtract * numberMultiplication;

var numberDivision = prompt('Сколько разделить?');
var sumTotal = sumMultiplication / numberDivision;

alert(
    'Формула: ' + number + ' + ' + numberAddition + ' - ' + numberSubtract + ' * ' + numberMultiplication + ' / ' + numberDivision + '\nРезультат: ' + sumTotal,
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



/*  Задание 3:
    Переписать if..else с использованием нескольких тернарных операторов:

var login = prompt('Логин');
var message;

if (login === 'Вася') {
    console.log(message = 'Привет');
} else if (login === 'Директор') {
    console.log(message = 'Здравствуйте');
} else if (login === '') {
    console.log(message = 'Нет логина');
} else {
    console.log(message = '');
}
*/

var login = prompt('Логин');
var message;

message = (login === 'Вася') ? console.log('Привет') :
    (login === 'Директор') ? console.log('Здравствуйте') :
    (login === '') ? console.log('Нет логина') : console.log('') ;



/*Задание 4 *:
    Написать код, который будет спрашивать у пользователя:
      - Фамилию, имя, отчество (раздельно)
      - Возраст в годах
      - Пол (оператором confirm, например, "Ваш пол - мужской?")
    и выводить в один alert анкету пользователя вида:
      "Ваше ФИО: Иванов Иван Иванович
      Ваш возраст в годах: 20
      Ваш возраст в днях: 7300
      Через 5 лет вам будет: 25
      Ваш пол: мужской
      Вы на пенсии: нет"
    Также должна присутствовать следующая валидация:
      - Поля ФИО не должны быть пустыми
      - Возраст не должен быть пустым, не должен пропускать буквы, должен быть корректным (не NaN) и адекватным числом
      - Високосные года в подсчете количества дней разрешается не учитывать
      - Пенсия должна высчитываться исходя из пола и возраста
    Поведение при ошибках валидации:
      - При вводе неверных данных в поле необходимо вывести сообщение об ошибке и запросить данные заново (здесь можно
        использовать ранее не пройденную конструкцию)
      - При нажатии на "Отмена" можно использовать поведение, описанное выше, или же просто в итоговой анкете вместо
        данных из поля подставлять прочерк */



while (true) {
    var userName = prompt('Имя');
    console.log(userName);
    if (userName == '' || typeof userName == "object") {
        alert('Упс  :(   Что-то пошло не так!');
    } else {
        break
    }
}

while (true) {
    var userSurName = prompt('Фамилия');
    console.log(userSurName);
    if (userSurName == '' || typeof userSurName == "object") {
        alert('Упс  :(   Что-то пошло не так!');
    } else {
        break
    }
}
while (true) {
    var userMiddleName = prompt('Отчество');
    console.log(userMiddleName);
    if (userMiddleName == '' || typeof userMiddleName == "object") {
        alert('Упс  :(   Что-то пошло не так!');
    } else {
        break
    }
}

while (true) {
    var userAge = +prompt('Сколько вам лет?');
    console.log(userAge);
    if (userAge) {
        break
    } else {
        alert('Упс  :(   Что-то пошло не так!');
    }
}

var userGender = confirm('Ваш пол мужской?');

if (userAge > 64 && userGender == true) {
    var userAgeYear = userAge * 365;
    var userAgeFiefe = +userAge + 5;
    alert('Ваше ФИО: ' + userName + ' ' + userSurName + ' ' + userMiddleName + '\nВаш возраст в годах: ' + userAge + '\nВаш возраст в днях: ' + userAgeYear + '\nЧерез 5 лет вам будет: ' + userAgeFiefe + '\nВаш пол: мужской' + '\nВы на пенсии: да');
} else if (userAge < 64 && userGender == true) {
    var userAgeYear = userAge * 365;
    var userAgeFiefe = +userAge + 5;
    alert('Ваше ФИО: ' + userName + ' ' + userSurName + ' ' + userMiddleName + '\nВаш возраст в годах: ' + userAge + '\nВаш возраст в днях: ' + userAgeYear + '\nЧерез 5 лет вам будет: ' + userAgeFiefe + '\nВаш пол: мужской' + '\nВы на пенсии: нет');
} else if (userAge > 60 && userGender == false) {
    var userAgeYear = userAge * 365;
    var userAgeFiefe = +userAge + 5;
    alert('Ваше ФИО: ' + userName + ' ' + userSurName + ' ' + userMiddleName + '\nВаш возраст в годах: ' + userAge + '\nВаш возраст в днях: ' + userAgeYear + '\nЧерез 5 лет вам будет: ' + userAgeFiefe + '\nВаш пол: женский' + '\nВы на пенсии: да');
} else if (userAge < 60 && userGender == false) {
    var userAgeYear = userAge * 365;
    var userAgeFiefe = +userAge + 5;
    alert('Ваше ФИО: ' + userName + ' ' + userSurName + ' ' + userMiddleName + '\nВаш возраст в годах: ' + userAge + '\nВаш возраст в днях: ' + userAgeYear + '\nЧерез 5 лет вам будет: ' + userAgeFiefe + '\nВаш пол: женский' + '\nВы на пенсии: нет');
}


