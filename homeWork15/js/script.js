
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
var inputX = document.getElementById('input-x');
var inputY = document.getElementById('input-y');
//var input = document.getElementsByTagName('input'); 
var button = document.getElementById('button-create');
var chess = document.getElementById('chess-board');
var chessChild = document.getElementById('chess-board-child');
var Yparents = document.getElementById('y-parents');
button.disabled = true;




form.addEventListener('keyup', function(event) {
    var target = event.target;
    
    if (target.tagName == 'INPUT') {

        if (inputX.value !== '' && inputY.value !== '') {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
});


button.onclick = function() {
    var inputXValue = Number(inputX.value);
    var inputYValue = Number(inputY.value);

    if (typeof inputXValue === 'number' && !isNaN(inputXValue) &&
    inputXValue !== 0 && inputXValue <= 10 && inputXValue % 1 == 0 &&
    inputYValue % 1 == 0 && typeof inputYValue === 'number' && 
    !isNaN(inputYValue) && inputYValue !== 0 && inputYValue <= 10) {
        var arr = [];

        for (var x = 0; x < inputXValue; x++) {      
            
            var divX = document.createElement('div');
            chessChild.appendChild(divX);

            if (x % 2 == 0) {
                divX.classList.add('white');
            } else {
                divX.classList.add('black');
            }

            for (var y = 1; y < inputYValue; y++) {

                var divY = document.createElement('div');
                chess.appendChild(divY);
                divY.classList.add('flex');
                arr.push(divY);
                
                if (arr.length > inputYValue - 1) continue;
                
                for (var j = 0; j < inputXValue; j++) {

                    var yChild = document.createElement('div');
                    divY.appendChild(yChild);

                    if (y % 2 == 1) {

                        if (j % 2 == 1) {
                            yChild.classList.add('white');
                        } else {
                            yChild.classList.add('black');
                        }
                    } else {
                        if (j % 2 == 0) {
                            yChild.classList.add('white');
                        } else {
                            yChild.classList.add('black');
                        }
                    }
                }
            }
        }

    } else {
        alert('Неправильные данные');
        inputX.value = '';
        inputY.value = '';
        button.disabled = true;
    } 

    
}





/*
(typeof Number(inputX.value) === 'number' && !isNaN(Number(inputX.value)) 
        && Number(inputX.value) !== 0 && Number(inputX.value) <= 10 
        && Number(inputX.value) % 1 == 0 && Number(inputY.value) % 1 == 0 
        && typeof Number(inputY.value) === 'number' && !isNaN(Number(inputY.value)) 
        && Number(inputY.value) !== 0 && Number(inputY.value) <= 10)

*/


