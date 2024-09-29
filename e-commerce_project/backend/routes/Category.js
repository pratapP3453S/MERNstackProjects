import express from 'express'
import { fetchCategory, createCategory } from '../controller/Category.js';

const route = express.Router();

route.get('/', fetchCategory)
   .post('/', createCategory)

export default route