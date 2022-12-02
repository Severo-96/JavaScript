const csr = document.querySelector("body");
const cep = document.getElementById("cep");
const iframe = document.getElementById("iframe");

const consult = document.getElementById("consult");
const map = document.getElementById("map");

const adr = document.getElementById("adr");
const nbr = document.getElementById("nbr");
const city = document.getElementById("city");
const state = document.getElementById("state");
const latitude = document.getElementById("lat");
const longitude = document.getElementById("lon");

map.style.display = "none";
iframe.style.display = "none";

let lat = 0;
let lng = 0;
let status = 0;

cep.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.]/g, "");
});

consult.addEventListener("click", function() {
    try {
        csr.style.cursor = "wait";

        fetch(
            `https://cep.awesomeapi.com.br/json/${cep.value}`
        )

        .then((response) => {
            return response.json();
        }) 

        .then((json) => {
            console.log(json);
            console.log(json.status);

            verification(json);

            lat = json.lat;
            lng = json.lng;

            adr.innerHTML = `<b>Endereço:</b> ${json.address}`;
            nbr.innerHTML = `<b>Bairro:</b> ${json.district}`;
            city.innerHTML = `<b>Cidade:</b> ${json.city}`;
            state.innerHTML = `<b>Estado:</b> ${json.state}`;
            latitude.innerHTML = `<b>Latitude:</b> ${lat}`;
            longitude.innerHTML = `<b>Longitude:</b> ${lng}`;
        
            csr.style.cursor  = "default";
            map.style.display = "inline";
        });

    } catch(error) {
        alert(error);
    };
});

map.addEventListener("click", function() {
    try {
        csr.style.cursor = "wait";

        iframe.style.display = "inline";
        iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=pt&z=14&output=embed`;

        csr.style.cursor = "default";

    } catch (error) {
        alert(error);
    };
});

function verification(json) {
    if (json.status === 400 || json.status === 404) {
        alert(`${json.message}`);
        csr.style.cursor  = "default";
        throw `${json.message}`;
    };
};