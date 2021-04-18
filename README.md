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

### Main function
```js
await client.get(Module, ...Arguments)
```

#### Bakalari.Modules.Marks
```js
await client.get(Bakalari.Modules.Marks)
```
- returns Array of Subjects, that contain Marks Array

#### Bakalari.Modules.Subjects
```js
await client.get(Bakalari.Modules.Subjects)
```
- returns Array of Subjects

#### Bakalari.Modules.Absence
```js
await client.get(Bakalari.Modules.Absence)
```
- returns Absence Array and Absence by Subject Array

#### Bakalari.Modules.Events
```js
await client.get(Bakalari.Modules.Events)
```
- returns Array of Events

#### Bakalri.Modules.Homeworks
```js
await client.get(Bakalari.Modules.Homeworks)
```
- returns Array of Homeworks

#### Bakalari.Modules.UserInfo
```js
await client.get(Bakalari.Modules.UserInfo)
```
- returns User Object

#### Bakalari.Modules.Timetable

- Permanent Timetable
```js
await client.get(Bakalari.Modules.Timetable)
```

- Actual Timetable
```js
await client.get(Bakalari.Modules.Timetable, 'actual')
```
