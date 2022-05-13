import jsonwebtoken from 'jsonwebtoken';

export default function auth(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Chek if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    //Verify token
    try {
        const decoded = jsonwebtoken.verify(token, proces.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}
