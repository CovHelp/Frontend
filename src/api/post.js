import axios from 'axios';
import {
    FormClient,
    JSONClient,
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

export const getNeedHelpPostByID = async ({
    postID
}) => {
    try {
        const res = await JSONClient.get(`/posts/need-help-post/${postID}`);
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}

export const createNeedHelpComment = async ({
    token,
    post,
    comment
}) => {
    try {
        // eslint-disable-next-line
        const res = await JSONClient.post('/posts/need-help-comment', {
            post,
            comment
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);

    }
}

export const getNeedHelpComments = async ({
    postID
}) => {
    try {
        const res = await JSONClient.get(`/posts/need-help-comments/${postID}`);
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);

    }
}


export const closeNeedHelpPost = async ({
    postID,
    token
}) => {
    try {
        const res = await JSONClient.post('/posts/need-help-close', {
            postID: postID
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
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

export const getProvideHelpPostByID = async ({
    postID
}) => {

    try {
        const res = await JSONClient.get(`/posts/provide-help-post/${postID}`);
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}


export const createProvideHelpComment = async ({
    token,
    post,
    comment
}) => {
    try {
        // eslint-disable-next-line
        const res = await JSONClient.post('/posts/provide-help-comment', {
            post,
            comment
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);

    }
}

export const createProvideHelpUpvote = async ({
    token,
    userID,
    postID
}) => {
    try {
        const res = await JSONClient.post(`/posts/upvote/${postID}`, {
            userID
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);

    }
}

export const createProvideHelpDepvote = async ({
    token,
    userID,
    postID
}) => {
    try {
        const res = await JSONClient.post(`/posts/devote/${postID}`, {
            userID
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);

    }
}

export const closeProvideHelpPost = async ({
    postID,
    token
}) => {
    try {
        const res = await JSONClient.post('/posts/provide-help-close', {
            postID: postID
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}

export const getProvideHelpComments = async ({
    postID
}) => {
    try {
        const res = await JSONClient.get(`/posts/provide-help-comments/${postID}`);
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);

    }
}

export const getProvideHelpPostsByUser = async ({
    token
}) => {
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

export const getNeedHelpPostsByUser = async ({
    token
}) => {
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


export const uploadImage = async ({
    file,
    token
}) => {
    let formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    try {
        const res = await axios.post(
            "https://apis.covhelp.online/v1/posts/upload",
            formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }
        );
        return res.data;
        //    const res = await FormClient.post('/posts/upload', formData, {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     })
        //     return res.data;
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
    var result;
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
        result = res.data;
    } catch (e) {
        console.log("FROM API", e.response.data.errors);
        result = e.response.data
        throw CovhelpException(e.response.data.errors, e.response.status)
    }
    return result;
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

export const createOrganization = async ({
    name,
    locations,
    website,
    image,
    address,
    category,
    donation,
    contact,
    token
}) => {
    try {
        const res = await JSONClient.post('/org/create', {
            name,
            locations,
            website,
            image,
            address,
            category,
            donation,
            contact,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (e) {
        console.log("TOKEN", token);
        // e.response.data i want the error to sent to the function 
        // consuming the api 
        console.log("FROM API", e.response.data);
        throw CovhelpException(e.response.data.errors, e.response.status)
    }
}


export const fetchOrganizationPosts = async () => {
    try {
        const res = await axios.get("https://9aa951456745.ngrok.io/v1/org")
        console.log("chal jaa ", res.data);
        return res.data
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status);
    }
}



export const uploadOrgImage = async ({ image, token }) => {
    const formData = new FormData()
    formData.append('file', image)
    try {
        const url = await FormClient.post('/org/upload', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return url.data;
    } catch (E) {
        console.log(E);
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