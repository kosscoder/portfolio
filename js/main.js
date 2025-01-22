const nav = document.querySelector('.hero__main-nav');
const menuBtn = document.querySelector('.main-nav__btn');
const menuBtnImg = document.querySelector('.main-nav__btn-img');

menuBtn.addEventListener('click', () => {

	if (nav.classList.toggle('--open')) {
		menuBtnImg.src = "./img/icons/nav_close.svg"
	} else {
		menuBtnImg.src = "./img/icons/nav_open.svg"
	}

})

// once - анимация отрабатывает один раз
// disable: mobile - не будут анимации на девайсах
AOS.init({
	// disable: mobile,
	// once: true,
}); 
