import express from "express"

const app = express()
const PORT = 3000

// app.use(logger)

app.get('/', (req, res, next) => {
    console.log('home page')
    res.send('Home Page')
    next()
})
app.get('/users', auth, (req, res) => {
    console.log('users page')
    res.send('Users Page')
})

app.use(logger)

function logger (req, res, next) {
    console.log('Log')
    next()
}

function auth (req, res, next) {
    console.log('Auth')
    next()
}

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})