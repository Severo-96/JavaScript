//JavaScript

const car = document.getElementById('car');
const figure = document.getElementById("figure");
const cr1 = document.getElementById('cr1');
const cr2 = document.getElementById('cr2');
const cr3 = document.getElementById('cr3');
const cr4 = document.getElementById('cr4');
const cr5 = document.getElementById('cr5');
const cr6 = document.getElementById('cr6');

car.addEventListener('change', showcar);

function showcar() {
    
    switch (car.value){

        case 'argo':

            figure.style.backgroundImage = "url(./Imagens/ARGO.jpeg)";
            cr1.textContent = "Combustivel: Gasolina";
            cr2.textContent = "Potência: 77cv"
            cr3.textContent = "Aceleração (0 - 100km): 13,4s"
            cr4.textContent = "Câmbio: Manual (5 marchas)"
            cr5.textContent = "Consumo (Cidade): 14,1 km/l"
            cr6.textContent = "Consumo (Estrada): 15,8 km/l"

            break;

        case 'hb':

            figure.style.backgroundImage = "url(./Imagens/HB20.jpeg)";
            cr1.textContent = "Combustivel: Gasolina";
            cr2.textContent = "Potência: 123cv"
            cr3.textContent = "Aceleração (0 - 100km): 9,3s"
            cr4.textContent = "Câmbio: Manual (6 marchas)"
            cr5.textContent = "Consumo (Cidade): 12,5 km/l"
            cr6.textContent = "Consumo (Estrada): 14,7 km/l"

            break;
        
        case 'mobi':

            figure.style.backgroundImage = "url(./Imagens/MOBI.jpeg)";
            cr1.textContent = "Combustivel: Gasolina";
            cr2.textContent = "Potência: 71cv"
            cr3.textContent = "Aceleração (0 - 100km): 14s"
            cr4.textContent = "Câmbio: Manual (5 marchas)"
            cr5.textContent = "Consumo (Cidade): 13,5 km/l"
            cr6.textContent = "Consumo (Estrada): 15 km/l"

            break;
            
        case 'onix':

            figure.style.backgroundImage = "url(./Imagens/ONIX.jpeg)";
            cr1.textContent = "Combustivel: Gasolina";
            cr2.textContent = "Potência: 116cv"
            cr3.textContent = "Aceleração (0 - 100km): 10,1s"
            cr4.textContent = "Câmbio: Manual (6 marchas)"
            cr5.textContent = "Consumo (Cidade): 13,5 km/l"
            cr6.textContent = "Consumo (Estrada): 16 km/l"

            break ;

        case 'gol':

            figure.style.backgroundImage = "url(./Imagens/GOL.jpeg)";
            cr1.textContent = "Combustivel: Gasolina";
            cr2.textContent = "Potência: 101cv"
            cr3.textContent = "Aceleração (0 - 100km): 10,4s"
            cr4.textContent = "Câmbio: Manual (5 marchas)"
            cr5.textContent = "Consumo (Cidade): 11,1 km/l"
            cr6.textContent = "Consumo (Estrada): 13,6 km/l"

            break;            
        default:
    };
};