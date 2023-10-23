const Product   =   require('../models/product');

// To view all Products
module.exports.displayProducts  =  async function(request,response){
    try {
        let totalProducts   =   await Product.find({});
        response.send(totalProducts);
    } catch (error) {
        console.log('Error',error);
    }
}

//To Create a new Product
module.exports.createProducts   =   async function(request,response){
    try {
        let newProduct  =   await Product.create({
            name: request.body.name,
            quantity: request.body.quantity
        });
        let output =    await newProduct.save();
        response.send("New Product added to the Cart");
    } catch (error) {
        console.log('Error',error);
    }
}

// To delete a Product
module.exports.deleteProduct    =   async function(request,response){
    try {
        let product   =   await Product.findById(request.params.id);
        await product.deleteOne();
        response.send("Product deleted succesfully");
    } catch (error) {
        console.log('Error',error);
    }
}

// To Increment or Decrement a quantity of a product
module.exports.updateProduct    =   async function(request,response){
    try {
        let product   =   await Product.findById(request.params.id);
        let newQuantity =   parseInt(product.quantity)    +   parseInt(request.query.number);
        product.quantity    =   newQuantity;
        await Product.findByIdAndUpdate(product,{quantity:newQuantity});
        response.send({
            message: "Product Quantity Updated Successfully",
            newQuantity: product.quantity
        });
    } catch (error) {
        console.log('Error',error);
    }
}