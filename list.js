const client = require('./client.js')

async function init(){
    // await client.lpush('messages', 1)
    // await client.lpush('messages', 2)
    // await client.lpush('messages', 3)
    // await client.lpush('messages', 4)
    // await client.lpush('messages', 5)

    const len = await client.llen('messages')
    console.log(len)
}

init()

