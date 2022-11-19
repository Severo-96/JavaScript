//JavaScript

const values = []
let text = document.getElementById("text");
const print = document.getElementById("print");

function addValue (input, print){
   
    try {
        if (input = ""){
            throw "Erro: tentativa de adicionar valor vazio";
        }

    } catch (err) {
        print.textContent = err;
    }

};

document.getElementById("add").addEventListener("click", addValue(text.value, print));