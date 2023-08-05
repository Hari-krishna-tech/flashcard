import { API_URL } from "./config";
import { TDeck } from "./getDecks";

export async function createCard(deckId: string, text: string, token: string):Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return await response.json() 
}