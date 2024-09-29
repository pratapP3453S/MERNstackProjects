import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  url: {
    type: String,
    require: true,
  },
  detailUrl: {
    type: String,
    require: true,
  },
  title: {
    type: Object,
    require: true,
  },
  price: {
    type: Object,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
    require: true,
  },
  tagline: {
    type: String,
    require: true,
  },
})

const Product = mongoose.model("Product", productSchema);

export default Product;