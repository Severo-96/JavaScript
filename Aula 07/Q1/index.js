//JavaScript

let weight = document.querySelector("#weight");
weight.addEventListener("input", function() {
    
    const wstring = event.target.value.replace(/[^0-9.]/g, "");
    weight.value = wstring;
    
});

let height = document.querySelector("#height");
height.addEventListener("input", function() {
    
    const hstring = event.target.value.replace(/[^0-9]/g, "");
    height.value = hstring;
});

let day = document.querySelector("#day");
day.addEventListener("input", function() {
    
    const dstring = event.target.value.replace(/[^0-9]/g, "");
    day.value = dstring;
});

let month = document.querySelector("#month");
month.addEventListener("input", function() {
    
    const mstring = event.target.value.replace(/[^0-9]/g, "");
    month.value = mstring;
});

let year = document.querySelector("#year");
year.addEventListener("input", function() {
    
    const ystring = event.target.value.replace(/[^0-9]/g, "");
    year.value = ystring;
});

document.getElementById("button").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let gender = document.querySelector("select").value; 
    let userweight = weight.value;
    let userheight = height.value;
    
    
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value - 1;
    let year = document.getElementById("year").value;

    let date = new Date(year, month, day);
    const today = new Date();

    if (date > today){
        alert ("Por Favor, Insira uma Data Válida!") //Comparação da data inserida e a data atual

    } else if (month > 11 || day == 0 || month == -1){
            alert ("Por Favor, Insira uma Data Válida!")  //Confirmação inicial da data

        } else if (((month <= 6 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) && day > 31){
                alert ("Por Favor, Insira uma Data Válida!")  //Confirmação do dia limite para meses de 31 dias

            } else if (((month <= 6 && month % 2 == 1) || (month >= 7 && month % 2 == 0)) && day > 30){
                    alert ("Por Favor, Insira uma Data Válida!")  //Confirmação do dia limite para meses de 30 dias

                } else if (month == 1 && ((year % 4 !=  0 && day > 28) || (year % 4 == 0 && day > 29))) {
                        alert ("Por Favor, Insira uma Data Válida!")  //Confirmação do dia limite para fevereiro,incluindo anos bissextos

                    } else if (name == "" || gender == "invalid" || userweight == "" || userheight == "") {
                            alert ("Por Favor, Preencha os dados corretamente!")  //Confirmação de preenchimento de dados

                        } else {
                                const user = {
                                    "name" : String(document.getElementById("name").value),
                                    "birthDate" : date,
                                    "weight" : parseFloat(userweight),
                                    "height" : parseInt(userheight),
                                    "gender" : String(gender),
                                };

                                console.log(user);

                                // Console.log das informações salvas em user, alem do typeof das infomações.
                                /* 
                                console.log(user);

                                console.log(
                                    user.name,
                                    user.birthDate,
                                    user.weight,
                                    user.height,
                                    user.gender
                                );
                            
                                console.log(
                                    typeof user.name,
                                    typeof user.birthDate,
                                    typeof user.weight,
                                    typeof user.height,
                                    typeof user.gender
                                ); 
                                */
                            }
});