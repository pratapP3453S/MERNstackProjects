import express from 'express'
import { userLogin, userSignup } from '../controllers/user-controller.js';
import { getProducts, getProductById } from '../controllers/products-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;