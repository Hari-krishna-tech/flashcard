import { API_URL } from "./config";

export async function createDeck(title: string) {
    const deck= await fetch(`${API_URL}/decks`, {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json',
        }
      },
      
      )
      return await deck.json()
}