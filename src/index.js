import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './Components/Header/Header';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import ToDoList from './Components/ToDoList/ToDoList';
import FilterBtns from './Components/FilterBtns/FiltetBtns';
import ItemAdd from './Components/ItemAdd/ItemAdd'; 
import './index.css';

class App extends Component  {

    idd = 100;

    state = {
        todos: [
            this.createToDoItem('HTML'),
            this.createToDoItem('CSS'),
            this.createToDoItem('JS'),
        ],
        term: '',
        filter: 'all',
    }

    createToDoItem (text) {
        return {
            text,
            id: this.idd++, 
            important: false,
            done: false
        }
    } 

    deleteItem = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.id === id);
            const newTodos = [
                ...todos.slice(0, idx),
                ...todos.slice(idx + 1)
            ];
            return {
                todos: newTodos
            }
        })
    }
    addItem = (label) => {
        const newItem = this.createToDoItem(label)
        this.setState(({todos}) => {
            const newArr = [
                ...todos,
                newItem
            ];
        return {
            todos: newArr
        }
    })
    }

    toggleProerty(arr, id, propName) {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {
                ...oldItem, 
                [propName]: !oldItem[propName]
            };
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1),
            ];

    }
    onToggleDone = (id) => {
        this.setState(({ todos }) => {
            return {
                todos: this.toggleProerty(todos, id, 'done')
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({ todos }) => {
            return {
                todos: this.toggleProerty(todos, id, 'important')
            }
        })
    }
    search = (todos, term) => {
        if(term.length === 0) {
            return todos
        };
        return todos.filter((item) => {
            return item.text.toLowerCase()
            .indexOf(term.toLowerCase()) > -1;
        });
    };
    onSearchChange = (term) => {
        this.setState({term})
    }
    onFilterChange = (filter) => {
        this.setState({filter})
    }
    filter (items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done': 
                return items.filter((item) => item.done);
            default:
                return items
        }
    }
    render() {
        const {todos, term, filter} = this.state;
        const doneCount = todos.filter((el) => el.done).length;
        const todoCount = todos.length - doneCount;
        const visibleItems = this.filter(
            this.search(todos, term), filter);

        return (    
            <div className="app__container">         
                <Header
                    doneCount={doneCount}
                    todoCount={todoCount}
                />
                <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                <FilterBtns
                    filter={filter}
                    onFilterChange={this.onFilterChange}/>

                <ToDoList
                    todos = {visibleItems}
                    deleted = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone   }
                />
                <ItemAdd 
                    addItem={this.addItem}
                    todos = {this.state.todos}
                />
            </div>
        );
    }
};

ReactDom.render(<App />, document.getElementById('root'));  