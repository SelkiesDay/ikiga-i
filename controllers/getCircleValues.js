import pool from '../config/database.js'

const getCircleValues = async (req, res) => {
    const user_id = req.user_id;
    console.log(user_id);
    try {
        const [circleValues] = await pool.query('SELECT * FROM circles WHERE user_id = ?', [user_id]);
        console.table(circleValues[0]);
        if (circleValues[0] !== undefined) {
            res.status(200).json(circleValues[0]);
        } else {
            res.status(200).json({ message: 'user has not set any circle values yet' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


export default getCircleValues;