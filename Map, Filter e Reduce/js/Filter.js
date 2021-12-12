/**===================================================================================
 *                                  FILTER()
 * ===================================================================================*/
//Função para remover elementos duplicados de um Array

const num = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9, 10];

const unique = num.filter((elem, index, arr) => arr.indexOf(elem) === index);

console.log(unique);