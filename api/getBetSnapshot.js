const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        username, 
        password,
        status,
        after,
        channelId,
        selectionsType,
        apiAgent
    } = req.body.args;

    let required = lib.parseReq({username, password, apiAgent, status});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let uri = `https://api.games.betfair.com/rest/v1/bet/snapshot?username=${username}&betStatus=${status}`;

    if(after)          uri += '&after=' + after;
    if(channelId)      uri += '&channelId=' + channelId;
    if(selectionsType) uri += '&selectionsType=' + selectionsType;  

    request({
        method: 'GET',
        uri: uri,
        headers: {
            gamexAPIPassword: password,
            gamexAPIAgent:    apiAgent,
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