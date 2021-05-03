
 const slides=document.querySelector('.slider').children;
 const prev=document.querySelector('.prev');
 const next=document.querySelector('.next');
 const indicator=document.querySelector('.indicator');
 let index=0;

 prev.addEventListener('click', function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
 })

 next.addEventListener('click', function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
 })


// Circle Indicators
function circleIndictor(){
   for(let i=0; i<slides.length; i++){
      const div=document.createElement('div');
            div.innerHTML=i+1;
         div.setAttribute('onclick', 'indicateSlide(this)')
         div.id=i;
         if (i==0){
            div.className='active';
         }
         indicator.appendChild(div)
   }
}
circleIndictor();
   //onclick control
function indicateSlide(element){
   index=element.id;
   changeSlide();
   updateCircleIndicator();
   resetTimer();
}

function updateCircleIndicator(){
   for(let i=0; i<indicator.children.length; i++){
      indicator.children[i].classList.remove('active');
   }
   indicator.children[index].classList.add('active');
}
// Circle Indicators End


//  next previous controls
 function prevSlide(){
    if(index==0){
       index=slides.length-1;
    }
    else{
       index--;
    }
    // call function changeSlide
    changeSlide();
 }

 function nextSlide(){
   if(index==slides.length-1){
      index=0;
   }
   else{
      index++;
   }
   // call function changeSlide
   changeSlide();
 }

 function changeSlide(){
    for(let i=0; i<slides.length; i++){
       slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
 }
 //  next previous controls End


//  Automatic Play
function resetTimer(){
   clearInterval(timer); //when click to indicator or controls button stop timer
   //then started again timer
   timer=setInterval(autoPlay, 4000);
}

function autoPlay(){
   nextSlide();
   updateCircleIndicator();
}
let timer=setInterval(autoPlay, 4000);