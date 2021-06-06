import User from '../models/user';
import UserService from './userService'
import UserRepository from '../repositorys/userRepository'
import CoffeeNotFound from '../utils/error'
class UserServiceImpl implements UserService {

    private user: UserRepository

    constructor() {
        this.user = new UserRepository
    }

    public async listUsers(): Promise<User[]> {
        try {
            const list: User[] = await this.user.listUsers()
            throw new Error('todo se derrumbo')
            return list
        } catch (err) {
            throw err
        }
    }
}
export default UserServiceImpl
