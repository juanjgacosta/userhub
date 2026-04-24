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
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTc3NzAwMzI4NiwiZXhwIjoxNzc3MDA1MDg2LCJzdWIiOiI3ZDk2MjEwYi00ODIxLTRiNTEtOTQ2My00ZmFlNTAyYTU0MWMifQ.2RKf9h02zQCJc7MM6N2z6ChaBYbXq0s-q3fXonXbWEg',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error creating user')
  }

  return response.json()
}
