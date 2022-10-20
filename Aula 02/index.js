//JavaScript

document.getElementById("buttonnum").addEventListener("click", function() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);

    if (num1 > num2) {
        numresult = document.getElementById("numresult");
        numresult.textContent = "O primeiro valor é maior que o segundo!";
    };

    if (num1 === num2) {
        numresult = document.getElementById("numresult");
        numresult.textContent = "O primeiro valor igual ao segundo!";
    };

    if (num1 < num2) {
        numresult = document.getElementById("numresult");
        numresult.textContent = "O primeiro valor é menor que o segundo!";
    };

});

document.getElementById("stringbutton").addEventListener("click", function() {
    string1 = document.getElementById("string1").value.length;
    string2 = document.getElementById("string2").value.length;

    if (string1 > string2) {
        result = document.getElementById("stringresult");
        result.textContent = "O primeiro valor é maior que o segundo!";
    };

    if (string1 === string2) {
        stringresult = document.getElementById("stringresult");
        stringresult.textContent = "O primeiro valor igual ao segundo!";
    };

    if (string1 < string2) {
        stringresult = document.getElementById("stringresult");
        stringresult.textContent = "O primeiro valor é menor que o segundo!";
    };

});