//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let text = document.getElementById("text").value;
    let result = document.getElementById("result");

    try {
        const jsontest = JSON.parse(text);
        result.textContent = "Parsable JSON string!";
        console.log(jsontest);    

    } catch (err) {
        result.textContent = 'Não foi possivel transformar o texto em objeto! \n ERROR: ' + err;

    }
});