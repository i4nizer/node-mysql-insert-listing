const mysql = require('mysql2')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appdev'
})

database.connect((err) => {
    if (err) console.log('Error connecting to database')
    else console.log('Connected to MySQL Database')
})

module.exports = database