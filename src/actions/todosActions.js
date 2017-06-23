import { ADD_TODO, TOGGLE_TODO } from './constants'

export const addTodo = ({id, text}) => ({
  type: ADD_TODO,
  text,
  id
})

export const toggleTodo = ({id, text}) => ({
  type: TOGGLE_TODO,
  id
})
