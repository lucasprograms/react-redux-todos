import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../stylesheets/App.css'

import AddTodo from '../containers/AddTodo'
import FilterButtons from './FilterButtons'
import VisibleTodos from '../containers/VisibleTodos'
import { addTodo, toggleTodo } from '../actions/todosActions'

const App = ({ todos, addTodoClick, toggleTodoClick }) => (
  <div className='App'>
    <VisibleTodos />
    <AddTodo />
    <FilterButtons />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodoClick: PropTypes.func.isRequired,
  toggleTodoClick: PropTypes.func.isRequired
}

const mapStateToProps = ({ todos }) => ({
  todos
})

const matchDispatchToProps = (dispatch) => ({
  addTodoClick: ({ id, text }) => dispatch(addTodo({ id, text })),
  toggleTodoClick: ({ id }) => dispatch(toggleTodo({ id }))
})

export default connect(mapStateToProps, matchDispatchToProps)(App)
