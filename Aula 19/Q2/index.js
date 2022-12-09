const button = document.getElementById("button");
const figure = document.querySelector("figure");

async function deck(){
    try{
        const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        if(response.status === 200){
            const json = await response.json();
            return Promise.resolve(json.deck_id);
        } else {
            return Promise.reject(response.statusText);
        };
    }
    catch (error){
        alert(error);
    };
};

async function card(deckID){
    try{
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
        if(response.status === 200){
            const json = await response.json();
            return Promise.resolve(json.cards);
        } else {
            return Promise.reject(response.statusText);
        };
    }
    catch (error){
        alert(error);
    };
}

button.addEventListener("click", async function(){
    figure.innerHTML="";
    let cardArray = [];

    const deckID = await deck();

    for(i = 0; i < 5; i++){
        cardArray.push(card(deckID));
    };
    
    const cardImg = await Promise.all(cardArray);

    for(j = 0; j < cardImg.length; j++){
        const imgCard = document.createElement("img");
        imgCard.src=`${cardImg[j][0].image}`
        figure.appendChild(imgCard);
    };
});