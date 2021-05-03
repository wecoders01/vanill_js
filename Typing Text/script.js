
let timerOne;
let timerTwo;
let that;

var typeWriting={
            words:document.querySelector('.words').children,
            wordIndex: 0,
            charIndex: 0,
            currentWord: '',
            load: function(){
               this.currentWord=this.words[this.wordIndex].getAttribute('data-text').split('');
               this.increment();
               this.timer1();
            },
            increment:function(){

               if(this.charIndex != this.currentWord.length){
                  this.words[0].innerHTML+=this.currentWord[this.charIndex]
                  this.charIndex++
               }
               else{
                  clearInterval(timer1)
                  setTimeout(this.timer2, 2000)
               }

            },
            decrement: function(){
               if (this.charIndex != 0){
                  this.charIndex--;
                  this.currentWord.pop();
                  this.words[0].innerHTML=this.currentWord.join('');
               }
               else{
                  clearInterval(timer2)

                  if(this.wordIndex==this.words.length-1){
                     this.wordIndex=0;
                  }
                  else{
                     this.wordIndex++;
                  }
                  this.load()
               }

            },
            timer1: function(){
               that=this;
               timer1=setInterval(function(){
                  that.increment();
               }, 100)
            },
            timer2: function(){
               timer2=setInterval(function(){
                  that.decrement();
               }, 50)
            }
         }

   window.onload=typeWriting.load();