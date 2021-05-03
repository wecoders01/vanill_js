
const alertBtn=document.querySelectorAll('.alert-btn')

alertBtn.forEach(function(btn){

   btn.addEventListener('click', function(){
      const target = this.getAttribute('data-target')
      const alertBox = document.getElementById(target) 
            alertBox.classList.add('show')

      const closeAlert = alertBox.querySelector('.close-alert')
      closeAlert.addEventListener('click', function(){
         alertBox.classList.remove('show')
      })

      //hide alertBox when clicked outside of alert-content

      alertBox.addEventListener('click', function(event){
         if(event.target == this){
            alertBox.classList.remove('show')
         }
      })
   })
})