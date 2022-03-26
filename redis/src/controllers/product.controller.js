const Product = require("../models/product.model");
const client = require("../config/redis.config");

const getAllProducts = async (req, res) => {
    try {
        const { page_no, per_page } = req.query;
        let page = page_no || 1;
        let limit = per_page || 10;

        page = page < 0 ? 1 : page;
        limit = limit < 0 ? 10 : limit;

        const skip = ( page - 1 ) * limit;

        let products = await client.get(`products.${page}.${limit}`);

        if ( products ) {
            products = JSON.parse(products);
            if ( !products.length ) return res.status(404).send("No products present!");
            return res.status(200).json(products);
        }

        products = await Product.find().skip(skip).limit(limit).lean().exec();
        await client.set( `products.${page}.${limit}`, JSON.stringify(products) );
        if ( !products.length ) return res.status(404).send("No products present!");
        
        return res.status(200).json(products);
    } catch ( err ) {
        console.log(err);
        res.status(500).send("something went wrong");
    }
};
const getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;

        let product = await client.get(`product.id.${id}`);

        if ( product ) {
            product = JSON.parse(product);
            return res.status(200).json(product);
        }

        product = await Product.findById(id).lean().exec();
        
        if ( !product ) return res.status(404).send("product not found!");
        
        await client.set( `product.id.${id}`, JSON.stringify(product) );
        
        return res.status(200).json(product);
    } catch ( err ) {
        console.log(err);
        res.status(500).send("something went wrong");
    }
};

const newProduct = async (req, res) => {
    try {
        const newPro = await Product.create(req.body);
        await client.flushAll();
        return res.status(201).json(newPro);
    } catch ( err ) {
        console.log(err);
        res.status(500).send("something went wrong");
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        
        await client.flushAll();

        return res.status(200).send("Updated successfully!");
    } catch ( err ) {
        console.log(err);
        res.status(500).send("something went wrong");
    }
};

const deleteProduct = async (req, res) => {
    try {
        const newPro = await Product.findByIdAndDelete(req.params.id);
        await client.flushAll();

        return res.status(200).send("Deleted successfully!");
    } catch ( err ) {
        console.log(err);
        res.status(500).send("something went wrong");
    }
};

module.exports = {
    getAllProducts,
    getOneProduct,
    newProduct,
    updateProduct,
    deleteProduct
};