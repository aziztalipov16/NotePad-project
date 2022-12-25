import React from 'react';
import { Button } from 'react-bootstrap';
export default function UpdateBtn({ setEditId }) {
	return <Button onClick={() => setEditId(null)}>Изменить</Button>;
}
