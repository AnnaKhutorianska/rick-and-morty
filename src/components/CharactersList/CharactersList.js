import React from 'react';
import { List } from '@mui/material';
import CharacterCard from '../CharacterCard/CharacterCard';

import './CharactersList.css';

function CharactersList({ characters }) {
	return (
		<div className='characters-list'>
		<List component="nav">
			{characters?.map(character => (
				<CharacterCard name={character.name} status={character.status} />
			))}
		</List>

		</div>
	);
}

export default CharactersList;
