import { API_URL } from "./config"


type TDeck = {
    title: string,
    _id: string
  }

export async function getDecks(): Promise<TDeck[]> {
    const data= await fetch(`${API_URL}/decks`,{method: 'GET', headers: {'content-type': 'application/json'}})
    return await data.json()
      
}