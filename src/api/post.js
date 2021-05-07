import {JSONClient} from './bootstrap';
import CovhelpException from './CovhelpException'

export const getNeedHelpPosts = async (data) => {
    try{
        const res = await JSONClient.get('/posts/need-help-posts');
        return res.data;
    }catch(e){
        throw new CovhelpException(e.response.data, e.response.status);
    }
}

export const getNameByCategoryID = (ID) => {
    switch (ID) {
        case 1:
            return 'Oxygen';
        case 2:
            return 'Ambulance';
        case 3:
            return 'Medicine';
        case 4:
            return 'Hospital Beds';
        case 5:
            return 'Plasma';
        case 6:
            return 'Food and tiffin';
        default:
            return 'Others';
    }
}