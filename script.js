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
}

criarLista();
console.log(listaOrdenavel);
