

const slides=document.querySelector('.slides').children;
const slideEffectContainer=document.querySelector('.slide-effect-container')
const slideTime=5000;
const slideTimeOut=4000;
const slideHeight=slides[0].offsetHeight;
const slideWidth=slides[0].offsetWidth;
const row=10;
const col=10;
let index=0;


function createEffectBox(){
   for (let i=0; i<row; i++){
      for (let j=0; j<col; j++){
         const box=document.createElement('div');
               box.className='box';
               box.style.width=(slideWidth / row) + 'px';
               box.style.height=(slideHeight / col) + 'px';
               slideEffectContainer.appendChild(box);
               hideEffectBox();
      }
   }
}

function slideShow(){
   hideEffectBox() //Slide Effect In
   for (let i=0; i<slides.length; i++){
      slides[i].classList.remove('slide-in', 'slide-out');
   }
   slides[index].classList.add('slide-in');

   

   setTimeout(function(){
      showEffectBox(); //Slide Effect Out
      slides[index].classList.add('slide-out')
   }, slideTimeOut)

   setTimeout(function(){
      if(index == slides.length-1){
         index=0;
      }
      else{
         index++;
      }
      slideShow();
   }, slideTime)
}

function hideEffectBox(){
   for(let i=0; i<slideEffectContainer.children.length; i++){
      slideEffectContainer.children[i].classList.remove('show');
      slideEffectContainer.children[i].classList.add('hide');
   }
}
function showEffectBox(){
   for(let i=0; i<slideEffectContainer.children.length; i++){
      slideEffectContainer.children[i].classList.remove('hide');
      slideEffectContainer.children[i].classList.add('show');
   }
}

window.onload = function(){
   createEffectBox();
   slideShow();
}