let login = prompt('Введите логин', '')
let message = (login === 'Вася') ? 'Привет' : 
              (login === 'Директор') ?  'Здравствуйте' :
              (login === '') ? 'Нет логина' : 'Неверный логин';
              alert( message );

