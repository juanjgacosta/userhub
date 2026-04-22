export interface User {
  id: string
  name: string
  email: string
  company?: string
  avatar?: string
}
export interface CreateUserDTO {
  name: string
  email: string
  company?: string
  password: string
  avatar?: string
  isAdmin?: boolean
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:4000/users')

  if (!response.ok) {
    throw new Error('Error searching for users.')
  }

  return response.json()
}

export async function createUser(data: CreateUserDTO) {
  const response = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Bearer': ''
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error creating user')
  }

  return response.json()
}
