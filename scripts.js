
const tituloElement = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const linkElement = document.getElementById("link");
const listaOrdenada = document.getElementById("lista-ordenada");


tituloElement.innerText = "Título da Página";
linkElement.innerText = "Visite o site da Prozeducação";
linkElement.href = "https://prozeducacao.com.br";


listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;


listaOrdenada.innerHTML = `
    <li><a href="https://site1.com">Site 1</a></li>
    <li><a href="https://site2.com">Site 2</a></li>
    <li><a href="https://site3.com">Site 3</a></li>
`;
