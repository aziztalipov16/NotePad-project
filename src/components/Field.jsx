import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Row, Col, Form } from 'react-bootstrap';
import SaveBtn from './SaveBtn';
import UpdateBtn from './UpdateBtn';
import Notes from './Notes';
import FormForField from './FormForField';

export default function Field() {
	const [notes, setNotes] = useState([]);
	const [text, setText] = useState('');
	const [editId, setEditId] = useState(null);
	const [title, setTitle] = useState('');
	const [searchText, setSearchText] = useState('');

	function handleClear() {
		setTitle('');
	}

	function someFunc(id) {
		setEditId(id);
		document.getElementById('titleInp').focus();
	}

	function deleteNote(index) {
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}

	function addItem(text, title) {
		let res = { text: text, title: title, id: nanoid() };
		notes.length == 0 ? setNotes([res]) : setNotes([...notes, res]);
		setText('');
	}

	function update(id, key, e) {
		setNotes(
			notes.map((el) => {
				return el.id === id ? { ...el, [key]: e.target.value } : el;
			})
		);
	}

	function getVal(id, key) {
		return notes.reduce((res, el) => (el.id === id ? el[key] : res), '');
	}

	const filteredNotes = notes.filter((el) => {
		return el.title.toLowerCase().includes(searchText.toLowerCase());
	});

	return (
		<>
			<Row>
				<Col xs={5}>
					<FormForField
						getVal={getVal}
						editId={editId}
						update={update}
						setTitle={setTitle}
						title={title}
						setText={setText}
						text={text}
					/>
					{!editId ? (
						<SaveBtn
							addItem={addItem}
							text={text}
							title={title}
							handleClear={handleClear}
						/>
					) : (
						<UpdateBtn setEditId={setEditId} />
					)}
				</Col>
				<Col xs={7}>
					<Form>
						<Form.Group>
							<Form.Control
								className="mb-3"
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}></Form.Control>
						</Form.Group>
					</Form>
					<Notes
						editId={editId}
						setEditId={someFunc}
						notes={filteredNotes}
						deleteNote={deleteNote}
					/>
				</Col>
			</Row>
		</>
	);
}
