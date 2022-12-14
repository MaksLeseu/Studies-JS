

/* Задание 1:
    Создать функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно
    свойство есть. 


var arr = {};

var brr = {name: 'Maks', age: 25, country: 'Poland'};

function isEmpty(obj) {
    
    for (var key in obj) {
        if (key) {
            return false;
        } 
        
    }
    return true;
}

alert( isEmpty(arr) );


/* Задание 2:
    Написать функцию pow(x, n), которая возвращает x в степени n,
    иначе говоря, умножает x на себя n раз и возвращает результат.
    Запросить у пользователя x и n, а затем вывести результат pow(x, n).
    В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.


var valueX = +prompt('Напишите число:');
var valueN = +prompt('Напишите число:');

function pow (x, n) {
    if (valueN < 1 || valueN % 1 !== 0) 
        return alert('Неправильное число');

    var sum = x; 
    for (var i = 1; i < n; i++) {
        sum = sum * x; 
    }
    return sum; 
}

(typeof pow(valueX, valueN) == "undefined") ? alert('Обновите страницу и попробуйте ещё раз !'):
    alert ( pow(valueX, valueN));



/* Задание 3:
    Написать функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
      sumTo(1) = 1
      sumTo(2) = 2 + 1 = 3
      sumTo(3) = 3 + 2 + 1 = 6
      sumTo(4) = 4 + 3 + 2 + 1 = 10
      sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

    Сделать три варианта решения:
      - с использованием цикла
      - через рекурсию, sumTo(n) = n + sumTo(n-1) для n > 1
      - с использованием формулы для суммы арифметической прогрессии

    Ответить на вопросы в комментариях:
      Какой вариант решения самый быстрый? Самый медленный? Почему?
      Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему? 



// --- С использованием цикла --- //


function sumTo (n) {
    var sum = 0;

    for (var i = 1; i < n; i++) {
        sum = sum + i; 
    }
    var result = sum + n; 
    return result;
}

alert(sumTo(4));


// ------- Через рекурсию ------- //


function sumTo(n) {
    
    if (n == 1) {   
        return n;         
    } else {
        return n + sumTo(n - 1);  
    } 
}

alert( sumTo(4) ); 

// --- Через рекурсию (с помощью тернерного оператора) --- //

function sumTo(n) {
    return (n == 1) ? n : n + sumTo(n - 1);
}

alert( sumTo (4) );


// -- С использованием формулы для суммы арифметической прогрессии -- //   Sn = ((A1 + An) * An ) / 2;


function sumTo (n) {
    return ((1 + n) * n) / 2;
}

alert (sumTo (4));


/* Задание 4:
    Разработать функцию treeSum, которая будет принимать массив, элементы которого могут быть числами или снова массивами,
    и так до любого уровня вложенности. Функция должна рассчитать и вернуть сумму всех числовых элементов массива.
    Некоторые уточняющие условия:
      - Если работаем с числом - должна присутствовать проверка на то, что это число и оно корректно (не NaN)
      - Если работаем с массивом - для определения массива метод isArray использовать запрещено, необходимо нагуглить
        способ, как определить, что перед вами массив - с использованием только пройденных тем
      - Другие значения, помимо числа и массива, разрешается не обрабатывать, однако они не должны ломать работу функции
      - Функция должна быть чистой
      - При написании функции не описывать каких-либо вложенных в неё функций
      - При решении также запрещено использование методов join/split и всего того, что еще не было пройдено
    Проверить работу функции можно на следующем массиве (сумма должна быть равна 50):
      [
        5, 7,
        [4, [2], 8, [1, 3], 2],
        [9, []],
        1, 8
      ]


      var str = String(brr);
        for (var j = 0; j < str[index]; j++) {
            
            var num = parseInt(str);
            console.log('В цикле: ' + num);
        }
        // (1) Хотел перевести все в строку, в том числе вложенный массив. И после перевести через parseInt в цикле в числа,
        // так как во вложенном массиве числа шли через запятую. 


var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];


var i = 0;
var brr = 0;
var insideArray = 0;

function treeSum(x) {
    
    if(i == x.length) {
        return x;
    } 
    //console.log('Итерация: ' + i);
    
    if (typeof x[i] == "object" && x[i].length > 0) {
        //console.log(x[i]);
        var array = x[i];
        //console.log(array);
        for (var j = 0; j < array.length; j++) {
           
            if (typeof array[j] == "object" && array[j].length > 0) {
                
            } else {
                insideArray = insideArray + array[j];
                console.log(insideArray);
            }
        }
        
        
    } else {
        brr = brr + x[i]; 
        //console.log(brr);
    }
    
    i++;
    treeSum(x); 
}

treeSum(arr);


 // Убедится typeof далее length не должно быть undefined и что не null 
 // isNaN проверка на NaN
 // Делать через рекурсию 

 // for (var key in arr)
 // arr.length 

/*

if (typeof brr == "object") {
            for (var j = 0; j <= brr.length; j++) {
                //console.log(brr)    
                inside = brr.pop();
                //console.log('Свойства inside: ' + inside);
                // console.log(inside);
            }
        } else {
           
            //console.log(brr);
            var numb = [];
            numb.push(brr);
            
            
            
        }




var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];


function treeSum(x) {
    var brr = [];
    for (let i = 0; i < x.length; i++) {  // 5, 7, arr, arr, 1, 8
        //console.log(x);
        
        if (typeof x[i] == "object") {
            //console.log('true');
        } else {
            brr.push(x[i]);
           // console.log(brr);
        }
    }
    //console.log(brr);
}

treeSum(arr);


*/


var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
  ];


var brr = 0;
var insideArray;
var sumInside = 0;

function treeSum(x) {
    for (var i = 0; i < x.length; i++) {

        if (typeof x[i] == "object" && x[i].length > 0) {
            treeSum(x[i]);
            insideArray = x[i];

            for (var j = 0; j < insideArray.length; j++) {
                if (typeof insideArray[j] == "number") {
                    sumInside = sumInside + insideArray[j];
                    console.log(sumInside);
                }
            }
        } else {
            
        }
    }
    return;

}

treeSum(arr);


// В процессе решения ...