import express from 'express'
import { singup, login } from '../controller/User.controller.js'

const router = express.Router();

router.post('/signup', singup);
router.post('/login', login);

export default router;