const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        username, 
        password,
        apiAgent,
        status,
        placedDateStart,
        placedDateEnd,
        recordCount,
        startRecord,
        orderBy,
        timezone
    } = req.body.args;

    let required = lib.parseReq({username, password, apiAgent, status});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let uri = 'https://api.games.betfair.com/rest/v1/bet/history?username=' + username;

    let query = lib.clearArgs({
        betStatus: status,
        placedDateStart,
        placedDateEnd,
        recordCount,
        startRecord,
        orderBy,
        timezone
    });

    for(let q in query) uri += `&${q}=${query[q]}`;

    request({
        method: 'GET',
        uri: uri,
        headers: {
            gamexAPIPassword:      password,
            gamexAPIAgent:         apiAgent,
            gamexAPIAgentInstance: lib.instance()
        }
    }, (err, response, result) => {
        if(!err && response.statusCode == 200)
            defered.resolve(result);
        else 
            defered.reject(err || result);
    });

    return defered.promise;
}