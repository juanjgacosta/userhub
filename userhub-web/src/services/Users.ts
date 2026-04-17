export interface User {
  id: string
  name: string
  email: string
  company?: string
  avatar?: string
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:4000/users')

  if (!response.ok) {
    throw new Error('Error searching for users.')
  }

  return response.json()
}
