import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export default function Note({ editId, el, setEditId, deleteNote, index }) {
	return (
		<ListGroup.Item
			className=" note"
			as="li"
			active={editId === el.id ? true : false}
			onClick={(e) => setEditId(el.id, e)}>
			<div>
				<p>
					{' '}
					<b> {el.title}</b>
				</p>
				<p>Текст: {el.text}</p>
			</div>
			<Button variant="danger" size="sm" onClick={() => deleteNote(index)}>
				Удалить
			</Button>
		</ListGroup.Item>
	);
}
