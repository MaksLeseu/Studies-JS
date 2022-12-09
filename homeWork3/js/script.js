
/* Задание 1:
    Задача из 5 шагов-строк (методы массивов использовать можно):
      - Создать массив styles с элементами "Джаз", "Блюз".
      - Добавить в конец значение "Рок-н-Ролл".
      - Заменить предпоследнее значение с конца на "Классика" - код замены должен работать для массивов любой длины.
      - Удалить первое значение массива и вывести его в alert.
      - Добавить в начало значения "Рэп" и "Регги". 
*/

var styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push("Рок-н-Ролл");
console.log(styles);

var el = styles.pop();
styles.pop();
styles.push("Классика");
styles.push(el);
console.log(styles);

alert(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);


/* Задание 2:
    При помощи цикла for вывести чётные числа от 2 до 10. Придумать несколько решений. 
*/

for (var i = 1; i < 11; i++) {
    if (i % 2 == 1) continue;
    alert(i);
}

//---------------------------------------//

for (var i = 1; i < 11; i++) {
    if (i == 2 
        || i == 4 
        || i == 6 
        || i == 8 
        || i == 10) {
        alert(i);
    } 
}

//---------------------------------------//

for (var i = 1; i < 11; i++) {
    if (i % 2 !== 0) continue;
    alert(i);
}



/* Задание 3:
    Написать код, который:
    запрашивает по очереди значения при помощи prompt и сохраняет их в массиве,
    заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт "Отмена"
    (при этом ноль 0 не должен заканчивать ввод, это разрешённое число), выводит сумму всех значений массива (подсчет
    осуществлять именно из уже сформированного массива) 
*/

var numberOne = prompt('Напишите число:');

if (!isNaN(numberOne) && numberOne !== '' && numberOne !== null) {
    var numberTwo = prompt('Напишите число 2:');
} 

if (!isNaN(numberTwo) && numberTwo !== '' && numberTwo !== null) {
    var numberThree = prompt('Напишите число 3:');
}

if (!isNaN(numberThree) && numberThree !== '' && numberThree !== null) {
    var data = [];
    data.push(+numberOne, +numberTwo, +numberThree);
    console.log(data); 
    alert(data[0] + data[1] + data[2]);
}






