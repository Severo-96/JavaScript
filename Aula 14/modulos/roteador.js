import principal from "./principal.js";
import brigadeiros from "./brigadeiros.js";
import cupcakes from "./cupcakes.js";
import doces from "./doces.js";

export default function roteador() {
    const rotas = {
        "/": principal(),
        "/brigadeiros": brigadeiros(),
        "/cupcakes": cupcakes(),
        "/doces": doces(),
        getPage: function (url) {return this[url]},
    };
    return rotas;
};