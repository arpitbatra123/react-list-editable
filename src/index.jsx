// This is the source code for the EditableList component.
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import close from './assets/close.svg';
import './react-list-editable.scss';

const EditableList = ({ list = [], onListChange, placeholder }) => {
	const [localList, setList] = useState(list);
	const [newInput, setNewInput] = useState('');

	const handleListItemChange = (event, index) => {
		const newList = [...localList];
		newList[index] = event.target.value;
		setList(newList);
		onListChange(newList);
	};

	const deleteItem = (index) => {
		const newList = [...localList];
		newList.splice(index, 1);
		setList(newList);
		onListChange(newList);
	};

	const handleDeleteButtonClick = (index) => (event) => {
		event.preventDefault();
		deleteItem(index);
	};

	const handleNewInputChange = (event) => {
		setNewInput(event.target.value);
	};

	const handleKeyUp = (event) => {
		if (event.key === 'Enter' && event.target.value.trim().length > 0) {
			const newList = [...localList, event.target.value];
			setList(newList);
			setNewInput('');
			onListChange(newList);
		}
	};

	return (
		<div className="react-list-editable">
			<ul>
				{localList.map((elem, index) => (
					<li className="input-field-container" key={index}>
						<input
							className="input-field"
							type="text"
							value={elem}
							placeholder={placeholder}
							onChange={(e) => handleListItemChange(e, index)}
						/>
						<button
							className="delete-btn"
							onClick={handleDeleteButtonClick(index)}
						>
							<img className="delete-img" src={close} alt="Delete" />
						</button>
					</li>
				))}
			</ul>
			<input
				className="input-field new-input-field"
				onChange={handleNewInputChange}
				onKeyUp={handleKeyUp}
				placeholder={placeholder}
				value={newInput}
			/>
		</div>
	);
};

EditableList.propTypes = {
	list: PropTypes.array,
	onListChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
};

export default EditableList;
