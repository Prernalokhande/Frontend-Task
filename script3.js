function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let message = document.getElementById("message").value;

if(name === "" || email === "" || password === "" || message === ""){

document.getElementById("error").innerHTML =
"All fields are required!";

return false;

}

if(password.length < 6){

document.getElementById("error").innerHTML =
"Password must be at least 6 characters";

return false;

}

return true;

}