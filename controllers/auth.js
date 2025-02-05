//TOKEN AUTHORIZATION FUNCTION

import 'dotenv/config'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    if (!req.headers.authorization){
        res.status(401).json({message:'Not authorized'})
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET || process.env.SECRET_KEY)
        console.log(decoded)
        if (decoded !== undefined) {
            req.user_id = decoded.user_id
            return next()
        }
    }    
    catch (err) {
        return res.status(403).json({error: 'Invalid token'})    
    }
}

export default auth
