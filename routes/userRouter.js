import express from 'express';
import setCircleValues from '../controllers/setCircleValues.js';
import getCircleValues from '../controllers/getCircleValues.js';
import checkUserOwnership from '../controllers/checkUserOwnership.js';


const router = express.Router();

router.get('/:user_ID/', checkUserOwnership, getCircleValues);
router.post('/:user_ID', checkUserOwnership, setCircleValues); 

export default router;