import roteador from "./modulos/roteador.js";

const rota = roteador();
const root = document.querySelector("#root");
const page = rota.getPage("/");

root.appendChild(page);

document.addEventListener("onstatechange", function(event) {
    const url = event.detail.url;
    const page = rota.getPage(url);

    root.innerHTML = "";
    root.appendChild(page);
    window.history.pushState(null, "", event.detail.url);
});