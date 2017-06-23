import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todosActions'
import { VISIBILITY_FILTERS } from '../actions/constants'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return todos
    case VISIBILITY_FILTERS.SHOW_COMPLETE:
      return todos.filter(t => t.complete)
    case VISIBILITY_FILTERS.SHOW_INCOMPLETE:
      return todos.filter(t => !t.complete)
    default:
      return todos
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => dispatch(toggleTodo({ id }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
