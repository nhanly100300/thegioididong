var tabAccessory = document.querySelector('.container__productsAccessory--items');
var itemAccessory = document.querySelector('.AccessoryProduct').clientWidth;
var prevAccessory  = document.querySelector('.productsAccessory__directional--prev');
var nextAccessory = document.querySelector('.productsAccessory__directional--next');

var sizeAccessory = itemAccessory * 5;
let d=0;

      function accessoryNext(){
            if(d<sizeAccessory){
                  d+= sizeAccessory;
            }
            else{
                  d=0;
            }
            tabAccessory.style.transform = "translateX("+"-"+d+"px"+")"
      }
      nextAccessory.addEventListener('click',accessoryNext);

      function accessoryPrev(){
            if(d==0){
                  d+= sizeAccessory;
            }
            else{
                  d=0;
            }
            tabAccessory.style.transform = "translateX("+"-"+d+"px"+")"
      }
      prevAccessory.addEventListener('click',accessoryPrev);
