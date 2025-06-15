import { useState } from 'react';
import List from 'react-list-editable';
import 'react-list-editable/style';

function App() {
	const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

	return (
		<div>
			<h1>React List Editable Demo</h1>
			<List
				list={items}
				onListChange={setItems}
				renderItem={(item) => <span>{item.content}</span>}
			/>
			{items.map((item, idx) => (
				<div key={idx}>{item}</div>
			))}
		</div>
	);
}

export default App;
