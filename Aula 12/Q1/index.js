//JavaScript

const number = [];
let test;

document.getElementById("button").addEventListener("click", function() {
    for (let i = 1; i <= 100000; i++){
        test = 1;
               
        for (let j = 1; j < number.length; j++){
            
            if (i % number[j] == 0) {
                test = 0;
                break;
            }
        }

        if(test == 1) {
            number.push(i);
        }
    };
    console.log(number);
});