const client = require('./client.js')

async function init (){
    const result = await client.get('name:3');
    console.log("Result ->", result)

}

init()