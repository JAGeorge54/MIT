const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//hard way to access files in public
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// set static folder
app.use(express.static('public'));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port: ${port}!`);
})