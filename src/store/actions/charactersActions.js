import { ActionTypes } from '../constants/actionTypes';

const BASE_URL = `https://rickandmortyapi.com/api/`;

export function getCharactersList(pageNumber) {
    return dispatch => {
        fetch(`${BASE_URL}character/?page=${pageNumber}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTERS_LIST,
                    payload: data
                });
            });
    };
}

export function getCharacter(id) {
    return dispatch => {
        fetch(`${BASE_URL}character/${id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTER,
                    payload: data
                });
            });
    };
}

export function getCharacterEpisodes(urls) {
    return dispatch => {
        const requests = urls.map(url => fetch(url).then(response => response.json()));

        Promise.all(requests)
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_CHARACTER_EPISODES,
                    payload: data
                });
            });
    };
}

export function setLike(id) {
    return dispatch => {
        dispatch({
            type: ActionTypes.SET_LIKE,
            payload: id
        });
    };
}

export function removeLike(id) {
    return dispatch => {
        dispatch({
            type: ActionTypes.REMOVE_LIKE,
            payload: id
        });
    };
}

export function getFavoriteCharacters(ids) {
    return dispatch => {
        const requests = ids.map(id => fetch(`${BASE_URL}character/${id}`).then(response => response.json()));

        Promise.all(requests)
            .then(data => {
                dispatch({
                    type: ActionTypes.GET_FAVORITE_CHARACTERS,
                    payload: data
                });
            });
    };

}

export function searchByName(name) {
    return dispatch => {
        fetch(`${BASE_URL}character/?name=${name}`)
            .then(response => {
                if(!response.ok) return;

                return response.json();
            })
            .then(data => {
                dispatch({
                    type: ActionTypes.SEARCH_BY_NAME,
                    payload: data
                });
            })
            .catch(e => console.log(e));
    };
}
