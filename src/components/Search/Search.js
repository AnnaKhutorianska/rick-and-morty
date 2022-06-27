import React , { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';

import { searchByName } from '../../store/actions/charactersActions';

function Search() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
	const searchResult = useSelector(state => state.charactersReducer?.search?.results) || [];
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(searchByName(inputValue));
    },[inputValue])

    function handleChange(e) {
        setInputValue(e)
    }

    function handleChangeAutocomplete(e, value) {
        const selectedCharacter = searchResult.find(character => character.name === value);

        navigate(`/profile/${selectedCharacter.id}`)
    }
    
    return (
        <Autocomplete
            freeSolo
            style={{ width: 300 }}
            id='free-solo-2-demo'
            disableClearable
            options={searchResult?.map((character) => character.name)}
            onChange={(e, value) => handleChangeAutocomplete(e, value)}
            renderInput={(params) => (
                <TextField
                    onChange={(e) => handleChange(e.target.value)}
                    {...params}
                    label='Search input'
                    color='secondary'
                    size='small'
                    variant='outlined'
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}
        />
    );
}

export default Search;
