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
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTc3NzI0MTMwNCwiZXhwIjoxNzc3MjQzMTA0LCJzdWIiOiJhYjU0ZGNiMS01NTJjLTQxZTctYjdmYy0xMDcxMGY1YTQ1ZGIifQ.xSHPL5sN_6uJ9gq3Ostm_CQEIVJ12Ftk-HsxpjF0kZM',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error creating user')
  }

  return response.json()
}

export async function updateUser({ id, ...data }: UpdateUserDTO) {
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTc3NzI0MTMwNCwiZXhwIjoxNzc3MjQzMTA0LCJzdWIiOiJhYjU0ZGNiMS01NTJjLTQxZTctYjdmYy0xMDcxMGY1YTQ1ZGIifQ.xSHPL5sN_6uJ9gq3Ostm_CQEIVJ12Ftk-HsxpjF0kZM',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error updating user')
  }

  return response.json()
}
