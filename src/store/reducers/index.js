import { combineReducers } from "redux";
import { charactersReducer } from "./CharactersReducer";
import { characterReducer } from "./CharacterReducer";

const reducers = combineReducers({
    charactersReducer,
    characterReducer
});

export default reducers;
