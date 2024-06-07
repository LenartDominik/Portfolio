document.querySelector('#scroll-down').addEventListener('click', () => {
	window.scrollTo({
		top: document.querySelector('#about-me').offsetTop - 20,
	});
});


document.querySelector('#toggle-theme').addEventListener('click', () => {
	document.documentElement.classList.toggle('light-theme');
});

const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (prefersLight) {
	document.documentElement.classList.add('light-theme');
}


// const nav = document.querySelector('.nav');
// const navBtn = document.querySelector('.burger-btn');
// const allNavItems = document.querySelectorAll('.nav__item');
// const navBtnBars = document.querySelector('.burger-btn__bars');


// const handleNav = () => {
// 	nav.classList.toggle('nav--active');

// 	navBtnBars.classList.remove('black-bars-color');

// 	allNavItems.forEach((item) => {
// 		item.addEventListener('click', () => {
// 			nav.classList.remove('nav--active');
// 		});
// 	});

// }

// Get the burger menu icon and the navigation menu
// const burgerMenu = document.querySelector('i'); // replace with your actual selector
// const navLinks = document.querySelector('.nav-links'); // replace with your actual selector

// // Add a click event listener to the burger menu icon
// burgerMenu.addEventListener('click', () => {
//     // Toggle a class to show/hide the navigation menu
//     navLinks.classList.toggle('nav--active');
//     window.scrollTo({
// 		top: 0,
//     });
// });



// const navToggle = document.querySelector('.nav__toggle');

// navToggle.addEventListener('click', () => {
// 	document.body.classList.toggle('nav-open');
// });
