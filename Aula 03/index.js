//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let num1 = Number(document.getElementById("operando1").value);
    let num2 = Number(document.getElementById("operando2").value);

    let op = document.querySelector("select").value;

    if (op === "sum") {
        let num = num1 + num2;
        result = document.getElementById("result");
        result.textContent = "O resultado é " + num;
        console.log (result);
    };

    if (op === "sub") {
        let num = num1 - num2;
        result = document.getElementById("result");
        result.textContent = "O resultado é " + num;
        console.log (result);
    };

    if (op === "mult") {
        let num = num1 * num2;
        result = document.getElementById("result");
        result.textContent = "O resultado é " + num;
        console.log (result);
    };

    if (op === "div") {
        let num = num1 / num2;
        result = document.getElementById("result");
        result.textContent = "O resultado é " + num;
        console.log (result);
    };

});