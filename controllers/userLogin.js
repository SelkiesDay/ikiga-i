import pool from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    try {
        const [user] = await pool.query('SELECT id, email, first_name, last_name, password FROM users WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const checkPassword = await bcrypt.compare(password, user[0].password);
        if (!checkPassword) {
            return res.status(403).json({ error: 'Incorrect password' });
        }

        const payload = {
            user_id: user[0].id,
            email: user[0].email,
            first_name: user[0].first_name,
            last_name: user[0].last_name,
        };

        const secretKey = process.env.JWT_SECRET || process.env.SECRET_KEY;

        const token = jwt.sign(payload, secretKey, { expiresIn: '12h' });

        return res.send({ message: 'Success', token });
        
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default userLogin;