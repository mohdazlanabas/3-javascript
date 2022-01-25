var content = document.getElementById("content");
var content = document.getElementById("words");

button.onclick = function(){

    if(content.className == "open") {
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};