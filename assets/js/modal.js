const support= document.querySelector('.support');
const supportShow = document.querySelector('.supportList__hide');
const supportIconClose = document.querySelector('.supportList__form--closeIcon');

support.addEventListener('click',function (){
      supportShow.classList.add('supportList__show')
})
supportIconClose.addEventListener('click',function (){
      supportShow.classList.remove('supportList__show')
})
console.log(supportIconClose);