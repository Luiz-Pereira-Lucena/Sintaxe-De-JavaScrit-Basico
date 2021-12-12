/**===================================================================================
 *                                  REDUCE()
 * ===================================================================================*/

const rockets = [
    {country: 'Russia', launches: 32},
    {country: 'US', launches: 23},
    {country: 'China', launches: 16},
    {country: 'Europa', launches: 7},
    {country: 'India', launches: 4},
    {country: 'Japão', launches: 3}
];

//Função para saber o total de todos os lancamento de todos os países

const totalLancamentos = rockets.reduce((preVal, elem) => preVal + elem.launches, 0);

console.log("Total de lançamentos : " + totalLancamentos);