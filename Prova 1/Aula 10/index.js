//JavaScript

let i = 1;  
const produtos = [];

let table = document.getElementById("table");
let msg = document.getElementById("msg");
let product = document.getElementById("product");
let description = document.getElementById("description");
let value = document.getElementById("value");

const includeButton = document.getElementById("include");
const listButton = document.getElementById("list");
const editButton = document.getElementById("edit");
const cancelButton = document.getElementById("cancel");

editButton.style.display = "none";
cancelButton.style.display = "none";

function clearImputs(){

    product.value = "";
    description.value = "";
    value.value = "";

};

includeButton.addEventListener("click", function() {
    
    let prod = product.value;
    let desc = description.value;
    let val = value.value;
    const date = new Date();

    validation(prod, desc, val);

    let id = i++;

    const object = {
        "id" : id,
        "nome" : prod,
        "descricao" : desc,
        "valor" : val,
        "incluidoEm" : date.toISOString(),
    };

    produtos.push(object);

    msg.textContent = `Produto ${object.nome} incluído com sucesso!`;

    clearImputs();

});

function validation(prod, desc, val){

    if (prod === "" || desc === "" || val ===""){
        msg.textContent = "Todos os espaços vazios devem ser preenchidos corretamente!";
        throw "emptyImput";
    };

    if (isNaN(val)){
        msg.textContent = "Por favor, corrija o campo VALOR,e o preencha corretamente!";
        throw "invalidPrice";
    };

};

listButton.addEventListener("click", createTable);

function createTable(){
    table.innerHTML = "";

    let cont = 1;
    while (produtos.length >= cont){
        addRow(cont);
        cont = cont + 1;
    }
};

function addRow(cont) {

    let line = document.createElement("tr");

    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let col5 = document.createElement("td");
    
    line.appendChild(col1);
    line.appendChild(col2);
    line.appendChild(col3);
    line.appendChild(col4);
    line.appendChild(col5);

    table.appendChild(line);

    let i = cont - 1;
  
    col1.innerHTML = `<span class ="link" onclick="printInfo(${i})">${produtos[i].id}</span>`;
    col2.innerHTML = `<span class ="link" onclick="printInfo(${i})">${produtos[i].nome}</span>`;
    col3.innerHTML = `<span class ="link" onclick="printInfo(${i})">R$${produtos[i].valor}<span>`;
    col4.innerHTML = `<img class ="link" src="./imagem/edit.png" alt="edit" onclick="editItem(${i})">`;
    col5.innerHTML = `<img class ="link" src="./imagem/delete.png" alt="del" onclick="delItem(${i})">`;

};

function printInfo(i){
    let cont = i;

    let date = new Date(produtos[cont].incluidoEm);

    msg.innerHTML = `ID: ${produtos[cont].id}. <br> Nome: ${produtos[cont].nome}. <br> Descrição: ${produtos[cont].descricao}. <br> Valor: ${produtos[cont].valor}. <br> Incluido Em: ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;

} ;

let editId;

editButton.addEventListener("click", function(){
    
    
    includeButton.style.display = "inline"
    listButton.style.display = "inline"

    editButton.style.display = "none"
    cancelButton.style.display = "none"

    let prod = product.value;
    let desc = description.value;
    let val = value.value

    validation(prod, desc, val);

    console.log(produtos[editId]);

    produtos[editId].nome = prod;
    produtos[editId].descricao = desc;
    produtos[editId].valor = val;

    createTable();
    clearImputs();
});
  
function editItem(i){
    
    includeButton.style.display = "none"
    listButton.style.display = "none"

    editButton.style.display = "inline"
    cancelButton.style.display = "inline"

    editId = i;

    clearImputs()

    product.value = produtos[i].nome;
    description.value = produtos[i].descricao;
    value.value = produtos[i].valor;

};

cancelButton.addEventListener("click", function() {
    includeButton.style.display = "inline"
    listButton.style.display = "inline"

    editButton.style.display = "none"
    cancelButton.style.display = "none"

    clearImputs()

});

function delItem(i){

    produtos.splice(i, 1);
    createTable();
};