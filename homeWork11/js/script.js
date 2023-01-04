

/* Задание 1:
    Переписать задачу с использованием перебирающего метода массивов:
      function filterNumbersArr(numbers) {
          var newArr = [];

          for (var i = 0; i < numbers.length; i++) {
              var el = numbers[i];

              if (el > 0) {
                  newArr[newArr.length] = el;
              }
          }

          return newArr;
      }

      filterNumbersArr([-1, 0, 2, 34, -2]); 
*/

var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(numbers) {
    return numbers > 0;
}

//console.log(arr.filter(filterNumbersArr)); 


/* Задание 2:
    Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число. 
*/


var foundArr = arr.find(function(numbers) {
    return numbers > 0;
});

//console.log(foundArr);  


/* Задание 3:
    Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
    Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).

    Функция должна работать следущим образом:
      isPalindrome('шалаШ'); // true
      isPalindrome('привет'); // false 
*/


function isPalindrome(word) {
    var one = word.toLowerCase();
    var two = word.split('').reverse().join('').toLowerCase();
    return two == one;
}

//console.log(isPalindrome('шалаШ')); 
//console.log(isPalindrome('привет'));


/* Задание 4:
    Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
    Регистр в словах учитываться не должен.

    Функция должна работать следущим образом:
      areAnagrams('кот', 'отк'); // true
      areAnagrams('кот', 'атк'); // false
      areAnagrams('кот', 'отко'); // false 
*/


function areAnagrams(x, y) {
    var arrX = x.split('');
    var arrY = y.split('');
    var array = [];

    if (arrY.length === arrX.length) {
        
        for (var i = 0; i < arrX.length; i++) {
            
            var found = arrY.find(function(a) {
                return a == arrX[i];
            });
            
            array.push(found);
        }
    }

    var arr = array.join('');

    return x === arr;
}

//console.log(areAnagrams('кот', 'отк')); 
//console.log(areAnagrams('кот', 'атк')); 
//console.log(areAnagrams('кот', 'отко'));
//console.log(areAnagrams('слон', 'носл'));




/* Задание 5:
    Написать функцию, которая будет разбивать массив на под-массивы определенной длины.

    Функция должна работать следущим образом:
      divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
      divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]] 
*/



