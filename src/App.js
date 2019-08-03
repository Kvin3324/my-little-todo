import React from 'react';
import './App.css';
import todosData from './todosData'

import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import Footer from "./components/Footer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        <Header />
        {todoItems}
        <Footer />
      </div>
    );
  }

}

export default App;
