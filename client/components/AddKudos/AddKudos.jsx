import React, { PropTypes } from 'react'

const AddKudos = React.createClass({
  getInitialState () {
    return {
      inputs: {}
    }
  },
  onChange (event) {
    const { name, value } = event.target
    this.setState({inputs: {[name]: value}})
  },
  render () {
    const users = this.props.users.map(user => {
      return (
        <option value={user.id}>{user.name}</option>
      )
    })
    const onSubmit = event => {
      event.preventDefault()
      this.props.onSubmit(this.state.inputs)
    }
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label>To: </label>
          <select name='to' onChange={this.onChange}>
            {users}
          </select>
          <label>From: </label>
          <select name='from' onChange={this.onChange}>
            {users}
          </select>
          <textarea name='content' onChange={this.onChange} />
          <button type='submit'>Give Kudo</button>
        </form>
      </div>
    )
  }
})

AddKudos.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

export default AddKudos
