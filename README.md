# bakalari.js

## Installation
**You need Node and NPM (Node Package Manager)**
`npm install @godlessssss/bakalari.js`

## Usage
```js
// Requiring the library from npm
const Bakalari = require('@godlessssss/bakalari.js')

// Instancing a user with url, username and password
let client = new Bakalari.User('URL', 'USERNAME', 'PASSWORD')

// Logging in to the Bakalari API
client.login()

// Waiting for client to be ready
client.on('ready', async () => {
    // Getting marks info from the API
    let marks = await client.get(Bakalari.Modules.Marks)
    // logging it to the console
    console.log(marks)
});
```