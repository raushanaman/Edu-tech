let input = document.querySelector("#search-input");
let item = document.querySelectorAll(".item");
let msg = document.querySelector("#msg");

input.addEventListener("keyup", function(){
    let filter = input.value.toLowerCase();

    item.forEach(function (item){
        let text = item.textContent.toLowerCase();

        if(text.includes(filter)){
            item.style.display = "block";
        }else{
            item.style.display =  "none";
            msg.style.display = "block";
            msg.style.color = "red";
            msg.textContent = "No data found";
        }
    });
});

