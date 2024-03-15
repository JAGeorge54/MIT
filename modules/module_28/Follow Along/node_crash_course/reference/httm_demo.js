const http = require('http')

//Create server object
http.createServer((req, res) => {
    //write responce
    res.write('Hello World');
    res.end()
}).listen(3000, () => console.log('running on port 3000'))
