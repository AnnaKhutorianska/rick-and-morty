import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './CharacterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard({ id, name, status }) {
    return (
        <Link to={`/profile/${id}`}>
            <ListItem button>
                <IconButton color="secondary">
                    <FavoriteBorderIcon />
                </IconButton>
                <ListItemText primary={`${name} ${status}`} />
            </ListItem>
        </Link>
    )
}

export default CharacterCard;
