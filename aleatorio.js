
// Escolhe um elemento aleatório de uma lista
export function aleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

// Lista de nomes para a experiência
const nomes = [
    "Ana",
    "Sofia",
    "Luna",
    "Clara",
    "Alice",
    "Rafa",
    "Alex",
    "Noah",
    "Davi",
    "Bia"
];

// Escolhe um nome aleatório
export const nome = aleatorio(nomes);
