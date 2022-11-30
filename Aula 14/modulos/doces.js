import custom from "./custom.js";
    
export default function doces() {
    const page = document.createElement("div");
    const div1 = document.createElement("div");
   
    const a = document.createElement("a");
    a.textContent = "PAG PRINCIPAL";
    div1.appendChild(a);
   
    const div2 = document.createElement("div");
    div2.setAttribute("class", "flexCol");

    const p = document.createElement("p");
    p.textContent = "Doces";
    div2.appendChild(p);

    page.appendChild(div1);
    page.appendChild(div2);

    a.addEventListener("click", function () {
        const link1 = custom("/");
        document.dispatchEvent(link1);        
    });

    return page;
}