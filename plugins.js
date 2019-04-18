// Mobile menu
var mobileMenuTrigger = document.querySelector('.js-menu-trigger');
var mobileMenuScrollTrigger = document.querySelectorAll('.js-scroll');
var mobileMenuTriggerClose = document.querySelector('.js-menu-close');
mobileMenuTrigger.addEventListener('click', function () {
    this.closest('.header').classList.add('open');
});
mobileMenuTriggerClose.addEventListener('click', function () {
    this.closest('.header').classList.remove('open');
});

mobileMenuScrollTrigger.forEach(function (el) {
    el.addEventListener('click', function () {
        this.closest('.header').classList.remove('open');
    });
});
