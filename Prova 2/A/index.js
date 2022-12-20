const text = document.getElementById("text")
let printText;


function promise(){
    text.textContent = "";

    fetch(
        `https://api.adviceslip.com/advice`
    )
    .then((response) => {
        return response.json();
    }) 
    .then((json) => {
        console.log(json.slip.advice);
        text.textContent = json.slip.advice;

    })
    .catch ((error) => {
        alert(error);
    });
}

printText = setInterval(promise, 5000);