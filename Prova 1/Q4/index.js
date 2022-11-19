//JavaScript


document.getElementById("button").addEventListener("click", function() {
    let name = String(document.getElementById("name").value);
    let age = Number(document.getElementById("age").value);
    let gender = String(document.querySelector("select").value);

    const text = document.getElementById("text");

    const person = {
        "name" : name,
        "age" : age,
        "gender" : gender,
        "welcome" : `Seja bem-vindo(a) ${name}, você tem ${age} anos de idade`
    };
    
    const string = JSON.stringify(person);
    console.log(string);

    text.textContent = string;
    
});