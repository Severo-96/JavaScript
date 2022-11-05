//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let gender = document.querySelector("select").value; 
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    
    
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value - 1;
    let year = document.getElementById("year").value;

    let date = new Date(year, month, day);
    const today = new Date();

    try {
        if (name.length < 5 || name === ""){
            throw "Field “name” is invalid!";
        }

    } catch (err) {
        name = err;
    }

    try {
        if (isNaN(weight) || weight === ""){
            throw "Field “weight” is invalid!";
        }

    } catch (err) {
        weight = err;
    }

    try {
        if (isNaN(height) || height % 1 != 0 || height === ""){
            throw "Field “height” is invalid!";
        }

    } catch (err) {
        height = err;
    }

    try {
        if (gender === "invalid"){
            throw "Field “gender” is invalid!";
        }

    } catch (err) {
        gender = err;
    }

    try {
        if (date > today || date.value === "Invalid Date"){
            throw "Field “birthDate” is invalid!";
    
        } else if (month > 11 || day == 0 || month == -1){
            throw "Field “birthDate” is invalid!";
    
        } else if (((month <= 6 && month % 2 == 0) || (month >= 7 && month % 2 == 1)) && day > 31){
            throw "Field “birthDate” is invalid!";
    
        } else if (((month <= 6 && month % 2 == 1) || (month >= 7 && month % 2 == 0)) && day > 30){
            throw "Field “birthDate” is invalid!";
    
        } else if (month == 1 && ((year % 4 !=  0 && day > 28) || (year % 4 == 0 && day > 29))) {
            throw "Field “birthDate” is invalid!";
        }

    } catch (err) {
        date = err;
    }

    const user = {
        "name" : name,
        "birthDate" : date,
        "weight" : weight,
        "height" : height,
        "gender" : gender,
    };

    const pname = document.getElementById('pname');
    const pdate = document.getElementById('pdate');
    const pweight = document.getElementById('pweight');
    const pheight = document.getElementById('pheight');
    const pgender = document.getElementById('pgender');
    const stringfy = document.getElementById('stringfy');

    if (name.includes("invalid")) {
        pname.textContent = name;

    } 

    if (date == "Field “birthDate” is invalid!") {
        pdate.textContent = date;

    } 
    
    if (weight.includes("invalid")) {
        pweight.textContent = weight;

    } 
    
    if (height.includes("invalid")) {
        pheight.textContent = height;

    } 
    
    if (gender.includes("invalid")) {
        pgender.textContent = gender;

    } 
    
    if (!name.includes("invalid") && date != "Field “birthDate” is invalid!" && !weight.includes("invalid") && !height.includes("invalid") && !gender.includes("invalid")){
        pname.textContent = "Nome: " + name;
        pdate.textContent = "Nascimento: " + day + " / " + (month + 1) + " / " + year;
        pweight.textContent = "Peso: " + weight + " kg";
        pheight.textContent = "Altura: " + height + " cm";
        pgender.textContent = "Gênero: " + gender;
        stringfy.textContent = "Object: " + JSON.stringify(user);
    }

    console.log(user);
    console.log (JSON.stringify(user));
});