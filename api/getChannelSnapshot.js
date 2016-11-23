const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        username, 
        password,
        channelId,
        apiAgent,
        includeGameData,
        includeMarket,
        includeTiming,
        selectionsType
    } = req.body.args;

    let required = lib.parseReq({username, password, apiAgent, channelId});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let uri = `https://api.games.betfair.com/rest/v1/channels/${channelId}/snapshot?username=${username}`;

    if(includeGameData == 'false') uri += '&game=false';
    if(includeMarket == 'false')   uri += '&market=false';
    if(includeTiming == 'false')   uri += '&timing=false';
    if(selectionsType)             uri += '&selectionsType=' + selectionsType;

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