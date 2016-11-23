const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        username, 
        password,
        apiAgent,
        currency,
        amount
    } = req.body.args;

    let required = lib.parseReq({username, password, apiAgent});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let uri = 'https://api.games.betfair.com/rest/v1/account/transferOrder?username=' + username;

    let body = `<?xml version="1.0" encoding="UTF-8"?>
    <postTransferOrder xmlns="urn:betfair:games:api:v1" xmlns:xs="http://www.w3.org/2001/XMLSchema-instance">
        <amount currency="${currency}" action="TRANSFER">${amount}</amount>
    </postTransferOrder>`;

    request({
        method: 'POST',
        uri: uri,
        headers: {
            gamexAPIPassword:      password,
            gamexAPIAgent:         apiAgent,
            gamexAPIAgentInstance: lib.instance(),
            'Content-type': 'application/xml; charset=UTF-8',
            'Accept': '*/*',
        },
        body: body
    }, (err, response, result) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(result);
        else 
            defered.reject(err || result);
    });

    return defered.promise;
}