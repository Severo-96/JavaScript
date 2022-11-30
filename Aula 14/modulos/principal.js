import custom from "./custom.js";

export default function main() {
    const page = document.createElement("div");
    const div1 = document.createElement("div");

    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    a1.textContent = "BRIGADEIROS";
    a2.textContent = "CUPCAKES";
    a3.textContent = "DOCES";

    div1.appendChild(a1);
    div1.appendChild(a2);
    div1.appendChild(a3);
    
    const div2 = document.createElement("div");
    div2.setAttribute("class", "flexCol");

    const p = document.createElement("p");
    p.textContent = "Doceria";
    div2.appendChild(p);
    
    page.appendChild(div1);
    page.appendChild(div2);

    a1.addEventListener("click", function () {
        const link1 = custom("/brigadeiros");
        document.dispatchEvent(link1);        
    });
    
    a2.addEventListener("click", function () {
        const link2 = custom("/cupcakes");
        document.dispatchEvent(link2);         
    });
    
    a3.addEventListener("click", function () {
        const link3 = custom("/doces");
        document.dispatchEvent(link3);                 
    });

    return page;
};