
const tabItems = document.querySelectorAll(".clock__heading--item");
const tabList  = document.querySelectorAll(".clock__products--list");
const tabProducts  = document.querySelector(".clock__products--listFirst");
const tabProductsTwo  = document.querySelector(".clock__products--listSecond");
const tabProductsThree  = document.querySelector(".clock__products--listThree");
const tabProductsFour  = document.querySelector(".clock__products--listFour");

tabItems.forEach((tab,index)=>{
     let tabProduct = tabList[index];
     tab.onclick = function(){
           document.querySelector('.clock__heading--item.clockActive').classList.remove('clockActive');
           document.querySelector('.clock__products--list.watchActive ').classList.remove('watchActive');
           this.classList.add('clockActive');
           tabProduct.classList.add('watchActive');
      }
})
// Đồng hồ thông minh
const firstPrev = document.querySelector('.FirstPrev');
const firstNext = document.querySelector('.FirstNext');

function NextFirst(){
      tabProducts.classList.toggle('right25');
}
firstNext.addEventListener('click' , NextFirst)
function PrevFirst(){
      tabProducts.classList.toggle('right25');
}
firstPrev.addEventListener('click',PrevFirst);

setInterval(function(){
      NextFirst();
},5000)

// Đồng hồ Nam
const secondPrev = document.querySelector('.SecondPrev');
const secondNext = document.querySelector('.SecondNext');
function SecondPrev(){
      tabProductsTwo.classList.toggle('right25');
}
secondPrev.addEventListener('click', SecondPrev);
function SecondNext(){
      tabProductsTwo.classList.toggle('right25');
}
secondNext.addEventListener('click', SecondNext);
setInterval(function(){
      SecondNext();
},5000)
// Đồng hồ nữ
const threePrev = document.querySelector('.ThreePrev');
const threeNext = document.querySelector('.ThreeNext');
function ThreePrev(){
      tabProductsThree.classList.toggle('right25');
}
threePrev.addEventListener('click', ThreePrev);
function ThreeNext(){
      tabProductsThree.classList.toggle('right25');
}
threeNext.addEventListener('click', ThreeNext);
setInterval(function(){
      ThreeNext();
},5000)
// định vị
const fourPrev = document.querySelector('.FourPrev');
const fourNext = document.querySelector('.FourNext');
function FourPrev(){
      tabProductsFour.classList.toggle('right25');
}
fourPrev.addEventListener('click', FourPrev);
function FourNext(){
      tabProductsFour.classList.toggle('right25');
}
fourNext.addEventListener('click', FourNext);
setInterval(function(){
      FourNext();
},5000)