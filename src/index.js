import React, {Component} from 'react';
import PropTypes from 'prop-types';
import close from '../assets/close.svg'

import './react-list-editable.scss'

class EditableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            newInput: ''
        };
    }

    handleListItemChange = (event, index) => {
        const newList = [...this.state.list];
        newList[index] = event.target.value;
        this.setState(
            {
                list: newList
            },
            () => {
                this.props.onListChange(this.state.list);
            }
        );
    };

    deleteItem = (index) => {
        const newList = [...this.state.list];
        newList.splice(index, 1);
        this.setState(
            {
                list: newList
            },
            () => {
                this.props.onListChange(this.state.list);
            }
        );
    };

    handleDeleteButtonClick = (index) => {
        return (event) => {
            // In order for the form not to be submitted
            event.preventDefault();
            this.deleteItem(index);
        }
    };

    getList = () => {
        return this.state.list.map((elem, index) => {
            return (
                <li className='input-field-container' key={index}>
                    <input
                        className='input-field'
                        type='text'
                        value={elem}
                        placeholder={this.props.placeholder}
                        onChange={e => {
                            this.handleListItemChange(e, index);
                        }}
                    />
                    <button
                        className='delete-btn'
                        onClick={this.handleDeleteButtonClick(index)}>
                        <img
                            className='delete-img'
                            src={close}
                            alt='Delete'/>
                    </button>
                </li>
            );
        });
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onKeyUp = (event) => {
        if (event.key === 'Enter' && event.target.value.trim(' ').length > 0) {
            const newList = [...this.state.list];
            this.setState(
                {
                    list: newList.concat(event.target.value),
                    newInput: ''
                },
                () => {
                    this.props.onListChange(this.state.list);
                }
            );
        }
    };

    render() {
        return (
            <div className='react-list-editable'>
                <ul>{this.getList()} </ul>
                <input
                    name='newInput'
                    className='input-field new-input-field'
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    placeholder='Press Enter'
                    value={this.state.newInput}/>
            </div>
        );
    }
}

EditableList.propTypes = {
    list: PropTypes.array.isRequired,
    showBullets: PropTypes.bool,
    onListChange: PropTypes.func.isRequired
};

EditableList.defaultProps = {
    list: [],
    showBullets: true
};

export default EditableList;
