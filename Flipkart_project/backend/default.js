import Product from './src/model/product-schema.js'
import {products} from './src/constants/data.js'

const defaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data inserted sucessfully")
  } catch (error) {
    console.log("error while inserting data", error)
  }
}
export default defaultData;