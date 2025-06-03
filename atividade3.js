// 03
let producao = ["mousepad", "placa de vídeo", "fonte de alimentação", "HD externo", "notebook gamer", "roteador"];

console.log("antes do pop");
console.table(producao);

// removendo o ultimo item
let itemRemovido = producao.pop();

console.log("depois do pop");
console.table(producao);  

console.log("Item removido: ", itemRemovido);