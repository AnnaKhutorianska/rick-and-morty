import { ActionTypes } from "../constants/actionTypes";

const BASE_URL = `https://rickandmortyapi.com/api/character/?page=`;

export function getCharactersList(pageNumber) {
    return (dispatch) => {
        fetch(`${BASE_URL}${pageNumber}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTERS_LIST,
                    payload: data
                })
            })

    };
};
