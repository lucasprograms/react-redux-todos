import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul class="todo-list">
    {todos.map(({ complete, id, text }) =>
      <Todo complete={complete} text={text} id={id} onClick={() => onTodoClick(id)} />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
