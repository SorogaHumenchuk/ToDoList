import React from 'react'
import './Header.css';
const Header = ({todoCount, doneCount}) => {
    return (
        <header className="header">
            <h2>My ToDo List</h2>
            <span>{todoCount} more to do, {doneCount} done</span>
        </header>
    )
}

export default Header;