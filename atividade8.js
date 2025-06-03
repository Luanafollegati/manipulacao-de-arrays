//08
let chamada = ["Carlos", "Fernanda", "João", "Mariana", "Lucas", "Camila"];

console.log("antes do unshift");
console.table(chamada);

//Adicionando alunas atrasadas no inicio da fila
chamada.unshift("Beatriz")
chamada.unshift("Rafaela")

console.log("depois do unshift");
console.table(chamada);