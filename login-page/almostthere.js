var userData3 = JSON.parse(localStorage.getItem("user-data")) || [];
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
   
    var formObj = {
        name: event.target.name.value,
        email:event.target.email.value
    };

    
        userData3.push(formObj);
        localStorage.setItem("user-data", JSON.stringify(userData3));
        window.location.assign('/index.html')
       
        
   
});