//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let word = document.getElementById("word").value;
    let num = Number(document.getElementById("num").value); 

    let text = document.getElementById("text");
    let string;

    let cont = 0; 
    
    while (num > cont) {
        string = " " + string;
        
        cont = cont + 1;
    }

    text.textContent = `${string}`;

    if (num == 0){
        text.textContent = "";

    }

});