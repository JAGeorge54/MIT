const express = require('express');
const path = require('path');

const app = express();
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