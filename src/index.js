const express = require('express')
const crypto = require('crypto')



const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sha1', (req, res) => {
    const s = req.query.s
    if (s == null) {
        res.send('<html>error</html>')
    }
    const shasum = crypto.createHash('sha1')
    shasum.update(s)
    const hashedValue = shasum.digest('hex') // => "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"

    res.json({"hash": hashedValue})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})