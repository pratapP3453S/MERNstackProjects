import { Brand } from "../model/Brand.js"

const fetchBrands = async (req, res) => {
    try {
        const brands = await Brand.find({}).exec()
        res.status(200).json(brands)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createBrands = async (req, res) => {
    const brands = new Brand(req.body);
    try {
        const doc = await brands.save();
        res.status(200).json(doc)
    } catch (error) {
        res.status(400).json(error)
    }
}

export { fetchBrands, createBrands }