# bakalari.js

A *simple* JavaScript Bakaláři API wrapper.

## Installation

*You need Node and NPM (Node Package Manager)*

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

## Available Modules

* Bakalari.Modules.Marks => returns all marks
* Bakalari.Modules.Subjects => returns all subjects
* Bakalari.Modules.Absence => returns your absence
* Bakalari.Modules.Events => returns all events
* Bakalri.Modules.Homeworks => returns all homeworks
* Bakalari.Modules.UserInfo => returns info about currently logged in user