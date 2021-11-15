const gameList= document.querySelector('.game__list');
const gameItems=document.querySelectorAll('.game__list--item').length;
const gameItem = document.querySelector('.game__list--item').clientWidth;
const prevGame =document.querySelector('.game__directional--prev');
const nextGame =document.querySelector('.game__directional--next');
let g = 0;
let fullSizeGame = gameItem *gameItems;
      fullSizeGame -=gameItem;
// console.log(fullSizeGame);

function gamePrev(){
      if(g==0){
            g=fullSizeGame;
      }
      else{
            g-=gameItem;
      }
      gameList.style.marginLeft = '-'+ g +'px';
}
prevGame.addEventListener('click', gamePrev);
function gameNext(){
      if(g<fullSizeGame){
            g+=gameItem;
      }
      else{
            g=0;
      }
      gameList.style.marginLeft= '-'+ g +'px';
}
nextGame.addEventListener('click', gameNext);
setInterval(function(){
      gameNext() 
},4000
)