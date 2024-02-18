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

function iniciarArraste() {
    //console.log("Evento: ", "dragstart");
    indiceInicioArraste = +this.closest("li").getAttribute("data-indice");
    console.log(indiceInicioArraste);
}

function adicionarDetectoresDeEventos() {
    const arrastaveis = document.querySelectorAll(".arrastavel");

    arrastaveis.forEach((arrastavel) => {
        arrastavel.addEventListener("dragstart", iniciarArraste);
    });
}
