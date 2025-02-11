
const checkUserOwnership = (req, res, next) => {
    const { user_ID } = req.params; 
    const user_id  = req.user_id; 

    console.log(user_ID, user_id);

    
    if (Number(user_ID) !== user_id) {
        return res.status(403).json({ message: 'Access denied: You cannot access another user\'s data' });
    }

    next();
};

export default checkUserOwnership;
