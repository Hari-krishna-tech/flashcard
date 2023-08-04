import React, { useEffect, useState } from 'react'
import './App.css'
import {Link} from "react-router-dom"
import { deleteDeck } from './api/deleteDeck';
import { getDecks } from './api/getDecks';
import { createDeck } from './api/createDeck';

type TDeck = {
  title: string,
  _id: string
}

function App() {
  const [title, setTitle] = useState<string>('')
  const [decks, setDecks] = useState<TDeck[]>([])

  const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const newDeck = await createDeck(title);
    setDecks([...decks, newDeck])
    setTitle('')
  }
  const handleDeleteDeck = (id:string) => {
    deleteDeck(id);
    setDecks(decks.filter(deck => deck._id !== id))
  }
  useEffect(() => {
    async function getDeck() {
      const decks = await getDecks();
      setDecks(decks);
    }

    getDeck();
  }, []);

  return (
    <>
      <div className="App">
        <ul className="decks">
          {decks.map((deck, i) => {
            return (
              <li key={deck._id} className="deck">
                <button className="delete" onClick={()=> handleDeleteDeck(deck._id)}>X</button>
               
                <Link to={`/decks/${deck._id}`}> <p>{deck.title}</p></Link>
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
