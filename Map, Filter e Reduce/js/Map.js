/**===================================================================================
 *                                  MAP()
 * ===================================================================================*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Escrevendo a FUNÇÃO que dobra valores
const dobraValores = number.map(function(elem){
    return elem * 2
});
console.log("Array primitivo: " + number);
console.log("Array com função MAP(). Função Dobrando valores :");
console.log(dobraValores);

// Usando Arrow Function
 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const triplicando = numeros.map(numeros => numeros * 3);

 console.log("Ultilizando Arrow Function no MAP(). Triplicando o Array: ");
 console.log(triplicando);
 console.log("");
 console.log("===================================================================");
 console.log("=====================CONVERSOR DE MEDIDAS==========================");

 const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
 const celsius = fahrenheit.map(function(elem){
     return Math.round((elem - 32) * 5 / 9);
 });

 console.log(celsius);
