let name = prompt();
let date = new Date();
let weekday = date.getDay();
let options = { weekday: 'long'};
console.log('Привет, мир! Моё имя ' +name+ '! Сегодня у нас ' + new Intl.DateTimeFormat('ru-RU', options).format(date) + '!');