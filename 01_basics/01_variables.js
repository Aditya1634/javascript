const accountId = 11245
var accountName = "Aditya"
let accountEmail = "adityad@gmail.com"
accountCity = "Wardha"
// Prefer not to use var: cuz issue of block and functional scope
let accountState;
// accountId = 2345
accountEmail = "ck.com"
accountName = "Dhage"
accountCity = "nagpur"

console.table([accountEmail,accountId,accountName,accountState, accountCity])

