import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';


import { getCharactersList } from '../../store/actions/charactersActions'

import Header from '../../components/Header/Header';
import CharactersList from '../../components/CharactersList/CharactersList';


function MainPage() {
    const [pageNumber, setPageNumber] = useState(1);
    const pages = useSelector(state => state.charactersReducer.characters?.info?.pages);
    const dispatch = useDispatch();
	const characters = useSelector(state => state.charactersReducer.characters?.results);

	useEffect(() => {
		dispatch(getCharactersList(pageNumber))
	}, [pageNumber])

    function handleChange(e, page) {
        setPageNumber(page)
    }

    return (
        <div>
            <Header />
            <div className='container main-page'>
                <CharactersList characters={characters} />
                <Pagination onChange={handleChange} count={pages} color="secondary" />
            </div>
        </div>

    );
}

export default MainPage;