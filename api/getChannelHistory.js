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
        startRecord,
        recordCount,
        marketId,
    } = req.body.args;

    let required = lib.parseReq({username, password, apiAgent, channelId});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let uri = `https://api.games.betfair.com/rest/v1/channels/${channelId}/history?username=${username}`;

    if(startRecord) uri += '&startRecord=' + startRecord;
    if(recordCount) uri += '&recordCount=' + recordCount;
    if(marketId)    uri += '&marketId=' + marketId;

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