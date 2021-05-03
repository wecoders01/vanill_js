

const texts=document.querySelector('.animation-text').children;
      textLen=texts.length;
   let index=0;
const textInTimer=3000,
      textOutTimer=2800;

function animationText(){
   for (let i=0; i<textLen; i++){
      texts[i].classList.remove('text-in', 'text-out');
   }
   texts[index].classList.add('text-in');


   setTimeout(function(){
      texts[index].classList.add('text-out')
   }, textOutTimer)


   

   setTimeout(function(){
      if(index == textLen-1){
         index=0
      }
      else{
         index++
      }
      animationText()
   }, textInTimer);
}


window.onload = animationText;