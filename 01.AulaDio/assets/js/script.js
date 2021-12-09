//STENADO O ELEMENTO PELO ID
var currentNumberWarpper = document.getElementById('currentNumber');
var currentNumber = 0;

//FUNÇÃO COR
function cor(){
    if(currentNumber > 0){
        currentNumberWarpper.style.color = 'green';
    }else{
        currentNumberWarpper.style.color = 'red';
    }
}

//FUNÇÃO INCREMENTAR
function incremento(){
    currentNumber = currentNumber + 1;
    currentNumberWarpper.innerHTML = currentNumber;

    return cor();
}

function decremente(){
    currentNumber = currentNumber - 1;
    currentNumberWarpper.innerHTML = currentNumber;

    return cor();
}