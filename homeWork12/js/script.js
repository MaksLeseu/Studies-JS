
/* Практическое задание:
    Создать html-страничку, добавить в нее кнопку с текстом "Change links color and weight" и пустой контейнер с id.
    Подключить js-файл.
    Произвести вставку двух тегов-абзацев внутрь имеющегося контейнера с помощью js (использовать подход с createElement).
    Добавить им текстовое содержимое, содержащее помимо текста по 2 разных ссылки.
 */

var block = document.getElementById('block'); 

var newElement = document.createElement('p');
var newElementTwo = document.createElement('p');

block.appendChild(newElement);
block.appendChild(newElementTwo);


newElement.textContent = 'Hello, here are Link 1 and ';
newElementTwo.textContent = 'Hello, here are Link 3 and ';

newElement.insertAdjacentHTML('beforeend', '<a href="">Link 2</a>');

newElementTwo.insertAdjacentHTML('beforeend', '<a href="">Link 4</a>');



/* Задание 1:
    Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
*/


function funcName(arr) {
    var array = [];
    arr.map(function(item) {
        array.push({name: item});
    }); 
    return array;
}

//console.log(funcName(['Maks', 'Vasya', 'Fil', 'Art']));


/* Задание 2:
    Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
    Для решения использовать перебирающий метод массивов (не метод join). 
*/


function funcTime(arr) {
    var time = arr.reduce(function(result, current) {
        return result + ' : ' + current;
    });
    return 'Текущее время : ' + time;
}


//alert(funcTime(['00', '13', '24']));



/* Задание 3:
    Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
    должно быть "топорным". 
*/


function numberVowels(text) {
    var letters = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    var arr = [];
    var array = text.split('');

    for (var i = 0; i < letters.length; i++) {
        
        array.filter(function(item) {
            if (item === letters[i]) {
                arr.push(item);
            }
        });
    }
    return arr.length;
}

//console.log(numberVowels('Решение не должно быть топорным'));



/* Задание 4:
    Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
    восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
    вопросительным знакам - убрав их).
    Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
    запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
    в методе split.

    Функция должна работать следущим образом (потестировать на данном тексте):
      countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
      // Привет, студент: Letters quantity is: 13
      // Студент: Letters quantity is: 7
      // Как дела, студент: Letters quantity is: 14 
*/


function countSentencesLetters(text) {
    var array = text.split(/[!.?]/);
    var arrFilter = array.filter(function(item) {
        return item !== '';
    });

    var arr = arrFilter.map(function(item) {
        var str = item.toString();
        var letters = str.split('');
        var numbers = [];

        for (var i = 0; i < letters.length; i++) {
            if (letters[i] !== ' ' && letters[i] !== ',') {
                numbers.push(letters[i]); 
            } 
        }
        console.log(item + ':' + ' Letters quantity is:' + ' ' + numbers.length);
        //return item + ':' + ' Letters quantity is:' + ' ' + numbers.length;
    });
    //return arr;
}


console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));

