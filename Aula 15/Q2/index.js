const bomb = document.getElementById("bomb");
const text = document.getElementById("text");
const button = document.getElementById("button");

const timeToBlow = setInterval(toExplode, 1000);

const explosion = new Audio("./Sons/explosao.mp3");
const tick = new Audio("./Sons/tick.mp3");

let count = 60;

button.style.display = "none";

function toExplode() {
    count--;

    text.innerText = `Ela vai explodir em ${count} segundos! Seja rápido!`;

    tick.play();

    if (count === 0) {
        bomb.src="./Imagens/explosao.png"
        bomb.style.pointerEvents = "none";

        button.style.display = "inline";
    
        text.innerText = "BOOM!"
    
        explosion.play();

        clearInterval(timeToBlow);
    };
};

bomb.addEventListener("click", function() {
    clearInterval(timeToBlow);

    bomb.src="./Imagens/apagada.png";
    bomb.style.pointerEvents = "none";

    text.innerText = "Parabéns! Bomba desarmada com sucesso!"

    button.style.display = "inline";
});

button.addEventListener("click", function() {
    count = 60;
    
    button.style.display = "none";

    bomb.src="./Imagens/acesa.png";
    bomb.style.pointerEvents = "auto";

    text.innerText = `Ela vai explodir em 60 segundos! Seja rápido!`;


    timeToBlow = setInterval(toExplode, 1000);
})