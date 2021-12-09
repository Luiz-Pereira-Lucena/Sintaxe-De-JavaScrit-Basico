var vetor = ['Nome', 1, true, 3.5];

console.log(vetor);
console.log("----------------------------------------------------------------");

vetor.forEach(function (item, index){
    console.log(item, index)
});
console.log("O ForEach pecorre todo o Array lendo o Item e o Index de cada Item");

console.log("----------------------------------------------------------------");

vetor.push('PUSH');
console.log(vetor);
console.log("Adciona um item na ULTIMA posição do Array");

console.log("----------------------------------------------------------------");

vetor.pop();
console.log(vetor);
console.log("Apagamos o ULTIMO item do vetor com a função POP()");

console.log("----------------------------------------------------------------");

vetor.shift();
console.log(vetor);
console.log("Apagamos o PRIMEIRO item do vetor com a função SHIFT()");

console.log("----------------------------------------------------------------");

vetor.unshift('UNSHIFT');
console.log(vetor);
console.log("Adicionar um item no COMEÇO do Array");

console.log("----------------------------------------------------------------");

console.log("Index : " + vetor.indexOf(true));
console.log("Retorna o type do item passaddo por parâmetro");

console.log("----------------------------------------------------------------");

vetor.splice(1 , 2);
console.log(vetor);
console.log("Apaga os itens dos index passado por parâmetro");

console.log("----------------------------------------------------------------");

var metodoSlice = vetor.slice(1, 2);
console.log(metodoSlice);
console.log("Método SLICE retorna os valores dos index passado por parâmetro");