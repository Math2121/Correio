const { default: Axios } = require('axios')
const express = require('express')
const { json } = require('express')
const app = express()
app.use(json())
app.get('/', async(req, res) => {
    var url = '27264780';
    try {
        var { data } = await Axios.get(`https://viacep.com.br/ws/${url}/json/`)
        console.log(data);
    } catch (error) {
        console.log(error)
    }
})

app.listen(4000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("sucesso")
    }
})