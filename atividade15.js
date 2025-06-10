// 15
let menuNavegacao = ["Início", "Serviços", "Portfólio", "Blog", "Contato", "Login", "Área do cliente"];

// Removendo 2 elementos
let elementosRemovidos = menuNavegacao.splice(1, 2);

console.table(menuNavegacao);

console.log("Elementos removidos:", elementosRemovidos);
