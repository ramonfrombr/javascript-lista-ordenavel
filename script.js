const listaOrdenavel = document.getElementById("lista-ordenavel");
const checar = document.getElementById("checar");

const paisesMaisPopulosos = [
    "China",
    "India",
    "Estados Unidos",
    "Indonesia",
    "Paquistão",
    "Nigeria",
    "Brasil",
    "Bangladesh",
    "Russia",
    "México",
];

// Armazena items da lista
const itensDaLista = [];

let indiceInicioArraste;

// Insere items da lista no DOM
function criarLista() {
    [...paisesMaisPopulosos]
        .map((a) => ({ valor: a, ordem: Math.random() }))
        .sort((a, b) => a.ordem - b.ordem)
        .map((a) => a.valor)
        .forEach((pais, indice) => {
            const item = document.createElement("li");

            item.setAttribute("data-indice", indice);

            item.innerHTML = `
                <span class="numero">${indice + 1}</span>
                <div class="arrastavel" draggable="true">
                    <p class="nome-pais">${pais}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            itensDaLista.push(item);

            listaOrdenavel.appendChild(item);
        });

    adicionarDetectoresDeEventos();
}

criarLista();

function iniciarArraste(e) {
    //console.log("Evento: ", e.type);
    indiceInicioArraste = +this.closest("li").getAttribute("data-indice");
}

function encostar(e) {
    //console.log("Event: ", e.type);
    this.classList.add("em-cima");
}

function desencostar(e) {
    //console.log("Event: ", e.type);
    this.classList.remove("em-cima");
}

function emCima(e) {
    // console.log("Event: ", e.type);
    e.preventDefault();
}

function soltar(e) {
    //console.log("Event:", e.type);
    this.classList.remove("em-cima");
}

function adicionarDetectoresDeEventos() {
    const arrastaveis = document.querySelectorAll(".arrastavel");
    const itensListaOrdenavel = document.querySelectorAll(
        ".lista-ordenavel li"
    );

    arrastaveis.forEach((arrastavel) => {
        arrastavel.addEventListener("dragstart", iniciarArraste);
    });

    itensListaOrdenavel.forEach((item) => {
        item.addEventListener("dragenter", encostar);
        item.addEventListener("dragleave", desencostar);
        item.addEventListener("drop", soltar);
        item.addEventListener("dragover", emCima);
    });
}
