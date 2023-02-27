const button = document.querySelector('.effective-decision-order'); //открываем окно через кнопку
const modalbutton = document.querySelector('.modal'); //само модальное окно
const buttonclose = document.querySelector('.modal-close'); //закрываем окно
console.log(modalbutton);
button.onclick = function () {
  modalbutton.classList.remove('hidden'); //чтоб появилось модальное окно, был класс hiden
}; //по клику модального окна вызываем фукнцию

modalbutton.onclick = function () {
  modalbutton.classList.add('hidden'); //чтобы закрывалось окно при клике на плашку
};

modalbutton.querySelector('.modal-window').onclick = function (event) {
  //внутри плашки находим модальное окно и по нему щелкаем
  event.stopPropagation(); //чтобы окно не закрывалось при нажатии внутри него,отмена погружения в js, чтобы событие не погружалось и тогда модальное окно внутри не будет погружаться
};
buttonclose.onclick = function () {
  modalbutton.classList.add('hidden');
};

let menu = document.querySelector('.menu');
const btn = document.querySelector('.hamburger'); //создаем переменную
btn.onclick = function () {
  //мы берем кнопку кликаем и по клику вызываем функцию
  this.classList.toggle('is-active'); //ссылка на то что кликаем, toggle добавляет класс,при повторном клике убирает
  menu.classList.toggle('open'); /*чтобы появлялось меню*/
};
