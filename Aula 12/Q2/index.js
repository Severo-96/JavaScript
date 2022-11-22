//JavaScript

let text = document.getElementById(`text`);
text.style.display = "none"; 

const card1 = document.getElementById(`card1`);
const card2 = document.getElementById(`card2`);
const card3 = document.getElementById(`card3`);
const card4 = document.getElementById(`card4`);
const card5 = document.getElementById(`card5`);

let deck = [];
let hand = [];
let suit;
let value;
let symbol;

function createDeck () {
    deck = [];

    for (i = 0; i < 4; i++){
    
        if (i == 0){
            suit =  `H`; //hearts
        };
    
        if (i == 1){
            suit =  `C`; //clubs
        };
    
        if (i == 2){
            suit =  `D`; //diamonds
        };
    
        if (i == 3){
            suit =  `S`; //spades
        };
    
        for (let j = 1; j < 14; j++){
            value = j;
            symbol = j;
    
            if (j == 1) {
                symbol = `A`;
            };

            if (j == 10) {
                symbol = `T`;
            };
    
            if (j == 11) {
                symbol = `J`;
            };
    
            if (j == 12) {
                symbol = `Q`;
            };
    
            if (j == 13) {
                symbol = `K`;
            };
    
            const card = {
                "suit" : suit,
                "value" : value,
                "symbol" : symbol
            };
    
            deck.push(card);
        };
    };
};

function shuffle () {
    deck.sort(() => Math.random() - 0.5);
};

function pullCards(){
    hand = [];

    for (let i = 0; i < 5; i++){
        hand.push(deck[i]);

        deck.splice(i, 1);
    };

    hand.sort(function(a, b){
        return a.value - b.value; 
    });
};

function pair(){
    let cont = 0;

    for (let i = 0; i < hand.length - 1; i++){
        for (let j = i + 1; j < hand.length; j++){
            if(hand[i].value == hand[j].value){
                cont++;
            };
        };
    };

    if(cont == 1){
        return true;
    } else {
        return false;
    };
};

function twoPairs(){
    let cont = 0;

    for (let i = 0; i < hand.length - 1; i++){
        for (let j = i + 1; j < hand.length; j++){
            if(hand[i].value == hand[j].value){
                cont++;
            }
        };
    };

    if (cont == 2) {
        return true;
    } else {
        return false;
    };
};

function threeOf(){
    for (let i = 0; i < hand.length - 1; i++){
        let cont = 0;

        for (let j = i + 1; j < hand.length; j++){
            if(hand[i].value == hand[j].value){
                cont++;
            };

            if (cont == 2){
                return true;
            };
        };
    };
    return false;
};

function straight(){
    let cont = 0;

    for (let i = 0; i < hand.length - 1; i++){
        if (hand[i + 1].value - hand[i].value == 1){
            cont++;
        };
    };

    if (hand[4].value == 13 && hand[0].value == 1){
        cont++;
    };

    if (cont == 4) {
        return true;
    } else {
        return false;
    };
};

function flush(){
    let cont = 0;

    for (let i = 0; i < hand.length - 1; i++){
        if (hand[i + 1].suit == hand[i].suit){
            cont++;
        };
    };

    if (cont == 4) {
        return true;
    } else {
        return false;
    };
};

function fullHouse(){
    if (threeOf() && pair()){
        return true;
    } else{
        return false;
    };
};

function fourOf(){
    for (let i = 0; i < hand.length - 1; i++){
        let cont = 0;

        for (let j = i + 1; j < hand.length; j++){
            if(hand[i].value == hand[j].value){
                cont++;
            };

            if (cont == 3){
                return true;
            };
        };
    };
    return false;
};

function straightFlush(){
    if (flush() && straight()){
        return true;
    } else {
        return false;
    };
};

function royalFlush(){
    if (flush() && hand[0].value == 1 && hand[1].value == 10 && hand[2].value == 11 && hand[3].value == 12 && hand[4].value == 13){
        return true;
    } else {
        return false;
    };
};

function result(){
    if(royalFlush()){
        return "Royal Flush!";
    };

    if (straightFlush()){
        return "Straight Flush!";
    };

    if (fourOf()){
        return "Four of a Kind!";
    };

    if (fullHouse()){
        return "Full House!";
    };

    if (flush()){
        return "Flush!";
    };

    if (straight()){
        return "Straight!";
    };

    if (threeOf()){
        return "Three of a Kind!";
    };

    if (twoPairs()){
        return "Two Pairs!";
    };

    if (pair()){
        return "Pair!";
    };

    return "NONE! Try Again!";
}

document.getElementById("button").addEventListener("click", function(){
    
    createDeck();
    shuffle();
    pullCards();
    result();

    text.style.display = "flex"; 
    text.textContent = `${result()}`;

    card1.src=`./deck/${hand[0].symbol}${hand[0].suit}.svg`;
    card2.src=`./deck/${hand[1].symbol}${hand[1].suit}.svg`;
    card3.src=`./deck/${hand[2].symbol}${hand[2].suit}.svg`;
    card4.src=`./deck/${hand[3].symbol}${hand[3].suit}.svg`;
    card5.src=`./deck/${hand[4].symbol}${hand[4].suit}.svg`;

    console.log(hand);
    console.log(result());
    console.log(deck);
});

//TEST ARRAYS
//hand = [{suit: 'clubs', value: 1}, {suit: 'hearts', value: 1}, {suit: 'diamonds', value: 1}, {suit: 'spades', value: 3}, {suit: 'clubs', value: 4}];
// hand = [{suit: 'clubs', value: 1}, {suit: 'clubs', value: 3}, {suit: 'clubs', value: 5}, {suit: 'clubs', value: 7}, {suit: 'clubs', value: 9}];