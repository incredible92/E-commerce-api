import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/backend', (req, res) => {
    res.send('Yeah! coming up as a backender')
})

app.listen(9090, () => {
    console.log('Server is running on port 9090')
})