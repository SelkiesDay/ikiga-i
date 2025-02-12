import 'dotenv/config';
import express from 'express';
import reglogRouter from './routes/regLogRouter.js';
import userRouter from './routes/userRouter.js';
import auth from './controllers/auth.js';
import cors from 'cors';
import pool from './config/database.js';

const app = express();

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json());

// User registration and login
app.use('/api', reglogRouter);

// User navigation on the app
app.use(auth);

app.use('/api/user', userRouter);

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




async function shutdown() {
    console.log('Gracefully shutting down...');
    try {
        await pool.end();
        console.log('Database pool closed.');
    } catch (err) {
        console.error('Error closing the connection pool:', err);
    } finally {
        server.close(() => {
            console.log('HTTP server closed.');
            process.exit(0);
        });
    }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
