/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
 * entre valores do conjunto que resultem na soma do número alvo.
 * 
 * Observações:
 * 
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *  
 *  combinate([2, 3, 5], 8) retornando
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]  
 *       [3,5]
 *       [5,3]
 *   ]
 * 
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 * 
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 * 
 * 
 * Seguem mais alguns exemplos do retorno esperado:
 * 
 *  combinate([2, 3, 5], 8) deve retornar
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
*
*    outro exemplo: 
*
*    combinate([2, 3, 6, 7], 7) retorna
*
*    [
*       [2, 2, 3],
*       [7]
*    ]
 */

const combinate = (set, target) => {
    //assumindo uma array set ordenada e sem  repetidos.
    if(set.length == 0) return [];
    let result = [];
    let sum = 0;
    let hash = {} //evitar repetidos
    for(let i = 0; i < set.length; i++) {
        
        if(target % set[i] == 0 && set[i] != target){ //caso o valor seja um multiplo ex. [2, 2, 2] para 6
            let line  = [];
            for(let j = 0; j < (target / set[i]); j++) {   
                line.push(set[i]);
            }
            result.push(line.sort());
            hash[result[result.length -1]] = result.length -1;
        }

        if(set[i] == target) { //caso o valor seja igual
            let line = [set[i]];
            result.push(line.sort());
            hash[result[result.length -1]] = result.length -1;
            break;
        }

        if(set[i] > target) { //caso o valaor seja ultrapassado
            break;
        }

        for(let j = 0; j < set.length; j++) { 
            //verificação de casos onde um valor somado a múltiplos de um segundo valor ex. [2, 2, 3] para 7
            if (set[i] == set[j]) continue;
            let subtraction = (target - set[i]);
            if(subtraction % set[j] == 0) {
                line = [];
                
                for(let k = 0; k < (subtraction / set[j]); k++) {
                    line.push(set[j]);
                }
                
                line.push(set[i]);
                line.sort();
                
                if(!hash.hasOwnProperty(line)){
                    result.push(line);
                    hash[result[result.length -1]] = result.length -1;
                }
                    
            }
        }
    }
    return result;
}


module.exports = combinate
