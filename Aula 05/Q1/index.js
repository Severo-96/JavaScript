//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let num = Number(document.getElementById("num").value);
    result = document.getElementById("result");

    switch (num){
        case 1:
            result.textContent = `O número ${num} por extenso é: UM.`;
            break;
        case 2:
            result.textContent = `O número ${num} por extenso é: DOIS.`;
            break;
        case 3:
            result.textContent = `O número ${num} por extenso é: TRÊS.`;
            break;
        case 4:
            result.textContent = `O número ${num} por extenso é: QUATRO.`;
            break;
        case 5:
            result.textContent = `O número ${num} por extenso é: CINCO.`;
            break;
        case 6:
            result.textContent = `O número ${num} por extenso é: SEIS.`;
            break;
        case 7:
            result.textContent = `O número ${num} por extenso é: SETE.`;
            break;
        case 8:
            result.textContent = `O número ${num} por extenso é: OITO.`;
            break;
        case 9:
            result.textContent = `O número ${num} por extenso é: NOVE.`;
            break;
        case 10:
            result.textContent = `O número ${num} por extenso é: DEZ.`;
            break;
        default:
            result.textContent = `VALOR INVALIDO!`;
    }
});