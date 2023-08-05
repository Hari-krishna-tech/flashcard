import { API_URL } from "./config";



export function deleteDeck(deckId: string, token: string) {
    fetch(`${API_URL}/decks/${deckId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
 }