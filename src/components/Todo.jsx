import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ complete, id, text, onClick }) =>
  <li key={id} onClick={onClick} className={`todo ${complete ? 'todo--complete' : 'todo--incomplete'}`}>{text}</li>

Todo.propTypes = {
  complete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
