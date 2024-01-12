// Строгий режим
"use strict"

const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});




/* ---------------------------------БУРГЕР МЕНЮ---------------------------------------- */

/* const text = "Цукерочка"
let template = ``;

function createText(someText) {
	for (let i = 0; i < someText.length; ++i) {
		const item = someText[i]
		template += `<span style="animation-delay: 0.${i}s">${item}</span>`
	}
}
createText(text);

const page = document.querySelector('.page');
page.insertAdjacentHTML("beforeend", template); */

/* =====================================slider-FON=============================================== */

$('.sliderbig').slick({
    arrows:false,   /* кнопки: true - включить, false - выключить */   
    dots: false,      /* точки для переключения кратинок */  
    infinite: true,  /* бесконечное перелистывание фото */
    fade:true,     /* будет только 1 фото видна, что нам и нужно */
    speed: 300,    /* со скоростью 1 сек. */
    slidesToShow: 1, /* здесь указываем количество слайдов, которое хотим отобразить за 1 раз */   
    slidesToScroll:1, /* количество слайдом за 1 пролистывание */
    adaptiveHeight: true, /* автоматическая Адаптивная высота слайда-картинки */

    autoplay:true, /* авто перелистывание */
    swipe:true, /* на мобильных устройствах можно свайпать фото пальцем */
    cssEase: 'linear' /* классный эффект перелистывания */
});
  /* =====================================slider2-FON=============================================== */


