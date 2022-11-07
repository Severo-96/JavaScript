//JavaScript

function daysToDeath(day, month, year, gender){
    const today = new Date().getTime(); 

    if (gender === "masc"){
        let ymale = year + 73.1;
        return daysleft(day, month, ymale, today);

    } 
    
    if (gender === "fem") {
        let yfem = year + 80.1;
        return daysleft(day, month, yfem, today);

    }
}

function daysleft (day, month, year, today){
    let life = new Date(year, month, day).getTime(); 
    let daysleft = (life - today) / 86400000;
    return daysleft;

}

document.getElementById("button").addEventListener("click", function() {

    let gender = document.querySelector("select").value; 
    
    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value - 1);
    let year = Number(document.getElementById("year").value);

    const today = new Date(); 
    const date = new Date(year, month, day);

    let objgender = "";
    
    if (gender === "masc"){
        objgender = "Masculino";

    } 
    
    if (gender === "fem") {
        objgender = "Feminino";;

    }

    if (date > today || date.value === "Invalid Date"){
        alert("Por favor, insira uma data de nascimento valida!");

    } else if (month > 11 || day == 0 || month == -1){
        alert("Por favor, insira uma data de nascimento valida!");

    } else if (((month <= 6 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) && day > 31){
        alert("Por favor, insira uma data de nascimento valida!");

    } else if (((month <= 6 && month % 2 == 1) || (month >= 7 && month % 2 == 0)) && day > 30){
        alert("Por favor, insira uma data de nascimento valida!");

    } else if (month == 1 && ((year % 4 !=  0 && day > 28) || (year % 4 == 0 && day > 29))) {
        alert("Por favor, insira uma data de nascimento valida!");

    } else {
        result.textContent = "VOCÊ TEM " + daysToDeath(day, month, year, gender).toFixed(0) + " DIAS ATE A SUA MORTE!!!";

        const user = {
            "birthDate" : new Date(year, month, day),
            "gender" : objgender,
        };

        console.log(user);
    }

});