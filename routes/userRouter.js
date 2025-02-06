import express from 'express';
import setCircleValues from '../controllers/setCircleValues.js';

const router = express.Router();

router.post('/:user_id', setCircleValues); 

export default router;