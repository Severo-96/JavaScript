//JavaScript

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function pot(a, b){
    return Math.pow(a, b);
}

document.getElementById("sum").addEventListener("click", function() {
   
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == ""){
        alert("Por favor, insira valores validos nos campos numéricos!");

    } else {
        result.textContent = "Total = " + sum(num1, num2);

    }

});

document.getElementById("sub").addEventListener("click", function() {
   
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == ""){
        alert("Por favor, insira valores validos nos campos numéricos!");

    } else {
        result.textContent = "Total = " + sub(num1, num2);
        
    }

});

document.getElementById("mult").addEventListener("click", function() {
   
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == ""){
        alert("Por favor, insira valores validos nos campos numéricos!");

    } else {
        result.textContent = "Total = " + mult(num1, num2);
        
    }

});

document.getElementById("div").addEventListener("click", function() {
   
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == ""){
        alert("Por favor, insira valores validos nos campos numéricos!");

    } else {
        result.textContent = "Total = " + div(num1, num2);
        
    }

});

document.getElementById("pot").addEventListener("click", function() {
   
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == ""){
        alert("Por favor, insira valores validos nos campos numéricos!");

    } else {
        result.textContent = "Total = " + pot(num1, num2);
        
    }

});