import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['text ever since the 1500s, love me now, when an unknown printer took a galley','b','c','d','text ever since the 1500s, when an unknown printer took a galley','f','g','htext ever since the 1500s, when an unknown printer took a galley','i','j','k',45,],
      currentPage: 1,
      todosPerPage: 4
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('1 id', event.target.id)
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;
    console.log('2 state', this.state)

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    console.log('3 indexOfLastTodo', indexOfLastTodo)
    console.log('4 indexOfFirstTodo', indexOfFirstTodo)
    console.log('5 currentTodos', currentTodos)

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    console.log('6 pageNumbers', pageNumbers)
    console.log('7 Todos Lenght', todos.length)

    // The page Number determines the logic to display todo
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Todo;
