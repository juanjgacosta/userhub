import { UsersRepository } from '../../../modules/users/repositories/implementations/UsersRepository'

export async function createAdminUser() {
  const usersRepository = new UsersRepository()

  const email = 'admin@email.com'

  const adminExists = await usersRepository.findUserByEmail(email)

  if (adminExists) {
    console.log('[Seed] Admin user already exists')
    return adminExists
  }

  const adminUser = await usersRepository.createUser({
    name: 'admin',
    email,
    company: '',
    password: 'admin',
    avatar: '',
    isAdmin: true,
  })

  console.log('[Seed] Admin user created')

  return adminUser
}
