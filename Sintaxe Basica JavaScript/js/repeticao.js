
var vetor = ['ITEM 01', 'ITEM 02', 'ITEM 03', 'ITEM 04', 'ITEM 05', 'ITEM 06'];

for(i=0; i <= vetor.length - 1; i++){
    console.log(vetor[i] + "- posição: " + i);
};

console.log("------------------------------------------");

for(let i in vetor){
    console.log(vetor[i]);
};

console.log("------------------------------------------");

var a = 0;
while(a <= 8){
    console.log("POSIÇÃO - " + a);
    a++;
};