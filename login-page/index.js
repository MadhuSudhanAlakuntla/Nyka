
var userData = JSON.parse(localStorage.getItem("user-data")) || [];
var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
   
    var formObj = {
        data: event.target.input.value,
    };

    var flag = false;
    userData.forEach(function(el) {
        if (el.data === formObj.data) {
            flag = true;
        }
    });

    if (!flag) { // Changed the condition here
        userData.push(formObj);
        localStorage.setItem("user-data", JSON.stringify(userData));
        window.location.assign("register.html");
    } else {
        window.location.assign("login.html");
    }
});

