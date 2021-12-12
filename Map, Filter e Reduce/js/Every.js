/**===================================================================================
 *                                  EVERY()
 * ===================================================================================*/

//Função para VERIFICAR se todos os elementos de um Array são maiores que 10
const num = [2, 4, 6, 8, 10 ,12, 14, 16, 18, 20];

const verifElemento = num.every(elem => elem > 10);

console.log(verifElemento);
// A função EVERY() retorna um BOOLEANO . Ou seja, se ha elementos no array < 10, vai retornar FALSE
// se não, retorna TRUE;


//=========================================================================================
const array = [5, 10, 15, 20, 25, 30];

const maior = array.every(elem => elem >= 5);

console.log(maior);

//=========================================================================================
const turma = [
    {id: 12, nome: 'José', idade: 18},
    {id: 12, nome: 'Maria', idade: 22},
    {id: 12, nome: 'Rafael', idade: 20},
    {id: 12, nome: 'Anne', idade: 21},
    {id: 12, nome: 'Joselma', idade: 18}
];

const maiorIdade = turma.every(elem => elem.idade >= 18);

console.log("Todos da turma são de maior? " + maiorIdade);