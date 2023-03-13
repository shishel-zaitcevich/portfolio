console.log("Вёрстка валидная +10 \nВёрстка семантическая +20 \nВёрстка соответствует макету +48 \nТребования к css + 12 \nИнтерактивность, реализуемая через css +20");

let menuBtn = document.querySelector('.burger-button');
let menu = document.querySelector('.burger-nav');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('burger-active');
	menu.classList.toggle('burger-active'); 
});

menu.addEventListener('click', closeMenu);
function closeMenu (event){
if (event.target.classList.contains('burger-link')){
	menu.classList.add('burger-active'); 
	menuBtn.classList.remove('burger-active');
}
};

console.log("Самооценка за портфолио часть 2\nВёрстка соответствует макету. Ширина экрана 768px +48\n блок <header> +6\nсекция hero +6\nсекция skills +6\nсекция portfolio +6\nсекция video +6\nсекция price +6\nсекция contacts +6\nблок <footer> +6\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\nнет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\nнет полосы прокрутки при ширине страницы от 768рх до 480рх +5\nнет полосы прокрутки при ширине страницы от 480рх до 320рх +5\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\nвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n	при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\nобщий балл: 85");


const portfolioBtns = document.querySelectorAll('.portfolio-btn');
portfolioBtns.forEach((portfolioBtn) => {
	let folder = portfolioBtn.dataset.season;
	portfolioBtn.onclick = function() {
        const portfolioImages = document.querySelectorAll('.portfolio-image');
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${folder}/${index + 1}.jpg`);
	}
});

function preloadImages() {
	for(let i = 1; i <= 6; i++) {
	  const img = new Image();
	  const portfolioBtns = document.querySelectorAll('.portfolio-btn');
	  let folder = portfolioBtn.dataset.season;
	  img.src = `./assets/img/summer/${i}.jpg`;
	}
};

const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach((seasons) => {
	preloadImages();
});

  




