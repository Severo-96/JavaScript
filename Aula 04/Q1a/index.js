//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    if (isNaN(height)) {
        alert("Valor invalido no campo 'ALTURA'! Por favor, insira um valor no formato válido! (X.XXX)");

        if (isNaN(weight)) {
            alert("Valor invalido no campo 'PESO'! Por favor, insira um valor no formato válido! (X.XXX)");
        }
    } 
    else {

        if (isNaN(weight)) {
            alert("Valor invalido no campo 'PESO'! Por favor, insira um valor no formato válido! (X.XXX)");
        }

        else {
            let imc = weight / Math.pow(height, 2);

            if (imc < 18.5){
                result = document.getElementById("result");
                result.textContent = "Seu IMC é de " + imc.toFixed(2) + "! E você se encontra ABAIXO DO PESO!";
            }

            if (imc >= 18.5 && imc < 25){
                result = document.getElementById("result");
                result.textContent = "Seu IMC é de " + imc.toFixed(2) + "! E você se encontra NO PESO IDEAL!";
            }

            if (imc >= 25 && imc < 30){
                result = document.getElementById("result");
                result.textContent = "Seu IMC é de " + imc.toFixed(2) + "! E você se encontra em SOBREPESO!";
            }

            if (imc >= 30){
                result = document.getElementById("result");
                result.textContent = "Seu IMC é de " + imc.toFixed(2) + "! E você esta em estado de OBESIDADE!";
            }            
        }
    }
});