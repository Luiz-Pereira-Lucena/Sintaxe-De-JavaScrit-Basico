var input = document.querySelector('#addConteudo');
var btn = document.querySelector('#btn');
var list = document.querySelector('#list');
var el = document.getElementsByTagName('li');


btn.addEventListener('click',() =>{
    var TxT = input.value;

    if(TxT === ""){
        alert("ADICIONE ALGO NA LISTA");
    }else{
        var li = document.createElement('li');
        li.innerHTML = TxT;

        list.insertBefore(li , list.childNodes[0]);
        input.value = "";
    }
})