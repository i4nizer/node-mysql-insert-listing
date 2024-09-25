const productModel = require('../models/product.model')

const productController = {
    
    index: (req, res) => {
        res.render('index')
    },
    
    add: (req, res) => {
        const data = req.body
        productModel.save(data, (err) => {
            if (err) console.log(err)
            else res.redirect('/')
        })
    },

    addPage: (req, res) => {
        res.render('add')
    },

    view: (req, res) => {
        productModel.getAll((err, products) => {
            if (err) console.log(err)
            else res.render('index', { products })
            console.log(products)
        })
    }

}

module.exports = productController