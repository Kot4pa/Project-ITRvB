import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, '12345');

            req.userId = decoded.id;

            next();
        } catch (error) {
            return res.json({
                message: 'Нет доступа',
            });
        }
    } else{
        return res.json({
            message: 'Нет доступа',
        });
    }
}