// 01
let promocoes = ["teclado mecânico", "mouse gamer", "monitor ultrawide", "cadeira ergonômica",  "webcam HD", "fone bluetooth", "notebook i5", "hub USB"];

console.log("antes do push");
console.table(promocoes);

// adicionando novos produtos em promoção 
promocoes.push("SSD 1TB", "mesa digitalizadora");

console.log("depois do push");
console.table(promocoes);
