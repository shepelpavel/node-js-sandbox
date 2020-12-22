const express = require('express')
const app = express()
const port = 8080
const views = __dirname + '/views/'

app.get('/', function (req, res) {
    res.sendFile(views + 'index.html');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})