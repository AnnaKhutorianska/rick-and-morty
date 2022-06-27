import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

import { getCharacter, getCharacterEpisodes } from '../../store/actions/charactersActions';

import './ProfilePage.css';

function ProfilePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { profileId } = useParams();
	const character = useSelector(state => state.characterReducer?.character);

	useEffect(() => {
		dispatch(getCharacter(profileId))
	}, [])

	useEffect(() => {
		if (character?.episode) dispatch(getCharacterEpisodes(character.episode));
	}, [ character?.episode ])

	function getFormatedDate(created) {
		const date = new Date(created);
		const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
		const month = date.getMonth();
		const day = date.getDate();
		const fullYear = date.getFullYear();

		return (`${day}.${month + 1}.${fullYear}, ${time}`);
	}

	function handleClick() {
		navigate('/');
	}

	return (
		<div className='container'>
			<Button color="secondary" onClick={handleClick}>
				<ArrowBackIcon />
				Go Back
			</Button>
			<div className='profile-page-info'>
				<div>
					<p>
						<span className='profile-field-label'>Name:</span>
						<span className='profile-field-text'>{character?.name}</span>
					</p>
					<p>
						<span className='profile-field-label'>Species:</span>
						<span className='profile-field-text'>{character?.status}</span>
					</p>
					<p>
						<span className='profile-field-label'>Gender:</span>
						<span className='profile-field-text'>{character?.gender}</span>
					</p>
					<p>
						<span className='profile-field-label'>Location:</span>
						<span className='profile-field-text'>{character?.location?.name}</span>
					</p>
					<p>
						<span className='profile-field-label'>Status:</span>
						<span className='profile-field-text'>{character?.status}</span>
					</p>
					<p>
						<span className='profile-field-label'>Created:</span>
						<span className='profile-field-text'>{getFormatedDate(character?.created)}</span>
					</p>

				</div>
				<div>
					<span className='profile-field-label'>Episodes: </span>
					<ul>
						{character?.episodesList?.map(episode => (
							<li key={episode.name} className='profile-field-text'>
								{episode.name} &#65372; {episode.air_date}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
