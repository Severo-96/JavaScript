//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);

    if (isNaN(min)) {
        alert("Valor invalido no campo 'VALOR MÌNIMO'! Por favor, insira um valor no formato válido! (X.XXX)");

        if (isNaN(max)) {
            alert("Valor invalido no campo 'VALOR MÁXIMO'! Por favor, insira um valor no formato válido! (X.XXX)");
        }
    } 

    else {

        if (isNaN(max)) {
            alert("Valor invalido no campo 'VALOR MÁXIMO'! Por favor, insira um valor no formato válido! (X.XXX)");
        }

        else {
            if (min > max) {
                alert("VALOR MÍNIMO maior que VALOR MÁXIMO! Favor Corrigir!");
            }

            else {
                num = Math.random() * (max - min) + min;
                result = document.getElementById("result");
                result.textContent = "VALOR = " + num +"!";
            }
        }
    }
});