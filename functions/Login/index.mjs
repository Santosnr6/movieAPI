import jwt from 'jsonwebtoken';
import { sendResponse } from '../../responses/index.mjs';

export const handler = async (event) => {

    const user = { name : 'Jesper', id : 66 }; 

    const token = jwt.sign(user, 'secret_key');

    return {
        statusCode: 201,
        body: JSON.stringify({
          data : token
        }),
        headers : {
            'Set-Cookie' : `token=${token}`
        }
    };
};