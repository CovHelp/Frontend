import {
    createStore
} from 'redux'
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const initialState = {
    userStore: {
        user: {
            email: null,
            firstName: null,
            lastName: null,
            email: null,
            profile_pic: null
        },
        token: null
    },
    needHelpPostStore: [],
    needHelpPostStoreFiltered: [],
}


const reducer = (state, {
    type,
    payload
}) => {
    switch (type) {
        case 'SAVE_USER':
            return {
                ...state,
                userStore: payload
            }
            break;

        case 'SAVE_NEED_HELP_POSTS':
            return {
                ...state,
                needHelpPostStore: payload
            }
            break;

        case 'SAVE_NEED_HELP_POSTS_FILTERED':
            return {
                ...state,
                needHelpPostStoreFiltered: payload
            }
            break;

        default:
            return {
                ...state
            }
    }
}

const persistConfig = {
    key: 'covhelp',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistedStore = persistStore(store);
export default store