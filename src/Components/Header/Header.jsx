import React from 'react'

const Header = ({todoCount, doneCount}) => {
    return (
        <header>
            <h2>My ToDo List</h2>
            <span>{todoCount} more to do, {doneCount} done</span>
        </header>
    )
}

export default Header;