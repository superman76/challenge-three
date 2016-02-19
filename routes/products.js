var express = require('express');

var Product = require('../models/product');

var router = express.Router();

router.use(function(req, res, next){
  console.log('something is happeneing!');
  next();
});


router.route('/products')
  .get(function(req, res){
    Product.find(function(err, products){
      if(err){
        return next(err);
      } else {
        res.json(products)
      }
    })
  })
  .post(function(req, res){

    var product = new Product();

    product.name = req.body.name;
    product.inStock = req.body.inStock;
    product.cost = req.body.cost;

    

    //Finish the post route to properly create a new product..

  // name: String,
  // inStock: Boolean,
  // cost: String
  // bear.name = req.body.name;
  // bear.age = req.body.age;
  // bear.gender = req.body.gender;
// ### 1) Finish the `POST` route for /api/products. 
// Use POSTMAN to create some products. Hint: Find the error 
// in `models/product`

    product.save(function(err, product){
      if(err){
        res.send(err)
      } else {
        res.json(product)
      }
    })
  });


module.exports = router;