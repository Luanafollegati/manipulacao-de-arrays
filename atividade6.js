//06
let mensagens = ["Propaganda indevida", "Bom dia, posso ajudar?", "Preciso de suporte técnico", "Claro, qual o problema?", "Erro ao acessar conta"];

console.log("antes do shift");
console.table(mensagens);

// Removendo a primeira mensagem
let mensagemRemovida = mensagens.shift();

console.log("depois do shift");
console.table(mensagens);

console.log("Mensagem Removida: ", mensagemRemovida);
