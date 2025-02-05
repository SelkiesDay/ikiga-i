import express from 'express'
import userLogin from '../controllers/userLogin.js'
import userRegister from '../controllers/userRegister.js'

const router = express.Router()

router.post('/register', userRegister)
router.post('/login', userLogin)

export default router
