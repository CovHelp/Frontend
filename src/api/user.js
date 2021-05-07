import {JSONClient} from './bootstrap';
import CovhelpException from './CovhelpException'

export const register = async (data) => {
    try{
        const res = await JSONClient.post('/users/create-account', data);
        return res.data;
    }catch(e){
        throw new CovhelpException(e.response.data, e.response.status);
    }
}