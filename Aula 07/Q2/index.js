//JavaScript

const obj = {
    "Um atributo com espaços" : 1,
};

console.log(obj["Um atributo com espaços"]);

const {"Um atributo com espaços": a} = obj;
console.log(a);