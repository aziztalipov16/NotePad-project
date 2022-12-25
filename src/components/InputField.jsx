import React from 'react';
import { Form } from 'react-bootstrap';

export default function InputField({
	getVal,
	editId,
	setF,
	update,
	data,
	type,
	as,
	placeholder,
}) {
	return (
		<>
			<Form.Group className={`mb-3`}>
				<Form.Control
					id="titleInp"
					placeholder={placeholder}
					as={as}
					value={!editId ? data : getVal(editId, type)}
					onChange={
						!editId
							? (e) => {
									setF(e.target.value);
							  }
							: (e) => update(editId, type, e)
					}
				/>
			</Form.Group>
		</>
	);
}
