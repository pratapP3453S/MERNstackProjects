import express from 'express'
import { fetchUserById, updateUserById } from '../controller/User.js'

const route = express.Router()

route.get('/:id', fetchUserById)
     .patch('/:id', updateUserById)

export default route 