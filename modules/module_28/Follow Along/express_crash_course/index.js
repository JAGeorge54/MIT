const express = require('express');
const path = require('path');
const members = require('./Members')

const app = express();

const logger = (req, res, next) => {
    console.log('Hello!');
    next();
};
//Init middleware
app.use(logger);

//Gets all Members
app.get('/api/members', (req, res) => res.json(members));

//hard way to access files in public
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// set static folder
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port: ${port}!`);
})