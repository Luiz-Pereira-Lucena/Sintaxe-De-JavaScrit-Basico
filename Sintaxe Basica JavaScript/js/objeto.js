let object = {String: 'Tete', Number: 20, Boolean: true, Array: ["A","R","R","A","Y"], objectInterno:{
    objectInterno:'Objeto dentro de um objeto'
}};

console.log(object.Array);
console.log(object.String);
console.log(object.Number);
console.log(object.Boolean);
console.log(object.objectInterno.objectInterno);

// ------------ DESESTRUTURAÇÃO -----------------------
console.log("------------ DESESTRUTURAÇÃO ----------------------- ");
console.log(" ----------STRING-------- ");
var nome = object.String;
console.log(nome);

console.log(" ----------ARRAY-------- ");
var vetor = object.Array;
console.log(vetor);

console.log(" ----------NUMBER-------- ");
var numero = object.Number;
console.log(numero);

console.log(" ----------BOOLEAN-------- ");
var boleano = object.Boolean;
console.log(boleano);

console.log(" ----------OBJECT DENTRO DE UM OBJECT-------- ");
var objeto = object.objectInterno.objectInterno;
console.log(objeto);