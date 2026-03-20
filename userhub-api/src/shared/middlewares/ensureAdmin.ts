import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository'

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body

  if (!email || !password) {
    throw new AppError('email/password required', 400)
  }

  const usersRepository = new UsersRepository()
  const user = await usersRepository.findUserByEmail(email)

  if (!user.isAdmin) {
    throw new AppError('User is not Admin')
  }

  next()
}
