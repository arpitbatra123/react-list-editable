import React, { useState } from 'react';
import EditableList from '../src/index.jsx';
import '../src/react-list-editable.scss';
import './demo.scss';

const App = () => {
	const [list, setList] = useState([
		'🥳 Partying',
		'👩🏻‍🎨 Painting',
		'🛌🏻 Sleeping',
	]);

	const onListChange = (newList) => {
		setList(newList);
		console.log('List updated:', newList);
	};

	return (
		<div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
			<h1>Editable List Demo</h1>
			<EditableList
				list={list}
				onListChange={onListChange}
				placeholder="Enter a value"
			/>
			<div style={{ marginTop: '20px' }}>
				<h2>Current List:</h2>
				<ul>
					{list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
