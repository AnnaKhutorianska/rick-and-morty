import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    character: {},
}

export const characterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_CHARACTER:
            return {
                ...state, 
                character: payload
            };

        case ActionTypes.GET_CHARACTER_EPISODES:
            return {
                ...state, 
                character: {
                    ...state.character,
                    episodesList: payload
                }
            };

        default:
            return state;
    }
};