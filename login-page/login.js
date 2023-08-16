var userData4 = JSON.parse(localStorage.getItem("user-data")) || [];


alert("Your OTP is 1234");

var form4 = document.querySelector("form");
form4.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
   if(event.target.otpagain.value==(1234)){

    window.location.assign('/index.html')
    //enter home page link
  //  window.location.assign("almostthere.html");
   }else{
    alert(" Otp verification failed!");
   }

 
});