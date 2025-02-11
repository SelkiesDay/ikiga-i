import pool from '../config/database.js'

const setCircleValues = async (req, res) => {
    const user_id = req.user_id;
    console.log(user_id);
    const { circle_values } = req.body;

    await pool.query('INSERT INTO circles (user_id, love, talents, paid, needs) VALUES (?, ?, ?, ?, ?)', [user_id, circle_values.love, circle_values.talents, circle_values.paid, circle_values.needs]);
    try {
        const row = await pool.query('SELECT * FROM circles WHERE user_id = ?', [user_id]);
        console.log(row);
        if (row.length !==0){
        res.status(200).json({message:'Circle values updated successfully'});
        }
    } catch (err) {
        res.status(500).send('Internal server error');
    }
}

export default setCircleValues;