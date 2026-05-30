// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "initial";
//     }else{
//                 document.querySelector("#hide").style.display = "none";
//     }
// })


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    document.querySelector("#emalError").textContent="";
    document.querySelector("passwordError").textContent = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    const emailans = emailRegex.test(email.value);
    const passwordans = passwordRegex.test(password.value);
    
    if(email.value === "" && password.value === ""){
        alert("fill the empty fields")
    }if(!emailans){
        document.querySelector("#emailError").textContent="Email is incorrect";
    }   
     if(!passwordans){
        document.querySelector("#passwordError").textContent="Password is incorrect";
    }
})