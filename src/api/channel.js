import {
    JSONClient
} from './bootstrap'
import CovhelpException from './CovhelpException'


export const createNeedChannel = async ({
    user1,
    user2,
    postID,
    token
}) => {
    try {
        const res = await JSONClient.post('/channel/create-need-channel', {
            user1ID: user1,
            user2ID: user2,
            postID: postID
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status)
    }
}

export const createProvideChannel = async ({
    user1,
    user2,
    postID,
    token
}) => {
    try {
        const res = await JSONClient.post('/channel/create-provide-channel', {
            user1ID: user1,
            user2ID: user2,
            postID: postID
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status)
    }
}

export const fetchAllChannels = async ({
    token
}) => {
    try {
        const res = await JSONClient.get('/channel/get-user-channels', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(res);
        return res.data;
    } catch (e) {
        throw new CovhelpException(e.response.data, e.response.status)
    }
}