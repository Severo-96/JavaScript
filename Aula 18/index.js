const state = document.getElementById("state");
const city = document.getElementById("city");
const table = document.getElementById("table");

const tableSpc = document.querySelector("table");

const d = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let stateCont = 0;
let cityCont = 0;

tableSpc.style.display = "none";

function statePromise() {
    return new Promise((resolve, reject) => {
        fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
        )
        .then((response) => {
            if (response.status === 200){
                resolve(response.json());
            };

            reject(response.statusText);
        });
    });
};

state.addEventListener("click", function() {
    city.innerHTML = "";
    
    statePromise()
    .then(result => {
        //console.log(result);
        if (stateCont === 0) {
            for (let i = 0; i < result.length; i++){
                let option = document.createElement("option");
    
                option.text = result[i].nome;
                option.value = result[i].id;
                state.appendChild(option);
            };

            stateCont = 1;
        };

        if (cityCont === 1){
            cityCont = 0;
        };
    })
    .catch ((error) => {
        alert(error);
    });
});

function cityPromise() {
    return new Promise((resolve, reject) => {
        fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/distritos?orderBy=nome`
        )
        .then((response) => {

            if (response.status === 200){
                resolve(response.json());
            }

            reject(response.statusText);
        });
    });
};

city.addEventListener("click", function() {
    cityPromise()
    .then(result => {
        //console.log(result);
    
        if (cityCont === 0) {
            for (let i = 0; i < result.length; i++){
                let option = document.createElement("option");
    
                option.text = result[i].nome;
                option.value = result[i].municipio.id;
                city.appendChild(option);
            };
            cityCont = 1;
        };

        weather(city.value);
        tableSpc.style.display = "inline";
    })

    .catch ((error) => {
        alert(error);
    });
});

function weatherPromise() {
    return new Promise((resolve, reject) => {
        fetch(
            `https://apiprevmet3.inmet.gov.br/previsao/${city.value}`
        )
        .then((response) => {

            if (response.status === 200){
                resolve(response.json());
            }

            reject(response.statusText);
        });
    });
};


function weather(code) {
    weatherPromise()
    .then(result => {
        //console.log(result);

        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        table.innerHTML = "";

        for (let i = 0; i < 5; i++) {

            let newDate = new Date(`${year}-${month}-${day + i}`).toLocaleDateString();

            let line = document.createElement("tr");

            let date = document.createElement("td");
            let weekDay = document.createElement("td");
            let sym = document.createElement("td");
            let abs = document.createElement("td");
            let max = document.createElement("td");
            let min = document.createElement("td");

            line.appendChild(date);
            line.appendChild(weekDay);
            line.appendChild(sym);
            line.appendChild(abs);
            line.appendChild(max);
            line.appendChild(min);

            table.appendChild(line);

            date.innerHTML = `${newDate}`;
            weekDay.innerHTML = `${d[new Date(`${year}-${month}-${day + i}`).getDay()]}`;

            if(i < 2){
                sym.innerHTML = `<img src="${result[code][newDate].manha.icone}" alt="icone" width="70px" height="70px">`;
                abs.innerHTML = `${result[code][newDate].manha.resumo}`;
                max.innerHTML = `${result[code][newDate].manha.temp_max}`;
                min.innerHTML = `${result[code][newDate].manha.temp_min}`;
            } else {
                sym.innerHTML = `<img src="${result[code][newDate].icone}" alt="icone" width="70px" height="70px">`;
                abs.innerHTML = `${result[code][newDate].resumo}`;
                max.innerHTML = `${result[code][newDate].temp_max}`;
                min.innerHTML = `${result[code][newDate].temp_min}`;
            };
        };
    })
    .catch ((error) => {
        alert(error);
    });
};



/* TODO ESSE CODIGO É O MESMO DOS ACIMA, MAS SEM O USO DE PROMISSE, RESOLVE E REJECT. COMO TINHA FEITO INICIALMENTE, DEIXEI AQUI PRA CHECAGEM E ANALISE DO QUE É DIFERENTE E DO QUE FICA IGUAL

state.addEventListener("click", function() {

    city.innerHTML = "";

    fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
    )

    .then((response) => {
        return response.json();
    }) 

    .then((json) => {
        //console.log(json);
    
        if (stateCont === 0) {
            for (let i = 0; i < json.length; i++){
                let option = document.createElement("option");
    
                option.text = json[i].nome;
                option.value = json[i].id;
                state.appendChild(option);
            };

            stateCont = 1;
        };

        if (cityCont === 1){
            cityCont = 0;
        }
    })

    .catch ((error) => {
        alert(error);
    });
});

city.addEventListener("click", function() {
    
    fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.value}/distritos?orderBy=nome`
    )

    .then((response) => {
        return response.json();
    }) 

    .then((json) => {
        //console.log(json);
    
        if (cityCont === 0) {
            for (let i = 0; i < json.length; i++){
                let option = document.createElement("option");
    
                option.text = json[i].nome;
                option.value = json[i].municipio.id;
                city.appendChild(option);
            };
            cityCont = 1;
        };

        weather(city.value);
        tableSpc.style.display = "inline";
       
    })

    .catch ((error) => {
        alert(error);
    });
}); 


function weather(code) {
    fetch(
        `https://apiprevmet3.inmet.gov.br/previsao/${code}`
    )

    .then((response) => {
        return response.json();
    }) 

    .then((json) => {
        console.log(json);

        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        table.innerHTML = "";

        for (let i = 0; i < 5; i++) {

            let newDate = new Date(`${year}-${month}-${day + i}`).toLocaleDateString();

            let line = document.createElement("tr");

            let date = document.createElement("td");
            let weekDay = document.createElement("td");
            let sym = document.createElement("td");
            let abs = document.createElement("td");
            let max = document.createElement("td");
            let min = document.createElement("td");

            line.appendChild(date);
            line.appendChild(weekDay);
            line.appendChild(sym);
            line.appendChild(abs);
            line.appendChild(max);
            line.appendChild(min);

            table.appendChild(line);

            date.innerHTML = `${newDate}`;
            weekDay.innerHTML = `${d[new Date(`${year}-${month}-${day + i}`).getDay()]}`;

            if(i < 2){
                sym.innerHTML = `<img src="${json[code][newDate].manha.icone}" alt="icone" width="70px" height="70px">`;
                abs.innerHTML = `${json[code][newDate].manha.resumo}`;
                max.innerHTML = `${json[code][newDate].manha.temp_max}`;
                min.innerHTML = `${json[code][newDate].manha.temp_min}`;
            } else {
                sym.innerHTML = `<img src="${json[code][newDate].icone}" alt="icone" width="70px" height="70px">`;
                abs.innerHTML = `${json[code][newDate].resumo}`;
                max.innerHTML = `${json[code][newDate].temp_max}`;
                min.innerHTML = `${json[code][newDate].temp_min}`;
            };
        };
    })

    .catch ((error) => {
        alert(error);
    });
};
*/