// let h1 = document.querySelector("h1");

// h1.innerText = "hello aman how are you";
// console.dir(h1);
// let a = document.querySelector("a");
// // a.href = "https://www.google.com"; or

// a.setAttribute("href", "https://www.google.com");

// let img = document.querySelector("img");

// img.setAttribute("src","https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// let a = document.querySelector("a");
// a.removeAttribute("href");
// console.log(a.getAttribute("href"));

// let h3 = document.createElement("h3");
// h3.textContent = "h3 is create through js and appended inside the body";
// document.body.appendChild(h3); or
// document.body.prepend(h3);
// h3.remove();

// changing the css through js

// let h1 = document.querySelector("h1");

// h1.style.color = "yellow";

// h1.style.backgroundColor="grey";

// Below is all about event listeners

// step 1: select the element first
// step 2: add eventLIstener on the selected element
// step 3: apply the property on the selected element whatever you want.

// let input = document.querySelector("input");
// input.addEventListener("input", function(dets){
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// })

// let sel = document.querySelector("select");
// let dev = document.querySelector("#device");
// sel.addEventListener("change", function(dets){
//     console.log(dets.target.value);
//     dev.textContent = `${dets.target.value} is selected`;
// })
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(dets){

//     if(dets.key === " ")
//     {
//         h1.textContent = "spc"
//     }
//     else{

//         console.log(dets.key);
//         h1.textContent = dets.key;
//     }
// });

// let btn = document.querySelector("#btn");
// let file = document.querySelector("#filei");

// btn.addEventListener("click", function(){
//     file.click();
// })
// file.addEventListener("change", function(dets){

//     console.log(dets.target.files[0].name);
//     btn.textContent = dets.target.files[0].name;

// })

let form = document.querySelector("form");
let data = document.querySelectorAll("input");
let main = document.querySelector("#main");
form.addEventListener("submit", function(dets){
    dets.preventDefault(); // browser page doesn't refresh after submit

    let card = document.createElement("div");
    card.classList.add("card");
    let profile_pic = document.createElement("div");
    profile_pic.classList.add("profile-pic");

    //card.appendChild(profile_pic);
    console.log(card);
  //  document.body.appendChild(card);

  let img =document.createElement("img");
  img.setAttribute("src",data[0].value);
  
  let content = document.createElement("div");
  content.classList.add("content");
  let h3 = document.createElement("h3");
  h3.textContent = data[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = data[2].value;
  let p = document.createElement("p");
  p.textContent = data[3].value;

  profile_pic.appendChild(img);
  content.appendChild(h3);
  content.appendChild(h5);
  content.appendChild(p);
  
  card.appendChild(profile_pic);
  card.appendChild(content);

  main.appendChild(card);

  data.forEach(function(val){
    val.value = "";
  })

})