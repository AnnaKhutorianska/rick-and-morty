import { ActionTypes } from "../constants/actionTypes";

const BASE_URL = `https://rickandmortyapi.com/api/`;

export function getCharactersList(pageNumber) {
    return (dispatch) => {
        fetch(`${BASE_URL}character/?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTERS_LIST,
                    payload: data
                })
            })

    };
};

export function getCharacter(id) {
    return (dispatch) => {
        fetch(`${BASE_URL}character/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTER,
                    payload: data
                })
            })

    };
};

export function getCharacterEpisodes(urls) {
    return (dispatch) => {
        const requests = urls.map(url => fetch(url).then(response => response.json()));

        Promise.all(requests)
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTER_EPISODES,
                    payload: data
                });
            });
    };
};
