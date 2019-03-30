import React, {Component} from 'react';
import './ItemAdd.css';

export default class ItemAdd extends Component {
    state = {
        label: '',
    };
    onLableChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: '',
        });
    };
    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text" 
                    onChange={this.onLableChange}
                    value={this.state.label}
                    placeholder="What needs to be done"/>
                <button 
                    className='btn btn-outline-secondary'
                    >Add Item
                </button>
            </form>
        )
    }
}