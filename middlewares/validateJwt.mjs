import jwt from 'jsonwebtoken';

export const validateJwt = () => ({
    before : (handler) => {
        const token = handler.event.headers.authorization.replace('Bearer ', '');

        const { error } = jwt.verify(token, 'secret_key');
        
        if(error) {
            throw new Error(error);
        }
        
        return;
    }
});