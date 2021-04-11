/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const posts = require('./posts.json')

const paginate = (collection, pageNumber = 1, itemsPerPage = 10) => {
    if(!Array.isArray(collection)){
        let type = typeof collection;
        throw new TypeError(`Expect array and got ${type}`);
    }
    let indexStart = (pageNumber - 1) * itemsPerPage;   
    let numberOfPages = Math.ceil(collection.length / itemsPerPage);

    let result = {};
    result["currentPage"] = pageNumber;
    result["perPage"] = itemsPerPage;
    result["total"] = posts.length;
    result["totalPages"] = numberOfPages;
    result["data"] = [];

    for(let i = 0; i < itemsPerPage; i++) {
        result["data"].push(collection[indexStart + i]);
    }

    return result;
}

module.exports = paginate