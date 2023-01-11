

/* Практическое задание (продолжение предыдущего задания):
    По клику на имеющуюся кнопку (получать ее по тегу) найти все дочерние ссылки у первого абзаца с помощью возможностей
    DOM-навигации и произвести соответствующие действия с ссылками (задание стилей лучше использовать через добавление
    css-класса). Установить событие клика на второй абзац (!!!) другим способом. Если пользователь нажимает на ссылки
    2-го абзаца, необходимо отменить им поведение по-умолчанию и вывести alert со значением атрибута href ссылки. 
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
        alert(atribut);
        event.preventDefault();
    }
});


/* Задание 1:
    Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
    "Добавить".
    По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
    По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.
    При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.
    При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).
    В одно время в таблице может находиться только один активный инпут.
    При реализации использовать делегирование событий.

    Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. Событие должно работать точно
    так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст. * 
*/










