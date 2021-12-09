// ---------------------- FUNÇÕES SEM PARÂMETROS ----------------

function simplesFuncao(){
    console.log("Escopo da função simplesFuncao");
}
simplesFuncao();

// -------------------- FUNÇÕES COM PARAMETROS ------------------

function compostaFuncao(primeiroParametro, segundoParametro){
    console.log(primeiroParametro, segundoParametro);
}
compostaFuncao('Valor do primeiroParametro', 'Valor do segundoParametro');