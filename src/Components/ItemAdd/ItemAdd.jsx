import React, {Component} from 'react';
import './ItemAdd.css';

export default class ItemAdd extends Component {
    render() {
        return (
            <div>
                <button 
                    className='btn btn-outline-secondary'
                    onClick={() => this.props.addItem('sdcsd')}
                    >Add Item
                </button>
            </div>
        )
    }
}