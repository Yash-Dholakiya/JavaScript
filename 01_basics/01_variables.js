const accountId = 144553
let accountEmail = "yash@google.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2  // Not allowed

accountEmail = "yd@yd.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);


/*
Prefer not to use var
because of issue  in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);