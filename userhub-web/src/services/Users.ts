import tokens from '../../tokens.json'
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

export interface UpdateUserDTO {
  id: string
  name: string
  email: string
  company?: string
  password?: string
  avatar?: string
}

function getToken(): string {
  const token = tokens?.token?.trim()

  if (!token) {
    throw new Error('Token is missing in userhub-web/tokens.json')
  }

  return token
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:4000/users')

  if (!response.ok) {
    throw new Error('Error searching for users.')
  }

  return response.json()
}

export async function createUser(data: CreateUserDTO) {
  const token = getToken()
  const response = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error creating user')
  }

  return response.json()
}

export async function updateUser({ id, ...data }: UpdateUserDTO) {
  const token = getToken()
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error updating user')
  }

  return response.json()
}

export async function deleteUser(id: string): Promise<void> {
  const token = getToken()
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error deleting user')
  }

  return response.json()
}
