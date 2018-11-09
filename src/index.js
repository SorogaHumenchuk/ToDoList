import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './Components/Header/Header';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import ToDoList from './Components/ToDoList/ToDoList';
import ItemAdd from './Components/ItemAdd/ItemAdd'; 


class App extends Component  {

    idd = 100;

    state = {
        todos: [
            this.createToDoItem('Igor'),
            this.createToDoItem('Murli'),
            this.createToDoItem('Hui'),
        ]
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
    render() {
        const {todos} = this.state;
        const doneCount = todos.filter((el) => el.done).length;
        const todoCount = todos.length - doneCount;
        return (    
            <div>         
                <Header
                    doneCount={doneCount}
                    todoCount={todoCount}
                />
                <SearchPanel/>
                <ToDoList
                    todos = {todos}
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