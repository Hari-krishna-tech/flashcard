import { API_URL } from "./config";
// import { TDeck } from "./getDecks";


export async function createUser(email: string, password: string):Promise<{token: string}> {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json() 
}