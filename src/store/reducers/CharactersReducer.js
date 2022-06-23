import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    characters: {},
}

export const charactersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_CHARACTERS_LIST:
            return {...state, characters:payload};
        default:
            return state;
    }
};