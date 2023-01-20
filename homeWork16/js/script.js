
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
    //var arrGet = [];

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();

    xhr.onload = function() {
        var statusType = Math.round(this.status / 100);

        console.log((statusType === 2) ? JSON.parse(this.response).data : this.status);

        var arr = JSON.parse(this.response).data;

        var parentsElment = document.createElement('form');
        table.insertBefore(parentsElment, elementList);
        parentsElment.classList.add('display');

        var div = document.createElement('div');
        var elementList = table.appendChild(div);
        elementList.classList.add('table__list');

        for (var i = 0; i < arr.length; i++) {

            parentsElment.insertAdjacentHTML('afterbegin', '<button>User</button>'); 
            var elementTab = parentsElment.firstElementChild;
            elementTab.classList.add('table__tab');
            

            elementTab.onclick = function(event) {
              var target = event.target;
              var elementsTab = parentsElment.children;
              
              for (var j = 0; j < elementsTab.length; j++) {
                elementsTab[j].classList.remove('table__tab-active');
                
                var newP = elementList.firstElementChild;
                if (newP) newP.remove();
              }

              if (target.tagName = 'BUTTON') {
                
                target.classList.add('table__tab-active');
                
                for (var j = 0; j < elementsTab.length; j++) {
                  
                  if (elementsTab[j] == target) {
                    
                    var elemenP = document.createElement('p');
                    elementList.appendChild(elemenP);
                    elemenP.innerHTML = 'First Name: ' + arr[j].first_name;
                    elemenP.classList.add('paragraph');

                    var elemenP = document.createElement('p');
                    elementList.appendChild(elemenP);
                    elemenP.innerHTML = 'Last Name: ' + arr[j].last_name;
                    elemenP.classList.add('paragraph');

                    
                    
                    var elemenImg = document.createElement('img');
                    elementList.appendChild(elemenImg);
                    elemenImg.src = arr[j].avatar;
                  }
                }
              } 
            }
        }
        
    };
}


