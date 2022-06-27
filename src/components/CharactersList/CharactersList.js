import React from 'react';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import CharacterCard from '../CharacterCard/CharacterCard';

import './CharactersList.css';

function CharactersList({ characters }) {
    const likes = useSelector(state => state.charactersReducer.likes);

	return (
		<List component='nav'>
			{characters?.map(character => (
				<CharacterCard 
					key={character.id} 
					id={character.id} 
					name={character.name} 
					status={character.status}
					likes={likes}
				/>
			))}
		</List>
	);
}

export default CharactersList;
