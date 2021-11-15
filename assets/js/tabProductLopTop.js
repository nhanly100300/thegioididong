// container__productsLopTop--item
var highlightLopTopItem = document.querySelector('.loptopProduct').clientWidth;
var highlightLopTopImg = document.querySelectorAll('.container__productsLopTop--img').length;
var highlightLopTopProduct = document.querySelector('.container__productsLopTop--items');
var highlightLopTopPrev = document.querySelector('.productsLopTop__directional--prev');
var highlightLopTopNext = document.querySelector('.productsLopTop__directional--next');

// var highlightLopTop = highlightLopTopItem*highlightLopTopImg;
 var    highlightLopTop =highlightLopTopItem*5 ;
var c=0;

      function highlightLopTopRight() {
            if(c < highlightLopTop){
                  c+=highlightLopTop;
            }
            else{
                  c=0;
            }
            highlightLopTopProduct.style.transform ="translateX("+"-"+c+"px"+")"
      }
      highlightLopTopNext.addEventListener('click' , highlightLopTopRight)
      function highlightLopTopLeft() {
            if(c==0){
                  c=highlightLopTop;
            }
            else{
                  c=0;
            }
            highlightLopTopProduct.style.transform ="translateX("+"-"+c+"px"+")"
      }
      highlightLopTopPrev.addEventListener('click' , highlightLopTopLeft);
      
