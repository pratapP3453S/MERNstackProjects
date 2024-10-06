import Product from "../model/product-schema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    // const product = await Product.findById(productId);
    const product = await Product.findOne({'id': productId})

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}