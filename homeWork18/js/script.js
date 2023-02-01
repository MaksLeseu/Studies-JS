
/* Задание 1:
    Написать регулярное выражение, которое будет тестировать на соответствие строки вида - name_surname-1234@gmail.com :
      - имя и фамилия должны состоять только из англ. букв и быть длиной (каждая часть) от 3 до 10 символов, между
        ними _обязательно
      - далее опциональная часть, начинающаяся с тире и состоящая из 4-х цифр
      - затем обязательный знак @
      - название почтового сервиса должно быть длиной от 2-х до 20-ти символов, может состоять из букв английского
        алфавита и цифр, а также опционально может содержать в центре себя одно тире или одну точку
      - сделать так, чтобы точка или тире, указанные выше, могли содержаться в любом месте внутри почтового сервиса,
        кроме начала и конца *
      - обязательная часть .com
    Хорошо протестировать регулярное выражение. 
*/


var regexp = /^[a-z]{3,10}_[a-z]{3,10}(-[\d]{4})?@[a-z\d]{2,20}([- | \.])?\.com$/i.test('name_surname-1234@gmail.com');

//console.log(regexp);


/* Задание 2:
    Написать функцию, которая с помощью регулярного выражения будет тестировать на соответствие строки вида:
      +375-25-777-77-77
      375299999999
      8-044-444-44-44
      8033-6666666
    и возвращать boolean.

    Условия:
      - + перед 375 - опциональный
      - номер может начинаться с 375 (без 0) либо с 80
      - номер должен содержать один из кодов - 25, 29, 33, 44 либо 17
      - основная часть номера не может начинаться с 0
      - некоторые или все тире могут быть пропущены, но расположение тех, которые пропущены не будут, может быть только
        таким, как в примерах 1 и 3

    Перед отправкой постараться максимально оптимизировать своё решение и убрать все лишнее.
*/


function numberTelephone(telephone) {
  return /^(\+?[375]{3}-?|[8\-?0]{2,3})([25]{2}|[29]{2}|[33]{2}|[44]{2}|[17]{2})-?([1-9]{7}|[1-9]{3}-?[1-9]{2}-?[1-9]{2})$/
  .test(telephone);
}

//console.log(numberTelephone('8033-6666666'));


/* Задание 3:
    Переписать решение задачи с поиском гласных с использованием регулярного выражения. Протестировать ситуацию, когда
    гласных в переданном тексте будет 0. По возможности придумать несколько вариантов решения. 


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

console.log(numberVowels('Решение не должно быть топорным'));
*/

function numberVowels(text) {
  var number = text.match(/[аиеёоуыэюя]/ig); 

  if (number == null) {
    return 0;
  } else 
    return number.length;
}

//console.log(numberVowels('Решение не должно быть топорным'));