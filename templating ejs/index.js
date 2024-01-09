const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.get('/', (req, res) => {
    console.log('root page request')
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    console.log('request for //rand page')
    res.render('random', { rand: num })
})

app.get('/r/:sub', (req, res) => {
    const { sub } = req.params
    console.log('/r/sub ' + sub)
    res.render('sub', { sub })
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})