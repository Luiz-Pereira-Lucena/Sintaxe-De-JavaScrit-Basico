var jogador1 = 10;
var jogador2 = 5;
var placar;


//------------------- ESTRUTURA IF, ELSE IF e ELSE ------------------
if(jogador1 > jogador2){
    console.log("Jogador 01 tem valor MAIOR que Jogador 02");
    placar = jogador1 > jogador2;
}else if(jogador1 == jogador2){
    console.log("Jogador 01 tem valor IQUAL que Jogador 02")
    placar = jogador1 = jogador2;
}else{
    console.log("Jogador 01 tem valor MENOR que Jogador 02");
    placar = jogador1 < jogador2;
}

//------------------- ESTRUTURA IF TERNÁRIO -------------------------
jogador1 > jogador2 && jogador2 > 0 ? 
console.log("Jogador 01 tem valor MAIOR que Jogador 02") : 
console.log("Jogador 02 tem mais gol do que o Jogador 01");

//------------------- ESTRUTURA SWITCH ------------------------------
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("placar = jogador1 > jogador2");
        break;

        case placar = jogador1 = jogador2:
            console.log("placar = jogador1 = jogador2");
            break;

            case placar = jogador1 < jogador2:
                console.log("placar = jogador1 < jogador2");
                break;

                default:
                    console.log("NIGUEM GANHOU");
}