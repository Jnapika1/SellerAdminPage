const Product = require('../models/productDetails');

exports.getProducts = async (req, res, next)=>{
    try{
       let products = await Product.findAll()
        res.status(200).json({allProducts: products});
    }
    
    catch(err){
        console.log(err);
    }
};

exports.postProduct = async (req, res, next) => {
    // console.log(req);
    let sellingPrice =  req.body.sellingPrice;
    let productName = req.body.productName;
    let category = req.body.category;
    try{
        let product =await Product.create({
            sellingPrice: sellingPrice,
            productName: productName,
            category: category
          })
          res.status(201).json({newProduct: product});
    }
    catch(err){
        console.log(err);
    }
  };

  exports.deleteProduct = async (req, res, next)=>{
      const id = req.params.id;
    try{
        let product = await Product.findByPk(id)
        product.destroy();
        res.redirect('/');
     }
     
     catch(err){
         console.log(err);
     }
  }