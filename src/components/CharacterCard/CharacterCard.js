import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { setLike, removeLike } from '../../store/actions/charactersActions';

import './CharacterCard.css';

function CharacterCard({ id, likes, name, status }) {
    const dispatch = useDispatch();

    const isLiked = useMemo(() => {
        return likes.some(like => like === id);
    }, [ id, likes ]);

    function handleLike(e) {
        e.preventDefault();

        if(isLiked) {
            return dispatch(removeLike(id));
        }

        dispatch(setLike(id));
    }

    return (
        <Link className='link' to={`/profile/${id}`}>
            <ListItem button>
                <IconButton color="secondary" onClick={handleLike}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <ListItemText primary={`Name: ${name}, Status: ${status}`} />
            </ListItem>
        </Link>
    )
}

export default CharacterCard;
