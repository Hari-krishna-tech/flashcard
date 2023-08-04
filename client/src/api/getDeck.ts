import { API_URL } from "./config"

import { TDeck } from "./getDecks"



export async function getDeck(deckId: string): Promise<TDeck> {
    const data= await fetch(`${API_URL}/decks/${deckId}`,{method: 'GET', headers: {'content-type': 'application/json'}})
    return await data.json()
      
}