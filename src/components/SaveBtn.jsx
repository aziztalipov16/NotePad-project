import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ({ addItem, text, title, handleClear }) {
	return (
		<>
			<Button
				onClick={() => {
					addItem(text, title);
					handleClear('');
				}}>
				Добавить запись
			</Button>
		</>
	);
}
