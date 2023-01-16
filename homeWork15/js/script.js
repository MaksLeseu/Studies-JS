
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

        if (localStorage.getItem(target.innerText) == null) {
            localStorage.setItem(target.innerText, atribut);
            alert('Информация сохранена');
        } else {
            alert(localStorage.getItem(target.innerText));
        }
        event.preventDefault();
    }
});

window.onload = function() {
    localStorage.clear();
}

