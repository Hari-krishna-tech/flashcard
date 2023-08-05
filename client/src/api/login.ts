import { API_URL } from "./config";

export async function login(email:string, password:string) {
    const user = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        }
    },
    )
    return await user.json()
}