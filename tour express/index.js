const express = require('express')
const app = express()
// we can send one res per req
app.get('/', (req, res) => {
    console.log('home page request')
    res.send('this is a home page')
})


app.post('/', (req, res) => {
    console.log('home page POST request')
    res.send('This is a home page in post request')
})
app.get('/cat', (req, res) => {
    console.log('cat page request')
    res.send('cat')
})
app.get('/dog', (req, res) => {
    console.log('dog page request')
    res.send('dog')

})

//routing path parameter of get request
app.get('/r/:sub', (req, res) => {
    console.log(req.params)
    res.send(`<h1> Browsing subpage ${req.params.sub}`)
})
//routing path parameter(2 ) of get request 
app.get('/s/:sub/new/:ssub', (req, res) => {
    console.log(req.params)
    res.send(`<h1>Browsing subpage:${req.params.sub} /new/  subsub page:${req.params.ssub}</h1>`)
})
//express query String
app.get('/search', (req, res) => {
    const { q } = req.query
    console.log(q)
    if (!q) {
        res.send('invalid search')

    }
    res.send(`<h1>response is ${q}</h1>`)
})
// '*' for every route
app.get('*', (req, res) => {
    console.log('* get request')
    res.send('invaild get request')
})
//app.use matches every route
app.use((req, res) => {
    console.log(" We go a new request")
    res.send("<h1>404 invalid request</h1>")
})
app.listen(5000, () => {
    console.log('sever lestening on port 5000!')
})