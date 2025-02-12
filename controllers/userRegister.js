import pool from '../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {
    const { first_name, last_name, dob, email, password } = req.body;

    if (!first_name || !last_name || !dob || !email || !password) {
        return res.status(400).json({ error: 'First name, last name, date of birth, email, and password are required.' });
    }

    

    try {

        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10);
        await pool.query('INSERT INTO users (first_name, last_name, dob, email, password) VALUES (?, ?, ?, ?, ?)', [first_name, last_name, dob, email, hashedPassword]);

        const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        console.log(user);
        const payload = {
            user_id: user[0].id,
            email: user[0].email,
            first_name: user[0].first_name,
            last_name: user[0].last_name,
        };

        const secretKey = process.env.JWT_SECRET || process.env.SECRET_KEY;

        const token = jwt.sign(payload, secretKey, { expiresIn: '12h' });

        return res.status(200).json({ info: 'User was created successfully', token });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error. Please try again later' });
    }
};

export default userRegister;
