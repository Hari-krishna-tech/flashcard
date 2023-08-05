import { API_URL } from "./config"

import { TDeck } from "./getDecks"



export async function getDeck(deckId: string, token: string): Promise<TDeck> {
    if(!token) {
        return {} as TDeck;
    }
    const data= await fetch(`${API_URL}/decks/${deckId}`,{method: 'GET', headers: {'content-type': 'application/json', "Authorization": `Bearer ${token}`}})
    return await data.json()
      
}