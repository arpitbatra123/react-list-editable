[![Netlify Status](https://api.netlify.com/api/v1/badges/c17e1d8c-c9bf-470e-98d0-5253ed2d7cf6/deploy-status)](https://app.netlify.com/sites/react-list-editable/deploys)

# react-list-editable

A [React](https://reactjs.org) component to render editable lists

## <u>Installation and Usage</u>

The easiest way to use react-list-editable is to install it from npm and build it into your app with Webpack.

```shell
npm i react-list-editable
```

The use it in your app:

Import this component in your app using :

```js
import EditableList from 'react-list-editable';
```

Don't forget to import the styles as well: ⚠️

```js
import 'react-list-editable/lib/react-list-editable.css';
```

See below for an extended example: 

```js
import React, { Component } from 'react';

import EditableList from 'react-list-editable';
import 'react-list-editable/lib/react-list-editable.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['🥳 Partying', '👩🏻‍🎨 Painting', '🛌🏻 Sleeping']
    };
  }
  
  onListChange(newList) {
    this.setState({
      list: newList
    });
  }
  
  render() {
    return (
      <div className='app-container'>
        <EditableList
          list={this.state.list}
          onListChange={this.onListChange.bind(this)}
          placeholder='Enter a value'
        />
      </div>
    );
  }
}

```



## <u>Props</u>

You have to pass the following props to this component:

- `list` -  The list of elements to edit. This is a required prop, otherwise what will you edit in the editable list ? 🤷🏻‍♂️
- `onListChange` - A function which, on any updation of the list , will recieve the updated list as an argument.
- `placeholder` - The placeholder to show in the field for adding a new element to a list.

## <u>Demo</u>

You can see this component in action [here](https://react-list-editable.netlify.com/). The code for this demo can be found in the `demo` folder of this repository.

## <u>Codesandbox</u>

[![Edit react-list-editable-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-list-editable-demo-lk5fl?fontsize=14&hidenavigation=1&theme=dark)

## <u>Thanks</u>

- Contributions are welcome 
- Questions? Ask away [@arpitbatra123](https://twitter.com/arpitbatra123) on twitter.
- The component is built using webpack, the demo using parcel and is hosted on Netlify. A big :heart: to these projects
