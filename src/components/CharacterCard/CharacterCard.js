import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from '@mui/material'

import './CharacterCard.css';

function CharacterCard({ name, status }) {
    // return(
    //     <div className='character-card'>
    //         <span>{name}</span>
    //         <span>{status}</span>
    //     </div>
    // );

    return (
        <ListItem button>
            {/* <ListItemIcon>
                <StarIcon />
            </ListItemIcon> */}
            <ListItemText primary={`${name} ${status}`} />
        </ListItem>
    )
}

export default CharacterCard;
