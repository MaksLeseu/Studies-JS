
/* 
  Задание 1:
    Добавить на страницу кнопку "Загрузить список пользователей".
    По клику на нее осуществляется AJAX (GET) запрос на https://reqres.in (List Users).
    В случае успешного получения данных:
      - ДИНАМИЧЕСКИ добавить на страницу вкладки "Пользователь 1", "Пользователь 2" и т.д.
      (в соотв. с количеством пользователей)
      - сделать первую вкладку активной и показать под ней блок с информацией о пользователе
      - вкладки должны иметь возможность переключаться и отображать соответствующие данные
      - полученные данные должны записываться в LocalStorage *
      - по клику на кнопку должна происходить проверка, если данные есть в LocalStorage, не отправлять AJAX запрос, а
        сразу отрисовывать их *
    В случае ошибки получения данных (протестировать можно, изменив url запроса как в примере с урока):
      - отрисовать на странице сообщение о том, что данные не получены, в произвольном виде
    Перед отправкой ОБЯЗАТЕЛЬНО (!!!) порефакторить код и протестировать ваше приложение на работоспособность и
    максимально на отсутствие багов. 
*/

var button = document.getElementById('btn');
var table = document.getElementById('table');


button.onclick = function() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();



    xhr.onload = function() {
        var statusType = Math.round(this.status / 100);

        if (statusType === 2) {
            var arr = JSON.parse(this.response).data;
        } else {
            var error = document.createElement('p');
            table.appendChild(error).innerHTML = 'Ошибка!!!' + ' Данные не получены.' + ' Попробуйте изменить URL';
            error.classList.add('error');
            return false;
        }


        var tableChild = table.firstElementChild;
        if (tableChild) return false;



        var parentsElment = document.createElement('form');
        table.insertBefore(parentsElment, elementList);
        parentsElment.classList.add('display');


        var div = document.createElement('div');
        var elementList = table.appendChild(div);
        elementList.classList.add('table__list');


        var paragraphFirstActiveTab = document.createElement('p');
        var paragraphLastActiveTab = document.createElement('p');
        var imgActiveTab = document.createElement('img');
        

        for (var i = 0; i < arr.length; i++) {

            parentsElment.insertAdjacentHTML('afterbegin', '<button>User</button>'); 
            var elementTab = parentsElment.firstElementChild;
            elementTab.classList.add('table__tab');

            elementTab.innerHTML += ' ' + (i + 1);

        
            if (i == 5) parentsElment.children[0].classList.add('table__tab-active');
            

            elementList.appendChild(paragraphFirstActiveTab).innerHTML = 'First Name: ' + arr[0].first_name;
            elementList.appendChild(paragraphLastActiveTab).innerHTML = 'Last Name: ' + arr[0].last_name;
            elementList.appendChild(imgActiveTab).src = arr[0].avatar;

            paragraphFirstActiveTab.classList.add('paragraph');
            paragraphLastActiveTab.classList.add('paragraph');
           


            elementTab.onclick = function(event) {
                var target = event.target;
                var elementsTab = parentsElment.children;
              


                for (var j = 0; j < elementsTab.length; j++) {
                    elementsTab[j].classList.remove('table__tab-active');
                
                    var newParagraph = elementList.firstElementChild;
                    if (newParagraph) newParagraph.remove();
                }



                if (target.tagName = 'BUTTON') {
                
                    target.classList.add('table__tab-active');
                
                    for (var j = 0; j < elementsTab.length; j++) {
                  

                        if (elementsTab[j] == target) {
                    
                            var elementParagrephFirst = document.createElement('p');
                            elementList.appendChild(elementParagrephFirst).innerHTML = 'First Name: ' + arr[j].first_name;
                            elementParagrephFirst.classList.add('paragraph');


                            var elementParagraphLast = document.createElement('p');
                            elementList.appendChild(elementParagraphLast).innerHTML = 'Last Name: ' + arr[j].last_name;
                            elementParagraphLast.classList.add('paragraph');

        
                            var elementImg = document.createElement('img');
                            elementList.appendChild(elementImg).src = arr[j].avatar;
                        }
                    }
                } 
            }
        }
    };
}





