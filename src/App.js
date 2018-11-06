import React from 'react';

const actionFor = {
  addVote(id) {
    return {
      type: 'VOTE',
      id: id
    }
  },
  newAnecdote(anecdote) {
    return {
      type: 'NEWANECDOTE',
      content: anecdote
    }
  }   
   
}

class App extends React.Component {

  vote = (id) => () => {
    this.props.store.dispatch(
      actionFor.addVote(id)
    )
  }

  addNew = (event) => {
    event.preventDefault()
    this.props.store.dispatch(
      actionFor.newAnecdote(event.target.anecdote.value)
    )
  }
  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addNew}>
          <div><input name="anecdote" /></div>
          <button type="submit">Add new</button>
        </form>
      </div>
    )
  }
}

export default App