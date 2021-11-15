// sale
let productSaleItem = document.querySelector('.product__item').clientWidth;
let saleContainer   = document.querySelectorAll('.sale__container--product').length;
let productSale     = document.querySelector('.sale__container--productFull');
let salePrev        = document.querySelector('.directional__prev');
let saleNext        = document.querySelector('.directional__next');
let b = 0;
let fullSizeSale = productSaleItem * saleContainer ;
      fullSizeSale -=productSaleItem*5;

       function SaleNext(){
      if(b < fullSizeSale){
            b+=productSaleItem;
      }
      else {
            b=0;
      }
     productSale.style.transform = "translateX("+"-"+b+"px"+")";
}

saleNext.addEventListener('click' , SaleNext);

function SalePrev(){
      if(b == 0){
            b=fullSizeSale;
      }
      else{
            b-=productSaleItem;
      }
     productSale.style.transform = "translateX("+"-"+b+"px"+")";
}
salePrev.addEventListener('click' , SalePrev);
setInterval(function(){
      SaleNext();
},5500)