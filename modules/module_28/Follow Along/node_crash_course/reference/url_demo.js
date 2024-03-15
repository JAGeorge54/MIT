const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//host (root domain) get port if one
console.log(myUrl.host);
// hostname does not get port
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
//Params object
console.log(myUrl.searchParams);
//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log(myUrl.href);
//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));