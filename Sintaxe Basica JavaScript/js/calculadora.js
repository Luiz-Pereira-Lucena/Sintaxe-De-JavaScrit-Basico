function calculadora(){
    const operacao = Number(prompt("Escolha uma operação :\n 1 - SOMA (+)\n 2 - SUBTRAÇÃO (-)\n 3 - MULTIPLICAÇÃO (*)\n 4- DIVISÃO (/)\n 5- POTÊNCIA (**) "));

    if(operacao <= 0 || operacao >= 6){
        alert("OPERAÇÃO INVALIDA. TENTE NOVAMENTE");
    }else{
        let v1 = Number(prompt("Insira o Primeiro Valor: "));
        let v2 = Number(prompt("Insira o Segundo Valor: "));
        let resultado;

        function soma(){
            resultado = v1 + v2;
            alert(`${v1} + ${v2} = ${resultado}`);
        };

        function subtracao(){
            resultado = v1 - v2;
            alert(`${v1} - ${v2} = ${resultado}`);
        };

        function multilicacao(){
            resultado = v1 * v2;
            alert(`${v1} * ${v2} = ${resultado}`);
        };

        function divisao(){
            resultado = v1 / v2;
            alert(`${v1} / ${v2} = ${resultado}`);
        };

        function potencia(){
            resultado = v1 ** v2;
            alert(`${v1} ** ${v2} = ${resultado}`);
        };

        function novaOperacao(){
            const continuar = Number(prompt("Deseja continuar calculando?\n 1 - SIM\n 2 - NÃO"));

            if(continuar == 1){
                calculadora();
            }else if(continuar == 2){
                alert("ESERO QUE TENHA GOSTADO!!!");
            }else{
                alert("DIGITE UMA OPÇÃO VALIDA");
                novaOperacao();
            }
        };

        if(operacao == 1){
            soma();
        }else if(operacao == 2){
            subtracao();
        }else if(operacao == 3){
            multilicacao();
        }else if(operacao == 4){
            divisao();
        }else if(operacao == 5){
            potencia();
        };

        novaOperacao();
    };
};

calculadora();

