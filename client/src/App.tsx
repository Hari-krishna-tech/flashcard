import React, { useEffect, useState } from 'react'
import './App.css'

type TDeck = {
  title: string,
  _id: string
}

function App() {
  const [title, setTitle] = useState<string>('')
  const [decks, setDecks] = useState<TDeck[]>([])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('http://localhost:5001/decks', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      }
    },
    
    )
    setTitle('')
  }
  useEffect(() => {
    fetch('http://localhost:5001/decks',{method: 'GET', headers: {'content-type': 'application/json'}})
      .then(res => res.json())
      .then(data => setDecks(data))
  }, []);

  return (
    <>
      <div className="App">
        <ul className="decks">
          {decks.map((deck, i) => {
            return (
              <li key={deck._id} className="deck">
                <h2>{deck.title}</h2>
              </li>
            )
          }
          )}

        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor='deck-title'>Deck Title</label>

          <input type="text" id='deck-title' value={title}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value)
            }}/>

            <button type='submit'>Create Deck</button>
        </form>
      </div>
    </>
  )
}

export default App
