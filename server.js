const express = require('express')
const axios = require('axios')
const app = express()

const client = require('./client.js')


app.get('/',async(req,res)=>{

    const cacheValue = await client.get('todos')
    if(cacheValue) return res.json(JSON.parse(cacheValue))

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    await client.set('todos',JSON.stringify(data))
    await client.expire('todos',60)
    return res.json(data)
})

app.listen(3008, ()=>{
    console.log("Server is listening of port 3008!")
})