import { API_URL } from "./config";



export async function deleteCard(deckId: string, index: number) {
    const deck = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return await deck.json();
 }