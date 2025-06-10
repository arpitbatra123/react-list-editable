# React List Editable

A simple, editable list component for React.

## Installation

Install the package from npm:

```bash
npm install react-list-editable
```

## Usage

Import the component and its styles into your application.

```jsx
import React, { useState } from 'react';
import EditableList from 'react-list-editable';
import 'react-list-editable/dist/style.css';

const MyComponent = () => {
	const [items, setItems] = useState(['🍎 Apple', '🍌 Banana', '🥕 Carrot']);

	return (
		<EditableList
			list={items}
			onListChange={setItems}
			placeholder="Add a new item"
		/>
	);
};

export default MyComponent;
```

## Props

| Prop           | Type     | Default         | Description                                                                  |
| -------------- | -------- | --------------- | ---------------------------------------------------------------------------- |
| `list`         | `array`  | `[]`            | The array of strings to display in the list.                                 |
| `onListChange` | `func`   | **Required**    | A callback function that receives the updated list whenever a change occurs. |
| `placeholder`  | `string` | `'Press Enter'` | The placeholder text for an empty input field.                               |

## Development

To run the demo application locally:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`

This will open the demo page in your browser.

## Building the Library

To build the library for production, run:

```bash
npm run build
```

The output will be generated in the `dist` directory.

## License

MIT
