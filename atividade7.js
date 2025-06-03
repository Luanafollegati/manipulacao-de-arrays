//07
let filaAtendimento = ["cliente 003", "cliente 004", "cliente 005", "cliente 006", "cliente 007"];

console.log("antes do unshift");
console.table(filaAtendimento);

//Adicionando novos clientes no inicio da fila
filaAtendimento.unshift("cliente VIP 1")
filaAtendimento.unshift("cliente VIP 2")

console.log("depois do unshift");
console.table(filaAtendimento);