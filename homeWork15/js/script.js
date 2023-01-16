
/* 
  Задание 1:
    Практическое задание (продолжение предыдущего задания):
      По кликам на ссылки второго абзаца проверять, если информации об этой ссылке нет в LS - записать ее туда. Ключом
      должен быть текст ссылки, а значением объект вида { path: (путь ссылки) }. После записи изменить значение атрибута
      href ссылки на "#" и выводить alert с уведомлением о том, что ссылка была сохранена.
      Если же информация об этой ссылке уже записана в LS, выводить в alert путь ссылки из объекта из хранилища.
      При загрузке страницы localStorage должен очищаться. 
*/

var block = document.getElementById('block'); 
var button = document.getElementsByTagName('button')[0];

var newElement = document.createElement('p');
var newElementTwo = document.createElement('p');

newElement.innerHTML = 'Hello, here are <a href="">Link 1</a> and <a href="">Link 2</a>';
newElementTwo.innerHTML = 'Hello, here are <a href="https://www.facebook.com/">Link 3</a> and <a href="https://www.youtube.com/">Link 4</a>';

block.appendChild(newElement);
block.appendChild(newElementTwo);


button.onclick = function() {
    var nodes = block.firstElementChild;
    var teg = nodes.children;
    for (var i = 0; i < teg.length; i++) {
        teg[i].classList.add('color');
    }
}   

var two = block.lastElementChild;

two.addEventListener('click', function(event) {
    var target = event.target;
    
    if (target.tagName == 'A') {
        var atribut = target.getAttribute('href');
        var arr = {};
        
        if (localStorage.getItem(target.innerText) == null) {
            arr.path = atribut;
            var arrTwo = JSON.stringify(arr);

            localStorage.setItem(target.innerText, arrTwo);
            alert('Информация сохранена');
        } else {
            alert(atribut);
        }
        event.preventDefault();
    }
});

window.onload = function() {
    localStorage.clear();
}



/* 
  Задание 2:
    Добавить на страницу два поля для ввода - X и Y и кнопку "Create".
    Если хотя бы одно из полей пустое - кнопка дизэйблится (делать по keyup).
    Поля должны принимать только целые числа от 1 до 10, в противном случае должно выводиться сообщение об ошибке
    (делать по click).
    По клику на кнопку должна отрисоваться шахматная доска с размерами X по горизонтали и Y по вертикали.
    При введении значений X и Y заново таблица должна корректно перерисоваться.
    По клику на любое поле доски - цвета всех полей должны изменяться на противоположные. 
*/

//var form = document.getElementsByClassName('form');
var form = document.getElementById('forma');
//var inputX = document.getElementById('input-x');
var inputY = document.getElementById('input-y');
var input = document.getElementsByTagName('input');
var button = document.getElementById('button-create');




form.addEventListener('keyup', function(event) {
    var target = event.target;
    
    if (target.tagName == 'INPUT') {
        var inp = target;
        
        console.log(Number(inp.value));

        if (typeof Number(inp.value) === 'number' && 
        Number(inp.value) !== NaN) {
            console.log('number working');
        }
    }
    
});

button.onclick = function() {
    console.log('working button');
}

/*
f (inputX.value == '') {
    console.log('This is string');
} else {
    if (typeof inputX.value === 'string') {
        console.log('Yes');
    }
}
if (inputX.value == '') {
    console.log('Yes');
} else {
    console.log('No')
}

*/


