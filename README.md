# BetfairGames Package
Integrate with the Betfair Exchange Games system - from creating a new client front-end system to an automated betting application
* Domain: betfair.com
* Credentials: username, password

## How to get credentials: 
Just [create Betfair Account](#https://register.betfair.com/account/registration) and use your `username` and `password`.


## BetfairGames.getChannels
Listing all the games you can bet on.

| Field   | Type       | Description
|---------|------------|----------
| username| credentials| Required: Account username.
| password| credentials| Required: Account password.
| apiAgent| String     | Required: gamexAPIAgent - see README for more info.


## BetfairGames.getChannelSnapshot
Describing the current game in a channel.

| Field          | Type       | Description
|----------------|------------|----------
| username       | credentials| Required: Account username.
| password       | credentials| Required: Account password.
| channelId      | String| Required: Channel ID to snapshot.
| apiAgent       | String     | Required: gamexAPIAgent - see README for more info.
| includeGameData| String     | Set `false` for suppressing the “gameData” element. Default is `true`.
| includeMarket  | String     | Set `false` for suppressing the market element. Default is `true`.
| includeTiming  | String     | To each of the URLs for requesting the “channelSnapshot” element, you can add a parameter manually to suppress the elements in a “channelSnapshot” that give details of the current betting round. These elements are “round”, “bettingWindowTime”, and “bettingWindowPercentageComplete”. Use this parameter if you do not need to receive details of the current betting round. Set `false` for suppressing these elements. Deafult is `true`.
| selectionsType | String     | The parameter for specifying the betting market you want to see. Example: `MainBets`


## BetfairGames.getChannelHistory
Requesting JSON Listing the previous games in a channel.

| Field      | Type       | Description
|------------|------------|----------
| username   | credentials| Required: Account username.
| password   | credentials| Required: Account password.
| channelId  | credentials| Required: Channel ID to retrive history for.
| apiAgent   | String     | Required: gamexAPIAgent - see README for more info.
| startRecord| Number     | Specify the start position (that is, the start position in the Games API’s overall list) for the list of games that you want to receive. 
| recordCount| Number     | Specify the number of games that you want the list returned to contain.
| marketId   | Number     | To each of the URLs for requesting the “channelHistory” element, you can add a parameter manually to limit the output to information about a single past game.

## BetfairGames.getChannelInfo
Requesting JSON stating when betting is permitted in a game.

| Field   | Type       | Description
|---------|------------|----------
| username| credentials| Required: Account username.
| password| credentials| Required: Account password.
| apiAgent| String     | Required: gamexAPIAgent - see README for more info.


## BetfairGames.getExchangeGamesAccountBalances
Requesting JSON listing Your exchange games account balances.

| Field   | Type       | Description
|---------|------------|----------
| username| credentials| Required: Account username.
| password| credentials| Required: Account password.
| apiAgent| String     | Required: gamexAPIAgent - see README for more info.


## BetfairGames.getBetfairAccountBalance
Requesting JSON stating Your main Betfair alance.

| Field   | Type       | Description
|---------|------------|----------
| username| credentials| Required: Account username.
| password| credentials| Required: Account password.
| apiAgent| String     | Required: gamexAPIAgent - see README for more info.


## BetfairGames.getAccountStatement
Requesting JSON that lists uour games account transactions.

| Field      | Type       | Description
|------------|------------|----------
| username   | credentials| Required: Account username.
| password   | credentials| Required: Account password.
| apiAgent   | String     | Required: gamexAPIAgent - see README for more info.
| account    | String     | Valid values: `POKER`, `BLACKJACK`, `BACCARAT`, `HILO`, `OMAHA_POKER`, `TRANSFERS` (listing only your fund transfers). To each of the URLs for requesting the “accountStatement” element, you can add a parameter manually to to limit your list of transactions to those concerning a particular type of Exchange game.
| recordCount| Number     | To each of the URLs for requesting the “accountStatement” element, you can add a parameter manually to specify the number of transactions that you want the list returned to contain. 
| startRecord| Number     | To each of the URLs for requesting the “accountStatement” element, you can add a parameter manually to specify the start position (that is, the start position in the Exchange Games API’s overall list) for the list of transactions that you want to receive. 


## BetfairGames.createTransferOrder
Requesting JSON that lists uour games account transactions.

| Field   | Type       | Description
|---------|------------|----------
| username| credentials| Required: Account username.
| password| credentials| Required: Account password.
| apiAgent| String     | Required: gamexAPIAgent - see README for more info.
| currency| String     | Required: 3-letter currency code.
| amount  | String     | Required: If you specify a non-negative value for the amount (as in the example above, which specifies £50), then that amount of money will be transferred from your main Betfair account into your Betfair Exchange Games account.

## BetfairGames.getBetLanding
Managing Bets.

| Field   | Type       | Description
|---------|------------|----------
| username| credentials| Required: Account username.
| password| credentials| Required: Account password.
| apiAgent| String     | Required: gamexAPIAgent - see README for more info.


## BetfairGames.getBetSnapshot
Viewing your current and past betting activity.

| Field         | Type       | Description
|---------------|------------|----------
| username      | credentials| Required: Account username.
| password      | credentials| Required: Account password.
| apiAgent      | String     | Required: gamexAPIAgent - see README for more info.
| status        | String     | Required: You cannot request to view all current bets at once. You can only request to view current bets of a specific status. The possible statuses are: `MATCHED`, `UNMATCHED`, `LAPSED`, AND `CANCELLED`.
| after         | Number     | Example: `1158045715462`. Numerical value of the “updateStamp” element in one “betSnapshotItem” listed in a “betSnapshot”. The “updateStamp” is like a time stamp; even though the number it contains does not denote a specific time, nevertheless the highest “updateStamp” is always the most recent one. 
| channelId     | String     | Requesting a list of current bets of a particular status and a particular game (that is, aparticular channel).
| selectionsType| String     | `selectionsType` is “MainBets”, “SideBets”, or “CorrectPredictions”. This is only applicable for a channel in which a game is running that has two or more lists of betting selections.


## BetfairGames.getBetHistory
Viewing your current and past betting activity.

| Field          | Type       | Description
|----------------|------------|----------
| username       | credentials| Required: Account username.
| password       | credentials| Required: Account password.
| apiAgent       | String     | Required: gamexAPIAgent - see README for more info.
| status         | String     | Required: You cannot request to view all current bets at once. You can only request to view current bets of a specific status. The possible statuses are: `CANCELLED`, `LAPSED`, `SETTLED`, AND `VOIDED`.
| placedDateStart| String     | Specify a start date for the list of bets to be returned. Format: `yyyy-MM-dd-HH:mm`
| placedDateEnd  | String     | Specify an end date for the list of bets to be returned. Format: `yyyy-MM-dd-HH:mm`
| recordCount    | Number     | Specify the number of bets that you want the list returned to contain.
| startRecord    | Number     | Specify the start position (that is, the start position in the Exchange Games API’s overall list) for the list of bets that you want to receive.
| orderBy        | String     | Valid values: `channelName`, `placedDate`. Order the returned list of bets by the type of game you are interested in.
| timezone       | String     | Specifying a time zone for the reporting of Your bets. Time zone code. See README for more info.

## BetfaitGames `timezone` codes: 

| Time zone | Time-zone Code | Description
|-----------|----------------|------------
Africa/Johannesburg| **RSA** |South |African
America/Indiana/Indianapolis | **IEST** |North America Indiana East
Asia/Bangkok| **THAI** |Bangkok
Asia/Calcutta| **INT** |Indian Time
Asia/Dubai| **UAE** |United Arab Emirates
Australia/Adelaide| **ACST** |Australian Central
Australia/Darwin| **ANST** |Australian Northern Territories
Australia/Perth| **AWST** |Australian Western
Australia/Queensland| **AQST** |Australian Queensland
Australia/Sydney| **AEST** |Australian Eastern
CET| **CET** |Central European
EET| **EET** |Eastern European 
Etc/GMT-5| **PKT** |Pakistan Time
Europe/London| **UKT** |UK Time
Europe/Moscow| **MSK** |Moscow
GMT| **GMT** |Greenwich Mean
Hongkong| **HK** |Hong Kong
Japan| **JPT** |Japan
NZ| **NZT** |New Zealand
US/Alaska| **AKST** |North America Alaska
US/Arizona| **AST** |North America Arizona
US/Central| **CST** |North America Central
US/Eastern| **EST** |North America Eastern
US/Hawaii| **HST** |North America Hawaii
US/Mountain| **MST** |North America Mountain
US/Pacific| **PST** |North America Pacific 