const init = document.getElementById("button");
const reset = document.getElementById("reset");
const numGen = document.getElementById("numGen");
const playerNum = document.getElementById("playerNum");
const drawnNum = document.getElementById("drawnNum");
const rightSide = document.querySelector(".rightSide");

reset.style.display = "none";

const max = 75;
const min = 1;
const quant = 10;

let drawNumber;
let cont = max;

let numberPrint;
let array = [];

function card(){
    let cardNumbers = [];

    function list(){
        let allNumbers = [];

        for(let i = min; i <= max; i++){
            allNumbers.push(i)
        };

        allNumbers.sort(function(){
            return Math.random() - 0.5;
        });

        for(let i = 0; i < quant; i++){
            const obj = {
                num: allNumbers[i],
                marked: false,
            };

            cardNumbers.push(obj);
            cardNumbers.sort(function(obj1, obj2) {
                return obj1.num - obj2.num;
            });
        };
        return cardNumbers;
    };

    function markNum(num){
        let idex = -1;

        cardNumbers.forEach(function(element, position){
            if(element.num === num){
                element.marked = true;
                idex = position;
            };
        });

        return idex;
    };

    function victory(){
        const win = cardNumbers.every(function(element){
            return element.marked === true;
        });
        return win;
    };

    return{
        list: list,
        markNum: markNum,
        victory: victory,
    };
};

function drawer(min, max){
    let drawOrder = [];

    for(let i = min; i <= max; i++){
        drawOrder.push(i)
    };

    drawOrder.sort(function(){
        return Math.random() - 0.5;
    });

    function drawNumber(){
        const num = drawOrder[0];
        drawOrder.splice(0,1);
        return num;
    };

    function verifyDrawed(num){
        const index = drawOrder.indexOf(num);

        if (index === -1){
            return true;
        } else {
            return false;
        };
    };

    return {
        drawNumber: drawNumber,
        verifyDrawed: verifyDrawed,
    };
};

function printNumber(){
    cont--;
    let drawNumberNum = drawNumber.drawNumber()

    numGen.textContent = `${drawNumberNum}`

    let pulledNum = document.createElement("p");
    pulledNum.setAttribute("class", `pNumber`); 
    drawnNum.appendChild(pulledNum)

    pulledNum.innerHTML = `${drawNumberNum}`;
    
    if (cont === 0){
        clearInterval(numberPrint);
    };
};

function verification(event){
    let num = Number(event.target.innerText);
    let playerNum = Number(event.target.classList[0].replace("player", ""));
    
    if(drawNumber.verifyDrawed(num) === true){
        const verifyMark = array[playerNum].markNum(num);
        event.target.style.backgroundColor = "lightgreen";

        if(verifyMark !== -1){
            const victoryVerify = array[playerNum].victory();

            if (victoryVerify === true){
                clearInterval(numberPrint);
                alert(`Vencedor Jogador ${playerNum}`)
                return true;
            };
        };
    };
};

function createCard(){
    let cardQuant = Number(playerNum.value);
    
    for(let i = 0; i < cardQuant; i++){
        let cards = new card();
        cardArray = cards.list();
        array.push(cards);

        let div = document.createElement("div");
        let playerName = document.createElement("p");
        let divNumber = document.createElement("div");
    
        for(let j = 0; j < quant; j++){
            let numbers = document.createElement("button");
            numbers.onclick = verification;
            numbers.setAttribute("id", `num${j}`); 
            numbers.setAttribute("class", `player${i}`); 
            numbers.innerHTML = cardArray[j].num;

            divNumber.appendChild(numbers);
        };
              
        div.appendChild(playerName);
        div.appendChild(divNumber);
    
        rightSide.appendChild(div);
    
        playerName.innerHTML = `Jogador ${i}`;
    };
};

init.addEventListener("click", () => {
    if(playerNum.value == ""){
        alert ("Favor inserir a quantidade de jogadores")
        throw error;
    };

    drawNumber = drawer(min, max);
    numberPrint = setInterval(printNumber, 1000);
    createCard();

    reset.style.display = "inline";
    init.style.display = "none";
});

reset.addEventListener("click", () => {
    init.style.display = "inline";
    reset.style.display = "none";
    rightSide.innerHTML = "";
    drawnNum.innerHTML = "";
    numGen.innerHTML = "-";
    cont = max;
    drawNumber = 0;
    clearInterval(numberPrint);
});