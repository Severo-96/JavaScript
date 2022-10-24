//JavaScript

document.getElementById("button").addEventListener("click", function() {
    let product = document.getElementById("product").value;

    switch (product) {
        case "apple":
            document.getElementById('imgapple').style.display = "block";
            document.getElementById('imggrape').style.display = "none";
            document.getElementById('imgguava').style.display = "none";
            document.getElementById('imgpapaya').style.display = "none";
            document.getElementById('imgpear').style.display = "none";
            break;

        case "grape":
            document.getElementById('imgapple').style.display = "none";
            document.getElementById('imggrape').style.display = "block";
            document.getElementById('imgguava').style.display = "none";
            document.getElementById('imgpapaya').style.display = "none";
            document.getElementById('imgpear').style.display = "none";
            break;

        case "guava":
            document.getElementById('imgapple').style.display = "none";
            document.getElementById('imggrape').style.display = "none";
            document.getElementById('imgguava').style.display = "block";
            document.getElementById('imgpapaya').style.display = "none";
            document.getElementById('imgpear').style.display = "none";
            break;

        case "papaya":
            document.getElementById('imgapple').style.display = "none";
            document.getElementById('imggrape').style.display = "none";
            document.getElementById('imgguava').style.display = "none";
            document.getElementById('imgpapaya').style.display = "block";
            document.getElementById('imgpear').style.display = "none";
            break;

        case "pear":
            document.getElementById('imgapple').style.display = "none";
            document.getElementById('imggrape').style.display = "none";
            document.getElementById('imgguava').style.display = "none";
            document.getElementById('imgpapaya').style.display = "none";
            document.getElementById('imgpear').style.display = "block";
            break;

        default:
            alert ("Selecione um produto da lista!");
    }
});