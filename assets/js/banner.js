
var showBanner = document.getElementsByClassName('banner__item')[1];
var appBanner = document.querySelector('.banner');
// var banner = 0;

function nextBanner() {
//     banner += bannerItem;
    showBanner.classList.toggle('show')
    appBanner.classList.toggle('next-JS')
    appBanner.classList.remove('prev-JS')
}

setInterval(function () {
    nextBanner()
}, 5000)

function PrevBanner() {
//     banner += bannerItem;
    showBanner.classList.toggle('show')
    appBanner.classList.toggle('prev-JS')
    appBanner.classList.remove('next-JS')
}

