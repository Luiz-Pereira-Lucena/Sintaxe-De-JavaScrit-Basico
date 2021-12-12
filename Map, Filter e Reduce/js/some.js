/**===================================================================================
 *                                  SOME()
 * ===================================================================================*/

// Função para verificar se pelo menos 1 elemento do array passa no teste fornecido

function isPrimo(value){
    for(let i=2; i<value; i++){
        if(value % i === 0){
            return false;
        }
    }
    return value > 1;
}

const num = [ 6, 4, 1, 7, 3, 9];

console.log(num.some(isPrimo));