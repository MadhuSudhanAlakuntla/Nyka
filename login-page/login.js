var userData4 = JSON.parse(localStorage.getItem("user-data")) || [];




var form4 = document.querySelector("form");
form4.addEventListener("submit", function(event) {
    event.preventDefault();
   if(event.target.otpagain.value==(1234)){
window.location.assign('../index.html')
    
   }else{
    alert(" Otp verification failed!");
   }

 
});