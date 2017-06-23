import { ADD_TODO, TOGGLE_TODO } from '../../actions/constants'
import todos from '../../reducers/todosReducer'

describe('todos reducer', () => {
  it('adds a todo', () => {
    const stateBefore = [{
      text: 'a todo :(',
      id: 137,
      complete: false
    }]
    const action = {
      type: ADD_TODO,
      text: 'test',
      id: 300
    }
    const stateAfter = [{
      text: 'a todo :(',
      id: 137,
      complete: false
    }, {
      text: 'test',
      id: 300,
      complete: false
    }]

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('toggles a todo', () => {
    const stateBefore = [{
      text: 'a todo :(',
      id: 137,
      complete: false
    }, {
      text: 'another todo :(',
      id: 139,
      complete: true
    }]
    const action = {
      type: TOGGLE_TODO,
      id: 139
    }
    const stateAfter = [{
      text: 'a todo :(',
      id: 137,
      complete: false
    }, {
      text: 'another todo :(',
      id: 139,
      complete: false
    }]

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
