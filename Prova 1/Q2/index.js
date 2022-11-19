//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let num = document.getElementById("input").value;
    const text = document.getElementById("text");
    
    if (isNaN(num) || num == ""){
        text.textContent = `O valor ${num} não é um número`;
        throw "Invalid input";
    } 

    if (num == 10) {
        text.textContent = `O valor ${num} é igual a 10!`;
    } 

    if (num > 10) {
        text.textContent = `O valor ${num} é maior que 10!`;
    }

    if (num < 10) {
        text.textContent = `O valor ${num} é menor que 10!`;
    }
});