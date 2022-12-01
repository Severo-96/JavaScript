const button = document.getElementById("button");
const tbody = document.getElementById("table");
const coin = document.getElementById("coin");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");

let cursorStyle = document.querySelector("body").style.cursor;
let length = 0;

button.addEventListener("click", function(){
    try {
        let initial = date1.value.replaceAll("-", "");
        let final = date2.value.replaceAll("-", "");

        lenght = final - initial + 1;

        verification();

        cursorStyle = "wait";

        fetch(
            `https://economia.awesomeapi.com.br/json/daily/${coin.value}-BRL/${lenght}?start_date=${initial}&end_date=${final}`

        )

        .then((response) => {
            return response.json();
        }) 

        .then((json) => {
            console.log(json);
            tbody.innerHTML = "";

            for (let i = 0; i < json.length; i++) {
                let date = new Date(Number(json[i].timestamp * 1000));

                let line = document.createElement("tr");

                let dateNumber = document.createElement("td");
                let hour = document.createElement("td");
                let buy = document.createElement("td");
                let sell = document.createElement("td");
                let min = document.createElement("td");
                let max = document.createElement("td");
                
                line.appendChild(dateNumber);
                line.appendChild(hour);
                line.appendChild(buy);
                line.appendChild(sell);
                line.appendChild(min);
                line.appendChild(max);
            
                tbody.appendChild(line);

                dateNumber.innerHTML = `${date.toLocaleDateString()}`;
                hour.innerHTML = `${date.toLocaleTimeString()}`;
                buy.innerHTML = `${json[i].bid}`;
                sell.innerHTML = `${json[i].ask}`;
                min.innerHTML = `${json[i].low}`;
                max.innerHTML = `${json[i].high}`;
            };

            cursorStyle = "pointer";
        });


    } catch (error) {
        alert(error);
    };
});

function verification() {

    let dateInitial = new Date(date1.value);
    let dateFinal = new Date(date2.value);
    let today = new Date()

    if (dateInitial > dateFinal || (dateInitial > today && dateFinal > today)) {
        throw "Por favor, verifique as datas selecionadas!";
    };

    if (dateInitial > today || isNaN(dateInitial.getTime())) {
        throw "Data Inicial inválida!"
    };

    if (dateFinal > today || isNaN(dateFinal.getTime())) {
        throw "Data Final inválida!"
    };
};