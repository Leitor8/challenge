/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
    let result = {
        width: 0,
        height: 0
    };
    //a principio cogitei fazer por regex, mas acredito que desta forma eu consiga mostrar melhor meu raciocínio para o teste.
    //eu usaria as regex: /width: \d*/s e /height: \d*/s e depois a substring do resultaado.
    const searchWidth  = "width: ";
    const searchHeight = "height: ";
    let widthIndex  = htmlTemplate.search(searchWidth);
    let heightIndex = htmlTemplate.search(searchHeight);

    if(widthIndex !=  -1){
        let width = "";
        for(let i = widthIndex + searchWidth.length; i < htmlTemplate.length; i++)  {
            //para caso hajam valores decimais, como é comum com 'em' ou 'r em'
            if(isNaN(htmlTemplate[i]) && htmlTemplate[i] != '.')  
                break;
            width += htmlTemplate[i];
        }
        result.width  = parseFloat(width);
    }

    if(heightIndex != -1){
        let height = "";
        for(let i  = heightIndex + searchHeight.length; i < htmlTemplate.length; i++) {
            //para caso hajam valores decimais, como é comum com 'em' ou 'rem'
            if(isNaN(htmlTemplate[i]) && htmlTemplate[i] != '.') 
                break;
            height += htmlTemplate[i];
        }
        result.height = parseFloat(height);
    }

    return result;
}

module.exports = extractSize;


