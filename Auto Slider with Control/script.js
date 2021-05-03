
const slides=document.querySelector('.slide-items').children;
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');  
const totalSlides = slides.length;
   let index=0;
const duration=6000;


prev.onclick = function(){
   slide('prev')
}

next.onclick = function(){
   slide('next')
}

// Slide controls
function slide(direction){

   progress(); //progress meter

   if(direction=='next'){
      
      if(index==totalSlides-1){ // if index is equal to totalSlides
         // then index=0
         index=0;
      }
      else{
         index++; // if index is equal to totalSlides length then index++
      }
   }
   if(direction=='prev'){

      if(index==0){
         index=totalSlides-1;
      }
      else{
         index--;
      }
   }

   // Stopped auto slide when user click
   clearInterval(timer);

   // then started again auto slide
   timer=setInterval(autoSlide, duration);

   for(let i=0; i<slides.length; i++){
      slides[i].classList.remove('active');
   }
   slides[index].classList.add('active');

   slideInfo(); //slide info
}


// Slider Info
let width=100/totalSlides;
function slideInfo(){
   document.querySelector('.number').innerHTML=(index+1)+'/'+totalSlides;
   document.querySelector('.inner').style.width=(index+1)*width+'%';
}


// Next Slide Progress Meter
function progress(){
   document.querySelector('.progress').innerHTML='';
   const div=document.createElement('div');
      div.style.height="5px";
      div.style.width="0px";
      div.style.position="absolute";
      div.style.left="0";
      div.style.top="0";
      div.style.backgroundColor="blue";
      div.id="progress";
      div.style.animation='progress ' + duration/1000 + 's linear';
      document.querySelector('.progress').appendChild(div);
}

// Auto Slide Change
function autoSlide(){
   slide('next');
}
let timer=setInterval(autoSlide, duration);

slideInfo();
progress();