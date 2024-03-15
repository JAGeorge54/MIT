const express = require('express');
const path = require('path');

const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
];

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