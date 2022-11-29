//JavaScript

let text = document.getElementById("text");
const button = document.getElementById("button");
const element = document.querySelectorAll(".element");

let game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let turn = 0;
let player = "X";

function playerClick(element) {
    if(player === "X") {
        element.innerHTML = "X";

    } else {
        element.innerHTML = "O";
    };
};

function noClick(element) {
    element.style.pointerEvents = "none";
};

function verifyGame(row, column) {
    if(verifyRow(row) || verifyCol(column) || verifyDiagonal()){
        element.forEach((element) => noClick(element));
        button.innerHTML = "Novo Jogo!";
        text.textContent = `Vencedor: ${player}!`;
        return "end";
    };

    if(turn === 9){
        element.forEach((element) => element.style.backgroundColor = "red");
        button.innerHTML = "Jogar Novamente!";
        text.textContent = `Deu Velha!`;
        return "end";
    };
};

function verifyRow(row) {
    let cont = 0;

    console.log(row);

    console.log(cont);
    

    for(let i = 0; i < 3; i++){
        if(game[row][i] === player){
            cont++;
        };

        if(cont === 3){
            lightUp("row", row);
            return true;
        };
    };

    return false;
};

function verifyCol(column) {
    let cont = 0;

    for(let i = 0; i < 3; i++){
        if(game[i][column] === player){
            cont++;
        };

        if(cont === 3){
            lightUp("column", column);
            return true;
        };
    };

    return false;
};

function verifyDiagonal() {
    let cont1 = 0;
    let cont2 = 0;

    for(let i = 0; i < 3; i++){
        if(game[i][i] === player){
            cont1++;
        };

        if(game[i][2 - i] === player){
            cont2++;
        };
    };

    if(cont1 === 3){
        lightUp("diag1");
        return true;
    };

    if(cont2 === 3){
        lightUp("diag2");
        return true;
    };

    return false;
};

function reset() {
    text.textContent = "Vez do Jogador: X!";
    game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    player = "X";
    turn = 0;

    element.forEach((element) => {
        element.innerHTML = " ";
        element.style.backgroundColor = "white";
        element.style.pointerEvents = "auto";
        element.dataset.clicked = "false";
    });
};

function lightUp(id, j) {
    element.forEach((element) => element.style.backgroundColor = "grey");
    
    if(id === "row") {
        for(let i = 0; i < 3; i++){
            element[3 * j + i].style.backgroundColor = "green";
        };
    };

    if(id === "column") {
        for(let i = 0; i < 3; i++){
            element[3 * i + j].style.backgroundColor = "green";
        };
    };

    if(id === "diag1") {
        for(let i = 0; i < 3; i++){
            element[3 * i + i].style.backgroundColor = "green";
        };
    };

    if(id === "diag2") {
        for(let i = 0; i < 3; i++){
            element[3 * i + 2 - i].style.backgroundColor = "green";
        };
    };
};

element.forEach((element) => {
    element.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const rowID = Number(clickedElement.dataset.position[0]);
        const columnID = Number(clickedElement.dataset.position[1]);

        noClick(clickedElement);
        playerClick(clickedElement);
        turn++;

        if(clickedElement.dataset.clicked === "false"){
            game[rowID][columnID] = player;
            clickedElement.dataset.clicked === "true";
        };

        if(verifyGame(rowID, columnID) !== "end"){
           
            if (player === "X") {
                player = "O";
    
            } else {
                player = "X";
            };
     
            text.textContent = `Vez do jogador ${player}!`;
        };
    });
});

button.addEventListener("click", () => {
    button.innerHTML = "Reiniciar Jogo!";
    reset();
});