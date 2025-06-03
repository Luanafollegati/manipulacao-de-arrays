//04
let inscritos = ["Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"];

console.log("antes do pop");
console.table(inscritos);

// removendo o ultimo inscrito
let inscritoRemovido = inscritos.pop();

console.log("depois do pop");
console.table(inscritos);  

console.log("Inscrito removido: ", inscritoRemovido);