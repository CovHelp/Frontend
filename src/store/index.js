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
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            profile_pic: null
        },
        token: null
    },
    needHelpPostStore: [],
    needHelpPostStoreFiltered: [],

    provideHelpPostStore: [],
    provideHelpPostStoreFiltered: [],

    userNeedHelpPostStore: [],
    userProvideHelpPostStore: [],


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

        case 'SAVE_USER_NEED_HELP_POSTS':
            return {
                ...state,
                userNeedHelpPostStore: payload
            }
            break;
        case 'SAVE_USER_PROVIDE_HELP_POSTS':
            return {
                ...state,
                userProvideHelpPostStore: payload
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

        case 'SAVE_PROVIDE_HELP_POSTS':
            return {
                ...state,
                provideHelpPostStore: payload
            }
            break;

        case 'SAVE_PROVIDE_HELP_POSTS_FILTERED':
            return {
                ...state,
                provideHelpPostStoreFiltered: payload
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