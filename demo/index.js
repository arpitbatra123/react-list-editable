import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditableList from 'react-list-editable';

import './style.scss';
import 'react-list-editable/lib/react-list-editable.css';

class App extends Component {
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

  getCurrentList() {
    if (this.state.list.length === 0) {
      return <span>List is empty 😞</span>;
    }

    return this.state.list.map((item, index) => {
      return (
        <li key={index}>
          <span className='list-item' title={item}>
            {item}
          </span>
        </li>
      );
    });
  }
  render() {
    return (
      <div className='app-container'>
        <div className='demo-title'>Editable List Demo</div>
        <div className='demo-container'>
          <div className='editable-list-container'>
            <div className='section-title'>Component</div>
            <EditableList
              list={this.state.list}
              onListChange={this.onListChange.bind(this)}
              placeholder='Enter a value'
            />
          </div>
          <div className='current-list-container'>
            <div className='section-title'>Data</div>
            <ul className='current-list'>{this.getCurrentList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
