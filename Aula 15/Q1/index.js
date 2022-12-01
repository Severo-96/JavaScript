const bomb = document.getElementById("bomb");
const text = document.getElementById("text");
const button = document.getElementById("button");

const timeToBlow = setTimeout(boom, 10000);
const explosion = new Audio("./Sons/explosao.mp3");

button.style.display = "none";

function boom() {
    bomb.src="./Imagens/explosao.png"
    bomb.style.pointerEvents = "none";

    text.innerText = "BOOM!"

    explosion.play();

    button.style.display = "inline";
};

bomb.addEventListener("click", function() {
    clearTimeout(timeToBlow);

    bomb.src="./Imagens/apagada.png";
    bomb.style.pointerEvents = "none";

    text.innerText = "Parabéns! Bomba desarmada com sucesso!"

    button.style.display = "inline";
});

button.addEventListener("click", function() {
    button.style.display = "none";

    bomb.src="./Imagens/acesa.png";
    bomb.style.pointerEvents = "auto";

    timeToBlow = setTimeout(boom, 10000);
})