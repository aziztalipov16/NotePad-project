import React from 'react';
import InputField from './InputField';
import { Form } from 'react-bootstrap';

export default function FormForField({
	getVal,
	editId,
	update,
	setTitle,
	title,
	setText,
	text,
}) {
	return (
		<Form>
			<InputField
				getVal={getVal}
				editId={editId}
				setF={setTitle}
				update={update}
				data={title}
				type="title"
				placeholder="Введите Название записи"
			/>
			<InputField
				getVal={getVal}
				editId={editId}
				setF={setText}
				update={update}
				data={text}
				type="text"
				as="textarea"
				placeholder="Введите текст записи"
			/>
		</Form>
	);
}
