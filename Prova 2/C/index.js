class Person{
    email;
    birthDate;

    constructor(_email, _birthDate){
        this.email = _email;
        this.birthDate = _birthDate;
    };

    get getEmail(){
        return this.email;
    };

    get getBirthDate(){
        return this.birthDate;
    };

    get getCode(){
        let birth = this.birthDate;
        let number = birth.replace(/[-.]/g, "");
        let array = number.split("");
        let arrayN =[];
        let code = 0;
        for(let i = 0; i < array.length; i++){
            arrayN.push(Number (array[i]))
        }
        for(let i = 0; i < arrayN.length; i++){
            code = code + arrayN[i] ;
        }
        return code;
    };
};

document.getElementById("button").addEventListener("click", () =>{
    let email = document.getElementById("text").value;
    let birthDate = document.getElementById("date").value;

    const pessoa = new Person(email, birthDate);

    fetch(
        `http://45.77.6.136/person?email=${pessoa.getEmail}&birthdate="${pessoa.getBirthDate}"&code=${pessoa.getCode}`
    )
    .then((response) => {
        return response.json();
    });
});