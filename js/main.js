const homeSlider = new Swiper('.swiper', {
  speed: 800,
  effect: 'fade',
  centeredSlides: true,
  pagination:{
  el: '.home-slider__pagination',
  type: 'custom',
  renderCustom:function (swiper, current, total){ // текущий слайд и сколько всего слайдов
  let indT = total >= 10 ? total : `0${total}` // если total меньше 10, то добавляем 0 впереди
  let indC = total >= 10 ? current : `0${current}` // если total меньше 10, то добавляем 0 впереди
  return `<b>${indC}</b><span></span>${indT}`
  },
  },
  scrollbar: {
    el: '.home-slider__scrollbar',
draggable: true // ползунок можно двигать и он интерактивный
},
navigation: {
prevEl: '.home-slider__prev',
nextEl: '.home-slider__next'
},
keyboard: { // чтобы перелистывать слайды на клавиатуре
enabled: true,
onlyInViewport: false
},
runCallbacksOnInit: true // чтобы сбросить слайд при каждом вызове
})
$(".arrow-right").on("click", function() { //функция кторая делает перемотку к той цифре к которой нужно
  $("html").animate({ scrollTop: 0 }, "slow")
});






