import { ActionTypes } from '../constants/actionTypes';
import { getStore, setStore } from '../../utils/storage';

const initialState = {
    characters: {},
    likes : getStore('likes') || [],
    favoriteCharacters: [],
    search: []
}

export const charactersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CHARACTERS_LIST:
            return {
                ...state, 
                characters: payload
            };

        case ActionTypes.SET_LIKE:
            const addLikes = [ ...state.likes, payload ];
            setStore('likes', addLikes);

            return {
                ...state, 
                likes: addLikes
            };

        case ActionTypes.REMOVE_LIKE:
            const removeLikes = state.likes.filter(like => like !== payload);
            setStore('likes', removeLikes);

            return {
                ...state, 
                likes: removeLikes
            };

        case ActionTypes.GET_FAVORITE_CHARACTERS:
            return {
                ...state,
                favoriteCharacters: payload
            };
            
        case ActionTypes.SEARCH_BY_NAME:
            return {
                ...state,
                search: payload
            };
         
        default:
            return state;
    }
};