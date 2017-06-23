import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addTodo } from '../actions/todosActions'

class AddTodo extends Component {
  constructor () {
    super()

    this.state = {
      inputText: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.updateTodoName = this.updateTodoName.bind(this)
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  onSubmit (evt) {
    evt.preventDefault()

    this.props.dispatch(addTodo({
      id: uuid.v1(),
      text: this.state.inputText
    }))

    this.setState({
      inputText: ''
    })
  }

  updateTodoName (evt) {
    this.setState({
      inputText: evt.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.updateTodoName}
            value={this.state.inputText}
          />
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
