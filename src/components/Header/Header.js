import React, { useEffect, useState } from 'react';
import { 
	Button, 
	Dialog, 
	DialogContent, 
	DialogTitle, 
	IconButton, 
	List, 
	ListItemText,
	} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../Search/Search';
import { getFavoriteCharacters } from '../../store/actions/charactersActions';

import './Header.css';

function Header() {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const likes = useSelector(state => state.charactersReducer.likes);
	const favoriteCharacters = useSelector(state => state.charactersReducer?.favoriteCharacters);

	useEffect(() => {
		if (show) dispatch(getFavoriteCharacters(likes))
	}, [show])

	function handleClick() {
		setShow(prev => !prev)
	}

	return (
		<div className='header-bgn'>
			<div className='container header'>
				<Search />
				<div>
					<Button
						onClick={handleClick}
						variant='outlined'
						color='secondary'
					>
						Favorite characters
					</Button>
					<Dialog open={show}>
						<DialogContent style={{ position: 'relative' }}>
							<DialogTitle>Favorite characters</DialogTitle>
							<IconButton
								style={{ position: 'absolute', top: '0', right: '0' }}
								onClick={() => setShow(false)}
							>
								<CloseIcon />
							</IconButton>
							<List>
								{favoriteCharacters?.map(favoriteCharacter => (
									<List key={favoriteCharacter.id}>
										<ListItemText primary={favoriteCharacter.name} />
									</List>
								))}
							</List>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
}

export default Header;
