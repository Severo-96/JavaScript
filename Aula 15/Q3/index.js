let select = document.querySelectorAll(".select");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");

let timeFull = 0;
let timeMax = 0;
let setInt = 0;

const alarm = new Audio("./Sons/alarm.mp3");

stopBtn.style.display = "none";
text2.style.display = "none";

function creatSelect(select) {
    for(let i = 1; i < 60; i++) {
        let option = document.createElement("option");

        if (i < 10) {
            option.text = `0${i}`;
        } else {
            option.text = i;
        };

        option.value = i;
        select.appendChild(option);
    };

};

select.forEach((element) => {
    element.addEventListener("click", (event) => {
        const clickedElement = event.target;
        
        if(clickedElement.length === 1) {
            creatSelect(clickedElement);
        };
    });
});

function timer() {
    const min = Math.floor(timeFull / 60);
    const sec = timeFull % 60;

    if(min < 10 && sec < 10) {
        text.innerText = `0${min}:0${sec}`;
    };

    if (min < 10 && sec >= 10) {
        text.innerText = `0${min}:${sec}`;
    };

    if (min >= 10 && sec < 10) {
        text.innerText = `${min}:0${sec}`;
    };

    if (min >= 10 && sec >= 10) {
        text.innerText = `${min}:${sec}`;
    };

    timeFull--;

    if(timeMax * 0.05 > timeFull) {
        text2.style.display = "inline";
    }

    if(timeFull === 0) {
        timerEnd();
    };
};

function timerEnd() {
    alarm.play();
    clearInterval(setInt);
    text.innerText = `00:00`;
}

startBtn.addEventListener("click", function() {
    let min = Number(document.getElementById("min").value);
    let sec = Number(document.getElementById("sec").value);

    timeFull = min * 60 + sec;
    timeMax = min * 60 + sec;

    if(timeFull === 0) {
        timerEnd();

    } else {
        setInt = setInterval(timer, 1000);
    };

    stopBtn.style.display = "inline";
    startBtn.style.display = "none";

    console.log(timeFull);
});

stopBtn.addEventListener("click", function() {
    clearInterval(setInt);

    alarm.pause();
    alarm.currentTime = 0;

    stopBtn.style.display = "none";
    startBtn.style.display = "inline";
    text2.style.display = "none";
});