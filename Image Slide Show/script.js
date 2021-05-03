
const slides=document.querySelector('.slide-show').children;
let index=0;

function slideShow(){
   if(index==slides.length){

      index=0;

   }
   for(let i=0; i<slides.length; i++){
      slides[i].classList.remove('active');
      slides[i].style.zIndex="";
   }

   if(index>0){
      slides[index-1].style.zIndex="1";
   }

   slides[index].classList.add('active');

   index++;
   setTimeout(slideShow, 4000);
}


window.onload=slideShow();