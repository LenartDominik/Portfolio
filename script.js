function openNav() {
	document.querySelector('#myNav').style.width = '100%';

}

function closeNav() {
	document.querySelector('#myNav').style.width = '0%';
	// window.scrollTo({
	// 	top: document.querySelector('#home').offsetTop = 20,
	// 	top: document.querySelector('#about-me').offsetTop = 40,
	// 	top: document.querySelector('#projects').offsetTop = 60,
	// 	top: document.querySelector('#hire-me').offsetTop = 80,
	// });
}


// function openNav() {
// 	// Toggle the mobile navigation menu
// 	const nav = document.querySelector('#myNav');
// 	nav.style.width = nav.style.width === '0%' ? '100%' : '0%';
// }

// // Scroll to the correct section when a link is clicked
// document.querySelectorAll('.header-nav-item a').forEach((link) => {
// 	link.addEventListener('click', function (event) {
// 		event.preventDefault(); // Prevent default link behavior
// 		const targetId = this.getAttribute('href');
// 		const targetSection = document.querySelector(targetId);
// 		if (targetSection) {
// 			window.scrollTo({
// 				top: targetSection.offsetTop,
// 				behavior: 'smooth', // Optional: Add smooth scrolling effect
// 			});
// 			// Close the mobile navigation menu
// 			openNav();
// 		}
// 	});
// });


// when I clicked on the section about-me or different on opened nav-mobile, the opened nav-mobile should close and move me to the beginning of the section, which i Clicked on this section. Here is my code html: <span class="span-nav--mobile" onclick="openNav()">☰</span> and js: function closeNav() {
// 	document.querySelector('#myNav').style.width = '0%';
// 	window.scrollTo({
// 		top: document.querySelector('#home').offsetTop = 20,
// 		top: document.querySelector('#about-me').offsetTop = 40,
// 		top: document.querySelector('#projects').offsetTop = 60,
// 		top: document.querySelector('#hire-me').offsetTop = 80,
// 	});
// }
