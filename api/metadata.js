module.exports.do = (req, res) => { res.status(200).send(
{
    "package": "BetfairGames",
    "tagline": "Betfair Games API Package",
    "keywords": ["API", "bet", "bets", "betting", "cards", "casino", "gamble", "gambling", "game", "odds", "poker"],
    "description": "Integrate with the Betfair Exchange Games system - from creating a new client front-end system to an automated betting application",
    "image": "http://logo.clearbit.com/betfair.com",
    "repo": "https://github.com/RapidSoftwareSolutions/Marketplace-BetfairGames-Package",
    "accounts": {
        "domain": "betfair.com",
        "credentials": [
            "username",
            "password"
        ]
    },
    "blocks": [{
        "name": "getChannels",
        "description": "Listing all the games you can bet on.",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Required: Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }]
    }, {
        "name": "getChannelSnapshot",
        "description": "Describing the current game in a channel.",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "channelId",
            "type": "String",
            "info": "Channel ID to snapshot.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "includeGameData",
            "type": "String",
            "info": "Set `false` for suppressing the “gameData” element. Default is `true`.",
            "required": false
        }, {
            "name": "includeMarket",
            "type": "String",
            "info": "Set `false` for suppressing the market element. Default is `true`.",
            "required": false
        }, {
            "name": "includeTiming",
            "type": "String",
            "info": "To each of the URLs for requesting the “channelSnapshot” element, you can add a parameter manually to suppress the elements in a “channelSnapshot” that give details of the current betting round. These elements are “round”, “bettingWindowTime”, and “bettingWindowPercentageComplete”. Use this parameter if you do not need to receive details of the current betting round. Set `false` for suppressing these elements. Deafult is `true`.",
            "required": false
        }, {
            "name": "selectionsType",
            "type": "String",
            "info": "The parameter for specifying the betting market you want to see. Example: `MainBets`",
            "required": false
        }]
    }, {
        "name": "getChannelHistory",
        "description": "Requesting JSON Listing the previous games in a channel",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "channelId",
            "type": "String",
            "info": "Channel ID to retrive history for.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "startRecord",
            "type": "Number",
            "info": "Specify the start position (that is, the start position in the Games API’s overall list) for the list of games that you want to receive. ",
            "required": false
        }, {
            "name": "recordCount", 
            "type": "Number",
            "info": "Specify the number of games that you want the list returned to contain.",
            "required": false
        }, {
            "name": "marketId",
            
            "type": "Number",
            "info": "To each of the URLs for requesting the “channelHistory” element, you can add a parameter manually to limit the output to information about a single past game.",
            "required": false
        }]
    }, {
        "name": "getChannelInfo",
        "description": "Requesting JSON stating when betting is permitted in a game ",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "channelId",
            "type": "String",
            "info": "Channel ID to retrive.",
            "required": true
        }, {
            "name": "startRecord",  
            "type": "Number",
            "info": "Specify the start position (that is, the start position in the Games API’s overall list) for the list of games that you want to receive. ",
            "required": false
        }]
    }, {
        "name": "getExchangeGamesAccountBalances",
        "description": "Requesting JSON listing Your exchange games account balances",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }]
    }, {
        "name": "getBetfairAccountBalance",
        "description": "Requesting JSON stating Your main Betfair alance",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }]
    }, {
        "name": "getAccountStatement",
        "description": "Requesting JSON that lists uour games account transactions",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "account",
            "type": "String",
            "info": "Valid values: `POKER`, `BLACKJACK`, `BACCARAT`, `HILO`, `OMAHA_POKER`, `TRANSFERS` (listing only your fund transfers). To each of the URLs for requesting the “accountStatement” element, you can add a parameter manually to to limit your list of transactions to those concerning a particular type of Exchange game.",
            "required": false
        }, {
            "name": "recordCount",
            "type": "Number",
            "info": "To each of the URLs for requesting the “accountStatement” element, you can add a parameter manually to specify the number of transactions that you want the list returned to contain. ",
            "required": false
        }, {
            "name": "startRecord",
            "type": "Number",
            "info": "To each of the URLs for requesting the “accountStatement” element, you can add a parameter manually to specify the start position (that is, the start position in the Exchange Games API’s overall list) for the list of transactions that you want to receive. ",
            "required": false
        }]
    }, {
        "name": "createTransferOrder",
        "description": "Requesting JSON that lists uour games account transactions",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "currency",
            "type": "String",
            "info": "3-letter currency code.",
            "required": true
        }, {
            "name": "amount",
            "type": "String",
            "info": "If you specify a non-negative value for the amount (as in the example above, which specifies £50), then that amount of money will be transferred from your main Betfair account into your Betfair Exchange Games account.",
            "required": true
        }]
    }, {
        "name": "getBetLanding",
        "description": "Managing Bets",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }]
    }, {
        "name": "getBetSnapshot",
        "description": "Viewing your current and past betting activity",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "status",
            "type": "String",
            "info": "You cannot request to view all current bets at once. You can only request to view current bets of a specific status. The possible statuses are: `MATCHED`, `UNMATCHED`, `LAPSED`, AND `CANCELLED`.",
            "required": true
        }, {
            "name": "after",
            "type": "Number",
            "info": "Example: `1158045715462`. Numerical value of the “updateStamp” element in one “betSnapshotItem” listed in a “betSnapshot”. The “updateStamp” is like a time stamp; even though the number it contains does not denote a specific time, nevertheless the highest “updateStamp” is always the most recent one. ",
            "required": false
        }, {
            "name": "channelId",
            "type": "String",
            "info": "Requesting a list of current bets of a particular status and a particular game (that is, aparticular channel).",
            "required": false
        }, {
            "name": "selectionsType",
            "type": "String",
            "info": "`selectionsType` is “MainBets”, “SideBets”, or “CorrectPredictions”. This is only applicable for a channel in which a game is running that has two or more lists of betting selections.",
            "required": false
        }]
    }, {
        "name": "getBetHistory",
        "description": "Viewing your current and past betting activity",
        "args": [{
            "name": "username",
            "type": "credentials",
            "info": "Account username.",
            "required": true
        }, {
            "name": "password",
            "type": "credentials",
            "info": "Account password.",
            "required": true
        }, {
            "name": "apiAgent",
            "type": "String",
            "info": "gamexAPIAgent - see README for more info.",
            "required": true
        }, {
            "name": "status",
            "type": "String",
            "info": "You cannot request to view all current bets at once. You can only request to view current bets of a specific status. The possible statuses are: `CANCELLED`, `LAPSED`, `SETTLED`, AND `VOIDED`.",
            "required": true
        }, {
            "name": "placedDateStart",
            "type": "String",
            "info": "Specify a start date for the list of bets to be returned. Format: `yyyy-MM-dd-HH:mm`",
            "required": false
        }, {
            "name": "placedDateEnd",
            "type": "String",
            "info": "Specify an end date for the list of bets to be returned. Format: `yyyy-MM-dd-HH:mm`",
            "required": false
        }, {
            "name": "recordCount",
            "type": "Number",
            "info": "Specify the number of bets that you want the list returned to contain.",
            "required": false
        }, {
            "name": "startRecord",
            "type": "Number",
            "info": "Specify the start position (that is, the start position in the Exchange Games API’s overall list) for the list of bets that you want to receive.",
            "required": false
        }, {
            "name": "orderBy",
            "type": "String",
            "info": "Valid values: `channelName`, `placedDate`. Order the returned list of bets by the type of game you are interested in.",
            "required": false
        }, {
            "name": "timezone",
            "type": "String",
            "info": "Specifying a time zone for the reporting of Your bets. Time zone code. See README for more info. channelName.",
            "required": false
        }]
    }]
}
)}