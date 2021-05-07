import {
    JSONClient
} from './bootstrap';
import CovhelpException from './CovhelpException'

export const getNeedHelpPosts = async () => {
    try {
        const res = await JSONClient.get('/posts/need-help-posts');
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}

export const getProvideHelpPosts = async () => {
    try {
        const res = await JSONClient.get('/posts/provide-help-posts');
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}

export const getProvideHelpPostsByUser = async ({token}) => {
    try {
        const res = await JSONClient.post('/posts/user-provide-help-posts', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}

export const getNeedHelpPostsByUser = async ({token}) => {
    try {
        const res = await JSONClient.post('/posts/user-need-help-posts', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}


export const createNeedHelpPost = async ({
    body,
    category,
    phoneNumber,
    picture,
    isPhoneNumberPublic,
    urgency,
    city,
    state,
    lat,
    long,
    token
}) => {
    try {
        const res = await JSONClient.post('/posts/create-need-help-post', {
            body,
            category,
            phoneNumber,
            picture,
            isPhoneNumberPublic,
            urgency,
            city,
            state,
            lat,
            long,
            isClosed: false
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (e) {
        throw CovhelpException(e.response.data, e.response.status)
    }
}

export const createProvideHelpPost = async ({
    body,
    category,
    phoneNumber,
    picture,
    isPhoneNumberPublic,
    urgency,
    locations,
    token
}) => {
    try {
        const res = await JSONClient.post('/posts/create-provide-help-post', {
            body,
            category,
            phoneNumber,
            picture,
            isPhoneNumberPublic,
            urgency: 0,
            locations,
            isClosed: false
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (e) {
        throw CovhelpException(e.response.data, e.response.status)
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