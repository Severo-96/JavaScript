//JavaScript

const cep = document.querySelector("#num");

cep.addEventListener("input", function() {
    
    const value = event.target.value.replace(/[^0-9]/g, "");
    cep.value = value.replace(/^([\d]{2})([\d]{3})([\d]{3})$/, "$1.$2-$3");
    
});