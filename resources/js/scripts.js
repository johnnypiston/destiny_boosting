function mobileMenuToggle() {
  menuButton.classList.toggle('close');
  mobileMenu.classList.toggle('open');
}
var menuButton = document.querySelector('.js-mobile-menu-toggle');
var mobileMenu = document.querySelector('.js-menu-list');
menuButton.addEventListener('click', mobileMenuToggle);

var timeOut;
function scrollToTop(event) {
  event.preventDefault();
  scroll();
}

function scroll() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout('scroll()', 10);
  }
  else clearTimeout(timeOut);
}

document.querySelector('.js-scroll-top').addEventListener('click', scrollToTop);
