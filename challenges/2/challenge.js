/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

const normalizeData = unormalized => {
    let normalized = {};

    //results section
    let id = unormalized.id;
    normalized["results"] = {};
    normalized["results"][id] = {};
    normalized["results"][id]["id"]      = id;
    normalized["results"][id]["user"]    = unormalized.user.id;
    normalized["results"][id]["reports"] = [];

    //users section
    let userId = unormalized.user.id;
    normalized["users"] = {};
    normalized["users"][userId] = {};
    normalized["users"][userId]["id"]   = userId;
    normalized["users"][userId]["name"] = unormalized.user.name;

    //reports section
    normalized["reports"] = {};
    unormalized.reports.forEach(report => {
        //terminando o user
        normalized["results"][id]["reports"].push(report.id);

        normalized["reports"][report.id] = {};
        normalized["reports"][report.id]["id"]       = report.id;
        normalized["reports"][report.id]["user"]     = userId;
        normalized["reports"][report.id]["document"] = report.result.document;
        normalized["reports"][report.id]["status"]   = report.result.status;
    });
    return normalized;
}

module.exports = normalizeData
