import { JSONClient } from "./bootstrap"
import CovhelpException from "./CovhelpException";

export const getAllStates = async () => {
    try{
        const res = await JSONClient.get('/misc/states');
        return res.data;
    }catch(e){ 
        throw new CovhelpException(e.response.message, e.response.code)
    }
}

export const getAllCitiesByStateCode = async (stateCode) => {
    try{
        const res = await JSONClient.get(`/misc/cities/${stateCode}`);
        return res.data;
    }catch(e){ 
        throw new CovhelpException(e.response.message, e.response.code)
    }
}