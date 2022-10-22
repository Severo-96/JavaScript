//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let num = Number(document.getElementById("num").value);

    if (isNaN(num) || num % 1 === 0) {
        alert("Valor invalido no campo 'VALOR'! Por favor, insira um número não inteiro no formato válido! (X.XXX)");
    } 

    else {
        let max = Math.ceil(num);
        let min = Math.floor(num);

        result = document.getElementById("result");
        result.textContent = "Inteiro Anterior = " + min + ". Inteiro Seguinte = " + max + ".";
    }
});