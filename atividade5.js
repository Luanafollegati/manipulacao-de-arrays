//05
let importados = ["carregador portátil", "cabo HDMI", "leitor biométrico", "controle sem fio", "webcam 4K"];

console.log("antes do shift");
console.table(importados);

// Removendo o primeiro item
let ItemRemovido = importados.shift();

console.log("depois do shift");
console.table(importados);

console.log("Item Removido: ", ItemRemovido);
