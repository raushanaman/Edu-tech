function createToaster(config){
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300";
        document.querySelector(".parent").appendChild(div);

        setTimeout(() =>{

            document.querySelector(".parent").removeChild("div");
        },config.duartion*1000)
    };
}

let toaster = createToaster({  
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toaster("download done"); //it send to the str inside return function

toaster("there is some msg show in toaster");