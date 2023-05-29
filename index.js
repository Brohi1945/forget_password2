
function signUp(){
    var signUpName= document.getElementById("name").value;
    var signUpEmail= document.getElementById("email").value;
    var signUpPassword= document.getElementById("password").value;

     localStorage.setItem("name", signUpName);
     localStorage.setItem("email", signUpEmail);
     localStorage.setItem("password", signUpPassword);
     

    window.location.href='login.html'

}

function login(){
    var loginEmail= document.getElementById("email").value;
    var loginPassword= document.getElementById("password").value;
    
   
     var savedPassword = localStorage.getItem("password");
     var savedEmail = localStorage.getItem("email");

    if(loginEmail==savedPassword && loginPassword == savedEmail){
        alert("Login Successfully");
    } else {
        alert("Invalid Email or Password");
    }

}

