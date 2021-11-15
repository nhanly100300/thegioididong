// slider
var sliderSize = document.querySelector('.sliderContainer').clientWidth;
var photoTransfer = document.querySelector('.sliderContainer__app');
var sliderImg = document.querySelectorAll('.sliderContainer__app--img');
var sliderPrev =document.querySelector('.sliderContainer__directional--prev')
var sliderNext = document.querySelector('.sliderContainer__directional--next');
var a =0;
var fullSizeImg = sliderSize * sliderImg.length;
fullSizeImg -= sliderSize;
// console.log(sliderSize);
// // console.log(sliderImg.length);
// console.log(fullSizeImg);
function slidePrev(){
      if(a==0){
            a = fullSizeImg;
      }
      else {
            a -= sliderSize;
      }
      photoTransfer.style.marginLeft = '-' + a + 'px';
}
sliderPrev.addEventListener('click', slidePrev);

function slideNext(){
      if(a < fullSizeImg){
            a += sliderSize;
            // console.log(sliderSize);
            
      }
      else {
            a = 0;
      }
      photoTransfer.style.marginLeft = '-' + a + 'px';
}
sliderNext.addEventListener('click', slideNext);
setInterval(function(){
      slideNext();
},4000)
