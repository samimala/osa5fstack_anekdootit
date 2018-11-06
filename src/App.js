import React from 'react';

const actionFor = {
  addVote(id) {
    return {
      type: 'VOTE',
      id: id
    }
  }   
}

class App extends React.Component {

  vote = (id) => () => {
    this.props.store.dispatch(
      actionFor.addVote(id)
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
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App