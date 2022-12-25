import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Note from './Note';
export default function Notes({ notes, editId, setEditId, deleteNote }) {
	return (
		<>
			<ListGroup>
				{notes.length == 0 && 'Не Найдено!'}
				{notes.map((el, index) => {
					return (
						<Note
							index={index}
							key={el.id}
							editId={editId}
							setEditId={setEditId}
							el={el}
							deleteNote={deleteNote}
						/>
					);
				})}
			</ListGroup>
		</>
	);
}
