import { API_URL } from "./config"



export type TDeck = {
    title: string,
    cards: string[],
    _id: string
  }

  export type User = {
    email: string,
    password: string,
    decks: TDeck[],
  }

export async function getDecks(token:string): Promise<TDeck[]> {
    if(!token) {
        return [];
    }
    const data= await fetch(`${API_URL}/decks`,{method: 'GET', headers: {'content-type': 'application/json',
    'Authorization': `Bearer ${token}`}})
    const decks =  await data.json()
    console.log(decks);
    return decks;
}