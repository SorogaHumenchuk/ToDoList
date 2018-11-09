import React from 'react'
import FilterBtns from '../FilterBtns/FiltetBtns';


const SearchPanel = () => {
    return (
        <div>
            <input type="text" placeholder='enter ...'/>
            <FilterBtns/>
        </div>
    )
}

export default SearchPanel;