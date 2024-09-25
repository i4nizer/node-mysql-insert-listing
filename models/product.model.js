const database = require('../config/database')

const product = {
    
    save: (data, callback) => {
        const query = 'insert into products(name, description, price, quantity) values (?, ?, ?, ?)'
        database.query(query, [data.name, data.description, data.price, data.quantity], callback)
    },

    getAll: async (callback) => {
        const query = 'select * from products'
        database.query(query, callback)
    }

}

module.exports = product