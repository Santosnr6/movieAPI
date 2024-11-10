import { keys } from "../data/keys.mjs";

export const validateKey = () => ({
    before : (handler) => {
        console.log('handler:', handler);
        
        const { key } = handler.event.queryStringParameters;
        if(!keys.some(k => k === key)) {
            throw new Error('Du måste skicka med en giltig API nyckel');
        }
        
        return;
    }
});