import React from 'react';
import { Input } from '@mui/material';

import styles from './Header.css';

function Header() {
	return (
		<div className={styles.header}>
			<div className='container'>
				<Input />
			</div>
		</div>
	);
}

export default Header;
