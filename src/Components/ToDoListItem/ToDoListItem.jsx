import React, {Component} from 'react'
import './ToDoListItem.css';
import Trash from './trash.png';
import Important from './important.png';


class ToDoListItem extends Component {

    render() {
        const {text, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
        console.log(text)
        let className = 'todo-list-item';
        if (done) {
            className += ' done';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
        return (
            <div className="item__container">
                <p 
                    style={style}
                    className={className}
                    onClick={onToggleDone}
                    >
                    {text}
                </p>
                <div className="item__btns">
                    <button
                        onClick={onDeleted}>
                        <img src={Trash} alt="delete"/>
                        </button>
                    <button
                        onClick={onToggleImportant}>
                        <img src={Important} alt="important"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default ToDoListItem;