var userData2 = JSON.parse(localStorage.getItem("user-data")) || [];

alert("your otp is 1234");


var form1 = document.querySelector("form");
form1.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
   if(event.target.otp.value==(1234)){
    window.location.assign("almostthere.html");
   }else{
    alert(" Otp verification failed!");
   }

 
});