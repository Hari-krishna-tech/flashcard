import React, { useEffect, useState } from 'react'
import './Deck.css'
import { getDeck } from './api/getDeck';
import { useParams } from 'react-router-dom';
import { createCard } from './api/createCard';
import {TDeck} from "./api/getDecks"
import {deleteCard} from "./api/deleteCard";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Deck() {
 const [deck, setDeck] = useState<TDeck | undefined>()
 const [text, setText] = useState<string>('')
 const [token, setToken] = useState<string>('')
 const navigate = useNavigate();
 let {deckId} = useParams<{deckId:string}>()
  const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const newDeck = await createCard(deckId!, text, token);
    setDeck(newDeck)
    setText('')
  }
  const handleDeleteCard = async (deckId:string, index: number) => {
    const deck= await deleteCard(deckId, index, token);
    setDeck(deck)
    
  }
  useEffect(() => {
    async function fetchDeck() {
      const cookie = await Cookies.get('token');
      if(cookie === undefined) {
        navigate('/login');
      }
      setToken( cookie|| '');
     // console.log(deckId, cookie);
      const deck = await getDeck(deckId!, token!);
      console.log(deck);
      setDeck(deck);
    }

    fetchDeck();
  }, [token]);

  return (
    <>
      <div className="Deck">
        <ul className="cards">
          {deck && deck.cards && deck.cards.map((card, i) => {
            return (
              <li key={deck._id + i} className="card">
                <button className="delete" onClick={()=> handleDeleteCard(deck._id, i)}>X</button>
               <p>{card}</p>
              </li>
            )
          }
          )}

        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor='card-text'>Card Text</label>

          <input type="text" id='card-text' value={text}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value)
            }}/>

            <button type='submit'>Create Card</button>
        </form>
      </div>
    </>
  )

}