//JavaScript

let i = 1;  
const produtos = [];

let table = document.getElementById("table");
let msg = document.getElementById("msg");
let product = document.getElementById("product");
let description = document.getElementById("description");
let value = document.getElementById("value");
let search = document.getElementById("search");
let searchMsg = document.getElementById("searchMsg");

const includeButton = document.getElementById("include");
const listButton = document.getElementById("list");
const editButton = document.getElementById("edit");
const cancelButton = document.getElementById("cancel");
const productValue = document.getElementById("productValue");
const productName = document.getElementById("productName");
const searchButton = document.getElementById("searchButton");

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
    
    includeButton.style.display = "inline";
    listButton.style.display = "inline";

    editButton.style.display = "none";
    cancelButton.style.display = "none";

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
    
    includeButton.style.display = "none";
    listButton.style.display = "none";

    editButton.style.display = "inline";
    cancelButton.style.display = "inline";

    editId = i;

    clearImputs();

    product.value = produtos[i].nome;
    description.value = produtos[i].descricao;
    value.value = produtos[i].valor;

};

cancelButton.addEventListener("click", function() {
    includeButton.style.display = "inline";
    listButton.style.display = "inline";

    editButton.style.display = "none";
    cancelButton.style.display = "none";

    clearImputs();

});

function delItem(i){

    produtos.splice(i, 1);
    createTable();
};

productName.addEventListener("click", function() {
    
    produtos.sort(function(a, b){
        if(a.nome < b.nome) { 
            return -1; 
        }
        if(a.nome > b.nome) { 
            return 1; 
        }
        return 0;
    });

    createTable();

});

productValue.addEventListener("click", function() {

    produtos.sort(function(a, b){
        return a.valor - b.valor; 

    });
    
    createTable();

});

let searchArray = [];
searchButton.addEventListener("click", function() {

    searchArray = [];

    if(search.value == "") {
        createTable();
        
    } else{
        searchArray = produtos.filter(object => object.nome == search.value);
        if(searchArray == "") {
            searchMsg.textContent = `Não foram encontrados produtos conforme chave de pesquisa!`;
            table.innerHTML = "";
        } else{

            table.innerHTML = "";

            let cont = 1;
            while (searchArray.length >= cont){
                addRowSearch(cont, searchArray);
                cont = cont + 1;
            }
        }
    }

});

function addRowSearch(cont, array) {

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
  
    col1.innerHTML = `<span class ="link" onclick="printInfo(${i})">${array[i].id}</span>`;
    col2.innerHTML = `<span class ="link" onclick="printInfo(${i})">${array[i].nome}</span>`;
    col3.innerHTML = `<span class ="link" onclick="printInfo(${i})">R$${array[i].valor}<span>`;
    col4.innerHTML = `<img class ="link" src="./imagem/edit.png" alt="edit" onclick="editItem(${i})">`;
    col5.innerHTML = `<img class ="link" src="./imagem/delete.png" alt="del" onclick="delItem(${i})">`;

};