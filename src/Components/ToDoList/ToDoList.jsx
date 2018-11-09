import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const ToDoList = ({todos, deleted, onToggleImportant, onToggleDone}) => {

    
    const el = todos.map((el) => {
        const {id, ...itsmsProps} = el
        return (
            <li key={id} className = 'list-group-item'>
                <ToDoListItem {...itsmsProps}
                onDeleted={() => deleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    })
    
    return (
        <ul> 
            {el}
        </ul>
    )
}

export default ToDoList;