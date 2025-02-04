import express from 'express'
import login from '../controllers/userLogin.js'
import register from '../controllers/userRegister.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

export default router
